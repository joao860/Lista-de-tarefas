goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21494 = arguments.length;
var i__5750__auto___21495 = (0);
while(true){
if((i__5750__auto___21495 < len__5749__auto___21494)){
args__5755__auto__.push((arguments[i__5750__auto___21495]));

var G__21496 = (i__5750__auto___21495 + (1));
i__5750__auto___21495 = G__21496;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21068){
var G__21069 = cljs.core.first(seq21068);
var seq21068__$1 = cljs.core.next(seq21068);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21069,seq21068__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21078 = cljs.core.seq(sources);
var chunk__21079 = null;
var count__21080 = (0);
var i__21081 = (0);
while(true){
if((i__21081 < count__21080)){
var map__21093 = chunk__21079.cljs$core$IIndexed$_nth$arity$2(null,i__21081);
var map__21093__$1 = cljs.core.__destructure_map(map__21093);
var src = map__21093__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21093__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21093__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21093__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21093__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21094){var e_21497 = e21094;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21497);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21497.message)].join('')));
}

var G__21498 = seq__21078;
var G__21499 = chunk__21079;
var G__21500 = count__21080;
var G__21501 = (i__21081 + (1));
seq__21078 = G__21498;
chunk__21079 = G__21499;
count__21080 = G__21500;
i__21081 = G__21501;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21078);
if(temp__5823__auto__){
var seq__21078__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21078__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__21078__$1);
var G__21502 = cljs.core.chunk_rest(seq__21078__$1);
var G__21503 = c__5548__auto__;
var G__21504 = cljs.core.count(c__5548__auto__);
var G__21505 = (0);
seq__21078 = G__21502;
chunk__21079 = G__21503;
count__21080 = G__21504;
i__21081 = G__21505;
continue;
} else {
var map__21097 = cljs.core.first(seq__21078__$1);
var map__21097__$1 = cljs.core.__destructure_map(map__21097);
var src = map__21097__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21097__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21097__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21097__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21097__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21098){var e_21506 = e21098;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21506);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21506.message)].join('')));
}

var G__21508 = cljs.core.next(seq__21078__$1);
var G__21509 = null;
var G__21510 = (0);
var G__21511 = (0);
seq__21078 = G__21508;
chunk__21079 = G__21509;
count__21080 = G__21510;
i__21081 = G__21511;
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
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21099 = cljs.core.seq(js_requires);
var chunk__21100 = null;
var count__21101 = (0);
var i__21102 = (0);
while(true){
if((i__21102 < count__21101)){
var js_ns = chunk__21100.cljs$core$IIndexed$_nth$arity$2(null,i__21102);
var require_str_21512 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21512);


var G__21513 = seq__21099;
var G__21514 = chunk__21100;
var G__21515 = count__21101;
var G__21516 = (i__21102 + (1));
seq__21099 = G__21513;
chunk__21100 = G__21514;
count__21101 = G__21515;
i__21102 = G__21516;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21099);
if(temp__5823__auto__){
var seq__21099__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21099__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__21099__$1);
var G__21517 = cljs.core.chunk_rest(seq__21099__$1);
var G__21518 = c__5548__auto__;
var G__21519 = cljs.core.count(c__5548__auto__);
var G__21520 = (0);
seq__21099 = G__21517;
chunk__21100 = G__21518;
count__21101 = G__21519;
i__21102 = G__21520;
continue;
} else {
var js_ns = cljs.core.first(seq__21099__$1);
var require_str_21521 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21521);


