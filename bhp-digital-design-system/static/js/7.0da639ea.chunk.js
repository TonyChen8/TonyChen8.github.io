webpackJsonp([7],{223:function(e,t,o){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=o(0),i=o.n(c),l=o(298),u=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),s=function(e){function t(){return r(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){var e=[["gray-100","gray('100')","gray-100"],["gray-200","gray('200')","gray-200"],["gray-300","gray('300')","gray-300"],["gray-400","gray('400')","gray-400"],["gray-500","gray('500')","gray-500"],["gray-600","gray('600')","gray-600"],["gray-700","gray('700')","gray-700"],["gray-800","gray('800')","gray-800"],["gray-900","gray('900')","gray-900"],["blue","color('blue')","blue"],["theme-bg-color","color('theme-bg-color')","theme-bg-color"]];return i.a.createElement("div",{className:"row"},e.map(function(e,t){return i.a.createElement(l.a,{key:t,colorName:e[0],cssCode:e[1],color:e[2]})}))}}]),t}(i.a.Component);t.default=s},294:function(e,t,o){"use strict";var r=o(295),n=r.CopyToClipboard;n.CopyToClipboard=n,e.exports=n},295:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var o={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(o[r]=e[r]);return o}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},u=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),s=o(0),p=r(s),f=o(296),y=r(f);(t.CopyToClipboard=function(e){function t(){var e,o,r,n;a(this,t);for(var i=arguments.length,l=Array(i),u=0;u<i;u++)l[u]=arguments[u];return o=r=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.onClick=function(e){var t=r.props,o=t.text,n=t.onCopy,a=t.children,c=t.options,i=p.default.Children.only(a),l=(0,y.default)(o,c);n&&n(o,l),i&&i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e)},n=o,c(r,n)}return i(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),o=n(e,["text","onCopy","options","children"]),r=p.default.Children.only(t);return p.default.cloneElement(r,l({},o,{onClick:this.onClick}))}}]),t}(p.default.PureComponent)).defaultProps={onCopy:void 0,options:void 0}},296:function(e,t,o){"use strict";function r(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function n(e,t){var o,n,i,l,u,s,p=!1;t||(t={}),o=t.debug||!1;try{i=a(),l=document.createRange(),u=document.getSelection(),s=document.createElement("span"),s.textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",document.body.appendChild(s),l.selectNode(s),u.addRange(l);if(!document.execCommand("copy"))throw new Error("copy command was unsuccessful");p=!0}catch(a){o&&console.error("unable to copy using execCommand: ",a),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData("text",e),p=!0}catch(a){o&&console.error("unable to copy using clipboardData: ",a),o&&console.error("falling back to prompt"),n=r("message"in t?t.message:c),window.prompt(n,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(l):u.removeAllRanges()),s&&document.body.removeChild(s),i()}return p}var a=o(297),c="Copy to clipboard: #{key}, Enter";e.exports=n},297:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],r=0;r<e.rangeCount;r++)o.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||o.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},298:function(e,t,o){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=o(0),i=o.n(c),l=o(294),u=(o.n(l),o(31)),s=o.n(u),p=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),f=function(e){function t(){return r(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),p(t,[{key:"render",value:function(){var e=this.props,t=e.color,o=e.colorName,r=e.cssCode;return i.a.createElement("div",{className:"col-12 col-sm-6 col-md-3"},i.a.createElement("div",{className:"hex-box"},i.a.createElement(l.CopyToClipboard,{text:r},i.a.createElement("div",{className:s()("d-flex flex-column justify-content-center hex-box",t)},i.a.createElement("div",{className:"copy-message"},"Click to copy"),i.a.createElement("div",null,o)))),i.a.createElement("div",{className:"code-box"},r))}}]),t}(c.Component);t.a=f}});
//# sourceMappingURL=7.0da639ea.chunk.js.map