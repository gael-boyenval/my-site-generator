webpackJsonp([35783957827783],{65:function(e,t,r){!function(t,r){e.exports=r()}(this,function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,a=Object.getOwnPropertyNames,n=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,o=Object.getPrototypeOf,u=o&&o(Object);return function c(s,i,d){if("string"!=typeof i){if(u){var f=o(i);f&&f!==u&&c(s,f,d)}var m=a(i);n&&(m=m.concat(n(i)));for(var p=0;p<m.length;++p){var h=m[p];if(!(e[h]||t[h]||d&&d[h])){var g=l(i,h);try{r(s,h,g)}catch(e){}}}return s}return s}})},200:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var n=r(4),l=a(n),o=r(154),u=a(o),c=function(e){var t=e.posts;return l.default.createElement("section",null,l.default.createElement("h4",null,t.totalCount," Posts"),t.edges.map(function(e){var t=e.node;return l.default.createElement("div",{key:t.id},l.default.createElement(u.default,{to:t.fields.slug,css:{textDecoration:"none",color:"inherit"}},l.default.createElement("h3",null,t.frontmatter.title," ",l.default.createElement("span",{color:"#BBB"},"— ",t.frontmatter.date)),l.default.createElement("p",null,t.excerpt)))}))},s=function(e){var t=e.posts;return l.default.createElement("section",null,l.default.createElement("h4",null,t.totalCount," Posts"),t.edges.map(function(e){var t=e.node;return l.default.createElement("div",{key:t.id},l.default.createElement("a",{href:"https://medium.com/@ogrange/"+t.uniqueSlug,css:{textDecoration:"none",color:"inherit"}},l.default.createElement("h3",null,t.title," ",l.default.createElement("span",{color:"#BBB"},"— ",t.createdAt))))}))},i=function(e){var t=e.data;return l.default.createElement("div",null,l.default.createElement("h1",null,t.site.siteMetadata.title),l.default.createElement("div",null,l.default.createElement("p",null,"From Richard Hamming’s classic and must-read talk, “",l.default.createElement("a",{href:"http://www.cs.virginia.edu/~robins/YouAndYourResearch.html"},"You and Your Research"),"”."),l.default.createElement(c,{posts:t.allMarkdownRemark}),l.default.createElement(s,{posts:t.allMediumPost})))};t.default=i;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-18b7fa03cbf87a49c8d3.js.map