webpackJsonp([74],{230:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),u=n.n(a),c=n(29),l=(n.n(c),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()),s=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={sectionOpen:-1},n}return r(t,e),l(t,[{key:"toggleSection",value:function(e){this.setState(function(t){return{sectionOpen:t.sectionOpen==e?-1:e}})}},{key:"render",value:function(){var e=this,t=this.state.sectionOpen;return u.a.createElement(c.Accordion,null,u.a.createElement(c.AccordionItem,null,u.a.createElement(c.AccordionItemHeader,{onClick:function(){return e.toggleSection(0)},isOpen:0==t,withArrow:!0},"Section 1"),u.a.createElement(c.AccordionItemBody,{isOpen:0==t},"Ullamco non do minim excepteur aute occaecat nostrud eiusmod ut amet deserunt exercitation ut aute in sed incididunt labore aliquip in laboris commodo sunt consectetur nostrud ea.")),u.a.createElement(c.AccordionItem,null,u.a.createElement(c.AccordionItemHeader,{onClick:function(){return e.toggleSection(1)},isOpen:1==t,withArrow:!0},"Section 2"),u.a.createElement(c.AccordionItemBody,{isOpen:1==t},"Minim aute nostrud occaecat ad laboris sit anim nisi sunt duis id adipisicing sunt culpa enim aute ut dolor amet tempor consequat excepteur labore consequat dolore eiusmod ex aliqua proident elit dolore ullamco exercitation dolor ut ut fugiat irure est proident qui qui ut officia nostrud commodo ex cillum deserunt laborum reprehenderit sit aute dolore do nisi enim aute fugiat sit minim sunt est cupidatat in pariatur in labore aliquip consequat consequat est laboris consectetur mollit laboris minim adipisicing dolore sit commodo occaecat laborum ut voluptate exercitation anim aute nisi minim laboris quis ea qui enim commodo aliqua voluptate laboris aute. fugiat culpa in nostrud id.")))}}]),t}(u.a.Component);t.default=s}});
//# sourceMappingURL=74.5b2c4373.chunk.js.map