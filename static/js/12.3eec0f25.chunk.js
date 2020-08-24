(this["webpackJsonpreact-portifolio"]=this["webpackJsonpreact-portifolio"]||[]).push([[12],{134:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceVisible=t.forceCheck=t.lazyload=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),i=c(r),a=c(n(65)),l=n(135),u=c(n(136)),f=c(n(137)),s=c(n(138));function c(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function v(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=0,m=0,y=0,b=0,w="data-lazyload-listened",g=[],O=[],E=!1;try{var _=Object.defineProperty({},"passive",{get:function(){E=!0}});window.addEventListener("test",null,_)}catch(k){}var j=!!E&&{capture:!1,passive:!0},P=function(e){var t=e.ref;if(t instanceof HTMLElement){var n=(0,u.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=e.ref,o=void 0,r=void 0,i=void 0,a=void 0;try{var l=t.getBoundingClientRect();o=l.top,r=l.left,i=l.height,a=l.width}catch(k){o=h,r=m,i=b,a=y}var u=window.innerHeight||document.documentElement.clientHeight,f=window.innerWidth||document.documentElement.clientWidth,s=Math.max(o,0),c=Math.max(r,0),d=Math.min(u,o+i)-s,p=Math.min(f,r+a)-c,v=void 0,w=void 0,g=void 0,O=void 0;try{var E=n.getBoundingClientRect();v=E.top,w=E.left,g=E.height,O=E.width}catch(k){v=h,w=m,g=b,O=y}var _=v-s,j=w-c,P=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return _-P[0]<=d&&_+g+P[1]>=0&&j-P[0]<=p&&j+O+P[1]>=0}(e,n):function(e){var t=e.ref;if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,o=void 0;try{var r=t.getBoundingClientRect();n=r.top,o=r.height}catch(k){n=h,o=b}var i=window.innerHeight||document.documentElement.clientHeight,a=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-a[0]<=i&&n+o+a[1]>=0}(e))?e.visible||(e.props.once&&O.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},C=function(){O.forEach((function(e){var t=g.indexOf(e);-1!==t&&g.splice(t,1)})),O=[]},M=function(){for(var e=0;e<g.length;++e){var t=g[e];P(t)}C()},A=void 0,N=null,T=function(e){function t(e){d(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n.setRef=n.setRef.bind(n),n}return v(t,e),o(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"===typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===A||"debounce"===A&&void 0===this.props.debounce;if(n&&((0,l.off)(e,"scroll",N,j),(0,l.off)(window,"resize",N,j),N=null),N||(void 0!==this.props.debounce?(N=(0,f.default)(M,"number"===typeof this.props.debounce?this.props.debounce:300),A="debounce"):void 0!==this.props.throttle?(N=(0,s.default)(M,"number"===typeof this.props.throttle?this.props.throttle:300),A="throttle"):N=M),this.props.overflow){var o=(0,u.default)(this.ref);if(o&&"function"===typeof o.getAttribute){var r=+o.getAttribute(w)+1;1===r&&o.addEventListener("scroll",N,j),o.setAttribute(w,r)}}else if(0===g.length||n){var i=this.props,a=i.scroll,c=i.resize;a&&(0,l.on)(e,"scroll",N,j),c&&(0,l.on)(window,"resize",N,j)}g.push(this),P(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,u.default)(this.ref);if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(w)-1;0===t?(e.removeEventListener("scroll",N,j),e.removeAttribute(w)):e.setAttribute(w,t)}}var n=g.indexOf(this);-1!==n&&g.splice(n,1),0===g.length&&"undefined"!==typeof window&&((0,l.off)(window,"resize",N,j),(0,l.off)(window,"scroll",N,j))}},{key:"setRef",value:function(e){e&&(this.ref=e)}},{key:"render",value:function(){var e=this.props,t=e.height,n=e.children,o=e.placeholder,r=e.classNamePrefix;return i.default.createElement("div",{className:r+"-wrapper",ref:this.setRef},this.visible?n:o||i.default.createElement("div",{style:{height:t},className:r+"-placeholder"}))}}]),t}(r.Component);T.propTypes={classNamePrefix:a.default.string,once:a.default.bool,height:a.default.oneOfType([a.default.number,a.default.string]),offset:a.default.oneOfType([a.default.number,a.default.arrayOf(a.default.number)]),overflow:a.default.bool,resize:a.default.bool,scroll:a.default.bool,children:a.default.node,throttle:a.default.oneOfType([a.default.number,a.default.bool]),debounce:a.default.oneOfType([a.default.number,a.default.bool]),placeholder:a.default.node,scrollContainer:a.default.oneOfType([a.default.string,a.default.object]),unmountIfInvisible:a.default.bool},T.defaultProps={classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var x=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function r(){d(this,r);var e=p(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return e.displayName="LazyLoad"+x(t),e}return v(r,n),o(r,[{key:"render",value:function(){return i.default.createElement(T,e,i.default.createElement(t,this.props))}}]),r}(r.Component)}},t.default=T,t.forceCheck=M,t.forceVisible=function(){for(var e=0;e<g.length;++e){var t=g[e];t.visible=!0,t.forceUpdate()}C()}},135:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,o){o=o||!1,e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on"+t,(function(t){n.call(e,t||window.event)}))},t.off=function(e,t,n,o){o=o||!1,e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent("on"+t,n)}},136:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,o=e;o;){if(!o.parentNode)return e.ownerDocument||document.documentElement;var r=window.getComputedStyle(o),i=r.position,a=r.overflow,l=r["overflow-x"],u=r["overflow-y"];if("static"===i&&t)o=o.parentNode;else{if(n.test(a)&&n.test(l)&&n.test(u))return o;o=o.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},137:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o=void 0,r=void 0,i=void 0,a=void 0,l=void 0,u=function u(){var f=+new Date-a;f<t&&f>=0?o=setTimeout(u,t-f):(o=null,n||(l=e.apply(i,r),o||(i=null,r=null)))};return function(){i=this,r=arguments,a=+new Date;var f=n&&!o;return o||(o=setTimeout(u,t)),f&&(l=e.apply(i,r),i=null,r=null),l}}},138:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o,r;return t||(t=250),function(){var i=n||this,a=+new Date,l=arguments;o&&a<o+t?(clearTimeout(r),r=setTimeout((function(){o=a,e.apply(i,l)}),t)):(o=a,e.apply(i,l))}}},144:function(e,t,n){"use strict";var o=n(0),r=n(40),i=n(3),a=n(31),l=n.n(a),u=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),f=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n},s=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var o=Array(e),r=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,l=i.length;a<l;a++,r++)o[r]=i[a];return o},c=l.a||a,d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return u(t,e),t.prototype.shouldComponentUpdate=function(e){var t=this.props,n=t.values,o=f(t,["values"]),r=e.values,i=f(e,["values"]);return!c(r,n)||!c(o,i)},t.prototype.render=function(){var e=this;return o.createElement(r.a.Consumer,null,(function(t){Object(i.g)(t);var n=t.formatMessage,r=t.textComponent,a=void 0===r?o.Fragment:r,l=e.props,u=l.id,f=l.description,c=l.defaultMessage,d=l.values,p=l.children,v=l.tagName,h=void 0===v?a:v,m=n({id:u,description:f,defaultMessage:c},d);return Array.isArray(m)||(m=[m]),"function"===typeof p?p(m):h?o.createElement.apply(o,s([h,null],m)):m}))},t.displayName="FormattedMessage",t}(o.Component);t.a=d},343:function(e,t,n){"use strict";n.r(t);var o=n(144),r=n(134),i=n.n(r),a=n(0),l=n.n(a);t.default=function(){return l.a.createElement("div",{className:"projectsArrow"},l.a.createElement("span",{className:"arrowTitle"},l.a.createElement(o.a,{id:"project.arrow"})),l.a.createElement(i.a,null,l.a.createElement("img",{className:"arrowIcon",src:n(344),alt:"",onClick:function(){var e=window.innerHeight;window.scroll(0,e)}})))}},344:function(e,t,n){e.exports=n.p+"static/media/arrowDown.ae427edb.svg"}}]);
//# sourceMappingURL=12.3eec0f25.chunk.js.map