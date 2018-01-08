// pages/view/view.js
var WxParse = require('../../wxParse/wxParse.js');
//var app = getApp()
Page({
  data:{
    msg:{}
  },
  onLoad:function(e){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(e.id)
    var that = this
    wx.request({
      url: 'https://api.tngou.net/top/show',
      data:{
        id :e.id
      },
      success:function(res){
        //console.log(res);
        that.setData({
          msg: WxParse.wxParse('msg', 'html', res.data.message, that, 5)
        })
      }
    })

  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
