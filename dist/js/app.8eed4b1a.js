(function(e){function t(t){for(var a,r,l=t[0],i=t[1],s=t[2],b=0,p=[];b<l.length;b++)r=l[b],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&p.push(c[r][0]),c[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(p.length)p.shift()();return n.push.apply(n,s||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],a=!0,l=1;l<o.length;l++){var i=o[l];0!==c[i]&&(a=!1)}a&&(n.splice(t--,1),e=r(r.s=o[0]))}return e}var a={},c={app:0},n=[];function r(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=a,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(o,a,function(t){return e[t]}.bind(null,a));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=i;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"284b":function(e,t,o){"use strict";o("f134")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("7a23");function c(e,t,o,c,n,r){var l=Object(a["resolveComponent"])("app-header"),i=Object(a["resolveComponent"])("sidebar");return Object(a["openBlock"])(),Object(a["createBlock"])("div",null,[Object(a["createVNode"])(l),Object(a["createVNode"])(i,{onCloseSidebar:t[1]||(t[1]=function(t){return e.open=!1}),open:e.open},null,8,["open"]),Object(a["createVNode"])("div",{class:["layout-content ",{"layout-content--open":e.open}]}," Dashboard Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus eaque eum explicabo in ipsum iste maiores maxime quis sed, sequi, ut? Amet ea ex, impedit maxime nobis numquam pariatur. ",2)])}var n=o("5530"),r={class:"sidebar__section"},l=Object(a["createVNode"])("span",{class:"sidebar__section-title"},"Pages",-1),i={href:"#",class:"sidebar__link sidebar__link--active"},s=Object(a["createVNode"])("span",null,"Dashboard",-1),d={href:"#",class:"sidebar__link"},b=Object(a["createVNode"])("span",null,"Manage B",-1),p={class:"sidebar__section"},u=Object(a["createVNode"])("span",{class:"sidebar__section-title"},"Section 2",-1),O={href:"#",class:"sidebar__link"},j=Object(a["createVNode"])("span",null,"Manage C",-1),v={href:"#",class:"sidebar__link"},f=Object(a["createVNode"])("span",null,"Manage D",-1),_={href:"#",class:"sidebar__link"},g=Object(a["createVNode"])("span",null,"Manage E",-1);function m(e,t,o,c,n,m){var h=Object(a["resolveComponent"])("icon-home"),k=Object(a["resolveComponent"])("sidebar-collapsible");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])("div",{class:["sidebar",{open:e.open}]},[Object(a["createVNode"])("div",r,[l,Object(a["createVNode"])("a",i,[Object(a["createVNode"])(h,{class:"sidebar__link-icon"}),s]),Object(a["createVNode"])(k,{"collapsible-menu":e.collapsibleMenuA,collapsibleLabel:"Manage A",collapsibleIcon:"IconHome"},null,8,["collapsible-menu"]),Object(a["createVNode"])("a",d,[Object(a["createVNode"])(h,{class:"sidebar__link-icon"}),b])]),Object(a["createVNode"])("div",p,[u,Object(a["createVNode"])("a",O,[Object(a["createVNode"])(h,{class:"sidebar__link-icon"}),j]),Object(a["createVNode"])("a",v,[Object(a["createVNode"])(h,{class:"sidebar__link-icon"}),f]),Object(a["createVNode"])("a",_,[Object(a["createVNode"])(h,{class:"sidebar__link-icon"}),g])])],2),e.open?(Object(a["openBlock"])(),Object(a["createBlock"])("div",{key:0,class:"sidebar__overlay",onClick:t[1]||(t[1]=function(t){return e.$emit("close-sidebar")})})):Object(a["createCommentVNode"])("",!0)],64)}var h=Object(a["withScopeId"])("data-v-12ca5570");Object(a["pushScopeId"])("data-v-12ca5570");var k={xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"bi bi-house-fill",viewBox:"0 0 16 16"},V=Object(a["createVNode"])("path",{"fill-rule":"evenodd",d:"M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"},null,-1),w=Object(a["createVNode"])("path",{"fill-rule":"evenodd",d:"M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"},null,-1);Object(a["popScopeId"])();var N=h((function(e,t,o,c,n,r){return Object(a["openBlock"])(),Object(a["createBlock"])("svg",k,[V,w])})),S={name:"IconHome"};S.render=N,S.__scopeId="data-v-12ca5570";var y=S,B={class:"sidebar__collapsible"},C={key:0,class:"sidebar__collapsible-menu"},I=Object(a["createVNode"])("a",{href:"#",class:"sidebar__link"},"Manage A 1",-1),M=Object(a["createVNode"])("a",{href:"#",class:"sidebar__link"},"Manage A 2",-1),x=Object(a["createVNode"])("a",{href:"#",class:"sidebar__link"},"Manage A 3",-1);function A(e,t,o,c,n,r){var l=Object(a["resolveComponent"])("icon-caret-down"),i=Object(a["resolveComponent"])("icon-caret-up");return Object(a["openBlock"])(),Object(a["createBlock"])("div",B,[Object(a["createVNode"])("div",{class:"sidebar__collapsible-toggler",onClick:t[1]||(t[1]=function(e){return c.open=!c.open})},[o.collapsibleIcon?(Object(a["openBlock"])(),Object(a["createBlock"])(Object(a["resolveDynamicComponent"])(o.collapsibleIcon),{key:0,class:"sidebar__link-icon"})):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(o.collapsibleLabel),1),c.open?(Object(a["openBlock"])(),Object(a["createBlock"])(i,{key:2,class:"sidebar__collapsible-caret"})):(Object(a["openBlock"])(),Object(a["createBlock"])(l,{key:1,class:"sidebar__collapsible-caret"}))]),c.open?(Object(a["openBlock"])(),Object(a["createBlock"])("div",C,[I,M,x])):Object(a["createCommentVNode"])("",!0)])}var D=Object(a["withScopeId"])("data-v-64fa95a9");Object(a["pushScopeId"])("data-v-64fa95a9");var L={xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"bi bi-caret-down-fill",viewBox:"0 0 16 16"},z=Object(a["createVNode"])("path",{d:"M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"},null,-1);Object(a["popScopeId"])();var H=D((function(e,t,o,c,n,r){return Object(a["openBlock"])(),Object(a["createBlock"])("svg",L,[z])})),P={name:"IconCaretDown"};P.render=H,P.__scopeId="data-v-64fa95a9";var T=P,q=Object(a["withScopeId"])("data-v-34eb11ec");Object(a["pushScopeId"])("data-v-34eb11ec");var J={xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"bi bi-caret-up-fill",viewBox:"0 0 16 16"},R=Object(a["createVNode"])("path",{d:"M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"},null,-1);Object(a["popScopeId"])();var U=q((function(e,t,o,c,n,r){return Object(a["openBlock"])(),Object(a["createBlock"])("svg",J,[R])})),E={name:"IconCaretUp"};E.render=U,E.__scopeId="data-v-34eb11ec";var F=E,G={name:"SidebarCollapsible",components:{IconCaretUp:F,IconCaretDown:T,IconHome:y},props:{collapsibleMenu:{type:[Array,Object],required:!0},collapsibleLabel:{type:String,required:!0},collapsibleIcon:{type:String}},setup:function(){var e=Object(a["ref"])(!1);return{open:e}}};G.render=A;var $=G,K=Object(a["defineComponent"])({name:"Sidebar",components:{SidebarCollapsible:$,IconHome:y},emits:["close-sidebar"],props:{open:{type:Boolean,default:!0}},setup(){const e=[{label:"Manage A 1",link:"#"},{label:"Manage A 2",link:"#"},{label:"Manage A 3",link:"#"}];return{collapsibleMenuA:e}}});o("284b");K.render=m;var Q=K,W=Object(a["withScopeId"])("data-v-091d0e1b");Object(a["pushScopeId"])("data-v-091d0e1b");var X={class:"nav"},Y=Object(a["createVNode"])("div",null,null,-1),Z=Object(a["createVNode"])("div",null,null,-1),ee=Object(a["createVNode"])("div",null,null,-1),te=Object(a["createVNode"])("div",{class:"nav__brand"},[Object(a["createVNode"])("a",{href:"#"},[Object(a["createVNode"])("div",{class:"nav__brand-logo"},"LOGO")])],-1),oe={class:"nav__menu"},ae=Object(a["createVNode"])("a",{class:"nav__link",href:"#"},"Test Link",-1),ce={class:"nav__dropdown"},ne=Object(a["createVNode"])("img",{src:"https://ui-avatars.com/api/?name=John Doe&size=40&background=random&color=fff",class:"nav__avatar"},null,-1),re=Object(a["createVNode"])("span",{class:"nav__user"},"John Doe",-1),le={key:0,class:"nav__dropdown-menu"},ie={href:"#",class:"nav__link"},se=Object(a["createVNode"])("span",null,"Logout",-1);Object(a["popScopeId"])();var de=W((function(e,t,o,c,n,r){var l=Object(a["resolveComponent"])("icon-caret-down"),i=Object(a["resolveComponent"])("icon-logout");return Object(a["openBlock"])(),Object(a["createBlock"])("nav",X,[Object(a["createVNode"])("div",{class:["nav__burger",{open:c.sidebarOpen}],onClick:t[1]||(t[1]=function(){return c.toggleSidebar&&c.toggleSidebar.apply(c,arguments)})},[Y,Z,ee],2),te,Object(a["createVNode"])("div",oe,[ae,Object(a["createVNode"])("div",ce,[Object(a["createVNode"])("div",{class:"nav__dropdown-toggler",onClick:t[2]||(t[2]=function(){return c.toggleDropdown&&c.toggleDropdown.apply(c,arguments)}),ref:"dropdownTarget"},[ne,re,Object(a["createVNode"])(l,{class:"nav__dropdown-caret"})],512),Object(a["createVNode"])(a["Transition"],{name:"nav-dropdown"},{default:W((function(){return[c.open?(Object(a["openBlock"])(),Object(a["createBlock"])("div",le,[Object(a["createVNode"])("a",ie,[Object(a["createVNode"])(i,{class:"nav__icon--logout"}),se])])):Object(a["createCommentVNode"])("",!0)]})),_:1})])])])})),be=Object(a["withScopeId"])("data-v-368fca69");Object(a["pushScopeId"])("data-v-368fca69");var pe={xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"bi bi-box-arrow-left",viewBox:"0 0 16 16"},ue=Object(a["createVNode"])("path",{"fill-rule":"evenodd",d:"M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"},null,-1),Oe=Object(a["createVNode"])("path",{"fill-rule":"evenodd",d:"M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"},null,-1);Object(a["popScopeId"])();var je=be((function(e,t,o,c,n,r){return Object(a["openBlock"])(),Object(a["createBlock"])("svg",pe,[ue,Oe])})),ve=Object(a["defineComponent"])({name:""});ve.render=je,ve.__scopeId="data-v-368fca69";var fe=ve;function _e(){var e=Object(a["reactive"])({open:!1,dropdownTarget:null}),t=function(){e.open=!e.open},o=function(){e.open=!1};return Object(n["a"])(Object(n["a"])({},Object(a["toRefs"])(e)),{},{toggleDropdown:t,closeDropdown:o})}var ge=o("16ce"),me={name:"AppHeader",components:{IconCaretDown:T,IconLogout:fe},emits:["toggle-sidebar"],setup:function(){var e=_e(),t=e.open,o=e.toggleDropdown,c=e.dropdownTarget,n=e.closeDropdown;Object(ge["a"])(c,(function(){return n()}));var r=Object(a["inject"])("sidebarOpen"),l=Object(a["inject"])("toggleSidebar");return{open:t,closeDropdown:n,dropdownTarget:c,toggleDropdown:o,sidebarOpen:r,toggleSidebar:l}}};o("8b26");me.render=de,me.__scopeId="data-v-091d0e1b";var he=me;function ke(){var e=Object(a["reactive"])({open:!0}),t=function(){return e.open=!e.open},o=Object(ge["b"])("(min-width :992px)");return Object(a["onMounted"])((function(){o.value||(e.open=!1)})),{state:e,toggleSidebar:t}}var Ve={name:"App",components:{AppHeader:he,Sidebar:Q},setup:function(){var e=ke(),t=e.state,o=e.toggleSidebar;return Object(a["provide"])("sidebarOpen",Object(a["computed"])((function(){return t.open}))),Object(a["provide"])("toggleSidebar",o),Object(n["a"])({toggleSidebar:o},Object(a["toRefs"])(t))}};o("d812");Ve.render=c;var we=Ve,Ne=Object(a["createApp"])(we);Ne.mount("#app")},"6b24":function(e,t,o){},"8b26":function(e,t,o){"use strict";o("6b24")},c15e:function(e,t,o){},d812:function(e,t,o){"use strict";o("c15e")},f134:function(e,t,o){}});
//# sourceMappingURL=app.8eed4b1a.js.map