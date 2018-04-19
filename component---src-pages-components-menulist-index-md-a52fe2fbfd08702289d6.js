webpackJsonp([62740692970289],{11:function(e,a){e.exports={menuList:"Menu-module__menuList--17KDT",header:"Menu-module__header--2rJ9W",header__title:"Menu-module__header__title--xJTam",header__subtitle:"Menu-module__header__subtitle--3oMx3",menuItem:"Menu-module__menuItem--DTW04",menuItem__Icon:"Menu-module__menuItem__Icon--eyPIs Icon-module__interactiveIconWrapper--1FGog",menuItem__Label:"Menu-module__menuItem__Label--23zrf",hoverIcon:"Menu-module__hoverIcon--3Sv0M",separator:"Menu-module__separator--nPcQC"}},49:function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}a.__esModule=!0;var n=t(3),s=l(n),r=t(11),u=l(r),c=function(e){return s.default.createElement("div",{className:u.default.header},s.default.createElement("span",{className:u.default.header__title},e.title),s.default.createElement("span",{className:u.default.header__subtitle},e.subtitle))};a.default=c,e.exports=a.default},50:function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t]);return a.default=e,a}a.__esModule=!0;var s=t(3),r=n(s),u=t(4),c=(l(u),t(6)),m=l(c),d=t(7),p=l(d),f=t(11),o=l(f),i=function(e){var a,t=e.icon,l=e.hoverIcon,n=e.children,s=e.action,u="string"==typeof s,c=r.createElement("span",{className:o.default.menuItem__Label},n,u&&"…"),d=t&&r.createElement("span",{className:o.default.menuItem__Icon},r.createElement(p.default,{icon:t,role:"presentation"})),f=u?s:null,i=u?null:s,h=(0,m.default)((a={},a[o.default.menuItem]=!0,a[o.default.hoverIcon]=t&&l,a));return r.createElement("a",{href:f,onClick:i,className:h},c,d)};a.default=i,e.exports=a.default},51:function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t]);return a.default=e,a}a.__esModule=!0;var s=t(3),r=n(s),u=t(4),c=(l(u),t(11)),m=l(c),d=function(e){return r.createElement("div",{className:m.default.menuList},e.children)};a.default=d,e.exports=a.default},52:function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}a.__esModule=!0;var n=t(3),s=l(n),r=t(4),u=(l(r),t(11)),c=l(u),m=function(){return s.default.createElement("hr",{className:c.default.separator})};a.default=m,e.exports=a.default},37:function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}a.__esModule=!0,a.MenuSeparator=a.MenuItem=a.MenuHeader=a.MenuList=void 0;var n=t(51),s=l(n),r=t(49),u=l(r),c=t(50),m=l(c),d=t(52),p=l(d);a.MenuList=s.default,a.MenuHeader=u.default,a.MenuItem=m.default,a.MenuSeparator=p.default,a.default=s.default},216:function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}a.__esModule=!0;var n=t(37),s=t(66),r=l(s),u=t(15),c=l(u),m=t(3),d=l(m),p=[d.default.createElement(n.MenuHeader,{title:"My Dropdown Menu",subtitle:"With a subtitle"}),d.default.createElement(n.MenuItem,{action:function(){return alert("print!")},icon:r.default,hoverIcon:!1},"Print (icon)"),d.default.createElement(n.MenuItem,{action:function(){return alert("print!")},icon:r.default,hoverIcon:!0},"Print (hover icon)"),d.default.createElement(n.MenuItem,{action:function(){return alert("print!")}},"Print (no icon)"),d.default.createElement(n.MenuSeparator,null),d.default.createElement(n.MenuItem,{action:"https://www.cultureamp.com/",icon:c.default,hoverIcon:!1},"Culture Amp (icon)"),d.default.createElement(n.MenuItem,{action:"https://www.cultureamp.com/",icon:c.default,hoverIcon:!0},"Culture Amp (hover icon)"),d.default.createElement(n.MenuItem,{action:"https://www.cultureamp.com/"},"Culture Amp (no icon)")],f=[{name:"Default",props:{children:p}}];a.default=f,e.exports=a.default},234:function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){var a=e.className,t=e.style,l=e.elementProps;return m.default.createElement("div",{className:a,style:t},m.default.createElement("h1",s({id:"menu-list"},l.h1),"Menu List"),m.default.createElement(h.default,l.IntroParagraph,m.default.createElement("p",l.p,"A generic list of items or actions, to be used with dropdown menus etc."),m.default.createElement("p",l.p,"Currently available for React.")),m.default.createElement(o.default,s({component:N.default,presets:b.default},l.Demo)),m.default.createElement("h2",s({id:"example-code"},l.h2),"Example code:"),m.default.createElement("p",l.p,"React To import:"),m.default.createElement("pre",l.pre,m.default.createElement("code",l.code,"import {",m.default.createElement("br",l.br),m.default.createElement("span",s({className:"hljs-built_in"},l.span),"  MenuList,"),m.default.createElement("br",l.br),m.default.createElement("span",s({className:"hljs-built_in"},l.span),"  MenuHeader,"),m.default.createElement("br",l.br),m.default.createElement("span",s({className:"hljs-built_in"},l.span),"  MenuItem,"),m.default.createElement("br",l.br),m.default.createElement("span",s({className:"hljs-built_in"},l.span),"  MenuSeparator,"),m.default.createElement("br",l.br),"} from 'cultureamp-style-guide/components/MenuList'",m.default.createElement("span",s({className:"hljs-comment"},l.span),";"),m.default.createElement("br",l.br))),m.default.createElement("p",l.p,"To render:"),m.default.createElement("pre",l.pre,m.default.createElement("code",l.code,m.default.createElement("span",s({className:"xml"},l.span),"  ",m.default.createElement("span",s({className:"hljs-tag"},l.span),"<",m.default.createElement("span",s({className:"hljs-name"},l.span),"MenuList"),">"),m.default.createElement("br",l.br),"    ",m.default.createElement("span",s({className:"hljs-tag"},l.span),"<",m.default.createElement("span",s({className:"hljs-name"},l.span),"MenuHeader")," ",m.default.createElement("span",s({className:"hljs-attr"},l.span),"title"),"=",m.default.createElement("span",s({className:"hljs-string"},l.span),'"My Dropdown Menu"')," />"),m.default.createElement("br",l.br),"    ",m.default.createElement("span",s({className:"hljs-tag"},l.span),"<",m.default.createElement("span",s({className:"hljs-name"},l.span),"MenuItem")," ",m.default.createElement("span",s({className:"hljs-attr"},l.span),"action"),"=")),m.default.createElement("span",s({className:"hljs-template-variable"},l.span),"{() => alert('print!')}"),m.default.createElement("span",s({className:"xml"},l.span),m.default.createElement("span",s({className:"hljs-tag"},l.span)," ",m.default.createElement("span",s({className:"hljs-attr"},l.span),"icon"),"=")),m.default.createElement("span",s({className:"hljs-template-variable"},l.span),"{print}"),m.default.createElement("span",s({className:"xml"},l.span),m.default.createElement("span",s({className:"hljs-tag"},l.span)," ",m.default.createElement("span",s({className:"hljs-attr"},l.span),"hoverIcon"),"=")),m.default.createElement("span",s({className:"hljs-template-variable"},l.span),"{false}"),m.default.createElement("span",s({className:"xml"},l.span),m.default.createElement("span",s({className:"hljs-tag"},l.span),">"),m.default.createElement("br",l.br),"      Print (icon)",m.default.createElement("br",l.br),"    ",m.default.createElement("span",s({className:"hljs-tag"},l.span),"</",m.default.createElement("span",s({className:"hljs-name"},l.span),"MenuItem"),">"),m.default.createElement("br",l.br),"    ",m.default.createElement("span",s({className:"hljs-tag"},l.span),"<",m.default.createElement("span",s({className:"hljs-name"},l.span),"MenuItem")," ",m.default.createElement("span",s({className:"hljs-attr"},l.span),"action"),"=")),m.default.createElement("span",s({className:"hljs-template-variable"},l.span),"{() => alert('print!')}"),m.default.createElement("span",s({className:"xml"},l.span),m.default.createElement("span",s({className:"hljs-tag"},l.span)," ",m.default.createElement("span",s({className:"hljs-attr"},l.span),"icon"),"=")),m.default.createElement("span",s({className:"hljs-template-variable"},l.span),"{print}"),m.default.createElement("span",s({className:"xml"},l.span),m.default.createElement("span",s({className:"hljs-tag"},l.span)," ",m.default.createElement("span",s({className:"hljs-attr"},l.span),"hoverIcon"),"=")),m.default.createElement("span",s({className:"hljs-template-variable"},l.span),"{true}"),m.default.createElement("span",s({className:"xml"},l.span),m.default.createElement("span",s({className:"hljs-tag"},l.span),">"),m.default.createElement("br",l.br),"      Print (hover icon)",m.default.createElement("br",l.br),"    ",m.default.createElement("span",s({className:"hljs-tag"},l.span),"</",m.default.createElement("span",s({className:"hljs-name"},l.span),"MenuItem"),">"),m.default.createElement("br",l.br),"    ",m.default.createElement("span",s({className:"hljs-tag"},l.span),"<",m.default.createElement("span",s({className:"hljs-name"},l.span),"MenuItem")," ",m.default.createElement("span",s({className:"hljs-attr"},l.span),"action"),"=")),m.default.createElement("span",s({className:"hljs-template-variable"},l.span),"{() => alert('print!')}"),m.default.createElement("span",s({className:"xml"},l.span),m.default.createElement("span",s({className:"hljs-tag"},l.span),">"),"Print (no icon)",m.default.createElement("span",s({className:"hljs-tag"},l.span),"</",m.default.createElement("span",s({className:"hljs-name"},l.span),"MenuItem"),">"),m.default.createElement("br",l.br),"    ",m.default.createElement("span",s({className:"hljs-tag"},l.span),"<",m.default.createElement("span",s({className:"hljs-name"},l.span),"MenuSeparator")," />"),m.default.createElement("br",l.br),"    ",m.default.createElement("span",s({className:"hljs-tag"},l.span),"<",m.default.createElement("span",s({className:"hljs-name"},l.span),"MenuItem")," ",m.default.createElement("span",s({className:"hljs-attr"},l.span),"action"),"=",m.default.createElement("span",s({className:"hljs-string"},l.span),'"https://www.cultureamp.com/"'),">"),m.default.createElement("br",l.br),"      Culture Amp (no icon)",m.default.createElement("br",l.br),"    ",m.default.createElement("span",s({className:"hljs-tag"},l.span),"</",m.default.createElement("span",s({className:"hljs-name"},l.span),"MenuItem"),">"),m.default.createElement("br",l.br),"  ",m.default.createElement("span",s({className:"hljs-tag"},l.span),"</",m.default.createElement("span",s({className:"hljs-name"},l.span),"MenuList"),">"),m.default.createElement("br",l.br)))))}Object.defineProperty(a,"__esModule",{value:!0});var s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},r=t(8),u=l(r),c=t(3),m=l(c),d=t(4),p=l(d),f=t(38),o=l(f),i=t(17),h=l(i),E=t(37),N=l(E),_=t(216),b=l(_);n.propTypes={className:p.default.string,style:p.default.object,elementProps:p.default.object},n.defaultProps={elementProps:{}};var M=function(){return m.default.createElement("div",{className:u.default.contentContainer},m.default.createElement(n,{elementProps:{h1:{className:u.default.h1},h2:{className:u.default.h2},h3:{className:u.default.h3},h4:{className:u.default.h4},h5:{className:u.default.h5},h6:{className:u.default.h6},p:{className:u.default.p},table:{className:u.default.table},ul:{className:u.default.ul},ol:{className:u.default.ol},li:{className:u.default.li},blockquote:{className:u.default.blockquote},hr:{className:u.default.hr},img:{className:u.default.img},a:{className:u.default.link}}}))};a.default=M},66:function(e,a,t){var l=t(1),n=t(2),s=new l({id:"ca-icon-print-white",use:"ca-icon-print-white-usage",viewBox:"0 0 20 20",content:'<symbol viewBox="0 0 20 20" id="ca-icon-print-white"><g fill="none" fill-rule="evenodd"><path d="M15.6 6.8H4.4A2.397 2.397 0 0 0 2 9.2V14h3.2v3.2h9.6V14H18V9.2c0-1.328-1.072-2.4-2.4-2.4zM5.2 6h9.6V2.8H5.2z" fill="currentColor" /><path d="M15.6 10c-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8.44 0 .8.36.8.8 0 .44-.36.8-.8.8zM6.8 15.6h6.4v-4H6.8z" fill="#FFF" /></g></symbol>'});n.add(s);e.exports=s}});
//# sourceMappingURL=component---src-pages-components-menulist-index-md-a52fe2fbfd08702289d6.js.map