Page({
  data: {},
  openDialog() {
    const pages = getCurrentPages();
    console.log("链接跳转", pages);
    wx.showToast({
      title: "打开成功",
      icon: "success",
      duration: 2000,
    });
  },
  handleTap1() {
    console.log("outer");
  },
  handleTap2() {
    console.log("middle");
  },
  handleTap3() {
    console.log("inner");
  },
  handleTap4(event) {
    const name = event.currentTarget.dataset.name;
    const msg = event.currentTarget.dataset.msg;
    console.log("outer", event);
    console.log(name, msg);
  },
});
