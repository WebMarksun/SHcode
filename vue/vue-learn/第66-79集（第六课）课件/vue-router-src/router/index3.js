import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import find from '@/components/find'
import look from '@/components/look'
import message from '@/components/message'
import notFound from '@/components/404'

import pinglun from '@/components/message-child/pinglun'
import jianxin from '@/components/message-child/jianxin'
import guanzhu from '@/components/message-child/guanzhu'


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
      component: look,
      alias: '/leo'  // 别名
    },
    {
      path: '/message',
      component: message,
      redirect: {
        name: 'jianxin'  // 访问message，重定向到某个子路由中
      },
      // 子路由
      children:[
        /* {
          path: '',  // 默认的子路由  /message/
          name: 'pinglun',
          component: pinglun
        }, */
        {
          path: 'pinglun',  // 默认的子路由  /message/
          name: 'pinglun',
          component: pinglun
        },
        {
          path: 'jianxin',  // 路径是相对根路径，视图是嵌套的
          name: 'jianxin',  // /message/jianxin
          component: jianxin
        },
        {
          path: '/guanzhu',
          name: 'guanzhu',
          component: guanzhu
        }
      ]
    },

    /* {
      path: '/message/pinglun',  // http://localhost:8080/pinglun
      component: pinglun
    }, */

    {
      path: '/404',
      component: notFound
    },
    {
      path: '*',
      redirect: '/message'
    }
  ]
})

export default router;
