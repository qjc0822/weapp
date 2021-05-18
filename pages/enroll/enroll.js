// pages/enroll/enroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: "",
    phoneNumber: "",
    password: "",
    passwordAck: "",
  },

  userNameInput: function (e) {
    this.data.userName = e.detail.value
  },
  phoneNumberInput: function (e) {
    this.data.phoneNumber = e.detail.value
  },
  passwordInput: function (e) {
    this.data.password = e.detail.value
  },
  passwordInputAck: function (e) {
    this.data.passwordAck = e.detail.value
  },
  SignIn: function (e) {
    wx.navigateBack({
      delta: 1
    })
  },
  Regist: function (e) {
    var that = this
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (that.data.userName == "") {
      wx.showModal({
        title: '提示一下 ~',
        content: '请输入用户名哦！',
        showCancel: false,
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    } else if (that.data.phoneNumber == "") {
      wx.showModal({
        title: '提示一下 ~',
        content: '请输入您的手机号码哦！',
        showCancel: false,
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    } else if (that.data.phoneNumber.length != 11 | !myreg.test(that.data.phoneNumber)) {
      wx.showModal({
        title: '提示一下 ~',
        content: '请输入正确的手机号哦！',
        showCancel: false,
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    } else if (that.data.password == "") {
      wx.showModal({
        title: '提示一下 ~',
        content: '请输入您的登录密码！',
        showCancel: false,
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    } else if (that.data.password.length <= 8) {
      wx.showModal({
        title: '提示一下 ~',
        content: '请保证密码长度在8位以上呀！',
        showCancel: false,
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    } else if (that.data.password != that.data.passwordAck) {
      wx.showModal({
        title: '提示一下 ~',
        content: '两次输入的密码不一致哦!',
        showCancel: false,
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    } else {
      console.log("注册成功")
      //与服务器交互
      // wx.request({
      //   url: getApp().globalData.server + "", //仅为示例，并非真实的接口地址
      //   data: {
      //     username: that.data.userName,
      //     phone: that.data.phoneNumber,
      //     password: that.data.password,
      //     password_again: that.data.passwordAck,
      //     face_url: getApp().globalData.userInfo.avatarUrl,
      //   },
      //   method: "POST",
      //   header: {
      //     'content-type': "application/x-www-form-urlencoded"
      //   },
      //   success(res) {
      //     console.log(res.data)
      //     if (res.data.error_code == 1) {
      //       wx.showModal({
      //         title: '提示一下 ~',
      //         content: '参数不足哦!',
      //         showCancel: false,
      //         success(res) {
      //           if (res.confirm) {
      //             console.log('用户点击确定')
      //           }
      //         }
      //       })
      //     } else if (res.data.error_code == 2) {
      //       wx.showModal({
      //         title: '提示一下 ~',
      //         content: '两次输入的密码不一致哦!',
      //         showCancel: false,
      //         success(res) {
      //           if (res.confirm) {
      //             console.log('用户点击确定')
      //           }
      //         }
      //       })
      //     } else if (res.data.error_code == 3) {
      //       wx.showModal({
      //         title: '提示一下 ~',
      //         content: '手机号已经被注册啦!',
      //         showCancel: false,
      //         success(res) {
      //           if (res.confirm) {
      //             console.log('用户点击确定')
      //           }
      //         }
      //       })
      //     } else if (res.data.error_code != 0) {
      //       wx.showModal({
      //         title: '哎呀 ~',
      //         content: '出错了呢！' + res.data.msg,
      //         showCancel: false,
      //         success(res) {
      //           if (res.confirm) {
      //             console.log('用户点击确定')
      //           }
      //         }
      //       })
      //     } else if (res.data.error_code == 0) {
      //       getApp().globalData.user=res.data.data
      //       comsole.log(getApp().globalData.user)
      //       wx.showModal({
      //         title: '提示一下 ~',
      //         content: '注册成功！',
      //         showCancel: false,
      //         success(res) {
      //           if (res.confirm) {
      //             console.log('用户点击确定')
      //           }
      //         },
      //         complete: function (res) {
      //           wx.reLaunch({
      //             url: '/pages/About/About' //应当改回跳转主界面
      //           })
      //         }
      //       })
      //     }
      //   },
      //   fail:function(res){
      //     wx.showModal({
      //       title: '哎呀 ~',
      //       content: '网络不在状态呢！',
      //       success(res) {
      //         if (res.confirm) {
      //           console.log('用户点击确定')
      //         }else if(res.cancel){
      //           console.log("用户点击取消")
      //         }
      //       }
      //     })
      //   }
      // })
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