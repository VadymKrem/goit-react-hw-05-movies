"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[602],{672:function(t,n,r){r.d(n,{Z:function(){return v}});var e,a,u=r(689),c=r(87),i=r(168),s=r(686),o=s.Z.ul(e||(e=(0,i.Z)([""]))),f=s.Z.li(a||(a=(0,i.Z)([""]))),p=r(184),v=function(t){var n=t.movies,r=(0,u.TH)();return(0,p.jsx)(o,{children:n.map((function(t){var n=t.id,e=t.title;return(0,p.jsx)(f,{children:(0,p.jsx)(c.rU,{to:"/movies/".concat(n),state:{from:r},children:e})},n)}))})}},602:function(t,n,r){r.r(n),r.d(n,{Movies:function(){return m},default:function(){return x}});var e,a,u=r(439),c=r(791),i=r(168),s=r(686),o=s.Z.input(e||(e=(0,i.Z)(["\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 27px;\n\n  padding: 15px 16px;\n\n  color: rgba(255, 255, 255, 0.2);\n\n  background: #2b2b2b;\n  border-radius: 10px;\n"]))),f=s.Z.button(a||(a=(0,i.Z)([""]))),p=r(184),v=function(t){var n=t.params,r=(0,c.useState)(""),e=(0,u.Z)(r,2),a=e[0],i=e[1];return(0,p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),a?n({query:a}):alert("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0444\u0456\u043b\u044c\u043c\u0443")},children:[(0,p.jsx)(o,{type:"text",placeholder:"Title movie",value:a,onChange:function(t){var n=t.target.value;i(n)}}),(0,p.jsx)(f,{type:"submit",children:"Search"})]})},l=r(672),d=r(87),h=r(248),m=function(){var t=(0,d.lr)(),n=(0,u.Z)(t,2),r=n[0],e=n[1],a=(0,c.useState)([]),i=(0,u.Z)(a,2),s=i[0],o=i[1];return(0,c.useEffect)((function(){var t=r.get("query");t&&(0,h.Ph)(t).then(o)}),[r]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(v,{params:e}),(0,p.jsx)(l.Z,{movies:s})]})},x=m},248:function(t,n,r){r.d(n,{Ph:function(){return s},TP:function(){return o},Xk:function(){return i},tx:function(){return p},zv:function(){return f}});var e=r(861),a=r(687),u=r.n(a),c=r(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={language:"en-US",api_key:"a6164a42f44684b25b63c2b30ed1c2c2",include_adult:!1,page:1};var i=function(){var t=(0,e.Z)(u().mark((function t(){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/movie/day");case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?query=".concat(n));case 2:return r=t.sent,e=r.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n,"/credits"));case 2:return r=t.sent,e=r.data,t.abrupt("return",e.cast);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n,"/reviews"));case 2:return r=t.sent,e=r.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=602.9695656d.chunk.js.map