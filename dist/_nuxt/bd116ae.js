(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{551:function(e,t,r){var content=r(558);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(50).default)("044fcca1",content,!0,{sourceMap:!1})},557:function(e,t,r){"use strict";r(551)},558:function(e,t,r){var l=r(49)(!1);l.push([e.i,".header-filter[data-v-8be0977a]{color:#231f20}[dir=ltr] .header-filter .title span[data-v-8be0977a]{margin-left:.5rem}[dir=ltr] .header-filter .filters li[data-v-8be0977a],[dir=rtl] .header-filter .title span[data-v-8be0977a]{margin-right:.5rem}[dir=rtl] .header-filter .filters li[data-v-8be0977a]{margin-left:.5rem}.header-filter .filters li[data-v-8be0977a]{display:flex;background-color:#e9e7e7;padding:.25rem .75rem;border-radius:50rem;align-items:center;margin-bottom:.5rem}[dir=ltr] .header-filter .filters li .icon[data-v-8be0977a]{margin-left:.75rem}[dir=rtl] .header-filter .filters li .icon[data-v-8be0977a]{margin-right:.75rem}.header-filter .filters li .icon[data-v-8be0977a]{cursor:pointer}",""]),e.exports=l},565:function(e,t,r){"use strict";r.r(t);r(138);var l={components:{BIconX:r(0).Uw},props:{categoryName:{type:String,default:function(){return""}},subCategoryName:{type:String,default:function(){return""}},quantity:{type:[String,Number],default:function(){return 0}},filters:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{filterItem:function(filter,e){this.$emit("removeItem",{filter:filter,index:e})}}},n=(r(557),r(32)),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header-filter"},[r("div",{staticClass:"d-flex title mb-3"},[r("h4",{staticClass:"m-0"},[e._v("\n      "+e._s(e.categoryName||"Products")+" "+e._s(e.subCategoryName)+"\n    ")]),e._v(" "),r("span",[e._v(" "+e._s("("+e.quantity+" Item)"))])]),e._v(" "),e.filters.length?r("ul",{staticClass:"filters d-flex flex-wrap my-4"},e._l(e.filters,(function(filter,t){return r("li",{key:filter.id},[r("span",[e._v(e._s(filter.name))]),e._v(" "),r("b-icon-x",{staticClass:"icon",on:{click:function(r){return e.filterItem(filter,t)}}})],1)})),0):e._e()])}),[],!1,null,"8be0977a",null);t.default=component.exports}}]);