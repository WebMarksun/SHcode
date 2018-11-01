import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


import Home from '@/components/home'
import About from '@/components/about'


let router = new VueRouter({
  mode: 'history',
  routes:[

    {
      path: '/',  //http://localhost:8080/#/
      component: Home
    },
    {
      path: '/about',  //http://localhost:8080/#/about
      component: About
    }

  ]
})

export default router;