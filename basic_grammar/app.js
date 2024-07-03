import cloud from 'wx-server-sdk'
App({
  onLaunch() {
    wx.cloud.init({
      env:'cloud1-2gooj1ea41d1f3f7',
      traceUser:true
    })
    wx.login({
      success: (res) => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    });
  },
  globalData: {
    userInfo: null,
    appName: "微信小程序教程",
  },
  appName: "微信小程序教程",
});
