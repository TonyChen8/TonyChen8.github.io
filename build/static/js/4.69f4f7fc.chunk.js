webpackJsonp([4],{202:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=i(0),t=i.n(o),s=i(15),a=(i.n(s),i(493)),c=i(496);n.default=Object(s.withTheme)(function(e){var n=e.theme;return t.a.createElement("div",{className:"d-flex flex-wrap"},c.a[n.name].map(function(e){var n=e.name,i=e.src;return t.a.createElement(a.a,{key:n,name:n,src:i})}))})},493:function(e,n,i){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function t(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function s(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var a=i(0),c=i.n(a),r=i(494),m=(i.n(r),function(){function e(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,i,o){return i&&e(n.prototype,i),o&&e(n,o),n}}()),d=function(e){function n(){return o(this,n),t(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return s(n,e),m(n,[{key:"render",value:function(){var e=this.props,n=e.name,i=e.src;return c.a.createElement("div",{key:n,className:"downloadFile"},c.a.createElement("div",{className:"downloadImage"},c.a.createElement("img",{src:i,alt:""})),c.a.createElement("div",{className:"downloadName d-flex align-items-center justify-content-between p-2"},n,c.a.createElement("a",{href:i,download:n},c.a.createElement("i",{className:"fa fa-download md-24 align-top"}))))}}]),n}(a.Component);n.a=d},494:function(e,n,i){var o=i(495);"string"===typeof o&&(o=[[e.i,o,""]]);var t={hmr:!1};t.transform=void 0;i(201)(o,t);o.locals&&(e.exports=o.locals)},495:function(e,n,i){n=e.exports=i(200)(!0),n.push([e.i,".pageHeader{margin-top:40px!important;margin-bottom:30px!important}.downloadFile{margin:0 10px 10px 0;border:1px solid #dcdcdc;width:200px;border-radius:4px}.downloadFile .downloadImage{line-height:150px;text-align:center}.downloadFile .downloadImage img{width:80px;vertical-align:middle}.downloadFile .downloadName{border-top:1px solid #dcdcdc;height:50px}.downloadFile .downloadName a{color:#333}.downloadFile .downloadName a:hover{background-color:#eee}.downloadFile .downloadName .md-24{font-size:24px}.dark-theme .downloadFile .downloadName a{color:#fff}.dark-theme .downloadFile .downloadName a:hover{background-color:#555}","",{version:3,sources:["C:/Users/HyphenDev/Desktop/refactor-bhp-digital-design-system/bhp-digital-design-system/src/components/DownloadBlock/styles.css"],names:[],mappings:"AAAA,YACE,0BAA4B,AAC5B,4BAA+B,CAAE,AAEnC,cACE,qBAAsB,AACtB,yBAA0B,AAC1B,YAAa,AACb,iBAAmB,CAAE,AACrB,6BACE,kBAAmB,AACnB,iBAAmB,CAAE,AACrB,iCACE,WAAY,AACZ,qBAAuB,CAAE,AAC7B,4BACE,6BAA8B,AAC9B,WAAa,CAAE,AACf,8BACE,UAAY,CAAE,AACd,oCACE,qBAAuB,CAAE,AAC7B,mCACE,cAAgB,CAAE,AAExB,0CACE,UAAa,CAAE,AACf,gDACE,qBAAuB,CAAE",file:"styles.css",sourcesContent:[".pageHeader {\n  margin-top: 40px !important;\n  margin-bottom: 30px !important; }\n\n.downloadFile {\n  margin: 0 10px 10px 0;\n  border: 1px solid #dcdcdc;\n  width: 200px;\n  border-radius: 4px; }\n  .downloadFile .downloadImage {\n    line-height: 150px;\n    text-align: center; }\n    .downloadFile .downloadImage img {\n      width: 80px;\n      vertical-align: middle; }\n  .downloadFile .downloadName {\n    border-top: 1px solid #dcdcdc;\n    height: 50px; }\n    .downloadFile .downloadName a {\n      color: #333; }\n      .downloadFile .downloadName a:hover {\n        background-color: #eee; }\n    .downloadFile .downloadName .md-24 {\n      font-size: 24px; }\n\n:global(.dark-theme) .downloadFile .downloadName a {\n  color: white; }\n  :global(.dark-theme) .downloadFile .downloadName a:hover {\n    background-color: #555; }\n"],sourceRoot:""}])},496:function(e,n,i){"use strict";n.a={light:[{name:"mesicon-automation.svg",src:i(497)},{name:"mesicon-equip-cd.svg",src:i(498)},{name:"mesicon-equip-lrp.svg",src:i(499)},{name:"mesicon-equip-mainline.svg",src:i(500)},{name:"mesicon-equip-ohp.svg",src:i(501)},{name:"mesicon-equip-reloc-crusher.svg",src:i(502)},{name:"mesicon-equip-shuttle.svg",src:i(503)},{name:"mesicon-equip-sl.svg",src:i(504)},{name:"mesicon-equip-stk.svg",src:i(505)},{name:"mesicon-equip-tlo-1.svg",src:i(506)},{name:"mesicon-equip-tlo-2.svg",src:i(507)},{name:"mesicon-grid.svg",src:i(508)},{name:"mesicon-inflow.svg",src:i(509)},{name:"mesicon-outflow.svg",src:i(510)},{name:"mesicon-stockpile.svg",src:i(511)},{name:"mesicon-stockpiles.svg",src:i(512)},{name:"mesicon-train.svg",src:i(513)},{name:"mesicon-truck.svg",src:i(514)},{name:"mesicon-vessel.svg",src:i(515)},{name:"rake.svg",src:i(516)}],dark:[{name:"mesicon-automation.svg",src:i(517)},{name:"mesicon-equip-cd.svg",src:i(518)},{name:"mesicon-equip-lrp.svg",src:i(519)},{name:"mesicon-equip-mainline.svg",src:i(520)},{name:"mesicon-equip-ohp.svg",src:i(521)},{name:"mesicon-equip-reloc-crusher.svg",src:i(522)},{name:"mesicon-equip-shuttle.svg",src:i(523)},{name:"mesicon-equip-sl.svg",src:i(524)},{name:"mesicon-equip-stk.svg",src:i(525)},{name:"mesicon-equip-tlo-1.svg",src:i(526)},{name:"mesicon-equip-tlo-2.svg",src:i(527)},{name:"mesicon-grid.svg",src:i(528)},{name:"mesicon-inflow.svg",src:i(529)},{name:"mesicon-outflow.svg",src:i(530)},{name:"mesicon-stockpile.svg",src:i(531)},{name:"mesicon-stockpiles.svg",src:i(532)},{name:"mesicon-train.svg",src:i(533)},{name:"mesicon-truck.svg",src:i(534)},{name:"mesicon-vessel.svg",src:i(535)},{name:"rake.svg",src:i(536)}]}},497:function(e,n,i){e.exports=i.p+"static/media/mesicon-automation-light.9c72ba97.svg"},498:function(e,n,i){e.exports=i.p+"static/media/mesicon-equip-cd-light.6671de65.svg"},499:function(e,n,i){e.exports=i.p+"static/media/mesicon-equip-lrp-light.39141723.svg"},500:function(e,n,i){e.exports=i.p+"static/media/mesicon-equip-mainline-light.960ad01e.svg"},501:function(e,n,i){e.exports=i.p+"static/media/mesicon-equip-ohp-light.d35f815c.svg"},502:function(e,n,i){e.exports=i.p+"static/media/mesicon-equip-reloc-crusher-light.4ea7de89.svg"},503:function(e,n,i){e.exports=i.p+"static/media/mesicon-equip-shuttle-light.94dbfef6.svg"},504:function(e,n,i){e.exports=i.p+"static/media/mesicon-equip-sl-light.cd2c135d.svg"},505:function(e,n,i){e.exports=i.p+"static/media/mesicon-equip-stk-light.ac2cd810.svg"},506:function(e,n,i){e.exports=i.p+"static/media/mesicon-equip-tlo-1-light.d934542f.svg"},507:function(e,n,i){e.exports=i.p+"static/media/mesicon-equip-tlo-2-light.7e0550d4.svg"},508:function(e,n,i){e.exports=i.p+"static/media/mesicon-grid-light.8a6c6d2e.svg"},509:function(e,n,i){e.exports=i.p+"static/media/mesicon-inflow-light.ccc03fae.svg"},510:function(e,n,i){e.exports=i.p+"static/media/mesicon-outflow-light.f879605c.svg"},511:function(e,n,i){e.exports=i.p+"static/media/mesicon-stockpile-light.38cdcb35.svg"},512:function(e,n,i){e.exports=i.p+"static/media/mesicon-stockpiles-light.c8a20c49.svg"},513:function(e,n,i){e.exports=i.p+"static/media/mesicon-train-light.8cbe31d1.svg"},514:function(e,n,i){e.exports=i.p+"static/media/mesicon-truck-light.fabf8a74.svg"},515:function(e,n,i){e.exports=i.p+"static/media/mesicon-vessel-light.8102ab27.svg"},516:function(e,n,i){e.exports=i.p+"static/media/rake-light.1bc24e82.svg"},517:function(e,n,i){e.exports=i.p+"static/media/mesicon-automation-dark.224df973.svg"},518:function(e,n,i){e.exports=i.p+"static/media/mesicon-equip-cd-dark.e76539c7.svg"},519:function(e,n,i){e.exports=i.p+"static/media/mesicon-equip-lrp-dark.b61c2a1a.svg"},520:function(e,n,i){e.exports=i.p+"static/media/mesicon-equip-mainline-dark.63e88bb2.svg"},521:function(e,n,i){e.exports=i.p+"static/media/mesicon-equip-ohp-dark.c94d62a6.svg"},522:function(e,n,i){e.exports=i.p+"static/media/mesicon-equip-reloc-crusher-dark.6e7674b1.svg"},523:function(e,n,i){e.exports=i.p+"static/media/mesicon-equip-shuttle-dark.fbece8e5.svg"},524:function(e,n,i){e.exports=i.p+"static/media/mesicon-equip-sl-dark.f675bc75.svg"},525:function(e,n,i){e.exports=i.p+"static/media/mesicon-equip-stk-dark.b8d4a9e2.svg"},526:function(e,n,i){e.exports=i.p+"static/media/mesicon-equip-tlo-1-dark.ab5fca6d.svg"},527:function(e,n,i){e.exports=i.p+"static/media/mesicon-equip-tlo-2-dark.1a526c5f.svg"},528:function(e,n,i){e.exports=i.p+"static/media/mesicon-grid-dark.11994bba.svg"},529:function(e,n,i){e.exports=i.p+"static/media/mesicon-inflow-dark.01f8603e.svg"},530:function(e,n,i){e.exports=i.p+"static/media/mesicon-outflow-dark.bd6d252b.svg"},531:function(e,n,i){e.exports=i.p+"static/media/mesicon-stockpile-dark.3cf65792.svg"},532:function(e,n,i){e.exports=i.p+"static/media/mesicon-stockpiles-dark.c475a9ef.svg"},533:function(e,n,i){e.exports=i.p+"static/media/mesicon-train-dark.1461ce9f.svg"},534:function(e,n,i){e.exports=i.p+"static/media/mesicon-truck-dark.8ea66880.svg"},535:function(e,n,i){e.exports=i.p+"static/media/mesicon-vessel-dark.d78bff10.svg"},536:function(e,n,i){e.exports=i.p+"static/media/rake-dark.90bec93f.svg"}});
//# sourceMappingURL=4.69f4f7fc.chunk.js.map