"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[588],{588:function(e,r,t){t.r(r),t.d(r,{default:function(){return b}});var n=t(861),a=t(439),c=t(757),u=t.n(c),s=t(791),o=t(596),i=t(87),p=t(237),m=t(285),f="SearhForm_Searchbar__qJ0gF",h="SearhForm_SearchForm__VAUfV",l="SearhForm_SearchForm_button__0pCav",v="SearhForm_SearchForm_input__lMpCL",_="SearhForm_icon__i6rBF",d=t(0),x=t(184),g=function(e){var r=e.onSubmit,t=(0,s.useState)(""),n=(0,a.Z)(t,2),c=n[0],u=n[1];return(0,x.jsx)("header",{className:f,children:(0,x.jsxs)("form",{className:h,onSubmit:function(e){if(e.preventDefault(),""===c.trim())return o.Am.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441!");r(c),u("")},children:[(0,x.jsx)("button",{type:"submit",className:l,children:(0,x.jsx)(d.Vph,{className:_})}),(0,x.jsx)("input",{className:v,type:"text",placeholder:"Search...",name:"request",value:c,onChange:function(e){u(e.currentTarget.value.toLowerCase())}})]})})},b=function(){var e,r=(0,s.useState)([]),t=(0,a.Z)(r,2),c=t[0],f=t[1],h=(0,s.useState)(""),l=(0,a.Z)(h,2),v=l[0],_=l[1],d=(0,i.lr)(),b=(0,a.Z)(d,2),S=b[0],y=b[1],k=null!==(e=S.get("name"))&&void 0!==e?e:"";(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==k){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,(0,p.on)(k);case 5:r=e.sent,f(r.results),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),o.Am.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441!");case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[v,k]);var w=function(){var e=(0,n.Z)(u().mark((function e(r){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_(r),f([]),y(""!==r?{name:r}:{});case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,x.jsxs)("main",{children:[(0,x.jsx)(g,{onSubmit:w,query:v}),(0,x.jsx)(m.Z,{movies:c})]})}},285:function(e,r,t){t.d(r,{Z:function(){return p}});var n=t(87),a=t(689),c="Home_ImageGallery__NsMrt",u="Home_ImageGalleryItem__IDc2y",s="Home_ImageGalleryItem_image__EcFEi",o=t(220),i=t(184),p=function(e){var r=e.movies,t=(0,a.TH)();return(0,i.jsx)("div",{className:c,children:r.map((function(e){return(0,i.jsx)(n.rU,{to:"/movies/".concat(e.id),className:u,state:{from:t},children:(0,i.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):o,alt:e.title,className:s})},e.id)}))})}},237:function(e,r,t){t.d(r,{DD:function(){return i},PY:function(){return s},on:function(){return o}});var n=t(861),a=t(757),c=t.n(a),u="4a55179e5aea4bfa269dc61c94f9ab53",s=function(){var e=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(u),e.next=3,fetch(r);case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&language=en-US&query=").concat(r,"&page=1&include_adult=false"),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(r,"?api_key=").concat(u,"&language=en-US"),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},220:function(e,r,t){e.exports=t.p+"static/media/errorImg.87049462a1ae4986277e.jpg"}}]);
//# sourceMappingURL=588.bc020e99.chunk.js.map