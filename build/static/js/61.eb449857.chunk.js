webpackJsonp([61],{232:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),i=n.n(l),c=n(16),p=(n.n(c),n(15)),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.toggle=n.toggle.bind(n),n.state={dropdownOpen:!1},n}return a(t,e),u(t,[{key:"toggle",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"render",value:function(){return i.a.createElement(c.AppBar,{style:{display:"flex",alignItems:"center",flexDirection:"row"},leftComponent:i.a.createElement(c.BHPIcon,{className:"fa-bars align-middle text-white",size:36,style:{padding:"0 20px"}}),rightComponent:i.a.createElement(p.Dropdown,{isOpen:this.state.dropdownOpen,toggle:this.toggle,style:{marginLeft:"auto",marginRight:"5px"}},i.a.createElement(p.DropdownToggle,{color:"primary",caret:!0}),i.a.createElement(p.DropdownMenu,null,i.a.createElement(p.DropdownItem,null,"Action"),i.a.createElement(p.DropdownItem,null,"Another Action"),i.a.createElement(p.DropdownItem,null,"Something else here"))),containerStyle:"bg-bhp-orange-1 appbar-container"},i.a.createElement(c.BHPLogo,{height:"40",className:"align-middle",color:"white"}))}}]),t}(i.a.Component);t.default=s}});
//# sourceMappingURL=61.eb449857.chunk.js.map