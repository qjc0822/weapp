// pages/Commit/Commit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: "",
  },

  bindTextAreaBlur: function(e) {
    // console.log(e.detail.value)
    this.data.detail = e.detail.value
    // console.log(this.data.detail)
  },

  send: function(e) {
    var that=this

    wx.showLoading({
      title: '加载中',
    })    
    console.log(that.data.detail)

    //与服务器交互
    // wx.request({ 
    //     url: getApp().globalData.server + "", //仅为示例，并非真实的接口地址
    //     data: {
    //       user_id:getApp().globalData.user.user_id,
    //       username:getApp().globalData.user.username,
    //       face_url:getApp().globalData.user.face_url,
    //       content:that.data.detail,
    //     },
    //     method: "POST",
    //     header: {
    //       'content-type': "application/x-www-form-urlencoded"
    //     },
    //     success(res) {
    //       console.log(res.data)
    //      if (res.data.error_code != 0) {
    //         wx.showModal({
    //           title: '哎呀 ~',
    //           content: '出错了呢！' + res.data.msg,
    //           showCancel: false,
    //           success(res) {
    //             if (res.confirm) {
    //               console.log('用户点击确定')
    //             }
    //           }
    //         })
    //       } else if (res.data.error_code == 0) {
    //         wx.showModal({
    //           title: '提示一下 ~',
    //           content: '发布成功！',
    //           showCancel: false,
    //           success(res) {
    //             if (res.confirm) {
    //               console.log('用户点击确定')
    //             }
    //           },
    //           complete: function (res) {
    //             wx.reLaunch({
    //               url: '/pages/About/About' //应当改回跳转主界面
    //             })
    //           }
    //         })
    //       }
    //     },
    //     fail:function(res){
    //       wx.showModal({
    //         title: '哎呀 ~',
    //         content: '网络不在状态呢！',
    //         success(res) {
    //           if (res.confirm) {
    //             console.log('用户点击确定')
    //           }else if(res.cancel){
    //             console.log("用户点击取消")
    //           }
    //         }
    //       })
    //     },
    //     complete:function(){
    //       wx.hideLoading()
    //     }
    //   })
    setTimeout(function () {
       wx.hideLoading()
     }, 2000)
  },

    /**
   * 上传图片方法
   */
  upload: function () {
    let that = this;
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: res => {
        wx.showToast({
          title: '正在上传...',
          icon: 'loading',
          mask: true,
          duration: 1000
        })
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        let tempFilePaths = res.tempFilePaths;

        that.setData({
          tempFilePaths: tempFilePaths
        })
        /**
         * 上传完成后把文件上传到服务器
         */
        var count = 0;
        for (var i = 0, h = tempFilePaths.length; i < h; i++) {
          //上传文件
          /*  wx.uploadFile({
              url: HOST + '地址路径',
              filePath: tempFilePaths[i],
              name: 'uploadfile_ant',
              header: {
                "Content-Type": "multipart/form-data"
              },
              success: function (res) {
                count++;
                //如果是最后一张,则隐藏等待中  
                if (count == tempFilePaths.length) {
                  wx.hideToast();
                }
              },
              fail: function (res) {
                wx.hideToast();
                wx.showModal({
                  title: '错误提示',
                  content: '上传图片失败',
                  showCancel: false,
                  success: function (res) { }
                })
              }
            });*/
        }

      }
    })
  },
  /**
   * 预览图片方法
   */
  listenerButtonPreviewImage: function (e) {
    let index = e.target.dataset.index;
    let that = this;
    console.log(that.data.tempFilePaths[index]);
    console.log(that.data.tempFilePaths);
    wx.previewImage({
      current: that.data.tempFilePaths[index],
      urls: that.data.tempFilePaths,
      //这根本就不走
      success: function (res) {
        //console.log(res);
      },
      //也根本不走
      fail: function () {
        //console.log('fail')
      }
    })
  },
  /**
   * 长按删除图片
   */
  deleteImage: function (e) {
    var that = this;
    var tempFilePaths = that.data.tempFilePaths;
    var index = e.currentTarget.dataset.index;//获取当前长按图片下标
    wx.showModal({
      title: '提示',
      content: '确定要删除此图片吗？',
      success: function (res) {
        if (res.confirm) {
          console.log('确定');
          tempFilePaths.splice(index, 1);
        } else if (res.cancel) {
          console.log('取消');
          return false;
        }
        that.setData({
          tempFilePaths
        });
      }
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