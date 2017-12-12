webpackJsonp([83099709101991],{219:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function s(e){var t,n=e.disabled,o=void 0!==n&&n,s=e.primary,a=void 0===s||s,i=e.destructive,u=void 0!==i&&i,c=e.darkBackground,m=void 0!==c&&c,p=e.fixed,f=void 0!==p&&p,h=e.size,v=void 0===h?"large":h,y=e.children,b=(0,l.default)((t={},t[d.default.button]=!0,t[d.default.primary]=a&&!u&&!m,t[d.default.secondary]=!u&&!a,t[d.default.ghost]=m,t[d.default.fixed]=f,t[d.default.mid]="mid"===v,t[d.default.small]="small"===v,t));return r.default.createElement("button",{disabled:o,className:b},y)}t.__esModule=!0,t.default=s;var a=n(1),r=o(a),i=n(24),l=o(i),u=n(334),d=o(u);s.propTypes={disabled:r.default.PropTypes.bool,primary:r.default.PropTypes.bool,destructive:r.default.PropTypes.bool,icon:r.default.PropTypes.bool},e.exports=t.default},334:function(e,t){e.exports={button:"_-components-Button----Button-module---button---THnvd",fixed:"_-components-Button----Button-module---fixed---chblk",mid:"_-components-Button----Button-module---mid---2skN1",small:"_-components-Button----Button-module---small---3DG4w",secondary:"_-components-Button----Button-module---secondary---2xeY7",ghost:"_-components-Button----Button-module---ghost---1OwqQ",primary:"_-components-Button----Button-module---primary---1Zv0n"}},84:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){return Math.floor(Math.random()*(t-e)+e)}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=n(1),d=o(u),c=n(109),m=o(c),p=240,f=Symbol("small"),h=Symbol("medium"),v=Symbol("large"),y=Symbol("random"),b=Symbol("full"),z=function(e){function t(){var n,o,r;s(this,t);for(var i=arguments.length,u=Array(i),d=0;d<i;d++)u[d]=arguments[d];return n=o=a(this,e.call.apply(e,[this].concat(u))),o.state={selectedPreset:0,assignedCanvasWidth:null,actualCanvasDimensions:{width:null,height:null}},o.onSelectPreset=function(e){var t=parseInt(e.target.value);o.setState(l({},o.state,{selectedPreset:t}))},o.onResize=function(){o.resizing||(o.resizing=!0,window.requestAnimationFrame(o.onResizeFrame))},o.onResizeFrame=function(){if(o.isResizeComplete())return void(o.resizing=!1);var e=o.canvas,t=e.clientWidth,n=e.clientHeight;o.setState(l({},o.state,{actualCanvasDimensions:{width:t,height:n}})),window.requestAnimationFrame(o.onResizeFrame)},r=n,a(o,r)}return r(t,e),t.prototype.render=function(){return d.default.createElement("div",{className:m.default.root},this.renderPresetList(),this.renderCanvas(),d.default.createElement("div",{className:m.default.controls},this.renderSizePresets(),this.renderCanvasDimensions(),this.renderComponentTypes()))},t.prototype.renderPresetList=function(){var e=this.props.presets,t=this.state.selectedPreset;return d.default.createElement("div",{className:m.default.selectPreset},d.default.createElement("select",{onChange:this.onSelectPreset,value:t},e.map(function(e,t){return d.default.createElement("option",{key:t,value:t},e.name)})))},t.prototype.renderCanvas=function(){var e=this,t=this.props.component;return d.default.createElement("div",{className:m.default.frame,ref:function(t){return e.frame=t}},d.default.createElement("div",{className:m.default.canvas,style:{width:this.state.assignedCanvasWidth},ref:function(t){return e.canvas=t}},d.default.createElement(t,this.selectedPresetProps())))},t.prototype.selectedPresetProps=function(){return this.props.presets[this.state.selectedPreset].props},t.prototype.renderSizePresets=function(){return d.default.createElement("div",{className:m.default.sizePresets},d.default.createElement("button",{onClick:this.onClickResizeTo(b)},"Full"),d.default.createElement("button",{onClick:this.onClickResizeTo(y)},"Random"),d.default.createElement("button",{onClick:this.onClickResizeTo(v)},"Large"),d.default.createElement("button",{onClick:this.onClickResizeTo(h)},"Medium"),d.default.createElement("button",{onClick:this.onClickResizeTo(f)},"Small"))},t.prototype.renderCanvasDimensions=function(){var e=this.state.actualCanvasDimensions,t=e.width,n=e.height;return t&&n&&d.default.createElement("div",{className:m.default.canvasDimensions},d.default.createElement("span",{className:m.default.dimension},t,"px")," × ",d.default.createElement("span",{className:m.default.dimension},n,"px")," viewport")},t.prototype.renderComponentTypes=function(){return d.default.createElement("div",{className:m.default.componentTypes},d.default.createElement("button",null,"React"))},t.prototype.componentDidMount=function(){window.addEventListener("resize",this.onResize),this.onResize()},t.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize)},t.prototype.onClickResizeTo=function(e){var t=this;return function(n){return t.resizeToSize(e)}},t.prototype.resizeToSize=function(e){switch(e){case b:this.resizeTo();break;case y:this.resizeTo(i(p,this.maxCanvasWidth()));break;case v:this.resizeTo(i(800,1200));break;case h:this.resizeTo(i(500,800));break;case f:this.resizeTo(i(p,500))}},t.prototype.resizeTo=function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t=t&&Math.min(t,this.maxCanvasWidth()),null===this.state.assignedCanvasWidth&&t&&this.setAssignedCanvasWidth(this.maxCanvasWidth()),window.requestAnimationFrame(function(){e.setAssignedCanvasWidth(t)})},t.prototype.setAssignedCanvasWidth=function(e){this.setState(l({},this.state,{assignedCanvasWidth:e})),this.onResize()},t.prototype.maxCanvasWidth=function(){return this.frame.clientWidth},t.prototype.isResizeComplete=function(){var e=this.canvas,t=e.clientWidth,n=e.clientHeight,o=this.state,s=o.assignedCanvasWidth,a=o.actualCanvasDimensions,r=a.width,i=a.height;return t==r&&n==i&&(!s||t==s)},t}(d.default.Component);t.default=z,e.exports=t.default},109:function(e,t){e.exports={root:"src-components----Demo-module---root---3wwTo",frame:"src-components----Demo-module---frame---3OdyG",canvas:"src-components----Demo-module---canvas---KNZxY",selectPreset:"src-components----Demo-module---selectPreset---HqP0Z",controls:"src-components----Demo-module---controls---2Soui",dimension:"src-components----Demo-module---dimension---15b1z"}},238:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=n(1),a=o(s),r=n(11),i=n(84),l=o(i),u=n(219),d=o(u),c=[{name:"Primary",props:{children:"Button text",primary:!0}},{name:"Primary disabled",props:{children:"Button text",disabled:!0}},{name:"Primary fixed",props:{children:"Button text",fixed:!0}},{name:"Primary mid",props:{children:"Button text",size:"mid"}},{name:"Destructive",props:{children:"Button text",destructive:!0}},{name:"Secondary",props:{children:"Button text",primary:!1}},{name:"Secondary disabled",props:{children:"Button text",primary:!1,disabled:!0}},{name:"Secondary mid",props:{children:"Button text",size:"mid",primary:!1}},{name:"Secondary small",props:{children:"Button",size:"small",primary:!1}},{name:"Ghost",props:{children:"Button text",darkBackground:!0}},{name:"Ghost disabled",props:{children:"Button text",disabled:!0,darkBackground:!0}}],m=function(){return a.default.createElement("div",null,a.default.createElement("h1",null,"Buttons"),a.default.createElement("p",null,"Buttons make common actions immediately visible and easy to perform with one click or tap. They can be used for any type of action, including navigation."),a.default.createElement(l.default,{component:d.default,presets:c}),a.default.createElement(r.Link,{to:"/"},"Go back to the homepage"))};t.default=m,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-atoms-button-js-1ba8349d7fc5ace4f4c7.js.map