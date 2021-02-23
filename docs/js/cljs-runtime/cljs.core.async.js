goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__34171 = arguments.length;
switch (G__34171) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34172 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34172 = (function (f,blockable,meta34173){
this.f = f;
this.blockable = blockable;
this.meta34173 = meta34173;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34174,meta34173__$1){
var self__ = this;
var _34174__$1 = this;
return (new cljs.core.async.t_cljs$core$async34172(self__.f,self__.blockable,meta34173__$1));
}));

(cljs.core.async.t_cljs$core$async34172.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34174){
var self__ = this;
var _34174__$1 = this;
return self__.meta34173;
}));

(cljs.core.async.t_cljs$core$async34172.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34172.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34172.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async34172.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async34172.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34173","meta34173",-1532772326,null)], null);
}));

(cljs.core.async.t_cljs$core$async34172.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34172.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34172");

(cljs.core.async.t_cljs$core$async34172.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34172");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34172.
 */
cljs.core.async.__GT_t_cljs$core$async34172 = (function cljs$core$async$__GT_t_cljs$core$async34172(f__$1,blockable__$1,meta34173){
return (new cljs.core.async.t_cljs$core$async34172(f__$1,blockable__$1,meta34173));
});

}

return (new cljs.core.async.t_cljs$core$async34172(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__34181 = arguments.length;
switch (G__34181) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__34183 = arguments.length;
switch (G__34183) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__34187 = arguments.length;
switch (G__34187) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_36522 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36522) : fn1.call(null,val_36522));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36522) : fn1.call(null,val_36522));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__34196 = arguments.length;
switch (G__34196) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___36537 = n;
var x_36538 = (0);
while(true){
if((x_36538 < n__4613__auto___36537)){
(a[x_36538] = x_36538);

var G__36539 = (x_36538 + (1));
x_36538 = G__36539;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34202 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34202 = (function (flag,meta34203){
this.flag = flag;
this.meta34203 = meta34203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34204,meta34203__$1){
var self__ = this;
var _34204__$1 = this;
return (new cljs.core.async.t_cljs$core$async34202(self__.flag,meta34203__$1));
}));

(cljs.core.async.t_cljs$core$async34202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34204){
var self__ = this;
var _34204__$1 = this;
return self__.meta34203;
}));

(cljs.core.async.t_cljs$core$async34202.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34202.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34202.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34202.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34203","meta34203",-617028325,null)], null);
}));

(cljs.core.async.t_cljs$core$async34202.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34202");

(cljs.core.async.t_cljs$core$async34202.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34202");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34202.
 */
cljs.core.async.__GT_t_cljs$core$async34202 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34202(flag__$1,meta34203){
return (new cljs.core.async.t_cljs$core$async34202(flag__$1,meta34203));
});

}

return (new cljs.core.async.t_cljs$core$async34202(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34210 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34210 = (function (flag,cb,meta34211){
this.flag = flag;
this.cb = cb;
this.meta34211 = meta34211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34212,meta34211__$1){
var self__ = this;
var _34212__$1 = this;
return (new cljs.core.async.t_cljs$core$async34210(self__.flag,self__.cb,meta34211__$1));
}));

(cljs.core.async.t_cljs$core$async34210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34212){
var self__ = this;
var _34212__$1 = this;
return self__.meta34211;
}));

(cljs.core.async.t_cljs$core$async34210.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34210.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34210.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34210.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34211","meta34211",-365008376,null)], null);
}));

(cljs.core.async.t_cljs$core$async34210.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34210.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34210");

(cljs.core.async.t_cljs$core$async34210.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34210");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34210.
 */
cljs.core.async.__GT_t_cljs$core$async34210 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34210(flag__$1,cb__$1,meta34211){
return (new cljs.core.async.t_cljs$core$async34210(flag__$1,cb__$1,meta34211));
});

}

