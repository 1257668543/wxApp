// components/userPage/userPage.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    loginStatus: {
      type: Object,
      value: {
        user_pic_url: "",
        user_name: "",
        wrapperList: [
          {
            iconUrl: "",
            desc: ""
          },{
            iconUrl: "",
            desc: ""
          }
        ]
      }
    },
    isLogin: {
      type: Boolean,
      value: false
    }
  },

  // lifetimes: {
  //   attached: function() {
  //     var app = getApp()
  //     let islogin = app.globalData.isLogin
  //     console.log(islogin)
  //     this.setData({
  //       islogin
  //     })
  //   }
  // },

  /**
   * 组件的初始数据
   */
  data: {

  },
  created: function () {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    login() {
      wx.redirectTo({
        url: '/pages/login/login'
     })
      // var app = getApp()
      // app.globalData.isLogin = true
      // // console.log(app.globalData.isLogin)
      // this.triggerEvent('login', {})
    },
    unLogin() {
      var app = getApp()
      app.globalData.isLogin = false
      this.triggerEvent('unLogin', {})
    }  
  }
})
