goog.provide('table_editor.channels');
table_editor.channels.large_file_size = (10000);
table_editor.channels.get_first = (function table_editor$channels$get_first(e){
return (e.target.files[(0)]);
});
table_editor.channels.extract_result = (function table_editor$channels$extract_result(content){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.labs.format.csv.parse(content.target.result));
});
table_editor.channels.file_uploaded = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1(table_editor.channels.get_first));
table_editor.channels.file_read = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1(table_editor.channels.extract_result));
var c__28103__auto___31461 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28104__auto__ = (function (){var switch__28011__auto__ = (function (state_31425){
var state_val_31426 = (state_31425[(1)]);
if((state_val_31426 === (1))){
var state_31425__$1 = state_31425;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31425__$1,(2),table_editor.channels.file_uploaded);
} else {
if((state_val_31426 === (2))){
var inst_31395 = (state_31425[(2)]);
var inst_31396 = inst_31395;
var state_31425__$1 = (function (){var statearr_31427 = state_31425;
(statearr_31427[(7)] = inst_31396);

return statearr_31427;
})();
var statearr_31428_31462 = state_31425__$1;
(statearr_31428_31462[(2)] = null);

(statearr_31428_31462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (3))){
var inst_31399 = (state_31425[(8)]);
var inst_31396 = (state_31425[(7)]);
var inst_31398 = (new FileReader());
var inst_31399__$1 = inst_31396.size;
var inst_31400 = (inst_31399__$1 > table_editor.channels.large_file_size);
var state_31425__$1 = (function (){var statearr_31429 = state_31425;
(statearr_31429[(8)] = inst_31399__$1);

(statearr_31429[(9)] = inst_31398);

return statearr_31429;
})();
if(cljs.core.truth_(inst_31400)){
var statearr_31430_31463 = state_31425__$1;
(statearr_31430_31463[(1)] = (5));

} else {
var statearr_31431_31464 = state_31425__$1;
(statearr_31431_31464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (4))){
var inst_31423 = (state_31425[(2)]);
var state_31425__$1 = state_31425;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31425__$1,inst_31423);
} else {
if((state_val_31426 === (5))){
var inst_31402 = [new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684)];
var inst_31403 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(table_editor.channels.large_file_size);
var inst_31404 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2("File is too large! Max possible size is ",inst_31403);
var inst_31405 = [inst_31404];
var inst_31406 = cljs.core.PersistentHashMap.fromArrays(inst_31402,inst_31405);
var inst_31407 = cljs.core.reset_BANG_(table_editor.state.state,inst_31406);
var state_31425__$1 = state_31425;
var statearr_31432_31465 = state_31425__$1;
(statearr_31432_31465[(2)] = inst_31407);

(statearr_31432_31465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (6))){
var inst_31399 = (state_31425[(8)]);
var inst_31396 = (state_31425[(7)]);
var inst_31398 = (state_31425[(9)]);
var inst_31409 = [new cljs.core.Keyword(null,"file-name","file-name",-1654217259),new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684)];
var inst_31410 = inst_31396.name;
var inst_31411 = [inst_31410,null];
var inst_31412 = cljs.core.PersistentHashMap.fromArrays(inst_31409,inst_31411);
var inst_31413 = cljs.core.reset_BANG_(table_editor.state.state,inst_31412);
var inst_31414 = (function (){var file = inst_31396;
var file_reader = inst_31398;
var size = inst_31399;
return (function (p1__31393_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(table_editor.channels.file_read,p1__31393_SHARP_);
});
})();
var inst_31415 = (inst_31398.onload = inst_31414);
var inst_31416 = inst_31398.readAsText(inst_31396);
var state_31425__$1 = (function (){var statearr_31433 = state_31425;
(statearr_31433[(10)] = inst_31413);

(statearr_31433[(11)] = inst_31415);

return statearr_31433;
})();
var statearr_31434_31467 = state_31425__$1;
(statearr_31434_31467[(2)] = inst_31416);

(statearr_31434_31467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (7))){
var inst_31418 = (state_31425[(2)]);
var state_31425__$1 = (function (){var statearr_31435 = state_31425;
(statearr_31435[(12)] = inst_31418);

return statearr_31435;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31425__$1,(8),table_editor.channels.file_uploaded);
} else {
if((state_val_31426 === (8))){
var inst_31420 = (state_31425[(2)]);
var inst_31396 = inst_31420;
var state_31425__$1 = (function (){var statearr_31436 = state_31425;
(statearr_31436[(7)] = inst_31396);

return statearr_31436;
})();
var statearr_31437_31468 = state_31425__$1;
(statearr_31437_31468[(2)] = null);

(statearr_31437_31468[(1)] = (3));


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
});
return (function() {
var table_editor$channels$state_machine__28012__auto__ = null;
var table_editor$channels$state_machine__28012__auto____0 = (function (){
var statearr_31438 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31438[(0)] = table_editor$channels$state_machine__28012__auto__);

(statearr_31438[(1)] = (1));

return statearr_31438;
});
var table_editor$channels$state_machine__28012__auto____1 = (function (state_31425){
while(true){
var ret_value__28013__auto__ = (function (){try{while(true){
var result__28014__auto__ = switch__28011__auto__(state_31425);
if(cljs.core.keyword_identical_QMARK_(result__28014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28014__auto__;
}
break;
}
}catch (e31439){var ex__28015__auto__ = e31439;
var statearr_31440_31469 = state_31425;
(statearr_31440_31469[(2)] = ex__28015__auto__);


if(cljs.core.seq((state_31425[(4)]))){
var statearr_31441_31470 = state_31425;
(statearr_31441_31470[(1)] = cljs.core.first((state_31425[(4)])));

} else {
throw ex__28015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31471 = state_31425;
state_31425 = G__31471;
continue;
} else {
return ret_value__28013__auto__;
}
break;
}
});
table_editor$channels$state_machine__28012__auto__ = function(state_31425){
switch(arguments.length){
case 0:
return table_editor$channels$state_machine__28012__auto____0.call(this);
case 1:
return table_editor$channels$state_machine__28012__auto____1.call(this,state_31425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
table_editor$channels$state_machine__28012__auto__.cljs$core$IFn$_invoke$arity$0 = table_editor$channels$state_machine__28012__auto____0;
table_editor$channels$state_machine__28012__auto__.cljs$core$IFn$_invoke$arity$1 = table_editor$channels$state_machine__28012__auto____1;
return table_editor$channels$state_machine__28012__auto__;
})()
})();
var state__28105__auto__ = (function (){var statearr_31442 = f__28104__auto__();
(statearr_31442[(6)] = c__28103__auto___31461);

return statearr_31442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28105__auto__);
}));

var c__28103__auto___31472 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28104__auto__ = (function (){var switch__28011__auto__ = (function (state_31451){
var state_val_31452 = (state_31451[(1)]);
if((state_val_31452 === (1))){
var state_31451__$1 = state_31451;
var statearr_31453_31473 = state_31451__$1;
(statearr_31453_31473[(2)] = null);

(statearr_31453_31473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31452 === (2))){
var state_31451__$1 = state_31451;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31451__$1,(4),table_editor.channels.file_read);
} else {
if((state_val_31452 === (3))){
var inst_31449 = (state_31451[(2)]);
var state_31451__$1 = state_31451;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31451__$1,inst_31449);
} else {
if((state_val_31452 === (4))){
var inst_31445 = (state_31451[(2)]);
var inst_31446 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(table_editor.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),inst_31445);
var state_31451__$1 = (function (){var statearr_31454 = state_31451;
(statearr_31454[(7)] = inst_31446);

return statearr_31454;
})();
var statearr_31455_31474 = state_31451__$1;
(statearr_31455_31474[(2)] = null);

(statearr_31455_31474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var table_editor$channels$state_machine__28012__auto__ = null;
var table_editor$channels$state_machine__28012__auto____0 = (function (){
var statearr_31456 = [null,null,null,null,null,null,null,null];
(statearr_31456[(0)] = table_editor$channels$state_machine__28012__auto__);

(statearr_31456[(1)] = (1));

return statearr_31456;
});
var table_editor$channels$state_machine__28012__auto____1 = (function (state_31451){
while(true){
var ret_value__28013__auto__ = (function (){try{while(true){
var result__28014__auto__ = switch__28011__auto__(state_31451);
if(cljs.core.keyword_identical_QMARK_(result__28014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28014__auto__;
}
break;
}
}catch (e31457){var ex__28015__auto__ = e31457;
var statearr_31458_31475 = state_31451;
(statearr_31458_31475[(2)] = ex__28015__auto__);


if(cljs.core.seq((state_31451[(4)]))){
var statearr_31459_31476 = state_31451;
(statearr_31459_31476[(1)] = cljs.core.first((state_31451[(4)])));

} else {
throw ex__28015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31477 = state_31451;
state_31451 = G__31477;
continue;
} else {
return ret_value__28013__auto__;
}
break;
}
});
table_editor$channels$state_machine__28012__auto__ = function(state_31451){
switch(arguments.length){
case 0:
return table_editor$channels$state_machine__28012__auto____0.call(this);
case 1:
return table_editor$channels$state_machine__28012__auto____1.call(this,state_31451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
table_editor$channels$state_machine__28012__auto__.cljs$core$IFn$_invoke$arity$0 = table_editor$channels$state_machine__28012__auto____0;
table_editor$channels$state_machine__28012__auto__.cljs$core$IFn$_invoke$arity$1 = table_editor$channels$state_machine__28012__auto____1;
return table_editor$channels$state_machine__28012__auto__;
})()
})();
var state__28105__auto__ = (function (){var statearr_31460 = f__28104__auto__();
(statearr_31460[(6)] = c__28103__auto___31472);

return statearr_31460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28105__auto__);
}));


//# sourceMappingURL=table_editor.channels.js.map
