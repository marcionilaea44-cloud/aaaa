Page({
  data: {
    issues: [
      { id: 1, title: '卫生间地漏返水', status: '处理中' },
      { id: 2, title: '卧室门锁松动', status: '已完成' }
    ],
    form: {
      title: '',
      detail: ''
    }
  },

  onInput(e) {
    const { field } = e.currentTarget.dataset;
    this.setData({ [`form.${field}`]: e.detail.value });
  },

  onSubmit() {
    if (!this.data.form.title) {
      wx.showToast({ title: '请填写报修标题', icon: 'none' });
      return;
    }
    wx.showToast({ title: '报修已提交，2小时内响应', icon: 'none' });
    this.setData({ form: { title: '', detail: '' } });
  }
});
