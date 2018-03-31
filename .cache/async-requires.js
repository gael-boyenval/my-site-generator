// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": require("gatsby-module-loader?name=component---src-templates-blog-post-js!/Users/gaelboyenval/web/perso/my-site-generator/src/templates/blog-post.js"),
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/Users/gaelboyenval/web/perso/my-site-generator/.cache/dev-404-page.js"),
  "component---src-pages-counter-js": require("gatsby-module-loader?name=component---src-pages-counter-js!/Users/gaelboyenval/web/perso/my-site-generator/src/pages/counter.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/gaelboyenval/web/perso/my-site-generator/src/pages/index.js"),
  "component---src-pages-my-files-js": require("gatsby-module-loader?name=component---src-pages-my-files-js!/Users/gaelboyenval/web/perso/my-site-generator/src/pages/my-files.js"),
  "component---src-pages-page-2-js": require("gatsby-module-loader?name=component---src-pages-page-2-js!/Users/gaelboyenval/web/perso/my-site-generator/src/pages/page2.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/gaelboyenval/web/perso/my-site-generator/.cache/json/layout-index.json"),
  "sweet-pandas-eating-sweets.json": require("gatsby-module-loader?name=path---sweet-pandas-eating-sweets!/Users/gaelboyenval/web/perso/my-site-generator/.cache/json/sweet-pandas-eating-sweets.json"),
  "pandas-and-bananas.json": require("gatsby-module-loader?name=path---pandas-and-bananas!/Users/gaelboyenval/web/perso/my-site-generator/.cache/json/pandas-and-bananas.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/Users/gaelboyenval/web/perso/my-site-generator/.cache/json/dev-404-page.json"),
  "counter.json": require("gatsby-module-loader?name=path---counter!/Users/gaelboyenval/web/perso/my-site-generator/.cache/json/counter.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/gaelboyenval/web/perso/my-site-generator/.cache/json/index.json"),
  "my-files.json": require("gatsby-module-loader?name=path---my-files!/Users/gaelboyenval/web/perso/my-site-generator/.cache/json/my-files.json"),
  "page-2.json": require("gatsby-module-loader?name=path---page-2!/Users/gaelboyenval/web/perso/my-site-generator/.cache/json/page-2.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/gaelboyenval/web/perso/my-site-generator/.cache/layouts/index.js")
}