goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__17992){
var map__17993 = p__17992;
var map__17993__$1 = cljs.core.__destructure_map(map__17993);
var runtime = map__17993__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17993__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5025__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_18144 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_18144)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__18014 = runtime;
var G__18015 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_18144);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__18014,G__18015) : shadow.remote.runtime.shared.process.call(null,G__18014,G__18015));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__18016,res){
var map__18017 = p__18016;
var map__18017__$1 = cljs.core.__destructure_map(map__18017);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18017__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18017__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__18018 = res;
var G__18018__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18018,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__18018);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18018__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__18018__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__18023 = arguments.length;
switch (G__18023) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__18028,msg,handlers,timeout_after_ms){
var map__18030 = p__18028;
var map__18030__$1 = cljs.core.__destructure_map(map__18030);
var runtime = map__18030__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18030__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___18147 = arguments.length;
var i__5750__auto___18148 = (0);
while(true){
if((i__5750__auto___18148 < len__5749__auto___18147)){
args__5755__auto__.push((arguments[i__5750__auto___18148]));

var G__18149 = (i__5750__auto___18148 + (1));
i__5750__auto___18148 = G__18149;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__18055,ev,args){
var map__18056 = p__18055;
var map__18056__$1 = cljs.core.__destructure_map(map__18056);
var runtime = map__18056__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18056__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__18057 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18060 = null;
var count__18061 = (0);
var i__18062 = (0);
while(true){
if((i__18062 < count__18061)){
var ext = chunk__18060.cljs$core$IIndexed$_nth$arity$2(null,i__18062);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18150 = seq__18057;
var G__18151 = chunk__18060;
var G__18152 = count__18061;
var G__18153 = (i__18062 + (1));
seq__18057 = G__18150;
chunk__18060 = G__18151;
count__18061 = G__18152;
i__18062 = G__18153;
continue;
} else {
var G__18154 = seq__18057;
var G__18155 = chunk__18060;
var G__18156 = count__18061;
var G__18157 = (i__18062 + (1));
seq__18057 = G__18154;
chunk__18060 = G__18155;
count__18061 = G__18156;
i__18062 = G__18157;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__18057);
if(temp__5823__auto__){
var seq__18057__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18057__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__18057__$1);
var G__18158 = cljs.core.chunk_rest(seq__18057__$1);
var G__18159 = c__5548__auto__;
var G__18160 = cljs.core.count(c__5548__auto__);
var G__18161 = (0);
seq__18057 = G__18158;
chunk__18060 = G__18159;
count__18061 = G__18160;
i__18062 = G__18161;
continue;
} else {
var ext = cljs.core.first(seq__18057__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18162 = cljs.core.next(seq__18057__$1);
var G__18163 = null;
var G__18164 = (0);
var G__18165 = (0);
seq__18057 = G__18162;
chunk__18060 = G__18163;
count__18061 = G__18164;
i__18062 = G__18165;
continue;
} else {
var G__18166 = cljs.core.next(seq__18057__$1);
var G__18167 = null;
var G__18168 = (0);
var G__18169 = (0);
seq__18057 = G__18166;
chunk__18060 = G__18167;
count__18061 = G__18168;
i__18062 = G__18169;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq18044){
var G__18045 = cljs.core.first(seq18044);
var seq18044__$1 = cljs.core.next(seq18044);
var G__18046 = cljs.core.first(seq18044__$1);
var seq18044__$2 = cljs.core.next(seq18044__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18045,G__18046,seq18044__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__18083,p__18084){
var map__18085 = p__18083;
var map__18085__$1 = cljs.core.__destructure_map(map__18085);
var runtime = map__18085__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18085__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18086 = p__18084;
var map__18086__$1 = cljs.core.__destructure_map(map__18086);
var msg = map__18086__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18086__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__18087 = cljs.core.deref(state_ref);
var map__18087__$1 = cljs.core.__destructure_map(map__18087);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18087__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18087__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__18089,msg){
var map__18090 = p__18089;
var map__18090__$1 = cljs.core.__destructure_map(map__18090);
var runtime = map__18090__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18090__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__18091,key,p__18092){
var map__18093 = p__18091;
var map__18093__$1 = cljs.core.__destructure_map(map__18093);
var state = map__18093__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18093__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__18094 = p__18092;
var map__18094__$1 = cljs.core.__destructure_map(map__18094);
var spec = map__18094__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18094__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18094__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__18095,key,spec){
var map__18096 = p__18095;
var map__18096__$1 = cljs.core.__destructure_map(map__18096);
var runtime = map__18096__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18096__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___18171 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___18171 == null)){
} else {
var on_welcome_18172 = temp__5827__auto___18171;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_18172.cljs$core$IFn$_invoke$arity$0 ? on_welcome_18172.cljs$core$IFn$_invoke$arity$0() : on_welcome_18172.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__18097_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__18097_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__18102_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__18102_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__18103_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__18103_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__18104_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__18104_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__18109_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__18109_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__18114,key){
var map__18115 = p__18114;
var map__18115__$1 = cljs.core.__destructure_map(map__18115);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18115__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__18117,msg){
var map__18118 = p__18117;
var map__18118__$1 = cljs.core.__destructure_map(map__18118);
var runtime = map__18118__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18118__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__18119,p__18120){
var map__18121 = p__18119;
var map__18121__$1 = cljs.core.__destructure_map(map__18121);
var runtime = map__18121__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18121__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18122 = p__18120;
var map__18122__$1 = cljs.core.__destructure_map(map__18122);
var msg = map__18122__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18122__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18122__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__18132 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18134 = null;
var count__18135 = (0);
var i__18136 = (0);
while(true){
if((i__18136 < count__18135)){
var map__18141 = chunk__18134.cljs$core$IIndexed$_nth$arity$2(null,i__18136);
var map__18141__$1 = cljs.core.__destructure_map(map__18141);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18141__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__18173 = seq__18132;
var G__18174 = chunk__18134;
var G__18175 = count__18135;
var G__18176 = (i__18136 + (1));
seq__18132 = G__18173;
chunk__18134 = G__18174;
count__18135 = G__18175;
i__18136 = G__18176;
continue;
} else {
var G__18177 = seq__18132;
var G__18178 = chunk__18134;
var G__18179 = count__18135;
var G__18180 = (i__18136 + (1));
seq__18132 = G__18177;
chunk__18134 = G__18178;
count__18135 = G__18179;
i__18136 = G__18180;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__18132);
if(temp__5823__auto__){
var seq__18132__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18132__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__18132__$1);
var G__18181 = cljs.core.chunk_rest(seq__18132__$1);
var G__18182 = c__5548__auto__;
var G__18183 = cljs.core.count(c__5548__auto__);
var G__18184 = (0);
seq__18132 = G__18181;
chunk__18134 = G__18182;
count__18135 = G__18183;
i__18136 = G__18184;
continue;
} else {
var map__18143 = cljs.core.first(seq__18132__$1);
var map__18143__$1 = cljs.core.__destructure_map(map__18143);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18143__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__18185 = cljs.core.next(seq__18132__$1);
var G__18186 = null;
var G__18187 = (0);
var G__18188 = (0);
seq__18132 = G__18185;
chunk__18134 = G__18186;
count__18135 = G__18187;
i__18136 = G__18188;
continue;
} else {
var G__18189 = cljs.core.next(seq__18132__$1);
var G__18190 = null;
var G__18191 = (0);
var G__18192 = (0);
seq__18132 = G__18189;
chunk__18134 = G__18190;
count__18135 = G__18191;
i__18136 = G__18192;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
