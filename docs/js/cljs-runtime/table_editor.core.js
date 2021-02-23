goog.provide('table_editor.core');
table_editor.core.home_page = (function table_editor$core$home_page(){
var file_name = new cljs.core.Keyword(null,"file-name","file-name",-1654217259).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(table_editor.state.state));
var content = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(table_editor.state.state));
var error_message = new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(table_editor.state.state));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Table editor"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [table_editor.file_loader.file_loader], null),(cljs.core.truth_(error_message)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.status-msg.status-error","div.status-msg.status-error",1059485762),error_message], null):null),(cljs.core.truth_((function (){var and__4115__auto__ = content;
if(cljs.core.truth_(and__4115__auto__)){
return file_name;
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.status-msg.status-success","div.status-msg.status-success",-541391229),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic("File ",file_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" is successfully loaded"], 0))], null):null),(cljs.core.truth_(content)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [table_editor.table.table], null):null)], null);
});
table_editor.core.mount_root = (function table_editor$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [table_editor.core.home_page], null),document.getElementById("app"));
});
table_editor.core.init_BANG_ = (function table_editor$core$init_BANG_(){
return table_editor.core.mount_root();
});
goog.exportSymbol('table_editor.core.init_BANG_', table_editor.core.init_BANG_);

//# sourceMappingURL=table_editor.core.js.map
