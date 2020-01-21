<template>
    <div id="app">
        app的vue
        <router-link to="/">Bar组件</router-link>
        <router-link to="/foo">foo组件</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        metaInfo: {
            title: 'My Awesome Webapp',
        },
        components: {
        },
        mounted() {
            console.log(window.performance.timeOrigin);
        }
    }
</script>
