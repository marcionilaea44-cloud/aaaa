Page({
  data: {
    checks: [
      { stage: '水电隐蔽', items: ['强弱电分离', '水管打压测试', '回路标识完整'], completed: false },
      { stage: '泥木验收', items: ['瓷砖空鼓率', '墙地平整度', '木作封边'], completed: false },
      { stage: '竣工验收', items: ['灯具通电', '洁具排水', '门窗五金'], completed: false }
    ]
  },

  onComplete(e) {
    const index = e.currentTarget.dataset.index;
    const key = `checks[${index}].completed`;
    this.setData({ [key]: true });
  }
});
