(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),i=a.n(c),o=(a(51),a(52),a(1)),l=a(7),u=a(5);function s(){return r.a.createElement("div",{className:"loading-spinner"},"loading...")}var m=a(6);a(25),a(57);var d=a(2),v=a.n(d),p=a(8),f=a(17),b=a.n(f),g=function(){return{type:"LOGIN_LOADING"}},E=function(e){return{type:"LOGIN_SUCCEEDED",payload:e}};function h(e){var t=e.image;return r.a.createElement("div",{className:"hero-image-wrap"},r.a.createElement("img",{className:"hero-image",src:t,alt:""}))}a(39);function O(e){var t=e.text,a=e.onClick,n=e.buttonType,c=void 0===n?"primary":n;return r.a.createElement("button",{className:"button button-".concat(c),onClick:a},t)}a(77);function j(e){var t=e.value,a=e.onChange,n=e.placeholder,c=e.icon,i=e.type,o=void 0===i?"text":i;return r.a.createElement("div",{className:"input-wrap"},c&&r.a.createElement("div",{className:"input-icon"},c),r.a.createElement("input",{type:o,className:"input",onChange:a,placeholder:n,value:t}))}function y(e){var t=e.email,a=e.password,n=e.onEmailChange,c=e.onPasswordChange,i=e.onLoginClick,o=e.onDemoClick;return r.a.createElement("div",{className:"loginWrapper"},r.a.createElement("div",{className:"login-container"},r.a.createElement(j,{value:t,onChange:n,placeholder:"Email"}),r.a.createElement(j,{value:a,onChange:c,placeholder:"Password"}),r.a.createElement(O,{onClick:i,text:"Login"}),r.a.createElement(O,{onClick:o,text:"Demo"})))}a(78);var N=Object(o.b)((function(e){return{authenticated:e.user.authenticated}}),(function(e){return{login:function(t,a){return e(function(e,t){return function(){var a=Object(p.a)(v.a.mark((function a(n){var r;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(g),a.prev=1,console.log(e,t),a.next=5,b.a.post("/api/session",{email:e,password:t});case 5:r=a.sent,console.log(r),n(E(r.data)),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),n({type:"LOGIN_FAILED"});case 13:case"end":return a.stop()}}),a,null,[[1,10]])})));return function(e){return a.apply(this,arguments)}}()}(t,a))}}}))((function(e){var t=e.login,a=e.authenticated,c=Object(n.useState)(""),i=Object(m.a)(c,2),o=i[0],l=i[1],s=Object(n.useState)(""),d=Object(m.a)(s,2),v=d[0],p=d[1],f=Object(u.g)();Object(n.useEffect)((function(){a&&b()}),[a]);var b=function(){};return r.a.createElement("div",{className:"login-page"},r.a.createElement(h,{image:""}),r.a.createElement(y,{onPasswordChange:function(e){return function(e){p(e.target.value)}(e)},onEmailChange:function(e){return function(e){l(e.target.value)}(e)},onDemoClick:function(){t("demo@demo.com","password").then((function(e){return f.push("/")}))},onLoginClick:function(){t(o.toLocaleLowerCase(),v)},email:o,password:v}))}));var _=a(17),x=function(e){return{type:"/videos/single",video:e}},k=function(){return function(){var e=Object(p.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"videos/loading"}),e.next=3,_.get("/api/videos/");case 3:return a=e.sent,console.log(a),a.statusText&&t({type:"videos/all",videos:a.data.videos}),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(p.a)(v.a.mark((function t(a){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.get("/api/videos/single?id=".concat(e));case 2:return(n=t.sent).statusText&&a(x(n.data.video)),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=a(17),L=function(e){return function(){var t=Object(p.a)(v.a.mark((function t(a){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.get("/api/categories/search_by_category?category=".concat(e));case 2:return(n=t.sent).statusText&&a({type:"/get_by_category",videos:n.data.videos}),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};a(40);function D(e){var t=Object(u.g)(),a=e.video;return r.a.createElement("div",{key:a.id,className:"body__list"},r.a.createElement("img",{className:"body__img",id:a.id,onClick:function(e){e.preventDefault();var a=e.target.id.trim();t.push("/video/".concat(a))},src:a.thumbnail,alt:"Featured Project"}),r.a.createElement("p",{id:"bodyTitle"},a.title),r.a.createElement("p",{id:"bodyDes"},a.description),r.a.createElement("p",{id:"bodyBy"},"By ",a.username))}function S(e){var t=Object(u.g)(),a=e.videos;function n(e){e.preventDefault();var a=e.target.id.trim();t.push("/video/".concat(a))}return r.a.createElement("div",{className:"homeHeader"},r.a.createElement("div",{className:"homeHeader__leftside"},r.a.createElement("p",{id:"featuredLabel"},"FEATURED PROJECT"),r.a.createElement("img",{className:"homeHeader__imgLg",id:a[0].id,onClick:n,src:a[0].thumbnail,alt:"Featured Video"}),r.a.createElement("div",{id:"homePageProgess"},r.a.createElement("div",{id:"progress-container"})),r.a.createElement("p",{id:"featuredTitle"},a[0].title),r.a.createElement("p",{id:"featuredDes"},a[0].description),r.a.createElement("p",{id:"featuredBy"},"By ",a[0].user_id)),r.a.createElement("div",{className:"homeHeader__rightside"},r.a.createElement("p",{id:"featuredLabel"},"RECOMMENDED FOR YOU"),r.a.createElement("div",{id:"topSmallBox",className:"homeHeader__smallBoxes"},r.a.createElement("img",{className:"homeHeader__imgSmall",id:a[1].id,onClick:n,src:a[1].thumbnail,alt:"Recommended Video 1"}),r.a.createElement("div",null,r.a.createElement("p",{className:"homeHeader__tittle"},a[1].title),r.a.createElement("p",{className:"homeHeader__madeBy"},"By ",a[1].user_id))),r.a.createElement("div",{className:"homeHeader__smallBoxes"},r.a.createElement("img",{className:"homeHeader__imgSmall",id:a[2].id,onClick:n,src:a[2].thumbnail,alt:"Recommended Video 2"}),r.a.createElement("div",null,r.a.createElement("p",{className:"homeHeader__tittle"},a[2].title),r.a.createElement("p",{className:"homeHeader__madeBy"},"By ",a[2].user_id))),r.a.createElement("div",{className:"homeHeader__smallBoxes"},r.a.createElement("img",{className:"homeHeader__imgSmall",id:a[3].id,onClick:n,src:a[3].thumbnail,alt:"Recommended Video 3"}),r.a.createElement("div",null,r.a.createElement("p",{className:"homeHeader__tittle"},a[3].title),r.a.createElement("p",{className:"homeHeader__madeBy"},"By ",a[3].user_id)))))}function T(){var e=Object(o.c)(),t=Object(u.g)(),a=Object(n.useState)(null),c=Object(m.a)(a,2),i=c[0],l=c[1];Object(o.d)((function(e){return e.auth}));function s(a){a.preventDefault();var n=a.target.innerHTML.trim();e(L(n)),t.push("/category/".concat(n))}Object(n.useEffect)((function(){e(k()),e(function(){var e=Object(p.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.get("/api/categories/");case 2:return(a=e.sent).statusText&&t({type:"/categories/all",categories:a.data.categories}),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(p.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.get("/api/videos/search_by_featured");case 2:return(a=e.sent).statusText&&t({type:"videos/get_featured",videos:a.data.videos}),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]);var d=Object(o.d)((function(e){return e.videos.featuredVideos})),f=Object(o.d)((function(e){return e.categories.categories})),b=(Object(o.d)((function(e){return e.auth})),Object(o.d)((function(e){return e.videos.videos}))),g=Object(o.d)((function(e){return e.videos.videos}));return d&&f&&b&&g?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"homeBody"},r.a.createElement("div",{className:"bodyBox"},r.a.createElement("div",{className:"subbarWrapper"},r.a.createElement("div",{className:"subbar__categories"},r.a.createElement("label",null,"Single Upload",r.a.createElement("input",{type:"file",onChange:function(e){l({preview:URL.createObjectURL(e.target.files[0]),raw:e.target.files[0]})}})),r.a.createElement("button",{onClick:function(){e(function(e,t,a,n,r,c,i){var o=new FormData;o.append("title",e),o.append("description",t),o.append("link",a),o.append("thumbnail",n),o.append("id",r),o.append("category_id",c),o.append("file",i.raw);var l={headers:{"Content-Type":"multipart/form-data"}};return function(){var e=Object(p.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.post("/api/videos/",o,l);case 2:return(a=e.sent).statusText&&t(x(a.data.video)),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}("abc","def","ghi","jkl",555,1,i))}},"Create Video"),f.map((function(e,t){var a="/category/".concat(e.title);return r.a.createElement("div",{key:t},r.a.createElement("a",{href:a,key:t,onClick:s,className:"subbar__categoriesList"}," ",e.title))})))),r.a.createElement(S,{videos:d}),r.a.createElement("div",{id:"listLabel"},"Squats"),r.a.createElement("div",{className:"body"},b.map((function(e){return r.a.createElement(D,{video:e})}))),r.a.createElement("div",{id:"listLabel"},"Bench"),r.a.createElement("div",{className:"body"},g.map((function(e){return r.a.createElement(D,{video:e})})))))):null}function I(){var e=Object(o.c)(),t=(Object(u.g)(),Object(u.h)().category);Object(n.useEffect)((function(){e(L(t))}),[e]);var a=Object(o.d)((function(e){return e.categories.videos}));return a?(console.log(a),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Category Page"))):null}var B=Object(o.b)((function(e){return{authenticated:e.user.authenticated}}))((function(e){return e.authenticated?r.a.createElement(r.a.Fragment,null):r.a.createElement(u.a,{to:"/"})}));function H(){var e=Object(o.c)(),t=(Object(u.g)(),Object(u.h)().id);console.log(t),Object(n.useEffect)((function(){e(function(){var e=Object(p.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.get("/api/videos/by_owner");case 2:return(a=e.sent).statusText&&t({type:"videos/owner",videos:a.data.videos}),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]);var a=Object(o.d)((function(e){return e.videos}));return console.log(a),a?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"User Page")):null}var F=a(17),P=function(e){return function(){var t=Object(p.a)(v.a.mark((function t(a){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F.get("/api/comments?id=".concat(e));case 2:return(n=t.sent).statusText&&a({type:"/comments/all",comments:n.data.comments}),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},M=a(26),R=a.n(M);a(96);function U(e){var t=e.active,a=e.comment,n=e.timestamp;return r.a.createElement("div",{style:t?{opacity:1}:{opacity:.2},className:"video-comment"},n,a)}function V(){var e=Object(n.useRef)(null),t=Object(n.useState)(!0),a=Object(m.a)(t,2),c=a[0],i=a[1],l=Object(n.useState)([]),s=Object(m.a)(l,2),d=s[0],v=s[1],p=Object(n.useState)(0),f=Object(m.a)(p,2),b=f[0],g=f[1],E=Object(o.c)(),h=Object(u.h)().id,O=Object(n.useRef)(!0),j=Object(o.d)((function(e){return e.videos.video})),y=Object(o.d)((function(e){return e.comments.comments}));Object(n.useEffect)((function(){E(w(h)),E(P(h)).then((function(e){return console.log(e)}))}),[]);var N=function(e){for(var t=[],a=0;a<y.length;a++)console.log(parseInt(y[a].timestamp)),parseInt(y[a].timestamp)===e&&t.push(y[a].id);v(t)};return Object(n.useEffect)((function(){O.current&&(O.current=!1)}),[]),y&&j?(console.log(d),r.a.createElement("div",null,r.a.createElement(R.a,{progressInterval:1e3,onPlay:function(){i(!0),v([])},onEnded:function(){v([])},playing:c,ref:e,url:j.link,controls:!0,loop:!1,playsinline:!0,onProgress:function(e){return function(e){var t=Math.floor(e.playedSeconds);if(t!==b){g(t);for(var a=0;a<y.length;a++)if(parseInt(y[a].timestamp)===t)return i(!1),N(t)}}(e)},onPause:function(){e&&e.current&&e.current.getCurrentTime()}}),y.map((function(e){var t=e.text,a=e.timestamp,n=e.id;return r.a.createElement("div",null,r.a.createElement(U,{active:d.includes(n),comment:t,timestamp:a}))})))):r.a.createElement("div",null,"loading")}a(97);var A=a(22);function G(e){var t=e.hovered,a=e.background,n=e.text,c=e.onMouseEnter,i=e.onMouseLeave,o=e.link;return r.a.createElement("div",{onMouseEnter:c,onMouseLeave:i,className:"video-thumbnail"},r.a.createElement(l.b,{to:o},r.a.createElement("img",{className:"video-thumbnail-img",src:a,alt:""}),t&&r.a.createElement("div",{className:"video-thumbnail-popup-play"},r.a.createElement("div",null,r.a.createElement(A.b,{className:"video-thumbnail-popup-play-icon"})),r.a.createElement("div",{className:"video-thumbnail-popup-play-title"},"PLAY")),r.a.createElement("div",{className:"video-thumbnail-text"},n)))}function J(e){var t=e.video,a=t.thumbnail,c=t.description,i=t.link,o=Object(n.useState)(!1),l=Object(m.a)(o,2),u=l[0],s=l[1];return r.a.createElement(G,{hovered:u,onMouseLeave:function(){s(!1)},onMouseEnter:function(){s(!0)},link:i,text:c,background:a})}function W(e){var t=e.text,a=e.onClick;return r.a.createElement("div",{className:"button-long-border"},r.a.createElement("div",{className:"button-border button-border-left"}),r.a.createElement("button",{className:"button-long-border-button-wrap",onClick:a},t,r.a.createElement(A.a,{className:"button-long-border-icon"})),r.a.createElement("div",{className:"button-border button-border-right"}))}a(98);function Y(e){var t=e.videos,a=e.onViewMoreClick,n=e.sectionTitle;return r.a.createElement("div",{className:"video-section"},r.a.createElement("div",{className:"video-section-title"},n),r.a.createElement("div",{className:"video-section-videos"},t.map((function(e){return r.a.createElement(J,{video:e})}))),r.a.createElement("div",{className:"video-section-view-more"},r.a.createElement(W,{text:"View more",onClick:a})))}function q(){var e=Object(o.c)(),t=Object(o.d)((function(e){return e.videos})),a=t.videos,c=t.loading;return Object(n.useEffect)((function(){e(k())}),[]),c?r.a.createElement("div",null,"Loading"):r.a.createElement("div",null,r.a.createElement(Y,{sectionTitle:"Recent videos",videos:a}))}a(99);function z(e){var t=e.children;return r.a.createElement("div",{className:"container"},t)}function K(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null,r.a.createElement(u.b,{exact:!0,path:"/",component:T}),r.a.createElement(u.b,{exact:!0,path:"/dashboard/guest",component:q}),r.a.createElement(u.b,{exact:!0,path:"/login",component:N}),r.a.createElement(u.b,{exact:!0,path:"/user/:id",component:H}),r.a.createElement(u.b,{exact:!0,path:"/video/:id",component:V}),r.a.createElement(u.b,{exact:!0,path:"/category/:category",component:I})))}var Q=Object(o.b)((function(e){return{userLoading:e.user.loading,userAuthenticated:e.user.authenticated}}),(function(e){return{authenticateUser:function(){return e(function(){var e=Object(p.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(g),e.prev=1,e.next=4,b.a.post("/api/session");case 4:a=e.sent,t(E(a.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"LOGIN_FAILED"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){e.authenticateUser;var t=e.userLoading;return e.userAuthenticated,t?r.a.createElement(s,null):r.a.createElement(l.a,null,r.a.createElement(u.d,null,r.a.createElement(K,null),r.a.createElement(B,null)))})),X=a(18),Z=a(45),$=a(3),ee={name:null,id:null,error:!1,loading:!1,authenticated:!1},te={videos:[],loading:!0};a(100);var ae,ne=Object(X.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_LOADING":return Object($.a)(Object($.a)({},e),{},{loading:!0});case"LOGIN_FAILED":return Object($.a)(Object($.a)({},e),{},{loading:!1,error:!0});case"LOGIN_SUCCEEDED":return Object($.a)(Object($.a)({},e),{},{loading:!1,error:!1,authenticated:!0,user:t.user.username,id:t.user.id});default:return Object($.a)({},e)}},videos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"videos/all":return Object($.a)(Object($.a)({},e),{},{videos:t.videos.slice(0,4),loading:!1});case"/videos/single":return Object($.a)(Object($.a)({},e),{},{video:t.video});case"videos/owner":return Object($.a)(Object($.a)({},e),{},{ownedVidoes:t.videos});case"videos/get_featured":return Object($.a)(Object($.a)({},e),{},{featuredVideos:t.videos});case"videos/loading":return Object($.a)(Object($.a)({},e),{},{loading:!0});default:return e}},categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"/categories/all":return Object($.a)(Object($.a)({},e),{},{categories:t.categories});case"/get_by_category":return Object($.a)(Object($.a)({},e),{},{videos:t.videos});default:return e}},comments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"/comments/add_comment":return Object($.a)(Object($.a)({},e),{},{comment:t.comment});case"/comments/all":return Object($.a)(Object($.a)({},e),{},{comments:t.comments.sort((function(e,t){return e.timestamp-t.timestamp}))});default:return e}}});ae=Object(X.a)(Z.a);a(101);function re(e){var t=e.onSignUpClick,a=e.onSignInClick;return r.a.createElement("nav",{className:"navbar"},r.a.createElement(z,null,r.a.createElement("div",null,r.a.createElement("img",{className:"navbar-logo",src:"https://getcardify.com/assets/img/logos/icon/Icon_mono_positive.png",alt:""})),r.a.createElement("ul",{className:"navbar-items-list"},r.a.createElement("li",{className:"navbar-list-item"},r.a.createElement("a",{className:"navbar-list-link",href:""},"Videos")),r.a.createElement("li",{className:"navbar-list-item"},r.a.createElement(O,{buttonType:"primary",text:"Sign up",onClick:t})),r.a.createElement("li",{className:"navbar-list-item"},r.a.createElement(O,{buttonType:"outline",text:"Sign in",onClick:a})))))}function ce(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(re,null),t)}var ie,oe=Object(X.d)(ne,ie,ae);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:oe},r.a.createElement(ce,null,r.a.createElement(Q,null)))),document.getElementById("root"))},25:function(e,t){},39:function(e,t,a){},40:function(e,t,a){},46:function(e,t,a){e.exports=a(102)},51:function(e,t,a){},52:function(e,t,a){},57:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[46,1,2]]]);
//# sourceMappingURL=main.596709b1.chunk.js.map