"use strict";(self.webpackChunkdeepstreamio_github_io=self.webpackChunkdeepstreamio_github_io||[]).push([[2790],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7603:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"RPC Response",description:"The API docs for deepstream's RPC response object"},l=void 0,p={unversionedId:"docs/client-js/reqres-response",id:"docs/client-js/reqres-response",title:"RPC Response",description:"The API docs for deepstream's RPC response object",source:"@site/docs/10-docs/20-client-js/60-reqres-response.md",sourceDirName:"10-docs/20-client-js",slug:"/docs/client-js/reqres-response",permalink:"/docs/docs/client-js/reqres-response",editUrl:"https://github.com/deepstreamIO/deepstreamIO.github.io/docs/10-docs/20-client-js/60-reqres-response.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{title:"RPC Response",description:"The API docs for deepstream's RPC response object"},sidebar:"tutorialSidebar",previous:{title:"RPC",permalink:"/docs/docs/client-js/reqres-client-rpc"},next:{title:"Record",permalink:"/docs/docs/client-js/datasync-record"}},c=[{value:"Methods",id:"methods",children:[{value:"response.send( data )",id:"responsesend-data-",children:[],level:3},{value:"response.reject()",id:"responsereject",children:[],level:3},{value:"error( errorMsg )",id:"error-errormsg-",children:[],level:3},{value:"response.ack()",id:"responseack",children:[],level:3}],level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The RPC response object is passed to the callback registered with ",(0,o.kt)("inlineCode",{parentName:"p"},"client.rpc.provide()"),". It allows RPC providers to decide how to react to an incoming request."),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"responsesend-data-"},"response.send( data )"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Argument"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"data"),(0,o.kt)("td",{parentName:"tr",align:null},"Mixed"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"Any serializable response data")))),(0,o.kt)("p",null,"Succesfully complete a remote procedure call and send data back to the requesting client."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"data")," can be any kind of serializable data, e.g., Objects, Numbers, Booleans, or Strings."),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"autoAck")," is disabled and the response is sent before the ack message arrives, then the request will still be completed and the ack message will be ignored."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"client.rpc.provide( 'add-two-numbers', (data, response) => {\n  response.send( data.numA + data.numB )\n})\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"That data that will be sent with the RPC is limited in size by the ",(0,o.kt)("inlineCode",{parentName:"p"},"maxMessageSize")," ",(0,o.kt)("a",{parentName:"p",href:"../server/configuration#connection-endpoint-configuration"},"config option")," for the given server connection endpoint"))),(0,o.kt)("h3",{id:"responsereject"},"response.reject()"),(0,o.kt)("p",null,'Rejects the request. Rejections are not errors but merely a means of saying "I\'m busy at the moment, try another client". Upon receiving a rejection, deepstream will try to re-route the request to another provider for the same RPC. If there are no more providers left to try, deepstream will send a ',(0,o.kt)("inlineCode",{parentName:"p"},"NO_RPC_PROVIDER")," error to the client."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"client.rpc.provide('add-two-numbers', (data, response) => {\n  //reject the response so that it gets\n  //re-routed to another provider\n  response.reject()\n})\n")),(0,o.kt)("h3",{id:"error-errormsg-"},"error( errorMsg )"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Argument"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"errorMsg"),(0,o.kt)("td",{parentName:"tr",align:null},"Variant"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"A result object that will be passed as an error to the RPC requester.")))),(0,o.kt)("p",null,"Send an error to the client. ",(0,o.kt)("inlineCode",{parentName:"p"},"errorMsg")," will be received as the first argument to the callback registered with ",(0,o.kt)("inlineCode",{parentName:"p"},"client.rpc.make()"),". This will complete the RPC."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"client.rpc.provide( 'count-vote', (data, response) => {\n  if( hasAlreadyVoted(data.user) ) {\n   response.error( 'You can only vote once')\n  }\n})\n")),(0,o.kt)("h3",{id:"responseack"},"response.ack()"),(0,o.kt)("p",null,"Explicitly acknowledges the receipt of a request."),(0,o.kt)("p",null,"This is usually done automatically but can also be performed explicitly by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"response.autoAck = false")," and calling ",(0,o.kt)("inlineCode",{parentName:"p"},"ack()")," later. This is useful when a client needs to perform an asynchronous operation to determine if it will accept or reject the request."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Requests count as completed once ",(0,o.kt)("inlineCode",{parentName:"p"},"send()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"error()")," was called. Calling ",(0,o.kt)("inlineCode",{parentName:"p"},"ack()")," after that won't do anything."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"client.rpc.provide('support/billing', (data, response) => {\n  // Turn of automatic acknowledgements. This needs to happen synchronously\n  response.autoAck = false\n\n  // Acknowledge the request yourself at a later point\n  hasCapacities().then(() => {\n    response.ack()\n  })\n})\n")))}m.isMDXComponent=!0}}]);