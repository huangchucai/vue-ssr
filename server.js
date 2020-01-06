// vue-server-renderer

const express = require('express');
const VueServerRenderer = require('vue-server-renderer');
const Vue = require('vue');
const app = express();
const fs = require('fs');

const vm = new Vue({
    template: `<div>Hello World</div>`
});

const render = VueServerRenderer.createRenderer({
    template: fs.readFileSync('./index.html')
});

app.get('/', (req, res) => {
    render.renderToString(vm, function (err, html) {
        res.send(html);
    });
});

app.listen(3000);
