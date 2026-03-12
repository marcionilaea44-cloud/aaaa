const PROCESS_STEPS = [
  {
    key: 'lead',
    title: '1. 咨询获客',
    summary: '在线咨询 + 电话沟通，确认需求和预算范围。',
    owner: '客户经理'
  },
  {
    key: 'appointment',
    title: '2. 免费量房',
    summary: '预约时间，上门量房并记录户型痛点。',
    owner: '量房顾问'
  },
  {
    key: 'design',
    title: '3. 方案设计',
    summary: '输出平面布置、风格提案和主材建议。',
    owner: '主案设计师'
  },
  {
    key: 'quote',
    title: '4. 预算报价',
    summary: '明细拆分人工、主材、辅材、管理费。',
    owner: '预算专员'
  },
  {
    key: 'construction',
    title: '5. 施工交付',
    summary: '分阶段施工，节点验收，全程可视化。',
    owner: '项目经理'
  },
  {
    key: 'acceptance',
    title: '6. 竣工验收',
    summary: '水电、瓦木油、安装与竣工验收归档。',
    owner: '监理 + 客户'
  },
  {
    key: 'aftercare',
    title: '7. 售后维保',
    summary: '质保跟踪、报修响应、年度回访。',
    owner: '客服中心'
  }
];

const SAMPLE_PROJECT = {
  projectNo: 'ZX20260312001',
  customerName: '张女士',
  stage: '水电施工',
  progress: 45,
  nextNode: '水电隐蔽验收',
  supervisor: '李工',
  date: '2026-03-12'
};

module.exports = {
  PROCESS_STEPS,
  SAMPLE_PROJECT
};
