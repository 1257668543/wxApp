// pages/accountLogin/accountLogin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rememberPassword: true,
    tempAccount:"",
    tempPassword:"",
    loginAccount: {
      account: "",
      password: ""
    },
    err: ""
  },

  changeRemember() {
    let rememberPassword = !this.data.rememberPassword
    this.setData({
      rememberPassword
    })
    console.log(this.data.rememberPassword)
  },

  inputAccount: function (e) {
    this.setData({
      tempAccount: e.detail.value
    })
    console.log(this.data.tempAccount)
  },

  inputPassword: function (e) {
    this.setData({
      tempPassword: e.detail.value
    })
    console.log(this.data.tempPassword)
  },

  login() {
    let account = this.data.tempAccount
    let password = this.data.tempPassword
    if (account === "") {
      this.setData({
        err: "err1"
      })
      console.log(this.data.err)
      this.onShow() 
      return
    } else if (password === "") {
      this.setData({
        err: "err2"
      })
      console.log(this.data.err)
      this.onShow() 
      return
    }
    console.log("校验中......")
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