var G__21523 = cljs.core.next(seq__21099__$1);
var G__21524 = null;
var G__21525 = (0);
var G__21526 = (0);
seq__21099 = G__21523;
chunk__21100 = G__21524;
count__21101 = G__21525;
i__21102 = G__21526;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21104){
var map__21105 = p__21104;
var map__21105__$1 = cljs.core.__destructure_map(map__21105);
var msg = map__21105__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21105__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21105__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21107(s__21108){
return (new cljs.core.LazySeq(null,(function (){
var s__21108__$1 = s__21108;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__21108__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__21114 = cljs.core.first(xs__6383__auto__);
var map__21114__$1 = cljs.core.__destructure_map(map__21114);
var src = map__21114__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21114__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21114__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5499__auto__ = ((function (s__21108__$1,map__21114,map__21114__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21105,map__21105__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21107_$_iter__21109(s__21110){
return (new cljs.core.LazySeq(null,((function (s__21108__$1,map__21114,map__21114__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21105,map__21105__$1,msg,info,reload_info){
return (function (){
var s__21110__$1 = s__21110;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__21110__$1);
if(temp__5823__auto____$1){
var s__21110__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21110__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__21110__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__21112 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__21111 = (0);
while(true){
if((i__21111 < size__5502__auto__)){
var warning = cljs.core._nth(c__5501__auto__,i__21111);
cljs.core.chunk_append(b__21112,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21532 = (i__21111 + (1));
i__21111 = G__21532;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21112),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21107_$_iter__21109(cljs.core.chunk_rest(s__21110__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21112),null);
}
} else {
var warning = cljs.core.first(s__21110__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21107_$_iter__21109(cljs.core.rest(s__21110__$2)));
}
} else {
return null;
}
break;
}
});})(s__21108__$1,map__21114,map__21114__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21105,map__21105__$1,msg,info,reload_info))
,null,null));
});})(s__21108__$1,map__21114,map__21114__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21105,map__21105__$1,msg,info,reload_info))
;
var fs__5500__auto__ = cljs.core.seq(iterys__5499__auto__(warnings));
if(fs__5500__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5500__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21107(cljs.core.rest(s__21108__$1)));
} else {
var G__21533 = cljs.core.rest(s__21108__$1);
s__21108__$1 = G__21533;
continue;
}
} else {
var G__21534 = cljs.core.rest(s__21108__$1);
s__21108__$1 = G__21534;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21117_21535 = cljs.core.seq(warnings);
var chunk__21118_21536 = null;
var count__21119_21537 = (0);
var i__21120_21538 = (0);
while(true){
if((i__21120_21538 < count__21119_21537)){
var map__21123_21539 = chunk__21118_21536.cljs$core$IIndexed$_nth$arity$2(null,i__21120_21538);
var map__21123_21540__$1 = cljs.core.__destructure_map(map__21123_21539);
var w_21541 = map__21123_21540__$1;
var msg_21542__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21123_21540__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21123_21540__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21123_21540__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21123_21540__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21545)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21543),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21544),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21542__$1)].join(''));


var G__21546 = seq__21117_21535;
var G__21547 = chunk__21118_21536;
var G__21548 = count__21119_21537;
var G__21549 = (i__21120_21538 + (1));
seq__21117_21535 = G__21546;
chunk__21118_21536 = G__21547;
count__21119_21537 = G__21548;
i__21120_21538 = G__21549;
continue;
} else {
var temp__5823__auto___21550 = cljs.core.seq(seq__21117_21535);
if(temp__5823__auto___21550){
var seq__21117_21551__$1 = temp__5823__auto___21550;
if(cljs.core.chunked_seq_QMARK_(seq__21117_21551__$1)){
var c__5548__auto___21552 = cljs.core.chunk_first(seq__21117_21551__$1);
var G__21553 = cljs.core.chunk_rest(seq__21117_21551__$1);
var G__21554 = c__5548__auto___21552;
var G__21555 = cljs.core.count(c__5548__auto___21552);
var G__21556 = (0);
seq__21117_21535 = G__21553;
chunk__21118_21536 = G__21554;
count__21119_21537 = G__21555;
i__21120_21538 = G__21556;
continue;
} else {
var map__21124_21557 = cljs.core.first(seq__21117_21551__$1);
var map__21124_21558__$1 = cljs.core.__destructure_map(map__21124_21557);
var w_21559 = map__21124_21558__$1;
var msg_21560__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21124_21558__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21561 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21124_21558__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21124_21558__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21124_21558__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21563)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21561),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21562),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21560__$1)].join(''));


var G__21564 = cljs.core.next(seq__21117_21551__$1);
var G__21565 = null;
var G__21566 = (0);
var G__21567 = (0);
seq__21117_21535 = G__21564;
chunk__21118_21536 = G__21565;
count__21119_21537 = G__21566;
i__21120_21538 = G__21567;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21103_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21103_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
var and__5023__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5023__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21131 = node_uri;
G__21131.setQuery(null);

