(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-601f","chunk-39f5"],{"+wiD":function(e,t,i){},"+xXq":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJGMjBEQTUzNDE2NTExRTlBNTYyRkQzQzcyQzU1QTdEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJGMjBEQTU0NDE2NTExRTlBNTYyRkQzQzcyQzU1QTdEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkYyMERBNTE0MTY1MTFFOUE1NjJGRDNDNzJDNTVBN0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkYyMERBNTI0MTY1MTFFOUE1NjJGRDNDNzJDNTVBN0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7hCk5DAAACAElEQVR42qSV20tUURTGv33GxgtjD0beGtBw8tKLoE/2VxiakC8i5IsYaFAm9qykE/qgIPog2JNKOhH9F0aUPoiNYGJOIEEQNjbmnL7NrMOc2+DkLPjBOXvv9Z211157HXUx0gsfC5JOoYPUkhQ5Ih/JJnkrYw4r8hG7T6ZIxOcjzcJDEiejZMO+yLA9B8hLWRDB5abXvBGfgF+EE+QZ/t8sn1F7hN0eseISqMFxGM+jXBXIR7TbEtS5mXFmKwjj0VOoyF0gVA7cqMzCD+WwWe2pt/yAhO0zqm8YaGjOvJSFYIxFna4HX5COvQYO9+2jt0iPIaXhMFVVm305SwLJ0yx/z4H6OzAGXzCMerdrp2IdHvChzjFcHabDOLd7Heb2FszlGUc6VM8AVNs9mLufYC5O2T2/6girPdn4foT0wiRw+guqpRW4FszOpVIwN1cyO7nd5PasKZJqL/aIHh8i/YpRlpQC564LEZBqM0343ZQEKfc9t58/vGMVN6G6+jN6e9vu2YQW/Ewa3TPGxBKjK8tdecnfMN+vuUe3tGDMKsq87M8ZI9uh2CpwknDPxvQp64zvu2vxCvaNNBhyKE9QuI3o+K27vE6mCxCbFg1H+xojc1cQmxdfTz+8II/lgOJ5CMWlDwyJb86OrZvmO1msu3e7XHwr8R/kF7Du9wv4J8AAdbF+5wQ+l40AAAAASUVORK5CYII="},"/gu+":function(e,t,i){},"3biH":function(e,t,i){"use strict";var a=i("KzkL"),n=i("ExMk"),s=i("Ktth"),l=i.n(s),o=i("QhmF"),c={name:"CheckFlow",components:{},filters:{statusIcon:function(e){return 2==e?i("migV"):1==e?i("y4JV"):4==e?i("+xXq"):3==e?i("wu/m"):0==e||6==e?i("6pZM"):5==e?i("wu/m"):""},stepName:function(e){return"第"+l.a.encodeS(e)+"级"}},props:{examineType:{type:String,default:""},id:[String,Number]},data:function(){return{loading:!1,list:[]}},computed:{},watch:{id:function(e){e&&(this.list=[],this.getDetail())}},mounted:function(){},methods:{getDetail:function(){var e=this;this.id&&(this.loading=!0,(0,{crm_contract:a.d,crm_receivables:a.d,oa_examine:n.f}[this.examineType])({recordId:this.id}).then(function(t){e.loading=!1,e.list=t.data}).catch(function(){e.loading=!1}))},getStatusName:function(e){return 0==e?"未审核 ":1==e?"通过":2==e?"拒绝":3==e?"审核中":4==e?"撤回":5==e?"创建":6==e?"待提交":""},close:function(){this.$emit("close")}}},r=(i("e037"),i("KHd+")),d=Object(r.a)(c,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"},{name:"empty",rawName:"v-empty",value:e.list,expression:"list"}],attrs:{"xs-empty-icon":"none","xs-empty-text":"暂无记录"}},[a("flexbox",{staticClass:"flow-head"},[a("div",{staticClass:"flow-head-name"},[e._v("审批流程")]),e._v(" "),a("img",{staticClass:"flow-head-close",attrs:{src:i("cjwK")},on:{click:e.close}})]),e._v(" "),a("div",{staticClass:"flow-body"},e._l(e.list,function(t,i){return a("flexbox",{key:i,staticClass:"cf-flow-item",attrs:{align:"stretch",justify:"flex-start"}},[a("img",{staticClass:"cf-flow-item-img",attrs:{src:e._f("statusIcon")(t.examineStatus)}}),e._v(" "),a("div",[a("flexbox",{staticClass:"cf-flow-item-head"},[a("div",{staticClass:"cf-flow-item-des"},[e._v(e._s(e._f("stepName")(t.orderId)))]),e._v(" "),a("div",[e._v(e._s(t.examineTime))])]),e._v(" "),a("flexbox",{staticClass:"cf-flow-item-info"},[a("div",{staticClass:"cf-flow-item-name"},[e._v(e._s(t.realname))]),e._v(" "),a("div",[a("span",[e._v(e._s(e.getStatusName(t.examineStatus)))]),e._v("了此申请")])]),e._v(" "),t.remarks?a("div",{staticClass:"cf-flow-item-content"},[e._v(e._s(t.remarks)+"\n          "),a("div",{staticClass:"cf-flow-item-content-arrow"})]):e._e()],1),e._v(" "),a("div",{staticClass:"cf-flow-item-line"})])}))],1)},[],!1,null,"21bdaae0",null);d.options.__file="CheckFlow.vue";var m=d.exports,u={name:"ExamineInfo",components:{ExamineHandle:o.default,CheckFlow:m},filters:{statusIcon:function(e){return 2==e?i("migV"):1==e?i("y4JV"):4==e?i("+xXq"):3==e?i("wu/m"):0==e||6==e?i("6pZM"):5==e?i("wu/m"):""},detailName:function(e){return 2==e.stepType?e.userList.length+"人或签":3==e.stepType?e.userList.length+"人会签":1==e.stepType?"负责人主管":4==e.stepType?"上一级审批人主管":5==e.stepType?"创建人":void 0},stepName:function(e){return"第"+l.a.encodeS(e)+"级"}},props:{examineType:{type:String,default:""},id:[String,Number],recordId:[String,Number],ownerUserId:[String,Number]},data:function(){return{loading:!1,examineInfo:{},showFlowPopover:!1,examineHandleInfo:{status:1},showExamineHandle:!1}},computed:{},watch:{recordId:{handler:function(e){e&&(this.examineInfo={},this.getFlowStepList(),this.$refs.checkFlow&&this.$refs.checkFlow.getDetail())},deep:!0,immediate:!0}},mounted:function(){},methods:{getFlowStepList:function(){var e=this;this.recordId&&this.id&&(this.loading=!0,(0,{crm_contract:a.e,crm_receivables:a.e,oa_examine:n.g}[this.examineType])({recordId:this.recordId,ownerUserId:this.ownerUserId}).then(function(t){e.loading=!1,e.examineInfo=t.data,e.$emit("value-change",{config:t.data.examineType,value:[]})}).catch(function(){e.loading=!1}))},examineHandle:function(e){this.examineHandleInfo.status=e,this.showExamineHandle=!0},getStatusName:function(e){return 0==e?"未审核":1==e?"通过":2==e?"拒绝":3==e?"审核中":4==e?"撤回":5==e?"创建":6==e?"待提交":""},getContentFilters:function(e){for(var t="",i=0;i<e.length;i++){var a=e[i];t=i==e.length-1?t+a.realname+"："+this.getStatusName(a.checkType):t+a.realname+"："+this.getStatusName(a.checkType)+"、"}return t},examineHandleClick:function(e){this.getFlowStepList(),this.$refs.checkFlow&&this.$refs.checkFlow.getDetail(),this.$emit("on-handle",e)}}},h=(i("azG2"),Object(r.a)(u,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"contract-flow-box"},[a("flexbox",{staticStyle:{position:"relative"},attrs:{direction:"row-reverse"}},[a("el-popover",{attrs:{placement:"bottom",width:"300",trigger:"click"},model:{value:e.showFlowPopover,callback:function(t){e.showFlowPopover=t},expression:"showFlowPopover"}},[a("check-flow",{ref:"checkFlow",attrs:{id:e.recordId,"examine-type":e.examineType},on:{close:function(t){e.showFlowPopover=!1}}}),e._v(" "),a("el-button",{staticClass:"check-flow-button",attrs:{slot:"reference",type:"text"},slot:"reference"},[e._v("查看审批历史")])],1),e._v(" "),a("div",{staticStyle:{"min-height":"40px"}},[1==e.examineInfo.isRecheck?a("el-button",{staticClass:"flow-button white",on:{click:function(t){e.examineHandle(4)}}},[e._v("撤回审核")]):e._e(),e._v(" "),1==e.examineInfo.isCheck?a("el-button",{staticClass:"flow-button red",on:{click:function(t){e.examineHandle(2)}}},[e._v("拒绝")]):e._e(),e._v(" "),1==e.examineInfo.isCheck?a("el-button",{staticClass:"flow-button blue",on:{click:function(t){e.examineHandle(1)}}},[e._v("通过")]):e._e()],1)],1),e._v(" "),2==e.examineInfo.examineType?a("flexbox",{staticClass:"check-items"},e._l(e.examineInfo.steps,function(t,i){return a("flexbox",{key:i,staticClass:"check-item"},[a("div",[a("flexbox",{staticClass:"check-item-user",staticStyle:{width:"auto"}},[a("div",{directives:[{name:"photo",rawName:"v-photo",value:t.examinUser,expression:"item.examinUser"},{name:"lazy",rawName:"v-lazy:background-image",value:e.$options.filters.filterUserLazyImg(t.examinUser.img),expression:"$options.filters.filterUserLazyImg(item.examinUser.img)",arg:"background-image"}],staticClass:"div-photo check-item-img"}),e._v(" "),a("div",{staticClass:"check-item-name"},[e._v(e._s(t.examinUser.realname))])]),e._v(" "),a("flexbox",{staticClass:"check-item-info"},[a("img",{staticClass:"check-item-img",attrs:{src:e._f("statusIcon")(t.examineStatus)}}),e._v(" "),a("div",{staticClass:"check-item-name"},[e._v(e._s(e.getStatusName(t.examineStatus)))])])],1),e._v(" "),e.examineInfo.steps.length-1!=i?a("i",{staticClass:"el-icon-arrow-right check-item-arrow"}):e._e()])})):1==e.examineInfo.examineType?a("flexbox",{staticClass:"check-items",attrs:{wrap:"wrap"}},e._l(e.examineInfo.steps,function(t,n){return a("el-popover",{key:n,attrs:{disabled:!t.userList||0==t.userList.length,placement:"bottom",trigger:"hover"}},[a("div",{staticClass:"popover-detail"},e._l(t.userList,function(t,i){return a("flexbox",{key:i,staticClass:"popover-detail-item",attrs:{align:"stretch"}},[a("img",{staticClass:"popover-detail-item-img",attrs:{src:e._f("statusIcon")(t.examineStatus)}}),e._v(" "),a("div",[a("div",{staticClass:"popover-detail-item-time"},[e._v(e._s(t.examineTime))]),e._v(" "),a("flexbox",{staticClass:"popover-detail-item-examine"},[a("div",{staticClass:"examine-name"},[e._v(e._s(t.realname))]),e._v(" "),a("div",{staticClass:"examine-info"},[e._v(e._s(e.getStatusName(t.examineStatus))+"此申请")])])],1)])})),e._v(" "),a("flexbox",{staticClass:"fixed-examine-item",attrs:{slot:"reference"},slot:"reference"},[a("div",{staticClass:"fixed-examine-info"},[a("img",{attrs:{src:i("dZj0")}}),e._v(" "),a("div",{staticClass:"detail"},[e._v(e._s(e._f("detailName")(t)))]),e._v(" "),a("flexbox",{staticClass:"check-item-info"},[a("img",{staticClass:"check-item-img",attrs:{src:e._f("statusIcon")(t.examineStatus)}}),e._v(" "),a("div",{staticClass:"check-item-name"},[e._v(e._s(e.getStatusName(t.examineStatus)))])])],1),e._v(" "),e.examineInfo.steps.length-1!=n?a("i",{staticClass:"el-icon-arrow-right check-item-arrow"}):e._e()])],1)})):e._e(),e._v(" "),a("examine-handle",{attrs:{show:e.showExamineHandle,id:e.id,"record-id":e.recordId,"examine-type":e.examineType,detail:e.examineInfo,status:e.examineHandleInfo.status},on:{close:function(t){e.showExamineHandle=!1},save:e.examineHandleClick}})],1)},[],!1,null,"ee0757a8",null));h.options.__file="ExamineInfo.vue";t.a=h.exports},"4UoZ":function(e,t,i){},"5R2D":function(e,t,i){"use strict";var a=i("4UoZ");i.n(a).a},"6pZM":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAyMzg4NTNCNDE2NjExRTk4MkE1QUI2Q0I2MDkxQ0RDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAyMzg4NTNDNDE2NjExRTk4MkE1QUI2Q0I2MDkxQ0RDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDIzODg1Mzk0MTY2MTFFOTgyQTVBQjZDQjYwOTFDREMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDIzODg1M0E0MTY2MTFFOTgyQTVBQjZDQjYwOTFDREMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7hsdBeAAABLklEQVR42mL8WxjFgAWwAXEAFFsCsRQQ/wLiJ0B8HojXA/FGqBgKYMFiWCAQdwGxChZLNKA4EojvAHE5EK9DVsSExGYG4k6oAhUGwgCkZi1UDzM2F7YBcRkD6QCmpxzZhSH4DGPKrQNjAoaGwAwEhU0/XjcoqkMwfjABZBbIwFAglmGgHEgDcRgTNGlQCwSADDSlooEmIAMlqGigJAs0tbMTo5qpbymm4P2bDP8mN6Ek7OcETQJqwg0YkTnPQS68BMRq+MxDdgEBcAbkwg1UDMMNIANXQ0sRSsFTkFlM0EgpooKBhUD8E5aXQa7spsCwbqgZKMVXJRBPIcOwqVC9GOXhXyDOhZYad4gw6A60HMiB6sVZYoMKzc1QxaDS2xia8WEBfxZaBazGVgUABBgAnqU8Wz9MmZkAAAAASUVORK5CYII="},"8gwX":function(e,t,i){"use strict";var a=i("YrMO"),n=i("Ew9n"),s=i("F03V"),l=i("U05J"),o=i("C+sD"),c=i("8DbX"),r=i("EgJF"),d=i("4+0Q"),m={name:"ProductDetail",components:{SlideView:n.a,CRMDetailHead:s.a,CRMBaseInfo:l.a,RelativeFiles:o.a,RelativeHandle:c.a,CRMCreateView:r.default},mixins:[d.a],props:{id:[String,Number],listenerIDs:{type:Array,default:function(){return["crm-main-container"]}},noListenerIDs:{type:Array,default:function(){return[]}},noListenerClass:{type:Array,default:function(){return["el-table__body"]}}},data:function(){return{loading:!1,crmType:"product",detailData:{},headDetails:[{title:"产品类别",value:""},{title:"产品单位",value:""},{title:"产品价格",value:""},{title:"产品编码",value:""}],tabnames:[{label:"基本信息",name:"basicinfo"},{label:"附件",name:"file"},{label:"操作记录",name:"operationlog"}],tabCurrentName:"basicinfo",isCreate:!1}},computed:{tabName:function(){return"basicinfo"==this.tabCurrentName?"c-r-m-base-info":"file"==this.tabCurrentName?"relative-files":"operationlog"==this.tabCurrentName?"relative-handle":""}},mounted:function(){},methods:{getDetial:function(){var e=this;this.loading=!0,Object(a.g)({productId:this.id}).then(function(t){e.loading=!1,e.detailData=t.data,e.headDetails[0].value=t.data.categoryName,e.headDetails[1].value=t.data.单位,e.headDetails[2].value=e.moneyFormat(t.data.price),e.headDetails[3].value=t.data.num}).catch(function(){e.loading=!1})},hideView:function(){this.$emit("hide-view")},handleClick:function(e,t){},editSaveSuccess:function(){this.$emit("handle",{type:"save-success"}),this.getDetial()}}},u=(i("FYRF"),i("KHd+")),h=Object(u.a)(m,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("slide-view",{directives:[{name:"empty",rawName:"v-empty",value:!e.canShowDetail,expression:"!canShowDetail"}],attrs:{"listener-ids":e.listenerIDs,"no-listener-ids":e.noListenerIDs,"no-listener-class":e.noListenerClass,"body-style":{padding:0,height:"100%"},"xs-empty-icon":"nopermission","xs-empty-text":"暂无权限"},on:{"side-close":e.hideView}},[e.canShowDetail?i("flexbox",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"d-container",attrs:{direction:"column",align:"stretch"}},[i("c-r-m-detail-head",{attrs:{detail:e.detailData,"head-details":e.headDetails,id:e.id,"crm-type":"product"},on:{handle:e.detailHeadHandle,close:e.hideView}}),e._v(" "),i("div",{staticClass:"tabs"},[i("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.tabCurrentName,callback:function(t){e.tabCurrentName=t},expression:"tabCurrentName"}},e._l(e.tabnames,function(e,t){return i("el-tab-pane",{key:t,attrs:{label:e.label,name:e.name}})}))],1),e._v(" "),i("div",{staticClass:"t-loading-content"},[i("keep-alive",[i(e.tabName,{tag:"component",attrs:{detail:e.detailData,id:e.id,"crm-type":"product"}})],1)],1)],1):e._e(),e._v(" "),e.isCreate?i("c-r-m-create-view",{attrs:{action:{type:"update",id:e.id,batchId:e.detailData.batchId},"crm-type":"product"},on:{"save-success":e.editSaveSuccess,"hiden-view":function(t){e.isCreate=!1}}}):e._e()],1)},[],!1,null,"bcdf22de",null);h.options.__file="ProductDetail.vue";t.a=h.exports},FYRF:function(e,t,i){"use strict";var a=i("dIWX");i.n(a).a},L6dP:function(e,t,i){"use strict";var a=i("eEkm");i.n(a).a},LAvH:function(e,t,i){"use strict";var a=i("+wiD");i.n(a).a},PLym:function(e,t,i){},QhmF:function(e,t,i){"use strict";i.r(t);var a=i("KzkL"),n=i("ExMk"),s={name:"ExamineHandle",components:{XhUserCell:i("8GhS").p},props:{show:{type:Boolean,default:!1},status:{type:[String,Number],default:1},id:[String,Number],recordId:[String,Number],detail:{type:Object,default:function(){return{}}},examineType:{type:String,default:""}},data:function(){return{loading:!1,showDialog:!1,handleType:1,selectUsers:[],content:""}},computed:{title:function(){return 1==this.status?"审批通过":2==this.status?"审批拒绝":4==this.status?"撤回审批":""},placeholder:function(){return 1==this.status?"请输入审批意见（选填）":2==this.status?"请输入审批意见（必填）":4==this.status?"请输入撤回理由（必填）":""}},watch:{show:{handler:function(e){this.showDialog=e},deep:!0,immediate:!0}},mounted:function(){},methods:{submitInfo:function(){2!=this.status&&4!=this.status||this.content?2==this.status||1==this.status?this.handlePassAndReject():4==this.status&&this.handleRevoke():this.$message.error(this.placeholder)},handleRevoke:function(){var e=this;this.loading=!0,this.getRequest()({id:this.id,recordId:this.recordId,status:this.status,remarks:this.content}).then(function(t){e.loading=!1,e.$message.success("操作成功"),e.$emit("save"),e.$bus.emit("examine-handle-bus"),e.$store.dispatch("GetMessageNum"),e.hiddenView()}).catch(function(){e.loading=!1})},getRequest:function(){return{crm_contract:a.c,crm_receivables:a.c,oa_examine:n.e}[this.examineType]},handlePassAndReject:function(){var e=this;this.loading=!0;var t={id:this.id,recordId:this.recordId,status:this.status,remarks:this.content};1==this.status&&2==this.detail.examineType&&1!=this.handleType&&(t.nextUserId=this.selectUsers[0].userId),this.getRequest()(t).then(function(t){e.loading=!1,e.$message.success("操作成功"),e.$emit("save",{type:e.status}),e.hiddenView(),e.$bus.emit("examine-handle-bus"),e.$store.dispatch("GetMessageNum")}).catch(function(){e.loading=!1})},handleClick:function(e){"cancel"==e?this.hiddenView():"confirm"==e&&this.submitInfo()},selectUserFocus:function(){this.handleType=2},selectExamineUser:function(e){this.selectUsers=e.value},hiddenView:function(){this.$emit("close")}}},l=(i("5R2D"),i("KHd+")),o=Object(l.a)(s,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{title:e.title,"append-to-body":!0,visible:e.showDialog,width:"400px"},on:{"update:visible":function(t){e.showDialog=t},close:e.hiddenView}},[1==e.status&&2==e.detail.examineType?i("div",{staticClass:"handle-type"},[i("flexbox",{staticClass:"handle-item"},[i("el-radio",{attrs:{label:1},model:{value:e.handleType,callback:function(t){e.handleType=t},expression:"handleType"}},[i("span")]),e._v(" "),i("div",{staticStyle:{"font-size":"12px"},nativeOn:{click:function(t){e.handleType=1}}},[e._v("审核结束")])],1),e._v(" "),i("flexbox",{staticClass:"handle-item",attrs:{id:"selectUser"}},[i("el-radio",{attrs:{label:2},model:{value:e.handleType,callback:function(t){e.handleType=t},expression:"handleType"}},[i("span")]),e._v(" "),i("xh-user-cell",{staticClass:"select-user",attrs:{placeholder:"选择下一审批人"},on:{focus:e.selectUserFocus,"value-change":e.selectExamineUser}})],1)],1):e._e(),e._v(" "),1==e.status&&2==e.detail.examineType?i("div",{staticClass:"title"},[e._v("意见")]):e._e(),e._v(" "),i("el-input",{attrs:{rows:5,maxlength:200,placeholder:e.placeholder,type:"textarea",resize:"none","show-word-limit":""},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}}),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.handleClick("cancel")}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handleClick("confirm")}}},[e._v("确 定")])],1)],1)},[],!1,null,"347c3d6a",null);o.options.__file="ExamineHandle.vue";t.default=o.exports},SE13:function(e,t,i){"use strict";var a=i("mX3o"),n=i("UcQx"),s=i("6zBA"),l=i("7Qib"),o={name:"RelativeProduct",components:{CRMFullScreenDetail:function(){return Promise.all([i.e("chunk-64c1"),i.e("chunk-0ece76")]).then(i.bind(null,"uMjE"))}},mixins:[a.a],props:{id:[String,Number],detail:{type:Object,default:function(){return{}}},crmType:{type:String,default:""},isSeas:{type:Boolean,default:!1}},data:function(){return{nopermission:!1,list:[],fieldList:[],tableHeight:"400px",showFullDetail:!1,productId:"",totalInfo:{money:"0.00",discountRate:"0.00"}}},computed:{},watch:{id:function(e){this.list=[],this.getDetail()}},mounted:function(){this.getDetail()},activated:function(){},deactivated:function(){},methods:{getFieldList:function(){this.fieldList.push({prop:"productName",width:"200",label:"产品名称"}),this.fieldList.push({prop:"categoryName",width:"200",label:"产品类别"}),this.fieldList.push({prop:"unit",width:"200",label:"单位"}),this.fieldList.push({prop:"price",width:"200",label:"标准价格"}),this.fieldList.push({prop:"salesPrice",width:"200",label:"售价"}),this.fieldList.push({prop:"num",width:"200",label:"数量"}),this.fieldList.push({prop:"discount",width:"200",label:"折扣（%）"}),this.fieldList.push({prop:"subtotal",width:"200",label:"合计"})},getDetail:function(){var e=this;this.loading=!0,this.getRequest()(this.getParams()).then(function(t){0==e.fieldList.length&&e.getFieldList(),e.nopermission=!1,e.loading=!1,e.list=t.data.list,e.totalInfo.money=Object(l.j)(t.data.money),e.totalInfo.discountRate=t.data.discountRate}).catch(function(t){102==t.code&&(e.nopermission=!0),e.loading=!1})},getRequest:function(){return"business"==this.crmType?n.f:"contract"==this.crmType?s.f:void 0},getParams:function(){return"business"==this.crmType?{businessId:this.id,pageType:0}:"contract"==this.crmType?{contractId:this.id,pageType:0}:void 0},handleRowClick:function(e,t,i){this.productId=e.productId,this.showFullDetail=!0},headerRowStyle:function(e){e.row,e.column,e.rowIndex,e.columnIndex;return{textAlign:"center"}},cellStyle:function(e){e.row,e.column,e.rowIndex,e.columnIndex;return{textAlign:"center"}},fieldFormatter:function(e,t){return["price","subtotal","salesPrice"].includes(t.property)?Object(l.j)(e[t.property]):e[t.property]||"--"}}},c=(i("LAvH"),i("KHd+")),r=Object(c.a)(o,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"empty",rawName:"v-empty",value:e.nopermission,expression:"nopermission"}],staticClass:"rc-cont",attrs:{"xs-empty-icon":"nopermission","xs-empty-text":"暂无权限"}},[i("flexbox",{staticClass:"rc-head",attrs:{direction:"row-reverse"}}),e._v(" "),i("el-table",{staticStyle:{width:"100%",border:"1px solid #E6E6E6"},attrs:{data:e.list,height:e.tableHeight,"header-cell-style":e.headerRowStyle,"cell-style":e.cellStyle,stripe:""},on:{"row-click":e.handleRowClick}},e._l(e.fieldList,function(t,a){return i("el-table-column",{key:a,attrs:{prop:t.prop,label:t.label,formatter:e.fieldFormatter,"show-overflow-tooltip":""}})})),e._v(" "),i("flexbox",{staticClass:"handle-footer"},[i("div",{staticClass:"discount-title"},[e._v("整单折扣（%）："),i("span",{staticClass:"discount-title-value"},[e._v(e._s(e.totalInfo.discountRate))])]),e._v(" "),i("div",{staticClass:"total-info"},[e._v("已选中产品："),i("span",{staticClass:"info-yellow"},[e._v(e._s(e.list.length))]),e._v(" 种  总金额："),i("span",{staticClass:"info-yellow"},[e._v(e._s(e.totalInfo.money))]),e._v(" 元")])]),e._v(" "),i("c-r-m-full-screen-detail",{attrs:{visible:e.showFullDetail,id:e.productId,"crm-type":"product"},on:{"update:visible":function(t){e.showFullDetail=t}}})],1)},[],!1,null,"41662e4e",null);r.options.__file="RelativeProduct.vue";t.a=r.exports},azG2:function(e,t,i){"use strict";var a=i("f8M1");i.n(a).a},dIWX:function(e,t,i){},e037:function(e,t,i){"use strict";var a=i("PLym");i.n(a).a},eEkm:function(e,t,i){},f8M1:function(e,t,i){},migV:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJGNkIxREZBNDE2NTExRTlBQkY1RjdBNzY2QThDRUY2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJGNkIxREZCNDE2NTExRTlBQkY1RjdBNzY2QThDRUY2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkY2QjFERjg0MTY1MTFFOUFCRjVGN0E3NjZBOENFRjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkY2QjFERjk0MTY1MTFFOUFCRjVGN0E3NjZBOENFRjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7u8NAUAAABfklEQVR42qSVsUoDQRCG5y5imfo0gk0C9la+RYQY4gOENNokkOALCBqIFlrlBYJBjfgaimCbKxSUpE4phDg/zJLd2wmnuR9+WHZmv9ud25sLFo0GKdpkl8UH7G32D/uL/cZ+ZD/JnKMNBXbIvmQXlYfsiY/ZMbvDfrCTQmucY19IQpHShZx7WZPTdnjObtP/ZdZ07B1W1oTZ0IoBojZXTrhQIGq1iPJ5fynmEEOOq2uwADxi7zihWo2oVCJqNl0oxphDDDmu8IRqKFfDVb9PNJ0SRdESamCYQww5vsoB38MPHuyqR7MBkBn3ekSzmQb8xA4jtcxYgIVmp+kwaCvUbnsWAThRI8kjJ2uqawLgeyoMx7SPvxr6AuDIm67X/Zola4ocXyMAh9JFlhoMiMZj/wUYKGLIcfUNViDtC5f7LuP7qAJovmXsspsB1hWG077O2DdrwG5lrdcP5+xT6RrxH0CxlOpE1q7s2Giaz5KM7r0vH74p/Kv8AobaR/ErwAAhLXvaJ0ohPQAAAABJRU5ErkJggg=="},osAF:function(e,t,i){"use strict";var a=i("/gu+");i.n(a).a},"wu/m":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJFRDI1M0Q1NDE2NTExRTk4NTFFODEzNjdCN0UzRTFCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJFRDI1M0Q2NDE2NTExRTk4NTFFODEzNjdCN0UzRTFCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkVEMjUzRDM0MTY1MTFFOTg1MUU4MTM2N0I3RTNFMUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkVEMjUzRDQ0MTY1MTFFOTg1MUU4MTM2N0I3RTNFMUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4ZL3N5AAABQklEQVR42mJ0O3ueAQtgA+IAKLYEYikg/gXET4AYpGE9EG+EiqEAFiyGBQJxFxCrYLFEA4ojgfgOEJcD8TpkRUxIbGYg7oQqUGEgDEBq1kL1MGNzYRsQlzGQDmB6ypFdGEKmYciGhsAMBIVNPz7VvWqqYEwATACZBfJyKBDL4FOpw8NNjCulgTiMCZo0qAUCQAaaUtFAE5CXJbCFGTZv7jQygLOvfPnKUHzrNroSSSZsqZ0YwIhDHOTC50DMiyyIbjPMZe7nLhCy5znIhZeoGIZnQAZuoKKBG0AGroaWIjgBKAKuAjEB8BRkFgs0UoqAeBUulVhiExsoBOKfsLwMcmU3BV7thpqBUnxVAvEUMgybCtWLUR7+BeJcaKlxhwiD7kDLgRyoXpwlNqjQ3AxVDCq9jaEZHxbwZ6FVwGpsmQIgwAD7IEenGBpwRwAAAABJRU5ErkJggg=="},"xfX+":function(e,t,i){"use strict";var a=i("6zBA"),n=i("Ew9n"),s=i("F03V"),l=i("UEWd"),o=i("QJC7"),c=i("8KPp"),r=i("gd5k"),d=i("aQg/"),m=i("y9lt"),u=i("i68b"),h={name:"ContractFollow",components:{MixAdd:l.a,RecordLog:o.a,JournalLog:c.a,ExamineLog:r.a,TaskLog:d.a,ScheduleLog:m.a},mixins:[u.a],props:{id:[String,Number],crmType:{type:String,default:""}},data:function(){return{sendLoading:!1,nextTime:"",isEvent:!1,logType:"record"}},computed:{logTypes:function(){return this.oa?[{type:"record",name:"跟进记录"},{type:"log",name:"日志"},{type:"examine",name:"审批"},{type:"task",name:"任务"},{type:"schedule",name:"日程"}]:[{type:"record",name:"跟进记录"}]},componentsName:function(){return"record"==this.logType?"RecordLog":"log"==this.logType?"JournalLog":"examine"==this.logType?"ExamineLog":"task"==this.logType?"TaskLog":"schedule"==this.logType?"ScheduleLog":""}},mounted:function(){},activated:function(){},deactivated:function(){},methods:{handleTypeDrop:function(e){this.followType=e},logTabsClick:function(e,t){this.logType=e.type},sendInfo:function(){this.$refs.mixadd.$emit("submit-info")},submitInfo:function(e){var t=this;if(!this.isEvent||this.nextTime)if(e.content){var i={};i.typesId=this.id,i.content=e.content,i.category=this.followType,i.batchId=e.batchId,i.isEvent=this.isEvent?1:0,i.nextTime=this.nextTime||"",this.sendLoading=!0,Object(a.k)(i).then(function(e){t.sendLoading=!1,t.$message.success("发布成功"),t.$refs.mixadd.resetInfo(),t.isEvent=!1,t.nextTime="",t.$bus.emit("follow-log-refresh",{type:"record-log"})}).catch(function(){t.sendLoading=!1})}else this.$message.error("请输入跟进内容");else this.$message.error("请选择下次联系时间")}}},p=(i("osAF"),i("KHd+")),v=Object(p.a)(h,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"f-container"},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.sendLoading,expression:"sendLoading"}]},[i("mix-add",{ref:"mixadd",attrs:{"crm-type":e.crmType,id:e.id},on:{"mixadd-info":e.submitInfo}}),e._v(" "),i("flexbox",{staticClass:"se-section"},[i("div",{staticClass:"se-name"},[e._v("记录类型")]),e._v(" "),i("el-dropdown",{staticStyle:{"margin-right":"20px"},attrs:{trigger:"click"},on:{command:e.handleTypeDrop}},[i("flexbox",{staticClass:"se-select"},[i("div",{staticClass:"se-select-name"},[e._v(e._s(e.followType?e.followType:"请选择"))]),e._v(" "),i("i",{staticClass:"el-icon-arrow-down el-icon--right",staticStyle:{color:"#ccc"}})]),e._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.followTypes,function(t,a){return i("el-dropdown-item",{key:a,attrs:{command:t.type}},[e._v(e._s(t.name))])}))],1),e._v(" "),i("div",{staticClass:"se-name"},[e._v("下次联系时间")]),e._v(" "),i("el-date-picker",{staticClass:"se-datepicker",attrs:{"default-value":new Date,editable:!1,type:"datetime",placeholder:"选择日期","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.nextTime,callback:function(t){e.nextTime=t},expression:"nextTime"}}),e._v(" "),e.showOAPermission?i("el-checkbox",{model:{value:e.isEvent,callback:function(t){e.isEvent=t},expression:"isEvent"}},[e._v("添加到日程提醒")]):e._e(),e._v(" "),i("el-button",{staticClass:"se-send",attrs:{type:"primary"},nativeOn:{click:function(t){return e.sendInfo(t)}}},[e._v("发布")])],1)],1),e._v(" "),i("div",{staticClass:"log-cont"},[i("flexbox",{staticStyle:{"border-bottom":"1px solid #E6E6E6"}},e._l(e.logTypes,function(t,a){return i("flexbox",{key:a,staticStyle:{width:"auto"},nativeOn:{click:function(i){e.logTabsClick(t,a)}}},[i("div",{staticClass:"log-tabs-item",style:{color:e.logType==t.type?"#F18C70":"#777"}},[e._v(e._s(t.name))]),e._v(" "),e.logTypes.length-1!=a?i("div",{staticClass:"log-tabs-line"}):e._e()])})),e._v(" "),i("keep-alive",[i(e.componentsName,{tag:"component",attrs:{id:e.id,"crm-type":e.crmType}})],1)],1)])},[],!1,null,"08f1361a",null);v.options.__file="ContractFollow.vue";var g=v.exports,f=i("U05J"),b=i("8DbX"),w=i("DUlf"),A=i("SE13"),y=i("+NTD"),I=i("C+sD"),x=i("3biH"),N=i("EgJF"),C=i("4+0Q"),D={name:"ContractDetail",components:{SlideView:n.a,CRMDetailHead:s.a,ContractFollow:g,CRMBaseInfo:f.a,RelativeHandle:b.a,RelativeTeam:w.a,RelativeProduct:A.a,RelativeReturnMoney:y.a,RelativeFiles:I.a,ExamineInfo:x.a,CRMCreateView:N.default},mixins:[C.a],props:{id:[String,Number],listenerIDs:{type:Array,default:function(){return["crm-main-container"]}},noListenerIDs:{type:Array,default:function(){return[]}},noListenerClass:{type:Array,default:function(){return["el-table__body"]}}},data:function(){return{loading:!1,crmType:"contract",detailData:{},headDetails:[{title:"合同编号",value:""},{title:"客户名称",value:""},{title:"合同金额（元）",value:""},{title:"签约时间",value:""},{title:"回款金额（元）",value:""},{title:"负责人",value:""}],tabCurrentName:"followlog",isCreate:!1}},computed:{tabName:function(){return"followlog"==this.tabCurrentName?"contract-follow":"basicinfo"==this.tabCurrentName?"c-r-m-base-info":"team"==this.tabCurrentName?"relative-team":"contract"==this.tabCurrentName?"relative-contract":"operationlog"==this.tabCurrentName?"relative-handle":"product"==this.tabCurrentName?"relative-product":"returnedmoney"==this.tabCurrentName?"relative-return-money":"file"==this.tabCurrentName?"relative-files":""},tabnames:function(){var e=[];return e.push({label:"跟进记录",name:"followlog"}),this.crm.contract&&this.crm.contract.read&&e.push({label:"基本信息",name:"basicinfo"}),this.crm.product&&this.crm.product.index&&e.push({label:"产品",name:"product"}),this.crm.receivables&&this.crm.receivables.index&&e.push({label:"回款信息",name:"returnedmoney"}),e.push({label:"相关团队",name:"team"}),e.push({label:"附件",name:"file"}),e.push({label:"操作记录",name:"operationlog"}),e}},mounted:function(){},methods:{getDetial:function(){var e=this;this.loading=!0,Object(a.i)({contractId:this.id}).then(function(t){e.loading=!1,e.detailData=t.data,e.headDetails[0].value=t.data.num,e.headDetails[1].value=t.data.customerName,e.headDetails[2].value=e.moneyFormat(t.data.money),e.headDetails[3].value=t.data.orderDate,e.headDetails[4].value=e.moneyFormat(t.data.receivablesMoney),e.headDetails[5].value=t.data.ownerUserName}).catch(function(){e.loading=!1})},hideView:function(){this.$emit("hide-view")},handleClick:function(e,t){},editSaveSuccess:function(){this.$emit("handle",{type:"save-success"}),this.getDetial()}}},E=(i("L6dP"),Object(p.a)(D,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("slide-view",{directives:[{name:"empty",rawName:"v-empty",value:!e.canShowDetail,expression:"!canShowDetail"}],attrs:{"listener-ids":e.listenerIDs,"no-listener-ids":e.noListenerIDs,"no-listener-class":e.noListenerClass,"body-style":{padding:0,height:"100%"},"xs-empty-icon":"nopermission","xs-empty-text":"暂无权限"},on:{"side-close":e.hideView}},[e.canShowDetail?i("flexbox",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"d-container",attrs:{direction:"column",align:"stretch"}},[i("c-r-m-detail-head",{attrs:{detail:e.detailData,"head-details":e.headDetails,id:e.id,"crm-type":"contract"},on:{handle:e.detailHeadHandle,close:e.hideView}}),e._v(" "),i("div",{staticClass:"examine-info"},[i("examine-info",{staticClass:"examine-info-border",attrs:{id:e.id,"record-id":e.detailData.examineRecordId,"owner-user-id":e.detailData.ownerUserId,"examine-type":"crm_contract"}})],1),e._v(" "),i("div",{staticClass:"tabs"},[i("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.tabCurrentName,callback:function(t){e.tabCurrentName=t},expression:"tabCurrentName"}},e._l(e.tabnames,function(e,t){return i("el-tab-pane",{key:t,attrs:{label:e.label,name:e.name}})}))],1),e._v(" "),i("div",{staticClass:"t-loading-content",attrs:{id:"follow-log-content"}},[i("keep-alive",[i(e.tabName,{tag:"component",attrs:{detail:e.detailData,id:e.id,"crm-type":"contract"}})],1)],1)],1):e._e(),e._v(" "),e.isCreate?i("c-r-m-create-view",{attrs:{action:{type:"update",id:e.id,batchId:e.detailData.batchId},"crm-type":"contract"},on:{"save-success":e.editSaveSuccess,"hiden-view":function(t){e.isCreate=!1}}}):e._e()],1)},[],!1,null,"21986f74",null));E.options.__file="ContractDetail.vue";t.a=E.exports},y4JV:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkMwMDM5QTNCNDE2NTExRTk5ODY1RTZGN0EwMzg2MEE4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkMwMDM5QTNDNDE2NTExRTk5ODY1RTZGN0EwMzg2MEE4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzAwMzlBMzk0MTY1MTFFOTk4NjVFNkY3QTAzODYwQTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzAwMzlBM0E0MTY1MTFFOTk4NjVFNkY3QTAzODYwQTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5ZqqPOAAAB00lEQVR42mJ0O3ueAQtgA+IAKLYEYikg/gXET4AYpGE9EG+EiqEAFiyGBQJxFxCrYLFEA4ojgfgOEJcD8TpkRUxIbGYg7oQqUGEgDEBq1kL1MGNzYRsQlzGQDmB6ypFdGEKmYciGhsAMBIVNPwPlYALILJCBoUAsQwUDpYE4jAmaNEgCMuzsDHO0NBh61DDiLgBkoCkphqlycTH0qqsyyHJwMPz69x9d2gRkoARGYAA1TNdUZxBjY0MRN+TlZehWVWEQYGFhOP7xI0PjvfvoWiWZsKV2kMVKnJwM/UCDFTg5wGK2AgIMLSpKDJzMTAw7375jaLr3gOHnv38YPmAEZr2bQFoNWZCTiYmhVkmRwZiPl+HL378MO968ZQgSE2VgYmRkWPXyFcO8p88Y/mMPkYcgF15CF/0OtLnu7j2Gg+8/MPAwMzOEiIsxMAINm/XkKcNc3IaBwBmQgRuwyfz5/5+h/f4DhvWvXoNd2f3gEcNaIJsA2ADyMijk71IhLT4FYmVYpBRRIWEXAvFPWF5eDcTdFBjWDTUDpfiqBOIpZBg2FaoXozz8C8S50FLjDhEG3YGWAzlQvThLbFChuRmqGFR6G0MzPizgz0KrgNXYMgVAgAEAQ6R42TeJ/UsAAAAASUVORK5CYII="}}]);