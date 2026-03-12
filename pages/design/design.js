Page({
  data: {
    plans: [
      { name: '现代简约', desc: '以浅色与木饰面为主，强调收纳与动线。', budget: '18-22万' },
      { name: '奶油原木', desc: '柔和配色，适合有小孩家庭。', budget: '20-25万' },
      { name: '轻奢风', desc: '石材与金属搭配，突出质感。', budget: '24-30万' }
    ]
  },

  onViewDetail(e) {
    const { name } = e.currentTarget.dataset;
    wx.showToast({ title: `${name}方案已发送到微信`, icon: 'none' });
  }
});
