// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './components/home'
import About from './components/about'

// 做的就是配置让一个路径对应什么样的组件？
// http://www.miaov.com:80/a/b/c/index.html
// https://www.miaov.com:443/a/b/c/index.html?a=1&b=2#a=1&b=4
// https://www.miaov.com:443/abc/ketang/c/index.html?a=1&b=2#a=1&b=4
var router = new VueRouter({
  // 配置规则
  routes:[  // 配置路径和组件的映射
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    }
  ]
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
