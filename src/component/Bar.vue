<template>
    <div style="background: red;" @click="show">
        bar vuex数据 {{$store.state.username}}
    </div>
</template>

<script>
    export default {
        asyncData({ store }) {
            return store.dispatch('set_username');
        },
        mounted() {
            this.$store.dispatch('set_username');
        },
        methods: {
            show() {
                alert(1);
            }
        }
    };
</script>
