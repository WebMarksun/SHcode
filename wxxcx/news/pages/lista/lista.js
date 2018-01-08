//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    newsList:{},
    loading:false,
    ye:1
  },
  onLoad: function () {
    var that = this
    //这里请求的是列表
    wx.request({
      url: 'https://api.tngou.net/top/list',
      data: {
        rows: 10,
        id: 2
      },
      success: function(e){
        console.log(e.data.tngou)
        that.setData({
          newsList: e.data.tngou
        })
      }
    })
  },
  //触底上拉加载新内容
  onReachBottom: function(){
    var that = this
    //每次进入 当前页++
    that.setData({
      page: ++that.data.ye,
      loading: true
    })
    wx.request({
      url: 'https://api.tngou.net/top/list',
      data: {
          page:that.data.ye,
          rows:10,
          id: 2
      },
      success: function(e){
        console.log(e.data.tngou)
        that.setData({
          newsList: that.data.newsList.concat(e.data.tngou),
          loading: false
        })
      }
    })
  }
  ,
  //下拉刷新
  onPullDownRefresh: function(){
    this.onLoad()
  },
  //三点分享
  onShareAppMessage: function(){
    return{
      title: '看新闻小程序',
      desc: '快来看看我做的实战项目吧,是一个新闻小程序',
      path: 'pages/index/index'
    }
  }
})
