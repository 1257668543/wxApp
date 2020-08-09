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
    islogin: {
      type: Boolean,
      value: false
    }
  },

  lifetimes: {
    attached: function() {
      console.log(111)
    }
  },
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
    login(){
      var app = getApp()
      app.globalData.isLogin = true
      console.log(app.globalData.isLogin)
      this.attached()
    },  
  }
})
