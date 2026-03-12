Page({
  data: {
    name: '',
    phone: '',
    area: '',
    date: '2026-03-20',
    timeSlots: ['09:00-11:00', '14:00-16:00', '18:00-20:00'],
    selectedSlot: '09:00-11:00'
  },

  onInput(e) {
    const { field } = e.currentTarget.dataset;
    this.setData({ [field]: e.detail.value });
  },

  onPickDate(e) {
    this.setData({ date: e.detail.value });
  },

  onSelectSlot(e) {
    this.setData({ selectedSlot: e.currentTarget.dataset.slot });
  },

  onSubmit() {
    if (!this.data.name || !this.data.phone) {
      wx.showToast({ title: '请填写姓名和手机号', icon: 'none' });
      return;
    }
    wx.showModal({
      title: '预约成功',
      content: `我们将在${this.data.date} ${this.data.selectedSlot}上门量房。`,
      showCancel: false
    });
  }
});
