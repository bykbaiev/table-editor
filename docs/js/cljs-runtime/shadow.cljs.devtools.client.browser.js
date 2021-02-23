goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39817 = arguments.length;
var i__4737__auto___39818 = (0);
while(true){
if((i__4737__auto___39818 < len__4736__auto___39817)){
args__4742__auto__.push((arguments[i__4737__auto___39818]));

var G__39819 = (i__4737__auto___39818 + (1));
i__4737__auto___39818 = G__39819;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq39554){
var G__39555 = cljs.core.first(seq39554);
var seq39554__$1 = cljs.core.next(seq39554);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39555,seq39554__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__39571 = cljs.core.seq(sources);
var chunk__39572 = null;
var count__39573 = (0);
var i__39574 = (0);
while(true){
if((i__39574 < count__39573)){
var map__39593 = chunk__39572.cljs$core$IIndexed$_nth$arity$2(null,i__39574);
var map__39593__$1 = (((((!((map__39593 == null))))?(((((map__39593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39593):map__39593);
var src = map__39593__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39593__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39593__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39593__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39593__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39595){var e_39832 = e39595;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39832);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39832.message)].join('')));
}

var G__39833 = seq__39571;
var G__39834 = chunk__39572;
var G__39835 = count__39573;
var G__39836 = (i__39574 + (1));
seq__39571 = G__39833;
chunk__39572 = G__39834;
count__39573 = G__39835;
i__39574 = G__39836;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39571);
if(temp__5735__auto__){
var seq__39571__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39571__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39571__$1);
var G__39837 = cljs.core.chunk_rest(seq__39571__$1);
var G__39838 = c__4556__auto__;
var G__39839 = cljs.core.count(c__4556__auto__);
var G__39840 = (0);
seq__39571 = G__39837;
chunk__39572 = G__39838;
count__39573 = G__39839;
i__39574 = G__39840;
continue;
} else {
var map__39596 = cljs.core.first(seq__39571__$1);
var map__39596__$1 = (((((!((map__39596 == null))))?(((((map__39596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39596):map__39596);
var src = map__39596__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39596__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39596__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39596__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39596__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39598){var e_39841 = e39598;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39841);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39841.message)].join('')));
}

var G__39843 = cljs.core.next(seq__39571__$1);
var G__39845 = null;
var G__39846 = (0);
var G__39847 = (0);
seq__39571 = G__39843;
chunk__39572 = G__39845;
count__39573 = G__39846;
i__39574 = G__39847;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__39608 = cljs.core.seq(js_requires);
var chunk__39609 = null;
var count__39610 = (0);
var i__39611 = (0);
while(true){
if((i__39611 < count__39610)){
var js_ns = chunk__39609.cljs$core$IIndexed$_nth$arity$2(null,i__39611);
var require_str_39867 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39867);


var G__39868 = seq__39608;
var G__39869 = chunk__39609;
var G__39870 = count__39610;
var G__39871 = (i__39611 + (1));
seq__39608 = G__39868;
chunk__39609 = G__39869;
count__39610 = G__39870;
i__39611 = G__39871;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39608);
if(temp__5735__auto__){
var seq__39608__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39608__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39608__$1);
var G__39873 = cljs.core.chunk_rest(seq__39608__$1);
var G__39874 = c__4556__auto__;
var G__39875 = cljs.core.count(c__4556__auto__);
var G__39876 = (0);
seq__39608 = G__39873;
chunk__39609 = G__39874;
count__39610 = G__39875;
i__39611 = G__39876;
continue;
} else {
var js_ns = cljs.core.first(seq__39608__$1);
var require_str_39878 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39878);


var G__39879 = cljs.core.next(seq__39608__$1);
var G__39880 = null;
var G__39881 = (0);
var G__39882 = (0);
seq__39608 = G__39879;
chunk__39609 = G__39880;
count__39610 = G__39881;
i__39611 = G__39882;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__39619){
var map__39620 = p__39619;
var map__39620__$1 = (((((!((map__39620 == null))))?(((((map__39620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39620):map__39620);
var msg = map__39620__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39620__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39620__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39622(s__39623){
return (new cljs.core.LazySeq(null,(function (){
var s__39623__$1 = s__39623;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__39623__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__39629 = cljs.core.first(xs__6292__auto__);
var map__39629__$1 = (((((!((map__39629 == null))))?(((((map__39629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39629):map__39629);
var src = map__39629__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39629__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39629__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__39623__$1,map__39629,map__39629__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39620,map__39620__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39622_$_iter__39624(s__39625){
return (new cljs.core.LazySeq(null,((function (s__39623__$1,map__39629,map__39629__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39620,map__39620__$1,msg,info,reload_info){
return (function (){
var s__39625__$1 = s__39625;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__39625__$1);
if(temp__5735__auto____$1){
var s__39625__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39625__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__39625__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__39627 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__39626 = (0);
while(true){
if((i__39626 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__39626);
cljs.core.chunk_append(b__39627,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39883 = (i__39626 + (1));
i__39626 = G__39883;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39627),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39622_$_iter__39624(cljs.core.chunk_rest(s__39625__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39627),null);
}
} else {
var warning = cljs.core.first(s__39625__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39622_$_iter__39624(cljs.core.rest(s__39625__$2)));
}
} else {
return null;
}
break;
}
});})(s__39623__$1,map__39629,map__39629__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39620,map__39620__$1,msg,info,reload_info))
,null,null));
});})(s__39623__$1,map__39629,map__39629__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39620,map__39620__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39622(cljs.core.rest(s__39623__$1)));
} else {
var G__39889 = cljs.core.rest(s__39623__$1);
s__39623__$1 = G__39889;
continue;
}
} else {
var G__39890 = cljs.core.rest(s__39623__$1);
s__39623__$1 = G__39890;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__39638_39891 = cljs.core.seq(warnings);
var chunk__39639_39892 = null;
var count__39640_39893 = (0);
var i__39641_39894 = (0);
while(true){
if((i__39641_39894 < count__39640_39893)){
var map__39647_39895 = chunk__39639_39892.cljs$core$IIndexed$_nth$arity$2(null,i__39641_39894);
var map__39647_39896__$1 = (((((!((map__39647_39895 == null))))?(((((map__39647_39895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39647_39895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39647_39895):map__39647_39895);
var w_39897 = map__39647_39896__$1;
var msg_39898__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39647_39896__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39647_39896__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39647_39896__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39647_39896__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39901)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39899),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39900),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39898__$1)].join(''));


var G__39902 = seq__39638_39891;
var G__39903 = chunk__39639_39892;
var G__39904 = count__39640_39893;
var G__39905 = (i__39641_39894 + (1));
seq__39638_39891 = G__39902;
chunk__39639_39892 = G__39903;
count__39640_39893 = G__39904;
i__39641_39894 = G__39905;
continue;
} else {
var temp__5735__auto___39906 = cljs.core.seq(seq__39638_39891);
if(temp__5735__auto___39906){
var seq__39638_39907__$1 = temp__5735__auto___39906;
if(cljs.core.chunked_seq_QMARK_(seq__39638_39907__$1)){
var c__4556__auto___39908 = cljs.core.chunk_first(seq__39638_39907__$1);
var G__39909 = cljs.core.chunk_rest(seq__39638_39907__$1);
var G__39910 = c__4556__auto___39908;
var G__39911 = cljs.core.count(c__4556__auto___39908);
var G__39912 = (0);
seq__39638_39891 = G__39909;
chunk__39639_39892 = G__39910;
count__39640_39893 = G__39911;
i__39641_39894 = G__39912;
continue;
} else {
var map__39653_39915 = cljs.core.first(seq__39638_39907__$1);
var map__39653_39916__$1 = (((((!((map__39653_39915 == null))))?(((((map__39653_39915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39653_39915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39653_39915):map__39653_39915);
var w_39917 = map__39653_39916__$1;
var msg_39918__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39653_39916__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39653_39916__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39653_39916__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39653_39916__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39921)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39919),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39920),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39918__$1)].join(''));


var G__39927 = cljs.core.next(seq__39638_39907__$1);
var G__39928 = null;
var G__39929 = (0);
var G__39930 = (0);
seq__39638_39891 = G__39927;
chunk__39639_39892 = G__39928;
count__39640_39893 = G__39929;
i__39641_39894 = G__39930;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__39618_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__39618_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__39659){
var map__39660 = p__39659;
var map__39660__$1 = (((((!((map__39660 == null))))?(((((map__39660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39660):map__39660);
var msg = map__39660__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39660__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__39662 = cljs.core.seq(updates);
var chunk__39664 = null;
var count__39665 = (0);
var i__39666 = (0);
while(true){
if((i__39666 < count__39665)){
var path = chunk__39664.cljs$core$IIndexed$_nth$arity$2(null,i__39666);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39703_39931 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39707_39932 = null;
var count__39708_39933 = (0);
var i__39709_39934 = (0);
while(true){
if((i__39709_39934 < count__39708_39933)){
var node_39935 = chunk__39707_39932.cljs$core$IIndexed$_nth$arity$2(null,i__39709_39934);
if(cljs.core.not(node_39935.shadow$old)){
var path_match_39936 = shadow.cljs.devtools.client.browser.match_paths(node_39935.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39936)){
var new_link_39937 = (function (){var G__39715 = node_39935.cloneNode(true);
G__39715.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39936),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39715;
})();
(node_39935.shadow$old = true);

(new_link_39937.onload = ((function (seq__39703_39931,chunk__39707_39932,count__39708_39933,i__39709_39934,seq__39662,chunk__39664,count__39665,i__39666,new_link_39937,path_match_39936,node_39935,path,map__39660,map__39660__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39935);
});})(seq__39703_39931,chunk__39707_39932,count__39708_39933,i__39709_39934,seq__39662,chunk__39664,count__39665,i__39666,new_link_39937,path_match_39936,node_39935,path,map__39660,map__39660__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39936], 0));

goog.dom.insertSiblingAfter(new_link_39937,node_39935);


var G__39938 = seq__39703_39931;
var G__39939 = chunk__39707_39932;
var G__39940 = count__39708_39933;
var G__39941 = (i__39709_39934 + (1));
seq__39703_39931 = G__39938;
chunk__39707_39932 = G__39939;
count__39708_39933 = G__39940;
i__39709_39934 = G__39941;
continue;
} else {
var G__39942 = seq__39703_39931;
var G__39943 = chunk__39707_39932;
var G__39944 = count__39708_39933;
var G__39945 = (i__39709_39934 + (1));
seq__39703_39931 = G__39942;
chunk__39707_39932 = G__39943;
count__39708_39933 = G__39944;
i__39709_39934 = G__39945;
continue;
}
} else {
var G__39946 = seq__39703_39931;
var G__39947 = chunk__39707_39932;
var G__39948 = count__39708_39933;
var G__39949 = (i__39709_39934 + (1));
seq__39703_39931 = G__39946;
chunk__39707_39932 = G__39947;
count__39708_39933 = G__39948;
i__39709_39934 = G__39949;
continue;
}
} else {
var temp__5735__auto___39950 = cljs.core.seq(seq__39703_39931);
if(temp__5735__auto___39950){
var seq__39703_39951__$1 = temp__5735__auto___39950;
if(cljs.core.chunked_seq_QMARK_(seq__39703_39951__$1)){
var c__4556__auto___39952 = cljs.core.chunk_first(seq__39703_39951__$1);
var G__39953 = cljs.core.chunk_rest(seq__39703_39951__$1);
var G__39954 = c__4556__auto___39952;
var G__39955 = cljs.core.count(c__4556__auto___39952);
var G__39956 = (0);
seq__39703_39931 = G__39953;
chunk__39707_39932 = G__39954;
count__39708_39933 = G__39955;
i__39709_39934 = G__39956;
continue;
} else {
var node_39957 = cljs.core.first(seq__39703_39951__$1);
if(cljs.core.not(node_39957.shadow$old)){
var path_match_39958 = shadow.cljs.devtools.client.browser.match_paths(node_39957.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39958)){
var new_link_39959 = (function (){var G__39716 = node_39957.cloneNode(true);
G__39716.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39958),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39716;
})();
(node_39957.shadow$old = true);

(new_link_39959.onload = ((function (seq__39703_39931,chunk__39707_39932,count__39708_39933,i__39709_39934,seq__39662,chunk__39664,count__39665,i__39666,new_link_39959,path_match_39958,node_39957,seq__39703_39951__$1,temp__5735__auto___39950,path,map__39660,map__39660__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39957);
});})(seq__39703_39931,chunk__39707_39932,count__39708_39933,i__39709_39934,seq__39662,chunk__39664,count__39665,i__39666,new_link_39959,path_match_39958,node_39957,seq__39703_39951__$1,temp__5735__auto___39950,path,map__39660,map__39660__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39958], 0));

goog.dom.insertSiblingAfter(new_link_39959,node_39957);


var G__39960 = cljs.core.next(seq__39703_39951__$1);
var G__39961 = null;
var G__39962 = (0);
var G__39963 = (0);
seq__39703_39931 = G__39960;
chunk__39707_39932 = G__39961;
count__39708_39933 = G__39962;
i__39709_39934 = G__39963;
continue;
} else {
var G__39964 = cljs.core.next(seq__39703_39951__$1);
var G__39965 = null;
var G__39966 = (0);
var G__39967 = (0);
seq__39703_39931 = G__39964;
chunk__39707_39932 = G__39965;
count__39708_39933 = G__39966;
i__39709_39934 = G__39967;
continue;
}
} else {
var G__39968 = cljs.core.next(seq__39703_39951__$1);
var G__39969 = null;
var G__39970 = (0);
var G__39971 = (0);
seq__39703_39931 = G__39968;
chunk__39707_39932 = G__39969;
count__39708_39933 = G__39970;
i__39709_39934 = G__39971;
continue;
}
}
} else {
}
}
break;
}


var G__39972 = seq__39662;
var G__39973 = chunk__39664;
var G__39974 = count__39665;
var G__39975 = (i__39666 + (1));
seq__39662 = G__39972;
chunk__39664 = G__39973;
count__39665 = G__39974;
i__39666 = G__39975;
continue;
} else {
var G__39976 = seq__39662;
var G__39977 = chunk__39664;
var G__39978 = count__39665;
var G__39979 = (i__39666 + (1));
seq__39662 = G__39976;
chunk__39664 = G__39977;
count__39665 = G__39978;
i__39666 = G__39979;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39662);
if(temp__5735__auto__){
var seq__39662__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39662__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39662__$1);
var G__39980 = cljs.core.chunk_rest(seq__39662__$1);
var G__39981 = c__4556__auto__;
var G__39982 = cljs.core.count(c__4556__auto__);
var G__39983 = (0);
seq__39662 = G__39980;
chunk__39664 = G__39981;
count__39665 = G__39982;
i__39666 = G__39983;
continue;
} else {
var path = cljs.core.first(seq__39662__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39718_39984 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39722_39985 = null;
var count__39723_39986 = (0);
var i__39724_39987 = (0);
while(true){
if((i__39724_39987 < count__39723_39986)){
var node_39988 = chunk__39722_39985.cljs$core$IIndexed$_nth$arity$2(null,i__39724_39987);
if(cljs.core.not(node_39988.shadow$old)){
var path_match_39989 = shadow.cljs.devtools.client.browser.match_paths(node_39988.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39989)){
var new_link_39990 = (function (){var G__39733 = node_39988.cloneNode(true);
G__39733.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39989),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39733;
})();
(node_39988.shadow$old = true);

(new_link_39990.onload = ((function (seq__39718_39984,chunk__39722_39985,count__39723_39986,i__39724_39987,seq__39662,chunk__39664,count__39665,i__39666,new_link_39990,path_match_39989,node_39988,path,seq__39662__$1,temp__5735__auto__,map__39660,map__39660__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39988);
});})(seq__39718_39984,chunk__39722_39985,count__39723_39986,i__39724_39987,seq__39662,chunk__39664,count__39665,i__39666,new_link_39990,path_match_39989,node_39988,path,seq__39662__$1,temp__5735__auto__,map__39660,map__39660__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39989], 0));

goog.dom.insertSiblingAfter(new_link_39990,node_39988);


var G__39991 = seq__39718_39984;
var G__39992 = chunk__39722_39985;
var G__39993 = count__39723_39986;
var G__39994 = (i__39724_39987 + (1));
seq__39718_39984 = G__39991;
chunk__39722_39985 = G__39992;
count__39723_39986 = G__39993;
i__39724_39987 = G__39994;
continue;
} else {
var G__39995 = seq__39718_39984;
var G__39996 = chunk__39722_39985;
var G__39997 = count__39723_39986;
var G__39998 = (i__39724_39987 + (1));
seq__39718_39984 = G__39995;
chunk__39722_39985 = G__39996;
count__39723_39986 = G__39997;
i__39724_39987 = G__39998;
continue;
}
} else {
var G__39999 = seq__39718_39984;
var G__40000 = chunk__39722_39985;
var G__40001 = count__39723_39986;
var G__40002 = (i__39724_39987 + (1));
seq__39718_39984 = G__39999;
chunk__39722_39985 = G__40000;
count__39723_39986 = G__40001;
i__39724_39987 = G__40002;
continue;
}
} else {
var temp__5735__auto___40003__$1 = cljs.core.seq(seq__39718_39984);
if(temp__5735__auto___40003__$1){
var seq__39718_40004__$1 = temp__5735__auto___40003__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39718_40004__$1)){
var c__4556__auto___40005 = cljs.core.chunk_first(seq__39718_40004__$1);
var G__40006 = cljs.core.chunk_rest(seq__39718_40004__$1);
var G__40007 = c__4556__auto___40005;
var G__40008 = cljs.core.count(c__4556__auto___40005);
var G__40009 = (0);
seq__39718_39984 = G__40006;
chunk__39722_39985 = G__40007;
count__39723_39986 = G__40008;
i__39724_39987 = G__40009;
continue;
} else {
var node_40010 = cljs.core.first(seq__39718_40004__$1);
if(cljs.core.not(node_40010.shadow$old)){
var path_match_40011 = shadow.cljs.devtools.client.browser.match_paths(node_40010.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40011)){
var new_link_40012 = (function (){var G__39734 = node_40010.cloneNode(true);
G__39734.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40011),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39734;
})();
(node_40010.shadow$old = true);

(new_link_40012.onload = ((function (seq__39718_39984,chunk__39722_39985,count__39723_39986,i__39724_39987,seq__39662,chunk__39664,count__39665,i__39666,new_link_40012,path_match_40011,node_40010,seq__39718_40004__$1,temp__5735__auto___40003__$1,path,seq__39662__$1,temp__5735__auto__,map__39660,map__39660__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40010);
});})(seq__39718_39984,chunk__39722_39985,count__39723_39986,i__39724_39987,seq__39662,chunk__39664,count__39665,i__39666,new_link_40012,path_match_40011,node_40010,seq__39718_40004__$1,temp__5735__auto___40003__$1,path,seq__39662__$1,temp__5735__auto__,map__39660,map__39660__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40011], 0));

goog.dom.insertSiblingAfter(new_link_40012,node_40010);


var G__40015 = cljs.core.next(seq__39718_40004__$1);
var G__40016 = null;
var G__40017 = (0);
var G__40018 = (0);
seq__39718_39984 = G__40015;
chunk__39722_39985 = G__40016;
count__39723_39986 = G__40017;
i__39724_39987 = G__40018;
continue;
} else {
var G__40019 = cljs.core.next(seq__39718_40004__$1);
var G__40020 = null;
var G__40021 = (0);
var G__40022 = (0);
seq__39718_39984 = G__40019;
chunk__39722_39985 = G__40020;
count__39723_39986 = G__40021;
i__39724_39987 = G__40022;
continue;
}
} else {
var G__40023 = cljs.core.next(seq__39718_40004__$1);
var G__40024 = null;
var G__40025 = (0);
var G__40026 = (0);
seq__39718_39984 = G__40023;
chunk__39722_39985 = G__40024;
count__39723_39986 = G__40025;
i__39724_39987 = G__40026;
continue;
}
}
} else {
}
}
break;
}


var G__40027 = cljs.core.next(seq__39662__$1);
var G__40028 = null;
var G__40029 = (0);
var G__40030 = (0);
seq__39662 = G__40027;
chunk__39664 = G__40028;
count__39665 = G__40029;
i__39666 = G__40030;
continue;
} else {
var G__40031 = cljs.core.next(seq__39662__$1);
var G__40032 = null;
var G__40033 = (0);
var G__40034 = (0);
seq__39662 = G__40031;
chunk__39664 = G__40032;
count__39665 = G__40033;
i__39666 = G__40034;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__39738){
var map__39741 = p__39738;
var map__39741__$1 = (((((!((map__39741 == null))))?(((((map__39741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39741):map__39741);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39741__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__39748){
var map__39749 = p__39748;
var map__39749__$1 = (((((!((map__39749 == null))))?(((((map__39749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39749):map__39749);
var _ = map__39749__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39749__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__39753,done,error){
var map__39755 = p__39753;
var map__39755__$1 = (((((!((map__39755 == null))))?(((((map__39755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39755):map__39755);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39755__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__39761,done,error){
var map__39763 = p__39761;
var map__39763__$1 = (((((!((map__39763 == null))))?(((((map__39763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39763):map__39763);
var msg = map__39763__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39763__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39763__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39763__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39767){
var map__39768 = p__39767;
var map__39768__$1 = (((((!((map__39768 == null))))?(((((map__39768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39768):map__39768);
var src = map__39768__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39768__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__39772 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__39772) : done.call(null,G__39772));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__39773){
var map__39774 = p__39773;
var map__39774__$1 = (((((!((map__39774 == null))))?(((((map__39774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39774):map__39774);
var msg__$1 = map__39774__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39774__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e39776){var ex = e39776;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__39777){
var map__39778 = p__39777;
var map__39778__$1 = (((((!((map__39778 == null))))?(((((map__39778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39778):map__39778);
var env = map__39778__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39778__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__39781){
var map__39782 = p__39781;
var map__39782__$1 = (((((!((map__39782 == null))))?(((((map__39782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39782):map__39782);
var msg = map__39782__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39782__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__39787){
var map__39788 = p__39787;
var map__39788__$1 = (((((!((map__39788 == null))))?(((((map__39788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39788):map__39788);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39788__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39788__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__39792){
var map__39793 = p__39792;
var map__39793__$1 = (((((!((map__39793 == null))))?(((((map__39793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39793):map__39793);
var svc = map__39793__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39793__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
