(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{29:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(22),r=n.n(s),i=(n(29),n(3)),l=n.n(i),o=n(6),u=n(2),j=(n(31),n(11)),b=n(4),d=n(0),m=function(e){return e.ingredients.map((function(e,t){return Object(d.jsx)("ul",{className:"ingredient-list",children:Object(d.jsx)("li",{className:"ingredient-text",children:e.recipe})},t)}))},p=function(e){var t=e.recipe,n=Object(a.useState)(!1),c=Object(u.a)(n,2),s=c[0],r=c[1];return Object(d.jsxs)("div",{className:"recipe",children:[Object(d.jsxs)("h2",{children:[t.item," - ",t.full_name]}),Object(d.jsx)("img",{src:"/img/dishes.png",alt:"Profile"}),Object(d.jsx)("button",{onClick:function(){return r(!s)},children:"Ingredients"}),s&&Object(d.jsx)(m,{ingredients:t.recipe})]})},O=n(23),h=n.n(O),f=function(e){return Object(d.jsx)("div",{role:"navigation","aria-label":"Pagination Navigation",children:Object(d.jsx)(h.a,{pageCount:Math.ceil(e.totalPosts/e.postsPerPage),pageRangeDisplayed:10,marginPagesDisplayed:10,onPageChange:e.handlePageClick,containerClassName:"paginate-container",previousClassName:"paginate-previous",nextClassName:"paginate-next",pageClassName:"paginate-page",pageLinkClassName:"pagination-a",activeClassName:"paginate-active",disabledClassName:"paginate-disabled"})})},g=function(e){var t=e.alert;return Object(d.jsx)("div",{className:"noalert",children:Object(d.jsx)("h3",{children:t})})};function x(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),r=Object(u.a)(s,2),i=r[0],j=r[1],b=Object(a.useState)(1),m=Object(u.a)(b,2),O=m[0],h=m[1],x=Object(a.useState)(""),v=Object(u.a)(x,2),N=v[0],y=v[1],S=10*O,w=S-10,C=function(){var e=Object(o.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/GetIngredients",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item:n})});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a),console.log(a.ingredients),0===a.ingredients.length&&""!==n?(y("Sorry, we could not find anything that matches!"),j([])):j(a.ingredients);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=i.slice(w,S);return Object(d.jsxs)("div",{className:"row",children:[""!==N&&Object(d.jsx)(g,{alert:N}),Object(d.jsxs)("div",{className:"col",children:[Object(d.jsx)("h1",{children:"Search Your Recipe"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==e.target.value&&(y(""),C())},className:"search-form",children:[Object(d.jsx)("input",{type:"text",name:"item",value:n,onChange:function(e){c(e.target.value)},autoComplete:"off",placeholder:"Search Food"}),Object(d.jsx)("input",{type:"submit",value:"Search"})]})]}),Object(d.jsx)("div",{className:"recipes",children:P!==[]&&P.map((function(e,t){return Object(d.jsx)(p,{recipe:e},t)}))}),Object(d.jsx)(f,{postsPerPage:10,totalPosts:i.length,handlePageClick:function(e){var t=e.selected;h(t+1)}})]})}var v=n(15),N=function(e){var t=e.recipe,n=Object(a.useState)(!1),c=Object(u.a)(n,2),s=c[0],r=c[1],i=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.location.href="/create",e.next=3,fetch("/DeletePost",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"recipe",children:[Object(d.jsxs)("h2",{children:[t.item," - ",t.full_name]}),Object(d.jsx)("img",{src:"/img/dishes.png",alt:"Profile"}),Object(d.jsx)("div",{className:"mb-3"}),Object(d.jsx)("button",{onClick:function(){return r(!s)},children:"Ingredients"}),Object(d.jsx)("div",{className:"mb-3"}),Object(d.jsx)("button",{id:"delete",onClick:i,children:"Delete"}),s&&Object(d.jsx)(m,{ingredients:t.recipe})]})};function y(e){var t=e.username,n=Object(a.useState)(""),c=Object(u.a)(n,2),s=c[0],r=c[1],i=Object(a.useState)(""),j=Object(u.a)(i,2),b=j[0],m=j[1],p=Object(a.useState)([{recipe:""}]),O=Object(u.a)(p,2),h=O[0],g=O[1],x=Object(a.useState)([]),y=Object(u.a)(x,2),S=y[0],w=y[1],C=Object(a.useState)(1),P=Object(u.a)(C,2),k=P[0],I=P[1];Object(a.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/Initialize",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:t})});case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,w(a.ingredients);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var T=6*k,E=T-6,J=S.slice(E,T),D=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.location.href="/create",e.next=3,fetch("/PostIngredients",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({full_name:s,item:b,recipe:h,user:t})});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(e){"full_name"===e.target.name?r(e.target.value):"food"===e.target.name&&m(e.target.value)},L=function(e){var t=Object(v.a)(h);t.push({recipe:""}),g(t),e.preventDefault()};return Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col",children:[Object(d.jsx)("h1",{children:"Create Recipe"}),Object(d.jsx)("div",{className:"profile",children:Object(d.jsx)("img",{src:"/img/dishes.png",alt:"Profile"})}),Object(d.jsx)("div",{className:"mb-3"}),Object(d.jsx)("div",{className:"mb-3"}),Object(d.jsx)("div",{children:Object(d.jsxs)("form",{className:"form-name",onSubmit:function(e){e.preventDefault(),D(),r(""),m(""),g([{recipe:""}])},children:[Object(d.jsx)("div",{children:Object(d.jsxs)("label",{className:"form-label",children:["Food Category:",Object(d.jsx)("input",{className:"form-control",type:"text",name:"food",value:b,onChange:function(e){return F(e)},placeholder:"Food"})]})}),Object(d.jsx)("div",{children:Object(d.jsxs)("label",{className:"form-label",children:["Specific Name:",Object(d.jsx)("input",{className:"form-control",type:"text",name:"full_name",value:s,onChange:function(e){return F(e)},placeholder:"Full Name"})]})}),h.map((function(e,t){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("label",{className:"form-label",children:["Add Ingredient:",Object(d.jsx)("input",{className:"form-control",type:"text",name:"recipe",value:e.recipe,onChange:function(e){return function(e,t){var n=Object(v.a)(h);n[e].recipe=t.target.value,g(n),console.log("inputRecipe "+h)}(t,e)},placeholder:"Ingredient"})]}),Object(d.jsx)("div",{className:"b",children:Object(d.jsx)("button",{className:"btn",onClick:function(){return function(e){if(1!==h.length){var t=Object(v.a)(h);t.splice(e,1),g(t)}}(t)},children:Object(d.jsx)("img",{src:"/img/remove.png",alt:"minus"})})}),Object(d.jsx)("div",{className:"b",children:Object(d.jsx)("button",{className:"btn",onClick:L,children:Object(d.jsx)("img",{src:"/img/add.png",alt:"add"})})})]},t)})),Object(d.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})}),Object(d.jsx)("div",{className:"recipes",children:J!==[]&&J.map((function(e,t){return Object(d.jsx)(N,{recipe:e},t)}))}),Object(d.jsx)("div",{children:Object(d.jsx)(f,{postsPerPage:6,totalPosts:S.length,handlePageClick:function(e){var t=e.selected;I(t+1)}})})]})})}var S=function(e){var t=e.alert;return Object(d.jsx)("div",{className:"yesalert",children:Object(d.jsx)("h3",{children:t})})};function w(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(u.a)(s,2),i=r[0],j=r[1],b=Object(a.useState)(""),m=Object(u.a)(b,2),p=m[0],O=m[1],h=Object(a.useState)(""),f=Object(u.a)(h,2),x=f[0],v=f[1],N=Object(a.useState)(""),y=Object(u.a)(N,2),w=y[0],C=y[1],P=Object(a.useState)(""),k=Object(u.a)(P,2),I=k[0],T=k[1],E={fname:i,lname:p,email:n,confirmedpassword:w,password:x},J=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(T(""),!(E.confirmedpassword===E.password&&E.password.length>=8)){e.next=11;break}return e.next=4,fetch("/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(E)});case 4:return t=e.sent,e.next=7,t.json();case 7:e.sent.verify?T("Signup successful. Please login to share recipe."):T("Email already in use"),e.next=12;break;case 11:T("Invaild entree! Password must be 8 or more characters. Try again.");case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(e){"email"===e.target.name?c(e.target.value):"fname"===e.target.name?j(e.target.value):"lname"===e.target.name?(O(e.target.value),console.log("inputlname"+j)):"password"===e.target.name?v(e.target.value):C(e.target.value)};return Object(d.jsxs)("div",{className:"row",children:[""!==I&&"Email already in use"!==I&&"Signup successful. Please login to share recipe."!==I&&Object(d.jsx)(g,{alert:I}),""!==I&&"Email already in use"!==I&&"Invaild entree! Password must be 8 or more characters. Try again."!==I&&Object(d.jsx)(S,{alert:I}),""!==I&&"Signup successful. Please login to share recipe."!==I&&"Invaild entree! Password must be 8 or more characters. Try again."!==I&&Object(d.jsx)(g,{alert:I}),Object(d.jsxs)("div",{className:"col",children:[Object(d.jsx)("h1",{children:"Sign Up"}),Object(d.jsxs)("form",{className:"form-add",onSubmit:function(e){e.preventDefault(),J(),j(""),O(""),c(""),c(""),v(""),C("")},children:[Object(d.jsx)("div",{className:"mb-3",children:Object(d.jsx)("input",{type:"name",onChange:function(e){return D(e)},className:"form-control",id:"firstName",name:"fname",value:i,placeholder:"First"})}),Object(d.jsx)("div",{className:"mb-3",children:Object(d.jsx)("input",{type:"name",onChange:function(e){return D(e)},className:"form-control",id:"lastName",name:"lname",value:p,placeholder:"Last"})}),Object(d.jsx)("div",{className:"mb-3",children:Object(d.jsx)("input",{type:"email",onChange:function(e){return D(e)},className:"form-control",id:"InputEmail",name:"email",value:n,placeholder:"Email"})}),Object(d.jsx)("div",{className:"mb-3",children:Object(d.jsx)("input",{type:"password",onChange:function(e){return D(e)},className:"form-control me-2",id:"InputPassword",name:"password",value:x,placeholder:"Password"})}),Object(d.jsx)("div",{className:"mb-3",children:Object(d.jsx)("input",{type:"password",onChange:function(e){return D(e)},className:"form-control me-2",id:"ConPassword",name:"confirmedpassword",value:w,placeholder:"Confirm Password"})}),Object(d.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Join now"})]})]})]})}function C(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(u.a)(s,2),i=r[0],j=r[1],b=Object(a.useState)(null),m=Object(u.a)(b,2),p=m[0],O=m[1];Object(a.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/getUser");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,O(t.user);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var h=function(e){"username"===e.target.name?c(e.target.value):j(e.target.value)},f=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/logout");case 2:e.sent&&(window.location.href="/"),O(null);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col",children:Object(d.jsxs)("form",{action:"/signin",method:"post",className:"d-flex",children:[Object(d.jsx)("input",{type:"email",onChange:function(e){return h(e)},className:"form-control me-2",name:"username",value:n,placeholder:"Email"}),Object(d.jsx)("input",{type:"password",onChange:function(e){return h(e)},className:"form-control me-2",name:"password",value:i,placeholder:"Password"}),Object(d.jsx)("button",{className:"btn btn-primary",type:"submit",value:"Submit",children:"Login"})]})})}),x=Object(d.jsxs)("div",{children:[p,Object(d.jsx)("button",{className:"btn-outline-success btn",onClick:f,children:"Log out"})]});return Object(d.jsx)("div",{children:p?x:g})}function P(e){var t=e.username,n=Object(b.f)();return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(j.b,{className:"navbar-brand nav-logo",to:"/",children:Object(d.jsx)("img",{src:"/img/dishes.png",alt:"Profile"})}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[t&&Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(j.b,{className:"nav-link"+("/create"===n.pathname?" active":""),to:"/create",children:"Create Recipe"})}),!t&&Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(j.b,{className:"nav-link"+("/signup"===n.pathname?" active":""),to:"/signup",children:"Signup"})})]}),Object(d.jsx)(C,{})]})]})})}var k=function(){var e=Object(a.useState)(!0),t=Object(u.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){var e=window.localStorage.getItem("mytoogle");c(JSON.parse(e)),document.body.style="false"===e?"background: #121212;":"background: none;"}),[]),Object(a.useEffect)((function(){window.localStorage.setItem("mytoogle",JSON.stringify(n))}));return Object(d.jsxs)("div",{className:"col",children:[Object(d.jsx)("div",{children:"Switch"}),n?Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{className:"toogle-btn",onClick:function(){c(!1),document.body.style="background: #121212;"},children:Object(d.jsx)("img",{src:"/img/light-toggle.png",alt:"light"})}),Object(d.jsx)("div",{children:"Light Mode"})]}):Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{className:"toogle-btn",onClick:function(){c(!0),document.body.style="background: none;"},children:Object(d.jsx)("img",{src:"/img/dark-toggle.png",alt:"dark"})}),Object(d.jsx)("div",{children:"Dark Mode"})]})]})};var I=function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/getUser");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,console.log("Got user",t.user),c(t.user);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log("Checking user"),e()}),[]),Object(d.jsxs)(j.a,{children:[Object(d.jsx)(P,{username:n}),Object(d.jsxs)(b.c,{children:[Object(d.jsx)(b.a,{exact:!0,path:"/create",children:n?Object(d.jsx)(y,{username:n}):Object(d.jsx)(x,{})}),Object(d.jsx)(b.a,{exact:!0,path:"/",children:Object(d.jsx)(x,{})}),Object(d.jsx)(b.a,{exact:!0,path:"/signup",children:n?Object(d.jsx)(x,{}):Object(d.jsx)(w,{})})]}),Object(d.jsx)(k,{})]})};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.e88e33ab.chunk.js.map