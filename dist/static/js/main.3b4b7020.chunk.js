(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,t,a){e.exports=a(289)},289:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(36),o=(a(129),a(131),a(17)),l=a(28),s=a(27),i=a(26),u=a.n(i),m=a(60),p=a.n(m);a(185),a(189);p.a.initializeApp({apiKey:"AIzaSyBGc4rk9kavNhiyyO3y8BfZfPaBDnogQSc",authDomain:"firecontacts-b29e1.firebaseapp.com",databaseURL:"https://firecontacts-b29e1.firebaseio.com",projectId:"firecontacts-b29e1",storageBucket:"firecontacts-b29e1.appspot.com",messagingSenderId:"792701271286"});var d=p.a.auth(),h=p.a.firestore(),f=a(20),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!1},t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"LOADING_STATE":return Object(f.a)({},e,{loading:n});default:return e}},b=function(e){return{type:"LOADING_STATE",payload:e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoggedin:!1,user:null},t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"AUTH_SETUSER":return n;default:return e}},O=function(){return function(e){e(b(!0)),d.onAuthStateChanged(function(t){t?h.collection("users").doc(t.uid).get().then(function(a){e(b(!1)),e(j(a.data().contacts||[])),e({type:"AUTH_SETUSER",payload:{isLoggedin:!0,userId:t.uid,user:a.data().profile}})}):(e(b(!1)),e({type:"AUTH_SETUSER",payload:{isLoggedin:!1,user:null}}))})}},v=[],y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ADD_CONTACT":return[n].concat(Object(s.a)(e));case"REMOVE_CONTACT":var r=Object(s.a)(e),c=r.findIndex(function(e){return e.id===n});return r.splice(c,1),r;case"EDIT_CONTACT":var o=Object(s.a)(e),l=o.findIndex(function(e){return e.id===n.id});return o[l]=n.newData,o;case"SET_CONTACTS":return n;default:return e}},j=function(e){return{type:"SET_CONTACTS",payload:e}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ADD_BOOKMARK":var r=Object(s.a)(e);if(r.filter(function(e){return e.id===n.id}).length){var c=r.findIndex(function(e){return e.id===n.id});return r.splice(c,1),r}return[n].concat(Object(s.a)(e));case"REMOVE_BOOKMARK":var o=Object(s.a)(e),l=o.findIndex(function(e){return e.id===n});return o.splice(l,1),o;default:return e}},C=Object(l.c)({contacts:y,bookmarks:k,auth:g,meta:E}),S=a(119),_=Object(l.e)(C,Object(l.d)(l.a.apply(void 0,[S.a]),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),w=a(14),T=a(15),N=a(18),A=a(16),I=a(19),D=a(123),L=a(49),x=a(292),R=a(290),B=a(291),M=a(293),U=a(294),K=a(295),H=a(296),V=a(297),F=a(298),P=a(316),z=a(299),X=a(300),G=a(301),J=function(e){function t(e){var a;return Object(w.a)(this,t),(a=Object(N.a)(this,Object(A.a)(t).call(this,e))).logout=function(){a.props.authLogout(),localStorage.removeItem("auth_userId")},a.toggle=a.toggle.bind(Object(L.a)(Object(L.a)(a))),a.state={isOpen:!1},a}return Object(I.a)(t,e),Object(T.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(R.a,{color:"danger",dark:!0,expand:"md"},r.a.createElement(B.a,{tag:x.a,to:"/"},"Contact Manager"),r.a.createElement(M.a,{onClick:this.toggle}),this.props.auth.isLoggedin?r.a.createElement(U.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(K.a,{className:"ml-auto",navbar:!0},r.a.createElement(H.a,null,r.a.createElement(V.a,{tag:x.a,to:"/"},"Home")),r.a.createElement(H.a,null,r.a.createElement(V.a,{tag:x.a,to:"/add"},"New Contact")),r.a.createElement(H.a,null,r.a.createElement(V.a,{tag:x.a,to:"/bookmarks"},"Bookmarks",0!==this.props.bookmarks.length&&r.a.createElement(F.a,{className:"ml-1"},this.props.bookmarks.length))),r.a.createElement(P.a,{nav:!0,inNavbar:!0},r.a.createElement(z.a,{nav:!0,caret:!0},"Hello, ",this.props.auth.user.first_name),r.a.createElement(X.a,{right:!0},r.a.createElement(G.a,null,"settings"),r.a.createElement(G.a,{divider:!0}),r.a.createElement(G.a,{onClick:this.logout},"Logout"))))):r.a.createElement(U.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(K.a,{className:"ml-auto",navbar:!0},r.a.createElement(H.a,null,r.a.createElement(V.a,{tag:x.a,to:"/login"},"Login")),r.a.createElement(H.a,null,r.a.createElement(V.a,{tag:x.a,to:"/register"},"Register"))))))}}]),t}(r.a.Component),W=Object(o.b)(function(e){return{auth:e.auth,bookmarks:e.bookmarks}},{authLogout:function(){return function(e){d.signOut().then(function(t){e({type:"AUTH_SETUSER",payload:{isLoggedin:!1,user:null}})})}}})(J),q=a(302),Q=a(303),Z=a(304),Y=function(e){function t(){return Object(w.a)(this,t),Object(N.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null),r.a.createElement(q.a,{className:"py-5"},r.a.createElement(Q.a,null,r.a.createElement(Z.a,{sm:8,className:"mx-auto"},this.props.children))))}}]),t}(r.a.Component),$=a(305),ee=a(306),te=a(307),ae=a(308),ne=a(309),re=a(197),ce=function(e){return{type:"REMOVE_BOOKMARK",payload:e}},oe=a(121),le=function(e){function t(){var e,a;Object(w.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(N.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).state={searchTerm:""},a.isBookmarked=function(e){return!!a.props.bookmarks.find(function(t){return t.id===e})},a.removeContact=function(e){window.confirm("Sure to delete?")&&(a.props.removeContact(e.id),a.props.removeFromBookmark(e.id))},a.search=function(e){a.setState({searchTerm:e.target.value})},a}return Object(I.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e=this;return this.props.meta.loading?r.a.createElement(Y,null,r.a.createElement("div",{className:"text-center"},r.a.createElement(oe.BarLoader,{sizeUnit:"px",size:500,color:"#123abc"}))):0===this.props.contacts.length?r.a.createElement(Y,null,r.a.createElement("h1",{className:"text-muted"},"No saved contact in phonebook")):r.a.createElement(Y,null,r.a.createElement("div",null,r.a.createElement($.a,{onChange:this.search,placeholder:"Search by Name / Email / phonenumber"})),this.props.contacts.filter(function(t){return t.name.toLowerCase().includes(e.state.searchTerm.toLowerCase())||t.email.toLowerCase().includes(e.state.searchTerm.toLowerCase())||t.phone.toLowerCase().includes(e.state.searchTerm.toLowerCase())}).map(function(t){return r.a.createElement(ee.a,{className:"my-3",key:t.id},r.a.createElement(te.a,null,t.name),r.a.createElement(ae.a,null,r.a.createElement("p",null,"Name: ",t.name),r.a.createElement("p",null,"Email: ",t.email),r.a.createElement("p",null,"Phone: ",t.phone)),r.a.createElement(ne.a,null,r.a.createElement(re.a,{color:e.isBookmarked(t.id)?"primary":"secondary",onClick:function(){return e.props.addToBookMark(t)}},r.a.createElement("i",{className:"fa fa-heart"})),r.a.createElement(re.a,{color:"danger",className:"ml-2",onClick:function(){return e.removeContact(t)}},r.a.createElement("i",{className:"fa fa-times"}))))}))}}]),t}(n.Component),se=Object(o.b)(function(e){return Object(f.a)({},e)},{removeContact:function(e){return function(t){var a=localStorage.getItem("auth_userId");h.collection("users").doc(a).get().then(function(n){var r=n.data().contacts,c=r.findIndex(function(t){return t.id===e});r.splice(c,1),h.collection("users").doc(a).update({contacts:r}).then(function(a){u.a.success("Successfully Deleted!!"),t({type:"REMOVE_CONTACT",payload:e})})})}},addToBookMark:function(e){return{type:"ADD_BOOKMARK",payload:e}},removeFromBookmark:ce})(le),ie=a(83),ue=a.n(ie),me=a(122),pe=a(310),de=a(311),he=a(84),fe=a(85),Ee=function(e){function t(){var e,a;Object(w.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(N.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).state={contact:{name:"",email:"",phone:""},errors:{}},a.onSubmit=function(){var e=Object(me.a)(ue.a.mark(function e(t){var n;return ue.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n={},Object.keys(a.state.contact).map(function(e){if(Object(fe.isEmpty)(a.state.contact[e]))return n[e]="".concat(e," can't be empty");"email"===e&&!Object(fe.isEmail)(a.state.contact[e])&&(n[e]="".concat(e," is not a valid email address"))}),a.setState({errors:n}),0===Object.keys(n).length&&(a.props.addContact(Object(f.a)({id:Object(he.v4)()},a.state.contact)),a.props.saveContact(Object(f.a)({id:Object(he.v4)()},a.state.contact),a.props.auth.userId),a.props.history.push("/"));case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.onChange=function(e){var t=Object(f.a)({},a.state.contact);t[e.target.name]=e.target.value,a.setState({contact:t})},a}return Object(I.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(Y,null,r.a.createElement("div",{className:"py-3"},r.a.createElement("h2",{className:"text-uppercase"},"Add new contact")),r.a.createElement("form",{onSubmit:this.onSubmit},Object.keys(this.state.contact).map(function(t){return r.a.createElement(pe.a,{key:t},r.a.createElement($.a,{onChange:e.onChange,placeholder:t,type:"text",name:t,invalid:!(!Object.keys(e.state.errors).length||!e.state.errors[t])}),e.state.errors[t]&&r.a.createElement(de.a,null,e.state.errors[t]))}),r.a.createElement(re.a,{color:"danger"},"Save")))}}]),t}(n.Component),be=Object(o.b)(function(e){return Object(f.a)({},e)},{addContact:function(e){return{type:"ADD_CONTACT",payload:Object(f.a)({},e)}},saveContact:function(e){return function(t){var a=localStorage.getItem("auth_userId");h.collection("users").doc(a).get().then(function(t){var n=void 0!==t.data().contacts?Object(s.a)(t.data().contacts):[];n.push(e),h.collection("users").doc(a).update({contacts:n}).then(function(e){u.a.success("Successfully Saved!!")})})}}})(Ee),ge=a(42),Oe=function(e){function t(){var e,a;Object(w.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(N.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.onChange=function(e){a.setState(Object(ge.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault(),d.signInWithEmailAndPassword(a.state.email,a.state.password).then(function(e){localStorage.setItem("auth_userId",e.user.uid),a.props.history.push("/")}).catch(function(e){return u.a.error(e.message)})},a}return Object(I.a)(t,e),Object(T.a)(t,[{key:"componentDidMount",value:function(){null!==localStorage.getItem("auth_userId")&&this.props.history.push("/")}},{key:"render",value:function(){var e=this;return r.a.createElement(Y,null,r.a.createElement(ee.a,null,r.a.createElement(te.a,null,"Login"),r.a.createElement(ae.a,null,r.a.createElement("form",{onSubmit:this.onSubmit},Object.keys(this.state).map(function(t){return r.a.createElement(pe.a,{key:t},r.a.createElement($.a,{placeholder:t,value:e.state[t],name:t,onChange:e.onChange,type:"password"===t?t:"email"}))}),r.a.createElement(pe.a,null,r.a.createElement(re.a,{color:"danger"},"Register"))))))}}]),t}(n.Component),ve=Object(o.b)(null,{authSetuser:O})(Oe),ye=a(312),je=function(e){function t(){var e,a;Object(w.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(N.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).state={first_name:"",last_name:"",facebook_profile_url:"",email:"",password:""},a.onChange=function(e){a.setState(Object(ge.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.first_name,r=t.last_name,c=t.facebook_profile_url,o=t.email,l=t.password;d.createUserWithEmailAndPassword(o,l).then(function(e){localStorage.setItem("auth_userId",e.user.uid),h.collection("users").doc(e.user.uid).set({profile:{first_name:n,last_name:r,facebook_profile_url:c,email:o}}).then(function(e){a.props.history.push("/"),u.a.success("Registration successfully")})}).catch(function(e){return u.a.error(e.message)})},a}return Object(I.a)(t,e),Object(T.a)(t,[{key:"componentDidMount",value:function(){null!==localStorage.getItem("auth_userId")&&this.props.history.push("/")}},{key:"render",value:function(){var e=this;return r.a.createElement(Y,null,r.a.createElement(ee.a,null,r.a.createElement(te.a,null,"Register"),r.a.createElement(ae.a,null,r.a.createElement("form",{onSubmit:this.onSubmit},Object.keys(this.state).map(function(t){return r.a.createElement(pe.a,{key:t},r.a.createElement(ye.a,{for:t},t),r.a.createElement($.a,{id:t,placeholder:t,value:e.state[t],name:t,onChange:e.onChange,type:"password"===t||"email"===t?t:"facebook_profile_url"===t?"url":"text"}))}),r.a.createElement(pe.a,null,r.a.createElement(re.a,{color:"danger"},"Register"))))))}}]),t}(n.Component),ke=Object(o.b)(null)(je),Ce=function(e){function t(){return Object(w.a)(this,t),Object(N.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(Y,null,r.a.createElement("h1",null,"Bookmarks"),r.a.createElement("h3",null,"Total bookmarks: ",this.props.bookmarks.length),this.props.bookmarks.map(function(t){return r.a.createElement(ee.a,{className:"my-3",key:t.id},r.a.createElement(te.a,null,t.name),r.a.createElement(ae.a,null,r.a.createElement("p",null,"Name: ",t.name),r.a.createElement("p",null,"Email: ",t.email),r.a.createElement("p",null,"Phone: ",t.phone)),r.a.createElement(ne.a,null,r.a.createElement(re.a,{color:"danger",onClick:function(){return window.confirm("Sure to delete?")&&e.props.removeFromBookmark(t.id)}},r.a.createElement("i",{className:"fa fa-times"}))))}))}}]),t}(n.Component),Se=Object(o.b)(function(e){return Object(f.a)({},e)},{removeFromBookmark:ce})(Ce),_e=a(317),we=a(314),Te=a(313),Ne=a(315),Ae=function(e){var t=e.component,a=(e.isLoggedin,Object(D.a)(e,["component","isLoggedin"]));return r.a.createElement(_e.a,Object.assign({},a,{render:function(e){return null!==localStorage.getItem("auth_userId")?r.a.createElement(t,e):r.a.createElement(we.a,{to:"/login"})}}))},Ie=function(e){function t(){return Object(w.a)(this,t),Object(N.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){return r.a.createElement(Te.a,null,r.a.createElement(Ne.a,null,r.a.createElement(Ae,{exact:!0,path:"/",component:se}),r.a.createElement(Ae,{exact:!0,path:"/add",component:be}),r.a.createElement(Ae,{exact:!0,path:"/bookmarks",component:Se}),r.a.createElement(_e.a,{exact:!0,path:"/login",component:ve}),r.a.createElement(_e.a,{exact:!0,path:"/register",component:ke})))}}]),t}(n.Component),De=Object(o.b)(function(e){return Object(f.a)({},e)})(Ie);_.dispatch(O()),Object(c.render)(r.a.createElement(o.a,{store:_},r.a.createElement(De,null)),document.querySelector("#root"))}},[[124,2,1]]]);
//# sourceMappingURL=main.3b4b7020.chunk.js.map