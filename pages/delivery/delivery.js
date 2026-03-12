Page({
  data: {
    acceptanceItems: [
      '空气质量检测报告',
      '竣工验收单（电子签字）',
      '水电点位图与隐蔽工程档案',
      '主材设备保修卡'
    ],
    serviceTickets: [
      { no: 'SH20260312001', title: '卫生间门异响', status: '待处理' },
      { no: 'SH20260302007', title: '客厅灯带不亮', status: '已完成' }
    ]
  },
  createTicket() {
    wx.showToast({ title: '已创建报修工单', icon: 'none' });
  }
});
