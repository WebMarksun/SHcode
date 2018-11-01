<template>
  <div class="hello">
    <button @click="changeStateN">改变数字</button>
    <p>data中取值的：{{c1}}</p>
    <p>computed中取值的：{{testC}}</p>
    <button @click="changeketang">改变ketang</button>
    <p>{{$store.state.miaov.ketang}}</p>
  </div>
</template>

<script>
export default {
  name: 'Count',
  data(){
    return {
      c1: this.$store.state.n  // 取值 n改变变化c1并不会更新
    }
  },
  computed:{
    testC(){
      // 依赖n，n发生变化重新计算
      return this.$store.state.n
    }
  },
  methods:{
    changeStateN(){
      // 这样可以改，因为直接找到对象就能改属性，这样是不推荐的。
      //因为任何一个组件都可以改这个属性，没有规则了。
      //this.$store.state.n = '改变了'
      // 真个改法 提交一个mutation
      //this.$store.commit('changeN','改变了')
      this.$store.commit('changeN',{
        val:'改变了'
      })
    },
    changeketang(){
      this.$store.commit('changeKetang',{
        val: '改变了你'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
