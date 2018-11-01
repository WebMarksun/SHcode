import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
// 容器 state中的数据发生变化，组件会自动更新 这些数据是响应的
let store = new Vuex.Store({
  state: {  
    n: 100,
    miaov:{
      ketang: '我是妙味课堂',
      //abc:10
    }
  },
  mutations:{
    changeN(state,obj){ 
      state.n = obj.val;
    }
  }
})

export default store;