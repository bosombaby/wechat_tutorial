// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs", logs);

    // 登录
    wx.login({
      success: (res) => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    });

    console.log("App onLaunch");
  },
  globalData: {
    userInfo: null,
    appName: "微信小程序教程",
  },
  appName: "111",

  onShow() {
    console.log("App onShow");
  },
});
