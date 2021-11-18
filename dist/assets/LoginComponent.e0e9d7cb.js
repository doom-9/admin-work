import{d as e,bu as a,bv as s,bw as o,bx as l,by as i,k as r,u as t,q as n,A as c,b as d,t as u,v as p,r as v,o as f,c as m,a as g,C as h,i as y,I as w}from"./vendor.f7361d5e.js";import{a as b,u as _,p as k,l as x,D as L,b as I}from"./index.5657c90f.js";import{u as j}from"./useAppInfo.0dc81f23.js";var z=e({name:"Login",components:{PhoneIcon:a,PasswordIcon:s,LogoGithub:o,LogoAlipay:l,LogoWechat:i},setup(){const{version:e}=j(),a=r("admin"),s=r("123456"),o=r(!0),l=r(!1),i=t(),u=n(),p=b(),v=c(),f=_();return{isMobileScreen:d((()=>f.state.device===L.MOBILE)),username:a,password:s,autoLogin:o,loading:l,onLogin:()=>{l.value=!0,k({url:x,data:{username:a.value,password:s.value}}).then((({data:e})=>{p.dispatch("user/saveUser",e).then((()=>{i.replace({path:u.query.redirect?u.query.redirect:"/"}).then((()=>{l.value=!1}))}))})).catch((e=>{l.value=!1,v.error(e.message)}))},ImageBg1:"/admin-work/assets/img_login_bg.88e461d1.png",version:e}}});const U=y();u("data-v-630ad13a");const A={key:0,class:"flex login-container"},q={class:"left"},C={class:"content-wrapper"},P=g("div",{class:"logo-wrapper"},[g("img",{src:I})],-1),W=g("div",{class:"title"},"Admin Work",-1),M=g("div",{class:"sub-title"},"Vue3 + Vite2 + Typescript + Naive UI",-1),B=g("div",{class:"flex-1 flex justify-center items-center ttppii"}," 生活，应该还有诗和远方 ",-1),G={class:"bottom-wrapper"},S={class:"right"},V={class:"form-wrapper"},D=g("div",{class:"form-title"},"账号登录",-1),E={class:"item-wrapper"},N={class:"mt-4 item-wrapper"},O={class:"mt-4"},T=w(" 登录 "),F={class:"mt-4 my-width flex-sub"},H={class:"flex justify-between"},J=w("自动登录"),K=g("a",{underline:!1,type:"primary"},"忘记密码？",-1),Q={class:"third-login"},R=w("第三方登录"),X={key:1,class:"m-login-container"},Y=g("div",{class:"header"},[g("div",{class:"the-p"}," P "),g("div",{class:"mt-4 text-lg font-bold text-white"}," Admin Work ")],-1),Z={class:"content"},$=w(" 登录 "),ee={class:"flex justify-between mt-4"},ae=w("自动登录"),se=g("a",{class:"text-white",type:"primary"},"忘记密码？",-1),oe={class:"footer"},le=w("第三方登录"),ie={class:"flex justify-evenly"};p();const re=U(((e,a,s,o,l,i)=>{const r=v("n-input"),t=v("n-button"),n=v("n-checkbox"),c=v("n-divider"),d=v("LogoAlipay"),u=v("n-icon"),p=v("LogoGithub"),y=v("LogoWechat"),w=v("n-space"),b=v("PhoneIcon"),_=v("PasswordIcon"),k=v("n-el");return f(),m(k,null,{default:U((()=>[e.isMobileScreen?(f(),m("div",X,[Y,g("div",Z,[g(r,{round:"",placeholder:"请输入用户名/手机号",size:"large",value:e.username,"onUpdate:value":a[4]||(a[4]=a=>e.username=a)},{prefix:U((()=>[g(u,null,{default:U((()=>[g(b)])),_:1})])),_:1},8,["value"]),g(r,{class:"mt-10",round:"",placeholder:"请输入密码",size:"large",value:e.password,"onUpdate:value":a[5]||(a[5]=a=>e.password=a),type:"password","show-password-toggle":"",maxlength:8},{prefix:U((()=>[g(u,null,{default:U((()=>[g(_)])),_:1})])),_:1},8,["value"]),g(t,{class:"mt-20",round:"",type:"primary",block:"",loading:e.loading,onClick:e.onLogin},{default:U((()=>[$])),_:1},8,["loading","onClick"]),g("div",ee,[g(n,{checked:e.autoLogin,"onUpdate:checked":a[6]||(a[6]=a=>e.autoLogin=a),color:"#fff"},{default:U((()=>[ae])),_:1},8,["checked"]),se])]),g("div",oe,[g(c,null,{default:U((()=>[le])),_:1}),g("div",ie,[g(u,{color:"#c3c3c3",size:"30"},{default:U((()=>[g(d)])),_:1}),g(u,{color:"#c3c3c3",size:"30"},{default:U((()=>[g(p)])),_:1}),g(u,{color:"#c3c3c3",size:"30"},{default:U((()=>[g(y)])),_:1})])])])):(f(),m("div",A,[g("div",q,[g("img",{src:e.ImageBg1},null,8,["src"]),g("div",C,[P,W,M,B,g("div",G,"Admin Work "+h(e.version)+" · Made by qingqingxuan",1)])]),g("div",S,[g("div",V,[D,g("div",E,[g(r,{value:e.username,"onUpdate:value":a[1]||(a[1]=a=>e.username=a),placeholder:"请输入用户名/手机号","prefix-icon":"el-icon-user",clearable:""},null,8,["value"])]),g("div",N,[g(r,{value:e.password,"onUpdate:value":a[2]||(a[2]=a=>e.password=a),placeholder:"请输入密码",type:"password",clearable:"","prefix-icon":"el-icon-lock"},null,8,["value"])]),g("div",O,[g(t,{type:"primary",class:"login",loading:e.loading,onClick:e.onLogin},{default:U((()=>[T])),_:1},8,["loading","onClick"])]),g("div",F,[g("div",H,[g(n,{checked:e.autoLogin,"onUpdate:checked":a[3]||(a[3]=a=>e.autoLogin=a)},{default:U((()=>[J])),_:1},8,["checked"]),K])])]),g("div",Q,[g(c,{dashed:""},{default:U((()=>[R])),_:1}),g(w,{justify:"center"},{default:U((()=>[g(u,{color:"var(--primary-color)",size:"20"},{default:U((()=>[g(d)])),_:1}),g(u,{color:"var(--primary-color)",size:"20"},{default:U((()=>[g(p)])),_:1}),g(u,{color:"var(--primary-color)",size:"20"},{default:U((()=>[g(y)])),_:1})])),_:1})])])]))])),_:1})}));z.render=re,z.__scopeId="data-v-630ad13a";export default z;