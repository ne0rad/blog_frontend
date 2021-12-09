(this.webpackJsonpblog_frontend=this.webpackJsonpblog_frontend||[]).push([[0],{37:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(27),s=a.n(r),i=(a(37),a(18)),l=a(32),o=a(4),d=a(9),j=a(1);var b=function(){return Object(j.jsx)("div",{className:"text-center mt-3",children:Object(j.jsx)("h1",{children:"About"})})},u=a(6),h=a(10),m=a.n(h);var x=function(){var e=Object(o.h)(),t=Object(n.useState)(),a=Object(u.a)(t,2),c=a[0],r=a[1],s=new m.a({linkify:!0});return Object(n.useEffect)((function(){fetch("https://rocky-falls-75959.herokuapp.com/articles/"+e.id).then((function(e){if(200===e.status)return e.json();throw new Error("Failed to load article.")})).then((function(e){r(e)})).catch((function(e){r(e)}))}),[e.id]),Object(j.jsx)("div",{className:"container mw mt-3",children:c?c instanceof Error?Object(j.jsx)("div",{className:"text-center",children:Object(j.jsx)("h1",{children:c.message})}):Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"text-center",children:[Object(j.jsx)("h1",{children:c.title}),Object(j.jsxs)("p",{children:["By ",c.author]})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{dangerouslySetInnerHTML:{__html:s.render(JSON.parse(c.article))}})]}):Object(j.jsx)("div",{className:"text-center",children:Object(j.jsx)("div",{className:"spinner-border",role:"status",children:Object(j.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})})};var O=function(e){e.Link;var t=Object(n.useState)(),a=Object(u.a)(t,2),c=a[0],r=a[1],s=Object(o.g)();return Object(n.useEffect)((function(){fetch("https://rocky-falls-75959.herokuapp.com/articles").then((function(e){if(e.ok)return e.json();throw new Error("Failed to fetch data.")})).then((function(e){r(e)})).catch((function(e){r(e)}))}),[]),Object(j.jsx)("div",{className:"container-fluid p-3 mw",children:c?c instanceof Error?Object(j.jsx)("h2",{children:c.message}):c.map((function(e,t){return Object(j.jsxs)("div",{className:"card text-left mb-4 shadow",style:{cursor:"pointer"},onClick:function(){return s("/articles/"+e._id)},children:[Object(j.jsx)("div",{className:"card-header",children:e.author}),Object(j.jsx)("div",{className:"card-body",children:Object(j.jsx)("h5",{className:"card-title mt-2 text-center",children:e.title})}),Object(j.jsxs)("div",{className:"card-footer text-muted",children:[new Date(e.date).toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),"\xa0\xa0\xa0",new Date(e.date).toLocaleTimeString()]})]},t)})):Object(j.jsx)("div",{className:"text-center",children:Object(j.jsx)("div",{className:"spinner-border",role:"status",children:Object(j.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})})},p=a(17),v=a.n(p),f=a(28),g=a(31);a(97);var N=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(u.a)(r,2),i=s[0],l=s[1],o=Object(n.useState)(""),d=Object(u.a)(o,2),b=d[0],h=d[1],x=Object(n.useState)(),O=Object(u.a)(x,2),p=O[0],N=O[1],y=Object(n.useState)([]),w=Object(u.a)(y,2),k=w[0],S=w[1],C=new m.a({linkify:!0});function L(){return(L=Object(f.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(T()){e.next=3;break}return N(-1),e.abrupt("return");case 3:return t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({author:i,title:b,text:a})},e.prev=4,e.next=7,fetch("https://rocky-falls-75959.herokuapp.com/post_article",t);case 7:return n=e.sent,e.next=10,n.json();case 10:A(e.sent),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),N(-1);case 17:case"end":return e.stop()}}),e,null,[[4,14]])})))).apply(this,arguments)}function A(e){"success"===e.msg?(N(1),l(""),h(""),c("")):N(-1)}function T(){var e=[];return(i.trim().length<1||i.trim().length>100)&&e.push("author"),(b.trim().length<1||b.trim().length>100)&&e.push("title"),a.trim().length<1&&e.push("editor"),e.length>0?(S(e),!1):(S([]),!0)}return Object(j.jsxs)("div",{className:"mt-3 mw container",children:[Object(j.jsx)("h1",{className:"mb-3",children:"New Article"}),1===p?Object(j.jsxs)("div",{className:"alert alert-success alert-dismissible fade show",role:"alert",children:["Article was posted succesfully!",Object(j.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close",onClick:function(){N(),S([])}})]}):-1===p&&Object(j.jsxs)("div",{className:"alert alert-danger alert-dismissible fade show",role:"alert",children:["Posting article failed!",Object(j.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close",onClick:function(){return N()}})]}),Object(j.jsxs)("div",{className:"d-flex justify-content-between mb-3 text-center wrap",children:[Object(j.jsxs)("div",{className:"wrap me-3",children:[Object(j.jsxs)("div",{className:-1!==k.indexOf("author")&&-1===p?"input-group my-2 mw-sm rounded border border-danger":"input-group my-2 mw-sm",children:[Object(j.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Author:"}),Object(j.jsx)("input",{type:"text",className:"form-control",onChange:function(e){return l(e.target.value)},value:i,maxLength:"100",placeholder:"Author","aria-label":"Author","aria-describedby":"basic-addon1"})]}),Object(j.jsxs)("div",{className:-1!==k.indexOf("title")&&-1===p?"input-group my-2 mw-sm rounded border border-1 border-danger":"input-group my-2 mw-sm",children:[Object(j.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"\xa0\xa0\xa0\xa0Title:"}),Object(j.jsx)("input",{type:"text",className:"form-control",onChange:function(e){return h(e.target.value)},value:b,maxLength:"100",placeholder:"Title","aria-label":"Title"})]})]}),Object(j.jsx)("div",{className:"ms-3",children:Object(j.jsx)("button",{onClick:function(){return function(){return L.apply(this,arguments)}()},className:"btn btn-primary inline-flex my-2",children:"Submit"})})]}),Object(j.jsx)(g.a,{className:-1!==k.indexOf("editor")&&-1===p?"border border-danger":"rounded",value:a,style:{height:"60vh"},renderHTML:function(e){return C.render(e)},onChange:function(e){e.html;var t=e.text;c(t)}}),Object(j.jsx)("div",{className:"mb-3"})]})};var y=function(){return Object(j.jsx)("div",{className:"container py-5 text-center",children:Object(j.jsx)("h1",{children:"Page Not Found"})})},w=["children","to"];var k=function(){function e(e){var t=e.children,a=e.to,n=Object(l.a)(e,w),c=Object(o.i)(a),r=Object(o.f)({path:c.pathname,end:!0});return Object(j.jsx)("div",{children:Object(j.jsx)(d.b,Object(i.a)(Object(i.a)({style:r&&{color:"white"},to:a},n),{},{children:t}))})}return Object(j.jsx)(d.a,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("nav",{className:"navbar navbar-expand-md navbar-dark bg-primary bg-gradient shadow",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)(d.b,{className:"navbar-brand",to:"/",children:"Blog App"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(j.jsxs)("ul",{className:"navbar-nav me-auto",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(e,{className:"nav-link",to:"/",children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(e,{className:"nav-link",to:"/new",children:"New Article"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(e,{className:"nav-link",to:"/about",children:"About"})})]})})]})}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/",element:Object(j.jsx)(O,{Link:d.b})}),Object(j.jsx)(o.a,{path:"/new",element:Object(j.jsx)(N,{})}),Object(j.jsx)(o.a,{path:"/about",element:Object(j.jsx)(b,{})}),Object(j.jsx)(o.a,{path:"/articles/:id",element:Object(j.jsx)(x,{})}),Object(j.jsx)(o.a,{path:"*",element:Object(j.jsx)(y,{})})]})]})})};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.a2004027.chunk.js.map