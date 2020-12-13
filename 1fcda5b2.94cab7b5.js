(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return y})),n.d(t,"metadata",(function(){return h})),n.d(t,"rightToc",(function(){return f})),n.d(t,"default",(function(){return j}));var a=n(3),o=n(7),r=n(0),c=n.n(r),s=n(177),i=n(196),l=n(178),u=n(85),p=n.n(u);const m=37,b=39;var g=function(e){const{lazy:t,block:n,children:a,defaultValue:o,values:s,groupId:u,className:g}=e,{tabGroupChoices:d,setTabGroupChoices:y}=Object(i.a)(),[h,f]=Object(r.useState)(o);if(null!=u){const e=d[u];null!=e&&e!==h&&s.some((t=>t.value===e))&&f(e)}const O=e=>{f(e),null!=u&&y(u,e)},j=[];return c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},g)},s.map((({value:e,label:t})=>c.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===e,className:Object(l.a)("tabs__item",p.a.tabItem,{"tabs__item--active":h===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case b:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case m:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e)},onFocus:()=>O(e),onClick:()=>{O(e)}},t)))),t?Object(r.cloneElement)(a.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):c.a.createElement("div",{className:"margin-vert--md"},a.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))};var d=function({children:e,hidden:t,className:n}){return c.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:n}),e)},y={title:"Multi-language Support",description:"Wechaty supports almost all common programming languages for building your chatbot!"},h={unversionedId:"introduction/multi-language",id:"introduction/multi-language",isDocsHomePage:!1,title:"Multi-language Support",description:"Wechaty supports almost all common programming languages for building your chatbot!",source:"@site/docs/introduction/multi-language.md",slug:"/introduction/multi-language",permalink:"/python-wechaty-doc/docs/introduction/multi-language",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/introduction/multi-language.md",version:"current",lastUpdatedBy:"wjmcat",lastUpdatedAt:1607837451},f=[],O={rightToc:f};function j(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(s.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"We have multi-language support!"))),Object(s.b)(g,{defaultValue:"js",values:[{label:"TypeScript",value:"ts"},{label:"JS (ES5)",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"CSharp",value:"csharp"}],mdxType:"Tabs"},Object(s.b)(d,{value:"js",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { Wechaty } = require('wechaty')\n\nWechaty.instance()\n  .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\\nhttps://wechaty.github.io/qrcode/${encodeURIComponent(qrcode)}`))\n  .on('login',            user => console.log(`User ${user} logged in`))\n  .on('message',       message => console.log(`Message: ${message}`))\n  .start()\n"))),Object(s.b)(d,{value:"ts",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { Wechaty } from 'wechaty'\n\nWechaty.instance()\n  .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\\nhttps://wechaty.github.io/qrcode/${encodeURIComponent(qrcode)}`))\n  .on('login',            user => console.log(`User ${user} logged in`))\n  .on('message',       message => console.log(`Message: ${message}`))\n  .start()\n"))),Object(s.b)(d,{value:"py",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"from wechaty import Wechaty\nimport asyncio\n\nasync def main():\n    bot = Wechaty()\n    bot.on('scan', lambda status, qrcode, data: print('Scan QR Code to login: {}\\nhttps://wechaty.github.io/qrcode/{}'.format(status, qrcode)))\n    bot.on('login', lambda user: print('User {} logged in'.format(user)))\n    bot.on('message', lambda message: print('Message: {}'.format(message)))\n    await bot.start()\n\nasyncio.run(main())\n"))),Object(s.b)(d,{value:"java",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'package io.github.wechaty;\n\nclass Bot{\n  public static void main(String args[]){\n    Wechaty bot = Wechaty.instance()\n      .onScan((qrcode, statusScanStatus, data) -> System.out.println(QrcodeUtils.getQr(qrcode)))\n      .onLogin(user -> System.out.println("User logged in :" + user))\n      .onMessage(message -> System.out.println("Message:" + message))\n      .start(true);\n  }\n}\n'))),Object(s.b)(d,{value:"go",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n "fmt"\n\n  "github.com/wechaty/go-wechaty/wechaty"\n)\n\nfunc main() {\n  _ = wechaty.NewWechaty().\n    OnScan(func(qrCode, status string) {\n      fmt.Printf("Scan QR Code to login: %s\\nhttps://wechaty.github.io/qrcode/%s\\n", status, qrCode)\n    }).\n    OnLogin(func(user string) { fmt.Printf("User %s logged in\\n", user) }).\n    OnMessage(func(message string) { fmt.Printf("Message: %s\\n", message) }).\n    Start()\n}\n'))),Object(s.b)(d,{value:"php",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),'$wechaty = \\IO\\Github\\Wechaty\\Wechaty::getInstance($token, $endPoint);\n$wechaty->onScan(function($qrcode, $status, $data) {\n    $qr = \\IO\\Github\\Wechaty\\Util\\QrcodeUtils::getQr($qrcode);\n    echo "$qr\\n\\nOnline Image: https://wechaty.github.io/qrcode/$qrcode\\n";\n})->onLogin(function(\\IO\\Github\\Wechaty\\User\\ContactSelf $user) {\n})->onMessage(function(\\IO\\Github\\Wechaty\\User\\Message $message) {\n    $message->say("hello from PHP7.4");\n})->start();\n'))),Object(s.b)(d,{value:"csharp",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'var wechaty = new Wechaty(options, logger).onScan((qrcode, status) => {\n  Console.WriteLine($"Scan QR Code to login: {status} https://wechaty.github.io/qrcode/{(qrcode)}`");\n}).OnLogin( user => {\n  Console.WriteLine("User {user} logined");\n}).OnMessage( message => {\n  Console.WriteLine($"Message: {message}");\n}).Start();\n'))),Object(s.b)(d,{value:"scala",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),'package wechaty\n\nobject DingDongBot {\n  def main(args: Array[String]): Unit = {\n    Wechaty.instance()\n      .onScan(payload     => { println("Scan QR Code to login: %s\\nhttps://wechaty.github.io/qrcode/%s\\n".format(payload.status, payload.qrcode)) })\n      .onLogin(payload    => { println("User %s logged in\\n".format(payload.id)) })\n      .onMessage(message  => { println(message) })\n      .start()\n    Thread.currentThread().join()\n  }\n}\n')))))}j.isMDXComponent=!0},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,g=p["".concat(c,".").concat(b)]||p[b]||m[b]||r;return n?o.a.createElement(g,s(s({ref:t},l),{},{components:n})):o.a.createElement(g,s({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<r;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},178:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},196:function(e,t,n){"use strict";var a=n(0),o=n(197);t.a=function(){const e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},197:function(e,t,n){"use strict";var a=n(0);const o=Object(a.createContext)(void 0);t.a=o}}]);