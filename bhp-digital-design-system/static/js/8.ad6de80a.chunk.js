webpackJsonp([8],{218:function(o,r,e){"use strict";function n(o,r){if(!(o instanceof r))throw new TypeError("Cannot call a class as a function")}function A(o,r){if(!o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!==typeof r&&"function"!==typeof r?o:r}function c(o,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);o.prototype=Object.create(r&&r.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(o,r):o.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var l=e(0),d=e.n(l),a=e(299),b=function(){function o(o,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}return function(r,e,n){return e&&o(r.prototype,e),n&&o(r,n),r}}(),t=function(o){function r(){return n(this,r),A(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return c(r,o),b(r,[{key:"render",value:function(){var o=[["gray-100","gray('100')","gray-100"],["gray-200","gray('200')","gray-200"],["gray-300","gray('300')","gray-300"],["gray-400","gray('400')","gray-400"],["gray-500","gray('500')","gray-500"],["gray-600","gray('600')","gray-600"],["gray-700","gray('700')","gray-700"],["gray-800","gray('800')","gray-800"],["gray-900","gray('900')","gray-900"],["blue","color('blue')","blue"],["off-white","color('off-white')","off-white"]];return d.a.createElement("div",{className:"row"},o.map(function(o,r){return d.a.createElement(a.a,{key:r,colorName:o[0],cssCode:o[1],color:o[2]})}))}}]),r}(d.a.Component);r.default=t},294:function(o,r,e){"use strict";var n=e(295),A=n.CopyToClipboard;A.CopyToClipboard=A,o.exports=A},295:function(o,r,e){"use strict";function n(o){return o&&o.__esModule?o:{default:o}}function A(o,r){var e={};for(var n in o)r.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);return e}function c(o,r){if(!(o instanceof r))throw new TypeError("Cannot call a class as a function")}function l(o,r){if(!o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!==typeof r&&"function"!==typeof r?o:r}function d(o,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);o.prototype=Object.create(r&&r.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(o,r):o.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0}),r.CopyToClipboard=void 0;var a=Object.assign||function(o){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n])}return o},b=function(){function o(o,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}return function(r,e,n){return e&&o(r.prototype,e),n&&o(r,n),r}}(),t=e(0),f=n(t),p=e(296),i=n(p);(r.CopyToClipboard=function(o){function r(){var o,e,n,A;c(this,r);for(var d=arguments.length,a=Array(d),b=0;b<d;b++)a[b]=arguments[b];return e=n=l(this,(o=r.__proto__||Object.getPrototypeOf(r)).call.apply(o,[this].concat(a))),n.onClick=function(o){var r=n.props,e=r.text,A=r.onCopy,c=r.children,l=r.options,d=f.default.Children.only(c),a=(0,i.default)(e,l);A&&A(e,a),d&&d.props&&"function"===typeof d.props.onClick&&d.props.onClick(o)},A=e,l(n,A)}return d(r,o),b(r,[{key:"render",value:function(){var o=this.props,r=(o.text,o.onCopy,o.options,o.children),e=A(o,["text","onCopy","options","children"]),n=f.default.Children.only(r);return f.default.cloneElement(n,a({},e,{onClick:this.onClick}))}}]),r}(f.default.PureComponent)).defaultProps={onCopy:void 0,options:void 0}},296:function(o,r,e){"use strict";function n(o){var r=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return o.replace(/#{\s*key\s*}/g,r)}function A(o,r){var e,A,d,a,b,t,f=!1;r||(r={}),e=r.debug||!1;try{d=c(),a=document.createRange(),b=document.getSelection(),t=document.createElement("span"),t.textContent=o,t.style.all="unset",t.style.position="fixed",t.style.top=0,t.style.clip="rect(0, 0, 0, 0)",t.style.whiteSpace="pre",t.style.webkitUserSelect="text",t.style.MozUserSelect="text",t.style.msUserSelect="text",t.style.userSelect="text",document.body.appendChild(t),a.selectNode(t),b.addRange(a);if(!document.execCommand("copy"))throw new Error("copy command was unsuccessful");f=!0}catch(c){e&&console.error("unable to copy using execCommand: ",c),e&&console.warn("trying IE specific stuff");try{window.clipboardData.setData("text",o),f=!0}catch(c){e&&console.error("unable to copy using clipboardData: ",c),e&&console.error("falling back to prompt"),A=n("message"in r?r.message:l),window.prompt(A,o)}}finally{b&&("function"==typeof b.removeRange?b.removeRange(a):b.removeAllRanges()),t&&document.body.removeChild(t),d()}return f}var c=e(297),l="Copy to clipboard: #{key}, Enter";o.exports=A},297:function(o,r){o.exports=function(){var o=document.getSelection();if(!o.rangeCount)return function(){};for(var r=document.activeElement,e=[],n=0;n<o.rangeCount;n++)e.push(o.getRangeAt(n));switch(r.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":r.blur();break;default:r=null}return o.removeAllRanges(),function(){"Caret"===o.type&&o.removeAllRanges(),o.rangeCount||e.forEach(function(r){o.addRange(r)}),r&&r.focus()}}},299:function(o,r,e){"use strict";function n(o,r){if(!(o instanceof r))throw new TypeError("Cannot call a class as a function")}function A(o,r){if(!o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!==typeof r&&"function"!==typeof r?o:r}function c(o,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);o.prototype=Object.create(r&&r.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(o,r):o.__proto__=r)}var l=e(0),d=e.n(l),a=e(300),b=(e.n(a),e(294)),t=(e.n(b),e(4)),f=e.n(t),p=function(){function o(o,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}return function(r,e,n){return e&&o(r.prototype,e),n&&o(r,n),r}}(),i=function(o){function r(){return n(this,r),A(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return c(r,o),p(r,[{key:"render",value:function(){var o=this.props,r=o.color,e=o.colorName,n=o.cssCode;return d.a.createElement("div",{className:"col-12 col-sm-6 col-md-3"},d.a.createElement("div",{className:"hexBox"},d.a.createElement(b.CopyToClipboard,{text:n},d.a.createElement("div",{className:f()("d-flex flex-column justify-content-center hexBox",r)},d.a.createElement("div",{className:"copyMessage"},"Click to copy"),d.a.createElement("div",null,e)))),d.a.createElement("div",{className:"codeBox"},n))}}]),r}(l.Component);r.a=i},300:function(o,r,e){var n=e(301);"string"===typeof n&&(n=[[o.i,n,""]]);var A={hmr:!1};A.transform=void 0;e(204)(n,A);n.locals&&(o.exports=n.locals)},301:function(o,r,e){r=o.exports=e(203)(!0),r.push([o.i,'.pageHeader{margin-top:40px!important;margin-bottom:30px!important;background-color:color("#000")}.hexBox{height:80px;text-align:center;border-radius:4px;cursor:pointer}.hexBox .copyMessage{display:none}.hexBox:hover .copyMessage{display:block}.codeBox{margin:5px 0 10px;border:1px solid #f2f2f2;padding:5px;border-radius:4px}.colourMixBox{width:54px;line-height:54px;text-align:center;color:#fff;font-size:18px;font-weight:700}.colourMixText{padding-left:15px;line-height:54px}.bhp-orange-1{background-color:#dd5900}.bhp-orange-1,.bhp-orange-2{color:#fff;border:1px solid #adb5bd}.bhp-orange-2{background-color:#f77f00}.bhp-orange-3{background-color:#fcba5e}.bhp-orange-3,.bhp-orange-4{color:#000;border:1px solid #dee2e6}.bhp-orange-4{background-color:#ffd691}.bhp-purple-1{background-color:#636}.bhp-purple-1,.bhp-purple-2{color:#fff;border:1px solid #adb5bd}.bhp-purple-2{background-color:#939}.bhp-purple-3{background-color:#c69;color:#fff;border:1px solid #adb5bd}.bhp-purple-4{background-color:#e8e0e8;color:#000;border:1px solid #dee2e6}.bhp-blue-1{background-color:#1d4f91}.bhp-blue-1,.bhp-blue-2{color:#fff;border:1px solid #adb5bd}.bhp-blue-2{background-color:#0a6cb4}.bhp-blue-3{background-color:#09c;color:#fff;border:1px solid #adb5bd}.bhp-blue-4{background-color:#d7ebff;color:#000;border:1px solid #dee2e6}.bhp-turquoise-1{background-color:#01515f}.bhp-turquoise-1,.bhp-turquoise-2{color:#fff;border:1px solid #adb5bd}.bhp-turquoise-2{background-color:#007e98}.bhp-turquoise-3{background-color:#6ec9da}.bhp-turquoise-3,.bhp-turquoise-4{color:#000;border:1px solid #dee2e6}.bhp-turquoise-4{background-color:#cee9ef}.bhp-green-1{background-color:#035d55}.bhp-green-1,.bhp-green-2{color:#fff;border:1px solid #adb5bd}.bhp-green-2{background-color:#06ad96}.bhp-green-3{background-color:#abcc66;color:#fff;border:1px solid #adb5bd}.bhp-green-4{background-color:#e0e9af;color:#000;border:1px solid #dee2e6}.bhp-blue-grey-1{background-color:#2b5368}.bhp-blue-grey-1,.bhp-blue-grey-2{color:#fff;border:1px solid #adb5bd}.bhp-blue-grey-2{background-color:#45768b}.bhp-blue-grey-3{background-color:#6ba4b8;color:#fff;border:1px solid #adb5bd}.bhp-blue-grey-4{background-color:#bfced6;color:#000;border:1px solid #dee2e6}.bhp-grey-1{background-color:#252525}.bhp-grey-1,.bhp-grey-2{color:#fff;border:1px solid #adb5bd}.bhp-grey-2{background-color:#666}.bhp-grey-3{background-color:#b7b9bb}.bhp-grey-3,.bhp-grey-4{color:#000;border:1px solid #dee2e6}.bhp-grey-4{background-color:#e7e2d5}.primary{background-color:#dd5900}.primary,.secondary{color:#fff;border:1px solid #adb5bd}.secondary{background-color:#6c757d}.success{background-color:#28a745}.info,.success{color:#fff;border:1px solid #adb5bd}.info{background-color:#09c}.warning{background-color:#fcba5e;color:#000;border:1px solid #dee2e6}.danger{background-color:#dc3545;color:#fff;border:1px solid #adb5bd}.light{background-color:#f8f9fa;color:#000;border:1px solid #dee2e6}.dark{background-color:#343a40;color:#fff;border:1px solid #adb5bd}.off-white{border:1px solid #dee2e6}.gray-100{background-color:#ebebeb}.gray-100,.gray-200{color:#000;border:1px solid #767684}.gray-200{background-color:#c8c8c8}.gray-300{background-color:#767684}.gray-300,.gray-400{color:#fff;border:1px solid #5e5e6b}.gray-400{background-color:#60606d}.gray-500{background-color:#5e5e6b}.gray-500,.gray-600{color:#fff;border:1px solid #5e5e6b}.gray-600{background-color:#525361}.gray-700{background-color:#4a4b58}.gray-700,.gray-800{color:#fff;border:1px solid #5e5e6b}.gray-800{background-color:#3f414e}.gray-900{background-color:#353744}.blue,.gray-900{color:#fff;border:1px solid #5e5e6b}.blue{background-color:#0a6cb4}.black{background-color:#111;color:#fff;border:1px solid #5e5e6b}.off-white{background-color:#f2f4f5;color:#000;border:1px solid #767684}.indigo{background-color:#636}.indigo,.purple{color:#fff;border:1px solid #5e5e6b}.purple{background-color:#939}.pink{background-color:#c69}.pink,.red{color:#fff;border:1px solid #5e5e6b}.red{background-color:#dc3545}.orange{background-color:#dd5900;color:#fff;border:1px solid #5e5e6b}.yellow{background-color:#fcba5e;color:#000;border:1px solid #767684}.green{background-color:#28a745}.green,.teal{color:#fff;border:1px solid #5e5e6b}.teal{background-color:#06ad96}.cyan{background-color:#09c;color:#fff;border:1px solid #5e5e6b}.white{background-color:#fff;color:#000;border:1px solid #767684}.gray{background-color:#525361}.gray,.gray-dark{color:#fff;border:1px solid #5e5e6b}.gray-dark{background-color:#3f414e}',"",{version:3,sources:["C:/projects/refactor-bhp-digital-design-system/bhp-digital-design-system/src/components/ColorBlock/styles.css"],names:[],mappings:"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",file:"styles.css",sourcesContent:['.pageHeader {\n  margin-top: 40px !important;\n  margin-bottom: 30px !important;\n  background-color: color("black"); }\n\n.hexBox {\n  height: 80px;\n  text-align: center;\n  border-radius: 4px;\n  cursor: pointer; }\n  .hexBox .copyMessage {\n    display: none; }\n  .hexBox:hover .copyMessage {\n    display: block; }\n\n.codeBox {\n  margin: 5px 0 10px 0;\n  border: 1px solid #f2f2f2;\n  padding: 5px;\n  border-radius: 4px; }\n\n.colourMixBox {\n  width: 54px;\n  line-height: 54px;\n  text-align: center;\n  color: white;\n  font-size: 18px;\n  font-weight: bold; }\n\n.colourMixText {\n  padding-left: 15px;\n  line-height: 54px; }\n\n.bhp-orange-1 {\n  background-color: #dd5900;\n  color: #fff;\n  border: 1px solid #adb5bd; }\n\n.bhp-orange-2 {\n  background-color: #f77f00;\n  color: #fff;\n  border: 1px solid #adb5bd; }\n\n.bhp-orange-3 {\n  background-color: #fcba5e;\n  color: #000;\n  border: 1px solid #dee2e6; }\n\n.bhp-orange-4 {\n  background-color: #ffd691;\n  color: #000;\n  border: 1px solid #dee2e6; }\n\n.bhp-purple-1 {\n  background-color: #663366;\n  color: #fff;\n  border: 1px solid #adb5bd; }\n\n.bhp-purple-2 {\n  background-color: #993399;\n  color: #fff;\n  border: 1px solid #adb5bd; }\n\n.bhp-purple-3 {\n  background-color: #cc6699;\n  color: #fff;\n  border: 1px solid #adb5bd; }\n\n.bhp-purple-4 {\n  background-color: #e8e0e8;\n  color: #000;\n  border: 1px solid #dee2e6; }\n\n.bhp-blue-1 {\n  background-color: #1d4f91;\n  color: #fff;\n  border: 1px solid #adb5bd; }\n\n.bhp-blue-2 {\n  background-color: #0a6cb4;\n  color: #fff;\n  border: 1px solid #adb5bd; }\n\n.bhp-blue-3 {\n  background-color: #0099cc;\n  color: #fff;\n  border: 1px solid #adb5bd; }\n\n.bhp-blue-4 {\n  background-color: #d7ebff;\n  color: #000;\n  border: 1px solid #dee2e6; }\n\n.bhp-turquoise-1 {\n  background-color: #01515f;\n  color: #fff;\n  border: 1px solid #adb5bd; }\n\n.bhp-turquoise-2 {\n  background-color: #007E98;\n  color: #fff;\n  border: 1px solid #adb5bd; }\n\n.bhp-turquoise-3 {\n  background-color: #6ec9da;\n  color: #000;\n  border: 1px solid #dee2e6; }\n\n.bhp-turquoise-4 {\n  background-color: #cee9ef;\n  color: #000;\n  border: 1px solid #dee2e6; }\n\n.bhp-green-1 {\n  background-color: #035d55;\n  color: #fff;\n  border: 1px solid #adb5bd; }\n\n.bhp-green-2 {\n  background-color: #06ad96;\n  color: #fff;\n  border: 1px solid #adb5bd; }\n\n.bhp-green-3 {\n  background-color: #abcc66;\n  color: #fff;\n  border: 1px solid #adb5bd; }\n\n.bhp-green-4 {\n  background-color: #e0e9af;\n  color: #000;\n  border: 1px solid #dee2e6; }\n\n.bhp-blue-grey-1 {\n  background-color: #2b5368;\n  color: #fff;\n  border: 1px solid #adb5bd; }\n\n.bhp-blue-grey-2 {\n  background-color: #45768b;\n  color: #fff;\n  border: 1px solid #adb5bd; }\n\n.bhp-blue-grey-3 {\n  background-color: #6ba4b8;\n  color: #fff;\n  border: 1px solid #adb5bd; }\n\n.bhp-blue-grey-4 {\n  background-color: #bfced6;\n  color: #000;\n  border: 1px solid #dee2e6; }\n\n.bhp-grey-1 {\n  background-color: #252525;\n  color: #fff;\n  border: 1px solid #adb5bd; }\n\n.bhp-grey-2 {\n  background-color: #666666;\n  color: #fff;\n  border: 1px solid #adb5bd; }\n\n.bhp-grey-3 {\n  background-color: #b7b9bb;\n  color: #000;\n  border: 1px solid #dee2e6; }\n\n.bhp-grey-4 {\n  background-color: #e7e2d5;\n  color: #000;\n  border: 1px solid #dee2e6; }\n\n.primary {\n  background-color: #dd5900;\n  color: #fff;\n  border: 1px solid #adb5bd; }\n\n.secondary {\n  background-color: #6c757d;\n  color: #fff;\n  border: 1px solid #adb5bd; }\n\n.success {\n  background-color: #28a745;\n  color: #fff;\n  border: 1px solid #adb5bd; }\n\n.info {\n  background-color: #0099cc;\n  color: #fff;\n  border: 1px solid #adb5bd; }\n\n.warning {\n  background-color: #fcba5e;\n  color: #000;\n  border: 1px solid #dee2e6; }\n\n.danger {\n  background-color: #dc3545;\n  color: #fff;\n  border: 1px solid #adb5bd; }\n\n.light {\n  background-color: #f8f9fa;\n  color: #000;\n  border: 1px solid #dee2e6; }\n\n.dark {\n  background-color: #343a40;\n  color: #fff;\n  border: 1px solid #adb5bd; }\n\n.off-white {\n  background-color: #f2f4f5;\n  color: #000;\n  border: 1px solid #dee2e6; }\n\n.gray-100 {\n  background-color: #EBEBEB;\n  color: #000;\n  border: 1px solid #767684; }\n\n.gray-200 {\n  background-color: #C8C8C8;\n  color: #000;\n  border: 1px solid #767684; }\n\n.gray-300 {\n  background-color: #767684;\n  color: #fff;\n  border: 1px solid #5E5E6B; }\n\n.gray-400 {\n  background-color: #60606D;\n  color: #fff;\n  border: 1px solid #5E5E6B; }\n\n.gray-500 {\n  background-color: #5E5E6B;\n  color: #fff;\n  border: 1px solid #5E5E6B; }\n\n.gray-600 {\n  background-color: #525361;\n  color: #fff;\n  border: 1px solid #5E5E6B; }\n\n.gray-700 {\n  background-color: #4a4b58;\n  color: #fff;\n  border: 1px solid #5E5E6B; }\n\n.gray-800 {\n  background-color: #3F414E;\n  color: #fff;\n  border: 1px solid #5E5E6B; }\n\n.gray-900 {\n  background-color: #353744;\n  color: #fff;\n  border: 1px solid #5E5E6B; }\n\n.blue {\n  background-color: #0a6cb4;\n  color: #fff;\n  border: 1px solid #5E5E6B; }\n\n.black {\n  background-color: #111;\n  color: #fff;\n  border: 1px solid #5E5E6B; }\n\n.off-white {\n  background-color: #f2f4f5;\n  color: #000;\n  border: 1px solid #767684; }\n\n.indigo {\n  background-color: #663366;\n  color: #fff;\n  border: 1px solid #5E5E6B; }\n\n.purple {\n  background-color: #993399;\n  color: #fff;\n  border: 1px solid #5E5E6B; }\n\n.pink {\n  background-color: #cc6699;\n  color: #fff;\n  border: 1px solid #5E5E6B; }\n\n.red {\n  background-color: #dc3545;\n  color: #fff;\n  border: 1px solid #5E5E6B; }\n\n.orange {\n  background-color: #dd5900;\n  color: #fff;\n  border: 1px solid #5E5E6B; }\n\n.yellow {\n  background-color: #fcba5e;\n  color: #000;\n  border: 1px solid #767684; }\n\n.green {\n  background-color: #28a745;\n  color: #fff;\n  border: 1px solid #5E5E6B; }\n\n.teal {\n  background-color: #06ad96;\n  color: #fff;\n  border: 1px solid #5E5E6B; }\n\n.cyan {\n  background-color: #0099cc;\n  color: #fff;\n  border: 1px solid #5E5E6B; }\n\n.white {\n  background-color: #fff;\n  color: #000;\n  border: 1px solid #767684; }\n\n.gray {\n  background-color: #525361;\n  color: #fff;\n  border: 1px solid #5E5E6B; }\n\n.gray-dark {\n  background-color: #3F414E;\n  color: #fff;\n  border: 1px solid #5E5E6B; }\n'],sourceRoot:""}])}});
//# sourceMappingURL=8.ad6de80a.chunk.js.map