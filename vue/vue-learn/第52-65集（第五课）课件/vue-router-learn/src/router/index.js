import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


import Home from '@/components/home'
//import About from '@/components/about'
let About = () => {
  return import('@/components/about')
}
let Users = () => {
  return import('@/components/user')
}
//import Users from '@/components/user'

//import ClassCom from '@/components/class'

let ClassCom = () => {
  return import(/* webpackChunkName: "class" */ '@/components/class')
}

let Css = () => {
  return import(/* webpackChunkName: "class" */ '@/components/class-com/css')
}
let Js = () => {
  return import(/* webpackChunkName: "class" */ '@/components/class-com/js')
}
let VueCom = () => {
  return import(/* webpackChunkName: "class" */ '@/components/class-com/vue')
}

//import Css from '@/components/class-com/css'
/* import Js from '@/components/class-com/js'
import VueCom from '@/components/class-com/vue' */

import NotFound from '@/components/404'


let router = new VueRouter({
  mode: 'history',
  routes:[
    {
      path: '/',  //http://localhost:8080/
      component: Home,
      name: 'Home'
    },
    {
      path: '/about',  //http://localhost:8080/about
      component: About,
      name: 'About'
    },
    {
      // params
      // 当已经把users组价渲染了一次，在改变路径的时候，还是要渲染users这个组件
      // 此时path发生变化了，但是组件不会再重新渲染了
      // 意味着生命周期钩子函数并不会重新执行了
      path: '/users/:abc?',  ///users/1 id=1  /users/2 id=2 /users/3 id=3
      component: Users,
      name: 'Users'
    },
    {
      path: '/class',  //http://localhost:8080/class
      component: ClassCom,
      redirect:{name:'Vue'},
      // name: 'Class', 子级中有默认的二级导航，父级的name就必要了
      children: [
        // 在子路由中path不写/，相对父级来说 /class/css
        // 在子路由中path写/，相对根路径来说 /css
        {
          path: 'vue',   // /class/  默认的二级导航
          component: VueCom,
          name: "Vue"
        },
        {
          path: '/css',   // /css  写完之后，路径就不嵌套了 /class/css 视图依然是嵌套的
          component: Css,
          name: 'Css'
        },
        
        {
          path: 'abc',  // /class/js
          name:'javascript',
          component: Js
        },
        {
          path: '*', 
          component: NotFound
        }

      ]
    },
    /*{
      path: '/class/css',
      component: Css,
      name: 'Css'
    },
    {
      path: '/class/js',
      component: Js,
      name: 'Js'
    },*/
    {
      path: '*', 
      component: NotFound
    }
  ]
})


export default router;