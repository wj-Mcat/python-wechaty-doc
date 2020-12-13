(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{143:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),o=(r(0),r(177)),c={title:"Examples II",description:"Introduction > Examples: Wechaty interactive example chatbots"},s={unversionedId:"case-study/auto-reply-bot",id:"case-study/auto-reply-bot",isDocsHomePage:!1,title:"Examples II",description:"Introduction > Examples: Wechaty interactive example chatbots",source:"@site/docs/case-study/auto-reply-bot.md",slug:"/case-study/auto-reply-bot",permalink:"/python-wechaty-doc/docs/case-study/auto-reply-bot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/case-study/auto-reply-bot.md",version:"current",lastUpdatedBy:"wjmcat",lastUpdatedAt:1607837451},i=[{value:"Ding Dong Bot",id:"ding-dong-bot",children:[]},{value:"Counter",id:"counter",children:[]},{value:"More Examples",id:"more-examples",children:[]}],l={rightToc:i};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Redux is distributed with a few examples in its ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/reduxjs/redux/tree/master/examples"}),"source code"),". Most of these examples are also on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://codesandbox.io"}),"CodeSandbox"),", an online editor that lets you play with the examples online."),Object(o.b)("h2",{id:"ding-dong-bot"},"Ding Dong Bot"),Object(o.b)("p",null,"Run the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty-getting-started/tree/master/examples/ding-dong-bot.ts"}),"Ding Dong Bot")," example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"git clone https://github.com/wechaty/wechaty-getting-started.git\n\ncd wechaty-getting-started\nnpm install\nnpm start\n")),Object(o.b)("p",null,"Or check out the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://codesandbox.io/s/github/wechaty/wechaty-getting-started/tree/master/examples/third-parties/gitpod?hidenavigation=1&module=%2Fding-dong-bot.ts&theme=dark"}),"sandbox"),":"),Object(o.b)("iframe",{class:"codesandbox",src:"https://codesandbox.io/embed/github/wechaty/wechaty-getting-started/tree/master/examples/third-parties/gitpod?hidenavigation=1&module=%2Fding-dong-bot.ts&theme=dark",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),Object(o.b)("p",null,"It does not require a build system or a view framework and exists to show the raw Redux API used with ES5."),Object(o.b)("h2",{id:"counter"},"Counter"),Object(o.b)("p",null,"Run the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/reduxjs/redux/tree/master/examples/counter"}),"Counter")," example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"git clone https://github.com/reduxjs/redux.git\n\ncd redux/examples/counter\nnpm install\nnpm start\n")),Object(o.b)("p",null,"Or check out the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/counter"}),"sandbox"),":"),Object(o.b)("iframe",{class:"codesandbox",src:"https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/counter",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),Object(o.b)("p",null,"This is the most basic example of using Redux together with React. For simplicity, it re-renders the React component manually when the store changes. In real projects, you will likely want to use the highly performant ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/reduxjs/react-redux"}),"React Redux")," bindings instead."),Object(o.b)("p",null,"This example includes tests."),Object(o.b)("h2",{id:"more-examples"},"More Examples"),Object(o.b)("p",null,"You can find more examples in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/markerikson/redux-ecosystem-links/blob/master/apps-and-examples.md"}),"Redux Apps and Examples"),"\npage of the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/markerikson/redux-ecosystem-links"}),"Redux Addons Catalog"),"."))}p.isMDXComponent=!0},177:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(r),b=a,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return r?n.a.createElement(m,s(s({ref:t},l),{},{components:r})):n.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=r[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);