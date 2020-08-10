## 慕课堂小程序仿写随手记

# 记录一下实现时遇到的一些主要问题与最后找到的解决方法，以便不久之后使用云开发
 1. 在写用户页user时用到了组件userPage，此时遇到了一个问题，那就是在组件中绑定点击事件时相应的事件也只能写在组件的js文件中，此时虽然可以修改全局中用来判断登录状态的变量isLogin，但是无法做到重新渲染页面，因为组件中缺乏像page中自带的生命周期函数如onLoad()..., 一番摸索之后发现可以在组件js中自己写一个lifetimes函数，具体如下
   lifetimes: {
    attached: function() {
      var app = getApp()
      let islogin = app.globalData.isLogin
      console.log(islogin)
      this.setData({
        islogin
      })
    }
  },
 此attached方法在执行上类似于page中的onLoad()方法，都是发生在页面加载数据时，经过实验证明可以自执行，但不能被其他方法像用this.onLoad()一样调用，初步判断为this指针作用域指向问题，鉴于刚接触组件化，暂时没想到怎么解决
 因此只能另寻它法，此时想到能不能从子组件中向调用它的父页面回调一个数据或者方法，查找之后总结如下:

    1. 需要在子组件使用

        this.triggerEvent('changeName', {
        name: '李四'
        })
    }

        子组件向父组件传递数据使用this.triggerEvent方法，这个方法接受3个参数：this.triggerEvent('myevent', myEventDetail, myEventOption);

        myevent为方法名
        myEventDetail是传到组件外的数据，
        myEventOption为是否冒泡的选项，有三个参数可以设置：
            bubbles     默认false 事件是否冒泡
            composed    默认false 事件是否可以穿越组件边界
            capturePhase    默认false 事件是否拥有捕获阶段
    2. 需要在父组件  引用子组件的地方  进行方法监听

        <my-component bindchangeName="changeName"></my-component>
        子组件triggerEvent触发的事件名，需要和父组件引用子组件处，如上图， bind后的名称相同
        至于bindxxxx = "callbackInFather"   父组件内的监听回调事件 callbackInFather ，方法名可自拟
        满足以上条件  即可将子组件的参数传回父组件
        从该方法的（e） e.detail 中取对应变量值
 triggerEvent()方法很好用，甚至不用返会具体数据，因为我这里在组件中已经修改了全局变量，我只需要返回给父页面一个状态提示重新渲染页面即可，此问题到此也就解决了