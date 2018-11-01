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
  routes: [
    {
      path: '/',
      component: find
    },
    {
      /* 
       // :代表id这个位置是动态的，id就是变量名，
          访问/look/1  id = 1
          访问/look/2  id = 2

          访问的时候，1,2就相当于传参，称之为动态路径参数
          params
      */
      path: '/look/:abc?',  // /look/1 /look/2  不能是 /look
      component: look,
      alias: '/leo'  // 别名
    },
    {
      path: '/message',  // /message/
      component: message,
      //name: 'message',  //默认子路由中有name，父路由中不需要定义
      // 子路由
      children: [
        {
          path: '',  // 默认的子路由  /message/
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
      redirect: '/404'
    }
  ]
})

export default router;
