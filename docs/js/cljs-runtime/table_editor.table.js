goog.provide('table_editor.table');
table_editor.table.table = (function table_editor$table$table(state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table","div.table",-33744051),(function (){var rows = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(rows)){
var iter__4529__auto__ = (function table_editor$table$table_$_iter__39341(s__39342){
return (new cljs.core.LazySeq(null,(function (){
var s__39342__$1 = s__39342;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__39342__$1);
if(temp__5735__auto__){
var s__39342__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39342__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__39342__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__39344 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__39343 = (0);
while(true){
if((i__39343 < size__4528__auto__)){
var row = cljs.core._nth(c__4527__auto__,i__39343);
cljs.core.chunk_append(b__39344,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first(row)], null),cljs.core.first(row)], null));

var G__39390 = (i__39343 + (1));
i__39343 = G__39390;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39344),table_editor$table$table_$_iter__39341(cljs.core.chunk_rest(s__39342__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39344),null);
}
} else {
var row = cljs.core.first(s__39342__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first(row)], null),cljs.core.first(row)], null),table_editor$table$table_$_iter__39341(cljs.core.rest(s__39342__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(rows);
} else {
return null;
}
})()], null);
});

//# sourceMappingURL=table_editor.table.js.map
