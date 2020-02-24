const minify = require('html-minifier').minify;
const fs = require("fs");
const Base64 = require('js-base64').Base64;

fs.readFile('./watermark-helper.html', 'utf-8', (e, data) => {
    if (e) throw Error(`Read failed: ${e.message}`);

    let result = minify(data, {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeAttributeQuotes: true,
        sortAttributes: true
    });

    fs.writeFile('./watermark-helper.min.html', result, 'utf-8', (e) => {
        if (e) throw Error(`Write failed: ${e.message}`);
    });

    fs.writeFile('./data-link.txt', 'data:text/html;base64,' + Base64.encode(result), (e) => {
        if (e) throw Error(`Write failed: ${e.message}`);
    })
});
