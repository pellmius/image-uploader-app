(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{32:function(e,t,c){},51:function(e,t,c){},58:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),i=c(24),s=c.n(i),r=(c(32),c(10)),j=c(25),l=c.n(j),o=(c(51),c(1)),b=function(){var e=Object(a.useState)("No file chosen"),t=Object(r.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(""),s=Object(r.a)(i,2),j=s[0],b=s[1],d=Object(a.useState)(""),u=Object(r.a)(d,2),h=u[0],p=u[1],O=Object(a.useState)(""),m=Object(r.a)(O,2),x=m[0],f=m[1];return Object(o.jsxs)("div",{className:"home-div",encType:"multipart/form-data",children:[Object(o.jsx)("h1",{style:{fontWeight:"300"},children:"PellmUploader"}),Object(o.jsx)("p",{children:"Image uploader service for my (Guilherme Almeida) backend development portfolio."}),Object(o.jsxs)("div",{className:"inside-div",children:[Object(o.jsx)("input",{onChange:function(e){return f(e.target.value)},className:"libraryInput",type:"text",placeholder:"Library"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=new FormData,c=e.target[0].files[0];t.append("library",x),t.append("photo",c),l.a.post("/api/uploads/upload",t).then((function(e){e.data.success&&(console.log(e.data.filename),p("/api/uploads/image/".concat(x,"/").concat(e.data.filename)),b("File uploaded at"))})).catch((function(e){b("".concat(e.request.status," ").concat(e.request.statusText))}))},onChange:function(e){var t=e.target.files[0].name||"No file chosen";n(t)},children:[Object(o.jsx)("input",{type:"file",accept:"image/*",id:"myFile",name:"filename",hidden:!0}),Object(o.jsx)("label",{htmlFor:"myFile",children:"Choose file"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{id:"file-chosen",children:c}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"submit",id:"submit"})]}),Object(o.jsxs)("h2",{children:[j," ",Object(o.jsx)("a",{href:h,children:h})]})]})]})},d=c(26),u=c(2),h=function(){return Object(o.jsx)(d.a,{children:Object(o.jsxs)(u.c,{children:[Object(o.jsx)(u.a,{exact:!0,path:"/home",children:Object(o.jsx)(b,{})}),Object(o.jsx)(u.a,{path:"/",children:Object(o.jsx)(b,{})})]})})};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.ae43750d.chunk.js.map