// pages/lessons/lessons.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoPlay: true,
    interval: 1500,
    duration: 500,
    circular: true,
    indicatorColor: "#c1c4c7",
    indicatorActiveColor: "#5ecd69",
    swiperItemUrls: [
      '../../assets/img/guide1.png',
      '../../assets/img/guide2.png',
      '../../assets/img/guide3.png',
      '../../assets/img/guide4.png'
    ]
  },

  login() {
    var app = getApp()
    app.globalData.isLogin = true
    wx.switchTab({
      url: '/pages/user/user'
    })
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