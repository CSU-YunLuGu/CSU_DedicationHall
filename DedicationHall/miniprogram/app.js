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
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    protocolHeaderBackground: "https://s1.ax1x.com/2023/04/10/ppbRHMj.png",
    protocolBottomBackground: "https://s1.ax1x.com/2023/04/10/ppbRqLn.png",
    protocolUnselected: "https://s1.ax1x.com/2023/04/10/ppbRbss.png",
    protocolSelected: "https://s1.ax1x.com/2023/04/10/ppbRTzQ.png"
  }
});
