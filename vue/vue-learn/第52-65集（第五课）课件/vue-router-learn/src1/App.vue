<template>
  <div id="app">
    <h2>从vuex中取值</h2>
    <p>{{total}}</p>
    <p>{{n}}</p>
    <p>{{num}}</p>
    <hr>  
    <button @click="changeN({num: '改变了'})">改变n</button>
    <button @click="abc">改变m</button>
  </div>
</template>

<script>

//map

import {mapState,mapMutations} from 'vuex'

// mapState mapMutations 执行后返回对象

export default {
  name: 'App',
  //computed: mapState(['total','n','m']) // {total(){},n()(r),m(){}}
  computed:{
    //...mapState(['total','n','m']),
    ...mapState({
      total: state => state.total,
      n: 'n',
      //num: 'm'
      num(state){
        return state.m * 30
      }
    }),
    custom(){
      return 123;
    }
  },
  //methods:mapMutations(['changeN','changeM'])
  methods:{
    /*changeN(patlod){
      this.$store.commit('changeN',patlod)
    }*/
    ...mapMutations(['changeN']),
    ...mapMutations({
      abc: 'changeM'
    })
  }
  /* methods:{
    changeNMethod(){
      this.$store.commit('changeN',{})
    },
    changeMMethod(){
      this.$store.commit('changeM')
    }
  } */
}

/**{
    total(){
      return this.$store.state.total
    },
    n(){
      return this.$store.state.n
    },
    num(){
      return this.$store.state.m
    }
  } */
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
</style>
