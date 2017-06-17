const fs = require('fs');
const minify = require('html-minifier').minify;


const html = fs.readFileSync('./app.html').toString('utf8');
const minified = minify(html, {
  collapseWhitespace: true,
  minifyCSS: true,
  minifyURLs: true,
  minifyJS: true
});
fs.writeFileSync('index.html', minified);
console.log('Build finished.');