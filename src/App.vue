<template>
  <div id="app">
    <div class="nav">
        <router-link to="/login">login</router-link>
        <span v-if="$store.state.loginBoo">
            <router-link to="/order">order</router-link>
        </span>
    </div>
    <footer class="footer">
      <router-link tag="span" to="/">Home</router-link> 
      <router-link tag="span"  to="/find">Find</router-link> 
      <router-link tag="span"  to="/classfiy">classfiy</router-link> 
      <router-link tag="span"  to="/my">My</router-link> 

      <!-- <router-link tag="span" :to="{name:'Home'}">Home</router-link> 
      <router-link tag="span" :to="{name:'FindA'}">Find</router-link> 
      <router-link tag="span" :to="{name:'My'}">My</router-link>  -->

      <!-- <span  @click="changeRoute('Home')">Home</span>
      <span  @click="changeRoute('Find')">Find</span>
      <span  @click="changeRoute('My')">My</span> -->
    </footer>
    <!--路由视图/路由出口   用来展示路由对应组件的内容 -->
    
    <router-view class="box"></router-view>
    <router-view name="slide"></router-view>

  </div>
</template>
<script>
export default {
  name:'App',
  methods:{
    changeRoute(name){
      // $router 路由实例
      console.log(this.$router);
      // this.$router.replace({name});
      this.$router.push({name});
    }
  }
} 
</script>
<style lang="scss">
  *{margin:0; padding:0;}
  a{text-decoration: none;}
  a:active{color:#333}
  li{list-style:none;}
  #app{
    // font-size: 40px;
    text-align: center;
    color:#2c3e50;
   

    // .router-link-exact-active{
    //   color:aquamarine;
    // }
    .nav{
      background: #ccc;
      text-align: right;
      a{
        margin: 0 10px;
      }
    }

    .footer{
      position: fixed;
      bottom: 0;
      left: 0;
      height: 44px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      border-top:1px solid #ccc;
      span{
        flex:1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>