goog.provide('table_editor.table');
table_editor.table.table_row = (function table_editor$table$table_row(row,on_change,header_QMARK_){
var fst = (row.cljs$core$IFn$_invoke$arity$1 ? row.cljs$core$IFn$_invoke$arity$1((0)) : row.call(null,(0)));
var snd = (row.cljs$core$IFn$_invoke$arity$1 ? row.cljs$core$IFn$_invoke$arity$1((1)) : row.call(null,(1)));
var get_value = (function (p1__43341_SHARP_){
return p1__43341_SHARP_.target.value;
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-row","div.table-row",-1275225843),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.table-cell","input.table-cell",-890739919),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(header_QMARK_)?"table-cell-header":null),new cljs.core.Keyword(null,"value","value",305978217),fst,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__43342_SHARP_){
var G__43344 = (0);
var G__43345 = get_value(p1__43342_SHARP_);
return (on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(G__43344,G__43345) : on_change.call(null,G__43344,G__43345));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.table-cell","input.table-cell",-890739919),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(header_QMARK_)?"table-cell-header":null),new cljs.core.Keyword(null,"value","value",305978217),snd,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__43343_SHARP_){
var G__43346 = (1);
var G__43347 = get_value(p1__43343_SHARP_);
return (on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(G__43346,G__43347) : on_change.call(null,G__43346,G__43347));
})], null)], null)], null);
});
table_editor.table.on_change = (function table_editor$table$on_change(content,row,column,value){
if(cljs.core.truth_((function (){var and__4115__auto__ = table_editor.utils.non_number(value);
if(cljs.core.truth_(and__4115__auto__)){
return (column === (0));
} else {
return and__4115__auto__;
}
})())){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(table_editor.channels.table_updated,cljs.core.assoc_in(content,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,column], null),value));
} else {
}

if((column === (1))){
var numb = parseFloat(value);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(table_editor.channels.table_updated,cljs.core.assoc_in(content,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,column], null),(cljs.core.truth_(isNaN(numb))?"0":cljs.core.str.cljs$core$IFn$_invoke$arity$1(numb))));
} else {
return null;
}
});
table_editor.table.table = (function table_editor$table$table(){
var map__43350 = cljs.core.deref(table_editor.state.state);
var map__43350__$1 = (((((!((map__43350 == null))))?(((((map__43350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43350):map__43350);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43350__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var sum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43350__$1,new cljs.core.Keyword(null,"sum","sum",136986814));
var average = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43350__$1,new cljs.core.Keyword(null,"average","average",-492356168));
if(cljs.core.truth_(data)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.aggregations","div.aggregations",-1028516046),(cljs.core.truth_(data)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.aggregation","div.aggregation",-1319968901),cljs.core.concat.cljs$core$IFn$_invoke$arity$2("Sum: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sum))], null):null),(cljs.core.truth_(data)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.aggregation","div.aggregation",-1319968901),cljs.core.concat.cljs$core$IFn$_invoke$arity$2("Average: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(average))], null):null)], null),(cljs.core.truth_(data)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table","div.table",-33744051),(function (){var iter__4529__auto__ = (function table_editor$table$table_$_iter__43352(s__43353){
return (new cljs.core.LazySeq(null,(function (){
var s__43353__$1 = s__43353;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43353__$1);
if(temp__5735__auto__){
var s__43353__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43353__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__43353__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__43355 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__43354 = (0);
while(true){
if((i__43354 < size__4528__auto__)){
var index = cljs.core._nth(c__4527__auto__,i__43354);
cljs.core.chunk_append(b__43355,(function (){var row = (data.cljs$core$IFn$_invoke$arity$1 ? data.cljs$core$IFn$_invoke$arity$1(index) : data.call(null,index));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [table_editor.table.table_row,row,((function (i__43354,row,index,c__4527__auto__,size__4528__auto__,b__43355,s__43353__$2,temp__5735__auto__,map__43350,map__43350__$1,data,sum,average){
return (function (p1__43348_SHARP_,p2__43349_SHARP_){
return table_editor.table.on_change(data,index,p1__43348_SHARP_,p2__43349_SHARP_);
});})(i__43354,row,index,c__4527__auto__,size__4528__auto__,b__43355,s__43353__$2,temp__5735__auto__,map__43350,map__43350__$1,data,sum,average))
,(index === (0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)], null));
})());

var G__43358 = (i__43354 + (1));
i__43354 = G__43358;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43355),table_editor$table$table_$_iter__43352(cljs.core.chunk_rest(s__43353__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43355),null);
}
} else {
var index = cljs.core.first(s__43353__$2);
return cljs.core.cons((function (){var row = (data.cljs$core$IFn$_invoke$arity$1 ? data.cljs$core$IFn$_invoke$arity$1(index) : data.call(null,index));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [table_editor.table.table_row,row,((function (row,index,s__43353__$2,temp__5735__auto__,map__43350,map__43350__$1,data,sum,average){
return (function (p1__43348_SHARP_,p2__43349_SHARP_){
return table_editor.table.on_change(data,index,p1__43348_SHARP_,p2__43349_SHARP_);
});})(row,index,s__43353__$2,temp__5735__auto__,map__43350,map__43350__$1,data,sum,average))
,(index === (0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)], null));
})(),table_editor$table$table_$_iter__43352(cljs.core.rest(s__43353__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(data)));
})()], null):null)], null);
} else {
return null;
}
});

//# sourceMappingURL=table_editor.table.js.map
