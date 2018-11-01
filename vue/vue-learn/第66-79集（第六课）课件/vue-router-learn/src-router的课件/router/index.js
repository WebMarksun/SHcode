import Vue from 'vue'
import Router from 'vue-router'
import cookies from 'js-cookie'
import { navData } from './nav.js'
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from 'constants';

const Login = () => import('@/components/login');

Vue.use(Router)

const router = new Router({
  mode: 'history',
  //linkActiveClass: 'miaov',
  //linkExactActiveClass : 'abc',
  routes: [
    ...navData,
    {
      path: '/login',
      name: 'Login',
      meta: {isLogin: true},
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
router.beforeEach((to, from, next) => {
  console.log(router.app)
  // 只要目标的自身如果不需要登录，那么要看一下父级是否需要登陆
  // to是目标
  console.log('进入每一个路径之前')
  console.log(to);
  // 访问子路由的时候，包含父路由
  console.log(to.matched) ;  // 访问的路径匹配到那些路由信息对象
  console.log(to.meta.isLogin)
  if (to.matched.some(item => item.meta.isLogin)) {
    // 需要登录
    // 判断是否登录, cookie又没存对应的值 miaov
    let c = cookies.get('miaov') 
    console.log(c, to.path === '/login')
    console.log(c && to.path === '/login')
    /* 
        没有登录，进入的不是登录页，调到登录页
        没有登录，进入的是登录页，直接进入
    */
    if(!c && to.path !== '/login'){  // 没有登录
      next({
        path: '/login',
        query:{
          redirect: to.name
        }
      })
    }else if(c && to.path === '/login'){
      next('/')
    }else{
      next();
    }

  } else {
    next();
  }
  
})

router.afterEach(() => {
  console.log('进入之后')
})

export default router
