goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12325 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12325(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12328 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12328(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11806 = coll;
var G__11807 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11806,G__11807) : shadow.dom.lazy_native_coll_seq.call(null,G__11806,G__11807));
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
var or__5025__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.dom/NativeColl");
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
var G__11810 = arguments.length;
switch (G__11810) {
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
var G__11812 = arguments.length;
switch (G__11812) {
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
var G__11814 = arguments.length;
switch (G__11814) {
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
var G__11816 = arguments.length;
switch (G__11816) {
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
var G__11818 = arguments.length;
switch (G__11818) {
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
var G__11820 = arguments.length;
switch (G__11820) {
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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5025__auto__ = (!((typeof document !== 'undefined')));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e11821){if((e11821 instanceof Object)){
var e = e11821;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11821;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5025__auto__ = (!((typeof document !== 'undefined')));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__11822 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11823 = null;
var count__11824 = (0);
var i__11825 = (0);
while(true){
if((i__11825 < count__11824)){
var el = chunk__11823.cljs$core$IIndexed$_nth$arity$2(null,i__11825);
var handler_12344__$1 = ((function (seq__11822,chunk__11823,count__11824,i__11825,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11822,chunk__11823,count__11824,i__11825,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12344__$1);


var G__12345 = seq__11822;
var G__12346 = chunk__11823;
var G__12347 = count__11824;
var G__12348 = (i__11825 + (1));
seq__11822 = G__12345;
chunk__11823 = G__12346;
count__11824 = G__12347;
i__11825 = G__12348;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11822);
if(temp__5823__auto__){
var seq__11822__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11822__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__11822__$1);
var G__12349 = cljs.core.chunk_rest(seq__11822__$1);
var G__12350 = c__5548__auto__;
var G__12351 = cljs.core.count(c__5548__auto__);
var G__12352 = (0);
seq__11822 = G__12349;
chunk__11823 = G__12350;
count__11824 = G__12351;
i__11825 = G__12352;
continue;
} else {
var el = cljs.core.first(seq__11822__$1);
var handler_12353__$1 = ((function (seq__11822,chunk__11823,count__11824,i__11825,el,seq__11822__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11822,chunk__11823,count__11824,i__11825,el,seq__11822__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12353__$1);


var G__12354 = cljs.core.next(seq__11822__$1);
var G__12355 = null;
var G__12356 = (0);
var G__12357 = (0);
seq__11822 = G__12354;
chunk__11823 = G__12355;
count__11824 = G__12356;
i__11825 = G__12357;
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
var G__11827 = arguments.length;
switch (G__11827) {
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
var seq__11837 = cljs.core.seq(events);
var chunk__11838 = null;
var count__11839 = (0);
var i__11840 = (0);
while(true){
if((i__11840 < count__11839)){
var vec__11847 = chunk__11838.cljs$core$IIndexed$_nth$arity$2(null,i__11840);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11847,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11847,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12360 = seq__11837;
var G__12361 = chunk__11838;
var G__12362 = count__11839;
var G__12363 = (i__11840 + (1));
seq__11837 = G__12360;
chunk__11838 = G__12361;
count__11839 = G__12362;
i__11840 = G__12363;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11837);
if(temp__5823__auto__){
var seq__11837__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11837__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__11837__$1);
var G__12364 = cljs.core.chunk_rest(seq__11837__$1);
var G__12365 = c__5548__auto__;
var G__12366 = cljs.core.count(c__5548__auto__);
var G__12367 = (0);
seq__11837 = G__12364;
chunk__11838 = G__12365;
count__11839 = G__12366;
i__11840 = G__12367;
continue;
} else {
var vec__11850 = cljs.core.first(seq__11837__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11850,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11850,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12368 = cljs.core.next(seq__11837__$1);
var G__12369 = null;
var G__12370 = (0);
var G__12371 = (0);
seq__11837 = G__12368;
chunk__11838 = G__12369;
count__11839 = G__12370;
i__11840 = G__12371;
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
var seq__11853 = cljs.core.seq(styles);
var chunk__11854 = null;
var count__11855 = (0);
var i__11856 = (0);
while(true){
if((i__11856 < count__11855)){
var vec__11868 = chunk__11854.cljs$core$IIndexed$_nth$arity$2(null,i__11856);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11868,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11868,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12373 = seq__11853;
var G__12374 = chunk__11854;
var G__12375 = count__11855;
var G__12376 = (i__11856 + (1));
seq__11853 = G__12373;
chunk__11854 = G__12374;
count__11855 = G__12375;
i__11856 = G__12376;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11853);
if(temp__5823__auto__){
var seq__11853__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11853__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__11853__$1);
var G__12377 = cljs.core.chunk_rest(seq__11853__$1);
var G__12378 = c__5548__auto__;
var G__12379 = cljs.core.count(c__5548__auto__);
var G__12380 = (0);
seq__11853 = G__12377;
chunk__11854 = G__12378;
count__11855 = G__12379;
i__11856 = G__12380;
continue;
} else {
var vec__11871 = cljs.core.first(seq__11853__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11871,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11871,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12381 = cljs.core.next(seq__11853__$1);
var G__12382 = null;
var G__12383 = (0);
var G__12384 = (0);
seq__11853 = G__12381;
chunk__11854 = G__12382;
count__11855 = G__12383;
i__11856 = G__12384;
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
var G__11875_12385 = key;
var G__11875_12386__$1 = (((G__11875_12385 instanceof cljs.core.Keyword))?G__11875_12385.fqn:null);
switch (G__11875_12386__$1) {
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
var ks_12389 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_12389,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_12389,"aria-");
}
})())){
el.setAttribute(ks_12389,value);
} else {
(el[ks_12389] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__11892){
var map__11893 = p__11892;
var map__11893__$1 = cljs.core.__destructure_map(map__11893);
var props = map__11893__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11893__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__11895 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11895,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11895,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11895,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__11902 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__11902,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__11902;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__11906 = arguments.length;
switch (G__11906) {
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
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
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
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__11908){
var vec__11910 = p__11908;
var seq__11911 = cljs.core.seq(vec__11910);
var first__11912 = cljs.core.first(seq__11911);
var seq__11911__$1 = cljs.core.next(seq__11911);
var nn = first__11912;
var first__11912__$1 = cljs.core.first(seq__11911__$1);
var seq__11911__$2 = cljs.core.next(seq__11911__$1);
var np = first__11912__$1;
var nc = seq__11911__$2;
var node = vec__11910;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11915 = nn;
var G__11916 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11915,G__11916) : create_fn.call(null,G__11915,G__11916));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11917 = nn;
var G__11918 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11917,G__11918) : create_fn.call(null,G__11917,G__11918));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__11924 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11924,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11924,(1),null);
var seq__11927_12409 = cljs.core.seq(node_children);
var chunk__11928_12410 = null;
var count__11929_12411 = (0);
var i__11930_12412 = (0);
while(true){
if((i__11930_12412 < count__11929_12411)){
var child_struct_12414 = chunk__11928_12410.cljs$core$IIndexed$_nth$arity$2(null,i__11930_12412);
var children_12415 = shadow.dom.dom_node(child_struct_12414);
if(cljs.core.seq_QMARK_(children_12415)){
var seq__11974_12417 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12415));
var chunk__11976_12418 = null;
var count__11977_12419 = (0);
var i__11978_12420 = (0);
while(true){
if((i__11978_12420 < count__11977_12419)){
var child_12421 = chunk__11976_12418.cljs$core$IIndexed$_nth$arity$2(null,i__11978_12420);
if(cljs.core.truth_(child_12421)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12421);


var G__12422 = seq__11974_12417;
var G__12423 = chunk__11976_12418;
var G__12424 = count__11977_12419;
var G__12425 = (i__11978_12420 + (1));
seq__11974_12417 = G__12422;
chunk__11976_12418 = G__12423;
count__11977_12419 = G__12424;
i__11978_12420 = G__12425;
continue;
} else {
var G__12426 = seq__11974_12417;
var G__12427 = chunk__11976_12418;
var G__12428 = count__11977_12419;
var G__12429 = (i__11978_12420 + (1));
seq__11974_12417 = G__12426;
chunk__11976_12418 = G__12427;
count__11977_12419 = G__12428;
i__11978_12420 = G__12429;
continue;
}
} else {
var temp__5823__auto___12431 = cljs.core.seq(seq__11974_12417);
if(temp__5823__auto___12431){
var seq__11974_12432__$1 = temp__5823__auto___12431;
if(cljs.core.chunked_seq_QMARK_(seq__11974_12432__$1)){
var c__5548__auto___12433 = cljs.core.chunk_first(seq__11974_12432__$1);
var G__12434 = cljs.core.chunk_rest(seq__11974_12432__$1);
var G__12435 = c__5548__auto___12433;
var G__12436 = cljs.core.count(c__5548__auto___12433);
var G__12437 = (0);
seq__11974_12417 = G__12434;
chunk__11976_12418 = G__12435;
count__11977_12419 = G__12436;
i__11978_12420 = G__12437;
continue;
} else {
var child_12439 = cljs.core.first(seq__11974_12432__$1);
if(cljs.core.truth_(child_12439)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12439);


var G__12441 = cljs.core.next(seq__11974_12432__$1);
var G__12442 = null;
var G__12443 = (0);
var G__12444 = (0);
seq__11974_12417 = G__12441;
chunk__11976_12418 = G__12442;
count__11977_12419 = G__12443;
i__11978_12420 = G__12444;
continue;
} else {
var G__12446 = cljs.core.next(seq__11974_12432__$1);
var G__12447 = null;
var G__12448 = (0);
var G__12449 = (0);
seq__11974_12417 = G__12446;
chunk__11976_12418 = G__12447;
count__11977_12419 = G__12448;
i__11978_12420 = G__12449;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12415);
}


var G__12450 = seq__11927_12409;
var G__12451 = chunk__11928_12410;
var G__12452 = count__11929_12411;
var G__12453 = (i__11930_12412 + (1));
seq__11927_12409 = G__12450;
chunk__11928_12410 = G__12451;
count__11929_12411 = G__12452;
i__11930_12412 = G__12453;
continue;
} else {
var temp__5823__auto___12456 = cljs.core.seq(seq__11927_12409);
if(temp__5823__auto___12456){
var seq__11927_12458__$1 = temp__5823__auto___12456;
if(cljs.core.chunked_seq_QMARK_(seq__11927_12458__$1)){
var c__5548__auto___12459 = cljs.core.chunk_first(seq__11927_12458__$1);
var G__12460 = cljs.core.chunk_rest(seq__11927_12458__$1);
var G__12461 = c__5548__auto___12459;
var G__12462 = cljs.core.count(c__5548__auto___12459);
var G__12463 = (0);
seq__11927_12409 = G__12460;
chunk__11928_12410 = G__12461;
count__11929_12411 = G__12462;
i__11930_12412 = G__12463;
continue;
} else {
var child_struct_12464 = cljs.core.first(seq__11927_12458__$1);
var children_12465 = shadow.dom.dom_node(child_struct_12464);
if(cljs.core.seq_QMARK_(children_12465)){
var seq__11992_12466 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12465));
var chunk__11994_12467 = null;
var count__11995_12468 = (0);
var i__11996_12469 = (0);
while(true){
if((i__11996_12469 < count__11995_12468)){
var child_12470 = chunk__11994_12467.cljs$core$IIndexed$_nth$arity$2(null,i__11996_12469);
if(cljs.core.truth_(child_12470)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12470);


var G__12472 = seq__11992_12466;
var G__12473 = chunk__11994_12467;
var G__12474 = count__11995_12468;
var G__12475 = (i__11996_12469 + (1));
seq__11992_12466 = G__12472;
chunk__11994_12467 = G__12473;
count__11995_12468 = G__12474;
i__11996_12469 = G__12475;
continue;
} else {
var G__12478 = seq__11992_12466;
var G__12479 = chunk__11994_12467;
var G__12480 = count__11995_12468;
var G__12481 = (i__11996_12469 + (1));
seq__11992_12466 = G__12478;
chunk__11994_12467 = G__12479;
count__11995_12468 = G__12480;
i__11996_12469 = G__12481;
continue;
}
} else {
var temp__5823__auto___12482__$1 = cljs.core.seq(seq__11992_12466);
if(temp__5823__auto___12482__$1){
var seq__11992_12483__$1 = temp__5823__auto___12482__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11992_12483__$1)){
var c__5548__auto___12484 = cljs.core.chunk_first(seq__11992_12483__$1);
var G__12485 = cljs.core.chunk_rest(seq__11992_12483__$1);
var G__12486 = c__5548__auto___12484;
var G__12487 = cljs.core.count(c__5548__auto___12484);
var G__12488 = (0);
seq__11992_12466 = G__12485;
chunk__11994_12467 = G__12486;
count__11995_12468 = G__12487;
i__11996_12469 = G__12488;
continue;
} else {
var child_12489 = cljs.core.first(seq__11992_12483__$1);
if(cljs.core.truth_(child_12489)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12489);


var G__12490 = cljs.core.next(seq__11992_12483__$1);
var G__12491 = null;
var G__12492 = (0);
var G__12493 = (0);
seq__11992_12466 = G__12490;
chunk__11994_12467 = G__12491;
count__11995_12468 = G__12492;
i__11996_12469 = G__12493;
continue;
} else {
var G__12494 = cljs.core.next(seq__11992_12483__$1);
var G__12496 = null;
var G__12497 = (0);
var G__12498 = (0);
seq__11992_12466 = G__12494;
chunk__11994_12467 = G__12496;
count__11995_12468 = G__12497;
i__11996_12469 = G__12498;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12465);
}


var G__12501 = cljs.core.next(seq__11927_12458__$1);
var G__12502 = null;
var G__12503 = (0);
var G__12504 = (0);
seq__11927_12409 = G__12501;
chunk__11928_12410 = G__12502;
count__11929_12411 = G__12503;
i__11930_12412 = G__12504;
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
var seq__12015 = cljs.core.seq(node);
var chunk__12016 = null;
var count__12017 = (0);
var i__12018 = (0);
while(true){
if((i__12018 < count__12017)){
var n = chunk__12016.cljs$core$IIndexed$_nth$arity$2(null,i__12018);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12510 = seq__12015;
var G__12511 = chunk__12016;
var G__12512 = count__12017;
var G__12513 = (i__12018 + (1));
seq__12015 = G__12510;
chunk__12016 = G__12511;
count__12017 = G__12512;
i__12018 = G__12513;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12015);
if(temp__5823__auto__){
var seq__12015__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12015__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__12015__$1);
var G__12516 = cljs.core.chunk_rest(seq__12015__$1);
var G__12517 = c__5548__auto__;
var G__12518 = cljs.core.count(c__5548__auto__);
var G__12519 = (0);
seq__12015 = G__12516;
chunk__12016 = G__12517;
count__12017 = G__12518;
i__12018 = G__12519;
continue;
} else {
var n = cljs.core.first(seq__12015__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12520 = cljs.core.next(seq__12015__$1);
var G__12521 = null;
var G__12522 = (0);
var G__12523 = (0);
seq__12015 = G__12520;
chunk__12016 = G__12521;
count__12017 = G__12522;
i__12018 = G__12523;
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
var G__12026 = arguments.length;
switch (G__12026) {
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
var G__12034 = arguments.length;
switch (G__12034) {
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
var G__12044 = arguments.length;
switch (G__12044) {
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
var or__5025__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
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
var args__5755__auto__ = [];
var len__5749__auto___12538 = arguments.length;
var i__5750__auto___12539 = (0);
while(true){
if((i__5750__auto___12539 < len__5749__auto___12538)){
args__5755__auto__.push((arguments[i__5750__auto___12539]));

var G__12540 = (i__5750__auto___12539 + (1));
i__5750__auto___12539 = G__12540;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12064_12546 = cljs.core.seq(nodes);
var chunk__12065_12547 = null;
var count__12066_12548 = (0);
var i__12067_12549 = (0);
while(true){
if((i__12067_12549 < count__12066_12548)){
var node_12550 = chunk__12065_12547.cljs$core$IIndexed$_nth$arity$2(null,i__12067_12549);
fragment.appendChild(shadow.dom._to_dom(node_12550));


var G__12551 = seq__12064_12546;
var G__12552 = chunk__12065_12547;
var G__12553 = count__12066_12548;
var G__12554 = (i__12067_12549 + (1));
seq__12064_12546 = G__12551;
chunk__12065_12547 = G__12552;
count__12066_12548 = G__12553;
i__12067_12549 = G__12554;
continue;
} else {
var temp__5823__auto___12555 = cljs.core.seq(seq__12064_12546);
if(temp__5823__auto___12555){
var seq__12064_12556__$1 = temp__5823__auto___12555;
if(cljs.core.chunked_seq_QMARK_(seq__12064_12556__$1)){
var c__5548__auto___12557 = cljs.core.chunk_first(seq__12064_12556__$1);
var G__12558 = cljs.core.chunk_rest(seq__12064_12556__$1);
var G__12559 = c__5548__auto___12557;
var G__12560 = cljs.core.count(c__5548__auto___12557);
var G__12561 = (0);
seq__12064_12546 = G__12558;
chunk__12065_12547 = G__12559;
count__12066_12548 = G__12560;
i__12067_12549 = G__12561;
continue;
} else {
var node_12562 = cljs.core.first(seq__12064_12556__$1);
fragment.appendChild(shadow.dom._to_dom(node_12562));


var G__12563 = cljs.core.next(seq__12064_12556__$1);
var G__12564 = null;
var G__12565 = (0);
var G__12566 = (0);
seq__12064_12546 = G__12563;
chunk__12065_12547 = G__12564;
count__12066_12548 = G__12565;
i__12067_12549 = G__12566;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12062){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12062));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12083_12568 = cljs.core.seq(scripts);
var chunk__12084_12569 = null;
var count__12085_12570 = (0);
var i__12086_12571 = (0);
while(true){
if((i__12086_12571 < count__12085_12570)){
var vec__12095_12574 = chunk__12084_12569.cljs$core$IIndexed$_nth$arity$2(null,i__12086_12571);
var script_tag_12575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12095_12574,(0),null);
var script_body_12576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12095_12574,(1),null);
eval(script_body_12576);


var G__12580 = seq__12083_12568;
var G__12581 = chunk__12084_12569;
var G__12582 = count__12085_12570;
var G__12583 = (i__12086_12571 + (1));
seq__12083_12568 = G__12580;
chunk__12084_12569 = G__12581;
count__12085_12570 = G__12582;
i__12086_12571 = G__12583;
continue;
} else {
var temp__5823__auto___12587 = cljs.core.seq(seq__12083_12568);
if(temp__5823__auto___12587){
var seq__12083_12588__$1 = temp__5823__auto___12587;
if(cljs.core.chunked_seq_QMARK_(seq__12083_12588__$1)){
var c__5548__auto___12590 = cljs.core.chunk_first(seq__12083_12588__$1);
var G__12591 = cljs.core.chunk_rest(seq__12083_12588__$1);
var G__12592 = c__5548__auto___12590;
var G__12593 = cljs.core.count(c__5548__auto___12590);
var G__12594 = (0);
seq__12083_12568 = G__12591;
chunk__12084_12569 = G__12592;
count__12085_12570 = G__12593;
i__12086_12571 = G__12594;
continue;
} else {
var vec__12098_12595 = cljs.core.first(seq__12083_12588__$1);
var script_tag_12596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12098_12595,(0),null);
var script_body_12597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12098_12595,(1),null);
eval(script_body_12597);


var G__12598 = cljs.core.next(seq__12083_12588__$1);
var G__12599 = null;
var G__12600 = (0);
var G__12601 = (0);
seq__12083_12568 = G__12598;
chunk__12084_12569 = G__12599;
count__12085_12570 = G__12600;
i__12086_12571 = G__12601;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12102){
var vec__12103 = p__12102;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12103,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12103,(1),null);
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
var G__12109 = arguments.length;
switch (G__12109) {
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
var seq__12114 = cljs.core.seq(style_keys);
var chunk__12115 = null;
var count__12116 = (0);
var i__12117 = (0);
while(true){
if((i__12117 < count__12116)){
var it = chunk__12115.cljs$core$IIndexed$_nth$arity$2(null,i__12117);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12614 = seq__12114;
var G__12615 = chunk__12115;
var G__12616 = count__12116;
var G__12617 = (i__12117 + (1));
seq__12114 = G__12614;
chunk__12115 = G__12615;
count__12116 = G__12616;
i__12117 = G__12617;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12114);
if(temp__5823__auto__){
var seq__12114__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12114__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__12114__$1);
var G__12618 = cljs.core.chunk_rest(seq__12114__$1);
var G__12619 = c__5548__auto__;
var G__12620 = cljs.core.count(c__5548__auto__);
var G__12621 = (0);
seq__12114 = G__12618;
chunk__12115 = G__12619;
count__12116 = G__12620;
i__12117 = G__12621;
continue;
} else {
var it = cljs.core.first(seq__12114__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12622 = cljs.core.next(seq__12114__$1);
var G__12623 = null;
var G__12624 = (0);
var G__12625 = (0);
seq__12114 = G__12622;
chunk__12115 = G__12623;
count__12116 = G__12624;
i__12117 = G__12625;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k12123,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__12129 = k12123;
var G__12129__$1 = (((G__12129 instanceof cljs.core.Keyword))?G__12129.fqn:null);
switch (G__12129__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12123,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__12130){
var vec__12131 = p__12130;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12131,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12131,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12122){
var self__ = this;
var G__12122__$1 = this;
return (new cljs.core.RecordIter((0),G__12122__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12124,other12125){
var self__ = this;
var this12124__$1 = this;
return (((!((other12125 == null)))) && ((((this12124__$1.constructor === other12125.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12124__$1.x,other12125.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12124__$1.y,other12125.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12124__$1.__extmap,other12125.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k12123){
var self__ = this;
var this__5330__auto____$1 = this;
var G__12139 = k12123;
var G__12139__$1 = (((G__12139 instanceof cljs.core.Keyword))?G__12139.fqn:null);
switch (G__12139__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12123);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__12122){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__12140 = cljs.core.keyword_identical_QMARK_;
var expr__12141 = k__5332__auto__;
if(cljs.core.truth_((pred__12140.cljs$core$IFn$_invoke$arity$2 ? pred__12140.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12141) : pred__12140.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__12141)))){
return (new shadow.dom.Coordinate(G__12122,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12140.cljs$core$IFn$_invoke$arity$2 ? pred__12140.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12141) : pred__12140.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__12141)))){
return (new shadow.dom.Coordinate(self__.x,G__12122,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__12122),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__12122){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12122,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12126){
var extmap__5365__auto__ = (function (){var G__12148 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12126,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12126)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12148);
} else {
return G__12148;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12126),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12126),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k12152,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__12157 = k12152;
var G__12157__$1 = (((G__12157 instanceof cljs.core.Keyword))?G__12157.fqn:null);
switch (G__12157__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12152,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__12158){
var vec__12159 = p__12158;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12159,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12159,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.dom.Size{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12151){
var self__ = this;
var G__12151__$1 = this;
return (new cljs.core.RecordIter((0),G__12151__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12153,other12154){
var self__ = this;
var this12153__$1 = this;
return (((!((other12154 == null)))) && ((((this12153__$1.constructor === other12154.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12153__$1.w,other12154.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12153__$1.h,other12154.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12153__$1.__extmap,other12154.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k12152){
var self__ = this;
var this__5330__auto____$1 = this;
var G__12165 = k12152;
var G__12165__$1 = (((G__12165 instanceof cljs.core.Keyword))?G__12165.fqn:null);
switch (G__12165__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12152);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__12151){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__12166 = cljs.core.keyword_identical_QMARK_;
var expr__12167 = k__5332__auto__;
if(cljs.core.truth_((pred__12166.cljs$core$IFn$_invoke$arity$2 ? pred__12166.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12167) : pred__12166.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__12167)))){
return (new shadow.dom.Size(G__12151,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12166.cljs$core$IFn$_invoke$arity$2 ? pred__12166.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12167) : pred__12166.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__12167)))){
return (new shadow.dom.Size(self__.w,G__12151,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__12151),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__12151){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12151,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12155){
var extmap__5365__auto__ = (function (){var G__12173 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12155,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12155)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12173);
} else {
return G__12173;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12155),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12155),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
var a__5613__auto__ = opts;
var l__5614__auto__ = a__5613__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5614__auto__)){
var G__12676 = (i + (1));
var G__12677 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__12676;
ret = G__12677;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12178){
var vec__12179 = p__12178;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12179,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12179,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12183 = arguments.length;
switch (G__12183) {
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
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
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
var G__12679 = ps;
var G__12680 = (i + (1));
el__$1 = G__12679;
i = G__12680;
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
var vec__12184 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12184,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12184,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12184,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12188_12691 = cljs.core.seq(props);
var chunk__12189_12692 = null;
var count__12190_12693 = (0);
var i__12191_12694 = (0);
while(true){
if((i__12191_12694 < count__12190_12693)){
var vec__12200_12695 = chunk__12189_12692.cljs$core$IIndexed$_nth$arity$2(null,i__12191_12694);
var k_12696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12200_12695,(0),null);
var v_12697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12200_12695,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_12696);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12696),v_12697);


var G__12698 = seq__12188_12691;
var G__12699 = chunk__12189_12692;
var G__12700 = count__12190_12693;
var G__12701 = (i__12191_12694 + (1));
seq__12188_12691 = G__12698;
chunk__12189_12692 = G__12699;
count__12190_12693 = G__12700;
i__12191_12694 = G__12701;
continue;
} else {
var temp__5823__auto___12702 = cljs.core.seq(seq__12188_12691);
if(temp__5823__auto___12702){
var seq__12188_12703__$1 = temp__5823__auto___12702;
if(cljs.core.chunked_seq_QMARK_(seq__12188_12703__$1)){
var c__5548__auto___12704 = cljs.core.chunk_first(seq__12188_12703__$1);
var G__12705 = cljs.core.chunk_rest(seq__12188_12703__$1);
var G__12706 = c__5548__auto___12704;
var G__12707 = cljs.core.count(c__5548__auto___12704);
var G__12708 = (0);
seq__12188_12691 = G__12705;
chunk__12189_12692 = G__12706;
count__12190_12693 = G__12707;
i__12191_12694 = G__12708;
continue;
} else {
var vec__12203_12709 = cljs.core.first(seq__12188_12703__$1);
var k_12710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12203_12709,(0),null);
var v_12711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12203_12709,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_12710);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12710),v_12711);


var G__12714 = cljs.core.next(seq__12188_12703__$1);
var G__12715 = null;
var G__12716 = (0);
var G__12717 = (0);
seq__12188_12691 = G__12714;
chunk__12189_12692 = G__12715;
count__12190_12693 = G__12716;
i__12191_12694 = G__12717;
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
var vec__12209 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12209,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12209,(1),null);
var seq__12212_12722 = cljs.core.seq(node_children);
var chunk__12214_12723 = null;
var count__12215_12724 = (0);
var i__12216_12725 = (0);
while(true){
if((i__12216_12725 < count__12215_12724)){
var child_struct_12726 = chunk__12214_12723.cljs$core$IIndexed$_nth$arity$2(null,i__12216_12725);
if((!((child_struct_12726 == null)))){
if(typeof child_struct_12726 === 'string'){
var text_12727 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_12727),child_struct_12726].join(''));
} else {
var children_12732 = shadow.dom.svg_node(child_struct_12726);
if(cljs.core.seq_QMARK_(children_12732)){
var seq__12258_12733 = cljs.core.seq(children_12732);
var chunk__12260_12734 = null;
var count__12261_12735 = (0);
var i__12262_12736 = (0);
while(true){
if((i__12262_12736 < count__12261_12735)){
var child_12737 = chunk__12260_12734.cljs$core$IIndexed$_nth$arity$2(null,i__12262_12736);
if(cljs.core.truth_(child_12737)){
node.appendChild(child_12737);


var G__12738 = seq__12258_12733;
var G__12739 = chunk__12260_12734;
var G__12740 = count__12261_12735;
var G__12741 = (i__12262_12736 + (1));
seq__12258_12733 = G__12738;
chunk__12260_12734 = G__12739;
count__12261_12735 = G__12740;
i__12262_12736 = G__12741;
continue;
} else {
var G__12742 = seq__12258_12733;
var G__12743 = chunk__12260_12734;
var G__12744 = count__12261_12735;
var G__12745 = (i__12262_12736 + (1));
seq__12258_12733 = G__12742;
chunk__12260_12734 = G__12743;
count__12261_12735 = G__12744;
i__12262_12736 = G__12745;
continue;
}
} else {
var temp__5823__auto___12746 = cljs.core.seq(seq__12258_12733);
if(temp__5823__auto___12746){
var seq__12258_12748__$1 = temp__5823__auto___12746;
if(cljs.core.chunked_seq_QMARK_(seq__12258_12748__$1)){
var c__5548__auto___12749 = cljs.core.chunk_first(seq__12258_12748__$1);
var G__12750 = cljs.core.chunk_rest(seq__12258_12748__$1);
var G__12751 = c__5548__auto___12749;
var G__12752 = cljs.core.count(c__5548__auto___12749);
var G__12753 = (0);
seq__12258_12733 = G__12750;
chunk__12260_12734 = G__12751;
count__12261_12735 = G__12752;
i__12262_12736 = G__12753;
continue;
} else {
var child_12754 = cljs.core.first(seq__12258_12748__$1);
if(cljs.core.truth_(child_12754)){
node.appendChild(child_12754);


var G__12755 = cljs.core.next(seq__12258_12748__$1);
var G__12756 = null;
var G__12757 = (0);
var G__12758 = (0);
seq__12258_12733 = G__12755;
chunk__12260_12734 = G__12756;
count__12261_12735 = G__12757;
i__12262_12736 = G__12758;
continue;
} else {
var G__12759 = cljs.core.next(seq__12258_12748__$1);
var G__12760 = null;
var G__12761 = (0);
var G__12762 = (0);
seq__12258_12733 = G__12759;
chunk__12260_12734 = G__12760;
count__12261_12735 = G__12761;
i__12262_12736 = G__12762;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_12732);
}
}


var G__12763 = seq__12212_12722;
var G__12764 = chunk__12214_12723;
var G__12765 = count__12215_12724;
var G__12766 = (i__12216_12725 + (1));
seq__12212_12722 = G__12763;
chunk__12214_12723 = G__12764;
count__12215_12724 = G__12765;
i__12216_12725 = G__12766;
continue;
} else {
var G__12767 = seq__12212_12722;
var G__12768 = chunk__12214_12723;
var G__12769 = count__12215_12724;
var G__12770 = (i__12216_12725 + (1));
seq__12212_12722 = G__12767;
chunk__12214_12723 = G__12768;
count__12215_12724 = G__12769;
i__12216_12725 = G__12770;
continue;
}
} else {
var temp__5823__auto___12771 = cljs.core.seq(seq__12212_12722);
if(temp__5823__auto___12771){
var seq__12212_12772__$1 = temp__5823__auto___12771;
if(cljs.core.chunked_seq_QMARK_(seq__12212_12772__$1)){
var c__5548__auto___12773 = cljs.core.chunk_first(seq__12212_12772__$1);
var G__12774 = cljs.core.chunk_rest(seq__12212_12772__$1);
var G__12775 = c__5548__auto___12773;
var G__12776 = cljs.core.count(c__5548__auto___12773);
var G__12777 = (0);
seq__12212_12722 = G__12774;
chunk__12214_12723 = G__12775;
count__12215_12724 = G__12776;
i__12216_12725 = G__12777;
continue;
} else {
var child_struct_12779 = cljs.core.first(seq__12212_12772__$1);
if((!((child_struct_12779 == null)))){
if(typeof child_struct_12779 === 'string'){
var text_12781 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_12781),child_struct_12779].join(''));
} else {
var children_12782 = shadow.dom.svg_node(child_struct_12779);
if(cljs.core.seq_QMARK_(children_12782)){
var seq__12276_12783 = cljs.core.seq(children_12782);
var chunk__12278_12784 = null;
var count__12279_12785 = (0);
var i__12280_12786 = (0);
while(true){
if((i__12280_12786 < count__12279_12785)){
var child_12808 = chunk__12278_12784.cljs$core$IIndexed$_nth$arity$2(null,i__12280_12786);
if(cljs.core.truth_(child_12808)){
node.appendChild(child_12808);


var G__12809 = seq__12276_12783;
var G__12810 = chunk__12278_12784;
var G__12811 = count__12279_12785;
var G__12812 = (i__12280_12786 + (1));
seq__12276_12783 = G__12809;
chunk__12278_12784 = G__12810;
count__12279_12785 = G__12811;
i__12280_12786 = G__12812;
continue;
} else {
var G__12813 = seq__12276_12783;
var G__12814 = chunk__12278_12784;
var G__12815 = count__12279_12785;
var G__12816 = (i__12280_12786 + (1));
seq__12276_12783 = G__12813;
chunk__12278_12784 = G__12814;
count__12279_12785 = G__12815;
i__12280_12786 = G__12816;
continue;
}
} else {
var temp__5823__auto___12817__$1 = cljs.core.seq(seq__12276_12783);
if(temp__5823__auto___12817__$1){
var seq__12276_12818__$1 = temp__5823__auto___12817__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12276_12818__$1)){
var c__5548__auto___12819 = cljs.core.chunk_first(seq__12276_12818__$1);
var G__12820 = cljs.core.chunk_rest(seq__12276_12818__$1);
var G__12821 = c__5548__auto___12819;
var G__12822 = cljs.core.count(c__5548__auto___12819);
var G__12823 = (0);
seq__12276_12783 = G__12820;
chunk__12278_12784 = G__12821;
count__12279_12785 = G__12822;
i__12280_12786 = G__12823;
continue;
} else {
var child_12824 = cljs.core.first(seq__12276_12818__$1);
if(cljs.core.truth_(child_12824)){
node.appendChild(child_12824);


var G__12825 = cljs.core.next(seq__12276_12818__$1);
var G__12826 = null;
var G__12827 = (0);
var G__12828 = (0);
seq__12276_12783 = G__12825;
chunk__12278_12784 = G__12826;
count__12279_12785 = G__12827;
i__12280_12786 = G__12828;
continue;
} else {
var G__12829 = cljs.core.next(seq__12276_12818__$1);
var G__12830 = null;
var G__12831 = (0);
var G__12832 = (0);
seq__12276_12783 = G__12829;
chunk__12278_12784 = G__12830;
count__12279_12785 = G__12831;
i__12280_12786 = G__12832;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_12782);
}
}


var G__12833 = cljs.core.next(seq__12212_12772__$1);
var G__12834 = null;
var G__12835 = (0);
var G__12836 = (0);
seq__12212_12722 = G__12833;
chunk__12214_12723 = G__12834;
count__12215_12724 = G__12835;
i__12216_12725 = G__12836;
continue;
} else {
var G__12837 = cljs.core.next(seq__12212_12772__$1);
var G__12838 = null;
var G__12839 = (0);
var G__12840 = (0);
seq__12212_12722 = G__12837;
chunk__12214_12723 = G__12838;
count__12215_12724 = G__12839;
i__12216_12725 = G__12840;
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
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
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

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___12845 = arguments.length;
var i__5750__auto___12846 = (0);
while(true){
if((i__5750__auto___12846 < len__5749__auto___12845)){
args__5755__auto__.push((arguments[i__5750__auto___12846]));

var G__12847 = (i__5750__auto___12846 + (1));
i__5750__auto___12846 = G__12847;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12315){
var G__12316 = cljs.core.first(seq12315);
var seq12315__$1 = cljs.core.next(seq12315);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12316,seq12315__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