G__21131.setPath(new$);

return G__21131;
})());
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21132){
var map__21133 = p__21132;
var map__21133__$1 = cljs.core.__destructure_map(map__21133);
var msg = map__21133__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21133__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21133__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21134 = cljs.core.seq(updates);
var chunk__21136 = null;
var count__21137 = (0);
var i__21138 = (0);
while(true){
if((i__21138 < count__21137)){
var path = chunk__21136.cljs$core$IIndexed$_nth$arity$2(null,i__21138);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21313_21569 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21317_21570 = null;
var count__21318_21571 = (0);
var i__21319_21572 = (0);
while(true){
if((i__21319_21572 < count__21318_21571)){
var node_21573 = chunk__21317_21570.cljs$core$IIndexed$_nth$arity$2(null,i__21319_21572);
if(cljs.core.not(node_21573.shadow$old)){
var path_match_21574 = shadow.cljs.devtools.client.browser.match_paths(node_21573.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21574)){
var new_link_21575 = (function (){var G__21345 = node_21573.cloneNode(true);
G__21345.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21574),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21345;
})();
(node_21573.shadow$old = true);

(new_link_21575.onload = ((function (seq__21313_21569,chunk__21317_21570,count__21318_21571,i__21319_21572,seq__21134,chunk__21136,count__21137,i__21138,new_link_21575,path_match_21574,node_21573,path,map__21133,map__21133__$1,msg,updates,reload_info){
return (function (e){
var seq__21346_21576 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21348_21577 = null;
var count__21349_21578 = (0);
var i__21350_21579 = (0);
while(true){
if((i__21350_21579 < count__21349_21578)){
var map__21356_21580 = chunk__21348_21577.cljs$core$IIndexed$_nth$arity$2(null,i__21350_21579);
var map__21356_21581__$1 = cljs.core.__destructure_map(map__21356_21580);
var task_21582 = map__21356_21581__$1;
var fn_str_21583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21356_21581__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21356_21581__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21585 = goog.getObjectByName(fn_str_21583,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21584)].join(''));

(fn_obj_21585.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21585.cljs$core$IFn$_invoke$arity$2(path,new_link_21575) : fn_obj_21585.call(null,path,new_link_21575));


var G__21586 = seq__21346_21576;
var G__21587 = chunk__21348_21577;
var G__21588 = count__21349_21578;
var G__21589 = (i__21350_21579 + (1));
seq__21346_21576 = G__21586;
chunk__21348_21577 = G__21587;
count__21349_21578 = G__21588;
i__21350_21579 = G__21589;
continue;
} else {
var temp__5823__auto___21590 = cljs.core.seq(seq__21346_21576);
if(temp__5823__auto___21590){
var seq__21346_21591__$1 = temp__5823__auto___21590;
if(cljs.core.chunked_seq_QMARK_(seq__21346_21591__$1)){
var c__5548__auto___21592 = cljs.core.chunk_first(seq__21346_21591__$1);
var G__21593 = cljs.core.chunk_rest(seq__21346_21591__$1);
var G__21594 = c__5548__auto___21592;
var G__21595 = cljs.core.count(c__5548__auto___21592);
var G__21596 = (0);
seq__21346_21576 = G__21593;
chunk__21348_21577 = G__21594;
count__21349_21578 = G__21595;
i__21350_21579 = G__21596;
continue;
} else {
var map__21362_21597 = cljs.core.first(seq__21346_21591__$1);
var map__21362_21598__$1 = cljs.core.__destructure_map(map__21362_21597);
var task_21599 = map__21362_21598__$1;
var fn_str_21600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21362_21598__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21362_21598__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21602 = goog.getObjectByName(fn_str_21600,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21601)].join(''));

(fn_obj_21602.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21602.cljs$core$IFn$_invoke$arity$2(path,new_link_21575) : fn_obj_21602.call(null,path,new_link_21575));


var G__21603 = cljs.core.next(seq__21346_21591__$1);
var G__21604 = null;
var G__21605 = (0);
var G__21606 = (0);
seq__21346_21576 = G__21603;
chunk__21348_21577 = G__21604;
count__21349_21578 = G__21605;
i__21350_21579 = G__21606;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21573);
});})(seq__21313_21569,chunk__21317_21570,count__21318_21571,i__21319_21572,seq__21134,chunk__21136,count__21137,i__21138,new_link_21575,path_match_21574,node_21573,path,map__21133,map__21133__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21574], 0));

goog.dom.insertSiblingAfter(new_link_21575,node_21573);


var G__21607 = seq__21313_21569;
var G__21608 = chunk__21317_21570;
var G__21609 = count__21318_21571;
var G__21610 = (i__21319_21572 + (1));
seq__21313_21569 = G__21607;
chunk__21317_21570 = G__21608;
count__21318_21571 = G__21609;
i__21319_21572 = G__21610;
continue;
} else {
var G__21611 = seq__21313_21569;
var G__21612 = chunk__21317_21570;
var G__21613 = count__21318_21571;
var G__21614 = (i__21319_21572 + (1));
seq__21313_21569 = G__21611;
chunk__21317_21570 = G__21612;
count__21318_21571 = G__21613;
i__21319_21572 = G__21614;
continue;
}
} else {
var G__21615 = seq__21313_21569;
var G__21616 = chunk__21317_21570;
var G__21617 = count__21318_21571;
var G__21618 = (i__21319_21572 + (1));
seq__21313_21569 = G__21615;
chunk__21317_21570 = G__21616;
count__21318_21571 = G__21617;
i__21319_21572 = G__21618;
continue;
}
} else {
var temp__5823__auto___21619 = cljs.core.seq(seq__21313_21569);
if(temp__5823__auto___21619){
var seq__21313_21620__$1 = temp__5823__auto___21619;
if(cljs.core.chunked_seq_QMARK_(seq__21313_21620__$1)){
var c__5548__auto___21621 = cljs.core.chunk_first(seq__21313_21620__$1);
var G__21622 = cljs.core.chunk_rest(seq__21313_21620__$1);
var G__21623 = c__5548__auto___21621;
var G__21624 = cljs.core.count(c__5548__auto___21621);
var G__21625 = (0);
seq__21313_21569 = G__21622;
chunk__21317_21570 = G__21623;
count__21318_21571 = G__21624;
i__21319_21572 = G__21625;
continue;
} else {
var node_21626 = cljs.core.first(seq__21313_21620__$1);
if(cljs.core.not(node_21626.shadow$old)){
var path_match_21628 = shadow.cljs.devtools.client.browser.match_paths(node_21626.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21628)){
var new_link_21629 = (function (){var G__21370 = node_21626.cloneNode(true);
G__21370.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21628),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21370;
})();
(node_21626.shadow$old = true);

(new_link_21629.onload = ((function (seq__21313_21569,chunk__21317_21570,count__21318_21571,i__21319_21572,seq__21134,chunk__21136,count__21137,i__21138,new_link_21629,path_match_21628,node_21626,seq__21313_21620__$1,temp__5823__auto___21619,path,map__21133,map__21133__$1,msg,updates,reload_info){
return (function (e){
var seq__21374_21630 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21376_21631 = null;
var count__21377_21632 = (0);
var i__21378_21633 = (0);
while(true){
if((i__21378_21633 < count__21377_21632)){
var map__21386_21634 = chunk__21376_21631.cljs$core$IIndexed$_nth$arity$2(null,i__21378_21633);
var map__21386_21635__$1 = cljs.core.__destructure_map(map__21386_21634);
var task_21636 = map__21386_21635__$1;
var fn_str_21637 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21386_21635__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21638 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21386_21635__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21639 = goog.getObjectByName(fn_str_21637,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21638)].join(''));

(fn_obj_21639.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21639.cljs$core$IFn$_invoke$arity$2(path,new_link_21629) : fn_obj_21639.call(null,path,new_link_21629));


var G__21640 = seq__21374_21630;
var G__21641 = chunk__21376_21631;
var G__21642 = count__21377_21632;
var G__21643 = (i__21378_21633 + (1));
seq__21374_21630 = G__21640;
chunk__21376_21631 = G__21641;
count__21377_21632 = G__21642;
i__21378_21633 = G__21643;
continue;
} else {
var temp__5823__auto___21644__$1 = cljs.core.seq(seq__21374_21630);
if(temp__5823__auto___21644__$1){
var seq__21374_21645__$1 = temp__5823__auto___21644__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21374_21645__$1)){
var c__5548__auto___21646 = cljs.core.chunk_first(seq__21374_21645__$1);
var G__21647 = cljs.core.chunk_rest(seq__21374_21645__$1);
var G__21648 = c__5548__auto___21646;
var G__21649 = cljs.core.count(c__5548__auto___21646);
var G__21650 = (0);
seq__21374_21630 = G__21647;
chunk__21376_21631 = G__21648;
count__21377_21632 = G__21649;
i__21378_21633 = G__21650;
continue;
} else {
var map__21387_21651 = cljs.core.first(seq__21374_21645__$1);
var map__21387_21652__$1 = cljs.core.__destructure_map(map__21387_21651);
var task_21653 = map__21387_21652__$1;
var fn_str_21654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21387_21652__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21387_21652__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21656 = goog.getObjectByName(fn_str_21654,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21655)].join(''));

(fn_obj_21656.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21656.cljs$core$IFn$_invoke$arity$2(path,new_link_21629) : fn_obj_21656.call(null,path,new_link_21629));


var G__21657 = cljs.core.next(seq__21374_21645__$1);
var G__21658 = null;
var G__21659 = (0);
var G__21660 = (0);
seq__21374_21630 = G__21657;
chunk__21376_21631 = G__21658;
count__21377_21632 = G__21659;
i__21378_21633 = G__21660;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21626);
});})(seq__21313_21569,chunk__21317_21570,count__21318_21571,i__21319_21572,seq__21134,chunk__21136,count__21137,i__21138,new_link_21629,path_match_21628,node_21626,seq__21313_21620__$1,temp__5823__auto___21619,path,map__21133,map__21133__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21628], 0));

goog.dom.insertSiblingAfter(new_link_21629,node_21626);


var G__21661 = cljs.core.next(seq__21313_21620__$1);
var G__21662 = null;
var G__21663 = (0);
var G__21664 = (0);
seq__21313_21569 = G__21661;
chunk__21317_21570 = G__21662;
count__21318_21571 = G__21663;
i__21319_21572 = G__21664;
continue;
} else {
var G__21665 = cljs.core.next(seq__21313_21620__$1);
var G__21666 = null;
var G__21667 = (0);
var G__21668 = (0);
seq__21313_21569 = G__21665;
chunk__21317_21570 = G__21666;
count__21318_21571 = G__21667;
i__21319_21572 = G__21668;
continue;
}
} else {
var G__21669 = cljs.core.next(seq__21313_21620__$1);
var G__21670 = null;
var G__21671 = (0);
var G__21672 = (0);
seq__21313_21569 = G__21669;
chunk__21317_21570 = G__21670;
count__21318_21571 = G__21671;
i__21319_21572 = G__21672;
continue;
}
}
} else {
}
}
break;
}


