"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{247:function(t,e,n){n.r(e);var r=n(439),a=n(689),u=n(791),c=n(975),i=n(184);e.default=function(){var t=(0,a.UO)().movieId,e=(0,u.useState)([]),n=(0,r.Z)(e,2),s=n[0],o=n[1];return(0,u.useEffect)((function(){(0,c.wL)(t).then((function(t){o(t)}))}),[t]),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:s.length>0?s.map((function(t){var e=t.id,n=t.profile_path,r=t.original_name,a=t.name,u=t.character;return(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{width:"200px",src:n?"https://image.tmdb.org/t/p/w500".concat(n):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:r}),(0,i.jsx)("p",{children:a}),(0,i.jsxs)("p",{children:["Character: ",u]})]},e)})):"Sorry, there isn't any info"})})}},975:function(t,e,n){n.d(e,{Bt:function(){return f},Ml:function(){return s},Tg:function(){return i},Y5:function(){return o},wL:function(){return p}});var r=n(165),a=n(861),u=n(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="992758a4802a699e8df27d4d6efc34fb",i=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day?api_key=".concat(c));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=247.af4ac2db.chunk.js.map