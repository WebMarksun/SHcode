//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    focus:{},
    newsList:{},
    loading: false,
    ye:1,
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    circular: true
  },
  onLoad: function () {
    console.log('触发了 onLoad')
    var that = this
    wx.request({
      // url: 'http://v.juhe.cn/toutiao/index',
      // data: {
      //     type: 'top',
      //     key: '6dd2bccc77b7e69737e3317f3251fd64'
      // },
      url: 'https://api.tngou.net/top/list',
      data: {
        rows: 3,
        page: 10
      },
      success: function(e){
        console.log('焦点图接口');
        console.log(e);
        //console.log(e.data.tngou)
        that.setData({
          focus: e.data.tngou
        })
      },
      fail: function(e){
        console.log(e);
      }
    }),
    wx.request({
      url: 'https://api.tngou.net/top/list',
      data: {
        rows: 10
      },
      success: function(e){
        console.log('列表接口');
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
          rows:10
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
