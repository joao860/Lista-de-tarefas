goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14666 = (function (f,blockable,meta14667){
this.f = f;
this.blockable = blockable;
this.meta14667 = meta14667;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14668,meta14667__$1){
var self__ = this;
var _14668__$1 = this;
return (new cljs.core.async.t_cljs$core$async14666(self__.f,self__.blockable,meta14667__$1));
}));

(cljs.core.async.t_cljs$core$async14666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14668){
var self__ = this;
var _14668__$1 = this;
return self__.meta14667;
}));

(cljs.core.async.t_cljs$core$async14666.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14666.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14666.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14666.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14666.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14667","meta14667",-1371439747,null)], null);
}));

(cljs.core.async.t_cljs$core$async14666.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14666.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14666");

(cljs.core.async.t_cljs$core$async14666.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async14666");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14666.
 */
cljs.core.async.__GT_t_cljs$core$async14666 = (function cljs$core$async$__GT_t_cljs$core$async14666(f,blockable,meta14667){
return (new cljs.core.async.t_cljs$core$async14666(f,blockable,meta14667));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14665 = arguments.length;
switch (G__14665) {
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
return (new cljs.core.async.t_cljs$core$async14666(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14726 = arguments.length;
switch (G__14726) {
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
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14766 = arguments.length;
switch (G__14766) {
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
var G__14790 = arguments.length;
switch (G__14790) {
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
var val_16857 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16857) : fn1.call(null,val_16857));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16857) : fn1.call(null,val_16857));
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
var G__14815 = arguments.length;
switch (G__14815) {
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
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
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
var n__5616__auto___16859 = n;
var x_16860 = (0);
while(true){
if((x_16860 < n__5616__auto___16859)){
(a[x_16860] = x_16860);

var G__16861 = (x_16860 + (1));
x_16860 = G__16861;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14838 = (function (flag,meta14839){
this.flag = flag;
this.meta14839 = meta14839;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14840,meta14839__$1){
var self__ = this;
var _14840__$1 = this;
return (new cljs.core.async.t_cljs$core$async14838(self__.flag,meta14839__$1));
}));

(cljs.core.async.t_cljs$core$async14838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14840){
var self__ = this;
var _14840__$1 = this;
return self__.meta14839;
}));

(cljs.core.async.t_cljs$core$async14838.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14838.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14838.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14838.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14838.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14839","meta14839",779886978,null)], null);
}));

(cljs.core.async.t_cljs$core$async14838.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14838.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14838");

(cljs.core.async.t_cljs$core$async14838.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async14838");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14838.
 */
cljs.core.async.__GT_t_cljs$core$async14838 = (function cljs$core$async$__GT_t_cljs$core$async14838(flag,meta14839){
return (new cljs.core.async.t_cljs$core$async14838(flag,meta14839));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14838(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14850 = (function (flag,cb,meta14851){
this.flag = flag;
this.cb = cb;
this.meta14851 = meta14851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14852,meta14851__$1){
var self__ = this;
var _14852__$1 = this;
return (new cljs.core.async.t_cljs$core$async14850(self__.flag,self__.cb,meta14851__$1));
}));

(cljs.core.async.t_cljs$core$async14850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14852){
var self__ = this;
var _14852__$1 = this;
return self__.meta14851;
}));

(cljs.core.async.t_cljs$core$async14850.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14850.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14850.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14850.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14850.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14851","meta14851",1055591725,null)], null);
}));

(cljs.core.async.t_cljs$core$async14850.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14850.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14850");

(cljs.core.async.t_cljs$core$async14850.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async14850");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14850.
 */
cljs.core.async.__GT_t_cljs$core$async14850 = (function cljs$core$async$__GT_t_cljs$core$async14850(flag,cb,meta14851){
return (new cljs.core.async.t_cljs$core$async14850(flag,cb,meta14851));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14850(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_16862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_16862)){
if((!(((port_16862.cljs$core$IFn$_invoke$arity$1 ? port_16862.cljs$core$IFn$_invoke$arity$1((1)) : port_16862.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__16863 = (i + (1));
i = G__16863;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__14865_SHARP_){
var G__14878 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14865_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14878) : fret.call(null,G__14878));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__14866_SHARP_){
var G__14879 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14866_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14879) : fret.call(null,G__14879));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5025__auto__ = wport;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16864 = (i + (1));
i = G__16864;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5025__auto__ = ret;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5023__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5023__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
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
var args__5755__auto__ = [];
var len__5749__auto___16865 = arguments.length;
var i__5750__auto___16866 = (0);
while(true){
if((i__5750__auto___16866 < len__5749__auto___16865)){
args__5755__auto__.push((arguments[i__5750__auto___16866]));

var G__16867 = (i__5750__auto___16866 + (1));
i__5750__auto___16866 = G__16867;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14886){
var map__14887 = p__14886;
var map__14887__$1 = cljs.core.__destructure_map(map__14887);
var opts = map__14887__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14883){
var G__14884 = cljs.core.first(seq14883);
var seq14883__$1 = cljs.core.next(seq14883);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14884,seq14883__$1);
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
var G__14889 = arguments.length;
switch (G__14889) {
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
var c__14551__auto___16869 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14552__auto__ = (function (){var switch__14420__auto__ = (function (state_14913){
var state_val_14914 = (state_14913[(1)]);
if((state_val_14914 === (7))){
var inst_14909 = (state_14913[(2)]);
var state_14913__$1 = state_14913;
var statearr_14915_16870 = state_14913__$1;
(statearr_14915_16870[(2)] = inst_14909);

(statearr_14915_16870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14914 === (1))){
var state_14913__$1 = state_14913;
var statearr_14916_16871 = state_14913__$1;
(statearr_14916_16871[(2)] = null);

(statearr_14916_16871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14914 === (4))){
var inst_14892 = (state_14913[(7)]);
var inst_14892__$1 = (state_14913[(2)]);
var inst_14893 = (inst_14892__$1 == null);
var state_14913__$1 = (function (){var statearr_14919 = state_14913;
(statearr_14919[(7)] = inst_14892__$1);

return statearr_14919;
})();
if(cljs.core.truth_(inst_14893)){
var statearr_14920_16872 = state_14913__$1;
(statearr_14920_16872[(1)] = (5));

} else {
var statearr_14921_16873 = state_14913__$1;
(statearr_14921_16873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14914 === (13))){
var state_14913__$1 = state_14913;
var statearr_14922_16874 = state_14913__$1;
(statearr_14922_16874[(2)] = null);

(statearr_14922_16874[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14914 === (6))){
var inst_14892 = (state_14913[(7)]);
var state_14913__$1 = state_14913;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14913__$1,(11),to,inst_14892);
} else {
if((state_val_14914 === (3))){
var inst_14911 = (state_14913[(2)]);
var state_14913__$1 = state_14913;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14913__$1,inst_14911);
} else {
if((state_val_14914 === (12))){
var state_14913__$1 = state_14913;
var statearr_14927_16875 = state_14913__$1;
(statearr_14927_16875[(2)] = null);

(statearr_14927_16875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14914 === (2))){
var state_14913__$1 = state_14913;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14913__$1,(4),from);
} else {
if((state_val_14914 === (11))){
var inst_14902 = (state_14913[(2)]);
var state_14913__$1 = state_14913;
if(cljs.core.truth_(inst_14902)){
var statearr_14928_16876 = state_14913__$1;
(statearr_14928_16876[(1)] = (12));

} else {
var statearr_14929_16877 = state_14913__$1;
(statearr_14929_16877[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14914 === (9))){
var state_14913__$1 = state_14913;
var statearr_14930_16878 = state_14913__$1;
(statearr_14930_16878[(2)] = null);

(statearr_14930_16878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14914 === (5))){
var state_14913__$1 = state_14913;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14931_16879 = state_14913__$1;
(statearr_14931_16879[(1)] = (8));

} else {
var statearr_14932_16880 = state_14913__$1;
(statearr_14932_16880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14914 === (14))){
var inst_14907 = (state_14913[(2)]);
var state_14913__$1 = state_14913;
var statearr_14933_16881 = state_14913__$1;
(statearr_14933_16881[(2)] = inst_14907);

(statearr_14933_16881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14914 === (10))){
var inst_14899 = (state_14913[(2)]);
var state_14913__$1 = state_14913;
var statearr_14934_16882 = state_14913__$1;
(statearr_14934_16882[(2)] = inst_14899);

(statearr_14934_16882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14914 === (8))){
var inst_14896 = cljs.core.async.close_BANG_(to);
var state_14913__$1 = state_14913;
var statearr_14935_16884 = state_14913__$1;
(statearr_14935_16884[(2)] = inst_14896);

(statearr_14935_16884[(1)] = (10));


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
var cljs$core$async$state_machine__14421__auto__ = null;
var cljs$core$async$state_machine__14421__auto____0 = (function (){
var statearr_14937 = [null,null,null,null,null,null,null,null];
(statearr_14937[(0)] = cljs$core$async$state_machine__14421__auto__);

(statearr_14937[(1)] = (1));

return statearr_14937;
});
var cljs$core$async$state_machine__14421__auto____1 = (function (state_14913){
while(true){
var ret_value__14422__auto__ = (function (){try{while(true){
var result__14423__auto__ = switch__14420__auto__(state_14913);
if(cljs.core.keyword_identical_QMARK_(result__14423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14423__auto__;
}
break;
}
}catch (e14938){var ex__14424__auto__ = e14938;
var statearr_14939_16885 = state_14913;
(statearr_14939_16885[(2)] = ex__14424__auto__);


if(cljs.core.seq((state_14913[(4)]))){
var statearr_14940_16886 = state_14913;
(statearr_14940_16886[(1)] = cljs.core.first((state_14913[(4)])));

} else {
throw ex__14424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16887 = state_14913;
state_14913 = G__16887;
continue;
} else {
return ret_value__14422__auto__;
}
break;
}
});
cljs$core$async$state_machine__14421__auto__ = function(state_14913){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14421__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14421__auto____1.call(this,state_14913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14421__auto____0;
cljs$core$async$state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14421__auto____1;
return cljs$core$async$state_machine__14421__auto__;
})()
})();
var state__14553__auto__ = (function (){var statearr_14944 = f__14552__auto__();
(statearr_14944[(6)] = c__14551__auto___16869);

return statearr_14944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14553__auto__);
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
var process__$1 = (function (p__14951){
var vec__14952 = p__14951;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14952,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14952,(1),null);
var job = vec__14952;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14551__auto___16888 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14552__auto__ = (function (){var switch__14420__auto__ = (function (state_14959){
var state_val_14960 = (state_14959[(1)]);
if((state_val_14960 === (1))){
var state_14959__$1 = state_14959;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14959__$1,(2),res,v);
} else {
if((state_val_14960 === (2))){
var inst_14956 = (state_14959[(2)]);
var inst_14957 = cljs.core.async.close_BANG_(res);
var state_14959__$1 = (function (){var statearr_14961 = state_14959;
(statearr_14961[(7)] = inst_14956);

return statearr_14961;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14959__$1,inst_14957);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14421__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14421__auto____0 = (function (){
var statearr_14962 = [null,null,null,null,null,null,null,null];
(statearr_14962[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14421__auto__);

(statearr_14962[(1)] = (1));

return statearr_14962;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14421__auto____1 = (function (state_14959){
while(true){
var ret_value__14422__auto__ = (function (){try{while(true){
var result__14423__auto__ = switch__14420__auto__(state_14959);
if(cljs.core.keyword_identical_QMARK_(result__14423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14423__auto__;
}
break;
}
}catch (e14963){var ex__14424__auto__ = e14963;
var statearr_14964_16890 = state_14959;
(statearr_14964_16890[(2)] = ex__14424__auto__);


if(cljs.core.seq((state_14959[(4)]))){
var statearr_14965_16891 = state_14959;
(statearr_14965_16891[(1)] = cljs.core.first((state_14959[(4)])));

} else {
throw ex__14424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16892 = state_14959;
state_14959 = G__16892;
continue;
} else {
return ret_value__14422__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14421__auto__ = function(state_14959){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14421__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14421__auto____1.call(this,state_14959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14421__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14421__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14421__auto__;
})()
})();
var state__14553__auto__ = (function (){var statearr_14966 = f__14552__auto__();
(statearr_14966[(6)] = c__14551__auto___16888);

return statearr_14966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14553__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14967){
var vec__14970 = p__14967;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14970,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14970,(1),null);
var job = vec__14970;
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
var n__5616__auto___16893 = n;
var __16894 = (0);
while(true){
if((__16894 < n__5616__auto___16893)){
var G__14975_16895 = type;
var G__14975_16896__$1 = (((G__14975_16895 instanceof cljs.core.Keyword))?G__14975_16895.fqn:null);
switch (G__14975_16896__$1) {
case "compute":
var c__14551__auto___16898 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16894,c__14551__auto___16898,G__14975_16895,G__14975_16896__$1,n__5616__auto___16893,jobs,results,process__$1,async){
return (function (){
var f__14552__auto__ = (function (){var switch__14420__auto__ = ((function (__16894,c__14551__auto___16898,G__14975_16895,G__14975_16896__$1,n__5616__auto___16893,jobs,results,process__$1,async){
return (function (state_14991){
var state_val_14992 = (state_14991[(1)]);
if((state_val_14992 === (1))){
var state_14991__$1 = state_14991;
var statearr_14994_16899 = state_14991__$1;
(statearr_14994_16899[(2)] = null);

(statearr_14994_16899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14992 === (2))){
var state_14991__$1 = state_14991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14991__$1,(4),jobs);
} else {
if((state_val_14992 === (3))){
var inst_14988 = (state_14991[(2)]);
var state_14991__$1 = state_14991;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14991__$1,inst_14988);
} else {
if((state_val_14992 === (4))){
var inst_14978 = (state_14991[(2)]);
var inst_14980 = process__$1(inst_14978);
var state_14991__$1 = state_14991;
if(cljs.core.truth_(inst_14980)){
var statearr_14995_16900 = state_14991__$1;
(statearr_14995_16900[(1)] = (5));

} else {
var statearr_14996_16901 = state_14991__$1;
(statearr_14996_16901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14992 === (5))){
var state_14991__$1 = state_14991;
var statearr_14997_16904 = state_14991__$1;
(statearr_14997_16904[(2)] = null);

(statearr_14997_16904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14992 === (6))){
var state_14991__$1 = state_14991;
var statearr_14998_16905 = state_14991__$1;
(statearr_14998_16905[(2)] = null);

(statearr_14998_16905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14992 === (7))){
var inst_14986 = (state_14991[(2)]);
var state_14991__$1 = state_14991;
var statearr_14999_16906 = state_14991__$1;
(statearr_14999_16906[(2)] = inst_14986);

(statearr_14999_16906[(1)] = (3));


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
});})(__16894,c__14551__auto___16898,G__14975_16895,G__14975_16896__$1,n__5616__auto___16893,jobs,results,process__$1,async))
;
return ((function (__16894,switch__14420__auto__,c__14551__auto___16898,G__14975_16895,G__14975_16896__$1,n__5616__auto___16893,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14421__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14421__auto____0 = (function (){
var statearr_15002 = [null,null,null,null,null,null,null];
(statearr_15002[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14421__auto__);

(statearr_15002[(1)] = (1));

return statearr_15002;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14421__auto____1 = (function (state_14991){
while(true){
var ret_value__14422__auto__ = (function (){try{while(true){
var result__14423__auto__ = switch__14420__auto__(state_14991);
if(cljs.core.keyword_identical_QMARK_(result__14423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14423__auto__;
}
break;
}
}catch (e15003){var ex__14424__auto__ = e15003;
var statearr_15004_16907 = state_14991;
(statearr_15004_16907[(2)] = ex__14424__auto__);


if(cljs.core.seq((state_14991[(4)]))){
var statearr_15005_16908 = state_14991;
(statearr_15005_16908[(1)] = cljs.core.first((state_14991[(4)])));

} else {
throw ex__14424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16909 = state_14991;
state_14991 = G__16909;
continue;
} else {
return ret_value__14422__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14421__auto__ = function(state_14991){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14421__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14421__auto____1.call(this,state_14991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14421__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14421__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14421__auto__;
})()
;})(__16894,switch__14420__auto__,c__14551__auto___16898,G__14975_16895,G__14975_16896__$1,n__5616__auto___16893,jobs,results,process__$1,async))
})();
var state__14553__auto__ = (function (){var statearr_15009 = f__14552__auto__();
(statearr_15009[(6)] = c__14551__auto___16898);

return statearr_15009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14553__auto__);
});})(__16894,c__14551__auto___16898,G__14975_16895,G__14975_16896__$1,n__5616__auto___16893,jobs,results,process__$1,async))
);


break;
case "async":
var c__14551__auto___16910 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16894,c__14551__auto___16910,G__14975_16895,G__14975_16896__$1,n__5616__auto___16893,jobs,results,process__$1,async){
return (function (){
var f__14552__auto__ = (function (){var switch__14420__auto__ = ((function (__16894,c__14551__auto___16910,G__14975_16895,G__14975_16896__$1,n__5616__auto___16893,jobs,results,process__$1,async){
return (function (state_15024){
var state_val_15025 = (state_15024[(1)]);
if((state_val_15025 === (1))){
var state_15024__$1 = state_15024;
var statearr_15026_16911 = state_15024__$1;
(statearr_15026_16911[(2)] = null);

(statearr_15026_16911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15025 === (2))){
var state_15024__$1 = state_15024;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15024__$1,(4),jobs);
} else {
if((state_val_15025 === (3))){
var inst_15022 = (state_15024[(2)]);
var state_15024__$1 = state_15024;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15024__$1,inst_15022);
} else {
if((state_val_15025 === (4))){
var inst_15013 = (state_15024[(2)]);
var inst_15015 = async(inst_15013);
var state_15024__$1 = state_15024;
if(cljs.core.truth_(inst_15015)){
var statearr_15027_16912 = state_15024__$1;
(statearr_15027_16912[(1)] = (5));

} else {
var statearr_15028_16913 = state_15024__$1;
(statearr_15028_16913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15025 === (5))){
var state_15024__$1 = state_15024;
var statearr_15029_16914 = state_15024__$1;
(statearr_15029_16914[(2)] = null);

(statearr_15029_16914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15025 === (6))){
var state_15024__$1 = state_15024;
var statearr_15030_16915 = state_15024__$1;
(statearr_15030_16915[(2)] = null);

(statearr_15030_16915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15025 === (7))){
var inst_15020 = (state_15024[(2)]);
var state_15024__$1 = state_15024;
var statearr_15031_16916 = state_15024__$1;
(statearr_15031_16916[(2)] = inst_15020);

(statearr_15031_16916[(1)] = (3));


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
});})(__16894,c__14551__auto___16910,G__14975_16895,G__14975_16896__$1,n__5616__auto___16893,jobs,results,process__$1,async))
;
return ((function (__16894,switch__14420__auto__,c__14551__auto___16910,G__14975_16895,G__14975_16896__$1,n__5616__auto___16893,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14421__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14421__auto____0 = (function (){
var statearr_15032 = [null,null,null,null,null,null,null];
(statearr_15032[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14421__auto__);

(statearr_15032[(1)] = (1));

return statearr_15032;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14421__auto____1 = (function (state_15024){
while(true){
var ret_value__14422__auto__ = (function (){try{while(true){
var result__14423__auto__ = switch__14420__auto__(state_15024);
if(cljs.core.keyword_identical_QMARK_(result__14423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14423__auto__;
}
break;
}
}catch (e15033){var ex__14424__auto__ = e15033;
var statearr_15034_16918 = state_15024;
(statearr_15034_16918[(2)] = ex__14424__auto__);


if(cljs.core.seq((state_15024[(4)]))){
var statearr_15035_16919 = state_15024;
(statearr_15035_16919[(1)] = cljs.core.first((state_15024[(4)])));

} else {
throw ex__14424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16920 = state_15024;
state_15024 = G__16920;
continue;
} else {
return ret_value__14422__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14421__auto__ = function(state_15024){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14421__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14421__auto____1.call(this,state_15024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14421__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14421__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14421__auto__;
})()
;})(__16894,switch__14420__auto__,c__14551__auto___16910,G__14975_16895,G__14975_16896__$1,n__5616__auto___16893,jobs,results,process__$1,async))
})();
var state__14553__auto__ = (function (){var statearr_15037 = f__14552__auto__();
(statearr_15037[(6)] = c__14551__auto___16910);

return statearr_15037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14553__auto__);
});})(__16894,c__14551__auto___16910,G__14975_16895,G__14975_16896__$1,n__5616__auto___16893,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14975_16896__$1)].join('')));

}

var G__16921 = (__16894 + (1));
__16894 = G__16921;
continue;
} else {
}
break;
}

var c__14551__auto___16922 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14552__auto__ = (function (){var switch__14420__auto__ = (function (state_15064){
var state_val_15065 = (state_15064[(1)]);
if((state_val_15065 === (7))){
var inst_15060 = (state_15064[(2)]);
var state_15064__$1 = state_15064;
var statearr_15066_16923 = state_15064__$1;
(statearr_15066_16923[(2)] = inst_15060);

(statearr_15066_16923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (1))){
var state_15064__$1 = state_15064;
var statearr_15067_16924 = state_15064__$1;
(statearr_15067_16924[(2)] = null);

(statearr_15067_16924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (4))){
var inst_15042 = (state_15064[(7)]);
var inst_15042__$1 = (state_15064[(2)]);
var inst_15043 = (inst_15042__$1 == null);
var state_15064__$1 = (function (){var statearr_15068 = state_15064;
(statearr_15068[(7)] = inst_15042__$1);

return statearr_15068;
})();
if(cljs.core.truth_(inst_15043)){
var statearr_15069_16925 = state_15064__$1;
(statearr_15069_16925[(1)] = (5));

} else {
var statearr_15070_16926 = state_15064__$1;
(statearr_15070_16926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (6))){
var inst_15042 = (state_15064[(7)]);
var inst_15047 = (state_15064[(8)]);
var inst_15047__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15051 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15052 = [inst_15042,inst_15047__$1];
var inst_15053 = (new cljs.core.PersistentVector(null,2,(5),inst_15051,inst_15052,null));
var state_15064__$1 = (function (){var statearr_15071 = state_15064;
(statearr_15071[(8)] = inst_15047__$1);

return statearr_15071;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15064__$1,(8),jobs,inst_15053);
} else {
if((state_val_15065 === (3))){
var inst_15062 = (state_15064[(2)]);
var state_15064__$1 = state_15064;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15064__$1,inst_15062);
} else {
if((state_val_15065 === (2))){
var state_15064__$1 = state_15064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15064__$1,(4),from);
} else {
if((state_val_15065 === (9))){
var inst_15057 = (state_15064[(2)]);
var state_15064__$1 = (function (){var statearr_15072 = state_15064;
(statearr_15072[(9)] = inst_15057);

return statearr_15072;
})();
var statearr_15073_16927 = state_15064__$1;
(statearr_15073_16927[(2)] = null);

(statearr_15073_16927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (5))){
var inst_15045 = cljs.core.async.close_BANG_(jobs);
var state_15064__$1 = state_15064;
var statearr_15075_16930 = state_15064__$1;
(statearr_15075_16930[(2)] = inst_15045);

(statearr_15075_16930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (8))){
var inst_15047 = (state_15064[(8)]);
var inst_15055 = (state_15064[(2)]);
var state_15064__$1 = (function (){var statearr_15076 = state_15064;
(statearr_15076[(10)] = inst_15055);

return statearr_15076;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15064__$1,(9),results,inst_15047);
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
var cljs$core$async$pipeline_STAR__$_state_machine__14421__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14421__auto____0 = (function (){
var statearr_15077 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15077[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14421__auto__);

(statearr_15077[(1)] = (1));

return statearr_15077;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14421__auto____1 = (function (state_15064){
while(true){
var ret_value__14422__auto__ = (function (){try{while(true){
var result__14423__auto__ = switch__14420__auto__(state_15064);
if(cljs.core.keyword_identical_QMARK_(result__14423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14423__auto__;
}
break;
}
}catch (e15083){var ex__14424__auto__ = e15083;
var statearr_15084_16935 = state_15064;
(statearr_15084_16935[(2)] = ex__14424__auto__);


if(cljs.core.seq((state_15064[(4)]))){
var statearr_15085_16936 = state_15064;
(statearr_15085_16936[(1)] = cljs.core.first((state_15064[(4)])));

} else {
throw ex__14424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16937 = state_15064;
state_15064 = G__16937;
continue;
} else {
return ret_value__14422__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14421__auto__ = function(state_15064){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14421__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14421__auto____1.call(this,state_15064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14421__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14421__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14421__auto__;
})()
})();
var state__14553__auto__ = (function (){var statearr_15086 = f__14552__auto__();
(statearr_15086[(6)] = c__14551__auto___16922);

return statearr_15086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14553__auto__);
}));


var c__14551__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14552__auto__ = (function (){var switch__14420__auto__ = (function (state_15125){
var state_val_15126 = (state_15125[(1)]);
if((state_val_15126 === (7))){
var inst_15121 = (state_15125[(2)]);
var state_15125__$1 = state_15125;
var statearr_15129_16938 = state_15125__$1;
(statearr_15129_16938[(2)] = inst_15121);

(statearr_15129_16938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15126 === (20))){
var state_15125__$1 = state_15125;
var statearr_15130_16941 = state_15125__$1;
(statearr_15130_16941[(2)] = null);

(statearr_15130_16941[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15126 === (1))){
var state_15125__$1 = state_15125;
var statearr_15131_16942 = state_15125__$1;
(statearr_15131_16942[(2)] = null);

(statearr_15131_16942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15126 === (4))){
var inst_15090 = (state_15125[(7)]);
var inst_15090__$1 = (state_15125[(2)]);
var inst_15091 = (inst_15090__$1 == null);
var state_15125__$1 = (function (){var statearr_15132 = state_15125;
(statearr_15132[(7)] = inst_15090__$1);

return statearr_15132;
})();
if(cljs.core.truth_(inst_15091)){
var statearr_15133_16943 = state_15125__$1;
(statearr_15133_16943[(1)] = (5));

} else {
var statearr_15134_16944 = state_15125__$1;
(statearr_15134_16944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15126 === (15))){
var inst_15103 = (state_15125[(8)]);
var state_15125__$1 = state_15125;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15125__$1,(18),to,inst_15103);
} else {
if((state_val_15126 === (21))){
var inst_15116 = (state_15125[(2)]);
var state_15125__$1 = state_15125;
var statearr_15135_16945 = state_15125__$1;
(statearr_15135_16945[(2)] = inst_15116);

(statearr_15135_16945[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15126 === (13))){
var inst_15118 = (state_15125[(2)]);
var state_15125__$1 = (function (){var statearr_15136 = state_15125;
(statearr_15136[(9)] = inst_15118);

return statearr_15136;
})();
var statearr_15137_16946 = state_15125__$1;
(statearr_15137_16946[(2)] = null);

(statearr_15137_16946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15126 === (6))){
var inst_15090 = (state_15125[(7)]);
var state_15125__$1 = state_15125;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15125__$1,(11),inst_15090);
} else {
if((state_val_15126 === (17))){
var inst_15111 = (state_15125[(2)]);
var state_15125__$1 = state_15125;
if(cljs.core.truth_(inst_15111)){
var statearr_15138_16947 = state_15125__$1;
(statearr_15138_16947[(1)] = (19));

} else {
var statearr_15139_16948 = state_15125__$1;
(statearr_15139_16948[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15126 === (3))){
var inst_15123 = (state_15125[(2)]);
var state_15125__$1 = state_15125;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15125__$1,inst_15123);
} else {
if((state_val_15126 === (12))){
var inst_15100 = (state_15125[(10)]);
var state_15125__$1 = state_15125;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15125__$1,(14),inst_15100);
} else {
if((state_val_15126 === (2))){
var state_15125__$1 = state_15125;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15125__$1,(4),results);
} else {
if((state_val_15126 === (19))){
var state_15125__$1 = state_15125;
var statearr_15141_16954 = state_15125__$1;
(statearr_15141_16954[(2)] = null);

(statearr_15141_16954[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15126 === (11))){
var inst_15100 = (state_15125[(2)]);
var state_15125__$1 = (function (){var statearr_15142 = state_15125;
(statearr_15142[(10)] = inst_15100);

return statearr_15142;
})();
var statearr_15143_16959 = state_15125__$1;
(statearr_15143_16959[(2)] = null);

(statearr_15143_16959[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15126 === (9))){
var state_15125__$1 = state_15125;
var statearr_15144_16961 = state_15125__$1;
(statearr_15144_16961[(2)] = null);

(statearr_15144_16961[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15126 === (5))){
var state_15125__$1 = state_15125;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15145_16966 = state_15125__$1;
(statearr_15145_16966[(1)] = (8));

} else {
var statearr_15146_16968 = state_15125__$1;
(statearr_15146_16968[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15126 === (14))){
var inst_15103 = (state_15125[(8)]);
var inst_15105 = (state_15125[(11)]);
var inst_15103__$1 = (state_15125[(2)]);
var inst_15104 = (inst_15103__$1 == null);
var inst_15105__$1 = cljs.core.not(inst_15104);
var state_15125__$1 = (function (){var statearr_15147 = state_15125;
(statearr_15147[(8)] = inst_15103__$1);

(statearr_15147[(11)] = inst_15105__$1);

return statearr_15147;
})();
if(inst_15105__$1){
var statearr_15148_16972 = state_15125__$1;
(statearr_15148_16972[(1)] = (15));

} else {
var statearr_15149_16973 = state_15125__$1;
(statearr_15149_16973[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15126 === (16))){
var inst_15105 = (state_15125[(11)]);
var state_15125__$1 = state_15125;
var statearr_15150_16974 = state_15125__$1;
(statearr_15150_16974[(2)] = inst_15105);

(statearr_15150_16974[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15126 === (10))){
var inst_15097 = (state_15125[(2)]);
var state_15125__$1 = state_15125;
var statearr_15153_16976 = state_15125__$1;
(statearr_15153_16976[(2)] = inst_15097);

(statearr_15153_16976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15126 === (18))){
var inst_15108 = (state_15125[(2)]);
var state_15125__$1 = state_15125;
var statearr_15154_16977 = state_15125__$1;
(statearr_15154_16977[(2)] = inst_15108);

(statearr_15154_16977[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15126 === (8))){
var inst_15094 = cljs.core.async.close_BANG_(to);
var state_15125__$1 = state_15125;
var statearr_15155_16978 = state_15125__$1;
(statearr_15155_16978[(2)] = inst_15094);

(statearr_15155_16978[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__14421__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14421__auto____0 = (function (){
var statearr_15156 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15156[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14421__auto__);

(statearr_15156[(1)] = (1));

return statearr_15156;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14421__auto____1 = (function (state_15125){
while(true){
var ret_value__14422__auto__ = (function (){try{while(true){
var result__14423__auto__ = switch__14420__auto__(state_15125);
if(cljs.core.keyword_identical_QMARK_(result__14423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14423__auto__;
}
break;
}
}catch (e15157){var ex__14424__auto__ = e15157;
var statearr_15158_16979 = state_15125;
(statearr_15158_16979[(2)] = ex__14424__auto__);


if(cljs.core.seq((state_15125[(4)]))){
var statearr_15159_16980 = state_15125;
(statearr_15159_16980[(1)] = cljs.core.first((state_15125[(4)])));

} else {
throw ex__14424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16981 = state_15125;
state_15125 = G__16981;
continue;
} else {
return ret_value__14422__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14421__auto__ = function(state_15125){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14421__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14421__auto____1.call(this,state_15125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14421__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14421__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14421__auto__;
})()
})();
var state__14553__auto__ = (function (){var statearr_15160 = f__14552__auto__();
(statearr_15160[(6)] = c__14551__auto__);

return statearr_15160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14553__auto__);
}));

return c__14551__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15164 = arguments.length;
switch (G__15164) {
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
var G__15166 = arguments.length;
switch (G__15166) {
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
var G__15176 = arguments.length;
switch (G__15176) {
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
var c__14551__auto___16986 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14552__auto__ = (function (){var switch__14420__auto__ = (function (state_15203){
var state_val_15204 = (state_15203[(1)]);
if((state_val_15204 === (7))){
var inst_15199 = (state_15203[(2)]);
var state_15203__$1 = state_15203;
var statearr_15207_16987 = state_15203__$1;
(statearr_15207_16987[(2)] = inst_15199);

(statearr_15207_16987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15204 === (1))){
var state_15203__$1 = state_15203;
var statearr_15208_16988 = state_15203__$1;
(statearr_15208_16988[(2)] = null);

(statearr_15208_16988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15204 === (4))){
var inst_15180 = (state_15203[(7)]);
var inst_15180__$1 = (state_15203[(2)]);
var inst_15181 = (inst_15180__$1 == null);
var state_15203__$1 = (function (){var statearr_15211 = state_15203;
(statearr_15211[(7)] = inst_15180__$1);

return statearr_15211;
})();
if(cljs.core.truth_(inst_15181)){
var statearr_15212_16989 = state_15203__$1;
(statearr_15212_16989[(1)] = (5));

} else {
var statearr_15214_16990 = state_15203__$1;
(statearr_15214_16990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15204 === (13))){
var state_15203__$1 = state_15203;
var statearr_15220_16991 = state_15203__$1;
(statearr_15220_16991[(2)] = null);

(statearr_15220_16991[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15204 === (6))){
var inst_15180 = (state_15203[(7)]);
var inst_15186 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15180) : p.call(null,inst_15180));
var state_15203__$1 = state_15203;
if(cljs.core.truth_(inst_15186)){
var statearr_15221_16993 = state_15203__$1;
(statearr_15221_16993[(1)] = (9));

} else {
var statearr_15222_16994 = state_15203__$1;
(statearr_15222_16994[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15204 === (3))){
var inst_15201 = (state_15203[(2)]);
var state_15203__$1 = state_15203;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15203__$1,inst_15201);
} else {
if((state_val_15204 === (12))){
var state_15203__$1 = state_15203;
var statearr_15224_16995 = state_15203__$1;
(statearr_15224_16995[(2)] = null);

(statearr_15224_16995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15204 === (2))){
var state_15203__$1 = state_15203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15203__$1,(4),ch);
} else {
if((state_val_15204 === (11))){
var inst_15180 = (state_15203[(7)]);
var inst_15190 = (state_15203[(2)]);
var state_15203__$1 = state_15203;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15203__$1,(8),inst_15190,inst_15180);
} else {
if((state_val_15204 === (9))){
var state_15203__$1 = state_15203;
var statearr_15227_16996 = state_15203__$1;
(statearr_15227_16996[(2)] = tc);

(statearr_15227_16996[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15204 === (5))){
var inst_15183 = cljs.core.async.close_BANG_(tc);
var inst_15184 = cljs.core.async.close_BANG_(fc);
var state_15203__$1 = (function (){var statearr_15228 = state_15203;
(statearr_15228[(8)] = inst_15183);

return statearr_15228;
})();
var statearr_15229_16997 = state_15203__$1;
(statearr_15229_16997[(2)] = inst_15184);

(statearr_15229_16997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15204 === (14))){
var inst_15197 = (state_15203[(2)]);
var state_15203__$1 = state_15203;
var statearr_15234_16998 = state_15203__$1;
(statearr_15234_16998[(2)] = inst_15197);

(statearr_15234_16998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15204 === (10))){
var state_15203__$1 = state_15203;
var statearr_15239_16999 = state_15203__$1;
(statearr_15239_16999[(2)] = fc);

(statearr_15239_16999[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15204 === (8))){
var inst_15192 = (state_15203[(2)]);
var state_15203__$1 = state_15203;
if(cljs.core.truth_(inst_15192)){
var statearr_15247_17000 = state_15203__$1;
(statearr_15247_17000[(1)] = (12));

} else {
var statearr_15248_17001 = state_15203__$1;
(statearr_15248_17001[(1)] = (13));

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
var cljs$core$async$state_machine__14421__auto__ = null;
var cljs$core$async$state_machine__14421__auto____0 = (function (){
var statearr_15253 = [null,null,null,null,null,null,null,null,null];
(statearr_15253[(0)] = cljs$core$async$state_machine__14421__auto__);

(statearr_15253[(1)] = (1));

return statearr_15253;
});
var cljs$core$async$state_machine__14421__auto____1 = (function (state_15203){
while(true){
var ret_value__14422__auto__ = (function (){try{while(true){
var result__14423__auto__ = switch__14420__auto__(state_15203);
if(cljs.core.keyword_identical_QMARK_(result__14423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14423__auto__;
}
break;
}
}catch (e15254){var ex__14424__auto__ = e15254;
var statearr_15255_17002 = state_15203;
(statearr_15255_17002[(2)] = ex__14424__auto__);


if(cljs.core.seq((state_15203[(4)]))){
var statearr_15259_17003 = state_15203;
(statearr_15259_17003[(1)] = cljs.core.first((state_15203[(4)])));

} else {
throw ex__14424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17004 = state_15203;
state_15203 = G__17004;
continue;
} else {
return ret_value__14422__auto__;
}
break;
}
});
cljs$core$async$state_machine__14421__auto__ = function(state_15203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14421__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14421__auto____1.call(this,state_15203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14421__auto____0;
cljs$core$async$state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14421__auto____1;
return cljs$core$async$state_machine__14421__auto__;
})()
})();
var state__14553__auto__ = (function (){var statearr_15266 = f__14552__auto__();
(statearr_15266[(6)] = c__14551__auto___16986);

return statearr_15266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14553__auto__);
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
var c__14551__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14552__auto__ = (function (){var switch__14420__auto__ = (function (state_15310){
var state_val_15311 = (state_15310[(1)]);
if((state_val_15311 === (7))){
var inst_15306 = (state_15310[(2)]);
var state_15310__$1 = state_15310;
var statearr_15314_17005 = state_15310__$1;
(statearr_15314_17005[(2)] = inst_15306);

(statearr_15314_17005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15311 === (1))){
var inst_15279 = init;
var inst_15280 = inst_15279;
var state_15310__$1 = (function (){var statearr_15315 = state_15310;
(statearr_15315[(7)] = inst_15280);

return statearr_15315;
})();
var statearr_15316_17006 = state_15310__$1;
(statearr_15316_17006[(2)] = null);

(statearr_15316_17006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15311 === (4))){
var inst_15283 = (state_15310[(8)]);
var inst_15283__$1 = (state_15310[(2)]);
var inst_15284 = (inst_15283__$1 == null);
var state_15310__$1 = (function (){var statearr_15317 = state_15310;
(statearr_15317[(8)] = inst_15283__$1);

return statearr_15317;
})();
if(cljs.core.truth_(inst_15284)){
var statearr_15318_17007 = state_15310__$1;
(statearr_15318_17007[(1)] = (5));

} else {
var statearr_15319_17008 = state_15310__$1;
(statearr_15319_17008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15311 === (6))){
var inst_15280 = (state_15310[(7)]);
var inst_15283 = (state_15310[(8)]);
var inst_15287 = (state_15310[(9)]);
var inst_15287__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15280,inst_15283) : f.call(null,inst_15280,inst_15283));
var inst_15288 = cljs.core.reduced_QMARK_(inst_15287__$1);
var state_15310__$1 = (function (){var statearr_15320 = state_15310;
(statearr_15320[(9)] = inst_15287__$1);

return statearr_15320;
})();
if(inst_15288){
var statearr_15323_17009 = state_15310__$1;
(statearr_15323_17009[(1)] = (8));

} else {
var statearr_15324_17011 = state_15310__$1;
(statearr_15324_17011[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15311 === (3))){
var inst_15308 = (state_15310[(2)]);
var state_15310__$1 = state_15310;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15310__$1,inst_15308);
} else {
if((state_val_15311 === (2))){
var state_15310__$1 = state_15310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15310__$1,(4),ch);
} else {
if((state_val_15311 === (9))){
var inst_15287 = (state_15310[(9)]);
var inst_15280 = inst_15287;
var state_15310__$1 = (function (){var statearr_15325 = state_15310;
(statearr_15325[(7)] = inst_15280);

return statearr_15325;
})();
var statearr_15326_17012 = state_15310__$1;
(statearr_15326_17012[(2)] = null);

(statearr_15326_17012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15311 === (5))){
var inst_15280 = (state_15310[(7)]);
var state_15310__$1 = state_15310;
var statearr_15329_17013 = state_15310__$1;
(statearr_15329_17013[(2)] = inst_15280);

(statearr_15329_17013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15311 === (10))){
var inst_15304 = (state_15310[(2)]);
var state_15310__$1 = state_15310;
var statearr_15330_17014 = state_15310__$1;
(statearr_15330_17014[(2)] = inst_15304);

(statearr_15330_17014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15311 === (8))){
var inst_15287 = (state_15310[(9)]);
var inst_15293 = cljs.core.deref(inst_15287);
var state_15310__$1 = state_15310;
var statearr_15331_17015 = state_15310__$1;
(statearr_15331_17015[(2)] = inst_15293);

(statearr_15331_17015[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__14421__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14421__auto____0 = (function (){
var statearr_15333 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15333[(0)] = cljs$core$async$reduce_$_state_machine__14421__auto__);

(statearr_15333[(1)] = (1));

return statearr_15333;
});
var cljs$core$async$reduce_$_state_machine__14421__auto____1 = (function (state_15310){
while(true){
var ret_value__14422__auto__ = (function (){try{while(true){
var result__14423__auto__ = switch__14420__auto__(state_15310);
if(cljs.core.keyword_identical_QMARK_(result__14423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14423__auto__;
}
break;
}
}catch (e15334){var ex__14424__auto__ = e15334;
var statearr_15335_17016 = state_15310;
(statearr_15335_17016[(2)] = ex__14424__auto__);


if(cljs.core.seq((state_15310[(4)]))){
var statearr_15336_17017 = state_15310;
(statearr_15336_17017[(1)] = cljs.core.first((state_15310[(4)])));

} else {
throw ex__14424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17018 = state_15310;
state_15310 = G__17018;
continue;
} else {
return ret_value__14422__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14421__auto__ = function(state_15310){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14421__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14421__auto____1.call(this,state_15310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14421__auto____0;
cljs$core$async$reduce_$_state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14421__auto____1;
return cljs$core$async$reduce_$_state_machine__14421__auto__;
})()
})();
var state__14553__auto__ = (function (){var statearr_15338 = f__14552__auto__();
(statearr_15338[(6)] = c__14551__auto__);

return statearr_15338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14553__auto__);
}));

return c__14551__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14551__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14552__auto__ = (function (){var switch__14420__auto__ = (function (state_15344){
var state_val_15345 = (state_15344[(1)]);
if((state_val_15345 === (1))){
var inst_15339 = cljs.core.async.reduce(f__$1,init,ch);
var state_15344__$1 = state_15344;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15344__$1,(2),inst_15339);
} else {
if((state_val_15345 === (2))){
var inst_15341 = (state_15344[(2)]);
var inst_15342 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15341) : f__$1.call(null,inst_15341));
var state_15344__$1 = state_15344;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15344__$1,inst_15342);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14421__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14421__auto____0 = (function (){
var statearr_15348 = [null,null,null,null,null,null,null];
(statearr_15348[(0)] = cljs$core$async$transduce_$_state_machine__14421__auto__);

(statearr_15348[(1)] = (1));

return statearr_15348;
});
var cljs$core$async$transduce_$_state_machine__14421__auto____1 = (function (state_15344){
while(true){
var ret_value__14422__auto__ = (function (){try{while(true){
var result__14423__auto__ = switch__14420__auto__(state_15344);
if(cljs.core.keyword_identical_QMARK_(result__14423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14423__auto__;
}
break;
}
}catch (e15349){var ex__14424__auto__ = e15349;
var statearr_15350_17020 = state_15344;
(statearr_15350_17020[(2)] = ex__14424__auto__);


if(cljs.core.seq((state_15344[(4)]))){
var statearr_15351_17021 = state_15344;
(statearr_15351_17021[(1)] = cljs.core.first((state_15344[(4)])));

} else {
throw ex__14424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17023 = state_15344;
state_15344 = G__17023;
continue;
} else {
return ret_value__14422__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14421__auto__ = function(state_15344){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14421__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14421__auto____1.call(this,state_15344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14421__auto____0;
cljs$core$async$transduce_$_state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14421__auto____1;
return cljs$core$async$transduce_$_state_machine__14421__auto__;
})()
})();
var state__14553__auto__ = (function (){var statearr_15352 = f__14552__auto__();
(statearr_15352[(6)] = c__14551__auto__);

return statearr_15352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14553__auto__);
}));

return c__14551__auto__;
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
var G__15354 = arguments.length;
switch (G__15354) {
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
var c__14551__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14552__auto__ = (function (){var switch__14420__auto__ = (function (state_15379){
var state_val_15380 = (state_15379[(1)]);
if((state_val_15380 === (7))){
var inst_15361 = (state_15379[(2)]);
var state_15379__$1 = state_15379;
var statearr_15387_17025 = state_15379__$1;
(statearr_15387_17025[(2)] = inst_15361);

(statearr_15387_17025[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15380 === (1))){
var inst_15355 = cljs.core.seq(coll);
var inst_15356 = inst_15355;
var state_15379__$1 = (function (){var statearr_15388 = state_15379;
(statearr_15388[(7)] = inst_15356);

return statearr_15388;
})();
var statearr_15389_17026 = state_15379__$1;
(statearr_15389_17026[(2)] = null);

(statearr_15389_17026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15380 === (4))){
var inst_15356 = (state_15379[(7)]);
var inst_15359 = cljs.core.first(inst_15356);
var state_15379__$1 = state_15379;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15379__$1,(7),ch,inst_15359);
} else {
if((state_val_15380 === (13))){
var inst_15373 = (state_15379[(2)]);
var state_15379__$1 = state_15379;
var statearr_15390_17027 = state_15379__$1;
(statearr_15390_17027[(2)] = inst_15373);

(statearr_15390_17027[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15380 === (6))){
var inst_15364 = (state_15379[(2)]);
var state_15379__$1 = state_15379;
if(cljs.core.truth_(inst_15364)){
var statearr_15391_17028 = state_15379__$1;
(statearr_15391_17028[(1)] = (8));

} else {
var statearr_15392_17029 = state_15379__$1;
(statearr_15392_17029[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15380 === (3))){
var inst_15377 = (state_15379[(2)]);
var state_15379__$1 = state_15379;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15379__$1,inst_15377);
} else {
if((state_val_15380 === (12))){
var state_15379__$1 = state_15379;
var statearr_15393_17030 = state_15379__$1;
(statearr_15393_17030[(2)] = null);

(statearr_15393_17030[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15380 === (2))){
var inst_15356 = (state_15379[(7)]);
var state_15379__$1 = state_15379;
if(cljs.core.truth_(inst_15356)){
var statearr_15394_17031 = state_15379__$1;
(statearr_15394_17031[(1)] = (4));

} else {
var statearr_15395_17032 = state_15379__$1;
(statearr_15395_17032[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15380 === (11))){
var inst_15370 = cljs.core.async.close_BANG_(ch);
var state_15379__$1 = state_15379;
var statearr_15396_17033 = state_15379__$1;
(statearr_15396_17033[(2)] = inst_15370);

(statearr_15396_17033[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15380 === (9))){
var state_15379__$1 = state_15379;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15397_17034 = state_15379__$1;
(statearr_15397_17034[(1)] = (11));

} else {
var statearr_15398_17035 = state_15379__$1;
(statearr_15398_17035[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15380 === (5))){
var inst_15356 = (state_15379[(7)]);
var state_15379__$1 = state_15379;
var statearr_15399_17036 = state_15379__$1;
(statearr_15399_17036[(2)] = inst_15356);

(statearr_15399_17036[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15380 === (10))){
var inst_15375 = (state_15379[(2)]);
var state_15379__$1 = state_15379;
var statearr_15400_17037 = state_15379__$1;
(statearr_15400_17037[(2)] = inst_15375);

(statearr_15400_17037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15380 === (8))){
var inst_15356 = (state_15379[(7)]);
var inst_15366 = cljs.core.next(inst_15356);
var inst_15356__$1 = inst_15366;
var state_15379__$1 = (function (){var statearr_15401 = state_15379;
(statearr_15401[(7)] = inst_15356__$1);

return statearr_15401;
})();
var statearr_15406_17038 = state_15379__$1;
(statearr_15406_17038[(2)] = null);

(statearr_15406_17038[(1)] = (2));


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
var cljs$core$async$state_machine__14421__auto__ = null;
var cljs$core$async$state_machine__14421__auto____0 = (function (){
var statearr_15409 = [null,null,null,null,null,null,null,null];
(statearr_15409[(0)] = cljs$core$async$state_machine__14421__auto__);

(statearr_15409[(1)] = (1));

return statearr_15409;
});
var cljs$core$async$state_machine__14421__auto____1 = (function (state_15379){
while(true){
var ret_value__14422__auto__ = (function (){try{while(true){
var result__14423__auto__ = switch__14420__auto__(state_15379);
if(cljs.core.keyword_identical_QMARK_(result__14423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14423__auto__;
}
break;
}
}catch (e15410){var ex__14424__auto__ = e15410;
var statearr_15411_17039 = state_15379;
(statearr_15411_17039[(2)] = ex__14424__auto__);


if(cljs.core.seq((state_15379[(4)]))){
var statearr_15412_17040 = state_15379;
(statearr_15412_17040[(1)] = cljs.core.first((state_15379[(4)])));

} else {
throw ex__14424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17041 = state_15379;
state_15379 = G__17041;
continue;
} else {
return ret_value__14422__auto__;
}
break;
}
});
cljs$core$async$state_machine__14421__auto__ = function(state_15379){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14421__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14421__auto____1.call(this,state_15379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14421__auto____0;
cljs$core$async$state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14421__auto____1;
return cljs$core$async$state_machine__14421__auto__;
})()
})();
var state__14553__auto__ = (function (){var statearr_15413 = f__14552__auto__();
(statearr_15413[(6)] = c__14551__auto__);

return statearr_15413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14553__auto__);
}));

return c__14551__auto__;
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
var G__15415 = arguments.length;
switch (G__15415) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_17043 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17043(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17044 = (function (m,ch,close_QMARK_){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5374__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5372__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5372__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17044(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17045 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17045(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17046 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5374__auto__.call(null,m));
} else {
var m__5372__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5372__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17046(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15427 = (function (ch,cs,meta15428){
this.ch = ch;
this.cs = cs;
this.meta15428 = meta15428;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15429,meta15428__$1){
var self__ = this;
var _15429__$1 = this;
return (new cljs.core.async.t_cljs$core$async15427(self__.ch,self__.cs,meta15428__$1));
}));

(cljs.core.async.t_cljs$core$async15427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15429){
var self__ = this;
var _15429__$1 = this;
return self__.meta15428;
}));

(cljs.core.async.t_cljs$core$async15427.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15427.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15427.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15427.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15427.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15427.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15427.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15428","meta15428",1409256827,null)], null);
}));

(cljs.core.async.t_cljs$core$async15427.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15427.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15427");

(cljs.core.async.t_cljs$core$async15427.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async15427");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15427.
 */
cljs.core.async.__GT_t_cljs$core$async15427 = (function cljs$core$async$__GT_t_cljs$core$async15427(ch,cs,meta15428){
return (new cljs.core.async.t_cljs$core$async15427(ch,cs,meta15428));
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
var m = (new cljs.core.async.t_cljs$core$async15427(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14551__auto___17048 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14552__auto__ = (function (){var switch__14420__auto__ = (function (state_15565){
var state_val_15566 = (state_15565[(1)]);
if((state_val_15566 === (7))){
var inst_15561 = (state_15565[(2)]);
var state_15565__$1 = state_15565;
var statearr_15567_17049 = state_15565__$1;
(statearr_15567_17049[(2)] = inst_15561);

(statearr_15567_17049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (20))){
var inst_15465 = (state_15565[(7)]);
var inst_15477 = cljs.core.first(inst_15465);
var inst_15478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15477,(0),null);
var inst_15479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15477,(1),null);
var state_15565__$1 = (function (){var statearr_15568 = state_15565;
(statearr_15568[(8)] = inst_15478);

return statearr_15568;
})();
if(cljs.core.truth_(inst_15479)){
var statearr_15569_17050 = state_15565__$1;
(statearr_15569_17050[(1)] = (22));

} else {
var statearr_15570_17051 = state_15565__$1;
(statearr_15570_17051[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (27))){
var inst_15508 = (state_15565[(9)]);
var inst_15510 = (state_15565[(10)]);
var inst_15515 = (state_15565[(11)]);
var inst_15433 = (state_15565[(12)]);
var inst_15515__$1 = cljs.core._nth(inst_15508,inst_15510);
var inst_15516 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15515__$1,inst_15433,done);
var state_15565__$1 = (function (){var statearr_15571 = state_15565;
(statearr_15571[(11)] = inst_15515__$1);

return statearr_15571;
})();
if(cljs.core.truth_(inst_15516)){
var statearr_15572_17053 = state_15565__$1;
(statearr_15572_17053[(1)] = (30));

} else {
var statearr_15573_17054 = state_15565__$1;
(statearr_15573_17054[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (1))){
var state_15565__$1 = state_15565;
var statearr_15574_17055 = state_15565__$1;
(statearr_15574_17055[(2)] = null);

(statearr_15574_17055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (24))){
var inst_15465 = (state_15565[(7)]);
var inst_15485 = (state_15565[(2)]);
var inst_15486 = cljs.core.next(inst_15465);
var inst_15442 = inst_15486;
var inst_15443 = null;
var inst_15444 = (0);
var inst_15445 = (0);
var state_15565__$1 = (function (){var statearr_15576 = state_15565;
(statearr_15576[(13)] = inst_15485);

(statearr_15576[(14)] = inst_15442);

(statearr_15576[(15)] = inst_15443);

(statearr_15576[(16)] = inst_15444);

(statearr_15576[(17)] = inst_15445);

return statearr_15576;
})();
var statearr_15577_17057 = state_15565__$1;
(statearr_15577_17057[(2)] = null);

(statearr_15577_17057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (39))){
var state_15565__$1 = state_15565;
var statearr_15581_17058 = state_15565__$1;
(statearr_15581_17058[(2)] = null);

(statearr_15581_17058[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (4))){
var inst_15433 = (state_15565[(12)]);
var inst_15433__$1 = (state_15565[(2)]);
var inst_15434 = (inst_15433__$1 == null);
var state_15565__$1 = (function (){var statearr_15582 = state_15565;
(statearr_15582[(12)] = inst_15433__$1);

return statearr_15582;
})();
if(cljs.core.truth_(inst_15434)){
var statearr_15585_17059 = state_15565__$1;
(statearr_15585_17059[(1)] = (5));

} else {
var statearr_15586_17060 = state_15565__$1;
(statearr_15586_17060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (15))){
var inst_15445 = (state_15565[(17)]);
var inst_15442 = (state_15565[(14)]);
var inst_15443 = (state_15565[(15)]);
var inst_15444 = (state_15565[(16)]);
var inst_15460 = (state_15565[(2)]);
var inst_15461 = (inst_15445 + (1));
var tmp15578 = inst_15442;
var tmp15579 = inst_15444;
var tmp15580 = inst_15443;
var inst_15442__$1 = tmp15578;
var inst_15443__$1 = tmp15580;
var inst_15444__$1 = tmp15579;
var inst_15445__$1 = inst_15461;
var state_15565__$1 = (function (){var statearr_15588 = state_15565;
(statearr_15588[(18)] = inst_15460);

(statearr_15588[(14)] = inst_15442__$1);

(statearr_15588[(15)] = inst_15443__$1);

(statearr_15588[(16)] = inst_15444__$1);

(statearr_15588[(17)] = inst_15445__$1);

return statearr_15588;
})();
var statearr_15590_17061 = state_15565__$1;
(statearr_15590_17061[(2)] = null);

(statearr_15590_17061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (21))){
var inst_15489 = (state_15565[(2)]);
var state_15565__$1 = state_15565;
var statearr_15594_17062 = state_15565__$1;
(statearr_15594_17062[(2)] = inst_15489);

(statearr_15594_17062[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (31))){
var inst_15515 = (state_15565[(11)]);
var inst_15519 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15515);
var state_15565__$1 = state_15565;
var statearr_15595_17063 = state_15565__$1;
(statearr_15595_17063[(2)] = inst_15519);

(statearr_15595_17063[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (32))){
var inst_15510 = (state_15565[(10)]);
var inst_15507 = (state_15565[(19)]);
var inst_15508 = (state_15565[(9)]);
var inst_15509 = (state_15565[(20)]);
var inst_15521 = (state_15565[(2)]);
var inst_15522 = (inst_15510 + (1));
var tmp15591 = inst_15509;
var tmp15592 = inst_15508;
var tmp15593 = inst_15507;
var inst_15507__$1 = tmp15593;
var inst_15508__$1 = tmp15592;
var inst_15509__$1 = tmp15591;
var inst_15510__$1 = inst_15522;
var state_15565__$1 = (function (){var statearr_15596 = state_15565;
(statearr_15596[(21)] = inst_15521);

(statearr_15596[(19)] = inst_15507__$1);

(statearr_15596[(9)] = inst_15508__$1);

(statearr_15596[(20)] = inst_15509__$1);

(statearr_15596[(10)] = inst_15510__$1);

return statearr_15596;
})();
var statearr_15597_17064 = state_15565__$1;
(statearr_15597_17064[(2)] = null);

(statearr_15597_17064[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (40))){
var inst_15534 = (state_15565[(22)]);
var inst_15538 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15534);
var state_15565__$1 = state_15565;
var statearr_15598_17065 = state_15565__$1;
(statearr_15598_17065[(2)] = inst_15538);

(statearr_15598_17065[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (33))){
var inst_15525 = (state_15565[(23)]);
var inst_15527 = cljs.core.chunked_seq_QMARK_(inst_15525);
var state_15565__$1 = state_15565;
if(inst_15527){
var statearr_15599_17066 = state_15565__$1;
(statearr_15599_17066[(1)] = (36));

} else {
var statearr_15600_17067 = state_15565__$1;
(statearr_15600_17067[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (13))){
var inst_15454 = (state_15565[(24)]);
var inst_15457 = cljs.core.async.close_BANG_(inst_15454);
var state_15565__$1 = state_15565;
var statearr_15601_17069 = state_15565__$1;
(statearr_15601_17069[(2)] = inst_15457);

(statearr_15601_17069[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (22))){
var inst_15478 = (state_15565[(8)]);
var inst_15482 = cljs.core.async.close_BANG_(inst_15478);
var state_15565__$1 = state_15565;
var statearr_15602_17070 = state_15565__$1;
(statearr_15602_17070[(2)] = inst_15482);

(statearr_15602_17070[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (36))){
var inst_15525 = (state_15565[(23)]);
var inst_15529 = cljs.core.chunk_first(inst_15525);
var inst_15530 = cljs.core.chunk_rest(inst_15525);
var inst_15531 = cljs.core.count(inst_15529);
var inst_15507 = inst_15530;
var inst_15508 = inst_15529;
var inst_15509 = inst_15531;
var inst_15510 = (0);
var state_15565__$1 = (function (){var statearr_15603 = state_15565;
(statearr_15603[(19)] = inst_15507);

(statearr_15603[(9)] = inst_15508);

(statearr_15603[(20)] = inst_15509);

(statearr_15603[(10)] = inst_15510);

return statearr_15603;
})();
var statearr_15604_17071 = state_15565__$1;
(statearr_15604_17071[(2)] = null);

(statearr_15604_17071[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (41))){
var inst_15525 = (state_15565[(23)]);
var inst_15540 = (state_15565[(2)]);
var inst_15541 = cljs.core.next(inst_15525);
var inst_15507 = inst_15541;
var inst_15508 = null;
var inst_15509 = (0);
var inst_15510 = (0);
var state_15565__$1 = (function (){var statearr_15605 = state_15565;
(statearr_15605[(25)] = inst_15540);

(statearr_15605[(19)] = inst_15507);

(statearr_15605[(9)] = inst_15508);

(statearr_15605[(20)] = inst_15509);

(statearr_15605[(10)] = inst_15510);

return statearr_15605;
})();
var statearr_15606_17072 = state_15565__$1;
(statearr_15606_17072[(2)] = null);

(statearr_15606_17072[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (43))){
var state_15565__$1 = state_15565;
var statearr_15607_17073 = state_15565__$1;
(statearr_15607_17073[(2)] = null);

(statearr_15607_17073[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (29))){
var inst_15549 = (state_15565[(2)]);
var state_15565__$1 = state_15565;
var statearr_15608_17074 = state_15565__$1;
(statearr_15608_17074[(2)] = inst_15549);

(statearr_15608_17074[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (44))){
var inst_15558 = (state_15565[(2)]);
var state_15565__$1 = (function (){var statearr_15609 = state_15565;
(statearr_15609[(26)] = inst_15558);

return statearr_15609;
})();
var statearr_15610_17075 = state_15565__$1;
(statearr_15610_17075[(2)] = null);

(statearr_15610_17075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (6))){
var inst_15499 = (state_15565[(27)]);
var inst_15498 = cljs.core.deref(cs);
var inst_15499__$1 = cljs.core.keys(inst_15498);
var inst_15500 = cljs.core.count(inst_15499__$1);
var inst_15501 = cljs.core.reset_BANG_(dctr,inst_15500);
var inst_15506 = cljs.core.seq(inst_15499__$1);
var inst_15507 = inst_15506;
var inst_15508 = null;
var inst_15509 = (0);
var inst_15510 = (0);
var state_15565__$1 = (function (){var statearr_15612 = state_15565;
(statearr_15612[(27)] = inst_15499__$1);

(statearr_15612[(28)] = inst_15501);

(statearr_15612[(19)] = inst_15507);

(statearr_15612[(9)] = inst_15508);

(statearr_15612[(20)] = inst_15509);

(statearr_15612[(10)] = inst_15510);

return statearr_15612;
})();
var statearr_15615_17076 = state_15565__$1;
(statearr_15615_17076[(2)] = null);

(statearr_15615_17076[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (28))){
var inst_15507 = (state_15565[(19)]);
var inst_15525 = (state_15565[(23)]);
var inst_15525__$1 = cljs.core.seq(inst_15507);
var state_15565__$1 = (function (){var statearr_15616 = state_15565;
(statearr_15616[(23)] = inst_15525__$1);

return statearr_15616;
})();
if(inst_15525__$1){
var statearr_15617_17077 = state_15565__$1;
(statearr_15617_17077[(1)] = (33));

} else {
var statearr_15618_17078 = state_15565__$1;
(statearr_15618_17078[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (25))){
var inst_15510 = (state_15565[(10)]);
var inst_15509 = (state_15565[(20)]);
var inst_15512 = (inst_15510 < inst_15509);
var inst_15513 = inst_15512;
var state_15565__$1 = state_15565;
if(cljs.core.truth_(inst_15513)){
var statearr_15619_17081 = state_15565__$1;
(statearr_15619_17081[(1)] = (27));

} else {
var statearr_15620_17082 = state_15565__$1;
(statearr_15620_17082[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (34))){
var state_15565__$1 = state_15565;
var statearr_15621_17083 = state_15565__$1;
(statearr_15621_17083[(2)] = null);

(statearr_15621_17083[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (17))){
var state_15565__$1 = state_15565;
var statearr_15622_17084 = state_15565__$1;
(statearr_15622_17084[(2)] = null);

(statearr_15622_17084[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (3))){
var inst_15563 = (state_15565[(2)]);
var state_15565__$1 = state_15565;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15565__$1,inst_15563);
} else {
if((state_val_15566 === (12))){
var inst_15494 = (state_15565[(2)]);
var state_15565__$1 = state_15565;
var statearr_15623_17085 = state_15565__$1;
(statearr_15623_17085[(2)] = inst_15494);

(statearr_15623_17085[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (2))){
var state_15565__$1 = state_15565;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15565__$1,(4),ch);
} else {
if((state_val_15566 === (23))){
var state_15565__$1 = state_15565;
var statearr_15632_17086 = state_15565__$1;
(statearr_15632_17086[(2)] = null);

(statearr_15632_17086[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (35))){
var inst_15547 = (state_15565[(2)]);
var state_15565__$1 = state_15565;
var statearr_15637_17087 = state_15565__$1;
(statearr_15637_17087[(2)] = inst_15547);

(statearr_15637_17087[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (19))){
var inst_15465 = (state_15565[(7)]);
var inst_15469 = cljs.core.chunk_first(inst_15465);
var inst_15470 = cljs.core.chunk_rest(inst_15465);
var inst_15471 = cljs.core.count(inst_15469);
var inst_15442 = inst_15470;
var inst_15443 = inst_15469;
var inst_15444 = inst_15471;
var inst_15445 = (0);
var state_15565__$1 = (function (){var statearr_15638 = state_15565;
(statearr_15638[(14)] = inst_15442);

(statearr_15638[(15)] = inst_15443);

(statearr_15638[(16)] = inst_15444);

(statearr_15638[(17)] = inst_15445);

return statearr_15638;
})();
var statearr_15639_17088 = state_15565__$1;
(statearr_15639_17088[(2)] = null);

(statearr_15639_17088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (11))){
var inst_15442 = (state_15565[(14)]);
var inst_15465 = (state_15565[(7)]);
var inst_15465__$1 = cljs.core.seq(inst_15442);
var state_15565__$1 = (function (){var statearr_15640 = state_15565;
(statearr_15640[(7)] = inst_15465__$1);

return statearr_15640;
})();
if(inst_15465__$1){
var statearr_15641_17089 = state_15565__$1;
(statearr_15641_17089[(1)] = (16));

} else {
var statearr_15642_17091 = state_15565__$1;
(statearr_15642_17091[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (9))){
var inst_15496 = (state_15565[(2)]);
var state_15565__$1 = state_15565;
var statearr_15643_17092 = state_15565__$1;
(statearr_15643_17092[(2)] = inst_15496);

(statearr_15643_17092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (5))){
var inst_15440 = cljs.core.deref(cs);
var inst_15441 = cljs.core.seq(inst_15440);
var inst_15442 = inst_15441;
var inst_15443 = null;
var inst_15444 = (0);
var inst_15445 = (0);
var state_15565__$1 = (function (){var statearr_15644 = state_15565;
(statearr_15644[(14)] = inst_15442);

(statearr_15644[(15)] = inst_15443);

(statearr_15644[(16)] = inst_15444);

(statearr_15644[(17)] = inst_15445);

return statearr_15644;
})();
var statearr_15645_17095 = state_15565__$1;
(statearr_15645_17095[(2)] = null);

(statearr_15645_17095[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (14))){
var state_15565__$1 = state_15565;
var statearr_15646_17096 = state_15565__$1;
(statearr_15646_17096[(2)] = null);

(statearr_15646_17096[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (45))){
var inst_15555 = (state_15565[(2)]);
var state_15565__$1 = state_15565;
var statearr_15647_17097 = state_15565__$1;
(statearr_15647_17097[(2)] = inst_15555);

(statearr_15647_17097[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (26))){
var inst_15499 = (state_15565[(27)]);
var inst_15551 = (state_15565[(2)]);
var inst_15552 = cljs.core.seq(inst_15499);
var state_15565__$1 = (function (){var statearr_15648 = state_15565;
(statearr_15648[(29)] = inst_15551);

return statearr_15648;
})();
if(inst_15552){
var statearr_15649_17098 = state_15565__$1;
(statearr_15649_17098[(1)] = (42));

} else {
var statearr_15650_17099 = state_15565__$1;
(statearr_15650_17099[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (16))){
var inst_15465 = (state_15565[(7)]);
var inst_15467 = cljs.core.chunked_seq_QMARK_(inst_15465);
var state_15565__$1 = state_15565;
if(inst_15467){
var statearr_15651_17100 = state_15565__$1;
(statearr_15651_17100[(1)] = (19));

} else {
var statearr_15652_17101 = state_15565__$1;
(statearr_15652_17101[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (38))){
var inst_15544 = (state_15565[(2)]);
var state_15565__$1 = state_15565;
var statearr_15653_17102 = state_15565__$1;
(statearr_15653_17102[(2)] = inst_15544);

(statearr_15653_17102[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (30))){
var state_15565__$1 = state_15565;
var statearr_15654_17103 = state_15565__$1;
(statearr_15654_17103[(2)] = null);

(statearr_15654_17103[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (10))){
var inst_15443 = (state_15565[(15)]);
var inst_15445 = (state_15565[(17)]);
var inst_15453 = cljs.core._nth(inst_15443,inst_15445);
var inst_15454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15453,(0),null);
var inst_15455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15453,(1),null);
var state_15565__$1 = (function (){var statearr_15655 = state_15565;
(statearr_15655[(24)] = inst_15454);

return statearr_15655;
})();
if(cljs.core.truth_(inst_15455)){
var statearr_15656_17104 = state_15565__$1;
(statearr_15656_17104[(1)] = (13));

} else {
var statearr_15659_17105 = state_15565__$1;
(statearr_15659_17105[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (18))){
var inst_15492 = (state_15565[(2)]);
var state_15565__$1 = state_15565;
var statearr_15661_17106 = state_15565__$1;
(statearr_15661_17106[(2)] = inst_15492);

(statearr_15661_17106[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (42))){
var state_15565__$1 = state_15565;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15565__$1,(45),dchan);
} else {
if((state_val_15566 === (37))){
var inst_15525 = (state_15565[(23)]);
var inst_15534 = (state_15565[(22)]);
var inst_15433 = (state_15565[(12)]);
var inst_15534__$1 = cljs.core.first(inst_15525);
var inst_15535 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15534__$1,inst_15433,done);
var state_15565__$1 = (function (){var statearr_15662 = state_15565;
(statearr_15662[(22)] = inst_15534__$1);

return statearr_15662;
})();
if(cljs.core.truth_(inst_15535)){
var statearr_15663_17107 = state_15565__$1;
(statearr_15663_17107[(1)] = (39));

} else {
var statearr_15664_17108 = state_15565__$1;
(statearr_15664_17108[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15566 === (8))){
var inst_15445 = (state_15565[(17)]);
var inst_15444 = (state_15565[(16)]);
var inst_15447 = (inst_15445 < inst_15444);
var inst_15448 = inst_15447;
var state_15565__$1 = state_15565;
if(cljs.core.truth_(inst_15448)){
var statearr_15665_17109 = state_15565__$1;
(statearr_15665_17109[(1)] = (10));

} else {
var statearr_15668_17110 = state_15565__$1;
(statearr_15668_17110[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__14421__auto__ = null;
var cljs$core$async$mult_$_state_machine__14421__auto____0 = (function (){
var statearr_15671 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15671[(0)] = cljs$core$async$mult_$_state_machine__14421__auto__);

(statearr_15671[(1)] = (1));

return statearr_15671;
});
var cljs$core$async$mult_$_state_machine__14421__auto____1 = (function (state_15565){
while(true){
var ret_value__14422__auto__ = (function (){try{while(true){
var result__14423__auto__ = switch__14420__auto__(state_15565);
if(cljs.core.keyword_identical_QMARK_(result__14423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14423__auto__;
}
break;
}
}catch (e15673){var ex__14424__auto__ = e15673;
var statearr_15674_17111 = state_15565;
(statearr_15674_17111[(2)] = ex__14424__auto__);


if(cljs.core.seq((state_15565[(4)]))){
var statearr_15676_17112 = state_15565;
(statearr_15676_17112[(1)] = cljs.core.first((state_15565[(4)])));

} else {
throw ex__14424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17113 = state_15565;
state_15565 = G__17113;
continue;
} else {
return ret_value__14422__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14421__auto__ = function(state_15565){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14421__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14421__auto____1.call(this,state_15565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14421__auto____0;
cljs$core$async$mult_$_state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14421__auto____1;
return cljs$core$async$mult_$_state_machine__14421__auto__;
})()
})();
var state__14553__auto__ = (function (){var statearr_15677 = f__14552__auto__();
(statearr_15677[(6)] = c__14551__auto___17048);

return statearr_15677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14553__auto__);
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
var G__15681 = arguments.length;
switch (G__15681) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_17115 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17115(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17116 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17116(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17117 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5374__auto__.call(null,m));
} else {
var m__5372__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5372__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17117(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17118 = (function (m,state_map){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5374__auto__.call(null,m,state_map));
} else {
var m__5372__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5372__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_17118(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17119 = (function (m,mode){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5374__auto__.call(null,m,mode));
} else {
var m__5372__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5372__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17119(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___17120 = arguments.length;
var i__5750__auto___17121 = (0);
while(true){
if((i__5750__auto___17121 < len__5749__auto___17120)){
args__5755__auto__.push((arguments[i__5750__auto___17121]));

var G__17122 = (i__5750__auto___17121 + (1));
i__5750__auto___17121 = G__17122;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15694){
var map__15695 = p__15694;
var map__15695__$1 = cljs.core.__destructure_map(map__15695);
var opts = map__15695__$1;
var statearr_15696_17126 = state;
(statearr_15696_17126[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15697_17127 = state;
(statearr_15697_17127[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_15698_17128 = state;
(statearr_15698_17128[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15689){
var G__15690 = cljs.core.first(seq15689);
var seq15689__$1 = cljs.core.next(seq15689);
var G__15691 = cljs.core.first(seq15689__$1);
var seq15689__$2 = cljs.core.next(seq15689__$1);
var G__15692 = cljs.core.first(seq15689__$2);
var seq15689__$3 = cljs.core.next(seq15689__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15690,G__15691,G__15692,seq15689__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15701 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15702){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15702 = meta15702;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15703,meta15702__$1){
var self__ = this;
var _15703__$1 = this;
return (new cljs.core.async.t_cljs$core$async15701(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15702__$1));
}));

(cljs.core.async.t_cljs$core$async15701.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15703){
var self__ = this;
var _15703__$1 = this;
return self__.meta15702;
}));

(cljs.core.async.t_cljs$core$async15701.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15701.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15701.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15701.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15701.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15701.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15701.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15701.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15701.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15702","meta15702",-1400255085,null)], null);
}));

(cljs.core.async.t_cljs$core$async15701.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15701.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15701");

(cljs.core.async.t_cljs$core$async15701.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async15701");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15701.
 */
cljs.core.async.__GT_t_cljs$core$async15701 = (function cljs$core$async$__GT_t_cljs$core$async15701(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15702){
return (new cljs.core.async.t_cljs$core$async15701(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15702));
});


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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async15701(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14551__auto___17133 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14552__auto__ = (function (){var switch__14420__auto__ = (function (state_15774){
var state_val_15775 = (state_15774[(1)]);
if((state_val_15775 === (7))){
var inst_15734 = (state_15774[(2)]);
var state_15774__$1 = state_15774;
if(cljs.core.truth_(inst_15734)){
var statearr_15780_17134 = state_15774__$1;
(statearr_15780_17134[(1)] = (8));

} else {
var statearr_15781_17135 = state_15774__$1;
(statearr_15781_17135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15775 === (20))){
var inst_15727 = (state_15774[(7)]);
var state_15774__$1 = state_15774;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15774__$1,(23),out,inst_15727);
} else {
if((state_val_15775 === (1))){
var inst_15710 = calc_state();
var inst_15711 = cljs.core.__destructure_map(inst_15710);
var inst_15712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15711,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15711,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15711,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15715 = inst_15710;
var state_15774__$1 = (function (){var statearr_15790 = state_15774;
(statearr_15790[(8)] = inst_15712);

(statearr_15790[(9)] = inst_15713);

(statearr_15790[(10)] = inst_15714);

(statearr_15790[(11)] = inst_15715);

return statearr_15790;
})();
var statearr_15791_17136 = state_15774__$1;
(statearr_15791_17136[(2)] = null);

(statearr_15791_17136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15775 === (24))){
var inst_15718 = (state_15774[(12)]);
var inst_15715 = inst_15718;
var state_15774__$1 = (function (){var statearr_15794 = state_15774;
(statearr_15794[(11)] = inst_15715);

return statearr_15794;
})();
var statearr_15795_17137 = state_15774__$1;
(statearr_15795_17137[(2)] = null);

(statearr_15795_17137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15775 === (4))){
var inst_15727 = (state_15774[(7)]);
var inst_15729 = (state_15774[(13)]);
var inst_15726 = (state_15774[(2)]);
var inst_15727__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15726,(0),null);
var inst_15728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15726,(1),null);
var inst_15729__$1 = (inst_15727__$1 == null);
var state_15774__$1 = (function (){var statearr_15796 = state_15774;
(statearr_15796[(7)] = inst_15727__$1);

(statearr_15796[(14)] = inst_15728);

(statearr_15796[(13)] = inst_15729__$1);

return statearr_15796;
})();
if(cljs.core.truth_(inst_15729__$1)){
var statearr_15797_17138 = state_15774__$1;
(statearr_15797_17138[(1)] = (5));

} else {
var statearr_15798_17139 = state_15774__$1;
(statearr_15798_17139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15775 === (15))){
var inst_15719 = (state_15774[(15)]);
var inst_15748 = (state_15774[(16)]);
var inst_15748__$1 = cljs.core.empty_QMARK_(inst_15719);
var state_15774__$1 = (function (){var statearr_15799 = state_15774;
(statearr_15799[(16)] = inst_15748__$1);

return statearr_15799;
})();
if(inst_15748__$1){
var statearr_15800_17140 = state_15774__$1;
(statearr_15800_17140[(1)] = (17));

} else {
var statearr_15801_17141 = state_15774__$1;
(statearr_15801_17141[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15775 === (21))){
var inst_15718 = (state_15774[(12)]);
var inst_15715 = inst_15718;
var state_15774__$1 = (function (){var statearr_15802 = state_15774;
(statearr_15802[(11)] = inst_15715);

return statearr_15802;
})();
var statearr_15803_17142 = state_15774__$1;
(statearr_15803_17142[(2)] = null);

(statearr_15803_17142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15775 === (13))){
var inst_15741 = (state_15774[(2)]);
var inst_15742 = calc_state();
var inst_15715 = inst_15742;
var state_15774__$1 = (function (){var statearr_15804 = state_15774;
(statearr_15804[(17)] = inst_15741);

(statearr_15804[(11)] = inst_15715);

return statearr_15804;
})();
var statearr_15805_17143 = state_15774__$1;
(statearr_15805_17143[(2)] = null);

(statearr_15805_17143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15775 === (22))){
var inst_15768 = (state_15774[(2)]);
var state_15774__$1 = state_15774;
var statearr_15808_17144 = state_15774__$1;
(statearr_15808_17144[(2)] = inst_15768);

(statearr_15808_17144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15775 === (6))){
var inst_15728 = (state_15774[(14)]);
var inst_15732 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15728,change);
var state_15774__$1 = state_15774;
var statearr_15810_17145 = state_15774__$1;
(statearr_15810_17145[(2)] = inst_15732);

(statearr_15810_17145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15775 === (25))){
var state_15774__$1 = state_15774;
var statearr_15811_17146 = state_15774__$1;
(statearr_15811_17146[(2)] = null);

(statearr_15811_17146[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15775 === (17))){
var inst_15720 = (state_15774[(18)]);
var inst_15728 = (state_15774[(14)]);
var inst_15750 = (inst_15720.cljs$core$IFn$_invoke$arity$1 ? inst_15720.cljs$core$IFn$_invoke$arity$1(inst_15728) : inst_15720.call(null,inst_15728));
var inst_15751 = cljs.core.not(inst_15750);
var state_15774__$1 = state_15774;
var statearr_15812_17147 = state_15774__$1;
(statearr_15812_17147[(2)] = inst_15751);

(statearr_15812_17147[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15775 === (3))){
var inst_15772 = (state_15774[(2)]);
var state_15774__$1 = state_15774;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15774__$1,inst_15772);
} else {
if((state_val_15775 === (12))){
var state_15774__$1 = state_15774;
var statearr_15821_17148 = state_15774__$1;
(statearr_15821_17148[(2)] = null);

(statearr_15821_17148[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15775 === (2))){
var inst_15715 = (state_15774[(11)]);
var inst_15718 = (state_15774[(12)]);
var inst_15718__$1 = cljs.core.__destructure_map(inst_15715);
var inst_15719 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15718__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15720 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15718__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15718__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15774__$1 = (function (){var statearr_15822 = state_15774;
(statearr_15822[(12)] = inst_15718__$1);

(statearr_15822[(15)] = inst_15719);

(statearr_15822[(18)] = inst_15720);

return statearr_15822;
})();
return cljs.core.async.ioc_alts_BANG_(state_15774__$1,(4),inst_15721);
} else {
if((state_val_15775 === (23))){
var inst_15759 = (state_15774[(2)]);
var state_15774__$1 = state_15774;
if(cljs.core.truth_(inst_15759)){
var statearr_15826_17149 = state_15774__$1;
(statearr_15826_17149[(1)] = (24));

} else {
var statearr_15827_17150 = state_15774__$1;
(statearr_15827_17150[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15775 === (19))){
var inst_15754 = (state_15774[(2)]);
var state_15774__$1 = state_15774;
var statearr_15830_17151 = state_15774__$1;
(statearr_15830_17151[(2)] = inst_15754);

(statearr_15830_17151[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15775 === (11))){
var inst_15728 = (state_15774[(14)]);
var inst_15738 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15728);
var state_15774__$1 = state_15774;
var statearr_15834_17152 = state_15774__$1;
(statearr_15834_17152[(2)] = inst_15738);

(statearr_15834_17152[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15775 === (9))){
var inst_15719 = (state_15774[(15)]);
var inst_15728 = (state_15774[(14)]);
var inst_15745 = (state_15774[(19)]);
var inst_15745__$1 = (inst_15719.cljs$core$IFn$_invoke$arity$1 ? inst_15719.cljs$core$IFn$_invoke$arity$1(inst_15728) : inst_15719.call(null,inst_15728));
var state_15774__$1 = (function (){var statearr_15835 = state_15774;
(statearr_15835[(19)] = inst_15745__$1);

return statearr_15835;
})();
if(cljs.core.truth_(inst_15745__$1)){
var statearr_15836_17153 = state_15774__$1;
(statearr_15836_17153[(1)] = (14));

} else {
var statearr_15837_17154 = state_15774__$1;
(statearr_15837_17154[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15775 === (5))){
var inst_15729 = (state_15774[(13)]);
var state_15774__$1 = state_15774;
var statearr_15841_17155 = state_15774__$1;
(statearr_15841_17155[(2)] = inst_15729);

(statearr_15841_17155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15775 === (14))){
var inst_15745 = (state_15774[(19)]);
var state_15774__$1 = state_15774;
var statearr_15843_17156 = state_15774__$1;
(statearr_15843_17156[(2)] = inst_15745);

(statearr_15843_17156[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15775 === (26))){
var inst_15764 = (state_15774[(2)]);
var state_15774__$1 = state_15774;
var statearr_15845_17157 = state_15774__$1;
(statearr_15845_17157[(2)] = inst_15764);

(statearr_15845_17157[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15775 === (16))){
var inst_15756 = (state_15774[(2)]);
var state_15774__$1 = state_15774;
if(cljs.core.truth_(inst_15756)){
var statearr_15848_17158 = state_15774__$1;
(statearr_15848_17158[(1)] = (20));

} else {
var statearr_15851_17159 = state_15774__$1;
(statearr_15851_17159[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15775 === (10))){
var inst_15770 = (state_15774[(2)]);
var state_15774__$1 = state_15774;
var statearr_15852_17160 = state_15774__$1;
(statearr_15852_17160[(2)] = inst_15770);

(statearr_15852_17160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15775 === (18))){
var inst_15748 = (state_15774[(16)]);
var state_15774__$1 = state_15774;
var statearr_15856_17161 = state_15774__$1;
(statearr_15856_17161[(2)] = inst_15748);

(statearr_15856_17161[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15775 === (8))){
var inst_15727 = (state_15774[(7)]);
var inst_15736 = (inst_15727 == null);
var state_15774__$1 = state_15774;
if(cljs.core.truth_(inst_15736)){
var statearr_15859_17162 = state_15774__$1;
(statearr_15859_17162[(1)] = (11));

} else {
var statearr_15860_17163 = state_15774__$1;
(statearr_15860_17163[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__14421__auto__ = null;
var cljs$core$async$mix_$_state_machine__14421__auto____0 = (function (){
var statearr_15862 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15862[(0)] = cljs$core$async$mix_$_state_machine__14421__auto__);

(statearr_15862[(1)] = (1));

return statearr_15862;
});
var cljs$core$async$mix_$_state_machine__14421__auto____1 = (function (state_15774){
while(true){
var ret_value__14422__auto__ = (function (){try{while(true){
var result__14423__auto__ = switch__14420__auto__(state_15774);
if(cljs.core.keyword_identical_QMARK_(result__14423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14423__auto__;
}
break;
}
}catch (e15864){var ex__14424__auto__ = e15864;
var statearr_15865_17168 = state_15774;
(statearr_15865_17168[(2)] = ex__14424__auto__);


if(cljs.core.seq((state_15774[(4)]))){
var statearr_15866_17169 = state_15774;
(statearr_15866_17169[(1)] = cljs.core.first((state_15774[(4)])));

} else {
throw ex__14424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17170 = state_15774;
state_15774 = G__17170;
continue;
} else {
return ret_value__14422__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14421__auto__ = function(state_15774){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14421__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14421__auto____1.call(this,state_15774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14421__auto____0;
cljs$core$async$mix_$_state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14421__auto____1;
return cljs$core$async$mix_$_state_machine__14421__auto__;
})()
})();
var state__14553__auto__ = (function (){var statearr_15867 = f__14552__auto__();
(statearr_15867[(6)] = c__14551__auto___17133);

return statearr_15867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14553__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_17171 = (function (p,v,ch,close_QMARK_){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5374__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5372__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5372__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_17171(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17172 = (function (p,v,ch){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5374__auto__.call(null,p,v,ch));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5372__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_17172(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_17173 = (function() {
var G__17174 = null;
var G__17174__1 = (function (p){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5374__auto__.call(null,p));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5372__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__17174__2 = (function (p,v){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5374__auto__.call(null,p,v));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5372__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__17174 = function(p,v){
switch(arguments.length){
case 1:
return G__17174__1.call(this,p);
case 2:
return G__17174__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17174.cljs$core$IFn$_invoke$arity$1 = G__17174__1;
G__17174.cljs$core$IFn$_invoke$arity$2 = G__17174__2;
return G__17174;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15877 = arguments.length;
switch (G__15877) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17173(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17173(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15895 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15896){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15896 = meta15896;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15897,meta15896__$1){
var self__ = this;
var _15897__$1 = this;
return (new cljs.core.async.t_cljs$core$async15895(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15896__$1));
}));

(cljs.core.async.t_cljs$core$async15895.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15897){
var self__ = this;
var _15897__$1 = this;
return self__.meta15896;
}));

(cljs.core.async.t_cljs$core$async15895.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15895.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15895.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15895.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async15895.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async15895.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async15895.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async15895.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15896","meta15896",42084426,null)], null);
}));

(cljs.core.async.t_cljs$core$async15895.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15895.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15895");

(cljs.core.async.t_cljs$core$async15895.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async15895");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15895.
 */
cljs.core.async.__GT_t_cljs$core$async15895 = (function cljs$core$async$__GT_t_cljs$core$async15895(ch,topic_fn,buf_fn,mults,ensure_mult,meta15896){
return (new cljs.core.async.t_cljs$core$async15895(ch,topic_fn,buf_fn,mults,ensure_mult,meta15896));
});


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
var G__15882 = arguments.length;
switch (G__15882) {
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
var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__15880_SHARP_){
if(cljs.core.truth_((p1__15880_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15880_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15880_SHARP_.call(null,topic)))){
return p1__15880_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15880_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async15895(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14551__auto___17180 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14552__auto__ = (function (){var switch__14420__auto__ = (function (state_15981){
var state_val_15982 = (state_15981[(1)]);
if((state_val_15982 === (7))){
var inst_15977 = (state_15981[(2)]);
var state_15981__$1 = state_15981;
var statearr_15983_17181 = state_15981__$1;
(statearr_15983_17181[(2)] = inst_15977);

(statearr_15983_17181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15982 === (20))){
var state_15981__$1 = state_15981;
var statearr_15984_17182 = state_15981__$1;
(statearr_15984_17182[(2)] = null);

(statearr_15984_17182[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15982 === (1))){
var state_15981__$1 = state_15981;
var statearr_15993_17183 = state_15981__$1;
(statearr_15993_17183[(2)] = null);

(statearr_15993_17183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15982 === (24))){
var inst_15960 = (state_15981[(7)]);
var inst_15969 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15960);
var state_15981__$1 = state_15981;
var statearr_15998_17184 = state_15981__$1;
(statearr_15998_17184[(2)] = inst_15969);

(statearr_15998_17184[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15982 === (4))){
var inst_15911 = (state_15981[(8)]);
var inst_15911__$1 = (state_15981[(2)]);
var inst_15913 = (inst_15911__$1 == null);
var state_15981__$1 = (function (){var statearr_15999 = state_15981;
(statearr_15999[(8)] = inst_15911__$1);

return statearr_15999;
})();
if(cljs.core.truth_(inst_15913)){
var statearr_16000_17185 = state_15981__$1;
(statearr_16000_17185[(1)] = (5));

} else {
var statearr_16001_17186 = state_15981__$1;
(statearr_16001_17186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15982 === (15))){
var inst_15954 = (state_15981[(2)]);
var state_15981__$1 = state_15981;
var statearr_16002_17187 = state_15981__$1;
(statearr_16002_17187[(2)] = inst_15954);

(statearr_16002_17187[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15982 === (21))){
var inst_15974 = (state_15981[(2)]);
var state_15981__$1 = (function (){var statearr_16003 = state_15981;
(statearr_16003[(9)] = inst_15974);

return statearr_16003;
})();
var statearr_16004_17188 = state_15981__$1;
(statearr_16004_17188[(2)] = null);

(statearr_16004_17188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15982 === (13))){
var inst_15936 = (state_15981[(10)]);
var inst_15938 = cljs.core.chunked_seq_QMARK_(inst_15936);
var state_15981__$1 = state_15981;
if(inst_15938){
var statearr_16005_17189 = state_15981__$1;
(statearr_16005_17189[(1)] = (16));

} else {
var statearr_16006_17190 = state_15981__$1;
(statearr_16006_17190[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15982 === (22))){
var inst_15966 = (state_15981[(2)]);
var state_15981__$1 = state_15981;
if(cljs.core.truth_(inst_15966)){
var statearr_16008_17191 = state_15981__$1;
(statearr_16008_17191[(1)] = (23));

} else {
var statearr_16009_17192 = state_15981__$1;
(statearr_16009_17192[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15982 === (6))){
var inst_15911 = (state_15981[(8)]);
var inst_15960 = (state_15981[(7)]);
var inst_15962 = (state_15981[(11)]);
var inst_15960__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15911) : topic_fn.call(null,inst_15911));
var inst_15961 = cljs.core.deref(mults);
var inst_15962__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15961,inst_15960__$1);
var state_15981__$1 = (function (){var statearr_16010 = state_15981;
(statearr_16010[(7)] = inst_15960__$1);

(statearr_16010[(11)] = inst_15962__$1);

return statearr_16010;
})();
if(cljs.core.truth_(inst_15962__$1)){
var statearr_16011_17193 = state_15981__$1;
(statearr_16011_17193[(1)] = (19));

} else {
var statearr_16012_17194 = state_15981__$1;
(statearr_16012_17194[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15982 === (25))){
var inst_15971 = (state_15981[(2)]);
var state_15981__$1 = state_15981;
var statearr_16013_17195 = state_15981__$1;
(statearr_16013_17195[(2)] = inst_15971);

(statearr_16013_17195[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15982 === (17))){
var inst_15936 = (state_15981[(10)]);
var inst_15945 = cljs.core.first(inst_15936);
var inst_15946 = cljs.core.async.muxch_STAR_(inst_15945);
var inst_15947 = cljs.core.async.close_BANG_(inst_15946);
var inst_15948 = cljs.core.next(inst_15936);
var inst_15922 = inst_15948;
var inst_15923 = null;
var inst_15924 = (0);
var inst_15925 = (0);
var state_15981__$1 = (function (){var statearr_16014 = state_15981;
(statearr_16014[(12)] = inst_15947);

(statearr_16014[(13)] = inst_15922);

(statearr_16014[(14)] = inst_15923);

(statearr_16014[(15)] = inst_15924);

(statearr_16014[(16)] = inst_15925);

return statearr_16014;
})();
var statearr_16017_17196 = state_15981__$1;
(statearr_16017_17196[(2)] = null);

(statearr_16017_17196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15982 === (3))){
var inst_15979 = (state_15981[(2)]);
var state_15981__$1 = state_15981;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15981__$1,inst_15979);
} else {
if((state_val_15982 === (12))){
var inst_15956 = (state_15981[(2)]);
var state_15981__$1 = state_15981;
var statearr_16021_17197 = state_15981__$1;
(statearr_16021_17197[(2)] = inst_15956);

(statearr_16021_17197[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15982 === (2))){
var state_15981__$1 = state_15981;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15981__$1,(4),ch);
} else {
if((state_val_15982 === (23))){
var state_15981__$1 = state_15981;
var statearr_16025_17198 = state_15981__$1;
(statearr_16025_17198[(2)] = null);

(statearr_16025_17198[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15982 === (19))){
var inst_15962 = (state_15981[(11)]);
var inst_15911 = (state_15981[(8)]);
var inst_15964 = cljs.core.async.muxch_STAR_(inst_15962);
var state_15981__$1 = state_15981;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15981__$1,(22),inst_15964,inst_15911);
} else {
if((state_val_15982 === (11))){
var inst_15922 = (state_15981[(13)]);
var inst_15936 = (state_15981[(10)]);
var inst_15936__$1 = cljs.core.seq(inst_15922);
var state_15981__$1 = (function (){var statearr_16029 = state_15981;
(statearr_16029[(10)] = inst_15936__$1);

return statearr_16029;
})();
if(inst_15936__$1){
var statearr_16032_17199 = state_15981__$1;
(statearr_16032_17199[(1)] = (13));

} else {
var statearr_16034_17200 = state_15981__$1;
(statearr_16034_17200[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15982 === (9))){
var inst_15958 = (state_15981[(2)]);
var state_15981__$1 = state_15981;
var statearr_16035_17201 = state_15981__$1;
(statearr_16035_17201[(2)] = inst_15958);

(statearr_16035_17201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15982 === (5))){
var inst_15919 = cljs.core.deref(mults);
var inst_15920 = cljs.core.vals(inst_15919);
var inst_15921 = cljs.core.seq(inst_15920);
var inst_15922 = inst_15921;
var inst_15923 = null;
var inst_15924 = (0);
var inst_15925 = (0);
var state_15981__$1 = (function (){var statearr_16037 = state_15981;
(statearr_16037[(13)] = inst_15922);

(statearr_16037[(14)] = inst_15923);

(statearr_16037[(15)] = inst_15924);

(statearr_16037[(16)] = inst_15925);

return statearr_16037;
})();
var statearr_16038_17202 = state_15981__$1;
(statearr_16038_17202[(2)] = null);

(statearr_16038_17202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15982 === (14))){
var state_15981__$1 = state_15981;
var statearr_16042_17206 = state_15981__$1;
(statearr_16042_17206[(2)] = null);

(statearr_16042_17206[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15982 === (16))){
var inst_15936 = (state_15981[(10)]);
var inst_15940 = cljs.core.chunk_first(inst_15936);
var inst_15941 = cljs.core.chunk_rest(inst_15936);
var inst_15942 = cljs.core.count(inst_15940);
var inst_15922 = inst_15941;
var inst_15923 = inst_15940;
var inst_15924 = inst_15942;
var inst_15925 = (0);
var state_15981__$1 = (function (){var statearr_16045 = state_15981;
(statearr_16045[(13)] = inst_15922);

(statearr_16045[(14)] = inst_15923);

(statearr_16045[(15)] = inst_15924);

(statearr_16045[(16)] = inst_15925);

return statearr_16045;
})();
var statearr_16048_17207 = state_15981__$1;
(statearr_16048_17207[(2)] = null);

(statearr_16048_17207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15982 === (10))){
var inst_15923 = (state_15981[(14)]);
var inst_15925 = (state_15981[(16)]);
var inst_15922 = (state_15981[(13)]);
var inst_15924 = (state_15981[(15)]);
var inst_15930 = cljs.core._nth(inst_15923,inst_15925);
var inst_15931 = cljs.core.async.muxch_STAR_(inst_15930);
var inst_15932 = cljs.core.async.close_BANG_(inst_15931);
var inst_15933 = (inst_15925 + (1));
var tmp16039 = inst_15923;
var tmp16040 = inst_15922;
var tmp16041 = inst_15924;
var inst_15922__$1 = tmp16040;
var inst_15923__$1 = tmp16039;
var inst_15924__$1 = tmp16041;
var inst_15925__$1 = inst_15933;
var state_15981__$1 = (function (){var statearr_16051 = state_15981;
(statearr_16051[(17)] = inst_15932);

(statearr_16051[(13)] = inst_15922__$1);

(statearr_16051[(14)] = inst_15923__$1);

(statearr_16051[(15)] = inst_15924__$1);

(statearr_16051[(16)] = inst_15925__$1);

return statearr_16051;
})();
var statearr_16052_17208 = state_15981__$1;
(statearr_16052_17208[(2)] = null);

(statearr_16052_17208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15982 === (18))){
var inst_15951 = (state_15981[(2)]);
var state_15981__$1 = state_15981;
var statearr_16056_17209 = state_15981__$1;
(statearr_16056_17209[(2)] = inst_15951);

(statearr_16056_17209[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15982 === (8))){
var inst_15925 = (state_15981[(16)]);
var inst_15924 = (state_15981[(15)]);
var inst_15927 = (inst_15925 < inst_15924);
var inst_15928 = inst_15927;
var state_15981__$1 = state_15981;
if(cljs.core.truth_(inst_15928)){
var statearr_16060_17210 = state_15981__$1;
(statearr_16060_17210[(1)] = (10));

} else {
var statearr_16062_17211 = state_15981__$1;
(statearr_16062_17211[(1)] = (11));

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
var cljs$core$async$state_machine__14421__auto__ = null;
var cljs$core$async$state_machine__14421__auto____0 = (function (){
var statearr_16063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16063[(0)] = cljs$core$async$state_machine__14421__auto__);

(statearr_16063[(1)] = (1));

return statearr_16063;
});
var cljs$core$async$state_machine__14421__auto____1 = (function (state_15981){
while(true){
var ret_value__14422__auto__ = (function (){try{while(true){
var result__14423__auto__ = switch__14420__auto__(state_15981);
if(cljs.core.keyword_identical_QMARK_(result__14423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14423__auto__;
}
break;
}
}catch (e16064){var ex__14424__auto__ = e16064;
var statearr_16065_17212 = state_15981;
(statearr_16065_17212[(2)] = ex__14424__auto__);


if(cljs.core.seq((state_15981[(4)]))){
var statearr_16067_17213 = state_15981;
(statearr_16067_17213[(1)] = cljs.core.first((state_15981[(4)])));

} else {
throw ex__14424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17214 = state_15981;
state_15981 = G__17214;
continue;
} else {
return ret_value__14422__auto__;
}
break;
}
});
cljs$core$async$state_machine__14421__auto__ = function(state_15981){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14421__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14421__auto____1.call(this,state_15981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14421__auto____0;
cljs$core$async$state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14421__auto____1;
return cljs$core$async$state_machine__14421__auto__;
})()
})();
var state__14553__auto__ = (function (){var statearr_16071 = f__14552__auto__();
(statearr_16071[(6)] = c__14551__auto___17180);

return statearr_16071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14553__auto__);
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
var G__16073 = arguments.length;
switch (G__16073) {
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
var G__16077 = arguments.length;
switch (G__16077) {
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
var G__16080 = arguments.length;
switch (G__16080) {
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
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14551__auto___17218 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14552__auto__ = (function (){var switch__14420__auto__ = (function (state_16128){
var state_val_16129 = (state_16128[(1)]);
if((state_val_16129 === (7))){
var state_16128__$1 = state_16128;
var statearr_16130_17219 = state_16128__$1;
(statearr_16130_17219[(2)] = null);

(statearr_16130_17219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16129 === (1))){
var state_16128__$1 = state_16128;
var statearr_16131_17220 = state_16128__$1;
(statearr_16131_17220[(2)] = null);

(statearr_16131_17220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16129 === (4))){
var inst_16087 = (state_16128[(7)]);
var inst_16086 = (state_16128[(8)]);
var inst_16089 = (inst_16087 < inst_16086);
var state_16128__$1 = state_16128;
if(cljs.core.truth_(inst_16089)){
var statearr_16132_17221 = state_16128__$1;
(statearr_16132_17221[(1)] = (6));

} else {
var statearr_16133_17222 = state_16128__$1;
(statearr_16133_17222[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16129 === (15))){
var inst_16114 = (state_16128[(9)]);
var inst_16119 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16114);
var state_16128__$1 = state_16128;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16128__$1,(17),out,inst_16119);
} else {
if((state_val_16129 === (13))){
var inst_16114 = (state_16128[(9)]);
var inst_16114__$1 = (state_16128[(2)]);
var inst_16115 = cljs.core.some(cljs.core.nil_QMARK_,inst_16114__$1);
var state_16128__$1 = (function (){var statearr_16134 = state_16128;
(statearr_16134[(9)] = inst_16114__$1);

return statearr_16134;
})();
if(cljs.core.truth_(inst_16115)){
var statearr_16135_17223 = state_16128__$1;
(statearr_16135_17223[(1)] = (14));

} else {
var statearr_16136_17224 = state_16128__$1;
(statearr_16136_17224[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16129 === (6))){
var state_16128__$1 = state_16128;
var statearr_16138_17225 = state_16128__$1;
(statearr_16138_17225[(2)] = null);

(statearr_16138_17225[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16129 === (17))){
var inst_16121 = (state_16128[(2)]);
var state_16128__$1 = (function (){var statearr_16141 = state_16128;
(statearr_16141[(10)] = inst_16121);

return statearr_16141;
})();
var statearr_16142_17226 = state_16128__$1;
(statearr_16142_17226[(2)] = null);

(statearr_16142_17226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16129 === (3))){
var inst_16126 = (state_16128[(2)]);
var state_16128__$1 = state_16128;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16128__$1,inst_16126);
} else {
if((state_val_16129 === (12))){
var _ = (function (){var statearr_16143 = state_16128;
(statearr_16143[(4)] = cljs.core.rest((state_16128[(4)])));

return statearr_16143;
})();
var state_16128__$1 = state_16128;
var ex16140 = (state_16128__$1[(2)]);
var statearr_16144_17227 = state_16128__$1;
(statearr_16144_17227[(5)] = ex16140);


if((ex16140 instanceof Object)){
var statearr_16147_17228 = state_16128__$1;
(statearr_16147_17228[(1)] = (11));

(statearr_16147_17228[(5)] = null);

} else {
throw ex16140;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16129 === (2))){
var inst_16085 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16086 = cnt;
var inst_16087 = (0);
var state_16128__$1 = (function (){var statearr_16148 = state_16128;
(statearr_16148[(11)] = inst_16085);

(statearr_16148[(8)] = inst_16086);

(statearr_16148[(7)] = inst_16087);

return statearr_16148;
})();
var statearr_16149_17229 = state_16128__$1;
(statearr_16149_17229[(2)] = null);

(statearr_16149_17229[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16129 === (11))){
var inst_16092 = (state_16128[(2)]);
var inst_16093 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16128__$1 = (function (){var statearr_16150 = state_16128;
(statearr_16150[(12)] = inst_16092);

return statearr_16150;
})();
var statearr_16151_17230 = state_16128__$1;
(statearr_16151_17230[(2)] = inst_16093);

(statearr_16151_17230[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16129 === (9))){
var inst_16087 = (state_16128[(7)]);
var _ = (function (){var statearr_16152 = state_16128;
(statearr_16152[(4)] = cljs.core.cons((12),(state_16128[(4)])));

return statearr_16152;
})();
var inst_16100 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16087) : chs__$1.call(null,inst_16087));
var inst_16101 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16087) : done.call(null,inst_16087));
var inst_16102 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16100,inst_16101);
var ___$1 = (function (){var statearr_16153 = state_16128;
(statearr_16153[(4)] = cljs.core.rest((state_16128[(4)])));

return statearr_16153;
})();
var state_16128__$1 = state_16128;
var statearr_16154_17231 = state_16128__$1;
(statearr_16154_17231[(2)] = inst_16102);

(statearr_16154_17231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16129 === (5))){
var inst_16112 = (state_16128[(2)]);
var state_16128__$1 = (function (){var statearr_16156 = state_16128;
(statearr_16156[(13)] = inst_16112);

return statearr_16156;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16128__$1,(13),dchan);
} else {
if((state_val_16129 === (14))){
var inst_16117 = cljs.core.async.close_BANG_(out);
var state_16128__$1 = state_16128;
var statearr_16158_17232 = state_16128__$1;
(statearr_16158_17232[(2)] = inst_16117);

(statearr_16158_17232[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16129 === (16))){
var inst_16124 = (state_16128[(2)]);
var state_16128__$1 = state_16128;
var statearr_16159_17233 = state_16128__$1;
(statearr_16159_17233[(2)] = inst_16124);

(statearr_16159_17233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16129 === (10))){
var inst_16087 = (state_16128[(7)]);
var inst_16105 = (state_16128[(2)]);
var inst_16106 = (inst_16087 + (1));
var inst_16087__$1 = inst_16106;
var state_16128__$1 = (function (){var statearr_16162 = state_16128;
(statearr_16162[(14)] = inst_16105);

(statearr_16162[(7)] = inst_16087__$1);

return statearr_16162;
})();
var statearr_16163_17234 = state_16128__$1;
(statearr_16163_17234[(2)] = null);

(statearr_16163_17234[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16129 === (8))){
var inst_16110 = (state_16128[(2)]);
var state_16128__$1 = state_16128;
var statearr_16166_17238 = state_16128__$1;
(statearr_16166_17238[(2)] = inst_16110);

(statearr_16166_17238[(1)] = (5));


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
var cljs$core$async$state_machine__14421__auto__ = null;
var cljs$core$async$state_machine__14421__auto____0 = (function (){
var statearr_16167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16167[(0)] = cljs$core$async$state_machine__14421__auto__);

(statearr_16167[(1)] = (1));

return statearr_16167;
});
var cljs$core$async$state_machine__14421__auto____1 = (function (state_16128){
while(true){
var ret_value__14422__auto__ = (function (){try{while(true){
var result__14423__auto__ = switch__14420__auto__(state_16128);
if(cljs.core.keyword_identical_QMARK_(result__14423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14423__auto__;
}
break;
}
}catch (e16168){var ex__14424__auto__ = e16168;
var statearr_16169_17239 = state_16128;
(statearr_16169_17239[(2)] = ex__14424__auto__);


if(cljs.core.seq((state_16128[(4)]))){
var statearr_16170_17240 = state_16128;
(statearr_16170_17240[(1)] = cljs.core.first((state_16128[(4)])));

} else {
throw ex__14424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17241 = state_16128;
state_16128 = G__17241;
continue;
} else {
return ret_value__14422__auto__;
}
break;
}
});
cljs$core$async$state_machine__14421__auto__ = function(state_16128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14421__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14421__auto____1.call(this,state_16128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14421__auto____0;
cljs$core$async$state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14421__auto____1;
return cljs$core$async$state_machine__14421__auto__;
})()
})();
var state__14553__auto__ = (function (){var statearr_16171 = f__14552__auto__();
(statearr_16171[(6)] = c__14551__auto___17218);

return statearr_16171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14553__auto__);
}));

}

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
var G__16175 = arguments.length;
switch (G__16175) {
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
var c__14551__auto___17243 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14552__auto__ = (function (){var switch__14420__auto__ = (function (state_16209){
var state_val_16210 = (state_16209[(1)]);
if((state_val_16210 === (7))){
var inst_16188 = (state_16209[(7)]);
var inst_16189 = (state_16209[(8)]);
var inst_16188__$1 = (state_16209[(2)]);
var inst_16189__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16188__$1,(0),null);
var inst_16190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16188__$1,(1),null);
var inst_16191 = (inst_16189__$1 == null);
var state_16209__$1 = (function (){var statearr_16213 = state_16209;
(statearr_16213[(7)] = inst_16188__$1);

(statearr_16213[(8)] = inst_16189__$1);

(statearr_16213[(9)] = inst_16190);

return statearr_16213;
})();
if(cljs.core.truth_(inst_16191)){
var statearr_16214_17244 = state_16209__$1;
(statearr_16214_17244[(1)] = (8));

} else {
var statearr_16215_17245 = state_16209__$1;
(statearr_16215_17245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16210 === (1))){
var inst_16178 = cljs.core.vec(chs);
var inst_16179 = inst_16178;
var state_16209__$1 = (function (){var statearr_16216 = state_16209;
(statearr_16216[(10)] = inst_16179);

return statearr_16216;
})();
var statearr_16217_17246 = state_16209__$1;
(statearr_16217_17246[(2)] = null);

(statearr_16217_17246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16210 === (4))){
var inst_16179 = (state_16209[(10)]);
var state_16209__$1 = state_16209;
return cljs.core.async.ioc_alts_BANG_(state_16209__$1,(7),inst_16179);
} else {
if((state_val_16210 === (6))){
var inst_16205 = (state_16209[(2)]);
var state_16209__$1 = state_16209;
var statearr_16218_17247 = state_16209__$1;
(statearr_16218_17247[(2)] = inst_16205);

(statearr_16218_17247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16210 === (3))){
var inst_16207 = (state_16209[(2)]);
var state_16209__$1 = state_16209;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16209__$1,inst_16207);
} else {
if((state_val_16210 === (2))){
var inst_16179 = (state_16209[(10)]);
var inst_16181 = cljs.core.count(inst_16179);
var inst_16182 = (inst_16181 > (0));
var state_16209__$1 = state_16209;
if(cljs.core.truth_(inst_16182)){
var statearr_16221_17248 = state_16209__$1;
(statearr_16221_17248[(1)] = (4));

} else {
var statearr_16222_17249 = state_16209__$1;
(statearr_16222_17249[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16210 === (11))){
var inst_16179 = (state_16209[(10)]);
var inst_16198 = (state_16209[(2)]);
var tmp16219 = inst_16179;
var inst_16179__$1 = tmp16219;
var state_16209__$1 = (function (){var statearr_16223 = state_16209;
(statearr_16223[(11)] = inst_16198);

(statearr_16223[(10)] = inst_16179__$1);

return statearr_16223;
})();
var statearr_16224_17250 = state_16209__$1;
(statearr_16224_17250[(2)] = null);

(statearr_16224_17250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16210 === (9))){
var inst_16189 = (state_16209[(8)]);
var state_16209__$1 = state_16209;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16209__$1,(11),out,inst_16189);
} else {
if((state_val_16210 === (5))){
var inst_16203 = cljs.core.async.close_BANG_(out);
var state_16209__$1 = state_16209;
var statearr_16230_17251 = state_16209__$1;
(statearr_16230_17251[(2)] = inst_16203);

(statearr_16230_17251[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16210 === (10))){
var inst_16201 = (state_16209[(2)]);
var state_16209__$1 = state_16209;
var statearr_16232_17252 = state_16209__$1;
(statearr_16232_17252[(2)] = inst_16201);

(statearr_16232_17252[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16210 === (8))){
var inst_16179 = (state_16209[(10)]);
var inst_16188 = (state_16209[(7)]);
var inst_16189 = (state_16209[(8)]);
var inst_16190 = (state_16209[(9)]);
var inst_16193 = (function (){var cs = inst_16179;
var vec__16184 = inst_16188;
var v = inst_16189;
var c = inst_16190;
return (function (p1__16173_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16173_SHARP_);
});
})();
var inst_16194 = cljs.core.filterv(inst_16193,inst_16179);
var inst_16179__$1 = inst_16194;
var state_16209__$1 = (function (){var statearr_16237 = state_16209;
(statearr_16237[(10)] = inst_16179__$1);

return statearr_16237;
})();
var statearr_16239_17253 = state_16209__$1;
(statearr_16239_17253[(2)] = null);

(statearr_16239_17253[(1)] = (2));


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
var cljs$core$async$state_machine__14421__auto__ = null;
var cljs$core$async$state_machine__14421__auto____0 = (function (){
var statearr_16240 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16240[(0)] = cljs$core$async$state_machine__14421__auto__);

(statearr_16240[(1)] = (1));

return statearr_16240;
});
var cljs$core$async$state_machine__14421__auto____1 = (function (state_16209){
while(true){
var ret_value__14422__auto__ = (function (){try{while(true){
var result__14423__auto__ = switch__14420__auto__(state_16209);
if(cljs.core.keyword_identical_QMARK_(result__14423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14423__auto__;
}
break;
}
}catch (e16241){var ex__14424__auto__ = e16241;
var statearr_16243_17254 = state_16209;
(statearr_16243_17254[(2)] = ex__14424__auto__);


if(cljs.core.seq((state_16209[(4)]))){
var statearr_16244_17255 = state_16209;
(statearr_16244_17255[(1)] = cljs.core.first((state_16209[(4)])));

} else {
throw ex__14424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17256 = state_16209;
state_16209 = G__17256;
continue;
} else {
return ret_value__14422__auto__;
}
break;
}
});
cljs$core$async$state_machine__14421__auto__ = function(state_16209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14421__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14421__auto____1.call(this,state_16209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14421__auto____0;
cljs$core$async$state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14421__auto____1;
return cljs$core$async$state_machine__14421__auto__;
})()
})();
var state__14553__auto__ = (function (){var statearr_16250 = f__14552__auto__();
(statearr_16250[(6)] = c__14551__auto___17243);

return statearr_16250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14553__auto__);
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
var G__16257 = arguments.length;
switch (G__16257) {
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
var c__14551__auto___17258 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14552__auto__ = (function (){var switch__14420__auto__ = (function (state_16288){
var state_val_16289 = (state_16288[(1)]);
if((state_val_16289 === (7))){
var inst_16269 = (state_16288[(7)]);
var inst_16269__$1 = (state_16288[(2)]);
var inst_16270 = (inst_16269__$1 == null);
var inst_16271 = cljs.core.not(inst_16270);
var state_16288__$1 = (function (){var statearr_16294 = state_16288;
(statearr_16294[(7)] = inst_16269__$1);

return statearr_16294;
})();
if(inst_16271){
var statearr_16295_17259 = state_16288__$1;
(statearr_16295_17259[(1)] = (8));

} else {
var statearr_16296_17260 = state_16288__$1;
(statearr_16296_17260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16289 === (1))){
var inst_16262 = (0);
var state_16288__$1 = (function (){var statearr_16297 = state_16288;
(statearr_16297[(8)] = inst_16262);

return statearr_16297;
})();
var statearr_16298_17261 = state_16288__$1;
(statearr_16298_17261[(2)] = null);

(statearr_16298_17261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16289 === (4))){
var state_16288__$1 = state_16288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16288__$1,(7),ch);
} else {
if((state_val_16289 === (6))){
var inst_16282 = (state_16288[(2)]);
var state_16288__$1 = state_16288;
var statearr_16299_17262 = state_16288__$1;
(statearr_16299_17262[(2)] = inst_16282);

(statearr_16299_17262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16289 === (3))){
var inst_16284 = (state_16288[(2)]);
var inst_16285 = cljs.core.async.close_BANG_(out);
var state_16288__$1 = (function (){var statearr_16300 = state_16288;
(statearr_16300[(9)] = inst_16284);

return statearr_16300;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16288__$1,inst_16285);
} else {
if((state_val_16289 === (2))){
var inst_16262 = (state_16288[(8)]);
var inst_16266 = (inst_16262 < n);
var state_16288__$1 = state_16288;
if(cljs.core.truth_(inst_16266)){
var statearr_16301_17263 = state_16288__$1;
(statearr_16301_17263[(1)] = (4));

} else {
var statearr_16302_17264 = state_16288__$1;
(statearr_16302_17264[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16289 === (11))){
var inst_16262 = (state_16288[(8)]);
var inst_16274 = (state_16288[(2)]);
var inst_16275 = (inst_16262 + (1));
var inst_16262__$1 = inst_16275;
var state_16288__$1 = (function (){var statearr_16303 = state_16288;
(statearr_16303[(10)] = inst_16274);

(statearr_16303[(8)] = inst_16262__$1);

return statearr_16303;
})();
var statearr_16304_17265 = state_16288__$1;
(statearr_16304_17265[(2)] = null);

(statearr_16304_17265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16289 === (9))){
var state_16288__$1 = state_16288;
var statearr_16305_17266 = state_16288__$1;
(statearr_16305_17266[(2)] = null);

(statearr_16305_17266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16289 === (5))){
var state_16288__$1 = state_16288;
var statearr_16306_17267 = state_16288__$1;
(statearr_16306_17267[(2)] = null);

(statearr_16306_17267[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16289 === (10))){
var inst_16279 = (state_16288[(2)]);
var state_16288__$1 = state_16288;
var statearr_16307_17268 = state_16288__$1;
(statearr_16307_17268[(2)] = inst_16279);

(statearr_16307_17268[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16289 === (8))){
var inst_16269 = (state_16288[(7)]);
var state_16288__$1 = state_16288;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16288__$1,(11),out,inst_16269);
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
var cljs$core$async$state_machine__14421__auto__ = null;
var cljs$core$async$state_machine__14421__auto____0 = (function (){
var statearr_16313 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16313[(0)] = cljs$core$async$state_machine__14421__auto__);

(statearr_16313[(1)] = (1));

return statearr_16313;
});
var cljs$core$async$state_machine__14421__auto____1 = (function (state_16288){
while(true){
var ret_value__14422__auto__ = (function (){try{while(true){
var result__14423__auto__ = switch__14420__auto__(state_16288);
if(cljs.core.keyword_identical_QMARK_(result__14423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14423__auto__;
}
break;
}
}catch (e16319){var ex__14424__auto__ = e16319;
var statearr_16320_17272 = state_16288;
(statearr_16320_17272[(2)] = ex__14424__auto__);


if(cljs.core.seq((state_16288[(4)]))){
var statearr_16321_17273 = state_16288;
(statearr_16321_17273[(1)] = cljs.core.first((state_16288[(4)])));

} else {
throw ex__14424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17274 = state_16288;
state_16288 = G__17274;
continue;
} else {
return ret_value__14422__auto__;
}
break;
}
});
cljs$core$async$state_machine__14421__auto__ = function(state_16288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14421__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14421__auto____1.call(this,state_16288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14421__auto____0;
cljs$core$async$state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14421__auto____1;
return cljs$core$async$state_machine__14421__auto__;
})()
})();
var state__14553__auto__ = (function (){var statearr_16325 = f__14552__auto__();
(statearr_16325[(6)] = c__14551__auto___17258);

return statearr_16325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14553__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16345 = (function (f,ch,meta16340,_,fn1,meta16346){
this.f = f;
this.ch = ch;
this.meta16340 = meta16340;
this._ = _;
this.fn1 = fn1;
this.meta16346 = meta16346;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16347,meta16346__$1){
var self__ = this;
var _16347__$1 = this;
return (new cljs.core.async.t_cljs$core$async16345(self__.f,self__.ch,self__.meta16340,self__._,self__.fn1,meta16346__$1));
}));

(cljs.core.async.t_cljs$core$async16345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16347){
var self__ = this;
var _16347__$1 = this;
return self__.meta16346;
}));

(cljs.core.async.t_cljs$core$async16345.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16345.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16345.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16345.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16338_SHARP_){
var G__16348 = (((p1__16338_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16338_SHARP_) : self__.f.call(null,p1__16338_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16348) : f1.call(null,G__16348));
});
}));

(cljs.core.async.t_cljs$core$async16345.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16340","meta16340",910856888,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16339","cljs.core.async/t_cljs$core$async16339",-1218161256,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16346","meta16346",-72753876,null)], null);
}));

(cljs.core.async.t_cljs$core$async16345.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16345.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16345");

(cljs.core.async.t_cljs$core$async16345.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async16345");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16345.
 */
cljs.core.async.__GT_t_cljs$core$async16345 = (function cljs$core$async$__GT_t_cljs$core$async16345(f,ch,meta16340,_,fn1,meta16346){
return (new cljs.core.async.t_cljs$core$async16345(f,ch,meta16340,_,fn1,meta16346));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16339 = (function (f,ch,meta16340){
this.f = f;
this.ch = ch;
this.meta16340 = meta16340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16341,meta16340__$1){
var self__ = this;
var _16341__$1 = this;
return (new cljs.core.async.t_cljs$core$async16339(self__.f,self__.ch,meta16340__$1));
}));

(cljs.core.async.t_cljs$core$async16339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16341){
var self__ = this;
var _16341__$1 = this;
return self__.meta16340;
}));

(cljs.core.async.t_cljs$core$async16339.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16339.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16339.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16339.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16339.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16345(self__.f,self__.ch,self__.meta16340,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16350 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16350) : self__.f.call(null,G__16350));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16339.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16339.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16339.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16340","meta16340",910856888,null)], null);
}));

(cljs.core.async.t_cljs$core$async16339.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16339.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16339");

(cljs.core.async.t_cljs$core$async16339.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async16339");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16339.
 */
cljs.core.async.__GT_t_cljs$core$async16339 = (function cljs$core$async$__GT_t_cljs$core$async16339(f,ch,meta16340){
return (new cljs.core.async.t_cljs$core$async16339(f,ch,meta16340));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16339(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16359 = (function (f,ch,meta16360){
this.f = f;
this.ch = ch;
this.meta16360 = meta16360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16361,meta16360__$1){
var self__ = this;
var _16361__$1 = this;
return (new cljs.core.async.t_cljs$core$async16359(self__.f,self__.ch,meta16360__$1));
}));

(cljs.core.async.t_cljs$core$async16359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16361){
var self__ = this;
var _16361__$1 = this;
return self__.meta16360;
}));

(cljs.core.async.t_cljs$core$async16359.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16359.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16359.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16359.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16359.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16359.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16359.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16360","meta16360",838046320,null)], null);
}));

(cljs.core.async.t_cljs$core$async16359.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16359.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16359");

(cljs.core.async.t_cljs$core$async16359.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async16359");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16359.
 */
cljs.core.async.__GT_t_cljs$core$async16359 = (function cljs$core$async$__GT_t_cljs$core$async16359(f,ch,meta16360){
return (new cljs.core.async.t_cljs$core$async16359(f,ch,meta16360));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16359(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16381 = (function (p,ch,meta16382){
this.p = p;
this.ch = ch;
this.meta16382 = meta16382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16383,meta16382__$1){
var self__ = this;
var _16383__$1 = this;
return (new cljs.core.async.t_cljs$core$async16381(self__.p,self__.ch,meta16382__$1));
}));

(cljs.core.async.t_cljs$core$async16381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16383){
var self__ = this;
var _16383__$1 = this;
return self__.meta16382;
}));

(cljs.core.async.t_cljs$core$async16381.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16381.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16381.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16381.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16381.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16381.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16381.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16381.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16382","meta16382",1469297688,null)], null);
}));

(cljs.core.async.t_cljs$core$async16381.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16381");

(cljs.core.async.t_cljs$core$async16381.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async16381");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16381.
 */
cljs.core.async.__GT_t_cljs$core$async16381 = (function cljs$core$async$__GT_t_cljs$core$async16381(p,ch,meta16382){
return (new cljs.core.async.t_cljs$core$async16381(p,ch,meta16382));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16381(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__16403 = arguments.length;
switch (G__16403) {
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
var c__14551__auto___17281 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14552__auto__ = (function (){var switch__14420__auto__ = (function (state_16424){
var state_val_16425 = (state_16424[(1)]);
if((state_val_16425 === (7))){
var inst_16420 = (state_16424[(2)]);
var state_16424__$1 = state_16424;
var statearr_16426_17282 = state_16424__$1;
(statearr_16426_17282[(2)] = inst_16420);

(statearr_16426_17282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16425 === (1))){
var state_16424__$1 = state_16424;
var statearr_16427_17283 = state_16424__$1;
(statearr_16427_17283[(2)] = null);

(statearr_16427_17283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16425 === (4))){
var inst_16406 = (state_16424[(7)]);
var inst_16406__$1 = (state_16424[(2)]);
var inst_16407 = (inst_16406__$1 == null);
var state_16424__$1 = (function (){var statearr_16428 = state_16424;
(statearr_16428[(7)] = inst_16406__$1);

return statearr_16428;
})();
if(cljs.core.truth_(inst_16407)){
var statearr_16429_17284 = state_16424__$1;
(statearr_16429_17284[(1)] = (5));

} else {
var statearr_16430_17285 = state_16424__$1;
(statearr_16430_17285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16425 === (6))){
var inst_16406 = (state_16424[(7)]);
var inst_16411 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16406) : p.call(null,inst_16406));
var state_16424__$1 = state_16424;
if(cljs.core.truth_(inst_16411)){
var statearr_16431_17289 = state_16424__$1;
(statearr_16431_17289[(1)] = (8));

} else {
var statearr_16432_17290 = state_16424__$1;
(statearr_16432_17290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16425 === (3))){
var inst_16422 = (state_16424[(2)]);
var state_16424__$1 = state_16424;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16424__$1,inst_16422);
} else {
if((state_val_16425 === (2))){
var state_16424__$1 = state_16424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16424__$1,(4),ch);
} else {
if((state_val_16425 === (11))){
var inst_16414 = (state_16424[(2)]);
var state_16424__$1 = state_16424;
var statearr_16433_17291 = state_16424__$1;
(statearr_16433_17291[(2)] = inst_16414);

(statearr_16433_17291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16425 === (9))){
var state_16424__$1 = state_16424;
var statearr_16434_17292 = state_16424__$1;
(statearr_16434_17292[(2)] = null);

(statearr_16434_17292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16425 === (5))){
var inst_16409 = cljs.core.async.close_BANG_(out);
var state_16424__$1 = state_16424;
var statearr_16435_17293 = state_16424__$1;
(statearr_16435_17293[(2)] = inst_16409);

(statearr_16435_17293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16425 === (10))){
var inst_16417 = (state_16424[(2)]);
var state_16424__$1 = (function (){var statearr_16436 = state_16424;
(statearr_16436[(8)] = inst_16417);

return statearr_16436;
})();
var statearr_16437_17294 = state_16424__$1;
(statearr_16437_17294[(2)] = null);

(statearr_16437_17294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16425 === (8))){
var inst_16406 = (state_16424[(7)]);
var state_16424__$1 = state_16424;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16424__$1,(11),out,inst_16406);
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
var cljs$core$async$state_machine__14421__auto__ = null;
var cljs$core$async$state_machine__14421__auto____0 = (function (){
var statearr_16438 = [null,null,null,null,null,null,null,null,null];
(statearr_16438[(0)] = cljs$core$async$state_machine__14421__auto__);

(statearr_16438[(1)] = (1));

return statearr_16438;
});
var cljs$core$async$state_machine__14421__auto____1 = (function (state_16424){
while(true){
var ret_value__14422__auto__ = (function (){try{while(true){
var result__14423__auto__ = switch__14420__auto__(state_16424);
if(cljs.core.keyword_identical_QMARK_(result__14423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14423__auto__;
}
break;
}
}catch (e16439){var ex__14424__auto__ = e16439;
var statearr_16440_17295 = state_16424;
(statearr_16440_17295[(2)] = ex__14424__auto__);


if(cljs.core.seq((state_16424[(4)]))){
var statearr_16441_17296 = state_16424;
(statearr_16441_17296[(1)] = cljs.core.first((state_16424[(4)])));

} else {
throw ex__14424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17297 = state_16424;
state_16424 = G__17297;
continue;
} else {
return ret_value__14422__auto__;
}
break;
}
});
cljs$core$async$state_machine__14421__auto__ = function(state_16424){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14421__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14421__auto____1.call(this,state_16424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14421__auto____0;
cljs$core$async$state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14421__auto____1;
return cljs$core$async$state_machine__14421__auto__;
})()
})();
var state__14553__auto__ = (function (){var statearr_16442 = f__14552__auto__();
(statearr_16442[(6)] = c__14551__auto___17281);

return statearr_16442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14553__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16444 = arguments.length;
switch (G__16444) {
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
var c__14551__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14552__auto__ = (function (){var switch__14420__auto__ = (function (state_16506){
var state_val_16507 = (state_16506[(1)]);
if((state_val_16507 === (7))){
var inst_16502 = (state_16506[(2)]);
var state_16506__$1 = state_16506;
var statearr_16508_17299 = state_16506__$1;
(statearr_16508_17299[(2)] = inst_16502);

(statearr_16508_17299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (20))){
var inst_16472 = (state_16506[(7)]);
var inst_16483 = (state_16506[(2)]);
var inst_16484 = cljs.core.next(inst_16472);
var inst_16458 = inst_16484;
var inst_16459 = null;
var inst_16460 = (0);
var inst_16461 = (0);
var state_16506__$1 = (function (){var statearr_16509 = state_16506;
(statearr_16509[(8)] = inst_16483);

(statearr_16509[(9)] = inst_16458);

(statearr_16509[(10)] = inst_16459);

(statearr_16509[(11)] = inst_16460);

(statearr_16509[(12)] = inst_16461);

return statearr_16509;
})();
var statearr_16510_17303 = state_16506__$1;
(statearr_16510_17303[(2)] = null);

(statearr_16510_17303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (1))){
var state_16506__$1 = state_16506;
var statearr_16511_17304 = state_16506__$1;
(statearr_16511_17304[(2)] = null);

(statearr_16511_17304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (4))){
var inst_16447 = (state_16506[(13)]);
var inst_16447__$1 = (state_16506[(2)]);
var inst_16448 = (inst_16447__$1 == null);
var state_16506__$1 = (function (){var statearr_16512 = state_16506;
(statearr_16512[(13)] = inst_16447__$1);

return statearr_16512;
})();
if(cljs.core.truth_(inst_16448)){
var statearr_16513_17305 = state_16506__$1;
(statearr_16513_17305[(1)] = (5));

} else {
var statearr_16514_17306 = state_16506__$1;
(statearr_16514_17306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (15))){
var state_16506__$1 = state_16506;
var statearr_16520_17307 = state_16506__$1;
(statearr_16520_17307[(2)] = null);

(statearr_16520_17307[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (21))){
var state_16506__$1 = state_16506;
var statearr_16522_17308 = state_16506__$1;
(statearr_16522_17308[(2)] = null);

(statearr_16522_17308[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (13))){
var inst_16461 = (state_16506[(12)]);
var inst_16458 = (state_16506[(9)]);
var inst_16459 = (state_16506[(10)]);
var inst_16460 = (state_16506[(11)]);
var inst_16468 = (state_16506[(2)]);
var inst_16469 = (inst_16461 + (1));
var tmp16515 = inst_16460;
var tmp16516 = inst_16458;
var tmp16517 = inst_16459;
var inst_16458__$1 = tmp16516;
var inst_16459__$1 = tmp16517;
var inst_16460__$1 = tmp16515;
var inst_16461__$1 = inst_16469;
var state_16506__$1 = (function (){var statearr_16523 = state_16506;
(statearr_16523[(14)] = inst_16468);

(statearr_16523[(9)] = inst_16458__$1);

(statearr_16523[(10)] = inst_16459__$1);

(statearr_16523[(11)] = inst_16460__$1);

(statearr_16523[(12)] = inst_16461__$1);

return statearr_16523;
})();
var statearr_16524_17309 = state_16506__$1;
(statearr_16524_17309[(2)] = null);

(statearr_16524_17309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (22))){
var state_16506__$1 = state_16506;
var statearr_16526_17310 = state_16506__$1;
(statearr_16526_17310[(2)] = null);

(statearr_16526_17310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (6))){
var inst_16447 = (state_16506[(13)]);
var inst_16456 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16447) : f.call(null,inst_16447));
var inst_16457 = cljs.core.seq(inst_16456);
var inst_16458 = inst_16457;
var inst_16459 = null;
var inst_16460 = (0);
var inst_16461 = (0);
var state_16506__$1 = (function (){var statearr_16527 = state_16506;
(statearr_16527[(9)] = inst_16458);

(statearr_16527[(10)] = inst_16459);

(statearr_16527[(11)] = inst_16460);

(statearr_16527[(12)] = inst_16461);

return statearr_16527;
})();
var statearr_16528_17311 = state_16506__$1;
(statearr_16528_17311[(2)] = null);

(statearr_16528_17311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (17))){
var inst_16472 = (state_16506[(7)]);
var inst_16476 = cljs.core.chunk_first(inst_16472);
var inst_16477 = cljs.core.chunk_rest(inst_16472);
var inst_16478 = cljs.core.count(inst_16476);
var inst_16458 = inst_16477;
var inst_16459 = inst_16476;
var inst_16460 = inst_16478;
var inst_16461 = (0);
var state_16506__$1 = (function (){var statearr_16529 = state_16506;
(statearr_16529[(9)] = inst_16458);

(statearr_16529[(10)] = inst_16459);

(statearr_16529[(11)] = inst_16460);

(statearr_16529[(12)] = inst_16461);

return statearr_16529;
})();
var statearr_16530_17312 = state_16506__$1;
(statearr_16530_17312[(2)] = null);

(statearr_16530_17312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (3))){
var inst_16504 = (state_16506[(2)]);
var state_16506__$1 = state_16506;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16506__$1,inst_16504);
} else {
if((state_val_16507 === (12))){
var inst_16492 = (state_16506[(2)]);
var state_16506__$1 = state_16506;
var statearr_16533_17316 = state_16506__$1;
(statearr_16533_17316[(2)] = inst_16492);

(statearr_16533_17316[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (2))){
var state_16506__$1 = state_16506;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16506__$1,(4),in$);
} else {
if((state_val_16507 === (23))){
var inst_16500 = (state_16506[(2)]);
var state_16506__$1 = state_16506;
var statearr_16535_17317 = state_16506__$1;
(statearr_16535_17317[(2)] = inst_16500);

(statearr_16535_17317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (19))){
var inst_16487 = (state_16506[(2)]);
var state_16506__$1 = state_16506;
var statearr_16536_17318 = state_16506__$1;
(statearr_16536_17318[(2)] = inst_16487);

(statearr_16536_17318[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (11))){
var inst_16458 = (state_16506[(9)]);
var inst_16472 = (state_16506[(7)]);
var inst_16472__$1 = cljs.core.seq(inst_16458);
var state_16506__$1 = (function (){var statearr_16539 = state_16506;
(statearr_16539[(7)] = inst_16472__$1);

return statearr_16539;
})();
if(inst_16472__$1){
var statearr_16541_17319 = state_16506__$1;
(statearr_16541_17319[(1)] = (14));

} else {
var statearr_16542_17320 = state_16506__$1;
(statearr_16542_17320[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (9))){
var inst_16494 = (state_16506[(2)]);
var inst_16495 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16506__$1 = (function (){var statearr_16543 = state_16506;
(statearr_16543[(15)] = inst_16494);

return statearr_16543;
})();
if(cljs.core.truth_(inst_16495)){
var statearr_16545_17321 = state_16506__$1;
(statearr_16545_17321[(1)] = (21));

} else {
var statearr_16547_17322 = state_16506__$1;
(statearr_16547_17322[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (5))){
var inst_16450 = cljs.core.async.close_BANG_(out);
var state_16506__$1 = state_16506;
var statearr_16548_17323 = state_16506__$1;
(statearr_16548_17323[(2)] = inst_16450);

(statearr_16548_17323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (14))){
var inst_16472 = (state_16506[(7)]);
var inst_16474 = cljs.core.chunked_seq_QMARK_(inst_16472);
var state_16506__$1 = state_16506;
if(inst_16474){
var statearr_16549_17324 = state_16506__$1;
(statearr_16549_17324[(1)] = (17));

} else {
var statearr_16550_17325 = state_16506__$1;
(statearr_16550_17325[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (16))){
var inst_16490 = (state_16506[(2)]);
var state_16506__$1 = state_16506;
var statearr_16551_17329 = state_16506__$1;
(statearr_16551_17329[(2)] = inst_16490);

(statearr_16551_17329[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16507 === (10))){
var inst_16459 = (state_16506[(10)]);
var inst_16461 = (state_16506[(12)]);
var inst_16466 = cljs.core._nth(inst_16459,inst_16461);
var state_16506__$1 = state_16506;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16506__$1,(13),out,inst_16466);
} else {
if((state_val_16507 === (18))){
var inst_16472 = (state_16506[(7)]);
var inst_16481 = cljs.core.first(inst_16472);
var state_16506__$1 = state_16506;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16506__$1,(20),out,inst_16481);
} else {
if((state_val_16507 === (8))){
var inst_16461 = (state_16506[(12)]);
var inst_16460 = (state_16506[(11)]);
var inst_16463 = (inst_16461 < inst_16460);
var inst_16464 = inst_16463;
var state_16506__$1 = state_16506;
if(cljs.core.truth_(inst_16464)){
var statearr_16555_17330 = state_16506__$1;
(statearr_16555_17330[(1)] = (10));

} else {
var statearr_16556_17331 = state_16506__$1;
(statearr_16556_17331[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__14421__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14421__auto____0 = (function (){
var statearr_16557 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16557[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14421__auto__);

(statearr_16557[(1)] = (1));

return statearr_16557;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14421__auto____1 = (function (state_16506){
while(true){
var ret_value__14422__auto__ = (function (){try{while(true){
var result__14423__auto__ = switch__14420__auto__(state_16506);
if(cljs.core.keyword_identical_QMARK_(result__14423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14423__auto__;
}
break;
}
}catch (e16558){var ex__14424__auto__ = e16558;
var statearr_16559_17332 = state_16506;
(statearr_16559_17332[(2)] = ex__14424__auto__);


if(cljs.core.seq((state_16506[(4)]))){
var statearr_16562_17333 = state_16506;
(statearr_16562_17333[(1)] = cljs.core.first((state_16506[(4)])));

} else {
throw ex__14424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17334 = state_16506;
state_16506 = G__17334;
continue;
} else {
return ret_value__14422__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14421__auto__ = function(state_16506){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14421__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14421__auto____1.call(this,state_16506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14421__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14421__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14421__auto__;
})()
})();
var state__14553__auto__ = (function (){var statearr_16565 = f__14552__auto__();
(statearr_16565[(6)] = c__14551__auto__);

return statearr_16565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14553__auto__);
}));

return c__14551__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16568 = arguments.length;
switch (G__16568) {
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
var G__16573 = arguments.length;
switch (G__16573) {
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
var G__16589 = arguments.length;
switch (G__16589) {
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
var c__14551__auto___17342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14552__auto__ = (function (){var switch__14420__auto__ = (function (state_16649){
var state_val_16650 = (state_16649[(1)]);
if((state_val_16650 === (7))){
var inst_16643 = (state_16649[(2)]);
var state_16649__$1 = state_16649;
var statearr_16651_17343 = state_16649__$1;
(statearr_16651_17343[(2)] = inst_16643);

(statearr_16651_17343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16650 === (1))){
var inst_16614 = null;
var state_16649__$1 = (function (){var statearr_16655 = state_16649;
(statearr_16655[(7)] = inst_16614);

return statearr_16655;
})();
var statearr_16657_17344 = state_16649__$1;
(statearr_16657_17344[(2)] = null);

(statearr_16657_17344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16650 === (4))){
var inst_16624 = (state_16649[(8)]);
var inst_16624__$1 = (state_16649[(2)]);
var inst_16629 = (inst_16624__$1 == null);
var inst_16630 = cljs.core.not(inst_16629);
var state_16649__$1 = (function (){var statearr_16658 = state_16649;
(statearr_16658[(8)] = inst_16624__$1);

return statearr_16658;
})();
if(inst_16630){
var statearr_16659_17345 = state_16649__$1;
(statearr_16659_17345[(1)] = (5));

} else {
var statearr_16660_17346 = state_16649__$1;
(statearr_16660_17346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16650 === (6))){
var state_16649__$1 = state_16649;
var statearr_16661_17347 = state_16649__$1;
(statearr_16661_17347[(2)] = null);

(statearr_16661_17347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16650 === (3))){
var inst_16645 = (state_16649[(2)]);
var inst_16646 = cljs.core.async.close_BANG_(out);
var state_16649__$1 = (function (){var statearr_16662 = state_16649;
(statearr_16662[(9)] = inst_16645);

return statearr_16662;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16649__$1,inst_16646);
} else {
if((state_val_16650 === (2))){
var state_16649__$1 = state_16649;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16649__$1,(4),ch);
} else {
if((state_val_16650 === (11))){
var inst_16624 = (state_16649[(8)]);
var inst_16637 = (state_16649[(2)]);
var inst_16614 = inst_16624;
var state_16649__$1 = (function (){var statearr_16664 = state_16649;
(statearr_16664[(10)] = inst_16637);

(statearr_16664[(7)] = inst_16614);

return statearr_16664;
})();
var statearr_16665_17348 = state_16649__$1;
(statearr_16665_17348[(2)] = null);

(statearr_16665_17348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16650 === (9))){
var inst_16624 = (state_16649[(8)]);
var state_16649__$1 = state_16649;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16649__$1,(11),out,inst_16624);
} else {
if((state_val_16650 === (5))){
var inst_16624 = (state_16649[(8)]);
var inst_16614 = (state_16649[(7)]);
var inst_16632 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16624,inst_16614);
var state_16649__$1 = state_16649;
if(inst_16632){
var statearr_16673_17349 = state_16649__$1;
(statearr_16673_17349[(1)] = (8));

} else {
var statearr_16674_17350 = state_16649__$1;
(statearr_16674_17350[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16650 === (10))){
var inst_16640 = (state_16649[(2)]);
var state_16649__$1 = state_16649;
var statearr_16676_17351 = state_16649__$1;
(statearr_16676_17351[(2)] = inst_16640);

(statearr_16676_17351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16650 === (8))){
var inst_16614 = (state_16649[(7)]);
var tmp16670 = inst_16614;
var inst_16614__$1 = tmp16670;
var state_16649__$1 = (function (){var statearr_16678 = state_16649;
(statearr_16678[(7)] = inst_16614__$1);

return statearr_16678;
})();
var statearr_16679_17352 = state_16649__$1;
(statearr_16679_17352[(2)] = null);

(statearr_16679_17352[(1)] = (2));


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
var cljs$core$async$state_machine__14421__auto__ = null;
var cljs$core$async$state_machine__14421__auto____0 = (function (){
var statearr_16680 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16680[(0)] = cljs$core$async$state_machine__14421__auto__);

(statearr_16680[(1)] = (1));

return statearr_16680;
});
var cljs$core$async$state_machine__14421__auto____1 = (function (state_16649){
while(true){
var ret_value__14422__auto__ = (function (){try{while(true){
var result__14423__auto__ = switch__14420__auto__(state_16649);
if(cljs.core.keyword_identical_QMARK_(result__14423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14423__auto__;
}
break;
}
}catch (e16681){var ex__14424__auto__ = e16681;
var statearr_16682_17355 = state_16649;
(statearr_16682_17355[(2)] = ex__14424__auto__);


if(cljs.core.seq((state_16649[(4)]))){
var statearr_16683_17356 = state_16649;
(statearr_16683_17356[(1)] = cljs.core.first((state_16649[(4)])));

} else {
throw ex__14424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17357 = state_16649;
state_16649 = G__17357;
continue;
} else {
return ret_value__14422__auto__;
}
break;
}
});
cljs$core$async$state_machine__14421__auto__ = function(state_16649){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14421__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14421__auto____1.call(this,state_16649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14421__auto____0;
cljs$core$async$state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14421__auto____1;
return cljs$core$async$state_machine__14421__auto__;
})()
})();
var state__14553__auto__ = (function (){var statearr_16687 = f__14552__auto__();
(statearr_16687[(6)] = c__14551__auto___17342);

return statearr_16687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14553__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16690 = arguments.length;
switch (G__16690) {
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
var c__14551__auto___17359 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14552__auto__ = (function (){var switch__14420__auto__ = (function (state_16733){
var state_val_16734 = (state_16733[(1)]);
if((state_val_16734 === (7))){
var inst_16729 = (state_16733[(2)]);
var state_16733__$1 = state_16733;
var statearr_16736_17360 = state_16733__$1;
(statearr_16736_17360[(2)] = inst_16729);

(statearr_16736_17360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (1))){
var inst_16695 = (new Array(n));
var inst_16696 = inst_16695;
var inst_16697 = (0);
var state_16733__$1 = (function (){var statearr_16737 = state_16733;
(statearr_16737[(7)] = inst_16696);

(statearr_16737[(8)] = inst_16697);

return statearr_16737;
})();
var statearr_16738_17362 = state_16733__$1;
(statearr_16738_17362[(2)] = null);

(statearr_16738_17362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (4))){
var inst_16700 = (state_16733[(9)]);
var inst_16700__$1 = (state_16733[(2)]);
var inst_16701 = (inst_16700__$1 == null);
var inst_16702 = cljs.core.not(inst_16701);
var state_16733__$1 = (function (){var statearr_16739 = state_16733;
(statearr_16739[(9)] = inst_16700__$1);

return statearr_16739;
})();
if(inst_16702){
var statearr_16740_17363 = state_16733__$1;
(statearr_16740_17363[(1)] = (5));

} else {
var statearr_16741_17364 = state_16733__$1;
(statearr_16741_17364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (15))){
var inst_16723 = (state_16733[(2)]);
var state_16733__$1 = state_16733;
var statearr_16742_17365 = state_16733__$1;
(statearr_16742_17365[(2)] = inst_16723);

(statearr_16742_17365[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (13))){
var state_16733__$1 = state_16733;
var statearr_16743_17366 = state_16733__$1;
(statearr_16743_17366[(2)] = null);

(statearr_16743_17366[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (6))){
var inst_16697 = (state_16733[(8)]);
var inst_16718 = (inst_16697 > (0));
var state_16733__$1 = state_16733;
if(cljs.core.truth_(inst_16718)){
var statearr_16744_17367 = state_16733__$1;
(statearr_16744_17367[(1)] = (12));

} else {
var statearr_16745_17368 = state_16733__$1;
(statearr_16745_17368[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (3))){
var inst_16731 = (state_16733[(2)]);
var state_16733__$1 = state_16733;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16733__$1,inst_16731);
} else {
if((state_val_16734 === (12))){
var inst_16696 = (state_16733[(7)]);
var inst_16721 = cljs.core.vec(inst_16696);
var state_16733__$1 = state_16733;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16733__$1,(15),out,inst_16721);
} else {
if((state_val_16734 === (2))){
var state_16733__$1 = state_16733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16733__$1,(4),ch);
} else {
if((state_val_16734 === (11))){
var inst_16712 = (state_16733[(2)]);
var inst_16713 = (new Array(n));
var inst_16696 = inst_16713;
var inst_16697 = (0);
var state_16733__$1 = (function (){var statearr_16747 = state_16733;
(statearr_16747[(10)] = inst_16712);

(statearr_16747[(7)] = inst_16696);

(statearr_16747[(8)] = inst_16697);

return statearr_16747;
})();
var statearr_16748_17369 = state_16733__$1;
(statearr_16748_17369[(2)] = null);

(statearr_16748_17369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (9))){
var inst_16696 = (state_16733[(7)]);
var inst_16710 = cljs.core.vec(inst_16696);
var state_16733__$1 = state_16733;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16733__$1,(11),out,inst_16710);
} else {
if((state_val_16734 === (5))){
var inst_16696 = (state_16733[(7)]);
var inst_16697 = (state_16733[(8)]);
var inst_16700 = (state_16733[(9)]);
var inst_16705 = (state_16733[(11)]);
var inst_16704 = (inst_16696[inst_16697] = inst_16700);
var inst_16705__$1 = (inst_16697 + (1));
var inst_16706 = (inst_16705__$1 < n);
var state_16733__$1 = (function (){var statearr_16749 = state_16733;
(statearr_16749[(12)] = inst_16704);

(statearr_16749[(11)] = inst_16705__$1);

return statearr_16749;
})();
if(cljs.core.truth_(inst_16706)){
var statearr_16751_17370 = state_16733__$1;
(statearr_16751_17370[(1)] = (8));

} else {
var statearr_16752_17371 = state_16733__$1;
(statearr_16752_17371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (14))){
var inst_16726 = (state_16733[(2)]);
var inst_16727 = cljs.core.async.close_BANG_(out);
var state_16733__$1 = (function (){var statearr_16755 = state_16733;
(statearr_16755[(13)] = inst_16726);

return statearr_16755;
})();
var statearr_16756_17372 = state_16733__$1;
(statearr_16756_17372[(2)] = inst_16727);

(statearr_16756_17372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (10))){
var inst_16716 = (state_16733[(2)]);
var state_16733__$1 = state_16733;
var statearr_16757_17373 = state_16733__$1;
(statearr_16757_17373[(2)] = inst_16716);

(statearr_16757_17373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (8))){
var inst_16696 = (state_16733[(7)]);
var inst_16705 = (state_16733[(11)]);
var tmp16754 = inst_16696;
var inst_16696__$1 = tmp16754;
var inst_16697 = inst_16705;
var state_16733__$1 = (function (){var statearr_16758 = state_16733;
(statearr_16758[(7)] = inst_16696__$1);

(statearr_16758[(8)] = inst_16697);

return statearr_16758;
})();
var statearr_16759_17374 = state_16733__$1;
(statearr_16759_17374[(2)] = null);

(statearr_16759_17374[(1)] = (2));


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
var cljs$core$async$state_machine__14421__auto__ = null;
var cljs$core$async$state_machine__14421__auto____0 = (function (){
var statearr_16760 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16760[(0)] = cljs$core$async$state_machine__14421__auto__);

(statearr_16760[(1)] = (1));

return statearr_16760;
});
var cljs$core$async$state_machine__14421__auto____1 = (function (state_16733){
while(true){
var ret_value__14422__auto__ = (function (){try{while(true){
var result__14423__auto__ = switch__14420__auto__(state_16733);
if(cljs.core.keyword_identical_QMARK_(result__14423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14423__auto__;
}
break;
}
}catch (e16762){var ex__14424__auto__ = e16762;
var statearr_16763_17375 = state_16733;
(statearr_16763_17375[(2)] = ex__14424__auto__);


if(cljs.core.seq((state_16733[(4)]))){
var statearr_16764_17376 = state_16733;
(statearr_16764_17376[(1)] = cljs.core.first((state_16733[(4)])));

} else {
throw ex__14424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17380 = state_16733;
state_16733 = G__17380;
continue;
} else {
return ret_value__14422__auto__;
}
break;
}
});
cljs$core$async$state_machine__14421__auto__ = function(state_16733){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14421__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14421__auto____1.call(this,state_16733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14421__auto____0;
cljs$core$async$state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14421__auto____1;
return cljs$core$async$state_machine__14421__auto__;
})()
})();
var state__14553__auto__ = (function (){var statearr_16766 = f__14552__auto__();
(statearr_16766[(6)] = c__14551__auto___17359);

return statearr_16766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14553__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16769 = arguments.length;
switch (G__16769) {
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
var c__14551__auto___17382 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14552__auto__ = (function (){var switch__14420__auto__ = (function (state_16818){
var state_val_16819 = (state_16818[(1)]);
if((state_val_16819 === (7))){
var inst_16814 = (state_16818[(2)]);
var state_16818__$1 = state_16818;
var statearr_16822_17383 = state_16818__$1;
(statearr_16822_17383[(2)] = inst_16814);

(statearr_16822_17383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (1))){
var inst_16772 = [];
var inst_16773 = inst_16772;
var inst_16774 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16818__$1 = (function (){var statearr_16823 = state_16818;
(statearr_16823[(7)] = inst_16773);

(statearr_16823[(8)] = inst_16774);

return statearr_16823;
})();
var statearr_16824_17388 = state_16818__$1;
(statearr_16824_17388[(2)] = null);

(statearr_16824_17388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (4))){
var inst_16778 = (state_16818[(9)]);
var inst_16778__$1 = (state_16818[(2)]);
var inst_16779 = (inst_16778__$1 == null);
var inst_16780 = cljs.core.not(inst_16779);
var state_16818__$1 = (function (){var statearr_16825 = state_16818;
(statearr_16825[(9)] = inst_16778__$1);

return statearr_16825;
})();
if(inst_16780){
var statearr_16826_17389 = state_16818__$1;
(statearr_16826_17389[(1)] = (5));

} else {
var statearr_16827_17390 = state_16818__$1;
(statearr_16827_17390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (15))){
var inst_16773 = (state_16818[(7)]);
var inst_16806 = cljs.core.vec(inst_16773);
var state_16818__$1 = state_16818;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16818__$1,(18),out,inst_16806);
} else {
if((state_val_16819 === (13))){
var inst_16801 = (state_16818[(2)]);
var state_16818__$1 = state_16818;
var statearr_16829_17391 = state_16818__$1;
(statearr_16829_17391[(2)] = inst_16801);

(statearr_16829_17391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (6))){
var inst_16773 = (state_16818[(7)]);
var inst_16803 = inst_16773.length;
var inst_16804 = (inst_16803 > (0));
var state_16818__$1 = state_16818;
if(cljs.core.truth_(inst_16804)){
var statearr_16830_17393 = state_16818__$1;
(statearr_16830_17393[(1)] = (15));

} else {
var statearr_16831_17394 = state_16818__$1;
(statearr_16831_17394[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (17))){
var inst_16811 = (state_16818[(2)]);
var inst_16812 = cljs.core.async.close_BANG_(out);
var state_16818__$1 = (function (){var statearr_16832 = state_16818;
(statearr_16832[(10)] = inst_16811);

return statearr_16832;
})();
var statearr_16833_17395 = state_16818__$1;
(statearr_16833_17395[(2)] = inst_16812);

(statearr_16833_17395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (3))){
var inst_16816 = (state_16818[(2)]);
var state_16818__$1 = state_16818;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16818__$1,inst_16816);
} else {
if((state_val_16819 === (12))){
var inst_16773 = (state_16818[(7)]);
var inst_16793 = cljs.core.vec(inst_16773);
var state_16818__$1 = state_16818;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16818__$1,(14),out,inst_16793);
} else {
if((state_val_16819 === (2))){
var state_16818__$1 = state_16818;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16818__$1,(4),ch);
} else {
if((state_val_16819 === (11))){
var inst_16773 = (state_16818[(7)]);
var inst_16778 = (state_16818[(9)]);
var inst_16782 = (state_16818[(11)]);
var inst_16790 = inst_16773.push(inst_16778);
var tmp16834 = inst_16773;
var inst_16773__$1 = tmp16834;
var inst_16774 = inst_16782;
var state_16818__$1 = (function (){var statearr_16835 = state_16818;
(statearr_16835[(12)] = inst_16790);

(statearr_16835[(7)] = inst_16773__$1);

(statearr_16835[(8)] = inst_16774);

return statearr_16835;
})();
var statearr_16836_17396 = state_16818__$1;
(statearr_16836_17396[(2)] = null);

(statearr_16836_17396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (9))){
var inst_16774 = (state_16818[(8)]);
var inst_16786 = cljs.core.keyword_identical_QMARK_(inst_16774,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_16818__$1 = state_16818;
var statearr_16837_17398 = state_16818__$1;
(statearr_16837_17398[(2)] = inst_16786);

(statearr_16837_17398[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (5))){
var inst_16778 = (state_16818[(9)]);
var inst_16782 = (state_16818[(11)]);
var inst_16774 = (state_16818[(8)]);
var inst_16783 = (state_16818[(13)]);
var inst_16782__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16778) : f.call(null,inst_16778));
var inst_16783__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16782__$1,inst_16774);
var state_16818__$1 = (function (){var statearr_16838 = state_16818;
(statearr_16838[(11)] = inst_16782__$1);

(statearr_16838[(13)] = inst_16783__$1);

return statearr_16838;
})();
if(inst_16783__$1){
var statearr_16839_17399 = state_16818__$1;
(statearr_16839_17399[(1)] = (8));

} else {
var statearr_16840_17400 = state_16818__$1;
(statearr_16840_17400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (14))){
var inst_16778 = (state_16818[(9)]);
var inst_16782 = (state_16818[(11)]);
var inst_16795 = (state_16818[(2)]);
var inst_16797 = [];
var inst_16798 = inst_16797.push(inst_16778);
var inst_16773 = inst_16797;
var inst_16774 = inst_16782;
var state_16818__$1 = (function (){var statearr_16841 = state_16818;
(statearr_16841[(14)] = inst_16795);

(statearr_16841[(15)] = inst_16798);

(statearr_16841[(7)] = inst_16773);

(statearr_16841[(8)] = inst_16774);

return statearr_16841;
})();
var statearr_16842_17401 = state_16818__$1;
(statearr_16842_17401[(2)] = null);

(statearr_16842_17401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (16))){
var state_16818__$1 = state_16818;
var statearr_16843_17402 = state_16818__$1;
(statearr_16843_17402[(2)] = null);

(statearr_16843_17402[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (10))){
var inst_16788 = (state_16818[(2)]);
var state_16818__$1 = state_16818;
if(cljs.core.truth_(inst_16788)){
var statearr_16844_17403 = state_16818__$1;
(statearr_16844_17403[(1)] = (11));

} else {
var statearr_16845_17404 = state_16818__$1;
(statearr_16845_17404[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (18))){
var inst_16808 = (state_16818[(2)]);
var state_16818__$1 = state_16818;
var statearr_16846_17409 = state_16818__$1;
(statearr_16846_17409[(2)] = inst_16808);

(statearr_16846_17409[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (8))){
var inst_16783 = (state_16818[(13)]);
var state_16818__$1 = state_16818;
var statearr_16847_17410 = state_16818__$1;
(statearr_16847_17410[(2)] = inst_16783);

(statearr_16847_17410[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__14421__auto__ = null;
var cljs$core$async$state_machine__14421__auto____0 = (function (){
var statearr_16848 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16848[(0)] = cljs$core$async$state_machine__14421__auto__);

(statearr_16848[(1)] = (1));

return statearr_16848;
});
var cljs$core$async$state_machine__14421__auto____1 = (function (state_16818){
while(true){
var ret_value__14422__auto__ = (function (){try{while(true){
var result__14423__auto__ = switch__14420__auto__(state_16818);
if(cljs.core.keyword_identical_QMARK_(result__14423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14423__auto__;
}
break;
}
}catch (e16849){var ex__14424__auto__ = e16849;
var statearr_16850_17411 = state_16818;
(statearr_16850_17411[(2)] = ex__14424__auto__);


if(cljs.core.seq((state_16818[(4)]))){
var statearr_16851_17412 = state_16818;
(statearr_16851_17412[(1)] = cljs.core.first((state_16818[(4)])));

} else {
throw ex__14424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17413 = state_16818;
state_16818 = G__17413;
continue;
} else {
return ret_value__14422__auto__;
}
break;
}
});
cljs$core$async$state_machine__14421__auto__ = function(state_16818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14421__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14421__auto____1.call(this,state_16818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14421__auto____0;
cljs$core$async$state_machine__14421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14421__auto____1;
return cljs$core$async$state_machine__14421__auto__;
})()
})();
var state__14553__auto__ = (function (){var statearr_16852 = f__14552__auto__();
(statearr_16852[(6)] = c__14551__auto___17382);

return statearr_16852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14553__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
