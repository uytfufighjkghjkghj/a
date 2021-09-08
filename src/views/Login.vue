<template>
    <div>
        <h4>Login</h4>
        <button @click="change">登录</button>
    </div>
</template>
<script>

import {asyncRoute} from "../router"
export default {
    methods: {
        change(){
            this.$store.dispatch('changeLogin',true);
            this.$router.addRoutes(asyncRoute);
        }
    },
}
</script>