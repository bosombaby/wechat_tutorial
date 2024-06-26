Page({
  data: {
    num: 1,
    message: "你好，单向数据绑定",
    arrayList: [
      { id: "1-1", content: "测试数据1" },
      { id: "1-2", content: "测试数据2" },
      { id: "1-3", content: "测试数据3" },
      { id: "1-4", content: "测试数据4" },
      { id: "1-5", content: "测试数据5" },
    ],
    score: 95,
  },
  onShow() {
    const pages = getCurrentPages();
    console.log("当前数据", pages);
  },

  openURL(e) {
    const link = e.currentTarget.dataset.link;
    wx.navigateTo({
      url: link,
    });
  },
});
