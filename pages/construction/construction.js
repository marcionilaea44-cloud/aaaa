Page({
  data: {
    stages: [
      { name: '开工交底', date: '03-02', status: '已完成', progress: 100 },
      { name: '水电隐蔽', date: '03-10', status: '进行中', progress: 70 },
      { name: '泥木施工', date: '03-20', status: '待开始', progress: 0 },
      { name: '油漆安装', date: '03-28', status: '待开始', progress: 0 }
    ],
    updates: [
      '项目经理已上传水电放样照片 12 张',
      '今日工地巡检：强弱电间距符合标准',
      '下一次节点验收：水电验收（业主需到场）'
    ]
  }
});
