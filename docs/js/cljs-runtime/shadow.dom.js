goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_37770 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_37770(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_37771 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_37771(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__36562 = coll;
var G__36563 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__36562,G__36563) : shadow.dom.lazy_native_coll_seq.call(null,G__36562,G__36563));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__36627 = arguments.length;
switch (G__36627) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__36644 = arguments.length;
switch (G__36644) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__36651 = arguments.length;
switch (G__36651) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__36664 = arguments.length;
switch (G__36664) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__36679 = arguments.length;
switch (G__36679) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__36692 = arguments.length;
switch (G__36692) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e36700){if((e36700 instanceof Object)){
var e = e36700;
return console.log("didnt support attachEvent",el,e);
} else {
throw e36700;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__36708 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__36709 = null;
var count__36710 = (0);
var i__36711 = (0);
while(true){
if((i__36711 < count__36710)){
var el = chunk__36709.cljs$core$IIndexed$_nth$arity$2(null,i__36711);
var handler_37827__$1 = ((function (seq__36708,chunk__36709,count__36710,i__36711,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36708,chunk__36709,count__36710,i__36711,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37827__$1);


var G__37829 = seq__36708;
var G__37830 = chunk__36709;
var G__37831 = count__36710;
var G__37832 = (i__36711 + (1));
seq__36708 = G__37829;
chunk__36709 = G__37830;
count__36710 = G__37831;
i__36711 = G__37832;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36708);
if(temp__5735__auto__){
var seq__36708__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36708__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36708__$1);
var G__37833 = cljs.core.chunk_rest(seq__36708__$1);
var G__37834 = c__4556__auto__;
var G__37835 = cljs.core.count(c__4556__auto__);
var G__37836 = (0);
seq__36708 = G__37833;
chunk__36709 = G__37834;
count__36710 = G__37835;
i__36711 = G__37836;
continue;
} else {
var el = cljs.core.first(seq__36708__$1);
var handler_37838__$1 = ((function (seq__36708,chunk__36709,count__36710,i__36711,el,seq__36708__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36708,chunk__36709,count__36710,i__36711,el,seq__36708__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37838__$1);


var G__37840 = cljs.core.next(seq__36708__$1);
var G__37841 = null;
var G__37842 = (0);
var G__37843 = (0);
seq__36708 = G__37840;
chunk__36709 = G__37841;
count__36710 = G__37842;
i__36711 = G__37843;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__36749 = arguments.length;
switch (G__36749) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__36765 = cljs.core.seq(events);
var chunk__36766 = null;
var count__36767 = (0);
var i__36768 = (0);
while(true){
if((i__36768 < count__36767)){
var vec__36781 = chunk__36766.cljs$core$IIndexed$_nth$arity$2(null,i__36768);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36781,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36781,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37853 = seq__36765;
var G__37854 = chunk__36766;
var G__37855 = count__36767;
var G__37856 = (i__36768 + (1));
seq__36765 = G__37853;
chunk__36766 = G__37854;
count__36767 = G__37855;
i__36768 = G__37856;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36765);
if(temp__5735__auto__){
var seq__36765__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36765__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36765__$1);
var G__37858 = cljs.core.chunk_rest(seq__36765__$1);
var G__37859 = c__4556__auto__;
var G__37860 = cljs.core.count(c__4556__auto__);
var G__37861 = (0);
seq__36765 = G__37858;
chunk__36766 = G__37859;
count__36767 = G__37860;
i__36768 = G__37861;
continue;
} else {
var vec__36790 = cljs.core.first(seq__36765__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36790,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36790,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37862 = cljs.core.next(seq__36765__$1);
var G__37863 = null;
var G__37864 = (0);
var G__37865 = (0);
seq__36765 = G__37862;
chunk__36766 = G__37863;
count__36767 = G__37864;
i__36768 = G__37865;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__36796 = cljs.core.seq(styles);
var chunk__36797 = null;
var count__36798 = (0);
var i__36799 = (0);
while(true){
if((i__36799 < count__36798)){
var vec__36815 = chunk__36797.cljs$core$IIndexed$_nth$arity$2(null,i__36799);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36815,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36815,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37871 = seq__36796;
var G__37872 = chunk__36797;
var G__37873 = count__36798;
var G__37874 = (i__36799 + (1));
seq__36796 = G__37871;
chunk__36797 = G__37872;
count__36798 = G__37873;
i__36799 = G__37874;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36796);
if(temp__5735__auto__){
var seq__36796__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36796__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36796__$1);
var G__37881 = cljs.core.chunk_rest(seq__36796__$1);
var G__37882 = c__4556__auto__;
var G__37883 = cljs.core.count(c__4556__auto__);
var G__37884 = (0);
seq__36796 = G__37881;
chunk__36797 = G__37882;
count__36798 = G__37883;
i__36799 = G__37884;
continue;
} else {
var vec__36823 = cljs.core.first(seq__36796__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36823,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36823,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37886 = cljs.core.next(seq__36796__$1);
var G__37887 = null;
var G__37888 = (0);
var G__37889 = (0);
seq__36796 = G__37886;
chunk__36797 = G__37887;
count__36798 = G__37888;
i__36799 = G__37889;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__36835_37892 = key;
var G__36835_37893__$1 = (((G__36835_37892 instanceof cljs.core.Keyword))?G__36835_37892.fqn:null);
switch (G__36835_37893__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_37901 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_37901,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_37901,"aria-");
}
})())){
el.setAttribute(ks_37901,value);
} else {
(el[ks_37901] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__36863){
var map__36864 = p__36863;
var map__36864__$1 = (((((!((map__36864 == null))))?(((((map__36864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36864):map__36864);
var props = map__36864__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36864__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__36869 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36869,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36869,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36869,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__36872 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__36872,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__36872;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__36878 = arguments.length;
switch (G__36878) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__36881){
var vec__36883 = p__36881;
var seq__36884 = cljs.core.seq(vec__36883);
var first__36885 = cljs.core.first(seq__36884);
var seq__36884__$1 = cljs.core.next(seq__36884);
var nn = first__36885;
var first__36885__$1 = cljs.core.first(seq__36884__$1);
var seq__36884__$2 = cljs.core.next(seq__36884__$1);
var np = first__36885__$1;
var nc = seq__36884__$2;
var node = vec__36883;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36888 = nn;
var G__36889 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36888,G__36889) : create_fn.call(null,G__36888,G__36889));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36890 = nn;
var G__36891 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36890,G__36891) : create_fn.call(null,G__36890,G__36891));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__36895 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36895,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36895,(1),null);
var seq__36898_37931 = cljs.core.seq(node_children);
var chunk__36899_37932 = null;
var count__36900_37933 = (0);
var i__36901_37934 = (0);
while(true){
if((i__36901_37934 < count__36900_37933)){
var child_struct_37936 = chunk__36899_37932.cljs$core$IIndexed$_nth$arity$2(null,i__36901_37934);
var children_37938 = shadow.dom.dom_node(child_struct_37936);
if(cljs.core.seq_QMARK_(children_37938)){
var seq__36932_37939 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37938));
var chunk__36934_37940 = null;
var count__36935_37941 = (0);
var i__36936_37942 = (0);
while(true){
if((i__36936_37942 < count__36935_37941)){
var child_37943 = chunk__36934_37940.cljs$core$IIndexed$_nth$arity$2(null,i__36936_37942);
if(cljs.core.truth_(child_37943)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37943);


var G__37946 = seq__36932_37939;
var G__37947 = chunk__36934_37940;
var G__37948 = count__36935_37941;
var G__37949 = (i__36936_37942 + (1));
seq__36932_37939 = G__37946;
chunk__36934_37940 = G__37947;
count__36935_37941 = G__37948;
i__36936_37942 = G__37949;
continue;
} else {
var G__37951 = seq__36932_37939;
var G__37952 = chunk__36934_37940;
var G__37953 = count__36935_37941;
var G__37954 = (i__36936_37942 + (1));
seq__36932_37939 = G__37951;
chunk__36934_37940 = G__37952;
count__36935_37941 = G__37953;
i__36936_37942 = G__37954;
continue;
}
} else {
var temp__5735__auto___37957 = cljs.core.seq(seq__36932_37939);
if(temp__5735__auto___37957){
var seq__36932_37958__$1 = temp__5735__auto___37957;
if(cljs.core.chunked_seq_QMARK_(seq__36932_37958__$1)){
var c__4556__auto___37959 = cljs.core.chunk_first(seq__36932_37958__$1);
var G__37960 = cljs.core.chunk_rest(seq__36932_37958__$1);
var G__37961 = c__4556__auto___37959;
var G__37962 = cljs.core.count(c__4556__auto___37959);
var G__37963 = (0);
seq__36932_37939 = G__37960;
chunk__36934_37940 = G__37961;
count__36935_37941 = G__37962;
i__36936_37942 = G__37963;
continue;
} else {
var child_37964 = cljs.core.first(seq__36932_37958__$1);
if(cljs.core.truth_(child_37964)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37964);


var G__37968 = cljs.core.next(seq__36932_37958__$1);
var G__37969 = null;
var G__37970 = (0);
var G__37971 = (0);
seq__36932_37939 = G__37968;
chunk__36934_37940 = G__37969;
count__36935_37941 = G__37970;
i__36936_37942 = G__37971;
continue;
} else {
var G__37975 = cljs.core.next(seq__36932_37958__$1);
var G__37976 = null;
var G__37977 = (0);
var G__37978 = (0);
seq__36932_37939 = G__37975;
chunk__36934_37940 = G__37976;
count__36935_37941 = G__37977;
i__36936_37942 = G__37978;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37938);
}


var G__37980 = seq__36898_37931;
var G__37981 = chunk__36899_37932;
var G__37982 = count__36900_37933;
var G__37983 = (i__36901_37934 + (1));
seq__36898_37931 = G__37980;
chunk__36899_37932 = G__37981;
count__36900_37933 = G__37982;
i__36901_37934 = G__37983;
continue;
} else {
var temp__5735__auto___37985 = cljs.core.seq(seq__36898_37931);
if(temp__5735__auto___37985){
var seq__36898_37987__$1 = temp__5735__auto___37985;
if(cljs.core.chunked_seq_QMARK_(seq__36898_37987__$1)){
var c__4556__auto___37988 = cljs.core.chunk_first(seq__36898_37987__$1);
var G__37989 = cljs.core.chunk_rest(seq__36898_37987__$1);
var G__37990 = c__4556__auto___37988;
var G__37991 = cljs.core.count(c__4556__auto___37988);
var G__37992 = (0);
seq__36898_37931 = G__37989;
chunk__36899_37932 = G__37990;
count__36900_37933 = G__37991;
i__36901_37934 = G__37992;
continue;
} else {
var child_struct_37996 = cljs.core.first(seq__36898_37987__$1);
var children_37997 = shadow.dom.dom_node(child_struct_37996);
if(cljs.core.seq_QMARK_(children_37997)){
var seq__36942_37998 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37997));
var chunk__36944_37999 = null;
var count__36945_38000 = (0);
var i__36946_38001 = (0);
while(true){
if((i__36946_38001 < count__36945_38000)){
var child_38002 = chunk__36944_37999.cljs$core$IIndexed$_nth$arity$2(null,i__36946_38001);
if(cljs.core.truth_(child_38002)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38002);


var G__38003 = seq__36942_37998;
var G__38004 = chunk__36944_37999;
var G__38005 = count__36945_38000;
var G__38006 = (i__36946_38001 + (1));
seq__36942_37998 = G__38003;
chunk__36944_37999 = G__38004;
count__36945_38000 = G__38005;
i__36946_38001 = G__38006;
continue;
} else {
var G__38008 = seq__36942_37998;
var G__38009 = chunk__36944_37999;
var G__38010 = count__36945_38000;
var G__38011 = (i__36946_38001 + (1));
seq__36942_37998 = G__38008;
chunk__36944_37999 = G__38009;
count__36945_38000 = G__38010;
i__36946_38001 = G__38011;
continue;
}
} else {
var temp__5735__auto___38015__$1 = cljs.core.seq(seq__36942_37998);
if(temp__5735__auto___38015__$1){
var seq__36942_38016__$1 = temp__5735__auto___38015__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36942_38016__$1)){
var c__4556__auto___38017 = cljs.core.chunk_first(seq__36942_38016__$1);
var G__38018 = cljs.core.chunk_rest(seq__36942_38016__$1);
var G__38019 = c__4556__auto___38017;
var G__38020 = cljs.core.count(c__4556__auto___38017);
var G__38021 = (0);
seq__36942_37998 = G__38018;
chunk__36944_37999 = G__38019;
count__36945_38000 = G__38020;
i__36946_38001 = G__38021;
continue;
} else {
var child_38022 = cljs.core.first(seq__36942_38016__$1);
if(cljs.core.truth_(child_38022)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38022);


var G__38024 = cljs.core.next(seq__36942_38016__$1);
var G__38025 = null;
var G__38026 = (0);
var G__38027 = (0);
seq__36942_37998 = G__38024;
chunk__36944_37999 = G__38025;
count__36945_38000 = G__38026;
i__36946_38001 = G__38027;
continue;
} else {
var G__38028 = cljs.core.next(seq__36942_38016__$1);
var G__38029 = null;
var G__38030 = (0);
var G__38031 = (0);
seq__36942_37998 = G__38028;
chunk__36944_37999 = G__38029;
count__36945_38000 = G__38030;
i__36946_38001 = G__38031;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37997);
}


var G__38032 = cljs.core.next(seq__36898_37987__$1);
var G__38033 = null;
var G__38034 = (0);
var G__38035 = (0);
seq__36898_37931 = G__38032;
chunk__36899_37932 = G__38033;
count__36900_37933 = G__38034;
i__36901_37934 = G__38035;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__36978 = cljs.core.seq(node);
var chunk__36979 = null;
var count__36980 = (0);
var i__36981 = (0);
while(true){
if((i__36981 < count__36980)){
var n = chunk__36979.cljs$core$IIndexed$_nth$arity$2(null,i__36981);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38048 = seq__36978;
var G__38049 = chunk__36979;
var G__38050 = count__36980;
var G__38051 = (i__36981 + (1));
seq__36978 = G__38048;
chunk__36979 = G__38049;
count__36980 = G__38050;
i__36981 = G__38051;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36978);
if(temp__5735__auto__){
var seq__36978__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36978__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36978__$1);
var G__38052 = cljs.core.chunk_rest(seq__36978__$1);
var G__38053 = c__4556__auto__;
var G__38054 = cljs.core.count(c__4556__auto__);
var G__38055 = (0);
seq__36978 = G__38052;
chunk__36979 = G__38053;
count__36980 = G__38054;
i__36981 = G__38055;
continue;
} else {
var n = cljs.core.first(seq__36978__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38060 = cljs.core.next(seq__36978__$1);
var G__38061 = null;
var G__38062 = (0);
var G__38063 = (0);
seq__36978 = G__38060;
chunk__36979 = G__38061;
count__36980 = G__38062;
i__36981 = G__38063;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__36995 = arguments.length;
switch (G__36995) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__37005 = arguments.length;
switch (G__37005) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__37019 = arguments.length;
switch (G__37019) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38076 = arguments.length;
var i__4737__auto___38078 = (0);
while(true){
if((i__4737__auto___38078 < len__4736__auto___38076)){
args__4742__auto__.push((arguments[i__4737__auto___38078]));

var G__38079 = (i__4737__auto___38078 + (1));
i__4737__auto___38078 = G__38079;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__37039_38084 = cljs.core.seq(nodes);
var chunk__37040_38085 = null;
var count__37041_38086 = (0);
var i__37042_38087 = (0);
while(true){
if((i__37042_38087 < count__37041_38086)){
var node_38088 = chunk__37040_38085.cljs$core$IIndexed$_nth$arity$2(null,i__37042_38087);
fragment.appendChild(shadow.dom._to_dom(node_38088));


var G__38089 = seq__37039_38084;
var G__38090 = chunk__37040_38085;
var G__38091 = count__37041_38086;
var G__38092 = (i__37042_38087 + (1));
seq__37039_38084 = G__38089;
chunk__37040_38085 = G__38090;
count__37041_38086 = G__38091;
i__37042_38087 = G__38092;
continue;
} else {
var temp__5735__auto___38093 = cljs.core.seq(seq__37039_38084);
if(temp__5735__auto___38093){
var seq__37039_38094__$1 = temp__5735__auto___38093;
if(cljs.core.chunked_seq_QMARK_(seq__37039_38094__$1)){
var c__4556__auto___38096 = cljs.core.chunk_first(seq__37039_38094__$1);
var G__38097 = cljs.core.chunk_rest(seq__37039_38094__$1);
var G__38098 = c__4556__auto___38096;
var G__38099 = cljs.core.count(c__4556__auto___38096);
var G__38100 = (0);
seq__37039_38084 = G__38097;
chunk__37040_38085 = G__38098;
count__37041_38086 = G__38099;
i__37042_38087 = G__38100;
continue;
} else {
var node_38103 = cljs.core.first(seq__37039_38094__$1);
fragment.appendChild(shadow.dom._to_dom(node_38103));


var G__38104 = cljs.core.next(seq__37039_38094__$1);
var G__38105 = null;
var G__38106 = (0);
var G__38107 = (0);
seq__37039_38084 = G__38104;
chunk__37040_38085 = G__38105;
count__37041_38086 = G__38106;
i__37042_38087 = G__38107;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq37033){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37033));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__37052_38108 = cljs.core.seq(scripts);
var chunk__37053_38109 = null;
var count__37054_38110 = (0);
var i__37055_38111 = (0);
while(true){
if((i__37055_38111 < count__37054_38110)){
var vec__37065_38112 = chunk__37053_38109.cljs$core$IIndexed$_nth$arity$2(null,i__37055_38111);
var script_tag_38113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37065_38112,(0),null);
var script_body_38114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37065_38112,(1),null);
eval(script_body_38114);


var G__38115 = seq__37052_38108;
var G__38116 = chunk__37053_38109;
var G__38117 = count__37054_38110;
var G__38118 = (i__37055_38111 + (1));
seq__37052_38108 = G__38115;
chunk__37053_38109 = G__38116;
count__37054_38110 = G__38117;
i__37055_38111 = G__38118;
continue;
} else {
var temp__5735__auto___38119 = cljs.core.seq(seq__37052_38108);
if(temp__5735__auto___38119){
var seq__37052_38120__$1 = temp__5735__auto___38119;
if(cljs.core.chunked_seq_QMARK_(seq__37052_38120__$1)){
var c__4556__auto___38121 = cljs.core.chunk_first(seq__37052_38120__$1);
var G__38122 = cljs.core.chunk_rest(seq__37052_38120__$1);
var G__38123 = c__4556__auto___38121;
var G__38124 = cljs.core.count(c__4556__auto___38121);
var G__38125 = (0);
seq__37052_38108 = G__38122;
chunk__37053_38109 = G__38123;
count__37054_38110 = G__38124;
i__37055_38111 = G__38125;
continue;
} else {
var vec__37068_38127 = cljs.core.first(seq__37052_38120__$1);
var script_tag_38128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37068_38127,(0),null);
var script_body_38129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37068_38127,(1),null);
eval(script_body_38129);


var G__38132 = cljs.core.next(seq__37052_38120__$1);
var G__38133 = null;
var G__38134 = (0);
var G__38135 = (0);
seq__37052_38108 = G__38132;
chunk__37053_38109 = G__38133;
count__37054_38110 = G__38134;
i__37055_38111 = G__38135;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__37071){
var vec__37072 = p__37071;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37072,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37072,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__37090 = arguments.length;
switch (G__37090) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__37111 = cljs.core.seq(style_keys);
var chunk__37112 = null;
var count__37113 = (0);
var i__37114 = (0);
while(true){
if((i__37114 < count__37113)){
var it = chunk__37112.cljs$core$IIndexed$_nth$arity$2(null,i__37114);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38140 = seq__37111;
var G__38141 = chunk__37112;
var G__38142 = count__37113;
var G__38143 = (i__37114 + (1));
seq__37111 = G__38140;
chunk__37112 = G__38141;
count__37113 = G__38142;
i__37114 = G__38143;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37111);
if(temp__5735__auto__){
var seq__37111__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37111__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37111__$1);
var G__38144 = cljs.core.chunk_rest(seq__37111__$1);
var G__38145 = c__4556__auto__;
var G__38146 = cljs.core.count(c__4556__auto__);
var G__38147 = (0);
seq__37111 = G__38144;
chunk__37112 = G__38145;
count__37113 = G__38146;
i__37114 = G__38147;
continue;
} else {
var it = cljs.core.first(seq__37111__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38148 = cljs.core.next(seq__37111__$1);
var G__38149 = null;
var G__38150 = (0);
var G__38151 = (0);
seq__37111 = G__38148;
chunk__37112 = G__38149;
count__37113 = G__38150;
i__37114 = G__38151;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k37136,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__37147 = k37136;
var G__37147__$1 = (((G__37147 instanceof cljs.core.Keyword))?G__37147.fqn:null);
switch (G__37147__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37136,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__37149){
var vec__37150 = p__37149;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37150,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37150,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37135){
var self__ = this;
var G__37135__$1 = this;
return (new cljs.core.RecordIter((0),G__37135__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37137,other37138){
var self__ = this;
var this37137__$1 = this;
return (((!((other37138 == null)))) && ((this37137__$1.constructor === other37138.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37137__$1.x,other37138.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37137__$1.y,other37138.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37137__$1.__extmap,other37138.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__37135){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__37169 = cljs.core.keyword_identical_QMARK_;
var expr__37170 = k__4388__auto__;
if(cljs.core.truth_((pred__37169.cljs$core$IFn$_invoke$arity$2 ? pred__37169.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__37170) : pred__37169.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__37170)))){
return (new shadow.dom.Coordinate(G__37135,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37169.cljs$core$IFn$_invoke$arity$2 ? pred__37169.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__37170) : pred__37169.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__37170)))){
return (new shadow.dom.Coordinate(self__.x,G__37135,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__37135),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__37135){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__37135,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__37140){
var extmap__4419__auto__ = (function (){var G__37194 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37140,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__37140)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37194);
} else {
return G__37194;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__37140),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__37140),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k37212,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__37225 = k37212;
var G__37225__$1 = (((G__37225 instanceof cljs.core.Keyword))?G__37225.fqn:null);
switch (G__37225__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37212,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__37234){
var vec__37235 = p__37234;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37235,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37235,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37211){
var self__ = this;
var G__37211__$1 = this;
return (new cljs.core.RecordIter((0),G__37211__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37213,other37214){
var self__ = this;
var this37213__$1 = this;
return (((!((other37214 == null)))) && ((this37213__$1.constructor === other37214.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37213__$1.w,other37214.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37213__$1.h,other37214.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37213__$1.__extmap,other37214.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__37211){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__37259 = cljs.core.keyword_identical_QMARK_;
var expr__37260 = k__4388__auto__;
if(cljs.core.truth_((pred__37259.cljs$core$IFn$_invoke$arity$2 ? pred__37259.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__37260) : pred__37259.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__37260)))){
return (new shadow.dom.Size(G__37211,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37259.cljs$core$IFn$_invoke$arity$2 ? pred__37259.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__37260) : pred__37259.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__37260)))){
return (new shadow.dom.Size(self__.w,G__37211,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__37211),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__37211){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__37211,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__37216){
var extmap__4419__auto__ = (function (){var G__37300 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37216,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__37216)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37300);
} else {
return G__37300;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__37216),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__37216),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__38251 = (i + (1));
var G__38252 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__38251;
ret = G__38252;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37405){
var vec__37406 = p__37405;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37406,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37406,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__37417 = arguments.length;
switch (G__37417) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__38259 = ps;
var G__38260 = (i + (1));
el__$1 = G__38259;
i = G__38260;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__37480 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37480,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37480,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37480,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__37484_38264 = cljs.core.seq(props);
var chunk__37485_38265 = null;
var count__37486_38266 = (0);
var i__37487_38267 = (0);
while(true){
if((i__37487_38267 < count__37486_38266)){
var vec__37502_38268 = chunk__37485_38265.cljs$core$IIndexed$_nth$arity$2(null,i__37487_38267);
var k_38269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37502_38268,(0),null);
var v_38270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37502_38268,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_38269);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38269),v_38270);


var G__38275 = seq__37484_38264;
var G__38276 = chunk__37485_38265;
var G__38277 = count__37486_38266;
var G__38278 = (i__37487_38267 + (1));
seq__37484_38264 = G__38275;
chunk__37485_38265 = G__38276;
count__37486_38266 = G__38277;
i__37487_38267 = G__38278;
continue;
} else {
var temp__5735__auto___38279 = cljs.core.seq(seq__37484_38264);
if(temp__5735__auto___38279){
var seq__37484_38280__$1 = temp__5735__auto___38279;
if(cljs.core.chunked_seq_QMARK_(seq__37484_38280__$1)){
var c__4556__auto___38281 = cljs.core.chunk_first(seq__37484_38280__$1);
var G__38282 = cljs.core.chunk_rest(seq__37484_38280__$1);
var G__38283 = c__4556__auto___38281;
var G__38284 = cljs.core.count(c__4556__auto___38281);
var G__38285 = (0);
seq__37484_38264 = G__38282;
chunk__37485_38265 = G__38283;
count__37486_38266 = G__38284;
i__37487_38267 = G__38285;
continue;
} else {
var vec__37505_38286 = cljs.core.first(seq__37484_38280__$1);
var k_38287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37505_38286,(0),null);
var v_38288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37505_38286,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_38287);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38287),v_38288);


var G__38293 = cljs.core.next(seq__37484_38280__$1);
var G__38294 = null;
var G__38295 = (0);
var G__38296 = (0);
seq__37484_38264 = G__38293;
chunk__37485_38265 = G__38294;
count__37486_38266 = G__38295;
i__37487_38267 = G__38296;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__37547 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37547,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37547,(1),null);
var seq__37552_38305 = cljs.core.seq(node_children);
var chunk__37554_38306 = null;
var count__37555_38307 = (0);
var i__37556_38308 = (0);
while(true){
if((i__37556_38308 < count__37555_38307)){
var child_struct_38312 = chunk__37554_38306.cljs$core$IIndexed$_nth$arity$2(null,i__37556_38308);
if((!((child_struct_38312 == null)))){
if(typeof child_struct_38312 === 'string'){
var text_38313 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38313),child_struct_38312].join(''));
} else {
var children_38314 = shadow.dom.svg_node(child_struct_38312);
if(cljs.core.seq_QMARK_(children_38314)){
var seq__37635_38315 = cljs.core.seq(children_38314);
var chunk__37637_38316 = null;
var count__37638_38317 = (0);
var i__37639_38318 = (0);
while(true){
if((i__37639_38318 < count__37638_38317)){
var child_38319 = chunk__37637_38316.cljs$core$IIndexed$_nth$arity$2(null,i__37639_38318);
if(cljs.core.truth_(child_38319)){
node.appendChild(child_38319);


var G__38320 = seq__37635_38315;
var G__38321 = chunk__37637_38316;
var G__38322 = count__37638_38317;
var G__38323 = (i__37639_38318 + (1));
seq__37635_38315 = G__38320;
chunk__37637_38316 = G__38321;
count__37638_38317 = G__38322;
i__37639_38318 = G__38323;
continue;
} else {
var G__38324 = seq__37635_38315;
var G__38325 = chunk__37637_38316;
var G__38326 = count__37638_38317;
var G__38327 = (i__37639_38318 + (1));
seq__37635_38315 = G__38324;
chunk__37637_38316 = G__38325;
count__37638_38317 = G__38326;
i__37639_38318 = G__38327;
continue;
}
} else {
var temp__5735__auto___38328 = cljs.core.seq(seq__37635_38315);
if(temp__5735__auto___38328){
var seq__37635_38329__$1 = temp__5735__auto___38328;
if(cljs.core.chunked_seq_QMARK_(seq__37635_38329__$1)){
var c__4556__auto___38330 = cljs.core.chunk_first(seq__37635_38329__$1);
var G__38331 = cljs.core.chunk_rest(seq__37635_38329__$1);
var G__38332 = c__4556__auto___38330;
var G__38333 = cljs.core.count(c__4556__auto___38330);
var G__38334 = (0);
seq__37635_38315 = G__38331;
chunk__37637_38316 = G__38332;
count__37638_38317 = G__38333;
i__37639_38318 = G__38334;
continue;
} else {
var child_38335 = cljs.core.first(seq__37635_38329__$1);
if(cljs.core.truth_(child_38335)){
node.appendChild(child_38335);


var G__38336 = cljs.core.next(seq__37635_38329__$1);
var G__38337 = null;
var G__38338 = (0);
var G__38339 = (0);
seq__37635_38315 = G__38336;
chunk__37637_38316 = G__38337;
count__37638_38317 = G__38338;
i__37639_38318 = G__38339;
continue;
} else {
var G__38340 = cljs.core.next(seq__37635_38329__$1);
var G__38341 = null;
var G__38342 = (0);
var G__38343 = (0);
seq__37635_38315 = G__38340;
chunk__37637_38316 = G__38341;
count__37638_38317 = G__38342;
i__37639_38318 = G__38343;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38314);
}
}


var G__38346 = seq__37552_38305;
var G__38347 = chunk__37554_38306;
var G__38348 = count__37555_38307;
var G__38349 = (i__37556_38308 + (1));
seq__37552_38305 = G__38346;
chunk__37554_38306 = G__38347;
count__37555_38307 = G__38348;
i__37556_38308 = G__38349;
continue;
} else {
var G__38350 = seq__37552_38305;
var G__38351 = chunk__37554_38306;
var G__38352 = count__37555_38307;
var G__38353 = (i__37556_38308 + (1));
seq__37552_38305 = G__38350;
chunk__37554_38306 = G__38351;
count__37555_38307 = G__38352;
i__37556_38308 = G__38353;
continue;
}
} else {
var temp__5735__auto___38354 = cljs.core.seq(seq__37552_38305);
if(temp__5735__auto___38354){
var seq__37552_38355__$1 = temp__5735__auto___38354;
if(cljs.core.chunked_seq_QMARK_(seq__37552_38355__$1)){
var c__4556__auto___38356 = cljs.core.chunk_first(seq__37552_38355__$1);
var G__38357 = cljs.core.chunk_rest(seq__37552_38355__$1);
var G__38358 = c__4556__auto___38356;
var G__38359 = cljs.core.count(c__4556__auto___38356);
var G__38360 = (0);
seq__37552_38305 = G__38357;
chunk__37554_38306 = G__38358;
count__37555_38307 = G__38359;
i__37556_38308 = G__38360;
continue;
} else {
var child_struct_38361 = cljs.core.first(seq__37552_38355__$1);
if((!((child_struct_38361 == null)))){
if(typeof child_struct_38361 === 'string'){
var text_38362 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38362),child_struct_38361].join(''));
} else {
var children_38363 = shadow.dom.svg_node(child_struct_38361);
if(cljs.core.seq_QMARK_(children_38363)){
var seq__37648_38364 = cljs.core.seq(children_38363);
var chunk__37650_38365 = null;
var count__37651_38366 = (0);
var i__37652_38367 = (0);
while(true){
if((i__37652_38367 < count__37651_38366)){
var child_38368 = chunk__37650_38365.cljs$core$IIndexed$_nth$arity$2(null,i__37652_38367);
if(cljs.core.truth_(child_38368)){
node.appendChild(child_38368);


var G__38369 = seq__37648_38364;
var G__38370 = chunk__37650_38365;
var G__38371 = count__37651_38366;
var G__38372 = (i__37652_38367 + (1));
seq__37648_38364 = G__38369;
chunk__37650_38365 = G__38370;
count__37651_38366 = G__38371;
i__37652_38367 = G__38372;
continue;
} else {
var G__38373 = seq__37648_38364;
var G__38374 = chunk__37650_38365;
var G__38375 = count__37651_38366;
var G__38376 = (i__37652_38367 + (1));
seq__37648_38364 = G__38373;
chunk__37650_38365 = G__38374;
count__37651_38366 = G__38375;
i__37652_38367 = G__38376;
continue;
}
} else {
var temp__5735__auto___38378__$1 = cljs.core.seq(seq__37648_38364);
if(temp__5735__auto___38378__$1){
var seq__37648_38379__$1 = temp__5735__auto___38378__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37648_38379__$1)){
var c__4556__auto___38380 = cljs.core.chunk_first(seq__37648_38379__$1);
var G__38381 = cljs.core.chunk_rest(seq__37648_38379__$1);
var G__38382 = c__4556__auto___38380;
var G__38383 = cljs.core.count(c__4556__auto___38380);
var G__38384 = (0);
seq__37648_38364 = G__38381;
chunk__37650_38365 = G__38382;
count__37651_38366 = G__38383;
i__37652_38367 = G__38384;
continue;
} else {
var child_38385 = cljs.core.first(seq__37648_38379__$1);
if(cljs.core.truth_(child_38385)){
node.appendChild(child_38385);


var G__38386 = cljs.core.next(seq__37648_38379__$1);
var G__38387 = null;
var G__38388 = (0);
var G__38389 = (0);
seq__37648_38364 = G__38386;
chunk__37650_38365 = G__38387;
count__37651_38366 = G__38388;
i__37652_38367 = G__38389;
continue;
} else {
var G__38390 = cljs.core.next(seq__37648_38379__$1);
var G__38391 = null;
var G__38392 = (0);
var G__38393 = (0);
seq__37648_38364 = G__38390;
chunk__37650_38365 = G__38391;
count__37651_38366 = G__38392;
i__37652_38367 = G__38393;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38363);
}
}


var G__38394 = cljs.core.next(seq__37552_38355__$1);
var G__38395 = null;
var G__38396 = (0);
var G__38397 = (0);
seq__37552_38305 = G__38394;
chunk__37554_38306 = G__38395;
count__37555_38307 = G__38396;
i__37556_38308 = G__38397;
continue;
} else {
var G__38398 = cljs.core.next(seq__37552_38355__$1);
var G__38399 = null;
var G__38400 = (0);
var G__38401 = (0);
seq__37552_38305 = G__38398;
chunk__37554_38306 = G__38399;
count__37555_38307 = G__38400;
i__37556_38308 = G__38401;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38402 = arguments.length;
var i__4737__auto___38403 = (0);
while(true){
if((i__4737__auto___38403 < len__4736__auto___38402)){
args__4742__auto__.push((arguments[i__4737__auto___38403]));

var G__38405 = (i__4737__auto___38403 + (1));
i__4737__auto___38403 = G__38405;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq37688){
var G__37690 = cljs.core.first(seq37688);
var seq37688__$1 = cljs.core.next(seq37688);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37690,seq37688__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__37706 = arguments.length;
switch (G__37706) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__34055__auto___38427 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34056__auto__ = (function (){var switch__33532__auto__ = (function (state_37727){
var state_val_37728 = (state_37727[(1)]);
if((state_val_37728 === (1))){
var state_37727__$1 = state_37727;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37727__$1,(2),once_or_cleanup);
} else {
if((state_val_37728 === (2))){
var inst_37723 = (state_37727[(2)]);
var inst_37725 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_37727__$1 = (function (){var statearr_37732 = state_37727;
(statearr_37732[(7)] = inst_37723);

return statearr_37732;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37727__$1,inst_37725);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33533__auto__ = null;
var shadow$dom$state_machine__33533__auto____0 = (function (){
var statearr_37734 = [null,null,null,null,null,null,null,null];
(statearr_37734[(0)] = shadow$dom$state_machine__33533__auto__);

(statearr_37734[(1)] = (1));

return statearr_37734;
});
var shadow$dom$state_machine__33533__auto____1 = (function (state_37727){
while(true){
var ret_value__33538__auto__ = (function (){try{while(true){
var result__33539__auto__ = switch__33532__auto__(state_37727);
if(cljs.core.keyword_identical_QMARK_(result__33539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33539__auto__;
}
break;
}
}catch (e37736){var ex__33540__auto__ = e37736;
var statearr_37739_38432 = state_37727;
(statearr_37739_38432[(2)] = ex__33540__auto__);


if(cljs.core.seq((state_37727[(4)]))){
var statearr_37741_38433 = state_37727;
(statearr_37741_38433[(1)] = cljs.core.first((state_37727[(4)])));

} else {
throw ex__33540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38437 = state_37727;
state_37727 = G__38437;
continue;
} else {
return ret_value__33538__auto__;
}
break;
}
});
shadow$dom$state_machine__33533__auto__ = function(state_37727){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33533__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33533__auto____1.call(this,state_37727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33533__auto____0;
shadow$dom$state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33533__auto____1;
return shadow$dom$state_machine__33533__auto__;
})()
})();
var state__34057__auto__ = (function (){var statearr_37747 = f__34056__auto__();
(statearr_37747[(6)] = c__34055__auto___38427);

return statearr_37747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34057__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
