webpackJsonp([35783957827783],{4:function(e,t){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function a(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var a=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==a.join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=a()?Object.assign:function(e,t){for(var a,l,i=r(e),s=1;s<arguments.length;s++){a=Object(arguments[s]);for(var c in a)o.call(a,c)&&(i[c]=a[c]);if(n){l=n(a);for(var f=0;f<l.length;f++)u.call(a,l[f])&&(i[l[f]]=a[l[f]])}}return i}},195:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.repos,r=o(t);return c.default.createElement("div",{className:"topics"},r.map(function(e,t){var r=e.name,a=e.stargazers,n=e.repos;return c.default.createElement("div",{className:"topic",key:t,id:r},c.default.createElement(d.default,{height:6}),c.default.createElement("h1",{title:a.totalCount+" ★"},i(r)),c.default.createElement(d.default,{height:2}),c.default.createElement("ul",null,n.map(function(e,t){var r=e.homepageUrl,a=e.url,n=e.name,o=e.description,u=e.stargazers;return c.default.createElement("li",{key:t,title:u.totalCount+" ★"},c.default.createElement("a",{href:r&&!r.includes("://pravdomil.com")?r:a+"#readme",target:"_blank"},c.default.createElement("span",{className:"title"},i(n)),c.default.createElement(d.default,{height:.5}),c.default.createElement("span",{className:"desc"},o)))})))}))}function o(e){for(var t=[],r=e,a=Array.isArray(r),n=0,r=a?r:r[Symbol.iterator]();;){var o;if(a){if(n>=r.length)break;o=r[n++]}else{if(n=r.next(),n.done)break;o=n.value}var i=o;if(!i.isArchived){var s=i.repositoryTopics.nodes,c=s.length?s[0].topic.name:"uncategorized",f=u(t,c);f.stargazers.totalCount+=i.stargazers.totalCount,f.repos.push(i)}}t.sort(l);for(var d=t,m=Array.isArray(d),p=0,d=m?d:d[Symbol.iterator]();;){var g;if(m){if(p>=d.length)break;g=d[p++]}else{if(p=d.next(),p.done)break;g=p.value}var f=g;f.repos.sort(l)}return t}function u(e,t){var r=e.find(function(e){return e.name===t});if(r)return r;var a={name:t,repos:[],stargazers:{totalCount:0}};return e.push(a),a}function l(e,t){return"uncategorized"===e.name?1:"uncategorized"===t.name?-1:e.stargazers.totalCount!==t.stargazers.totalCount?e.stargazers.totalCount<t.stargazers.totalCount?1:-1:e.name<t.name?-1:e.name>t.name?1:0}function i(e){var t=e.replace(/-/g," ");return t[0].toLocaleUpperCase()+t.substr(1)}t.__esModule=!0,t.default=n;var s=r(5),c=a(s),f=r(67),d=a(f);e.exports=t.default},67:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.children,r=e.height,a=void 0===r?1:r,n={height:8*a};return u.default.createElement("div",{style:n},t)}t.__esModule=!0,t.default=n;var o=r(5),u=a(o);e.exports=t.default},198:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0,t.default=function(e){var t=e.data,r=void 0;try{r=t.githubData.data.viewer.repositories.nodes}catch(e){throw new Error("No data from GitHub")}return o.default.createElement(l.default,{repos:r})};var n=r(5),o=a(n),u=r(195),l=a(u);t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-e30f6848170f566998c8.js.map