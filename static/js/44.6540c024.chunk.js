(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[44],{619:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n(145),r=n(1),c=n.n(r),i=n(3),o=n(15),s=n(16),l=n(621),u=n.n(l),d=n(2),b=n(9),f=n(660),m=n(8),j=n(262),p=n.n(j),O=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,null,[{key:"validate",value:function(e,t){if(t){if(t.image&&!e.type.startsWith("image"))throw new Error(Object(d.c)("fileUploader.image"));if(t.storage.maxSizeInBytes&&e.size>t.storage.maxSizeInBytes)throw new Error(Object(d.c)("fileUploader.size",u()(t.storage.maxSizeInBytes)));var n=v(e.name);if(t.formats&&!t.formats.includes(n))throw new Error(Object(d.c)("fileUploader.formats",t.formats.join(", ")))}}},{key:"upload",value:function(){var e=Object(i.a)(c.a.mark((function e(t,n){var a,r,i,o,s,l,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,this.validate(t,n),e.next=7;break;case 4:return e.prev=4,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 7:return a=v(t.name),r=Object(f.a)(),i="".concat(r,".").concat(a),e.next=12,this.fetchFileCredentials(i,n);case 12:return o=e.sent,s=o.uploadCredentials,l=o.downloadUrl,u=o.privateUrl,e.next=18,this.uploadToServer(t,s);case 18:return e.abrupt("return",{id:r,name:t.name,sizeInBytes:t.size,publicUrl:s&&s.publicUrl?s.publicUrl:null,privateUrl:u,downloadUrl:l,new:!0});case 19:case"end":return e.stop()}}),e,this,[[0,4]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"fetchFileCredentials",value:function(){var e=Object(i.a)(c.a.mark((function e(t,n){var a,r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=m.a.get(),e.next=3,b.a.get("/tenant/".concat(a,"/file/credentials"),{params:{filename:t,storageId:n.storage.id}});case 3:return r=e.sent,i=r.data,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"uploadToServer",value:function(){var e=Object(i.a)(c.a.mark((function e(t,n){var r,i,o,s,l,u,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(e.prev=0,r=n.url,i=new FormData,o=0,s=Object.entries(n.fields||{});o<s.length;o++)l=Object(a.a)(s[o],2),u=l[0],d=l[1],i.append(u,d);return i.append("file",t),e.abrupt("return",p.a.post(r,i,{headers:{"Content-Type":"multipart/form-data"}}));case 8:throw e.prev=8,e.t0=e.catch(0),console.error(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}()}]),e}();function v(e){if(!e)return null;var t=/(?:\.([^.]+))?$/.exec(e);return t?t[1]:null}},621:function(e,t,n){"use strict";(function(t){!function(t){var n=/^(b|B)$/,a={iec:{bits:["b","Kib","Mib","Gib","Tib","Pib","Eib","Zib","Yib"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["b","Kb","Mb","Gb","Tb","Pb","Eb","Zb","Yb"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},r={iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]};function c(e){var t,c,i,o,s,l,u,d,b,f,m,j,p,O,v,h=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},x=[],g=0,y=void 0,w=void 0;if(isNaN(e))throw new TypeError("Invalid number");return c=!0===h.bits,m=!0===h.unix,t=h.base||2,f=void 0!==h.round?h.round:m?1:2,l=void 0!==h.locale?h.locale:"",u=h.localeOptions||{},j=void 0!==h.separator?h.separator:"",p=void 0!==h.spacer?h.spacer:m?"":" ",v=h.symbols||{},O=2===t&&h.standard||"jedec",b=h.output||"string",o=!0===h.fullform,s=h.fullforms instanceof Array?h.fullforms:[],y=void 0!==h.exponent?h.exponent:-1,i=2<t?1e3:1024,(d=(w=Number(e))<0)&&(w=-w),(-1===y||isNaN(y))&&(y=Math.floor(Math.log(w)/Math.log(i)))<0&&(y=0),8<y&&(y=8),"exponent"===b?y:(0===w?(x[0]=0,x[1]=m?"":a[O][c?"bits":"bytes"][y]):(g=w/(2===t?Math.pow(2,10*y):Math.pow(1e3,y)),c&&i<=(g*=8)&&y<8&&(g/=i,y++),x[0]=Number(g.toFixed(0<y?f:0)),x[0]===i&&y<8&&void 0===h.exponent&&(x[0]=1,y++),x[1]=10===t&&1===y?c?"kb":"kB":a[O][c?"bits":"bytes"][y],m&&(x[1]="jedec"===O?x[1].charAt(0):0<y?x[1].replace(/B$/,""):x[1],n.test(x[1])&&(x[0]=Math.floor(x[0]),x[1]=""))),d&&(x[0]=-x[0]),x[1]=v[x[1]]||x[1],!0===l?x[0]=x[0].toLocaleString():0<l.length?x[0]=x[0].toLocaleString(l,u):0<j.length&&(x[0]=x[0].toString().replace(".",j)),"array"===b?x:(o&&(x[1]=s[y]?s[y]:r[O][y]+(c?"bit":"byte")+(1===x[0]?"":"s")),"object"===b?{value:x[0],symbol:x[1],exponent:y}:x.join(p)))}c.partial=function(e){return function(t){return c(t,e)}},e.exports=c}("undefined"!=typeof window&&window)}).call(this,n(86))},623:function(e,t,n){"use strict";var a=n(127);function r(){var e=Object(a.a)(["\n  .btn.btn-link {\n    padding-left: 0;\n  }\n"]);return r=function(){return e},e}var c=n(128).a.div(r());t.a=c},628:function(e,t,n){var a=n(385),r=n(629),c=n(634),i=n(386),o=n(635),s=n(384);e.exports=function(e,t,n){var l=-1,u=r,d=e.length,b=!0,f=[],m=f;if(n)b=!1,u=c;else if(d>=200){var j=t?null:o(e);if(j)return s(j);b=!1,u=i,m=new a}else m=t?[]:f;e:for(;++l<d;){var p=e[l],O=t?t(p):p;if(p=n||0!==p?p:0,b&&O===O){for(var v=m.length;v--;)if(m[v]===O)continue e;t&&m.push(O),f.push(p)}else u(m,O,n)||(m!==f&&m.push(O),f.push(p))}return f}},629:function(e,t,n){var a=n(630);e.exports=function(e,t){return!!(null==e?0:e.length)&&a(e,t,0)>-1}},630:function(e,t,n){var a=n(631),r=n(632),c=n(633);e.exports=function(e,t,n){return t===t?c(e,t,n):a(e,r,n)}},631:function(e,t){e.exports=function(e,t,n,a){for(var r=e.length,c=n+(a?1:-1);a?c--:++c<r;)if(t(e[c],c,e))return c;return-1}},632:function(e,t){e.exports=function(e){return e!==e}},633:function(e,t){e.exports=function(e,t,n){for(var a=n-1,r=e.length;++a<r;)if(e[a]===t)return a;return-1}},634:function(e,t){e.exports=function(e,t,n){for(var a=-1,r=null==e?0:e.length;++a<r;)if(n(t,e[a]))return!0;return!1}},635:function(e,t,n){var a=n(387),r=n(636),c=n(384),i=a&&1/c(new a([,-0]))[1]==1/0?function(e){return new a(e)}:r;e.exports=i},636:function(e,t){e.exports=function(){}},641:function(e,t,n){"use strict";var a=n(1),r=n.n(a),c=n(19),i=n(3),o=n(145),s=n(11),l=n(5),u=n(619),d=n(6),b=n(2),f=n(603);t.a=function(e){var t=Object(l.useState)(!1),n=Object(o.a)(t,2),a=n[0],m=n[1],j=Object(l.useRef)(),p=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]},O=function(){var t=Object(i.a)(r.a.mark((function t(n){var a,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,(a=n.target.files)&&a.length){t.next=4;break}return t.abrupt("return");case 4:return i=a[0],u.a.validate(i,{storage:e.storage,formats:e.formats}),m(!0),t.next=9,u.a.upload(i,{storage:e.storage,formats:e.formats});case 9:i=t.sent,j.current.value="",m(!1),e.onChange([].concat(Object(c.a)(p()),[i])),t.next=21;break;case 15:t.prev=15,t.t0=t.catch(0),j.current.value="",console.error(t.t0),m(!1),d.a.showMessage(t.t0);case 21:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}(),v=e.max,h=e.readonly,x=Object(s.jsxs)("label",{className:"btn btn-outline-secondary px-4 mb-2",style:{cursor:"pointer"},children:[Object(s.jsx)(f.a,{loading:a,iconClass:"fas fa-plus"})," ",Object(b.c)("fileUploader.upload"),Object(s.jsx)("input",{style:{display:"none"},disabled:a||h,accept:function(){var t=e.schema;if(t&&t.formats)return t.formats.map((function(e){return".".concat(e)})).join(",")}(),type:"file",onChange:O,ref:j})]});return Object(s.jsxs)("div",{children:[h||v&&p().map((function(e){return{uid:e.id||void 0,name:e.name,status:"done",url:e.downloadUrl}})).length>=v?null:x,p()&&p().length?Object(s.jsx)("div",{children:p().map((function(t){return Object(s.jsxs)("div",{children:[Object(s.jsx)("i",{className:"fas fa-link text-muted mr-2"}),Object(s.jsx)("a",{href:t.downloadUrl,target:"_blank",rel:"noopener noreferrer",download:!0,children:t.name}),!h&&Object(s.jsx)("button",{className:"btn btn-link",type:"button",onClick:function(){return n=t.id,void e.onChange(p().filter((function(e){return e.id!==n})));var n},children:Object(s.jsx)("i",{className:"fas fa-times"})})]},t.id)}))}):null]})}},642:function(e,t,n){var a=n(263),r=n(628);e.exports=function(e,t){return e&&e.length?r(e,a(t,2)):[]}},644:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return a}))},645:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.d(t,"a",(function(){return r}))},646:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(652),r=n(653);function c(e,t){return!t||"object"!==Object(a.a)(t)&&"function"!==typeof t?Object(r.a)(e):t}},647:function(e,t,n){"use strict";function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return a}))},648:function(e,t,n){"use strict";var a=n(0),r=n(19),c=n(145),i=n(11),o=n(5),s=n(80),l=n(643),u=n(620),d=n(602),b=n(34),f=n(618);t.a=function(e){var t=Object(d.d)(),n=t.setValue,m=t.getValues,j=Object(o.useState)(!1),p=Object(c.a)(j,2),O=p[0],v=p[1],h=Object(b.e)(f.a.selectPermissionToCreate),x={toAutocomplete(e){if(!e)return null;if(e.fullName||e.email){var t=e.email;return e.fullName&&(t="".concat(e.fullName," <").concat(e.email,">")),{value:e.id,label:t}}return{value:e.id,label:e.label}},toValue:e=>e?{id:e.value,label:e.label}:null};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(u.a,Object(a.a)(Object(a.a)({},e),{},{fetchFn:function(e,t){return s.a.fetchUserAutocomplete(e,t)},mapper:x,onOpenModal:function(){return v(!0)},hasPermissionToCreate:h})),O&&Object(i.jsx)(l.a,{visible:O,onClose:function(){return v(!1)},onSuccess:function(t){var a=e.name,c=e.mode;n(a,c&&"multiple"===c?[].concat(Object(r.a)(m()[a]||[]),[t]):t),v(!1)}})]})}},649:function(e,t,n){"use strict";function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}n.d(t,"a",(function(){return r}))},651:function(e,t,n){"use strict";var a=n(11);n(5);t.a=function(e){if(!e.value&&0!==e.value&&!1!==e.value)return null;var t="".concat(e.prefix?"".concat(e.prefix," "):"").concat(e.value);return Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"col-form-label",children:e.label}),Object(a.jsx)("input",{type:"text",readOnly:!0,className:"form-control-plaintext",value:t})]})}},652:function(e,t,n){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return a}))},653:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},660:function(e,t,n){"use strict";var a,r=new Uint8Array(16);function c(){if(!a&&!(a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(r)}var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var o=function(e){return"string"===typeof e&&i.test(e)},s=[],l=0;l<256;++l)s.push((l+256).toString(16).substr(1));var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase();if(!o(n))throw TypeError("Stringified UUID is invalid");return n};t.a=function(e,t,n){var a=(e=e||{}).random||(e.rng||c)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){n=n||0;for(var r=0;r<16;++r)t[n+r]=a[r];return t}return u(a)}},670:function(e,t,n){"use strict";var a=n(4),r=n(29),c=n(57),i=n(129),o=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.palierRead)})),s=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.palierEdit)})),l=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.palierCreate)})),u=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.palierImport)})),d={selectPermissionToRead:o,selectPermissionToEdit:s,selectPermissionToCreate:l,selectPermissionToDestroy:Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.palierDestroy)})),selectPermissionToImport:u};t.a=d},673:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},700:function(e,t,n){"use strict";var a=n(11),r=n(5),c=n(641),i=n(602),o=n(604);function s(e){var t=e.label,n=e.name,s=e.hint,l=e.storage,u=e.formats,d=e.max,b=e.required,f=e.externalErrorMessage,m=Object(i.d)(),j=m.register,p=m.errors,O=m.formState,v=O.touched,h=O.isSubmitted,x=m.setValue,g=m.watch;Object(r.useEffect)((function(){j({name:n})}),[j,n]);var y=o.a.errorMessage(n,p,v,h,f);return Object(a.jsxs)("div",{className:"form-group",children:[Boolean(t)&&Object(a.jsx)("label",{className:"col-form-label ".concat(b?"required":null),htmlFor:n,children:t}),Object(a.jsx)("br",{}),Object(a.jsx)(c.a,{storage:l,formats:u,value:g(n),onChange:function(t){x(n,t,{shouldValidate:!0}),e.onChange&&e.onChange(t)},max:d}),Object(a.jsx)("div",{className:"invalid-feedback",children:y}),Boolean(s)&&Object(a.jsx)("small",{className:"form-text text-muted",children:s})]})}s.defaultProps={max:void 0,required:!1},t.a=s},706:function(e,t,n){"use strict";var a=n(0),r=n(145),c=n(11),i=n(5),o=n(602),s=n(2),l=n(612),u=n(603),d=n(616),b=n(38),f=n(614),m=n(609),j=n(623),p=n(610),O=n(611),v=b.e().shape({title:l.a.string(Object(s.c)("entities.palier.fields.title"),{required:!0}),montant:l.a.decimal(Object(s.c)("entities.palier.fields.montant"),{required:!0}),details:l.a.string(Object(s.c)("entities.palier.fields.details"),{required:!0})});t.a=function(e){var t=Object(i.useState)((function(){var t=e.record||{};return{title:t.title,montant:t.montant,details:t.details}})),n=Object(r.a)(t,1)[0],l=Object(o.c)({resolver:Object(f.yupResolver)(v),mode:"all",defaultValues:n}),b=function(t){var n;e.onSubmit(null===(n=e.record)||void 0===n?void 0:n.id,t)};return Object(c.jsx)(d.a,{children:Object(c.jsx)(o.a,Object(a.a)(Object(a.a)({},l),{},{children:Object(c.jsxs)("form",{onSubmit:l.handleSubmit(b),children:[Object(c.jsx)(j.a,{children:Object(c.jsxs)(p.a,{style:{backgroundColor:"#f0f2f5",paddingBottom:"10px"},children:[Object(c.jsx)(O.a,{sm:3,children:Object(c.jsx)(m.a,{name:"title",label:Object(s.c)("entities.palier.fields.title"),required:!0,autoFocus:!0})}),Object(c.jsx)(O.a,{sm:3,children:Object(c.jsx)(m.a,{name:"montant",label:Object(s.c)("entities.palier.fields.montant"),required:!0})}),Object(c.jsx)(O.a,{sm:6,children:Object(c.jsx)(m.a,{name:"details",label:Object(s.c)("entities.palier.fields.details"),required:!0})})]})}),Object(c.jsxs)("div",{className:"form-buttons",children:[Object(c.jsxs)("button",{className:"btn btn-primary",disabled:e.saveLoading,type:"button",onClick:l.handleSubmit(b),children:[Object(c.jsx)(u.a,{loading:e.saveLoading,iconClass:"far fa-save"})," ",Object(s.c)("common.save")]}),Object(c.jsxs)("button",{className:"btn btn-light",type:"button",disabled:e.saveLoading,onClick:function(){Object.keys(n).forEach((function(e){l.setValue(e,n[e])}))},children:[Object(c.jsx)("i",{className:"fas fa-undo"})," ",Object(s.c)("common.reset")]}),e.onCancel?Object(c.jsxs)("button",{className:"btn btn-light",type:"button",disabled:e.saveLoading,onClick:function(){return e.onCancel()},children:[Object(c.jsx)("i",{className:"fas fa-times"})," ",Object(s.c)("common.cancel")]}):null]})]})}))})}},707:function(e,t,n){"use strict";var a=n(0),r=n(19),c=n(145),i=n(11),o=n(5),s=n(66),l=n(1),u=n.n(l),d=n(3),b=n(121),f=n.n(b),m=n(2),j=n(6),p=n(706);var O=function(e){var t=Object(o.useRef)(),n=Object(o.useState)(!1),a=Object(c.a)(n,2),r=a[0],l=a[1];Object(o.useEffect)((function(){window.$(t.current).modal("show"),window.$(t.current).on("hidden.bs.modal",e.onClose)}),[]);var b=function(){var n=Object(d.a)(u.a.mark((function n(a,r){var c,i,o;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,l(!0),n.next=4,s.a.create(r);case 4:return c=n.sent,i=c.id,n.next=8,s.a.find(i);case 8:o=n.sent,window.$(t.current).modal("hide"),e.onSuccess(o),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),j.a.handle(n.t0);case 16:return n.prev=16,l(!1),n.finish(16);case 19:case"end":return n.stop()}}),n,null,[[0,13,16,19]])})));return function(e,t){return n.apply(this,arguments)}}();return f.a.createPortal(Object(i.jsx)("div",{ref:t,className:"modal",tabIndex:-1,children:Object(i.jsx)("div",{className:"modal-dialog modal-lg",children:Object(i.jsxs)("div",{className:"modal-content",children:[Object(i.jsxs)("div",{className:"modal-header",children:[Object(i.jsx)("h5",{className:"modal-title",children:Object(m.c)("entities.palier.new.title")}),Object(i.jsx)("button",{type:"button",className:"close","data-dismiss":"modal",children:Object(i.jsx)("span",{children:"\xd7"})})]}),Object(i.jsx)("div",{className:"modal-body",children:Object(i.jsx)(p.a,{saveLoading:r,onSubmit:b,onCancel:function(){window.$(t.current).modal("hide")},modal:!0})})]})})}),document.getElementById("modal-root"))},v=n(620),h=n(602),x=n(34),g=n(670);t.a=function(e){var t=Object(h.d)(),n=t.setValue,l=t.getValues,u=Object(o.useState)(!1),d=Object(c.a)(u,2),b=d[0],f=d[1],m=Object(x.e)(g.a.selectPermissionToCreate),j=function(){f(!1)},p={toAutocomplete(e){if(!e)return null;var t=e.id,n=e.label;return e.title&&(n=e.title),{key:t,value:t,label:n}},toValue:e=>e?{id:e.value,label:e.label}:null};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(v.a,Object(a.a)(Object(a.a)({},e),{},{fetchFn:function(e,t){return s.a.listAutocomplete(e,t)},mapper:p,onOpenModal:function(){f(!0)},hasPermissionToCreate:m})),b&&Object(i.jsx)(O,{onClose:j,onSuccess:function(t){var a=e.name,c=e.mode;n(a,c&&"multiple"===c?[].concat(Object(r.a)(l()[a]||[]),[t]):t),j()}})]})}},747:function(e,t,n){"use strict";var a=n(0),r=n(145),c=n(11),i=n(5),o=n(602),s=n(2),l=n(612),u=n(603),d=n(616),b=n(38),f=n(614),m=n(609),j=n(648),p=n(622),O=n(235),v=n(265),h=n(700),x=n(707),g=n(651),y=n(610),w=n(611),C=b.e().shape({adherent:l.a.relationToOne(Object(s.c)("entities.detailsCampagne.fields.adherent"),{required:!0}),palier:l.a.relationToOne(Object(s.c)("entities.detailsCampagne.fields.palier"),{required:!0}),statutPay:l.a.enumerator(Object(s.c)("entities.detailsCampagne.fields.statutPay"),{options:O.a.statutPay,required:!0}),montant:l.a.decimal(Object(s.c)("entities.detailsCampagne.fields.montant"),{required:!0}),facture:l.a.files(Object(s.c)("entities.detailsCampagne.fields.facture"),{}),typePay:l.a.enumerator(Object(s.c)("entities.detailsCampagne.fields.typePay"),{options:O.a.typePay,required:!0})});t.a=function(e){var t=Object(i.useState)((function(){var t=e.record||{};return{adherent:t.adherent,palier:t.palier,statutPay:t.statutPay,montant:t.montant,facture:t.facture||[],typePay:t.typePay,campagne:e.recordIdcampagne,titre:e.recordTitrecampagne}})),n=Object(r.a)(t,1)[0],l=Object(o.c)({resolver:Object(f.yupResolver)(C),mode:"all",defaultValues:n}),b=function(t){var n,a,r,c;e.isEditing?(t.campagne=null===(n=e.record)||void 0===n?void 0:n.campagne,t.titre=null===(a=e.record)||void 0===a?void 0:a.titre,e.onSubmit(null===(r=e.record)||void 0===r?void 0:r.id,t)):e.onSubmit(null===(c=e.record)||void 0===c?void 0:c.id,t)};return Object(c.jsx)(d.a,{children:Object(c.jsx)(o.a,Object(a.a)(Object(a.a)({},l),{},{children:Object(c.jsxs)("form",{onSubmit:l.handleSubmit(b),children:[Object(c.jsxs)(y.a,{style:{backgroundColor:"#f0f2f5",paddingBottom:"10px"},children:[e.record?Object(c.jsx)(w.a,{sm:4,children:Object(c.jsx)(g.a,{label:Object(s.c)("entities.campagne.name")+" "+Object(s.c)("entities.campagne.fields.titre"),value:e.record.titre})}):Object(c.jsx)(w.a,{sm:4}),Object(c.jsx)(w.a,{sm:4,children:Object(c.jsx)(j.a,{name:"adherent",label:Object(s.c)("entities.detailsCampagne.fields.adherent"),placeholder:Object(s.c)("entities.detailsCampagne.placeholders.adherent"),required:!0,showCreate:!1})}),Object(c.jsx)(w.a,{sm:4,children:Object(c.jsx)(x.a,{name:"palier",label:Object(s.c)("entities.detailsCampagne.fields.palier"),required:!0,showCreate:!e.modal})})]}),Object(c.jsxs)(y.a,{children:[Object(c.jsx)(w.a,{sm:4,children:Object(c.jsx)(m.a,{name:"montant",label:Object(s.c)("entities.detailsCampagne.fields.montant"),required:!0})}),Object(c.jsx)(w.a,{sm:4,children:Object(c.jsx)(p.a,{name:"typePay",label:Object(s.c)("entities.detailsCampagne.fields.typePay"),options:O.a.typePay.map((function(e){return{value:e,label:Object(s.c)("entities.detailsCampagne.enumerators.typePay.".concat(e))}})),required:!0})}),Object(c.jsx)(w.a,{sm:4,children:Object(c.jsx)(p.a,{name:"statutPay",label:Object(s.c)("entities.detailsCampagne.fields.statutPay"),options:O.a.statutPay.map((function(e){return{value:e,label:Object(s.c)("entities.detailsCampagne.enumerators.statutPay.".concat(e))}})),required:!0})})]}),Object(c.jsx)(y.a,{style:{backgroundColor:"#f0f2f5",paddingBottom:"10px"},children:Object(c.jsx)(w.a,{sm:12,children:Object(c.jsx)(h.a,{name:"facture",label:Object(s.c)("entities.detailsCampagne.fields.facture"),required:!1,storage:v.a.values.detailsCampagneFacture,max:void 0,formats:void 0})})}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{style:{display:"none"},children:Object(c.jsx)(m.a,{name:"campagne"})}),Object(c.jsx)("div",{style:{display:"none"},children:Object(c.jsx)(m.a,{name:"titre"})})]}),Object(c.jsxs)("div",{className:"form-buttons",children:[Object(c.jsxs)("button",{className:"btn btn-primary",disabled:e.saveLoading,type:"button",onClick:l.handleSubmit(b),children:[Object(c.jsx)(u.a,{loading:e.saveLoading,iconClass:"far fa-save"})," ",Object(s.c)("common.save")]}),Object(c.jsxs)("button",{className:"btn btn-light",type:"button",disabled:e.saveLoading,onClick:function(){Object.keys(n).forEach((function(e){l.setValue(e,n[e])}))},children:[Object(c.jsx)("i",{className:"fas fa-undo"})," ",Object(s.c)("common.reset")]}),e.onCancel?Object(c.jsxs)("button",{className:"btn btn-light",type:"button",disabled:e.saveLoading,onClick:function(){return e.onCancel()},children:[Object(c.jsx)("i",{className:"fas fa-times"})," ",Object(s.c)("common.cancel")]}):null]})]})}))})}},771:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(3),i=n(145),o=n(11),s=n(5),l=n(121),u=n.n(l),d=n(2),b=n(747),f=n(60);t.default=function(e){var t=Object(s.useRef)(),n=Object(s.useState)(!1),a=Object(i.a)(n,2),l=a[0],m=a[1];Object(s.useEffect)((function(){window.$(t.current).modal("show"),window.$(t.current).on("hidden.bs.modal",e.onClose)}),[]);var j=function(){var n=Object(c.a)(r.a.mark((function n(a,c){var i,o,s;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,m(!0),n.next=4,f.a.create(c);case 4:return i=n.sent,o=i.id,n.next=8,f.a.find(o);case 8:s=n.sent,e.onSuccess(s),window.$(t.current).modal("hide"),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),window.$(t.current).modal("hide");case 16:return n.prev=16,m(!1),n.finish(16);case 19:case"end":return n.stop()}}),n,null,[[0,13,16,19]])})));return function(e,t){return n.apply(this,arguments)}}();return u.a.createPortal(Object(o.jsx)("div",{ref:t,className:"modal",tabIndex:-1,children:Object(o.jsx)("div",{className:"modal-dialog modal-lg",children:Object(o.jsxs)("div",{className:"modal-content",children:[Object(o.jsxs)("div",{className:"modal-header",children:[Object(o.jsx)("h5",{className:"modal-title",children:Object(d.c)("entities.detailsCampagne.new.title")}),Object(o.jsx)("button",{type:"button",className:"close","data-dismiss":"modal",children:Object(o.jsx)("span",{children:"\xd7"})})]}),Object(o.jsx)("div",{className:"modal-body",children:Object(o.jsx)(b.a,{saveLoading:l,onSubmit:j,onCancel:function(){window.$(t.current).modal("hide")},modal:!0,recordIdcampagne:e.recordIdcampagne,recordTitrecampagne:e.recordTitrecampagne})})]})})}),document.getElementById("modal-root"))}}}]);