"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{186:function(e,n,t){t.r(n);var r=t(165),a=t(861),u=t(439),c=t(689),s=t(791),i=t(975),o=t(362),f=t(184);n.default=function(){var e=(0,c.UO)().movieId,n=(0,s.useState)([]),t=(0,u.Z)(n,2),p=t[0],v=t[1],h=(0,s.useState)(!1),l=(0,u.Z)(h,2),d=l[0],Z=l[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return Z(!0),n.prev=1,n.next=4,(0,i.Bt)(e);case 4:t=n.sent,v(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:return n.prev=11,Z(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),(0,f.jsxs)(f.Fragment,{children:[d&&(0,f.jsx)(o.Z,{}),0!==p.length&&(0,f.jsx)("div",{children:(0,f.jsx)("ul",{children:p.map((function(e){return(0,f.jsxs)("li",{children:[(0,f.jsxs)("h2",{children:["Author: ",e.author]}),(0,f.jsx)("p",{children:e.content})]},e.id)}))})}),0===p.length&&(0,f.jsx)("div",{children:"We don't have any reviews for this movie"})]})}},975:function(e,n,t){t.d(n,{Bt:function(){return p},Ml:function(){return i},Tg:function(){return s},Y5:function(){return o},wL:function(){return f}});var r=t(165),a=t(861),u=t(243),c="992758a4802a699e8df27d4d6efc34fb";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day?api_key=".concat(c));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(n));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n,"?api_key=").concat(c,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.0e57d4d8.chunk.js.map