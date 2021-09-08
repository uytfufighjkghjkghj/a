import Vue from "vue"
import VueRouter  from "vue-router"

import Home from "@/views/Home.vue"
import Find from "@/views/Find.vue"
// import My from "@/views/My.vue"
import Slide from "@/views/Slide.vue"

// import S from "./s"

Vue.use(VueRouter)
const routes=[
    {
       path:'/' ,
       // 命名路由
       name:'Home',
      //  component:Home
      components:{
         default: Home,
         slide: Slide
      }
    },
    {
       path:'/my/:userId?' ,
       name:'My',
      //  component:()=>import(/* webpackChunkName:"My" */'@/views/My.vue')
      components:{
         default:()=>import(/* webpackChunkName:"My" */'@/views/My.vue'),
         slide:Slide
      },
      beforeEnter(to,from,next){
         console.log("路由独享守卫");
         console.log(to);
         next();
      }
    },
   //  {
   //     path:'/classfiy/:id?' ,
   //     name:'Classfiy',
   //     component:()=>import(/* webpackChunkName:"My" */'@/views/Classfiy.vue'),
   //     props:true
   //  },
   // {
   //    path:'/classfiy' ,
   //    name:'Classfiy',
   //    component:()=>import(/* webpackChunkName:"My" */'@/views/Classfiy.vue'),
   //    // props:{
   //    //    propsBoo:false
   //    // }

   //    // props:route=>({query:route.query.tab})

   //    // URL /classfiy?q=vue 会将 {query: 'vue'} 作为属性传递给 classfiy 组件。
   // },
   {
      path:'/classfiy/:tab?' ,
      name:'Classfiy',
      component:()=>import(/* webpackChunkName:"My" */'@/views/Classfiy.vue'),
      meta:{
         requirePath:true
      }
   },
    {
       path:'/find' ,
      //  name:'Find',
       component:Find,
       // 注意： 当含有默认子路由，不要使用:to={name:Find}跳转到路由Find，而是使用:to={name:FindA} 跳转到路由Find
       children:[
          {
             path:"",
             name:'FindA',
             component:()=>import(/* webpackChunkName:"Find" */'@/views/find/FindA.vue')
          },
          {
            path:"findB",
            name:'FindB',
            components:{
               default: ()=>import(/* webpackChunkName:"Find" */'@/views/find/FindB.vue'),
               findSlide: ()=>import(/* webpackChunkName:"Find" */'@/views/find/FindSlide.vue'),
            }
          },
          {
            path:"findC",
            name:'FindC',
            component:()=>import(/* webpackChunkName:"Find" */'@/views/find/FindC.vue')
          }
       ],
       meta:{
         requirePath:true
       }

    },

   {
      path:'/login' ,
      name:'Login',
      component:()=>import(/* webpackChunkName:"My" */'@/views/Login.vue'),
   },
    {   
        // *  匹配不到的路由
        path:'*',
        // 重定向
        // redirect:'/'
        // redirect:{name:"Home"}

        redirect:to=>{
            // to 路由信息对象
            // console.log('to',to);
            return '/'
        }

    },
   //  ...S
]

// 带有权限的路由
export const asyncRoute=[
   {
      path:'/order',
      component: ()=>import('@/views/Order.vue')
   }
]

const router = new VueRouter({
   routes
})

router.beforeEach((to,from,next)=>{
// to : 即将要进入的目标 路由对象
// from : 当前导航正要离开的路由
// next() 通过调用next方法  才会进入到目标路由对象
   console.log("全局前置守卫");
   console.log('to',to);

   /* if(to.name=="FindA" ||to.name=="Classfiy"){
      next('/login');
   }else{
      next();
   } */

   if(to.meta.requirePath){
      if(localStorage.token){
         next();
      }else{
         next('/login');
      }
      
   }else{
      next();
   }


   
})

router.beforeResolve((to,from,next)=>{
   console.log("全局解析守卫");
   // console.log('to',to);
   next();
})

router.afterEach((to,from,next)=>{
   // 没有next的方法  next:undefined
   console.log("全局后置后卫");
})

export default router;

/* 

   导航被触发。
   在失活的组件里调用 beforeRouteLeave 守卫。
   调用全局的 beforeEach 守卫。
   在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
   在路由配置里调用 beforeEnter(全局独享守卫)。
   解析异步路由组件。
   在被激活的组件里调用 beforeRouteEnter（组件内守卫）
   调用全局的 beforeResolve 守卫 (2.5+)。
   导航被确认。
   调用全局的 afterEach 钩子。
   触发 DOM 更新。


   当更新组件时：
      全局前置守卫
      组件内更新
      全局解析守卫
      全局后置后卫
*/