//app.js
App({
  onLaunch: function () {
    console.log("初始化触发")
  },
  onShow: function(){
    console.log("在前台触发")
  },
  onHide: function(){
    console.log("在后台触发")
  },

  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },


  globalData:{
    userInfo:null
  }
  
})