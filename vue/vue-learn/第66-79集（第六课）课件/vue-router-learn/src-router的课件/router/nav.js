
const Home = () => import('@/views/home/home');
const Look = () => import('@/views/look/look');
const Message = () =>  /* webpackChunkName: "class" */ import('@/views/message/message');

const Pinglun = () => /* webpackChunkName: "class" */ import('@/views/message/children/pinglun');
const Jianxin = () => /* webpackChunkName: "class" */ import('@/views/message/children/jianxin');
const Guanzhu = () => /* webpackChunkName: "class" */ import('@/views/message/children/guanzhu');

// message的二级导航
export var messageChild = [

  {
    path: 'pinglun',
    name: 'Pinglun',
    title: '评论',
    component: Pinglun
  },
  {
    path: 'jianxin',
    name: 'Jianxin',
    title: '简信',
    component: Jianxin
  },
  {
    path: 'guanzhu',
    title: '关注',
    name: 'Guanzhu',
    component: Guanzhu
  }

]

export const navData = [
  {
    path: '/',
    name: 'Home',
    title: '发现',
    component: Home
  },
  {
    path: '/look/:id?',
    name: 'Look',
    title: '关注',
    meta: {isLogin:true}, // 添加额外的信息的
    component: Look,
    beforeEnter(to,from,next){
      //console.log('进入到了look中才会触发')
      next();
    }
  },
  {
    path: '/message',
    name: 'Message',
    title: '消息',
    meta: { isLogin: true },
    redirect:{name:'Pinglun'},
    component: Message,
    children: [
      ...messageChild,
    ]
  }
]