var G__21673 = seq__21134;
var G__21674 = chunk__21136;
var G__21675 = count__21137;
var G__21676 = (i__21138 + (1));
seq__21134 = G__21673;
chunk__21136 = G__21674;
count__21137 = G__21675;
i__21138 = G__21676;
continue;
} else {
var G__21677 = seq__21134;
var G__21678 = chunk__21136;
var G__21679 = count__21137;
var G__21680 = (i__21138 + (1));
seq__21134 = G__21677;
chunk__21136 = G__21678;
count__21137 = G__21679;
i__21138 = G__21680;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21134);
if(temp__5823__auto__){
var seq__21134__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21134__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__21134__$1);
var G__21681 = cljs.core.chunk_rest(seq__21134__$1);
var G__21682 = c__5548__auto__;
var G__21683 = cljs.core.count(c__5548__auto__);
var G__21684 = (0);
seq__21134 = G__21681;
chunk__21136 = G__21682;
count__21137 = G__21683;
i__21138 = G__21684;
continue;
} else {
var path = cljs.core.first(seq__21134__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21392_21685 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21396_21686 = null;
var count__21397_21687 = (0);
var i__21398_21688 = (0);
while(true){
if((i__21398_21688 < count__21397_21687)){
var node_21689 = chunk__21396_21686.cljs$core$IIndexed$_nth$arity$2(null,i__21398_21688);
if(cljs.core.not(node_21689.shadow$old)){
var path_match_21690 = shadow.cljs.devtools.client.browser.match_paths(node_21689.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21690)){
var new_link_21691 = (function (){var G__21432 = node_21689.cloneNode(true);
G__21432.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21690),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21432;
})();
(node_21689.shadow$old = true);

(new_link_21691.onload = ((function (seq__21392_21685,chunk__21396_21686,count__21397_21687,i__21398_21688,seq__21134,chunk__21136,count__21137,i__21138,new_link_21691,path_match_21690,node_21689,path,seq__21134__$1,temp__5823__auto__,map__21133,map__21133__$1,msg,updates,reload_info){
return (function (e){
var seq__21433_21692 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21435_21693 = null;
var count__21436_21694 = (0);
var i__21437_21695 = (0);
while(true){
if((i__21437_21695 < count__21436_21694)){
var map__21441_21696 = chunk__21435_21693.cljs$core$IIndexed$_nth$arity$2(null,i__21437_21695);
var map__21441_21697__$1 = cljs.core.__destructure_map(map__21441_21696);
var task_21698 = map__21441_21697__$1;
var fn_str_21699 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21441_21697__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21441_21697__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21701 = goog.getObjectByName(fn_str_21699,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21700)].join(''));

(fn_obj_21701.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21701.cljs$core$IFn$_invoke$arity$2(path,new_link_21691) : fn_obj_21701.call(null,path,new_link_21691));


var G__21702 = seq__21433_21692;
var G__21703 = chunk__21435_21693;
var G__21704 = count__21436_21694;
var G__21705 = (i__21437_21695 + (1));
seq__21433_21692 = G__21702;
chunk__21435_21693 = G__21703;
count__21436_21694 = G__21704;
i__21437_21695 = G__21705;
continue;
} else {
var temp__5823__auto___21706__$1 = cljs.core.seq(seq__21433_21692);
if(temp__5823__auto___21706__$1){
var seq__21433_21707__$1 = temp__5823__auto___21706__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21433_21707__$1)){
var c__5548__auto___21708 = cljs.core.chunk_first(seq__21433_21707__$1);
var G__21709 = cljs.core.chunk_rest(seq__21433_21707__$1);
var G__21710 = c__5548__auto___21708;
var G__21711 = cljs.core.count(c__5548__auto___21708);
var G__21712 = (0);
seq__21433_21692 = G__21709;
chunk__21435_21693 = G__21710;
count__21436_21694 = G__21711;
i__21437_21695 = G__21712;
continue;
} else {
var map__21442_21713 = cljs.core.first(seq__21433_21707__$1);
var map__21442_21714__$1 = cljs.core.__destructure_map(map__21442_21713);
var task_21715 = map__21442_21714__$1;
var fn_str_21716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21442_21714__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21442_21714__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21718 = goog.getObjectByName(fn_str_21716,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21717)].join(''));

(fn_obj_21718.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21718.cljs$core$IFn$_invoke$arity$2(path,new_link_21691) : fn_obj_21718.call(null,path,new_link_21691));


var G__21719 = cljs.core.next(seq__21433_21707__$1);
var G__21720 = null;
var G__21721 = (0);
var G__21722 = (0);
seq__21433_21692 = G__21719;
chunk__21435_21693 = G__21720;
count__21436_21694 = G__21721;
i__21437_21695 = G__21722;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21689);
});})(seq__21392_21685,chunk__21396_21686,count__21397_21687,i__21398_21688,seq__21134,chunk__21136,count__21137,i__21138,new_link_21691,path_match_21690,node_21689,path,seq__21134__$1,temp__5823__auto__,map__21133,map__21133__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21690], 0));

goog.dom.insertSiblingAfter(new_link_21691,node_21689);


var G__21723 = seq__21392_21685;
var G__21724 = chunk__21396_21686;
var G__21725 = count__21397_21687;
var G__21726 = (i__21398_21688 + (1));
seq__21392_21685 = G__21723;
chunk__21396_21686 = G__21724;
count__21397_21687 = G__21725;
i__21398_21688 = G__21726;
continue;
} else {
var G__21727 = seq__21392_21685;
var G__21728 = chunk__21396_21686;
var G__21729 = count__21397_21687;
var G__21730 = (i__21398_21688 + (1));
seq__21392_21685 = G__21727;
chunk__21396_21686 = G__21728;
count__21397_21687 = G__21729;
i__21398_21688 = G__21730;
continue;
}
} else {
var G__21731 = seq__21392_21685;
var G__21732 = chunk__21396_21686;
var G__21733 = count__21397_21687;
var G__21734 = (i__21398_21688 + (1));
seq__21392_21685 = G__21731;
chunk__21396_21686 = G__21732;
count__21397_21687 = G__21733;
i__21398_21688 = G__21734;
continue;
}
} else {
var temp__5823__auto___21735__$1 = cljs.core.seq(seq__21392_21685);
if(temp__5823__auto___21735__$1){
var seq__21392_21736__$1 = temp__5823__auto___21735__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21392_21736__$1)){
var c__5548__auto___21737 = cljs.core.chunk_first(seq__21392_21736__$1);
var G__21738 = cljs.core.chunk_rest(seq__21392_21736__$1);
var G__21739 = c__5548__auto___21737;
var G__21740 = cljs.core.count(c__5548__auto___21737);
var G__21741 = (0);
seq__21392_21685 = G__21738;
chunk__21396_21686 = G__21739;
count__21397_21687 = G__21740;
i__21398_21688 = G__21741;
continue;
} else {
var node_21742 = cljs.core.first(seq__21392_21736__$1);
if(cljs.core.not(node_21742.shadow$old)){
var path_match_21743 = shadow.cljs.devtools.client.browser.match_paths(node_21742.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21743)){
var new_link_21744 = (function (){var G__21443 = node_21742.cloneNode(true);
G__21443.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21743),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21443;
})();
(node_21742.shadow$old = true);

(new_link_21744.onload = ((function (seq__21392_21685,chunk__21396_21686,count__21397_21687,i__21398_21688,seq__21134,chunk__21136,count__21137,i__21138,new_link_21744,path_match_21743,node_21742,seq__21392_21736__$1,temp__5823__auto___21735__$1,path,seq__21134__$1,temp__5823__auto__,map__21133,map__21133__$1,msg,updates,reload_info){
return (function (e){
var seq__21444_21745 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21446_21746 = null;
var count__21447_21747 = (0);
var i__21448_21748 = (0);
while(true){
if((i__21448_21748 < count__21447_21747)){
var map__21456_21749 = chunk__21446_21746.cljs$core$IIndexed$_nth$arity$2(null,i__21448_21748);
var map__21456_21750__$1 = cljs.core.__destructure_map(map__21456_21749);
var task_21751 = map__21456_21750__$1;
var fn_str_21752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21456_21750__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21456_21750__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21754 = goog.getObjectByName(fn_str_21752,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21753)].join(''));

(fn_obj_21754.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21754.cljs$core$IFn$_invoke$arity$2(path,new_link_21744) : fn_obj_21754.call(null,path,new_link_21744));


var G__21755 = seq__21444_21745;
var G__21756 = chunk__21446_21746;
var G__21757 = count__21447_21747;
var G__21758 = (i__21448_21748 + (1));
seq__21444_21745 = G__21755;
chunk__21446_21746 = G__21756;
count__21447_21747 = G__21757;
i__21448_21748 = G__21758;
continue;
} else {
var temp__5823__auto___21759__$2 = cljs.core.seq(seq__21444_21745);
if(temp__5823__auto___21759__$2){
var seq__21444_21760__$1 = temp__5823__auto___21759__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21444_21760__$1)){
var c__5548__auto___21761 = cljs.core.chunk_first(seq__21444_21760__$1);
var G__21762 = cljs.core.chunk_rest(seq__21444_21760__$1);
var G__21763 = c__5548__auto___21761;
var G__21764 = cljs.core.count(c__5548__auto___21761);
var G__21765 = (0);
seq__21444_21745 = G__21762;
chunk__21446_21746 = G__21763;
count__21447_21747 = G__21764;
i__21448_21748 = G__21765;
continue;
} else {
var map__21459_21766 = cljs.core.first(seq__21444_21760__$1);
var map__21459_21767__$1 = cljs.core.__destructure_map(map__21459_21766);
var task_21768 = map__21459_21767__$1;
var fn_str_21769 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21459_21767__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21770 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21459_21767__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21771 = goog.getObjectByName(fn_str_21769,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21770)].join(''));

(fn_obj_21771.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21771.cljs$core$IFn$_invoke$arity$2(path,new_link_21744) : fn_obj_21771.call(null,path,new_link_21744));


var G__21772 = cljs.core.next(seq__21444_21760__$1);
var G__21773 = null;
var G__21774 = (0);
var G__21775 = (0);
seq__21444_21745 = G__21772;
chunk__21446_21746 = G__21773;
count__21447_21747 = G__21774;
i__21448_21748 = G__21775;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21742);
});})(seq__21392_21685,chunk__21396_21686,count__21397_21687,i__21398_21688,seq__21134,chunk__21136,count__21137,i__21138,new_link_21744,path_match_21743,node_21742,seq__21392_21736__$1,temp__5823__auto___21735__$1,path,seq__21134__$1,temp__5823__auto__,map__21133,map__21133__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21743], 0));

