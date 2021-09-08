<template>
    <div>
        <h3>Home</h3>

        
    </div>
</template>
<script>
export default {
    created(){
        console.log('home: ',this.$route);
    },
    watch:{
        $route(value){
            console.log('value: ',value);
        }
    },
    destroyed(){
        console.log('home组件销毁')
    }
}
</script>
<style lang="scss" scoped>
    a{
        margin: 0 10px;
    }
</style>