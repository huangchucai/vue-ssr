import Vue from 'vue';
import Router from 'vue-router';
import Bar from './component/Bar.vue';
import Foo from './component/Foo.vue';

Vue.use(Router);

export default () => {
    const router = new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                component: Bar
            },
            {
                path: '/foo',
                component: Foo
            }

        ]
    });
    return router;
}
