"use strict";(self.webpackChunkdeepstreamio_github_io=self.webpackChunkdeepstreamio_github_io||[]).push([[3539],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9855:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=n(267),l=["components"],s={title:"Node HTTP"},c=void 0,u={unversionedId:"tutorials/plugins/http-service/node",id:"tutorials/plugins/http-service/node",title:"Node HTTP",description:"Node is the default HTTP server as it supports all platforms and is much easier to debug.",source:"@site/docs/00-tutorials/60-plugins/39-http-service/node.mdx",sourceDirName:"00-tutorials/60-plugins/39-http-service",slug:"/tutorials/plugins/http-service/node",permalink:"/docs/tutorials/plugins/http-service/node",editUrl:"https://github.com/deepstreamIO/deepstreamIO.github.io/docs/00-tutorials/60-plugins/39-http-service/node.mdx",tags:[],version:"current",frontMatter:{title:"Node HTTP"},sidebar:"tutorialSidebar",previous:{title:"ElasticSearch DataBase Connector",permalink:"/docs/tutorials/plugins/database/elasticsearch"},next:{title:"UWS HTTP",permalink:"/docs/tutorials/plugins/http-service/uwebsockets"}},p=[{value:"How to configure:",id:"how-to-configure",children:[],level:3}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Node is the default HTTP server as it supports all platforms and is much easier to debug."),(0,i.kt)("p",null,"To enable SSL, all you need to do is pass in the the loaded file and cert."),(0,i.kt)("p",null,"You can either do this using an explicit path:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"ssl:\n  key: fileLoad(/location/to/ssl/key.pem)\n  cert: fileLoad(/location/to/ssl/key.pem)\n")),(0,i.kt)("p",null,"or relative to the config file (less likely on a production install):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"ssl:\n  key: fileLoad(ssl/key.pem)\n  cert: fileLoad(ssl/key.pem)\n")),(0,i.kt)("h3",{id:"how-to-configure"},"How to configure:"),(0,i.kt)(a.ZP,{mdxType:"NodeHttpServerConfig"}))}f.isMDXComponent=!0},267:function(e,t,n){n.d(t,{ZP:function(){return s}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={toc:[]};function s(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"httpServer:\n  type: default\n  options:\n    # url path for http health-checks, GET requests to this path will return 200 if deepstream is alive\n    healthCheckPath: /health-check\n    # -- CORS --\n    # if disabled, only requests with an 'Origin' header matching one specified under 'origins'\n    # below will be permitted and the 'Access-Control-Allow-Credentials' response header will be\n    # enabled\n    allowAllOrigins: true\n    # a list of allowed origins\n    origins:\n      - 'https://example.com'\n    # maximum allowed size of a POST request body, in bytes, defaults to 1 MB\n    maxMessageSize: 1048576\n    # Headers to copy over from websocket\n    headers:\n      - user-agent\n    ssl:\n      key: fileLoad(/path/to/sslKey)\n      cert: fileLoad(/path/to/sslCert)\n      ca: fileLoad(/path/to/caAuth)\n")))}s.isMDXComponent=!0}}]);