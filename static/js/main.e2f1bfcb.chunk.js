(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],[,,function(e,t,n){e.exports={container:"videoItem_container__bCbh-",grid:"videoItem_grid__8mnRn",list:"videoItem_list__3l7rM",video:"videoItem_video__3NSHZ",thumbnail:"videoItem_thumbnail__CwqrE",metadata:"videoItem_metadata__2AZbr",title:"videoItem_title__EYQmn",channel:"videoItem_channel__127Kv"}},function(e,t,n){e.exports={header:"searchHeader_header__1wA1_",logo:"searchHeader_logo__rgmrv",input:"searchHeader_input__3wbTC",button:"searchHeader_button__1PFw2",buttonImg:"searchHeader_buttonImg__r8eoZ"}},function(e,t,n){e.exports={app:"app_app__3X3Om",content:"app_content__1rFM1",detail:"app_detail__2W_fU",list:"app_list__1sT_N"}},,function(e,t,n){e.exports={detail:"videoDetail_detail__1cZ1t",description:"videoDetail_description__2K3ud"}},,,,function(e,t,n){e.exports={videos:"videoList_videos__80JkV"}},,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),a=n(9),s=n.n(a),o=(n(17),n(7)),r=n(2),l=n.n(r),u=n(0),d=Object(i.memo)((function(e){var t=e.video,n=e.video.snippet,i=e.onVideoClick,c="list"===e.display?l.a.list:l.a.grid;return Object(u.jsx)("li",{className:"".concat(l.a.container," ").concat(c),onClick:function(){return i(t)},children:Object(u.jsxs)("div",{className:l.a.video,children:[Object(u.jsx)("img",{className:l.a.thumbnail,src:n.thumbnails.medium.url,alt:"video thumbnail"}),Object(u.jsxs)("div",{className:l.a.metadata,children:[Object(u.jsx)("p",{className:l.a.title,children:n.title}),Object(u.jsx)("p",{className:l.a.channel,children:n.channelTitle})]})]})})})),h=n(10),m=n.n(h),j=function(e){var t=e.videos,n=e.onVideoClick,i=e.display;return Object(u.jsx)("ul",{className:m.a.videos,children:t.map((function(e){return Object(u.jsx)(d,{video:e,onVideoClick:n,display:i},e.id)}))})},b=n(3),p=n.n(b),_=Object(i.memo)((function(e){var t=e.onSearch,n=Object(i.useRef)(),c=function(){var e=n.current.value;t(e)};return console.log("test"),Object(u.jsxs)("header",{className:p.a.header,children:[Object(u.jsxs)("div",{className:p.a.logo,children:[Object(u.jsx)("img",{className:p.a.img,src:"/images/logo.png",alt:"logo"}),Object(u.jsx)("h1",{className:p.a.title,children:"Youtube"})]}),Object(u.jsx)("input",{className:p.a.input,type:"search",placeholder:"Search...",onKeyPress:function(e){"Enter"===e.key&&c()},ref:n}),Object(u.jsx)("button",{className:p.a.button,type:"submit",onClick:function(){c()},children:Object(u.jsx)("img",{className:p.a.buttonImg,src:"/images/search.png",alt:"search"})})]})})),v=n(4),O=n.n(v),f=n(6),x=n.n(f),g=function(e){var t=e.video,n=e.video.snippet;return Object(u.jsxs)("section",{className:x.a.detail,children:[Object(u.jsx)("iframe",{type:"text/html",width:"100%",height:"500px",src:"https://www.youtube.com/embed/".concat(t.id),frameBorder:"0",allowFullScreen:!0}),Object(u.jsx)("h2",{children:n.title}),Object(u.jsx)("h3",{children:n.channelTitle}),Object(u.jsx)("pre",{className:x.a.description,children:n.description})]})};var y=function(e){var t=e.youtube,n=Object(i.useState)([]),c=Object(o.a)(n,2),a=c[0],s=c[1],r=Object(i.useState)(null),l=Object(o.a)(r,2),d=l[0],h=l[1],m=Object(i.useCallback)((function(e){t.search(e).then((function(e){s(e),h(null)}))}),[t]);return Object(i.useEffect)((function(){t.mostPopular().then((function(e){return s(e)}))}),[]),Object(u.jsxs)("div",{className:O.a.app,children:[Object(u.jsx)(_,{onSearch:m}),Object(u.jsxs)("section",{className:O.a.content,children:[d&&Object(u.jsx)("div",{className:O.a.detail,children:Object(u.jsx)(g,{video:d})}),Object(u.jsx)("div",{className:O.a.list,children:Object(u.jsx)(j,{videos:a,onVideoClick:function(e){h(e)},display:d?"list":"grid"})})]})]})},N=n(8),k=n(11),w=n(12),I=new(function(){function e(t){Object(k.a)(this,e),this.key=t,this.requestOptions={method:"GET",redirect:"follow"}}return Object(w.a)(e,[{key:"search",value:function(e){return fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=".concat(e,"&type=video&key=").concat(this.key),this.requestOptions).then((function(e){return e.json()})).then((function(e){return e.items.map((function(e){return Object(N.a)(Object(N.a)({},e),{},{id:e.id.videoId})}))}))}},{key:"mostPopular",value:function(){return fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=".concat(this.key),this.requestOptions).then((function(e){return e.json()})).then((function(e){return e.items}))}}]),e}())("AIzaSyA3Kvbuuk1SRy7seZ2egvHwkm-eU1BXvFY");s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(y,{youtube:I})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.e2f1bfcb.chunk.js.map