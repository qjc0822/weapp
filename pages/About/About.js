// pages/About/About.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timestamp: "2019-03-19 21:27:41",
    content: "捡到XX年级，XX专业，学生号为XXXXXX的校园一卡通。",
    num: 3,
    showdata: {}
  },

  //跳转至发布页面
  Publish: function () {
    wx.navigateTo({
      url: '../Commit/Commit'
    })
  },

  //删除按钮
  // Delete:function() {
  //   //与服务器交互
  //   wx.request({ 
  //       url: getApp().globalData.server + "", //仅为示例，并非真实的接口地址
  //       data: {},
  //       method: "POST",
  //       header: {
  //         'content-type': "application/x-www-form-urlencoded"
  //       },
  //       success(res) {
  //         console.log(res.data)
  //        if (res.data.error_code != 0) {
  //           wx.showModal({
  //             title: '哎呀 ~',
  //             content: '出错了呢！' + res.data.msg,
  //             showCancel: false,
  //             success(res) {
  //               if (res.confirm) {
  //                 console.log('用户点击确定')
  //               }
  //             }
  //           })
  //         } else if (res.data.error_code == 0) {
  //           wx.showModal({
  //             title: '提示一下 ~',
  //             content: '删除成功！',
  //             showCancel: false,
  //             success(res) {
  //               if (res.confirm) {
  //                 console.log('用户点击确定')
  //               }
  //             },
  //             complete: function (res) {
  //               wx.reLaunch({
  //                 url: '/pages/About/About' //应当改回跳转主界面
  //               })
  //             }
  //           })
  //         }
  //       },
  //       fail:function(res){
  //         wx.showModal({
  //           title: '哎呀 ~',
  //           content: '网络不在状态呢！',
  //           success(res) {
  //             if (res.confirm) {
  //               console.log('用户点击确定')
  //             }else if(res.cancel){
  //               console.log("用户点击取消")
  //             }
  //           }
  //         })
  //       },
  //       complete:function(){
  //         wx.hideLoading()
  //       }
  //     })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    与服务器交互
    var that = this
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: getApp().globalData.server + "", //仅为示例，并非真实的接口地址
      data: {
        user_id:getApp().globalData.user_id
      },
      method: "POST",
      header: {
        'content-type': "application/x-www-form-urlencoded"
      },
      success(res) {
        console.log(res.data)
        if (res.data.error_code != 0) {
          wx.showModal({
            title: '哎呀 ~',
            content: '出错了呢！' + res.data.msg,
            showCancel: false,
            success(res) {
              if (res.confirm) {
                console.log('用户点击确定')
              }
            }
          })
        } else if (res.data.error_code == 0) {
            that.setData({
              showdata: res.data.data
            })
            console(that.data.showdata)
        }
      },
      fail: function (res) {
        wx.showModal({
          title: '哎呀 ~',
          content: '网络不在状态呢！',
          success(res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log("用户点击取消")
            }
          }
        })
      },
      complete: function () {
        wx.hideLoading()
      }
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
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