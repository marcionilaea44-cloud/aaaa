Page({
  data: {
    timeline: [
      { node: '开工交底', date: '2026-02-20', done: true },
      { node: '拆改完成', date: '2026-02-28', done: true },
      { node: '水电施工', date: '2026-03-12', done: false },
      { node: '泥木施工', date: '2026-03-30', done: false },
      { node: '油漆安装', date: '2026-04-20', done: false }
    ]
  },

  onUploadRecord() {
    wx.showToast({ title: '今日施工照片已上传', icon: 'none' });
  }
});
