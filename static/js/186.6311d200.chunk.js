"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{1454:function(n,e,t){t.d(e,{Z:function(){return s}});var r,a=t(8966),u=t(168),c=t(5706).Z.div(r||(r=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),i=t(184),s=function(){return(0,i.jsx)(c,{children:(0,i.jsx)(a.W0,{height:"100",width:"100",color:"tomato",ariaLabel:"loading"})})}},186:function(n,e,t){t.r(e);var r=t(4165),a=t(5861),u=t(9439),c=t(7689),i=t(2791),s=t(5975),o=t(1454),f=t(184);e.default=function(){var n=(0,c.UO)().movieId,e=(0,i.useState)([]),t=(0,u.Z)(e,2),p=t[0],l=t[1],v=(0,i.useState)(!1),d=(0,u.Z)(v,2),h=d[0],Z=d[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z(!0),e.prev=1,e.next=4,(0,s.Bt)(n);case 4:t=e.sent,l(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:return e.prev=11,Z(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,f.jsxs)(f.Fragment,{children:[h&&(0,f.jsx)(o.Z,{}),0!==p.length&&(0,f.jsx)("div",{children:(0,f.jsx)("ul",{children:p.map((function(n){return(0,f.jsxs)("li",{children:[(0,f.jsxs)("h2",{children:["Author: ",n.author]}),(0,f.jsx)("p",{children:n.content})]},n.id)}))})}),0===p.length&&(0,f.jsx)("div",{children:"We don't have any reviews for this movie"})]})}},5975:function(n,e,t){t.d(e,{Bt:function(){return p},Ml:function(){return s},Tg:function(){return i},Y5:function(){return o},wL:function(){return f}});var r=t(4165),a=t(5861),u=t(1243),c="992758a4802a699e8df27d4d6efc34fb";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.6311d200.chunk.js.map