(function(t){function e(e){for(var a,r,i=e[0],c=e[1],l=e[2],d=0,m=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&m.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push(["4913","chunk-vendors"]),n()})({"05bc":function(t,e,n){},"08fb":function(t,e,n){"use strict";var a=n("21cd"),s=n("2256"),o=n("2877"),r=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,"0271fe1a",null);e["default"]=r.exports},"0a60":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"SmIcon",class:t.size,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},domProps:{innerHTML:t._s(t.iconCode)}})},s=[],o=(n("7f7f"),n("6b54"),n("77c6")),r=n.n(o),i={name:"SmIcon",slotted:!1,props:{name:{type:String,required:!0,description:"Determines the icon to be used. Must correspond to the name of an icon from the feather icons set (See full list of available icons below)."},size:{type:String,default:"m",required:!1,validator:function(t){return-1!==["s","m","l"].indexOf(t)},description:"Determines the size of the icon."}},computed:{iconCode:function(){return r.a.icons[this.name].toString()}}},c=i,l=(n("771e"),n("2877")),u=Object(l["a"])(c,a,s,!1,null,"5917daac",null);e["default"]=u.exports},"138b":function(t,e){},"1e4e":function(t,e,n){"use strict";var a=n("979b"),s=n.n(a);s.a},2154:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"SmTextLayout"},[n("main",{staticClass:"content"},[t._t("default")],2)])},s=[],o={name:"SmTextLayout",slotted:!0},r=o,i=(n("7fd0"),n("2877")),c=Object(i["a"])(r,a,s,!1,null,"f7c1f2cc",null);e["default"]=c.exports},"21cd":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SmTextLayout",[n("ComponentSpec",{attrs:{compName:"SmTag"}}),n("ul",{staticClass:"list"},[n("li",[n("SmTag",{attrs:{color:"#00cec9"}},[t._v("These are all tags")])],1),n("li",[n("SmTag",{attrs:{color:"#ff7675"}},[t._v("They can be any color you want")])],1),n("li",[n("SmTag",{attrs:{color:"#6c5ce7"}},[t._v("They can be as long or...")])],1),n("li",[n("SmTag",{attrs:{color:"#900"}},[t._v("Short")])],1),n("li",[n("SmTag",{attrs:{color:"18F"}},[t._v("As you want too")])],1)])],1)},s=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return s})},2256:function(t,e,n){"use strict";var a=n("138b"),s=n.n(a);e["default"]=s.a},"2c27":function(t,e,n){},"2f92":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{class:"nav-"+t.kind},[["top"===t.kind?[""!==t.title?n("router-link",{staticClass:"text-black",attrs:{to:"/",title:"Home"}},[n("h5",[t._v(t._s(t.title))])]):t._e()]:t._e(),"side"===t.kind?t._l(t.links,function(t,e){return n("router-link",{key:e,staticClass:"mb-3 text-black",attrs:{to:t.route,black:""}},[n("SmIcon",{attrs:{name:t.name}})],1)}):t._e(),t._t("default")]],2)},s=[],o={name:"SmNav",slotted:!0,props:{kind:{type:String,required:!0,validator:function(t){return-1!==["top","side"].indexOf(t)},description:"This determines whether the nav is styled as a top or a side nav."},title:{type:String,required:!1,description:"This is the title of your app that will appear in the top left on the nav bar."},links:{type:Array,required:!1,validator:function(t){return!(t.length>0)||"name"in t[0]&&"route"in t[0]},description:"These are the links that will appear in the side nav bar. It needs to be an array of objects with keys 'name' (the name of the icon that will represent your link) and 'route' (the route you'd like to go to in the form '/route-here'). Example: [ { name: 'map', route: '/maps' }, { name: 'archive', route: '/library' }, ... ]"}}},r=o,i=(n("5781"),n("2877")),c=Object(i["a"])(r,a,s,!1,null,"9369d4a0",null);e["default"]=c.exports},"2fbc":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"SmCard",class:{linked:t.linked,modal:t.modal}},[t.modal?n("SmButton",{staticClass:"close-btn",attrs:{icon:"x"},on:{click:function(e){return t.$emit("close")}}}):t._e(),t._t("default")],2)},s=[],o={name:"SmCard",slotted:!0,data:function(){return{linked:!1}},props:{modal:{type:Boolean,required:!1,default:!1,description:"Styles the card for use as a modal window that appears centered on top of existing content. Adds a close button that emits a 'close' event. User is responsible for hiding and showing the modal."}},methods:{update:function(){this.linked="A"===this.$el.parentNode.tagName}},beforeUpdate:function(){this.update()},mounted:function(){this.update()}},r=o,i=(n("1e4e"),n("2877")),c=Object(i["a"])(r,a,s,!1,null,"5b153212",null);e["default"]=c.exports},"34e5":function(t,e,n){},"384a":function(t,e,n){},"3a62":function(t,e,n){},"3fb9":function(t,e,n){"use strict";var a=n("384a"),s=n.n(a);s.a},"44f2":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"SmLoading"},[n("div",{staticClass:"SmLoadingDot"}),n("div",{staticClass:"SmLoadingDot"}),n("div",{staticClass:"SmLoadingDot"})])}],o={name:"SmLoading",slotted:!1},r=o,i=(n("d1c1"),n("2877")),c=Object(i["a"])(r,a,s,!1,null,"4a828af2",null);e["default"]=c.exports},"48e5":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SmTextLayout",[n("ComponentSpec",{attrs:{compName:"SmLoading"}}),n("SmLoading")],1)},s=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return s})},4913:function(t,e,n){"use strict";n.r(e);n("7f7f"),n("ac6a");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("SmApp",{attrs:{blank:""}},[a("SmNav",{staticClass:"p-2",attrs:{kind:"top"}}),a("SmNav",{staticClass:"px-3",attrs:{kind:"side"}},[a("router-link",{staticClass:"p-2",attrs:{to:"/"}},[a("img",{staticClass:"w-9",attrs:{src:n("b5f0")}})]),a("h6",{staticClass:"m-2 mt-5"},[t._v("Introduction")]),a("ul",t._l(t.introPages,function(e){return a("li",{key:e.name,staticClass:"my-1"},[a("router-link",{staticClass:"p-2",attrs:{to:e.path}},[t._v("\n          "+t._s(e.name)+"\n        ")])],1)}),0),a("h6",{staticClass:"m-2 mt-5"},[t._v("Layout")]),a("ul",t._l(t.layoutPages,function(e){return a("li",{key:e.name,staticClass:"my-1"},[a("router-link",{staticClass:"p-2",attrs:{to:e.path}},[t._v("\n          "+t._s(e.name)+"\n        ")])],1)}),0),a("h6",{staticClass:"m-2 mt-5"},[t._v("Components")]),a("ul",t._l(t.componentPages,function(e){return a("li",{key:e.name,staticClass:"my-1"},[a("router-link",{staticClass:"p-2",attrs:{to:e.path}},[t._v("\n          "+t._s(e.name)+"\n        ")])],1)}),0)],1),a("router-view")],1)},o=[],r={computed:{introPages:function(){return this.$router.options.routes.slice(0,4)},layoutPages:function(){return this.$router.options.routes.slice(4,9)},componentPages:function(){return this.$router.options.routes.slice(9)}}},i=r,c=n("2877"),l=Object(c["a"])(i,s,o,!1,null,null,null),u=l.exports,d=n("8c4f"),m=n("e087"),p=n("eea6"),f=n("4c9f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SmTextLayout")},v=[],b={},y=Object(c["a"])(b,h,v,!1,null,null,null),_=y.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SmTextLayout",[n("ComponentSpec",{attrs:{compName:"SmApp"}})],1)},g=[],x={},C=Object(c["a"])(x,S,g,!1,null,null,null),k=C.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SmTextLayout",[n("ComponentSpec",{attrs:{compName:"SmNav"}})],1)},T=[],L={},O=Object(c["a"])(L,w,T,!1,null,null,null),j=O.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SmTextLayout",[n("ComponentSpec",{attrs:{compName:"SmGridLayout"}})],1)},E=[],$={},B=Object(c["a"])($,I,E,!1,null,null,null),N=B.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SmTextLayout",[n("ComponentSpec",{attrs:{compName:"SmTabLayout"}})],1)},P=[],q={},D=Object(c["a"])(q,A,P,!1,null,null,null),M=D.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SmTextLayout",[n("ComponentSpec",{attrs:{compName:"SmTextLayout"}})],1)},z=[],U={},G=Object(c["a"])(U,F,z,!1,null,null,null),W=G.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SmTextLayout",{staticClass:"root"},[n("ComponentSpec",{attrs:{compName:"SmButton"}}),n("SmButton",{attrs:{kind:"primary",small:""}},[t._v("Click me")]),n("SmButton",{attrs:{kind:"secondary"}},[t._v("Click me")]),n("SmButton",{attrs:{kind:"ghost"}},[t._v("Click me")]),n("SmButton",{attrs:{kind:"blank",icon:"map"}}),n("br"),n("SmButton",{attrs:{kind:"primary",disabled:""}},[t._v("Click me")]),n("SmButton",{attrs:{kind:"secondary",disabled:""}},[t._v("Click me")]),n("SmButton",{attrs:{kind:"ghost",disabled:""}},[t._v("Click me")]),n("SmButton",{attrs:{kind:"blank",icon:"map",disabled:""}}),n("br"),n("SmButton",{attrs:{kind:"primary",icon:"plus"}},[t._v("Click me")]),n("SmButton",{attrs:{kind:"secondary",icon:"plus"}},[t._v("Click me")]),n("SmButton",{attrs:{kind:"ghost",icon:"plus"}},[t._v("Click me")])],1)},R=[],H={},J=H,K=Object(c["a"])(J,V,R,!1,null,"126021d2",null),Q=K.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SmTextLayout",[n("ComponentSpec",{attrs:{compName:"SmCard"}}),n("SmButton",{attrs:{kind:"primary"},on:{click:function(e){t.modal=!0}}},[t._v("Open modal card")]),t.modal?n("SmCard",{staticClass:"w-1/3",attrs:{modal:""},on:{close:function(e){t.modal=!1}}},[n("h5",[t._v("I am a modal testing testing testingtesting t")]),t._v("\n      Close me if you dare\n    ")]):t._e(),n("SmCard",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Driving With Pets")]},proxy:!0},{key:"sidetitle",fn:function(){return[t._v("no. 38")]},proxy:!0},{key:"subtitle",fn:function(){return[t._v("An SmCard with a title, subtitle, and sidetitle")]},proxy:!0}])},[t._v("\n      Unrestrained pets can interfere with your driving and distract your\n      attention from driving. In a collision or sudden stop, unrestrained pets\n      or cages can be thrown around inside the vehicle and hurt you or your\n      passengers. Besides, the pets can be hurt under these situations. It is\n      also for their own safety that pets should be properly restrained in\n      your vehicle. Restrain a pet with a special traveling harness which can\n      be se- cured to the rear seat with a seatbelt or use a pet car- rier\n      which can be secured to the rear seat by routing a seatbelt through the\n      carrier’s handle. Never restrain pets or pet carriers in the front\n      passenger’s seat. For further information, consult your veterinarian,\n      local an- imal protection society or pet shop.\n    ")]),n("SmCard",{staticClass:"w-10"},[t._v("\n      I'm a SmCard with just text. Before you operate your vehicle, carefully\n      read this manual. To protect yourself and extend the service life of\n      your vehicle, follow the instructions in this manual. Failure to observe\n      these instructions may result in se- rious injury and damage to your\n      vehicle.\n    ")]),n("SmCard",{scopedSlots:t._u([{key:"sidetitle",fn:function(){return[t._v("no. 42")]},proxy:!0},{key:"title",fn:function(){return[t._v("Seatbelt Safety")]},proxy:!0},{key:"subtitle",fn:function(){return[t._v("A SmCard with titles and image")]},proxy:!0}])},[n("img",{staticClass:"img",attrs:{src:t.fig1}})]),n("SmCard",[n("img",{staticClass:"img",attrs:{src:t.fig2}})]),n("a",{attrs:{href:""}},[n("SmCard",{scopedSlots:t._u([{key:"sidetitle",fn:function(){return[t._v("no. 38")]},proxy:!0},{key:"title",fn:function(){return[t._v("I'm a Linked Figure")]},proxy:!0},{key:"subtitle",fn:function(){return[t._v("A SmCard with a title, subtitle, and sidetitle")]},proxy:!0}])},[t._v("\n        Unrestrained pets can interfere with your driving and distract your\n        attention from driving. In a collision or sudden stop, unrestrained\n        pets or cages can be thrown around inside the vehicle and hurt you or\n        your passengers. Besides, the pets can be hurt under these situations.\n        It is also for their own safety that pets should be properly\n        restrained in your vehicle. Restrain a pet with a special traveling\n        harness which can be se- cured to the rear seat with a seatbelt or use\n        a pet car- rier which can be secured to the rear seat by routing a\n        seatbelt through the carrier’s handle. Never restrain pets or pet\n        carriers in the front passenger’s seat. For further information,\n        consult your veterinarian, local an- imal protection society or pet\n        shop.\n      ")])],1)],1)},Y=[],Z=n("5f0f"),tt=n.n(Z),et=n("ab5c"),nt=n.n(et),at={data:function(){return{fig1:tt.a,fig2:nt.a,modal:!1}}},st=at,ot=Object(c["a"])(st,X,Y,!1,null,"9cc3e0c4",null),rt=ot.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SmTextLayout",[n("ComponentSpec",{attrs:{compName:"SmIcon"}}),n("div",{staticClass:"flex justify-center items-center mb-5"},[n("SmIcon",{attrs:{name:"smile",size:"s"}}),n("SmIcon",{staticClass:"ml-2",attrs:{name:"smile"}}),n("SmIcon",{staticClass:"ml-2",attrs:{name:"smile",size:"l"}})],1),n("div",{staticClass:"flex flex-wrap justify-between"},t._l(t.icons,function(e){return n("div",{key:e.name,staticClass:"mb-4 w-1/4 flex flex-col items-center justify-center"},[n("SmIcon",{attrs:{name:e.name}}),n("small",[t._v(t._s(e.name))])],1)}),0)],1)},ct=[],lt=n("77c6"),ut=n.n(lt),dt={data:function(){return{icons:ut.a.icons}}},mt=dt,pt=Object(c["a"])(mt,it,ct,!1,null,null,null),ft=pt.exports,ht=n("f3f5"),vt=n("08fb");a["a"].use(d["a"]);var bt=new d["a"]({mode:"hash",base:"/",routes:[{path:"/",name:"Philosophy",component:m["default"]},{path:"/usage",name:"Usage",component:p["default"]},{path:"/defaults",name:"Defaults",component:f["default"]},{path:"/utilities",name:"Utilities",component:_},{path:"/SmApp",name:"SmApp",component:k},{path:"/SmNav",name:"SmNav",component:j},{path:"/SmGridLayout",name:"SmGridLayout",component:N},{path:"/SmTabLayout",name:"SmTabLayout",component:M},{path:"/SmTextLayout",name:"SmTextLayout",component:W},{path:"/SmButton",name:"SmButton",component:Q},{path:"/SmCard",name:"SmCard",component:rt},{path:"/SmIcon",name:"SmIcon",component:ft},{path:"/SmLoading",name:"SmLoading",component:ht["default"]},{path:"/SmTag",name:"SmTag",component:vt["default"]}]}),yt=n("9ce6"),_t=n.n(yt),St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SmCard",{staticClass:"mb-7"},[n("h2",{staticClass:"m-0"},[t._v(t._s(t.comp.name))]),n("code",{staticClass:"p-3 my-2 block"},[t._v(t._s(t.compStr))]),"props"in t.comp?n("h4",{staticClass:"mb-4"},[t._v("Props")]):t._e(),n("dl",[t._l(t.comp.props,function(e,a){return[n("dt",{staticClass:"font-normal"},[n("code",[t._v(t._s(a))]),e.required?n("small",{staticClass:"ml-1 text-red"},[t._v("Required")]):t._e(),n("small",{staticClass:"text-blue"},[t._v("\n          "+t._s(e.type.toString().replace(/function |\(\).*/g,""))+"\n          "),"validator"in e&&!e.validator.toString().includes("IGNORE")?n("span",[t._v("\n            "+t._s(e.validator.toString().match(/\[.*\]/g)[0].replace(/,/g," |"))+"\n          ")]):t._e()]),"default"in e?n("small",{staticClass:"text-green"},[t._v("\n          default:\n          "+t._s(-1!==e.type.toString().indexOf("String")?'"'+e.default+'"':e.default)+"\n        ")]):t._e()]),n("dd",{staticClass:"mb-5 ml-4 mt-2"},[t._v("\n        "+t._s(e.description)+"\n      ")])]})],2)])},gt=[],xt=(n("6b54"),n("a481"),{props:{compName:{type:String,required:!0}},computed:{comp:function(){return this.$root.$data.comps[this.compName]},compStr:function(){var t=this.comp.props,e="<".concat(this.comp.name);for(var n in t)if(t[n].required){var a=t[n].type.toString().replace(/function |\(\).*/g,""),s="".concat(n,'="').concat(a,'"');"String"!==a&&(s=":"+s),e="".concat(e," ").concat(s)}return this.comp.slotted?e+="></".concat(this.comp.name,">"):e+=" />",e}}}),Ct=xt,kt=(n("dd5d"),Object(c["a"])(Ct,St,gt,!1,null,null,null)),wt=kt.exports,Tt=(n("3a62"),[]),Lt=n("8bb8");Lt.keys().forEach(function(t){Tt.push(Lt(t).default)});var Ot=Tt,jt={};Ot.forEach(function(t){a["a"].component(t.name,t),jt[t.name]=t}),a["a"].component("VueMarkdown",_t.a),a["a"].component("ComponentSpec",wt),a["a"].config.productionTip=!1,new a["a"]({data:{comps:jt},router:bt,render:function(t){return t(u)}}).$mount("#app")},"49d4":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SmTextLayout",[n("h1",[t._v("Usage")]),n("h3",[t._v("Framework Structure")]),n("p",[t._v("Fundamentally "),n("code",[t._v("@springmatter/components")]),t._v(" consists of:")]),n("ol",[n("li",[t._v("Custom HTML defaults built on top of\n      "),n("a",{attrs:{href:"https://necolas.github.io/normalize.css/"}},[t._v("normalize.css")])]),n("li",[t._v("Layout components")]),n("li",[t._v("Other components")]),n("li",[t._v("CSS utility classes via \n      "),n("a",{attrs:{href:"https://tailwindcss.com/"}},[t._v("tailwindcss")])])]),n("h3",[t._v("Setup")]),n("p",[t._v("Springmatter components is intended to be used with vue-cli 3 or later. ")]),n("p",[t._v("First install:")]),n("pre",[t._v("npm install @springmatter/components")]),n("p",[t._v("Second import the components into your main file and register the components (note this must be done before calling "),n("code",[t._v("new Vue()")]),t._v(", and it will also automatically include our CSS files):")]),n("pre",[t._v('import components from "@springmatter/components";\nfor (let c of components) { Vue.component(c.name, c); }\n\nnew Vue({ ... });')]),n("p",[t._v("Using this method, the components will be globally registered and usable in any of your Vue components.")])])},s=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return s})},"4c9f":function(t,e,n){"use strict";var a=n("d9b5"),s=n("f7e7"),o=n("2877"),r=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,"60e68378",null);e["default"]=r.exports},"4e2b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("small",{staticClass:"SmTag text-sm",style:{background:t.rgbaColor}},[n("span",{staticClass:"dot",style:{background:t.hexColor}}),t._t("default")],2)},s=[],o=(n("14b9"),n("a481"),{name:"SmTag",slotted:!0,props:{color:{type:String,required:!0,validator:function(t){return/(^#?[0-9A-Fa-f]{6}$)|(^#?[0-9A-Fa-f]{3}$)/i.test(t)},description:"The background color of the tag. Must be a valid hex color in one of the following forms: #123456, #123, 12345, or 123"}},computed:{rgbaColor:function(){var t=this.color.replace("#",""),e=parseInt(3==t.length?t.slice(0,1).repeat(2):t.slice(0,2),16),n=parseInt(3==t.length?t.slice(1,2).repeat(2):t.slice(2,4),16),a=parseInt(3==t.length?t.slice(2,3).repeat(2):t.slice(4,6),16);return"rgba("+e+", "+n+", "+a+", 0.15)"},hexColor:function(){return"#"===this.color.charAt(0)?this.color:"#"+this.color}}}),r=o,i=(n("3fb9"),n("2877")),c=Object(i["a"])(r,a,s,!1,null,"5bf36e31",null);e["default"]=c.exports},"4f4d":function(t,e,n){},5781:function(t,e,n){"use strict";var a=n("6d9f"),s=n.n(a);s.a},"5f0f":function(t,e,n){t.exports=n.p+"img/fig1.3248412e.png"},"6bf3":function(t,e,n){"use strict";var a=n("b03b"),s=n.n(a);e["default"]=s.a},"6d9f":function(t,e,n){},"708c":function(t,e,n){"use strict";var a=n("b50b"),s=n.n(a);e["default"]=s.a},"771e":function(t,e,n){"use strict";var a=n("804e"),s=n.n(a);s.a},"77b9":function(t,e,n){"use strict";var a=n("818a"),s=n.n(a);s.a},"7b0e":function(t,e,n){},"7b93":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"SmApp"}},[t.blank?t._e():[n("SmNav",{attrs:{type:"top",title:t.title}}),n("SmNav",{attrs:{type:"side",links:t.links}}),n("router-view")],t.blank?[t._t("default")]:t._e()],2)},s=[],o={name:"SmApp",slotted:!0,props:{blank:{type:Boolean,required:!1,description:"Removes all default children of SmApp but maintains its grid structure. This is useful if you want to keep the app layout but tweak the nav bars. Check out the source for this website on github for an example."},title:{type:String,required:!1,description:"This is the title of your app that will appear in the top left on the nav bar."},links:{type:Array,required:!1,validator:function(t){return!(t.length>0)||"name"in t[0]&&"route"in t[0]},description:"These are the links that will appear in the side nav bar. It needs to be an array of objects with keys 'name' (the name of the icon that will represent your link) and 'route' (the route you'd like to go to in the form '/route-here'). Example: [ { name: 'map', route: '/maps' }, { name: 'archive', route: '/library' }, ... ]"}}},r=o,i=(n("ece0"),n("2877")),c=Object(i["a"])(r,a,s,!1,null,"4b1d5bf2",null);e["default"]=c.exports},"7fd0":function(t,e,n){"use strict";var a=n("05bc"),s=n.n(a);s.a},"804e":function(t,e,n){},"818a":function(t,e,n){},"85a8":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SmTextLayout",[n("h1",[t._v("Introduction")]),n("p",[t._v("Hello and welcome to The Springmatter Design System documentation. The Springmatter Design System is a set of tools that enables us to rapidly create consistent and clear user experiences.")]),n("p",[t._v("It is extremely opinionated beacuse its intended use is to help us rapidly develop applications that are very specific to our needs.")]),n("h3",[t._v("Principles")]),n("h5",[t._v("Agressively simple tooling and developer experience")]),n("p",[t._v("This is the primary reason the system is so opinionated. We aim for there to be very few decisions in the layout and development of our web applications. This leads to higher development speed while maintaining consistently well designed experiences and aesthetics. We rely on standard Vue.js practices, and existing web technologies wherever possible. We are very reluctant to add dependencies to our applications, and when we do we try to ensure that they are large, stable, and well supported open source projects.")]),n("h5",{staticClass:"flex items-center"},[t._v("Accessible from the start "),n("small",{staticClass:"ml-3 mt-1"},[n("code",[t._v("Work in progress")])])]),n("p",[t._v("One never knows when a client is going to have special needs, so we aim to have level AA conformance to the Web Content Accessibility Guidelines built in to the system, and we encourage users of the system aim for this level of conformance in their local code.")]),n("h5",[t._v("Performance")]),n("p",[t._v("We aim to maximize performance to the best of our ability. This is mostly achieved automatically by keeping our dependencies light, but also requires continued effort to reduce image sizes, load data properly, and include only necessary information on each page.")]),n("h5",[t._v("Privacy")]),n("p",[t._v("We do not use external tools that track our users' behavior and send it off to third parties.")])])},s=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return s})},8880:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"SmButton",class:[t.kind,{small:t.small}],on:{click:function(e){return t.$emit("click")}}},[t._t("default"),t.icon?n("SmIcon",{attrs:{name:t.icon,size:t.small?"s":"m"}}):t._e()],2)},s=[],o={name:"SmButton",slotted:!0,props:{kind:{type:String,required:!1,default:"blank",validator:function(t){return-1!==["primary","secondary","ghost","blank"].indexOf(t)},description:"Determines the visual style of the button. If no kind is applied the button acts as a simple clickable wrapper."},icon:{type:String,required:!1,description:"The name of an icon to be included in the button. In primary, secondary, and ghost buttons the icon will appear beside the text, in default buttons the icon will be centered. Must correspond to the name of an icon from the feather icons set (See SmIcon page for full list of available icons)."},small:{type:Boolean,required:!1,description:"Shrinks the button vertically for use inline, in headers, etc."}}},r=o,i=(n("e8f2"),n("2877")),c=Object(i["a"])(r,a,s,!1,null,"104abbeb",null);e["default"]=c.exports},"8bb8":function(t,e,n){var a={"./components/SmButton.vue":"8880","./components/SmCard.vue":"2fbc","./components/SmIcon.vue":"0a60","./components/SmLoading.vue":"44f2","./components/SmTag.vue":"4e2b","./core/SmApp.vue":"7b93","./core/SmGridLayout.vue":"f09c","./core/SmNav.vue":"2f92","./core/SmTabLayout.vue":"c699","./core/SmTextLayout.vue":"2154"};function s(t){var e=o(t);return n(e)}function o(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}s.keys=function(){return Object.keys(a)},s.resolve=o,t.exports=s,s.id="8bb8"},"979b":function(t,e,n){},"97a8":function(t,e){},a1db:function(t,e,n){},ab5c:function(t,e,n){t.exports=n.p+"img/fig2.b42a2dab.png"},ae36:function(t,e,n){"use strict";var a=n("97a8"),s=n.n(a);e["default"]=s.a},b03b:function(t,e){},b50b:function(t,e){},b5f0:function(t,e,n){t.exports=n.p+"img/logo.53c78c9b.png"},c699:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"SmTabLayout"},[n("div",{staticClass:"tab-bar"},t._l(t.tabs,function(e,a){return n("div",{key:a,staticClass:"tab-container",class:{activeTab:t.activeTab===a}},[n("SmButton",{staticClass:"tab-button",attrs:{kind:"ghost"},on:{click:function(e){return t.switchTab(a)}}},[n("small",[t._v("\n        "+t._s(e.tabName)+"\n        ")])]),a>0?n("SmButton",{staticClass:"tab-close",attrs:{icon:"x",small:""},on:{click:function(e){return t.closeTab(a)}}}):t._e()],1)}),0),n("div",{attrs:{id:"currentTab"}},[t._t("default")],2)])},s=[],o=(n("5df3"),n("1c4c"),n("ac6a"),{name:"SmTabLayout",slotted:!0,components:{},data:function(){return{tabs:[],activeTab:-1,observer:null}},props:{noSwitch:{type:Boolean,required:!1,description:"By default, SmTabLayout will switch to a new tab when it is added as one of its children. This disables that behavior."}},methods:{closeTab:function(t){this.$emit("close-tab",t),this.switchTab(-1)},switchTab:function(t){this.tabs.forEach(function(t){t.style.display="none"}),-1!==t?this.activeTab=t:this.activeTab>=this.tabs.length?this.activeTab=this.tabs.length-1:this.activeTab<0&&(this.activeTab=0),this.tabs[this.activeTab].style.display="grid"},update:function(){var t=Array.from(document.getElementById("currentTab").childNodes),e=this.tabs.length<t.length;this.tabs=Array.from(document.getElementById("currentTab").childNodes);var n=this.activeTab;this.tabs.forEach(function(t,e){t.tabName=t.getAttribute("data-tab"),t.style.display=e===n?"grid":"none"}),e&&!this.noSwitch&&this.switchTab(this.tabs.length-1)}},mounted:function(){this.activeTab=0,this.update(),this.observer=new MutationObserver(this.update),this.observer.observe(document.getElementById("currentTab"),{childList:!0})},beforeDestroy:function(){this.observer.disconnect()}}),r=o,i=(n("e5c6"),n("2877")),c=Object(i["a"])(r,a,s,!1,null,"6df08cf6",null);e["default"]=c.exports},d1c1:function(t,e,n){"use strict";var a=n("a1db"),s=n.n(a);s.a},d9b5:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SmTextLayout",{staticClass:"wrapper"},[n("h1",[n("code",{staticClass:"text-xs"},[t._v("<h1>")]),t._v("\n    I am a header\n    "),n("code",{staticClass:"text-xs"},[t._v("</h1>")])]),n("h2",[n("code",{staticClass:"text-xs"},[t._v("<h2>")]),t._v("\n    I am a header\n    "),n("code",{staticClass:"text-xs"},[t._v("</h2>")])]),n("h3",[n("code",{staticClass:"text-xs"},[t._v("<h3>")]),t._v("\n    I am a header\n    "),n("code",{staticClass:"text-xs"},[t._v("</h3>")])]),n("h4",[n("code",{staticClass:"text-xs"},[t._v("<h4>")]),t._v("\n    I am a header\n    "),n("code",{staticClass:"text-xs"},[t._v("</h4>")])]),n("h5",[n("code",{staticClass:"text-xs"},[t._v("<h5>")]),t._v("\n    I am a header\n    "),n("code",{staticClass:"text-xs"},[t._v("</h5>")])]),n("h6",[n("code",{staticClass:"text-xs"},[t._v("<h6>")]),t._v("\n    I am a header\n    "),n("code",{staticClass:"text-xs"},[t._v("</h6>")])]),n("p",{staticClass:"mt-6 block"},[n("code",{staticClass:"text-xs"},[t._v("<p>")]),t._v("\n    I am body text\n    "),n("code",{staticClass:"text-xs"},[t._v("</p>")])]),n("small",{staticClass:"mt-6 block"},[n("code",{staticClass:"text-xs"},[t._v("<small>")]),t._v("\n    I am small text\n    "),n("code",{staticClass:"text-xs"},[t._v("</small>")])])])},s=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return s})},dd5d:function(t,e,n){"use strict";var a=n("7b0e"),s=n.n(a);s.a},e087:function(t,e,n){"use strict";var a=n("85a8"),s=n("6bf3"),o=n("2877"),r=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},e5c6:function(t,e,n){"use strict";var a=n("34e5"),s=n.n(a);s.a},e8f2:function(t,e,n){"use strict";var a=n("4f4d"),s=n.n(a);s.a},ece0:function(t,e,n){"use strict";var a=n("2c27"),s=n.n(a);s.a},eea6:function(t,e,n){"use strict";var a=n("49d4"),s=n("708c"),o=n("2877"),r=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},f09c:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"SmGridLayout"},[t._t("default")],2)},s=[],o={name:"SmGridLayout",slotted:!0},r=o,i=(n("77b9"),n("2877")),c=Object(i["a"])(r,a,s,!1,null,"3f74ecf4",null);e["default"]=c.exports},f3f5:function(t,e,n){"use strict";var a=n("48e5"),s=n("ae36"),o=n("2877"),r=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,"36cc6c49",null);e["default"]=r.exports},f7e7:function(t,e,n){"use strict";var a=n("facf"),s=n.n(a);e["default"]=s.a},facf:function(t,e){}});
//# sourceMappingURL=app-legacy.f214ded1.js.map