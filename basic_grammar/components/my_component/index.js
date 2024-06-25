Component({
  options: {
    multipleSlots: true,
  },

  properties: {
    parentName: {
      type: String,
    },
  },
  data: {
    childName: "我的组件",
  },

  lifetimes: {
    created: function () {
      console.log("component created");
    },
    attached: function () {
      console.log("component attached");
    },
    ready: function () {
      console.log("component ready");
    },
    moved: function () {
      console.log("component moved");
    },
    detached: function () {
      console.log("component detached");
    },
    error: function () {
      console.log("component error");
    },
  },
});
