(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={container:"Filter_container__1sVsQ",input:"Filter_input__2FEtM"}},26:function(t,e,n){},3:function(t,e,n){t.exports={container:"ContactList_container__12NfP",contactsList:"ContactList_contactsList__iXufD",listItem:"ContactList_listItem__1esXg",contactIcon:"ContactList_contactIcon__2jB40",number:"ContactList_number__1Itnv",btnDelete:"ContactList_btnDelete__19LDm"}},31:function(t,e,n){"use strict";n.r(e);var a,c=n(2),r=n.n(c),s=n(12),o=n.n(s),i=(n(26),n(19)),l=n(5),u=n(32),b=n(6),j=n.n(b),m=n(17),d=n(9),x=n(4),p=n.n(x),h=n(1),O=function(t){t.contacts;var e=t.onSubmit,n=Object(c.useState)(""),a=Object(l.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)(""),i=Object(l.a)(o,2),b=i[0],j=i[1],m=Object(u.a)(),d=Object(u.a)(),x=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":s(a);break;case"number":j(a);break;default:return}},O=function(){s(""),j("")};return Object(h.jsx)("div",{className:p.a.container,children:Object(h.jsxs)("form",{className:p.a.form,onSubmit:function(t){t.preventDefault(),e({name:r,number:b}),O()},children:[Object(h.jsxs)("label",{className:p.a.label,htmlFor:m,children:["Name",Object(h.jsx)("input",{type:"text",placeholder:"Mark Zuckerberg",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:x,className:p.a.input,id:m})]}),Object(h.jsxs)("label",{className:p.a.label,htmlFor:d,children:["Number",Object(h.jsx)("input",{type:"tel",placeholder:"xxx-xx-xx",name:"number",value:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:x,className:p.a.input,id:d})]}),Object(h.jsx)("button",{type:"submit",className:p.a.btn,children:"Add contact"})]})})},_=n(10),f=n.n(_),N=function(t){var e=t.value,n=t.onChange;return Object(h.jsxs)("div",{className:f.a.container,children:[Object(h.jsx)("h2",{className:f.a.title,children:"Search by name"}),Object(h.jsx)("input",{type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:e,onChange:n,className:f.a.input})]})},v=n(3),g=n.n(v),C=n(14),F=n(13),w=function(t){var e=t.id,n=t.name,a=t.number,c=t.onDeleteBtnPush;return Object(h.jsxs)("li",{className:g.a.listItem,children:[Object(h.jsxs)("p",{className:g.a.name,children:[Object(h.jsx)(d.a,{className:g.a.contactIcon}),n,":"]}),Object(h.jsxs)("p",{className:g.a.number,children:[Object(h.jsx)(F.a,{className:g.a.contactIcon}),a]}),Object(h.jsx)("button",{type:"button",className:g.a.btnDelete,onClick:function(){return c(e)},children:Object(h.jsx)(C.a,{})})]},e)},A=function(t){var e=t.contacts,n=t.onDeleteBtnPush;return Object(h.jsx)("div",{className:g.a.container,children:Object(h.jsx)("ul",{className:g.a.contactsList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(h.jsx)(w,{id:e,name:a,number:c,onDeleteBtnPush:n},e)}))})})},L=n(15),S=n(18).a.header(a||(a=Object(L.a)(["\n  margin-top: 20px;\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  background-color: white;\n  border: 1px solid teal;\n  border-radius: 5px;\n  box-shadow: 1px 3px 10px -4px #050505;\n  align-items: center;\n"]))),I=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(S,{children:"Hello! First steps with redux"})})},k=function(){var t=Object(c.useState)((function(){var t;return JSON.parse(window.localStorage.getItem(null!==(t="contacts")?t:""))})),e=Object(l.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),s=Object(l.a)(r,2),o=s[0],b=s[1];Object(c.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var x=function(){var t=o.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}();return Object(h.jsxs)("div",{className:j.a.container,children:[Object(h.jsxs)("h1",{className:j.a.title,children:["Phonebook ",Object(h.jsx)(m.a,{className:j.a.icon})]}),Object(h.jsx)(O,{contacts:n,onSubmit:function(t){return t={id:Object(u.a)(),name:t.name,number:t.number},n.find((function(e){return e.name===t.name}))?alert("".concat(t.name+" is already in contacts")):void a([].concat(Object(i.a)(n),[t]))}}),Object(h.jsx)(N,{value:o,onChange:function(t){b(t.currentTarget.value)}}),Object(h.jsxs)("h2",{className:j.a.title,children:["Contacts",Object(h.jsx)(d.b,{className:j.a.icon})]}),Object(h.jsx)(A,{contacts:x,onDeleteBtnPush:function(t){a(n.filter((function(e){return e.id!==t})))}}),Object(h.jsx)(I,{})]})},y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),r(t),s(t)}))};o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root")),y()},4:function(t,e,n){t.exports={container:"ContactForm_container__3K_w2",form:"ContactForm_form__3O6Ne",label:"ContactForm_label__1b6v9",input:"ContactForm_input__4IQKb",btn:"ContactForm_btn__2HJcW"}},6:function(t,e,n){t.exports={container:"App_container__1tMjs",title:"App_title__2Bln7",icon:"App_icon__1HWhi"}}},[[31,1,2]]]);
//# sourceMappingURL=main.3e13270a.chunk.js.map