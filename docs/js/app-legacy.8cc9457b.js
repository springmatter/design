(function(t){function e(e){for(var a,i,o=e[0],c=e[1],u=e[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push(["4913","chunk-vendors"]),n()})({"0476":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{class:t.classes,attrs:{hidden:t.collapse}},[t.blank?t._e():["top"===t.type?[n("SmLink",{attrs:{to:"/",title:"Home",black:""}},[n("h4",{staticClass:"m-0"},[t._v(t._s(t.title))])])]:t._e(),"side"===t.type?t._l(t.links,function(t){return n("SmLink",{key:t.route,staticClass:"mb-1 mx-1",attrs:{to:t.route,black:""}},[n("SmIcon",{attrs:{name:t.name}})],1)}):t._e()],t.blank?t._t("default"):t._e()],2)},r=[],s={name:"SmNav",computed:{classes:function(){var t="top"===this.type?"border-bottom":"border-right",e=this.collapse?"invisible":"";return"nav-".concat(this.type," ").concat(t," ").concat(e," p-1")}},props:{blank:{type:Boolean,required:!1,default:!1},type:{type:String,required:!0},collapse:{type:Boolean,required:!1,default:!1},title:{type:String,required:!1,default:""},links:{type:Array,required:!1,default:null,validator:function(t){return!(t.length>0)||"name"in t[0]&&"route"in t[0]}}}},i=s,o=(n("93aa"),n("2877")),c=Object(o["a"])(i,a,r,!1,null,"6df30bbe",null);e["default"]=c.exports},"04c3":function(t,e,n){"use strict";var a=n("fb9d"),r=n.n(a);e["default"]=r.a},"09db":function(t,e,n){"use strict";var a=n("e29c"),r=n.n(a);r.a},"0b65":function(t,e,n){"use strict";var a=n("845f"),r=n.n(a);r.a},"14e9":function(t,e,n){},"16a0":function(t,e,n){},"17b4":function(t,e,n){"use strict";var a=n("67cb"),r=n("e114"),s=n("2877"),i=Object(s["a"])(r["default"],a["a"],a["b"],!1,null,"36b561e0",null);e["default"]=i.exports},"18d6":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SmTextLayout",[n("div",{staticClass:"flex-center flex-col h100"},[n("div",{staticClass:"flex-center"},[n("a",{attrs:{href:"https://www.youtube.com/watch?v=GuJQSAiODqI",target:"blank"}},[t._v("\n        I'm a link to somewhere else\n      ")]),n("a",{staticClass:"black",attrs:{href:"https://springmatter.com",target:"blank"}},[t._v("\n        I'm a black link\n      ")])]),n("br"),n("a",{staticClass:"fig",attrs:{href:""}},[n("figure",[n("figcaption",[n("h5",[t._v("no. 38")]),n("h3",[t._v("I'm a Linked Figure")]),n("h4",[t._v("Driving With Pets")])]),t._v("\n        Unrestrained pets can interfere with your driving and distract your\n        attention from driving. In a collision or sudden stop, unrestrained\n        pets or cages can be thrown around inside the vehicle and hurt you or\n        your passengers. Besides, the pets can be hurt under these situations.\n        It is also for their own safety that pets should be properly\n        restrained in your vehicle. Restrain a pet with a special traveling\n        harness which can be se- cured to the rear seat with a seatbelt or use\n        a pet car- rier which can be secured to the rear seat by routing a\n        seatbelt through the carrier’s handle. Never restrain pets or pet\n        carriers in the front passenger’s seat. For further information,\n        consult your veterinarian, local an- imal protection society or pet\n        shop.\n      ")])])])])},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},"1ab6":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SmTextLayout",[n("div",{staticClass:"flex-center h100"},[n("SmIcon",{staticClass:"m3",attrs:{name:"map",size:"small"}}),n("SmIcon",{staticClass:"m3",attrs:{name:"map"}}),n("SmIcon",{staticClass:"m3",attrs:{name:"map",size:"large"}})],1)])},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},"208b":function(t,e){},"24e7":function(t,e){},"2d38":function(t,e,n){"use strict";var a=n("562d"),r=n.n(a);e["default"]=r.a},"2dd0":function(t,e,n){"use strict";var a=n("16a0"),r=n.n(a);r.a},"2e43":function(t,e,n){var a={"./TEMPLATE.vue":"a9cf","./components/SmIcon.vue":"b731","./components/SmLink.vue":"bf53","./components/SmTabs.vue":"48aa","./core/SmApp.vue":"9913","./core/SmGridLayout.vue":"669c","./core/SmNav.vue":"0476","./core/SmTextLayout.vue":"4a85"};function r(t){var e=s(t);return n(e)}function s(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=s,t.exports=r,r.id="2e43"},"2eac":function(t,e,n){"use strict";var a=n("4cc5"),r=n("5673"),s=n("2877"),i=Object(s["a"])(r["default"],a["a"],a["b"],!1,null,"9d147502",null);e["default"]=i.exports},"349a":function(t,e){},3503:function(t,e){},"387c":function(t,e,n){"use strict";var a=n("208b"),r=n.n(a);e["default"]=r.a},"39f7":function(t,e,n){"use strict";var a=n("24e7"),r=n.n(a);e["default"]=r.a},"3ab4":function(t,e){},"3ba9":function(t,e,n){},"3c45":function(t,e,n){"use strict";var a=n("cfff"),r=n("9b5e"),s=n("2877"),i=Object(s["a"])(r["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports},4011:function(t,e){},"404e":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SmTextLayout",[n("div",{staticClass:"loading"})])},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},"41d4":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SmTextLayout",[n("VueMarkdown",[t._v("\n# Usage\n\n### Framework Structure\n\nFundamentally `@springmatter/components` consists of:\n\n1. Sane HTML defaults via [Bootstrap's Reboot](https://getbootstrap.com/docs/4.3/content/reboot/)\n2. App and content level layout components\n3. CSS utility classes via [Bootstrap's Utilities](https://getbootstrap.com/docs/4.3/utilities/)\n4. A Vue component library\n\n### Setup\n\nSpringmatter components is intended to be used with vue-cli 3 or later. \n\nFirst install:\n```\nnpm install @springmatter/components\n```\n\nSecond import the components into your main file and register the components (note this must be done before calling `new Vue()`, and it will also automatically include our CSS files):\n```\nimport components from \"@springmatter/components\";\ncomponents.forEach(comp => { Vue.component(comp.name, comp); });\n\nnew Vue({ ... });\n```\n    ")]),n("p",[t._v("If this is your first time using @springmatter/design we recommend you head to the "),n("router-link",{attrs:{to:"/layout"}},[t._v("layout section")]),t._v(", as this is the basis for all Springmatter apps.")],1)],1)},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},4263:function(t,e){},"48aa":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"SmTabs"},[n("header",{attrs:{id:"tabBar"}},t._l(t.tabs,function(e,a){return n("div",{key:a,staticClass:"tab",class:{activeTab:t.activeTab===a}},[n("button",{staticClass:"ghost",on:{click:function(e){return t.switchTab(a)}}},[n("label",{style:{pointerEvents:"none"}},[t._v(t._s(e.tabName))])]),a>0?n("button",{staticClass:"icon close",on:{click:function(e){return t.closeTab(a)}}},[n("SmIcon",{attrs:{name:"x-circle",size:"small"}})],1):t._e()])}),0),n("main",{attrs:{id:"currentTab"}},[t._t("default")],2)])},r=[],s=(n("5df3"),n("1c4c"),n("ac6a"),{name:"SmTabs",components:{},data:function(){return{tabs:[],activeTab:-1,observer:null}},methods:{closeTab:function(t){this.$emit("close-tab",t),this.switchTab(-1)},switchTab:function(t){this.tabs.forEach(function(t){t.style.display="none"}),-1!==t?this.activeTab=t:this.activeTab>=this.tabs.length?this.activeTab=this.tabs.length-1:this.activeTab<0&&(this.activeTab=0),this.tabs[this.activeTab].style.display="grid"},update:function(){this.tabs=Array.from(document.getElementById("currentTab").childNodes);var t=this.activeTab;this.tabs.forEach(function(e,n){e.tabName=e.getAttribute("data-tab"),e.style.display=n===t?"grid":"none"})}},mounted:function(){this.activeTab=0,this.update(),this.observer=new MutationObserver(this.update),this.observer.observe(document.getElementById("currentTab"),{childList:!0})},beforeDestroy:function(){this.observer.disconnect()}}),i=s,o=(n("66c8"),n("2877")),c=Object(o["a"])(i,a,r,!1,null,null,null);e["default"]=c.exports},4913:function(t,e,n){"use strict";n.r(e);n("7f7f"),n("ac6a");var a,r,s=n("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("SmApp",{attrs:{blank:""}},[a("SmNav",{attrs:{type:"top"}}),a("SmNav",{staticClass:"px-4",attrs:{type:"side",blank:""}},[a("SmLink",{attrs:{to:"/"}},[a("img",{staticClass:"mb-4",attrs:{src:n("b5f0"),height:"28px"}})]),a("h5",{staticClass:" p-1"},[t._v("Core")]),a("ul",t._l(t.corePages,function(e){return a("li",{key:e.name},[a("SmLink",{attrs:{to:"/"+e.name+(t.notes?"/notes":"")}},[t._v("\n          "+t._s(e.name)+"\n        ")])],1)}),0),a("h5",{staticClass:" mt-4 p-1"},[t._v("Components")]),a("ul",t._l(t.componentPages,function(e){return a("li",{key:e.name},[a("SmLink",{attrs:{to:"/"+e.name+(t.notes?"/notes":"")}},[t._v("\n          "+t._s(e.name)+"\n        ")])],1)}),0)],1),a("router-view")],1)},o=[],c={computed:{corePages:function(){return this.$router.options.routes.slice(1,5)},componentPages:function(){return this.$router.options.routes.slice(5)}}},u=c,l=n("2877"),d=Object(l["a"])(u,i,o,!1,null,"6079c9b4",null),f=d.exports,p=n("8c4f"),m=n("3c45"),h=n("eea6"),b=n("2eac"),v=n("cf1e"),y={},g=Object(l["a"])(y,a,r,!1,null,null,null),_=g.exports,w=n("dbfb"),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SmTextLayout",[n("div",{staticClass:"btns"},[n("div",{staticClass:"std"},[n("button",[t._v("Primary")]),n("button",{staticClass:"secondary"},[t._v("Secondary")]),n("button",{attrs:{disabled:""}},[t._v("Disabled")]),n("button",{staticClass:"ghost"},[t._v("Ghost")]),n("button",{staticClass:"ghost",attrs:{disabled:""}},[t._v("Ghost disabled")])]),n("div",{staticClass:"icns"},[n("button",[t._v("Primary "),n("SmIcon",{attrs:{name:"plus"}})],1),n("button",{staticClass:"secondary"},[t._v("Secondary "),n("SmIcon",{attrs:{name:"plus"}})],1),n("button",{staticClass:"secondary",attrs:{disabled:""}},[t._v("Disabled "),n("SmIcon",{attrs:{name:"plus"}})],1),n("button",{staticClass:"ghost"},[t._v("Ghost "),n("SmIcon",{attrs:{name:"plus"}})],1)]),n("button",{staticClass:"icon"},[n("SmIcon",{attrs:{name:"map"}})],1),n("button",{staticClass:"icon",attrs:{disabled:""}},[n("SmIcon",{attrs:{name:"map"}})],1)])])},k=[],x={},T=x,C=(n("5f3f"),Object(l["a"])(T,S,k,!1,null,"40018101",null)),O=C.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SmTextLayout",[n("div",{staticClass:"figs"},[n("figure",[n("figcaption",[n("h5",[t._v("no. 38")]),n("h3",[t._v("Driving With Pets")]),n("h4",[t._v("A figure with a title, subtitle, and sidetitle")])]),t._v("\n      Unrestrained pets can interfere with your driving and distract your\n      attention from driving. In a collision or sudden stop, unrestrained pets\n      or cages can be thrown around inside the vehicle and hurt you or your\n      passengers. Besides, the pets can be hurt under these situations. It is\n      also for their own safety that pets should be properly restrained in\n      your vehicle. Restrain a pet with a special traveling harness which can\n      be se- cured to the rear seat with a seatbelt or use a pet car- rier\n      which can be secured to the rear seat by routing a seatbelt through the\n      carrier’s handle. Never restrain pets or pet carriers in the front\n      passenger’s seat. For further information, consult your veterinarian,\n      local an- imal protection society or pet shop.\n    ")]),n("figure",[t._v("\n      I'm a figure with just text. Before you operate your vehicle, carefully\n      read this manual. To protect yourself and extend the service life of\n      your vehicle, follow the instructions in this manual. Failure to observe\n      these instructions may result in se- rious injury and damage to your\n      vehicle.\n    ")]),n("figure",[n("figcaption",[n("h5",[t._v("no. 42")]),n("h3",[t._v("Seatbelt Safety")]),n("h4",[t._v("A figure with titles and image")])]),n("img",{staticClass:"img",attrs:{src:t.fig1}})]),n("figure",[n("img",{staticClass:"img",attrs:{src:t.fig2}})]),n("a",{attrs:{href:""}},[n("figure",[n("figcaption",[n("h5",[t._v("no. 38")]),n("h3",[t._v("I'm a Linked Figure")]),n("h4",[t._v("A figure with a title, subtitle, and sidetitle")])]),t._v("\n        Unrestrained pets can interfere with your driving and distract your\n        attention from driving. In a collision or sudden stop, unrestrained\n        pets or cages can be thrown around inside the vehicle and hurt you or\n        your passengers. Besides, the pets can be hurt under these situations.\n        It is also for their own safety that pets should be properly\n        restrained in your vehicle. Restrain a pet with a special traveling\n        harness which can be se- cured to the rear seat with a seatbelt or use\n        a pet car- rier which can be secured to the rear seat by routing a\n        seatbelt through the carrier’s handle. Never restrain pets or pet\n        carriers in the front passenger’s seat. For further information,\n        consult your veterinarian, local an- imal protection society or pet\n        shop.\n      ")])])])])},E=[],I=n("5f0f"),L=n.n(I),$=n("ab5c"),M=n.n($),A={data:function(){return{fig1:L.a,fig2:M.a}}},N=A,P=(n("5a04"),Object(l["a"])(N,j,E,!1,null,"1e051ffa",null)),F=P.exports,B=n("4e57"),q=n("79c4"),D=n("eb15"),U=n("53c9"),W=n("7b70"),G=n("17b4"),H=n("bdb2");s["a"].use(p["a"]);var V=new p["a"]({mode:"hash",base:"/",routes:[{path:"/",name:"introduction",component:m["default"]},{path:"/usage",name:"usage",component:h["default"]},{path:"/layout",name:"layout",component:b["default"]},{path:"/typography",name:"typography",component:v["default"]},{path:"/utilities",name:"utilities",component:_},{path:"/links",name:"links",component:w["default"]},{path:"/buttons",name:"buttons",component:O},{path:"/figures",name:"figures",component:F},{path:"/forms",name:"forms",component:B["default"]},{path:"/icons",name:"icons",component:q["default"]},{path:"/list",name:"list",component:D["default"]},{path:"/loading",name:"loading",component:U["default"]},{path:"/marks",name:"marks",component:W["default"]},{path:"/modal",name:"modal",component:G["default"]},{path:"/tabs",name:"tabs",component:H["default"]}]}),z=n("9ce6"),R=n.n(z),J=(n("cadf"),n("8103"),n("bba4"),n("7cbd"));J.keys().forEach(J);var Q=[],K=n("2e43");K.keys().forEach(function(t){var e=K(t);Q.push(e.default)});var X=Q;X.forEach(function(t){s["a"].component(t.name,t)}),s["a"].component("VueMarkdown",R.a),s["a"].config.productionTip=!1,new s["a"]({router:V,render:function(t){return t(f)}}).$mount("#app")},"4a85":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"SmTextLayout py-5 overflow-auto"},[n("main",{staticClass:"mx-auto w-50"},[t._t("default")],2)])},r=[],s={name:"SmTextLayout"},i=s,o=(n("09db"),n("2877")),c=Object(o["a"])(i,a,r,!1,null,"536b5dd8",null);e["default"]=c.exports},"4a94":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SmTextLayout")},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},"4cc5":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SmGrid")},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},"4e57":function(t,e,n){"use strict";var a=n("72ae"),r=n("2d38"),s=n("2877"),i=Object(s["a"])(r["default"],a["a"],a["b"],!1,null,"7fc86712",null);e["default"]=i.exports},"51c4":function(t,e,n){"use strict";var a=n("a515"),r=n.n(a);r.a},"51cc":function(t,e,n){},"53c9":function(t,e,n){"use strict";var a=n("404e"),r=n("ebef"),s=n("2877"),i=Object(s["a"])(r["default"],a["a"],a["b"],!1,null,"5ad6db56",null);e["default"]=i.exports},"562d":function(t,e){},5673:function(t,e,n){"use strict";var a=n("4011"),r=n.n(a);e["default"]=r.a},"5a04":function(t,e,n){"use strict";var a=n("ac3a"),r=n.n(a);r.a},"5de2":function(t,e,n){},"5f0f":function(t,e,n){t.exports=n.p+"img/fig1.3248412e.png"},"5f3f":function(t,e,n){"use strict";var a=n("c103"),r=n.n(a);r.a},"669c":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"SmGridLayout"},[t.SmHeader?n("header",{staticClass:"SmHeader border-bottom p-2"},[t._t("header")],2):t._e(),t.SmMain?n("main",{staticClass:"SmMain p-2"},[t._t("main")],2):t._e(),t.SmFooter?n("footer",{staticClass:"SmFooter border-top p-2"},[t._t("footer")],2):t._e(),t.SmAside?n("aside",{staticClass:"SmAside border-left p-2"},[t._t("aside")],2):t._e()])},r=[],s=(n("28a5"),n("ac4d"),n("8a81"),n("ac6a"),{name:"SmGridLayout",data:function(){return{SmHeader:!0,SmMain:!0,SmFooter:!0,SmAside:!0}},methods:{update:function(){console.log("updating");var t=!0,e=!1,n=void 0;try{for(var a,r=this.$el.childNodes[Symbol.iterator]();!(t=(a=r.next()).done);t=!0){var s=a.value;s.hasChildNodes()||(this[s.className.split(" ")[0]]=!1)}}catch(i){e=!0,n=i}finally{try{t||null==r.return||r.return()}finally{if(e)throw n}}}},beforeUpdate:function(){this.update()},mounted:function(){this.update()}}),i=s,o=(n("51c4"),n("2877")),c=Object(o["a"])(i,a,r,!1,null,"3e7adac0",null);e["default"]=c.exports},"66c8":function(t,e,n){"use strict";var a=n("fd9f"),r=n.n(a);r.a},"67cb":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SmTextLayout",[n("button",{on:{click:t.toggleModal}},[t._v("Open Modal")]),n("div",{style:{display:"none"},attrs:{id:"modal-overlay"}},[n("figure",[n("figcaption",[n("h3",[t._v("I'm a modal")])]),t._v("\n      If you make a "),n("code",[t._v("div#modal-overlay")]),t._v(" and put a\n      "),n("code",[t._v("figure")]),t._v(" inside of it, you get a modal! Nicely centered and\n      positioned at the top of the layer stack. The figure is just a normal\n      figure, so you can put whatever you want in it: titles with a figcaption\n      tag, images, forms, buttons, or just text. Be sure to give your users a\n      way to close the modal. Usually a button with\n      "),n("code",[t._v('@click="closeModal"')]),t._v(" works nicely.\n      "),n("br"),n("br"),n("button",{staticClass:"secondary",on:{click:t.toggleModal}},[t._v("Got it.")])])])])},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},6819:function(t,e,n){},"708c":function(t,e,n){"use strict";var a=n("b50b"),r=n.n(a);e["default"]=r.a},"72ae":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SmTextLayout",[t._v("\n  Forms are still a work in progress, but should work mostly like standard HTML5 forms for now.\n")])},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},"760d":function(t,e){},"79c4":function(t,e,n){"use strict";var a=n("1ab6"),r=n("04c3"),s=n("2877"),i=Object(s["a"])(r["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports},"7b70":function(t,e,n){"use strict";var a=n("f2df"),r=n("39f7"),s=n("2877"),i=Object(s["a"])(r["default"],a["a"],a["b"],!1,null,"7cd49f26",null);e["default"]=i.exports},"7cbd":function(t,e,n){var a={"./components/a.css":"6819","./components/button.css":"8ca8","./components/figure.css":"b342","./components/forms.css":"e0d2","./components/list.css":"51cc","./components/loading.css":"d56b","./components/mark.css":"5de2","./components/modal.css":"a57d","./components/table.css":"f857"};function r(t){var e=s(t);return n(e)}function s(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=s,t.exports=r,r.id="7cbd"},"845f":function(t,e,n){},"854a":function(t,e,n){},8940:function(t,e,n){"use strict";var a=n("760d"),r=n.n(a);e["default"]=r.a},"8ca8":function(t,e,n){},"8fbe":function(t,e,n){"use strict";var a=n("3ab4"),r=n.n(a);e["default"]=r.a},"93aa":function(t,e,n){"use strict";var a=n("14e9"),r=n.n(a);r.a},9913:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"SmApp"}},[t.blank?t._e():[n("SmNav",{attrs:{type:"top",title:t.title}}),n("SmNav",{attrs:{type:"side",links:t.links,collapse:t.collapseSide}}),n("router-view")],t.blank?t._t("default"):t._e()],2)},r=[],s={name:"SmApp",props:{blank:{type:Boolean,required:!1,default:!1},collapseSide:{type:Boolean,required:!1,default:!1},title:{type:String,required:!1,default:""},links:{type:Array,required:!1,default:function(){return[]},validator:function(t){return!(t.length>0)||"name"in t[0]&&"route"in t[0]}}}},i=s,o=(n("2dd0"),n("2877")),c=Object(o["a"])(i,a,r,!1,null,"df3a8f2c",null);e["default"]=c.exports},"9b5e":function(t,e,n){"use strict";var a=n("b2bc"),r=n.n(a);e["default"]=r.a},"9da9":function(t,e,n){"use strict";var a=n("3ba9"),r=n.n(a);r.a},a515:function(t,e,n){},a57d:function(t,e,n){},a9cf:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},r=[],s={name:"NEWCOMP"},i=s,o=n("2877"),c=Object(o["a"])(i,a,r,!1,null,"a08168b6",null);e["default"]=c.exports},ab5c:function(t,e,n){t.exports=n.p+"img/fig2.b42a2dab.png"},ac3a:function(t,e,n){},b2bc:function(t,e){},b342:function(t,e,n){},b346:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SmTextLayout",[n("div",{staticClass:"lsts"},[n("ul",[n("li",[t._v("I'm a standard list")]),n("li",[t._v("Made with a ul tag")]),n("li",[t._v("I can be used")]),n("li",[t._v("For many things!")])]),n("figure",[n("figcaption",[n("h3",[t._v("Lists work well inside figures")])]),n("dl",[n("dt",[t._v("I'm a")]),n("dd",[t._v("Definition list")]),n("dt",[t._v("Made with dt tag")]),n("dd",[t._v("and with dd tag")]),n("dt",[t._v("Wrapped in")]),n("dd",[t._v("dl tag")]),n("dt",[t._v("Useful for")]),n("dd",[t._v("Things like this")]),n("dt",[t._v("Time")]),n("dd",[t._v("12:01am")]),n("dt",[t._v("Date")]),n("dd",[t._v("August 22, 1994")]),n("dt",[t._v("Sex")]),n("dd",[t._v("Male")]),n("dt",[t._v("Weight")]),n("dd",[t._v("7.2 lbs")])])]),n("ol",[n("li",[t._v("I'm an ordered list")]),n("li",[t._v("Made with an ol tag")]),n("li",[t._v("I can be used")]),n("li",[t._v("To keep your items")]),n("li",[t._v("In line!")])])])])},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},b50b:function(t,e){},b5f0:function(t,e,n){t.exports=n.p+"img/logo.53c78c9b.png"},b731:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"SmIcon",class:t.size,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},domProps:{innerHTML:t._s(t.iconCode)}})},r=[],s=(n("7f7f"),n("6b54"),n("77c6")),i=n.n(s),o={name:"SmIcon",props:{name:{type:String,required:!0},size:{type:String,default:"medium",required:!1,validator:function(t){return-1!==["small","medium","large"].indexOf(t)}}},computed:{iconCode:function(){return i.a.icons[this.name].toString()}}},c=o,u=(n("0b65"),n("2877")),l=Object(u["a"])(c,a,r,!1,null,"79c022f0",null);e["default"]=l.exports},bdb2:function(t,e,n){"use strict";var a=n("4a94"),r=n("bf88"),s=n("2877"),i=Object(s["a"])(r["default"],a["a"],a["b"],!1,null,"0c364971",null);e["default"]=i.exports},bf53:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"m-0 p-1",class:{"text-dark":t.black,"text-primary":!t.black},attrs:{to:t.to}},[t._t("default")],2)},r=[],s={name:"SmLink",props:{to:{type:String,required:!0},black:{type:Boolean,required:!1,default:!1}}},i=s,o=n("2877"),c=Object(o["a"])(i,a,r,!1,null,"f3c5a28a",null);e["default"]=c.exports},bf88:function(t,e,n){"use strict";var a=n("3503"),r=n.n(a);e["default"]=r.a},c103:function(t,e,n){},cf1e:function(t,e,n){"use strict";var a=n("db24"),r=n("8fbe"),s=n("2877"),i=Object(s["a"])(r["default"],a["a"],a["b"],!1,null,"7e1dd102",null);e["default"]=i.exports},cfff:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SmTextLayout",[n("VueMarkdown",[t._v("\n# Introduction\n\nHello and welcome to The Springmatter Design System documentation. The Springmatter Design System is a set of tools that enables us to rapidly create consistent and clear user experiences.\n\n  It is extremely opinionated beacuse its intended use is to help us rapidly develop applications that are very specific to our needs.\n\n### Principles\n\n##### Agressively simple tooling and developer experience\n  This is the primary reason the system is so opinionated. We aim for there to be very few decisions in the layout and development of our web applications. This leads to higher development speed while maintaining consistently well designed experiences and aesthetics. We rely on stnadard Vue.js practices, and existing web technologies wherever possible. We are very reluctant to add dependencies to our applications, and when we do we try to ensure that they are large, stable, and well supported open source projects.\n\n##### Accessible from the start (Work in progress)\n  One never knows when a client is going to have special needs, so we aim to have level AA conformance to the Web Content Accessibility Guidelines built in to the system, and we encourage users of the system aim for this level of conformance in their local code.\n\n##### Performance\n  We aim to maximize performance to the best of our ability. This is mostly achieved automatically by keeping our dependencies light, but also requires continued effort to reduce image sizes, load data properly, and include only necessary information on each page.\n\n##### Privacy\n  We do not use external tools that track our users' behavior and send it off to third parties.\n    ")])],1)},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},d56b:function(t,e,n){},db24:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},dbfb:function(t,e,n){"use strict";var a=n("18d6"),r=n("8940"),s=(n("ea08"),n("2877")),i=Object(s["a"])(r["default"],a["a"],a["b"],!1,null,"cc5bfd5a",null);e["default"]=i.exports},e0d2:function(t,e,n){},e114:function(t,e,n){"use strict";var a=n("4263"),r=n.n(a);e["default"]=r.a},e29c:function(t,e,n){},ea08:function(t,e,n){"use strict";var a=n("854a"),r=n.n(a);r.a},eb15:function(t,e,n){"use strict";var a=n("b346"),r=n("387c"),s=(n("9da9"),n("2877")),i=Object(s["a"])(r["default"],a["a"],a["b"],!1,null,"4d2e576b",null);e["default"]=i.exports},ebef:function(t,e,n){"use strict";var a=n("349a"),r=n.n(a);e["default"]=r.a},eea6:function(t,e,n){"use strict";var a=n("41d4"),r=n("708c"),s=n("2877"),i=Object(s["a"])(r["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports},f2df:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SmTextLayout",[n("ul",{staticClass:"flex-center flex-col m9"},[n("li",[n("mark",{style:{color:"var(--blue)"}},[t._v("Marks")])]),n("li",[n("mark",{style:{color:"var(--green)"}},[t._v("Are")])]),n("li",[n("mark",{style:{color:"var(--red)"}},[t._v("Colorful")])]),n("li",[n("mark",{style:{color:"var(--black)"}},[t._v("And")])]),n("li",[n("mark",{style:{color:"var(--yellow)"}},[t._v("Fun!")])]),n("li",[n("mark",{style:{color:"var(--purple)"}},[t._v("\n        They can be as long as your little heart desires.\n      ")])])])])},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},f857:function(t,e,n){},fb9d:function(t,e){},fd9f:function(t,e,n){}});
//# sourceMappingURL=app-legacy.8cc9457b.js.map