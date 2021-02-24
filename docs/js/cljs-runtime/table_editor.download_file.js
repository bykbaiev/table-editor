goog.provide('table_editor.download_file');
table_editor.download_file.map_content = (function table_editor$download_file$map_content(rows){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43393_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__43393_SHARP_);
}),rows));
});
table_editor.download_file.download_csv = (function table_editor$download_file$download_csv(data,file_name){
var blob = (new Blob(["\uFEFF",table_editor.download_file.map_content(data)],({"type": "text/csv;charset=utf-8"})));
var link = document.createElement("a");
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data,file_name], 0));

(link.href = URL.createObjectURL(blob));

link.setAttribute("download",clojure.string.replace(file_name,/.csv/,"(edited).csv"));

document.body.appendChild(link);

link.click();

return document.body.removeChild(link);
});
table_editor.download_file.download_button = (function table_editor$download_file$download_button(){
var map__43394 = cljs.core.deref(table_editor.state.state);
var map__43394__$1 = (((((!((map__43394 == null))))?(((((map__43394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43394):map__43394);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43394__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var file_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43394__$1,new cljs.core.Keyword(null,"file-name","file-name",-1654217259));
var load_file = (function (e){
return table_editor.download_file.download_csv(data,file_name);
});
if(cljs.core.truth_(data)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),load_file], null),"Download file"], null);
} else {
return null;
}
});

//# sourceMappingURL=table_editor.download_file.js.map
