<template>
  <div>
    <h2>我是class页面，下面有很多的课程</h2>
    <ul>
      <li>
        <router-link :to='{name:"Css"}'> css课程 </router-link>
      </li>
      <li>
        <router-link :to="{name:'Vue'}"> Vue课程 </router-link>
      </li>
      <li>
        <router-link :to="{name:'javascript',query:{a:1}}"> js课程 </router-link>
      </li>
    </ul> 
    <hr>
    <h3>这里渲染某个课程介绍</h3>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
