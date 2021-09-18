(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[73],{603:function(e,t,n){"use strict";var a=n(11);n(5);t.a=function(e){return e.loading?Object(a.jsx)("span",{className:"spinner-border spinner-border-sm"}):e.iconClass?Object(a.jsx)("i",{className:e.iconClass}):null}},605:function(e,t,n){"use strict";var a=n(127);function c(){var e=Object(a.a)(["\n  margin-top: 16px;\n  padding: 24px;\n  background-color: white;\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid #dee2e6 !important;\n"]);return c=function(){return e},e}var r=n(128).a.div(c());t.a=r},606:function(e,t,n){"use strict";var a=n(127);function c(){var e=Object(a.a)(["\n  margin-bottom: 24px;\n"]);return c=function(){return e},e}var r=n(128).a.h1(c());t.a=r},607:function(e,t,n){"use strict";var a=n(127),c=n(11),r=(n(5),n(85));function s(){var e=Object(a.a)(["\n  .breadcrumb {\n    font-size: 13px;\n    margin: 0px;\n    padding: 0px;\n    background-color: transparent;\n  }\n\n  .breadcrumb-item:not(.active) a {\n    color: rgba(0, 0, 0, 0.45);\n  }\n"]);return s=function(){return e},e}var i=n(128).a.nav(s());t.a=function(e){var t=function(e){return e.length>1};return Object(c.jsx)(i,{children:Object(c.jsx)("ol",{className:"breadcrumb",children:e.items.map((function(n,a){return Object(c.jsx)("li",{className:"breadcrumb-item ".concat(e.items.length-1===a?"active":""),children:t(n)?Object(c.jsx)(r.a,{to:n[1],children:n[0]}):n[0]},n[0])}))})})}},608:function(e,t,n){"use strict";var a=n(11);n(5);t.a=function(){return Object(a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(a.jsx)("div",{className:"spinner-border text-primary"})})}},610:function(e,t,n){"use strict";var a=n(25),c=n(30),r=n(35),s=n.n(r),i=n(5),o=n.n(i),l=n(36),u=["bsPrefix","className","noGutters","as"],d=["xl","lg","md","sm","xs"],b=o.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,i=e.noGutters,b=e.as,j=void 0===b?"div":b,m=Object(c.a)(e,u),f=Object(l.a)(n,"row"),O=f+"-cols",p=[];return d.forEach((function(e){var t,n=m[e];delete m[e];var a="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"===typeof n?n.cols:n)&&p.push(""+O+a+"-"+t)})),o.a.createElement(j,Object(a.a)({ref:t},m,{className:s.a.apply(void 0,[r,f,i&&"no-gutters"].concat(p))}))}));b.displayName="Row",b.defaultProps={noGutters:!1},t.a=b},611:function(e,t,n){"use strict";var a=n(25),c=n(30),r=n(35),s=n.n(r),i=n(5),o=n.n(i),l=n(36),u=["bsPrefix","className","as"],d=["xl","lg","md","sm","xs"],b=o.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,i=e.as,b=void 0===i?"div":i,j=Object(c.a)(e,u),m=Object(l.a)(n,"col"),f=[],O=[];return d.forEach((function(e){var t,n,a,c=j[e];if(delete j[e],"object"===typeof c&&null!=c){var r=c.span;t=void 0===r||r,n=c.offset,a=c.order}else t=c;var s="xs"!==e?"-"+e:"";t&&f.push(!0===t?""+m+s:""+m+s+"-"+t),null!=a&&O.push("order"+s+"-"+a),null!=n&&O.push("offset"+s+"-"+n)})),f.length||f.push(m),o.a.createElement(b,Object(a.a)({},j,{ref:t,className:s.a.apply(void 0,[r].concat(f,O))}))}));b.displayName="Col",t.a=b},613:function(e,t,n){"use strict";var a=n(11),c=n(5),r=n(121),s=n.n(r);t.a=function(e){var t=Object(c.useRef)();Object(c.useEffect)((function(){window.$(t.current).modal("show"),window.$(t.current).on("hidden.bs.modal",e.onClose)}),[]);return s.a.createPortal(Object(a.jsx)("div",{ref:t,className:"modal",tabIndex:-1,children:Object(a.jsx)("div",{className:"modal-dialog modal-sm",children:Object(a.jsxs)("div",{className:"modal-content",children:[Object(a.jsxs)("div",{className:"modal-header",children:[Object(a.jsx)("h6",{className:"modal-title",style:{textAlign:"center"},children:e.title}),Object(a.jsx)("button",{type:"button",className:"close","data-dismiss":"modal",children:Object(a.jsx)("span",{children:"\xd7"})})]}),Object(a.jsxs)("div",{className:"modal-footer",children:[Object(a.jsx)("button",{type:"button",className:"btn btn-light btn-sm","data-dismiss":"modal",children:e.cancelText}),Object(a.jsx)("button",{type:"button",onClick:function(){return window.$(t.current).modal("hide"),e.onConfirm()},className:"btn btn-primary btn-sm",children:e.okText})]})]})})}),document.getElementById("modal-root"))}},617:function(e,t,n){"use strict";var a=n(127);function c(){var e=Object(a.a)(["\n  margin-bottom: 8px;\n\n  .btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return c=function(){return e},e}var r=n(128).a.div(c());t.a=r},623:function(e,t,n){"use strict";var a=n(127);function c(){var e=Object(a.a)(["\n  .btn.btn-link {\n    padding-left: 0;\n  }\n"]);return c=function(){return e},e}var r=n(128).a.div(c());t.a=r},651:function(e,t,n){"use strict";var a=n(11);n(5);t.a=function(e){if(!e.value&&0!==e.value&&!1!==e.value)return null;var t="".concat(e.prefix?"".concat(e.prefix," "):"").concat(e.value);return Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"col-form-label",children:e.label}),Object(a.jsx)("input",{type:"text",readOnly:!0,className:"form-control-plaintext",value:t})]})}},670:function(e,t,n){"use strict";var a=n(4),c=n(29),r=n(57),s=n(129),i=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(s.a.values.palierRead)})),o=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(s.a.values.palierEdit)})),l=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(s.a.values.palierCreate)})),u=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(s.a.values.palierImport)})),d={selectPermissionToRead:i,selectPermissionToEdit:o,selectPermissionToCreate:l,selectPermissionToDestroy:Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(s.a.values.palierDestroy)})),selectPermissionToImport:u};t.a=d},772:function(e,t,n){"use strict";var a=n(4),c={selectLoading:Object(a.a)([function(e){return e.palier.destroy}],(function(e){return Boolean(e.loading)}))};t.a=c},867:function(e,t,n){"use strict";n.r(t);var a=n(11),c=n(5),r=n(34),s=n(32),i=n(2),o=n(219),l=n(4),u=function(e){return e.palier.view},d=Object(l.a)([u],(function(e){return e.record})),b={selectLoading:Object(l.a)([u],(function(e){return Boolean(e.loading)})),selectRecord:d,selectRaw:u},j=n(608),m=n(623),f=n(651),O=n(610),p=n(611);var x=function(e){var t=e.record;return e.loading||!t?Object(a.jsx)(j.a,{}):Object(a.jsx)(m.a,{children:Object(a.jsxs)(O.a,{style:{backgroundColor:"#f0f2f5",paddingBottom:"10px"},children:[Object(a.jsx)(p.a,{sm:3,children:Object(a.jsx)(f.a,{label:Object(i.c)("entities.palier.fields.title"),value:t.title})}),Object(a.jsx)(p.a,{sm:3,children:Object(a.jsx)(f.a,{label:Object(i.c)("entities.palier.fields.montant"),value:t.montant})}),Object(a.jsx)(p.a,{sm:6,children:Object(a.jsx)(f.a,{label:Object(i.c)("entities.palier.fields.details"),value:t.details})})]})})},v=n(145),h=n(85),g=n(84),y=n(670),C=n(159),N=n(772),w=n(613),T=n(617),P=n(603);var R=function(e){var t=Object(c.useState)(!1),n=Object(v.a)(t,2),s=n[0],o=n[1],l=Object(r.d)(),u=e.match.params.id,d=Object(r.e)(g.a.selectPermissionToRead),b=Object(r.e)(y.a.selectPermissionToEdit),j=Object(r.e)(y.a.selectPermissionToDestroy),m=Object(r.e)(N.a.selectLoading),f=function(){o(!1)};return Object(a.jsxs)(T.a,{children:[b&&Object(a.jsx)(h.a,{to:"/palier/".concat(u,"/edit"),children:Object(a.jsxs)("button",{className:"btn btn-primary",type:"button",children:[Object(a.jsx)(P.a,{iconClass:"fas fa-edit"})," ",Object(i.c)("common.edit")]})}),j&&Object(a.jsxs)("button",{className:"btn btn-primary",type:"button",disabled:m,onClick:function(){o(!0)},children:[Object(a.jsx)(P.a,{loading:m,iconClass:"fas fa-trash-alt"})," ",Object(i.c)("common.destroy")]}),d&&Object(a.jsx)(h.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(u)),children:Object(a.jsxs)("button",{className:"btn btn-light",type:"button",children:[Object(a.jsx)(P.a,{iconClass:"fas fa-history"})," ",Object(i.c)("auditLog.menu")]})}),s&&Object(a.jsx)(w.a,{title:Object(i.c)("common.areYouSure"),onConfirm:function(){return f(),void l(C.a.doDestroy(u))},onClose:function(){return f()},okText:Object(i.c)("common.yes"),cancelText:Object(i.c)("common.no")})]})},k=n(605),E=n(607),I=n(606);t.default=function(){var e=Object(r.d)(),t=Object(s.h)(),n=Object(r.e)(b.selectLoading),l=Object(r.e)(b.selectRecord);return Object(c.useEffect)((function(){e(o.a.doFind(t.params.id))}),[e,t.params.id]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(E.a,{items:[[Object(i.c)("dashboard.menu"),"/"],[Object(i.c)("entities.palier.menu"),"/palier"],[Object(i.c)("entities.palier.view.title")]]}),Object(a.jsxs)(k.a,{children:[Object(a.jsx)(I.a,{children:Object(i.c)("entities.palier.view.title")}),Object(a.jsx)(R,{match:t}),Object(a.jsx)(x,{loading:n,record:l})]})]})}}}]);