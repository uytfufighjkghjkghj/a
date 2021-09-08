/* 
  整个项目的入口文件，主要作用是初始化vue实例，同时可以在此文件中引用某些组件库或者全局挂载一些变量。 
*/
import Vue from 'vue'

// 引入App组件  是所有组件的父组件
import App from './App.vue'

import store from './store'
import router from "./router"

// 关闭vue的生产提示
Vue.config.productionTip = false

// 创建vue实例 
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
