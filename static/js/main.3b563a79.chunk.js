(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{16:function(e,t,n){e.exports={container:"Filter_container__1sVsQ",input:"Filter_input__2FEtM"}},39:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a,c=n(1),r=n.n(c),o=n(11),i=n.n(o),s=n(7),l=n(14),b=n(4),u=n(15),d=n(3),j=n(42),m=Object(b.b)("contacts/addContact",(function(e,t){return{payload:{id:Object(j.a)(),name:e,number:t}}})),O=Object(b.b)("contacts/delete"),f=Object(b.b)("contacts/filtered"),h=Object(b.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(a={},Object(u.a)(a,m,(function(e,t){var n=t.payload;return e.find((function(e){return e.name===n.name}))?(alert("".concat(n.name+" is already in contacts")),e):[].concat(Object(l.a)(e),[n])})),Object(u.a)(a,O,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),a)),p=Object(b.c)("",Object(u.a)({},f,(function(e,t){return t.payload}))),_=Object(d.b)({contacts:h,filtered:p}),x=n(6),C=n(21),N=n.n(C),v=n(22),g=n.n(v),k=[].concat(Object(l.a)(Object(b.d)({serializableCheck:{ignoredActions:[x.a,x.f,x.b,x.c,x.d,x.e]}})),[g.a]),A={key:"contacts",storage:N.a,blacklist:["filtered"]},F=Object(b.a)({reducer:{phonebook:Object(x.g)(A,_)},middleware:k,devTools:!1}),L=Object(x.h)(F),y=n(23),I=(n(39),n(9)),w=n.n(I),z=n(26),D=n(13),Z=n(20),B=n(8),S=n.n(B),M=n(2),P=Object(s.b)(null,(function(e){return{addContact:function(t,n){return e(m(t,n))}}}))((function(e){var t=e.addContact,n=Object(c.useState)(""),a=Object(Z.a)(n,2),r=a[0],o=a[1],i=Object(c.useState)(""),s=Object(Z.a)(i,2),l=s[0],b=s[1],u=Object(j.a)(),d=Object(j.a)(),m=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":b(a);break;default:return}},O=function(){o(""),b("")};return Object(M.jsx)("div",{className:S.a.container,children:Object(M.jsxs)("form",{className:S.a.form,onSubmit:function(e){e.preventDefault(),t(r,l),O()},children:[Object(M.jsxs)("label",{className:S.a.label,htmlFor:u,children:["Name",Object(M.jsx)("input",{type:"text",placeholder:"Mark Zuckerberg",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:m,className:S.a.input,id:u})]}),Object(M.jsxs)("label",{className:S.a.label,htmlFor:d,children:["Number",Object(M.jsx)("input",{type:"tel",placeholder:"xxx-xx-xx",name:"number",value:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:m,className:S.a.input,id:d})]}),Object(M.jsx)("button",{type:"submit",className:S.a.btn,children:"Add contact"})]})})})),J=n(16),T=n.n(J),E=Object(s.b)((function(e){return{filtered:e.phonebook.filtered}}),(function(e){return{changeFilter:function(t){return e(f(t.currentTarget.value))}}}))((function(e){var t=e.filtered,n=e.changeFilter;return Object(M.jsxs)("div",{className:T.a.container,children:[Object(M.jsx)("h2",{className:T.a.title,children:"Search by name"}),Object(M.jsx)("input",{type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:t,onChange:n,className:T.a.input})]})})),K=n(5),q=n.n(K),H=n(25),Q=n(24),V=function(e){var t=e.id,n=e.name,a=e.number,c=e.onDeleteBtnPush;return Object(M.jsxs)("li",{className:q.a.listItem,children:[Object(M.jsxs)("p",{className:q.a.name,children:[Object(M.jsx)(D.a,{className:q.a.contactIcon}),n,":"]}),Object(M.jsxs)("p",{className:q.a.number,children:[Object(M.jsx)(Q.a,{className:q.a.contactIcon}),a]}),Object(M.jsx)("button",{type:"button",className:q.a.btnDelete,onClick:function(){return c(t)},children:Object(M.jsx)(H.a,{})})]},t)},W=Object(s.b)((function(e){var t=e.phonebook,n=t.contacts,a=t.filtered;return{contacts:n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())})),filtered:e.filtered}}),(function(e){return{deleteContact:function(t){return e(O(t))}}}))((function(e){var t=e.contacts,n=(e.filtered,e.deleteContact);return Object(M.jsx)("div",{className:q.a.container,children:Object(M.jsx)("ul",{className:q.a.contactsList,children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(M.jsx)(V,{id:t,name:a,number:c,onDeleteBtnPush:n},t)}))})})})),X=function(){return Object(M.jsxs)("div",{className:w.a.container,children:[Object(M.jsxs)("h1",{className:w.a.title,children:["Phonebook ",Object(M.jsx)(z.a,{className:w.a.icon})]}),Object(M.jsx)(P,{}),Object(M.jsx)(E,{}),Object(M.jsxs)("h2",{className:w.a.title,children:["Contacts",Object(M.jsx)(D.b,{className:w.a.icon})]}),Object(M.jsx)(W,{})]})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};i.a.render(Object(M.jsx)(r.a.StrictMode,{children:Object(M.jsx)(s.a,{store:F,children:Object(M.jsx)(y.a,{loading:null,persistor:L,children:Object(M.jsx)(X,{})})})}),document.getElementById("root")),$()},5:function(e,t,n){e.exports={container:"ContactList_container__12NfP",contactsList:"ContactList_contactsList__iXufD",listItem:"ContactList_listItem__1esXg",contactIcon:"ContactList_contactIcon__2jB40",number:"ContactList_number__1Itnv",btnDelete:"ContactList_btnDelete__19LDm"}},8:function(e,t,n){e.exports={container:"ContactForm_container__3K_w2",form:"ContactForm_form__3O6Ne",label:"ContactForm_label__1b6v9",input:"ContactForm_input__4IQKb",btn:"ContactForm_btn__2HJcW"}},9:function(e,t,n){e.exports={container:"App_container__kWjC_",title:"App_title__dxN8V",icon:"App_icon__naZMo"}}},[[41,1,2]]]);
//# sourceMappingURL=main.3b563a79.chunk.js.map