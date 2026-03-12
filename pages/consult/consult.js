Page({
  data: {
    form: {
      name: '',
      phone: '',
      houseType: '三居',
      budget: '15-20万',
      style: '现代简约'
    },
    houseTypeOptions: ['一居', '两居', '三居', '别墅'],
    budgetOptions: ['10万以内', '10-15万', '15-20万', '20万以上'],
    styleOptions: ['现代简约', '奶油风', '新中式', '北欧'],
    booked: false
  },
  onInput(e) {
    const { field } = e.currentTarget.dataset;
    this.setData({ [`form.${field}`]: e.detail.value });
  },
  onPickerChange(e) {
    const { field, options } = e.currentTarget.dataset;
    const value = this.data[options][e.detail.value];
    this.setData({ [`form.${field}`]: value });
  },
  submitForm() {
    const { name, phone } = this.data.form;
    if (!name || !/^1\d{10}$/.test(phone)) {
      wx.showToast({ title: '请填写正确姓名和手机号', icon: 'none' });
      return;
    }
    this.setData({ booked: true });
    wx.showToast({ title: '预约成功' });
  }
});
