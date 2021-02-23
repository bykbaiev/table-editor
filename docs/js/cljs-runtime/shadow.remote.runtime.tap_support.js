goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__38160,p__38161){
var map__38162 = p__38160;
var map__38162__$1 = (((((!((map__38162 == null))))?(((((map__38162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38162):map__38162);
var svc = map__38162__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38162__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38162__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38162__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__38163 = p__38161;
var map__38163__$1 = (((((!((map__38163 == null))))?(((((map__38163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38163):map__38163);
var msg = map__38163__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38163__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38163__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38163__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38163__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__38169,p__38170){
var map__38171 = p__38169;
var map__38171__$1 = (((((!((map__38171 == null))))?(((((map__38171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38171):map__38171);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38171__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__38172 = p__38170;
var map__38172__$1 = (((((!((map__38172 == null))))?(((((map__38172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38172):map__38172);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38172__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__38180,p__38181){
var map__38182 = p__38180;
var map__38182__$1 = (((((!((map__38182 == null))))?(((((map__38182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38182):map__38182);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38182__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38182__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__38183 = p__38181;
var map__38183__$1 = (((((!((map__38183 == null))))?(((((map__38183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38183):map__38183);
var msg = map__38183__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38183__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__38190,tid){
var map__38192 = p__38190;
var map__38192__$1 = (((((!((map__38192 == null))))?(((((map__38192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38192):map__38192);
var svc = map__38192__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38192__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__38207 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__38208 = null;
var count__38209 = (0);
var i__38210 = (0);
while(true){
if((i__38210 < count__38209)){
var vec__38221 = chunk__38208.cljs$core$IIndexed$_nth$arity$2(null,i__38210);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38221,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38221,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__38289 = seq__38207;
var G__38290 = chunk__38208;
var G__38291 = count__38209;
var G__38292 = (i__38210 + (1));
seq__38207 = G__38289;
chunk__38208 = G__38290;
count__38209 = G__38291;
i__38210 = G__38292;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38207);
if(temp__5735__auto__){
var seq__38207__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38207__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38207__$1);
var G__38297 = cljs.core.chunk_rest(seq__38207__$1);
var G__38298 = c__4556__auto__;
var G__38299 = cljs.core.count(c__4556__auto__);
var G__38300 = (0);
seq__38207 = G__38297;
chunk__38208 = G__38298;
count__38209 = G__38299;
i__38210 = G__38300;
continue;
} else {
var vec__38233 = cljs.core.first(seq__38207__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38233,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38233,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__38301 = cljs.core.next(seq__38207__$1);
var G__38302 = null;
var G__38303 = (0);
var G__38304 = (0);
seq__38207 = G__38301;
chunk__38208 = G__38302;
count__38209 = G__38303;
i__38210 = G__38304;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__38197_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__38197_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__38199_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__38199_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__38200_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__38200_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__38202_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__38202_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__38243){
var map__38244 = p__38243;
var map__38244__$1 = (((((!((map__38244 == null))))?(((((map__38244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38244):map__38244);
var svc = map__38244__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38244__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38244__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
