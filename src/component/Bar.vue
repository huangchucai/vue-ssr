<template>
    <div style="background: red;" @click="show">
        bar vuex数据
    </div>
</template>

<script>
    export default {
        asyncData({ store }) {
            return store.dispatch('set_username');
        },
        methods: {
            show() {
                alert(1);
            }
        }
    };
</script>
