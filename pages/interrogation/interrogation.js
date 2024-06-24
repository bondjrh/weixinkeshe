// pages/interrogation/interrogation.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    starsBox: [1, 1, 1, 1, 1],
    answer: -1,
    show: true,
    show1: true,
    hidden: true,
    doctors: []
  },

  


  //图文问诊
  payPictureService() {
    wx.showModal({
      title: '诊金',
      content: '10.00',
      complete: (res) => {
        if (res.cancel) {
          console.log("支付取消")
        }

        if (res.confirm) {
          wx.showModal({
            title: '',
            content: '支付成功',
            showCancel: false,

          })
        }
      }
    })
  },


  //视频问诊
  payVideoService() {
    wx.showModal({
      title: '诊金',
      content: '50.00',
      complete: (res) => {
        if (res.cancel) {
          console.log("支付取消")
        }

        if (res.confirm) {
          wx.showModal({
            title: '',
            content: '支付成功',
            showCancel: false,

          })
        }
      }
    })
  },

  //收藏
  collect() {
    if (this.data.hidden == true) {

      this.setData({
        hidden: false
      })
    } else {
      this.setData({
        hidden: true
      })
    }
  },

  //点赞
  dianZan() {
    this.setData({
      show: false
    })
  },


  //取消点赞
  cancelDianZan() {
    this.setData({
      show: true
    })
  },

  //点赞1
  dianZan1() {
    this.setData({
      show1: false
    })
  },

  //取消点赞
  cancelDianZan1() {
    this.setData({
      show1: true
    })
  },

  //评分
  changePic: function (e) {
    let f = this
    console.log(e.currentTarget.dataset)
    var index = e.currentTarget.dataset.index
    console.log(index)
    f.setData({
      answer: index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 查询数据
    db.collection("doctors").where({
      "image": options.image
    }).get().then(res => {
      this.setData({
        doctors: res.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})