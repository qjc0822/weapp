// pages/wxml/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArray:{},
    // dataArray:[
    //   {id:1,info:"xiba",chat:4},
    //   {id:2,info:"who losted a laptop in classrom 308",chat:2},
    //   {id:3,info:"this is a pure test about this system and it is long enough",chat:3},
    //   {id:4,info:"ready!!!",chat:1},
     
    //   {id:3,info:"this is a pure test about this system and it is long enough",chat:3},
    //   {id:3,info:"this is a pure test about this system and it is long enough",chat:3},
    //   {id:3,info:"this is a pure test about this system and it is long enough",chat:3},
    //   {id:3,info:"this is a pure test about this system and it is long enough",chat:3},
    //   {id:3,info:"this is a pure test about this system and it is long enough",chat:3},
    //   {id:3,info:"this is a pure test about this system and it is long enough",chat:3},
    //   {id:3,info:"this is a pure test about this system and it is long enough",chat:3},
    //   {id:3,info:"this is a pure test about this system and it is long enough",chat:3},
    //   {id:3,info:"this is a pure test about this system and it is long enough",chat:3},
    //   {id:3,info:"this is a pure test about this system and it is long enough",chat:3},
    //   {id:3,info:"this is a pure test about this system and it is long enough",chat:3},
    //   {id:3,info:"this is a pure test about this system and it is long enough",chat:3},
    //   {id:3,info:"this is a pure test about this system and it is long enough",chat:3},
    //   {id:3,info:"this is a pure test about this system and it is long enough",chat:3},
    // ],

    showmenu:false
  },
  ididid(){
    wx.navigateTo({
      url: '../index/index',
    })
  },
  showmenu(){
    this.setData({ showmenu:true })
  },
  toNewPost(){
    wx.navigateTo({
      url: '../Commit/Commit',
    })
  },
  onclose(){
    this.setData({ showmenu:false })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self=this;
    wx.request({
      url: getApp().globalData.server + '', //仅为示例，并非真实的接口地址
      data: {
      },
      method:"POST",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
        if(res.data.error_code!=0){
          wx.showModal({
            title: 'SomethingWentWrong',
            content: "gg"+res.data.msg,
            showCancel: false,
            success:function(res){
              if(res.confirm){
                console.log("yes")
              }
              else if(res.cancel){
                console.log("no")
              }
            },
          })
        }
        else if(res.data.error_code==0){
          that.setData({
            dataArray: res.data.data
          })
        }
      }
    })
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