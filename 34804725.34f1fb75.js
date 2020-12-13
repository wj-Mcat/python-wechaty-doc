(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{177:function(t,e,r){"use strict";r.d(e,"a",(function(){return b})),r.d(e,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=o.a.createContext({}),l=function(t){var e=o.a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):u(u({},e),t)),r},b=function(t){var e=l(t.components);return o.a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},f=o.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,i=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),b=l(r),f=n,d=b["".concat(i,".").concat(f)]||b[f]||p[f]||a;return r?o.a.createElement(d,u(u({ref:e},s),{},{components:r})):o.a.createElement(d,u({ref:e},s))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,i=new Array(a);i[0]=f;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:n,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},181:function(t,e,r){"use strict";r.d(e,"b",(function(){return a})),r.d(e,"a",(function(){return i}));var n=r(21),o=r(183);function a(){const{siteConfig:{baseUrl:t="/",url:e}={}}=Object(n.default)();return{withBaseUrl:(r,n)=>function(t,e,r,{forcePrependBaseUrl:n=!1,absolute:a=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(n)return e+r;const i=r.startsWith(e)?r:e+r.replace(/^\//,"");return a?t+i:i}(e,t,r,n)}}function i(t,e={}){const{withBaseUrl:r}=a();return r(t,e)}},183:function(t,e,r){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function o(t){return void 0!==t&&!n(t)}r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return o}))},93:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return u})),r.d(e,"metadata",(function(){return c})),r.d(e,"rightToc",(function(){return s})),r.d(e,"default",(function(){return b}));var n=r(3),o=r(7),a=(r(0),r(177)),i=r(181),u={sidebar_label:"Rui.BOT",title:"Case Study: Rui.BOT"},c={unversionedId:"case-study/rui-bot",id:"case-study/rui-bot",isDocsHomePage:!1,title:"Case Study: Rui.BOT",description:"Rui.BOT is an assistant bot for Rui, who is the  Founder & CEO of Juzi.BOT.",source:"@site/docs/case-study/rui-bot.mdx",slug:"/case-study/rui-bot",permalink:"/python-wechaty-doc/docs/case-study/rui-bot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/case-study/rui-bot.mdx",version:"current",lastUpdatedBy:"wjmcat",lastUpdatedAt:1607837451,sidebar_label:"Rui.BOT"},s=[],l={rightToc:s};function b(t){var e=t.components,r=Object(o.a)(t,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:e,mdxType:"MDXLayout"}),Object(a.b)("img",{alt:"Friday.BOT",src:Object(i.a)("img/docs/rui-bot.png"),width:"256",height:"256"}),Object(a.b)("p",null,"Rui.BOT is an assistant bot for Rui, who is the  Founder & CEO of Juzi.BOT."),Object(a.b)("p",null,"It has the following functions:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Introduce JuziBot"),Object(a.b)("li",{parentName:"ul"},"Introduce Jiarui Li"),Object(a.b)("li",{parentName:"ul"},"Introduce the product"),Object(a.b)("li",{parentName:"ul"},"Answer the frequency questions"),Object(a.b)("li",{parentName:"ul"},"valuation"),Object(a.b)("li",{parentName:"ul"},"receive friendship automatically and introduce it selt"),Object(a.b)("li",{parentName:"ul"},"Change Qnamaker key to a formal one"),Object(a.b)("li",{parentName:"ul"},"Add rui.juzi.bot domain for ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://rui-bot.herokuapp.com"}),"https://rui-bot.herokuapp.com")),Object(a.b)("li",{parentName:"ul"},"Add more frequency questions into QnAMaker"),Object(a.b)("li",{parentName:"ul"},"Reply the right valuation")),Object(a.b)("p",null,"GitHub: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/juzibot/rui-bot"}),"https://github.com/juzibot/rui-bot")))}b.isMDXComponent=!0}}]);