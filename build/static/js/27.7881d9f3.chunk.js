webpackJsonp([27],{262:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=n.n(i),l=n(15),u=(n.n(l),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()),s=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={on:[!1,!0,!0,!0,!0,!0]},n}return c(t,e),u(t,[{key:"toggle",value:function(e){this.setState(function(t){return t.on[e]=!t.on[e],t})}},{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement(l.ToggleSwitch,{color:"primary",onMessage:"S\xcd",offMessage:"NO",on:this.state.on[0],onClick:function(){return e.toggle(0)}}),a.a.createElement(l.ToggleSwitch,{color:"primary",onMessage:"S\xcd",offMessage:"NO",on:this.state.on[1],onClick:function(){return e.toggle(1)}}),a.a.createElement(l.ToggleSwitch,{color:"info",on:this.state.on[2],onClick:function(){return e.toggle(2)}}),a.a.createElement(l.ToggleSwitch,{color:"success",on:this.state.on[3],onClick:function(){return e.toggle(3)}}),a.a.createElement(l.ToggleSwitch,{color:"danger",on:this.state.on[4],onClick:function(){return e.toggle(4)}}),a.a.createElement(l.ToggleSwitch,{color:"warning",on:this.state.on[5],onClick:function(){return e.toggle(5)}}))}}]),t}(a.a.Component);t.default=s}});
//# sourceMappingURL=27.7881d9f3.chunk.js.map