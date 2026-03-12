const { PROCESS_STEPS, SAMPLE_PROJECT } = require('../../utils/process');

Page({
  data: {
    processSteps: PROCESS_STEPS,
    project: SAMPLE_PROJECT,
    quickEntries: [
      { name: '预约量房', path: '/pages/appointment/appointment' },
      { name: '查看设计', path: '/pages/design/design' },
      { name: '预算报价', path: '/pages/quote/quote' },
      { name: '施工进度', path: '/pages/progress/progress' },
      { name: '验收清单', path: '/pages/acceptance/acceptance' },
      { name: '售后报修', path: '/pages/aftercare/aftercare' }
    ]
  },

  onGoPage(e) {
    const { path } = e.currentTarget.dataset;
    wx.navigateTo({ path });
  }
});
