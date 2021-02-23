goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37158){
var map__37159 = p__37158;
var map__37159__$1 = (((((!((map__37159 == null))))?(((((map__37159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37159):map__37159);
var m = map__37159__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37159__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37159__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37163_37508 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37164_37509 = null;
var count__37165_37510 = (0);
var i__37166_37511 = (0);
while(true){
if((i__37166_37511 < count__37165_37510)){
var f_37512 = chunk__37164_37509.cljs$core$IIndexed$_nth$arity$2(null,i__37166_37511);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_37512], 0));


var G__37513 = seq__37163_37508;
var G__37514 = chunk__37164_37509;
var G__37515 = count__37165_37510;
var G__37516 = (i__37166_37511 + (1));
seq__37163_37508 = G__37513;
chunk__37164_37509 = G__37514;
count__37165_37510 = G__37515;
i__37166_37511 = G__37516;
continue;
} else {
var temp__5735__auto___37521 = cljs.core.seq(seq__37163_37508);
if(temp__5735__auto___37521){
var seq__37163_37522__$1 = temp__5735__auto___37521;
if(cljs.core.chunked_seq_QMARK_(seq__37163_37522__$1)){
var c__4556__auto___37523 = cljs.core.chunk_first(seq__37163_37522__$1);
var G__37524 = cljs.core.chunk_rest(seq__37163_37522__$1);
var G__37525 = c__4556__auto___37523;
var G__37526 = cljs.core.count(c__4556__auto___37523);
var G__37527 = (0);
seq__37163_37508 = G__37524;
chunk__37164_37509 = G__37525;
count__37165_37510 = G__37526;
i__37166_37511 = G__37527;
continue;
} else {
var f_37528 = cljs.core.first(seq__37163_37522__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_37528], 0));


var G__37529 = cljs.core.next(seq__37163_37522__$1);
var G__37530 = null;
var G__37531 = (0);
var G__37532 = (0);
seq__37163_37508 = G__37529;
chunk__37164_37509 = G__37530;
count__37165_37510 = G__37531;
i__37166_37511 = G__37532;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37534 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_37534], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_37534)))?cljs.core.second(arglists_37534):arglists_37534)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37190_37536 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37191_37537 = null;
var count__37192_37538 = (0);
var i__37193_37539 = (0);
while(true){
if((i__37193_37539 < count__37192_37538)){
var vec__37217_37540 = chunk__37191_37537.cljs$core$IIndexed$_nth$arity$2(null,i__37193_37539);
var name_37541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37217_37540,(0),null);
var map__37220_37542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37217_37540,(1),null);
var map__37220_37543__$1 = (((((!((map__37220_37542 == null))))?(((((map__37220_37542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37220_37542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37220_37542):map__37220_37542);
var doc_37544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37220_37543__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37220_37543__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_37541], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37545], 0));

if(cljs.core.truth_(doc_37544)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37544], 0));
} else {
}


var G__37558 = seq__37190_37536;
var G__37559 = chunk__37191_37537;
var G__37560 = count__37192_37538;
var G__37561 = (i__37193_37539 + (1));
seq__37190_37536 = G__37558;
chunk__37191_37537 = G__37559;
count__37192_37538 = G__37560;
i__37193_37539 = G__37561;
continue;
} else {
var temp__5735__auto___37564 = cljs.core.seq(seq__37190_37536);
if(temp__5735__auto___37564){
var seq__37190_37565__$1 = temp__5735__auto___37564;
if(cljs.core.chunked_seq_QMARK_(seq__37190_37565__$1)){
var c__4556__auto___37566 = cljs.core.chunk_first(seq__37190_37565__$1);
var G__37567 = cljs.core.chunk_rest(seq__37190_37565__$1);
var G__37568 = c__4556__auto___37566;
var G__37569 = cljs.core.count(c__4556__auto___37566);
var G__37570 = (0);
seq__37190_37536 = G__37567;
chunk__37191_37537 = G__37568;
count__37192_37538 = G__37569;
i__37193_37539 = G__37570;
continue;
} else {
var vec__37226_37572 = cljs.core.first(seq__37190_37565__$1);
var name_37573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37226_37572,(0),null);
var map__37229_37574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37226_37572,(1),null);
var map__37229_37575__$1 = (((((!((map__37229_37574 == null))))?(((((map__37229_37574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37229_37574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37229_37574):map__37229_37574);
var doc_37576 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37229_37575__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37577 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37229_37575__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_37573], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37577], 0));

if(cljs.core.truth_(doc_37576)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37576], 0));
} else {
}


var G__37587 = cljs.core.next(seq__37190_37565__$1);
var G__37588 = null;
var G__37589 = (0);
var G__37590 = (0);
seq__37190_37536 = G__37587;
chunk__37191_37537 = G__37588;
count__37192_37538 = G__37589;
i__37193_37539 = G__37590;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__37239 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37240 = null;
var count__37241 = (0);
var i__37242 = (0);
while(true){
if((i__37242 < count__37241)){
var role = chunk__37240.cljs$core$IIndexed$_nth$arity$2(null,i__37242);
var temp__5735__auto___37595__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___37595__$1)){
var spec_37596 = temp__5735__auto___37595__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37596)], 0));
} else {
}


var G__37597 = seq__37239;
var G__37598 = chunk__37240;
var G__37599 = count__37241;
var G__37600 = (i__37242 + (1));
seq__37239 = G__37597;
chunk__37240 = G__37598;
count__37241 = G__37599;
i__37242 = G__37600;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__37239);
if(temp__5735__auto____$1){
var seq__37239__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__37239__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37239__$1);
var G__37601 = cljs.core.chunk_rest(seq__37239__$1);
var G__37602 = c__4556__auto__;
var G__37603 = cljs.core.count(c__4556__auto__);
var G__37604 = (0);
seq__37239 = G__37601;
chunk__37240 = G__37602;
count__37241 = G__37603;
i__37242 = G__37604;
continue;
} else {
var role = cljs.core.first(seq__37239__$1);
var temp__5735__auto___37605__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___37605__$2)){
var spec_37606 = temp__5735__auto___37605__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37606)], 0));
} else {
}


