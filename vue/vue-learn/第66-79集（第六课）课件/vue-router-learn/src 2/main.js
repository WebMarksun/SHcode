// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false

// 插件的写法
// 插件就是个某个类扩展功能的
Vue.use({
  install(Vue){
    Vue.component('miaov',{
      template: `<div>我是全局的miaov组件</div>`
    })

    Vue.prototype.abc = 10;
    Vue.prototype.$ketang = {
      tools(){
        console.log('tools执行')
      }
    };
  }
})

Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
