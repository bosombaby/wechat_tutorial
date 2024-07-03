const app = getApp();

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
      {
        key: "cloud_develop",
        name: "云开发",
        link: "/pages/cloud_develop/index",
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
});
