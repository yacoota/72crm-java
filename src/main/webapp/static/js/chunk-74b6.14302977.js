(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-74b6"],{"70oD":function(e,t,a){},"9LST":function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n});var s=a("t3Un");function i(e){return"count"===e.type?Object(s.a)({url:"biEmployee/contractNumStats",method:"post",data:e}):"money"===e.type?Object(s.a)({url:"biEmployee/contractMoneyStats",method:"post",data:e}):"back"===e.type?Object(s.a)({url:"biEmployee/receivablesMoneyStats",method:"post",data:e}):void 0}function n(e){return Object(s.a)({url:"biEmployee/totalContract",method:"post",data:e})}},"gXW+":function(e,t,a){"use strict";var s=a("KTTK"),i=a("UcQx"),n=a("conU"),o=a("uKQN"),l=a("wd/R"),u=a.n(l),r={name:"FiltrateHandleView",components:{timeTypeSelect:o.a},props:{moduleType:{required:!0,type:String},showYearSelect:{default:!1,type:Boolean},showBusinessSelect:{default:!1,type:Boolean},showUserSelect:{default:!0,type:Boolean},showCustomSelect:{default:!1,type:Boolean},customDefault:"",customOptions:{default:function(){return[]},type:Array},showProductSelect:{default:!1,type:Boolean}},data:function(){return{pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()}},yearValue:"",timeTypeValue:{},structuresProps:{children:"children",label:"label",value:"id"},deptList:[],structuresSelectValue:"",userOptions:[],userSelectValue:"",businessOptions:[],businessStatusValue:"",productValue:[],productOptions:[],customValue:""}},watch:{},mounted:function(){var e=this;this.showCustomSelect&&(this.customValue=this.customDefault),this.showYearSelect&&(this.yearValue=u()(new Date).year().toString()),this.$emit("load"),this.getDeptList(function(){e.showBusinessSelect?e.getBusinessStatusList(function(){e.postFiltrateValue()}):e.postFiltrateValue()}),this.showProductSelect&&this.getProductCategoryIndex()},beforeDestroy:function(){},methods:{customSelectChange:function(){this.$emit("typeChange",this.customValue)},timeTypeChange:function(e){this.timeTypeValue=e},getDeptList:function(e){var t=this;Object(s.b)({m:"bi",c:this.moduleType,a:"read"}).then(function(a){t.deptList=a.data,a.data.length>0?(t.structuresSelectValue=a.data[0].id,t.showUserSelect&&t.getUserList()):t.structuresSelectValue="",e(!0)}).catch(function(){t.$emit("error")})},structuresValueChange:function(e){this.showUserSelect&&(this.userSelectValue="",this.userOptions=[],this.getUserList())},getUserList:function(){var e=this,t={};t.deptId=this.structuresSelectValue,Object(s.i)(t).then(function(t){e.userOptions=t.data}).catch(function(){e.$emit("error")})},getBusinessStatusList:function(e){var t=this;Object(i.q)().then(function(a){t.businessOptions=a.data,a.data.length>0&&(t.businessStatusValue=a.data[0].typeId),e(!0)}).catch(function(){t.$emit("error")})},getProductCategoryIndex:function(){var e=this;Object(n.u)({type:"tree"}).then(function(t){e.productOptions=t.data}).catch(function(){})},postFiltrateValue:function(){var e={deptId:this.structuresSelectValue};this.showUserSelect&&(e.userId=this.userSelectValue),this.showBusinessSelect&&(e.typeId=this.businessStatusValue),this.showProductSelect&&(e.categoryId=this.productValue.length>0?this.productValue[this.productValue.length-1]:""),this.showYearSelect?e.year=this.yearValue:"custom"==this.timeTypeValue.type?(e.startTime=this.timeTypeValue.startTime,e.endTime=this.timeTypeValue.endTime):e.type=this.timeTypeValue.value,this.$emit("change",e)}}},c=(a("oC4j"),a("KHd+")),p=Object(c.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"filtrate-content"},[e.showYearSelect?e._e():a("time-type-select",{on:{change:e.timeTypeChange}}),e._v(" "),e.showYearSelect?a("el-date-picker",{attrs:{clearable:!1,"picker-options":e.pickerOptions,type:"year","value-format":"yyyy",placeholder:"选择年"},model:{value:e.yearValue,callback:function(t){e.yearValue=t},expression:"yearValue"}}):e._e(),e._v(" "),a("el-select",{attrs:{placeholder:"选择部门"},on:{change:e.structuresValueChange},model:{value:e.structuresSelectValue,callback:function(t){e.structuresSelectValue=t},expression:"structuresSelectValue"}},e._l(e.deptList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v(" "),e.showUserSelect?a("el-select",{attrs:{clearable:!0,placeholder:"选择员工"},model:{value:e.userSelectValue,callback:function(t){e.userSelectValue=t},expression:"userSelectValue"}},e._l(e.userOptions,function(e){return a("el-option",{key:e.id,attrs:{label:e.realname,value:e.id}})})):e._e(),e._v(" "),e.showBusinessSelect?a("el-select",{attrs:{placeholder:"商机组"},model:{value:e.businessStatusValue,callback:function(t){e.businessStatusValue=t},expression:"businessStatusValue"}},e._l(e.businessOptions,function(e){return a("el-option",{key:e.typeId,attrs:{label:e.name,value:e.typeId}})})):e._e(),e._v(" "),e.showProductSelect?a("el-cascader",{staticStyle:{width:"100%"},attrs:{options:e.productOptions,"show-all-levels":!1,props:{children:"children",label:"label",value:"categoryId"},"change-on-select":""},model:{value:e.productValue,callback:function(t){e.productValue=t},expression:"productValue"}}):e._e(),e._v(" "),e.showCustomSelect?a("el-select",{attrs:{placeholder:"图标类型"},on:{change:e.customSelectChange},model:{value:e.customValue,callback:function(t){e.customValue=t},expression:"customValue"}},e._l(e.customOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.name,value:e.value}})})):e._e(),e._v(" "),a("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){e.postFiltrateValue()}}},[e._v("搜索")]),e._v(" "),e._t("default")],2)},[],!1,null,"b678670c",null);p.options.__file="filtrateHandleView.vue";t.a=p.exports},jEJD:function(e,t,a){},oC4j:function(e,t,a){"use strict";var s=a("70oD");a.n(s).a},"oj9+":function(e,t,a){"use strict";var s=a("gXW+");t.a={data:function(){return{chartColors:["#6CA2FF","#6AC9D7","#72DCA2","#48E78D","#FECD51","#DBB375","#FF7474","#F59561","#A3AEBC","#4C84FF","#0DBEB4","#00DEDE","#FFAA00","#C7C116","#F7A57C","#F661AC","#8652EE"]}},components:{filtrateHandleView:s.a},props:{},computed:{},watch:{},mounted:function(){},methods:{},deactivated:function(){}}},"q/kd":function(e,t,a){"use strict";var s=a("jEJD");a.n(s).a},t9HF:function(e,t,a){"use strict";var s=a("oj9+"),i=a("MT78"),n=a.n(i),o=a("9LST");t.a={data:function(){return{axisOption:null,axisChart:null,loading:!1,list:[],fieldList:[],type:"",typeName:"",typeUnit:""}},components:{},mixins:[s.a],props:{},computed:{},watch:{},mounted:function(){"back"==this.type?(this.typeName="回款金额",this.typeUnit="(元)"):"count"==this.type?(this.typeName="合同数量",this.typeUnit="（个）"):"money"==this.type&&(this.typeName="合同金额",this.typeUnit="(元)"),this.initAxis()},methods:{getDataList:function(e){var t=this;this.loading=!0,e.type=this.type,Object(o.a)(e).then(function(e){t.loading=!1;for(var a=[{name:"当月"+t.typeName+t.typeUnit},{name:"上月"+t.typeName+t.typeUnit},{name:"去年当月"+t.typeName+t.typeUnit},{name:"环比增长（%）"},{name:"同比增长（%）"}],s=[{field:"name",name:"日期"}],i=0;i<e.data.length;i++){var n=e.data[i],o="value"+i;s.length<=e.data.length&&s.push({field:o,name:n.month});for(var l=["thisMonth","lastMonth","lastYear","lastYearGrowth","lastMonthGrowth"],u=0;u<l.length;u++){var r=l[u];a[u][o]=n[r]}}t.fieldList=s,t.list=a;for(var c=[],p=[],h=[],d=[],m=[],y=[],f=0;f<e.data.length;f++){var v=e.data[f];c.push(v.thisMonth),p.push(v.lastMonth),h.push(v.lastYear),d.push(v.lastYearGrowth),m.push(v.lastMonthGrowth),y.push(v.month)}t.axisOption.xAxis[0].data=y,t.axisOption.series[0].data=c,t.axisOption.series[1].data=p,t.axisOption.series[2].data=h,t.axisOption.series[3].data=d,t.axisOption.series[4].data=m,t.axisChart.setOption(t.axisOption,!0)}).catch(function(){t.loading=!1})},initAxis:function(){this.axisChart=n.a.init(document.getElementById("axismain")),this.axisOption={color:["#6CA2FF","#6AC9D7","#72DCA2","#DBB375","#E164F7","#FF7474","#FFB270","#FECD51"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["当月"+this.typeName,"上月"+this.typeName,"去年当月"+this.typeName,"环比增长","同比增长"],bottom:"0px",itemWidth:14},grid:{top:"50px",left:"30px",right:"30px",bottom:"40px",containLabel:!0},xAxis:[{type:"category",data:[],axisTick:{show:!1},axisLabel:{color:"#BDBDBD"},axisLine:{onZero:!0,onZeroAxisIndex:1,lineStyle:{color:"#BDBDBD"}},splitLine:{show:!0,lineStyle:{color:"#e6e6e6"}}}],yAxis:[{type:"value",name:this.typeUnit,axisTick:{show:!1},axisLabel:{color:"#BDBDBD",formatter:"{value}"},axisLine:{lineStyle:{color:"#BDBDBD"}},splitLine:{show:!0,lineStyle:{color:"#e6e6e6"}}},{type:"value",name:"",axisTick:{alignWithLabel:!0,lineStyle:{width:0}},axisLabel:{color:"#BDBDBD",formatter:"{value}%"},axisLine:{lineStyle:{color:"#BDBDBD"}},splitLine:{show:!0,lineStyle:{color:"#e6e6e6"}}}],series:[{name:"当月"+this.typeName,type:"bar",yAxisIndex:0,barWidth:10,markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},data:[]},{name:"上月"+this.typeName,type:"bar",yAxisIndex:0,barWidth:10,markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},data:[]},{name:"去年当月"+this.typeName,type:"bar",yAxisIndex:0,barWidth:10,markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},data:[]},{name:"环比增长",type:"line",yAxisIndex:1,markLine:{data:[{type:"average",name:"平均值"}]},markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},data:[]},{name:"同比增长",type:"line",yAxisIndex:1,markLine:{data:[{type:"average",name:"平均值"}]},markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},data:[]}]},this.axisChart.setOption(this.axisOption,!0)}},deactivated:function(){}}},uKQN:function(e,t,a){"use strict";var s={name:"TimeTypeSelect",props:{defaultType:Object},data:function(){return{selectType:{label:"本年",value:"year"},showTypePopover:!1,showCustomContent:!1,sureCustomContent:!1,startTime:"",endTime:"",typeOptions:[{label:"今天",value:"today"},{label:"昨天",value:"yesterday"},{label:"本周",value:"week"},{label:"上周",value:"lastWeek"},{label:"本月",value:"month"},{label:"上月",value:"lastMonth"},{label:"本季度",value:"quarter"},{label:"上季度",value:"lastQuarter"},{label:"本年",value:"year"},{label:"去年",value:"lastYear"}]}},computed:{iconClass:function(){return this.showTypePopover?"arrow-up":"arrow-down"},typeShowValue:function(){return this.sureCustomContent?this.startTime||this.endTime?(this.startTime||"")+"-"+(this.endTime||""):"":this.selectType.label}},mounted:function(){this.defaultType?this.selectType=this.defaultType:this.$emit("change",{type:"default",value:this.selectType.value})},methods:{typeSelectClick:function(e){this.showTypePopover=!1,this.sureCustomContent=!1,this.showCustomContent=!1,this.selectType=e,this.$emit("change",{type:"default",value:this.selectType.value})},customSureClick:function(){this.startTime&&this.endTime&&(this.sureCustomContent=!0,this.showTypePopover=!1,this.$emit("change",{type:"custom",startTime:this.startTime,endTime:this.endTime}))}}},i=(a("q/kd"),a("KHd+")),n=Object(i.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-popover",{attrs:{placement:"bottom",width:"200","popper-class":"no-padding-popover",trigger:"click"},model:{value:e.showTypePopover,callback:function(t){e.showTypePopover=t},expression:"showTypePopover"}},[a("div",{staticClass:"type-popper"},[a("div",{staticClass:"type-content"},[e._l(e.typeOptions,function(t,s){return a("div",{key:s,staticClass:"type-content-item",class:{selected:e.selectType.value==t.value&&!e.showCustomContent},on:{click:function(a){e.typeSelectClick(t)}}},[a("div",{staticClass:"mark"}),e._v(e._s(t.label)+"\n      ")])}),e._v(" "),a("div",{staticClass:"type-content-item",class:{selected:e.showCustomContent},on:{click:function(t){e.showCustomContent=!0}}},[a("div",{staticClass:"mark"}),e._v("自定义\n      ")])],2),e._v(" "),e.showCustomContent?a("div",{staticClass:"type-content-custom"},[a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.startTime,callback:function(t){e.startTime=t},expression:"startTime"}}),e._v(" "),a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}}),e._v(" "),a("el-button",{on:{click:e.customSureClick}},[e._v("确定")])],1):e._e()]),e._v(" "),a("el-input",{staticClass:"type-select",attrs:{slot:"reference",readonly:!0,placeholder:"请选择选择"},slot:"reference",model:{value:e.typeShowValue,callback:function(t){e.typeShowValue=t},expression:"typeShowValue"}},[a("i",{class:["el-input__icon","el-icon-"+e.iconClass],attrs:{slot:"suffix"},slot:"suffix"})])],1)},[],!1,null,"19dcf410",null);n.options.__file="index.vue";t.a=n.exports}}]);