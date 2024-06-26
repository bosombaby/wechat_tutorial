Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: "【微信小程序培训】",
    courseList: [
      {
        key: "command_component",
        name: "常见组件学习",
        link: "/pages/command_component/index",
      },
      {
        key: "template_render_grammar",
        name: "模板渲染语法",
        link: "/pages/template_render/index",
      },
      {
        key: "event_system",
        name: "事件系统",
        link: "/pages/event_system/index",
      },
      {
        key: "network_request",
        name: "网络请求",
        link: "/pages/network_request/index",
      },
      {
        key: "data_relate",
        name: "数据通信",
        link: "/pages/data_relate/index",
      },
      {
        key: "other_npm",
        name: "外部组件",
        link: "/pages/other_npm/index",
      },
    ],
  },
  goLink(e) {
    const link = e.currentTarget.dataset.link;
    const pages = getCurrentPages();
    console.log("链接跳转", link, pages);
    // wx.reLaunch({
    //   url: link,
    // });
  },
  myNavigateTo(e) {
    const link = e.currentTarget.dataset.link;
    const pages = getCurrentPages();
    console.log("链接跳转", link, pages);
    wx.navigateTo({
      url: link,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("Page Index onLoad", options);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("Page Index onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("Page Index onShow");
    const pages = getCurrentPages();
    console.log("当前数据", pages);
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("Page Index onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("Page Index onUnload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
