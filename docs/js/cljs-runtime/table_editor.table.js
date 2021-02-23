goog.provide('table_editor.table');
table_editor.table.table_row = (function table_editor$table$table_row(row,key,header_QMARK_){
var fst = (row.cljs$core$IFn$_invoke$arity$1 ? row.cljs$core$IFn$_invoke$arity$1((0)) : row.call(null,(0)));
var snd = (row.cljs$core$IFn$_invoke$arity$1 ? row.cljs$core$IFn$_invoke$arity$1((1)) : row.call(null,(1)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-row","div.table-row",-1275225843),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(header_QMARK_)?"table-header":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-cell","div.table-cell",1412527095),fst], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-cell","div.table-cell",1412527095),snd], null)], null);
});
table_editor.table.row_hash = (function table_editor$table$row_hash(p__29003){
var vec__29022 = p__29003;
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29022,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29022,(1),null);
return (category + value);
});
table_editor.table.table = (function table_editor$table$table(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table","div.table",-33744051),(function (){var rows = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(table_editor.state.state));
if(cljs.core.truth_(rows)){
var iter__4529__auto__ = (function table_editor$table$table_$_iter__29036(s__29037){
return (new cljs.core.LazySeq(null,(function (){
var s__29037__$1 = s__29037;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29037__$1);
if(temp__5735__auto__){
var s__29037__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29037__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__29037__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__29040 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__29039 = (0);
while(true){
if((i__29039 < size__4528__auto__)){
var index = cljs.core._nth(c__4527__auto__,i__29039);
cljs.core.chunk_append(b__29040,(function (){var row = (rows.cljs$core$IFn$_invoke$arity$1 ? rows.cljs$core$IFn$_invoke$arity$1(index) : rows.call(null,index));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [table_editor.table.table_row,row,table_editor.table.row_hash(row),(index === (0))], null);
})());

var G__29047 = (i__29039 + (1));
i__29039 = G__29047;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29040),table_editor$table$table_$_iter__29036(cljs.core.chunk_rest(s__29037__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29040),null);
}
} else {
var index = cljs.core.first(s__29037__$2);
return cljs.core.cons((function (){var row = (rows.cljs$core$IFn$_invoke$arity$1 ? rows.cljs$core$IFn$_invoke$arity$1(index) : rows.call(null,index));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [table_editor.table.table_row,row,table_editor.table.row_hash(row),(index === (0))], null);
})(),table_editor$table$table_$_iter__29036(cljs.core.rest(s__29037__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(rows)));
} else {
return null;
}
})()], null);
});

//# sourceMappingURL=table_editor.table.js.map
