(this["webpackJsonpreact-portifolio"]=this["webpackJsonpreact-portifolio"]||[]).push([[14],{143:function(t,e,n){"use strict";var r=n(18),o=Object.freeze({toggleLightMode:function(){return{type:r.a.TOGGLE_LIGHT_MODE}},toggleAboutModalVisible:function(){return{type:r.a.TOGGLE_ABOUT_MODAL_VISIBLE}},setPageLoading:function(){return{type:r.a.SET_PAGE_LOADING}},removePageLoading:function(){return{type:r.a.REMOVE_PAGE_LOADING}},changeLanguage:function(t){return{type:r.a.CHANGE_LANGUAGE,language:t}}});e.a=o},144:function(t,e,n){"use strict";var r=n(0),o=n(40),a=n(3),i=n(31),u=n.n(i),c=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),l=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},p=function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var a=arguments[e],i=0,u=a.length;i<u;i++,o++)r[o]=a[i];return r},s=u.a||i,f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c(e,t),e.prototype.shouldComponentUpdate=function(t){var e=this.props,n=e.values,r=l(e,["values"]),o=t.values,a=l(t,["values"]);return!s(o,n)||!s(r,a)},e.prototype.render=function(){var t=this;return r.createElement(o.a.Consumer,null,(function(e){Object(a.g)(e);var n=e.formatMessage,o=e.textComponent,i=void 0===o?r.Fragment:o,u=t.props,c=u.id,l=u.description,s=u.defaultMessage,f=u.values,g=u.children,y=u.tagName,d=void 0===y?i:y,v=n({id:c,description:l,defaultMessage:s},f);return Array.isArray(v)||(v=[v]),"function"===typeof g?g(v):d?r.createElement.apply(r,p([d,null],v)):v}))},e.displayName="FormattedMessage",e}(r.Component);e.a=f},326:function(t,e,n){"use strict";n.r(e);var r=n(144),o=n(0),a=n.n(o),i=n(353),u=n(27),c=n(143);e.default=function(){var t=Object(u.b)();return a.a.createElement("div",{className:"aboutContainer"},a.a.createElement(i.a,{placement:"right",title:a.a.createElement(r.a,{id:"link.aboutMe"})},a.a.createElement("span",{className:"aboutTitle",onClick:function(){t(c.a.toggleAboutModalVisible())}},a.a.createElement(r.a,{id:"about.title"}))))}}}]);
//# sourceMappingURL=14.290290f4.chunk.js.map