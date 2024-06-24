// pages/register.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sValue:"",//查询的内容
    doctors: []
  },
  
  //查询科室
  // getContext(){
  //   db.collection("notices").where({
  //     "depart": this.data.sValue
  //   }).get().then(res => {
  //     this.setData({
        
  //     })
  //   })
  // },

  // 输入框失去焦点时，筛选科室
  searchDepart: function (e) {
    this.setData({
      sValue: e.detail.value
    })
    db.collection("doctors").where({
      "depart": this.data.sValue
    }).get().then(res => {
      this.setData({
        doctors:res.data
      })
    })
  },

  //通过图片跳转到问诊页面，同时将数据库中相关的数据传到问诊页面
  goToDetail: function (e) {
    let image = e.currentTarget.dataset.image
    wx.navigateTo({
      url: '../interrogation/interrogation?image=' + image,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.cloud.callFunction({
      name: "getDoctors",
      success: (res) => {
        this.setData({
          doctors: res.result.data
        })
      }
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