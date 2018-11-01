<template>
  <div id="app">
    <h2>测试路由</h2>
    <ul>
      <li>
        <a href="/">首页</a>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <a href="/about">关于我</a>
        <router-link to="/about">关于我</router-link>
      </li>
    </ul>
   <div class="content">
      <router-view></router-view>
   </div>
  </div>
</template>

<script>
export default {
  name: 'App'
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
