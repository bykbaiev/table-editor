goog.provide('table_editor.core');
if((typeof table_editor !== 'undefined') && (typeof table_editor.core !== 'undefined') && (typeof table_editor.core.state !== 'undefined')){
} else {
table_editor.core.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file-name","file-name",-1654217259),null,new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null));
}
table_editor.core.home_page = (function table_editor$core$home_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to Reagent"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [table_editor.file_loader.file_loader,table_editor.core.state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [table_editor.table.table,table_editor.core.state], null)], null);
});
table_editor.core.mount_root = (function table_editor$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [table_editor.core.home_page], null),document.getElementById("app"));
});
table_editor.core.init_BANG_ = (function table_editor$core$init_BANG_(){
return table_editor.core.mount_root();
});
goog.exportSymbol('table_editor.core.init_BANG_', table_editor.core.init_BANG_);

//# sourceMappingURL=table_editor.core.js.map
