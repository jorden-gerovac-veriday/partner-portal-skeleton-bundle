(window["webpackJsonpproduct-subscription-form-widget"]=window["webpackJsonpproduct-subscription-form-widget"]||[]).push([[0],{189:function(e){e.exports=JSON.parse('{"error":{"dataLoading":"Error during server connection"},"common":{"save":"Save","dataSaved":"ProductSubscription successfully saved","dataDeleted":"ProductSubscription successfully deleted","notAuthenticated":"User is not authenticated.","selectFile":"Upload new file","selectImageFile":"Upload new image","download":"Download","cancel":"Cancel","delete":"Delete","yes":"Yes","no":"No"},"validation":{"required":"{{field}} is required"},"entities":{"productSubscription":{"deleteDialog":{"title":"Delete productSubscription","description":"Are you sure?"},"notFound":"ProductSubscription not found","deleted":"ProductSubscription deleted","id":"ID","level":"entities.productSubscription.level","length":"entities.productSubscription.length","status":"entities.productSubscription.status","startDate":"entities.productSubscription.startDate","endDate":"entities.productSubscription.endDate"}}}')},219:function(e,t,n){e.exports=n(367)},367:function(e,t,n){"use strict";n.r(t);var a=n(28),r=n(29),i=n(33),o=n(24),c=n(30),s=n(202),l=n(51),u=n(0),d=n.n(u),p=n(9),b=n.n(p),f=n(182),h=n.n(f),m=n(414),v=n(418),g=n(411),O=n(201),y=n(17),k=d.a.createContext(null),E=n(48),S=n(131),j=n(50),D={en:n(189)};function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var C=Object.keys(D).reduce((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,Object(l.a)({},t,Object(l.a)({},"translation",D[t])))}),{}),P=S.a.t,x=function(e){!function(e,t){S.a.use(j.a).init({defaultNs:"translation",interpolation:{escapeValue:!1},resources:C,lng:e||t,fallbackLng:t,react:{useSuspense:!1}})}(e,"en"),function(e){var t={mixed:{required:function(t){var n=t.path;return e("validation.required",{field:e("entities.productSubscription.".concat(n))})}}};E.setLocale(t)}(P)},F=function(e){return function(t){return function(e,t){var n=new CustomEvent(e,{detail:{payload:t}});window.dispatchEvent(n)}(e,t)}},T={tableAdd:"productSubscription.table.add",tableSelect:"productSubscription.table.select"},N={create:"productSubscription.form.create",update:"productSubscription.form.update",errorCreate:"productSubscription.form.errorCreate",errorUpdate:"productSubscription.form.errorUpdate"},U=n(13),A=n.n(U),R=n(27),M=n(22),z=n(2),L=n.n(z),I=(L.a.shape({initialized:L.a.bool,authenticated:L.a.bool}),n(203));L.a.oneOfType([L.a.func,L.a.shape({current:L.a.elementType}),L.a.shape(null)]);function H(e){var t=function(t){function n(){var t,r;Object(a.a)(this,n);for(var c=arguments.length,s=new Array(c),l=0;l<c;l++)s[l]=arguments[l];return(r=Object(i.a)(this,(t=Object(o.a)(n)).call.apply(t,[this].concat(s)))).renderWrappedComponent=function(t){var n=r.props,a=n.forwardedRef,i=Object(I.a)(n,["forwardedRef"]);return d.a.createElement(e,Object.assign({},i,{ref:a,keycloak:t}))},r}return Object(c.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){return d.a.createElement(k.Consumer,null,this.renderWrappedComponent)}}]),n}(u.Component);return t.defaultProps={forwardedRef:function(){}},Object(u.forwardRef)((function(e,n){return d.a.createElement(t,Object.assign({},e,{forwardedRef:n}))}))}var W=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?t:null},B=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?null:t},J=function(){return{headers:new Headers({Authorization:"Bearer ".concat(window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:""),"Content-Type":"application/json"})}},K=function(){var e=Object(R.a)(A.a.mark((function e(t,n){var a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,n);case 2:if(204!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",{});case 5:return e.abrupt("return",a.status>=200&&a.status<300?a.json():Promise.reject(new Error(a.statusText||a.status)));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G="api/product-subscriptions",Y=function(){var e=Object(R.a)(A.a.mark((function e(t,n){var a,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat(G,"/").concat(n),r=V({},J(),{method:"GET"}),e.abrupt("return",K(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Q=function(){var e=Object(R.a)(A.a.mark((function e(t,n){var a,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat(G),r=V({},J(),{method:"POST",body:n?JSON.stringify(n):null}),e.abrupt("return",K(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),X=function(){var e=Object(R.a)(A.a.mark((function e(t,n){var a,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat(G),r=V({},J(),{method:"PUT",body:n?JSON.stringify(n):null}),e.abrupt("return",K(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Z=function(){var e=Object(R.a)(A.a.mark((function e(t,n){var a,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat(G,"/").concat(n),r=V({},J(),{method:"DELETE"}),e.abrupt("return",K(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),$=n(4),_=n(417),ee=n(402),te=n(399),ne=n(5),ae=n(403),re=n(191),ie=n.n(re),oe=n(192),ce=n.n(oe),se=n(190),le=n.n(se),ue=n(193),de=n.n(ue),pe={success:le.a,error:ie.a,info:ce.a},be={success:3e3,error:null,info:5e3},fe=function e(t){var n=t.className,a=t.classes,r=t.status,i=t.message,o=t.onClose,c=!!i,s=r||e.INFO,l=pe[s],u=be[s],p=d.a.createElement("span",{className:a.message},d.a.createElement(l,{className:Object($.a)(a.icon,a.iconStatus)}),i);return d.a.createElement(_.a,{open:c,onClose:o,autoHideDuration:u},d.a.createElement(ee.a,{className:Object($.a)(a[s],n),message:p,action:[d.a.createElement(ae.a,{key:"close","aria-label":"close",color:"inherit",onClick:o},d.a.createElement(de.a,{className:a.icon}))]}))};fe.SUCCESS="success",fe.ERROR="error",fe.defaultProps={message:null,className:"",status:fe.INFO="info",onClose:function(){}};var he=Object(ne.a)((function(e){return{message:{display:"flex",alignItems:"center"},icon:{fontSize:20},iconStatus:{opacity:.9,marginRight:e.spacing(1)},success:{backgroundColor:te.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main}}}),{withTheme:!0})(fe),me=(L.a.shape({id:L.a.number,level:L.a.string,length:L.a.string,status:L.a.string,startDate:L.a.string,endDate:L.a.string}),L.a.shape({level:L.a.string,length:L.a.string,status:L.a.string,startDate:L.a.oneOfType([L.a.string,L.a.instanceOf(Date)]),endDate:L.a.oneOfType([L.a.string,L.a.instanceOf(Date)])}),L.a.shape({level:L.a.oneOfType([L.a.bool,L.a.shape()]),length:L.a.oneOfType([L.a.bool,L.a.shape()]),status:L.a.oneOfType([L.a.bool,L.a.shape()]),startDate:L.a.oneOfType([L.a.bool,L.a.shape()]),endDate:L.a.oneOfType([L.a.bool,L.a.shape()])}),L.a.shape({level:L.a.oneOfType([L.a.string,L.a.shape()]),length:L.a.oneOfType([L.a.string,L.a.shape()]),status:L.a.oneOfType([L.a.string,L.a.shape()]),startDate:L.a.oneOfType([L.a.string,L.a.shape()]),endDate:L.a.oneOfType([L.a.string,L.a.shape()])}),n(199)),ve=n(204),ge=n(408),Oe=n(409),ye=n(413),ke=n(16),Ee=n(412),Se=n(200),je={en:n(74).a},De=n(416),we=n(407),Ce=n(405),Pe=n(406),xe=n(404),Fe=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={open:!1},n.handleOpen=n.handleOpen.bind(Object(M.a)(n)),n.discard=n.discard.bind(Object(M.a)(n)),n.confirm=n.confirm.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"handleOpen",value:function(){this.setState((function(){return{open:!0}}))}},{key:"handleClose",value:function(e){var t=this.props.onCloseDialog;this.setState((function(){return{open:!1}})),t(e)}},{key:"discard",value:function(){this.handleClose(t.DISCARD)}},{key:"confirm",value:function(){this.handleClose(t.CONFIRM)}},{key:"render",value:function(){var e=this.state.open,t=this.props,n=t.dialog,a=n.title,r=n.description,i=n.confirmLabel,o=n.discardLabel,c=t.Renderer;return d.a.createElement("div",null,d.a.createElement(c,{onClick:this.handleOpen}),d.a.createElement(De.a,{open:e,onClose:this.handleClose,"aria-labelledby":"confirmation-dialog-title","aria-describedby":"confirmation-dialog-description"},d.a.createElement(xe.a,{id:"confirmation-dialog-title"},a),d.a.createElement(Ce.a,null,d.a.createElement(Pe.a,{id:"confirmation-dialog-description"},r)),d.a.createElement(we.a,null,d.a.createElement(ge.a,{onClick:this.discard,autoFocus:!0},o),d.a.createElement(ge.a,{onClick:this.confirm,color:"primary"},i))))}}]),t}(u.PureComponent);Fe.CONFIRM="CONFIRM",Fe.DISCARD="DISCARD";var Te=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).handleConfirmationDialogAction=n.handleConfirmationDialogAction.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"handleConfirmationDialogAction",value:function(e){var t=this.props,n=t.onDelete,a=t.values;switch(e){case Fe.CONFIRM:n(a)}}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.values,a=e.touched,r=e.errors,i=e.handleChange,o=e.handleBlur,c=e.handleSubmit,s=e.onDelete,l=e.onCancelEditing,u=e.isSubmitting,p=e.setFieldValue,b=e.t,f=e.i18n,h=function(e){return function(t){p(e,t)}},m=function(e){return e?new Date(e).toLocaleString(f.language):""},v=function(e){return r[e]&&a[e]?r[e]:""};return d.a.createElement(ke.a,{utils:Se.a,locale:je[f.language]},d.a.createElement("form",{onSubmit:function(e){e.stopPropagation(),c(e)},className:t.root,"data-testid":"productSubscription-form"},d.a.createElement(Oe.a,{container:!0,spacing:2},d.a.createElement(Oe.a,{item:!0,xs:12,sm:6},d.a.createElement(ye.a,{id:"productSubscription-level",error:r.level&&a.level,helperText:v("level"),className:t.textField,onChange:i,onBlur:o,value:n.level,name:"level",label:b("entities.productSubscription.level")})),d.a.createElement(Oe.a,{item:!0,xs:12,sm:6},d.a.createElement(ye.a,{id:"productSubscription-length",error:r.length&&a.length,helperText:v("length"),className:t.textField,onChange:i,onBlur:o,value:n.length,name:"length",label:b("entities.productSubscription.length")})),d.a.createElement(Oe.a,{item:!0,xs:12,sm:6},d.a.createElement(ye.a,{id:"productSubscription-status",error:r.status&&a.status,helperText:v("status"),className:t.textField,onChange:i,onBlur:o,value:n.status,name:"status",label:b("entities.productSubscription.status")})),d.a.createElement(Oe.a,{item:!0,xs:12,sm:6},d.a.createElement(Ee.a,{id:"productSubscription-startDate",error:r.startDate&&a.startDate,helperText:v("startDate"),className:t.textField,onChange:h("startDate"),value:n.startDate,labelFunc:m,name:"startDate",label:b("entities.productSubscription.startDate")})),d.a.createElement(Oe.a,{item:!0,xs:12,sm:6},d.a.createElement(Ee.a,{id:"productSubscription-endDate",error:r.endDate&&a.endDate,helperText:v("endDate"),className:t.textField,onChange:h("endDate"),value:n.endDate,labelFunc:m,name:"endDate",label:b("entities.productSubscription.endDate")})),s&&d.a.createElement(Fe,{onCloseDialog:this.handleConfirmationDialogAction,dialog:{title:b("entities.productSubscription.deleteDialog.title"),description:b("entities.productSubscription.deleteDialog.description"),confirmLabel:b("common.yes"),discardLabel:b("common.no")},Renderer:function(e){var t=e.onClick;return d.a.createElement(ge.a,{onClick:t,disabled:u},b("common.delete"))}}),d.a.createElement(ge.a,{onClick:l,disabled:u,"data-testid":"cancel-btn"},b("common.cancel")),d.a.createElement(ge.a,{type:"submit",color:"primary",disabled:u,"data-testid":"submit-btn"},b("common.save")))))}}]),t}(u.PureComponent);Te.defaultProps={onCancelEditing:function(){},classes:{},values:{},touched:{},errors:{},onDelete:null};var Ne={level:"",length:"",status:"",startDate:null,endDate:null},Ue={mapPropsToValues:function(e){return e.productSubscription||Ne},enableReinitialize:!0,validationSchema:E.object().shape({level:E.string(),length:E.string(),status:E.string(),startDate:E.date().nullable(),endDate:E.date().nullable()}),handleSubmit:function(e,t){var n=t.setSubmitting;(0,t.props.onSubmit)(e),n(!1)},displayName:"ProductSubscriptionForm"},Ae=Object(ve.a)(Object(ne.a)((function(e){return{root:{margin:e.spacing(3)},textField:{width:"100%"}}}),{withTheme:!0}),Object(j.b)(),Object(me.a)(Ue))(Te),Re=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={notificationMessage:null,notificationStatus:null},n.closeNotification=n.closeNotification.bind(Object(M.a)(n)),n.handleDelete=n.handleDelete.bind(Object(M.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.keycloak;e.initialized&&e.authenticated&&this.fetchData()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.keycloak,a=t.id,r=n.initialized&&n.authenticated,i=e.keycloak.authenticated!==r,o=a&&a!==e.id;r&&(o||i)&&this.fetchData()}},{key:"fetchData",value:function(){var e=Object(R.a)(A.a.mark((function e(){var t,n,a,r,i;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.keycloak,a=t.id,r=t.serviceUrl,!(n.initialized&&n.authenticated)||!a){e.next=13;break}return e.prev=3,e.next=6,Y(r,a);case 6:i=e.sent,this.setState((function(){return{productSubscription:i}})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"closeNotification",value:function(){this.setState((function(){return{notificationMessage:null}}))}},{key:"handleSubmit",value:function(){var e=Object(R.a)(A.a.mark((function e(t){var n,a,r,i,o,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onUpdate,i=n.keycloak,o=n.serviceUrl,!(i.initialized&&i.authenticated)){e.next=14;break}return e.prev=3,e.next=6,X(o,t);case 6:c=e.sent,r(c),this.setState({productSubscription:c,notificationMessage:a("common.dataSaved"),notificationStatus:he.SUCCESS}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.handleError(e.t0);case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleDelete",value:function(){var e=Object(R.a)(A.a.mark((function e(t){var n,a,r,i,o;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onDelete,i=n.keycloak,o=n.serviceUrl,!(i.initialized&&i.authenticated)){e.next=13;break}return e.prev=3,e.next=6,Z(o,t.id);case 6:r(t),this.setState({productSubscription:null,notificationMessage:a("common.dataDeleted"),notificationStatus:he.SUCCESS}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,n=t.t;(0,t.onError)(e),this.setState((function(){return{notificationMessage:n("error.dataLoading"),notificationStatus:he.ERROR}}))}},{key:"render",value:function(){var e,t=this.props,n=t.keycloak,a=t.onCancelEditing,r=t.t,i=this.state,o=i.notificationMessage,c=i.notificationStatus,s=i.productSubscription;return e="undefined"===typeof s?r("entities.productSubscription.notFound"):null===s?r("entities.productSubscription.deleted"):d.a.createElement(Ae,{productSubscription:s,onSubmit:this.handleSubmit,onCancelEditing:a,onDelete:this.handleDelete}),d.a.createElement(d.a.Fragment,null,d.a.createElement(B,{keycloak:n},r("common.notAuthenticated")),d.a.createElement(W,{keycloak:n},e),d.a.createElement(he,{status:c,message:o,onClose:this.closeNotification}))}}]),t}(u.PureComponent);Re.defaultProps={onCancelEditing:function(){},onDelete:function(){},onUpdate:function(){},onError:function(){},serviceUrl:""};var Me=H(Object(j.b)()(Re)),ze=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={notificationMessage:null,notificationStatus:null},n.closeNotification=n.closeNotification.bind(Object(M.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"closeNotification",value:function(){this.setState({notificationMessage:null})}},{key:"handleSubmit",value:function(){var e=Object(R.a)(A.a.mark((function e(t){var n,a,r,i,o,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onCreate,i=n.keycloak,o=n.serviceUrl,!(i.initialized&&i.authenticated)){e.next=14;break}return e.prev=3,e.next=6,Q(o,t);case 6:c=e.sent,r(c),this.setState({notificationMessage:a("common.dataSaved"),notificationStatus:he.SUCCESS}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.handleError(e.t0);case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,n=t.onError,a=t.t;n(e),this.setState({notificationMessage:a("error.dataLoading"),notificationStatus:he.ERROR})}},{key:"render",value:function(){var e=this.props,t=e.keycloak,n=e.onCancelEditing,a=e.t,r=this.state,i=r.notificationMessage,o=r.notificationStatus;return d.a.createElement(d.a.Fragment,null,d.a.createElement(B,{keycloak:t},a("common.notAuthenticated")),d.a.createElement(W,{keycloak:t},d.a.createElement(Ae,{onSubmit:this.handleSubmit,onCancelEditing:n})),d.a.createElement(he,{status:o,message:i,onClose:this.closeNotification}))}}]),t}(u.PureComponent);ze.defaultProps={onError:function(){},onCancelEditing:function(){},onCreate:function(){},serviceUrl:""};var Le=H(Object(j.b)()(ze));function Ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function He(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ie(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ie(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var We=function(){return window&&window.entando&&window.entando.keycloak&&He({},window.entando.keycloak,{initialized:!0})||{initialized:!1}},Be={id:"id",hidden:"hidden",locale:"locale",disableDefaultEventHandler:"disable-default-event-handler",serviceUrl:"service-url"},Je=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).keycloak=We(),n.onCreate=F(N.create),n.onCancelEditing=F(N.cancelEditing),n.onDelete=F(N.delete),n.onUpdate=F(N.update),n.onErrorCreate=F(N.errorCreate),n.onErrorUpdate=F(N.errorUpdate),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"attributeChangedCallback",value:function(e,t,n){if(this.container&&t!==n){if(!Object.values(Be).includes(e))throw new Error("Untracked changed attribute: ".concat(e));e===Be.disableDefaultEventHandler&&this.onToggleDisableDefaultEvent(),this.render()}}},{key:"connectedCallback",value:function(){var e=this;this.container=document.createElement("div"),this.mountPoint=document.createElement("div"),this.container.appendChild(this.mountPoint);var t,n,a=this.attachShadow({mode:"open"});a.appendChild(this.container),this.jss=Object(y.b)(He({},Object(m.a)(),{insertionPoint:this.container})),this.muiTheme=Object(O.a)({props:{MuiDialog:{container:this.mountPoint},MuiPopover:{container:this.mountPoint}}}),this.keycloak=He({},We(),{initialized:!0}),this.unsubscribeFromKeycloakEvent=(t="keycloak",n=function(){e.keycloak=He({},We(),{initialized:!0}),e.render()},window.addEventListener(t,n),function(){window.removeEventListener(t,n)}),this.onToggleDisableDefaultEvent(),this.render(),h()(a)}},{key:"disconnectedCallback",value:function(){this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent()}},{key:"defaultWidgetEventHandler",value:function(){var e=this;return function(t){var n=T.tableAdd,a=T.cancelEditing,r=T.create,i=T.edit,o=T.delete,c=T.tableSelect,s=T.update,l=Be.id;switch(t.type){case n:e.setAttribute(l,"");break;case i:e.hidden=!1,e.setAttribute(l,t.detail.payload.id);break;case r:case a:case s:e.hidden=!0;break;case o:e.hidden=!0,e.setAttribute(l,"");break;case c:e.setAttribute(l,t.detail.payload.id);break;default:throw new Error("Unsupported event: ".concat(t.type))}}}},{key:"onToggleDisableDefaultEvent",value:function(){var e,t,n="true"===this.getAttribute(Be.disableDefaultEventHandler);if(n!==this.defaultEventHandlerDisabled){if(n)this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent();else{var a=this.defaultWidgetEventHandler();this.unsubscribeFromWidgetEvents=(e=Object.values(T),t=a,e.forEach((function(e){return window.addEventListener(e,t)})),function(){e.forEach((function(e){return window.removeEventListener(e,t)}))})}this.defaultEventHandlerDisabled=n}}},{key:"render",value:function(){var e=this.getAttribute(Be.serviceUrl)||"";if("true"===this.getAttribute(Be.hidden))b.a.render(d.a.createElement(d.a.Fragment,null));else{var t=this.getAttribute(Be.locale);x(t);var n=this.getAttribute(Be.id),a=n?d.a.createElement(Me,{id:n,onUpdate:this.onUpdate,onError:this.onErrorUpdate,serviceUrl:e},null):d.a.createElement(Le,{onCreate:this.onCreate,onError:this.onErrorCreate,serviceUrl:e},null);b.a.render(d.a.createElement(k.Provider,{value:this.keycloak},d.a.createElement(v.b,{jss:this.jss},d.a.createElement(g.a,{theme:this.muiTheme},a))),this.mountPoint)}}}],[{key:"observedAttributes",get:function(){return Object.values(Be)}}]),t}(Object(s.a)(HTMLElement));customElements.define("product-subscription-form",Je)}},[[219,1,2]]]);
//# sourceMappingURL=main.3029e144.chunk.js.map