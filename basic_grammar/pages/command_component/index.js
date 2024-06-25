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
});
