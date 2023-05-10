// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发�? res.code 到后台换�? openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    protocolHeaderBackground: "https://s1.ax1x.com/2023/05/11/p9rnBXn.png",
    protocolBottomBackground: "https://s1.ax1x.com/2023/05/11/p9ruI2Q.png",
    protocolUnselected: "https://s1.ax1x.com/2023/04/10/ppbRbss.png",
    protocolSelected: "https://s1.ax1x.com/2023/04/10/ppbRTzQ.png"
  }
});
