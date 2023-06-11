"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[257],{257:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var r,a,i=t(439),c=t(791),s=t(689),u=t(87),o=t(975),l=t(362),p=t(168),d=t(706),f=d.Z.div(r||(r=(0,p.Z)(["\n  display: flex;\n  margin: 24px;\n  gap: 24px;\n"]))),h=d.Z.ul(a||(a=(0,p.Z)(["\n  display: inline-flex;\n  gap: 12px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"]))),v=t(184),x=function(){var n,e,t=(0,s.UO)().movieId,r=(0,c.useState)(null),a=(0,i.Z)(r,2),p=a[0],d=a[1],x=(0,c.useState)(!1),g=(0,i.Z)(x,2),m=g[0],Z=g[1],j=(0,s.TH)();(0,c.useEffect)((function(){Z(!0),(0,o.Y5)(t).then((function(n){d(n)})).catch((function(n){console.log(n)})).finally((function(){Z(!1)}))}),[t]);var w=p||{},_=w.title,y=w.release_date,k=w.popularity,b=w.overview,U=w.genres,S=w.poster_path,C=w.original_title;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(u.rU,{to:null!==(n=null===(e=j.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:(0,v.jsx)("button",{type:"button",children:"Go back"})}),m&&(0,v.jsx)(l.Z,{}),p&&(0,v.jsxs)(f,{children:[(0,v.jsx)("img",{width:"300px",src:S?"https://image.tmdb.org/t/p/w500".concat(S):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:C}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("h1",{children:[_," (",y.slice(0,4),")"]}),(0,v.jsxs)("p",{children:["User score: ",k]}),(0,v.jsx)("h2",{children:"Overview"}),(0,v.jsx)("p",{children:b}),(0,v.jsx)("h2",{children:"Genres"}),(0,v.jsx)(h,{children:U.map((function(n){return(0,v.jsx)("li",{children:n.name},n.id)}))})]})]}),(0,v.jsx)("hr",{}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h3",{children:"Additional information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(u.rU,{to:"cast",children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(u.rU,{to:"reviews",children:"Reviews"})})]}),(0,v.jsx)("hr",{}),(0,v.jsx)(s.j3,{})]})]})}},975:function(n,e,t){t.d(e,{Bt:function(){return p},Ml:function(){return u},Tg:function(){return s},Y5:function(){return o},wL:function(){return l}});var r=t(165),a=t(861),i=t(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="992758a4802a699e8df27d4d6efc34fb",s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=257.0e110695.chunk.js.map