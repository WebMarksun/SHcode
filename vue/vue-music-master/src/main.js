import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import store from './store'

// Vue.config.productionTip = false
import 'common/stylus/index.styl'

Vue.use(VueLazyLoad,{
  loading: require('base/loading/loading.gif')
})
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