var G__37607 = cljs.core.next(seq__37239__$1);
var G__37608 = null;
var G__37609 = (0);
var G__37610 = (0);
seq__37239 = G__37607;
chunk__37240 = G__37608;
count__37241 = G__37609;
i__37242 = G__37610;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__37611 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__37612 = cljs.core.ex_cause(t);
via = G__37611;
t = G__37612;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__37296 = datafied_throwable;
var map__37296__$1 = (((((!((map__37296 == null))))?(((((map__37296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37296):map__37296);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37296__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37296__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37296__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__37297 = cljs.core.last(via);
var map__37297__$1 = (((((!((map__37297 == null))))?(((((map__37297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37297):map__37297);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37297__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37297__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37297__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__37298 = data;
var map__37298__$1 = (((((!((map__37298 == null))))?(((((map__37298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37298):map__37298);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37298__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37298__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37298__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__37299 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__37299__$1 = (((((!((map__37299 == null))))?(((((map__37299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37299):map__37299);
var top_data = map__37299__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37299__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__37348 = phase;
var G__37348__$1 = (((G__37348 instanceof cljs.core.Keyword))?G__37348.fqn:null);
switch (G__37348__$1) {
case "read-source":
var map__37349 = data;
var map__37349__$1 = (((((!((map__37349 == null))))?(((((map__37349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37349):map__37349);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37349__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37349__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__37353 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__37353__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37353,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37353);
var G__37353__$2 = (cljs.core.truth_((function (){var fexpr__37359 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37359.cljs$core$IFn$_invoke$arity$1 ? fexpr__37359.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37359.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37353__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37353__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37353__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37353__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__37363 = top_data;
var G__37363__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37363,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37363);
var G__37363__$2 = (cljs.core.truth_((function (){var fexpr__37365 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37365.cljs$core$IFn$_invoke$arity$1 ? fexpr__37365.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37365.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37363__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37363__$1);
var G__37363__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37363__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37363__$2);
var G__37363__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37363__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37363__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37363__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37363__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__37381 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37381,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37381,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37381,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37381,(3),null);
var G__37393 = top_data;
var G__37393__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37393,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__37393);
var G__37393__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37393__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__37393__$1);
var G__37393__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37393__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__37393__$2);
var G__37393__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37393__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37393__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37393__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37393__$4;
}

break;
case "execution":
var vec__37411 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37411,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37411,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37411,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37411,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37285_SHARP_){
var or__4126__auto__ = (p1__37285_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__37418 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37418.cljs$core$IFn$_invoke$arity$1 ? fexpr__37418.cljs$core$IFn$_invoke$arity$1(p1__37285_SHARP_) : fexpr__37418.call(null,p1__37285_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__37421 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__37421__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37421,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__37421);
var G__37421__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37421__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37421__$1);
var G__37421__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37421__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__37421__$2);
var G__37421__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37421__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__37421__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37421__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37421__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37348__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__37430){
var map__37431 = p__37430;
var map__37431__$1 = (((((!((map__37431 == null))))?(((((map__37431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37431):map__37431);
var triage_data = map__37431__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37431__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37431__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37431__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37431__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37431__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37431__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37431__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37431__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__37438 = phase;
var G__37438__$1 = (((G__37438 instanceof cljs.core.Keyword))?G__37438.fqn:null);
switch (G__37438__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__37441 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__37442 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37443 = loc;
var G__37444 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37445_37669 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37446_37670 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37447_37671 = true;
var _STAR_print_fn_STAR__temp_val__37448_37672 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37447_37671);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37448_37672);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37425_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37425_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37446_37670);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37445_37669);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37441,G__37442,G__37443,G__37444) : format.call(null,G__37441,G__37442,G__37443,G__37444));

break;
case "macroexpansion":
var G__37452 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__37453 = cause_type;
var G__37454 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37455 = loc;
var G__37456 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37452,G__37453,G__37454,G__37455,G__37456) : format.call(null,G__37452,G__37453,G__37454,G__37455,G__37456));

break;
case "compile-syntax-check":
var G__37458 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__37459 = cause_type;
var G__37460 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37461 = loc;
var G__37462 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37458,G__37459,G__37460,G__37461,G__37462) : format.call(null,G__37458,G__37459,G__37460,G__37461,G__37462));

break;
case "compilation":
var G__37463 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__37464 = cause_type;
var G__37465 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37466 = loc;
var G__37467 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37463,G__37464,G__37465,G__37466,G__37467) : format.call(null,G__37463,G__37464,G__37465,G__37466,G__37467));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__37470 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__37471 = symbol;
var G__37472 = loc;
var G__37473 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37475_37683 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37476_37684 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37477_37685 = true;
var _STAR_print_fn_STAR__temp_val__37478_37686 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37477_37685);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37478_37686);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37427_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37427_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37476_37684);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37475_37683);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37470,G__37471,G__37472,G__37473) : format.call(null,G__37470,G__37471,G__37472,G__37473));
} else {
var G__37493 = "Execution error%s at %s(%s).\n%s\n";
var G__37494 = cause_type;
var G__37495 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37496 = loc;
var G__37497 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37493,G__37494,G__37495,G__37496,G__37497) : format.call(null,G__37493,G__37494,G__37495,G__37496,G__37497));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37438__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
