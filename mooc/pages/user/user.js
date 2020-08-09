// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    unloginStatus: false,
    unlogin: {
      user_pic_url: "../../assets/img/unloginPic.png",
        user_name: "注册/登录",
        wrapperList: [
          {
            iconUrl: "../../assets/img/help.png",
            desc: "帮助中心"
          }
        ]
    },
    user1: {
      user_pic_url: "../../assets/img/user1Pic.png",
        user_name: "Heisenberg",
        wrapperList: [
          {
            iconUrl: "../../assets/img/file.png",
            desc: "资料设置"
          },{
            iconUrl: "../../assets/img/help.png",
            desc: "帮助中心"
          }
        ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var app = getApp()
    let unloginStatus
    unloginStatus = !app.globalData.isLogin
    this.setData({
      unloginStatus
    })
    console.log(app.globalData.isLogin)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})