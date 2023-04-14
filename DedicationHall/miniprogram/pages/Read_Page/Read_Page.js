// pages/protocol/protocol.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    protocolHeaderBackground: app.globalData.protocolHeaderBackground,
    protocolBottomBackground: app.globalData.protocolBottomBackground,
    protocolUnselected: app.globalData.protocolUnselected,
    protocolSelected: app.globalData.protocolSelected,
    protocol: "协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容",
    isChecked: false,
  },

  tapCheckBox(event){
    this.setData({
      isChecked: !this.data.isChecked
    })
    // console.log(this.data.isChecked)
  },

  toNextPage(event){
    if(this.data.isChecked){
      wx.redirectTo({
        url: '../Sign_Page/Sign_Page'
      })
    }else{
      wx.showToast({
        title: '请先同意本协议',
        icon: 'none',
        duration: 2000//持续的时间
      })
    }
},
  sure:function(){
    if(!this.data.isChecked){
      wx.showModal({
        title: '提示',
        content: '请先仔细阅读协议并勾选同意',
      })
    }
    else{
      wx.reLaunch({
        url: '../Sign_Page/Sign_Page'
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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