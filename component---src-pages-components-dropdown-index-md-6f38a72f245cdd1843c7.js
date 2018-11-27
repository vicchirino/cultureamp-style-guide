webpackJsonp([33995494959456],{45:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(5),c=(r(u),n(1)),s=o(c),d=n(7),p=r(d),f=n(27),m=r(f),w=n(16),h=r(w),b=n(70),v=r(b),_=n(69),y=r(_),M=n(46),g=r(M),x=function(e){function t(n){l(this,t);var o=a(this,e.call(this,n));return o.toggleDropdownMenu=function(e){e.stopPropagation();var t=o.state.isMenuVisible;o.setState({isMenuVisible:!t})},o.hideDropdownMenu=function(){o.setState({isMenuVisible:!1})},o.renderIcon=function(e){if(e)return s.createElement("span",{className:m.default.dropdownIcon},s.createElement(h.default,{icon:e,role:"img",title:"Open menu"}))},o.renderDownArrow=function(){var e=o.props,t=e.label,n=e.controlAction;if(t&&n)return s.createElement("span",{className:m.default.chevronIcon},s.createElement(h.default,{icon:y.default,role:"img",title:"Open menu"}))},o.renderButtonContent=function(){var e=o.props,t=e.icon,n=e.label;return s.createElement(s.Fragment,null,o.renderIcon(t),n&&s.createElement("span",{className:m.default.dropdownLabel},n),o.renderDownArrow())},o.renderReversedButtonContent=function(){var e=o.props,t=e.icon,n=e.label;return s.createElement(s.Fragment,null,o.renderDownArrow(),n&&s.createElement("span",{className:m.default.dropdownLabel},n),o.renderIcon(t))},o.state={isMenuVisible:Boolean(n.menuVisible)},o}return i(t,e),t.prototype.getPosition=function(){return this.dropdownButton?this.dropdownButton.getBoundingClientRect():null},t.prototype.renderDropdownMenu=function(){return s.createElement(g.default,{hideDropdownMenu:this.hideDropdownMenu,position:this.getPosition()},this.props.children)},t.prototype.render=function(){var e,t=this,n=this.props,o=n.icon,r=n.label,l=n.controlAction,a=n.automationId,i=n.iconPosition;o||r||(o=v.default);var u="end"===i,c=(0,p.default)(m.default.dropdownButton,(e={},e[m.default.dropdownControlAction]=l,e[m.default.isOpen]=this.state.isMenuVisible,e));return s.createElement("div",{className:m.default.dropdown},s.createElement("button",{className:c,onClick:this.toggleDropdownMenu,onMouseDown:function(e){return e.preventDefault()},ref:function(e){return t.dropdownButton=e},"data-automation-id":a},!u&&this.renderButtonContent(),u&&this.renderReversedButtonContent()),this.state.isMenuVisible&&this.renderDropdownMenu())},t}(s.Component);x.displayName="Dropdown",x.defaultProps={iconPosition:"start"},x.displayName="Dropdown",t.default=x,e.exports=t.default},27:function(e,t){e.exports={dropdown:"Dropdown-module__dropdown--1YWtY",buttonReset:"Dropdown-module__buttonReset--1HZeD",dropdownButton:"Dropdown-module__dropdownButton--38lfY Dropdown-module__buttonReset--1HZeD",dropdownControlAction:"Dropdown-module__dropdownControlAction--2gFjF",dropdownIcon:"Dropdown-module__dropdownIcon--3XP7B",dropdownLabel:"Dropdown-module__dropdownLabel--2XYVj",dropdownHoverArea:"Dropdown-module__dropdownHoverArea--1IBoI",isOpen:"Dropdown-module__isOpen--3JQvj",chevronIcon:"Dropdown-module__chevronIcon--3tYWv",menuContainer:"Dropdown-module__menuContainer--2zp0b",reversed:"Dropdown-module__reversed--3wIed"}},46:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(5),c=(r(u),n(1)),s=o(c),d=n(27),p=r(d),f=function(e){function t(){var n,o,r;l(this,t);for(var i=arguments.length,u=Array(i),c=0;c<i;c++)u[c]=arguments[c];return n=o=a(this,e.call.apply(e,[this].concat(u))),o.handleDocumentClick=function(e){o.menu&&e.target instanceof Node&&!o.menu.contains(e.target)&&o.props.hideDropdownMenu()},o.handleDocumentResize=function(){o.props.hideDropdownMenu()},r=n,a(o,r)}return i(t,e),t.prototype.componentDidMount=function(){document.addEventListener("click",this.handleDocumentClick,!1),window.addEventListener("resize",this.handleDocumentResize,!1),this.positionMenu()},t.prototype.componentWillUnmount=function(){document.removeEventListener("click",this.handleDocumentClick,!1),window.removeEventListener("resize",this.handleDocumentResize,!1)},t.prototype.positionMenu=function(){var e=this.menu;if(this.props.position&&e){var t=this.props.position,n=((t.bottom-t.top)/2,window),o=n.innerHeight,r=e.getBoundingClientRect();t.bottom>o-r.height?(e.style.bottom="24px",e.style.top="auto"):(e.style.top="24px",e.style.bottom="auto")}},t.prototype.render=function(){var e=this,t=this.props;return s.createElement("div",{className:p.default.menuContainer,ref:function(t){return e.menu=t},onClick:function(){return t.hideDropdownMenu()}},t.children)},t}(s.Component);f.displayName="DropdownMenu",f.displayName="DropdownMenu",t.default=f,e.exports=t.default},33:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(45),l=o(r);t.default=l.default,e.exports=t.default},272:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(33),l=o(r),a=n(47),i=n(155),u=(o(i),n(153)),c=o(u),s=n(71),d=o(s),p=n(650),f=o(p),m=n(22),w=o(m),h=n(1),b=o(h),v=b.default.createElement(a.MenuList,null,b.default.createElement(a.MenuHeader,{title:"Contextual Select Menu"}),b.default.createElement(a.MenuItem,{action:function(){return alert("print!")},icon:f.default,hoverIcon:!1},"Action label with icon"),b.default.createElement(a.MenuItem,{action:function(){return alert("print!")},icon:f.default,hoverIcon:!0},"Action label with hover icon"),b.default.createElement(a.MenuItem,{action:function(){return alert("print!")}},"Action label"),b.default.createElement(a.MenuSeparator,null),b.default.createElement(a.MenuItem,{action:"https://www.cultureamp.com/",icon:w.default,hoverIcon:!1},"Link label with icon"),b.default.createElement(a.MenuItem,{action:"https://www.cultureamp.com/",icon:w.default,hoverIcon:!0},"Link label with hover icon"),b.default.createElement(a.MenuItem,{action:"https://www.cultureamp.com/"},"Link label")),_=[{name:"Default (Meatball)",node:b.default.createElement(l.default,null,v)},{name:"Kebab",node:b.default.createElement(l.default,{icon:c.default},v)},{name:"Label and icon",node:b.default.createElement(l.default,{label:"Print",icon:c.default},v)},{name:"Text only",node:b.default.createElement(l.default,{label:"Print"},v)},{name:"Control action",node:b.default.createElement(l.default,{label:"Print",icon:d.default,controlAction:!0},v)},{name:"Reversed Control action",node:b.default.createElement(l.default,{label:"Print",icon:f.default,controlAction:!0,reversed:!0},v),darkBackground:!0}];t.default=_,e.exports=t.default},223:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.className,n=e.style,o=e.elementProps;return c.default.createElement("div",{className:t,style:n},c.default.createElement("h1",l({id:"dropdown"},o.h1),"Dropdown"),c.default.createElement(w.default,o.IntroParagraph,c.default.createElement("p",o.p,"A simple dropdown menu to be used for opening links or triggering actions.",c.default.createElement("br",o.br),"Do not use this if the user is selecting a value, prefer a select box instead.")),c.default.createElement(f.default,l({presets:b.default},o.Demo)))}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(10),i=o(a),u=n(1),c=o(u),s=n(5),d=o(s),p=n(21),f=o(p),m=n(12),w=o(m),h=n(272),b=o(h);r.propTypes={className:d.default.string,style:d.default.object,elementProps:d.default.object},r.defaultProps={elementProps:{}},r.displayName="MarkdownComponent";var v=function(){return c.default.createElement("div",{className:i.default.contentContainer},c.default.createElement(r,{elementProps:{h1:{className:i.default.h1},h2:{className:i.default.h2},h3:{className:i.default.h3},h4:{className:i.default.h4},h5:{className:i.default.h5},h6:{className:i.default.h6},p:{className:i.default.p},table:{className:i.default.table},ul:{className:i.default.ul},ol:{className:i.default.ol},li:{className:i.default.li},blockquote:{className:i.default.blockquote},hr:{className:i.default.hr},img:{className:i.default.img},a:{className:i.default.link}}}))};v.displayName="WrappedMarkdownComponent",t.default=v},70:function(e,t,n){var o=n(2),r=n(3),l=new o({id:"ca-icon-ellipsis",use:"ca-icon-ellipsis-usage",viewBox:"0 0 20 20",content:'<symbol viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="ca-icon-ellipsis"><defs><path d="M4 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" id="ca-icon-ellipsis_a" /></defs><use fill="currentColor" xlink:href="#ca-icon-ellipsis_a" fill-rule="evenodd" /></symbol>'});r.add(l);e.exports=l},153:function(e,t,n){var o=n(2),r=n(3),l=new o({id:"ca-icon-kebab",use:"ca-icon-kebab-usage",viewBox:"0 0 20 20",content:'<symbol viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="ca-icon-kebab"><defs><path d="M-4 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM8 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM2 6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2z" id="ca-icon-kebab_a" /></defs><use fill="currentColor" transform="rotate(-90 7 5)" xlink:href="#ca-icon-kebab_a" fill-rule="evenodd" /></symbol>'});r.add(l);e.exports=l},155:function(e,t,n){var o=n(2),r=n(3),l=new o({id:"ca-icon-meatballs",use:"ca-icon-meatballs-usage",viewBox:"0 0 20 20",content:'<symbol viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="ca-icon-meatballs"><defs><path d="M4 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" id="ca-icon-meatballs_a" /></defs><use fill="currentColor" xlink:href="#ca-icon-meatballs_a" fill-rule="evenodd" /></symbol>'});r.add(l);e.exports=l},71:function(e,t,n){var o=n(2),r=n(3),l=new o({id:"ca-icon-print-white",use:"ca-icon-print-white-usage",viewBox:"0 0 20 20",content:'<symbol viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" id="ca-icon-print-white"><g fill="none" fill-rule="evenodd"><path d="M15.6 6.8H4.4A2.397 2.397 0 0 0 2 9.2V14h3.2v3.2h9.6V14H18V9.2c0-1.328-1.072-2.4-2.4-2.4zM5.2 6h9.6V2.8H5.2z" fill="currentColor" /><path d="M15.6 10c-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8.44 0 .8.36.8.8 0 .44-.36.8-.8.8zM6.8 15.6h6.4v-4H6.8z" fill="#FFF" /></g></symbol>'});r.add(l);e.exports=l},650:function(e,t,n){var o=n(2),r=n(3),l=new o({id:"ca-icon-print",use:"ca-icon-print-usage",viewBox:"0 0 20 20",content:'<symbol viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="ca-icon-print"><defs><path d="M5.2 6h9.6V2.8H5.2V6zm10.4.8c1.328 0 2.4 1.072 2.4 2.4V14h-3.2v3.2H5.2V14H2V9.2c0-1.328 1.072-2.4 2.4-2.4h11.2zm0 3.2c.44 0 .8-.36.8-.8 0-.44-.36-.8-.8-.8-.44 0-.8.36-.8.8 0 .44.36.8.8.8zm-8.8 5.6h6.4v-4H6.8v4z" id="ca-icon-print_a" /></defs><use fill="currentColor" xlink:href="#ca-icon-print_a" fill-rule="evenodd" /></symbol>'});r.add(l);e.exports=l}});
//# sourceMappingURL=component---src-pages-components-dropdown-index-md-6f38a72f245cdd1843c7.js.map