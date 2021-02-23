goog.provide('table_editor.file_loader');
table_editor.file_loader.file_loader = (function table_editor$file_loader$file_loader(state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var file = cljs.core.first(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(e.target.files));
var file_reader = (new FileReader());
(file_reader.onload = (function (e__$1){
var res = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.labs.format.csv.parse(e__$1.target.result));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([res], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword(null,"data","data",-232669377),(function (p1__39462_SHARP_){
return cljs.core.constantly(res)(p1__39462_SHARP_);
}));
}));

return file_reader.readAsText(file);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"asdf"], null)], null);
});

//# sourceMappingURL=table_editor.file_loader.js.map
