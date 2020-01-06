// vue-server-renderer

const express = require('express');
const app = express();
const VueServerRenderer = require('vue-server-renderer');
const fs = require('fs');
const path = require('path');
const serverBundle = fs.readFileSync('./dist/server.bundle.js', 'utf8');

const template = fs.readFileSync('./dist/server-index.html', 'utf8');
const render = VueServerRenderer.createBundleRenderer(serverBundle, {
    template
});
// const createApp = require('./dist/server.bundle.js').default;
// const render = VueServerRenderer.createRenderer({
//     template
// });
app.get('/', (req, res) => {
    const context = {
        url: req.url
    };
    render.renderToString(context, (err, html) => {
        res.send(html);
    });
});

// 必须放到app.get('/') 后面，不然直接访问根目录的静态文件了
app.use(express.static(path.resolve(__dirname, 'dist')));
// 如果访问的路径不存在
app.get('*', (req, res) => {
    const context = {
        url: req.url
    };
    render.renderToString(context, (err, html) => {
        console.log('执行renderToString 回调');
        if (err) {
            if (err.code === 404) {
                res.status(404).end('Page not found')
            } else {
                res.status(500).end('Internal Server Error')
            }
        } else {
            res.end(html)
        }
    });
});

// app.get('*', (req, res) => {
//     const context = { url: req.url };
//
//     createApp(context).then(app => {
//         render.renderToString(app, (err, html) => {
//             if (err) {
//                 if (err.code === 404) {
//                     res.status(404).end('Page not found');
//                 } else {
//                     res.status(500).end('Internal Server Error');
//                 }
//             } else {
//                 res.end(html);
//             }
//         });
//     });
// });
app.listen(4000);
