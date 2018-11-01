<template>
  <div class="hello">
    <button @click="changeStateN">改变数字</button>
    <p>data中取值的：{{c1}}</p>
    <p>computed中取值的：{{testC}}</p>
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
      this.$store.commit('changeN',{
        val:'改变了'
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
