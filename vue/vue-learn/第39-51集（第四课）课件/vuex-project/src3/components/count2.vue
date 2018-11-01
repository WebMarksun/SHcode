<template>
  <div class="hello">
    <button @click="changeN">改变数字count2</button>
    <p>{{$store.state.n}}</p>
    <button @click="addProp">添加一个属性为abc</button>
    <p>{{$store.state.miaov.abc}}</p>
  </div>
</template>

<script>
export default {
  name: 'Count2',
  data(){
    return {
      kk:1
    }
  },
  methods:{
    changeN(){
     // this.$store.state.n = ++this.kk;
     var n = this.kk + 3;
     this.kk = n;
     this.$store.commit('changeN',{
       val:n
     })
    },
    addProp(){
      this.$store.commit('addPropMiaov')
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
