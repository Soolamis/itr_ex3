(this.webpackJsonpsite=this.webpackJsonpsite||[]).push([[0],{111:function(e,t,a){e.exports=a(186)},116:function(e,t,a){},182:function(e,t){},185:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),s=a.n(c),o=(a(116),a(100)),i=a(99),l=a(30),u=a(31),m=a(13),g=a(223),h=a(220),f=a(225),b=a(217),d=Object(b.a)((function(e){return{lightTextField:{"& input":{color:e.palette.secondary.contrastText}}}}));function v(e){var t=e.value,a=e.onChange,n=d();return r.a.createElement(f.a,{variant:"filled",className:n.lightTextField,color:"secondary",onChange:a,value:t,size:"medium"})}var E=a(221),p=Object(b.a)((function(e){return{lightButton:{color:e.palette.primary.contrastText}}}));function j(e){var t=e.onChange,a=e.onButtonClick,n=e.value,c=e.buttonText,s=e.mainXS,o=void 0===s?3:s,i=p();return r.a.createElement(h.a,{container:!0,justify:"flex-start",alignItems:"center",spacing:0},r.a.createElement(h.a,{item:!0,xs:o},r.a.createElement(v,{value:n,onChange:t})),r.a.createElement(h.a,{item:!0,xs:1},r.a.createElement(E.a,{className:i.lightButton,onClick:a,fullWidth:!0},c)))}var k=a(222),O=a(91),w=a.n(O),C=Object(b.a)((function(e){return{label:Object(u.a)({},e.typography.h4,{color:e.palette.primary.contrastText}),icon:{color:e.palette.primary.contrastText}}}));function x(e){var t=e.value,a=e.onButtonClick,n=e.mainXS,c=void 0===n?3:n,s=C();return r.a.createElement(h.a,{container:!0,justify:"flex-start",alignItems:"center",spacing:0},r.a.createElement(h.a,{container:!0,item:!0,xs:c,justify:"flex-start",alignItems:"center"},r.a.createElement("div",{className:s.label},t)),r.a.createElement(h.a,{item:!0,xs:1},r.a.createElement(k.a,{className:s.icon,onClick:a},r.a.createElement(w.a,null))))}var y=a(224);function D(e){switch(e.type){default:console.error("Wrong widget type "+e.type);break;case"label":return r.a.createElement(x,e);case"edit":return r.a.createElement(j,e)}}function M(e){var t=e.username,a=e.onChange,n=e.onButtonClick,c=e.type;return r.a.createElement(g.a,{position:"static"},r.a.createElement(y.a,null,r.a.createElement(D,{onChange:a,value:t,buttonText:"apply",type:c,onButtonClick:n,mainXS:3})))}var N=a(226),I=a(21),_=a.n(I),U=Object(b.a)({box:{borderRadius:"5px"}});function B(e){var t=e.children,a=e.className,n=U();return r.a.createElement(N.a,{className:_()(a,n.box)},t)}var S=Object(b.a)({message:{paddingBottom:"0.2em"},userMessage:{backgroundColor:"#e8e8e8"},otherMessage:{backgroundColor:"#b5ceff"}});function T(e){var t=e.children,a=e.type,n=S();return r.a.createElement(h.a,{container:!0},r.a.createElement(h.a,{item:!0},r.a.createElement(B,{className:_()(n[a+"Message"],n.message)},r.a.createElement(y.a,null,t))))}var H=a(98),W=a(228);function q(e){var t=e.anchorEl,a=e.onClose,n=e.onDelete,c=e.onEdit;return r.a.createElement(H.a,{anchorEl:t,open:Boolean(t),onClose:a},r.a.createElement(W.a,{onClick:function(){c(),a()}},"Edit"),r.a.createElement(W.a,{onClick:function(){n(),a()}},"Delete"))}var A=a(46),P=a.n(A),X=a(92),F=a.n(X),J=new P.a.Converter,L=Object(b.a)((function(e){return{label:{color:e.palette.primary.main,marginBottom:"0.4em"},message:{"& p":{marginTop:"0.1em",marginBottom:"0.1em"}}}}));var R,z=(R=function(e){var t=e.type,a=e.message,c=e.username,s=e.onMessageEdit,o=e.onMessageDelete,i=L(),l=Object(n.useState)(null),u=Object(m.a)(l,2),g=u[0],f=u[1],b=Object(n.useCallback)((function(e){"user"===t&&f(e.currentTarget),e.preventDefault()}),[t]),d=Object(n.useCallback)((function(){f(null)}),[]);return r.a.createElement(N.a,{onContextMenu:b},r.a.createElement(T,{type:t},r.a.createElement(h.a,{container:!0,direction:"column",alignItems:"flex-start"},r.a.createElement(h.a,{item:!0},r.a.createElement("div",{className:i.label},c)),r.a.createElement(h.a,{item:!0,className:i.message},r.a.createElement("div",null,F()(J.makeHtml(a)))))),r.a.createElement(q,{anchorEl:g,onDelete:o,onEdit:s,onClose:d}))},function(e){var t={user:"flex-end",other:"flex-start"}[e.type];return r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(h.a,{container:!0,direction:"row",justify:t},r.a.createElement(h.a,{item:!0,xs:6},r.a.createElement(h.a,{container:!0,direction:"row",justify:t},r.a.createElement(h.a,{item:!0},r.a.createElement(R,e))))))});function G(e){var t=e.usernames,a=e.userID,n=e.messages,c=e.onMessageEdit,s=e.onMessageDelete;return r.a.createElement(h.a,{container:!0,spacing:1,direction:"column",wrap:"nowrap"},Object.keys(n).sort((function(e,t){return e-t})).map((function(e){var o=n[e].authorUserID,i=a==o?"user":"other";return r.a.createElement(z,{key:e,type:i,message:n[e].text,username:t[o],onMessageEdit:function(){return c(e)},onMessageDelete:function(){return s(e)}})})))}var Y=a(94),$=a.n(Y),K=a(93),Q=a.n(K),V=(a(151),new P.a.Converter),Z=Object(b.a)({textArea:{height:"100px"},preview:{height:"100px"}});function ee(e){var t=e.message,a=e.onClick,c=e.onChange,s=Z(),o=Object(n.useState)("write"),i=Object(m.a)(o,2),l=i[0],u=i[1];return r.a.createElement(h.a,{container:!0,alignItems:"center"},r.a.createElement(h.a,{item:!0,xs:11},r.a.createElement(Q.a,{value:t,onChange:c,classes:s,selectedTab:l,onTabChange:u,generateMarkdownPreview:function(e){return Promise.resolve(V.makeHtml(e))},minPreviewHeight:100,maxEditorHeight:200,minEditorHeight:100,textAreaProps:{autoFocus:!0}})),r.a.createElement(h.a,{item:!0,xs:!0},r.a.createElement(k.a,{color:"primary",onClick:a},r.a.createElement($.a,null))))}var te=a(95),ae=a(96),ne=a(97),re=a.n(ne),ce=function(){function e(){Object(te.a)(this,e),this.socket={},this.__handleNewMessage=function(){},this.__handleNewUser=function(){},this.__handleDeleteMessage=function(){},this.socket=re.a.connect("ws://arcane-thicket-60613.herokuapp.com/socket.io/?EIO=4&transport=websocket"),this.socket.on("message",this.handleNewMessage.bind(this)),this.socket.on("user",this.handleNewUser.bind(this)),this.socket.on("delete message",this.handleDeleteMessage.bind(this))}return Object(ae.a)(e,[{key:"subscribeNewMessage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e,t){};this.__handleNewMessage=e}},{key:"subscribeNewUsers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e,t){};this.__handleNewUser=e}},{key:"subscribeDeleteMessage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){};this.__handleDeleteMessage=e}},{key:"handleNewMessage",value:function(e){var t=e.messageID,a=e.authorID,n=e.text,r=e.authorUsername;this.__handleNewMessage(t,a,n,r)}},{key:"handleNewUser",value:function(e){var t=e.id,a=e.username;this.__handleNewUser(t,a)}},{key:"handleDeleteMessage",value:function(e){var t=e.id;this.__handleDeleteMessage(t)}},{key:"requestUserID",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};fetch("/api/newUserID").then((function(t){t.ok&&t.json().then((function(t){e(t.id)}))}))}},{key:"requestInitData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e,t){};fetch("/api/initData").then((function(t){t.ok&&t.json().then((function(t){e(t.messages,t.usernames)}))}))}},{key:"sendMessage",value:function(e,t,a){this.socket.emit("message",{userID:e,messageID:t,message:a})}},{key:"deleteMessage",value:function(e,t){this.socket.emit("delete message",{messageID:e,userID:t})}},{key:"changeUsername",value:function(e,t){this.socket.emit("username",{id:e,username:t})}}]),e}(),se=a(56),oe=a.n(se),ie=(a(185),Object(b.a)((function(e){return{root:{height:"100vh",overflow:"hidden"},messageListWrapper:{flexGrow:1,overflowY:"auto",overflowX:"hidden",marginTop:e.spacing(),marginBottom:e.spacing()},fullHeight:{height:"100%"},gridWrapper:{boxShadow:e.shadows[4]}}})));var le=function(){var e=ie(),t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],s=a[1],g=Object(n.useState)(""),f=Object(m.a)(g,2),b=f[0],d=f[1],v=Object(n.useState)([]),E=Object(m.a)(v,2),p=E[0],j=E[1],k=Object(n.useState)({}),O=Object(m.a)(k,2),w=O[0],C=O[1],x=Object(n.useState)("label"),D=Object(m.a)(x,2),I=D[0],U=D[1],B=Object(n.useState)("new"),S=Object(m.a)(B,2),T=S[0],H=S[1],W=Object(n.useState)(0),q=Object(m.a)(W,2),A=q[0],P=q[1],X=Object(n.useRef)(),F=Object(n.useCallback)((function(e){P(e),oe.a.set("userID",e,{expires:90})}),[]),J=Object(n.useCallback)((function(){w[A]=c,U("label"),X.current.changeUsername(A,c)}),[w,A,c]),L=Object(n.useCallback)((function(){U("edit")}),[U]),R=Object(n.useCallback)((function(e){return"edit"===I?J(e):L(e)}),[J,L,I]),z=Object(n.useCallback)((function(e){d(p[e].text),H(e)}),[p]),Y=Object(n.useCallback)((function(e){X.current.deleteMessage(e,A)}),[A]),$=Object(n.useCallback)((function(e,t){C(Object(u.a)({},w,Object(l.a)({},e,t)))}),[w]),K=Object(n.useCallback)((function(){X.current.sendMessage(A,T,b),d(""),H("new")}),[A,T,b]),Q=Object(n.useCallback)((function(e){p[e];var t=Object(o.a)(p,[e].map(i.a));j(t)}),[p]),V=Object(n.useCallback)((function(e,t,a,n){j(Object(u.a)({},p,Object(l.a)({},e,{authorUserID:t,text:a}))),C(Object(u.a)({},w,Object(l.a)({},t,n)))}),[p,w]);return Object(n.useEffect)((function(){X.current=new ce}),[]),Object(n.useEffect)((function(){var e=oe.a.get("userID");e?(P(e),s(w[e])):(X.current.requestUserID(F),s("Anonimus"))}),[F,w]),Object(n.useEffect)((function(){s(w[A])}),[w,A]),Object(n.useEffect)((function(){X.current.requestInitData((function(e,t){j(e),C(t)}))}),[]),Object(n.useEffect)((function(){X.current.subscribeNewUsers($),X.current.subscribeNewMessage(V),X.current.subscribeDeleteMessage(Q)}),[$,V,Q]),r.a.createElement("div",{className:_()("App",e.root)},r.a.createElement(y.a,{className:_()(e.fullHeight),maxWidth:"md"},r.a.createElement(N.a,{className:_()(e.fullHeight,e.gridWrapper)},r.a.createElement(h.a,{container:!0,direction:"column",className:e.fullHeight,wrap:"nowrap",spacing:0},r.a.createElement(h.a,{item:!0},r.a.createElement(M,{username:c,type:I,onChange:function(e){return s(e.target.value)},onButtonClick:R})),r.a.createElement(h.a,{item:!0,className:e.messageListWrapper,xs:12,container:!0,direction:"column-reverse"},r.a.createElement(y.a,null,r.a.createElement(G,{messages:p,usernames:w,userID:A,onMessageDelete:Y,onMessageEdit:z}))),r.a.createElement(h.a,{item:!0},r.a.createElement(y.a,null,r.a.createElement(ee,{message:b,onChange:d,onClick:K})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[111,1,2]]]);
//# sourceMappingURL=main.b1e19585.chunk.js.map