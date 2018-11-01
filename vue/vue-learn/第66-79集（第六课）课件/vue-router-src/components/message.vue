<template>
 <div>
    <h2>消息页面</h2>
    <div class="content">
      <div class="left-slider">
        <ul class="watch-list">
          <router-link tag='li' :to="{path:'/message/pinglun'}">
            <img src="https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120">
            <span>评论</span>
          </router-link>
          <router-link tag='a' :to="{name:'jianxin'}">
            <img src="https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120">
            <span>简信</span>
          </router-link>
          <router-link tag='li' to="/guanzhu">
            <img src="https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120">
            <span>关注</span>
          </router-link>
        </ul>
      </div>
      <div class="right-slider">
        <h3>展示页</h3>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    created(){
      console.log('我又构建了一次')
    }
  }
</script>
