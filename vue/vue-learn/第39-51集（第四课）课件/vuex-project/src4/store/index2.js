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
    changeN(state,obj){  // 这是一个mutation，用来改变状态中的n
      if (isNaN(obj.val)) return;
      if (obj.val>100) return;
      state.n = obj.val;
    },
    changeKetang(state,payload){ // {val:''}
      state.miaov.ketang = payload.val;
    },
    addPropMiaov(state){
      // state.miaov.abc = 10;
      // 新赋值一个对象
      //state.miaov = { ...state.miaov,abc:10};
      Vue.set(state.miaov,'abc',10)
    }
  }
})

export default store;