var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(a,t,n)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n;import{p as l,g as i,s as d}from"./index.1449a5c2.js";import{u as c,c as p,b as u,a as b}from"./table.91fc8bca.js";import{d as g,B as f,A as m,s as y,n as v,ak as k,az as w,g as h,t as T,v as j,r as O,o as C,c as P,a as S,k as U}from"./vendor.d8fe5d61.js";var B=g({name:"TableCustom",setup(){const e=c(),g=p(P),T=f(),j=m(),O=u("id"),C=y(b([e.selectionColumn,e.indexColumn,{title:"名称",key:"nickName"},{title:"性别",key:"gender",width:80,render:e=>v("div",0===e.gender?"男":"女")},{title:"头像",key:"avatar",render:e=>v(k,{circle:!0,size:"small",src:e.avatar||""})},{title:"地址",key:"address"},{title:"名称",key:"nickName"},{title:"上次登录时间",key:"lastLoginTime"},{title:"上次登录IP",key:"lastLoginIp"},{title:"状态",key:"status",render:e=>v(w,{value:!!e.status})}],{align:"center"}));function P(){l({url:i,data:()=>({page:g.page,pageSize:g.pageSize})}).then((a=>{e.handleSuccess(a),g.setTotalSize(a.totalSize)})).catch(console.log)}return h(P),S=((e,a)=>{for(var t in a||(a={}))o.call(a,t)&&r(e,t,a[t]);if(n)for(var t of n(a))s.call(a,t)&&r(e,t,a[t]);return e})({},e),a(S,t({rowKey:O,tableColumns:C,pagination:g,onUpdateTable:function(e){d(C,e)},onDeleteItem:function(a){a?T.warning({content:"是否要删除此数据，删除后不恢复？",positiveText:"删除",onPositiveClick:()=>{j.success("模拟删除成功，参数为："+a.id)}}):0!==e.selectRows.length?T.warning({content:"是否要删除此数据，删除后不恢复？",positiveText:"删除",onPositiveClick:()=>{j.success("模拟删除成功，参数为："+JSON.stringify({ids:e.selectRows.map((e=>e.id)).join(",")}))}}):j.error("请选择要删除的数据项")},doRefresh:P,onUpdateBorder:function(a){e.bordered.value=a}}));var S}});const z=U();T("data-v-50286f72");const R={class:"main-container"};j();const x=z(((e,a,t,n,o,s)=>{const r=O("TableConfig"),l=O("SortableTable"),i=O("DeleteButton"),d=O("TableHeader"),c=O("n-data-table"),p=O("TableBody"),u=O("TableFooter");return C(),P("div",R,[S(d,{"show-filter":!0},{"table-config":z((()=>[S(r,{onUpdateBorder:e.onUpdateBorder,onRefresh:e.doRefresh},null,8,["onUpdateBorder","onRefresh"]),S(l,{class:"ml-4",columns:e.tableColumns,onUpdate:e.onUpdateTable},null,8,["columns","onUpdate"])])),"top-right":z((()=>[S(i)])),_:1}),S(p,null,{default:z((()=>[S(c,{loading:e.tableLoading,"single-line":!e.bordered,data:e.dataList,columns:e.tableColumns,"row-key":e.rowKey},null,8,["loading","single-line","data","columns","row-key"])])),_:1}),S(u,{pagination:e.pagination},null,8,["pagination"])])}));B.render=x,B.__scopeId="data-v-50286f72";export default B;