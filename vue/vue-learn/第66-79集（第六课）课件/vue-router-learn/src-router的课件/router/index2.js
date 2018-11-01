import Vue from 'vue'
import Router from 'vue-router'

import { navData} from './nav.js'
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from 'constants';

const Login = () => import('@/components/login');

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    ...navData,
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
// 洋葱圈模型 koa
// 全局守卫钩子函数
// 中间件 在请求和响应中间写几个处理的程序 每一个程序处理完成之后，交给下一个中间件，调用next
// https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%AE%88%E5%8D%AB
router.beforeEach((to,from,next) => {

  // to是目标


  console.log('进入每一个路径之前')
  console.log(to); // 到哪里去
  console.log(from); // 从哪里来
  // 控制权交到下一个处理成立处理
  next();
})

router.afterEach(() => {
  console.log('进入之后')
})

export default router
