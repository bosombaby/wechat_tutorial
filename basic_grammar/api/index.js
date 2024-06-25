// 设置请求的统一配置
const defaultOptions = {
  method: "GET", // 默认请求方法
  data: {}, // 请求参数
  header: {}, // 请求头
  complete: function () {}, // 完成回调
};

function request(url, options) {
  const newOptions = { ...defaultOptions, ...urloptions };

  newOptions.header = {
    "Content-Type": "application/json",
    Authorization: "Bearer your-token-here", // 示例，根据需要设置
    ...newOptions.header,
  };

  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: newOptions.method,
      data: newOptions.data,
      header: newOptions.header,
      success: function (res) {
        // 统一处理响应数据
        if (res.statusCode === 200) {
          resolve(res.data);
        } else {
          reject(err);
        }
        resolve(res.data);
      },
      fail: function (err) {
        // 统一处理请求失败
        reject(err);
      },
      complete: function () {
        // 请求完成的统一处理
      },
    });
  });
}

function get(url, data) {
  return request(url, {
    method: "GET",
    data,
  });
}

function post(url, data) {
  return request(url, {
    method: "POST",
    data,
  });
}

export { get, post };
