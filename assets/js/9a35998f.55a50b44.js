"use strict";(self.webpackChunkdeepstreamio_github_io=self.webpackChunkdeepstreamio_github_io||[]).push([[5640],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return u}});var r=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,s=function(e,a){if(null==e)return{};var t,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),c=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=c(e.components);return r.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var t=e.components,s=e.mdxType,n=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(t),u=s,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||n;return t?r.createElement(m,i(i({ref:a},p),{},{components:t})):r.createElement(m,i({ref:a},p))}));function u(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var n=t.length,i=new Array(n);i[0]=h;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var c=2;c<n;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},943:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var r=t(7462),s=t(3366),n=(t(7294),t(3905)),i=["components"],o={title:"ElasticSearch DataBase Connector"},l=void 0,c={unversionedId:"tutorials/plugins/database/elasticsearch",id:"tutorials/plugins/database/elasticsearch",title:"ElasticSearch DataBase Connector",description:"What is ElasticSearch",source:"@site/docs/00-tutorials/60-plugins/30-database/40-elasticsearch.md",sourceDirName:"00-tutorials/60-plugins/30-database",slug:"/tutorials/plugins/database/elasticsearch",permalink:"/docs/tutorials/plugins/database/elasticsearch",editUrl:"https://github.com/deepstreamIO/deepstreamIO.github.io/docs/00-tutorials/60-plugins/30-database/40-elasticsearch.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"ElasticSearch DataBase Connector"},sidebar:"tutorialSidebar",previous:{title:"RethinkDB DataBase Connector",permalink:"/docs/tutorials/plugins/database/rethinkdb"},next:{title:"Node HTTP",permalink:"/docs/tutorials/plugins/http-service/node"}},p=[{value:"What is ElasticSearch",id:"what-is-elasticsearch",children:[],level:4},{value:"Using ElasticSearch with deepstream.io",id:"using-elasticsearch-with-deepstreamio",children:[],level:4},{value:"Storing deepstream&#39;s data in ElasticSearch",id:"storing-deepstreams-data-in-elasticsearch",children:[],level:4},{value:"Querying ElasticSearch from deepstream",id:"querying-elasticsearch-from-deepstream",children:[],level:4}],d={toc:p};function h(e){var a=e.components,o=(0,s.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},d,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"what-is-elasticsearch"},"What is ElasticSearch"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.elastic.co/products/elasticsearch"},"ElasticSearch")," is a standalone search engine that let's you add powerful full-text search capabilities to your application. You might be thinking right now: ",(0,n.kt)("strong",{parentName:"p"},"what's wrong with a bit of MySQL and ",(0,n.kt)("inlineCode",{parentName:"strong"},"WHERE content like %word%"),"?"),'...well, ElasticSearch is an entirely different league. It offers word stemming (search "fisher" also searches fish, fishing etc.), synonyms and related words ( "UK" also searches for United Kingdom, Great Britain etc.) and a number of other crucial concepts for proper search capabilities.\nYou can run ElasticSearch yourself as a single server or a cluster or use it as a service, e.g. via ',(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/elasticsearch-service/"},"AWS ElasticSearch"),"."),(0,n.kt)("h4",{id:"using-elasticsearch-with-deepstreamio"},"Using ElasticSearch with deepstream.io"),(0,n.kt)("p",null,"ElasticSearch's powerful search capabilities can be a great addition for many deepstream apps, but there are some things to be aware of:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Use it with a persisting cache")," ElasticSearch can be used just as a normal data-base to store deepstream records, but it is first and foremost a search engine. When used with deepstream.io, we'd recommend also using a cache that saves data to disk, e.g. ",(0,n.kt)("a",{parentName:"p",href:"../cache/redis/"},"Redis")," as a faster way of storing and accessing data."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"ElasticSearch's 'realtime search' means something different")," ",(0,n.kt)("a",{parentName:"p",href:"https://deepstream.io/blog/what-is-realtime/"},"There's a lot of discussion about what ",(0,n.kt)("strong",{parentName:"a"},"realtime")," exactly means"),". For deepstream and many others, it means that data is sent to you as it becomes available.\n'Realtime search' in this context means that new results are streamed out as soon as they match an existing query. This interpretation us shared by others, e.g. ",(0,n.kt)("a",{parentName:"p",href:"rethinkdb"},"RethinkDB"),' as well.\nElasticSearch also mentions its "realtime search capabilities". Here it means though that results can be searched for immediately after a write to the database (as opposed to e.g. a Hadoop cluster where data only becomes available after a significant delay). To search for the newly added data however, you still have to execute a new query.'),(0,n.kt)("h4",{id:"storing-deepstreams-data-in-elasticsearch"},"Storing deepstream's data in ElasticSearch"),(0,n.kt)("p",null,"Storing data in ElasticSearch is easy. Just use deepstream's storage connector for ElasticSearch."),(0,n.kt)("h4",{id:"querying-elasticsearch-from-deepstream"},"Querying ElasticSearch from deepstream"),(0,n.kt)("p",null,"You have two choices: ElasticSearch offers a well structured REST API that can be accessed directly via HTTP (e.g. via an Ajax call from the Browser). This can be a simple and very solid choice, especially when used with a managed ElasticSearch deployment as a service."),(0,n.kt)("p",null,"ElasticSearch can also be accessed from within deepstream through a remote procedure call (RPC). For this, you'll need to create a backend process that sits in between deepstream and the search engine."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"deepstream elasticsearch provider diagram",src:t(7493).Z})),(0,n.kt)("p",null,"Say we create a (admittably nonsensical) set of records like"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"client.record.getRecord('cars/ferrari').set({\n  brand: 'Ferrari',\n  color: 'Red'\n})\n")),(0,n.kt)("p",null,"and our greatest desire in life would be to execute a RPC that searches for a brand and returns its signature color"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"client.rpc.make('search-color-for-brand', 'Ferrari', (err, color) => {\n  //color === red\n});\n")),(0,n.kt)("p",null,"our search provider would look as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const elasticsearch = require('elasticsearch')\nconst deepstream = require( './ds-client' )\n\n// Create ElasticSearch Client\nconst es = new elasticsearch.Client({\n  host: 'elasticsearch-host',\n  log: 'trace'\n});\n\n// Create deepstream Client\nconst client = deepstream('deepstream-host')\nclient.login()\n\n// Register as provider for search-color-for-brand\nclient.rpc.provide('search-color-for-brand', (brand, response) => {\n  // Query ElasticSearch\n  es.search({\n    index: 'deepstream',\n    q: 'brand=' + brand\n  }).then((body) => {\n    // Return result\n    response.send( body.hits.hits.color )\n  }, (error) => {\n    //Return Error\n    response.error(error.toString())\n  })\n})\n")))}h.isMDXComponent=!0},7493:function(e,a){a.Z="data:image/png;base64,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"}}]);