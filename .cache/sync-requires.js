// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/gaelboyenval/web/perso/my-site-generator/src/templates/blog-post.js")),
  "component---src-pages-counter-js": preferDefault(require("/Users/gaelboyenval/web/perso/my-site-generator/src/pages/counter.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/gaelboyenval/web/perso/my-site-generator/src/pages/index.js")),
  "component---src-pages-my-files-js": preferDefault(require("/Users/gaelboyenval/web/perso/my-site-generator/src/pages/my-files.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/gaelboyenval/web/perso/my-site-generator/src/pages/page2.js"))
}

exports.json = {
  "layout-index.json": require("/Users/gaelboyenval/web/perso/my-site-generator/.cache/json/layout-index.json"),
  "pandas-and-bananas.json": require("/Users/gaelboyenval/web/perso/my-site-generator/.cache/json/pandas-and-bananas.json"),
  "layout-index.json": require("/Users/gaelboyenval/web/perso/my-site-generator/.cache/json/layout-index.json"),
  "sweet-pandas-eating-sweets.json": require("/Users/gaelboyenval/web/perso/my-site-generator/.cache/json/sweet-pandas-eating-sweets.json"),
  "layout-index.json": require("/Users/gaelboyenval/web/perso/my-site-generator/.cache/json/layout-index.json"),
  "counter.json": require("/Users/gaelboyenval/web/perso/my-site-generator/.cache/json/counter.json"),
  "layout-index.json": require("/Users/gaelboyenval/web/perso/my-site-generator/.cache/json/layout-index.json"),
  "index.json": require("/Users/gaelboyenval/web/perso/my-site-generator/.cache/json/index.json"),
  "layout-index.json": require("/Users/gaelboyenval/web/perso/my-site-generator/.cache/json/layout-index.json"),
  "my-files.json": require("/Users/gaelboyenval/web/perso/my-site-generator/.cache/json/my-files.json"),
  "layout-index.json": require("/Users/gaelboyenval/web/perso/my-site-generator/.cache/json/layout-index.json"),
  "page-2.json": require("/Users/gaelboyenval/web/perso/my-site-generator/.cache/json/page-2.json")
}

exports.layouts = {
  "component---src-layouts-index-js": preferDefault(require("/Users/gaelboyenval/web/perso/my-site-generator/.cache/layouts/index.js"))
}