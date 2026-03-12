Page({
  data: {
    items: [
      { name: '拆改与基础工程', cost: 18000 },
      { name: '水电工程', cost: 32000 },
      { name: '泥木工程', cost: 56000 },
      { name: '油漆工程', cost: 22000 },
      { name: '主材及安装', cost: 68000 },
      { name: '管理与监理费', cost: 12000 }
    ]
  },

  onLoad() {
    const total = this.data.items.reduce((sum, item) => sum + item.cost, 0);
    this.setData({ total });
  },

  onExport() {
    wx.showToast({ title: '报价单已导出PDF', icon: 'none' });
  }
});
