<template>
  <div>
    <h2>关注页面</h2>
    <div class="content">
      <div class="left-slider">
        <ul class="watch-list">
          <li class="active">
            <img src="https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120">
            <span>朋友信息</span>
          </li>
          <!--:to="{path:`/look/`+item.id+`/miaov`}"-->
          <!--:to="{path:`/look/${item.id}/miaov`}"-->
          <router-link 
            v-for="item in users" 
            :key="item.id"
            :to="{path:createPath(item.id)}"
            tag='a'
          >
          <img src="https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120">
            <span>{{item.name}}</span>
          </router-link>
        </ul>
      </div>
      <div class="right-slider">
        <h3>展示用户的信息</h3>

        <div>
          <p>姓名：{{info.name}}</p>
          <p>id：{{info.id}}</p>
          <p>介绍：{{info.jieshao}}</p>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  let users = [
    {
      id: 1,
      name: 'leo1',
      jieshao: '公司ceo，迎娶白富美11111111'
    },
    {
      id: 2,
      name: 'leo2',
      jieshao: '公司ceo，迎娶白富美2222'
    },{
      id: 3,
      name: 'leo3',
      jieshao: '公司ceo，迎娶白富美33333'
    },{
      id: 4,
      name: 'leo4',
      jieshao: '公司ceo，迎娶白富美3333'
    }
  ]
  export default {
    data(){
      return {
        users,
        id: ''
      }
    },
    computed: {
      info(){
        let item = this.users.find(item => item.id == this.id);
        return item ? item : {
          id:'XXXXX',
          name: 'XXXX',
          jieshao: 'XXX'
        }
      }
    },
    methods:{
      createPath(id){
        return `#/${id}/miaov`
      }
    },
    watch:{
      $route(){
        let id = this.$route.params.abc;
        if(id){
          this.id = id;
        }
      }
    },
    created(){
      let id = this.$route.params.abc;
      if(id){
        this.id = id;
      }
    }
  }
</script>
