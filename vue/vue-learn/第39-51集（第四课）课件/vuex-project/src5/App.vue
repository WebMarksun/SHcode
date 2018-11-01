<template>
  <div id="app">
    <h2>测试vuex</h2>
    <hr>
    <count1></count1>
    <hr>
    <count2></count2>
  </div>
</template>

<script>
import Count1 from './components/count1'
import Count2 from './components/count2'
export default {
  name: 'App',
  components: {Count1,Count2}
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