goog.dom.insertSiblingAfter(new_link_21744,node_21742);


var G__21776 = cljs.core.next(seq__21392_21736__$1);
var G__21777 = null;
var G__21778 = (0);
var G__21779 = (0);
seq__21392_21685 = G__21776;
chunk__21396_21686 = G__21777;
count__21397_21687 = G__21778;
i__21398_21688 = G__21779;
continue;
} else {
var G__21780 = cljs.core.next(seq__21392_21736__$1);
var G__21781 = null;
var G__21782 = (0);
var G__21783 = (0);
seq__21392_21685 = G__21780;
chunk__21396_21686 = G__21781;
count__21397_21687 = G__21782;
i__21398_21688 = G__21783;
continue;
}
} else {
var G__21784 = cljs.core.next(seq__21392_21736__$1);
var G__21785 = null;
var G__21786 = (0);
var G__21787 = (0);
seq__21392_21685 = G__21784;
chunk__21396_21686 = G__21785;
count__21397_21687 = G__21786;
i__21398_21688 = G__21787;
continue;
}
}
} else {
}
}
break;
}


var G__21788 = cljs.core.next(seq__21134__$1);
var G__21789 = null;
var G__21790 = (0);
var G__21791 = (0);
seq__21134 = G__21788;
chunk__21136 = G__21789;
count__21137 = G__21790;
i__21138 = G__21791;
continue;
} else {
var G__21792 = cljs.core.next(seq__21134__$1);
var G__21793 = null;
var G__21794 = (0);
var G__21795 = (0);
seq__21134 = G__21792;
chunk__21136 = G__21793;
count__21137 = G__21794;
i__21138 = G__21795;
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
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__21464 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21464) : success.call(null,G__21464));
}catch (e21463){var e = e21463;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21465,success,fail){
var map__21466 = p__21465;
var map__21466__$1 = cljs.core.__destructure_map(map__21466);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21466__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21468 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21468) : success.call(null,G__21468));
}catch (e21467){var e = e21467;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21469,done,error){
var map__21470 = p__21469;
var map__21470__$1 = cljs.core.__destructure_map(map__21470);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21470__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21471,done,error){
var map__21472 = p__21471;
var map__21472__$1 = cljs.core.__destructure_map(map__21472);
var msg = map__21472__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21472__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21472__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21472__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21473){
var map__21474 = p__21473;
var map__21474__$1 = cljs.core.__destructure_map(map__21474);
var src = map__21474__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21474__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5023__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5023__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21478 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21478) : done.call(null,G__21478));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21479){
var map__21482 = p__21479;
var map__21482__$1 = cljs.core.__destructure_map(map__21482);
var msg__$1 = map__21482__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21482__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21483){var ex = e21483;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21484){
var map__21485 = p__21484;
var map__21485__$1 = cljs.core.__destructure_map(map__21485);
var env = map__21485__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21485__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21488){
var map__21489 = p__21488;
var map__21489__$1 = cljs.core.__destructure_map(map__21489);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21489__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21489__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__21490){
var map__21491 = p__21490;
var map__21491__$1 = cljs.core.__destructure_map(map__21491);
var svc = map__21491__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21491__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