return (new cljs.core.async.t_cljs$core$async34210(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34216_SHARP_){
var G__34220 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34216_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34220) : fret.call(null,G__34220));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34217_SHARP_){
var G__34222 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34217_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34222) : fret.call(null,G__34222));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36561 = (i + (1));
i = G__36561;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36564 = arguments.length;
var i__4737__auto___36565 = (0);
while(true){
if((i__4737__auto___36565 < len__4736__auto___36564)){
args__4742__auto__.push((arguments[i__4737__auto___36565]));

var G__36566 = (i__4737__auto___36565 + (1));
i__4737__auto___36565 = G__36566;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34235){
var map__34236 = p__34235;
var map__34236__$1 = (((((!((map__34236 == null))))?(((((map__34236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34236):map__34236);
var opts = map__34236__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34230){
var G__34231 = cljs.core.first(seq34230);
var seq34230__$1 = cljs.core.next(seq34230);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34231,seq34230__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__34254 = arguments.length;
switch (G__34254) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34055__auto___36586 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34056__auto__ = (function (){var switch__33532__auto__ = (function (state_34304){
var state_val_34311 = (state_34304[(1)]);
if((state_val_34311 === (7))){
var inst_34296 = (state_34304[(2)]);
var state_34304__$1 = state_34304;
var statearr_34331_36587 = state_34304__$1;
(statearr_34331_36587[(2)] = inst_34296);

(statearr_34331_36587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (1))){
var state_34304__$1 = state_34304;
var statearr_34333_36588 = state_34304__$1;
(statearr_34333_36588[(2)] = null);

(statearr_34333_36588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (4))){
var inst_34272 = (state_34304[(7)]);
var inst_34272__$1 = (state_34304[(2)]);
var inst_34275 = (inst_34272__$1 == null);
var state_34304__$1 = (function (){var statearr_34336 = state_34304;
(statearr_34336[(7)] = inst_34272__$1);

return statearr_34336;
})();
if(cljs.core.truth_(inst_34275)){
var statearr_34337_36589 = state_34304__$1;
(statearr_34337_36589[(1)] = (5));

} else {
var statearr_34338_36590 = state_34304__$1;
(statearr_34338_36590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (13))){
var state_34304__$1 = state_34304;
var statearr_34343_36593 = state_34304__$1;
(statearr_34343_36593[(2)] = null);

(statearr_34343_36593[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (6))){
var inst_34272 = (state_34304[(7)]);
var state_34304__$1 = state_34304;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34304__$1,(11),to,inst_34272);
} else {
if((state_val_34311 === (3))){
var inst_34300 = (state_34304[(2)]);
var state_34304__$1 = state_34304;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34304__$1,inst_34300);
} else {
if((state_val_34311 === (12))){
var state_34304__$1 = state_34304;
var statearr_34348_36596 = state_34304__$1;
(statearr_34348_36596[(2)] = null);

(statearr_34348_36596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (2))){
var state_34304__$1 = state_34304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34304__$1,(4),from);
} else {
if((state_val_34311 === (11))){
var inst_34284 = (state_34304[(2)]);
var state_34304__$1 = state_34304;
if(cljs.core.truth_(inst_34284)){
var statearr_34358_36597 = state_34304__$1;
(statearr_34358_36597[(1)] = (12));

} else {
var statearr_34359_36598 = state_34304__$1;
(statearr_34359_36598[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (9))){
var state_34304__$1 = state_34304;
var statearr_34361_36606 = state_34304__$1;
(statearr_34361_36606[(2)] = null);

(statearr_34361_36606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (5))){
var state_34304__$1 = state_34304;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34362_36608 = state_34304__$1;
(statearr_34362_36608[(1)] = (8));

} else {
var statearr_34363_36609 = state_34304__$1;
(statearr_34363_36609[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (14))){
var inst_34294 = (state_34304[(2)]);
var state_34304__$1 = state_34304;
var statearr_34364_36610 = state_34304__$1;
(statearr_34364_36610[(2)] = inst_34294);

(statearr_34364_36610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (10))){
var inst_34281 = (state_34304[(2)]);
var state_34304__$1 = state_34304;
var statearr_34366_36611 = state_34304__$1;
(statearr_34366_36611[(2)] = inst_34281);

(statearr_34366_36611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (8))){
var inst_34278 = cljs.core.async.close_BANG_(to);
var state_34304__$1 = state_34304;
var statearr_34367_36612 = state_34304__$1;
(statearr_34367_36612[(2)] = inst_34278);

(statearr_34367_36612[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33533__auto__ = null;
var cljs$core$async$state_machine__33533__auto____0 = (function (){
var statearr_34374 = [null,null,null,null,null,null,null,null];
(statearr_34374[(0)] = cljs$core$async$state_machine__33533__auto__);

(statearr_34374[(1)] = (1));

return statearr_34374;
});
var cljs$core$async$state_machine__33533__auto____1 = (function (state_34304){
while(true){
var ret_value__33538__auto__ = (function (){try{while(true){
var result__33539__auto__ = switch__33532__auto__(state_34304);
if(cljs.core.keyword_identical_QMARK_(result__33539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33539__auto__;
}
break;
}
}catch (e34376){var ex__33540__auto__ = e34376;
var statearr_34378_36614 = state_34304;
(statearr_34378_36614[(2)] = ex__33540__auto__);


if(cljs.core.seq((state_34304[(4)]))){
var statearr_34379_36615 = state_34304;
(statearr_34379_36615[(1)] = cljs.core.first((state_34304[(4)])));

} else {
throw ex__33540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36616 = state_34304;
state_34304 = G__36616;
continue;
} else {
return ret_value__33538__auto__;
}
break;
}
});
cljs$core$async$state_machine__33533__auto__ = function(state_34304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33533__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33533__auto____1.call(this,state_34304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33533__auto____0;
cljs$core$async$state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33533__auto____1;
return cljs$core$async$state_machine__33533__auto__;
})()
})();
var state__34057__auto__ = (function (){var statearr_34380 = f__34056__auto__();
(statearr_34380[(6)] = c__34055__auto___36586);

return statearr_34380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34057__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__34386){
var vec__34387 = p__34386;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34387,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34387,(1),null);
var job = vec__34387;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34055__auto___36625 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34056__auto__ = (function (){var switch__33532__auto__ = (function (state_34396){
var state_val_34397 = (state_34396[(1)]);
if((state_val_34397 === (1))){
var state_34396__$1 = state_34396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34396__$1,(2),res,v);
} else {
if((state_val_34397 === (2))){
var inst_34392 = (state_34396[(2)]);
var inst_34393 = cljs.core.async.close_BANG_(res);
var state_34396__$1 = (function (){var statearr_34399 = state_34396;
(statearr_34399[(7)] = inst_34392);

return statearr_34399;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34396__$1,inst_34393);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33533__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33533__auto____0 = (function (){
var statearr_34400 = [null,null,null,null,null,null,null,null];
(statearr_34400[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33533__auto__);

(statearr_34400[(1)] = (1));

return statearr_34400;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33533__auto____1 = (function (state_34396){
while(true){
var ret_value__33538__auto__ = (function (){try{while(true){
var result__33539__auto__ = switch__33532__auto__(state_34396);
if(cljs.core.keyword_identical_QMARK_(result__33539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33539__auto__;
}
break;
}
}catch (e34401){var ex__33540__auto__ = e34401;
var statearr_34402_36630 = state_34396;
(statearr_34402_36630[(2)] = ex__33540__auto__);


if(cljs.core.seq((state_34396[(4)]))){
var statearr_34403_36631 = state_34396;
(statearr_34403_36631[(1)] = cljs.core.first((state_34396[(4)])));

} else {
throw ex__33540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36632 = state_34396;
state_34396 = G__36632;
continue;
} else {
return ret_value__33538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33533__auto__ = function(state_34396){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33533__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33533__auto____1.call(this,state_34396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33533__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33533__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33533__auto__;
})()
})();
var state__34057__auto__ = (function (){var statearr_34405 = f__34056__auto__();
(statearr_34405[(6)] = c__34055__auto___36625);

return statearr_34405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34057__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34407){
var vec__34408 = p__34407;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34408,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34408,(1),null);
var job = vec__34408;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___36637 = n;
var __36638 = (0);
while(true){
if((__36638 < n__4613__auto___36637)){
var G__34411_36639 = type;
var G__34411_36640__$1 = (((G__34411_36639 instanceof cljs.core.Keyword))?G__34411_36639.fqn:null);
switch (G__34411_36640__$1) {
case "compute":
var c__34055__auto___36642 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36638,c__34055__auto___36642,G__34411_36639,G__34411_36640__$1,n__4613__auto___36637,jobs,results,process,async){
return (function (){
var f__34056__auto__ = (function (){var switch__33532__auto__ = ((function (__36638,c__34055__auto___36642,G__34411_36639,G__34411_36640__$1,n__4613__auto___36637,jobs,results,process,async){
return (function (state_34427){
var state_val_34428 = (state_34427[(1)]);
if((state_val_34428 === (1))){
var state_34427__$1 = state_34427;
var statearr_34430_36645 = state_34427__$1;
(statearr_34430_36645[(2)] = null);

(statearr_34430_36645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (2))){
var state_34427__$1 = state_34427;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34427__$1,(4),jobs);
} else {
if((state_val_34428 === (3))){
var inst_34425 = (state_34427[(2)]);
var state_34427__$1 = state_34427;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34427__$1,inst_34425);
} else {
if((state_val_34428 === (4))){
var inst_34415 = (state_34427[(2)]);
var inst_34417 = process(inst_34415);
var state_34427__$1 = state_34427;
if(cljs.core.truth_(inst_34417)){
var statearr_34444_36646 = state_34427__$1;
(statearr_34444_36646[(1)] = (5));

} else {
var statearr_34449_36647 = state_34427__$1;
(statearr_34449_36647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (5))){
var state_34427__$1 = state_34427;
var statearr_34454_36649 = state_34427__$1;
(statearr_34454_36649[(2)] = null);

(statearr_34454_36649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (6))){
var state_34427__$1 = state_34427;
var statearr_34455_36652 = state_34427__$1;
(statearr_34455_36652[(2)] = null);

(statearr_34455_36652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (7))){
var inst_34423 = (state_34427[(2)]);
var state_34427__$1 = state_34427;
var statearr_34456_36653 = state_34427__$1;
(statearr_34456_36653[(2)] = inst_34423);

(statearr_34456_36653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36638,c__34055__auto___36642,G__34411_36639,G__34411_36640__$1,n__4613__auto___36637,jobs,results,process,async))
;
return ((function (__36638,switch__33532__auto__,c__34055__auto___36642,G__34411_36639,G__34411_36640__$1,n__4613__auto___36637,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33533__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33533__auto____0 = (function (){
var statearr_34458 = [null,null,null,null,null,null,null];
(statearr_34458[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33533__auto__);

(statearr_34458[(1)] = (1));

return statearr_34458;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33533__auto____1 = (function (state_34427){
while(true){
var ret_value__33538__auto__ = (function (){try{while(true){
var result__33539__auto__ = switch__33532__auto__(state_34427);
if(cljs.core.keyword_identical_QMARK_(result__33539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33539__auto__;
}
break;
}
}catch (e34459){var ex__33540__auto__ = e34459;
var statearr_34460_36663 = state_34427;
(statearr_34460_36663[(2)] = ex__33540__auto__);


if(cljs.core.seq((state_34427[(4)]))){
var statearr_34461_36665 = state_34427;
(statearr_34461_36665[(1)] = cljs.core.first((state_34427[(4)])));

} else {
throw ex__33540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36666 = state_34427;
state_34427 = G__36666;
continue;
} else {
return ret_value__33538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33533__auto__ = function(state_34427){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33533__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33533__auto____1.call(this,state_34427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33533__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33533__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33533__auto__;
})()
;})(__36638,switch__33532__auto__,c__34055__auto___36642,G__34411_36639,G__34411_36640__$1,n__4613__auto___36637,jobs,results,process,async))
})();
var state__34057__auto__ = (function (){var statearr_34462 = f__34056__auto__();
(statearr_34462[(6)] = c__34055__auto___36642);

return statearr_34462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34057__auto__);
});})(__36638,c__34055__auto___36642,G__34411_36639,G__34411_36640__$1,n__4613__auto___36637,jobs,results,process,async))
);


break;
case "async":
var c__34055__auto___36668 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36638,c__34055__auto___36668,G__34411_36639,G__34411_36640__$1,n__4613__auto___36637,jobs,results,process,async){
return (function (){
var f__34056__auto__ = (function (){var switch__33532__auto__ = ((function (__36638,c__34055__auto___36668,G__34411_36639,G__34411_36640__$1,n__4613__auto___36637,jobs,results,process,async){
return (function (state_34475){
var state_val_34476 = (state_34475[(1)]);
if((state_val_34476 === (1))){
var state_34475__$1 = state_34475;
var statearr_34482_36669 = state_34475__$1;
(statearr_34482_36669[(2)] = null);

(statearr_34482_36669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (2))){
var state_34475__$1 = state_34475;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34475__$1,(4),jobs);
} else {
if((state_val_34476 === (3))){
var inst_34473 = (state_34475[(2)]);
var state_34475__$1 = state_34475;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34475__$1,inst_34473);
} else {
if((state_val_34476 === (4))){
var inst_34465 = (state_34475[(2)]);
var inst_34466 = async(inst_34465);
var state_34475__$1 = state_34475;
if(cljs.core.truth_(inst_34466)){
var statearr_34490_36672 = state_34475__$1;
(statearr_34490_36672[(1)] = (5));

} else {
var statearr_34492_36673 = state_34475__$1;
(statearr_34492_36673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (5))){
var state_34475__$1 = state_34475;
var statearr_34500_36674 = state_34475__$1;
(statearr_34500_36674[(2)] = null);

(statearr_34500_36674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (6))){
var state_34475__$1 = state_34475;
var statearr_34506_36678 = state_34475__$1;
(statearr_34506_36678[(2)] = null);

(statearr_34506_36678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (7))){
var inst_34471 = (state_34475[(2)]);
var state_34475__$1 = state_34475;
var statearr_34507_36680 = state_34475__$1;
(statearr_34507_36680[(2)] = inst_34471);

(statearr_34507_36680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36638,c__34055__auto___36668,G__34411_36639,G__34411_36640__$1,n__4613__auto___36637,jobs,results,process,async))
;
return ((function (__36638,switch__33532__auto__,c__34055__auto___36668,G__34411_36639,G__34411_36640__$1,n__4613__auto___36637,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33533__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33533__auto____0 = (function (){
var statearr_34508 = [null,null,null,null,null,null,null];
(statearr_34508[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33533__auto__);

(statearr_34508[(1)] = (1));

return statearr_34508;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33533__auto____1 = (function (state_34475){
while(true){
var ret_value__33538__auto__ = (function (){try{while(true){
var result__33539__auto__ = switch__33532__auto__(state_34475);
if(cljs.core.keyword_identical_QMARK_(result__33539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33539__auto__;
}
break;
}
}catch (e34509){var ex__33540__auto__ = e34509;
var statearr_34510_36683 = state_34475;
(statearr_34510_36683[(2)] = ex__33540__auto__);


if(cljs.core.seq((state_34475[(4)]))){
var statearr_34511_36684 = state_34475;
(statearr_34511_36684[(1)] = cljs.core.first((state_34475[(4)])));

} else {
throw ex__33540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36685 = state_34475;
state_34475 = G__36685;
continue;
} else {
return ret_value__33538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33533__auto__ = function(state_34475){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33533__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33533__auto____1.call(this,state_34475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33533__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33533__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33533__auto__;
})()
;})(__36638,switch__33532__auto__,c__34055__auto___36668,G__34411_36639,G__34411_36640__$1,n__4613__auto___36637,jobs,results,process,async))
})();
var state__34057__auto__ = (function (){var statearr_34512 = f__34056__auto__();
(statearr_34512[(6)] = c__34055__auto___36668);

return statearr_34512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34057__auto__);
});})(__36638,c__34055__auto___36668,G__34411_36639,G__34411_36640__$1,n__4613__auto___36637,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34411_36640__$1)].join('')));

}

var G__36687 = (__36638 + (1));
__36638 = G__36687;
continue;
} else {
}
break;
}

var c__34055__auto___36688 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34056__auto__ = (function (){var switch__33532__auto__ = (function (state_34538){
var state_val_34539 = (state_34538[(1)]);
if((state_val_34539 === (7))){
var inst_34534 = (state_34538[(2)]);
var state_34538__$1 = state_34538;
var statearr_34541_36689 = state_34538__$1;
(statearr_34541_36689[(2)] = inst_34534);

(statearr_34541_36689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34539 === (1))){
var state_34538__$1 = state_34538;
var statearr_34542_36690 = state_34538__$1;
(statearr_34542_36690[(2)] = null);

(statearr_34542_36690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34539 === (4))){
var inst_34517 = (state_34538[(7)]);
var inst_34517__$1 = (state_34538[(2)]);
var inst_34518 = (inst_34517__$1 == null);
var state_34538__$1 = (function (){var statearr_34548 = state_34538;
(statearr_34548[(7)] = inst_34517__$1);

return statearr_34548;
})();
if(cljs.core.truth_(inst_34518)){
var statearr_34554_36693 = state_34538__$1;
(statearr_34554_36693[(1)] = (5));

} else {
var statearr_34556_36694 = state_34538__$1;
(statearr_34556_36694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34539 === (6))){
var inst_34517 = (state_34538[(7)]);
var inst_34522 = (state_34538[(8)]);
var inst_34522__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34525 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34526 = [inst_34517,inst_34522__$1];
var inst_34527 = (new cljs.core.PersistentVector(null,2,(5),inst_34525,inst_34526,null));
var state_34538__$1 = (function (){var statearr_34567 = state_34538;
(statearr_34567[(8)] = inst_34522__$1);

return statearr_34567;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34538__$1,(8),jobs,inst_34527);
} else {
if((state_val_34539 === (3))){
var inst_34536 = (state_34538[(2)]);
var state_34538__$1 = state_34538;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34538__$1,inst_34536);
} else {
if((state_val_34539 === (2))){
var state_34538__$1 = state_34538;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34538__$1,(4),from);
} else {
if((state_val_34539 === (9))){
var inst_34531 = (state_34538[(2)]);
var state_34538__$1 = (function (){var statearr_34585 = state_34538;
(statearr_34585[(9)] = inst_34531);

return statearr_34585;
})();
var statearr_34590_36695 = state_34538__$1;
(statearr_34590_36695[(2)] = null);

(statearr_34590_36695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34539 === (5))){
var inst_34520 = cljs.core.async.close_BANG_(jobs);
var state_34538__$1 = state_34538;
var statearr_34591_36701 = state_34538__$1;
(statearr_34591_36701[(2)] = inst_34520);

(statearr_34591_36701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34539 === (8))){
var inst_34522 = (state_34538[(8)]);
var inst_34529 = (state_34538[(2)]);
var state_34538__$1 = (function (){var statearr_34601 = state_34538;
(statearr_34601[(10)] = inst_34529);

return statearr_34601;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34538__$1,(9),results,inst_34522);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33533__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33533__auto____0 = (function (){
var statearr_34610 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34610[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33533__auto__);

(statearr_34610[(1)] = (1));

return statearr_34610;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33533__auto____1 = (function (state_34538){
while(true){
var ret_value__33538__auto__ = (function (){try{while(true){
var result__33539__auto__ = switch__33532__auto__(state_34538);
if(cljs.core.keyword_identical_QMARK_(result__33539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33539__auto__;
}
break;
}
}catch (e34615){var ex__33540__auto__ = e34615;
var statearr_34616_36703 = state_34538;
(statearr_34616_36703[(2)] = ex__33540__auto__);


if(cljs.core.seq((state_34538[(4)]))){
var statearr_34618_36704 = state_34538;
(statearr_34618_36704[(1)] = cljs.core.first((state_34538[(4)])));

} else {
throw ex__33540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36705 = state_34538;
state_34538 = G__36705;
continue;
} else {
return ret_value__33538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33533__auto__ = function(state_34538){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33533__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33533__auto____1.call(this,state_34538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33533__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33533__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33533__auto__;
})()
})();
var state__34057__auto__ = (function (){var statearr_34623 = f__34056__auto__();
(statearr_34623[(6)] = c__34055__auto___36688);

return statearr_34623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34057__auto__);
}));


var c__34055__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34056__auto__ = (function (){var switch__33532__auto__ = (function (state_34678){
var state_val_34679 = (state_34678[(1)]);
if((state_val_34679 === (7))){
var inst_34674 = (state_34678[(2)]);
var state_34678__$1 = state_34678;
var statearr_34681_36707 = state_34678__$1;
(statearr_34681_36707[(2)] = inst_34674);

(statearr_34681_36707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (20))){
var state_34678__$1 = state_34678;
var statearr_34682_36712 = state_34678__$1;
(statearr_34682_36712[(2)] = null);

(statearr_34682_36712[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (1))){
var state_34678__$1 = state_34678;
var statearr_34683_36713 = state_34678__$1;
(statearr_34683_36713[(2)] = null);

(statearr_34683_36713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (4))){
var inst_34633 = (state_34678[(7)]);
var inst_34633__$1 = (state_34678[(2)]);
var inst_34635 = (inst_34633__$1 == null);
var state_34678__$1 = (function (){var statearr_34685 = state_34678;
(statearr_34685[(7)] = inst_34633__$1);

return statearr_34685;
})();
if(cljs.core.truth_(inst_34635)){
var statearr_34686_36720 = state_34678__$1;
(statearr_34686_36720[(1)] = (5));

} else {
var statearr_34687_36721 = state_34678__$1;
(statearr_34687_36721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (15))){
var inst_34656 = (state_34678[(8)]);
var state_34678__$1 = state_34678;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34678__$1,(18),to,inst_34656);
} else {
if((state_val_34679 === (21))){
var inst_34669 = (state_34678[(2)]);
var state_34678__$1 = state_34678;
var statearr_34688_36725 = state_34678__$1;
(statearr_34688_36725[(2)] = inst_34669);

(statearr_34688_36725[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (13))){
var inst_34671 = (state_34678[(2)]);
var state_34678__$1 = (function (){var statearr_34690 = state_34678;
(statearr_34690[(9)] = inst_34671);

return statearr_34690;
})();
var statearr_34691_36726 = state_34678__$1;
(statearr_34691_36726[(2)] = null);

(statearr_34691_36726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (6))){
var inst_34633 = (state_34678[(7)]);
var state_34678__$1 = state_34678;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34678__$1,(11),inst_34633);
} else {
if((state_val_34679 === (17))){
var inst_34664 = (state_34678[(2)]);
var state_34678__$1 = state_34678;
if(cljs.core.truth_(inst_34664)){
var statearr_34692_36731 = state_34678__$1;
(statearr_34692_36731[(1)] = (19));

} else {
var statearr_34693_36732 = state_34678__$1;
(statearr_34693_36732[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (3))){
var inst_34676 = (state_34678[(2)]);
var state_34678__$1 = state_34678;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34678__$1,inst_34676);
} else {
if((state_val_34679 === (12))){
var inst_34653 = (state_34678[(10)]);
var state_34678__$1 = state_34678;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34678__$1,(14),inst_34653);
} else {
if((state_val_34679 === (2))){
var state_34678__$1 = state_34678;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34678__$1,(4),results);
} else {
if((state_val_34679 === (19))){
var state_34678__$1 = state_34678;
var statearr_34698_36733 = state_34678__$1;
(statearr_34698_36733[(2)] = null);

(statearr_34698_36733[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (11))){
var inst_34653 = (state_34678[(2)]);
var state_34678__$1 = (function (){var statearr_34703 = state_34678;
(statearr_34703[(10)] = inst_34653);

return statearr_34703;
})();
var statearr_34704_36734 = state_34678__$1;
(statearr_34704_36734[(2)] = null);

(statearr_34704_36734[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (9))){
var state_34678__$1 = state_34678;
var statearr_34710_36735 = state_34678__$1;
(statearr_34710_36735[(2)] = null);

(statearr_34710_36735[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (5))){
var state_34678__$1 = state_34678;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34711_36742 = state_34678__$1;
(statearr_34711_36742[(1)] = (8));

} else {
var statearr_34712_36743 = state_34678__$1;
(statearr_34712_36743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (14))){
var inst_34656 = (state_34678[(8)]);
var inst_34656__$1 = (state_34678[(2)]);
var inst_34657 = (inst_34656__$1 == null);
var inst_34658 = cljs.core.not(inst_34657);
var state_34678__$1 = (function (){var statearr_34714 = state_34678;
(statearr_34714[(8)] = inst_34656__$1);

return statearr_34714;
})();
if(inst_34658){
var statearr_34715_36744 = state_34678__$1;
(statearr_34715_36744[(1)] = (15));

} else {
var statearr_34716_36745 = state_34678__$1;
(statearr_34716_36745[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (16))){
var state_34678__$1 = state_34678;
var statearr_34717_36746 = state_34678__$1;
(statearr_34717_36746[(2)] = false);

(statearr_34717_36746[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (10))){
var inst_34646 = (state_34678[(2)]);
var state_34678__$1 = state_34678;
var statearr_34718_36748 = state_34678__$1;
(statearr_34718_36748[(2)] = inst_34646);

(statearr_34718_36748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (18))){
var inst_34661 = (state_34678[(2)]);
var state_34678__$1 = state_34678;
var statearr_34720_36756 = state_34678__$1;
(statearr_34720_36756[(2)] = inst_34661);

(statearr_34720_36756[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (8))){
var inst_34642 = cljs.core.async.close_BANG_(to);
var state_34678__$1 = state_34678;
var statearr_34721_36757 = state_34678__$1;
(statearr_34721_36757[(2)] = inst_34642);

(statearr_34721_36757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33533__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33533__auto____0 = (function (){
var statearr_34722 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34722[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33533__auto__);

(statearr_34722[(1)] = (1));

return statearr_34722;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33533__auto____1 = (function (state_34678){
while(true){
var ret_value__33538__auto__ = (function (){try{while(true){
var result__33539__auto__ = switch__33532__auto__(state_34678);
if(cljs.core.keyword_identical_QMARK_(result__33539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33539__auto__;
}
break;
}
}catch (e34723){var ex__33540__auto__ = e34723;
var statearr_34724_36758 = state_34678;
(statearr_34724_36758[(2)] = ex__33540__auto__);


if(cljs.core.seq((state_34678[(4)]))){
var statearr_34725_36760 = state_34678;
(statearr_34725_36760[(1)] = cljs.core.first((state_34678[(4)])));

} else {
throw ex__33540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36761 = state_34678;
state_34678 = G__36761;
continue;
} else {
return ret_value__33538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33533__auto__ = function(state_34678){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33533__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33533__auto____1.call(this,state_34678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33533__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33533__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33533__auto__;
})()
})();
var state__34057__auto__ = (function (){var statearr_34726 = f__34056__auto__();
(statearr_34726[(6)] = c__34055__auto__);

return statearr_34726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34057__auto__);
}));

return c__34055__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34729 = arguments.length;
switch (G__34729) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34731 = arguments.length;
switch (G__34731) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34734 = arguments.length;
switch (G__34734) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__34055__auto___36793 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34056__auto__ = (function (){var switch__33532__auto__ = (function (state_34761){
var state_val_34762 = (state_34761[(1)]);
if((state_val_34762 === (7))){
var inst_34757 = (state_34761[(2)]);
var state_34761__$1 = state_34761;
var statearr_34764_36794 = state_34761__$1;
(statearr_34764_36794[(2)] = inst_34757);

(statearr_34764_36794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (1))){
var state_34761__$1 = state_34761;
var statearr_34765_36795 = state_34761__$1;
(statearr_34765_36795[(2)] = null);

(statearr_34765_36795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (4))){
var inst_34738 = (state_34761[(7)]);
var inst_34738__$1 = (state_34761[(2)]);
var inst_34739 = (inst_34738__$1 == null);
var state_34761__$1 = (function (){var statearr_34766 = state_34761;
(statearr_34766[(7)] = inst_34738__$1);

return statearr_34766;
})();
if(cljs.core.truth_(inst_34739)){
var statearr_34767_36800 = state_34761__$1;
(statearr_34767_36800[(1)] = (5));

} else {
var statearr_34768_36801 = state_34761__$1;
(statearr_34768_36801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (13))){
var state_34761__$1 = state_34761;
var statearr_34769_36806 = state_34761__$1;
(statearr_34769_36806[(2)] = null);

(statearr_34769_36806[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (6))){
var inst_34738 = (state_34761[(7)]);
var inst_34744 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34738) : p.call(null,inst_34738));
var state_34761__$1 = state_34761;
if(cljs.core.truth_(inst_34744)){
var statearr_34770_36807 = state_34761__$1;
(statearr_34770_36807[(1)] = (9));

} else {
var statearr_34771_36808 = state_34761__$1;
(statearr_34771_36808[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (3))){
var inst_34759 = (state_34761[(2)]);
var state_34761__$1 = state_34761;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34761__$1,inst_34759);
} else {
if((state_val_34762 === (12))){
var state_34761__$1 = state_34761;
var statearr_34772_36809 = state_34761__$1;
(statearr_34772_36809[(2)] = null);

(statearr_34772_36809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (2))){
var state_34761__$1 = state_34761;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34761__$1,(4),ch);
} else {
if((state_val_34762 === (11))){
var inst_34738 = (state_34761[(7)]);
var inst_34748 = (state_34761[(2)]);
var state_34761__$1 = state_34761;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34761__$1,(8),inst_34748,inst_34738);
} else {
if((state_val_34762 === (9))){
var state_34761__$1 = state_34761;
var statearr_34774_36814 = state_34761__$1;
(statearr_34774_36814[(2)] = tc);

(statearr_34774_36814[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (5))){
var inst_34741 = cljs.core.async.close_BANG_(tc);
var inst_34742 = cljs.core.async.close_BANG_(fc);
var state_34761__$1 = (function (){var statearr_34775 = state_34761;
(statearr_34775[(8)] = inst_34741);

return statearr_34775;
})();
var statearr_34776_36818 = state_34761__$1;
(statearr_34776_36818[(2)] = inst_34742);

(statearr_34776_36818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (14))){
var inst_34755 = (state_34761[(2)]);
var state_34761__$1 = state_34761;
var statearr_34777_36820 = state_34761__$1;
(statearr_34777_36820[(2)] = inst_34755);

(statearr_34777_36820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (10))){
var state_34761__$1 = state_34761;
var statearr_34778_36821 = state_34761__$1;
(statearr_34778_36821[(2)] = fc);

(statearr_34778_36821[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (8))){
var inst_34750 = (state_34761[(2)]);
var state_34761__$1 = state_34761;
if(cljs.core.truth_(inst_34750)){
var statearr_34779_36822 = state_34761__$1;
(statearr_34779_36822[(1)] = (12));

} else {
var statearr_34780_36826 = state_34761__$1;
(statearr_34780_36826[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33533__auto__ = null;
var cljs$core$async$state_machine__33533__auto____0 = (function (){
var statearr_34782 = [null,null,null,null,null,null,null,null,null];
(statearr_34782[(0)] = cljs$core$async$state_machine__33533__auto__);

(statearr_34782[(1)] = (1));

return statearr_34782;
});
var cljs$core$async$state_machine__33533__auto____1 = (function (state_34761){
while(true){
var ret_value__33538__auto__ = (function (){try{while(true){
var result__33539__auto__ = switch__33532__auto__(state_34761);
if(cljs.core.keyword_identical_QMARK_(result__33539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33539__auto__;
}
break;
}
}catch (e34783){var ex__33540__auto__ = e34783;
var statearr_34784_36832 = state_34761;
(statearr_34784_36832[(2)] = ex__33540__auto__);


if(cljs.core.seq((state_34761[(4)]))){
var statearr_34785_36833 = state_34761;
(statearr_34785_36833[(1)] = cljs.core.first((state_34761[(4)])));

} else {
throw ex__33540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36834 = state_34761;
state_34761 = G__36834;
continue;
} else {
return ret_value__33538__auto__;
}
break;
}
});
cljs$core$async$state_machine__33533__auto__ = function(state_34761){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33533__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33533__auto____1.call(this,state_34761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33533__auto____0;
cljs$core$async$state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33533__auto____1;
return cljs$core$async$state_machine__33533__auto__;
})()
})();
var state__34057__auto__ = (function (){var statearr_34786 = f__34056__auto__();
(statearr_34786[(6)] = c__34055__auto___36793);

return statearr_34786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34057__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__34055__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34056__auto__ = (function (){var switch__33532__auto__ = (function (state_34809){
var state_val_34810 = (state_34809[(1)]);
if((state_val_34810 === (7))){
var inst_34805 = (state_34809[(2)]);
var state_34809__$1 = state_34809;
var statearr_34811_36836 = state_34809__$1;
(statearr_34811_36836[(2)] = inst_34805);

(statearr_34811_36836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (1))){
var inst_34788 = init;
var inst_34789 = inst_34788;
var state_34809__$1 = (function (){var statearr_34812 = state_34809;
(statearr_34812[(7)] = inst_34789);

return statearr_34812;
})();
var statearr_34813_36837 = state_34809__$1;
(statearr_34813_36837[(2)] = null);

(statearr_34813_36837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (4))){
var inst_34792 = (state_34809[(8)]);
var inst_34792__$1 = (state_34809[(2)]);
var inst_34793 = (inst_34792__$1 == null);
var state_34809__$1 = (function (){var statearr_34815 = state_34809;
(statearr_34815[(8)] = inst_34792__$1);

return statearr_34815;
})();
if(cljs.core.truth_(inst_34793)){
var statearr_34816_36838 = state_34809__$1;
(statearr_34816_36838[(1)] = (5));

} else {
var statearr_34817_36840 = state_34809__$1;
(statearr_34817_36840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (6))){
var inst_34796 = (state_34809[(9)]);
var inst_34789 = (state_34809[(7)]);
var inst_34792 = (state_34809[(8)]);
var inst_34796__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34789,inst_34792) : f.call(null,inst_34789,inst_34792));
var inst_34797 = cljs.core.reduced_QMARK_(inst_34796__$1);
var state_34809__$1 = (function (){var statearr_34818 = state_34809;
(statearr_34818[(9)] = inst_34796__$1);

return statearr_34818;
})();
if(inst_34797){
var statearr_34819_36844 = state_34809__$1;
(statearr_34819_36844[(1)] = (8));

} else {
var statearr_34820_36845 = state_34809__$1;
(statearr_34820_36845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (3))){
var inst_34807 = (state_34809[(2)]);
var state_34809__$1 = state_34809;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34809__$1,inst_34807);
} else {
if((state_val_34810 === (2))){
var state_34809__$1 = state_34809;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34809__$1,(4),ch);
} else {
if((state_val_34810 === (9))){
var inst_34796 = (state_34809[(9)]);
var inst_34789 = inst_34796;
var state_34809__$1 = (function (){var statearr_34821 = state_34809;
(statearr_34821[(7)] = inst_34789);

return statearr_34821;
})();
var statearr_34822_36846 = state_34809__$1;
(statearr_34822_36846[(2)] = null);

(statearr_34822_36846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (5))){
var inst_34789 = (state_34809[(7)]);
var state_34809__$1 = state_34809;
var statearr_34824_36847 = state_34809__$1;
(statearr_34824_36847[(2)] = inst_34789);

(statearr_34824_36847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (10))){
var inst_34803 = (state_34809[(2)]);
var state_34809__$1 = state_34809;
var statearr_34825_36848 = state_34809__$1;
(statearr_34825_36848[(2)] = inst_34803);

(statearr_34825_36848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (8))){
var inst_34796 = (state_34809[(9)]);
var inst_34799 = cljs.core.deref(inst_34796);
var state_34809__$1 = state_34809;
var statearr_34826_36853 = state_34809__$1;
(statearr_34826_36853[(2)] = inst_34799);

(statearr_34826_36853[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__33533__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33533__auto____0 = (function (){
var statearr_34827 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34827[(0)] = cljs$core$async$reduce_$_state_machine__33533__auto__);

(statearr_34827[(1)] = (1));

return statearr_34827;
});
var cljs$core$async$reduce_$_state_machine__33533__auto____1 = (function (state_34809){
while(true){
var ret_value__33538__auto__ = (function (){try{while(true){
var result__33539__auto__ = switch__33532__auto__(state_34809);
if(cljs.core.keyword_identical_QMARK_(result__33539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33539__auto__;
}
break;
}
}catch (e34828){var ex__33540__auto__ = e34828;
var statearr_34829_36857 = state_34809;
(statearr_34829_36857[(2)] = ex__33540__auto__);


if(cljs.core.seq((state_34809[(4)]))){
var statearr_34830_36861 = state_34809;
(statearr_34830_36861[(1)] = cljs.core.first((state_34809[(4)])));

} else {
throw ex__33540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36862 = state_34809;
state_34809 = G__36862;
continue;
} else {
return ret_value__33538__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33533__auto__ = function(state_34809){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33533__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33533__auto____1.call(this,state_34809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33533__auto____0;
cljs$core$async$reduce_$_state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33533__auto____1;
return cljs$core$async$reduce_$_state_machine__33533__auto__;
})()
})();
var state__34057__auto__ = (function (){var statearr_34831 = f__34056__auto__();
(statearr_34831[(6)] = c__34055__auto__);

return statearr_34831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34057__auto__);
}));

return c__34055__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34055__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34056__auto__ = (function (){var switch__33532__auto__ = (function (state_34838){
var state_val_34839 = (state_34838[(1)]);
if((state_val_34839 === (1))){
var inst_34833 = cljs.core.async.reduce(f__$1,init,ch);
var state_34838__$1 = state_34838;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34838__$1,(2),inst_34833);
} else {
if((state_val_34839 === (2))){
var inst_34835 = (state_34838[(2)]);
var inst_34836 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34835) : f__$1.call(null,inst_34835));
var state_34838__$1 = state_34838;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34838__$1,inst_34836);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33533__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33533__auto____0 = (function (){
var statearr_34841 = [null,null,null,null,null,null,null];
(statearr_34841[(0)] = cljs$core$async$transduce_$_state_machine__33533__auto__);

(statearr_34841[(1)] = (1));

return statearr_34841;
});
var cljs$core$async$transduce_$_state_machine__33533__auto____1 = (function (state_34838){
while(true){
var ret_value__33538__auto__ = (function (){try{while(true){
var result__33539__auto__ = switch__33532__auto__(state_34838);
if(cljs.core.keyword_identical_QMARK_(result__33539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33539__auto__;
}
break;
}
}catch (e34842){var ex__33540__auto__ = e34842;
var statearr_34843_36866 = state_34838;
(statearr_34843_36866[(2)] = ex__33540__auto__);


if(cljs.core.seq((state_34838[(4)]))){
var statearr_34844_36867 = state_34838;
(statearr_34844_36867[(1)] = cljs.core.first((state_34838[(4)])));

} else {
throw ex__33540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36868 = state_34838;
state_34838 = G__36868;
continue;
} else {
return ret_value__33538__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33533__auto__ = function(state_34838){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33533__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33533__auto____1.call(this,state_34838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33533__auto____0;
cljs$core$async$transduce_$_state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33533__auto____1;
return cljs$core$async$transduce_$_state_machine__33533__auto__;
})()
})();
var state__34057__auto__ = (function (){var statearr_34845 = f__34056__auto__();
(statearr_34845[(6)] = c__34055__auto__);

return statearr_34845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34057__auto__);
}));

return c__34055__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__34847 = arguments.length;
switch (G__34847) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34055__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34056__auto__ = (function (){var switch__33532__auto__ = (function (state_34873){
var state_val_34874 = (state_34873[(1)]);
if((state_val_34874 === (7))){
var inst_34855 = (state_34873[(2)]);
var state_34873__$1 = state_34873;
var statearr_34876_36879 = state_34873__$1;
(statearr_34876_36879[(2)] = inst_34855);

(statearr_34876_36879[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (1))){
var inst_34849 = cljs.core.seq(coll);
var inst_34850 = inst_34849;
var state_34873__$1 = (function (){var statearr_34877 = state_34873;
(statearr_34877[(7)] = inst_34850);

return statearr_34877;
})();
var statearr_34878_36880 = state_34873__$1;
(statearr_34878_36880[(2)] = null);

(statearr_34878_36880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (4))){
var inst_34850 = (state_34873[(7)]);
var inst_34853 = cljs.core.first(inst_34850);
var state_34873__$1 = state_34873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34873__$1,(7),ch,inst_34853);
} else {
if((state_val_34874 === (13))){
var inst_34867 = (state_34873[(2)]);
var state_34873__$1 = state_34873;
var statearr_34879_36882 = state_34873__$1;
(statearr_34879_36882[(2)] = inst_34867);

(statearr_34879_36882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (6))){
var inst_34858 = (state_34873[(2)]);
var state_34873__$1 = state_34873;
if(cljs.core.truth_(inst_34858)){
var statearr_34880_36886 = state_34873__$1;
(statearr_34880_36886[(1)] = (8));

} else {
var statearr_34881_36887 = state_34873__$1;
(statearr_34881_36887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (3))){
var inst_34871 = (state_34873[(2)]);
var state_34873__$1 = state_34873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34873__$1,inst_34871);
} else {
if((state_val_34874 === (12))){
var state_34873__$1 = state_34873;
var statearr_34883_36892 = state_34873__$1;
(statearr_34883_36892[(2)] = null);

(statearr_34883_36892[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (2))){
var inst_34850 = (state_34873[(7)]);
var state_34873__$1 = state_34873;
if(cljs.core.truth_(inst_34850)){
var statearr_34884_36893 = state_34873__$1;
(statearr_34884_36893[(1)] = (4));

} else {
var statearr_34885_36894 = state_34873__$1;
(statearr_34885_36894[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (11))){
var inst_34864 = cljs.core.async.close_BANG_(ch);
var state_34873__$1 = state_34873;
var statearr_34886_36902 = state_34873__$1;
(statearr_34886_36902[(2)] = inst_34864);

(statearr_34886_36902[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (9))){
var state_34873__$1 = state_34873;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34887_36903 = state_34873__$1;
(statearr_34887_36903[(1)] = (11));

} else {
var statearr_34888_36910 = state_34873__$1;
(statearr_34888_36910[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (5))){
var inst_34850 = (state_34873[(7)]);
var state_34873__$1 = state_34873;
var statearr_34889_36911 = state_34873__$1;
(statearr_34889_36911[(2)] = inst_34850);

(statearr_34889_36911[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (10))){
var inst_34869 = (state_34873[(2)]);
var state_34873__$1 = state_34873;
var statearr_34890_36912 = state_34873__$1;
(statearr_34890_36912[(2)] = inst_34869);

(statearr_34890_36912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (8))){
var inst_34850 = (state_34873[(7)]);
var inst_34860 = cljs.core.next(inst_34850);
var inst_34850__$1 = inst_34860;
var state_34873__$1 = (function (){var statearr_34892 = state_34873;
(statearr_34892[(7)] = inst_34850__$1);

return statearr_34892;
})();
var statearr_34893_36913 = state_34873__$1;
(statearr_34893_36913[(2)] = null);

(statearr_34893_36913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33533__auto__ = null;
var cljs$core$async$state_machine__33533__auto____0 = (function (){
var statearr_34894 = [null,null,null,null,null,null,null,null];
(statearr_34894[(0)] = cljs$core$async$state_machine__33533__auto__);

(statearr_34894[(1)] = (1));

return statearr_34894;
});
var cljs$core$async$state_machine__33533__auto____1 = (function (state_34873){
while(true){
var ret_value__33538__auto__ = (function (){try{while(true){
var result__33539__auto__ = switch__33532__auto__(state_34873);
if(cljs.core.keyword_identical_QMARK_(result__33539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33539__auto__;
}
break;
}
}catch (e34895){var ex__33540__auto__ = e34895;
var statearr_34896_36914 = state_34873;
(statearr_34896_36914[(2)] = ex__33540__auto__);


if(cljs.core.seq((state_34873[(4)]))){
var statearr_34897_36915 = state_34873;
(statearr_34897_36915[(1)] = cljs.core.first((state_34873[(4)])));

} else {
throw ex__33540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36916 = state_34873;
state_34873 = G__36916;
continue;
} else {
return ret_value__33538__auto__;
}
break;
}
});
cljs$core$async$state_machine__33533__auto__ = function(state_34873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33533__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33533__auto____1.call(this,state_34873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33533__auto____0;
cljs$core$async$state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33533__auto____1;
return cljs$core$async$state_machine__33533__auto__;
})()
})();
var state__34057__auto__ = (function (){var statearr_34898 = f__34056__auto__();
(statearr_34898[(6)] = c__34055__auto__);

return statearr_34898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34057__auto__);
}));

return c__34055__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34901 = arguments.length;
switch (G__34901) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_36925 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_36925(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_36926 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_36926(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_36930 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_36930(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_36931 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_36931(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34906 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34906 = (function (ch,cs,meta34907){
this.ch = ch;
this.cs = cs;
this.meta34907 = meta34907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34908,meta34907__$1){
var self__ = this;
var _34908__$1 = this;
return (new cljs.core.async.t_cljs$core$async34906(self__.ch,self__.cs,meta34907__$1));
}));

(cljs.core.async.t_cljs$core$async34906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34908){
var self__ = this;
var _34908__$1 = this;
return self__.meta34907;
}));

(cljs.core.async.t_cljs$core$async34906.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34906.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34906.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34906.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34906.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34906.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34907","meta34907",-2089684560,null)], null);
}));

(cljs.core.async.t_cljs$core$async34906.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34906");

(cljs.core.async.t_cljs$core$async34906.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34906");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34906.
 */
cljs.core.async.__GT_t_cljs$core$async34906 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34906(ch__$1,cs__$1,meta34907){
return (new cljs.core.async.t_cljs$core$async34906(ch__$1,cs__$1,meta34907));
});

}

return (new cljs.core.async.t_cljs$core$async34906(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__34055__auto___36941 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34056__auto__ = (function (){var switch__33532__auto__ = (function (state_35045){
var state_val_35046 = (state_35045[(1)]);
if((state_val_35046 === (7))){
var inst_35041 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
var statearr_35048_36948 = state_35045__$1;
(statearr_35048_36948[(2)] = inst_35041);

(statearr_35048_36948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (20))){
var inst_34945 = (state_35045[(7)]);
var inst_34957 = cljs.core.first(inst_34945);
var inst_34958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34957,(0),null);
var inst_34959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34957,(1),null);
var state_35045__$1 = (function (){var statearr_35049 = state_35045;
(statearr_35049[(8)] = inst_34958);

return statearr_35049;
})();
if(cljs.core.truth_(inst_34959)){
var statearr_35050_36949 = state_35045__$1;
(statearr_35050_36949[(1)] = (22));

} else {
var statearr_35051_36950 = state_35045__$1;
(statearr_35051_36950[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (27))){
var inst_34913 = (state_35045[(9)]);
var inst_34989 = (state_35045[(10)]);
var inst_34994 = (state_35045[(11)]);
var inst_34987 = (state_35045[(12)]);
var inst_34994__$1 = cljs.core._nth(inst_34987,inst_34989);
var inst_34995 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34994__$1,inst_34913,done);
var state_35045__$1 = (function (){var statearr_35052 = state_35045;
(statearr_35052[(11)] = inst_34994__$1);

return statearr_35052;
})();
if(cljs.core.truth_(inst_34995)){
var statearr_35054_36951 = state_35045__$1;
(statearr_35054_36951[(1)] = (30));

} else {
var statearr_35055_36952 = state_35045__$1;
(statearr_35055_36952[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (1))){
var state_35045__$1 = state_35045;
var statearr_35057_36953 = state_35045__$1;
(statearr_35057_36953[(2)] = null);

(statearr_35057_36953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (24))){
var inst_34945 = (state_35045[(7)]);
var inst_34964 = (state_35045[(2)]);
var inst_34965 = cljs.core.next(inst_34945);
var inst_34922 = inst_34965;
var inst_34923 = null;
var inst_34924 = (0);
var inst_34925 = (0);
var state_35045__$1 = (function (){var statearr_35058 = state_35045;
(statearr_35058[(13)] = inst_34923);

(statearr_35058[(14)] = inst_34925);

(statearr_35058[(15)] = inst_34924);

(statearr_35058[(16)] = inst_34964);

(statearr_35058[(17)] = inst_34922);

return statearr_35058;
})();
var statearr_35059_36954 = state_35045__$1;
(statearr_35059_36954[(2)] = null);

(statearr_35059_36954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (39))){
var state_35045__$1 = state_35045;
var statearr_35063_36955 = state_35045__$1;
(statearr_35063_36955[(2)] = null);

(statearr_35063_36955[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (4))){
var inst_34913 = (state_35045[(9)]);
var inst_34913__$1 = (state_35045[(2)]);
var inst_34914 = (inst_34913__$1 == null);
var state_35045__$1 = (function (){var statearr_35064 = state_35045;
(statearr_35064[(9)] = inst_34913__$1);

return statearr_35064;
})();
if(cljs.core.truth_(inst_34914)){
var statearr_35065_36956 = state_35045__$1;
(statearr_35065_36956[(1)] = (5));

} else {
var statearr_35066_36957 = state_35045__$1;
(statearr_35066_36957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (15))){
var inst_34923 = (state_35045[(13)]);
var inst_34925 = (state_35045[(14)]);
var inst_34924 = (state_35045[(15)]);
var inst_34922 = (state_35045[(17)]);
var inst_34941 = (state_35045[(2)]);
var inst_34942 = (inst_34925 + (1));
var tmp35060 = inst_34923;
var tmp35061 = inst_34924;
var tmp35062 = inst_34922;
var inst_34922__$1 = tmp35062;
var inst_34923__$1 = tmp35060;
var inst_34924__$1 = tmp35061;
var inst_34925__$1 = inst_34942;
var state_35045__$1 = (function (){var statearr_35069 = state_35045;
(statearr_35069[(13)] = inst_34923__$1);

(statearr_35069[(18)] = inst_34941);

(statearr_35069[(14)] = inst_34925__$1);

(statearr_35069[(15)] = inst_34924__$1);

(statearr_35069[(17)] = inst_34922__$1);

return statearr_35069;
})();
var statearr_35070_36958 = state_35045__$1;
(statearr_35070_36958[(2)] = null);

(statearr_35070_36958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (21))){
var inst_34968 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
var statearr_35074_36960 = state_35045__$1;
(statearr_35074_36960[(2)] = inst_34968);

(statearr_35074_36960[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (31))){
var inst_34994 = (state_35045[(11)]);
var inst_34999 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34994);
var state_35045__$1 = state_35045;
var statearr_35075_36961 = state_35045__$1;
(statearr_35075_36961[(2)] = inst_34999);

(statearr_35075_36961[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (32))){
var inst_34988 = (state_35045[(19)]);
var inst_34986 = (state_35045[(20)]);
var inst_34989 = (state_35045[(10)]);
var inst_34987 = (state_35045[(12)]);
var inst_35001 = (state_35045[(2)]);
var inst_35002 = (inst_34989 + (1));
var tmp35071 = inst_34988;
var tmp35072 = inst_34986;
var tmp35073 = inst_34987;
var inst_34986__$1 = tmp35072;
var inst_34987__$1 = tmp35073;
var inst_34988__$1 = tmp35071;
var inst_34989__$1 = inst_35002;
var state_35045__$1 = (function (){var statearr_35076 = state_35045;
(statearr_35076[(19)] = inst_34988__$1);

(statearr_35076[(20)] = inst_34986__$1);

(statearr_35076[(10)] = inst_34989__$1);

(statearr_35076[(21)] = inst_35001);

(statearr_35076[(12)] = inst_34987__$1);

return statearr_35076;
})();
var statearr_35077_36962 = state_35045__$1;
(statearr_35077_36962[(2)] = null);

(statearr_35077_36962[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (40))){
var inst_35014 = (state_35045[(22)]);
var inst_35018 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35014);
var state_35045__$1 = state_35045;
var statearr_35078_36963 = state_35045__$1;
(statearr_35078_36963[(2)] = inst_35018);

(statearr_35078_36963[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (33))){
var inst_35005 = (state_35045[(23)]);
var inst_35007 = cljs.core.chunked_seq_QMARK_(inst_35005);
var state_35045__$1 = state_35045;
if(inst_35007){
var statearr_35079_36964 = state_35045__$1;
(statearr_35079_36964[(1)] = (36));

} else {
var statearr_35080_36965 = state_35045__$1;
(statearr_35080_36965[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (13))){
var inst_34935 = (state_35045[(24)]);
var inst_34938 = cljs.core.async.close_BANG_(inst_34935);
var state_35045__$1 = state_35045;
var statearr_35081_36970 = state_35045__$1;
(statearr_35081_36970[(2)] = inst_34938);

(statearr_35081_36970[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (22))){
var inst_34958 = (state_35045[(8)]);
var inst_34961 = cljs.core.async.close_BANG_(inst_34958);
var state_35045__$1 = state_35045;
var statearr_35082_36971 = state_35045__$1;
(statearr_35082_36971[(2)] = inst_34961);

(statearr_35082_36971[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (36))){
var inst_35005 = (state_35045[(23)]);
var inst_35009 = cljs.core.chunk_first(inst_35005);
var inst_35010 = cljs.core.chunk_rest(inst_35005);
var inst_35011 = cljs.core.count(inst_35009);
var inst_34986 = inst_35010;
var inst_34987 = inst_35009;
var inst_34988 = inst_35011;
var inst_34989 = (0);
var state_35045__$1 = (function (){var statearr_35083 = state_35045;
(statearr_35083[(19)] = inst_34988);

(statearr_35083[(20)] = inst_34986);

(statearr_35083[(10)] = inst_34989);

(statearr_35083[(12)] = inst_34987);

return statearr_35083;
})();
var statearr_35084_36977 = state_35045__$1;
(statearr_35084_36977[(2)] = null);

(statearr_35084_36977[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (41))){
var inst_35005 = (state_35045[(23)]);
var inst_35020 = (state_35045[(2)]);
var inst_35021 = cljs.core.next(inst_35005);
var inst_34986 = inst_35021;
var inst_34987 = null;
var inst_34988 = (0);
var inst_34989 = (0);
var state_35045__$1 = (function (){var statearr_35087 = state_35045;
(statearr_35087[(19)] = inst_34988);

(statearr_35087[(20)] = inst_34986);

(statearr_35087[(25)] = inst_35020);

(statearr_35087[(10)] = inst_34989);

(statearr_35087[(12)] = inst_34987);

return statearr_35087;
})();
var statearr_35088_36982 = state_35045__$1;
(statearr_35088_36982[(2)] = null);

(statearr_35088_36982[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (43))){
var state_35045__$1 = state_35045;
var statearr_35089_36983 = state_35045__$1;
(statearr_35089_36983[(2)] = null);

(statearr_35089_36983[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (29))){
var inst_35029 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
var statearr_35090_36984 = state_35045__$1;
(statearr_35090_36984[(2)] = inst_35029);

(statearr_35090_36984[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (44))){
var inst_35038 = (state_35045[(2)]);
var state_35045__$1 = (function (){var statearr_35091 = state_35045;
(statearr_35091[(26)] = inst_35038);

return statearr_35091;
})();
var statearr_35092_36985 = state_35045__$1;
(statearr_35092_36985[(2)] = null);

(statearr_35092_36985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (6))){
var inst_34978 = (state_35045[(27)]);
var inst_34977 = cljs.core.deref(cs);
var inst_34978__$1 = cljs.core.keys(inst_34977);
var inst_34979 = cljs.core.count(inst_34978__$1);
var inst_34980 = cljs.core.reset_BANG_(dctr,inst_34979);
var inst_34985 = cljs.core.seq(inst_34978__$1);
var inst_34986 = inst_34985;
var inst_34987 = null;
var inst_34988 = (0);
var inst_34989 = (0);
var state_35045__$1 = (function (){var statearr_35093 = state_35045;
(statearr_35093[(19)] = inst_34988);

(statearr_35093[(28)] = inst_34980);

(statearr_35093[(20)] = inst_34986);

(statearr_35093[(10)] = inst_34989);

(statearr_35093[(12)] = inst_34987);

(statearr_35093[(27)] = inst_34978__$1);

return statearr_35093;
})();
var statearr_35094_36986 = state_35045__$1;
(statearr_35094_36986[(2)] = null);

(statearr_35094_36986[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (28))){
var inst_35005 = (state_35045[(23)]);
var inst_34986 = (state_35045[(20)]);
var inst_35005__$1 = cljs.core.seq(inst_34986);
var state_35045__$1 = (function (){var statearr_35095 = state_35045;
(statearr_35095[(23)] = inst_35005__$1);

return statearr_35095;
})();
if(inst_35005__$1){
var statearr_35096_36987 = state_35045__$1;
(statearr_35096_36987[(1)] = (33));

} else {
var statearr_35097_36988 = state_35045__$1;
(statearr_35097_36988[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (25))){
var inst_34988 = (state_35045[(19)]);
var inst_34989 = (state_35045[(10)]);
var inst_34991 = (inst_34989 < inst_34988);
var inst_34992 = inst_34991;
var state_35045__$1 = state_35045;
if(cljs.core.truth_(inst_34992)){
var statearr_35098_36989 = state_35045__$1;
(statearr_35098_36989[(1)] = (27));

} else {
var statearr_35099_36990 = state_35045__$1;
(statearr_35099_36990[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (34))){
var state_35045__$1 = state_35045;
var statearr_35103_36991 = state_35045__$1;
(statearr_35103_36991[(2)] = null);

(statearr_35103_36991[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (17))){
var state_35045__$1 = state_35045;
var statearr_35104_36992 = state_35045__$1;
(statearr_35104_36992[(2)] = null);

(statearr_35104_36992[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (3))){
var inst_35043 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35045__$1,inst_35043);
} else {
if((state_val_35046 === (12))){
var inst_34973 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
var statearr_35105_36994 = state_35045__$1;
(statearr_35105_36994[(2)] = inst_34973);

(statearr_35105_36994[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (2))){
var state_35045__$1 = state_35045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35045__$1,(4),ch);
} else {
if((state_val_35046 === (23))){
var state_35045__$1 = state_35045;
var statearr_35109_36998 = state_35045__$1;
(statearr_35109_36998[(2)] = null);

(statearr_35109_36998[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (35))){
var inst_35027 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
var statearr_35113_36999 = state_35045__$1;
(statearr_35113_36999[(2)] = inst_35027);

(statearr_35113_36999[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (19))){
var inst_34945 = (state_35045[(7)]);
var inst_34949 = cljs.core.chunk_first(inst_34945);
var inst_34950 = cljs.core.chunk_rest(inst_34945);
var inst_34951 = cljs.core.count(inst_34949);
var inst_34922 = inst_34950;
var inst_34923 = inst_34949;
var inst_34924 = inst_34951;
var inst_34925 = (0);
var state_35045__$1 = (function (){var statearr_35114 = state_35045;
(statearr_35114[(13)] = inst_34923);

(statearr_35114[(14)] = inst_34925);

(statearr_35114[(15)] = inst_34924);

(statearr_35114[(17)] = inst_34922);

return statearr_35114;
})();
var statearr_35115_37000 = state_35045__$1;
(statearr_35115_37000[(2)] = null);

(statearr_35115_37000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (11))){
var inst_34945 = (state_35045[(7)]);
var inst_34922 = (state_35045[(17)]);
var inst_34945__$1 = cljs.core.seq(inst_34922);
var state_35045__$1 = (function (){var statearr_35116 = state_35045;
(statearr_35116[(7)] = inst_34945__$1);

return statearr_35116;
})();
if(inst_34945__$1){
var statearr_35117_37001 = state_35045__$1;
(statearr_35117_37001[(1)] = (16));

} else {
var statearr_35119_37002 = state_35045__$1;
(statearr_35119_37002[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (9))){
var inst_34975 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
var statearr_35120_37004 = state_35045__$1;
(statearr_35120_37004[(2)] = inst_34975);

(statearr_35120_37004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (5))){
var inst_34920 = cljs.core.deref(cs);
var inst_34921 = cljs.core.seq(inst_34920);
var inst_34922 = inst_34921;
var inst_34923 = null;
var inst_34924 = (0);
var inst_34925 = (0);
var state_35045__$1 = (function (){var statearr_35124 = state_35045;
(statearr_35124[(13)] = inst_34923);

(statearr_35124[(14)] = inst_34925);

(statearr_35124[(15)] = inst_34924);

(statearr_35124[(17)] = inst_34922);

return statearr_35124;
})();
var statearr_35126_37006 = state_35045__$1;
(statearr_35126_37006[(2)] = null);

(statearr_35126_37006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (14))){
var state_35045__$1 = state_35045;
var statearr_35130_37007 = state_35045__$1;
(statearr_35130_37007[(2)] = null);

(statearr_35130_37007[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (45))){
var inst_35035 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
var statearr_35131_37008 = state_35045__$1;
(statearr_35131_37008[(2)] = inst_35035);

(statearr_35131_37008[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (26))){
var inst_34978 = (state_35045[(27)]);
var inst_35031 = (state_35045[(2)]);
var inst_35032 = cljs.core.seq(inst_34978);
var state_35045__$1 = (function (){var statearr_35133 = state_35045;
(statearr_35133[(29)] = inst_35031);

return statearr_35133;
})();
if(inst_35032){
var statearr_35134_37009 = state_35045__$1;
(statearr_35134_37009[(1)] = (42));

} else {
var statearr_35135_37010 = state_35045__$1;
(statearr_35135_37010[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (16))){
var inst_34945 = (state_35045[(7)]);
var inst_34947 = cljs.core.chunked_seq_QMARK_(inst_34945);
var state_35045__$1 = state_35045;
if(inst_34947){
var statearr_35138_37011 = state_35045__$1;
(statearr_35138_37011[(1)] = (19));

} else {
var statearr_35140_37012 = state_35045__$1;
(statearr_35140_37012[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (38))){
var inst_35024 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
var statearr_35141_37013 = state_35045__$1;
(statearr_35141_37013[(2)] = inst_35024);

(statearr_35141_37013[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (30))){
var state_35045__$1 = state_35045;
var statearr_35143_37014 = state_35045__$1;
(statearr_35143_37014[(2)] = null);

(statearr_35143_37014[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (10))){
var inst_34923 = (state_35045[(13)]);
var inst_34925 = (state_35045[(14)]);
var inst_34934 = cljs.core._nth(inst_34923,inst_34925);
var inst_34935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34934,(0),null);
var inst_34936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34934,(1),null);
var state_35045__$1 = (function (){var statearr_35147 = state_35045;
(statearr_35147[(24)] = inst_34935);

return statearr_35147;
})();
if(cljs.core.truth_(inst_34936)){
var statearr_35148_37015 = state_35045__$1;
(statearr_35148_37015[(1)] = (13));

} else {
var statearr_35149_37016 = state_35045__$1;
(statearr_35149_37016[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (18))){
var inst_34971 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
var statearr_35151_37017 = state_35045__$1;
(statearr_35151_37017[(2)] = inst_34971);

(statearr_35151_37017[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (42))){
var state_35045__$1 = state_35045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35045__$1,(45),dchan);
} else {
if((state_val_35046 === (37))){
var inst_35005 = (state_35045[(23)]);
var inst_35014 = (state_35045[(22)]);
var inst_34913 = (state_35045[(9)]);
var inst_35014__$1 = cljs.core.first(inst_35005);
var inst_35015 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35014__$1,inst_34913,done);
var state_35045__$1 = (function (){var statearr_35155 = state_35045;
(statearr_35155[(22)] = inst_35014__$1);

return statearr_35155;
})();
if(cljs.core.truth_(inst_35015)){
var statearr_35156_37020 = state_35045__$1;
(statearr_35156_37020[(1)] = (39));

} else {
var statearr_35158_37021 = state_35045__$1;
(statearr_35158_37021[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (8))){
var inst_34925 = (state_35045[(14)]);
var inst_34924 = (state_35045[(15)]);
var inst_34927 = (inst_34925 < inst_34924);
var inst_34928 = inst_34927;
var state_35045__$1 = state_35045;
if(cljs.core.truth_(inst_34928)){
var statearr_35159_37022 = state_35045__$1;
(statearr_35159_37022[(1)] = (10));

} else {
var statearr_35162_37023 = state_35045__$1;
(statearr_35162_37023[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__33533__auto__ = null;
var cljs$core$async$mult_$_state_machine__33533__auto____0 = (function (){
var statearr_35165 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35165[(0)] = cljs$core$async$mult_$_state_machine__33533__auto__);

(statearr_35165[(1)] = (1));

return statearr_35165;
});
var cljs$core$async$mult_$_state_machine__33533__auto____1 = (function (state_35045){
while(true){
var ret_value__33538__auto__ = (function (){try{while(true){
var result__33539__auto__ = switch__33532__auto__(state_35045);
if(cljs.core.keyword_identical_QMARK_(result__33539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33539__auto__;
}
break;
}
}catch (e35166){var ex__33540__auto__ = e35166;
var statearr_35167_37024 = state_35045;
(statearr_35167_37024[(2)] = ex__33540__auto__);


if(cljs.core.seq((state_35045[(4)]))){
var statearr_35170_37025 = state_35045;
(statearr_35170_37025[(1)] = cljs.core.first((state_35045[(4)])));

} else {
throw ex__33540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37026 = state_35045;
state_35045 = G__37026;
continue;
} else {
return ret_value__33538__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33533__auto__ = function(state_35045){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33533__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33533__auto____1.call(this,state_35045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33533__auto____0;
cljs$core$async$mult_$_state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33533__auto____1;
return cljs$core$async$mult_$_state_machine__33533__auto__;
})()
})();
var state__34057__auto__ = (function (){var statearr_35172 = f__34056__auto__();
(statearr_35172[(6)] = c__34055__auto___36941);

return statearr_35172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34057__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__35178 = arguments.length;
switch (G__35178) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_37028 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_37028(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_37034 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_37034(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_37038 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_37038(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_37043 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_37043(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_37044 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_37044(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37045 = arguments.length;
var i__4737__auto___37046 = (0);
while(true){
if((i__4737__auto___37046 < len__4736__auto___37045)){
args__4742__auto__.push((arguments[i__4737__auto___37046]));

var G__37047 = (i__4737__auto___37046 + (1));
i__4737__auto___37046 = G__37047;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35229){
var map__35231 = p__35229;
var map__35231__$1 = (((((!((map__35231 == null))))?(((((map__35231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35231):map__35231);
var opts = map__35231__$1;
var statearr_35233_37048 = state;
(statearr_35233_37048[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35235_37050 = state;
(statearr_35235_37050[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35238_37051 = state;
(statearr_35238_37051[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35221){
var G__35222 = cljs.core.first(seq35221);
var seq35221__$1 = cljs.core.next(seq35221);
var G__35223 = cljs.core.first(seq35221__$1);
var seq35221__$2 = cljs.core.next(seq35221__$1);
var G__35224 = cljs.core.first(seq35221__$2);
var seq35221__$3 = cljs.core.next(seq35221__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35222,G__35223,G__35224,seq35221__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35254 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35254 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35255){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35255 = meta35255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35256,meta35255__$1){
var self__ = this;
var _35256__$1 = this;
return (new cljs.core.async.t_cljs$core$async35254(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35255__$1));
}));

(cljs.core.async.t_cljs$core$async35254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35256){
var self__ = this;
var _35256__$1 = this;
return self__.meta35255;
}));

(cljs.core.async.t_cljs$core$async35254.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35254.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35254.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35254.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35254.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35254.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35254.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35254.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35254.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35255","meta35255",-1216303981,null)], null);
}));

(cljs.core.async.t_cljs$core$async35254.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35254.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35254");

(cljs.core.async.t_cljs$core$async35254.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35254");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35254.
 */
cljs.core.async.__GT_t_cljs$core$async35254 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35254(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35255){
return (new cljs.core.async.t_cljs$core$async35254(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35255));
});

}

return (new cljs.core.async.t_cljs$core$async35254(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34055__auto___37075 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34056__auto__ = (function (){var switch__33532__auto__ = (function (state_35388){
var state_val_35389 = (state_35388[(1)]);
if((state_val_35389 === (7))){
var inst_35295 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
var statearr_35393_37076 = state_35388__$1;
(statearr_35393_37076[(2)] = inst_35295);

(statearr_35393_37076[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (20))){
var inst_35307 = (state_35388[(7)]);
var state_35388__$1 = state_35388;
var statearr_35395_37077 = state_35388__$1;
(statearr_35395_37077[(2)] = inst_35307);

(statearr_35395_37077[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (27))){
var state_35388__$1 = state_35388;
var statearr_35398_37078 = state_35388__$1;
(statearr_35398_37078[(2)] = null);

(statearr_35398_37078[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (1))){
var inst_35280 = (state_35388[(8)]);
var inst_35280__$1 = calc_state();
var inst_35283 = (inst_35280__$1 == null);
var inst_35284 = cljs.core.not(inst_35283);
var state_35388__$1 = (function (){var statearr_35399 = state_35388;
(statearr_35399[(8)] = inst_35280__$1);

return statearr_35399;
})();
if(inst_35284){
var statearr_35400_37079 = state_35388__$1;
(statearr_35400_37079[(1)] = (2));

} else {
var statearr_35402_37080 = state_35388__$1;
(statearr_35402_37080[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (24))){
var inst_35344 = (state_35388[(9)]);
var inst_35332 = (state_35388[(10)]);
var inst_35359 = (state_35388[(11)]);
var inst_35359__$1 = (inst_35332.cljs$core$IFn$_invoke$arity$1 ? inst_35332.cljs$core$IFn$_invoke$arity$1(inst_35344) : inst_35332.call(null,inst_35344));
var state_35388__$1 = (function (){var statearr_35408 = state_35388;
(statearr_35408[(11)] = inst_35359__$1);

return statearr_35408;
})();
if(cljs.core.truth_(inst_35359__$1)){
var statearr_35410_37081 = state_35388__$1;
(statearr_35410_37081[(1)] = (29));

} else {
var statearr_35416_37082 = state_35388__$1;
(statearr_35416_37082[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (4))){
var inst_35298 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
if(cljs.core.truth_(inst_35298)){
var statearr_35420_37083 = state_35388__$1;
(statearr_35420_37083[(1)] = (8));

} else {
var statearr_35421_37084 = state_35388__$1;
(statearr_35421_37084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (15))){
var inst_35326 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
if(cljs.core.truth_(inst_35326)){
var statearr_35423_37085 = state_35388__$1;
(statearr_35423_37085[(1)] = (19));

} else {
var statearr_35425_37086 = state_35388__$1;
(statearr_35425_37086[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (21))){
var inst_35331 = (state_35388[(12)]);
var inst_35331__$1 = (state_35388[(2)]);
var inst_35332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35331__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35331__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35331__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35388__$1 = (function (){var statearr_35427 = state_35388;
(statearr_35427[(13)] = inst_35334);

(statearr_35427[(10)] = inst_35332);

(statearr_35427[(12)] = inst_35331__$1);

return statearr_35427;
})();
return cljs.core.async.ioc_alts_BANG_(state_35388__$1,(22),inst_35336);
} else {
if((state_val_35389 === (31))){
var inst_35367 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
if(cljs.core.truth_(inst_35367)){
var statearr_35435_37087 = state_35388__$1;
(statearr_35435_37087[(1)] = (32));

} else {
var statearr_35437_37089 = state_35388__$1;
(statearr_35437_37089[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (32))){
var inst_35343 = (state_35388[(14)]);
var state_35388__$1 = state_35388;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35388__$1,(35),out,inst_35343);
} else {
if((state_val_35389 === (33))){
var inst_35331 = (state_35388[(12)]);
var inst_35307 = inst_35331;
var state_35388__$1 = (function (){var statearr_35443 = state_35388;
(statearr_35443[(7)] = inst_35307);

return statearr_35443;
})();
var statearr_35444_37092 = state_35388__$1;
(statearr_35444_37092[(2)] = null);

(statearr_35444_37092[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (13))){
var inst_35307 = (state_35388[(7)]);
var inst_35315 = inst_35307.cljs$lang$protocol_mask$partition0$;
var inst_35316 = (inst_35315 & (64));
var inst_35317 = inst_35307.cljs$core$ISeq$;
var inst_35318 = (cljs.core.PROTOCOL_SENTINEL === inst_35317);
var inst_35319 = ((inst_35316) || (inst_35318));
var state_35388__$1 = state_35388;
if(cljs.core.truth_(inst_35319)){
var statearr_35452_37094 = state_35388__$1;
(statearr_35452_37094[(1)] = (16));

} else {
var statearr_35453_37095 = state_35388__$1;
(statearr_35453_37095[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (22))){
var inst_35343 = (state_35388[(14)]);
var inst_35344 = (state_35388[(9)]);
var inst_35342 = (state_35388[(2)]);
var inst_35343__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35342,(0),null);
var inst_35344__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35342,(1),null);
var inst_35345 = (inst_35343__$1 == null);
var inst_35346 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35344__$1,change);
var inst_35347 = ((inst_35345) || (inst_35346));
var state_35388__$1 = (function (){var statearr_35462 = state_35388;
(statearr_35462[(14)] = inst_35343__$1);

(statearr_35462[(9)] = inst_35344__$1);

return statearr_35462;
})();
if(cljs.core.truth_(inst_35347)){
var statearr_35463_37097 = state_35388__$1;
(statearr_35463_37097[(1)] = (23));

} else {
var statearr_35464_37098 = state_35388__$1;
(statearr_35464_37098[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (36))){
var inst_35331 = (state_35388[(12)]);
var inst_35307 = inst_35331;
var state_35388__$1 = (function (){var statearr_35465 = state_35388;
(statearr_35465[(7)] = inst_35307);

return statearr_35465;
})();
var statearr_35467_37099 = state_35388__$1;
(statearr_35467_37099[(2)] = null);

(statearr_35467_37099[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (29))){
var inst_35359 = (state_35388[(11)]);
var state_35388__$1 = state_35388;
var statearr_35471_37100 = state_35388__$1;
(statearr_35471_37100[(2)] = inst_35359);

(statearr_35471_37100[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (6))){
var state_35388__$1 = state_35388;
var statearr_35476_37101 = state_35388__$1;
(statearr_35476_37101[(2)] = false);

(statearr_35476_37101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (28))){
var inst_35355 = (state_35388[(2)]);
var inst_35356 = calc_state();
var inst_35307 = inst_35356;
var state_35388__$1 = (function (){var statearr_35477 = state_35388;
(statearr_35477[(7)] = inst_35307);

(statearr_35477[(15)] = inst_35355);

return statearr_35477;
})();
var statearr_35478_37102 = state_35388__$1;
(statearr_35478_37102[(2)] = null);

(statearr_35478_37102[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (25))){
var inst_35383 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
var statearr_35482_37103 = state_35388__$1;
(statearr_35482_37103[(2)] = inst_35383);

(statearr_35482_37103[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (34))){
var inst_35381 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
var statearr_35485_37104 = state_35388__$1;
(statearr_35485_37104[(2)] = inst_35381);

(statearr_35485_37104[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (17))){
var state_35388__$1 = state_35388;
var statearr_35487_37105 = state_35388__$1;
(statearr_35487_37105[(2)] = false);

(statearr_35487_37105[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (3))){
var state_35388__$1 = state_35388;
var statearr_35488_37106 = state_35388__$1;
(statearr_35488_37106[(2)] = false);

(statearr_35488_37106[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (12))){
var inst_35385 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35388__$1,inst_35385);
} else {
if((state_val_35389 === (2))){
var inst_35280 = (state_35388[(8)]);
var inst_35287 = inst_35280.cljs$lang$protocol_mask$partition0$;
var inst_35288 = (inst_35287 & (64));
var inst_35289 = inst_35280.cljs$core$ISeq$;
var inst_35290 = (cljs.core.PROTOCOL_SENTINEL === inst_35289);
var inst_35291 = ((inst_35288) || (inst_35290));
var state_35388__$1 = state_35388;
if(cljs.core.truth_(inst_35291)){
var statearr_35491_37107 = state_35388__$1;
(statearr_35491_37107[(1)] = (5));

} else {
var statearr_35493_37108 = state_35388__$1;
(statearr_35493_37108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (23))){
var inst_35343 = (state_35388[(14)]);
var inst_35349 = (inst_35343 == null);
var state_35388__$1 = state_35388;
if(cljs.core.truth_(inst_35349)){
var statearr_35499_37109 = state_35388__$1;
(statearr_35499_37109[(1)] = (26));

} else {
var statearr_35503_37110 = state_35388__$1;
(statearr_35503_37110[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (35))){
var inst_35371 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
if(cljs.core.truth_(inst_35371)){
var statearr_35506_37115 = state_35388__$1;
(statearr_35506_37115[(1)] = (36));

} else {
var statearr_35507_37116 = state_35388__$1;
(statearr_35507_37116[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (19))){
var inst_35307 = (state_35388[(7)]);
var inst_35328 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35307);
var state_35388__$1 = state_35388;
var statearr_35510_37117 = state_35388__$1;
(statearr_35510_37117[(2)] = inst_35328);

(statearr_35510_37117[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (11))){
var inst_35307 = (state_35388[(7)]);
var inst_35312 = (inst_35307 == null);
var inst_35313 = cljs.core.not(inst_35312);
var state_35388__$1 = state_35388;
if(inst_35313){
var statearr_35512_37118 = state_35388__$1;
(statearr_35512_37118[(1)] = (13));

} else {
var statearr_35516_37119 = state_35388__$1;
(statearr_35516_37119[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (9))){
var inst_35280 = (state_35388[(8)]);
var state_35388__$1 = state_35388;
var statearr_35518_37120 = state_35388__$1;
(statearr_35518_37120[(2)] = inst_35280);

(statearr_35518_37120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (5))){
var state_35388__$1 = state_35388;
var statearr_35522_37121 = state_35388__$1;
(statearr_35522_37121[(2)] = true);

(statearr_35522_37121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (14))){
var state_35388__$1 = state_35388;
var statearr_35524_37126 = state_35388__$1;
(statearr_35524_37126[(2)] = false);

(statearr_35524_37126[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (26))){
var inst_35344 = (state_35388[(9)]);
var inst_35352 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35344);
var state_35388__$1 = state_35388;
var statearr_35529_37127 = state_35388__$1;
(statearr_35529_37127[(2)] = inst_35352);

(statearr_35529_37127[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (16))){
var state_35388__$1 = state_35388;
var statearr_35531_37128 = state_35388__$1;
(statearr_35531_37128[(2)] = true);

(statearr_35531_37128[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (38))){
var inst_35377 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
var statearr_35535_37129 = state_35388__$1;
(statearr_35535_37129[(2)] = inst_35377);

(statearr_35535_37129[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (30))){
var inst_35344 = (state_35388[(9)]);
var inst_35334 = (state_35388[(13)]);
var inst_35332 = (state_35388[(10)]);
var inst_35362 = cljs.core.empty_QMARK_(inst_35332);
var inst_35363 = (inst_35334.cljs$core$IFn$_invoke$arity$1 ? inst_35334.cljs$core$IFn$_invoke$arity$1(inst_35344) : inst_35334.call(null,inst_35344));
var inst_35364 = cljs.core.not(inst_35363);
var inst_35365 = ((inst_35362) && (inst_35364));
var state_35388__$1 = state_35388;
var statearr_35543_37134 = state_35388__$1;
(statearr_35543_37134[(2)] = inst_35365);

(statearr_35543_37134[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (10))){
var inst_35280 = (state_35388[(8)]);
var inst_35303 = (state_35388[(2)]);
var inst_35304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35303,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35303,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35303,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35307 = inst_35280;
var state_35388__$1 = (function (){var statearr_35546 = state_35388;
(statearr_35546[(16)] = inst_35306);

(statearr_35546[(7)] = inst_35307);

(statearr_35546[(17)] = inst_35305);

(statearr_35546[(18)] = inst_35304);

return statearr_35546;
})();
var statearr_35547_37139 = state_35388__$1;
(statearr_35547_37139[(2)] = null);

(statearr_35547_37139[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (18))){
var inst_35323 = (state_35388[(2)]);
var state_35388__$1 = state_35388;
var statearr_35548_37141 = state_35388__$1;
(statearr_35548_37141[(2)] = inst_35323);

(statearr_35548_37141[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (37))){
var state_35388__$1 = state_35388;
var statearr_35549_37142 = state_35388__$1;
(statearr_35549_37142[(2)] = null);

(statearr_35549_37142[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35389 === (8))){
var inst_35280 = (state_35388[(8)]);
var inst_35300 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35280);
var state_35388__$1 = state_35388;
var statearr_35550_37143 = state_35388__$1;
(statearr_35550_37143[(2)] = inst_35300);

(statearr_35550_37143[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__33533__auto__ = null;
var cljs$core$async$mix_$_state_machine__33533__auto____0 = (function (){
var statearr_35559 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35559[(0)] = cljs$core$async$mix_$_state_machine__33533__auto__);

(statearr_35559[(1)] = (1));

return statearr_35559;
});
var cljs$core$async$mix_$_state_machine__33533__auto____1 = (function (state_35388){
while(true){
var ret_value__33538__auto__ = (function (){try{while(true){
var result__33539__auto__ = switch__33532__auto__(state_35388);
if(cljs.core.keyword_identical_QMARK_(result__33539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33539__auto__;
}
break;
}
}catch (e35560){var ex__33540__auto__ = e35560;
var statearr_35561_37144 = state_35388;
(statearr_35561_37144[(2)] = ex__33540__auto__);


if(cljs.core.seq((state_35388[(4)]))){
var statearr_35562_37145 = state_35388;
(statearr_35562_37145[(1)] = cljs.core.first((state_35388[(4)])));

} else {
throw ex__33540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37146 = state_35388;
state_35388 = G__37146;
continue;
} else {
return ret_value__33538__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33533__auto__ = function(state_35388){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33533__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33533__auto____1.call(this,state_35388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33533__auto____0;
cljs$core$async$mix_$_state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33533__auto____1;
return cljs$core$async$mix_$_state_machine__33533__auto__;
})()
})();
var state__34057__auto__ = (function (){var statearr_35567 = f__34056__auto__();
(statearr_35567[(6)] = c__34055__auto___37075);

return statearr_35567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34057__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_37148 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_37148(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_37153 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_37153(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_37154 = (function() {
var G__37155 = null;
var G__37155__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__37155__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__37155 = function(p,v){
switch(arguments.length){
case 1:
return G__37155__1.call(this,p);
case 2:
return G__37155__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37155.cljs$core$IFn$_invoke$arity$1 = G__37155__1;
G__37155.cljs$core$IFn$_invoke$arity$2 = G__37155__2;
return G__37155;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35599 = arguments.length;
switch (G__35599) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37154(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37154(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__35607 = arguments.length;
switch (G__35607) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35605_SHARP_){
if(cljs.core.truth_((p1__35605_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35605_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35605_SHARP_.call(null,topic)))){
return p1__35605_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35605_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35608 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35608 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35609){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35609 = meta35609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35610,meta35609__$1){
var self__ = this;
var _35610__$1 = this;
return (new cljs.core.async.t_cljs$core$async35608(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35609__$1));
}));

(cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35610){
var self__ = this;
var _35610__$1 = this;
return self__.meta35609;
}));

(cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35608.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35609","meta35609",461725756,null)], null);
}));

(cljs.core.async.t_cljs$core$async35608.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35608");

(cljs.core.async.t_cljs$core$async35608.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35608");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35608.
 */
cljs.core.async.__GT_t_cljs$core$async35608 = (function cljs$core$async$__GT_t_cljs$core$async35608(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35609){
return (new cljs.core.async.t_cljs$core$async35608(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35609));
});

}

return (new cljs.core.async.t_cljs$core$async35608(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34055__auto___37167 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34056__auto__ = (function (){var switch__33532__auto__ = (function (state_35684){
var state_val_35685 = (state_35684[(1)]);
if((state_val_35685 === (7))){
var inst_35680 = (state_35684[(2)]);
var state_35684__$1 = state_35684;
var statearr_35686_37168 = state_35684__$1;
(statearr_35686_37168[(2)] = inst_35680);

(statearr_35686_37168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35685 === (20))){
var state_35684__$1 = state_35684;
var statearr_35687_37173 = state_35684__$1;
(statearr_35687_37173[(2)] = null);

(statearr_35687_37173[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35685 === (1))){
var state_35684__$1 = state_35684;
var statearr_35688_37174 = state_35684__$1;
(statearr_35688_37174[(2)] = null);

(statearr_35688_37174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35685 === (24))){
var inst_35663 = (state_35684[(7)]);
var inst_35672 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35663);
var state_35684__$1 = state_35684;
var statearr_35689_37175 = state_35684__$1;
(statearr_35689_37175[(2)] = inst_35672);

(statearr_35689_37175[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35685 === (4))){
var inst_35615 = (state_35684[(8)]);
var inst_35615__$1 = (state_35684[(2)]);
var inst_35616 = (inst_35615__$1 == null);
var state_35684__$1 = (function (){var statearr_35690 = state_35684;
(statearr_35690[(8)] = inst_35615__$1);

return statearr_35690;
})();
if(cljs.core.truth_(inst_35616)){
var statearr_35691_37176 = state_35684__$1;
(statearr_35691_37176[(1)] = (5));

} else {
var statearr_35692_37177 = state_35684__$1;
(statearr_35692_37177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35685 === (15))){
var inst_35657 = (state_35684[(2)]);
var state_35684__$1 = state_35684;
var statearr_35693_37179 = state_35684__$1;
(statearr_35693_37179[(2)] = inst_35657);

(statearr_35693_37179[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35685 === (21))){
var inst_35677 = (state_35684[(2)]);
var state_35684__$1 = (function (){var statearr_35694 = state_35684;
(statearr_35694[(9)] = inst_35677);

return statearr_35694;
})();
var statearr_35695_37180 = state_35684__$1;
(statearr_35695_37180[(2)] = null);

(statearr_35695_37180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35685 === (13))){
var inst_35639 = (state_35684[(10)]);
var inst_35641 = cljs.core.chunked_seq_QMARK_(inst_35639);
var state_35684__$1 = state_35684;
if(inst_35641){
var statearr_35696_37181 = state_35684__$1;
(statearr_35696_37181[(1)] = (16));

} else {
var statearr_35697_37182 = state_35684__$1;
(statearr_35697_37182[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35685 === (22))){
var inst_35669 = (state_35684[(2)]);
var state_35684__$1 = state_35684;
if(cljs.core.truth_(inst_35669)){
var statearr_35699_37184 = state_35684__$1;
(statearr_35699_37184[(1)] = (23));

} else {
var statearr_35701_37185 = state_35684__$1;
(statearr_35701_37185[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35685 === (6))){
var inst_35615 = (state_35684[(8)]);
var inst_35665 = (state_35684[(11)]);
var inst_35663 = (state_35684[(7)]);
var inst_35663__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35615) : topic_fn.call(null,inst_35615));
var inst_35664 = cljs.core.deref(mults);
var inst_35665__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35664,inst_35663__$1);
var state_35684__$1 = (function (){var statearr_35702 = state_35684;
(statearr_35702[(11)] = inst_35665__$1);

(statearr_35702[(7)] = inst_35663__$1);

return statearr_35702;
})();
if(cljs.core.truth_(inst_35665__$1)){
var statearr_35703_37186 = state_35684__$1;
(statearr_35703_37186[(1)] = (19));

} else {
var statearr_35704_37188 = state_35684__$1;
(statearr_35704_37188[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35685 === (25))){
var inst_35674 = (state_35684[(2)]);
var state_35684__$1 = state_35684;
var statearr_35705_37189 = state_35684__$1;
(statearr_35705_37189[(2)] = inst_35674);

(statearr_35705_37189[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35685 === (17))){
var inst_35639 = (state_35684[(10)]);
var inst_35648 = cljs.core.first(inst_35639);
var inst_35649 = cljs.core.async.muxch_STAR_(inst_35648);
var inst_35650 = cljs.core.async.close_BANG_(inst_35649);
var inst_35651 = cljs.core.next(inst_35639);
var inst_35625 = inst_35651;
var inst_35626 = null;
var inst_35627 = (0);
var inst_35628 = (0);
var state_35684__$1 = (function (){var statearr_35706 = state_35684;
(statearr_35706[(12)] = inst_35627);

(statearr_35706[(13)] = inst_35625);

(statearr_35706[(14)] = inst_35650);

(statearr_35706[(15)] = inst_35626);

(statearr_35706[(16)] = inst_35628);

return statearr_35706;
})();
var statearr_35707_37201 = state_35684__$1;
(statearr_35707_37201[(2)] = null);

(statearr_35707_37201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35685 === (3))){
var inst_35682 = (state_35684[(2)]);
var state_35684__$1 = state_35684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35684__$1,inst_35682);
} else {
if((state_val_35685 === (12))){
var inst_35659 = (state_35684[(2)]);
var state_35684__$1 = state_35684;
var statearr_35708_37202 = state_35684__$1;
(statearr_35708_37202[(2)] = inst_35659);

(statearr_35708_37202[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35685 === (2))){
var state_35684__$1 = state_35684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35684__$1,(4),ch);
} else {
if((state_val_35685 === (23))){
var state_35684__$1 = state_35684;
var statearr_35710_37203 = state_35684__$1;
(statearr_35710_37203[(2)] = null);

(statearr_35710_37203[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35685 === (19))){
var inst_35615 = (state_35684[(8)]);
var inst_35665 = (state_35684[(11)]);
var inst_35667 = cljs.core.async.muxch_STAR_(inst_35665);
var state_35684__$1 = state_35684;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35684__$1,(22),inst_35667,inst_35615);
} else {
if((state_val_35685 === (11))){
var inst_35625 = (state_35684[(13)]);
var inst_35639 = (state_35684[(10)]);
var inst_35639__$1 = cljs.core.seq(inst_35625);
var state_35684__$1 = (function (){var statearr_35712 = state_35684;
(statearr_35712[(10)] = inst_35639__$1);

return statearr_35712;
})();
if(inst_35639__$1){
var statearr_35713_37209 = state_35684__$1;
(statearr_35713_37209[(1)] = (13));

} else {
var statearr_35714_37210 = state_35684__$1;
(statearr_35714_37210[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35685 === (9))){
var inst_35661 = (state_35684[(2)]);
var state_35684__$1 = state_35684;
var statearr_35715_37215 = state_35684__$1;
(statearr_35715_37215[(2)] = inst_35661);

(statearr_35715_37215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35685 === (5))){
var inst_35622 = cljs.core.deref(mults);
var inst_35623 = cljs.core.vals(inst_35622);
var inst_35624 = cljs.core.seq(inst_35623);
var inst_35625 = inst_35624;
var inst_35626 = null;
var inst_35627 = (0);
var inst_35628 = (0);
var state_35684__$1 = (function (){var statearr_35716 = state_35684;
(statearr_35716[(12)] = inst_35627);

(statearr_35716[(13)] = inst_35625);

(statearr_35716[(15)] = inst_35626);

(statearr_35716[(16)] = inst_35628);

return statearr_35716;
})();
var statearr_35717_37221 = state_35684__$1;
(statearr_35717_37221[(2)] = null);

(statearr_35717_37221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35685 === (14))){
var state_35684__$1 = state_35684;
var statearr_35721_37223 = state_35684__$1;
(statearr_35721_37223[(2)] = null);

(statearr_35721_37223[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35685 === (16))){
var inst_35639 = (state_35684[(10)]);
var inst_35643 = cljs.core.chunk_first(inst_35639);
var inst_35644 = cljs.core.chunk_rest(inst_35639);
var inst_35645 = cljs.core.count(inst_35643);
var inst_35625 = inst_35644;
var inst_35626 = inst_35643;
var inst_35627 = inst_35645;
var inst_35628 = (0);
var state_35684__$1 = (function (){var statearr_35724 = state_35684;
(statearr_35724[(12)] = inst_35627);

(statearr_35724[(13)] = inst_35625);

(statearr_35724[(15)] = inst_35626);

(statearr_35724[(16)] = inst_35628);

return statearr_35724;
})();
var statearr_35725_37224 = state_35684__$1;
(statearr_35725_37224[(2)] = null);

(statearr_35725_37224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35685 === (10))){
var inst_35627 = (state_35684[(12)]);
var inst_35625 = (state_35684[(13)]);
var inst_35626 = (state_35684[(15)]);
var inst_35628 = (state_35684[(16)]);
var inst_35633 = cljs.core._nth(inst_35626,inst_35628);
var inst_35634 = cljs.core.async.muxch_STAR_(inst_35633);
var inst_35635 = cljs.core.async.close_BANG_(inst_35634);
var inst_35636 = (inst_35628 + (1));
var tmp35718 = inst_35627;
var tmp35719 = inst_35625;
var tmp35720 = inst_35626;
var inst_35625__$1 = tmp35719;
var inst_35626__$1 = tmp35720;
var inst_35627__$1 = tmp35718;
var inst_35628__$1 = inst_35636;
var state_35684__$1 = (function (){var statearr_35726 = state_35684;
(statearr_35726[(12)] = inst_35627__$1);

(statearr_35726[(17)] = inst_35635);

(statearr_35726[(13)] = inst_35625__$1);

(statearr_35726[(15)] = inst_35626__$1);

(statearr_35726[(16)] = inst_35628__$1);

return statearr_35726;
})();
var statearr_35727_37233 = state_35684__$1;
(statearr_35727_37233[(2)] = null);

(statearr_35727_37233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35685 === (18))){
var inst_35654 = (state_35684[(2)]);
var state_35684__$1 = state_35684;
var statearr_35728_37238 = state_35684__$1;
(statearr_35728_37238[(2)] = inst_35654);

(statearr_35728_37238[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35685 === (8))){
var inst_35627 = (state_35684[(12)]);
var inst_35628 = (state_35684[(16)]);
var inst_35630 = (inst_35628 < inst_35627);
var inst_35631 = inst_35630;
var state_35684__$1 = state_35684;
if(cljs.core.truth_(inst_35631)){
var statearr_35729_37243 = state_35684__$1;
(statearr_35729_37243[(1)] = (10));

} else {
var statearr_35730_37244 = state_35684__$1;
(statearr_35730_37244[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33533__auto__ = null;
var cljs$core$async$state_machine__33533__auto____0 = (function (){
var statearr_35731 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35731[(0)] = cljs$core$async$state_machine__33533__auto__);

(statearr_35731[(1)] = (1));

return statearr_35731;
});
var cljs$core$async$state_machine__33533__auto____1 = (function (state_35684){
while(true){
var ret_value__33538__auto__ = (function (){try{while(true){
var result__33539__auto__ = switch__33532__auto__(state_35684);
if(cljs.core.keyword_identical_QMARK_(result__33539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33539__auto__;
}
break;
}
}catch (e35732){var ex__33540__auto__ = e35732;
var statearr_35733_37246 = state_35684;
(statearr_35733_37246[(2)] = ex__33540__auto__);


if(cljs.core.seq((state_35684[(4)]))){
var statearr_35734_37247 = state_35684;
(statearr_35734_37247[(1)] = cljs.core.first((state_35684[(4)])));

} else {
throw ex__33540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37248 = state_35684;
state_35684 = G__37248;
continue;
} else {
return ret_value__33538__auto__;
}
break;
}
});
cljs$core$async$state_machine__33533__auto__ = function(state_35684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33533__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33533__auto____1.call(this,state_35684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33533__auto____0;
cljs$core$async$state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33533__auto____1;
return cljs$core$async$state_machine__33533__auto__;
})()
})();
var state__34057__auto__ = (function (){var statearr_35735 = f__34056__auto__();
(statearr_35735[(6)] = c__34055__auto___37167);

return statearr_35735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34057__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35737 = arguments.length;
switch (G__35737) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35745 = arguments.length;
switch (G__35745) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__35753 = arguments.length;
switch (G__35753) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__34055__auto___37254 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34056__auto__ = (function (){var switch__33532__auto__ = (function (state_35818){
var state_val_35823 = (state_35818[(1)]);
if((state_val_35823 === (7))){
var state_35818__$1 = state_35818;
var statearr_35830_37255 = state_35818__$1;
(statearr_35830_37255[(2)] = null);

(statearr_35830_37255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35823 === (1))){
var state_35818__$1 = state_35818;
var statearr_35831_37256 = state_35818__$1;
(statearr_35831_37256[(2)] = null);

(statearr_35831_37256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35823 === (4))){
var inst_35760 = (state_35818[(7)]);
var inst_35759 = (state_35818[(8)]);
var inst_35762 = (inst_35760 < inst_35759);
var state_35818__$1 = state_35818;
if(cljs.core.truth_(inst_35762)){
var statearr_35835_37257 = state_35818__$1;
(statearr_35835_37257[(1)] = (6));

} else {
var statearr_35836_37258 = state_35818__$1;
(statearr_35836_37258[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35823 === (15))){
var inst_35804 = (state_35818[(9)]);
var inst_35809 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35804);
var state_35818__$1 = state_35818;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35818__$1,(17),out,inst_35809);
} else {
if((state_val_35823 === (13))){
var inst_35804 = (state_35818[(9)]);
var inst_35804__$1 = (state_35818[(2)]);
var inst_35805 = cljs.core.some(cljs.core.nil_QMARK_,inst_35804__$1);
var state_35818__$1 = (function (){var statearr_35837 = state_35818;
(statearr_35837[(9)] = inst_35804__$1);

return statearr_35837;
})();
if(cljs.core.truth_(inst_35805)){
var statearr_35838_37262 = state_35818__$1;
(statearr_35838_37262[(1)] = (14));

} else {
var statearr_35839_37263 = state_35818__$1;
(statearr_35839_37263[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35823 === (6))){
var state_35818__$1 = state_35818;
var statearr_35840_37264 = state_35818__$1;
(statearr_35840_37264[(2)] = null);

(statearr_35840_37264[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35823 === (17))){
var inst_35811 = (state_35818[(2)]);
var state_35818__$1 = (function (){var statearr_35846 = state_35818;
(statearr_35846[(10)] = inst_35811);

return statearr_35846;
})();
var statearr_35847_37282 = state_35818__$1;
(statearr_35847_37282[(2)] = null);

(statearr_35847_37282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35823 === (3))){
var inst_35816 = (state_35818[(2)]);
var state_35818__$1 = state_35818;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35818__$1,inst_35816);
} else {
if((state_val_35823 === (12))){
var _ = (function (){var statearr_35848 = state_35818;
(statearr_35848[(4)] = cljs.core.rest((state_35818[(4)])));

return statearr_35848;
})();
var state_35818__$1 = state_35818;
var ex35845 = (state_35818__$1[(2)]);
var statearr_35849_37284 = state_35818__$1;
(statearr_35849_37284[(5)] = ex35845);


if((ex35845 instanceof Object)){
var statearr_35854_37286 = state_35818__$1;
(statearr_35854_37286[(1)] = (11));

(statearr_35854_37286[(5)] = null);

} else {
throw ex35845;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35823 === (2))){
var inst_35758 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35759 = cnt;
var inst_35760 = (0);
var state_35818__$1 = (function (){var statearr_35857 = state_35818;
(statearr_35857[(7)] = inst_35760);

(statearr_35857[(8)] = inst_35759);

(statearr_35857[(11)] = inst_35758);

return statearr_35857;
})();
var statearr_35858_37294 = state_35818__$1;
(statearr_35858_37294[(2)] = null);

(statearr_35858_37294[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35823 === (11))){
var inst_35783 = (state_35818[(2)]);
var inst_35784 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35818__$1 = (function (){var statearr_35860 = state_35818;
(statearr_35860[(12)] = inst_35783);

return statearr_35860;
})();
var statearr_35861_37295 = state_35818__$1;
(statearr_35861_37295[(2)] = inst_35784);

(statearr_35861_37295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35823 === (9))){
var inst_35760 = (state_35818[(7)]);
var _ = (function (){var statearr_35863 = state_35818;
(statearr_35863[(4)] = cljs.core.cons((12),(state_35818[(4)])));

return statearr_35863;
})();
var inst_35790 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35760) : chs__$1.call(null,inst_35760));
var inst_35791 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35760) : done.call(null,inst_35760));
var inst_35792 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35790,inst_35791);
var ___$1 = (function (){var statearr_35864 = state_35818;
(statearr_35864[(4)] = cljs.core.rest((state_35818[(4)])));

return statearr_35864;
})();
var state_35818__$1 = state_35818;
var statearr_35865_37312 = state_35818__$1;
(statearr_35865_37312[(2)] = inst_35792);

(statearr_35865_37312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35823 === (5))){
var inst_35802 = (state_35818[(2)]);
var state_35818__$1 = (function (){var statearr_35866 = state_35818;
(statearr_35866[(13)] = inst_35802);

return statearr_35866;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35818__$1,(13),dchan);
} else {
if((state_val_35823 === (14))){
var inst_35807 = cljs.core.async.close_BANG_(out);
var state_35818__$1 = state_35818;
var statearr_35867_37318 = state_35818__$1;
(statearr_35867_37318[(2)] = inst_35807);

(statearr_35867_37318[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35823 === (16))){
var inst_35814 = (state_35818[(2)]);
var state_35818__$1 = state_35818;
var statearr_35868_37319 = state_35818__$1;
(statearr_35868_37319[(2)] = inst_35814);

(statearr_35868_37319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35823 === (10))){
var inst_35760 = (state_35818[(7)]);
var inst_35795 = (state_35818[(2)]);
var inst_35796 = (inst_35760 + (1));
var inst_35760__$1 = inst_35796;
var state_35818__$1 = (function (){var statearr_35869 = state_35818;
(statearr_35869[(7)] = inst_35760__$1);

(statearr_35869[(14)] = inst_35795);

return statearr_35869;
})();
var statearr_35870_37332 = state_35818__$1;
(statearr_35870_37332[(2)] = null);

(statearr_35870_37332[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35823 === (8))){
var inst_35800 = (state_35818[(2)]);
var state_35818__$1 = state_35818;
var statearr_35871_37346 = state_35818__$1;
(statearr_35871_37346[(2)] = inst_35800);

(statearr_35871_37346[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33533__auto__ = null;
var cljs$core$async$state_machine__33533__auto____0 = (function (){
var statearr_35872 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35872[(0)] = cljs$core$async$state_machine__33533__auto__);

(statearr_35872[(1)] = (1));

return statearr_35872;
});
var cljs$core$async$state_machine__33533__auto____1 = (function (state_35818){
while(true){
var ret_value__33538__auto__ = (function (){try{while(true){
var result__33539__auto__ = switch__33532__auto__(state_35818);
if(cljs.core.keyword_identical_QMARK_(result__33539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33539__auto__;
}
break;
}
}catch (e35874){var ex__33540__auto__ = e35874;
var statearr_35875_37351 = state_35818;
(statearr_35875_37351[(2)] = ex__33540__auto__);


if(cljs.core.seq((state_35818[(4)]))){
var statearr_35877_37352 = state_35818;
(statearr_35877_37352[(1)] = cljs.core.first((state_35818[(4)])));

} else {
throw ex__33540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37354 = state_35818;
state_35818 = G__37354;
continue;
} else {
return ret_value__33538__auto__;
}
break;
}
});
cljs$core$async$state_machine__33533__auto__ = function(state_35818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33533__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33533__auto____1.call(this,state_35818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33533__auto____0;
cljs$core$async$state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33533__auto____1;
return cljs$core$async$state_machine__33533__auto__;
})()
})();
var state__34057__auto__ = (function (){var statearr_35878 = f__34056__auto__();
(statearr_35878[(6)] = c__34055__auto___37254);

return statearr_35878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34057__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__35882 = arguments.length;
switch (G__35882) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34055__auto___37377 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34056__auto__ = (function (){var switch__33532__auto__ = (function (state_35918){
var state_val_35919 = (state_35918[(1)]);
if((state_val_35919 === (7))){
var inst_35898 = (state_35918[(7)]);
var inst_35897 = (state_35918[(8)]);
var inst_35897__$1 = (state_35918[(2)]);
var inst_35898__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35897__$1,(0),null);
var inst_35899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35897__$1,(1),null);
var inst_35900 = (inst_35898__$1 == null);
var state_35918__$1 = (function (){var statearr_35920 = state_35918;
(statearr_35920[(7)] = inst_35898__$1);

(statearr_35920[(8)] = inst_35897__$1);

(statearr_35920[(9)] = inst_35899);

return statearr_35920;
})();
if(cljs.core.truth_(inst_35900)){
var statearr_35921_37392 = state_35918__$1;
(statearr_35921_37392[(1)] = (8));

} else {
var statearr_35922_37394 = state_35918__$1;
(statearr_35922_37394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35919 === (1))){
var inst_35887 = cljs.core.vec(chs);
var inst_35888 = inst_35887;
var state_35918__$1 = (function (){var statearr_35923 = state_35918;
(statearr_35923[(10)] = inst_35888);

return statearr_35923;
})();
var statearr_35924_37399 = state_35918__$1;
(statearr_35924_37399[(2)] = null);

(statearr_35924_37399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35919 === (4))){
var inst_35888 = (state_35918[(10)]);
var state_35918__$1 = state_35918;
return cljs.core.async.ioc_alts_BANG_(state_35918__$1,(7),inst_35888);
} else {
if((state_val_35919 === (6))){
var inst_35914 = (state_35918[(2)]);
var state_35918__$1 = state_35918;
var statearr_35925_37400 = state_35918__$1;
(statearr_35925_37400[(2)] = inst_35914);

(statearr_35925_37400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35919 === (3))){
var inst_35916 = (state_35918[(2)]);
var state_35918__$1 = state_35918;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35918__$1,inst_35916);
} else {
if((state_val_35919 === (2))){
var inst_35888 = (state_35918[(10)]);
var inst_35890 = cljs.core.count(inst_35888);
var inst_35891 = (inst_35890 > (0));
var state_35918__$1 = state_35918;
if(cljs.core.truth_(inst_35891)){
var statearr_35927_37409 = state_35918__$1;
(statearr_35927_37409[(1)] = (4));

} else {
var statearr_35928_37410 = state_35918__$1;
(statearr_35928_37410[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35919 === (11))){
var inst_35888 = (state_35918[(10)]);
var inst_35907 = (state_35918[(2)]);
var tmp35926 = inst_35888;
var inst_35888__$1 = tmp35926;
var state_35918__$1 = (function (){var statearr_35929 = state_35918;
(statearr_35929[(10)] = inst_35888__$1);

(statearr_35929[(11)] = inst_35907);

return statearr_35929;
})();
var statearr_35932_37415 = state_35918__$1;
(statearr_35932_37415[(2)] = null);

(statearr_35932_37415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35919 === (9))){
var inst_35898 = (state_35918[(7)]);
var state_35918__$1 = state_35918;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35918__$1,(11),out,inst_35898);
} else {
if((state_val_35919 === (5))){
var inst_35912 = cljs.core.async.close_BANG_(out);
var state_35918__$1 = state_35918;
var statearr_35937_37420 = state_35918__$1;
(statearr_35937_37420[(2)] = inst_35912);

(statearr_35937_37420[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35919 === (10))){
var inst_35910 = (state_35918[(2)]);
var state_35918__$1 = state_35918;
var statearr_35939_37422 = state_35918__$1;
(statearr_35939_37422[(2)] = inst_35910);

(statearr_35939_37422[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35919 === (8))){
var inst_35888 = (state_35918[(10)]);
var inst_35898 = (state_35918[(7)]);
var inst_35897 = (state_35918[(8)]);
var inst_35899 = (state_35918[(9)]);
var inst_35902 = (function (){var cs = inst_35888;
var vec__35893 = inst_35897;
var v = inst_35898;
var c = inst_35899;
return (function (p1__35879_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35879_SHARP_);
});
})();
var inst_35903 = cljs.core.filterv(inst_35902,inst_35888);
var inst_35888__$1 = inst_35903;
var state_35918__$1 = (function (){var statearr_35940 = state_35918;
(statearr_35940[(10)] = inst_35888__$1);

return statearr_35940;
})();
var statearr_35941_37424 = state_35918__$1;
(statearr_35941_37424[(2)] = null);

(statearr_35941_37424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33533__auto__ = null;
var cljs$core$async$state_machine__33533__auto____0 = (function (){
var statearr_35942 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35942[(0)] = cljs$core$async$state_machine__33533__auto__);

(statearr_35942[(1)] = (1));

return statearr_35942;
});
var cljs$core$async$state_machine__33533__auto____1 = (function (state_35918){
while(true){
var ret_value__33538__auto__ = (function (){try{while(true){
var result__33539__auto__ = switch__33532__auto__(state_35918);
if(cljs.core.keyword_identical_QMARK_(result__33539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33539__auto__;
}
break;
}
}catch (e35943){var ex__33540__auto__ = e35943;
var statearr_35945_37426 = state_35918;
(statearr_35945_37426[(2)] = ex__33540__auto__);


if(cljs.core.seq((state_35918[(4)]))){
var statearr_35947_37428 = state_35918;
(statearr_35947_37428[(1)] = cljs.core.first((state_35918[(4)])));

} else {
throw ex__33540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37429 = state_35918;
state_35918 = G__37429;
continue;
} else {
return ret_value__33538__auto__;
}
break;
}
});
cljs$core$async$state_machine__33533__auto__ = function(state_35918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33533__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33533__auto____1.call(this,state_35918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33533__auto____0;
cljs$core$async$state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33533__auto____1;
return cljs$core$async$state_machine__33533__auto__;
})()
})();
var state__34057__auto__ = (function (){var statearr_35950 = f__34056__auto__();
(statearr_35950[(6)] = c__34055__auto___37377);

return statearr_35950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34057__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__35955 = arguments.length;
switch (G__35955) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34055__auto___37435 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34056__auto__ = (function (){var switch__33532__auto__ = (function (state_35979){
var state_val_35980 = (state_35979[(1)]);
if((state_val_35980 === (7))){
var inst_35961 = (state_35979[(7)]);
var inst_35961__$1 = (state_35979[(2)]);
var inst_35962 = (inst_35961__$1 == null);
var inst_35963 = cljs.core.not(inst_35962);
var state_35979__$1 = (function (){var statearr_35981 = state_35979;
(statearr_35981[(7)] = inst_35961__$1);

return statearr_35981;
})();
if(inst_35963){
var statearr_35982_37436 = state_35979__$1;
(statearr_35982_37436[(1)] = (8));

} else {
var statearr_35983_37437 = state_35979__$1;
(statearr_35983_37437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (1))){
var inst_35956 = (0);
var state_35979__$1 = (function (){var statearr_35984 = state_35979;
(statearr_35984[(8)] = inst_35956);

return statearr_35984;
})();
var statearr_35985_37440 = state_35979__$1;
(statearr_35985_37440[(2)] = null);

(statearr_35985_37440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (4))){
var state_35979__$1 = state_35979;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35979__$1,(7),ch);
} else {
if((state_val_35980 === (6))){
var inst_35974 = (state_35979[(2)]);
var state_35979__$1 = state_35979;
var statearr_35990_37449 = state_35979__$1;
(statearr_35990_37449[(2)] = inst_35974);

(statearr_35990_37449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (3))){
var inst_35976 = (state_35979[(2)]);
var inst_35977 = cljs.core.async.close_BANG_(out);
var state_35979__$1 = (function (){var statearr_35991 = state_35979;
(statearr_35991[(9)] = inst_35976);

return statearr_35991;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35979__$1,inst_35977);
} else {
if((state_val_35980 === (2))){
var inst_35956 = (state_35979[(8)]);
var inst_35958 = (inst_35956 < n);
var state_35979__$1 = state_35979;
if(cljs.core.truth_(inst_35958)){
var statearr_35992_37451 = state_35979__$1;
(statearr_35992_37451[(1)] = (4));

} else {
var statearr_35993_37457 = state_35979__$1;
(statearr_35993_37457[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (11))){
var inst_35956 = (state_35979[(8)]);
var inst_35966 = (state_35979[(2)]);
var inst_35967 = (inst_35956 + (1));
var inst_35956__$1 = inst_35967;
var state_35979__$1 = (function (){var statearr_35994 = state_35979;
(statearr_35994[(8)] = inst_35956__$1);

(statearr_35994[(10)] = inst_35966);

return statearr_35994;
})();
var statearr_35999_37468 = state_35979__$1;
(statearr_35999_37468[(2)] = null);

(statearr_35999_37468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (9))){
var state_35979__$1 = state_35979;
var statearr_36000_37469 = state_35979__$1;
(statearr_36000_37469[(2)] = null);

(statearr_36000_37469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (5))){
var state_35979__$1 = state_35979;
var statearr_36001_37474 = state_35979__$1;
(statearr_36001_37474[(2)] = null);

(statearr_36001_37474[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (10))){
var inst_35971 = (state_35979[(2)]);
var state_35979__$1 = state_35979;
var statearr_36002_37479 = state_35979__$1;
(statearr_36002_37479[(2)] = inst_35971);

(statearr_36002_37479[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (8))){
var inst_35961 = (state_35979[(7)]);
var state_35979__$1 = state_35979;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35979__$1,(11),out,inst_35961);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33533__auto__ = null;
var cljs$core$async$state_machine__33533__auto____0 = (function (){
var statearr_36003 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36003[(0)] = cljs$core$async$state_machine__33533__auto__);

(statearr_36003[(1)] = (1));

return statearr_36003;
});
var cljs$core$async$state_machine__33533__auto____1 = (function (state_35979){
while(true){
var ret_value__33538__auto__ = (function (){try{while(true){
var result__33539__auto__ = switch__33532__auto__(state_35979);
if(cljs.core.keyword_identical_QMARK_(result__33539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33539__auto__;
}
break;
}
}catch (e36004){var ex__33540__auto__ = e36004;
var statearr_36005_37488 = state_35979;
(statearr_36005_37488[(2)] = ex__33540__auto__);


if(cljs.core.seq((state_35979[(4)]))){
var statearr_36006_37492 = state_35979;
(statearr_36006_37492[(1)] = cljs.core.first((state_35979[(4)])));

} else {
throw ex__33540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37498 = state_35979;
state_35979 = G__37498;
continue;
} else {
return ret_value__33538__auto__;
}
break;
}
});
cljs$core$async$state_machine__33533__auto__ = function(state_35979){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33533__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33533__auto____1.call(this,state_35979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33533__auto____0;
cljs$core$async$state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33533__auto____1;
return cljs$core$async$state_machine__33533__auto__;
})()
})();
var state__34057__auto__ = (function (){var statearr_36007 = f__34056__auto__();
(statearr_36007[(6)] = c__34055__auto___37435);

return statearr_36007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34057__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36011 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36011 = (function (f,ch,meta36012){
this.f = f;
this.ch = ch;
this.meta36012 = meta36012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36013,meta36012__$1){
var self__ = this;
var _36013__$1 = this;
return (new cljs.core.async.t_cljs$core$async36011(self__.f,self__.ch,meta36012__$1));
}));

(cljs.core.async.t_cljs$core$async36011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36013){
var self__ = this;
var _36013__$1 = this;
return self__.meta36012;
}));

(cljs.core.async.t_cljs$core$async36011.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36011.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36011.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36011.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36011.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36017 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36017 = (function (f,ch,meta36012,_,fn1,meta36018){
this.f = f;
this.ch = ch;
this.meta36012 = meta36012;
this._ = _;
this.fn1 = fn1;
this.meta36018 = meta36018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36019,meta36018__$1){
var self__ = this;
var _36019__$1 = this;
return (new cljs.core.async.t_cljs$core$async36017(self__.f,self__.ch,self__.meta36012,self__._,self__.fn1,meta36018__$1));
}));

(cljs.core.async.t_cljs$core$async36017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36019){
var self__ = this;
var _36019__$1 = this;
return self__.meta36018;
}));

(cljs.core.async.t_cljs$core$async36017.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36017.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36017.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36017.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36008_SHARP_){
var G__36020 = (((p1__36008_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36008_SHARP_) : self__.f.call(null,p1__36008_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36020) : f1.call(null,G__36020));
});
}));

(cljs.core.async.t_cljs$core$async36017.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36012","meta36012",464399147,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36011","cljs.core.async/t_cljs$core$async36011",977579209,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36018","meta36018",-1904446047,null)], null);
}));

(cljs.core.async.t_cljs$core$async36017.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36017.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36017");

(cljs.core.async.t_cljs$core$async36017.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async36017");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36017.
 */
cljs.core.async.__GT_t_cljs$core$async36017 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36017(f__$1,ch__$1,meta36012__$1,___$2,fn1__$1,meta36018){
return (new cljs.core.async.t_cljs$core$async36017(f__$1,ch__$1,meta36012__$1,___$2,fn1__$1,meta36018));
});

}

return (new cljs.core.async.t_cljs$core$async36017(self__.f,self__.ch,self__.meta36012,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36021 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36021) : self__.f.call(null,G__36021));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36011.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36011.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36012","meta36012",464399147,null)], null);
}));

(cljs.core.async.t_cljs$core$async36011.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36011.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36011");

(cljs.core.async.t_cljs$core$async36011.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async36011");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36011.
 */
cljs.core.async.__GT_t_cljs$core$async36011 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36011(f__$1,ch__$1,meta36012){
return (new cljs.core.async.t_cljs$core$async36011(f__$1,ch__$1,meta36012));
});

}

return (new cljs.core.async.t_cljs$core$async36011(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36022 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36022 = (function (f,ch,meta36023){
this.f = f;
this.ch = ch;
this.meta36023 = meta36023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36024,meta36023__$1){
var self__ = this;
var _36024__$1 = this;
return (new cljs.core.async.t_cljs$core$async36022(self__.f,self__.ch,meta36023__$1));
}));

(cljs.core.async.t_cljs$core$async36022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36024){
var self__ = this;
var _36024__$1 = this;
return self__.meta36023;
}));

(cljs.core.async.t_cljs$core$async36022.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36022.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36022.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36022.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36022.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36022.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36022.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36023","meta36023",-2035294439,null)], null);
}));

(cljs.core.async.t_cljs$core$async36022.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36022");

(cljs.core.async.t_cljs$core$async36022.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async36022");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36022.
 */
cljs.core.async.__GT_t_cljs$core$async36022 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36022(f__$1,ch__$1,meta36023){
return (new cljs.core.async.t_cljs$core$async36022(f__$1,ch__$1,meta36023));
});

}

return (new cljs.core.async.t_cljs$core$async36022(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36025 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36025 = (function (p,ch,meta36026){
this.p = p;
this.ch = ch;
this.meta36026 = meta36026;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36027,meta36026__$1){
var self__ = this;
var _36027__$1 = this;
return (new cljs.core.async.t_cljs$core$async36025(self__.p,self__.ch,meta36026__$1));
}));

(cljs.core.async.t_cljs$core$async36025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36027){
var self__ = this;
var _36027__$1 = this;
return self__.meta36026;
}));

(cljs.core.async.t_cljs$core$async36025.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36025.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36025.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36025.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36025.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36025.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36025.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36025.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36026","meta36026",-1409532590,null)], null);
}));

(cljs.core.async.t_cljs$core$async36025.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36025.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36025");

(cljs.core.async.t_cljs$core$async36025.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async36025");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36025.
 */
cljs.core.async.__GT_t_cljs$core$async36025 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36025(p__$1,ch__$1,meta36026){
return (new cljs.core.async.t_cljs$core$async36025(p__$1,ch__$1,meta36026));
});

}

return (new cljs.core.async.t_cljs$core$async36025(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__36033 = arguments.length;
switch (G__36033) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34055__auto___37620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34056__auto__ = (function (){var switch__33532__auto__ = (function (state_36058){
var state_val_36059 = (state_36058[(1)]);
if((state_val_36059 === (7))){
var inst_36054 = (state_36058[(2)]);
var state_36058__$1 = state_36058;
var statearr_36060_37621 = state_36058__$1;
(statearr_36060_37621[(2)] = inst_36054);

(statearr_36060_37621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36059 === (1))){
var state_36058__$1 = state_36058;
var statearr_36061_37622 = state_36058__$1;
(statearr_36061_37622[(2)] = null);

(statearr_36061_37622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36059 === (4))){
var inst_36040 = (state_36058[(7)]);
var inst_36040__$1 = (state_36058[(2)]);
var inst_36041 = (inst_36040__$1 == null);
var state_36058__$1 = (function (){var statearr_36062 = state_36058;
(statearr_36062[(7)] = inst_36040__$1);

return statearr_36062;
})();
if(cljs.core.truth_(inst_36041)){
var statearr_36063_37626 = state_36058__$1;
(statearr_36063_37626[(1)] = (5));

} else {
var statearr_36064_37627 = state_36058__$1;
(statearr_36064_37627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36059 === (6))){
var inst_36040 = (state_36058[(7)]);
var inst_36045 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36040) : p.call(null,inst_36040));
var state_36058__$1 = state_36058;
if(cljs.core.truth_(inst_36045)){
var statearr_36065_37629 = state_36058__$1;
(statearr_36065_37629[(1)] = (8));

} else {
var statearr_36066_37630 = state_36058__$1;
(statearr_36066_37630[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36059 === (3))){
var inst_36056 = (state_36058[(2)]);
var state_36058__$1 = state_36058;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36058__$1,inst_36056);
} else {
if((state_val_36059 === (2))){
var state_36058__$1 = state_36058;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36058__$1,(4),ch);
} else {
if((state_val_36059 === (11))){
var inst_36048 = (state_36058[(2)]);
var state_36058__$1 = state_36058;
var statearr_36067_37631 = state_36058__$1;
(statearr_36067_37631[(2)] = inst_36048);

(statearr_36067_37631[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36059 === (9))){
var state_36058__$1 = state_36058;
var statearr_36068_37632 = state_36058__$1;
(statearr_36068_37632[(2)] = null);

(statearr_36068_37632[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36059 === (5))){
var inst_36043 = cljs.core.async.close_BANG_(out);
var state_36058__$1 = state_36058;
var statearr_36069_37633 = state_36058__$1;
(statearr_36069_37633[(2)] = inst_36043);

(statearr_36069_37633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36059 === (10))){
var inst_36051 = (state_36058[(2)]);
var state_36058__$1 = (function (){var statearr_36070 = state_36058;
(statearr_36070[(8)] = inst_36051);

return statearr_36070;
})();
var statearr_36071_37641 = state_36058__$1;
(statearr_36071_37641[(2)] = null);

(statearr_36071_37641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36059 === (8))){
var inst_36040 = (state_36058[(7)]);
var state_36058__$1 = state_36058;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36058__$1,(11),out,inst_36040);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33533__auto__ = null;
var cljs$core$async$state_machine__33533__auto____0 = (function (){
var statearr_36086 = [null,null,null,null,null,null,null,null,null];
(statearr_36086[(0)] = cljs$core$async$state_machine__33533__auto__);

(statearr_36086[(1)] = (1));

return statearr_36086;
});
var cljs$core$async$state_machine__33533__auto____1 = (function (state_36058){
while(true){
var ret_value__33538__auto__ = (function (){try{while(true){
var result__33539__auto__ = switch__33532__auto__(state_36058);
if(cljs.core.keyword_identical_QMARK_(result__33539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33539__auto__;
}
break;
}
}catch (e36093){var ex__33540__auto__ = e36093;
var statearr_36094_37642 = state_36058;
(statearr_36094_37642[(2)] = ex__33540__auto__);


if(cljs.core.seq((state_36058[(4)]))){
var statearr_36095_37643 = state_36058;
(statearr_36095_37643[(1)] = cljs.core.first((state_36058[(4)])));

} else {
throw ex__33540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37644 = state_36058;
state_36058 = G__37644;
continue;
} else {
return ret_value__33538__auto__;
}
break;
}
});
cljs$core$async$state_machine__33533__auto__ = function(state_36058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33533__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33533__auto____1.call(this,state_36058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33533__auto____0;
cljs$core$async$state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33533__auto____1;
return cljs$core$async$state_machine__33533__auto__;
})()
})();
var state__34057__auto__ = (function (){var statearr_36096 = f__34056__auto__();
(statearr_36096[(6)] = c__34055__auto___37620);

return statearr_36096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34057__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36112 = arguments.length;
switch (G__36112) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__34055__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34056__auto__ = (function (){var switch__33532__auto__ = (function (state_36183){
var state_val_36184 = (state_36183[(1)]);
if((state_val_36184 === (7))){
var inst_36179 = (state_36183[(2)]);
var state_36183__$1 = state_36183;
var statearr_36188_37647 = state_36183__$1;
(statearr_36188_37647[(2)] = inst_36179);

(statearr_36188_37647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (20))){
var inst_36149 = (state_36183[(7)]);
var inst_36160 = (state_36183[(2)]);
var inst_36161 = cljs.core.next(inst_36149);
var inst_36134 = inst_36161;
var inst_36135 = null;
var inst_36136 = (0);
var inst_36137 = (0);
var state_36183__$1 = (function (){var statearr_36189 = state_36183;
(statearr_36189[(8)] = inst_36137);

(statearr_36189[(9)] = inst_36136);

(statearr_36189[(10)] = inst_36135);

(statearr_36189[(11)] = inst_36160);

(statearr_36189[(12)] = inst_36134);

return statearr_36189;
})();
var statearr_36190_37654 = state_36183__$1;
(statearr_36190_37654[(2)] = null);

(statearr_36190_37654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (1))){
var state_36183__$1 = state_36183;
var statearr_36191_37655 = state_36183__$1;
(statearr_36191_37655[(2)] = null);

(statearr_36191_37655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (4))){
var inst_36123 = (state_36183[(13)]);
var inst_36123__$1 = (state_36183[(2)]);
var inst_36124 = (inst_36123__$1 == null);
var state_36183__$1 = (function (){var statearr_36192 = state_36183;
(statearr_36192[(13)] = inst_36123__$1);

return statearr_36192;
})();
if(cljs.core.truth_(inst_36124)){
var statearr_36193_37657 = state_36183__$1;
(statearr_36193_37657[(1)] = (5));

} else {
var statearr_36194_37659 = state_36183__$1;
(statearr_36194_37659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (15))){
var state_36183__$1 = state_36183;
var statearr_36198_37662 = state_36183__$1;
(statearr_36198_37662[(2)] = null);

(statearr_36198_37662[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (21))){
var state_36183__$1 = state_36183;
var statearr_36199_37664 = state_36183__$1;
(statearr_36199_37664[(2)] = null);

(statearr_36199_37664[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (13))){
var inst_36137 = (state_36183[(8)]);
var inst_36136 = (state_36183[(9)]);
var inst_36135 = (state_36183[(10)]);
var inst_36134 = (state_36183[(12)]);
var inst_36145 = (state_36183[(2)]);
var inst_36146 = (inst_36137 + (1));
var tmp36195 = inst_36136;
var tmp36196 = inst_36135;
var tmp36197 = inst_36134;
var inst_36134__$1 = tmp36197;
var inst_36135__$1 = tmp36196;
var inst_36136__$1 = tmp36195;
var inst_36137__$1 = inst_36146;
var state_36183__$1 = (function (){var statearr_36200 = state_36183;
(statearr_36200[(8)] = inst_36137__$1);

(statearr_36200[(9)] = inst_36136__$1);

(statearr_36200[(10)] = inst_36135__$1);

(statearr_36200[(14)] = inst_36145);

(statearr_36200[(12)] = inst_36134__$1);

return statearr_36200;
})();
var statearr_36201_37673 = state_36183__$1;
(statearr_36201_37673[(2)] = null);

(statearr_36201_37673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (22))){
var state_36183__$1 = state_36183;
var statearr_36202_37674 = state_36183__$1;
(statearr_36202_37674[(2)] = null);

(statearr_36202_37674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (6))){
var inst_36123 = (state_36183[(13)]);
var inst_36132 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36123) : f.call(null,inst_36123));
var inst_36133 = cljs.core.seq(inst_36132);
var inst_36134 = inst_36133;
var inst_36135 = null;
var inst_36136 = (0);
var inst_36137 = (0);
var state_36183__$1 = (function (){var statearr_36203 = state_36183;
(statearr_36203[(8)] = inst_36137);

(statearr_36203[(9)] = inst_36136);

(statearr_36203[(10)] = inst_36135);

(statearr_36203[(12)] = inst_36134);

return statearr_36203;
})();
var statearr_36204_37678 = state_36183__$1;
(statearr_36204_37678[(2)] = null);

(statearr_36204_37678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (17))){
var inst_36149 = (state_36183[(7)]);
var inst_36153 = cljs.core.chunk_first(inst_36149);
var inst_36154 = cljs.core.chunk_rest(inst_36149);
var inst_36155 = cljs.core.count(inst_36153);
var inst_36134 = inst_36154;
var inst_36135 = inst_36153;
var inst_36136 = inst_36155;
var inst_36137 = (0);
var state_36183__$1 = (function (){var statearr_36205 = state_36183;
(statearr_36205[(8)] = inst_36137);

(statearr_36205[(9)] = inst_36136);

(statearr_36205[(10)] = inst_36135);

(statearr_36205[(12)] = inst_36134);

return statearr_36205;
})();
var statearr_36206_37680 = state_36183__$1;
(statearr_36206_37680[(2)] = null);

(statearr_36206_37680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (3))){
var inst_36181 = (state_36183[(2)]);
var state_36183__$1 = state_36183;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36183__$1,inst_36181);
} else {
if((state_val_36184 === (12))){
var inst_36169 = (state_36183[(2)]);
var state_36183__$1 = state_36183;
var statearr_36207_37687 = state_36183__$1;
(statearr_36207_37687[(2)] = inst_36169);

(statearr_36207_37687[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (2))){
var state_36183__$1 = state_36183;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36183__$1,(4),in$);
} else {
if((state_val_36184 === (23))){
var inst_36177 = (state_36183[(2)]);
var state_36183__$1 = state_36183;
var statearr_36208_37689 = state_36183__$1;
(statearr_36208_37689[(2)] = inst_36177);

(statearr_36208_37689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (19))){
var inst_36164 = (state_36183[(2)]);
var state_36183__$1 = state_36183;
var statearr_36209_37691 = state_36183__$1;
(statearr_36209_37691[(2)] = inst_36164);

(statearr_36209_37691[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (11))){
var inst_36149 = (state_36183[(7)]);
var inst_36134 = (state_36183[(12)]);
var inst_36149__$1 = cljs.core.seq(inst_36134);
var state_36183__$1 = (function (){var statearr_36210 = state_36183;
(statearr_36210[(7)] = inst_36149__$1);

return statearr_36210;
})();
if(inst_36149__$1){
var statearr_36211_37692 = state_36183__$1;
(statearr_36211_37692[(1)] = (14));

} else {
var statearr_36212_37693 = state_36183__$1;
(statearr_36212_37693[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (9))){
var inst_36171 = (state_36183[(2)]);
var inst_36172 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36183__$1 = (function (){var statearr_36213 = state_36183;
(statearr_36213[(15)] = inst_36171);

return statearr_36213;
})();
if(cljs.core.truth_(inst_36172)){
var statearr_36214_37695 = state_36183__$1;
(statearr_36214_37695[(1)] = (21));

} else {
var statearr_36215_37696 = state_36183__$1;
(statearr_36215_37696[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (5))){
var inst_36126 = cljs.core.async.close_BANG_(out);
var state_36183__$1 = state_36183;
var statearr_36216_37697 = state_36183__$1;
(statearr_36216_37697[(2)] = inst_36126);

(statearr_36216_37697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (14))){
var inst_36149 = (state_36183[(7)]);
var inst_36151 = cljs.core.chunked_seq_QMARK_(inst_36149);
var state_36183__$1 = state_36183;
if(inst_36151){
var statearr_36217_37698 = state_36183__$1;
(statearr_36217_37698[(1)] = (17));

} else {
var statearr_36218_37700 = state_36183__$1;
(statearr_36218_37700[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (16))){
var inst_36167 = (state_36183[(2)]);
var state_36183__$1 = state_36183;
var statearr_36219_37703 = state_36183__$1;
(statearr_36219_37703[(2)] = inst_36167);

(statearr_36219_37703[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (10))){
var inst_36137 = (state_36183[(8)]);
var inst_36135 = (state_36183[(10)]);
var inst_36143 = cljs.core._nth(inst_36135,inst_36137);
var state_36183__$1 = state_36183;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36183__$1,(13),out,inst_36143);
} else {
if((state_val_36184 === (18))){
var inst_36149 = (state_36183[(7)]);
var inst_36158 = cljs.core.first(inst_36149);
var state_36183__$1 = state_36183;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36183__$1,(20),out,inst_36158);
} else {
if((state_val_36184 === (8))){
var inst_36137 = (state_36183[(8)]);
var inst_36136 = (state_36183[(9)]);
var inst_36139 = (inst_36137 < inst_36136);
var inst_36140 = inst_36139;
var state_36183__$1 = state_36183;
if(cljs.core.truth_(inst_36140)){
var statearr_36220_37710 = state_36183__$1;
(statearr_36220_37710[(1)] = (10));

} else {
var statearr_36221_37711 = state_36183__$1;
(statearr_36221_37711[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33533__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33533__auto____0 = (function (){
var statearr_36222 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36222[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33533__auto__);

(statearr_36222[(1)] = (1));

return statearr_36222;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33533__auto____1 = (function (state_36183){
while(true){
var ret_value__33538__auto__ = (function (){try{while(true){
var result__33539__auto__ = switch__33532__auto__(state_36183);
if(cljs.core.keyword_identical_QMARK_(result__33539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33539__auto__;
}
break;
}
}catch (e36223){var ex__33540__auto__ = e36223;
var statearr_36224_37716 = state_36183;
(statearr_36224_37716[(2)] = ex__33540__auto__);


if(cljs.core.seq((state_36183[(4)]))){
var statearr_36225_37718 = state_36183;
(statearr_36225_37718[(1)] = cljs.core.first((state_36183[(4)])));

} else {
throw ex__33540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37719 = state_36183;
state_36183 = G__37719;
continue;
} else {
return ret_value__33538__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33533__auto__ = function(state_36183){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33533__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33533__auto____1.call(this,state_36183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33533__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33533__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33533__auto__;
})()
})();
var state__34057__auto__ = (function (){var statearr_36234 = f__34056__auto__();
(statearr_36234[(6)] = c__34055__auto__);

return statearr_36234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34057__auto__);
}));

return c__34055__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36239 = arguments.length;
switch (G__36239) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__36241 = arguments.length;
switch (G__36241) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__36243 = arguments.length;
switch (G__36243) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34055__auto___37737 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34056__auto__ = (function (){var switch__33532__auto__ = (function (state_36267){
var state_val_36268 = (state_36267[(1)]);
if((state_val_36268 === (7))){
var inst_36262 = (state_36267[(2)]);
var state_36267__$1 = state_36267;
var statearr_36271_37742 = state_36267__$1;
(statearr_36271_37742[(2)] = inst_36262);

(statearr_36271_37742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36268 === (1))){
var inst_36244 = null;
var state_36267__$1 = (function (){var statearr_36272 = state_36267;
(statearr_36272[(7)] = inst_36244);

return statearr_36272;
})();
var statearr_36275_37744 = state_36267__$1;
(statearr_36275_37744[(2)] = null);

(statearr_36275_37744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36268 === (4))){
var inst_36247 = (state_36267[(8)]);
var inst_36247__$1 = (state_36267[(2)]);
var inst_36248 = (inst_36247__$1 == null);
var inst_36249 = cljs.core.not(inst_36248);
var state_36267__$1 = (function (){var statearr_36276 = state_36267;
(statearr_36276[(8)] = inst_36247__$1);

return statearr_36276;
})();
if(inst_36249){
var statearr_36277_37749 = state_36267__$1;
(statearr_36277_37749[(1)] = (5));

} else {
var statearr_36279_37750 = state_36267__$1;
(statearr_36279_37750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36268 === (6))){
var state_36267__$1 = state_36267;
var statearr_36281_37751 = state_36267__$1;
(statearr_36281_37751[(2)] = null);

(statearr_36281_37751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36268 === (3))){
var inst_36264 = (state_36267[(2)]);
var inst_36265 = cljs.core.async.close_BANG_(out);
var state_36267__$1 = (function (){var statearr_36282 = state_36267;
(statearr_36282[(9)] = inst_36264);

return statearr_36282;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36267__$1,inst_36265);
} else {
if((state_val_36268 === (2))){
var state_36267__$1 = state_36267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36267__$1,(4),ch);
} else {
if((state_val_36268 === (11))){
var inst_36247 = (state_36267[(8)]);
var inst_36256 = (state_36267[(2)]);
var inst_36244 = inst_36247;
var state_36267__$1 = (function (){var statearr_36283 = state_36267;
(statearr_36283[(10)] = inst_36256);

(statearr_36283[(7)] = inst_36244);

return statearr_36283;
})();
var statearr_36286_37755 = state_36267__$1;
(statearr_36286_37755[(2)] = null);

(statearr_36286_37755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36268 === (9))){
var inst_36247 = (state_36267[(8)]);
var state_36267__$1 = state_36267;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36267__$1,(11),out,inst_36247);
} else {
if((state_val_36268 === (5))){
var inst_36247 = (state_36267[(8)]);
var inst_36244 = (state_36267[(7)]);
var inst_36251 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36247,inst_36244);
var state_36267__$1 = state_36267;
if(inst_36251){
var statearr_36289_37756 = state_36267__$1;
(statearr_36289_37756[(1)] = (8));

} else {
var statearr_36290_37757 = state_36267__$1;
(statearr_36290_37757[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36268 === (10))){
var inst_36259 = (state_36267[(2)]);
var state_36267__$1 = state_36267;
var statearr_36291_37758 = state_36267__$1;
(statearr_36291_37758[(2)] = inst_36259);

(statearr_36291_37758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36268 === (8))){
var inst_36244 = (state_36267[(7)]);
var tmp36288 = inst_36244;
var inst_36244__$1 = tmp36288;
var state_36267__$1 = (function (){var statearr_36292 = state_36267;
(statearr_36292[(7)] = inst_36244__$1);

return statearr_36292;
})();
var statearr_36293_37759 = state_36267__$1;
(statearr_36293_37759[(2)] = null);

(statearr_36293_37759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33533__auto__ = null;
var cljs$core$async$state_machine__33533__auto____0 = (function (){
var statearr_36294 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36294[(0)] = cljs$core$async$state_machine__33533__auto__);

(statearr_36294[(1)] = (1));

return statearr_36294;
});
var cljs$core$async$state_machine__33533__auto____1 = (function (state_36267){
while(true){
var ret_value__33538__auto__ = (function (){try{while(true){
var result__33539__auto__ = switch__33532__auto__(state_36267);
if(cljs.core.keyword_identical_QMARK_(result__33539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33539__auto__;
}
break;
}
}catch (e36295){var ex__33540__auto__ = e36295;
var statearr_36296_37764 = state_36267;
(statearr_36296_37764[(2)] = ex__33540__auto__);


if(cljs.core.seq((state_36267[(4)]))){
var statearr_36297_37765 = state_36267;
(statearr_36297_37765[(1)] = cljs.core.first((state_36267[(4)])));

} else {
throw ex__33540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37766 = state_36267;
state_36267 = G__37766;
continue;
} else {
return ret_value__33538__auto__;
}
break;
}
});
cljs$core$async$state_machine__33533__auto__ = function(state_36267){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33533__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33533__auto____1.call(this,state_36267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33533__auto____0;
cljs$core$async$state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33533__auto____1;
return cljs$core$async$state_machine__33533__auto__;
})()
})();
var state__34057__auto__ = (function (){var statearr_36298 = f__34056__auto__();
(statearr_36298[(6)] = c__34055__auto___37737);

return statearr_36298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34057__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36300 = arguments.length;
switch (G__36300) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34055__auto___37776 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34056__auto__ = (function (){var switch__33532__auto__ = (function (state_36341){
var state_val_36342 = (state_36341[(1)]);
if((state_val_36342 === (7))){
var inst_36337 = (state_36341[(2)]);
var state_36341__$1 = state_36341;
var statearr_36343_37777 = state_36341__$1;
(statearr_36343_37777[(2)] = inst_36337);

(statearr_36343_37777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (1))){
var inst_36301 = (new Array(n));
var inst_36302 = inst_36301;
var inst_36303 = (0);
var state_36341__$1 = (function (){var statearr_36344 = state_36341;
(statearr_36344[(7)] = inst_36302);

(statearr_36344[(8)] = inst_36303);

return statearr_36344;
})();
var statearr_36345_37779 = state_36341__$1;
(statearr_36345_37779[(2)] = null);

(statearr_36345_37779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (4))){
var inst_36309 = (state_36341[(9)]);
var inst_36309__$1 = (state_36341[(2)]);
var inst_36310 = (inst_36309__$1 == null);
var inst_36311 = cljs.core.not(inst_36310);
var state_36341__$1 = (function (){var statearr_36353 = state_36341;
(statearr_36353[(9)] = inst_36309__$1);

return statearr_36353;
})();
if(inst_36311){
var statearr_36357_37782 = state_36341__$1;
(statearr_36357_37782[(1)] = (5));

} else {
var statearr_36358_37783 = state_36341__$1;
(statearr_36358_37783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (15))){
var inst_36331 = (state_36341[(2)]);
var state_36341__$1 = state_36341;
var statearr_36362_37787 = state_36341__$1;
(statearr_36362_37787[(2)] = inst_36331);

(statearr_36362_37787[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (13))){
var state_36341__$1 = state_36341;
var statearr_36363_37788 = state_36341__$1;
(statearr_36363_37788[(2)] = null);

(statearr_36363_37788[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (6))){
var inst_36303 = (state_36341[(8)]);
var inst_36327 = (inst_36303 > (0));
var state_36341__$1 = state_36341;
if(cljs.core.truth_(inst_36327)){
var statearr_36364_37790 = state_36341__$1;
(statearr_36364_37790[(1)] = (12));

} else {
var statearr_36365_37794 = state_36341__$1;
(statearr_36365_37794[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (3))){
var inst_36339 = (state_36341[(2)]);
var state_36341__$1 = state_36341;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36341__$1,inst_36339);
} else {
if((state_val_36342 === (12))){
var inst_36302 = (state_36341[(7)]);
var inst_36329 = cljs.core.vec(inst_36302);
var state_36341__$1 = state_36341;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36341__$1,(15),out,inst_36329);
} else {
if((state_val_36342 === (2))){
var state_36341__$1 = state_36341;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36341__$1,(4),ch);
} else {
if((state_val_36342 === (11))){
var inst_36321 = (state_36341[(2)]);
var inst_36322 = (new Array(n));
var inst_36302 = inst_36322;
var inst_36303 = (0);
var state_36341__$1 = (function (){var statearr_36376 = state_36341;
(statearr_36376[(7)] = inst_36302);

(statearr_36376[(8)] = inst_36303);

(statearr_36376[(10)] = inst_36321);

return statearr_36376;
})();
var statearr_36377_37804 = state_36341__$1;
(statearr_36377_37804[(2)] = null);

(statearr_36377_37804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (9))){
var inst_36302 = (state_36341[(7)]);
var inst_36319 = cljs.core.vec(inst_36302);
var state_36341__$1 = state_36341;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36341__$1,(11),out,inst_36319);
} else {
if((state_val_36342 === (5))){
var inst_36302 = (state_36341[(7)]);
var inst_36309 = (state_36341[(9)]);
var inst_36303 = (state_36341[(8)]);
var inst_36314 = (state_36341[(11)]);
var inst_36313 = (inst_36302[inst_36303] = inst_36309);
var inst_36314__$1 = (inst_36303 + (1));
var inst_36315 = (inst_36314__$1 < n);
var state_36341__$1 = (function (){var statearr_36381 = state_36341;
(statearr_36381[(12)] = inst_36313);

(statearr_36381[(11)] = inst_36314__$1);

return statearr_36381;
})();
if(cljs.core.truth_(inst_36315)){
var statearr_36386_37811 = state_36341__$1;
(statearr_36386_37811[(1)] = (8));

} else {
var statearr_36390_37812 = state_36341__$1;
(statearr_36390_37812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (14))){
var inst_36334 = (state_36341[(2)]);
var inst_36335 = cljs.core.async.close_BANG_(out);
var state_36341__$1 = (function (){var statearr_36395 = state_36341;
(statearr_36395[(13)] = inst_36334);

return statearr_36395;
})();
var statearr_36396_37813 = state_36341__$1;
(statearr_36396_37813[(2)] = inst_36335);

(statearr_36396_37813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (10))){
var inst_36325 = (state_36341[(2)]);
var state_36341__$1 = state_36341;
var statearr_36401_37815 = state_36341__$1;
(statearr_36401_37815[(2)] = inst_36325);

(statearr_36401_37815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (8))){
var inst_36302 = (state_36341[(7)]);
var inst_36314 = (state_36341[(11)]);
var tmp36391 = inst_36302;
var inst_36302__$1 = tmp36391;
var inst_36303 = inst_36314;
var state_36341__$1 = (function (){var statearr_36402 = state_36341;
(statearr_36402[(7)] = inst_36302__$1);

(statearr_36402[(8)] = inst_36303);

return statearr_36402;
})();
var statearr_36403_37818 = state_36341__$1;
(statearr_36403_37818[(2)] = null);

(statearr_36403_37818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33533__auto__ = null;
var cljs$core$async$state_machine__33533__auto____0 = (function (){
var statearr_36404 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36404[(0)] = cljs$core$async$state_machine__33533__auto__);

(statearr_36404[(1)] = (1));

return statearr_36404;
});
var cljs$core$async$state_machine__33533__auto____1 = (function (state_36341){
while(true){
var ret_value__33538__auto__ = (function (){try{while(true){
var result__33539__auto__ = switch__33532__auto__(state_36341);
if(cljs.core.keyword_identical_QMARK_(result__33539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33539__auto__;
}
break;
}
}catch (e36407){var ex__33540__auto__ = e36407;
var statearr_36408_37820 = state_36341;
(statearr_36408_37820[(2)] = ex__33540__auto__);


if(cljs.core.seq((state_36341[(4)]))){
var statearr_36409_37821 = state_36341;
(statearr_36409_37821[(1)] = cljs.core.first((state_36341[(4)])));

} else {
throw ex__33540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37822 = state_36341;
state_36341 = G__37822;
continue;
} else {
return ret_value__33538__auto__;
}
break;
}
});
cljs$core$async$state_machine__33533__auto__ = function(state_36341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33533__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33533__auto____1.call(this,state_36341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33533__auto____0;
cljs$core$async$state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33533__auto____1;
return cljs$core$async$state_machine__33533__auto__;
})()
})();
var state__34057__auto__ = (function (){var statearr_36410 = f__34056__auto__();
(statearr_36410[(6)] = c__34055__auto___37776);

return statearr_36410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34057__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36412 = arguments.length;
switch (G__36412) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34055__auto___37828 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34056__auto__ = (function (){var switch__33532__auto__ = (function (state_36454){
var state_val_36455 = (state_36454[(1)]);
if((state_val_36455 === (7))){
var inst_36450 = (state_36454[(2)]);
var state_36454__$1 = state_36454;
var statearr_36456_37837 = state_36454__$1;
(statearr_36456_37837[(2)] = inst_36450);

(statearr_36456_37837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36455 === (1))){
var inst_36413 = [];
var inst_36414 = inst_36413;
var inst_36415 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36454__$1 = (function (){var statearr_36457 = state_36454;
(statearr_36457[(7)] = inst_36415);

(statearr_36457[(8)] = inst_36414);

return statearr_36457;
})();
var statearr_36458_37839 = state_36454__$1;
(statearr_36458_37839[(2)] = null);

(statearr_36458_37839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36455 === (4))){
var inst_36418 = (state_36454[(9)]);
var inst_36418__$1 = (state_36454[(2)]);
var inst_36419 = (inst_36418__$1 == null);
var inst_36420 = cljs.core.not(inst_36419);
var state_36454__$1 = (function (){var statearr_36459 = state_36454;
(statearr_36459[(9)] = inst_36418__$1);

return statearr_36459;
})();
if(inst_36420){
var statearr_36460_37845 = state_36454__$1;
(statearr_36460_37845[(1)] = (5));

} else {
var statearr_36461_37846 = state_36454__$1;
(statearr_36461_37846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36455 === (15))){
var inst_36444 = (state_36454[(2)]);
var state_36454__$1 = state_36454;
var statearr_36462_37847 = state_36454__$1;
(statearr_36462_37847[(2)] = inst_36444);

(statearr_36462_37847[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36455 === (13))){
var state_36454__$1 = state_36454;
var statearr_36463_37848 = state_36454__$1;
(statearr_36463_37848[(2)] = null);

(statearr_36463_37848[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36455 === (6))){
var inst_36414 = (state_36454[(8)]);
var inst_36439 = inst_36414.length;
var inst_36440 = (inst_36439 > (0));
var state_36454__$1 = state_36454;
if(cljs.core.truth_(inst_36440)){
var statearr_36464_37850 = state_36454__$1;
(statearr_36464_37850[(1)] = (12));

} else {
var statearr_36465_37852 = state_36454__$1;
(statearr_36465_37852[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36455 === (3))){
var inst_36452 = (state_36454[(2)]);
var state_36454__$1 = state_36454;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36454__$1,inst_36452);
} else {
if((state_val_36455 === (12))){
var inst_36414 = (state_36454[(8)]);
var inst_36442 = cljs.core.vec(inst_36414);
var state_36454__$1 = state_36454;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36454__$1,(15),out,inst_36442);
} else {
if((state_val_36455 === (2))){
var state_36454__$1 = state_36454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36454__$1,(4),ch);
} else {
if((state_val_36455 === (11))){
var inst_36418 = (state_36454[(9)]);
var inst_36422 = (state_36454[(10)]);
var inst_36432 = (state_36454[(2)]);
var inst_36433 = [];
var inst_36434 = inst_36433.push(inst_36418);
var inst_36414 = inst_36433;
var inst_36415 = inst_36422;
var state_36454__$1 = (function (){var statearr_36469 = state_36454;
(statearr_36469[(7)] = inst_36415);

(statearr_36469[(11)] = inst_36432);

(statearr_36469[(8)] = inst_36414);

(statearr_36469[(12)] = inst_36434);

return statearr_36469;
})();
var statearr_36470_37857 = state_36454__$1;
(statearr_36470_37857[(2)] = null);

(statearr_36470_37857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36455 === (9))){
var inst_36414 = (state_36454[(8)]);
var inst_36430 = cljs.core.vec(inst_36414);
var state_36454__$1 = state_36454;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36454__$1,(11),out,inst_36430);
} else {
if((state_val_36455 === (5))){
var inst_36418 = (state_36454[(9)]);
var inst_36415 = (state_36454[(7)]);
var inst_36422 = (state_36454[(10)]);
var inst_36422__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36418) : f.call(null,inst_36418));
var inst_36423 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36422__$1,inst_36415);
var inst_36424 = cljs.core.keyword_identical_QMARK_(inst_36415,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36425 = ((inst_36423) || (inst_36424));
var state_36454__$1 = (function (){var statearr_36483 = state_36454;
(statearr_36483[(10)] = inst_36422__$1);

return statearr_36483;
})();
if(cljs.core.truth_(inst_36425)){
var statearr_36484_37869 = state_36454__$1;
(statearr_36484_37869[(1)] = (8));

} else {
var statearr_36485_37870 = state_36454__$1;
(statearr_36485_37870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36455 === (14))){
var inst_36447 = (state_36454[(2)]);
var inst_36448 = cljs.core.async.close_BANG_(out);
var state_36454__$1 = (function (){var statearr_36487 = state_36454;
(statearr_36487[(13)] = inst_36447);

return statearr_36487;
})();
var statearr_36488_37877 = state_36454__$1;
(statearr_36488_37877[(2)] = inst_36448);

(statearr_36488_37877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36455 === (10))){
var inst_36437 = (state_36454[(2)]);
var state_36454__$1 = state_36454;
var statearr_36489_37885 = state_36454__$1;
(statearr_36489_37885[(2)] = inst_36437);

(statearr_36489_37885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36455 === (8))){
var inst_36418 = (state_36454[(9)]);
var inst_36422 = (state_36454[(10)]);
var inst_36414 = (state_36454[(8)]);
var inst_36427 = inst_36414.push(inst_36418);
var tmp36486 = inst_36414;
var inst_36414__$1 = tmp36486;
var inst_36415 = inst_36422;
var state_36454__$1 = (function (){var statearr_36491 = state_36454;
(statearr_36491[(7)] = inst_36415);

(statearr_36491[(8)] = inst_36414__$1);

(statearr_36491[(14)] = inst_36427);

return statearr_36491;
})();
var statearr_36492_37890 = state_36454__$1;
(statearr_36492_37890[(2)] = null);

(statearr_36492_37890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33533__auto__ = null;
var cljs$core$async$state_machine__33533__auto____0 = (function (){
var statearr_36494 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36494[(0)] = cljs$core$async$state_machine__33533__auto__);

(statearr_36494[(1)] = (1));

return statearr_36494;
});
var cljs$core$async$state_machine__33533__auto____1 = (function (state_36454){
while(true){
var ret_value__33538__auto__ = (function (){try{while(true){
var result__33539__auto__ = switch__33532__auto__(state_36454);
if(cljs.core.keyword_identical_QMARK_(result__33539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33539__auto__;
}
break;
}
}catch (e36495){var ex__33540__auto__ = e36495;
var statearr_36496_37897 = state_36454;
(statearr_36496_37897[(2)] = ex__33540__auto__);


if(cljs.core.seq((state_36454[(4)]))){
var statearr_36497_37898 = state_36454;
(statearr_36497_37898[(1)] = cljs.core.first((state_36454[(4)])));

} else {
throw ex__33540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37899 = state_36454;
state_36454 = G__37899;
continue;
} else {
return ret_value__33538__auto__;
}
break;
}
});
cljs$core$async$state_machine__33533__auto__ = function(state_36454){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33533__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33533__auto____1.call(this,state_36454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33533__auto____0;
cljs$core$async$state_machine__33533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33533__auto____1;
return cljs$core$async$state_machine__33533__auto__;
})()
})();
var state__34057__auto__ = (function (){var statearr_36498 = f__34056__auto__();
(statearr_36498[(6)] = c__34055__auto___37828);

return statearr_36498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34057__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
