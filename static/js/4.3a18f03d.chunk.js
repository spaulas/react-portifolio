(this["webpackJsonpreact-portifolio"]=this["webpackJsonpreact-portifolio"]||[]).push([[4],{212:function(e,a,t){e.exports=t.p+"static/media/developer.e4327799.png"},320:function(e,a,t){e.exports=t.p+"static/media/linkedin.3c8afea5.svg"},321:function(e,a,t){e.exports=t.p+"static/media/github.1f33e75d.svg"},331:function(e,a,t){e.exports=t.p+"static/media/lightMode.24c27a3c.svg"},332:function(e,a,t){e.exports=t.p+"static/media/arrowDown.ae427edb.svg"},339:function(e,a,t){"use strict";t.r(a);var n=t(26),c=t(163),l=t(164),r=t(0),o=t.n(r),i=t(340),s=t(336),m=t(30),u=t(162),d=t(211),E=t.n(d);var g=function(){var e=E()().diff("1995-01-12","years");return o.a.createElement(c.a,null,o.a.createElement(l.a,{xs:24,sm:24,md:10},o.a.createElement("img",{className:"developer",src:t(212),alt:""})),o.a.createElement(l.a,{xs:24,sm:24,md:14,className:"aboutTextContainer"},o.a.createElement("p",null,o.a.createElement(u.a,{id:"about.text01"})," ",e,o.a.createElement(u.a,{id:"about.text02"})),o.a.createElement("p",null,o.a.createElement(u.a,{id:"about.text03"})," ",o.a.createElement("a",{href:"https://en.wavecom.pt/",target:"_blank",rel:"noopener noreferrer"},"Wavecom"),o.a.createElement(u.a,{id:"about.text04"})),o.a.createElement("p",null,o.a.createElement(u.a,{id:"about.text05"})),o.a.createElement("p",null,o.a.createElement(u.a,{id:"about.text06"}))))},f=t(72),p=t(335),v=t(338),b=t(342),N=t(341),h=function(e){var a=/^[0-9A-Za-z!@#$%&*()_\-+={[}\]|:;"'<,>.?/\\~`]+[0-9A-Za-z!@#$%&*()_\-+={[}\]|:;"'<,>.?/\\~`]*$/g;return"object"===typeof e?!!e.find((function(e){return!a.test(e)})):!a.test(e)};var w=function(e){var a=e.className,t=e.onClick,n=e.children;return o.a.createElement(c.a,{className:"buttonSpaceRow",align:"middle",justify:"center"},o.a.createElement("div",{className:"animatedButton divButton ".concat(a),onClick:t},n))},j=t(34),C=Object.freeze({toggleLightMode:function(){return{type:j.a.TOGGLE_LIGHT_MODE}},toggleAboutModalVisible:function(){return{type:j.a.TOGGLE_ABOUT_MODAL_VISIBLE}},setPageLoading:function(){return{type:j.a.SET_PAGE_LOADING}},removePageLoading:function(){return{type:j.a.REMOVE_PAGE_LOADING}},changeLanguage:function(e){return{type:j.a.CHANGE_LANGUAGE,language:e}}}),O=v.a.Item;var A=function(){var e=Object(p.a)(),a=Object(m.b)(),t=v.a.useForm(),l=Object(n.a)(t,1)[0];Object(r.useEffect)((function(){l.resetFields(),a(C.removePageLoading())}),[]);var i=function(e,a){var t=e.target.value;l.setFieldsValue(Object(f.a)({},a,t))},s=function(e){window.emailjs.send("outlook","portfolio",e).then((function(e){b.a.success({message:o.a.createElement(u.a,{id:"contact.success"}),duration:5}),a(C.toggleAboutModalVisible()),a(C.removePageLoading())})).catch((function(e){b.a.error({message:o.a.createElement(u.a,{id:"contact.error.message1"}),description:e.status?o.a.createElement("span",null,o.a.createElement(u.a,{id:"contact.error.message2"}),e.status):null,duration:5}),a(C.removePageLoading())}))};return o.a.createElement(o.a.Fragment,null,o.a.createElement(v.a,{name:"loginForm",className:"contactMe",onFinish:function(e){a(C.setPageLoading()),s(e)},form:l},o.a.createElement(c.a,{align:"middle",justify:"center"},o.a.createElement(O,{name:"name",rules:[{required:!0,message:o.a.createElement(u.a,{id:"contact.required.name"})},{validator:function(a,t,n){return function(e,a,t,n){a.lenght<3&&t(n.formatMessage({id:"contact.invalid.length"})),a&&h(a)?t(n.formatMessage({id:"contact.invalid.name"})):t()}(0,t,n,e)}}]},o.a.createElement(N.a,{className:"formInputAnimated formInput",onChange:function(e){return i(e,"name")}}),o.a.createElement("label",{className:"labelPlaceholder"},o.a.createElement(u.a,{id:"contact.name"})))),o.a.createElement(c.a,{align:"middle",justify:"center"},o.a.createElement(O,{name:"email",rules:[{required:!0,message:o.a.createElement(u.a,{id:"contact.required.email"})},{validator:function(a,t,n){return function(e,a,t,n){a&&function(e){var a=/^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return"object"===typeof e?!!e.find((function(e){return!a.test(e)})):!a.test(e)}(a)?t(n.formatMessage({id:"contact.invalid.email"})):t()}(0,t,n,e)}}]},o.a.createElement(N.a,{className:"formInputAnimated formInput",onChange:function(e){return i(e,"email")}}),o.a.createElement("label",{className:"labelPlaceholder"},o.a.createElement(u.a,{id:"contact.email"})))),o.a.createElement(c.a,{align:"middle",justify:"center"},o.a.createElement(O,{name:"message",rules:[{required:!0,message:o.a.createElement(u.a,{id:"contact.required.message"})},{validator:function(a,t,n){return function(e,a,t,n){a.lenght<3?t(n.formatMessage({id:"contact.invalid.length"})):t()}(0,t,n,e)}}]},o.a.createElement(N.a.TextArea,{rows:4,className:"formInputAnimated formInput formMessage",onChange:function(e){return i(e,"message")}}),o.a.createElement("label",{className:"labelPlaceholder"},o.a.createElement(u.a,{id:"contact.message"})))),o.a.createElement(c.a,{align:"middle",justify:"center"},o.a.createElement(w,{onClick:function(){return l.submit()},className:"submitButtonAnimated"},o.a.createElement("span",null,o.a.createElement(u.a,{id:"contact.submit"}))))),o.a.createElement("span",{className:"contactMeBehind"},o.a.createElement(u.a,{id:"contact.title"})))};var L=function(){var e=Object(m.b)(),a=Object(m.c)((function(e){var a=e.Website;return{visible:a.aboutModalVisible,theme:a.theme,pageLoading:a.pageLoading}})),t=a.visible,n=a.theme,r=a.pageLoading;return t?o.a.createElement(i.a,{visible:!0,onCancel:function(){e(C.toggleAboutModalVisible())},footer:null,width:"80%",wrapClassName:"react-portifolio",maskClosable:!1},o.a.createElement(s.a,{spinning:r},o.a.createElement(c.a,{className:"aboutModalContainer ".concat(n)},o.a.createElement(l.a,{className:"aboutMeCol",xs:24,sm:24,md:14},o.a.createElement(g,null)),o.a.createElement(l.a,{className:"contactMeCol",xs:24,sm:24,md:10},o.a.createElement(A,null))))):null};var M=function(){var e=Object(m.b)();return o.a.createElement("div",{className:"aboutContainer"},o.a.createElement("span",{className:"aboutTitle",onClick:function(){e(C.toggleAboutModalVisible())}},o.a.createElement(u.a,{id:"about.title"})))};var k=function(e){var a=e.className,t=void 0===a?"":a;return o.a.createElement("div",{className:"backgroundInitials"},o.a.createElement("h1",{className:"initials ".concat(t)},"PS"))};var y=function(){return o.a.createElement("div",{className:"connectionsContainer"},o.a.createElement("img",{className:"connectionIcon",src:t(320),alt:"Linkedin",onClick:function(){return window.open("https://www.linkedin.com/in/spaulas/?locale=en_US")}}),o.a.createElement("img",{className:"connectionIcon",src:t(321),alt:"Github",onClick:function(){return window.open("https://github.com/spaulas")}}))};var x=function(e){var a=e.className,t=void 0===a?"":a;return o.a.createElement("div",{className:"developerTitleContainer ".concat(t)},o.a.createElement("h1",{className:"developerName"},"Paula Santos"),o.a.createElement("h3",{className:"developerJob"},o.a.createElement(u.a,{id:"developer.title"})))},I=t(322),G=t(337),P=G.a.Option;var _=function(){var e=Object(m.b)(),a=Object(m.c)((function(e){return{language:e.Website.language}})).language;return o.a.createElement(G.a,{className:"languageSwitch",value:a,onChange:function(a){e(C.changeLanguage(a))}},o.a.createElement(P,{value:"en-US"},o.a.createElement(I.a,{className:"flags",countryCode:"GB"})),o.a.createElement(P,{value:"pt-BR"},o.a.createElement(I.a,{className:"flags",countryCode:"BR"})),o.a.createElement(P,{value:"de-DE"},o.a.createElement(I.a,{className:"flags",countryCode:"DE"})),o.a.createElement(P,{value:"es-ES"},o.a.createElement(I.a,{className:"flags",countryCode:"ES"})))};var S=function(){var e=Object(m.b)();return o.a.createElement("img",{className:"lightMode",src:t(331),alt:"",onClick:function(){e(C.toggleLightMode())}})};var T=function(){return o.a.createElement("div",{className:"projectsArrow"},o.a.createElement("span",{className:"arrowTitle"},o.a.createElement(u.a,{id:"project.arrow"})),o.a.createElement("img",{className:"arrowIcon",src:t(332),alt:"",onClick:function(){var e=window.innerHeight;window.scroll(0,e)}}))};a.default=function(){var e=Object(m.c)((function(e){return{theme:e.Website.theme}})).theme,a=Object(r.useState)(!0),t=Object(n.a)(a,2),i=t[0],s=t[1];return Object(r.useEffect)((function(){setTimeout((function(){s(!1)}),1e3)}),[]),o.a.createElement("div",{className:"homePage ".concat(e)},o.a.createElement(k,{className:i?"showInitials":""}),o.a.createElement("div",{className:"overBackground"},o.a.createElement(c.a,{className:"topRow"},o.a.createElement(_,null),o.a.createElement(S,null)),o.a.createElement(c.a,{className:"middleRow"},o.a.createElement(l.a,{span:1},o.a.createElement(M,null)),o.a.createElement(l.a,{span:21},o.a.createElement(x,{className:i?"showDeveloperName":""})),o.a.createElement(l.a,{span:2},o.a.createElement(y,null))),o.a.createElement(c.a,{className:"bottomRow",justify:"center"},o.a.createElement(T,null))),o.a.createElement(L,null))}}}]);
//# sourceMappingURL=4.3a18f03d.chunk.js.map