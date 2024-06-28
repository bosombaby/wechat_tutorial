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

  openURL(e) {
    const link = e.currentTarget.dataset.link;
    wx.navigateTo({
      url: link,
    });
  },
  onLoad: function (options) {
    console.log("Page Second onLoad", options);

    const a = Number(options.a);
    const b = Number(options.b);
    const eventChannel = this.getOpenerEventChannel();
    if (Object.keys(eventChannel).length) {
      eventChannel.emit("calculateResult", { result: a + b });
      eventChannel.on("multiplication", function (data) {
        console.log("相乘之后的结果", data);
      });
    }
  },
  onReady: function () {
    console.log("Page Second onReady");
  },
  onShow() {
    const pages = getCurrentPages();
    console.log("当前数据", pages);
    console.log("Page Second onShow");
  },
  onHide: function () {
    console.log("Page Second onHide");
  },
  onUnload: function () {
    console.log("Page Second onUnload");
  },
});
