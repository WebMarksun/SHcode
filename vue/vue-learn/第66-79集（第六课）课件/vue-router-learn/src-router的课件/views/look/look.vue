<template>
  <div>
    <h2>关注页面</h2>
    <div class="content">
      <div class="left-slider">
        <ul class="watch-list">
          <li 
            v-for="(item,index) in list" 
            :key="item.id"
            @click="showInfo(item)"
            :class="{active: index === currentIndex}"
          >
            <img :src="item.imgUrl"  />
            <span>{{item.title}}</span>
            
          </li>
        </ul>
      </div>
      <div class="right-slider">
        <h3>展示页</h3>
        <p>姓名：{{info.name}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  
  import axios from 'axios'
  const url = `https://www.easy-mock.com/mock/5b4026faf38b6529a0d572a3/jianshu/look`
  // 路由的钩子函数要在组件的钩子函数之前执行
  // 在路由的钩子函数执行的时候，组件还没有创建，路由的钩子函数中的this不指向实例
  /* 
  https://router.vuejs.org/zh/guide/advanced/data-fetching.html#%E5%AF%BC%E8%88%AA%E5%AE%8C%E6%88%90%E5%90%8E%E8%8E%B7%E5%8F%96%E6%95%B0%E6%8D%AE
       请求数据
        1. 进入导航的时候，开始请求数据，组件还没有渲染
        2. 进入导航的时候，开始渲染组件，再去获取数据
  */
  export default {
    beforeRouteEnter(to,from,next){
     // console.log('进入到look这个组件之前')
      //console.log(this)
      axios(url).then(({data}) => {
       // console.log(data)
        // 回调函数接收的参数，就是当前组件的实例
        next((vm) => {
          vm.list = data.data.list;
          vm.getInfo();
        });
      })
    },
    beforeRouteLeave (to,from,next){
     // console.log('离开之前')
      /* var bl = confirm('你真的要离开吗？离开之后数据可能会丢失')
      if(bl){
        next();
      } */
      next();
    },
    beforeRouteUpdate (to, from, next){
      //console.log('更新了当前的$route,组件是复用的')

      //console.log(to);// 进入的目标，没有调用next之前还是当前的路径

      this.getInfo(to.params.id);

      next();
    },
    beforeCreate(){
      console.log('这是组件的第一个钩子函数')
    },
    data(){
      return {
        list: [],
        info: {},
        currentIndex : 0
      }
    },
    watch:{
      /* $route(){
         this.getInfo();
      } */
    },
    methods:{
      showInfo(item){

        

        this.$router.push({
          name: "Look",  // path: '/look/'+item.id
          params:{
            id: item.id
          }
        })
      },
      getInfo(id){
        id = id || this.$route.params.id;
        var item = this.list.find(item => item.id == id);
        if(item){
          this.info = item.info;
          this.currentIndex = this.list.findIndex(option => option.id == id)
        }
      }
    },
    created() {
     /*  setTimeout(() => {
        axios(url).then(({data}) => {
          console.log(data)
          this.list = data.data.list;
          this.getInfo();
          
        })
      }, 2000); */


    },
  }


</script>
