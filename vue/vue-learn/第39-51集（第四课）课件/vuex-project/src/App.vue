<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <quanju></quanju>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import {getData} from './server/index4.js'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
 /*  created(){
    getData().then((data) => {
      console.log(data)
    })
  } */

  async created(){
    let data = await getData();
    console.log(data)
  }
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
</style>
