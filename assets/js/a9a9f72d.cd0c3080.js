"use strict";(self.webpackChunkdeepstream_io_website=self.webpackChunkdeepstream_io_website||[]).push([[2112],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(r),m=s,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,a=new Array(i);a[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6559:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=r(7462),s=r(3366),i=(r(7294),r(3905)),a=["components"],o={title:"Redis Cache Connector"},c=void 0,l={unversionedId:"tutorials/plugins/cache/redis",id:"tutorials/plugins/cache/redis",title:"Redis Cache Connector",description:"What is Redis?",source:"@site/docs/00-tutorials/60-plugins/20-cache/10-redis.md",sourceDirName:"00-tutorials/60-plugins/20-cache",slug:"/tutorials/plugins/cache/redis",permalink:"/docs/tutorials/plugins/cache/redis",editUrl:"https://github.com/deepstreamIO/deepstream.io-website/docs/00-tutorials/60-plugins/20-cache/10-redis.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Redis Cache Connector"},sidebar:"tutorialSidebar",previous:{title:"Winston Logger",permalink:"/docs/tutorials/plugins/logger/winston"},next:{title:"Memcached Cache Connector",permalink:"/docs/tutorials/plugins/cache/memcached"}},u=[{value:"What is Redis?",id:"what-is-redis",children:[],level:4},{value:"Why use Redis with deepstream?",id:"why-use-redis-with-deepstream",children:[],level:4},{value:"How to use Redis as a cache with deepstream?",id:"how-to-use-redis-as-a-cache-with-deepstream",children:[],level:4}],d={toc:u};function p(e){var t=e.components,r=(0,s.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"what-is-redis"},"What is Redis?"),(0,i.kt)("p",null,'A lot of things. In fact, so many that its often referred to as the "Swiss Army Knife of the web". Redis is first and foremost a cache. It\'s fast, simple, single threaded with non-blocking I/O and scales well in distributed deployments (should sound familiar to deepstream fans).'),(0,i.kt)("p",null,"But it also persists its data to disk, making it a good alternative to full-size databases for simpler usecases and can act as a publish/subscribe server for message distribution."),(0,i.kt)("p",null,"You can easily install Redis yourself or use it as a service from your cloud hosting provider, e.g. via AWS ElastiCache, Microsoft Azure or RackSpace's Object Rocket. Due to its popularity there are also a number of specialized Redis hosting companies, e.g. RedisLabs, RedisGreen, Compose or ScaleGrid, but be careful: deepstream constantly interacts with its cache, so every millisecond network latency between its server and your RedisHoster makes deepstream notably slower. We strongly recommend choosing a cache that runs in close network proximity to your deepstream servers, e.g. within the same data-center."),(0,i.kt)("h4",{id:"why-use-redis-with-deepstream"},"Why use Redis with deepstream?"),(0,i.kt)("p",null,"Redis is a great fit for use with deepstream. It can be used as a cache, persists data and re-distributes messages for smaller to medium sized deepstream clusters. It won't be much help when it comes to executing complex queries, but if you can live without, Redis might be all you need for your production deployment."),(0,i.kt)("h4",{id:"how-to-use-redis-as-a-cache-with-deepstream"},"How to use Redis as a cache with deepstream?"),(0,i.kt)("p",null,"It comes preinstalled with the binary or if you're using deepstream in Node.js via ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@deepstream/cache-redis"},"NPM")),(0,i.kt)("p",null,"And can be enabled in your config file as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"cache:\n  name: redis\n  options:\n    host: localhost\n    port: 6379\n")),(0,i.kt)("p",null,"Both connectors work with Redis clusters as well. Just adjust your options as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"cache:\n  name: redis\n  options:\n    nodes:\n      - host: <String>\n        port: <Number>\n        password: <String>\n      - host: <String>\n        port: <Number>\n    maxRedirections: 16\n    redisOptions:\n      password: 'fallback-password'\n")))}p.isMDXComponent=!0}}]);