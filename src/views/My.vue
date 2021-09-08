<template>
    <div>
        <h3>My</h3>

        <div>
            <router-link :class="{'select':select=='my1'}" to="/my/my1">my1</router-link> | 
            <router-link  :class="{'select':select=='my2'}" to="/my/my2">my2</router-link> | 
            <router-link  :class="{'select':select=='my3'}" to="/my/my3">my3</router-link> 
        </div>

        <p>userId: {{$route.params.userId}}</p>

    </div>
</template>
<script>
export default {
    data(){
        return {
            select:'my1'
        }
    },
    watch:{
        // $route(value){
        //     console.log(value);
        //     this.select=value.params.userId;
        // }

        // $route:{
        //     handler(value){
        //         console.log(value);
        //         if(value.params.userId){
        //             this.select=value.params.userId;
        //         }else{
        //             this.select="my1"
        //         }
                
        //     },
        //     immediate:true
        // }
    },

    beforeRouteUpdate(to,from,next){    
        console.log('组件内更新');
        this.select=to.params.userId;
        next();
    },
    mounted(){ 
        console.log("moundted生命周期函数")
        // console.log('my: ',this.$route);
        if(this.$route.params.userId){
            this.select=this.$route.params.userId;
        }else{
            this.select='my1';
        }

    },
    created(){
        console.log("my-created生命周期函数")
    },
    beforeRouteEnter (to, from, next) {
        console.log("组件内守卫---进入")
        console.log(to);
        next();
    },
    beforeRouteLeave (to, from, next) {
        console.log("组件内守卫---离开")
        console.log(to);
        next();
    }


    // destroyed(){
    //     console.log('my组件销毁')
    // }
}
</script>
<style lang="scss" scoped>
    .select{
        background: #ccc;
    }
</style>