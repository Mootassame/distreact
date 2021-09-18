(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[75],{603:function(e,t,n){"use strict";var c=n(11);n(5);t.a=function(e){return e.loading?Object(c.jsx)("span",{className:"spinner-border spinner-border-sm"}):e.iconClass?Object(c.jsx)("i",{className:e.iconClass}):null}},605:function(e,t,n){"use strict";var c=n(127);function a(){var e=Object(c.a)(["\n  margin-top: 16px;\n  padding: 24px;\n  background-color: white;\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid #dee2e6 !important;\n"]);return a=function(){return e},e}var r=n(128).a.div(a());t.a=r},606:function(e,t,n){"use strict";var c=n(127);function a(){var e=Object(c.a)(["\n  margin-bottom: 24px;\n"]);return a=function(){return e},e}var r=n(128).a.h1(a());t.a=r},607:function(e,t,n){"use strict";var c=n(127),a=n(11),r=(n(5),n(85));function i(){var e=Object(c.a)(["\n  .breadcrumb {\n    font-size: 13px;\n    margin: 0px;\n    padding: 0px;\n    background-color: transparent;\n  }\n\n  .breadcrumb-item:not(.active) a {\n    color: rgba(0, 0, 0, 0.45);\n  }\n"]);return i=function(){return e},e}var o=n(128).a.nav(i());t.a=function(e){var t=function(e){return e.length>1};return Object(a.jsx)(o,{children:Object(a.jsx)("ol",{className:"breadcrumb",children:e.items.map((function(n,c){return Object(a.jsx)("li",{className:"breadcrumb-item ".concat(e.items.length-1===c?"active":""),children:t(n)?Object(a.jsx)(r.a,{to:n[1],children:n[0]}):n[0]},n[0])}))})})}},608:function(e,t,n){"use strict";var c=n(11);n(5);t.a=function(){return Object(c.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(c.jsx)("div",{className:"spinner-border text-primary"})})}},613:function(e,t,n){"use strict";var c=n(11),a=n(5),r=n(121),i=n.n(r);t.a=function(e){var t=Object(a.useRef)();Object(a.useEffect)((function(){window.$(t.current).modal("show"),window.$(t.current).on("hidden.bs.modal",e.onClose)}),[]);return i.a.createPortal(Object(c.jsx)("div",{ref:t,className:"modal",tabIndex:-1,children:Object(c.jsx)("div",{className:"modal-dialog modal-sm",children:Object(c.jsxs)("div",{className:"modal-content",children:[Object(c.jsxs)("div",{className:"modal-header",children:[Object(c.jsx)("h6",{className:"modal-title",style:{textAlign:"center"},children:e.title}),Object(c.jsx)("button",{type:"button",className:"close","data-dismiss":"modal",children:Object(c.jsx)("span",{children:"\xd7"})})]}),Object(c.jsxs)("div",{className:"modal-footer",children:[Object(c.jsx)("button",{type:"button",className:"btn btn-light btn-sm","data-dismiss":"modal",children:e.cancelText}),Object(c.jsx)("button",{type:"button",onClick:function(){return window.$(t.current).modal("hide"),e.onConfirm()},className:"btn btn-primary btn-sm",children:e.okText})]})]})})}),document.getElementById("modal-root"))}},617:function(e,t,n){"use strict";var c=n(127);function a(){var e=Object(c.a)(["\n  margin-bottom: 8px;\n\n  .btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var r=n(128).a.div(a());t.a=r},623:function(e,t,n){"use strict";var c=n(127);function a(){var e=Object(c.a)(["\n  .btn.btn-link {\n    padding-left: 0;\n  }\n"]);return a=function(){return e},e}var r=n(128).a.div(a());t.a=r},651:function(e,t,n){"use strict";var c=n(11);n(5);t.a=function(e){if(!e.value&&0!==e.value&&!1!==e.value)return null;var t="".concat(e.prefix?"".concat(e.prefix," "):"").concat(e.value);return Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{className:"col-form-label",children:e.label}),Object(c.jsx)("input",{type:"text",readOnly:!0,className:"form-control-plaintext",value:t})]})}},726:function(e,t,n){"use strict";var c=n(4),a=n(29),r=n(57),i=n(129),o=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.categorieMouvRead)})),s=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.categorieMouvEdit)})),u=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.categorieMouvCreate)})),l=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.categorieMouvImport)})),d={selectPermissionToRead:o,selectPermissionToEdit:s,selectPermissionToCreate:u,selectPermissionToDestroy:Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.categorieMouvDestroy)})),selectPermissionToImport:l};t.a=d},767:function(e,t,n){"use strict";var c=n(4),a={selectLoading:Object(c.a)([function(e){return e.categorieMouv.destroy}],(function(e){return Boolean(e.loading)}))};t.a=a},863:function(e,t,n){"use strict";n.r(t);var c=n(11),a=n(5),r=n(34),i=n(32),o=n(2),s=n(215),u=n(4),l=function(e){return e.categorieMouv.view},d=Object(u.a)([l],(function(e){return e.record})),b={selectLoading:Object(u.a)([l],(function(e){return Boolean(e.loading)})),selectRecord:d,selectRaw:l},j=n(608),m=n(623),O=n(651);var f=function(e){var t=e.record;return e.loading||!t?Object(c.jsx)(j.a,{}):Object(c.jsxs)(m.a,{children:[Object(c.jsx)(O.a,{label:Object(o.c)("entities.categorieMouv.fields.title"),value:t.title}),Object(c.jsx)(O.a,{label:Object(o.c)("entities.categorieMouv.fields.description"),value:t.description})]})},v=n(145),x=n(85),p=n(84),h=n(726),g=n(156),y=n(767),C=n(613),w=n(617),N=n(603);var T=function(e){var t=Object(a.useState)(!1),n=Object(v.a)(t,2),i=n[0],s=n[1],u=Object(r.d)(),l=e.match.params.id,d=Object(r.e)(p.a.selectPermissionToRead),b=Object(r.e)(h.a.selectPermissionToEdit),j=Object(r.e)(h.a.selectPermissionToDestroy),m=Object(r.e)(y.a.selectLoading),O=function(){s(!1)};return Object(c.jsxs)(w.a,{children:[b&&Object(c.jsx)(x.a,{to:"/categorie-mouv/".concat(l,"/edit"),children:Object(c.jsxs)("button",{className:"btn btn-primary",type:"button",children:[Object(c.jsx)(N.a,{iconClass:"fas fa-edit"})," ",Object(o.c)("common.edit")]})}),j&&Object(c.jsxs)("button",{className:"btn btn-primary",type:"button",disabled:m,onClick:function(){s(!0)},children:[Object(c.jsx)(N.a,{loading:m,iconClass:"fas fa-trash-alt"})," ",Object(o.c)("common.destroy")]}),d&&Object(c.jsx)(x.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(l)),children:Object(c.jsxs)("button",{className:"btn btn-light",type:"button",children:[Object(c.jsx)(N.a,{iconClass:"fas fa-history"})," ",Object(o.c)("auditLog.menu")]})}),i&&Object(c.jsx)(C.a,{title:Object(o.c)("common.areYouSure"),onConfirm:function(){return O(),void u(g.a.doDestroy(l))},onClose:function(){return O()},okText:Object(o.c)("common.yes"),cancelText:Object(o.c)("common.no")})]})},M=n(605),k=n(607),P=n(606);t.default=function(){var e=Object(r.d)(),t=Object(i.h)(),n=Object(r.e)(b.selectLoading),u=Object(r.e)(b.selectRecord);return Object(a.useEffect)((function(){e(s.a.doFind(t.params.id))}),[e,t.params.id]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(k.a,{items:[[Object(o.c)("dashboard.menu"),"/"],[Object(o.c)("entities.categorieMouv.menu"),"/categorie-mouv"],[Object(o.c)("entities.categorieMouv.view.title")]]}),Object(c.jsxs)(M.a,{children:[Object(c.jsx)(P.a,{children:Object(o.c)("entities.categorieMouv.view.title")}),Object(c.jsx)(T,{match:t}),Object(c.jsx)(f,{loading:n,record:u})]})]})}}}]);