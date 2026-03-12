const fullFlow = [
  { key: 'lead', name: '线上咨询', desc: '户型、预算、风格快速评估', done: true },
  { key: 'measure', name: '预约量房', desc: '1v1 设计师上门量房', done: true },
  { key: 'design', name: '方案设计', desc: '平面布局 + 效果图 + 主材建议', done: true },
  { key: 'quote', name: '透明报价', desc: '分项报价清晰，支持增减项确认', done: true },
  { key: 'contract', name: '电子签约', desc: '在线签合同与节点付款', done: false },
  { key: 'build', name: '施工管理', desc: '每日工地播报，关键节点验收', done: false },
  { key: 'deliver', name: '竣工交付', desc: '环保检测、交付清单、质保档案', done: false },
  { key: 'service', name: '售后维保', desc: '报修工单 + 客服回访', done: false }
];

module.exports = {
  fullFlow
};
