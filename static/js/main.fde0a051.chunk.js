(this.webpackJsonpreleases=this.webpackJsonpreleases||[]).push([[0],{46:function(e,t,i){},47:function(e,t,i){},52:function(e,t,i){"use strict";i.r(t);var n=i(3),a=i(0),c=i.n(a),r=i(7),s=i.n(r),l=(i(46),i(18)),o=(i(47),i(79)),d=i(81),j=i(54),p=i(78),u=i(80),b=i(75),m=i(76),h=i(77),x={media:{display:"flex",flexFlow:"row wrap"},backdrop:{width:"200px",margin:"5px",borderRadius:"5px"},trailer:{width:"200px",margin:"5px",borderRadius:"5px"}};function O(e){var t=c.a.useState(e.item),i=Object(l.a)(t,2),a=i[0],r=(i[1],c.a.useState(!1)),s=Object(l.a)(r,2),o=s[0],j=s[1];return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"thumbnail",onClick:function(){j(!0)},children:[Object(n.jsx)("img",{className:"poster",src:a.poster_path.replace("original","w342")||"/empty_poster.png",alt:a.title||a.original_title}),Object(n.jsx)("div",{className:"mask",children:Object(n.jsxs)("div",{className:"info",children:[Object(n.jsxs)("h3",{children:[a.title||a.original_title," ",a.year&&"("+a.year+")"]}),Object(n.jsx)("small",{children:a.vote_average.toFixed(2)+f(a)}),Object(n.jsx)("br",{}),Object(n.jsx)("small",{children:v(a)}),Object(n.jsx)("br",{})]})})]}),Object(n.jsxs)(u.a,{open:o,onClose:function(){j(!1)},"aria-labelledby":"form-dialog-title",fullWidth:!0,maxWidth:"lg",children:[Object(n.jsxs)(b.a,{id:"form-dialog-title",children:[a.title||a.original_title," ",a.year&&"("+a.year+")"]}),Object(n.jsxs)(m.a,{style:{padding:"10px"},children:[a.original_title+" \u2022 "+a.vote_average.toFixed(2)+" \u2022 "+v(a)+f(a)+" \u2022 ID "+a.id,Object(n.jsx)("br",{}),Object(n.jsxs)("div",{children:[a.backdrop_path&&Object(n.jsx)("img",{style:x.backdrop,src:a.backdrop_path.replace("original","w300"),alt:a.title||a.original_title}),a.videos&&a.videos.results&&a.videos.results.map((function(e){return Object(n.jsx)("iframe",{style:x.trailer,width:"200",height:"113",src:"https://www.youtube.com/embed/"+e.key,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},e.key)}))]}),Object(n.jsx)("p",{children:a.overview}),a.torrent&&a.torrent.map((function(e){return Object(n.jsxs)("small",{children:[e.date.substring(0,10),Object(n.jsxs)("b",{children:[" ",e.name," "]}),Object(n.jsxs)("u",{children:[e.size," "]})," \u21d1 ",e.upload," \u21d3 ",e.download,Object(n.jsx)("br",{})]})}))]}),Object(n.jsx)(h.a,{children:Object(n.jsx)(d.a,{onClick:function(){j(!1)},color:"primary",variant:"outlined",children:"Ok"})})]})]})}function f(e){var t="";return(t=null!=e.production_countries?e.production_countries.map((function(e){return e.iso_3166_1})).join(", "):e.origin_country.join(", "))?" \u2022 "+t:""}function v(e){return e.genres.map((function(e){return"string"!==typeof(t=e.name)?"":t.charAt(0).toUpperCase()+t.slice(1);var t})).join(", ")}function g(){var e=c.a.useState(null),t=Object(l.a)(e,2),i=t[0],r=t[1],s=c.a.useState("/releases/movies.json"),u=Object(l.a)(s,2),b=u[0],m=u[1],h=c.a.useState(""),x=Object(l.a)(h,2),f=(x[0],x[1]);return Object(a.useEffect)((function(){!function(e,t){try{fetch(e,{method:"get",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){t(e,null)}),(function(e){t(null,e)}))}catch(i){console.error(i),t(null,i)}}(b,(function(e,t){e?r(e):f(t)}))}),[b]),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(p.a,{position:"sticky",children:Object(n.jsxs)(o.a,{className:"App-header",children:[Object(n.jsx)(d.a,{className:"App-header-item",variant:"contained",onClick:function(){m("/releases/movies.json")},children:"\u0424\u0438\u043b\u044c\u043c\u044b"}),Object(n.jsx)(d.a,{className:"App-header-item",variant:"contained",onClick:function(){m("/releases/tv.json")},children:"\u0421\u0435\u0440\u0438\u0430\u043b\u044b"}),Object(n.jsx)(d.a,{className:"App-header-item",variant:"contained",onClick:function(){m("/releases/cartoons.json")},children:"\u041c\u0443\u043b\u044c\u0442\u0444\u0438\u043b\u044c\u043c\u044b"}),Object(n.jsx)(d.a,{className:"App-header-item",variant:"contained",onClick:function(){m("/releases/legends.json")},children:"\u041b\u0435\u0433\u0435\u043d\u0434\u044b"}),Object(n.jsx)(j.a,{className:"App-header-item",children:i?"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435: "+i.date+" "+i.time+" "+i.items.size:""})]})}),Object(n.jsx)("div",{className:"App-content",children:i&&i.items.map((function(e){return Object(n.jsx)(O,{className:"App-content-item",item:e},e.id)}))})]})}s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.fde0a051.chunk.js.map