(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26562514"],{4924:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{margin:"10px"}},[a("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-circle-plus"},on:{click:t.addResAttr}},[t._v("新增")]),a("el-button",{attrs:{size:"small",type:"danger",icon:"el-icon-remove"}},[t._v("批量删除")]),a("el-button",{attrs:{size:"small",type:"success",icon:"el-icon-check"},on:{click:t.saveClick}},[t._v("保存")]),a("el-button",{attrs:{size:"small",type:"warning",icon:"el-icon-document"},on:{click:t.loadTable}},[t._v("加载表")]),a("el-button",{attrs:{size:"small",type:"danger",icon:"el-icon-refresh"},on:{click:t.createTable}},[t._v("创建表")])],1),a("div",{staticClass:"table"},[a("el-table",{ref:"columnConfig",staticStyle:{width:"100%"},attrs:{height:"600",stripe:"",border:"",size:"small",data:t.tableData},on:{"row-dblclick":t.rowDblClick}},[a("el-table-column",{attrs:{type:"index",width:"40"}}),a("el-table-column",{attrs:{type:"selection",width:"45"}}),a("el-table-column",{attrs:{label:"操作",width:"50",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",circle:"",icon:"el-icon-edit-outline",type:"primary"},on:{click:function(a){t.handleEdit(e.row)}}})]}}])}),a("el-table-column",{attrs:{label:"字段属性",prop:"ATTRIBUTE_TYPE",width:"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.row.ATTRIBUTE_TYPE,callback:function(a){t.$set(e.row,"ATTRIBUTE_TYPE",a)},expression:"scope.row.ATTRIBUTE_TYPE"}},t._l(t.attrType,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))]}}])}),a("el-table-column",{attrs:{label:"字段名称",prop:"COLUMN_NAME","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{placeholder:"请输入名称"},model:{value:e.row.COLUMN_NAME,callback:function(a){t.$set(e.row,"COLUMN_NAME",a)},expression:"scope.row.COLUMN_NAME"}})]}}])}),a("el-table-column",{attrs:{label:"字段中文名称",prop:"COLUMN_CNAME","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{placeholder:"请输入名称"},model:{value:e.row.COLUMN_CNAME,callback:function(a){t.$set(e.row,"COLUMN_CNAME",a)},expression:"scope.row.COLUMN_CNAME"}})]}}])}),a("el-table-column",{attrs:{label:"字段类型",prop:"DATA_TYPE",width:"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.row.DATA_TYPE,callback:function(a){t.$set(e.row,"DATA_TYPE",a)},expression:"scope.row.DATA_TYPE"}},t._l(t.dataType,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))]}}])}),a("el-table-column",{attrs:{label:"输入框类型",prop:"PROPERTY_TYPE","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.row.PROPERTY_TYPE,callback:function(a){t.$set(e.row,"PROPERTY_TYPE",a)},expression:"scope.row.PROPERTY_TYPE"}},t._l(t.propertyType,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))]}}])}),a("el-table-column",{attrs:{label:"是否必填",prop:"ISLIST"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:e.row.ISMUST,callback:function(a){t.$set(e.row,"ISMUST",a)},expression:"scope.row.ISMUST"}})]}}])}),a("el-table-column",{attrs:{label:"是否视图展示",prop:"ISLIST"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:e.row.ISLIST,callback:function(a){t.$set(e.row,"ISLIST",a)},expression:"scope.row.ISLIST"}})]}}])}),a("el-table-column",{attrs:{label:"是否可排序",prop:"IS_SORT"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:e.row.IS_SORT,callback:function(a){t.$set(e.row,"IS_SORT",a)},expression:"scope.row.IS_SORT"}})]}}])}),a("el-table-column",{attrs:{label:"是否可编辑",prop:"IS_EDIT"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:e.row.ISUPDATE,callback:function(a){t.$set(e.row,"ISUPDATE",a)},expression:"scope.row.ISUPDATE"}})]}}])}),a("el-table-column",{attrs:{label:"是否可插入",prop:"ISINSERT"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:e.row.ISINSERT,callback:function(a){t.$set(e.row,"ISINSERT",a)},expression:"scope.row.ISINSERT"}})]}}])}),a("el-table-column",{attrs:{label:"是否可导出",prop:"ISEXPORT"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:e.row.ISEXPORT,callback:function(a){t.$set(e.row,"ISEXPORT",a)},expression:"scope.row.ISEXPORT"}})]}}])}),a("el-table-column",{attrs:{label:"是否可导入",prop:"ISINPORT"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:e.row.ISINPORT,callback:function(a){t.$set(e.row,"ISINPORT",a)},expression:"scope.row.ISINPORT"}})]}}])})],1)],1),a("resAttrForm",{attrs:{dialogState:t.dialogState},on:{initData:t.getColumnData}})],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"userForm"},[a("el-dialog",{attrs:{size:"small",width:"60%",title:t.dialogState.name,visible:t.dialogState.show,"close-on-click-modal":!1},on:{"update:visible":function(e){t.$set(t.dialogState,"show",e)}}},[a("div",{attrs:{width:"60%"}},[a("el-steps",{attrs:{active:t.activeStep,"finish-status":"success","align-center":""}},[a("el-step",{attrs:{title:"通用基本配置"}}),a("el-step",{attrs:{title:"类型特性配置"}}),a("el-step",{attrs:{title:"函数配置"}})],1)],1),a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",staticStyle:{width:"90%"},attrs:{model:t.dialogState.formData,"label-width":"140px",rules:t.rules}},[0==t.activeStep?a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"字段ID",prop:"COLUMN_ID"}},[a("el-input",{attrs:{size:"small"},model:{value:t.dialogState.formData.COLUMN_ID,callback:function(e){t.$set(t.dialogState.formData,"COLUMN_ID",e)},expression:"dialogState.formData.COLUMN_ID"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"属性名称",prop:"COLUMN_NAME"}},[a("el-input",{attrs:{size:"small"},model:{value:t.dialogState.formData.COLUMN_NAME,callback:function(e){t.$set(t.dialogState.formData,"COLUMN_NAME",e)},expression:"dialogState.formData.COLUMN_NAME"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"属性中文名",prop:"COLUMN_CNAME"}},[a("el-input",{attrs:{size:"small"},model:{value:t.dialogState.formData.COLUMN_CNAME,callback:function(e){t.$set(t.dialogState.formData,"COLUMN_CNAME",e)},expression:"dialogState.formData.COLUMN_CNAME"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"默认值",prop:"DEFAULT_VALUE"}},[a("el-input",{attrs:{size:"small"},model:{value:t.dialogState.formData.DEFAULT_VALUE,callback:function(e){t.$set(t.dialogState.formData,"DEFAULT_VALUE",e)},expression:"dialogState.formData.DEFAULT_VALUE"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"是否验证唯一性",prop:"ISUNIQUE"}},[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:t.dialogState.formData.ISUNIQUE,callback:function(e){t.$set(t.dialogState.formData,"ISUNIQUE",t._n(e))},expression:"dialogState.formData.ISUNIQUE"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"验证类型",prop:"VALIDDATATYPE"}},[a("el-input",{attrs:{size:"small"},model:{value:t.dialogState.formData.VALIDDATATYPE,callback:function(e){t.$set(t.dialogState.formData,"VALIDDATATYPE",t._n(e))},expression:"dialogState.formData.VALIDDATATYPE"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"文本框最大输入长度",prop:"INPUTLENGTH"}},[a("el-input",{attrs:{size:"small"},model:{value:t.dialogState.formData.INPUTLENGTH,callback:function(e){t.$set(t.dialogState.formData,"INPUTLENGTH",t._n(e))},expression:"dialogState.formData.INPUTLENGTH"}})],1)],1),a("el-col",{attrs:{span:16}},[a("el-form-item",{attrs:{label:"备注",prop:"REMARK"}},[a("el-input",{attrs:{size:"small"},model:{value:t.dialogState.formData.REMARK,callback:function(e){t.$set(t.dialogState.formData,"REMARK",t._n(e))},expression:"dialogState.formData.REMARK"}})],1)],1)],1):1==t.activeStep?a("el-row",[2==t.dialogState.formData.PROPERTY_TYPE?a("dropDown",{attrs:{dialogState:t.dialogState}}):t._e()],1):t._e(),a("el-row",[a("el-col",{attrs:{span:24,offset:16}},[a("el-form-item",[0!==t.activeStep?a("el-button",{attrs:{size:"medium",type:"primary"},on:{click:function(e){t.activeStep--}}},[t._v("上一步")]):t._e(),a("el-button",{attrs:{size:"medium",type:"primary"},on:{click:function(e){t.activeStep++}}},[t._v("下一步")])],1)],1)],1),a("el-row",[3==t.activeStep?a("el-col",{attrs:{span:24,offset:16}},[a("el-form-item",[a("el-button",{attrs:{size:"medium",type:"primary"},on:{click:function(e){t.submitForm("ruleForm")}}},[t._v(t._s("edit"==t.dialogState.type?"修改":"保存"))])],1)],1):t._e()],1)],1)],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dropDown"},[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"数据源SQL",prop:"TYPESQL"}},[a("el-input",{attrs:{size:"small"},model:{value:t.dialogState.formData.TYPESQL,callback:function(e){t.$set(t.dialogState.formData,"TYPESQL",e)},expression:"dialogState.formData.TYPESQL"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"验证类型",prop:"VALIDDATATYPE"}},[a("el-input",{attrs:{size:"small"},model:{value:t.dialogState.formData.VALIDDATATYPE,callback:function(e){t.$set(t.dialogState.formData,"VALIDDATATYPE",t._n(e))},expression:"dialogState.formData.VALIDDATATYPE"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"文本框最大输入长度",prop:"INPUTLENGTH"}},[a("el-input",{attrs:{size:"small"},model:{value:t.dialogState.formData.INPUTLENGTH,callback:function(e){t.$set(t.dialogState.formData,"INPUTLENGTH",t._n(e))},expression:"dialogState.formData.INPUTLENGTH"}})],1)],1)],1)],1)},n=[],c={components:{},props:{dialogState:Object},data:function(){return{}},computed:{},mounted:function(){},methods:{}},u=c,d=(a("4f6c"),a("2877")),m=Object(d["a"])(u,i,n,!1,null,"48f23b6b",null);m.options.__file="dropDown.vue";var p=m.exports,f={name:"resForm",components:{dropDown:p},props:{dialogState:Object},data:function(){return{activeStep:0,roleData:[],rules:{TABLE_ID:[{required:!0,message:"请输入表ID",trigger:"blur"}],TABLE_NAME:[{required:!0,message:"请输入表名",trigger:"blur"}],RESOURCE_NAME:[{required:!0,message:"请输入资源名称",trigger:"blur"}]}}},mounted:function(){console.log(this.dialogState.formData)},methods:{submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;"edit"==e.dialogState.type?e.$ajax.post(e.$api.editTableRes,e.dialogState.formData).then(function(t){t&&t.data&&0==t.data.errno?(e.$message.editSuccess(),e.$emit("initData"),e.dialogState.show=!1):e.$message.editError(t.data.errmsg)}):e.$ajax.post(e.$api.addTableRes,e.dialogState.formData).then(function(t){t&&t.data&&0==t.data.errno?(e.$message.addSuccess(),e.$emit("initData"),e.dialogState.show=!1):e.$message.addError(t.data.errmsg)})})}}},b=f,S=Object(d["a"])(b,s,r,!1,null,null,null);S.options.__file="resAttrForm.vue";var T=S.exports,v={components:{resAttrForm:T},data:function(){return{tableData:[],attrType:[{value:"1",label:"数据库"},{value:"2",label:"自定义"}],dataType:[{value:"1",label:"字符串"},{value:"2",label:"数值"},{value:"3",label:"日期时间"}],propertyType:[{value:"1",label:"文本框"},{value:"2",label:"下拉列表"},{value:"3",label:"复选框"},{value:"4",label:"单选框"},{value:"5",label:"日期"},{value:"6",label:"文本域"},{value:"7",label:"自动填充"},{value:"8",label:"隐藏域"},{value:"9",label:"弹出树"},{value:"10",label:"自增序列"},{value:"11",label:"密码"},{value:"12",label:"按钮"},{value:"13",label:"图片上传"},{value:"14",label:"附件上传"}],dialogState:{show:!1,type:"add",name:"新增资源",formData:{}}}},computed:{tableId:function(){return this.$route.query.tableId}},mounted:function(){this.getColumnData()},methods:{rowDblClick:function(t){this.$store.commit("selectAttrData",t),this.dialogState.show=!this.dialogState.show,this.dialogState.type="edit",this.dialogState.name="编辑字段",this.dialogState.formData=t},addResAttr:function(){this.tableData.push({ATTRIBUTE_TYPE:"1",PROPERTY_TYPE:"1",DATA_TYPE:"1"})},handleEdit:function(t){this.dialogState.show=!this.dialogState.show,this.dialogState.type="edit",this.dialogState.name="编辑字段",this.dialogState.formData=t},saveClick:function(){var t=this,e={};this.tableData=this.tableData.map(function(e,a){return e.COLUMN_ID=t.tableId+a+1,e.QUERY_ORDER=a+1,e.UPDATE_ORDER=a+1,e.INSERT_ORDER=a+1,e.EXPORT_ORDER=a+1,e.LIST_ORDER=a+1,e.TABLE_ID=t.tableId,e}),e.form=this.tableData,e.tableId=this.tableId,this.$ajax.post(this.$api.addTableResColumns,e).then(function(e){e&&e.data&&0==e.data.errno?(t.$message.success(),t.getColumnData(),t.dialogState.show=!1):t.$message.error(e.data.errmsg)})},createTable:function(){var t=this;this.$message.confirm("是否确定删掉原有表重新创建表？",function(){t.$ajax.post(t.$api.createTable,{tableId:t.tableId}).then(function(e){e&&e.data&&0==e.data.errno?(t.$message.success(),t.getColumnData()):t.$message.error(e.data.errmsg)})})},loadTable:function(){var t=this;this.$message.confirm("根据数据库信息加载表配置？",function(){t.$ajax.post(t.$api.loadTable,{tableId:t.tableId}).then(function(e){e&&e.data&&0==e.data.errno?(t.$message.success(),t.getColumnData()):t.$message.error(e.data.errmsg)})})},getColumnData:function(){var t=this;this.$ajax.get(this.$api.getResColumnData,{tableId:this.tableId}).then(function(e){e.data.length>0&&(t.tableData=e.data)})}},watch:{$route:function(){}}},E=v,g=(a("a7a0"),Object(d["a"])(E,l,o,!1,null,"853c1048",null));g.options.__file="resConfigList.vue";e["default"]=g.exports},"4f6c":function(t,e,a){"use strict";var l=a("c9c3"),o=a.n(l);o.a},a7a0:function(t,e,a){"use strict";var l=a("df49"),o=a.n(l);o.a},c9c3:function(t,e,a){},df49:function(t,e,a){}}]);