"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{1247:function(t,e,n){n.r(e);var r=n(4165),a=n(5861),c=n(9439),u=n(7689),i=n(2791),s=n(5975),o=n(1454),p=n(184);e.default=function(){var t=(0,u.UO)().movieId,e=(0,i.useState)([]),n=(0,c.Z)(e,2),f=n[0],l=n[1],d=(0,i.useState)(!1),v=(0,c.Z)(d,2),h=v[0],g=v[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.prev=1,e.next=4,(0,s.wL)(t);case 4:n=e.sent,l(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:return e.prev=11,g(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,p.jsxs)("div",{children:[h&&(0,p.jsx)(o.Z,{}),(0,p.jsx)("ul",{children:f.map((function(t){var e=t.id,n=t.profile_path,r=t.original_name,a=t.name,c=t.character;return(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{width:"200px",src:n?"https://image.tmdb.org/t/p/w500".concat(n):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:r}),(0,p.jsx)("p",{children:a}),(0,p.jsxs)("p",{children:["Character: ",c]})]},e)}))})]})}},1454:function(t,e,n){n.d(e,{Z:function(){return s}});var r,a=n(8966),c=n(168),u=n(5706).Z.div(r||(r=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),i=n(184),s=function(){return(0,i.jsx)(u,{children:(0,i.jsx)(a.W0,{height:"100",width:"100",color:"tomato",ariaLabel:"loading"})})}},5975:function(t,e,n){n.d(e,{Bt:function(){return f},Ml:function(){return s},Tg:function(){return i},Y5:function(){return o},wL:function(){return p}});var r=n(4165),a=n(5861),c=n(1243),u="992758a4802a699e8df27d4d6efc34fb";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/movie/day?api_key=".concat(u));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?api_key=".concat(u,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=247.84929eae.chunk.js.map