"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{615:function(n,t,e){e.d(t,{Z:function(){return v}});var r,a,u,c=e(689),o=e(168),i=e(706),s=e(87),f=i.Z.ul(r||(r=(0,o.Z)(["\n  list-style-type: none;\n"]))),p=i.Z.li(a||(a=(0,o.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),l=(0,i.Z)(s.rU)(u||(u=(0,o.Z)(["\n  text-decoration: none;\n  color: #191d1e;\n\n  &:hover {\n    color: tomato;\n  }\n"]))),d=e(184),v=function(n){var t=n.films,e=(0,c.TH)();return(0,d.jsx)(f,{children:t.map((function(n){return(0,d.jsx)(p,{children:(0,d.jsx)(l,{to:"/movies/".concat(n.id),state:{from:e},children:n.title})},n.id)}))})}},544:function(n,t,e){e.r(t);var r=e(439),a=e(791),u=e(615),c=e(975),o=e(362),i=e(184);t.default=function(){var n=(0,a.useState)([]),t=(0,r.Z)(n,2),e=t[0],s=t[1],f=(0,a.useState)(!1),p=(0,r.Z)(f,2),l=p[0],d=p[1];return(0,a.useEffect)((function(){d(!0),(0,c.Tg)().then((function(n){s(n)})).catch((function(n){console.log(n)})).finally((function(){d(!1)}))}),[]),(0,i.jsxs)("main",{children:[(0,i.jsx)("h1",{children:"Trending today"}),(0,i.jsx)(u.Z,{films:e}),l&&(0,i.jsx)(o.Z,{})]})}},975:function(n,t,e){e.d(t,{Bt:function(){return p},Ml:function(){return i},Tg:function(){return o},Y5:function(){return s},wL:function(){return f}});var r=e(165),a=e(861),u=e(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="992758a4802a699e8df27d4d6efc34fb",o=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(c));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=544.f2376dca.chunk.js.map