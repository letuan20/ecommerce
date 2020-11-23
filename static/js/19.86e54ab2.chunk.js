(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[19],{255:function(e,a,t){},327:function(e,a,t){"use strict";t.r(a);var n=t(54),l=t.n(n),r=t(55),c=t(0),o=t.n(c),s=t(2),m=t(12),i=t(123),u=t.n(i),d=t(111),E=t(114),p=t(253),h=t(254),f=t.n(h),g=t(80),N=t(82),w=t(84),v=t(50),b=(t(255),void 0),k=d.a({email:d.c("Enter your email").email("Enter a valid email").required("Email is required"),password:d.c("Enter your password").matches(/(?=.*[a-z])/,"One lowercase required!").matches(/(?=.*[A-Z])/,"One uppercase required!").matches(/(?=.*[0-9])/,"One numeric required!").min(8,"Password should be of minimum 8 characters length").required("Password is required")}),S={email:"",password:""};a.default=function(){var e=Object(s.g)();Object(c.useEffect)((function(){localStorage.removeItem("page")}),[]);var a=function(a){fetch("https://personalecommerce.herokuapp.com/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.email,password:a.password})}).then((function(e){if(422===e.status)throw new Error("Validation failed");if(200!==e.status&&201!==e.status)throw new Error("Could not authenticate you!");return e.json()})).then((function(e){localStorage.setItem("isAuth",!0),localStorage.setItem("token",e.token),localStorage.setItem("userId",e.userId),localStorage.setItem("userName",e.name);var a=new Date((new Date).getTime()+36e5);localStorage.setItem("expiryDate",a.toISOString()),setTimeout((function(){b.logoutHandler()}),36e5)})).then((function(a){e.push("/")})).catch((function(e){console.log(e)}))},t=Object(E.a)({initialValues:S,validationSchema:k,onSubmit:function(){var e=Object(r.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.email,r=t.password,a({email:n,password:r});case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()});return o.a.createElement("div",{className:"loginSection"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-6",style:{display:"block",margin:"auto"}},o.a.createElement("div",{className:"login-form"},o.a.createElement("a",{"aria-current":"page",className:"navbar-brand login",href:"/"},"Winkel"),o.a.createElement("h2",{className:"loginTitle"},"Login"),o.a.createElement("form",{onSubmit:t.handleSubmit},o.a.createElement(w.a,{name:"email",label:"Email",type:"email",value:t.values.email,onChange:t.handleChange,placeholder:"Email",onBlur:t.handleBlur,invalid:t.errors.email&&t.touched.email}),o.a.createElement(g.a,{messageErr:t.errors.email,touchedOop:t.touched.email}),o.a.createElement(w.a,{name:"password",label:"Password",type:"password",placeholder:"Password",value:t.values.password,onChange:t.handleChange,onBlur:t.handleBlur,invalid:t.touched.password&&t.errors.password}),o.a.createElement(g.a,{messageErr:t.errors.password,touchedOop:t.touched.password}),o.a.createElement("div",{className:"giCheck"},o.a.createElement("div",{className:"giMore"},o.a.createElement(m.c,{to:"/reset-password",className:"forgetPass"},"Forget your Password"))),o.a.createElement(N.a,{auth:"SIGN IN"}),o.a.createElement(p.GoogleLogin,{className:"google",clientId:"817246329623-n2jra5ui603dkaugk86sfc5geef37mfm.apps.googleusercontent.com",buttonText:"Login",onSuccess:function(a){u()({method:"POST",url:"https://personalecommerce.herokuapp.com/auth/googleLogin",data:{tokenId:a.tokenId}}).then((function(e){if(422===e.status)throw new Error("Validation failed");if(200!==e.status&&201!==e.status)throw new Error("Could not authenticate you!");return e.data})).then((function(e){localStorage.setItem("userName",e.name),localStorage.setItem("isAuth",!0),localStorage.setItem("token",e.token),localStorage.setItem("userId",e.userId);var a=new Date((new Date).getTime()+36e5);localStorage.setItem("expiryDate",a.toISOString())})).then((function(a){e.push("/")})).catch((function(e){console.log(e)}))},onFailure:function(e){},cookiePolicy:"single_host_origin"}," ",o.a.createElement("span",null," Login with Google")),o.a.createElement(f.a,{className:"facebook",appId:"730621214163335",autoLoad:!1,callback:function(a){u()({method:"POST",url:"https://personalecommerce.herokuapp.com/auth/facebookLogin",data:{accessToken:a.accessToken,userID:a.userID,name:a.name}}).then((function(e){if(422===e.status)throw new Error("Validation failed");if(200!==e.status&&201!==e.status)throw new Error("Could not authenticate you!");return e})).then((function(e){localStorage.setItem("userName",e.data.name),localStorage.setItem("isAuth",!0),localStorage.setItem("token",e.token),localStorage.setItem("userId",e.userId);var a=new Date((new Date).getTime()+36e5);localStorage.setItem("expiryDate",a.toISOString())})).then((function(a){e.push("/")})).catch((function(e){console.log(e)}))}})),o.a.createElement("div",{className:"switchSignup"},o.a.createElement(m.c,{to:"/signup",className:"orSignup"},"Or Create An Account")))))),o.a.createElement(v.a,null))}},50:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(63),c=t.n(r),o=t(64),s=t.n(o),m=t(65),i=t.n(m),u=t(60),d=t.n(u),E=t(61),p=t.n(E),h=t(62),f=t.n(h),g=t(59),N=t.n(g);t(51);a.a=function(){return l.a.createElement("footer",{className:" bg-light ftco-section ftco-footer",style:{marginTop:"1rem"}},l.a.createElement("div",{className:"container",style:{paddingTop:"2rem"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"mouses",onClick:function(){window.scrollTo(0,0)}},l.a.createElement("a",{href:"# ",className:"mouse-icon"},l.a.createElement("div",{className:"mouse-wheel"},l.a.createElement("span",null,l.a.createElement(N.a,null)))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md"},l.a.createElement("div",{className:"ftco-footer-widget mb-4"},l.a.createElement("h2",{className:"navbar-brand"},"Winkel"),l.a.createElement("p",null,"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."),l.a.createElement("ul",{className:"ftco-footer-social list-unstyled float-md-left float-lft mt-1"},l.a.createElement("li",{className:"ftco-animated"},l.a.createElement("p",null,l.a.createElement("span",null,l.a.createElement(d.a,null)))),l.a.createElement("li",{className:"fftco-animated"},l.a.createElement("p",null,l.a.createElement("span",null,l.a.createElement(p.a,null)))),l.a.createElement("li",{className:"ftco-animated"},l.a.createElement("p",null,l.a.createElement("span",null,l.a.createElement(f.a,null))))))),l.a.createElement("div",{className:"col-md"},l.a.createElement("div",{className:"ftco-footer-widget mb-4 ml-md-5"},l.a.createElement("h2",{className:"ftco-heading-2"},"Menu"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement("p",{className:"d-block"},"Shop")),l.a.createElement("li",null,l.a.createElement("p",{className:"d-block"},"About")),l.a.createElement("li",null,l.a.createElement("p",{className:"d-block"},"Journal")),l.a.createElement("li",null,l.a.createElement("p",{className:"d-block"},"Contact Us"))))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"ftco-footer-widget mb-4"},l.a.createElement("h2",{className:"ftco-heading-2"},"Help"),l.a.createElement("div",{className:"d-flex"},l.a.createElement("ul",{className:"list-unstyled mr-l-5 pr-l-3 mr-4"},l.a.createElement("li",null,l.a.createElement("p",{className:"d-block"},"Shipping Information")),l.a.createElement("li",null,l.a.createElement("p",{className:"d-block"},"Returns & Exchange")),l.a.createElement("li",null,l.a.createElement("p",{className:"d-block"},"Terms & Conditions")),l.a.createElement("li",null,l.a.createElement("p",{className:"d-block"},"Privacy Policy"))),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement("p",{className:"d-block"},"FAQs")),l.a.createElement("li",null,l.a.createElement("p",{className:"d-block"},"Contact")))))),l.a.createElement("div",{className:"col-md"},l.a.createElement("div",{className:"ftco-footer-widget mb-4"},l.a.createElement("h2",{className:"ftco-heading-2"},"Contact Information"),l.a.createElement("div",{className:"block-23 mb-3"},l.a.createElement("ul",{style:{listStyle:"none",paddingLeft:"0"}},l.a.createElement("li",null,l.a.createElement("span",{className:"icon"},l.a.createElement(c.a,null)),l.a.createElement("span",{className:"text"},"KTX DHQG,Khu ph\u1ed1 6, ph\u01b0\u1eddng Linh Trung, qu\u1eadn Th\u1ee7 \u0110\u1ee9c, Th\xe0nh ph\u1ed1 H\u1ed3 Ch\xed Minh, Vi\u1ec7t Nam")),l.a.createElement("li",null,l.a.createElement("span",{className:"icon"},l.a.createElement(s.a,null)),l.a.createElement("span",{className:"text"},"039 23 63 634")),l.a.createElement("li",null,l.a.createElement("span",{className:"icon"},l.a.createElement(i.a,null)),l.a.createElement("span",{className:"text"},"shinjnt4@gmail.com")))))))))}},51:function(e,a,t){},80:function(e,a,t){"use strict";var n=t(0),l=t.n(n);t(81);a.a=function(e){var a=e.messageErr,t=e.touchedOop;return a&&t?l.a.createElement("span",{className:"error-validate-form"},a):l.a.createElement(l.a.Fragment,null)}},81:function(e,a,t){},82:function(e,a,t){"use strict";var n=t(0),l=t.n(n);t(83);a.a=function(e){return l.a.createElement("button",{type:"submit",className:["authButton","siteButton"].join(" ")},e.auth)}},83:function(e,a,t){},84:function(e,a,t){"use strict";var n=t(0),l=t.n(n);t(85);a.a=function(e){return l.a.createElement("div",{className:"groupInputComponent"},l.a.createElement("label",{className:"textLabelComponent"},e.label," *"),l.a.createElement("input",{type:e.type,className:"inputComponent ".concat(e.invalid?"validate-form-error":""),placeholder:e.placeholder,name:e.name,onBlur:e.onBlur,onChange:e.onChange,value:e.value}))}},85:function(e,a,t){}}]);
//# sourceMappingURL=19.86e54ab2.chunk.js.map