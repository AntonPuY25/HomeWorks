(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/arrow.8a5a39e1.png"},101:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),c=a.n(l),o=(a(74),a(16)),u=a.n(o),i=a(2),s=a(39),m=a.n(s),d=a(19),E=a(3),p=a(33),h=a.n(p);var v=function(e){return r.a.createElement("div",{className:h.a.message},r.a.createElement("img",{src:e.avatar}),r.a.createElement("div",null," ",e.name),r.a.createElement("div",null," ",e.message,"?"))};var f=function(e){return r.a.createElement("div",{className:h.a.message},r.a.createElement("img",{src:e.avatar}),r.a.createElement("div",null," ",e.name),r.a.createElement("div",null," ",e.message," at ",e.time,"?"))},g="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",_="Anton",b="Did you press a button",k="22:00",C="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",O="Alex",j="No,and you?";var N=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",r.a.createElement(f,{avatar:g,name:_,message:b,time:k}),r.a.createElement("hr",null),r.a.createElement(v,{avatar:C,name:O,message:j}),r.a.createElement("hr",null))};var x=function(e){return r.a.createElement("div",null,e.affair.name,":",e.affair.priority,r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}}," X"))};var y=function(e){var t=e.data.map((function(t){return r.a.createElement(x,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,t,r.a.createElement("button",{onClick:function(){return e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){return e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){return e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){return e.setFilter("low")}},"Low"))},S=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var w=function(){var e=Object(n.useState)(S),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),o=Object(i.a)(c,2),u=o[0],s=o[1],m=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):e}(a,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(y,{data:m,setFilter:s,deleteAffairCallback:function(e){return l(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},A=a(29),T=a(41),H=a.n(T),W=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=H.a.error;return r.a.createElement("div",null,r.a.createElement("input",{value:t,onChange:a,className:l?o:H.a.someClass}),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",null,c))},F=function(e){var t=e.users,a=e.addUserCallback,l=Object(n.useState)(""),c=Object(i.a)(l,2),o=c[0],u=c[1],s=Object(n.useState)(""),m=Object(i.a)(s,2),d=m[0],E=m[1],p=t.length;return r.a.createElement(W,{name:o,setNameCallback:function(e){var t=e.currentTarget.value;u(t)},addUser:function(){o?(E(""),a(o),alert("Hello ".concat(o,"!")),u("")):E("Please, enter the name")},error:d,totalUsers:p})},M=a(61);var R=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1];return console.log(a),r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement(F,{users:a,addUserCallback:function(e){l([].concat(Object(A.a)(a),[{_id:Object(M.v1)(),name:e}]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},B=a(7),I=a(40),P=a.n(I),J=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=(e.className,e.spanClassName),u=Object(B.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(P.a.error," ").concat(o||""),s="".concat(c?P.a.errorInput:P.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:s},u)),c&&r.a.createElement("span",{className:i},c))},G=a(30),D=a.n(G),V=a(42),U=a.n(V),K=function(e){var t=e.red,a=e.className,n=e.children,l=e.sendRequest,c=Object(B.a)(e,["red","className","children","sendRequest"]),o="".concat(t?U.a.red:U.a.default," ").concat(a);return r.a.createElement("button",Object.assign({onClick:l,className:o},c),n)},L=a(43),Y=a.n(L),q=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(B.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(Y.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e.currentTarget.checked),t&&t(e)},className:o},c)),l&&r.a.createElement("span",{className:Y.a.spanClassName},l))};var X=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1],c=a?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},u=Object(n.useState)(!0),s=Object(i.a)(u,2),m=s[0],d=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:D.a.column},r.a.createElement(J,{value:a,onChangeText:l,onEnter:o,error:c,className:D.a.blue}),r.a.createElement(K,{red:c,onClick:o},"Send"),r.a.createElement(q,{checked:m,onChangeChecked:d,className:D.a.checkBox},"some text "),r.a.createElement(q,{className:D.a.checkBox,checked:m,onChange:function(e){return d(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Z=function(){return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement(w,null),r.a.createElement(R,null),r.a.createElement(X,null))},Q=a(44),z=a.n(Q);var $=function(){return r.a.createElement("div",{className:z.a.error},r.a.createElement("div",null,"404"),r.a.createElement("div",{className:z.a.errorText},"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},ee={type:"sort",payload:"up"},te={type:"sort",payload:"down"},ae={type:"check",payload:18},ne=function(e,t){switch(t.type){case"sort":return"up"===t.payload?Object(A.a)(e.sort((function(e,t){return e.name>t.name?1:-1}))):"down"===t.payload?Object(A.a)(e.sort((function(e,t){return e.name>t.name?-1:1}))):e;case"check":return e.filter((function(e){return e.age>=18}));default:return e}},re=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var le=function(){var e=Object(n.useState)(re),t=Object(i.a)(e,2),a=t[0],l=t[1],c=a.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement("span",null,r.a.createElement("b",null,"Name: "),e.name),r.a.createElement("span",null,r.a.createElement("b",null,"Age: "),e.age))}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement("div",null,r.a.createElement(K,{onClick:function(){return l(ne(re,ee))}},"Sort up")),r.a.createElement("div",null,r.a.createElement(K,{onClick:function(){return l(ne(re,te))}},"Sort down ")),r.a.createElement("div",null,r.a.createElement(K,{onClick:function(){return l(ne(re,ae))}},"Age 18")),r.a.createElement("hr",null),r.a.createElement("hr",null))},ce=function(e){var t=e.options,a=(e.onChange,e.onChangeOption),n=Object(B.a)(e,["options","onChange","onChangeOption"]),l=t?t.map((function(e,t){return r.a.createElement("option",{className:u.a.option,key:e+"-"+t},e)})):[];return r.a.createElement("select",Object.assign({className:u.a.select,onChange:function(e){a?a(e.currentTarget.value):console.error("No have data")}},n),l)},oe=function(e){e.type;var t=e.name,a=e.options,n=e.value,l=(e.onChange,e.onChangeOption),c=Object(B.a)(e,["type","name","options","value","onChange","onChangeOption"]),o=function(e){l&&l(e.currentTarget.value)},i=a?a.map((function(e,a){return r.a.createElement("label",{className:u.a.blockRadio,key:t+"-"+a},r.a.createElement("input",Object.assign({className:u.a.radio,type:"radio",value:e,checked:n===e,onChange:o,name:t},c)),e)})):[];return r.a.createElement(r.a.Fragment,null,i)},ue=["x","y","z"];var ie=function(){var e=Object(n.useState)(ue[1]),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(ce,{options:ue,value:a,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(oe,{name:"value",options:ue,value:a,onChangeOption:l})))},se=a(62),me=a.n(se),de=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,l=e.spanProps,c=Object(B.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(i.a)(o,2),s=u[0],m=u[1],d=l||{},E=d.children,p=d.onDoubleClick,h=(d.className,Object(B.a)(d,["children","onDoubleClick","className"])),v="".concat(me.a.classSpan);return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(J,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),t&&t(e)},onEnter:function(){m(!1),a&&a()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),p&&p(e)},className:v},h),E||c.value))};function Ee(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function pe(e,t){var a=localStorage.getItem(e);return null!==a&&(t=JSON.parse(a)),t}Ee("test",{x:"A",y:1});pe("test",{x:"",y:0});var he=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(de,{value:a,onChangeText:l,spanProps:{children:a?void 0:"enter text..."}})),r.a.createElement(K,{onClick:function(){Ee("editable-span-value",a)}},"save"),r.a.createElement(K,{onClick:function(){l(pe("editable-span-value",a))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))},ve=a(21),fe=a.n(ve);var ge=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(),o=Object(i.a)(c,2),u=o[0],s=o[1],m=Object(n.useState)(!1),d=Object(i.a)(m,2),E=d[0],p=d[1],h=u&&"".concat(u.getHours()<10?"0"+u.getHours():u.getHours(),"\n    :").concat(u.getMinutes()<10?"0"+u.getMinutes():u.getMinutes(),"\n    :").concat(u.getSeconds()<10?"0"+u.getSeconds():u.getSeconds()),v=u&&"".concat(u.getDate()<10?"0"+u.getDate():u.getDate(),"\n    :").concat(u.getMonth()<10?"0"+u.getMonth():u.getMonth(),"\n    :").concat(u.getFullYear()<10?"0"+u.getFullYear():u.getFullYear());return r.a.createElement("div",{className:fe.a.allContainer},r.a.createElement("div",{className:fe.a.clockContainer},r.a.createElement("div",{className:fe.a.time,onMouseEnter:function(){p(!0)},onMouseLeave:function(){p(!1)}},h),E&&r.a.createElement("div",{className:fe.a.data},v),r.a.createElement("div",{className:fe.a.buttons},r.a.createElement(K,{className:fe.a.but1,onClick:function(){var e=window.setInterval((function(){return s(new Date)}),1e3);l(e)}},"start"),r.a.createElement(K,{onClick:function(){clearInterval(a)}},"stop"))))};var _e=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(ge,null))},be=a(63),ke=a.n(be),Ce=a(17),Oe=a(38),je={loading:!1},Ne="/loadingReducer/CHANGE_LOADING",xe=function(){return{type:Ne}};var ye=function(){var e=Object(Ce.b)(),t=Object(Ce.c)((function(e){return e.loading}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 10",t.loading?r.a.createElement("div",null,r.a.createElement("img",{style:{width:"100px",height:"100px"},alt:"Preloader",src:ke.a})):r.a.createElement("div",null,r.a.createElement(K,{onClick:function(){e(xe()),setTimeout((function(){e(xe())}),2e3)}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))},Se=a(34),we=a.n(Se),Ae=function(e){e.type;var t=e.onChange,a=e.onChangeRange,n=e.className,l=e.setValue1,c=e.value,o=Object(B.a)(e,["type","onChange","onChangeRange","className","setValue1","value"]),u="".concat(we.a.range," ").concat(n||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"range",onChange:function(e){t&&t(e),l(+e.currentTarget.value),a&&a(+e.currentTarget.value)},className:u,value:c},o)))},Te=a(113),He=a(115),We=function(e){var t=e.setValue2,a=e.min,n=e.max,l=e.setValue1;return r.a.createElement("div",{className:we.a.range},r.a.createElement(Te.a,{gutterBottom:!0}),r.a.createElement(He.a,{value:[a,n],onChange:function(e,a){l(a[0]),t(a[1])},valueLabelDisplay:"auto","aria-labelledby":"range-slider"}))};var Fe=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(100),o=Object(i.a)(c,2),u=o[0],s=o[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 11",r.a.createElement("div",null,r.a.createElement("span",null,a),r.a.createElement(Ae,{setValue1:l,value:a})),r.a.createElement("div",null,r.a.createElement("span",null,a),r.a.createElement(We,{setValue2:s,setValue1:l,max:u,min:a}),r.a.createElement("span",null,u)),r.a.createElement("hr",null),r.a.createElement("hr",null))},Me=function(){return r.a.createElement("div",null,r.a.createElement(he,null),r.a.createElement(ie,null),r.a.createElement(le,null),r.a.createElement(_e,null),r.a.createElement(ye,null),r.a.createElement(Fe,null))},Re=a(46),Be=a.n(Re),Ie={them:"some"},Pe="themeReducer/CHANGE_THEME";var Je=function(){var e=Object(Ce.c)((function(e){return e.theme})).them,t=Object(Ce.b)();return r.a.createElement("div",{className:Be.a[e]},r.a.createElement("hr",null),r.a.createElement("span",{className:Be.a[e+"-text"]},"homeworks 12"),r.a.createElement(ce,{options:["dark","red","yellow","some"],onChangeOption:function(e){t(function(e){return{type:Pe,theme:e}}(e))}}),r.a.createElement("hr",null))},Ge=a(65),De=a.n(Ge).a.create({baseURL:"https://neko-cafe-back.herokuapp.com/auth/test"}),Ve={orderPost:function(e){return De.post("",{success:"1"===e||e}).then((function(e){return e.data}))}},Ue=function(){var e=["1","2","3"],t=Object(n.useState)(e[0]),a=Object(i.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),u=Object(i.a)(o,2),s=u[0],m=u[1];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(oe,{name:"value",options:e,value:l,onChangeOption:c})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(K,{sendRequest:function(){Ve.orderPost(l).then((function(e){m(e.info)})).catch((function(e){m(e.response.data.errorText)}))}}," Send")),r.a.createElement("div",null,s))},Ke=function(){return r.a.createElement("div",null,r.a.createElement(Ue,null))},Le=function(){return r.a.createElement("div",null,r.a.createElement(Je,null),r.a.createElement(Ke,null))},Ye="/pre-junior",qe="/Junior",Xe="/SuperJunior";var Ze=function(){return r.a.createElement("div",null,r.a.createElement(E.d,null,r.a.createElement(E.b,{path:"/",exact:!0,render:function(){return r.a.createElement(E.a,{to:qe})}}),r.a.createElement(E.b,{path:Ye,render:function(){return r.a.createElement(Z,null)}}),r.a.createElement(E.b,{path:qe,render:function(){return r.a.createElement(Me,null)}}),r.a.createElement(E.b,{path:Xe,render:function(){return r.a.createElement(Le,null)}}),r.a.createElement(E.b,{render:function(){return r.a.createElement($,null)}})))};var Qe=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),l=t[0],c=t[1],o=function(){c(!0)},u=function(){c(!1)};return r.a.createElement("div",null,r.a.createElement("div",{className:m.a.arrow},r.a.createElement("img",{onMouseOver:o,onMouseOut:u,src:a(100)})),r.a.createElement("div",{onMouseOver:o,onMouseOut:u,className:l?m.a.menu:m.a.menuHide},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.b,{to:Ye},"PreJunior")),r.a.createElement("li",null,r.a.createElement(d.b,{to:qe},"Junior")),r.a.createElement("li",null,r.a.createElement(d.b,{to:Xe},"Junior++")))))};var ze=function(){return r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement(Qe,null),r.a.createElement(Ze,null)))};var $e=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(ze,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var et=a(27),tt=Object(et.b)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ne:return Object(Oe.a)({},e,{loading:!e.loading});default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Pe:return Object(Oe.a)({},e,{them:t.theme});default:return e}}}),at=Object(et.c)(tt),nt=at;window.store=at,c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ce.a,{store:nt},r.a.createElement($e,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},16:function(e,t,a){e.exports={App:"App_App__3-liZ",select:"App_select__19Mhl",option:"App_option__3SoQp",blockRadio:"App_blockRadio__2zC31",radio:"App_radio__3gr8O"}},21:function(e,t,a){e.exports={allContainer:"clock_allContainer__3VS6t",clockContainer:"clock_clockContainer__2s75k",buttons:"clock_buttons__UWGNm",but1:"clock_but1__1F7ov",time:"clock_time__o7ikQ",data:"clock_data__2bvX2"}},30:function(e,t,a){e.exports={blue:"HW4_blue__3G6QN",column:"HW4_column__3oGVZ",checkBox:"HW4_checkBox__zmuvJ"}},33:function(e,t,a){e.exports={message:"Message_message__1fl69"}},34:function(e,t,a){e.exports={range:"SuperRange_range__28RR3"}},39:function(e,t,a){e.exports={arrow:"menu_arrow__2Kohp",menu:"menu_menu__1JCpW",menuHide:"menu_menuHide__2phl4"}},40:function(e,t,a){e.exports={superInput:"SuperInputText_superInput__1-Nlx",errorInput:"SuperInputText_errorInput__2DY-y",error:"SuperInputText_error__1jTFR"}},41:function(e,t,a){e.exports={someClass:"Greeting_someClass__17EWt",error:"Greeting_error__RWeh2"}},42:function(e,t,a){e.exports={default:"SuperButton_default__1yWmA",red:"SuperButton_red__3nxwg"}},43:function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__1fQo6",spanClassName:"SuperCheckbox_spanClassName__1ylGc"}},44:function(e,t,a){e.exports={error:"error_error__1G3x_",errorText:"error_errorText__3kaZo"}},46:function(e,t,a){e.exports={dark:"HW12_dark__3AiEv","dark-text":"HW12_dark-text__KaAeV",red:"HW12_red__2FL7U",yellow:"HW12_yellow__1Exr_","red-text":"HW12_red-text__2-NtJ",some:"HW12_some__aMw2B","some-text":"HW12_some-text__mwidP"}},62:function(e,t,a){e.exports={classSpan:"superSpan_classSpan___wKXW"}},63:function(e,t,a){e.exports=a.p+"static/media/tms-loading.6068d1f9.gif"},69:function(e,t,a){e.exports=a(101)},74:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.9427e743.chunk.js.map