const formatTime = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return `${[year, month, day].map(formatNumber).join("/")} ${[
    hour,
    minute,
    second,
  ]
    .map(formatNumber)
    .join(":")}`;
};

const formatNumber = (n) => {
  n = n.toString();
  return n[1] ? n : `0${n}`;
};

const navigateToURL = (url, type = "navigateTo") => {
  switch (type) {
    case "navigateTo":
      wx.navigateTo({
        url,
      });
      break;
    case "navigateBack":
      wx.navigateBack({
        delta: 2,
      });
      break;
    case "redirectTo":
      wx.redirectTo({
        url,
      });
      break;
    case "switchTab":
      wx.switchTab({
        url,
      });
      break;
    case "reLanch":
      wx.reLaunch({
        url,
      });
      break;
    default:
      console.log("Unknown action");
  }

  const pages = getCurrentPages();
  console.log("当前数据", url, pages);
};

export { navigateToURL };
