(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{645:function(t,e,n){var content=n(712);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("613adca1",content,!0,{sourceMap:!1})},711:function(t,e,n){"use strict";n(645)},712:function(t,e,n){var o=n(49),l=n(313),r=n(337),d=o(!1),c=l(r);d.push([t.i,'@media(max-width:767px){.mobile-apps[data-v-4ab701f4]{padding:2rem 0}}.mobile-apps .content[data-v-4ab701f4]{z-index:3}.mobile-apps[data-v-4ab701f4]:before{content:"";background-image:url('+c+");position:absolute;left:0;top:0;width:100%;height:100%;background-size:cover;z-index:1}.mobile-apps .apps-content[data-v-4ab701f4]{color:#fff}@media(max-width:767px){.mobile-apps .apps-content[data-v-4ab701f4]{text-align:center}}.mobile-apps .apps-content .text-head[data-v-4ab701f4]{font-size:38pt}@media(max-width:991px){.mobile-apps .apps-content .text-head[data-v-4ab701f4]{font-size:28pt}}@media(min-width:768px){.mobile-apps .apps-content .text-head[data-v-4ab701f4]{width:75%}}.mobile-apps .apps-content .text-description[data-v-4ab701f4]{font-size:12pt}[dir=ltr] .mobile-apps .apps-content .apps-links .app-link[data-v-4ab701f4]{margin-right:.5rem}[dir=rtl] .mobile-apps .apps-content .apps-links .app-link[data-v-4ab701f4]{margin-left:.5rem}.mobile-apps .apps-content .apps-links .app-link[data-v-4ab701f4]{height:3rem;width:9rem;overflow:hidden;border-radius:.4rem}.mobile-apps .apps-content .apps-links .app-link img[data-v-4ab701f4]{-o-object-fit:contain;object-fit:contain}.mobile-apps .apps-screens[data-v-4ab701f4]{top:-2rem}.mobile-apps .apps-screens .screens img[data-v-4ab701f4]{width:110%}",""]),t.exports=d},754:function(t,e,n){"use strict";n.r(e);var o={props:{apple:{type:String,default:function(){return"#"}},play:{type:String,default:function(){return"#"}}},data:function(){return{loading:!0}},mounted:function(){this.loading=!1}},l=(n(711),n(32)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mobile-apps position-relative my-5"},[o("b-container",[o("b-row",{staticClass:"content position-relative align-items-center"},[o("b-col",{staticClass:"apps-content",attrs:{cols:"12",md:"7"}},[o("h2",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"text-head"},[t._v("\n          "+t._s(t.$t("home.downloadApp"))+"\n        ")]),t._v(" "),t.loading?o("b-skeleton",{attrs:{height:"3rem",width:"85%"}}):t._e(),t._v(" "),o("p",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"text-description"},[t._v("\n          "+t._s(t.$t("home.downloadAppDescription"))+"\n        ")]),t._v(" "),t.loading?o("b-skeleton",{attrs:{height:"1.5rem",width:"70%"}}):t._e(),t._v(" "),o("div",{staticClass:"apps-links d-flex justify-content-center justify-content-md-start"},[t.apple?o("a",{staticClass:"app-link",attrs:{href:t.apple}},[o("img",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],attrs:{src:n(334),alt:"Application link on apple store"}}),t._v(" "),t.loading?o("b-skeleton-img",{attrs:{width:"100%",height:"100%"}}):t._e()],1):t._e(),t._v(" "),t.play?o("a",{staticClass:"app-link",attrs:{href:t.play}},[o("img",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],attrs:{src:n(335),alt:"Application link on google store"}}),t._v(" "),t.loading?o("b-skeleton-img",{attrs:{width:"100%",height:"100%"}}):t._e()],1):t._e()])],1),t._v(" "),o("b-col",{staticClass:"d-none d-md-block apps-screens",attrs:{cols:"12",md:"5"}},[o("div",{staticClass:"screens"},[o("img",{attrs:{src:n(336),alt:"mobile application screens"}})])])],1)],1)],1)}),[],!1,null,"4ab701f4",null);e.default=component.exports}}]);