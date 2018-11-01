import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import find from '@/components/find'
import look from '@/components/look'
import message from '@/components/message'
import notFound from '@/components/404'


// 配置 路径和对应的组件 一一映射

let router = new VueRouter({
  mode: 'history',
  routes:[
    {
      path: '/',
      component: find
    },
    {
      path: '/look',
      component: look
    },
    {
      path: '/message',
      component: message
    },
    {
      path: '/404',
      component: notFound
    },
    {
      path: '*',
      //component: notFound
      //redirect: '/'
      /* redirect: {  // /?a=1
        path: '/',
        query: {
          a:1
        }
      } */

      redirect:function(to){  // 动态重定向
          // 根据访问的路径的不同，或者一些参数的不同，可以重定向到不用的路径上

          // 访问路径 /miaov => /  /ketang => /messsage
          // to这个对象 称之为路由信息对象 目标路由信息对象  到哪里去
          console.log(to.path)
          if(to.path === '/miaov'){
            return '/'
          } else if (to.path === '/ketang'){
            return {
              path: '/message'
            }
          }

          return {
            path: '/404'
          }

          //return '/'
          /* return {
            path: '/message'
          } */
      }

    }
  ]
})

export default router;
