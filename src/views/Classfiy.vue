<template>
    <div class="classfiy">
        <h3>classfiy</h3>
        <!-- <p>{{id}}</p> -->
        <div>
            <!-- <router-link to="/classfiy?tab=all">all</router-link> | 
            <router-link to="/classfiy?tab=good">good</router-link> | 
            <router-link to="/classfiy?tab=share">share</router-link> | 
            <router-link to="/classfiy?tab=ask">ask</router-link>  -->

            <!-- <router-link :to="{name:'Classfiy',query:{tab:'all'}}">all</router-link> | 
            <router-link :to="{name:'Classfiy',query:{tab:'good'}}">good</router-link> | 
            <router-link :to="{name:'Classfiy',query:{tab:'share'}}">share</router-link> |  -->

            <router-link :to="{name:'Classfiy',params:{tab:'all'}}">all</router-link> | 
            <!-- <router-link :to="{name:'Classfiy',params:{tab:'good'}}">good</router-link> |  -->
            <router-link :to="{path:'/classfiy/good'}">good</router-link> | 
            <router-link :to="{name:'Classfiy',params:{tab:'share'}}">share</router-link> 
        </div>
        <p>propsBoo: {{$route.query.tab}}</p>
        <p>propsBoo: {{$route.params.tab}}</p>

    
    </div>
</template>
<script>
export default {
    props:['propsBoo'],
    watch:{
        $route(value){
            console.log(value);
        }
    },
    created(){
        console.log(this.$route);
    }
}
</script>