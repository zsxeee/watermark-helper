const minify = require('html-minifier').minify;
const fs = require("fs");
const Base64 = require('js-base64').Base64;

const file = fs.readFileSync('./watermark-helper.html', 'utf-8')
let minified = minify(file, {
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
    removeAttributeQuotes: true,
    sortAttributes: true
});

fs.writeFileSync('./watermark-helper.min.html', minified, 'utf-8');

const dataLink = 'data:text/html;base64,' + Base64.encode(minified);

fs.writeFileSync('./data-link.txt', dataLink);

const readme = fs.readFileSync('./README.md', 'utf-8');

fs.writeFileSync('./README.md', readme.replace(/\[此链接]\([^)]*\)/g, `[此链接](${dataLink})`), 'utf-8')

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
