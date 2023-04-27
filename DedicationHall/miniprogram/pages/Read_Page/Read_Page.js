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
    protocol: "在大学期间以及未来职场之中，\n我庄严承诺：\n一、认真贯彻执行党的路线、方针、政策，自觉遵守国家各项法律法规，严守道德底线和纪法红线。\n二、树立正确的人生观、价值观、利益观和权力观，时刻树牢廉洁从业意识，提高自我约束力，筑牢反腐倡廉思想防线。\n三、洁身自爱，严以律己，坚决抵制腐败行为和不正之风。不弄虚作假、不以权谋私，清清白白做人，干干净净做事。\n四、弘扬求真务实作风，发扬艰苦奋斗优良传统。牢记“知行合一、经世致用”校训精神，爱岗敬业，忠于职守，诚信做人，廉洁从业。",
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