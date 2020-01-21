import Vue from 'vue';
import App from './App.vue';
import createVuex from './store.js';
import createRouter from './router.js';
import VueMeta from 'vue-meta';

Vue.use(VueMeta);

export default () => {
    const router = createRouter();
    const store = createVuex();
    const app = new Vue({
        render: (h) => h(App),
        router,
        store
    });
    return { app, router, store };
}
