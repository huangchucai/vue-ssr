import Vue from 'vue';
import App from './App.vue';
import createVuex from './store.js';
import createRouter from './router.js';

export default () => {
    const router = createRouter();
    const store = createVuex();
    const app = new Vue({
        render: (h) => h(App),
        router
    });
    return { app, router, store };
}
