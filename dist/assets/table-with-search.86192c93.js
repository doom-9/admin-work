var k=Object.defineProperty,S=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var m=(e,a,u)=>a in e?k(e,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[a]=u,y=(e,a)=>{for(var u in a||(a={}))f.call(a,u)&&m(e,u,a[u]);if(b)for(var u of b(a))T.call(a,u)&&m(e,u,a[u]);return e},F=(e,a)=>S(e,B(a));import{p as D,f as E}from"./index.2a82e1c8.js";import{g as C}from"./form.7eb61022.js";import{u as N,a as w,b as I,c as z}from"./table.048db773.js";import{d as A,k as n,y as P,l,an as R,e as U,aE as V,a_ as L,aY as j,aZ as $,aP as K,aU as W,aT as x,s as H,t as M,r as o,o as G,c as J,a as s,i as O}from"./vendor.e0f74c14.js";const Y=[{key:"name",label:"\u7528\u6237\u59D3\u540D",value:n(null),render:e=>l(V,{value:e.value.value,onUpdateValue:a=>{e.value.value=a},placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D"})},{key:"sex",label:"\u7528\u6237\u59D3\u522B",value:n(null),optionItems:[{label:"\u7537",value:0},{label:"\u5973",value:1}],render:e=>l(L,{options:e.optionItems,value:e.value.value,placeholder:"\u8BF7\u9009\u62E9\u7528\u6237\u59D3\u522B",onUpdateValue:a=>{e.value.value=a}})},{key:"date",label:"\u65E5\u671F",value:n(null),render:e=>l(j,{value:e.value.value,placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",style:"width: 100%",onUpdateValue:a=>{e.value.value=a},type:"date"})},{key:"time",label:"\u65F6\u95F4",value:n(null),render:e=>l($,{options:e.optionItems,value:e.value.value,placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",style:"width: 100%",onUpdateValue:a=>{e.value.value=a}})},{key:"checkbox",label:"\u590D\u9009",value:n(null),optionItems:[{label:"\u9009\u98791",value:0},{label:"\u9009\u98792",value:1}],render:e=>l(x,{options:e.optionItems,value:e.value.value,placeholder:"\u8BF7\u9009\u62E9\u7528\u6237\u59D3\u522B",onUpdateValue:a=>{e.value.value=a}},{default:()=>l(K,{itemStyle:"display: flex;"},{default:()=>{var a;return(a=e.optionItems)==null?void 0:a.map(u=>l(W,{key:u.value,label:u.label,value:u.value}))}})})}];var g=A({name:"TableWithSearch",setup(){const e=n(null),a=N(r),u=w(),p=P(),v=I("id"),h=z([u.selectionColumn,u.indexColumn,{title:"\u540D\u79F0",key:"nickName"},{title:"\u6027\u522B",key:"gender",width:80,render:t=>l("div",t.gender===0?"\u7537":"\u5973")},{title:"\u5934\u50CF",key:"avatar",render:t=>l(R,{circle:!0,size:"small",src:t.avatar||""})},{title:"\u5730\u5740",key:"address"},{title:"\u540D\u79F0",key:"nickName"},{title:"\u4E0A\u6B21\u767B\u5F55\u65F6\u95F4",key:"lastLoginTime"},{title:"\u4E0A\u6B21\u767B\u5F55IP",key:"lastLoginIp"},{title:"\u72B6\u6001",key:"status",render:t=>C(t.status?"\u6B63\u5E38":"\u7981\u7528",{type:t.status?"success":"error",size:"small"})}],{align:"center"});function r(){D({url:E,data:()=>({page:a.page,pageSize:a.pageSize})}).then(t=>{u.handleSuccess(t),a.setTotalSize(t.totalSize||10)}).catch(console.log)}function i(){var t;p.success("\u6A21\u62DF\u67E5\u8BE2\u6210\u529F\uFF0C\u53C2\u6570\u4E3A\uFF1A"+JSON.stringify((t=e.value)==null?void 0:t.generatorParams()))}function c(){var t;(t=e.value)==null||t.reset()}return U(r),F(y({},u),{rowKey:v,pagination:a,searchForm:e,tableColumns:h,conditionItems:Y,onSearch:i,onResetSearch:c})}});const d=O();H("data-v-04aa86af");const Z={class:"main-container"};M();const q=d((e,a,u,p,v,h)=>{const r=o("DataForm"),i=o("TableHeader"),c=o("n-data-table"),t=o("TableBody"),_=o("TableFooter");return G(),J("div",Z,[s(i,{"show-filter":!0,title:"\u67E5\u8BE2\u6761\u4EF6",onSearch:e.onSearch,onResetSearch:e.onResetSearch},{"search-content":d(()=>[s(r,{ref:"searchForm","form-config":{labelWidth:60},options:e.conditionItems,preset:"grid-item"},null,8,["options"])]),_:1},8,["onSearch","onResetSearch"]),s(t,{ref:"tableBody"},{default:d(()=>[s(c,{loading:e.tableLoading,data:e.dataList,columns:e.tableColumns,"row-key":e.rowKey},null,8,["loading","data","columns","row-key"])]),_:1},512),s(_,{pagination:e.pagination},null,8,["pagination"])])});g.render=q;g.__scopeId="data-v-04aa86af";export{g as default};