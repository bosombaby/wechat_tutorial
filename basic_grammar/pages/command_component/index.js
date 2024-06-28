// pages/command_component/command_component.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    x: 0,
    y: 0,
    isShowPage: false,
    scrollTop: 0,
    scrollToView: "demo1",
  },
  handleAreaMove() {
    if (this.data.x) {
      this.setData({
        x: 0,
        y: 0,
      });
      return;
    }

    this.setData({
      x: 30,
      y: 30,
    });
  },
  openPageContainer() {
    this.setData({
      isShowPage: true,
    });
  },

  scrollToTop() {
    this.setData({
      scrollTop: 0,
    });
  },

  scrollToTarget() {
    this.setData({
      scrollToView: "demo3",
    });
  },

  openURL(e) {
    const link = e.currentTarget.dataset.link;

    wx.navigateTo({
      url: link + "?a=1&b=2",
      events: {
        calculateResult(data) {
          console.log("计算的结果为", data);
        },
      },
      success: function (res) {
        res.eventChannel.emit("multiplication", { result: 100 });
      },
    });
  },
  sendMsg(data) {
    console.log("来自子组件的数据", data);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("Page First onLoad", options);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("Page First onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("Page First onShow");
    const pages = getCurrentPages();
    console.log("当前数据", pages);

    const storageData = wx.getStorageSync("index-data");
    if (storageData) {
      console.log("当前存储的数据", storageData);
    }

    // 获取子组件实例
    const child = this.selectComponent("#my-component");
    console.log("子组件实例", child);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("Page First onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("Page First onUnload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},
});
