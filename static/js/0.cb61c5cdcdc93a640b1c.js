webpackJsonp([0],{"+kDu":function(t,e,n){function a(t){n("ULjQ")}var i=n("VU/8")(n("hMro"),n("U8ZL"),a,"data-v-f0ab166e",null);t.exports=i.exports},"29Kf":function(t,e,n){var a=n("VU/8")(n("qrTW"),n("41Mf"),null,null,null);t.exports=a.exports},"41Mf":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.loading,expression:"loading",modifiers:{body:!0}}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.projectTasks},on:{"row-dblclick":t.goProjectTaskDetail}},[n("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[n("el-form-item",{attrs:{label:"任务描述"}},[n("span",[t._v(t._s(e.row.description))])])],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),n("el-table-column",{attrs:{label:"所属项目"},scopedSlots:t._u([{key:"default",fn:function(e){return e.row.project?[t._v("\n            "+t._s(e.row.project.name)+"\n            ")]:void 0}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"name",label:"任务名称"}}),t._v(" "),n("el-table-column",{attrs:{label:"上级任务"},scopedSlots:t._u([{key:"default",fn:function(e){return e.row.parent?[t._v("\n            "+t._s(e.row.parent.name)+"\n            ")]:void 0}}])}),t._v(" "),n("el-table-column",{attrs:{label:"处理人"},scopedSlots:t._u([{key:"default",fn:function(e){return e.row.handler?[t._v("\n            "+t._s(e.row.handler.name)+"\n            ")]:void 0}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"active",label:"是否有效"}}),t._v(" "),n("el-table-column",{attrs:{prop:"level",label:"级别"}}),t._v(" "),n("el-table-column",{attrs:{label:"开始时间"},scopedSlots:t._u([{key:"default",fn:function(e){return e.row.start_time?[t._v("\n            "+t._s(t._f("stringTimeFormat")(e.row.start_time))+"\n            ")]:void 0}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"need_time",label:"估计时长(h)"}}),t._v(" "),n("el-table-column",{attrs:{label:"计划完成时间"},scopedSlots:t._u([{key:"default",fn:function(e){return e.row.end_time?[t._v("\n            "+t._s(t._f("stringTimeFormat")(e.row.end_time))+"\n            ")]:void 0}}])}),t._v(" "),n("el-table-column",{attrs:{label:"实际完成时间"},scopedSlots:t._u([{key:"default",fn:function(e){return e.row.real_end_time?[t._v("\n            "+t._s(t._f("stringTimeFormat")(e.row.real_end_time))+"\n            ")]:void 0}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"state",label:"状态"}})],1)],1)},staticRenderFns:[]}},"4sAd":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"project-task-gantt-card"}},t._l(t.projects,function(e,a){return n("project-task-gantt-card",{key:a,attrs:{project:e},on:{changeProjectTaskView:t.changeProjectTaskView}})}))},staticRenderFns:[]}},"5pJW":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("lMz8"),i=n("29Kf"),o=n.n(i),r=n("gB1S"),s=n.n(r),c=n("cAlT"),l=n.n(c),u=n("BMys"),p=n.n(u),d=n("+kDu"),f=n.n(d),h=n("TO1l"),g=n.n(h),_=n("lC78");e.default={name:"project_task_home",data:function(){var t=_.a.get("project_task_home_view");return""!=t&&null!=t||(t="kanban"),{formTopBtns:{create:!0},view_list:["kanban","list","gantt"],activeView:t,loading:!1,pageSize:20,total:0,page:1,projectTasks:[]}},components:{ProjectTaskList:o.a,ProjectTaskKanban:s.a,ProjectTaskGantt:l.a,ViewSwitch:f.a,Pagination:p.a,FormTop:g.a},methods:{getAllProjectTask:function(){var t=this;if("list"==this.activeView){this.loading=!0,this.projectTasks=[];var e={page:this.page,page_size:this.pageSize};this.$route.query.project_id&&(e.project_id=this.$route.query.project_id),this.$route.query.check_child&&(e.check_child=this.$route.query.check_child),this.$ajax.get(a.h,{params:e}).then(function(e){t.loading=!1;var n=e.status,a=e.data;200==n&&(t.projectTasks=a.results,t.total=a.count)})}},switchView:function(t){if(this.setLocalView(t),"list"==t)this.getAllProjectTask(this.pageSize,this.page);else if("kanban"==t)this.$router.push("/project_task/");else if("gantt"==t){var e="/project_task/";this.$route.query.project_id&&(e+="?project_id="+this.$route.query.project_id),this.$router.push(e)}},setLocalView:function(t){this.activeView=t,_.a.set("project_task_home_view",t)},changeProjectTaskView:function(t,e){this.activeView=e,this.switchView(e),this.$router.push("/project_task/?project_id="+t)},pageInfoChange:function(t,e){this.page=e,this.pageSize=t,this.getAllProjectTask()}},created:function(){this.$nextTick(function(){if(this.$route.query.view)for(var t=this.$route.query.view,e=0;e<this.view_list.length;e++)t===this.view_list[e]&&this.setLocalView(t);this.getAllProjectTask()})},watch:{$route:function(t,e){t!=e&&this.getAllProjectTask()}}}},"8BS6":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("lMz8"),i=n("jIuq"),o=n.n(i);e.default={name:"project-task-kanban",data:function(){return{loading:!1,pageSize:20,total:0,page:1,projects:[]}},components:{ProjectTaskGanttCard:o.a},methods:{getAllProject:function(){var t=this;if(this.loading=!0,this.$route.query.project_id)this.$ajax.get(a.f+this.$route.query.project_id).then(function(e){t.loading=!1,t.projects=[e.data]});else{var e={};e.page=this.page,e.page_size=this.pageSize,this.$ajax.get(a.f,{params:e}).then(function(e){t.loading=!1;var n=e.status,a=e.data;200==n&&(t.projects=a.results)})}},changeProjectTaskView:function(t,e){this.$emit("changeProjectTaskView",t,e)}},created:function(){this.$nextTick(function(){this.getAllProject()})}}},"9m3A":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{pageInfoChange:function(t,e){this.$emit("pageInfoChange",t,e)},handleSizeChange:function(t){this.pageInfoChange(t,1)},handleCurrentChange:function(t){this.pageInfoChange(this.pageSize,t)}},props:["pageSize","currentPage","total","pageSizes"],data:function(){return{}}}},B3Cl:function(t,e,n){var a=n("Y3ZK");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("5ed7d397",a,!0)},BMys:function(t,e,n){function a(t){n("uFkv")}var i=n("VU/8")(n("9m3A"),n("LPte"),a,null,null);t.exports=i.exports},CEKb:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("lMz8");e.default={name:"project-task-card-echart",props:["project","checkChild"],data:function(){return{distributionxArixData:[],distributionSeris:[],distributionLegend:[]}},methods:{getProjectTaskInfo:function(){var t=this;this.project_id;this.$ajax.get(a.j,{params:{project_id:this.project.id,check_child:this.checkChild}}).then(function(e){200==e.status&&(t.distributionSeris=e.data.series,t.distributionxArixData=e.data.x_axis,t.distributionLegend=e.data.legend,t.echartDistributionView())})},chartStyle:function(t){return{width:"800px",height:"500px"}},echartDistributionView:function(){var t=this.$echarts.init(document.getElementById("task-distribution-"+this.project.id)),e={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},toolbox:{show:!0,x:"left",y:"center",feature:{saveAsImage:{name:"project_task_bar",show:!0}}},legend:{data:this.distributionLegend},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:this.distributionxArixData}],yAxis:[{type:"value"}],series:this.distributionSeris};t.setOption(e)}},created:function(){this.getProjectTaskInfo()},watch:{checkChild:"getProjectTaskInfo"}}},Ctjm:function(t,e,n){var a=n("KZcL");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("e0529ac0",a,!0)},EwkB:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("lMz8"),i=n("jy0L"),o=n.n(i);e.default={name:"project-task-kanban",data:function(){return{loading:!1,pageSize:20,total:0,page:1,projects:[]}},components:{ProjectTaskCard:o.a},methods:{getAllProject:function(){var t=this;this.loading=!0;var e={page:this.page,page_size:this.pageSize};this.$ajax.get(a.f,{params:e}).then(function(e){t.loading=!1;var n=e.status,a=e.data;200==n&&(t.projects=a.results)})},changeProjectTaskView:function(t,e){this.$emit("changeProjectTaskView",t,e)}},created:function(){this.$nextTick(function(){this.getAllProject()})}}},KZcL:function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,".project-task-card[data-v-03d70e42]{padding-bottom:5px;padding-top:5px}","",{version:3,sources:["F:/selenium_work/tcis/web/src/pages/project/project_task_card.vue"],names:[],mappings:"AACA,oCACE,mBAAoB,AACpB,eAAiB,CAClB",file:"project_task_card.vue",sourcesContent:["\n.project-task-card[data-v-03d70e42] {\n  padding-bottom: 5px;\n  padding-top: 5px;\n}\n"],sourceRoot:""}])},LPte:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination"},[n("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":t.pageSizes,"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)},staticRenderFns:[]}},RDMO:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("el-col",{staticClass:"project-task-gantt-card",attrs:{span:24,project:t.project}},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",{staticStyle:{display:"inline-block","margin-right":"10px"}},[t._v(t._s(t.project.name))]),n("el-switch",{attrs:{"active-text":"显示子项目数据","inactive-text":"不显示子项目数据"},on:{change:t.changeChildInfo},model:{value:t.checkChild,callback:function(e){t.checkChild=e},expression:"checkChild"}}),t._v(" "),n("i",{staticClass:"el-icon-circle-close",staticStyle:{float:"right","margin-left":"10px",color:"red","font-size":"150%"},on:{click:t.deleteDom}}),t._v(" "),n("el-button",{staticStyle:{float:"right",padding:"3px 0","margin-left":"10px"},attrs:{type:"success"},on:{click:function(e){t.changeProjectTaskView(t.project.id,"list")}}},[t._v("任务列表")])],1),t._v(" "),n("div",{style:{width:t.ganttWidth,height:t.ganttHeight},attrs:{id:"task-gantt-"+t.project.id}})])],1):t._e()},staticRenderFns:[]}},Sobb:function(t,e,n){var a=n("VU/8")(n("CEKb"),n("g/dy"),null,null,null);t.exports=a.exports},TO1l:function(t,e,n){function a(t){n("B3Cl")}var i=n("VU/8")(n("nWf1"),n("dPJm"),a,null,null);t.exports=i.exports},TyYQ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("lMz8");e.default={name:"project-task-gantt-card",props:["project"],data:function(){return{checkChild:!1,show:!0,taskNames:[],taskSeries:[],ganttWidth:"1600px",ganttHeight:"500px"}},methods:{changeProjectTaskView:function(t,e){this.$emit("changeProjectTaskView",t,e)},deleteDom:function(){this.show=!1},getProjectTaskGantt:function(){var t=this;this.project_id;this.$ajax.get(a.i,{params:{project_id:this.project.id,check_child:this.checkChild}}).then(function(e){if(200==e.status){t.taskNames=e.data.task_names;var n=t.timeChange(e.data.start_time_list);t.ganttHeight=40*n.length+1e3+"px",t.taskSeries.push({name:"开始时间",type:"bar",stack:"计划",itemStyle:{normal:{color:"rgba(0,0,0,0)"}},data:n}),t.taskSeries.push({name:"计划完成时间",type:"bar",stack:"计划",data:t.timeChange(e.data.end_time_list)}),t.taskSeries.push({name:"开始时间",type:"bar",stack:"实际",itemStyle:{normal:{color:"rgba(0,0,0,0)"}},data:n}),t.taskSeries.push({name:"实际完成时间",type:"bar",stack:"实际",data:t.timeChange(e.data.real_end_time_list)}),t.echartDistributionView()}})},timeChange:function(t){for(var e=t.length,n=[],a=0;a<e;a++){var i=t[a];i?n.push(new Date(i)):n.push(null)}return n},echartDistributionView:function(){var t=this.$echarts.init(document.getElementById("task-gantt-"+this.project.id)),e={legend:{data:["计划完成时间","实际完成时间"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{show:!0,x:"left",y:"center",feature:{saveAsImage:{show:!0,name:"project_task_gantt"}}},xAxis:[{type:"time",name:"任务时间"},{type:"time",name:"任务时间"}],yAxis:{name:"任务名称",data:this.taskNames},tooltip:{trigger:"axis",formatter:function(t){var e="任务名："+t[0].name+"</br>",n=t[0].data,a=t[1].data,i=t[3].data;return n=n?n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate()+" "+n.getHours()+":"+n.getMinutes():"未计划",a=a?a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate()+" "+a.getHours()+":"+a.getMinutes():"未计划",i=i?i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate()+" "+i.getHours()+":"+i.getMinutes():"未计划",e+=t[0].seriesName+":"+n+"</br>",e+=t[1].seriesName+":"+a+"</br>",e+=t[3].seriesName+":"+i+"</br>"}},series:this.taskSeries};t.setOption(e)},changeChildInfo:function(t){this.checkChild=t,this.getProjectTaskGantt()}},created:function(){this.getProjectTaskGantt()}}},U8ZL:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-button-group",{staticClass:"view-switch"},[t._l(t.views,function(e,a){return[n("el-button",{key:a,attrs:{size:"mini",type:t.viewDict[e]},on:{click:function(n){t.switchView(e)}}},[t._v(t._s(t.viewLabel[e]))])]})],2)},staticRenderFns:[]}},ULjQ:function(t,e,n){var a=n("rOCs");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("1acd35a8",a,!0)},Vryk:function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,".pagination{margin:5px;display:inline-block}","",{version:3,sources:["F:/selenium_work/tcis/web/src/pages/common/Pagination.vue"],names:[],mappings:"AACA,YACE,WAAY,AACZ,oBAAsB,CACvB",file:"Pagination.vue",sourcesContent:["\n.pagination {\n  margin: 5px;\n  display: inline-block;\n}\n"],sourceRoot:""}])},XLFJ:function(t,e,n){var a=n("ZZUe");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("412ab3b1",a,!0)},Xe0V:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"project-task",loading:t.loading}},[n("view-switch",{attrs:{views:t.view_list,activeView:t.activeView},on:{switchView:t.switchView}}),t._v(" "),n("form-top",{attrs:{formTopBtns:t.formTopBtns},on:{formTopAction:t.formTopAction}}),t._v(" "),n("pagination",{attrs:{pageSizes:[20,40,80],pageSize:t.pageSize,currentPage:t.page,total:t.total},on:{pageInfoChange:t.pageInfoChange}}),t._v(" "),n("el-row",{staticClass:"main-content",attrs:{gutter:20}},["list"==t.activeView?n("project-task-list",{attrs:{projectTasks:t.projectTasks}}):t._e(),t._v(" "),"kanban"==t.activeView?n("project-task-kanban",{on:{changeProjectTaskView:t.changeProjectTaskView}}):t._e(),t._v(" "),"gantt"==t.activeView?n("project-task-gantt",{on:{changeProjectTaskView:t.changeProjectTaskView}}):t._e()],1)],1)},staticRenderFns:[]}},Y3ZK:function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,".form-top{display:inline-block;margin:5px}","",{version:3,sources:["F:/selenium_work/tcis/web/src/pages/common/form_top.vue"],names:[],mappings:"AACA,UACE,qBAAsB,AACtB,UAAY,CACb",file:"form_top.vue",sourcesContent:["\n.form-top {\n  display: inline-block;\n  margin: 5px;\n}\n"],sourceRoot:""}])},ZZUe:function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,".project-task-gantt-card[data-v-11f5e9ac]{padding-bottom:5px;padding-top:5px}","",{version:3,sources:["F:/selenium_work/tcis/web/src/pages/project/project_task_gantt_card.vue"],names:[],mappings:"AACA,0CACE,mBAAoB,AACpB,eAAiB,CAClB",file:"project_task_gantt_card.vue",sourcesContent:["\n.project-task-gantt-card[data-v-11f5e9ac] {\n  padding-bottom: 5px;\n  padding-top: 5px;\n}\n"],sourceRoot:""}])},cAlT:function(t,e,n){var a=n("VU/8")(n("8BS6"),n("4sAd"),null,null,null);t.exports=a.exports},dPJm:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-top"},[t.formTopBtns.create?n("el-button",{attrs:{plain:"",type:"primary",icon:"el-icon-document",size:"small"},on:{click:function(e){t.formTopAction("create")}}},[t._v("创建")]):t._e(),t._v(" "),t.formTopBtns.edit?n("el-button",{attrs:{plain:"",type:"warning",icon:"el-icon-edit",size:"small"},on:{click:function(e){t.formTopAction("edit")}}},[t._v("编辑")]):t._e(),t._v(" "),t.formTopBtns.save?n("el-button",{attrs:{plain:"",type:"success",icon:"el-icon-message",size:"small"},on:{click:function(e){t.formTopAction("save")}}},[t._v("保存")]):t._e(),t._v(" "),t.formTopBtns.cancel?n("el-button",{attrs:{plain:"",type:"danger",icon:"el-icon-close",size:"small"},on:{click:function(e){t.formTopAction("cancel")}}},[t._v("取消")]):t._e()],1)},staticRenderFns:[]}},fb0T:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"project-task-kanban"}},t._l(t.projects,function(e,a){return n("project-task-card",{key:a,attrs:{project:e},on:{changeProjectTaskView:t.changeProjectTaskView}})}))},staticRenderFns:[]}},"g/dy":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{style:t.chartStyle(),attrs:{id:"task-distribution-"+t.project.id}})},staticRenderFns:[]}},gB1S:function(t,e,n){var a=n("VU/8")(n("EwkB"),n("fb0T"),null,null,null);t.exports=a.exports},hMro:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"view_switch",props:["views","activeView"],data:function(){var t={};for(var e in this.views){var n=this.views[e];n==this.activeView?t[n]="primary":t[n]=""}return{viewDict:t,viewLabel:{kanban:"看板",list:"列表",gantt:"甘特图"}}},methods:{switchView:function(t){for(var e in this.views){var n=this.views[e];this.viewDict[n]=n==t?"primary":""}this.$emit("switchView",t)}},watch:{activeView:function(t,e){for(var n in this.views){var a=this.views[n];this.viewDict[a]=a==t?"primary":""}}}}},jIuq:function(t,e,n){function a(t){n("XLFJ")}var i=n("VU/8")(n("TyYQ"),n("RDMO"),a,"data-v-11f5e9ac",null);t.exports=i.exports},jy0L:function(t,e,n){function a(t){n("Ctjm")}var i=n("VU/8")(n("oV6S"),n("kRUi"),a,"data-v-03d70e42",null);t.exports=i.exports},kRUi:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("el-col",{staticClass:"project-task-card",attrs:{span:12,project:t.project}},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",{staticStyle:{color:"rgb(102, 177, 255)","font-size":"150%"},on:{click:t.goProject}},[t._v(t._s(t.project.name))]),t._v(" "),n("i",{staticClass:"el-icon-info",staticStyle:{color:"rgb(102, 177, 255)","font-size":"150%"},on:{click:t.goProject}}),t._v(" "),n("i",{staticClass:"el-icon-circle-close",staticStyle:{float:"right","margin-left":"10px",color:"red","font-size":"150%"},on:{click:t.deleteDom}}),t._v(" "),n("el-button",{staticStyle:{float:"right",padding:"3px 0","margin-left":"10px"},attrs:{type:"success"},on:{click:function(e){t.changeProjectTaskView(t.project.id,"list")}}},[t._v("任务列表")]),t._v(" "),n("el-button",{staticStyle:{float:"right",padding:"3px 0","margin-left":"10px"},attrs:{type:"warning"},on:{click:function(e){t.changeProjectTaskView(t.project.id,"gantt")}}},[t._v("甘特图")])],1),t._v(" "),n("div",{staticClass:"project-task-echart"},[n("el-row",[n("el-col",{attrs:{span:24}},[n("project-task-card-echart",{attrs:{project:t.project}})],1),t._v(" "),n("el-col",{attrs:{span:12}}),t._v(" "),n("el-col",{attrs:{span:12}}),t._v(" "),n("el-col",{attrs:{span:12}})],1)],1)])],1):t._e()},staticRenderFns:[]}},lMz8:function(t,e,n){"use strict";n.d(e,"l",function(){return a}),n.d(e,"t",function(){return i}),n.d(e,"s",function(){return o}),n.d(e,"n",function(){return r}),n.d(e,"m",function(){return s}),n.d(e,"q",function(){return c}),n.d(e,"o",function(){return l}),n.d(e,"r",function(){return u}),n.d(e,"p",function(){return p}),n.d(e,"f",function(){return d}),n.d(e,"b",function(){return f}),n.d(e,"h",function(){return h}),n.d(e,"j",function(){return g}),n.d(e,"i",function(){return _}),n.d(e,"k",function(){return m}),n.d(e,"e",function(){return v}),n.d(e,"g",function(){return j}),n.d(e,"a",function(){return k}),n.d(e,"d",function(){return b}),n.d(e,"c",function(){return w});var a="/user/",i="/user/login/",o="/user/logout/",r="/user/reset_password/",s="/user/user_active/",c="/group/",l="/permission/",u="/permission/get_all_permission/",p="/permission/translate_all_permission/",d="/project/project/",f="/project/project/get_all_project/",h="/project/project_task/",g="/project/project_task/project_task_kanban/",_="/project/project_task/project_task_gantt/",m="/project/project_member/",v="/project_bug/project_bug/",j="/project_bug/project_bug/project_bug_kanban/",k="/project_test/project_test/",b="/project_test/project_test/project_test_kanban/",w="/project_test/project_test_type/"},nWf1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"form-rop",props:["formTopBtns"],data:function(){return{}},methods:{formTopAction:function(t){this.$emit("formTopAction",t)}}}},oV6S:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Sobb"),i=n.n(a);e.default={name:"project-task-card",props:["project"],data:function(){return{show:!0}},components:{ProjectTaskCardEchart:i.a},methods:{changeProjectTaskView:function(t,e){this.$emit("changeProjectTaskView",t,e)},deleteDom:function(){this.show=!1},goProject:function(){this.$router.push("/project/"+this.project.id)}}}},qrTW:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"",props:["projectTasks"],data:function(){return{}},methods:{goProjectTaskDetail:function(t,e){this.$router.push("/project_task/"+t.id)}}}},rOCs:function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,".view-switch[data-v-f0ab166e]{position:absolute;top:30px;z-index:999;display:inline-block}","",{version:3,sources:["F:/selenium_work/tcis/web/src/pages/common/view_switch.vue"],names:[],mappings:"AACA,8BACE,kBAAmB,AACnB,SAAU,AACV,YAAa,AACb,oBAAsB,CACvB",file:"view_switch.vue",sourcesContent:["\n.view-switch[data-v-f0ab166e] {\n  position: absolute;\n  top: 30px;\n  z-index: 999;\n  display: inline-block;\n}\n"],sourceRoot:""}])},sNnP:function(t,e,n){var a=n("VU/8")(n("5pJW"),n("Xe0V"),null,null,null);t.exports=a.exports},uFkv:function(t,e,n){var a=n("Vryk");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("fbc3b3bc",a,!0)}});
//# sourceMappingURL=0.cb61c5cdcdc93a640b1c.js.map