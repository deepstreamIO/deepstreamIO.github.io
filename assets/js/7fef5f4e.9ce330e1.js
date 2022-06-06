"use strict";(self.webpackChunkdeepstreamio_github_io=self.webpackChunkdeepstreamio_github_io||[]).push([[2160],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4313:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Node API",description:"API docs for using deepstream within your own node application"},s=void 0,d={unversionedId:"docs/server/node-api",id:"docs/server/node-api",title:"Node API",description:"API docs for using deepstream within your own node application",source:"@site/docs/10-docs/10-server/30-node-api.md",sourceDirName:"10-docs/10-server",slug:"/docs/server/node-api",permalink:"/docs/docs/server/node-api",editUrl:"https://github.com/deepstreamIO/deepstreamIO.github.io/docs/10-docs/10-server/30-node-api.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Node API",description:"API docs for using deepstream within your own node application"},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/docs/server/configuration"},next:{title:"User File",permalink:"/docs/docs/server/user-file"}},p=[{value:"<code>constructor(options)</code>",id:"constructoroptions",children:[],level:3},{value:"Events",id:"events",children:[{value:"<code>started</code>",id:"started",children:[],level:3},{value:"<code>stopped</code>",id:"stopped",children:[],level:3},{value:"<code>DEEPSTREAM_STATE_CHANGED</code>",id:"deepstream_state_changed",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"<code>start()</code>",id:"start",children:[],level:3},{value:"<code>stop()</code>",id:"stop",children:[],level:3},{value:"<code>isRunning()</code>",id:"isrunning",children:[],level:3},{value:"<code>getServices()</code>",id:"getservices",children:[],level:3},{value:"<code>getConfig()</code>",id:"getconfig",children:[],level:3},{value:"<code>set(key, value)</code>",id:"setkey-value",children:[{value:"Differences when using <code>set(key, value)</code>",id:"differences-when-using-setkey-value",children:[],level:5}],level:3}],level:2}],c={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"API docs for using deepstream within your own node application"),(0,i.kt)("h3",{id:"constructoroptions"},(0,i.kt)("inlineCode",{parentName:"h3"},"constructor(options)")),(0,i.kt)("p",null,"Instantiate a new deepstream server instance. You can pass an optional object\nwhich contains the configuration or a filePath to the configuration file. Missing options will be merged with default values."),(0,i.kt)("p",null,"If you omit the argument, deepstream will use default values. Read more about\nthe ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/server/configuration"},"configuration and default values"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Optional"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"options"),(0,i.kt)("td",{parentName:"tr",align:null},"Object or\xa0string"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"Either the configuration object or a filepath to the configuration file")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const { Deepstream } = require('@deepstream/server')\nconst server = new Deepstream({})\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"calling ",(0,i.kt)("inlineCode",{parentName:"p"},"server = new Deepstream({})")," only creates the instance, to actually start the server, you still need to call ",(0,i.kt)("inlineCode",{parentName:"p"},"server.start()")))),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("h3",{id:"started"},(0,i.kt)("inlineCode",{parentName:"h3"},"started")),(0,i.kt)("p",null,"Emitted once ",(0,i.kt)("inlineCode",{parentName:"p"},"deepstream.start()")," has been called and the startup procedure has completed successfully."),(0,i.kt)("h3",{id:"stopped"},(0,i.kt)("inlineCode",{parentName:"h3"},"stopped")),(0,i.kt)("p",null,"Emitted once ",(0,i.kt)("inlineCode",{parentName:"p"},"deepstream.stop()")," has been called and the server has been completely shut down."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Stopping the server does not imply exiting the Node.js process. To do so, the following code can be used:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"server.on('stopped', () => process.exit(0))\n")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"deepstream_state_changed"},(0,i.kt)("inlineCode",{parentName:"h3"},"DEEPSTREAM_STATE_CHANGED")),(0,i.kt)("p",null,"Emitted for each state transition, useful for debuging purposes."),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"start"},(0,i.kt)("inlineCode",{parentName:"h3"},"start()")),(0,i.kt)("p",null,"Starts the server."),(0,i.kt)("h3",{id:"stop"},(0,i.kt)("inlineCode",{parentName:"h3"},"stop()")),(0,i.kt)("p",null,"Stops the server. Once the server is stopped, it can not be started again using the same instance of the server."),(0,i.kt)("h3",{id:"isrunning"},(0,i.kt)("inlineCode",{parentName:"h3"},"isRunning()")),(0,i.kt)("p",null,"Returns true if the deepstream server is running, otherwise false."),(0,i.kt)("h3",{id:"getservices"},(0,i.kt)("inlineCode",{parentName:"h3"},"getServices()")),(0,i.kt)("p",null,"Return all running services"),(0,i.kt)("h3",{id:"getconfig"},(0,i.kt)("inlineCode",{parentName:"h3"},"getConfig()")),(0,i.kt)("p",null,"Returns server configuration options"),(0,i.kt)("h3",{id:"setkey-value"},(0,i.kt)("inlineCode",{parentName:"h3"},"set(key, value)")),(0,i.kt)("p",null,"This method allows you to overwrite particular configuration options which were built via the\nconfiguration initialization step."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If deepstream is initialized with a configuration object, ",(0,i.kt)("inlineCode",{parentName:"p"},"set()")," will override the keys in your initial configuration. This is useful for passing in objects which are shared between deepstream and the rest of your application, such as a cache connector. You can override any of the options using the same name within your ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/server/configuration"},"configuration"),", except for the notable difference(s) below."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Optional"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"key"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"The configuration option that should be set")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"value"),(0,i.kt)("td",{parentName:"tr",align:null},"JSONValue"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"The value that should be used")))),(0,i.kt)("h5",{id:"differences-when-using-setkey-value"},"Differences when using ",(0,i.kt)("inlineCode",{parentName:"h5"},"set(key, value)")),(0,i.kt)("p",null,"These options might have a different name and location in the structure of the configuration object. If you use ",(0,i.kt)("inlineCode",{parentName:"p"},"set()")," you also need to provide the instantiated instance as the ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"authentication")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"permission")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"logger")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cache")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"storage"))),(0,i.kt)("p",null,"Make sure you run ",(0,i.kt)("inlineCode",{parentName:"p"},"server.start()")," after you set all your options."),(0,i.kt)("p",null,"Some examples of overriding plugins are initialization:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n* An object that exposes an isValidUser function.\n*/\nserver.set('authentication', new OAuthHandler({\n  options: ''\n}, server.getServices()))\n\n/**\n* An object that that exposes a canPerformAction function.\n*/\nserver.set('permission', new LdapPermissionHandler({\n\n}, server.getServices()))\n\n/**\n* A logger\n*/\nserver.set('logger', new FileLogger({\n\n}, server.getServices()))\n")))}u.isMDXComponent=!0}}]);