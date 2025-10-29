goog.provide('todo_frontend.core');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
console.log("\u2705 Frontend ClojureScript iniciado!");
if((typeof todo_frontend !== 'undefined') && (typeof todo_frontend.core !== 'undefined') && (typeof todo_frontend.core.tasks !== 'undefined')){
} else {
todo_frontend.core.tasks = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
todo_frontend.core.api_url = "http://localhost:3000/tasks";
todo_frontend.core.fetch_tasks = (function todo_frontend$core$fetch_tasks(){
var c__11575__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11576__auto__ = (function (){var switch__11505__auto__ = (function (state_12634){
var state_val_12635 = (state_12634[(1)]);
if((state_val_12635 === (1))){
var inst_12623 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_12624 = [false];
var inst_12625 = cljs.core.PersistentHashMap.fromArrays(inst_12623,inst_12624);
var inst_12626 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(todo_frontend.core.api_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_12625], 0));
var state_12634__$1 = state_12634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12634__$1,(2),inst_12626);
} else {
if((state_val_12635 === (2))){
var inst_12628 = (state_12634[(2)]);
var inst_12629 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_12628);
var inst_12630 = cljs.core.reset_BANG_(todo_frontend.core.tasks,inst_12629);
var inst_12631 = cljs.core.clj__GT_js(inst_12629);
var inst_12632 = console.log("Tarefas carregadas:",inst_12631);
var state_12634__$1 = (function (){var statearr_12636 = state_12634;
(statearr_12636[(7)] = inst_12630);

return statearr_12636;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12634__$1,inst_12632);
} else {
return null;
}
}
});
return (function() {
var todo_frontend$core$fetch_tasks_$_state_machine__11506__auto__ = null;
var todo_frontend$core$fetch_tasks_$_state_machine__11506__auto____0 = (function (){
var statearr_12637 = [null,null,null,null,null,null,null,null];
(statearr_12637[(0)] = todo_frontend$core$fetch_tasks_$_state_machine__11506__auto__);

(statearr_12637[(1)] = (1));

return statearr_12637;
});
var todo_frontend$core$fetch_tasks_$_state_machine__11506__auto____1 = (function (state_12634){
while(true){
var ret_value__11507__auto__ = (function (){try{while(true){
var result__11508__auto__ = switch__11505__auto__(state_12634);
if(cljs.core.keyword_identical_QMARK_(result__11508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11508__auto__;
}
break;
}
}catch (e12638){var ex__11509__auto__ = e12638;
var statearr_12639_12702 = state_12634;
(statearr_12639_12702[(2)] = ex__11509__auto__);


if(cljs.core.seq((state_12634[(4)]))){
var statearr_12640_12703 = state_12634;
(statearr_12640_12703[(1)] = cljs.core.first((state_12634[(4)])));

} else {
throw ex__11509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12704 = state_12634;
state_12634 = G__12704;
continue;
} else {
return ret_value__11507__auto__;
}
break;
}
});
todo_frontend$core$fetch_tasks_$_state_machine__11506__auto__ = function(state_12634){
switch(arguments.length){
case 0:
return todo_frontend$core$fetch_tasks_$_state_machine__11506__auto____0.call(this);
case 1:
return todo_frontend$core$fetch_tasks_$_state_machine__11506__auto____1.call(this,state_12634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
todo_frontend$core$fetch_tasks_$_state_machine__11506__auto__.cljs$core$IFn$_invoke$arity$0 = todo_frontend$core$fetch_tasks_$_state_machine__11506__auto____0;
todo_frontend$core$fetch_tasks_$_state_machine__11506__auto__.cljs$core$IFn$_invoke$arity$1 = todo_frontend$core$fetch_tasks_$_state_machine__11506__auto____1;
return todo_frontend$core$fetch_tasks_$_state_machine__11506__auto__;
})()
})();
var state__11577__auto__ = (function (){var statearr_12641 = f__11576__auto__();
(statearr_12641[(6)] = c__11575__auto__);

return statearr_12641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11577__auto__);
}));

return c__11575__auto__;
});
todo_frontend.core.add_task = (function todo_frontend$core$add_task(title){
if(cljs.core.seq(title)){
var c__11575__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11576__auto__ = (function (){var switch__11505__auto__ = (function (state_12653){
var state_val_12654 = (state_12653[(1)]);
if((state_val_12654 === (1))){
var inst_12642 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_12643 = [new cljs.core.Keyword(null,"title","title",636505583)];
var inst_12644 = [title];
var inst_12645 = cljs.core.PersistentHashMap.fromArrays(inst_12643,inst_12644);
var inst_12646 = [inst_12645,false];
var inst_12647 = cljs.core.PersistentHashMap.fromArrays(inst_12642,inst_12646);
var inst_12648 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(todo_frontend.core.api_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_12647], 0));
var state_12653__$1 = state_12653;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12653__$1,(2),inst_12648);
} else {
if((state_val_12654 === (2))){
var inst_12650 = (state_12653[(2)]);
var inst_12651 = todo_frontend.core.fetch_tasks();
var state_12653__$1 = (function (){var statearr_12655 = state_12653;
(statearr_12655[(7)] = inst_12650);

return statearr_12655;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12653__$1,inst_12651);
} else {
return null;
}
}
});
return (function() {
var todo_frontend$core$add_task_$_state_machine__11506__auto__ = null;
var todo_frontend$core$add_task_$_state_machine__11506__auto____0 = (function (){
var statearr_12656 = [null,null,null,null,null,null,null,null];
(statearr_12656[(0)] = todo_frontend$core$add_task_$_state_machine__11506__auto__);

(statearr_12656[(1)] = (1));

return statearr_12656;
});
var todo_frontend$core$add_task_$_state_machine__11506__auto____1 = (function (state_12653){
while(true){
var ret_value__11507__auto__ = (function (){try{while(true){
var result__11508__auto__ = switch__11505__auto__(state_12653);
if(cljs.core.keyword_identical_QMARK_(result__11508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11508__auto__;
}
break;
}
}catch (e12657){var ex__11509__auto__ = e12657;
var statearr_12658_12705 = state_12653;
(statearr_12658_12705[(2)] = ex__11509__auto__);


if(cljs.core.seq((state_12653[(4)]))){
var statearr_12659_12706 = state_12653;
(statearr_12659_12706[(1)] = cljs.core.first((state_12653[(4)])));

} else {
throw ex__11509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12707 = state_12653;
state_12653 = G__12707;
continue;
} else {
return ret_value__11507__auto__;
}
break;
}
});
todo_frontend$core$add_task_$_state_machine__11506__auto__ = function(state_12653){
switch(arguments.length){
case 0:
return todo_frontend$core$add_task_$_state_machine__11506__auto____0.call(this);
case 1:
return todo_frontend$core$add_task_$_state_machine__11506__auto____1.call(this,state_12653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
todo_frontend$core$add_task_$_state_machine__11506__auto__.cljs$core$IFn$_invoke$arity$0 = todo_frontend$core$add_task_$_state_machine__11506__auto____0;
todo_frontend$core$add_task_$_state_machine__11506__auto__.cljs$core$IFn$_invoke$arity$1 = todo_frontend$core$add_task_$_state_machine__11506__auto____1;
return todo_frontend$core$add_task_$_state_machine__11506__auto__;
})()
})();
var state__11577__auto__ = (function (){var statearr_12660 = f__11576__auto__();
(statearr_12660[(6)] = c__11575__auto__);

return statearr_12660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11577__auto__);
}));

return c__11575__auto__;
} else {
return null;
}
});
todo_frontend.core.toggle_task = (function todo_frontend$core$toggle_task(id){
var c__11575__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11576__auto__ = (function (){var switch__11505__auto__ = (function (state_12670){
var state_val_12671 = (state_12670[(1)]);
if((state_val_12671 === (1))){
var inst_12661 = [todo_frontend.core.api_url,"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var inst_12662 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_12663 = [false];
var inst_12664 = cljs.core.PersistentHashMap.fromArrays(inst_12662,inst_12663);
var inst_12665 = cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(inst_12661,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_12664], 0));
var state_12670__$1 = state_12670;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12670__$1,(2),inst_12665);
} else {
if((state_val_12671 === (2))){
var inst_12667 = (state_12670[(2)]);
var inst_12668 = todo_frontend.core.fetch_tasks();
var state_12670__$1 = (function (){var statearr_12672 = state_12670;
(statearr_12672[(7)] = inst_12667);

return statearr_12672;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12670__$1,inst_12668);
} else {
return null;
}
}
});
return (function() {
var todo_frontend$core$toggle_task_$_state_machine__11506__auto__ = null;
var todo_frontend$core$toggle_task_$_state_machine__11506__auto____0 = (function (){
var statearr_12673 = [null,null,null,null,null,null,null,null];
(statearr_12673[(0)] = todo_frontend$core$toggle_task_$_state_machine__11506__auto__);

(statearr_12673[(1)] = (1));

return statearr_12673;
});
var todo_frontend$core$toggle_task_$_state_machine__11506__auto____1 = (function (state_12670){
while(true){
var ret_value__11507__auto__ = (function (){try{while(true){
var result__11508__auto__ = switch__11505__auto__(state_12670);
if(cljs.core.keyword_identical_QMARK_(result__11508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11508__auto__;
}
break;
}
}catch (e12674){var ex__11509__auto__ = e12674;
var statearr_12675_12708 = state_12670;
(statearr_12675_12708[(2)] = ex__11509__auto__);


if(cljs.core.seq((state_12670[(4)]))){
var statearr_12676_12709 = state_12670;
(statearr_12676_12709[(1)] = cljs.core.first((state_12670[(4)])));

} else {
throw ex__11509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12710 = state_12670;
state_12670 = G__12710;
continue;
} else {
return ret_value__11507__auto__;
}
break;
}
});
todo_frontend$core$toggle_task_$_state_machine__11506__auto__ = function(state_12670){
switch(arguments.length){
case 0:
return todo_frontend$core$toggle_task_$_state_machine__11506__auto____0.call(this);
case 1:
return todo_frontend$core$toggle_task_$_state_machine__11506__auto____1.call(this,state_12670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
todo_frontend$core$toggle_task_$_state_machine__11506__auto__.cljs$core$IFn$_invoke$arity$0 = todo_frontend$core$toggle_task_$_state_machine__11506__auto____0;
todo_frontend$core$toggle_task_$_state_machine__11506__auto__.cljs$core$IFn$_invoke$arity$1 = todo_frontend$core$toggle_task_$_state_machine__11506__auto____1;
return todo_frontend$core$toggle_task_$_state_machine__11506__auto__;
})()
})();
var state__11577__auto__ = (function (){var statearr_12677 = f__11576__auto__();
(statearr_12677[(6)] = c__11575__auto__);

return statearr_12677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11577__auto__);
}));

return c__11575__auto__;
});
todo_frontend.core.delete_task = (function todo_frontend$core$delete_task(id){
var c__11575__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11576__auto__ = (function (){var switch__11505__auto__ = (function (state_12687){
var state_val_12688 = (state_12687[(1)]);
if((state_val_12688 === (1))){
var inst_12678 = [todo_frontend.core.api_url,"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var inst_12679 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_12680 = [false];
var inst_12681 = cljs.core.PersistentHashMap.fromArrays(inst_12679,inst_12680);
var inst_12682 = cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(inst_12678,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_12681], 0));
var state_12687__$1 = state_12687;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12687__$1,(2),inst_12682);
} else {
if((state_val_12688 === (2))){
var inst_12684 = (state_12687[(2)]);
var inst_12685 = todo_frontend.core.fetch_tasks();
var state_12687__$1 = (function (){var statearr_12689 = state_12687;
(statearr_12689[(7)] = inst_12684);

return statearr_12689;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12687__$1,inst_12685);
} else {
return null;
}
}
});
return (function() {
var todo_frontend$core$delete_task_$_state_machine__11506__auto__ = null;
var todo_frontend$core$delete_task_$_state_machine__11506__auto____0 = (function (){
var statearr_12690 = [null,null,null,null,null,null,null,null];
(statearr_12690[(0)] = todo_frontend$core$delete_task_$_state_machine__11506__auto__);

(statearr_12690[(1)] = (1));

return statearr_12690;
});
var todo_frontend$core$delete_task_$_state_machine__11506__auto____1 = (function (state_12687){
while(true){
var ret_value__11507__auto__ = (function (){try{while(true){
var result__11508__auto__ = switch__11505__auto__(state_12687);
if(cljs.core.keyword_identical_QMARK_(result__11508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11508__auto__;
}
break;
}
}catch (e12691){var ex__11509__auto__ = e12691;
var statearr_12692_12711 = state_12687;
(statearr_12692_12711[(2)] = ex__11509__auto__);


if(cljs.core.seq((state_12687[(4)]))){
var statearr_12693_12712 = state_12687;
(statearr_12693_12712[(1)] = cljs.core.first((state_12687[(4)])));

} else {
throw ex__11509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12713 = state_12687;
state_12687 = G__12713;
continue;
} else {
return ret_value__11507__auto__;
}
break;
}
});
todo_frontend$core$delete_task_$_state_machine__11506__auto__ = function(state_12687){
switch(arguments.length){
case 0:
return todo_frontend$core$delete_task_$_state_machine__11506__auto____0.call(this);
case 1:
return todo_frontend$core$delete_task_$_state_machine__11506__auto____1.call(this,state_12687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
todo_frontend$core$delete_task_$_state_machine__11506__auto__.cljs$core$IFn$_invoke$arity$0 = todo_frontend$core$delete_task_$_state_machine__11506__auto____0;
todo_frontend$core$delete_task_$_state_machine__11506__auto__.cljs$core$IFn$_invoke$arity$1 = todo_frontend$core$delete_task_$_state_machine__11506__auto____1;
return todo_frontend$core$delete_task_$_state_machine__11506__auto__;
})()
})();
var state__11577__auto__ = (function (){var statearr_12694 = f__11576__auto__();
(statearr_12694[(6)] = c__11575__auto__);

return statearr_12694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11577__auto__);
}));

return c__11575__auto__;
});
todo_frontend.core.task_item = (function todo_frontend$core$task_item(p__12695){
var map__12696 = p__12695;
var map__12696__$1 = cljs.core.__destructure_map(map__12696);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12696__$1,new cljs.core.Keyword("task","id","task/id",-1375673137));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12696__$1,new cljs.core.Keyword("task","title","task/title",628775788));
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12696__$1,new cljs.core.Keyword("task","done","task/done",-886317915));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 0",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid #eee"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"gap","gap",80255254),"8px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),done,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return todo_frontend.core.toggle_task(id);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),(cljs.core.truth_(done)?"line-through":null),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(done)?"#888":"#222"),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px"], null)], null),title], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return todo_frontend.core.delete_task(id);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"background","background",-863952629),"none",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px",new cljs.core.Keyword(null,"color","color",1011675173),"#e74c3c"], null)], null),"\uD83D\uDDD1\uFE0F"], null)], null);
});
todo_frontend.core.task_list = (function todo_frontend$core$task_list(){
var new_task = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Inter, sans-serif",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"420px",new cljs.core.Keyword(null,"margin","margin",-995903681),"60px auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"24px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 2px 12px rgba(0,0,0,0.1)",new cljs.core.Keyword(null,"background","background",-863952629),"#fff"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"16px",new cljs.core.Keyword(null,"color","color",1011675173),"#333"], null)], null),"\uD83D\uDCDD Lista de Tarefas"], null),((cljs.core.empty_QMARK_(cljs.core.deref(todo_frontend.core.tasks)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"color","color",1011675173),"#777"], null)], null),"Nenhuma tarefa ainda."], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"list-style","list-style",-809622358),"none",new cljs.core.Keyword(null,"padding","padding",1660304693),(0)], null)], null),(function (){var iter__5503__auto__ = (function todo_frontend$core$task_list_$_iter__12698(s__12699){
return (new cljs.core.LazySeq(null,(function (){
var s__12699__$1 = s__12699;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__12699__$1);
if(temp__5823__auto__){
var s__12699__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12699__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__12699__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__12701 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__12700 = (0);
while(true){
if((i__12700 < size__5502__auto__)){
var t = cljs.core._nth(c__5501__auto__,i__12700);
cljs.core.chunk_append(b__12701,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_frontend.core.task_item,t], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("task","id","task/id",-1375673137).cljs$core$IFn$_invoke$arity$1(t)], null)));

var G__12714 = (i__12700 + (1));
i__12700 = G__12714;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12701),todo_frontend$core$task_list_$_iter__12698(cljs.core.chunk_rest(s__12699__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12701),null);
}
} else {
var t = cljs.core.first(s__12699__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_frontend.core.task_item,t], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("task","id","task/id",-1375673137).cljs$core$IFn$_invoke$arity$1(t)], null)),todo_frontend$core$task_list_$_iter__12698(cljs.core.rest(s__12699__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.deref(todo_frontend.core.tasks));
})()], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"20px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Nova tarefa...",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(new_task),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__12697_SHARP_){
return cljs.core.reset_BANG_(new_task,p1__12697_SHARP_.target.value);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ccc",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
todo_frontend.core.add_task(cljs.core.deref(new_task));

return cljs.core.reset_BANG_(new_task,"");
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"#3498db",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 18px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),"Adicionar"], null)], null)], null);
});
});
todo_frontend.core.init = (function todo_frontend$core$init(){
todo_frontend.core.fetch_tasks();

var root = module$node_modules$react_dom$client.createRoot(document.getElementById("app"));
return root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_frontend.core.task_list], null)));
});

//# sourceMappingURL=todo_frontend.core.js.map
