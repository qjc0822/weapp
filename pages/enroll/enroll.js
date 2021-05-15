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
      //插入注册接口
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