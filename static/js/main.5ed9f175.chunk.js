(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports={App:"App_App__3w0tL",select:"App_select__1mRKs",option:"App_option__zBuWi",blockRadio:"App_blockRadio__2n-h4",radio:"App_radio__21afX"}},,function(e,t,n){e.exports={allContainer:"clock_allContainer__24CqY",clockContainer:"clock_clockContainer__3KkN6",buttons:"clock_buttons__2AN_Y",but1:"clock_but1__1FvdT",time:"clock_time__3Ue-o",data:"clock_data__3wJ4k"}},,,,,,,function(e,t,n){e.exports={blue:"HW4_blue__3mldc",column:"HW4_column__2U-_D",checkBox:"HW4_checkBox__2gG-v"}},,,,function(e,t,n){e.exports={message:"Message_message__3yrJx"}},,,function(e,t,n){e.exports={arrow:"menu_arrow__m-ySe",menu:"menu_menu__1KlCQ",menuHide:"menu_menuHide__1M85U"}},function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2VLBu",errorInput:"SuperInputText_errorInput__30E4t",error:"SuperInputText_error__3M4L4"}},,function(e,t,n){e.exports={someClass:"Greeting_someClass__l-NPP",error:"Greeting_error__3EScv"}},function(e,t,n){e.exports={default:"SuperButton_default__3n1YM",red:"SuperButton_red__2Zf73"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__2iM-I",spanClassName:"SuperCheckbox_spanClassName__J0z6-"}},function(e,t,n){e.exports={error:"error_error__2PS4s",errorText:"error_errorText__2UMgT"}},,,,,,,,,,function(e,t,n){e.exports={classSpan:"superSpan_classSpan__1WRLW"}},function(e,t,n){e.exports=n.p+"static/media/tms-loading.6068d1f9.gif"},,,,function(e,t,n){e.exports=n(61)},,,,,function(e,t,n){},,,,,,,,function(e,t,n){e.exports=n.p+"static/media/arrow.8a5a39e1.png"},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(20),c=n.n(l),o=(n(52),n(10)),u=n.n(o),i=n(8),s=n(26),m=n.n(s),d=n(11),E=n(2),p=n(23),f=n.n(p);var h=function(e){return r.a.createElement("div",{className:f.a.message},r.a.createElement("img",{src:e.avatar}),r.a.createElement("div",null," ",e.name),r.a.createElement("div",null," ",e.message,"?"))};var v=function(e){return r.a.createElement("div",{className:f.a.message},r.a.createElement("img",{src:e.avatar}),r.a.createElement("div",null," ",e.name),r.a.createElement("div",null," ",e.message," at ",e.time,"?"))},g="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",_="Anton",b="Did you press a button",k="22:00",C="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",O="Alex",N="No,and you?";var j=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",r.a.createElement(v,{avatar:g,name:_,message:b,time:k}),r.a.createElement("hr",null),r.a.createElement(h,{avatar:C,name:O,message:N}),r.a.createElement("hr",null))},y=n(4);var S=function(e){return r.a.createElement("div",null,e.affair.name,":",e.affair.priority,r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}}," X"))};var x=function(e){var t=e.data.map((function(t){return r.a.createElement(S,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,t,r.a.createElement("button",{onClick:function(){return e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){return e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){return e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){return e.setFilter("low")}},"Low"))},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var A=function(){var e=Object(a.useState)(w),t=Object(y.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)("all"),o=Object(y.a)(c,2),u=o[0],i=o[1],s=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):e}(n,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(x,{data:s,setFilter:i,deleteAffairCallback:function(e){return l(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},T=n(45),M=n(29),F=n.n(M),I=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,l=e.error,c=e.totalUsers,o=F.a.error;return r.a.createElement("div",null,r.a.createElement("input",{value:t,onChange:n,className:l?o:F.a.someClass}),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:a},"add"),r.a.createElement("span",null,c))},B=function(e){var t=e.users,n=e.addUserCallback,l=Object(a.useState)(""),c=Object(y.a)(l,2),o=c[0],u=c[1],i=Object(a.useState)(""),s=Object(y.a)(i,2),m=s[0],d=s[1],E=t.length;return r.a.createElement(I,{name:o,setNameCallback:function(e){var t=e.currentTarget.value;u(t)},addUser:function(){o?(d(""),n(o),alert("Hello ".concat(o,"!")),u("")):d("Please, enter the name")},error:m,totalUsers:E})},P=n(41);var H=function(){var e=Object(a.useState)([]),t=Object(y.a)(e,2),n=t[0],l=t[1];return console.log(n),r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement(B,{users:n,addUserCallback:function(e){l([].concat(Object(T.a)(n),[{_id:Object(P.v1)(),name:e}]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},J=n(9),W=n(27),D=n.n(W),U=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,l=e.onEnter,c=e.error,o=(e.className,e.spanClassName),u=Object(J.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(D.a.error," ").concat(o||""),s="".concat(c?D.a.errorInput:D.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),"Enter"===e.key&&l&&l()},className:s},u)),c&&r.a.createElement("span",{className:i},c))},Y=n(19),G=n.n(Y),L=n(30),R=n.n(L),K=function(e){var t=e.red,n=e.className,a=e.children,l=Object(J.a)(e,["red","className","children"]),c="".concat(t?R.a.red:R.a.default," ").concat(n);return r.a.createElement("button",Object.assign({className:c},l),a)},X=n(31),q=n.n(X),z=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,l=(e.spanClassName,e.children),c=Object(J.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(q.a.checkbox," ").concat(a||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){n&&n(e.currentTarget.checked),t&&t(e)},className:o},c)),l&&r.a.createElement("span",{className:q.a.spanClassName},l))};var Z=function(){var e=Object(a.useState)(""),t=Object(y.a)(e,2),n=t[0],l=t[1],c=n?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},u=Object(a.useState)(!0),i=Object(y.a)(u,2),s=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:G.a.column},r.a.createElement(U,{value:n,onChangeText:l,onEnter:o,error:c,className:G.a.blue}),r.a.createElement(K,{red:c,onClick:o},"Send"),r.a.createElement(z,{checked:s,onChangeChecked:m,className:G.a.checkBox},"some text "),r.a.createElement(z,{className:G.a.checkBox,checked:s,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Q=function(){return r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(A,null),r.a.createElement(H,null),r.a.createElement(Z,null))},V=n(32),$=n.n(V);var ee=function(){return r.a.createElement("div",{className:$.a.error},r.a.createElement("div",null,"404"),r.a.createElement("div",{className:$.a.errorText},"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},te=n(36),ne={type:"sort",payload:"up"},ae={type:"sort",payload:"down"},re={type:"check",payload:18},le=function(e,t){switch(t.type){case"sort":return"up"===t.payload?Object(te.a)(e.sort((function(e,t){return e.name>t.name?1:-1}))):"down"===t.payload?Object(te.a)(e.sort((function(e,t){return e.name>t.name?-1:1}))):e;case"check":return e.filter((function(e){return e.age>=18}));default:return e}},ce=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var oe=function(){var e=Object(a.useState)(ce),t=Object(i.a)(e,2),n=t[0],l=t[1],c=n.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement("span",null,r.a.createElement("b",null,"Name: "),e.name),r.a.createElement("span",null,r.a.createElement("b",null,"Age: "),e.age))}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement("div",null,r.a.createElement(K,{onClick:function(){return l(le(ce,ne))}},"Sort up")),r.a.createElement("div",null,r.a.createElement(K,{onClick:function(){return l(le(ce,ae))}},"Sort down ")),r.a.createElement("div",null,r.a.createElement(K,{onClick:function(){return l(le(ce,re))}},"Age 18")),r.a.createElement("hr",null),r.a.createElement("hr",null))},ue=n(25),ie=function(e){var t=e.options,n=(e.onChange,e.onChangeOption),a=Object(ue.a)(e,["options","onChange","onChangeOption"]),l=t?t.map((function(e,t){return r.a.createElement("option",{className:u.a.option,key:e+"-"+t},e)})):[];return r.a.createElement("select",Object.assign({className:u.a.select,onChange:function(e){n?n(e.currentTarget.value):console.error("No have data")}},a),l)},se=function(e){e.type;var t=e.name,n=e.options,a=e.value,l=(e.onChange,e.onChangeOption),c=Object(ue.a)(e,["type","name","options","value","onChange","onChangeOption"]),o=function(e){l&&l(e.currentTarget.value)},i=n?n.map((function(e,n){return r.a.createElement("label",{className:u.a.blockRadio,key:t+"-"+n},r.a.createElement("input",Object.assign({className:u.a.radio,type:"radio",value:e,checked:a===e,onChange:o,name:t},c)),e)})):[];return r.a.createElement(r.a.Fragment,null,i)},me=["x","y","z"];var de=function(){var e=Object(a.useState)(me[1]),t=Object(i.a)(e,2),n=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(ie,{options:me,value:n,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(se,{name:"value",options:me,value:n,onChangeOption:l})))},Ee=n(42),pe=n.n(Ee),fe=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,l=e.spanProps,c=Object(J.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(a.useState)(!1),u=Object(y.a)(o,2),i=u[0],s=u[1],m=l||{},d=m.children,E=m.onDoubleClick,p=(m.className,Object(J.a)(m,["children","onDoubleClick","className"])),f="".concat(pe.a.classSpan);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(U,Object.assign({autoFocus:!0,onBlur:function(e){s(!1),t&&t(e)},onEnter:function(){s(!1),n&&n()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){s(!0),E&&E(e)},className:f},p),d||c.value))};function he(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function ve(e,t){var n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}he("test",{x:"A",y:1});ve("test",{x:"",y:0});var ge=function(){var e=Object(a.useState)(""),t=Object(y.a)(e,2),n=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(fe,{value:n,onChangeText:l,spanProps:{children:n?void 0:"enter text..."}})),r.a.createElement(K,{onClick:function(){he("editable-span-value",n)}},"save"),r.a.createElement(K,{onClick:function(){l(ve("editable-span-value",n))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))},_e=n(12),be=n.n(_e);var ke=function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(),o=Object(i.a)(c,2),u=o[0],s=o[1],m=Object(a.useState)(!1),d=Object(i.a)(m,2),E=d[0],p=d[1],f=u&&"".concat(u.getHours()<10?"0"+u.getHours():u.getHours(),"\n    :").concat(u.getMinutes()<10?"0"+u.getMinutes():u.getMinutes(),"\n    :").concat(u.getSeconds()<10?"0"+u.getSeconds():u.getSeconds()),h=u&&"".concat(u.getDate()<10?"0"+u.getDate():u.getDate(),"\n    :").concat(u.getMonth()<10?"0"+u.getMonth():u.getMonth(),"\n    :").concat(u.getFullYear()<10?"0"+u.getFullYear():u.getFullYear());return r.a.createElement("div",{className:be.a.allContainer},r.a.createElement("div",{className:be.a.clockContainer},r.a.createElement("div",{className:be.a.time,onMouseEnter:function(){p(!0)},onMouseLeave:function(){p(!1)}},f),E&&r.a.createElement("div",{className:be.a.data},h),r.a.createElement("div",{className:be.a.buttons},r.a.createElement(K,{className:be.a.but1,onClick:function(){var e=window.setInterval((function(){return s(new Date)}),1e3);l(e)}},"start"),r.a.createElement(K,{onClick:function(){clearInterval(n)}},"stop"))))};var Ce=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(ke,null))},Oe=n(43),Ne=n.n(Oe),je=n(18),ye=n(46),Se={loading:!1},xe="/loadingReducer/CHANGE_LOADING",we=function(){return{type:xe}};var Ae=function(){var e=Object(je.b)(),t=Object(je.c)((function(e){return e.loading}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 10",t.loading?r.a.createElement("div",null,r.a.createElement("img",{style:{width:"100px",height:"100px"},alt:"Preloader",src:Ne.a})):r.a.createElement("div",null,r.a.createElement(K,{onClick:function(){e(we()),setTimeout((function(){e(we())}),2e3)}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))},Te=function(){return r.a.createElement("div",null,r.a.createElement(ge,null),r.a.createElement(de,null),r.a.createElement(oe,null),r.a.createElement(Ce,null),r.a.createElement(Ae,null))},Me=function(){return r.a.createElement("div",null,"Empty")},Fe="/pre-junior",Ie="/Junior",Be="/SuperJunior";var Pe=function(){return r.a.createElement("div",null,r.a.createElement(E.d,null,r.a.createElement(E.b,{path:"/",exact:!0,render:function(){return r.a.createElement(E.a,{to:Ie})}}),r.a.createElement(E.b,{path:Fe,render:function(){return r.a.createElement(Q,null)}}),r.a.createElement(E.b,{path:Ie,render:function(){return r.a.createElement(Te,null)}}),r.a.createElement(E.b,{path:Be,render:function(){return r.a.createElement(Me,null)}}),r.a.createElement(E.b,{render:function(){return r.a.createElement(ee,null)}})))};var He=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),l=t[0],c=t[1],o=function(){c(!0)},u=function(){c(!1)};return r.a.createElement("div",null,r.a.createElement("div",{className:m.a.arrow},r.a.createElement("img",{onMouseOver:o,onMouseOut:u,src:n(60)})),r.a.createElement("div",{onMouseOver:o,onMouseOut:u,className:l?m.a.menu:m.a.menuHide},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.b,{to:Fe},"PreJunior")),r.a.createElement("li",null,r.a.createElement(d.b,{to:Ie},"Junior")),r.a.createElement("li",null,r.a.createElement(d.b,{to:Be},"Junior++")))))};var Je=function(){return r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement(He,null),r.a.createElement(Pe,null)))};var We=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(Je,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var De=n(17),Ue=Object(De.b)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case xe:return Object(ye.a)({},e,{loading:!e.loading});default:return e}}}),Ye=Object(De.c)(Ue),Ge=Ye;window.store=Ye,c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(je.a,{store:Ge},r.a.createElement(We,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[47,1,2]]]);
//# sourceMappingURL=main.5ed9f175.chunk.js.map