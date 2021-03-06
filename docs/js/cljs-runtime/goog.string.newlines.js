goog.provide("goog.string.newlines");
goog.provide("goog.string.newlines.Line");
goog.require("goog.array");
goog.string.newlines.splitLines = function(str, opt_keepNewlines) {
  var lines = goog.string.newlines.getLines(str);
  return goog.array.map(lines, function(line) {
    return opt_keepNewlines ? line.getFullLine() : line.getContent();
  });
};
goog.string.newlines.Line = function(string, startLineIndex, endContentIndex, endLineIndex) {
  this.string = string;
  this.startLineIndex = startLineIndex;
  this.endContentIndex = endContentIndex;
  this.endLineIndex = endLineIndex;
};
goog.string.newlines.Line.prototype.getContent = function() {
  return this.string.substring(this.startLineIndex, this.endContentIndex);
};
goog.string.newlines.Line.prototype.getFullLine = function() {
  return this.string.substring(this.startLineIndex, this.endLineIndex);
};
goog.string.newlines.Line.prototype.getNewline = function() {
  return this.string.substring(this.endContentIndex, this.endLineIndex);
};
goog.string.newlines.getLines = function(str) {
  var re = RegExp("\r\n|\r|\n", "g");
  var sliceIndex = 0;
  var result;
  var lines = [];
  while (result = re.exec(str)) {
    var line = new goog.string.newlines.Line(str, sliceIndex, result.index, result.index + result[0].length);
    lines.push(line);
    sliceIndex = re.lastIndex;
  }
  if (sliceIndex < str.length) {
    var line = new goog.string.newlines.Line(str, sliceIndex, str.length, str.length);
    lines.push(line);
  }
  return lines;
};

//# sourceMappingURL=goog.string.newlines.js.map
