(function(t){function e(e){for(var r,i,c=e[0],s=e[1],u=e[2],l=0,f=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);p&&p(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"affa235c"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(t);var u=new Error;o=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}a[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var p=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),n("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),n("v-spacer"),n("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[n("span",{staticClass:"mr-2"},[t._v("Latest Release")]),n("v-icon",[t._v("mdi-open-in-new")])],1)],1),n("v-main",[n("router-view")],1)],1)},o=[],i={name:"App",data:function(){return{}}},c=i,s=n("2877"),u=n("6544"),l=n.n(u),p=n("7496"),f=n("40dc"),d=n("8336"),v=n("132d"),m=n("adda"),h=n("f6c4"),g=n("2fa4"),b=Object(s["a"])(c,a,o,!1,null,null,null),y=b.exports;l()(b,{VApp:p["a"],VAppBar:f["a"],VBtn:d["a"],VIcon:v["a"],VImg:m["a"],VMain:h["a"],VSpacer:g["a"]});n("d3b7"),n("3ca3"),n("ddb0");var w=n("8c4f"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("hello-world")},_=[],O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("v-img",{staticClass:"my-3",attrs:{src:n("ffbc"),contain:"",height:"200"}})],1),r("v-col",{staticClass:"mb-4"},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to KMS APP ")]),r("p",{staticClass:"subheading font-weight-regular"},[t._v(" "+t._s(t.coin)+" "),r("br"),t._v("please join our online ")])])],1)],1)},x=[],C={name:"HelloWorld",data:function(){return{coin:[]}},methods:{getcoin:function(){var t=this;this.coin=setInterval((function(){console.log(t.coin);var e="http://localhost:8080/data";t.$http.get(e).then((function(e){var n=e.data;console.log("getdata : "+n),t.coin=n}))}),3e4)}},mounted:function(){this.getcoin()}},V=C,k=n("62ad"),P=n("a523"),S=n("0fd9"),A=Object(s["a"])(V,O,x,!1,null,null,null),E=A.exports;l()(A,{VCol:k["a"],VContainer:P["a"],VImg:m["a"],VRow:S["a"]});var M={name:"Home",components:{HelloWorld:E}},$=M,T=Object(s["a"])($,j,_,!1,null,null,null),H=T.exports;r["a"].use(w["a"]);var I=[{path:"/",name:"Home",component:H},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],L=new w["a"]({routes:I}),W=L,B=n("f309");r["a"].use(B["a"]);var J=new B["a"]({}),R=n("bc3a"),q=n.n(R);r["a"].config.productionTip=!1,r["a"].prototype.$http=q.a,new r["a"]({router:W,vuetify:J,render:function(t){return t(y)}}).$mount("#app")},ffbc:function(t,e,n){t.exports=n.p+"img/my.3b7cfc6b.jpeg"}});
//# sourceMappingURL=app.7eaa49d2.js.map