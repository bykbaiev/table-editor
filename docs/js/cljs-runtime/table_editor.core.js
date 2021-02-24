goog.provide('table_editor.core');
table_editor.core.message = (function table_editor$core$message(){
var map__43396 = cljs.core.deref(table_editor.state.state);
var map__43396__$1 = (((((!((map__43396 == null))))?(((((map__43396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43396):map__43396);
var file_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43396__$1,new cljs.core.Keyword(null,"file-name","file-name",-1654217259));
var err_msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43396__$1,new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.status-msg","div.status-msg",1234343202),(cljs.core.truth_(err_msg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.status-error","div.status-error",1021942282),err_msg], null):null),(cljs.core.truth_((((err_msg == null))?file_name:false))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.status-success","div.status-success",820595218),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic("File ",file_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" is successfully loaded"], 0))], null):null)], null);
});
table_editor.core.home_page = (function table_editor$core$home_page(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Table editor"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [table_editor.file_loader.file_loader], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [table_editor.core.message], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [table_editor.download_file.download_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [table_editor.table.table], null)], null);
});
table_editor.core.mount_root = (function table_editor$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [table_editor.core.home_page], null),document.getElementById("app"));
});
table_editor.core.init_BANG_ = (function table_editor$core$init_BANG_(){
return table_editor.core.mount_root();
});
goog.exportSymbol('table_editor.core.init_BANG_', table_editor.core.init_BANG_);

//# sourceMappingURL=table_editor.core.js.map
