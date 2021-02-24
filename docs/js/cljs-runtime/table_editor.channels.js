goog.provide('table_editor.channels');
table_editor.channels.large_file_size = (10000);
table_editor.channels.first_correct = (function table_editor$channels$first_correct(row){
return (((cljs.core.count(row) === (2))) && (cljs.core.every_QMARK_((function (p1__43176_SHARP_){
return table_editor.utils.non_number(p1__43176_SHARP_);
}),row)));
});
table_editor.channels.rest_correct = (function table_editor$channels$rest_correct(rows){
return cljs.core.every_QMARK_((function (p1__43177_SHARP_){
if((cljs.core.count(p1__43177_SHARP_) === (2))){
var and__4115__auto__ = table_editor.utils.non_number(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__43177_SHARP_,(0)));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(table_editor.utils.non_number(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__43177_SHARP_,(1))));
} else {
return and__4115__auto__;
}
} else {
return false;
}
}),rows);
});
table_editor.channels.is_valid = (function table_editor$channels$is_valid(content){
if((((content == null)) || ((cljs.core.count(content) === (0))))){
return true;
} else {
var fst = cljs.core.first(content);
var rst = cljs.core.rest(content);
return ((table_editor.channels.first_correct(fst)) && (table_editor.channels.rest_correct(rst)));
}
});
table_editor.channels.get_first = (function table_editor$channels$get_first(e){
return (e.target.files[(0)]);
});
table_editor.channels.extract_result = (function table_editor$channels$extract_result(content){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.labs.format.csv.parse(content.target.result));
});
table_editor.channels.file_uploaded = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1(table_editor.channels.get_first));
table_editor.channels.file_read = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1(table_editor.channels.extract_result));
table_editor.channels.table_updated = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__28103__auto___43298 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28104__auto__ = (function (){var switch__28011__auto__ = (function (state_43212){
var state_val_43213 = (state_43212[(1)]);
if((state_val_43213 === (1))){
var state_43212__$1 = state_43212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43212__$1,(2),table_editor.channels.file_uploaded);
} else {
if((state_val_43213 === (2))){
var inst_43180 = (state_43212[(2)]);
var inst_43181 = inst_43180;
var state_43212__$1 = (function (){var statearr_43214 = state_43212;
(statearr_43214[(7)] = inst_43181);

return statearr_43214;
})();
var statearr_43215_43299 = state_43212__$1;
(statearr_43215_43299[(2)] = null);

(statearr_43215_43299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43213 === (3))){
var inst_43184 = (state_43212[(8)]);
var inst_43181 = (state_43212[(7)]);
var inst_43183 = (new FileReader());
var inst_43184__$1 = inst_43181.size;
var inst_43185 = (inst_43184__$1 > table_editor.channels.large_file_size);
var state_43212__$1 = (function (){var statearr_43216 = state_43212;
(statearr_43216[(8)] = inst_43184__$1);

(statearr_43216[(9)] = inst_43183);

return statearr_43216;
})();
if(cljs.core.truth_(inst_43185)){
var statearr_43217_43301 = state_43212__$1;
(statearr_43217_43301[(1)] = (5));

} else {
var statearr_43218_43303 = state_43212__$1;
(statearr_43218_43303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43213 === (4))){
var inst_43210 = (state_43212[(2)]);
var state_43212__$1 = state_43212;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43212__$1,inst_43210);
} else {
if((state_val_43213 === (5))){
var inst_43187 = [new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684)];
var inst_43188 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(table_editor.channels.large_file_size);
var inst_43189 = (table_editor.channels.large_file_size / (1000));
var inst_43190 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43189);
var inst_43191 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic("File is too large! Max possible size is ",inst_43188,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (",inst_43190," KB)"], 0));
var inst_43192 = [inst_43191];
var inst_43193 = cljs.core.PersistentHashMap.fromArrays(inst_43187,inst_43192);
var inst_43194 = cljs.core.reset_BANG_(table_editor.state.state,inst_43193);
var state_43212__$1 = state_43212;
var statearr_43219_43308 = state_43212__$1;
(statearr_43219_43308[(2)] = inst_43194);

(statearr_43219_43308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43213 === (6))){
var inst_43184 = (state_43212[(8)]);
var inst_43183 = (state_43212[(9)]);
var inst_43181 = (state_43212[(7)]);
var inst_43196 = [new cljs.core.Keyword(null,"file-name","file-name",-1654217259),new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684)];
var inst_43197 = inst_43181.name;
var inst_43198 = [inst_43197,null];
var inst_43199 = cljs.core.PersistentHashMap.fromArrays(inst_43196,inst_43198);
var inst_43200 = cljs.core.reset_BANG_(table_editor.state.state,inst_43199);
var inst_43201 = (function (){var file = inst_43181;
var file_reader = inst_43183;
var size = inst_43184;
return (function (p1__43178_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(table_editor.channels.file_read,p1__43178_SHARP_);
});
})();
var inst_43202 = (inst_43183.onload = inst_43201);
var inst_43203 = inst_43183.readAsText(inst_43181);
var state_43212__$1 = (function (){var statearr_43220 = state_43212;
(statearr_43220[(10)] = inst_43200);

(statearr_43220[(11)] = inst_43202);

return statearr_43220;
})();
var statearr_43221_43311 = state_43212__$1;
(statearr_43221_43311[(2)] = inst_43203);

(statearr_43221_43311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43213 === (7))){
var inst_43205 = (state_43212[(2)]);
var state_43212__$1 = (function (){var statearr_43222 = state_43212;
(statearr_43222[(12)] = inst_43205);

return statearr_43222;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43212__$1,(8),table_editor.channels.file_uploaded);
} else {
if((state_val_43213 === (8))){
var inst_43207 = (state_43212[(2)]);
var inst_43181 = inst_43207;
var state_43212__$1 = (function (){var statearr_43223 = state_43212;
(statearr_43223[(7)] = inst_43181);

return statearr_43223;
})();
var statearr_43224_43312 = state_43212__$1;
(statearr_43224_43312[(2)] = null);

(statearr_43224_43312[(1)] = (3));


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
var statearr_43225 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43225[(0)] = table_editor$channels$state_machine__28012__auto__);

(statearr_43225[(1)] = (1));

return statearr_43225;
});
var table_editor$channels$state_machine__28012__auto____1 = (function (state_43212){
while(true){
var ret_value__28013__auto__ = (function (){try{while(true){
var result__28014__auto__ = switch__28011__auto__(state_43212);
if(cljs.core.keyword_identical_QMARK_(result__28014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28014__auto__;
}
break;
}
}catch (e43226){var ex__28015__auto__ = e43226;
var statearr_43227_43317 = state_43212;
(statearr_43227_43317[(2)] = ex__28015__auto__);


if(cljs.core.seq((state_43212[(4)]))){
var statearr_43228_43318 = state_43212;
(statearr_43228_43318[(1)] = cljs.core.first((state_43212[(4)])));

} else {
throw ex__28015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43319 = state_43212;
state_43212 = G__43319;
continue;
} else {
return ret_value__28013__auto__;
}
break;
}
});
table_editor$channels$state_machine__28012__auto__ = function(state_43212){
switch(arguments.length){
case 0:
return table_editor$channels$state_machine__28012__auto____0.call(this);
case 1:
return table_editor$channels$state_machine__28012__auto____1.call(this,state_43212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
table_editor$channels$state_machine__28012__auto__.cljs$core$IFn$_invoke$arity$0 = table_editor$channels$state_machine__28012__auto____0;
table_editor$channels$state_machine__28012__auto__.cljs$core$IFn$_invoke$arity$1 = table_editor$channels$state_machine__28012__auto____1;
return table_editor$channels$state_machine__28012__auto__;
})()
})();
var state__28105__auto__ = (function (){var statearr_43229 = f__28104__auto__();
(statearr_43229[(6)] = c__28103__auto___43298);

return statearr_43229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28105__auto__);
}));

var c__28103__auto___43324 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28104__auto__ = (function (){var switch__28011__auto__ = (function (state_43250){
var state_val_43251 = (state_43250[(1)]);
if((state_val_43251 === (1))){
var state_43250__$1 = state_43250;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43250__$1,(2),table_editor.channels.file_read);
} else {
if((state_val_43251 === (2))){
var inst_43231 = (state_43250[(2)]);
var inst_43232 = inst_43231;
var state_43250__$1 = (function (){var statearr_43252 = state_43250;
(statearr_43252[(7)] = inst_43232);

return statearr_43252;
})();
var statearr_43253_43325 = state_43250__$1;
(statearr_43253_43325[(2)] = null);

(statearr_43253_43325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43251 === (3))){
var inst_43232 = (state_43250[(7)]);
var inst_43234 = table_editor.channels.is_valid(inst_43232);
var state_43250__$1 = state_43250;
if(inst_43234){
var statearr_43254_43326 = state_43250__$1;
(statearr_43254_43326[(1)] = (5));

} else {
var statearr_43255_43327 = state_43250__$1;
(statearr_43255_43327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43251 === (4))){
var inst_43248 = (state_43250[(2)]);
var state_43250__$1 = state_43250;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43250__$1,inst_43248);
} else {
if((state_val_43251 === (5))){
var inst_43232 = (state_43250[(7)]);
var inst_43236 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(table_editor.channels.table_updated,inst_43232);
var state_43250__$1 = state_43250;
var statearr_43256_43328 = state_43250__$1;
(statearr_43256_43328[(2)] = inst_43236);

(statearr_43256_43328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43251 === (6))){
var inst_43238 = [new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684)];
var inst_43239 = ["Invalid format: there should be 2 columns, first with names and second one with numbers"];
var inst_43240 = cljs.core.PersistentHashMap.fromArrays(inst_43238,inst_43239);
var inst_43241 = cljs.core.reset_BANG_(table_editor.state.state,inst_43240);
var state_43250__$1 = state_43250;
var statearr_43257_43329 = state_43250__$1;
(statearr_43257_43329[(2)] = inst_43241);

(statearr_43257_43329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43251 === (7))){
var inst_43243 = (state_43250[(2)]);
var state_43250__$1 = (function (){var statearr_43258 = state_43250;
(statearr_43258[(8)] = inst_43243);

return statearr_43258;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43250__$1,(8),table_editor.channels.file_read);
} else {
if((state_val_43251 === (8))){
var inst_43245 = (state_43250[(2)]);
var inst_43232 = inst_43245;
var state_43250__$1 = (function (){var statearr_43259 = state_43250;
(statearr_43259[(7)] = inst_43232);

return statearr_43259;
})();
var statearr_43260_43330 = state_43250__$1;
(statearr_43260_43330[(2)] = null);

(statearr_43260_43330[(1)] = (3));


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
var statearr_43261 = [null,null,null,null,null,null,null,null,null];
(statearr_43261[(0)] = table_editor$channels$state_machine__28012__auto__);

(statearr_43261[(1)] = (1));

return statearr_43261;
});
var table_editor$channels$state_machine__28012__auto____1 = (function (state_43250){
while(true){
var ret_value__28013__auto__ = (function (){try{while(true){
var result__28014__auto__ = switch__28011__auto__(state_43250);
if(cljs.core.keyword_identical_QMARK_(result__28014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28014__auto__;
}
break;
}
}catch (e43262){var ex__28015__auto__ = e43262;
var statearr_43263_43331 = state_43250;
(statearr_43263_43331[(2)] = ex__28015__auto__);


if(cljs.core.seq((state_43250[(4)]))){
var statearr_43264_43332 = state_43250;
(statearr_43264_43332[(1)] = cljs.core.first((state_43250[(4)])));

} else {
throw ex__28015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43333 = state_43250;
state_43250 = G__43333;
continue;
} else {
return ret_value__28013__auto__;
}
break;
}
});
table_editor$channels$state_machine__28012__auto__ = function(state_43250){
switch(arguments.length){
case 0:
return table_editor$channels$state_machine__28012__auto____0.call(this);
case 1:
return table_editor$channels$state_machine__28012__auto____1.call(this,state_43250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
table_editor$channels$state_machine__28012__auto__.cljs$core$IFn$_invoke$arity$0 = table_editor$channels$state_machine__28012__auto____0;
table_editor$channels$state_machine__28012__auto__.cljs$core$IFn$_invoke$arity$1 = table_editor$channels$state_machine__28012__auto____1;
return table_editor$channels$state_machine__28012__auto__;
})()
})();
var state__28105__auto__ = (function (){var statearr_43265 = f__28104__auto__();
(statearr_43265[(6)] = c__28103__auto___43324);

return statearr_43265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28105__auto__);
}));

var c__28103__auto___43334 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28104__auto__ = (function (){var switch__28011__auto__ = (function (state_43286){
var state_val_43287 = (state_43286[(1)]);
if((state_val_43287 === (1))){
var state_43286__$1 = state_43286;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43286__$1,(2),table_editor.channels.table_updated);
} else {
if((state_val_43287 === (2))){
var inst_43268 = (state_43286[(2)]);
var inst_43269 = inst_43268;
var state_43286__$1 = (function (){var statearr_43288 = state_43286;
(statearr_43288[(7)] = inst_43269);

return statearr_43288;
})();
var statearr_43289_43335 = state_43286__$1;
(statearr_43289_43335[(2)] = null);

(statearr_43289_43335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43287 === (3))){
var inst_43269 = (state_43286[(7)]);
var inst_43271 = (function (){var content = inst_43269;
return (function (p1__43266_SHARP_){
return parseFloat((p1__43266_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__43266_SHARP_.cljs$core$IFn$_invoke$arity$1((1)) : p1__43266_SHARP_.call(null,(1))));
});
})();
var inst_43272 = cljs.core.rest(inst_43269);
var inst_43273 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_43271,inst_43272);
var inst_43274 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),inst_43273);
var inst_43275 = cljs.core.count(inst_43273);
var inst_43276 = (inst_43274 / inst_43275);
var inst_43277 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(table_editor.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),inst_43269);
var inst_43278 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(table_editor.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"average","average",-492356168),inst_43276);
var inst_43279 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(table_editor.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"sum","sum",136986814),inst_43274);
var state_43286__$1 = (function (){var statearr_43290 = state_43286;
(statearr_43290[(8)] = inst_43277);

(statearr_43290[(9)] = inst_43279);

(statearr_43290[(10)] = inst_43278);

return statearr_43290;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43286__$1,(5),table_editor.channels.table_updated);
} else {
if((state_val_43287 === (4))){
var inst_43284 = (state_43286[(2)]);
var state_43286__$1 = state_43286;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43286__$1,inst_43284);
} else {
if((state_val_43287 === (5))){
var inst_43281 = (state_43286[(2)]);
var inst_43269 = inst_43281;
var state_43286__$1 = (function (){var statearr_43291 = state_43286;
(statearr_43291[(7)] = inst_43269);

return statearr_43291;
})();
var statearr_43292_43336 = state_43286__$1;
(statearr_43292_43336[(2)] = null);

(statearr_43292_43336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});
return (function() {
var table_editor$channels$state_machine__28012__auto__ = null;
var table_editor$channels$state_machine__28012__auto____0 = (function (){
var statearr_43293 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43293[(0)] = table_editor$channels$state_machine__28012__auto__);

(statearr_43293[(1)] = (1));

return statearr_43293;
});
var table_editor$channels$state_machine__28012__auto____1 = (function (state_43286){
while(true){
var ret_value__28013__auto__ = (function (){try{while(true){
var result__28014__auto__ = switch__28011__auto__(state_43286);
if(cljs.core.keyword_identical_QMARK_(result__28014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28014__auto__;
}
break;
}
}catch (e43294){var ex__28015__auto__ = e43294;
var statearr_43295_43338 = state_43286;
(statearr_43295_43338[(2)] = ex__28015__auto__);


if(cljs.core.seq((state_43286[(4)]))){
var statearr_43296_43339 = state_43286;
(statearr_43296_43339[(1)] = cljs.core.first((state_43286[(4)])));

} else {
throw ex__28015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43340 = state_43286;
state_43286 = G__43340;
continue;
} else {
return ret_value__28013__auto__;
}
break;
}
});
table_editor$channels$state_machine__28012__auto__ = function(state_43286){
switch(arguments.length){
case 0:
return table_editor$channels$state_machine__28012__auto____0.call(this);
case 1:
return table_editor$channels$state_machine__28012__auto____1.call(this,state_43286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
table_editor$channels$state_machine__28012__auto__.cljs$core$IFn$_invoke$arity$0 = table_editor$channels$state_machine__28012__auto____0;
table_editor$channels$state_machine__28012__auto__.cljs$core$IFn$_invoke$arity$1 = table_editor$channels$state_machine__28012__auto____1;
return table_editor$channels$state_machine__28012__auto__;
})()
})();
var state__28105__auto__ = (function (){var statearr_43297 = f__28104__auto__();
(statearr_43297[(6)] = c__28103__auto___43334);

return statearr_43297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28105__auto__);
}));


//# sourceMappingURL=table_editor.channels.js.map
