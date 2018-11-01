<template>
  <div id="app">
    <miaov></miaov>
    <mt-switch @change="changeHandle" v-model="value"></mt-switch>
    <mt-progress :value="50" :bar-height="5">
      <div slot="start">0%</div>
      <div slot="end">100%</div>
    </mt-progress>
    <button @click="tip"> 提醒 </button>
    <router-view/>
  </div>
</template>

<script>
import {getSingers} from '@/server/'
import { MessageBox } from 'mint-ui';
export default {
  name: 'App',
  data(){
    return {
      rangeValue: 0,
      value: true
    }
  },
  methods:{
    tip(){
      MessageBox('提示', '操作成功');
    },
    changeHandle(checked){
      console.log('执行了',checked)
    }
  },
  async created() {
    let data = await getSingers();
    console.log(data)

    console.log(this.abc)
    this.$ketang.tools()
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.mt-progress-progress {
  background: red;
}
</style>
