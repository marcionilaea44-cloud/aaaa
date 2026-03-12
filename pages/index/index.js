const { fullFlow } = require('../../utils/flow');

Page({
  data: {
    flow: fullFlow,
    hotline: getApp().globalData.hotline,
    highlights: [
      '30 秒提交需求，客服快速响应',
      '量房后 48 小时输出初版方案',
      '报价、合同、进度、验收全在线可追踪'
    ]
  },
  callHotline() {
    wx.makePhoneCall({
      phoneNumber: getApp().globalData.hotline
    });
  }
});
