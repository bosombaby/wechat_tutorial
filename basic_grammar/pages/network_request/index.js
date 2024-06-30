// pages/network_reuest/index.js
Page({
  getSystemId(){
    wx.login({
      success (res) {
        if (res.code) {
          console.log('code:', res.code)
          //发起网络请求
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session',
            data: {
              appid:'wxee24caea5cae426a', 
              secret:'5175859809cc0cae756213dbf1106e11', 
              js_code:res.code,
              grant_type:'authorization_code' 
            },
            success: res => {
              if (res.data.openid) {
                console.log('成功获取openid:', res.data.openid); // 成功获取到openid
              } else {
                console.error('获取openid失败:', res.data.errmsg); // 没有获取到openid，返回错误信息
              }
            },
            fail: err => {
              console.error('请求失败:', err.errMsg); // 请求失败，返回错误信息
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }
})