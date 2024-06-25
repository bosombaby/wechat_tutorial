// index.js
const defaultAvatarUrl =
  "https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0";

Page({
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
    ],
  },
  goLink(e) {
    const link = e.currentTarget.dataset.link;
    console.log("链接跳转", link);
    wx.reLaunch({
      url: link,
    });
  },
});
