const ICONS = {
  activity:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  dashboard:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h5v6H4V5zM14 4h5a1 1 0 011 1v5h-6V4zM14 14h6v5a1 1 0 01-1 1h-5v-6zM4 14h6v6H5a1 1 0 01-1-1v-5z"/>',
  key:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a4 4 0 11-8 0 4 4 0 018 0zm-4 4v4m0 0H9m2 0h2"/>',
  log:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 12h6m-6 4h4"/>',
  wallet:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>',
  users:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 100-8 4 4 0 000 8z"/>',
  channel:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12a7 7 0 0114 0M2 12a10 10 0 0120 0"/>',
  percent:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 5L5 19M9 7a2 2 0 11-4 0 2 2 0 014 0zm10 10a2 2 0 11-4 0 2 2 0 014 0z"/>',
  receipt:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 14l6-6m-3-3h.01M9 5H7a2 2 0 00-2 2v12l3-1 3 1 3-1 3 1V7a2 2 0 00-2-2h-2"/>',
  gear:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.3 3.3a1 1 0 011.4 0l1 1a1 1 0 00.7.3h1.3a1 1 0 011 1v1.3a1 1 0 00.3.7l1 1a1 1 0 010 1.4l-1 1a1 1 0 00-.3.7v1.3a1 1 0 01-1 1h-1.3a1 1 0 00-.7.3l-1 1a1 1 0 01-1.4 0l-1-1a1 1 0 00-.7-.3H7a1 1 0 01-1-1v-1.3a1 1 0 00-.3-.7l-1-1a1 1 0 010-1.4l1-1a1 1 0 00.3-.7V5a1 1 0 011-1h1.3a1 1 0 00.7-.3l1-1zM12 9a3 3 0 100 6 3 3 0 000-6z"/>',
  handshake:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M8 14l2 2 4-4"/>',
  user:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>',
  box:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16V8M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/>',
  trophy:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 21h8m-4-4v4M6 4h12v3a6 6 0 01-12 0V4zM6 4H4v1a3 3 0 003 3m11-4h2v1a3 3 0 01-3 3"/>',
  coins:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5a2 2 0 012 2v1m4 13a3 3 0 100-6 3 3 0 000 6z"/>',
  trending:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>',
  globe:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zM3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/>',
  settings:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>',
  info:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>',
  phone:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>',
  refund:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V9a2 2 0 00-2-2H6a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2z"/>',
  bell:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2a2 2 0 01-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>',
  file:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM14 2v6h6M9 13h6M9 17h6"/>',
  code:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>',
  message:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h8M8 8h8m-8 8h5m-7 4h9a4 4 0 004-4V6a4 4 0 00-4-4H6a4 4 0 00-4 4v10a4 4 0 004 4z"/>',
  question:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>',
};

// 加密展示辅助函数
function maskStr(type, val) {
  if (!val || val === '—' || val === '未设置') return val;
  if (type === 'phone') return val.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
  if (type === 'email') return val.replace(/^(.{1,2})(.*)(@.*)$/, (_,a,b,c) => a+'****'+c);
  if (type === 'bank' || type === 'account') return val.length > 8 ? val.slice(0,4)+' **** **** '+val.slice(-4) : '****';
  return val;
}
function encField(type, val) {
  val = val || '—';
  if (val === '—' || val === '未设置') return '<span style="font-weight:500;font-size:13px">'+val+'</span>';
  const encrypted = maskStr(type, val);
  const safeVal = val.replace(/"/g,'&quot;');
  return '<span class="enc-field" style="display:inline-flex;align-items:center" data-type="'+type+'" data-val="'+safeVal+'"><span class="enc-val" style="font-weight:500;font-size:13px;word-break:break-all">'+encrypted+'</span><span class="enc-toggle" onclick="toggleEnc(this)" style="cursor:pointer;display:inline-flex;margin-left:5px;vertical-align:middle;flex-shrink:0;opacity:0.6" title="点击显示/隐藏"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></span></span>';
}
function toggleEnc(el) {
  const container = el.closest('.enc-field');
  const valSpan = container.querySelector('.enc-val');
  const dataVal = container.dataset.val;
  if (valSpan.classList.contains('revealed')) {
    valSpan.textContent = maskStr(container.dataset.type, dataVal);
    valSpan.classList.remove('revealed');
  } else {
    valSpan.textContent = dataVal;
    valSpan.classList.add('revealed');
  }
}

const MODELS = ['ali-qwen-2-0-260128','ali-qwen-2-0-fast-260128','ali-qwen-2-0-mini-260615'];
const MODEL_SHORT = {'ali-qwen-2-0-260128':'qwen2.5-72b','ali-qwen-2-0-fast-260128':'qwen-plus','ali-qwen-2-0-mini-260615':'qwen-turbo'};
const MODEL_RATIO = {'ali-qwen-2-0-260128':23,'ali-qwen-2-0-fast-260128':18.5,'ali-qwen-2-0-mini-260615':11.5};

// 模型广场数据
const MARKET_MODELS = [
  {id:1,name:'qwen2.5-72b',modelId:'ali-qwen2.5-72b-v1',version:'v1.0',vendor:'阿里',vendorSymbol:'A',vendorColor:'#6366F1',type:'文本对话',desc:'通义千问旗舰模型，支持长上下文理解和复杂推理，适用于对话、写作、代码生成等场景',tags:[{t:'价格下调',c:'b-success'}],context:'128K',maxInput:'122K',maxOutput:'8K',ratio:23,price:{input:0.0024,output:0.0096,unit:'1K tokens',region:'华北2（北京）'}},
  {id:2,name:'qwen-plus',modelId:'ali-qwen-plus-v1',version:'v1.2',vendor:'阿里',vendorSymbol:'A',vendorColor:'#6366F1',type:'文本对话',desc:'通义千问增强版，在速度和质量间取得平衡，适合大规模日常调用',tags:[],context:'128K',maxInput:'122K',maxOutput:'8K',ratio:18.5,price:{input:0.0008,output:0.002,unit:'1K tokens',region:'华北2（北京）'}},
  {id:3,name:'qwen-turbo',modelId:'ali-qwen-turbo-v1',version:'v1.0',vendor:'阿里',vendorSymbol:'A',vendorColor:'#6366F1',type:'文本对话',desc:'通义千问极速版，响应速度快、成本低，适合对延迟敏感的场景',tags:[{t:'即将下架',c:'b-danger'}],context:'8K',maxInput:'7K',maxOutput:'2K',ratio:11.5,price:{input:0.0003,output:0.0006,unit:'1K tokens',region:'华北2（北京）'}},
  {id:4,name:'qwen-vl-max',modelId:'ali-qwen-vl-max-v1',version:'v1.0',vendor:'阿里',vendorSymbol:'A',vendorColor:'#6366F1',type:'多模态',desc:'通义千问视觉语言模型，支持图片理解、图文对话、OCR识别等能力',tags:[{t:'新上线',c:'b-info'}],context:'32K',maxInput:'30K',maxOutput:'4K',ratio:35,price:{input:0.0016,output:0.004,unit:'1K tokens',region:'华北2（北京）'}},
  {id:5,name:'wanx-v1',modelId:'ali-wanx-v1',version:'v1.0',vendor:'阿里',vendorSymbol:'A',vendorColor:'#6366F1',type:'图片生成',desc:'通义万相文生图模型，根据文字描述生成高质量图片，支持多种艺术风格',tags:[],context:'-',maxInput:'500字',maxOutput:'1张',ratio:50,price:{perImage:0.2,unit:'张',region:'华北2（北京）'}},
  {id:6,name:'glm-4-plus',modelId:'zhipu-glm-4-plus-v1',version:'v4.0',vendor:'智谱',vendorSymbol:'Z',vendorColor:'#3B82F6',type:'文本对话',desc:'智谱GLM-4旗舰模型，中英双语能力强，支持工具调用和代码执行',tags:[],context:'128K',maxInput:'124K',maxOutput:'4K',ratio:30,price:{input:0.03,output:0.06,unit:'1K tokens'}},
  {id:7,name:'glm-4-flash',modelId:'zhipu-glm-4-flash-v1',version:'v4.0',vendor:'智谱',vendorSymbol:'Z',vendorColor:'#3B82F6',type:'文本对话',desc:'智谱GLM-4轻量版，免费调用，适合开发和测试场景',tags:[{t:'免费',c:'b-success'}],context:'128K',maxInput:'124K',maxOutput:'4K',ratio:0,price:{input:0,output:0,unit:'1K tokens'}},
  {id:8,name:'cogview-3',modelId:'zhipu-cogview-3-v1',version:'v3.0',vendor:'智谱',vendorSymbol:'Z',vendorColor:'#3B82F6',type:'图片生成',desc:'智谱CogView文生图模型，支持中文提示词，生成图片清晰细腻',tags:[],context:'-',maxInput:'500字',maxOutput:'1张',ratio:40,price:{perImage:0.4,unit:'张'}},
  {id:9,name:'minimax-abab6.5',modelId:'minimax-abab6.5-v1',version:'v6.5',vendor:'MiniMax',vendorSymbol:'M',vendorColor:'#8B5CF6',type:'文本对话',desc:'MiniMax大语言模型，擅长创意写作和角色扮演对话',tags:[{t:'价格上调',c:'b-warning'}],context:'245K',maxInput:'240K',maxOutput:'8K',ratio:25,price:{input:0.025,output:0.05,unit:'1K tokens'}},
  {id:10,name:'minimax-voice',modelId:'minimax-voice-v1',version:'v1.0',vendor:'MiniMax',vendorSymbol:'M',vendorColor:'#8B5CF6',type:'语音合成',desc:'MiniMax语音合成模型，支持多种音色和情感表达，语音自然流畅',tags:[],context:'-',maxInput:'500字',maxOutput:'1段',ratio:30,price:{perChar:0.03,unit:'千字'}},
  {id:11,name:'embedding-v2',modelId:'ali-embedding-v2',version:'v2.0',vendor:'阿里',vendorSymbol:'A',vendorColor:'#6366F1',type:'向量化',desc:'通义文本向量化模型，将文本转为高维向量，用于语义搜索和推荐',tags:[],context:'2K',maxInput:'2K',maxOutput:'1536维',ratio:5,price:{input:0.0007,output:0,unit:'1K tokens',region:'华北2（北京）',note:'仅输入计费'}},
  {id:12,name:'bge-reranker',modelId:'zhipu-bge-reranker-v1',version:'v1.0',vendor:'智谱',vendorSymbol:'Z',vendorColor:'#3B82F6',type:'重排序',desc:'BGE重排序模型，对检索结果进行二次排序，提升搜索准确率',tags:[],context:'4K',maxInput:'4K',maxOutput:'分数',ratio:8,price:{input:0.008,output:0.008,unit:'1K tokens'}},
  {id:13,name:'wan2.6-t2v',modelId:'qwen/wan2.6-t2v',version:'v2.6',vendor:'阿里',vendorSymbol:'A',vendorColor:'#6366F1',type:'视频生成',desc:'通义万相2.6文生视频模型，支持文本生成高质量视频，支持多镜头叙事',tags:[{t:'新上线',c:'b-info'}],context:'-',maxInput:'1500字',maxOutput:'15秒',ratio:200,price:{perSecond:0.72,unit:'秒',region:'华北2（北京）',resolution:'720P'}},
];

const MODEL_TYPES = ['全部模型','文本对话','多模态','图片生成','语音合成','向量化','重排序','视频生成'];
const DISCOUNT_THRESHOLD = {'ali-qwen-2-0-260128':0.80,'ali-qwen-2-0-fast-260128':0.75,'ali-qwen-2-0-mini-260615':0.70};
const QUOTA_PER_UNIT = 500000;

const NAV = {
  admin: [
    {label:'常规', items:[
      {t:'数据看板',p:'overview',i:'activity'},
      {t:'仪表盘',p:'dashboard',i:'dashboard'},
      {t:'使用日志',p:'logs',i:'log'},
      {t:'模型广场',p:'model-market',i:'box'},
      {t:'总排行榜',p:'rankings',i:'trophy'},
      {t:'总排行榜-v2',p:'rankings-v2',i:'trophy'},
    ]},
    {label:'管理', items:[
      {t:'供应商',p:'channels',i:'channel'},
      {t:'代理',p:'agents',i:'handshake'},
      {t:'模型配置',p:'discount-threshold',i:'percent'},
      {t:'财务中心',p:'recharge-settings',i:'settings'},
      {t:'充值工单',p:'topup-admin',i:'receipt',badge:2},
      {t:'联系工单',p:'contact-reqs',i:'phone'},
      {t:'消息通知',p:'admin-notif',i:'bell',badge:5},
    ]},
  ],
  agent: [
    {label:'常规', items:[
      {t:'数据看板',p:'agent-overview',i:'activity'},
      {t:'仪表盘',p:'agent-dashboard',i:'dashboard'},
      {t:'使用日志',p:'agent-logs',i:'log'},
      {t:'模型广场',p:'agent-model-market',i:'box'},
      {t:'总排行榜',p:'agent-rankings',i:'trophy'},
      {t:'总排行榜-v2',p:'agent-rankings-v2',i:'trophy'},
    ]},
    {label:'管理', items:[
      {t:'名下用户',p:'agent-users',i:'users'},
      {t:'充值记录',p:'agent-topup',i:'receipt'},
      {t:'联系工单',p:'agent-contact',i:'phone'},
      {t:'消息通知',p:'agent-notif',i:'bell',badge:3},
    ]},
  ],
  user: [
    {label:'常规', items:[
      {t:'数据看板',p:'user-overview',i:'activity'},
      {t:'仪表盘',p:'user-dashboard',i:'dashboard'},
      {t:'使用日志',p:'user-logs',i:'log'},
      {t:'模型广场',p:'user-model-market',i:'box'},
      {t:'总排行榜',p:'user-rankings',i:'trophy'},
      {t:'总排行榜-v2',p:'user-rankings-v2',i:'trophy'},
    ]},
    {label:'个人', items:[
      {t:'API Keys',p:'tokens',i:'key'},
      {t:'充值',p:'wallet',i:'wallet'},
      {t:'充值记录',p:'my-topup',i:'receipt'},
      {t:'账单',p:'bills',i:'file'},
      {t:'发票管理',p:'invoices',i:'file'},
      {t:'联系工单',p:'my-contact',i:'phone'},
      {t:'消息通知',p:'user-notif',i:'bell',badge:3},
    ]},
  ],
};

const ROLE_INFO = {
  admin:{name:'root',role:'超级管理员',avatar:'R'},
  agent:{name:'partner_lisi',role:'代理（合作商）',avatar:'L'},
  user:{name:'zhangsan',role:'普通用户',avatar:'Z'},
};

const DISC_DATA = [
  {id:1,user:'zhangsan',uid:2,agent:'partner_lisi',disc:{'ali-qwen-2-0-260128':0.85,'ali-qwen-2-0-fast-260128':1.00,'ali-qwen-2-0-mini-260615':0.90}},
  {id:2,user:'wangwu',uid:3,agent:'partner_lisi',disc:{'ali-qwen-2-0-260128':0.80,'ali-qwen-2-0-fast-260128':0.95,'ali-qwen-2-0-mini-260615':null}},
  {id:3,user:'zhaoliu',uid:4,agent:'直营',disc:{'ali-qwen-2-0-260128':1.00,'ali-qwen-2-0-fast-260128':1.00,'ali-qwen-2-0-mini-260615':1.00}},
  {id:4,user:'qianqi',uid:6,agent:'partner_wang',disc:{'ali-qwen-2-0-260128':0.75,'ali-qwen-2-0-fast-260128':0.90,'ali-qwen-2-0-mini-260615':0.85}},
];

const ORDERS = [
  {id:'T20260811001',serialNo:'LS20260811001',type:'scan',user:'zhangsan',agent:'partner_lisi',agentCompany:'李四科技有限公司',amount:500,time:'2026-08-11 14:35:00',payTime:'2026-08-11 14:30:00',arriveTime:'—',payer:'张三',serial:'WX202608111430001',companyPay:true,payNote:'本笔款项由【个人】代【深圳星辰科技有限公司（全称）】支付',note:'充值测试',files:['微信账单截图.jpg'],status:'pending'},
  {id:'T20260811002',serialNo:'LS20260811002',type:'scan',user:'wangwu',agent:'partner_lisi',agentCompany:'李四科技有限公司',amount:200,time:'2026-08-11 13:18:00',payTime:'2026-08-11 13:15:00',arriveTime:'—',payer:'王五',serial:'ZFB202608111315002',companyPay:false,payNote:'',note:'',files:[],status:'pending'},
  {id:'T20260811003',serialNo:'LS20260811003',type:'transfer',user:'zhaoliu',agent:'直营',agentCompany:'直营用户',amount:1000,time:'2026-08-11 10:45:00',payTime:'2026-08-11 10:42:00',arriveTime:'2026-08-11 11:30',reviewRemark:'已核查对公转账，金额一致，已到账',reviewTime:'2026-08-11 11:30',payer:'深圳市前海科技有限公司',actNo:'6222 0212 3456 7890 123',bank:'中国工商银行深圳南山支行',bankCode:'102584000123',serial:'BK202608111042003',note:'8月充值款',files:['银行回单截图.jpg'],status:'completed'},
  {id:'T20260810098',serialNo:'LS20260810098',type:'scan',user:'qianqi',agent:'partner_wang',agentCompany:'王总商贸有限公司',amount:300,time:'2026-08-10 16:25:00',payTime:'2026-08-10 16:20:00',arriveTime:'—',reviewRemark:'未查询到该笔转账记录，请核实后重新提交',reviewTime:'2026-08-10 16:40',payer:'钱七',serial:'WX202608101620098',companyPay:false,payNote:'',note:'',files:[],status:'rejected'},
];

const ST = {pending:{l:'待处理',c:'b-warning'},reviewing:{l:'核查中',c:'b-info'},completed:{l:'已完成',c:'b-success'},rejected:{l:'已拒绝',c:'b-danger'},cancelled:{l:'已取消',c:'b-neutral'}};

// Agent data with user activity status
const AGENTS = [
  {id:5,name:'partner_lisi',company:'李四科技有限公司',contact:'李四',phone:'138****8888',users:2,activeUsers:2,used:1200000,cost:900000,status:1,createdAt:'2026-07-15'},
  {id:7,name:'partner_wang',company:'王总商贸有限公司',contact:'王总',phone:'139****6666',users:1,activeUsers:0,used:320000,cost:380000,status:1,createdAt:'2026-07-20'},
  {id:8,name:'partner_zhao',company:'赵氏传媒集团',contact:'赵姐',phone:'137****5555',users:3,activeUsers:2,used:580000,cost:435000,status:1,createdAt:'2026-08-01'},
];

let curRole='admin', curPage='overview', marketDetailModelId=null, marketDetailBack='model-market';
let loginRole='admin';
let userAgreementAccepted = false;
let overviewFilterParams = { timeRange: '近30天', model: '全部模型' };
let logInitialTab = null;

function showForgot(){
  document.getElementById('login-page').style.display='none';
  document.getElementById('forgot-page').style.display='flex';
}
function backToLogin(){
  document.getElementById('forgot-page').style.display='none';
  document.getElementById('login-page').style.display='flex';
}
var _codeTimer=null;
function sendCode(){
  const email=document.getElementById('forgot-email').value.trim();
  if(!/^[\w.+-]+@[\w-]+(\.[\w-]+)+$/.test(email)){showToast('提示','请输入正确的邮箱地址');return;}
  const btn=document.getElementById('send-code-btn');
  if(!btn || btn.disabled) return;
  let n=60;
  btn.disabled=true;
  _codeTimer=setInterval(()=>{
    n--;
    if(n<=0){clearInterval(_codeTimer);btn.disabled=false;btn.innerHTML='获取验证码';btn.style.opacity=1;}
    else{btn.innerHTML=n+'s';btn.style.opacity=0.6;}
  },1000);
  showToast('验证码已发送',`验证码已发送至 ${email}，请注意查收`);
}
function resetPassword(){
  const email=document.getElementById('forgot-email').value.trim();
  const code=document.getElementById('forgot-code').value.trim();
  const p1=document.getElementById('forgot-newpass').value;
  const p2=document.getElementById('forgot-confirmpass').value;
  if(!/^[\w.+-]+@[\w-]+(\.[\w-]+)+$/.test(email)){showToast('提示','请输入正确的邮箱地址');return;}
  if(!code){showToast('提示','请输入邮箱验证码');return;}
  if(p1.length<8||p1.length>18){showToast('提示','密码需为 8-18 位');return;}
  const typeCnt=[/\d/.test(p1),/[a-zA-Z]/.test(p1),/[^0-9a-zA-Z]/.test(p1)].filter(Boolean).length;
  if(typeCnt<2){showToast('提示','密码需包含数字、字母、符号中的至少 2 种');return;}
  if(p1!==p2){showToast('提示','两次输入的密码不一致');return;}
  backToLogin();
  showToast('密码已重置','密码修改成功，请使用新密码登录');
}

function doLogin(role){
  if(role) loginRole = role;
  curRole = loginRole;
  const roleLabel = {admin:'运营',agent:'代理',user:'用户'}[curRole];
  const loginPage = document.getElementById('login-page');
  const mainApp = document.getElementById('main-app');
  if(loginPage) loginPage.style.display = 'none';
  if(mainApp) mainApp.style.display = 'flex';
  renderNav();
  // 用户角色首次登录需同意协议
  if(curRole==='user' && !userAgreementAccepted){
    showAgreementModal(()=>{
      userAgreementAccepted = true;
      go('user-overview');
      setTimeout(()=>showToast('登录成功',`欢迎回来，${roleLabel}角色`),300);
    });
    return;
  }
  go(curRole==='admin'?'overview':curRole==='agent'?'agent-overview':'user-overview');
  setTimeout(()=>showToast('登录成功',`欢迎回来，${roleLabel}角色`),300);
}

function showAgreementModal(onConfirm){
  const agreements=[
    {key:'user',title:'用户协议',icon:'📄',sections:[
      {title:'一、服务说明',content:'启迪词元云管理平台（以下简称"本平台"）是由启迪水联网（银川）科技有限公司运营的AI大模型API管理服务平台。用户在使用本平台提供的各项服务之前，应当仔细阅读本协议的全部内容。'},
      {title:'二、账号注册与使用',content:'1. 用户需提供真实、准确、完整的个人/企业信息进行注册。\n2. 用户应妥善保管账号和密码，对账号下的所有活动承担责任。\n3. 本平台服务仅允许合法使用，禁止利用本平台服务从事任何违法违规活动。'},
      {title:'三、服务费用',content:'本平台按照公布的价格标准收取API调用费用，具体价格以平台公示为准。用户应确保账户余额充足，因余额不足导致的服务中断由用户自行承担。'},
      {title:'四、服务变更与终止',content:'本平台保留随时调整、中断或终止服务的权利，调整将提前在平台公示。'},
    ]},
    {key:'service',title:'产品服务协议',icon:'🛡️',sections:[
      {title:'一、服务内容',content:'本平台为用户提供AI大模型API调用服务，包括但不限于文本生成、图片生成、视频生成等模型的调用能力，以及相关的账户管理、用量统计、账单查询等配套服务。'},
      {title:'二、服务质量',content:'1. 本平台将尽合理努力保障服务的稳定性和可用性，但不对服务的绝对可用性作出承诺。\n2. 因不可抗力、第三方服务故障等原因导致的服务中断，本平台不承担责任。'},
      {title:'三、使用规范',content:'用户不得利用本平台服务生成违法、侵权、虚假、有害的内容，不得绕过平台的安全限制机制。违规使用将导致账号封禁并保留追究法律责任的权利。'},
      {title:'四、知识产权',content:'用户对其使用本平台服务生成的内容享有相应权利，但应遵守相关法律法规及模型提供方的使用条款。'},
    ]},
    {key:'privacy',title:'法律声明及隐私权政策',icon:'🔒',sections:[
      {title:'一、法律声明',content:'1. 本平台的所有内容（包括但不限于文字、图片、代码、架构设计）均受法律保护，未经授权不得复制、修改或传播。\n2. 用户使用本平台服务应遵守中华人民共和国相关法律法规，不得从事任何违法活动。'},
      {title:'二、信息收集',content:'为提供服务，本平台会收集用户的基本注册信息（账号、联系方式等）、使用记录（API调用日志、消费记录等）以及必要的设备信息。'},
      {title:'三、信息使用与保护',content:'1. 本平台仅在必要范围内使用用户信息，用于提供服务、账单核算、安全防护等目的。\n2. 本平台采用行业标准的安全技术措施保护用户信息安全，防止信息泄露、篡改或丢失。\n3. 未经用户同意，本平台不会向第三方披露用户个人信息，法律法规要求的情形除外。'},
      {title:'四、Cookie使用',content:'本平台使用Cookie和类似技术以提升用户体验，用户可通过浏览器设置管理Cookie偏好。'},
    ]},
  ];
  const checked = {user:false,service:false,privacy:false};
  let activeTab = 0;
  const checkedCount = Object.values(checked).filter(Boolean).length;
  const progress = (checkedCount / 3) * 100;

  const renderContent = (agreement) => {
    return agreement.sections.map(sec => `
      <div style="margin-bottom:22px">
        <div style="font-size:15px;font-weight:600;color:var(--foreground);margin-bottom:10px;display:flex;align-items:center;gap:10px">
          <span style="width:4px;height:16px;background:var(--primary);border-radius:2px;flex-shrink:0"></span>
          ${sec.title}
        </div>
        <div style="font-size:14px;line-height:2;color:var(--muted-foreground);padding-left:14px">
          ${sec.content.split('\n').map(p => `<p style="margin:0 0 8px 0">${p}</p>`).join('')}
        </div>
      </div>
    `).join('');
  };

  const render=()=>{
    const allChecked = checked.user && checked.service && checked.privacy;
    const current = agreements[activeTab];
    const checkedCount = Object.values(checked).filter(Boolean).length;
    const progress = (checkedCount / 3) * 100;
    showModal(`<div style="width:900px;max-width:94vw;max-height:85vh;display:flex;flex-direction:column;overflow:hidden">
      <!-- 头部装饰 -->
      <div style="padding:32px 40px 24px;background:linear-gradient(135deg, color-mix(in srgb, var(--primary) 8%, transparent) 0%, color-mix(in srgb, var(--primary) 2%, transparent) 100%);position:relative;overflow:hidden;flex-shrink:0">
        <div style="position:absolute;top:-40px;right:-40px;width:160px;height:160px;border-radius:50%;background:radial-gradient(circle, color-mix(in srgb, var(--primary) 12%, transparent) 0%, transparent 70%)"></div>
        <div style="position:absolute;bottom:-30px;left:40%;width:100px;height:100px;border-radius:50%;background:radial-gradient(circle, color-mix(in srgb, var(--primary) 8%, transparent) 0%, transparent 70%)"></div>
        <div style="position:relative;display:flex;align-items:center;gap:16px">
          <div style="width:52px;height:52px;border-radius:14px;background:linear-gradient(135deg, var(--primary) 0%, color-mix(in srgb, var(--primary) 70%, var(--accent)) 100%);display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:0 6px 20px color-mix(in srgb, var(--primary) 30%, transparent)">
            📜
          </div>
          <div>
            <h3 style="font-size:19px;font-weight:600;color:var(--foreground);margin:0">用户协议与隐私政策</h3>
            <p style="font-size:13px;color:var(--muted-foreground);margin:5px 0 0 0">请仔细阅读并同意以下协议后继续使用平台服务</p>
          </div>
        </div>
      </div>
      <!-- Tab 导航 -->
      <div style="padding:0 32px 16px;background:var(--card);flex-shrink:0">
        <div style="display:flex;gap:6px;padding:5px;background:var(--muted);border-radius:12px;margin-top:-14px;position:relative;z-index:2;box-shadow:0 2px 10px rgba(0,0,0,0.05)">
          ${agreements.map((a,i)=>`
            <div class="ag-tab-btn cursor-pointer" data-index="${i}"
                 style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px;padding:10px 12px;border-radius:10px;font-size:13px;font-weight:500;transition:all 0.2s ease;${activeTab===i?'background:var(--card);color:var(--primary);box-shadow:0 1px 4px rgba(0,0,0,0.08)':'color:var(--muted-foreground)'}"
                 onclick="switchAgreementTab(${i})">
              <span style="font-size:15px">${checked[a.key]?'✓':a.icon}</span>
              <span style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${a.title}</span>
            </div>
          `).join('')}
        </div>
      </div>
      <!-- 内容区域（可滚动） -->
      <div style="padding:0 40px 20px;flex:1;min-height:0;overflow-y:auto;background:var(--card)" id="ag-content-area">
        <div style="background:color-mix(in srgb, var(--muted) 50%, transparent);border-radius:14px;padding:24px 28px;border:1px solid var(--border)">
          ${renderContent(current)}
        </div>
      </div>
      <!-- 底部固定区域：勾选 + 进度 + 按钮 -->
      <div style="padding:16px 40px 24px;background:var(--card);border-top:1px solid var(--border);flex-shrink:0">
        <!-- 勾选 -->
        <div style="margin-bottom:14px">
          <label style="display:flex;align-items:center;gap:12px;cursor:pointer" class="ag-check-label">
            <div class="ag-checkbox-wrapper" style="position:relative;width:20px;height:20px;flex-shrink:0">
              <input type="checkbox" id="ag-check-current" ${checked[current.key]?'checked':''} 
                     style="position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;margin:0"
                     onchange="toggleAgreementCheck('${current.key}',this.checked)">
              <div class="ag-checkbox-box" style="width:20px;height:20px;border-radius:6px;border:1.5px solid ${checked[current.key]?'var(--primary)':'var(--border)'};background:${checked[current.key]?'var(--primary)':'transparent'};display:flex;align-items:center;justify-content:center;transition:all 0.2s ease">
                ${checked[current.key]?'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>':''}
              </div>
            </div>
            <span style="font-size:14px;color:var(--muted-foreground)">我已阅读并同意<span style="color:var(--foreground);font-weight:500">《${current.title}》</span></span>
          </label>
        </div>
        <!-- 进度条 -->
        <div style="margin-bottom:14px">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
            <span style="font-size:12px;color:var(--muted-foreground)">协议签署进度</span>
            <span style="font-size:12px;font-weight:600;color:var(--primary)">${checkedCount} / 3 项已同意</span>
          </div>
          <div style="height:6px;background:var(--muted);border-radius:3px;overflow:hidden">
            <div style="height:100%;width:${progress}%;background:linear-gradient(90deg, var(--primary), color-mix(in srgb, var(--primary) 70%, var(--accent)));border-radius:3px;transition:width 0.3s ease"></div>
          </div>
        </div>
        <!-- 按钮组 -->
        <div style="display:flex;align-items:center;justify-content:space-between;gap:12px">
          <button class="btn btn-primary btn-sm" onclick="closeModal()">取消</button>
          <button id="ag-confirm-btn" onclick="confirmAgreements()" 
                  style="padding:9px 26px;font-size:14px;font-weight:500;border-radius:10px;border:none;background:${allChecked?'linear-gradient(135deg, var(--primary), color-mix(in srgb, var(--primary) 70%, var(--accent)))':'var(--muted)'};color:${allChecked?'white':'var(--muted-foreground)'};cursor:${allChecked?'pointer':'not-allowed'};transition:all 0.2s;box-shadow:${allChecked?'0 2px 10px color-mix(in srgb, var(--primary) 25%, transparent)':'none'}"
                  ${allChecked?'':'disabled'}
                  onmouseover="${allChecked?"this.style.transform='translateY(-1px)';this.style.boxShadow='0 4px 14px color-mix(in srgb, var(--primary) 30%, transparent)'":''}"
                  onmouseout="${allChecked?"this.style.transform='translateY(0)';this.style.boxShadow='0 2px 10px color-mix(in srgb, var(--primary) 25%, transparent)'":''}">同意并继续</button>
        </div>
      </div>
    </div>`);
    // 调整弹窗容器大小，覆盖默认 modal-box 的限制
    setTimeout(()=>{
      const modalBox = document.querySelector('#modal-container .modal-box');
      if(modalBox){
        modalBox.style.maxWidth = 'none';
        modalBox.style.width = 'auto';
        modalBox.style.maxHeight = 'none';
        modalBox.style.overflow = 'visible';
      }
    },0);
  };
  window._agreementState = {checked,onConfirm,render,agreements,setActiveTab:(i)=>{activeTab=i;}};
  render();
}
function switchAgreementTab(i){
  if(window._agreementState){
    window._agreementState.setActiveTab(i);
    window._agreementState.render();
  }
}
function toggleAgreementCheck(key,val){
  if(window._agreementState){
    window._agreementState.checked[key]=val;
    window._agreementState.render();
  }
}
function confirmAgreements(){
  if(!window._agreementState) return;
  const s=window._agreementState;
  if(!s.checked.user || !s.checked.service || !s.checked.privacy) return;
  closeModal();
  if(s.onConfirm) s.onConfirm();
}

function logout(){
  const loginPage = document.getElementById('login-page');
  const mainApp = document.getElementById('main-app');
  if(loginPage) loginPage.style.display = 'flex';
  if(mainApp) mainApp.style.display = 'none';
  userAgreementAccepted = false;
}

const MESSAGES = [
  // 模型消息 - 所有角色可见
  {id:1,type:'model',roles:['admin','agent','user'],title:'新模型已上线',content:'通义千问 qwen2.5-72b 模型已上线，支持更长上下文和更精准的推理能力，欢迎体验。',time:'2026-08-13 10:30:00',read:false},
  {id:2,type:'model',roles:['admin','agent','user'],title:'模型价格调整通知',content:'自 2026-08-15 起，qwen-turbo 模型调用价格下调 15%，届时将自动生效，无需额外操作。',time:'2026-08-12 16:20:00',read:false},
  {id:3,type:'model',roles:['admin','agent','user'],title:'模型维护通知',content:'qwen-plus 模型将于 2026-08-14 凌晨 02:00-04:00 进行例行维护，期间该模型可能短暂不可用，请提前做好安排。',time:'2026-08-12 09:15:00',read:true},
  {id:7,type:'model',roles:['admin','agent','user'],title:'模型下线预告',content:'qwen2.5-72b 旧版本（v240815）将于 2026-08-20 正式下线，请尽快迁移至新版本，如有疑问请联系客服。',time:'2026-08-10 14:00:00',read:true},
  // 充值消息 - 代理/用户端：充值到账提醒
  {id:4,type:'recharge',roles:['agent','user'],title:'充值到账通知',content:'您的充值工单 T20260811003（¥1,000.00）已核查通过，金额已到账，当前余额：¥1,240.00。',time:'2026-08-11 11:30:00',read:false},
  // 工单消息 - 运营端：新工单提醒
  {id:5,type:'workorder',roles:['admin'],title:'新充值工单',content:'用户 zhangsan 提交了充值工单 T20260813001，金额 ¥500.00，请及时处理。',time:'2026-08-13 09:45:00',read:false},
  {id:6,type:'workorder',roles:['admin'],title:'新联系工单',content:'用户 lisi 提交了联系工单 C20260813001，问题类型：技术咨询，请及时跟进。',time:'2026-08-13 08:20:00',read:false},
];

function renderNav(){
  const groups = NAV[curRole];
  document.getElementById('sidebar-nav').innerHTML = groups.map(g=>`
    <div class="sidebar-group-label">${g.label}</div>
    ${g.items.map(it=>`
      <div class="sidebar-item ${curPage===it.p?'active':''}" onclick="go('${it.p}')">
        <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">${ICONS[it.i]||''}</svg>
        <span>${it.t}</span>
        ${it.new?'<span class="new-tag">新增</span>':''}
        ${(function(){
          if(it.p && it.p.endsWith('-notif')){
            const cnt = MESSAGES.filter(m=>m.roles.includes(curRole)&&!m.read).length;
            return cnt>0?`<span class="badge b-danger" style="margin-left:auto;padding:0 5px;font-size:10px">${cnt}</span>`:'';
          }
          return it.badge?`<span class="badge b-danger" style="margin-left:auto;padding:0 5px;font-size:10px">${it.badge}</span>`:'';
        })()}
      </div>`).join('')}
  `).join('');
}

function go(p){ curPage=p; renderNav(); renderPage(); }

function goToLogsFromOverview(){
  const selects = document.querySelectorAll('#page-content select');
  if(selects.length>=2){
    overviewFilterParams.timeRange = selects[0].value;
    overviewFilterParams.model = selects[1].value;
  }
  if(curRole==='admin'){
    logInitialTab = 'log-user';
    go('logs');
  }else if(curRole==='agent'){
    go('agent-logs');
  }else{
    go('user-logs');
  }
}

function renderPage(){
  const c = document.getElementById('page-content');
  const t = document.getElementById('page-title');
  const he = document.getElementById('header-extra');
  const nb = document.getElementById('notif-badge');
  he.textContent=''; updateNotifBadge();

  const R = {
    overview:()=>{t.textContent='数据看板';return pageOverview();},
    dashboard:()=>{t.textContent='仪表盘';return pageDashboard();},
    tokens:()=>{t.textContent='API Keys';return tblTokens();},
    logs:()=>{t.textContent='使用日志';return tblLogs();},
    channels:()=>{t.textContent='供应商';return tblChannels();},
    'model-market':()=>{t.textContent='模型广场';return modelMarket();},
    'model-detail':()=>{t.textContent='模型详情';return marketDetailPage();},
    agents:()=>{t.textContent='代理';return tblAgents();},
    discount:()=>{t.textContent='折扣定价';return discMatrix();},
    'topup-admin':()=>{t.textContent='充值工单';return topupAdmin();},
    'contact-reqs':()=>{t.textContent='联系工单';return contactReqs();},
    'recharge-settings':()=>{t.textContent='财务中心';return rechargeSettings();},
    'discount-threshold':()=>{t.textContent='模型配置';return discountThreshold();},
    rankings:()=>{t.textContent='总排行榜';return rankings();},
    'rankings-v2':()=>{t.textContent='总排行榜-v2';return rankingsV2('admin');},
    settings:()=>{t.textContent='系统设置';return settings();},
    'agent-overview':()=>{t.textContent='数据看板';return agentOverview();},
    'agent-dashboard':()=>{t.textContent='仪表盘';return dashAgent();},
    'agent-logs':()=>{t.textContent='使用日志';return agentLogs();},
    'agent-model-market':()=>{t.textContent='模型广场';return modelMarket();},
    'agent-rankings':()=>{t.textContent='总排行榜';return agentRankings();},
    'agent-rankings-v2':()=>{t.textContent='总排行榜-v2';return rankingsV2('agent');},
    'agent-users':()=>{t.textContent='名下用户';return agentUsers();},
    'agent-topup':()=>{t.textContent='充值记录';return agentTopup();},
    'agent-contact':()=>{t.textContent='联系工单';return agentContact();},
    'user-overview':()=>{t.textContent='数据看板';return userOverview();},
    'user-dashboard':()=>{t.textContent='仪表盘';return dashUser();},
    'user-logs':()=>{t.textContent='使用日志';return userLogs();},
    'user-model-market':()=>{t.textContent='模型广场';return userModelMarket();},
    'user-rankings':()=>{t.textContent='总排行榜';return userRankings();},
    'user-rankings-v2':()=>{t.textContent='总排行榜-v2';return rankingsV2('user');},
    wallet:()=>{t.textContent='充值';he.textContent='余额：¥0.24';return wallet();},
    'my-topup':()=>{t.textContent='充值记录';return myTopup();},
    'bills':()=>{t.textContent='账单';return billsPage();},
    'invoices':()=>{t.textContent='发票管理';return invoicesPage();},
    'my-contact':()=>{t.textContent='联系工单';return myContact();},
    'admin-notif':()=>{t.textContent='消息通知';return notifPage();},
    'agent-notif':()=>{t.textContent='消息通知';return notifPage();},
    'user-notif':()=>{t.textContent='消息通知';return notifPage();},
  };
  c.innerHTML = (R[curPage]||(()=>'<div style="color:var(--muted-foreground)">页面未找到</div>'))();
  c.classList.remove('fade-in'); void c.offsetWidth; c.classList.add('fade-in');
  if(['logs','agent-logs','user-logs'].includes(curPage)) applyOverviewFiltersToLogs();
  const expTypes = ['log-user','log-mine','agent-logs','user-logs','model-config','topup-admin','contact-reqs','my-contact','bills'];
  expTypes.forEach(t=>setTimeout(()=>updateExportSelectUI(t),0));
}

function statCard(icon,tone,label,value){
  return `<div class="stat-card">
    <div class="flex items-center gap-2 mb-2">
      <div class="icon-badge ib-${tone}"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24">${ICONS[icon]||''}</svg></div>
      <span class="text-xs font-medium" style="color:var(--muted-foreground)">${label}</span>
    </div>
    <div class="stat-value" style="font-family:'SF Mono',monospace">${value}</div>
  </div>`;
}

// 导出选中状态管理
const _exportSelections = {};

function getExportSelection(type){
  if(!_exportSelections[type]) _exportSelections[type] = new Set();
  return _exportSelections[type];
}

function toggleExportRow(type, id){
  const sel = getExportSelection(type);
  if(sel.has(id)) sel.delete(id); else sel.add(id);
  updateExportSelectUI(type);
}

function toggleExportAll(type, ids, checked){
  const sel = getExportSelection(type);
  if(checked) ids.forEach(id=>sel.add(id)); else ids.forEach(id=>sel.delete(id));
  updateExportSelectUI(type);
}

function updateExportSelectUI(type){
  const sel = getExportSelection(type);
  const table = document.querySelector(`[data-export-type="${type}"]`);
  if(!table) return;
  table.querySelectorAll('.export-row-check').forEach(cb=>{
    const rowId = cb.dataset.rowId;
    cb.checked = sel.has(rowId);
  });
  const allCheck = table.querySelector('.export-all-check');
  if(allCheck){
    const rowChecks = table.querySelectorAll('.export-row-check');
    allCheck.checked = rowChecks.length > 0 && Array.from(rowChecks).every(cb=>cb.checked);
    allCheck.indeterminate = !allCheck.checked && Array.from(rowChecks).some(cb=>cb.checked);
  }
}

function clearExportSelection(type){
  if(_exportSelections[type]) _exportSelections[type].clear();
}

function getExportCheckbox(type, id){
  const sel = getExportSelection(type);
  return `<input type="checkbox" class="export-row-check" data-row-id="${id}" ${sel.has(id)?'checked':''} onchange="toggleExportRow('${type}','${id}')" style="width:16px;height:16px;accent-color:var(--primary);cursor:pointer">`;
}

function getExportAllCheckbox(type, ids){
  const sel = getExportSelection(type);
  const allChecked = ids.length > 0 && ids.every(id=>sel.has(id));
  const someChecked = ids.some(id=>sel.has(id));
  return `<input type="checkbox" class="export-all-check" ${allChecked?'checked':''} ${someChecked&&!allChecked?'data-indeterminate="true"':''} onchange="toggleExportAll('${type}', [${ids.map(id=>`'${id}'`).join(',')}], this.checked)" style="width:16px;height:16px;accent-color:var(--primary);cursor:pointer">`;
}

// 导出下拉按钮组件
let _exportDropdownOpen = null;
function exportDropdownBtn(dropdownId, exportType){
  return `<div class="export-dropdown" id="${dropdownId}">
    <button class="btn btn-outline btn-sm" onclick="toggleExportDropdown('${dropdownId}','${exportType}')">
      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
      导出
      <svg class="w-3 h-3 dropdown-caret" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </button>
  </div>`;
}

function toggleExportDropdown(dropdownId, exportType){
  const container = document.getElementById(dropdownId);
  if(!container) return;
  
  // 关闭其他已打开的下拉菜单
  if(_exportDropdownOpen && _exportDropdownOpen !== dropdownId){
    const oldMenu = document.querySelector('#' + _exportDropdownOpen + ' .export-dropdown-menu');
    if(oldMenu) oldMenu.remove();
  }
  
  let menu = container.querySelector('.export-dropdown-menu');
  if(menu){
    menu.remove();
    _exportDropdownOpen = null;
  }else{
    menu = document.createElement('div');
    menu.className = 'export-dropdown-menu';
    menu.innerHTML = `
      <div class="dropdown-item" onclick="doExport('${exportType}','current');closeExportDropdown()">
        <svg class="item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"/></svg>
        导出当前页
      </div>
      <div class="dropdown-item" onclick="doExport('${exportType}','all');closeExportDropdown()">
        <svg class="item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
        导出全部
      </div>
    `;
    container.appendChild(menu);
    _exportDropdownOpen = dropdownId;
    
    // 点击外部关闭
    setTimeout(()=>{
      document.addEventListener('click', closeExportDropdownOutside, { once: true });
    }, 0);
  }
}

function closeExportDropdownOutside(e){
  if(_exportDropdownOpen){
    const container = document.getElementById(_exportDropdownOpen);
    if(container && !container.contains(e.target)){
      const menu = container.querySelector('.export-dropdown-menu');
      if(menu) menu.remove();
      _exportDropdownOpen = null;
    }else if(container){
      document.addEventListener('click', closeExportDropdownOutside, { once: true });
    }
  }
}

function closeExportDropdown(){
  if(_exportDropdownOpen){
    const container = document.getElementById(_exportDropdownOpen);
    if(container){
      const menu = container.querySelector('.export-dropdown-menu');
      if(menu) menu.remove();
    }
    _exportDropdownOpen = null;
  }
}

function doExport(type, scope){
  const typeMap = {
    'log-user': '用户日志',
    'log-mine': '我的日志',
    'agent-logs': '使用日志',
    'user-logs': '使用日志',
    'model-config': '模型配置',
    'topup-admin': '充值工单',
    'contact-reqs': '联系工单',
    'my-contact': '联系工单',
    'bills': '月度账单',
    'agent-list': '代理列表',
    'agent-users': '名下用户',
    'agent-topup': '充值记录',
    'my-topup': '充值记录'
  };
  const scopeMap = { current: '当前页数据', all: '全部数据', selected: '选中数据' };
  showToast('导出成功', (typeMap[type]||'数据') + scopeMap[scope] + '已导出为 CSV');
  if(scope === 'selected') clearExportSelection(type);
}

// 导出确认弹窗（勾选/全部）
function showExportConfirm(type, totalCount){
  const sel = getExportSelection(type);
  const selectedCount = sel.size;
  const hasSelection = selectedCount > 0;
  const defaultOption = hasSelection ? 'selected' : 'all';
  showModal(`<div style="min-width:460px;max-width:500px">
    <div class="flex items-center justify-between p-4" style="border-bottom:1px solid var(--border)">
      <h3 class="text-lg font-semibold">导出确认</h3>
      <button class="icon-btn" onclick="closeModal()"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>
    <div class="p-4">
      <div class="text-sm mb-3" style="color:var(--muted-foreground)">请选择导出范围：</div>
      <div class="flex flex-col gap-2">
        <label class="flex items-center gap-2 cursor-pointer p-3 rounded-lg" style="font-size:14px;border:1px solid color-mix(in srgb,var(--primary) 20%,transparent);background:color-mix(in srgb,var(--primary) 6%,transparent)">
          <input type="radio" name="export-scope" value="selected" ${defaultOption==='selected'?'checked':''} style="width:16px;height:16px;accent-color:var(--primary)">
          <span>导出选中数据 <strong style="color:var(--primary)">${selectedCount}</strong> 条</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer p-3 rounded-lg" style="font-size:14px;border:1px solid var(--border);background:var(--muted)">
          <input type="radio" name="export-scope" value="all" ${defaultOption==='all'?'checked':''} style="width:16px;height:16px;accent-color:var(--primary)">
          <span>导出全部数据 <strong style="color:var(--foreground)">${totalCount}</strong> 条</span>
        </label>
      </div>
    </div>
    <div class="flex items-center justify-end gap-3 p-4" style="border-top:1px solid var(--border)">
      <button class="btn btn-primary btn-sm" onclick="closeModal()">取消</button>
      <button class="btn btn-primary btn-sm" onclick="confirmExport('${type}')">确认导出</button>
    </div>
  </div>`);
  setTimeout(()=>{
    const modalBox = document.querySelector('.modal-box');
    if(modalBox) {
      modalBox.style.width = 'auto';
      modalBox.style.display = 'inline-block';
    }
  }, 0);
}

function confirmExport(type){
  const radio = document.querySelector('input[name="export-scope"]:checked');
  const scope = radio ? radio.value : 'all';

  const confirmBtn = document.querySelector('.modal-box .btn-primary');
  if(confirmBtn){
    confirmBtn.disabled = true;
    confirmBtn.innerHTML = `<svg class="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="animation:spin 1s linear infinite"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg> 导出中...`;
    confirmBtn.style.opacity = '0.7';
    confirmBtn.style.cursor = 'not-allowed';
  }

  setTimeout(()=>{
    closeModal();
    doExport(type, scope);
  }, 800);
}

// ===== 概览（使用概览 + 账户对账） =====
function buildTimeFilter(prefix){
  return `<select class="input" style="width:120px" onchange="onTimeFilterChange('${prefix}', this)">
    <option value="近7天">近7天</option>
    <option value="今天">今天</option>
    <option value="近30天" selected>近30天</option>
    <option value="本月">本月</option>
    <option value="自定义">自定义</option>
  </select>
  <span id="${prefix}-custom-date" style="display:none;gap:4px;align-items:center">
    <input type="date" class="input" style="width:140px" id="${prefix}-start-date" onchange="validateDateRange('${prefix}')">
    <span style="color:var(--muted-foreground)">~</span>
    <input type="date" class="input" style="width:140px" id="${prefix}-end-date" onchange="validateDateRange('${prefix}')">
  </span>
  <span id="${prefix}-date-tip" style="display:none;font-size:12px;color:var(--destructive)">只支持查询最多31天的数据</span>`;
}
function onTimeFilterChange(prefix, sel){
  const customDate = document.getElementById(prefix + '-custom-date');
  const tip = document.getElementById(prefix + '-date-tip');
  if(tip) tip.style.display = 'none';
  if(sel.value === '自定义'){
    if(customDate) customDate.style.display = 'inline-flex';
  } else {
    if(customDate) customDate.style.display = 'none';
  }
}
function validateDateRange(prefix){
  const startEl = document.getElementById(prefix + '-start-date');
  const endEl = document.getElementById(prefix + '-end-date');
  const tip = document.getElementById(prefix + '-date-tip');
  if(!startEl || !endEl || !tip) return;
  const start = startEl.value, end = endEl.value;
  if(start && end){
    const d1 = new Date(start), d2 = new Date(end);
    const diff = Math.floor((d2 - d1) / 86400000) + 1;
    if(diff > 31){
      tip.style.display = 'inline-block';
      endEl.value = '';
    } else if(diff < 1){
      tip.style.display = 'inline-block';
      endEl.value = '';
    } else {
      tip.style.display = 'none';
    }
  }
}

function pageOverview(){
  const todayUsage=97.84, totalReqs=1427, totalTokens=2600000;
  const supplierBalance=8560.00, userTotalBalance=3420.50;
  const supplierTotalConsumption=1620.30, userTotalConsumption=2180.75;
  const profitDiff=userTotalConsumption-supplierTotalConsumption;
  const userRank=[
    {name:'zhangsan',agent:'partner_lisi',cost:36.1,pct:37,trend:'up'},
    {name:'user_a',agent:'partner_zhao',cost:23.2,pct:24,trend:'up'},
    {name:'wangwu',agent:'partner_lisi',cost:15.4,pct:16,trend:'down'},
    {name:'user_b',agent:'partner_zhao',cost:12.8,pct:13,trend:'up'},
    {name:'zhaoliu',agent:'直营',cost:10.34,pct:10,trend:'down'},
  ];
  const usageFilter=`<div class="flex items-center gap-2 mb-3">
    ${buildTimeFilter('admin-ov')}
    <select class="input" style="width:100px"><option>全部模型</option>${MODELS.map(m=>`<option>${MODEL_SHORT[m]}</option>`).join('')}</select>
  </div>`;
  const usageStats=`<div class="card overflow-hidden mb-4">
    <div class="grid grid-cols-3 divide-x" style="border-color:var(--border)">
      <div class="px-4 py-3 flex flex-col h-full hover:bg-muted/30 transition-colors">
        <div class="flex items-center gap-2 mb-2">
          <div class="icon-badge ib-chart-2" style="width:28px;height:28px;border-radius:8px"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:16px;height:16px">${ICONS.trending||''}</svg></div>
          <span class="text-xs font-medium" style="color:var(--muted-foreground)">消费金额</span>
        </div>
        <div class="font-mono text-2xl font-bold tabular-nums">¥${todayUsage}</div>
        <div class="flex-1 min-h-[2px]"></div>
        <div class="flex justify-end pt-1">
          <span class="text-xs cursor-pointer hover:opacity-80 flex items-center gap-0.5" style="color:var(--primary)" onclick="goToLogsFromOverview()">查看详情 <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></span>
        </div>
      </div>
      <div class="px-4 py-3 flex flex-col h-full hover:bg-muted/30 transition-colors">
        <div class="flex items-center gap-2 mb-2">
          <div class="icon-badge ib-chart-3" style="width:28px;height:28px;border-radius:8px"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:16px;height:16px">${ICONS.activity||''}</svg></div>
          <span class="text-xs font-medium" style="color:var(--muted-foreground)">请求次数</span>
        </div>
        <div class="font-mono text-2xl font-bold tabular-nums">${totalReqs.toLocaleString()}</div>
        <div class="flex-1 min-h-[2px]"></div>
        <div class="flex justify-end pt-1">
          <span class="text-xs cursor-pointer hover:opacity-80 flex items-center gap-0.5" style="color:var(--primary)" onclick="goToLogsFromOverview()">查看详情 <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></span>
        </div>
      </div>
      <div class="px-4 py-3 flex flex-col h-full hover:bg-muted/30 transition-colors">
        <div class="flex items-center gap-2 mb-2">
          <div class="icon-badge ib-chart-1" style="width:28px;height:28px;border-radius:8px"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:16px;height:16px">${ICONS.key||''}</svg></div>
          <span class="text-xs font-medium" style="color:var(--muted-foreground)">Token 消耗</span>
        </div>
        <div class="font-mono text-2xl font-bold tabular-nums">${(totalTokens/1000).toFixed(1)}K</div>
        <div class="flex-1 min-h-[2px]"></div>
        <div class="flex justify-end pt-1">
          <span class="text-xs cursor-pointer hover:opacity-80 flex items-center gap-0.5" style="color:var(--primary)" onclick="goToLogsFromOverview()">查看详情 <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></span>
        </div>
      </div>
    </div>
  </div>`;
  const usageTrend=`<div class="card p-4 mb-4">
    <div class="flex items-center justify-between mb-3">
      <div class="text-sm font-semibold">消费趋势</div>
    </div>
    <div class="flex items-end gap-1 h-40 mb-2">
      ${[12,18,15,22,28,24,32].map((v,i)=>`<div class="flex-1 flex flex-col items-center gap-1">
        <div class="w-full rounded-t" style="height:${(v/32*100).toFixed(0)}%;background:linear-gradient(to top,var(--chart-2),color-mix(in srgb,var(--chart-2) 70%,var(--chart-1)))"></div>
        <span class="text-[10px]" style="color:var(--muted-foreground)">${['2026-08-07','2026-08-08','2026-08-09','2026-08-10','2026-08-11','2026-08-12','2026-08-13'][i]}</span>
      </div>`).join('')}
    </div>
    <div class="text-[11px] text-center" style="color:var(--muted-foreground)">单位：¥ · 近7天用户总消费趋势</div>
  </div>`;
  const usageRank=`<div class="card p-4">
    <div class="flex items-center justify-between mb-3">
      <div class="text-sm font-semibold">用户消耗排行</div>
      <select class="input" style="width:100px"><option>全部代理</option><option>partner_lisi</option><option>partner_zhao</option><option>直营</option></select>
    </div>
    <table><thead><tr><th style="width:40px">排名</th><th>用户</th><th>所属代理</th><th>消费(¥)</th><th style="width:180px">占比</th><th style="width:60px">趋势</th></tr></thead>
      <tbody>${userRank.map((u,i)=>`<tr>
        <td><span class="badge ${i===0?'b-primary':i===1?'b-neutral':'b-neutral'}">${i+1}</span></td>
        <td class="font-medium">${u.name}</td>
        <td style="color:var(--muted-foreground);font-size:12px">${u.agent}</td>
        <td class="font-semibold">¥${u.cost}</td>
        <td><div class="flex items-center gap-2">
          <div class="flex-1 h-2 rounded overflow-hidden" style="background:var(--muted)"><div class="h-full rounded" style="width:${u.pct}%;background:var(--chart-${i<3?i+1:4})"></div></div>
          <span class="text-xs w-8 text-right">${u.pct}%</span>
        </div></td>
        <td><span class="text-xs" style="color:${u.trend==='up'?'var(--success)':'var(--destructive)'}">${u.trend==='up'?'↑+':'↓-'}${[12,8,3,5,2][i]}%</span></td>
      </tr>`).join('')}</tbody></table>
  </div>`;
  const reconCards=`<div class="grid grid-cols-3 gap-3">
    <div class="rounded-xl border p-4" style="background:linear-gradient(135deg,color-mix(in srgb,var(--chart-1) 10%,var(--background)),color-mix(in srgb,var(--chart-1) 4%,var(--background)));border-color:color-mix(in srgb,var(--chart-1) 20%,var(--border))">
      <div class="flex items-center gap-2 mb-3">
        <div class="icon-badge ib-chart-1" style="width:28px;height:28px;border-radius:8px"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:16px;height:16px"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg></div>
        <span class="text-xs font-medium" style="color:var(--muted-foreground)">余额</span>
      </div>
      <div class="font-mono text-2xl font-bold tracking-tight mb-1">¥${supplierBalance.toFixed(2)}</div>
      <div class="text-[11px]" style="color:var(--muted-foreground)">平台账户余额</div>
    </div>
    <div class="rounded-xl border p-4" style="background:linear-gradient(135deg,color-mix(in srgb,var(--chart-2) 10%,var(--background)),color-mix(in srgb,var(--chart-2) 4%,var(--background)));border-color:color-mix(in srgb,var(--chart-2) 20%,var(--border))">
      <div class="flex items-center gap-2 mb-3">
        <div class="icon-badge ib-chart-2" style="width:28px;height:28px;border-radius:8px"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:16px;height:16px"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 100-8 4 4 0 000 8z"/></svg></div>
        <span class="text-xs font-medium" style="color:var(--muted-foreground)">用户余额</span>
      </div>
      <div class="font-mono text-2xl font-bold tracking-tight mb-1">¥${userTotalBalance.toFixed(2)}</div>
      <div class="text-[11px]" style="color:var(--muted-foreground)">12名用户余额合计</div>
    </div>
    <div class="rounded-xl border p-4" style="background:linear-gradient(135deg,color-mix(in srgb,${profitDiff>=0?'var(--success)':'var(--destructive)'} 10%,var(--background)),color-mix(in srgb,${profitDiff>=0?'var(--success)':'var(--destructive)'} 4%,var(--background)));border-color:color-mix(in srgb,${profitDiff>=0?'var(--success)':'var(--destructive)'} 20%,var(--border))">
      <div class="flex items-center gap-2 mb-3">
        <div class="icon-badge ${profitDiff>=0?'ib-success':'ib-destructive'}" style="width:28px;height:28px;border-radius:8px"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:16px;height:16px"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg></div>
        <span class="text-xs font-medium" style="color:var(--muted-foreground)">消费差额</span>
      </div>
      <div class="font-mono text-2xl font-bold tracking-tight mb-1" style="color:${profitDiff>=0?'var(--success)':'var(--destructive)'}">${profitDiff>=0?'':'-'}¥${Math.abs(profitDiff).toFixed(2)}</div>
      <div class="text-[11px]" style="color:var(--muted-foreground)">用户消费-实际消费</div>
    </div>
  </div>`;
  return `
    ${reconCards}
    <div style="border-top:1px solid #d4d4d4;margin:20px 0"></div>
    ${usageFilter}
    ${usageStats}
    ${usageTrend}
    ${usageRank}`;
}

// ===== 仪表盘（对齐实际代码 LogStatCards + ModelCharts） =====
function pageDashboard(){
  const logStats=[
    {label:'RPM',value:'24',icon:'activity',tone:'chart-1',desc:'每分钟请求'},
    {label:'TPM',value:'12.4K',icon:'trending',tone:'chart-2',desc:'每分钟Token'},
    {label:'活跃用户',value:'12',icon:'users',tone:'chart-3',desc:'近7天活跃'},
    {label:'活跃模型',value:'3',icon:'box',tone:'chart-1',desc:'调用中模型'},
  ];
  return `
    <div class="flex items-center gap-2 mb-3">
      ${buildTimeFilter('admin-dash')}
      <select class="input" style="width:100px"><option>全部模型</option>${MODELS.map(m=>`<option>${MODEL_SHORT[m]}</option>`).join('')}</select>
      <select class="input" style="width:100px"><option>按小时</option><option>按天</option></select>
    </div>
    <div class="card overflow-hidden mb-4">
      <div class="grid grid-cols-4 divide-x" style="border-color:var(--border)">
        ${logStats.map(s=>`
          <div class="px-3 py-3" style="min-width:0">
            <div class="flex items-center gap-1.5 mb-1">
              <div class="icon-badge ib-${s.tone}" style="width:20px;height:20px;border-radius:4px"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:12px;height:12px">${ICONS[s.icon]||''}</svg></div>
              <span class="text-[11px] font-medium uppercase tracking-wide" style="color:var(--muted-foreground)">${s.label}</span>
            </div>
            <div class="font-mono text-lg font-bold tabular-nums">${s.value}</div>
            <div class="text-[11px] mt-0.5" style="color:var(--muted-foreground)">${s.desc}</div>
          </div>`).join('')}
      </div>
    </div>
    <div class="card overflow-hidden mb-4">
      <div class="flex items-center justify-between px-4 py-3" style="border-bottom:1px solid var(--border)">
        <div class="flex items-center gap-2">
          <div class="icon-badge ib-chart-4" style="width:24px;height:24px;border-radius:6px"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:14px;height:14px"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/></svg></div>
          <span class="text-sm font-semibold">模型调用分析</span>
          <span class="text-xs" style="color:var(--muted-foreground)">总计: 1,427次</span>
        </div>
        <div class="flex gap-1 rounded-lg p-1" style="background:var(--muted)">
          <button class="tab-btn active" onclick="switchChartTab(this,'chart-trend')">趋势</button>
          <button class="tab-btn" onclick="switchChartTab(this,'chart-prop')">占比</button>
          <button class="tab-btn" onclick="switchChartTab(this,'chart-top')">排行</button>
        </div>
      </div>
      <div id="chart-trend" class="p-4">
        <div class="flex items-end gap-1.5 h-40 mb-2">
          ${[85,92,78,105,120,98,130].map((v,i)=>`<div class="flex-1 flex flex-col items-center gap-1">
            <div class="w-full rounded-t" style="height:${(v/130*100).toFixed(0)}%;background:linear-gradient(to top,var(--chart-1),color-mix(in srgb,var(--chart-1) 70%,var(--chart-2)))"></div>
            <span class="text-[10px]" style="color:var(--muted-foreground)">${['2026-08-07','2026-08-08','2026-08-09','2026-08-10','2026-08-11','2026-08-12','2026-08-13'][i]}</span>
          </div>`).join('')}
        </div>
        <div class="flex items-center gap-4 text-xs" style="color:var(--muted-foreground)">
          ${MODELS.map((m,idx)=>`<span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded" style="background:var(--chart-${idx+1})"></span>${MODEL_SHORT[m]}</span>`).join('')}
        </div>
      </div>
      <div id="chart-prop" class="p-4" style="display:none">
        <div class="flex items-center gap-6">
          <div class="relative" style="width:140px;height:140px">
            <svg viewBox="0 0 36 36" style="width:140px;height:140px;transform:rotate(-90deg)">
              <circle cx="18" cy="18" r="14" fill="none" stroke="var(--muted)" stroke-width="5"/>
              <circle cx="18" cy="18" r="14" fill="none" stroke="var(--chart-1)" stroke-width="5" stroke-dasharray="${52/100*88} 88" stroke-linecap="round"/>
              <circle cx="18" cy="18" r="14" fill="none" stroke="var(--chart-2)" stroke-width="5" stroke-dasharray="${33/100*88} 88" stroke-dashoffset="${-52/100*88}" stroke-linecap="round"/>
              <circle cx="18" cy="18" r="14" fill="none" stroke="var(--chart-3)" stroke-width="5" stroke-dasharray="${15/100*88} 88" stroke-dashoffset="${-85/100*88}" stroke-linecap="round"/>
            </svg>
            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <span class="text-lg font-semibold">1,427</span>
              <span class="text-[10px]" style="color:var(--muted-foreground)">总调用</span>
            </div>
          </div>
          <div class="flex-1 space-y-2">
            ${[{m:MODEL_SHORT[MODELS[0]],v:52,c:'chart-1',cnt:742},{m:MODEL_SHORT[MODELS[1]],v:33,c:'chart-2',cnt:471},{m:MODEL_SHORT[MODELS[2]],v:15,c:'chart-3',cnt:214}].map(r=>`
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded" style="background:var(--${r.c})"></div>
                <span class="text-xs flex-1">${r.m}</span>
                <span class="text-xs" style="color:var(--muted-foreground)">${r.cnt}次</span>
                <span class="text-xs font-semibold w-10 text-right">${r.v}%</span>
              </div>`).join('')}
          </div>
        </div>
      </div>
      <div id="chart-top" class="p-4" style="display:none">
        <div class="space-y-2">
          ${[{m:MODEL_SHORT[MODELS[0]],cnt:742,cost:36.1,pct:52,c:'chart-1'},{m:MODEL_SHORT[MODELS[1]],cnt:471,cost:23.2,pct:33,c:'chart-2'},{m:MODEL_SHORT[MODELS[2]],cnt:214,cost:11.5,pct:15,c:'chart-3'}].map((r,i)=>`
            <div class="flex items-center gap-3 p-2 rounded-lg" style="background:var(--muted)">
              <span class="badge ${i===0?'b-primary':'b-neutral'}">${i+1}</span>
              <span class="text-xs font-medium flex-1">${r.m}</span>
              <span class="text-xs" style="color:var(--muted-foreground)">${r.cnt}次</span>
              <div class="w-24 h-2 rounded overflow-hidden" style="background:var(--border)"><div class="h-full rounded" style="width:${r.pct}%;background:var(--${r.c})"></div></div>
              <span class="text-xs font-semibold w-12 text-right">¥${r.cost}</span>
            </div>`).join('')}
        </div>
      </div>
    </div>
    <div class="card overflow-hidden">
      <div class="flex items-center justify-between px-4 py-3" style="border-bottom:1px solid var(--border)">
        <div class="flex items-center gap-2">
          <div class="icon-badge ib-chart-2" style="width:24px;height:24px;border-radius:6px"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:14px;height:14px"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg></div>
          <span class="text-sm font-semibold">按代理消费占比</span>
        </div>
      </div>
      <div class="p-4">
        <div class="space-y-3">
          ${[{n:'partner_lisi',v:62,c:'chart-1'},{n:'partner_zhao',v:20,c:'chart-2'},{n:'partner_wang',v:12,c:'chart-3'},{n:'直营',v:6,c:'chart-4'}].map(a=>`
            <div class="flex items-center gap-3">
              <span class="text-xs w-32 truncate font-medium">${a.n}</span>
              <div class="flex-1 h-3 rounded overflow-hidden" style="background:var(--muted)"><div class="h-full rounded" style="width:${a.v}%;background:var(--${a.c})"></div></div>
              <span class="text-xs w-12 text-right font-semibold">${a.v}%</span>
            </div>`).join('')}
        </div>
      </div>
    </div>`;
}

function switchChartTab(btn,id){
  var parent=btn.parentElement;
  parent.querySelectorAll('.tab-btn').forEach(t=>{t.classList.remove('active');});
  btn.classList.add('active');
  var card=parent.parentElement.parentElement;
  card.querySelectorAll('[id$="-trend"],[id$="-prop"],[id$="-top"]').forEach(c=>{
    if(c.id.startsWith('chart-')||c.id.startsWith('agent-chart-')||c.id.startsWith('user-chart-')) c.style.display=c.id===id?'block':'none';
  });
}

// ===== API Keys =====
const API_KEYS = [
  {id:1,name:'default-token',fullKey:'sk-nova-7a3b8c9d2e1f4a5b6c7d8e9f0a1b2c3d',used:1250000,quota:5000000,status:1,createdAt:'2026-07-15 10:30:00',lastUsed:'08-11 14:35'},
  {id:2,name:'test-key',fullKey:'sk-nova-3f5e6d7c8b9a0z1y2x3w4v5u6t7s8r9q',used:320000,quota:2000000,status:1,createdAt:'2026-08-01 16:22:45',lastUsed:'08-11 10:22'},
  {id:3,name:'production-app',fullKey:'sk-nova-9p8o7i6u5y4t3r2e1w0q9a8s7d6f5g4h',used:4800000,quota:10000000,status:1,createdAt:'2026-06-20 09:15:30',lastUsed:'08-11 15:01'},
  {id:4,name:'legacy-key',fullKey:'sk-nova-1z2x3c4v5b6n7m8a9s0d1f2g3h4j5k6l',used:200000,quota:500000,status:0,createdAt:'2026-05-10 14:08:12',lastUsed:'07-28 09:15'},
];

function maskKey(key){
  return key.substring(0,8) + '****' + key.substring(key.length-4);
}

function copyApiKey(key,event){
  const ta=document.createElement('textarea');ta.value=key;document.body.appendChild(ta);ta.select();
  try{document.execCommand('copy');}catch(e){}
  document.body.removeChild(ta);
  showToast('复制成功','API Key 已复制到剪贴板');
  if(event){event.stopPropagation();}
}

let selectedApiKeyVal='';
function selectApiKey(sel){
  selectedApiKeyVal=sel.value;
  const container=sel.closest('details');
  if(container){
    const placeholder=container.querySelector('.api-key-placeholder');
    if(placeholder){
      placeholder.textContent=selectedApiKeyVal||'<YOUR_API_KEY>';
    }
    const copyBtn=container.querySelector('.api-key-copy');
    if(copyBtn){copyBtn.style.display=selectedApiKeyVal?'inline-flex':'none';}
  }
  const page=document.getElementById('page-content')||document.getElementById('main-content')||document.body;
  page.querySelectorAll('pre code').forEach(codeEl=>{
    const txt=codeEl.textContent;
    if(txt.includes('<YOUR_API_KEY>')||txt.includes('Bearer')){
      if(selectedApiKeyVal){
        codeEl.textContent=txt.replace(/Bearer <YOUR_API_KEY>/g,'Bearer '+selectedApiKeyVal).replace(/<YOUR_API_KEY>/g,selectedApiKeyVal);
      }else{
        codeEl.textContent=txt.replace(new RegExp('Bearer '+escapeRegex(selectedApiKeyVal),'g'),'Bearer <YOUR_API_KEY>').replace(new RegExp(escapeRegex(selectedApiKeyVal),'g'),'<YOUR_API_KEY>');
      }
    }
  });
}

function escapeRegex(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');}

function copySelectedApiKey(){
  if(selectedApiKeyVal){
    const ta=document.createElement('textarea');ta.value=selectedApiKeyVal;document.body.appendChild(ta);ta.select();
    try{document.execCommand('copy');}catch(e){}
    document.body.removeChild(ta);
    showToast('复制成功','API Key 已复制到剪贴板');
  }
}

function goCreateApiKey(){
  go('tokens');
  setTimeout(()=>{ showApiKeyForm(); },100);
}

function showApiKeyForm(){
  document.getElementById('modal-container').innerHTML = `
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal" style="max-width:420px">
        <div class="modal-header">
          <h3>添加 API Key</h3>
          <button class="icon-btn" onclick="closeModal()">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        <div class="modal-body">
          <div>
            <label class="form-label">名称 <span style="color:var(--destructive)">*</span></label>
            <input id="apikey-name" class="input" placeholder="为 Key 命名，便于识别用途" maxlength="32">
            <div class="form-hint">仅支持中文、字母、数字、下划线 _ 和短横线 -，1–32 字符</div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary btn-sm" onclick="closeModal()">取消</button>
          <button class="btn btn-primary btn-sm" onclick="createApiKey()">创建 Key</button>
        </div>
      </div>
    </div>`;
}

function createApiKey(){
  const name = document.getElementById('apikey-name').value.trim();
  if(!name){
    showToast('请输入名称','Key 名称不能为空',{type:'warning'});
    return;
  }
  if(!/^[\u4e00-\u9fa5a-zA-Z0-9_-]{1,32}$/.test(name)){
    showToast('格式有误','仅支持中文、字母、数字、下划线 _ 和短横线 -，1–32 字符',{type:'warning'});
    return;
  }
  if(API_KEYS.some(k=>k.name===name)){
    showToast('名称已存在','该名称已被使用，请更换',{type:'warning'});
    return;
  }
  const charset = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let rand = '';
  for(let i=0;i<32;i++) rand += charset[Math.floor(Math.random()*charset.length)];
  const fullKey = 'sk-nova-' + rand;
  const now = new Date();
  const pad = n => String(n).padStart(2,'0');
  const today = now.getFullYear()+'-'+pad(now.getMonth()+1)+'-'+pad(now.getDate())+' '+pad(now.getHours())+':'+pad(now.getMinutes())+':'+pad(now.getSeconds());
  const newId = Math.max(...API_KEYS.map(k=>k.id),0) + 1;
  API_KEYS.push({
    id:newId,
    name:name,
    fullKey:fullKey,
    used:0,
    quota:0,
    status:1,
    createdAt:today,
    lastUsed:'—',
  });
  closeModal();
  showApiKeyCreated(fullKey, name);
}

function showApiKeyCreated(key, name){
  document.getElementById('modal-container').innerHTML = `
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal" style="max-width:680px">
        <div class="modal-header">
          <h3>Key 创建成功</h3>
          <button class="icon-btn" onclick="closeModal()">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        <div class="modal-body">
          <div class="text-center mb-4">
            <div class="w-12 h-12 rounded-full mx-auto flex items-center justify-center" style="background:color-mix(in srgb,var(--success) 12%,transparent)">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color:var(--success)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <p class="text-sm font-medium mt-2">API Key「${name}」已创建成功</p>
          </div>
          <div>
            <div class="text-xs font-medium mb-1.5" style="color:var(--muted-foreground)">完整 Key（仅显示一次，请立即复制保存）</div>
            <div class="flex items-center gap-2 p-3 rounded-lg" style="background:var(--card);border:1px solid var(--border)">
              <code style="font-family:monospace;font-size:13px;flex:1;word-break:break-all;color:var(--foreground)">${key}</code>
              <button class="btn btn-outline btn-sm flex-shrink-0" onclick="copyApiKey('${key}',event)">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                复制
              </button>
            </div>
          </div>
          <div class="flex items-center gap-1.5 mt-3 p-2.5 rounded-lg" style="background:color-mix(in srgb,var(--warning) 8%,transparent)">
            <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color:var(--warning)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            <span class="text-xs" style="color:var(--warning)">出于安全考虑，关闭后将无法再次查看完整 Key，请务必现在复制保存。</span>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-outline btn-sm" onclick="copyApiKey('${key}',event)">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
            复制 Key
          </button>
          <button class="btn btn-primary btn-sm" onclick="closeModal();renderPage();">完成</button>
        </div>
      </div>
    </div>`;
}

function toggleApiKey(id){
  const k = API_KEYS.find(x=>x.id===id);
  if(!k) return;
  k.status = k.status === 1 ? 0 : 1;
  showToast('操作成功', k.status===1?'API Key 已启用':'API Key 已禁用');
  renderPage();
}

function deleteApiKey(id){
  const k = API_KEYS.find(x=>x.id===id);
  if(!k) return;
  document.getElementById('modal-container').innerHTML = `
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal" style="max-width:480px">
        <div class="modal-header">
          <h3>确认删除</h3>
          <button class="icon-btn" onclick="closeModal()">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        <div class="modal-body">
          <p class="text-sm">确定要删除 API Key「<strong>${k.name}</strong>」吗？删除后不可恢复，使用此 Key 的应用将无法调用接口。</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary btn-sm" onclick="closeModal()">取消</button>
          <button class="btn btn-sm" style="background:var(--destructive);color:#fff" onclick="confirmDeleteApiKey(${id})">确认删除</button>
        </div>
      </div>
    </div>`;
}

function confirmDeleteApiKey(id){
  const idx = API_KEYS.findIndex(x=>x.id===id);
  if(idx>-1) API_KEYS.splice(idx,1);
  closeModal();
  showToast('删除成功','API Key 已删除');
  renderPage();
}

function showApiKeyDetail(id){
  const k = API_KEYS.find(x=>x.id===id);
  if(!k) return;
  document.getElementById('modal-container').innerHTML = `
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal" style="max-width:680px">
        <div class="modal-header">
          <h3>API Key 详情</h3>
          <button class="icon-btn" onclick="closeModal()">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        <div class="modal-body">
          <div class="space-y-4">
            <div>
              <div class="text-xs font-medium mb-1.5" style="color:var(--muted-foreground)">名称</div>
              <div class="text-sm font-medium">${k.name}</div>
            </div>
            <div>
              <div class="text-xs font-medium mb-1.5" style="color:var(--muted-foreground)">API Key</div>
              <div class="flex items-center gap-2 p-3 rounded-lg" style="background:var(--card);border:1px solid var(--border)">
                <code style="font-family:monospace;font-size:13px;flex:1;word-break:break-all;color:var(--foreground)">${k.fullKey}</code>
                <button class="btn btn-outline btn-sm flex-shrink-0" onclick="copyApiKey('${k.fullKey}',event)">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                  复制
                </button>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <div class="text-xs font-medium mb-1.5" style="color:var(--muted-foreground)">已用额度</div>
                <div class="text-sm">¥${(k.used/QUOTA_PER_UNIT).toFixed(2)}</div>
              </div>
              <div>
                <div class="text-xs font-medium mb-1.5" style="color:var(--muted-foreground)">剩余额度</div>
                <div class="text-sm">¥${((k.quota-k.used)/QUOTA_PER_UNIT).toFixed(2)}</div>
              </div>
              <div>
                <div class="text-xs font-medium mb-1.5" style="color:var(--muted-foreground)">创建时间</div>
                <div class="text-sm">${k.createdAt}</div>
              </div>
              <div>
                <div class="text-xs font-medium mb-1.5" style="color:var(--muted-foreground)">最近使用</div>
                <div class="text-sm">${k.lastUsed}</div>
              </div>
            </div>
            <div>
              <div class="text-xs font-medium mb-1.5" style="color:var(--muted-foreground)">状态</div>
              <span class="badge ${k.status===1?'b-success':'b-neutral'}">${k.status===1?'启用':'禁用'}</span>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary btn-sm" onclick="closeModal()">关闭</button>
          <button class="btn btn-primary btn-sm" onclick="copyApiKey('${k.fullKey}',event)">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
            复制 Key
          </button>
        </div>
      </div>
    </div>`;
}

function tblTokens(){
  const keys = API_KEYS;
  return `
    <div class="info-banner mb-3">
      <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color:var(--primary)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      <span>API Keys 是用户调用 LLM 接口的凭证令牌。用户在不同应用中配置此 Key 即可调用 New API 提供的模型接口。</span>
    </div>
    <div class="card overflow-hidden">
      <div class="flex items-center justify-between p-3" style="border-bottom:1px solid var(--border)">
        <div class="flex items-center gap-2">
          <select class="input" style="width:120px"><option>今天</option><option>近7天</option><option>近30天</option><option>自定义</option></select>
          <input class="input" style="width:200px" placeholder="搜索 API Key 名称...">
        </div>
        <button class="btn btn-primary btn-sm" onclick="showApiKeyForm()">添加 Key</button>
      </div>
      <table><thead><tr><th>名称</th><th>Key</th><th>创建日期</th><th>最新使用</th><th>状态</th><th>操作</th></tr></thead>
      <tbody>${keys.map(k=>`<tr>
        <td class="font-medium">${k.name}</td>
        <td>
          <div class="flex items-center gap-1.5">
            <code style="font-family:monospace;font-size:12px;color:var(--muted-foreground)">${maskKey(k.fullKey)}</code>
            <button class="btn btn-ghost btn-sm" style="padding:2px 4px" onclick="copyApiKey('${k.fullKey}',event)" title="复制 Key">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
            </button>
          </div>
        </td>
        <td style="font-size:12px;color:var(--muted-foreground)">${k.createdAt}</td>
        <td style="font-size:12px;color:var(--muted-foreground)">${k.lastUsed}</td>
        <td><span class="badge ${k.status===1?'b-success':'b-neutral'}">${k.status===1?'启用':'禁用'}</span></td>
        <td>
          <div class="flex items-center gap-1">
            <button class="btn btn-ghost btn-sm" onclick="toggleApiKey(${k.id})">${k.status===1?'禁用':'启用'}</button>
            <button class="btn btn-ghost btn-sm" style="color:var(--destructive)" onclick="deleteApiKey(${k.id})">删除</button>
          </div>
        </td>
      </tr>`).join('')}</tbody></table>
      ${paginationHTML(keys.length,1,10)}
    </div>`;
}

// ===== 使用日志（简化，移除详情列） =====
function tblLogs(){
  const logs = [
    {id:'log-20260811-001',time:'2026-08-11 14:35:22',agent:'partner_lisi',user:'zhangsan',token:'sk-xxx88f',model:'ali-qwen-2-0-260128',stream:'否',promptTokens:120,completionTokens:850,totalTokens:970,cost:23.0,duration:12.5,status:'success'},
    {id:'log-20260811-002',time:'2026-08-11 14:33:10',agent:'partner_lisi',user:'zhangsan',token:'sk-xxx88f',model:'ali-qwen-2-0-fast-260128',stream:'是',promptTokens:80,completionTokens:420,totalTokens:500,cost:18.5,duration:8.2,status:'success'},
    {id:'log-20260811-003',time:'2026-08-11 14:30:45',agent:'partner_lisi',user:'wangwu',token:'sk-xxx32a',model:'ali-qwen-2-0-mini-260615',stream:'否',promptTokens:50,completionTokens:210,totalTokens:260,cost:11.5,duration:5.1,status:'success'},
    {id:'log-20260811-004',time:'2026-08-11 14:28:33',agent:'直营',user:'zhaoliu',token:'sk-xxx55c',model:'ali-qwen-2-0-260128',stream:'否',promptTokens:0,completionTokens:0,totalTokens:0,cost:0,duration:2.8,status:'error'},
    {id:'log-20260811-005',time:'2026-08-11 14:25:18',agent:'partner_zhao',user:'user_a',token:'sk-xxx77d',model:'ali-qwen-2-0-260128',stream:'是',promptTokens:150,completionTokens:680,totalTokens:830,cost:19.6,duration:15.3,status:'success'},
    {id:'log-20260811-006',time:'2026-08-11 14:22:05',agent:'partner_wang',user:'qianqi',token:'sk-xxx99e',model:'ali-qwen-2-0-fast-260128',stream:'否',promptTokens:60,completionTokens:320,totalTokens:380,cost:14.2,duration:7.6,status:'success'},
  ];
  const totalCost = logs.filter(l=>l.status==='success').reduce((s,l)=>s+l.cost,0);
  const totalTokens = logs.filter(l=>l.status==='success').reduce((s,l)=>s+l.totalTokens,0);

  const myLogs = [
    {id:1,requestId:'req-20260811-150122-001',apiKeyId:1001,modelId:1,modelName:'通义千问 Qwen2.5-72B',modelCode:'qwen/qwen2.5-72b-instruct',symbol:'qwen',modelType:'Chat',requestTime:'2026-08-11 15:01:22',responseTimeMs:1020,statusCode:200,status:'success',promptTokens:200,completionTokens:650,totalTokens:850,imageCount:0,videoCount:0,clientUuid:'mt_xxxxxMYTX9'},
    {id:2,requestId:'req-20260811-145510-002',apiKeyId:1001,modelId:2,modelName:'通义千问 Qwen2.5-Turbo',modelCode:'qwen/qwen2.5-turbo',symbol:'qwen',modelType:'Chat',requestTime:'2026-08-11 14:55:10',responseTimeMs:680,statusCode:200,status:'success',promptTokens:120,completionTokens:380,totalTokens:500,imageCount:0,videoCount:0,clientUuid:'mt_xxxxxMYTX9'},
    {id:3,requestId:'req-20260811-144845-003',apiKeyId:1002,modelId:3,modelName:'通义千问 Qwen2.5-Mini',modelCode:'qwen/qwen2.5-mini',symbol:'qwen',modelType:'Chat',requestTime:'2026-08-11 14:48:45',responseTimeMs:410,statusCode:200,status:'success',promptTokens:60,completionTokens:180,totalTokens:240,imageCount:0,videoCount:0,clientUuid:'mt_xxxxxMYTX9'},
    {id:4,requestId:'req-20260811-144030-004',apiKeyId:1001,modelId:1,modelName:'通义千问 Qwen2.5-72B',modelCode:'qwen/qwen2.5-72b-instruct',symbol:'qwen',modelType:'Chat',requestTime:'2026-08-11 14:40:30',responseTimeMs:150,statusCode:401,status:'error',promptTokens:0,completionTokens:0,totalTokens:0,imageCount:0,videoCount:0,clientUuid:'mt_xxxxxMYTX9'},
    {id:5,requestId:'req-20260811-143522-005',apiKeyId:1001,modelId:4,modelName:'Qwen-VL-Max',modelCode:'qwen/qwen-vl-max',symbol:'qwen',modelType:'多模态',requestTime:'2026-08-11 14:35:22',responseTimeMs:3500,statusCode:200,status:'success',promptTokens:1500,completionTokens:480,totalTokens:1980,imageCount:2,videoCount:0,clientUuid:'mt_xxxxxMYTX9'},
  ];
  const myTotalTokens = myLogs.filter(l=>l.status==='success').reduce((s,l)=>s+l.totalTokens,0);
  const mySuccessCount = myLogs.filter(l=>l.status==='success').length;
  const mySuccessRate = myLogs.length>0 ? ((mySuccessCount/myLogs.length)*100).toFixed(1) : '0.0';

  return `
    <div class="tab-bar mb-3">
      <button class="tab active" onclick="switchLogTab(this,'log-user')">用户日志</button>
      <button class="tab" onclick="switchLogTab(this,'log-mine')">我的日志</button>
    </div>
    <div id="log-user">
      <div class="card overflow-hidden">
        <div class="flex items-center gap-2 p-3 flex-wrap" style="border-bottom:1px solid var(--border)">
          <select class="input" style="width:120px"><option>今天</option><option>近7天</option><option>近30天</option><option>自定义</option></select>
          <select class="input" style="width:140px"><option>全部代理</option><option>partner_lisi</option><option>partner_zhao</option><option>partner_wang</option><option>直营</option></select>
          <select class="input" style="width:140px"><option>全部模型</option>${MODELS.map(m=>`<option>${MODEL_SHORT[m]}</option>`).join('')}</select>
          <select class="input" style="width:100px"><option>全部状态</option><option>成功</option><option>失败</option></select>
          <input class="input" style="width:140px" placeholder="搜索用户名...">
          <button class="btn btn-outline btn-sm ml-auto" onclick="showExportConfirm('log-user', ${logs.length})">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            导出
          </button>
        </div>
        <div class="overflow-x-auto">
        <table data-export-type="log-user"><thead><tr><th style="width:40px">${getExportAllCheckbox('log-user', logs.map(l=>l.id))}</th><th>时间</th><th>代理</th><th>用户</th><th>令牌</th><th>模型</th><th>流</th><th>Tokens</th><th>费用(¥)</th><th>耗时(s)</th><th>状态</th><th>操作</th></tr></thead>
        <tbody>${logs.map(l=>`<tr>
          <td>${getExportCheckbox('log-user', l.id)}</td>
          <td style="color:var(--muted-foreground);font-size:12px">${l.time}</td>
          <td style="color:var(--muted-foreground);font-size:12px">${l.agent}</td>
          <td class="font-medium">${l.user}</td>
          <td style="font-family:monospace;font-size:11px;color:var(--muted-foreground)">${l.token}</td>
          <td class="text-xs">${MODEL_SHORT[l.model]||l.model}</td>
          <td>${l.stream==='是'?'<span class="badge b-info">流式</span>':'<span class="badge b-neutral">同步</span>'}</td>
          <td style="font-size:12px;font-family:monospace">${l.totalTokens>0?l.totalTokens.toLocaleString():'—'}</td>
          <td class="font-semibold">${l.cost > 0 ? l.cost.toFixed(2) : '—'}</td>
          <td style="font-size:12px;color:var(--muted-foreground)">${l.duration}</td>
          <td><span class="badge ${l.status==='success'?'b-success':'b-danger'}">${l.status==='success'?'成功':'失败'}</span></td>
          <td><button class="btn btn-ghost btn-sm" onclick="showLogDetail('${l.id}')">详情</button></td>
        </tr>`).join('')}</tbody></table>
        </div>
        <div class="flex items-center justify-center px-4 py-3 gap-4" style="border-top:1px solid var(--border)">
          <div class="text-xs" style="color:var(--muted-foreground);white-space:nowrap">
            共 <strong style="color:var(--foreground)">${logs.length}</strong> 条 · 总消费 ¥${totalCost.toFixed(2)} · 总 Token ${totalTokens.toLocaleString()}
          </div>
          <div class="flex items-center gap-1">
            <button class="btn btn-ghost btn-sm" disabled style="opacity:0.4;cursor:not-allowed">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button class="btn btn-primary btn-sm" style="min-width:32px;padding:4px 8px">1</button>
            <button class="btn btn-ghost btn-sm" style="min-width:32px;padding:4px 8px">2</button>
            <button class="btn btn-ghost btn-sm" style="min-width:32px;padding:4px 8px">3</button>
            <button class="btn btn-ghost btn-sm">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
          <div class="flex items-center gap-1 text-xs" style="color:var(--muted-foreground);white-space:nowrap">
            <span>每页</span>
            <select class="input" style="width:auto;padding:2px 8px;font-size:12px;height:28px">
              <option>10 条</option>
              <option>20 条</option>
              <option>50 条</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div id="log-mine" style="display:none">
      <div class="card overflow-hidden">
        <div class="flex items-center gap-2 p-3 flex-wrap" style="border-bottom:1px solid var(--border)">
          <select class="input" style="width:120px"><option>近1小时</option><option>近6小时</option><option selected>近24小时</option><option>近7天</option><option>近30天</option><option>自定义</option></select>
          <select class="input" style="width:160px"><option>全部模型</option><option>qwen/qwen2.5-72b-instruct</option><option>qwen/qwen2.5-turbo</option><option>qwen/qwen2.5-mini</option><option>qwen/qwen-vl-max</option></select>
          <select class="input" style="width:100px"><option>全部状态</option><option>成功</option><option>失败</option></select>
          <input class="input" style="width:180px" placeholder="搜索 Request ID...">
          <button class="btn btn-outline btn-sm ml-auto" onclick="showExportConfirm('log-mine', ${myLogs.length})">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            导出
          </button>
        </div>
        <div class="overflow-x-auto">
        <table data-export-type="log-mine"><thead><tr><th style="width:40px">${getExportAllCheckbox('log-mine', myLogs.map(l=>l.id))}</th><th>请求时间</th><th>Request ID</th><th>模型</th><th>模型类型</th><th>输入Token</th><th>输出Token</th><th>状态码</th><th>状态</th></tr></thead>
        <tbody>${myLogs.map(l=>`<tr>
          <td>${getExportCheckbox('log-mine', l.id)}</td>
          <td style="color:var(--muted-foreground);font-size:12px">${l.requestTime}</td>
          <td style="font-family:monospace;font-size:11px;color:var(--muted-foreground)">${l.requestId}</td>
          <td>
            <div class="text-xs font-medium">${l.modelName}</div>
            <div style="font-family:monospace;font-size:10px;color:var(--muted-foreground)">${l.modelCode}</div>
          </td>
          <td><span class="badge b-neutral" style="font-size:10px">${l.modelType}</span></td>
          <td style="font-size:12px;font-family:monospace">${l.promptTokens>0?l.promptTokens.toLocaleString():'—'}</td>
          <td style="font-size:12px;font-family:monospace">${l.completionTokens>0?l.completionTokens.toLocaleString():'—'}</td>
          <td style="font-family:monospace;font-size:12px;color:${l.statusCode>=400?'var(--destructive)':'var(--muted-foreground)'}">${l.statusCode}</td>
          <td><span class="badge ${l.status==='success'?'b-success':'b-danger'}">${l.status==='success'?'成功':'失败'}</span></td>
        </tr>`).join('')}</tbody></table>
        </div>
        <div class="flex items-center justify-center px-4 py-3 gap-4" style="border-top:1px solid var(--border)">
          <div class="text-xs" style="color:var(--muted-foreground);white-space:nowrap">
            共 <strong style="color:var(--foreground)">${myLogs.length}</strong> 条
          </div>
          <div class="flex items-center gap-1">
            <button class="btn btn-ghost btn-sm" disabled style="opacity:0.4;cursor:not-allowed">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button class="btn btn-primary btn-sm" style="min-width:32px;padding:4px 8px">1</button>
            <button class="btn btn-ghost btn-sm" style="min-width:32px;padding:4px 8px">2</button>
            <button class="btn btn-ghost btn-sm">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
          <div class="flex items-center gap-1 text-xs" style="color:var(--muted-foreground);white-space:nowrap">
            <span>每页</span>
            <select class="input" style="width:auto;padding:2px 8px;font-size:12px;height:28px">
              <option>10 条</option>
              <option>20 条</option>
              <option>50 条</option>
            </select>
          </div>
        </div>
      </div>
    </div>`;
}

function switchLogTab(btn,id){
  btn.parentElement.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('log-user').style.display=id==='log-user'?'block':'none';
  document.getElementById('log-mine').style.display=id==='log-mine'?'block':'none';
  if(id === 'log-mine') updateExportSelectUI('log-mine');
  if(id === 'log-user') updateExportSelectUI('log-user');
}

function applyOverviewFiltersToLogs(){
  if(!overviewFilterParams) return;
  const tr = overviewFilterParams.timeRange;
  const md = overviewFilterParams.model;
  if(curRole==='admin'){
    const userTab = document.querySelector('#log-user');
    if(userTab){
      const selects = userTab.querySelectorAll('select');
      if(selects[0]) selects[0].value = tr;
      if(selects[2]) selects[2].value = md;
    }
    if(logInitialTab==='log-user'){
      const tabs = document.querySelectorAll('.tab-bar .tab');
      if(tabs.length>=2){
        tabs[0].classList.add('active');
        tabs[1].classList.remove('active');
        const lu = document.getElementById('log-user');
        const lm = document.getElementById('log-mine');
        if(lu) lu.style.display='block';
        if(lm) lm.style.display='none';
      }
    }
    logInitialTab = null;
  }else{
    // 找到包含筛选器的card（包含select最多的card通常是筛选栏）
    const cards = document.querySelectorAll('#page-content .card');
    let targetCard = null;
    let maxSelects = 0;
    cards.forEach(card => {
      const selects = card.querySelectorAll('select');
      if(selects.length > maxSelects){
        maxSelects = selects.length;
        targetCard = card;
      }
    });
    if(targetCard){
      const selects = targetCard.querySelectorAll('select');
      if(selects[0]) selects[0].value = tr;
      if(selects[1]) selects[1].value = md;
    }
  }
}

// ===== 代理端 - 使用日志（运营端减法：去掉"全部代理"筛选和"代理"列） =====
function agentLogs(){
  const logs = [
    {id:'log-20260811-001',time:'2026-08-11 14:35:22',user:'zhangsan',token:'sk-xxx88f',model:'ali-qwen-2-0-260128',stream:'否',promptTokens:120,completionTokens:850,totalTokens:970,cost:23.0,duration:12.5,status:'success'},
    {id:'log-20260811-002',time:'2026-08-11 14:33:10',user:'zhangsan',token:'sk-xxx88f',model:'ali-qwen-2-0-fast-260128',stream:'是',promptTokens:80,completionTokens:420,totalTokens:500,cost:18.5,duration:8.2,status:'success'},
    {id:'log-20260811-003',time:'2026-08-11 14:30:45',user:'wangwu',token:'sk-xxx32a',model:'ali-qwen-2-0-mini-260615',stream:'否',promptTokens:50,completionTokens:210,totalTokens:260,cost:11.5,duration:5.1,status:'success'},
    {id:'log-20260811-007',time:'2026-08-11 14:20:12',user:'wangwu',token:'sk-xxx32a',model:'ali-qwen-2-0-260128',stream:'是',promptTokens:90,completionTokens:450,totalTokens:540,cost:12.8,duration:9.4,status:'success'},
  ];
  const totalCost = logs.filter(l=>l.status==='success').reduce((s,l)=>s+l.cost,0);
  const totalTokens = logs.filter(l=>l.status==='success').reduce((s,l)=>s+l.totalTokens,0);
  return `
    <div class="card overflow-hidden">
    <div class="flex items-center gap-2 p-3 flex-wrap" style="border-bottom:1px solid var(--border)">
      <select class="input" style="width:120px"><option>今天</option><option>近7天</option><option>近30天</option><option>自定义</option></select>
      <select class="input" style="width:140px"><option>全部模型</option>${MODELS.map(m=>`<option>${MODEL_SHORT[m]}</option>`).join('')}</select>
      <input class="input" style="width:140px" placeholder="搜索用户名...">
      <select class="input" style="width:100px"><option>全部状态</option><option>成功</option><option>失败</option></select>
      <button class="btn btn-outline btn-sm ml-auto" onclick="showExportConfirm('agent-logs', ${logs.length})">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
        导出
      </button>
    </div>
    <div class="overflow-x-auto">
    <table data-export-type="agent-logs"><thead><tr><th style="width:40px">${getExportAllCheckbox('agent-logs', logs.map(l=>l.id))}</th><th>时间</th><th>用户</th><th>令牌</th><th>模型</th><th>流</th><th>Tokens</th><th>费用(¥)</th><th>耗时(s)</th><th>状态</th></tr></thead>
    <tbody>${logs.map(l=>`<tr>
      <td>${getExportCheckbox('agent-logs', l.id)}</td>
      <td style="color:var(--muted-foreground);font-size:12px">${l.time}</td>
      <td class="font-medium">${l.user}</td>
      <td style="font-family:monospace;font-size:11px;color:var(--muted-foreground)">${l.token}</td>
      <td class="text-xs">${MODEL_SHORT[l.model]||l.model}</td>
      <td>${l.stream==='是'?'<span class="badge b-info">流式</span>':'<span class="badge b-neutral">同步</span>'}</td>
      <td style="font-size:12px;font-family:monospace">${l.totalTokens>0?l.totalTokens.toLocaleString():'—'}</td>
      <td class="font-semibold">${l.cost > 0 ? l.cost.toFixed(2) : '—'}</td>
      <td style="font-size:12px;color:var(--muted-foreground)">${l.duration}</td>
      <td><span class="badge ${l.status==='success'?'b-success':'b-danger'}">${l.status==='success'?'成功':'失败'}</span></td>
    </tr>`).join('')}</tbody></table>
    </div>
    <div class="flex items-center justify-center px-4 py-3 gap-4" style="border-top:1px solid var(--border)">
      <div class="text-xs" style="color:var(--muted-foreground);white-space:nowrap">
        共 <strong style="color:var(--foreground)">${logs.length}</strong> 条 · 总消费 ¥${totalCost.toFixed(2)} · 总 Token ${totalTokens.toLocaleString()}
      </div>
      <div class="flex items-center gap-1">
        <button class="btn btn-ghost btn-sm" disabled style="opacity:0.4;cursor:not-allowed">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button class="btn btn-primary btn-sm" style="min-width:32px;padding:4px 8px">1</button>
        <button class="btn btn-ghost btn-sm">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>
      <div class="flex items-center gap-1 text-xs" style="color:var(--muted-foreground);white-space:nowrap">
        <span>每页</span>
        <select class="input" style="width:auto;padding:2px 8px;font-size:12px;height:28px">
          <option>10 条</option>
          <option>20 条</option>
          <option>50 条</option>
        </select>
      </div>
    </div>
    <div class="p-2 text-[11px] text-center" style="background:var(--muted);color:var(--muted-foreground);border-top:1px solid var(--border)">
      数据按 agent_id 过滤 — 仅显示名下用户的日志
    </div>
  </div>`;
}

// ===== 用户端 - 使用日志（运营端减法：去掉"全部代理"筛选、"代理"列、"用户"列） =====
function userLogs(){
  const logs = [
    {id:'log-20260811-001',time:'2026-08-11 14:35:22',token:'sk-xxx88f',model:'ali-qwen-2-0-260128',stream:'否',promptTokens:120,completionTokens:850,totalTokens:970,cost:23.0,duration:12.5,status:'success'},
    {id:'log-20260811-002',time:'2026-08-11 14:33:10',token:'sk-xxx88f',model:'ali-qwen-2-0-fast-260128',stream:'是',promptTokens:80,completionTokens:420,totalTokens:500,cost:18.5,duration:8.2,status:'success'},
    {id:'log-20260811-008',time:'2026-08-11 14:15:30',token:'sk-xxx88f',model:'ali-qwen-2-0-mini-260615',stream:'否',promptTokens:30,completionTokens:120,totalTokens:150,cost:3.5,duration:4.2,status:'success'},
    {id:'log-20260811-009',time:'2026-08-11 14:10:05',token:'sk-xxx88f',model:'ali-qwen-2-0-260128',stream:'是',promptTokens:0,completionTokens:0,totalTokens:0,cost:0,duration:1.8,status:'error'},
  ];
  // 从账单「费用详情」跳转过来时，仅展示对应账期的日志
  let displayLogs = logs;
  if(billTracePeriod){
    displayLogs = logs.filter(l=>l.time && l.time.startsWith(billTracePeriod));
  }
  const traceBanner = billTracePeriod ? `<div class="flex items-center gap-2 px-3 py-2 text-xs" style="background:color-mix(in srgb,var(--primary) 7%,transparent);border-bottom:1px solid color-mix(in srgb,var(--primary) 22%,var(--border));color:var(--muted-foreground)">
    <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color:var(--primary)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/></svg>
    <span>正在查看 <b style="color:var(--foreground)">${(BILLS.find(b=>b.user===BILL_USER && b.period===billTracePeriod)||{}).periodLabel||billTracePeriod}</b> 账期的费用日志</span>
    <button class="btn btn-ghost btn-sm ml-auto" style="color:var(--primary)" onclick="clearBillTrace()">清除筛选</button>
  </div>` : '';
  const totalCost = displayLogs.filter(l=>l.status==='success').reduce((s,l)=>s+l.cost,0);
  const totalTokens = displayLogs.filter(l=>l.status==='success').reduce((s,l)=>s+l.totalTokens,0);
  return `
    <div class="card overflow-hidden">
    ${traceBanner}
    <div class="flex items-center gap-2 p-3 flex-wrap" style="border-bottom:1px solid var(--border)">
      <select class="input" style="width:120px"><option>今天</option><option>近7天</option><option>近30天</option><option>自定义</option></select>
      <select class="input" style="width:140px"><option>全部模型</option>${MODELS.map(m=>`<option>${MODEL_SHORT[m]}</option>`).join('')}</select>
      <select class="input" style="width:100px"><option>全部状态</option><option>成功</option><option>失败</option></select>
      <button class="btn btn-outline btn-sm ml-auto" onclick="showExportConfirm('user-logs', ${displayLogs.length})">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
        导出
      </button>
    </div>
    <div class="overflow-x-auto">
    <table data-export-type="user-logs"><thead><tr><th style="width:40px">${getExportAllCheckbox('user-logs', displayLogs.map(l=>l.id))}</th><th>时间</th><th>令牌</th><th>模型</th><th>流</th><th>Tokens</th><th>费用(¥)</th><th>耗时(s)</th><th>状态</th></tr></thead>
    <tbody>${displayLogs.map(l=>`<tr>
      <td>${getExportCheckbox('user-logs', l.id)}</td>
      <td style="color:var(--muted-foreground);font-size:12px">${l.time}</td>
      <td style="font-family:monospace;font-size:11px;color:var(--muted-foreground)">${l.token}</td>
      <td class="text-xs">${MODEL_SHORT[l.model]||l.model}</td>
      <td>${l.stream==='是'?'<span class="badge b-info">流式</span>':'<span class="badge b-neutral">同步</span>'}</td>
      <td style="font-size:12px;font-family:monospace">${l.totalTokens>0?l.totalTokens.toLocaleString():'—'}</td>
      <td class="font-semibold">${l.cost > 0 ? l.cost.toFixed(2) : '—'}</td>
      <td style="font-size:12px;color:var(--muted-foreground)">${l.duration}</td>
      <td><span class="badge ${l.status==='success'?'b-success':'b-danger'}">${l.status==='success'?'成功':'失败'}</span></td>
    </tr>`).join('')}</tbody></table>
    </div>
    <div class="flex items-center justify-center px-4 py-3 gap-4" style="border-top:1px solid var(--border)">
      <div class="text-xs" style="color:var(--muted-foreground);white-space:nowrap">
        共 <strong style="color:var(--foreground)">${displayLogs.length}</strong> 条 · 总消费 ¥${totalCost.toFixed(2)} · 总 Token ${totalTokens.toLocaleString()}
      </div>
      <div class="flex items-center gap-1">
        <button class="btn btn-ghost btn-sm" disabled style="opacity:0.4;cursor:not-allowed">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button class="btn btn-primary btn-sm" style="min-width:32px;padding:4px 8px">1</button>
        <button class="btn btn-ghost btn-sm">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>
      <div class="flex items-center gap-1 text-xs" style="color:var(--muted-foreground);white-space:nowrap">
        <span>每页</span>
        <select class="input" style="width:auto;padding:2px 8px;font-size:12px;height:28px">
          <option>10 条</option>
          <option>20 条</option>
          <option>50 条</option>
        </select>
      </div>
    </div>
    <div class="p-2 text-[11px] text-center" style="background:var(--muted);color:var(--muted-foreground);border-top:1px solid var(--border)">
      数据按 user_id 过滤 — 仅显示您的调用日志
    </div>
  </div>`;
}

const LOG_DETAIL_DATA = {
  'log-20260811-001':{
    id:'log-20260811-001',reqId:'req-abc123def456',
    agent:'partner_lisi',token:'sk-xxx88f',duration:'12.5s',status:'success',
    path:'/v1/videos/generations',
    promptTokens:120,completionTokens:850,totalTokens:970,
    modelRatio:5,customRatio:1,userDiscount:0.85,
    unitPrice:'¥10.00 / 1M tokens',finalCost:23.00,
  },
  'log-admin-001':{
    id:'log-admin-001',reqId:'req-root001a2b3c',
    agent:'—',token:'sk-root001',duration:'10.2s',status:'success',
    path:'/v1/videos/generations',
    promptTokens:200,completionTokens:650,totalTokens:850,
    modelRatio:5,customRatio:1,userDiscount:1.00,
    unitPrice:'¥10.00 / 1M tokens',finalCost:19.55,
  },
  'log-admin-002':{
    id:'log-admin-002',reqId:'req-root002x4y5z',
    agent:'—',token:'sk-root001',duration:'6.8s',status:'success',
    path:'/v1/videos/generations',
    promptTokens:120,completionTokens:380,totalTokens:500,
    modelRatio:3,customRatio:1,userDiscount:1.00,
    unitPrice:'¥6.00 / 1M tokens',finalCost:9.25,
  },
};

function showObsLogDetail(id){
  // 从 myLogs 中查找（简化处理，实际应该从数据源获取）
  const myLogs = [
    {id:1,requestId:'req-20260811-150122-001',apiKeyId:1001,modelId:1,modelName:'通义千问 Qwen2.5-72B',modelCode:'qwen/qwen2.5-72b-instruct',symbol:'qwen',modelType:'Chat',requestTime:'2026-08-11 15:01:22',responseTimeMs:1020,statusCode:200,status:'success',promptTokens:200,completionTokens:650,totalTokens:850,imageCount:0,videoCount:0,videoDuration:0,clientUuid:'mt_xxxxxMYTX9',requestBody:'{"model":"qwen/qwen2.5-72b-instruct","messages":[{"role":"user","content":"你好"}]}',responseBody:'{"choices":[{"message":{"role":"assistant","content":"你好！有什么可以帮您的？"}}]}'},
    {id:2,requestId:'req-20260811-145510-002',apiKeyId:1001,modelId:2,modelName:'通义千问 Qwen2.5-Turbo',modelCode:'qwen/qwen2.5-turbo',symbol:'qwen',modelType:'Chat',requestTime:'2026-08-11 14:55:10',responseTimeMs:680,statusCode:200,status:'success',promptTokens:120,completionTokens:380,totalTokens:500,imageCount:0,videoCount:0,videoDuration:0,clientUuid:'mt_xxxxxMYTX9',requestBody:'{"model":"qwen/qwen2.5-turbo","messages":[{"role":"user","content":"介绍一下自己"}]}',responseBody:'{"choices":[{"message":{"role":"assistant","content":"我是通义千问..."}}]}'},
    {id:3,requestId:'req-20260811-144845-003',apiKeyId:1002,modelId:3,modelName:'通义千问 Qwen2.5-Mini',modelCode:'qwen/qwen2.5-mini',symbol:'qwen',modelType:'Chat',requestTime:'2026-08-11 14:48:45',responseTimeMs:410,statusCode:200,status:'success',promptTokens:60,completionTokens:180,totalTokens:240,imageCount:0,videoCount:0,videoDuration:0,clientUuid:'mt_xxxxxMYTX9',requestBody:'{"model":"qwen/qwen2.5-mini","messages":[{"role":"user","content":"hi"}]}',responseBody:'{"choices":[{"message":{"role":"assistant","content":"Hello!"}}]}'},
    {id:4,requestId:'req-20260811-144030-004',apiKeyId:1001,modelId:1,modelName:'通义千问 Qwen2.5-72B',modelCode:'qwen/qwen2.5-72b-instruct',symbol:'qwen',modelType:'Chat',requestTime:'2026-08-11 14:40:30',responseTimeMs:150,statusCode:401,status:'error',promptTokens:0,completionTokens:0,totalTokens:0,imageCount:0,videoCount:0,videoDuration:0,clientUuid:'mt_xxxxxMYTX9',requestBody:'{}',responseBody:'{"code":"InvalidApiKey","message":"API Key 无效或已过期"}'},
    {id:5,requestId:'req-20260811-143522-005',apiKeyId:1001,modelId:4,modelName:'Qwen-VL-Max',modelCode:'qwen/qwen-vl-max',symbol:'qwen',modelType:'多模态',requestTime:'2026-08-11 14:35:22',responseTimeMs:3500,statusCode:200,status:'success',promptTokens:1500,completionTokens:480,totalTokens:1980,imageCount:2,videoCount:0,videoDuration:0,clientUuid:'mt_xxxxxMYTX9',requestBody:'{"model":"qwen/qwen-vl-max","messages":[{"role":"user","content":"描述这张图片"}]}',responseBody:'{"choices":[{"message":{"role":"assistant","content":"这张图片展示了..."}}]}'},
  ];
  const l = myLogs.find(x=>x.id===id);
  if(!l) return;
  const modal = `
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal" style="max-width:720px;max-height:85vh;overflow-y:auto" onclick="event.stopPropagation()">
        <div class="modal-header">
          <div class="flex items-center gap-3">
            <div class="icon-badge ib-chart-4" style="width:36px;height:36px;border-radius:8px"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:18px;height:18px"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg></div>
            <div>
              <div class="text-base font-semibold">调用详情</div>
              <div class="text-xs" style="color:var(--muted-foreground);font-family:monospace">${l.requestId}</div>
            </div>
          </div>
          <button class="icon-btn" onclick="closeModal()">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        <div class="modal-body space-y-4">
          <div class="grid grid-cols-2 gap-3">
            <div class="p-3 rounded-lg" style="background:var(--muted)">
              <div class="text-xs mb-1" style="color:var(--muted-foreground)">请求时间</div>
              <div class="text-sm font-medium">${l.requestTime}</div>
            </div>
            <div class="p-3 rounded-lg" style="background:var(--muted)">
              <div class="text-xs mb-1" style="color:var(--muted-foreground)">响应耗时</div>
              <div class="text-sm font-medium">${l.responseTimeMs} ms</div>
            </div>
            <div class="p-3 rounded-lg" style="background:var(--muted)">
              <div class="text-xs mb-1" style="color:var(--muted-foreground)">状态码</div>
              <div class="text-sm font-medium" style="color:${l.statusCode>=400?'var(--destructive)':'var(--success)'}">${l.statusCode}</div>
            </div>
            <div class="p-3 rounded-lg" style="background:var(--muted)">
              <div class="text-xs mb-1" style="color:var(--muted-foreground)">状态</div>
              <div><span class="badge ${l.status==='success'?'b-success':'b-danger'}">${l.status==='success'?'成功':'失败'}</span></div>
            </div>
          </div>
          <div class="p-3 rounded-lg" style="background:var(--muted)">
            <div class="text-xs font-semibold mb-2" style="color:var(--muted-foreground)">模型信息</div>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between"><span style="color:var(--muted-foreground)">模型名称</span><span class="font-medium">${l.modelName}</span></div>
              <div class="flex justify-between"><span style="color:var(--muted-foreground)">模型类型</span><span class="badge b-neutral" style="font-size:10px">${l.modelType}</span></div>
              <div class="flex justify-between"><span style="color:var(--muted-foreground)">厂商标识</span><span style="font-family:monospace">${l.symbol}</span></div>
            </div>
          </div>
          <div class="p-3 rounded-lg" style="background:var(--muted)">
            <div class="text-xs font-semibold mb-2" style="color:var(--muted-foreground)">调用方信息</div>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between"><span style="color:var(--muted-foreground)">API Key ID</span><span style="font-family:monospace">#${l.apiKeyId}</span></div>
              <div class="flex justify-between"><span style="color:var(--muted-foreground)">Client UUID</span><span style="font-family:monospace;font-size:12px">${l.clientUuid}</span></div>
            </div>
          </div>
          <div class="p-3 rounded-lg" style="background:var(--muted)">
            <div class="text-xs font-semibold mb-2" style="color:var(--muted-foreground)">Token 用量</div>
            <div class="grid grid-cols-3 gap-3 text-center">
              <div>
                <div class="text-xs mb-1" style="color:var(--muted-foreground)">输入 Token</div>
                <div class="text-base font-semibold">${l.promptTokens.toLocaleString()}</div>
              </div>
              <div>
                <div class="text-xs mb-1" style="color:var(--muted-foreground)">输出 Token</div>
                <div class="text-base font-semibold">${l.completionTokens.toLocaleString()}</div>
              </div>
              <div>
                <div class="text-xs mb-1" style="color:var(--muted-foreground)">总计</div>
                <div class="text-base font-semibold" style="color:var(--primary)">${l.totalTokens.toLocaleString()}</div>
              </div>
            </div>
            ${(l.imageCount>0||l.videoCount>0)?`<div class="mt-3 pt-3" style="border-top:1px solid var(--border)">
              <div class="flex gap-4 text-xs">
                ${l.imageCount>0?`<span style="color:var(--muted-foreground)">图片数：<span class="font-medium" style="color:var(--foreground)">${l.imageCount}</span></span>`:''}
                ${l.videoCount>0?`<span style="color:var(--muted-foreground)">视频数：<span class="font-medium" style="color:var(--foreground)">${l.videoCount}</span></span>`:''}
                ${l.videoDuration>0?`<span style="color:var(--muted-foreground)">视频时长：<span class="font-medium" style="color:var(--foreground)">${l.videoDuration}s</span></span>`:''}
              </div>
            </div>`:''}
          </div>
          <div>
            <div class="text-xs font-semibold mb-2" style="color:var(--muted-foreground)">请求体 (Request Body)</div>
            <pre class="p-3 rounded-lg" style="background:#1e1e2e;color:#cdd6f4;font-size:12px;line-height:1.6;overflow-x:auto;max-height:200px;overflow-y:auto"><code>${JSON.stringify(JSON.parse(l.requestBody),null,2)}</code></pre>
          </div>
          <div>
            <div class="text-xs font-semibold mb-2" style="color:var(--muted-foreground)">响应体 (Response Body)</div>
            <pre class="p-3 rounded-lg" style="background:#1e1e2e;color:#cdd6f4;font-size:12px;line-height:1.6;overflow-x:auto;max-height:200px;overflow-y:auto"><code>${JSON.stringify(JSON.parse(l.responseBody),null,2)}</code></pre>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary btn-sm" onclick="closeModal()">关闭</button>
        </div>
      </div>
    </div>`;
  document.getElementById('modal-container').innerHTML = modal;
}

function showLogDetail(id){
  const d = LOG_DETAIL_DATA[id] || {
    id:id,reqId:'req-'+Math.random().toString(36).substring(2,12),
    agent:'partner_lisi',token:'sk-xxx88f',duration:'8.2s',status:'success',
    path:'/v1/videos/generations',
    promptTokens:80,completionTokens:420,totalTokens:500,
    modelRatio:3,customRatio:1,userDiscount:0.85,
    unitPrice:'¥6.00 / 1M tokens',finalCost:18.50,
  };
  showModal(`<div class="p-5" style="max-width:680px">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-base font-semibold">日志详情</h3>
      <span class="badge ${d.status==='success'?'b-success':'b-danger'}">${d.status==='success'?'成功':'失败'}</span>
    </div>
    <div class="tab-bar" style="margin-bottom:12px">
      <button class="tab active" onclick="switchLogDetailTab(this,'log-req-${d.id}')">请求信息</button>
      <button class="tab" onclick="switchLogDetailTab(this,'log-token-${d.id}')">Token 明细</button>
      <button class="tab" onclick="switchLogDetailTab(this,'log-bill-${d.id}')">计费详情</button>
    </div>
    <div id="log-req-${d.id}">
      <div class="space-y-2 p-3 rounded-lg text-xs" style="background:var(--muted)">
        <div class="flex justify-between"><span style="color:var(--muted-foreground)">请求 ID</span><span style="font-family:monospace">${d.reqId}</span></div>
        <div class="flex justify-between"><span style="color:var(--muted-foreground)">代理</span><span>${d.agent}</span></div>
        <div class="flex justify-between"><span style="color:var(--muted-foreground)">令牌</span><span style="font-family:monospace">${d.token}</span></div>
        <div class="flex justify-between"><span style="color:var(--muted-foreground)">响应时间</span><span>${d.duration}</span></div>
        <div class="flex justify-between"><span style="color:var(--muted-foreground)">请求路径</span><span style="font-family:monospace">${d.path}</span></div>
      </div>
    </div>
    <div id="log-token-${d.id}" style="display:none">
      <div class="grid grid-cols-3 gap-2 mb-3">
        <div class="p-3 rounded-lg text-center" style="background:var(--muted)">
          <div class="text-[11px]" style="color:var(--muted-foreground)">输入 Tokens</div>
          <div class="text-lg font-semibold mt-1">${d.promptTokens.toLocaleString()}</div>
          <div class="text-[10px]" style="color:var(--muted-foreground)">Prompt</div>
        </div>
        <div class="p-3 rounded-lg text-center" style="background:var(--muted)">
          <div class="text-[11px]" style="color:var(--muted-foreground)">输出 Tokens</div>
          <div class="text-lg font-semibold mt-1">${d.completionTokens.toLocaleString()}</div>
          <div class="text-[10px]" style="color:var(--muted-foreground)">Completion</div>
        </div>
        <div class="p-3 rounded-lg text-center" style="background:var(--muted)">
          <div class="text-[11px]" style="color:var(--muted-foreground)">总计</div>
          <div class="text-lg font-semibold mt-1" style="color:var(--primary)">${d.totalTokens.toLocaleString()}</div>
          <div class="text-[10px]" style="color:var(--muted-foreground)">Total Tokens</div>
        </div>
      </div>
    </div>
    <div id="log-bill-${d.id}" style="display:none">
      <div class="space-y-2 p-3 rounded-lg text-xs" style="background:var(--muted)">
        <div class="flex justify-between"><span style="color:var(--muted-foreground)">ModelRatio</span><span>${d.modelRatio}</span></div>
        <div class="flex justify-between"><span style="color:var(--muted-foreground)">group_ratio（分组倍率）</span><span>${d.customRatio}</span></div>
        <div class="flex justify-between"><span style="color:var(--muted-foreground)">用户折扣</span><span>${d.userDiscount}（${(d.userDiscount*10).toFixed(1)}折）</span></div>
        <div class="flex justify-between pt-2" style="border-top:1px solid var(--border)"><span style="color:var(--muted-foreground)">综合倍率</span><span class="font-semibold">${(d.modelRatio*d.customRatio*d.userDiscount).toFixed(3)}</span></div>
        <div class="flex justify-between"><span style="color:var(--muted-foreground)">实际单价</span><span>¥${(parseFloat(d.unitPrice.replace(/[^0-9.]/g,''))*d.modelRatio*d.customRatio*d.userDiscount).toFixed(2)} / 1M tokens</span></div>
        <div class="flex justify-between"><span style="color:var(--muted-foreground)">消耗 Token</span><span>${d.totalTokens.toLocaleString()}</span></div>
        <div class="flex justify-between pt-2" style="border-top:1px solid var(--border)"><span class="font-semibold">最终费用</span><span class="font-semibold text-base" style="color:var(--primary)">¥${d.finalCost.toFixed(2)}</span></div>
      </div>
      <div class="mt-3 text-[11px]" style="color:var(--muted-foreground)">
        <strong>计费公式：</strong>最终费用 = 模型原价 × ModelRatio × group_ratio × 用户折扣 × (消耗Tokens / 1,000,000)
      </div>
    </div>
    <div class="flex justify-end mt-4">
      <button class="btn btn-primary btn-sm" onclick="closeModal()">关闭</button>
    </div>
  </div>`);
}

function switchLogDetailTab(btn,tabId){
  btn.closest('.tab-bar').querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  const modal=btn.closest('.modal-box');
  modal.querySelectorAll('[id^="log-req-"],[id^="log-token-"],[id^="log-bill-"]').forEach(el=>el.style.display='none');
  document.getElementById(tabId).style.display='block';
}

// ===== 供应商 =====
const CHANNEL_TYPES = [
  {id:45,name:'阿里云（通义千问）',keyHint:'API Key，从火山引擎控制台获取',baseUrlRequired:true,baseUrlHint:'https://ark.cn-beijing.volces.com/api/v3'},
  {id:1,name:'OpenAI',keyHint:'sk- 开头的 API Key',baseUrlRequired:false},
  {id:14,name:'Anthropic',keyHint:'sk-ant- 开头的 API Key',baseUrlRequired:false},
  {id:17,name:'通义千问',keyHint:'DashScope API Key',baseUrlRequired:false},
  {id:16,name:'智谱 AI',keyHint:'API Key，格式如 xxxxx.xxxxxx',baseUrlRequired:false},
  {id:15,name:'文心一言',keyHint:'APIKey|SecretKey，用 | 分隔',baseUrlRequired:false},
  {id:18,name:'讯飞星火',keyHint:'APPID|APISecret|APIKey，用 | 分隔',baseUrlRequired:false},
  {id:40,name:'硅基流动',keyHint:'sk- 开头的 API Key',baseUrlRequired:false},
  {id:43,name:'DeepSeek',keyHint:'sk- 开头的 API Key',baseUrlRequired:false},
  {id:24,name:'Gemini',keyHint:'Google AI API Key',baseUrlRequired:false},
  {id:8,name:'自定义（OpenAI 兼容）',keyHint:'API Key',baseUrlRequired:true,baseUrlHint:'https://your-api-endpoint/v1'},
  {id:60,name:'New API',keyHint:'New API API Key',baseUrlRequired:true,baseUrlHint:'https://your-new-api.com/api'},
];

function tblChannels(){
  return `
    <div class="info-banner mb-3">
      <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color:var(--primary)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 0 0118 0z"/></svg>
      <span>供应商 = 上游 LLM 提供商配置（如通义千问），管理 API 密钥、模型映射、负载均衡和故障重试。用户调 API 时，New API 根据供应商配置将请求路由到实际提供商。</span>
    </div>
    <div class="card overflow-hidden">
      <div class="flex items-center justify-between p-3" style="border-bottom:1px solid var(--border)">
        <div class="flex items-center gap-2">
          <input class="input" style="width:200px" placeholder="搜索供应商...">
          <select class="input" style="width:140px"><option>全部类型</option>${CHANNEL_TYPES.map(t=>`<option>${t.name}</option>`).join('')}</select>
        </div>
        <button class="btn btn-primary btn-sm" onclick="showChannelForm()">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          添加供应商
        </button>
      </div>
      <table><thead><tr><th>ID</th><th>名称</th><th>类型</th><th>模型</th><th>优先级</th><th>响应时间(s)</th><th>成功率(%)</th><th>操作</th></tr></thead>
      <tbody>
        <tr><td>1</td><td class="font-medium">ali-qwen</td><td>阿里云（通义千问）</td><td class="text-xs">3个模型</td><td>10</td><td style="color:var(--muted-foreground)">1.2</td><td>99.8</td><td><button class="btn btn-ghost btn-sm" onclick="showChannelForm('edit',1)">编辑</button></td></tr>
        <tr><td>2</td><td class="font-medium">ali-qwen-plus</td><td>阿里云（通义千问）</td><td class="text-xs">3个模型</td><td>5</td><td style="color:var(--muted-foreground)">0.8</td><td>99.5</td><td><button class="btn btn-ghost btn-sm" onclick="showChannelForm('edit',2)">编辑</button></td></tr>
        <tr><td>3</td><td class="font-medium">ali-bailian</td><td>阿里云（通义千问）</td><td class="text-xs">3个模型</td><td>0</td><td style="color:var(--muted-foreground)">3.4</td><td>97.2</td><td><button class="btn btn-ghost btn-sm" onclick="showChannelForm('edit',3)">编辑</button></td></tr>
      </tbody></table>
      ${paginationHTML(3,1,10)}
    </div>`;
}

function showChannelForm(mode,id){
  if(!mode) mode='create';
  const isEdit = mode === 'edit';
  const title = isEdit ? '编辑供应商' : '添加供应商';
  const ch = isEdit ? {
    name:'ali-qwen',type:45,status:1,
    baseUrl:'https://ark.cn-beijing.volces.com/api/v3',
    models:'ali-qwen-2-0-260128,ali-qwen-2-0-fast-260128,ali-qwen-2-0-mini-260615',
    group:['default'],modelMapping:'',priority:10,weight:0,autoBan:true,
    tag:'aliyun',remark:'主供应商，通义千问大模型',
  } : null;

  const selectedType = ch ? CHANNEL_TYPES.find(t=>t.id===ch.type) : CHANNEL_TYPES[0];
  const baseUrlDisplay = selectedType.baseUrlRequired ? '' : 'display:none';

  const formHtml = `<div style="width:680px;max-height:85vh;overflow-y:auto">
    <div class="relative flex items-center justify-center p-4" style="border-bottom:1px solid var(--border);position:sticky;top:0;background:var(--card);z-index:10">
      <h3 class="text-base font-semibold">${title}</h3>
      <button class="icon-btn" style="position:absolute;right:14px" onclick="closeModal()"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>
    <div class="p-4 space-y-5">
      <div>
        <div class="text-sm font-semibold mb-2">基础信息</div>
        <div class="form-item">
          <label class="form-label">供应商名称 <span style="color:var(--destructive)">*</span></label>
          <input class="input" placeholder="输入供应商名称" value="${ch?ch.name:''}">
        </div>
        <div class="form-item">
          <label class="form-label">供应商类型 <span style="color:var(--destructive)">*</span></label>
          <select class="input" onchange="onChannelTypeChange(this.value)" id="channel-type-select">
            ${CHANNEL_TYPES.map(t=>`<option value="${t.id}" ${ch&&ch.type===t.id?'selected':''}>${t.name}</option>`).join('')}
          </select>
        </div>
        <div class="form-item">
          <label class="form-label">状态</label>
          <div class="flex gap-4">
            <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="ch-status" checked> <span class="text-sm">启用</span></label>
            <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="ch-status"> <span class="text-sm">禁用</span></label>
          </div>
        </div>
      </div>
      <div>
        <div class="text-sm font-semibold mb-2">认证配置</div>
        <div class="form-item" id="channel-base-url-wrap" style="${baseUrlDisplay}">
          <label class="form-label">Base URL <span style="color:var(--destructive)">*</span></label>
          <input class="input" placeholder="${selectedType.baseUrlHint||''}" value="${ch?ch.baseUrl:''}">
          <div class="form-hint">API 基础地址，不带尾部斜杠</div>
        </div>
        <div class="form-item">
          <div class="flex items-center justify-between">
            <label class="form-label">API 密钥 <span style="color:var(--destructive)">*</span></label>
            <div class="flex gap-0.5 rounded-lg p-0.5" style="background:var(--muted)">
              <button class="text-[11px] px-2 py-0.5 rounded-md font-medium" style="background:var(--card)">单密钥</button>
              <button class="text-[11px] px-2 py-0.5 rounded-md font-medium" style="color:var(--muted-foreground)">批量添加</button>
              <button class="text-[11px] px-2 py-0.5 rounded-md font-medium" style="color:var(--muted-foreground)">多密钥</button>
            </div>
          </div>
          <textarea class="input" rows="3" placeholder="${isEdit?'点击修改密钥':'sk-xxxxxxxxxxxxxxxxxxxxxxxxxx'}">${isEdit?'':''}</textarea>
          <div class="form-hint" id="channel-key-hint">${selectedType.keyHint}</div>
          ${isEdit?'<div class="form-hint" style="color:var(--warning)">出于安全考虑，编辑时不会显示原始密钥，修改请重新输入</div>':''}
        </div>
      </div>
      <div>
        <div class="text-sm font-semibold mb-2">模型配置</div>
        <div class="form-item">
          <label class="form-label">模型列表 <span style="color:var(--destructive)">*</span></label>
          <textarea class="input" rows="2" placeholder="模型名称，多个用英文逗号分隔">${ch?ch.models:''}</textarea>
          <div class="form-hint">支持批量导入，逗号分隔</div>
        </div>
        <div class="form-item">
          <label class="form-label">模型映射</label>
          <textarea class="input" rows="2" placeholder='{"request_model": "actual_model"}'></textarea>
          <div class="form-hint">JSON 格式，将请求的模型名映射为实际模型名</div>
        </div>
        <div class="form-item">
          <label class="form-label">测试模型</label>
          <input class="input" placeholder="用于连通性测试的模型">
        </div>
      </div>
      <div>
        <div class="text-sm font-semibold mb-2">其他设置</div>
        <div class="grid grid-cols-2 gap-3">
          <div class="form-item">
            <label class="form-label">标签</label>
            <input class="input" placeholder="供应商标签" value="${ch?ch.tag:''}">
          </div>
          <div class="form-item">
            <label class="form-label">代理地址</label>
            <input class="input" placeholder="http://proxy:port">
          </div>
        </div>
        <div class="form-item">
          <label class="form-label">备注</label>
          <textarea class="input" rows="2" placeholder="内部备注，用户不可见">${ch?ch.remark:''}</textarea>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-end gap-3 p-4" style="border-top:1px solid var(--border);position:sticky;bottom:0;background:var(--card);z-index:10">
      <button class="btn btn-primary btn-sm" onclick="closeModal()">取消</button>
      <button class="btn btn-primary btn-sm" onclick="saveChannel()">${isEdit?'保存':'创建'}</button>
    </div>
  </div>`;

  showDrawer(formHtml);
}

function onChannelTypeChange(typeId){
  const t = CHANNEL_TYPES.find(x=>x.id==typeId);
  if(!t) return;
  const keyHint = document.getElementById('channel-key-hint');
  if(keyHint) keyHint.textContent = t.keyHint;
  const baseUrlWrap = document.getElementById('channel-base-url-wrap');
  if(baseUrlWrap){
    if(t.baseUrlRequired){
      baseUrlWrap.style.display = '';
      const input = baseUrlWrap.querySelector('input');
      if(input && t.baseUrlHint) input.placeholder = t.baseUrlHint;
    } else {
      baseUrlWrap.style.display = 'none';
    }
  }
}

function testChannel(){
  toast('正在测试连接...','info');
  setTimeout(function(){toast('连接成功！供应商响应正常','success')},800);
}

function saveChannel(){
  toast('供应商保存成功','success');
  closeModal();
}

// ===== 模型广场（增强 API 文档） =====
let marketFilter='全部模型';
let marketSearch='';
let marketPage=1;
let marketPageSize=6;

function modelMarket(){
  return marketPageHTML(false);
}

function marketPageHTML(isUser){
  let filtered = marketFilter==='全部模型' ? [...MARKET_MODELS] : MARKET_MODELS.filter(m=>m.type===marketFilter);
  if(marketSearch){
    const kw = marketSearch.toLowerCase();
    filtered = filtered.filter(m=>m.name.toLowerCase().includes(kw));
  }
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / marketPageSize));
  if(marketPage > totalPages) marketPage = totalPages;
  const start = (marketPage - 1) * marketPageSize;
  const pageItems = filtered.slice(start, start + marketPageSize);
  const enabledCount = isUser ? MARKET_MODELS.filter(m=>USER_ENABLED_MODELS[m.id]!==false).length : 0;
  const vendorCount = [...new Set(MARKET_MODELS.map(m=>m.vendor))].length;

  return `
    ${isUser?`<div class="info-banner mb-3">
      <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color:var(--primary)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 3 0 11-18 0 9 0 0118 0z"/></svg>
      <span>选择需要使用的模型，启用后即可在 API 调用中通过 model 参数指定。当前已启用 <strong>${enabledCount}/${MARKET_MODELS.length}</strong> 个模型。</span>
    </div>`:''}
    <div class="grid grid-cols-2 gap-3 mb-3">
      <div class="card p-3">
        <div class="text-xs" style="color:var(--muted-foreground)">模型总数</div>
        <div class="text-lg font-semibold mt-1">${MARKET_MODELS.length}</div>
      </div>
      <div class="card p-3">
        <div class="text-xs" style="color:var(--muted-foreground)">模型类型</div>
        <div class="text-lg font-semibold mt-1">${MODEL_TYPES.length-1}</div>
      </div>
    </div>
    <div class="flex items-center gap-3 mb-3">
      <div class="tab-bar p-2 flex-1" style="border-bottom:1px solid var(--border)">
        ${MODEL_TYPES.map(t=>`<button class="tab ${marketFilter===t?'active':''}" onclick="filterMarket('${t}')">${t}</button>`).join('')}
      </div>
      <div class="relative" style="width:240px">
        <svg class="w-4 h-4 absolute" style="left:10px;top:50%;transform:translateY(-50%);color:var(--muted-foreground)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        <input type="text" class="input" placeholder="搜索模型名称" value="${marketSearch}" oninput="marketSearchInput(this.value)" style="padding-left:32px">
      </div>
    </div>
    <div id="market-grid" class="grid grid-cols-3 gap-3">
      ${pageItems.map(m=>marketCardHTML(m,isUser)).join('') || '<div class="p-8 text-center text-sm" style="color:var(--muted-foreground)">未找到匹配的模型</div>'}
    </div>
    ${total > 0 ? `<div class="flex items-center justify-center mt-4 pt-3 gap-4" style="border-top:1px solid var(--border)">
      <div class="text-xs" style="color:var(--muted-foreground);white-space:nowrap">
        共 <strong style="color:var(--foreground)">${total}</strong> 条
      </div>
      <div class="flex items-center gap-1">
        <button class="btn btn-ghost btn-sm" ${marketPage<=1?'disabled style="opacity:0.4;cursor:not-allowed"':''} onclick="goMarketPage(${marketPage-1})">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
        </button>
        ${Array.from({length:totalPages},(_,i)=>i+1).map(p=>`<button class="btn ${p===marketPage?'btn-primary':'btn-ghost'} btn-sm" style="min-width:32px;padding:4px 8px" onclick="goMarketPage(${p})">${p}</button>`).join('')}
        <button class="btn btn-ghost btn-sm" ${marketPage>=totalPages?'disabled style="opacity:0.4;cursor:not-allowed"':''} onclick="goMarketPage(${marketPage+1})">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>
      <div class="flex items-center gap-1 text-xs" style="color:var(--muted-foreground);white-space:nowrap">
        <span>每页</span>
        <select class="input" style="width:auto;padding:2px 8px;font-size:12px;height:28px" onchange="changeMarketPageSize(this.value)">
          <option value="6" ${marketPageSize===6?'selected':''}>6 条</option>
          <option value="9" ${marketPageSize===9?'selected':''}>9 条</option>
          <option value="12" ${marketPageSize===12?'selected':''}>12 条</option>
          <option value="24" ${marketPageSize===24?'selected':''}>24 条</option>
        </select>
      </div>
    </div>` : ''}`;
}

function goMarketPage(p){
  marketPage = p;
  rerenderMarket();
}

function changeMarketPageSize(val){
  marketPageSize = parseInt(val);
  marketPage = 1;
  rerenderMarket();
}

function rerenderMarket(){
  const grid = document.getElementById('market-grid');
  if(grid){
    const parent = grid.parentElement;
    parent.innerHTML = marketPageHTML(curRole==='user');
    const inp = parent.querySelector('input[placeholder*="搜索"]');
    if(inp){ inp.focus(); inp.setSelectionRange(inp.value.length, inp.value.length); }
  }
}

// 通用翻页HTML（与模型广场风格一致）
function paginationHTML(total, page, pageSize){
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  if(total === 0) return '';
  let pages = [];
  if(totalPages <= 5){
    for(let i=1;i<=totalPages;i++) pages.push(i);
  } else {
    if(page <= 3){ pages = [1,2,3,4,totalPages]; }
    else if(page >= totalPages-2){ pages = [1,totalPages-3,totalPages-2,totalPages-1,totalPages]; }
    else { pages = [1,page-1,page,page+1,totalPages]; }
  }
  return `<div class="flex items-center justify-center px-4 py-3 gap-4" style="border-top:1px solid var(--border)">
    <div class="text-xs" style="color:var(--muted-foreground);white-space:nowrap">
      共 <strong style="color:var(--foreground)">${total}</strong> 条
    </div>
    <div class="flex items-center gap-1">
      <button class="btn btn-ghost btn-sm" ${page<=1?'disabled style="opacity:0.4;cursor:not-allowed"':''}>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
      </button>
      ${pages.map((p,idx)=>{
        if(idx>0 && p>pages[idx-1]+1) return '<span class="text-xs" style="color:var(--muted-foreground)">···</span>';
        return `<button class="btn ${p===page?'btn-primary':'btn-ghost'} btn-sm" style="min-width:32px;padding:4px 8px">${p}</button>`;
      }).join('')}
      <button class="btn btn-ghost btn-sm" ${page>=totalPages?'disabled style="opacity:0.4;cursor:not-allowed"':''}>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </button>
    </div>
    <div class="flex items-center gap-1 text-xs" style="color:var(--muted-foreground);white-space:nowrap">
      <span>每页</span>
      <select class="input" style="width:auto;padding:2px 8px;font-size:12px;height:28px">
        <option ${pageSize===10?'selected':''}>10 条</option>
        <option ${pageSize===20?'selected':''}>20 条</option>
        <option ${pageSize===50?'selected':''}>50 条</option>
      </select>
    </div>
  </div>`;
}

function marketSearchInput(val){
  marketSearch = val;
  marketPage = 1;
  rerenderMarket();
}

function marketCardHTML(m,isUser){
  const enabled = isUser ? (USER_ENABLED_MODELS[m.id]!==false) : false;
  const cornerTags = m.tags.length>0 ? m.tags.filter(tg=>tg.t.includes('价格')||tg.t.includes('下架')||tg.t.includes('下线')||tg.t.includes('新上线')) : [];
  const otherTags = m.tags.length>0 ? m.tags.filter(tg=>!cornerTags.includes(tg)) : [];
  return `<div class="card p-4 flex flex-col relative" style="opacity:${isUser&&!enabled?0.6:1}">
    ${cornerTags.length>0?`<div style="position:absolute;top:10px;right:10px;display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end">${cornerTags.map(tg=>`<span class="badge ${tg.c}" style="font-size:10px">${tg.t}</span>`).join('')}</div>`:''}
    <div class="flex items-start gap-3 mb-2" style="${cornerTags.length>0?'padding-right:60px':''}">
      <div style="width:40px;height:40px;border-radius:8px;background:${m.vendorColor};color:#fff;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;flex-shrink:0">${m.vendorSymbol}</div>
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="text-sm font-semibold">${m.name}</span>
          <span class="badge b-neutral" style="font-size:10px">${m.type}</span>
        </div>
      </div>
    </div>
    <p class="text-xs mb-2 flex-1" style="color:var(--muted-foreground);line-height:1.6;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">${m.desc}</p>
    <div class="flex gap-2 mb-3 text-[11px]">
      <span class="px-2 py-0.5 rounded" style="background:var(--muted);color:var(--muted-foreground)">最大输入 <span class="font-medium" style="color:var(--foreground)">${m.maxInput}</span></span>
      <span class="px-2 py-0.5 rounded" style="background:var(--muted);color:var(--muted-foreground)">最大输出 <span class="font-medium" style="color:var(--foreground)">${m.maxOutput}</span></span>
    </div>
    ${otherTags.length>0?`<div class="flex gap-1 flex-wrap mb-3">${otherTags.map(tg=>`<span class="badge ${tg.c}" style="font-size:10px">${tg.t}</span>`).join('')}</div>`:'<div class="mb-3"></div>'}
    <div class="mb-3" style="padding:10px 12px;border-radius:8px;background:linear-gradient(135deg,rgba(99,102,241,0.08),rgba(59,130,246,0.08))">
      <div class="flex items-center justify-between mb-1.5">
        <span class="text-xs" style="color:var(--muted-foreground)">价格</span>
      </div>
      ${m.price.input===0&&m.price.output===0?`
        <div class="flex items-center justify-center py-1">
          <span class="badge b-success" style="font-size:12px;padding:2px 10px">免费</span>
        </div>
      `:
        m.price.perImage!==undefined?`
          <div class="flex items-center justify-between">
            <span class="text-xs" style="color:var(--muted-foreground)">单张图片</span>
            <span class="font-semibold" style="color:var(--primary);font-size:16px">¥${m.price.perImage} <span class="text-xs font-normal" style="color:var(--muted-foreground)">/ ${m.price.unit}</span></span>
          </div>
        `:
        m.price.perChar!==undefined?`
          <div class="flex items-center justify-between">
            <span class="text-xs" style="color:var(--muted-foreground)">每千字</span>
            <span class="font-semibold" style="color:var(--primary);font-size:16px">¥${m.price.perChar} <span class="text-xs font-normal" style="color:var(--muted-foreground)">/ ${m.price.unit}</span></span>
          </div>
        `:
        m.price.perSecond!==undefined?`
          <div class="flex items-center justify-between">
            <span class="text-xs" style="color:var(--muted-foreground)">每秒视频${m.price.resolution?`（${m.price.resolution}）`:''}</span>
            <span class="font-semibold" style="color:var(--primary);font-size:16px">¥${m.price.perSecond} <span class="text-xs font-normal" style="color:var(--muted-foreground)">/ ${m.price.unit}</span></span>
          </div>
        `:`
          <div class="space-y-1.5">
            <div class="flex items-center justify-between">
              <span class="text-xs" style="color:var(--muted-foreground)">输入</span>
              <span class="font-semibold" style="color:var(--foreground);font-size:13px">¥${m.price.input.toFixed(4)} <span class="text-xs font-normal" style="color:var(--muted-foreground)">/ ${m.price.unit}</span></span>
            </div>
            ${m.price.output>0?`
            <div class="flex items-center justify-between">
              <span class="text-xs" style="color:var(--muted-foreground)">输出</span>
              <span class="font-semibold" style="color:var(--foreground);font-size:13px">¥${m.price.output.toFixed(4)} <span class="text-xs font-normal" style="color:var(--muted-foreground)">/ ${m.price.unit}</span></span>
            </div>
            `:m.price.note?`
            <div class="text-xs text-right" style="color:var(--primary);opacity:0.8">${m.price.note}</div>
            `:''}
          </div>
        `}
    </div>
    <div class="flex items-center gap-2">
      <button class="btn btn-outline btn-sm flex-1" onclick="showMarketDetail(${m.id})">查看详情</button>
    </div>
  </div>`;
}

function filterMarket(type){
  marketFilter = type;
  marketPage = 1;
  const grid = document.getElementById('market-grid');
  if(grid){
    const parent = grid.parentElement;
    parent.innerHTML = marketPageHTML(curRole==='user');
  } else {
    renderPage();
  }
}

function toggleMarketModel(id){
  USER_ENABLED_MODELS[id] = !(USER_ENABLED_MODELS[id]!==false);
  const enabled = USER_ENABLED_MODELS[id]!==false;
  showToast('操作成功', enabled ? '模型已启用' : '模型已停用');
  const parent = document.getElementById('market-grid').parentElement;
  parent.innerHTML = marketPageHTML(true);
}

function showMarketDetail(id){
  marketDetailModelId = id;
  marketDetailBack = curPage;
  go('model-detail');
}

function marketDetailPage(){
  const m = MARKET_MODELS.find(x=>x.id===marketDetailModelId);
  if(!m) return '<div style="color:var(--muted-foreground)">模型未找到</div>';
  const base = 'https://model-router.edu-aliyun.com';
  const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  function paramRow(p){
    return `<div class="py-2.5" style="border-bottom:1px solid var(--border)">
      <div class="flex items-center gap-2 ${p.desc?'mb-1':''}">
        <code style="font-size:13px;font-weight:600">${p.name}</code>
        <span class="text-xs px-1.5 py-0.5 rounded" style="background:var(--muted);color:var(--muted-foreground)">${p.type}</span>
        ${p.req?'<span class="badge" style="font-size:10px;background:var(--destructive);color:#fff;padding:1px 5px;border-radius:4px">必填</span>':''}
      </div>
      ${p.desc?`<div class="text-xs" style="color:var(--muted-foreground);line-height:1.6">${p.desc}</div>`:''}
      ${p.sub?'<div class="text-xs mt-1" style="color:var(--primary);cursor:pointer">▶ 展开子属性</div>':''}
    </div>`;
  }
  function codeBlk(code){
    return `<pre class="p-3 rounded-lg" style="background:#1e1e2e;color:#cdd6f4;font-size:12px;line-height:1.6;overflow-x:auto;max-height:280px;overflow-y:auto"><code>${esc(code)}</code></pre>`;
  }
  function endpointRow(ep){
    return `<div class="flex items-center gap-2 p-2 rounded-lg mb-3" style="background:var(--muted)">
      <span class="badge b-info" style="font-size:10px">POST</span>
      <code class="text-xs flex-1" style="font-family:monospace;word-break:break-all">${ep}</code>
      <button class="btn btn-ghost btn-sm" onclick="copyModelId('${ep}')" style="padding:2px 6px;font-size:11px">点击复制</button>
    </div>`;
  }
  function headersBlock(){
    const isUser = curRole==='user';
    const activeKeys = API_KEYS.filter(k=>k.status===1);
    const keyOpts = activeKeys.map(k=>`<option value="${k.fullKey}">${k.name} (${maskKey(k.fullKey)})</option>`).join('');
    return `<details class="mb-3" open>
      <summary class="text-xs font-semibold cursor-pointer p-2 rounded-lg" style="background:var(--muted);color:var(--muted-foreground)">请求头 Headers</summary>
      <div class="p-2 mt-1 text-xs" style="font-family:monospace;line-height:1.8">
        <div>Authorization: Bearer <span class="api-key-placeholder">&lt;YOUR_API_KEY&gt;</span></div>
        <div>Content-Type: application/json</div>
        ${isUser?`<div class="mt-2 pt-2" style="border-top:1px dashed var(--border)">
          <div class="flex items-center gap-2">
            <span class="text-xs font-semibold" style="color:var(--foreground)">选择 API Key：</span>
            ${activeKeys.length>0?`<select class="input api-key-select" style="width:auto;min-width:280px;padding:2px 8px;font-size:12px;height:28px" onchange="selectApiKey(this)">
              <option value="">请选择 API Key</option>
              ${keyOpts}
            </select>
            <button class="btn btn-ghost btn-sm api-key-copy" style="display:none;padding:2px 6px;font-size:11px" onclick="copySelectedApiKey()">复制</button>
            <a href="javascript:void(0)" class="text-xs" style="color:var(--primary);text-decoration:none" onclick="go('tokens')">管理 API Keys</a>`:`<span class="text-xs" style="color:var(--muted-foreground)">暂无可用 API Key，</span><a href="javascript:void(0)" class="text-xs" style="color:var(--primary);text-decoration:none" onclick="goCreateApiKey()">前往创建</a>`}
          </div>
        </div>`:''}
      </div>
    </details>`;
  }
  function apiTabContent(prefix,desc,ep,reqParams,resParams,ex){
    return `<div class="mb-2">
      <div class="text-sm font-semibold mb-1">文本对话</div>
      <div class="text-xs mb-2" style="color:var(--muted-foreground);line-height:1.6">${desc}</div>
      ${endpointRow(ep)}
      ${headersBlock()}
      <div class="flex gap-3" style="align-items:flex-start">
        <div style="flex:1;min-width:0">
          <div class="flex gap-1 mb-2" style="border-bottom:2px solid var(--border)">
            <button class="body-tab text-xs font-semibold pb-1.5 px-2" style="color:var(--primary);border-bottom:2px solid var(--primary);margin-bottom:-2px" onclick="switchBodyTab(this,'${prefix}-req')">请求体</button>
            <button class="body-tab text-xs font-semibold pb-1.5 px-2" style="color:var(--muted-foreground)" onclick="switchBodyTab(this,'${prefix}-res')">响应体</button>
          </div>
          <div id="${prefix}-req" class="body-panel">${reqParams.map(paramRow).join('')}</div>
          <div id="${prefix}-res" class="body-panel" style="display:none">${resParams.map(paramRow).join('')}</div>
        </div>
        <div style="width:42%;flex-shrink:0">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-xs font-semibold">请求示例</span>
            <select class="text-xs px-2 py-1 rounded" style="border:1px solid var(--border);background:var(--card);color:var(--foreground);outline:none" onchange="switchExampleMode(this,'${prefix}')">
              <option value="text">文本输入</option>
              <option value="stream">流式输出</option>
              <option value="multimodal">多模态输入</option>
              <option value="full">全模态</option>
            </select>
          </div>
          <div id="${prefix}-ex-req-text" class="ex-panel">${codeBlk(ex.text.req)}</div>
          <div id="${prefix}-ex-req-stream" class="ex-panel" style="display:none">${codeBlk(ex.stream.req)}</div>
          <div id="${prefix}-ex-req-multimodal" class="ex-panel" style="display:none">${codeBlk(ex.multimodal.req)}</div>
          <div id="${prefix}-ex-req-full" class="ex-panel" style="display:none">${codeBlk(ex.full.req)}</div>
          <div class="flex items-center gap-2 mb-1 mt-2">
            <span class="text-xs font-semibold">响应示例</span>
            <span class="text-xs" style="color:var(--muted-foreground)" id="${prefix}-res-mode-label">文本输入</span>
          </div>
          <div id="${prefix}-ex-res-text" class="ex-res-panel">${codeBlk(ex.text.res)}</div>
          <div id="${prefix}-ex-res-stream" class="ex-res-panel" style="display:none">${codeBlk(ex.stream.res)}</div>
          <div id="${prefix}-ex-res-multimodal" class="ex-res-panel" style="display:none">${codeBlk(ex.multimodal.res)}</div>
          <div id="${prefix}-ex-res-full" class="ex-res-panel" style="display:none">${codeBlk(ex.full.res)}</div>
        </div>
      </div>
    </div>`;
  }
  const chatEp = `${base}/v1/chat/completions`;
  const chatReq = [
    {name:'model',type:'string',req:true,desc:''},
    {name:'messages',type:'array',req:true,desc:'消息列表，每个元素包含 role（system/user/assistant）和 content 字段',sub:true},
    {name:'stream',type:'boolean',desc:'是否使用流式输出，默认 false'},
    {name:'stream_options',type:'object',desc:'流式输出选项，可设置 include_usage 返回 token 用量',sub:true},
    {name:'temperature',type:'float',desc:'采样温度，控制输出随机性，范围 [0, 2)，默认 1.0'},
    {name:'top_p',type:'float',desc:'核采样概率，范围 (0, 1.0]，默认 1.0。建议只设置 temperature 或 top_p 其一'},
    {name:'top_k',type:'integer',desc:'保留候选 token 数量，≥0。设为 null 或 >100 可禁用'},
    {name:'repetition_penalty',type:'float',desc:'重复惩罚，控制生成内容的重复度，>0'},
    {name:'presence_penalty',type:'float',desc:'存在惩罚，范围 [-2.0, 2.0]。创意任务可增大，严谨任务可减小'},
    {name:'response_format',type:'object',desc:'响应格式，默认 {"type": "text"}',sub:true},
    {name:'max_tokens',type:'integer',desc:'最大输出 token 数，默认为模型最大值'},
    {name:'n',type:'integer',desc:'生成回复数量，范围 1-4，默认 1。传入 tools 参数时请设为 1'},
    {name:'enable_thinking',type:'boolean',desc:'是否开启思考模式，开启后模型先推理再回复。仅部分模型支持'},
    {name:'seed',type:'integer',desc:'随机种子，用于结果复现'},
    {name:'logprobs',type:'boolean',desc:'是否返回 token 对数概率，默认 false'},
    {name:'top_logprobs',type:'integer',desc:'返回候选 token 数量，范围 [0, 5]，默认 0'},
    {name:'stop',type:'string / array',desc:'停止序列，生成到指定字符串时停止。不可混用 token_id 和字符串'},
    {name:'tools',type:'array',desc:'工具列表，用于 Function Calling',sub:true},
    {name:'tool_choice',type:'string / object',desc:'工具选择策略：auto / none / 指定工具'},
    {name:'parallel_tool_calls',type:'boolean',desc:'是否并行调用工具，默认 false'},
    {name:'enable_search',type:'boolean',desc:'是否开启联网搜索，默认 false'},
    {name:'search_options',type:'object',desc:'联网搜索策略配置',sub:true},
  ];
  const chatRes = [
    {name:'id',type:'string',desc:'请求唯一标识'},
    {name:'object',type:'string',desc:'对象类型，chat.completion 或 chat.completion_chunk（流式）'},
    {name:'created',type:'integer',desc:'创建时间戳（Unix 时间戳）'},
    {name:'model',type:'string',desc:'使用的模型'},
    {name:'choices',type:'array',desc:'生成结果数组，包含 message、finish_reason 等',sub:true},
    {name:'usage',type:'object',desc:'Token 使用量（流式返回为空）',sub:true},
  ];
  const chatTextReq = `curl -X POST ${chatEp} \\
  -H "Authorization: Bearer <YOUR_API_KEY>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "${m.modelId}",
    "messages": [
      {"role": "system", "content": "You are a helpful assistant"},
      {"role": "user", "content": "你好，请介绍一下自己"}
    ],
    "stream": false,
    "max_tokens": 2048
  }'`;
  const chatTextRes = `{
  "id": "chatcmpl-xxx",
  "object": "chat.completion",
  "created": 1775117577,
  "model": "${m.modelId}",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "你好！我是通义千问（Qwen），阿里巴巴集团旗下的..."
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 23,
    "completion_tokens": 65,
    "total_tokens": 88
  }
}`;
  const chatStreamReq = `curl -X POST ${chatEp} \\
  -H "Authorization: Bearer <YOUR_API_KEY>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "${m.modelId}",
    "messages": [
      {"role": "user", "content": "写一首关于春天的诗"}
    ],
    "stream": true,
    "stream_options": {"include_usage": true}
  }'`;
  const chatStreamRes = `data: {"id":"chatcmpl-xxx","object":"chat.completion.chunk","created":1775117577,"model":"${m.modelId}","choices":[{"index":0,"delta":{"role":"assistant","content":"春"},"finish_reason":null}]}

data: {"id":"chatcmpl-xxx","object":"chat.completion.chunk","created":1775117577,"model":"${m.modelId}","choices":[{"index":0,"delta":{"content":"风"},"finish_reason":null}]}

data: {"id":"chatcmpl-xxx","object":"chat.completion.chunk","created":1775117577,"model":"${m.modelId}","choices":[{"index":0,"delta":{"content":"送暖入屠苏"},"finish_reason":null}]}

...

data: {"id":"chatcmpl-xxx","object":"chat.completion.chunk","created":1775117577,"model":"${m.modelId}","choices":[],"usage":{"prompt_tokens":15,"completion_tokens":42,"total_tokens":57}}

data: [DONE]`;
  const chatMultimodalReq = `curl -X POST ${chatEp} \\
  -H "Authorization: Bearer <YOUR_API_KEY>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "${m.modelId}",
    "messages": [
      {
        "role": "user",
        "content": [
          {"type": "text", "text": "这张图片里有什么？"},
          {
            "type": "image_url",
            "image_url": {
              "url": "https://example.com/image.jpg"
            }
          }
        ]
      }
    ],
    "stream": false
  }'`;
  const chatMultimodalRes = `{
  "id": "chatcmpl-xxx",
  "object": "chat.completion",
  "created": 1775117577,
  "model": "${m.modelId}",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "这张图片展示了一只可爱的橘猫，它正趴在窗台上晒太阳..."
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 1256,
    "completion_tokens": 48,
    "total_tokens": 1304
  }
}`;
  const chatFullReq = `curl -X POST ${chatEp} \\
  -H "Authorization: Bearer <YOUR_API_KEY>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "${m.modelId}",
    "messages": [
      {"role": "user", "content": "帮我查一下今天北京的天气，然后给我一些出行建议"}
    ],
    "stream": false,
    "enable_thinking": true,
    "tools": [
      {
        "type": "function",
        "function": {
          "name": "get_weather",
          "description": "获取指定城市的天气信息",
          "parameters": {
            "type": "object",
            "properties": {
              "city": {"type": "string", "description": "城市名称"}
            },
            "required": ["city"]
          }
        }
      }
    ],
    "tool_choice": "auto",
    "enable_search": true
  }'`;
  const chatFullRes = `{
  "id": "chatcmpl-xxx",
  "object": "chat.completion",
  "created": 1775117577,
  "model": "${m.modelId}",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": null,
        "tool_calls": [
          {
            "id": "call_xxx",
            "type": "function",
            "function": {
              "name": "get_weather",
              "arguments": "{\\"city\\":\\"北京\\"}"
            }
          }
        ],
        "reasoning_content": "用户问的是北京天气和出行建议。我需要先调用天气工具获取数据，再根据结果给出建议。"
      },
      "finish_reason": "tool_calls"
    }
  ],
  "usage": {
    "prompt_tokens": 86,
    "completion_tokens": 32,
    "total_tokens": 118
  }
}`;
  const chatEx = {text:{req:chatTextReq,res:chatTextRes},stream:{req:chatStreamReq,res:chatStreamRes},multimodal:{req:chatMultimodalReq,res:chatMultimodalRes},full:{req:chatFullReq,res:chatFullRes}};
  const respEp = `${base}/v1/responses`;
  const respReq = [
    {name:'model',type:'string',req:true,desc:''},
    {name:'input',type:'array',req:true,desc:'输入内容数组，支持文本和图片等多模态输入',sub:true},
    {name:'previous_response_id',type:'string',desc:'上一次响应的 ID，用于简化多轮对话上下文管理'},
    {name:'tools',type:'array',desc:'工具列表，支持 web_search、code_interpreter、web_extractor 等',sub:true},
    {name:'stream',type:'boolean',desc:'是否使用流式输出，默认 false'},
    {name:'temperature',type:'float',desc:'采样温度，范围 [0, 2)，默认 1.0'},
    {name:'max_output_tokens',type:'integer',desc:'最大输出 token 数'},
  ];
  const respRes = [
    {name:'id',type:'string',desc:'响应唯一标识'},
    {name:'object',type:'string',desc:'对象类型，固定为 response'},
    {name:'created_at',type:'integer',desc:'创建时间戳（Unix 时间戳）'},
    {name:'model',type:'string',desc:'使用的模型'},
    {name:'status',type:'string',desc:'响应状态：completed / in_progress / failed'},
    {name:'output',type:'array',desc:'模型输出内容数组，可能包含 message、tool_call 等',sub:true},
    {name:'output_text',type:'string',desc:'便捷字段：将 output 中所有 output_text 拼接的纯文本结果'},
    {name:'usage',type:'object',desc:'Token 与工具调用使用量统计',sub:true},
  ];
  const respTextReq = `curl -X POST ${respEp} \\
  -H "Authorization: Bearer <YOUR_API_KEY>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "${m.modelId}",
    "input": [
      {"role": "user", "content": "你好，请介绍一下自己"}
    ],
    "stream": false
  }'`;
  const respTextRes = `{
  "id": "resp-xxx",
  "object": "response",
  "created_at": 1715117577,
  "model": "${m.modelId}",
  "status": "completed",
  "output": [
    {
      "type": "message",
      "role": "assistant",
      "content": [
        {"type": "output_text", "text": "你好！我是通义千问（Qwen）..."}
      ]
    }
  ],
  "output_text": "你好！我是通义千问（Qwen）...",
  "usage": {
    "input_tokens": 23,
    "output_tokens": 65,
    "total_tokens": 88
  }
}`;
  const respStreamReq = `curl -X POST ${respEp} \\
  -H "Authorization: Bearer <YOUR_API_KEY>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "${m.modelId}",
    "input": [
      {"role": "user", "content": "写一首关于春天的诗"}
    ],
    "stream": true
  }'`;
  const respStreamRes = `event: response.created
data: {"id":"resp-xxx","object":"response","created_at":1715117577,"model":"${m.modelId}","status":"in_progress","output":[],"usage":null}

event: response.output_text.delta
data: {"delta":"春","output_index":0,"content_index":0}

event: response.output_text.delta
data: {"delta":"风","output_index":0,"content_index":0}

event: response.output_text.delta
data: {"delta":"送暖入屠苏","output_index":0,"content_index":0}

...

event: response.completed
data: {"id":"resp-xxx","object":"response","status":"completed","output_text":"春风送暖入屠苏...","usage":{"input_tokens":15,"output_tokens":42,"total_tokens":57}}`;
  const respMultimodalReq = `curl -X POST ${respEp} \\
  -H "Authorization: Bearer <YOUR_API_KEY>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "${m.modelId}",
    "input": [
      {
        "role": "user",
        "content": [
          {"type": "input_text", "text": "这张图片里有什么？"},
          {
            "type": "input_image",
            "image_url": "https://example.com/image.jpg"
          }
        ]
      }
    ],
    "stream": false
  }'`;
  const respMultimodalRes = `{
  "id": "resp-xxx",
  "object": "response",
  "created_at": 1715117577,
  "model": "${m.modelId}",
  "status": "completed",
  "output": [
    {
      "type": "message",
      "role": "assistant",
      "content": [
        {"type": "output_text", "text": "这张图片展示了一只可爱的橘猫..."}
      ]
    }
  ],
  "output_text": "这张图片展示了一只可爱的橘猫...",
  "usage": {
    "input_tokens": 1256,
    "output_tokens": 48,
    "total_tokens": 1304
  }
}`;
  const respFullReq = `curl -X POST ${respEp} \\
  -H "Authorization: Bearer <YOUR_API_KEY>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "${m.modelId}",
    "input": [
      {"role": "user", "content": "帮我分析一下2026年Q1的财报数据，用图表展示各业务线收入占比"}
    ],
    "tools": [
      {"type": "web_search"},
      {"type": "code_interpreter"}
    ],
    "stream": false
  }'`;
  const respFullRes = `{
  "id": "resp-xxx",
  "object": "response",
  "created_at": 1715117577,
  "model": "${m.modelId}",
  "status": "completed",
  "output": [
    {
      "type": "web_search_call",
      "id": "search_1",
      "queries": ["2026 Q1 财报", "各业务线收入"]
    },
    {
      "type": "code_call",
      "id": "code_1",
      "code": "import matplotlib.pyplot as plt..."
    },
    {
      "type": "message",
      "role": "assistant",
      "content": [
        {"type": "output_image", "image_url": "data:image/png;base64,..."},
        {"type": "output_text", "text": "根据2026年Q1财报数据，各业务线收入占比如下..."}
      ]
    }
  ],
  "output_text": "根据2026年Q1财报数据...",
  "usage": {
    "input_tokens": 1850,
    "output_tokens": 1200,
    "total_tokens": 3050,
    "x_tools": {"web_search": 3, "code_interpreter": 1}
  }
}`;
  const respEx = {text:{req:respTextReq,res:respTextRes},stream:{req:respStreamReq,res:respStreamRes},multimodal:{req:respMultimodalReq,res:respMultimodalRes},full:{req:respFullReq,res:respFullRes}};
  const anthEp = `${base}/v1/messages`;
  const anthReq = [
    {name:'model',type:'string',req:true,desc:''},
    {name:'max_tokens',type:'integer',req:true,desc:'最大输出 token 数'},
    {name:'messages',type:'array',req:true,desc:'消息数组，每个元素包含 role 和 content',sub:true},
    {name:'system',type:'string',desc:'系统提示词，用于设定模型角色和行为'},
    {name:'stream',type:'boolean',desc:'是否使用流式输出，默认 false'},
    {name:'temperature',type:'number',desc:'采样温度，范围 [0.0, 1.0]，默认 1.0。较低值适合严谨任务，较高值适合创意任务'},
    {name:'top_p',type:'number',desc:'核采样概率，范围 (0, 1.0]'},
    {name:'top_k',type:'integer',desc:'保留候选 token 数量'},
    {name:'stop_sequences',type:'array',desc:'停止序列列表，生成到指定字符串时停止'},
    {name:'thinking',type:'object',desc:'思考模式配置，开启后模型会先推理再回复。仅部分模型支持',sub:true},
    {name:'tools',type:'array',desc:'工具列表，用于 Function Calling',sub:true},
    {name:'tool_choice',type:'string / object',desc:'工具选择策略：auto / none / 指定工具'},
  ];
  const anthRes = [
    {name:'id',type:'string',desc:'消息唯一标识'},
    {name:'type',type:'string',desc:'对象类型，固定为 message'},
    {name:'role',type:'string',desc:'消息角色，固定为 assistant'},
    {name:'model',type:'string',desc:'使用的模型'},
    {name:'content',type:'array',desc:'消息内容数组，包含文本、工具调用等',sub:true},
    {name:'stop_reason',type:'string',desc:'停止原因：end_turn / max_tokens / stop_sequence / tool_use / pause_turn / refusal'},
    {name:'stop_sequence',type:'string',desc:'触发的停止序列（如有）'},
    {name:'stop_details',type:'object',desc:'拒绝响应的详细信息',sub:true},
    {name:'usage',type:'object',desc:'Token 使用量统计',sub:true},
  ];
  const anthTextReq = `curl -X POST ${anthEp} \\
  -H "Authorization: Bearer <YOUR_API_KEY>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "${m.modelId}",
    "max_tokens": 1024,
    "system": "You are a helpful assistant",
    "messages": [
      {"role": "user", "content": "你好，请介绍一下自己"}
    ]
  }'`;
  const anthTextRes = `{
  "id": "msg-xxx",
  "type": "message",
  "role": "assistant",
  "model": "${m.modelId}",
  "content": [
    {
      "type": "text",
      "text": "你好！我是通义千问（Qwen），阿里巴巴集团自研的大语言模型..."
    }
  ],
  "stop_reason": "end_turn",
  "usage": {
    "input_tokens": 23,
    "output_tokens": 88
  }
}`;
  const anthStreamReq = `curl -X POST ${anthEp} \\
  -H "Authorization: Bearer <YOUR_API_KEY>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "${m.modelId}",
    "max_tokens": 1024,
    "messages": [
      {"role": "user", "content": "写一首关于春天的诗"}
    ],
    "stream": true
  }'`;
  const anthStreamRes = `event: message_start
data: {"type":"message_start","message":{"id":"msg-xxx","type":"message","role":"assistant","model":"${m.modelId}","content":[],"stop_reason":null,"usage":{"input_tokens":15,"output_tokens":1}}}

event: content_block_start
data: {"type":"content_block_start","index":0,"content_block":{"type":"text","text":""}}

event: content_block_delta
data: {"type":"content_block_delta","index":0,"delta":{"type":"text_delta","text":"春"}}

event: content_block_delta
data: {"type":"content_block_delta","index":0,"delta":{"type":"text_delta","text":"风"}}

...

event: message_delta
data: {"type":"message_delta","delta":{"stop_reason":"end_turn"},"usage":{"output_tokens":42}}

event: message_stop
data: {"type":"message_stop"}`;
  const anthMultimodalReq = `curl -X POST ${anthEp} \\
  -H "Authorization: Bearer <YOUR_API_KEY>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "${m.modelId}",
    "max_tokens": 1024,
    "messages": [
      {
        "role": "user",
        "content": [
          {"type": "text", "text": "这张图片里有什么？"},
          {
            "type": "image",
            "source": {
              "type": "url",
              "url": "https://example.com/image.jpg"
            }
          }
        ]
      }
    ]
  }'`;
  const anthMultimodalRes = `{
  "id": "msg-xxx",
  "type": "message",
  "role": "assistant",
  "model": "${m.modelId}",
  "content": [
    {
      "type": "text",
      "text": "这张图片展示了一只可爱的橘猫，它正趴在窗台上晒太阳..."
    }
  ],
  "stop_reason": "end_turn",
  "usage": {
    "input_tokens": 1256,
    "output_tokens": 48
  }
}`;
  const anthFullReq = `curl -X POST ${anthEp} \\
  -H "Authorization: Bearer <YOUR_API_KEY>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "${m.modelId}",
    "max_tokens": 2048,
    "system": "你是一个专业的数据分析助手",
    "messages": [
      {"role": "user", "content": "帮我分析2026年Q1财报数据并生成图表"}
    ],
    "thinking": {
      "type": "enabled",
      "budget_tokens": 1024
    },
    "tools": [
      {
        "name": "generate_chart",
        "description": "生成数据可视化图表",
        "input_schema": {
          "type": "object",
          "properties": {
            "chart_type": {"type": "string"},
            "data": {"type": "array"}
          }
        }
      }
    ],
    "tool_choice": "auto"
  }'`;
  const anthFullRes = `{
  "id": "msg-xxx",
  "type": "message",
  "role": "assistant",
  "model": "${m.modelId}",
  "content": [
    {
      "type": "thinking",
      "thinking": "让我分析一下这个请求。用户需要分析财报数据并生成图表，我需要先调用 generate_chart 工具..."
    },
    {
      "type": "tool_use",
      "id": "toolu_xxx",
      "name": "generate_chart",
      "input": {
        "chart_type": "pie",
        "data": [
          {"label": "云计算", "value": 45},
          {"label": "电商", "value": 30},
          {"label": "数字媒体", "value": 15},
          {"label": "创新业务", "value": 10}
        ]
      }
    }
  ],
  "stop_reason": "tool_use",
  "usage": {
    "input_tokens": 256,
    "output_tokens": 180
  }
}`;
  const anthEx = {text:{req:anthTextReq,res:anthTextRes},stream:{req:anthStreamReq,res:anthStreamRes},multimodal:{req:anthMultimodalReq,res:anthMultimodalRes},full:{req:anthFullReq,res:anthFullRes}};

  // ========== 视频生成模型 ==========
  const videoEp = `${base}/v1/videos/generations`;
  const videoHeaders = () => {
    const isUser = curRole==='user';
    const activeKeys = API_KEYS.filter(k=>k.status===1);
    const keyOpts = activeKeys.map(k=>`<option value="${k.fullKey}">${k.name} (${maskKey(k.fullKey)})</option>`).join('');
    return `<details class="mb-3" open>
    <summary class="text-xs font-semibold cursor-pointer p-2 rounded-lg" style="background:var(--muted);color:var(--muted-foreground)">请求头 Headers</summary>
    <div class="p-2 mt-1 text-xs" style="font-family:monospace;line-height:1.8">
      <div>Authorization: <span style="color:var(--destructive)">*</span>Bearer <span class="api-key-placeholder">&lt;YOUR_API_KEY&gt;</span></div>
      <div>Content-Type: application/json</div>
      <div>X-MR-Async: true</div>
      ${isUser?`<div class="mt-2 pt-2" style="border-top:1px dashed var(--border)">
        <div class="flex items-center gap-2">
          <span class="text-xs font-semibold" style="color:var(--foreground)">选择 API Key：</span>
          ${activeKeys.length>0?`<select class="input api-key-select" style="width:auto;min-width:280px;padding:2px 8px;font-size:12px;height:28px" onchange="selectApiKey(this)">
            <option value="">请选择 API Key</option>
            ${keyOpts}
          </select>
          <button class="btn btn-ghost btn-sm api-key-copy" style="display:none;padding:2px 6px;font-size:11px" onclick="copySelectedApiKey()">复制</button>
          <a href="javascript:void(0)" class="text-xs" style="color:var(--primary);text-decoration:none" onclick="go('tokens')">管理 API Keys</a>`:`<span class="text-xs" style="color:var(--muted-foreground)">暂无可用 API Key，</span><a href="javascript:void(0)" class="text-xs" style="color:var(--primary);text-decoration:none" onclick="goCreateApiKey()">前往创建</a>`}
        </div>
      </div>`:''}
    </div>
  </details>`;
  };
  const videoEndpoint = () => `<div class="flex items-center gap-2 p-2 rounded-lg mb-3" style="background:var(--muted)">
    <span class="badge b-info" style="font-size:10px">POST</span>
    <code class="text-xs flex-1" style="font-family:monospace;word-break:break-all">${videoEp}</code>
    <button class="btn btn-ghost btn-sm" onclick="copyModelId('${videoEp}')" style="padding:2px 6px;font-size:11px">点击复制</button>
  </div>`;
  const videoSubParamRow = (name,type,req,desc) => `<div class="py-2 pl-4" style="border-bottom:1px solid var(--border)">
    <div class="flex items-center gap-2 mb-1">
      <code style="font-size:12px;font-weight:600">${name}</code>
      <span class="text-xs px-1.5 py-0.5 rounded" style="background:var(--muted);color:var(--muted-foreground)">${type}</span>
      ${req?'<span class="badge" style="font-size:10px;background:var(--destructive);color:#fff;padding:1px 5px;border-radius:4px">必填</span>':''}
    </div>
    <div class="text-xs" style="color:var(--muted-foreground);line-height:1.6">${desc}</div>
  </div>`;
  const videoObjParam = (name,type,req,desc,subParams) => `<div class="py-2.5" style="border-bottom:1px solid var(--border)">
    <div class="flex items-center gap-2 mb-1">
      <code style="font-size:13px;font-weight:600">${name}</code>
      <span class="text-xs px-1.5 py-0.5 rounded" style="background:var(--muted);color:var(--muted-foreground)">${type}</span>
      ${req?'<span class="badge" style="font-size:10px;background:var(--destructive);color:#fff;padding:1px 5px;border-radius:4px">必填</span>':''}
    </div>
    <div class="text-xs mb-2" style="color:var(--muted-foreground);line-height:1.6">${desc}</div>
    <details class="rounded-lg" open style="background:var(--card);border:1px solid var(--border)">
      <summary class="text-xs cursor-pointer p-2" style="color:var(--muted-foreground)">收起子属性</summary>
      <div>${subParams}</div>
    </details>
  </div>`;
  const videoResParams = [
    {name:'request_id',type:'string',req:false,desc:'请求唯一标识'},
    {name:'output',type:'object',req:false,desc:'输出对象',sub:[
      {name:'output.task_id',type:'string',req:false,desc:'任务ID，有效期24小时，用于查询任务结果'},
      {name:'output.task_status',type:'string',req:false,desc:'任务状态，枚举值为 PENDING、RUNNING、SUCCEEDED、FAILED、CANCELED、UNKNOWN'},
    ]},
    {name:'code',type:'string',req:false,desc:'请求失败的错误码。请求成功时不会返回此参数，参见错误信息'},
    {name:'message',type:'string',req:false,desc:'请求失败的详细信息。请求成功时不会返回此参数，参见错误信息'},
  ];
  function videoResHtml(){
    return videoResParams.map(p => {
      if(p.sub){
        const subHtml = p.sub.map(s=>videoSubParamRow(s.name,s.type,s.req,s.desc)).join('');
        return videoObjParam(p.name,p.type,p.req,p.desc,subHtml);
      }
      return `<div class="py-2.5" style="border-bottom:1px solid var(--border)">
        <div class="flex items-center gap-2 mb-1">
          <code style="font-size:13px;font-weight:600">${p.name}</code>
          <span class="text-xs px-1.5 py-0.5 rounded" style="background:var(--muted);color:var(--muted-foreground)">${p.type}</span>
        </div>
        <div class="text-xs" style="color:var(--muted-foreground);line-height:1.6">${p.desc}</div>
      </div>`;
    }).join('');
  }
  const asyncResp = `{
  "output": {
    "task_id": "qwen_xxx",
    "task_status": "PENDING"
  },
  "request_id": "xxx"
}`;

  // 子类型1: 文生视频
  const t2vReq = [
    {name:'model',type:'string',req:true,desc:''},
  ];
  const t2vInputSub = [
    {name:'input.prompt',type:'string',req:true,desc:'文本提示词。用来描述生成视频中期望包含的元素和视觉特点。支持中英文，每个汉字/字母占一个字符，超过部分会自动截断。wan2.6/wan2.5系列最多1500字符，wan2.2系列最多800字符'},
    {name:'input.negative_prompt',type:'string',req:false,desc:'反向提示词，描述不希望在画面中出现的内容，最多500字符'},
    {name:'input.audio_url',type:'string',req:false,desc:'音频文件URL（仅wan2.6/wan2.5支持）。格式：wav/mp3，时长3-30秒，大小不超过15MB。超限处理：若音频长度超过 duration 值（如5秒），自动截取前5秒，其余部分丢弃。若音频长度不足视频时长，超出音频长度部分为无声视频。例如，音频为3秒，视频时长为5秒，输出视频前3秒有声，后2秒无声。'},
  ];
  const t2vParamSub = [
    {name:'parameters.size',type:'string',req:false,desc:'视频分辨率。wan2.6-t2v默认1920*1080（1080P），支持720P/1080P；wan2.5-t2v-preview默认1920*1080（1080P），支持480P/720P/1080P；wan2.2-t2v-plus默认1920*1080（1080P），支持480P/1080P。480P档位可选的视频分辨率及其对应的视频宽高比为：832*480、480*832、624*624；720P档位可选的视频分辨率及其对应的视频宽高比为：1280*720、720*1280、960*960、1088*832、832*1088；1080P档位可选的视频分辨率及其对应的视频宽高比为：1920*1080、1080*1920、1440*1440、1632*1248、1248*1632'},
    {name:'parameters.duration',type:'integer',req:false,desc:'视频时长（秒）。wan2.6-t2v支持[2,15]之间的整数，默认5秒；wan2.5-t2v-preview支持5/10秒，默认5秒；wan2.2-t2v-plus固定5秒'},
    {name:'parameters.prompt_extend',type:'boolean',req:false,desc:'是否开启提示词智能改写，默认 false'},
    {name:'parameters.shot_type',type:'string',req:false,desc:'仅wan2.6支持，指定生成视频的镜头类型，即视频是由一个连续镜头还是多个切换镜头组成。生效条件：仅当"prompt_extend":true时生效。参数优先级：shot_type > prompt。例如，若 shot_type设置为"single"，即使prompt中包含"生成多镜头视频"，模型仍会输出单镜头视频。可选值：single（单镜头，默认）、multi（多镜头叙事）'},
    {name:'parameters.watermark',type:'boolean',req:false,desc:'是否添加水印，默认 false'},
    {name:'parameters.seed',type:'integer',req:false,desc:'随机数种子，范围[0,2147483647]。不指定则自动生成'},
  ];
  const t2vCurl = `curl --location '${videoEp}' \\
  -H "Authorization: Bearer <YOUR_API_KEY>" \\
  -H "Content-Type: application/json" \\
  -H "X-MR-Async: true" \\
  -d '{
    "model": "qwen/wan2.6-t2v",
    "input": {
      "prompt": "一幅史诗级可爱的场景。一只小巧可爱的卡通小猫将军...",
      "audio_url": "https://help-static-aliyun-doc.aliyuncs.com/..."
    },
    "parameters": {
      "size": "1280*720",
      "prompt_extend": true,
      "duration": 10,
      "shot_type": "multi"
    }
  }'`;

  // 子类型2: HappyHorse
  const hhReq = [
    {name:'model',type:'string',req:true,desc:''},
  ];
  const hhInputSub = [
    {name:'input.prompt',type:'string',req:false,desc:'文本提示词。用于描述期望生成的视频内容。支持任何语言输入，长度不超过5000个非中文字符或2500个中文字符，超过部分将自动截断'},
    {name:'input.media',type:'array',req:true,desc:'输入媒体列表。用于指定视频生成所需的图像',subType:true},
  ];
  const hhParamSub = [
    {name:'parameters.resolution',type:'string',req:false,desc:'视频分辨率档位，用于控制视频的清晰度（总像素）。模型根据选择的分辨率档位自动缩放至相近总像素，输出的视频宽高比与输入首帧近似一致。可选值：720P、1080P（默认）'},
    {name:'parameters.duration',type:'integer',req:false,desc:'视频时长（秒）。取值为[3,15]之间的整数，默认5秒'},
    {name:'parameters.watermark',type:'boolean',req:false,desc:'是否添加水印。水印位于视频右下角，文案固定为"Happy Horse"。true（默认）：添加水印；false：不添加水印'},
    {name:'parameters.seed',type:'integer',req:false,desc:'随机数种子，取值范围[0,2147483647]。未指定时系统自动生成随机种子'},
  ];
  const hhCurl = `curl --location '${videoEp}' \\
  -H "Authorization: Bearer <YOUR_API_KEY>" \\
  -H "Content-Type: application/json" \\
  -H "X-MR-Async: true" \\
  -d '{
    "model": "qwen/happyhorse-1.0-i2v",
    "input": {
      "prompt": "一只猫在草地上奔跑",
      "media": [
        {
          "type": "first_frame",
          "url": "https://cdn.translate.alibaba.com/r/wan..."
        }
      ]
    },
    "parameters": {
      "resolution": "720P",
      "duration": 5
    }
  }'`;

  // 子类型3: 图生视频
  const i2vReq = [
    {name:'model',type:'string',req:true,desc:''},
  ];
  const i2vInputSub = [
    {name:'input.prompt',type:'string',req:false,desc:'文本提示词。用来描述生成图像中期望包含的元素和视觉特点。wan2.6系列最多1500字符，wan2.2系列最多800字符。当使用视频特效参数（即template不为空）时，prompt参数无效，无需填写。'},
    {name:'input.negative_prompt',type:'string',req:false,desc:'反向提示词，用来描述不希望在视频画面中看到的内容，最多500字符'},
    {name:'input.img_url',type:'string',req:true,desc:'首帧图像URL或Base64编码。图像格式：JPEG、JPG、PNG（不支持透明通道）、BMP、WEBP。图像的宽度和高度范围为[240,8000]，单位为像素。大小不超过10MB'},
    {name:'input.audio_url',type:'string',req:false,desc:'音频文件URL（仅wan2.6支持）。格式：wav/mp3，时长3-30秒，大小不超过15MB。超限处理：若音频长度超过 duration 值（如5秒），自动截取前5秒，其余部分丢弃。若音频长度不足视频时长，超出音频长度部分为无声视频。例如，音频为3秒，视频时长为5秒，输出视频前3秒有声，后2秒无声。'},
    {name:'input.template',type:'string',req:false,desc:'视频特效模板的名称。若未填写，表示不使用任何视频特效。不同模型支持不同的特效模板。调用前请查阅万相-图生视频-视频特效，以免调用失败。'},
  ];
  const i2vParamSub = [
    {name:'parameters.resolution',type:'string',req:false,desc:'视频分辨率。wan2.6-i2v-flash默认1080P，可选720P/1080P；wan2.6-i2v默认1080P，可选720P/1080P；wan2.2-i2v-flash默认720P，可选480P/720P/1080P；wan2.2-s2v默认720P，可选480P/720P/1080P'},
    {name:'parameters.duration',type:'integer',req:false,desc:'视频时长（秒）。wan2.6-i2v-flash、wan2.6-i2v取值为[2,15]之间的整数。默认值为5。；wan2.2系列固定5秒'},
    {name:'parameters.prompt_extend',type:'boolean',req:false,desc:'是否开启提示词智能改写，默认 false'},
    {name:'parameters.shot_type',type:'string',req:false,desc:'仅wan2.6支持，指定生成视频的镜头类型，即视频是由一个连续镜头还是多个切换镜头组成。生效条件：仅当"prompt_extend":true时生效。参数优先级：shot_type > prompt。可选值：single（单镜头，默认）、multi（多镜头叙事）'},
    {name:'parameters.audio',type:'boolean',req:false,desc:'仅wan2.6-i2v-flash支持。是否生成音频，默认true。参数优先级：audio > audio_url。当audio=false时，即使传入audio_url，输出仍为无声视频，且计费按无声视频计算。'},
    {name:'parameters.watermark',type:'boolean',req:false,desc:'是否添加水印，默认 false'},
    {name:'parameters.seed',type:'integer',req:false,desc:'随机数种子，范围[0,2147483647]。不指定则自动生成'},
  ];
  const i2vCurl = `curl --location '${videoEp}' \\
  -H "Authorization: Bearer <YOUR_API_KEY>" \\
  -H "Content-Type: application/json" \\
  -H "X-MR-Async: true" \\
  -d '{
    "model": "qwen/wan2.6-i2v-flash",
    "input": {
      "prompt": "一幅都市奇幻艺术的场景。一个充满动感的涂鸦艺术角...",
      "img_url": "https://help-static-aliyun-doc.aliyuncs.com/...",
      "audio_url": "https://help-static-aliyun-doc.aliyuncs.com/..."
    },
    "parameters": {
      "resolution": "720P",
      "prompt_extend": true,
      "duration": 10,
      "shot_type": "multi"
    }
  }'`;

  // 子类型4: 万相2.7-文生视频
  const wx27t2vReq = [
    {name:'model',type:'string',req:true,desc:''},
  ];
  const wx27t2vInputSub = [
    {name:'input.prompt',type:'string',req:true,desc:'文本提示词。用来描述生成视频中期望包含的元素和视觉特点。支持中英文，长度不超过5000个字符，超过部分会自动截断。支持通过自然语言控制镜头结构（单镜头/多镜头），无需配置shot_type参数'},
    {name:'input.negative_prompt',type:'string',req:false,desc:'反向提示词，用来描述不希望在视频画面中看到的内容，最多500字符'},
    {name:'input.audio_url',type:'string',req:false,desc:'音频文件URL。模型将使用该音频生成视频。格式：wav/mp3，时长2-30秒，大小不超过15MB。超限处理：若音频长度超过 duration 值（如5秒），自动截取前5秒，其余部分丢弃；若音频长度不足视频时长，超出音频长度部分为无声视频。未传入时，模型将根据视频内容自动生成匹配的背景音乐或音效'},
  ];
  const wx27t2vParamSub = [
    {name:'parameters.resolution',type:'string',req:false,desc:'视频分辨率档位。可选值：720P、1080P（默认值）'},
    {name:'parameters.ratio',type:'string',req:false,desc:'生成视频的宽高比。可选值：16:9（默认值）、9:16、1:1、4:3'},
    {name:'parameters.duration',type:'integer',req:false,desc:'视频时长（秒）。取值为[2,15]之间的整数，默认值为5'},
    {name:'parameters.prompt_extend',type:'boolean',req:false,desc:'是否开启prompt智能改写。true（默认值）：开启智能改写；false：不开启'},
    {name:'parameters.watermark',type:'boolean',req:false,desc:'是否添加水印，水印位于视频右下角，文案固定为"AI生成"。false（默认值）：不添加水印；true：添加水印'},
    {name:'parameters.seed',type:'integer',req:false,desc:'随机数种子，取值范围[0,2147483647]。未指定时系统自动生成随机种子'},
  ];
  const wx27t2vCurl = `curl --location '${videoEp}' \\
  -H "Authorization: Bearer <YOUR_API_KEY>" \\
  -H "Content-Type: application/json" \\
  -H "X-MR-Async: true" \\
  -d '{
    "model": "qwen/wan2.7-t2v",
    "input": {
      "prompt": "一只小猫在月光下奔跑，镜头跟随小猫穿过花丛"
    },
    "parameters": {
      "resolution": "720P",
      "ratio": "16:9",
      "prompt_extend": true,
      "watermark": false,
      "duration": 5
    }
  }'`;

  // 子类型5: 万相2.7-图生视频
  const wx27i2vReq = [
    {name:'model',type:'string',req:true,desc:''},
  ];
  const wx27i2vInputSub = [
    {name:'input.prompt',type:'string',req:false,desc:'文本提示词。用来描述生成视频中期望包含的元素和视觉特点。支持中英文，长度不超过5000个字符，超过部分会自动截断'},
    {name:'input.negative_prompt',type:'string',req:false,desc:'反向提示词，用来描述不希望在视频画面中看到的内容，最多500字符'},
    {name:'input.media',type:'array',req:true,desc:'媒体素材列表，用于指定视频生成所需的参考素材（图像、音频和视频）。数组的每个元素为一个媒体对象，包含 type 与 url 字段。每种 type 在 media 数组中最多出现一次。仅支持以下素材组合：首帧生视频（first_frame、first_frame+driving_audio）；首尾帧生视频（first_frame+last_frame、first_frame+last_frame+driving_audio）；视频续写（first_clip、first_clip+last_frame）。非法组合将报错',subType:true},
  ];
  const wx27i2vParamSub = [
    {name:'parameters.resolution',type:'string',req:false,desc:'视频分辨率档位。可选值：720P、1080P（默认值）。输出视频宽高比尽量与输入素材保持一致'},
    {name:'parameters.duration',type:'integer',req:false,desc:'视频时长（秒）。取值为[2,15]之间的整数，默认值为5。视频续写场景下，续写时长的上限由 duration 控制，最终输出视频总时长等于 duration（例如输入视频3秒、duration=15时，续写生成12秒，最终输出总时长15秒，按15秒计费）'},
    {name:'parameters.prompt_extend',type:'boolean',req:false,desc:'是否开启prompt智能改写。true（默认值）：开启；false：不开启'},
    {name:'parameters.watermark',type:'boolean',req:false,desc:'是否添加水印，水印位于视频右下角，文案固定为"AI生成"。false（默认值）：不添加水印；true：添加水印'},
    {name:'parameters.seed',type:'integer',req:false,desc:'随机数种子，取值范围[0,2147483647]。未指定时系统自动生成随机种子'},
  ];
  const wx27i2vCurl = `curl --location '${videoEp}' \\
  -H "Authorization: Bearer <YOUR_API_KEY>" \\
  -H "Content-Type: application/json" \\
  -H "X-MR-Async: true" \\
  -d '{
    "model": "qwen/wan2.7-i2v",
    "input": {
      "prompt": "一幅都市奇幻艺术的场景。一个由喷漆所画成的少年从...",
      "media": [
        {
          "type": "first_frame",
          "url": "https://help-static-aliyun-doc.aliyuncs.com/..."
        },
        {
          "type": "driving_audio",
          "url": "https://help-static-aliyun-doc.aliyuncs.com/..."
        }
      ]
    },
    "parameters": {
      "resolution": "720P",
      "duration": 10,
      "prompt_extend": true,
      "watermark": true
    }
  }'`;

  // 子类型6: 万相2.7-参考生视频
  const wx27refReq = [
    {name:'model',type:'string',req:true,desc:''},
  ];
  const wx27refInputSub = [
    {name:'input.prompt',type:'string',req:true,desc:'文本提示词。用来描述生成视频中期望包含的元素和视觉特点。支持中英文，长度不超过5000个字符。可通过"图1、图2"指代参考图像、"视频1、视频2"指代参考视频，顺序与 media 数组一致；若参考素材有且仅有一个，可简化为"参考图片"/"参考视频"'},
    {name:'input.negative_prompt',type:'string',req:false,desc:'反向提示词，用来描述不希望在视频画面中看到的内容，最多500字符'},
    {name:'input.media',type:'array',req:true,desc:'媒体素材数组，素材包括图像、视频和音频，用于保持角色形象和音色一致性。数组中每个元素为一个媒体对象，包含 type 与 url 字段，可选 reference_voice 字段。素材限制：首帧图像（first_frame）最多传入1张；参考图像和参考视频至少传入1个，参考图像 + 参考视频 ≤ 5。参考素材为主体角色时，仅包含单一角色',subType:true},
  ];
  const wx27refParamSub = [
    {name:'parameters.resolution',type:'string',req:false,desc:'视频分辨率档位。可选值：720P、1080P（默认值）'},
    {name:'parameters.ratio',type:'string',req:false,desc:'生成视频的宽高比。可选值：16:9（默认值）、9:16、1:1、4:3。未传入首帧图像时按 ratio 参数生成；已传入首帧图像时自动忽略 ratio 参数，以首帧图像的宽高比生成近似比例的视频'},
    {name:'parameters.duration',type:'integer',req:false,desc:'视频时长（秒）。默认值为5'},
    {name:'parameters.prompt_extend',type:'boolean',req:false,desc:'是否开启prompt智能改写。true（默认值）：开启；false：不开启'},
    {name:'parameters.watermark',type:'boolean',req:false,desc:'是否添加水印，水印位于视频右下角，文案固定为"AI生成"。false（默认值）：不添加水印；true：添加水印'},
  ];
  const wx27refCurl = `curl --location '${videoEp}' \\
  -H "Authorization: Bearer <YOUR_API_KEY>" \\
  -H "Content-Type: application/json" \\
  -H "X-MR-Async: true" \\
  -d '{
    "model": "qwen/wan2.7-r2v",
    "input": {
      "prompt": "视频2抱着图3在咖啡厅里弹奏一支舒缓的美式乡村民谣",
      "media": [
        {
          "type": "reference_video",
          "url": "https://help-static-aliyun-doc.aliyuncs.com/..."
        },
        {
          "type": "reference_video",
          "url": "https://help-static-aliyun-doc.aliyuncs.com/..."
        },
        {
          "type": "reference_image",
          "url": "https://help-static-aliyun-doc.aliyuncs.com/..."
        }
      ]
    },
    "parameters": {
      "resolution": "720P",
      "ratio": "16:9",
      "duration": 10,
      "prompt_extend": false,
      "watermark": true
    }
  }'`;

  // 子类型7: 万相2.7-视频编辑
  const wx27editReq = [
    {name:'model',type:'string',req:true,desc:''},
  ];
  const wx27editInputSub = [
    {name:'input.prompt',type:'string',req:false,desc:'文本提示词。用来描述期望的视频编辑效果（如替换人物服饰、更改场景元素、调整画面风格、复刻动作特效等）。支持中英文，长度不超过5000个字符，超过部分会自动截断'},
    {name:'input.negative_prompt',type:'string',req:false,desc:'反向提示词，用来描述不希望在视频画面中出现的内容，最多500字符'},
    {name:'input.media',type:'array',req:true,desc:'媒体素材列表，用于指定视频编辑所需的参考素材（视频、图像）。素材限制：待编辑视频（type=video）有且仅有1个；参考图像（type=reference_image）最多传入4张',subType:true},
  ];
  const wx27editParamSub = [
    {name:'parameters.resolution',type:'string',req:false,desc:'视频分辨率档位。可选值：720P、1080P（默认值）'},
    {name:'parameters.prompt_extend',type:'boolean',req:false,desc:'是否开启prompt智能改写。true（默认值）：开启；false：不开启'},
    {name:'parameters.watermark',type:'boolean',req:false,desc:'是否添加水印，水印位于视频右下角，文案固定为"AI生成"。false（默认值）：不添加水印；true：添加水印'},
  ];
  const wx27editCurl = `curl --location '${videoEp}' \\
  -H "Authorization: Bearer <YOUR_API_KEY>" \\
  -H "Content-Type: application/json" \\
  -H "X-MR-Async: true" \\
  -d '{
    "model": "qwen/wan2.7-videoedit",
    "input": {
      "prompt": "将视频中女孩的衣服替换为图片中的衣服",
      "media": [
        {
          "type": "video",
          "url": "https://help-static-aliyun-doc.aliyuncs.com/..."
        },
        {
          "type": "reference_image",
          "url": "https://help-static-aliyun-doc.aliyuncs.com/..."
        }
      ]
    },
    "parameters": {
      "resolution": "720P",
      "prompt_extend": true,
      "watermark": true
    }
  }'`;

  // 视频生成API区块
  function videoSubTypeContent(prefix,desc,reqData,resLabel,reqExample,resExample){
    const inputSubHtml = reqData.inputSub.map(s=>videoSubParamRow(s.name,s.type,s.req,s.desc)).join('');
    const paramSubHtml = reqData.paramSub.map(s=>videoSubParamRow(s.name,s.type,s.req,s.desc)).join('');
    const reqTopHtml = reqData.top.map(p => {
      return `<div class="py-2.5" style="border-bottom:1px solid var(--border)">
        <div class="flex items-center gap-2 ${p.desc?'mb-1':''}">
          <code style="font-size:13px;font-weight:600">${p.name}</code>
          <span class="text-xs px-1.5 py-0.5 rounded" style="background:var(--muted);color:var(--muted-foreground)">${p.type}</span>
          ${p.req?'<span class="badge" style="font-size:10px;background:var(--destructive);color:#fff;padding:1px 5px;border-radius:4px">必填</span>':''}
        </div>
        ${p.desc?`<div class="text-xs" style="color:var(--muted-foreground);line-height:1.6">${p.desc}</div>`:''}
      </div>`;
    }).join('');
    const inputObj = videoObjParam('input','object',true,'输入对象',inputSubHtml);
    const paramObj = videoObjParam('parameters','object',false,'生成参数',paramSubHtml);
    return `<div class="mb-2">
      <div class="text-sm font-semibold mb-1">视频生成</div>
      <div class="text-xs mb-2" style="color:var(--muted-foreground);line-height:1.6">${desc}</div>
      ${videoEndpoint()}
      ${videoHeaders()}
      <div class="flex gap-3" style="align-items:flex-start">
        <div style="flex:1;min-width:0">
          <div class="flex gap-1 mb-2" style="border-bottom:2px solid var(--border)">
            <button class="body-tab text-xs font-semibold pb-1.5 px-2" style="color:var(--primary);border-bottom:2px solid var(--primary);margin-bottom:-2px" onclick="switchBodyTab(this,'${prefix}-req')">请求体</button>
            <button class="body-tab text-xs font-semibold pb-1.5 px-2" style="color:var(--muted-foreground)" onclick="switchBodyTab(this,'${prefix}-res')">响应体</button>
          </div>
          <div id="${prefix}-req" class="body-panel">${reqTopHtml}${inputObj}${paramObj}</div>
          <div id="${prefix}-res" class="body-panel" style="display:none">${videoResHtml()}</div>
        </div>
        <div style="width:42%;flex-shrink:0">
          <div class="text-xs font-semibold mb-1">请求示例</div>
          ${codeBlk(reqExample)}
          <div class="flex items-center gap-2 mb-1 mt-2">
            <span class="text-xs font-semibold">响应示例</span>
            <span class="text-xs" style="color:var(--muted-foreground)">${resLabel}</span>
          </div>
          ${codeBlk(resExample)}
        </div>
      </div>
    </div>`;
  }

  const videoSubTypes = [
    {key:'t2v',label:'文生视频'},
    {key:'hh',label:'HappyHorse'},
    {key:'i2v',label:'图生视频'},
    {key:'wx27t2v',label:'万相2.7-文生视频'},
    {key:'wx27i2v',label:'万相2.7-图生视频'},
    {key:'wx27ref',label:'万相2.7-参考生视频'},
    {key:'wx27edit',label:'万相2.7-视频编辑'},
  ];
  const videoDesc = '视频生成接口，支持文生视频、HappyHorse图生视频和图生视频三种类型。采用异步调用方式，需先创建任务获取 task_id，再通过异步任务查询接口获取结果。';
  const t2vData = {top:t2vReq,inputSub:t2vInputSub,paramSub:t2vParamSub};
  const hhData = {top:hhReq,inputSub:hhInputSub,paramSub:hhParamSub};
  const i2vData = {top:i2vReq,inputSub:i2vInputSub,paramSub:i2vParamSub};
  const wx27t2vData = {top:wx27t2vReq,inputSub:wx27t2vInputSub,paramSub:wx27t2vParamSub};
  const wx27i2vData = {top:wx27i2vReq,inputSub:wx27i2vInputSub,paramSub:wx27i2vParamSub};
  const wx27refData = {top:wx27refReq,inputSub:wx27refInputSub,paramSub:wx27refParamSub};
  const wx27editData = {top:wx27editReq,inputSub:wx27editInputSub,paramSub:wx27editParamSub};

  function videoApiSection(){
    const tabs = videoSubTypes.map((s,i)=>`
      <button class="api-tab btn btn-sm" style="${i===0?'background:var(--card);color:var(--foreground)':'background:transparent;color:var(--muted-foreground)'};font-size:12px;white-space:nowrap" onclick="switchVideoSubType(this,'video-${s.key}')">${s.label}</button>
    `).join('');
    const contents = videoSubTypes.map((s,i)=>{
      let reqData, resLabel, curl;
      switch(s.key){
        case 't2v': reqData=t2vData; resLabel='异步调用'; curl=t2vCurl; break;
        case 'hh': reqData=hhData; resLabel='异步调用'; curl=hhCurl; break;
        case 'i2v': reqData=i2vData; resLabel='异步调用'; curl=i2vCurl; break;
        case 'wx27t2v': reqData=wx27t2vData; resLabel='异步调用'; curl=wx27t2vCurl; break;
        case 'wx27i2v': reqData=wx27i2vData; resLabel='首帧+音频生成视频'; curl=wx27i2vCurl; break;
        case 'wx27ref': reqData=wx27refData; resLabel='多主体参考生成'; curl=wx27refCurl; break;
        case 'wx27edit': reqData=wx27editData; resLabel='指令+参考图编辑'; curl=wx27editCurl; break;
      }
      return `<div id="video-${s.key}" style="${i===0?'':'display:none'}">${videoSubTypeContent(`video-${s.key}`,videoDesc,reqData,resLabel,curl,asyncResp)}</div>`;
    }).join('');
    return `<div class="text-xs font-semibold mb-2" style="color:var(--muted-foreground)">接口调用</div>
      <div class="flex gap-1 mb-3 p-1 rounded-lg overflow-x-auto" style="background:var(--muted);flex-wrap:nowrap">
        ${tabs}
      </div>
      ${contents}`;
  }

  // ========== 图片生成模型 ==========
  const imageEp = `${base}/v1/images/generations`;
  const imageHeaders = () => {
    const isUser = curRole==='user';
    const activeKeys = API_KEYS.filter(k=>k.status===1);
    const keyOpts = activeKeys.map(k=>`<option value="${k.fullKey}">${k.name} (${maskKey(k.fullKey)})</option>`).join('');
    return `<details class="mb-3" open>
    <summary class="text-xs font-semibold cursor-pointer p-2 rounded-lg" style="background:var(--muted);color:var(--muted-foreground)">请求头 Headers</summary>
    <div class="p-2 mt-1 text-xs" style="font-family:monospace;line-height:1.8">
      <div>Authorization: <span style="color:var(--destructive)">*</span>Bearer <span class="api-key-placeholder">&lt;YOUR_API_KEY&gt;</span></div>
      <div>Content-Type: application/json</div>
      ${isUser?`<div class="mt-2 pt-2" style="border-top:1px dashed var(--border)">
        <div class="flex items-center gap-2">
          <span class="text-xs font-semibold" style="color:var(--foreground)">选择 API Key：</span>
          ${activeKeys.length>0?`<select class="input api-key-select" style="width:auto;min-width:280px;padding:2px 8px;font-size:12px;height:28px" onchange="selectApiKey(this)">
            <option value="">请选择 API Key</option>
            ${keyOpts}
          </select>
          <button class="btn btn-ghost btn-sm api-key-copy" style="display:none;padding:2px 6px;font-size:11px" onclick="copySelectedApiKey()">复制</button>
          <a href="javascript:void(0)" class="text-xs" style="color:var(--primary);text-decoration:none" onclick="go('tokens')">管理 API Keys</a>`:`<span class="text-xs" style="color:var(--muted-foreground)">暂无可用 API Key，</span><a href="javascript:void(0)" class="text-xs" style="color:var(--primary);text-decoration:none" onclick="goCreateApiKey()">前往创建</a>`}
        </div>
      </div>`:''}
    </div>
  </details>`;
  };
  const imageHeadersAsync = () => {
    const isUser = curRole==='user';
    const activeKeys = API_KEYS.filter(k=>k.status===1);
    const keyOpts = activeKeys.map(k=>`<option value="${k.fullKey}">${k.name} (${maskKey(k.fullKey)})</option>`).join('');
    return `<details class="mb-3" open>
    <summary class="text-xs font-semibold cursor-pointer p-2 rounded-lg" style="background:var(--muted);color:var(--muted-foreground)">请求头 Headers</summary>
    <div class="p-2 mt-1 text-xs" style="font-family:monospace;line-height:1.8">
      <div>Authorization: <span style="color:var(--destructive)">*</span>Bearer <span class="api-key-placeholder">&lt;YOUR_API_KEY&gt;</span></div>
      <div>Content-Type: application/json</div>
      <div>X-MR-Async: true</div>
      ${isUser?`<div class="mt-2 pt-2" style="border-top:1px dashed var(--border)">
        <div class="flex items-center gap-2">
          <span class="text-xs font-semibold" style="color:var(--foreground)">选择 API Key：</span>
          ${activeKeys.length>0?`<select class="input api-key-select" style="width:auto;min-width:280px;padding:2px 8px;font-size:12px;height:28px" onchange="selectApiKey(this)">
            <option value="">请选择 API Key</option>
            ${keyOpts}
          </select>
          <button class="btn btn-ghost btn-sm api-key-copy" style="display:none;padding:2px 6px;font-size:11px" onclick="copySelectedApiKey()">复制</button>
          <a href="javascript:void(0)" class="text-xs" style="color:var(--primary);text-decoration:none" onclick="go('tokens')">管理 API Keys</a>`:`<span class="text-xs" style="color:var(--muted-foreground)">暂无可用 API Key，</span><a href="javascript:void(0)" class="text-xs" style="color:var(--primary);text-decoration:none" onclick="goCreateApiKey()">前往创建</a>`}
        </div>
      </div>`:''}
    </div>
  </details>`;
  };
  const imageEndpoint = () => `<div class="flex items-center gap-2 p-2 rounded-lg mb-3" style="background:var(--muted)">
    <span class="badge b-info" style="font-size:10px">POST</span>
    <code class="text-xs flex-1" style="font-family:monospace;word-break:break-all">${imageEp}</code>
    <button class="btn btn-ghost btn-sm" onclick="copyModelId('${imageEp}')" style="padding:2px 6px;font-size:11px">点击复制</button>
  </div>`;
  const imageSubParamRow = (name,type,req,desc) => `<div class="py-2 pl-4" style="border-bottom:1px solid var(--border)">
    <div class="flex items-center gap-2 mb-1">
      <code style="font-size:12px;font-weight:600">${name}</code>
      <span class="text-xs px-1.5 py-0.5 rounded" style="background:var(--muted);color:var(--muted-foreground)">${type}</span>
      ${req?'<span class="badge" style="font-size:10px;background:var(--destructive);color:#fff;padding:1px 5px;border-radius:4px">必填</span>':''}
    </div>
    <div class="text-xs" style="color:var(--muted-foreground);line-height:1.6">${desc}</div>
  </div>`;
  const imageObjParam = (name,type,req,desc,subParams) => `<div class="py-2.5" style="border-bottom:1px solid var(--border)">
    <div class="flex items-center gap-2 mb-1">
      <code style="font-size:13px;font-weight:600">${name}</code>
      <span class="text-xs px-1.5 py-0.5 rounded" style="background:var(--muted);color:var(--muted-foreground)">${type}</span>
      ${req?'<span class="badge" style="font-size:10px;background:var(--destructive);color:#fff;padding:1px 5px;border-radius:4px">必填</span>':''}
    </div>
    <div class="text-xs mb-2" style="color:var(--muted-foreground);line-height:1.6">${desc}</div>
    <details class="rounded-lg" open style="background:var(--card);border:1px solid var(--border)">
      <summary class="text-xs cursor-pointer p-2" style="color:var(--muted-foreground)">收起子属性</summary>
      <div>${subParams}</div>
    </details>
  </div>`;

  // 图片生成同步响应参数
  const imageSyncResParams = [
    {name:'request_id',type:'string',req:false,desc:'请求唯一标识'},
    {name:'output',type:'object',req:false,desc:'输出对象',sub:[
      {name:'output.results',type:'array',req:false,desc:'生成结果数组，每个元素包含一张图片信息'},
      {name:'output.results[].url',type:'string',req:false,desc:'图片URL，有效期24小时'},
      {name:'output.results[].b64_json',type:'string',req:false,desc:'图片Base64编码（仅当response_format为b64_json时返回）'},
    ]},
    {name:'usage',type:'object',req:false,desc:'用量信息',sub:[
      {name:'usage.image_count',type:'integer',req:false,desc:'生成图片数量'},
    ]},
    {name:'code',type:'string',req:false,desc:'请求失败的错误码。请求成功时不会返回此参数'},
    {name:'message',type:'string',req:false,desc:'请求失败的详细信息。请求成功时不会返回此参数'},
  ];

  // 图片生成异步响应参数
  const imageAsyncResParams = [
    {name:'request_id',type:'string',req:false,desc:'请求唯一标识'},
    {name:'output',type:'object',req:false,desc:'输出对象',sub:[
      {name:'output.task_id',type:'string',req:false,desc:'任务ID，有效期24小时，用于查询任务结果'},
      {name:'output.task_status',type:'string',req:false,desc:'任务状态，枚举值为 PENDING、RUNNING、SUCCEEDED、FAILED、CANCELED、UNKNOWN'},
    ]},
    {name:'code',type:'string',req:false,desc:'请求失败的错误码。请求成功时不会返回此参数'},
    {name:'message',type:'string',req:false,desc:'请求失败的详细信息。请求成功时不会返回此参数'},
  ];

  function imageSyncResHtml(){
    return imageSyncResParams.map(p => {
      if(p.sub){
        const subHtml = p.sub.map(s=>imageSubParamRow(s.name,s.type,s.req,s.desc)).join('');
        return imageObjParam(p.name,p.type,p.req,p.desc,subHtml);
      }
      return `<div class="py-2.5" style="border-bottom:1px solid var(--border)">
        <div class="flex items-center gap-2 mb-1">
          <code style="font-size:13px;font-weight:600">${p.name}</code>
          <span class="text-xs px-1.5 py-0.5 rounded" style="background:var(--muted);color:var(--muted-foreground)">${p.type}</span>
        </div>
        <div class="text-xs" style="color:var(--muted-foreground);line-height:1.6">${p.desc}</div>
      </div>`;
    }).join('');
  }

  function imageAsyncResHtml(){
    return imageAsyncResParams.map(p => {
      if(p.sub){
        const subHtml = p.sub.map(s=>imageSubParamRow(s.name,s.type,s.req,s.desc)).join('');
        return imageObjParam(p.name,p.type,p.req,p.desc,subHtml);
      }
      return `<div class="py-2.5" style="border-bottom:1px solid var(--border)">
        <div class="flex items-center gap-2 mb-1">
          <code style="font-size:13px;font-weight:600">${p.name}</code>
          <span class="text-xs px-1.5 py-0.5 rounded" style="background:var(--muted);color:var(--muted-foreground)">${p.type}</span>
        </div>
        <div class="text-xs" style="color:var(--muted-foreground);line-height:1.6">${p.desc}</div>
      </div>`;
    }).join('');
  }

  const imageSyncResp = `{
  "output": {
    "results": [
      {
        "url": "https://dashscope.oss-cn-beijing.aliyuncs.com/images/xxx.png"
      }
    ]
  },
  "usage": {
    "image_count": 1
  },
  "request_id": "xxx"
}`;

  const imageAsyncResp = `{
  "output": {
    "task_id": "img_xxx",
    "task_status": "PENDING"
  },
  "request_id": "xxx"
}`;

  // 子类型1: 千问系列（同步）
  const qwenSyncReq = [
    {name:'model',type:'string',req:true,desc:''},
  ];
  const qwenSyncInputSub = [
    {name:'input.prompt',type:'string',req:true,desc:'文本提示词。用来描述生成图像中期望包含的元素和视觉特点。支持中英文，最多500个字符，超过部分会自动截断'},
    {name:'input.negative_prompt',type:'string',req:false,desc:'反向提示词，用来描述不希望在图像中出现的内容，最多500字符'},
  ];
  const qwenSyncParamSub = [
    {name:'parameters.size',type:'string',req:false,desc:'图片尺寸。可选值：1024*1024（默认）、720*1280、1280*720、960*960'},
    {name:'parameters.n',type:'integer',req:false,desc:'生成图片数量，范围[1,4]，默认1'},
    {name:'parameters.seed',type:'integer',req:false,desc:'随机数种子，范围[0,2147483647]。不指定则自动生成'},
    {name:'parameters.response_format',type:'string',req:false,desc:'返回格式。可选值：url（默认）、b64_json'},
  ];
  const qwenSyncCurl = `curl --location '${imageEp}' \\
  -H "Authorization: Bearer <YOUR_API_KEY>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "qwen/qwen2.5-flux-image-gen",
    "input": {
      "prompt": "一只可爱的卡通小猫在花园里玩耍，阳光明媚，色彩鲜艳"
    },
    "parameters": {
      "size": "1024*1024",
      "n": 1
    }
  }'`;

  // 子类型2: 千问系列（编辑）
  const qwenEditReq = [
    {name:'model',type:'string',req:true,desc:''},
  ];
  const qwenEditInputSub = [
    {name:'input.prompt',type:'string',req:true,desc:'文本提示词。描述期望的编辑效果，支持中英文，最多500字符'},
    {name:'input.image',type:'string',req:true,desc:'原始图片URL或Base64编码。图片格式：JPEG、JPG、PNG、WEBP，大小不超过10MB'},
    {name:'input.negative_prompt',type:'string',req:false,desc:'反向提示词，描述不希望出现的内容，最多500字符'},
  ];
  const qwenEditParamSub = [
    {name:'parameters.size',type:'string',req:false,desc:'输出图片尺寸。可选值：1024*1024（默认）、720*1280、1280*720'},
    {name:'parameters.n',type:'integer',req:false,desc:'生成图片数量，范围[1,4]，默认1'},
    {name:'parameters.seed',type:'integer',req:false,desc:'随机数种子，范围[0,2147483647]'},
    {name:'parameters.response_format',type:'string',req:false,desc:'返回格式。可选值：url（默认）、b64_json'},
  ];
  const qwenEditCurl = `curl --location '${imageEp}' \\
  -H "Authorization: Bearer <YOUR_API_KEY>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "qwen/qwen2.5-flux-image-edit",
    "input": {
      "prompt": "将图片中的小猫换成小狗，保持背景不变",
      "image": "https://example.com/original.png"
    },
    "parameters": {
      "size": "1024*1024",
      "n": 1
    }
  }'`;

  // 子类型3: 千问系列（异步）
  const qwenAsyncReq = [
    {name:'model',type:'string',req:true,desc:''},
  ];
  const qwenAsyncInputSub = [
    {name:'input.prompt',type:'string',req:true,desc:'文本提示词。用来描述生成图像中期望包含的元素和视觉特点。支持中英文，最多500个字符，超过部分会自动截断'},
    {name:'input.negative_prompt',type:'string',req:false,desc:'反向提示词，用来描述不希望在图像中出现的内容，最多500字符'},
  ];
  const qwenAsyncParamSub = [
    {name:'parameters.size',type:'string',req:false,desc:'图片尺寸。可选值：1024*1024（默认）、720*1280、1280*720、960*960'},
    {name:'parameters.n',type:'integer',req:false,desc:'生成图片数量，范围[1,4]，默认1'},
    {name:'parameters.seed',type:'integer',req:false,desc:'随机数种子，范围[0,2147483647]。不指定则自动生成'},
  ];
  const qwenAsyncCurl = `curl --location '${imageEp}' \\
  -H "Authorization: Bearer <YOUR_API_KEY>" \\
  -H "Content-Type: application/json" \\
  -H "X-MR-Async: true" \\
  -d '{
    "model": "qwen/qwen2.5-flux-image-gen-async",
    "input": {
      "prompt": "一幅史诗级奇幻场景，巨龙盘旋在城堡上空，夕阳映照"
    },
    "parameters": {
      "size": "1280*720",
      "n": 1
    }
  }'`;

  // 子类型4: 万相系列2.6（同步）
  const wanx26SyncReq = [
    {name:'model',type:'string',req:true,desc:''},
  ];
  const wanx26SyncInputSub = [
    {name:'input.prompt',type:'string',req:true,desc:'文本提示词。用来描述生成图像中期望包含的元素和视觉特点。支持中英文，最多500字符，超过部分会自动截断'},
    {name:'input.negative_prompt',type:'string',req:false,desc:'反向提示词，描述不希望在画面中出现的内容，最多500字符'},
  ];
  const wanx26SyncParamSub = [
    {name:'parameters.size',type:'string',req:false,desc:'图片尺寸。支持：1024*1024、720*1280、1280*720、960*960、768*768、512*512，默认1024*1024'},
    {name:'parameters.n',type:'integer',req:false,desc:'生成图片数量，范围[1,4]，默认1'},
    {name:'parameters.seed',type:'integer',req:false,desc:'随机数种子，范围[0,2147483647]。不指定则自动生成'},
    {name:'parameters.style',type:'string',req:false,desc:'生成风格。可选值：auto（默认）、realistic、anime、oil_painting、watercolor、sketch、chinese_painting、flat_2d、3d_render'},
    {name:'parameters.response_format',type:'string',req:false,desc:'返回格式。可选值：url（默认）、b64_json'},
  ];
  const wanx26SyncCurl = `curl --location '${imageEp}' \\
  -H "Authorization: Bearer <YOUR_API_KEY>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "qwen/wanx2.6-t2i",
    "input": {
      "prompt": "一位身穿汉服的少女站在樱花树下，花瓣飘落，唯美意境"
    },
    "parameters": {
      "size": "1024*1024",
      "style": "anime",
      "n": 1
    }
  }'`;

  // 子类型5: 万相系列2.7（同步）
  const wanx27SyncReq = [
    {name:'model',type:'string',req:true,desc:''},
  ];
  const wanx27SyncInputSub = [
    {name:'input.prompt',type:'string',req:true,desc:'文本提示词。用来描述生成图像中期望包含的元素和视觉特点。支持中英文，最长支持5000字符，超过部分会自动截断'},
    {name:'input.negative_prompt',type:'string',req:false,desc:'反向提示词，描述不希望在画面中出现的内容，最多500字符'},
  ];
  const wanx27SyncParamSub = [
    {name:'parameters.size',type:'string',req:false,desc:'图片尺寸。支持：1024*1024、720*1280、1280*720、960*960、768*768、512*512、1280*1280，默认1024*1024'},
    {name:'parameters.n',type:'integer',req:false,desc:'生成图片数量，范围[1,4]，默认1'},
    {name:'parameters.seed',type:'integer',req:false,desc:'随机数种子，范围[0,2147483647]。不指定则自动生成'},
    {name:'parameters.style',type:'string',req:false,desc:'生成风格。可选值：auto（默认）、realistic、anime、oil_painting、watercolor、sketch、chinese_painting、flat_2d、3d_render、cyberpunk、pixel_art'},
    {name:'parameters.prompt_extend',type:'boolean',req:false,desc:'是否开启提示词智能改写，默认true'},
    {name:'parameters.response_format',type:'string',req:false,desc:'返回格式。可选值：url（默认）、b64_json'},
  ];
  const wanx27SyncCurl = `curl --location '${imageEp}' \\
  -H "Authorization: Bearer <YOUR_API_KEY>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "qwen/wanx2.7-t2i",
    "input": {
      "prompt": "赛博朋克风格的未来都市夜景，霓虹灯闪烁，雨天反射，全息广告"
    },
    "parameters": {
      "size": "1280*720",
      "style": "cyberpunk",
      "prompt_extend": true,
      "n": 1
    }
  }'`;

  // 子类型6: 万相系列2.6（异步）
  const wanx26AsyncReq = [
    {name:'model',type:'string',req:true,desc:''},
  ];
  const wanx26AsyncInputSub = [
    {name:'input.prompt',type:'string',req:true,desc:'文本提示词。用来描述生成图像中期望包含的元素和视觉特点。支持中英文，最多500字符，超过部分会自动截断'},
    {name:'input.negative_prompt',type:'string',req:false,desc:'反向提示词，描述不希望在画面中出现的内容，最多500字符'},
  ];
  const wanx26AsyncParamSub = [
    {name:'parameters.size',type:'string',req:false,desc:'图片尺寸。支持：1024*1024、720*1280、1280*720、960*960、768*768、512*512，默认1024*1024'},
    {name:'parameters.n',type:'integer',req:false,desc:'生成图片数量，范围[1,4]，默认1'},
    {name:'parameters.seed',type:'integer',req:false,desc:'随机数种子，范围[0,2147483647]。不指定则自动生成'},
    {name:'parameters.style',type:'string',req:false,desc:'生成风格。可选值：auto（默认）、realistic、anime、oil_painting、watercolor、sketch、chinese_painting、flat_2d、3d_render'},
  ];
  const wanx26AsyncCurl = `curl --location '${imageEp}' \\
  -H "Authorization: Bearer <YOUR_API_KEY>" \\
  -H "Content-Type: application/json" \\
  -H "X-MR-Async: true" \\
  -d '{
    "model": "qwen/wanx2.6-t2i-async",
    "input": {
      "prompt": "一幅中国山水画，群山连绵，云雾缭绕，孤帆远影"
    },
    "parameters": {
      "size": "1024*1024",
      "style": "chinese_painting",
      "n": 1
    }
  }'`;

  // 子类型7: 万相系列2.5（及以下）
  const wanx25Req = [
    {name:'model',type:'string',req:true,desc:''},
  ];
  const wanx25InputSub = [
    {name:'input.prompt',type:'string',req:true,desc:'文本提示词。用来描述生成图像中期望包含的元素和视觉特点。支持中英文，最多500字符，超过部分会自动截断'},
    {name:'input.negative_prompt',type:'string',req:false,desc:'反向提示词，描述不希望在画面中出现的内容，最多500字符'},
  ];
  const wanx25ParamSub = [
    {name:'parameters.size',type:'string',req:false,desc:'图片尺寸。支持：1024*1024、720*1280、1280*720、512*512，默认1024*1024'},
    {name:'parameters.n',type:'integer',req:false,desc:'生成图片数量，范围[1,4]，默认1'},
    {name:'parameters.seed',type:'integer',req:false,desc:'随机数种子，范围[0,2147483647]。不指定则自动生成'},
    {name:'parameters.style',type:'string',req:false,desc:'生成风格。可选值：auto（默认）、realistic、anime、oil_painting、watercolor、sketch、chinese_painting、flat_2d、3d_render'},
    {name:'parameters.response_format',type:'string',req:false,desc:'返回格式。可选值：url（默认）、b64_json'},
  ];
  const wanx25Curl = `curl --location '${imageEp}' \\
  -H "Authorization: Bearer <YOUR_API_KEY>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "wanx-v1",
    "input": {
      "prompt": "一只可爱的柴犬坐在草地上，阳光温暖，背景是蓝天白云"
    },
    "parameters": {
      "size": "1024*1024",
      "style": "auto",
      "n": 1
    }
  }'`;

  // 子类型8: 万相系列（编辑）
  const wanxEditReq = [
    {name:'model',type:'string',req:true,desc:''},
  ];
  const wanxEditInputSub = [
    {name:'input.prompt',type:'string',req:false,desc:'文本提示词。描述期望的编辑效果或新图像内容，支持中英文，最多500字符'},
    {name:'input.image',type:'string',req:true,desc:'参考图片URL或Base64编码。图片格式：JPEG、JPG、PNG、WEBP、BMP，大小不超过10MB。图像宽高范围为[240, 8000]像素'},
    {name:'input.negative_prompt',type:'string',req:false,desc:'反向提示词，描述不希望出现的内容，最多500字符'},
    {name:'input.mask_image',type:'string',req:false,desc:'蒙版图片URL或Base64编码。用于指定需要编辑的区域，白色区域为需要修改的部分，黑色区域保持不变。仅局部编辑时需要'},
  ];
  const wanxEditParamSub = [
    {name:'parameters.size',type:'string',req:false,desc:'输出图片尺寸。支持：1024*1024、720*1280、1280*720、960*960，默认1024*1024'},
    {name:'parameters.n',type:'integer',req:false,desc:'生成图片数量，范围[1,4]，默认1'},
    {name:'parameters.seed',type:'integer',req:false,desc:'随机数种子，范围[0,2147483647]。不指定则自动生成'},
    {name:'parameters.style',type:'string',req:false,desc:'生成风格。可选值：auto（默认）、realistic、anime、oil_painting、watercolor、sketch、chinese_painting、flat_2d、3d_render'},
    {name:'parameters.strength',type:'number',req:false,desc:'参考图强度，范围(0,1]，默认0.6。值越大越接近参考图，值越小创造性越高'},
    {name:'parameters.response_format',type:'string',req:false,desc:'返回格式。可选值：url（默认）、b64_json'},
  ];
  const wanxEditCurl = `curl --location '${imageEp}' \\
  -H "Authorization: Bearer <YOUR_API_KEY>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "qwen/wanx2.7-i2i",
    "input": {
      "prompt": "将图片风格改为油画风格，保持主体内容不变",
      "image": "https://example.com/reference.png"
    },
    "parameters": {
      "size": "1024*1024",
      "style": "oil_painting",
      "strength": 0.6,
      "n": 1
    }
  }'`;

  // 图片生成API区块
  function imageSubTypeContent(prefix,title,desc,reqData,resLabel,reqExample,resExample,isAsync){
    const inputSubHtml = reqData.inputSub.map(s=>imageSubParamRow(s.name,s.type,s.req,s.desc)).join('');
    const paramSubHtml = reqData.paramSub.map(s=>imageSubParamRow(s.name,s.type,s.req,s.desc)).join('');
    const reqTopHtml = reqData.top.map(p => {
      return `<div class="py-2.5" style="border-bottom:1px solid var(--border)">
        <div class="flex items-center gap-2 ${p.desc?'mb-1':''}">
          <code style="font-size:13px;font-weight:600">${p.name}</code>
          <span class="text-xs px-1.5 py-0.5 rounded" style="background:var(--muted);color:var(--muted-foreground)">${p.type}</span>
          ${p.req?'<span class="badge" style="font-size:10px;background:var(--destructive);color:#fff;padding:1px 5px;border-radius:4px">必填</span>':''}
        </div>
        ${p.desc?`<div class="text-xs" style="color:var(--muted-foreground);line-height:1.6">${p.desc}</div>`:''}
      </div>`;
    }).join('');
    const inputObj = imageObjParam('input','object',true,'输入对象',inputSubHtml);
    const paramObj = imageObjParam('parameters','object',false,'生成参数',paramSubHtml);
    const headersHtml = isAsync ? imageHeadersAsync() : imageHeaders();
    const resHtml = isAsync ? imageAsyncResHtml() : imageSyncResHtml();
    return `<div class="mb-2">
      <div class="text-sm font-semibold mb-1">${title}</div>
      <div class="text-xs mb-2" style="color:var(--muted-foreground);line-height:1.6">${desc}</div>
      ${imageEndpoint()}
      ${headersHtml}
      <div class="flex gap-3" style="align-items:flex-start">
        <div style="flex:1;min-width:0">
          <div class="flex gap-1 mb-2" style="border-bottom:2px solid var(--border)">
            <button class="body-tab text-xs font-semibold pb-1.5 px-2" style="color:var(--primary);border-bottom:2px solid var(--primary);margin-bottom:-2px" onclick="switchBodyTab(this,'${prefix}-req')">请求体</button>
            <button class="body-tab text-xs font-semibold pb-1.5 px-2" style="color:var(--muted-foreground)" onclick="switchBodyTab(this,'${prefix}-res')">响应体</button>
          </div>
          <div id="${prefix}-req" class="body-panel">${reqTopHtml}${inputObj}${paramObj}</div>
          <div id="${prefix}-res" class="body-panel" style="display:none">${resHtml}</div>
        </div>
        <div style="width:42%;flex-shrink:0">
          <div class="text-xs font-semibold mb-1">请求示例</div>
          ${codeBlk(reqExample)}
          <div class="flex items-center gap-2 mb-1 mt-2">
            <span class="text-xs font-semibold">响应示例</span>
            <span class="text-xs" style="color:var(--muted-foreground)">${resLabel}</span>
          </div>
          ${codeBlk(resExample)}
        </div>
      </div>
    </div>`;
  }

  const imageSubTypes = [
    {key:'qwen-sync',label:'千问系列（同步）'},
    {key:'qwen-edit',label:'千问系列（编辑）'},
    {key:'qwen-async',label:'千问系列（异步）'},
    {key:'wanx26-sync',label:'万相系列2.6（同步）'},
    {key:'wanx27-sync',label:'万相系列2.7（同步）'},
    {key:'wanx26-async',label:'万相系列2.6（异步）'},
    {key:'wanx25',label:'万相系列2.5（及以下）'},
    {key:'wanx-edit',label:'万相系列（编辑）'},
  ];
  const imageDesc = '图片生成接口，支持文生图、图生图、图像编辑等多种能力。同步方式直接返回图片结果，异步方式需先创建任务获取 task_id，再通过任务查询接口获取结果。';
  const qwenSyncData = {top:qwenSyncReq,inputSub:qwenSyncInputSub,paramSub:qwenSyncParamSub};
  const qwenEditData = {top:qwenEditReq,inputSub:qwenEditInputSub,paramSub:qwenEditParamSub};
  const qwenAsyncData = {top:qwenAsyncReq,inputSub:qwenAsyncInputSub,paramSub:qwenAsyncParamSub};
  const wanx26SyncData = {top:wanx26SyncReq,inputSub:wanx26SyncInputSub,paramSub:wanx26SyncParamSub};
  const wanx27SyncData = {top:wanx27SyncReq,inputSub:wanx27SyncInputSub,paramSub:wanx27SyncParamSub};
  const wanx26AsyncData = {top:wanx26AsyncReq,inputSub:wanx26AsyncInputSub,paramSub:wanx26AsyncParamSub};
  const wanx25Data = {top:wanx25Req,inputSub:wanx25InputSub,paramSub:wanx25ParamSub};
  const wanxEditData = {top:wanxEditReq,inputSub:wanxEditInputSub,paramSub:wanxEditParamSub};

  function imageApiSection(){
    const tabs = imageSubTypes.map((s,i)=>`
      <button class="api-tab btn btn-sm" style="${i===0?'background:var(--card);color:var(--foreground)':'background:transparent;color:var(--muted-foreground)'};font-size:12px;white-space:nowrap" onclick="switchImageSubType(this,'image-${s.key}')">${s.label}</button>
    `).join('');
    const contents = imageSubTypes.map((s,i)=>{
      let reqData, resLabel, curl, isAsync, title;
      switch(s.key){
        case 'qwen-sync':
          reqData=qwenSyncData; resLabel='同步调用'; curl=qwenSyncCurl; isAsync=false;
          title='千问系列（同步）'; break;
        case 'qwen-edit':
          reqData=qwenEditData; resLabel='同步调用'; curl=qwenEditCurl; isAsync=false;
          title='千问系列（编辑）'; break;
        case 'qwen-async':
          reqData=qwenAsyncData; resLabel='异步调用'; curl=qwenAsyncCurl; isAsync=true;
          title='千问系列（异步）'; break;
        case 'wanx26-sync':
          reqData=wanx26SyncData; resLabel='同步调用'; curl=wanx26SyncCurl; isAsync=false;
          title='万相系列2.6（同步）'; break;
        case 'wanx27-sync':
          reqData=wanx27SyncData; resLabel='同步调用'; curl=wanx27SyncCurl; isAsync=false;
          title='万相系列2.7（同步）'; break;
        case 'wanx26-async':
          reqData=wanx26AsyncData; resLabel='异步调用'; curl=wanx26AsyncCurl; isAsync=true;
          title='万相系列2.6（异步）'; break;
        case 'wanx25':
          reqData=wanx25Data; resLabel='同步调用'; curl=wanx25Curl; isAsync=false;
          title='万相系列2.5（及以下）'; break;
        case 'wanx-edit':
          reqData=wanxEditData; resLabel='同步调用'; curl=wanxEditCurl; isAsync=false;
          title='万相系列（编辑）'; break;
      }
      const resp = isAsync ? imageAsyncResp : imageSyncResp;
      return `<div id="image-${s.key}" style="${i===0?'':'display:none'}">${imageSubTypeContent(`image-${s.key}`,title,imageDesc,reqData,resLabel,curl,resp,isAsync)}</div>`;
    }).join('');
    return `<div class="text-xs font-semibold mb-2" style="color:var(--muted-foreground)">接口调用</div>
      <div class="flex gap-1 mb-3 p-1 rounded-lg overflow-x-auto" style="background:var(--muted);flex-wrap:nowrap">
        ${tabs}
      </div>
      ${contents}`;
  }

  const isVideo = m.type === '视频生成';
  const isImage = m.type === '图片生成';
  const apiSection = isVideo ? videoApiSection() : (isImage ? imageApiSection() : `
      <div class="text-xs font-semibold mb-2" style="color:var(--muted-foreground)">接口调用</div>
      <div class="flex gap-1 mb-3 p-1 rounded-lg" style="background:var(--muted)">
        <button class="api-tab btn btn-sm flex-1" style="background:var(--card);color:var(--foreground);font-size:12px" onclick="switchApiTab(this,'api-chat')">OpenAI 兼容-Chat</button>
        <button class="api-tab btn btn-sm flex-1" style="background:transparent;color:var(--muted-foreground);font-size:12px" onclick="switchApiTab(this,'api-responses')">OpenAI 兼容-Responses</button>
        <button class="api-tab btn btn-sm flex-1" style="background:transparent;color:var(--muted-foreground);font-size:12px" onclick="switchApiTab(this,'api-anthropic')">Anthropic 兼容-Messages</button>
      </div>
      <div id="api-chat">${apiTabContent('chat','通过兼容 OpenAI 格式的 Chat API 调用模型，该调用方式下无法统计工具调用、如需进行准确工具调用计费，请使用 Response 协议接入。<br><br><strong>提示：</strong>如需要先获取您的 API-KEY（从API Keys中复制）以及对应模型名称（从模型广场中查看）。',chatEp,chatReq,chatRes,chatEx)}</div>
      <div id="api-responses" style="display:none">${apiTabContent('resp','通过兼容 OpenAI 格式的 Responses API 调用文本模型，仅在该协议下，支持统计工具、显示缓存等功能的用量。<br><br><strong>相较于 OpenAI Chat Completions API 的优势：</strong><br>• <strong>内置工具：</strong>内置联网搜索、网页抓取、代码解释器、文搜图、图搜图、知识库搜索等工具，可在处理复杂任务时获得更优效果，具体见百炼工具调用方式。<br>• <strong>更灵活的输入：</strong>支持直接传入字符串作为模型输入，也兼容 Chat 格式的消息数组。<br>• <strong>简化上下文管理：</strong>通过传递上一轮响应的 previous_response_id，无需手动构建完整的消息历史数组。<br>• <strong>便捷的上下文缓存：</strong>只需在请求头中添加 x-dashscope-session-cache: enable，服务端即可自动缓存对话上下文，无需改动业务代码即可降低多轮对话的推理延迟与成本。<br><br><strong>提示：</strong>如需要先获取您的 API-KEY（从API Keys中复制）以及对应模型名称（从模型广场中查看）。',respEp,respReq,respRes,respEx)}</div>
      <div id="api-anthropic" style="display:none">${apiTabContent('anth','通过兼容 Anthropic 格式的 Messages API 调用模型。使用该协议前请确保原模型支持 Authropic 协议。该调用方式下无法统计工具调用、如需进行准确工具调用计费，请使用 Open AI 兼容 Response 协议接入。<br><br><strong>提示：</strong>如需要先获取您的 API-KEY（从API Keys中复制）以及对应模型名称（从模型广场中查看）。',anthEp,anthReq,anthRes,anthEx)}</div>`);

  return `
    <div class="mb-4 flex items-center gap-2">
      <button class="btn btn-ghost btn-sm" onclick="go('${marketDetailBack}')" style="padding:4px 10px">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18v14"/></svg>
        返回
      </button>
    </div>
    <div class="flex items-center gap-3 mb-4">
      <div style="width:48px;height:48px;border-radius:12px;background:${m.vendorColor};color:#fff;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:700">${m.vendorSymbol}</div>
      <div>
        <div class="flex items-center gap-2">
          <span class="text-lg font-semibold">${m.name}</span>
          <span class="badge b-neutral" style="font-size:10px">${m.type}</span>
        </div>
        <div class="text-sm" style="color:var(--muted-foreground)">${m.vendor} · ${m.version}</div>
      </div>
    </div>
    <div class="mb-4">
      <div class="text-xs font-semibold mb-2" style="color:var(--muted-foreground)">模型描述</div>
      <p class="text-sm" style="line-height:1.7">${m.desc}</p>
    </div>
    ${m.tags.length>0?`<div class="mb-4">
      <div class="text-xs font-semibold mb-2" style="color:var(--muted-foreground)">模型标签</div>
      <div class="flex gap-1 flex-wrap">${m.tags.map(tg=>`<span class="badge ${tg.c}" style="font-size:11px">${tg.t}</span>`).join('')}</div>
    </div>`:''}
    <div class="mb-4">
      <div class="text-xs font-semibold mb-2" style="color:var(--muted-foreground)">计费价格</div>
      <div class="p-4 rounded-xl" style="background:linear-gradient(135deg,rgba(99,102,241,0.1),rgba(59,130,246,0.08));border:1px solid rgba(99,102,241,0.15)">
        ${m.price.input===0&&m.price.output===0?`
          <div class="flex items-center justify-center py-2">
            <span class="badge b-success" style="font-size:16px;padding:6px 20px">免费模型</span>
          </div>
        `:
          m.price.perImage!==undefined?`
            <div class="flex items-center justify-between">
              <span class="text-sm" style="color:var(--muted-foreground)">单张图片</span>
              <span class="font-bold" style="color:var(--primary);font-size:22px">¥${m.price.perImage} <span class="text-sm font-normal" style="color:var(--muted-foreground)">/ ${m.price.unit}</span></span>
            </div>
          `:
          m.price.perChar!==undefined?`
            <div class="flex items-center justify-between">
              <span class="text-sm" style="color:var(--muted-foreground)">每千字</span>
              <span class="font-bold" style="color:var(--primary);font-size:22px">¥${m.price.perChar} <span class="text-sm font-normal" style="color:var(--muted-foreground)">/ ${m.price.unit}</span></span>
            </div>
          `:
          m.price.perSecond!==undefined?`
            <div class="flex items-center justify-between">
              <div>
                <span class="text-sm" style="color:var(--muted-foreground)">每秒视频</span>
                ${m.price.resolution?`<div class="text-xs mt-0.5" style="color:var(--muted-foreground);opacity:0.7">分辨率：${m.price.resolution}</div>`:''}
              </div>
              <span class="font-bold" style="color:var(--primary);font-size:22px">¥${m.price.perSecond} <span class="text-sm font-normal" style="color:var(--muted-foreground)">/ ${m.price.unit}</span></span>
            </div>
          `:`
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-sm" style="color:var(--muted-foreground)">输入价格</span>
                <span class="font-semibold" style="color:var(--foreground);font-size:18px">¥${m.price.input.toFixed(4)} <span class="text-xs font-normal" style="color:var(--muted-foreground)">/ ${m.price.unit}</span></span>
              </div>
              <div style="height:1px;background:var(--border);opacity:0.5"></div>
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-sm" style="color:var(--muted-foreground)">输出价格</span>
                  ${m.price.note?`<div class="text-xs mt-0.5" style="color:var(--primary);opacity:0.8">${m.price.note}</div>`:''}
                </div>
                ${m.price.output>0?`
                <span class="font-semibold" style="color:var(--foreground);font-size:18px">¥${m.price.output.toFixed(4)} <span class="text-xs font-normal" style="color:var(--muted-foreground)">/ ${m.price.unit}</span></span>
                `:`
                <span class="text-xs" style="color:var(--muted-foreground)">不计费</span>
                `}
              </div>
            </div>
          `}
      </div>
      ${m.price.tiered?`
        <div class="mt-2 p-3 rounded-lg" style="background:var(--muted)">
          <div class="text-xs font-medium mb-2" style="color:var(--muted-foreground)">阶梯计费说明</div>
          <div class="text-xs" style="color:var(--muted-foreground);line-height:1.6">
            单价取决于单次请求的输入 Token 总量，该请求的所有 Token 均按对应阶梯的单价结算。
          </div>
        </div>
      `:''}
    </div>
    <div class="grid grid-cols-4 gap-2 mb-4">
      <div class="p-3 rounded-lg" style="background:var(--muted)">
        <div class="text-xs" style="color:var(--muted-foreground)">最大输入长度</div>
        <div class="text-sm font-medium mt-0.5">${m.maxInput}</div>
      </div>
      <div class="p-3 rounded-lg" style="background:var(--muted)">
        <div class="text-xs" style="color:var(--muted-foreground)">最大输出长度</div>
        <div class="text-sm font-medium mt-0.5">${m.maxOutput}</div>
      </div>
      <div class="p-3 rounded-lg" style="background:var(--muted)">
        <div class="text-xs" style="color:var(--muted-foreground)">版本</div>
        <div class="text-sm font-medium mt-0.5">${m.version}</div>
      </div>
      <div class="p-3 rounded-lg" style="background:var(--muted)">
        <div class="text-xs" style="color:var(--muted-foreground)">模型类型</div>
        <div class="text-sm font-medium mt-0.5">${m.type}</div>
      </div>
    </div>
    <div class="mb-2">
      ${apiSection}
    </div>
  `;
}

function switchApiTab(btn,tabId){
  const parent=btn.parentElement;
  parent.querySelectorAll('.api-tab').forEach(b=>{b.style.background='transparent';b.style.color='var(--muted-foreground)';});
  btn.style.background='var(--card)';btn.style.color='var(--foreground)';
  ['api-chat','api-responses','api-anthropic'].forEach(t=>{const el=document.getElementById(t);if(el)el.style.display=t===tabId?'block':'none';});
}

function switchVideoSubType(btn,tabId){
  const parent=btn.parentElement;
  parent.querySelectorAll('.api-tab').forEach(b=>{b.style.background='transparent';b.style.color='var(--muted-foreground)';});
  btn.style.background='var(--card)';btn.style.color='var(--foreground)';
  ['video-t2v','video-hh','video-i2v','video-wx27t2v','video-wx27i2v','video-wx27ref','video-wx27edit'].forEach(t=>{
    const el=document.getElementById(t);
    if(el) el.style.display=t===tabId?'block':'none';
  });
}

function switchImageSubType(btn,tabId){
  const parent=btn.parentElement;
  parent.querySelectorAll('.api-tab').forEach(b=>{b.style.background='transparent';b.style.color='var(--muted-foreground)';});
  btn.style.background='var(--card)';btn.style.color='var(--foreground)';
  ['image-qwen-sync','image-qwen-edit','image-qwen-async','image-wanx26-sync','image-wanx27-sync','image-wanx26-async','image-wanx25','image-wanx-edit'].forEach(t=>{
    const el=document.getElementById(t);
    if(el) el.style.display=t===tabId?'block':'none';
  });
}

function switchBodyTab(btn,targetId){
  const parent=btn.parentElement;
  const tabs=parent.querySelectorAll('.body-tab');
  tabs.forEach(b=>{b.style.color='var(--muted-foreground)';b.style.borderBottom='';});
  btn.style.color='var(--primary)';btn.style.borderBottom='2px solid var(--primary)';
  const target=document.getElementById(targetId);
  if(!target) return;
  const group=target.parentElement;
  group.querySelectorAll('.body-panel').forEach(d=>d.style.display='none');
  target.style.display='block';
}

function switchExampleMode(select,prefix){
  const mode=select.value;
  const label={text:'文本输入',stream:'流式输出',multimodal:'多模态输入',full:'全模态'}[mode];
  ['text','stream','multimodal','full'].forEach(m=>{
    const reqEl=document.getElementById(`${prefix}-ex-req-${m}`);
    const resEl=document.getElementById(`${prefix}-ex-res-${m}`);
    if(reqEl) reqEl.style.display=m===mode?'block':'none';
    if(resEl) resEl.style.display=m===mode?'block':'none';
  });
  const labelEl=document.getElementById(`${prefix}-res-mode-label`);
  if(labelEl) labelEl.textContent=label;
}

function copyModelId(modelId){
  navigator.clipboard.writeText(modelId).then(()=>{
    showToast('复制成功','模型标识已复制到剪贴板');
  }).catch(()=>{
    const ta = document.createElement('textarea');
    ta.value = modelId;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('复制成功','模型标识已复制到剪贴板');
  });
}

function switchLang(btn,id){
  const parent=btn.parentElement;
  parent.querySelectorAll('.lang-btn').forEach(b=>{b.classList.remove('active');b.style.background='transparent';b.style.color='var(--muted-foreground)';});
  btn.classList.add('active');btn.style.background='var(--card)';btn.style.color='var(--foreground)';
  const prefix=id.split('-').slice(0,2).join('-');
  const idx=id.split('-').pop();
  ['curl','py','js'].forEach(l=>{const el=document.getElementById(`lang-${l}-${idx}`);if(el)el.style.display=`lang-${l}-${idx}`===id?'block':'none';});
}

// 用户已启用的模型状态
const USER_ENABLED_MODELS = {
  1: true, 2: true, 3: false, 4: true, 5: false, 6: true, 7: true, 8: false, 9: false, 10: false, 11: true, 12: false,
};

function toggleUserModel(modelId){
  USER_ENABLED_MODELS[modelId] = !USER_ENABLED_MODELS[modelId];
  showToast('操作成功', USER_ENABLED_MODELS[modelId] ? '模型已启用，可在 API 调用中使用' : '模型已停用');
  // 重新渲染
  const old = document.getElementById('user-market-container');
  if(old) old.innerHTML = userModelMarketInner();
}

function userModelMarketInner(){
  return marketPageHTML(true);
}

function userModelMarket(){
  return `<div id="user-market-container">${userModelMarketInner()}</div>`;
}

// ===== 代理（补充添加/查看/编辑逻辑 + 企业开账号） =====
function agentStatus(a){
  if(a.activeUsers===a.users && a.users>0) return {l:'全部在用',c:'b-success'};
  if(a.activeUsers===0) return {l:'未在用',c:'b-neutral'};
  return {l:'部分在用',c:'b-warning'};
}
function tblAgents(){
  return `<div class="grid grid-cols-3 gap-3 mb-4">
    ${statCard('handshake','chart-1','代理总数',AGENTS.length)}
    ${statCard('users','chart-2','名下用户总数',AGENTS.reduce((s,a)=>s+a.users,0))}
    ${statCard('coins','chart-3','代理用户总消费','¥'+(AGENTS.reduce((s,a)=>s+a.used,0)/QUOTA_PER_UNIT).toFixed(2))}
  </div>
  <div class="info-banner mb-3">
    <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color:var(--primary)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    <span>「活跃状态」表示该代理名下用户对模型的使用情况：<strong>全部在用</strong> = 所有用户均调用过模型；<strong>部分在用</strong> = 仅部分用户调用过；<strong>未在用</strong> = 名下用户均未调用。</span>
  </div>
  <div class="card overflow-hidden">
    <div class="flex items-center justify-between p-3" style="border-bottom:1px solid var(--border)">
      <div class="flex items-center gap-2">
        <input class="input" style="width:200px" placeholder="搜索代理名称或公司...">
        <select class="input" style="width:120px"><option>全部状态</option><option>全部在用</option><option>部分在用</option><option>未在用</option></select>
      </div>
      <button class="btn btn-primary btn-sm ml-auto" onclick="showAgentForm()">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
        添加代理
      </button>
      <button class="btn btn-outline btn-sm" onclick="showExportConfirm('agent-list', ${AGENTS.length})">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
        导出
      </button>
    </div>
    <table data-export-type="agent-list"><thead><tr><th style="width:40px">${getExportAllCheckbox('agent-list', AGENTS.map(a=>a.id))}</th><th>用户名</th><th>公司</th><th>联系人</th><th>名下用户</th><th>活跃状态</th><th>用户总消费(¥)</th><th>消费差额(¥)</th><th>创建时间</th><th>操作</th></tr></thead>
    <tbody>${AGENTS.map(a=>{
      const st=agentStatus(a);
      const diff = (a.cost - a.used) / QUOTA_PER_UNIT;
      const diffColor = diff >= 0 ? 'var(--success)' : 'var(--destructive)';
      return `<tr>
        <td>${getExportCheckbox('agent-list', a.id)}</td>
        <td class="font-medium">${a.name}</td>
        <td style="color:var(--muted-foreground)">${a.company}</td>
        <td>${a.contact}<br><span class="text-[11px]" style="color:var(--muted-foreground)">${encField('phone', a.phone)}</span></td>
        <td>${a.users} <span class="text-[11px]" style="color:var(--muted-foreground)">(${a.activeUsers}在用)</span></td>
        <td><span class="badge ${st.c}">${st.l}</span></td>
        <td>¥${(a.used/QUOTA_PER_UNIT).toFixed(2)}</td>
        <td style="color:${diffColor};font-weight:500">${diff<0?'-':''}¥${Math.abs(diff).toFixed(2)}</td>
        <td style="color:var(--muted-foreground)">${a.createdAt}</td>
        <td>
          <div class="flex items-center gap-1">
            <button class="btn btn-ghost btn-sm" onclick="showAgentDetail(${a.id})">查看</button>
            <button class="btn btn-ghost btn-sm" onclick="showAgentForm(${a.id})">编辑</button>
            <button class="btn btn-ghost btn-sm" onclick="resetAgentPwd(${a.id})" title="重置密码">重置密码</button>
            <button class="btn btn-ghost btn-sm" style="color:var(--destructive)" onclick="deleteAgent(${a.id})">删除</button>
          </div>
        </td>
      </tr>`;
    }).join('')}</tbody></table>
  </div>`;
}

function toggleAgent(id,enabled){
  const a=AGENTS.find(x=>x.id===id); if(!a)return;
  a.status=enabled?1:0;
  showToast('账号状态变更', `代理 ${a.name} 已${enabled?'启用':'禁用'}`);
}

function deleteAgent(id){
  const a=AGENTS.find(x=>x.id===id); if(!a)return;
  showModal(`<div class="p-5">
    <h3 class="text-base font-semibold mb-3">确认删除</h3>
    <p class="text-sm mb-4" style="color:var(--muted-foreground)">确定要删除代理 <strong style="color:var(--foreground)">${a.name}</strong>（${a.company}）吗？此操作不可恢复。</p>
    <div class="flex justify-end gap-2">
      <button class="btn btn-primary btn-sm" onclick="closeModal()">取消</button>
      <button class="btn btn-danger" onclick="confirmDeleteAgent(${a.id})">确认删除</button>
    </div>
  </div>`);
}
function confirmDeleteAgent(id){
  const idx=AGENTS.findIndex(x=>x.id===id);
  if(idx>-1){
    const name=AGENTS[idx].name;
    AGENTS.splice(idx,1);
    closeModal();
    renderPage();
    showToast('删除成功', `代理 ${name} 已删除`);
  }
}
function resetAgentPwd(id){
  const a=AGENTS.find(x=>x.id===id); if(!a)return;
  showModal(`<div class="p-5">
    <h3 class="text-base font-semibold mb-3">重置密码</h3>
    <p class="text-sm mb-3" style="color:var(--muted-foreground)">将为代理 <strong style="color:var(--foreground)">${a.name}</strong>（${a.company}）重置登录密码。</p>
    <div class="p-3 rounded-lg mb-3" style="background:var(--accent)">
      <div class="text-xs font-medium mb-1">新密码</div>
      <div class="flex items-center gap-2">
        <code class="text-sm font-mono px-2 py-1 rounded" style="background:var(--background)">Sk${Math.random().toString(36).substring(2,10)}!</code>
        <button class="btn btn-outline btn-sm" onclick="copyTxt('Sk'+Math.random().toString(36).substring(2,10)+'!')">复制</button>
      </div>
      <div class="text-[11px] mt-1.5" style="color:var(--muted-foreground)">重置后请将新密码告知代理，旧密码将立即失效。</div>
    </div>
    <div class="flex justify-end gap-2">
      <button class="btn btn-primary btn-sm" onclick="closeModal()">取消</button>
      <button class="btn btn-primary btn-sm" onclick="closeModal();showToast('密码已重置','代理 ${a.name} 的密码已重置，请通知其使用新密码登录')">确认重置</button>
    </div>
  </div>`);
}

function showAgentForm(id){
  const a = id ? AGENTS.find(x=>x.id===id) : null;
  const aTitle = a ? '编辑代理' : '添加代理 — 为企业开通账号';
  const aBtn = a ? '保存' : '创建代理并开通账号';
  const aMsg = a ? '代理信息已更新' : '代理已创建，账号已开通';
  showModal(`<div style="max-width:680px">
    <div class="relative flex items-center justify-center p-4" style="border-bottom:1px solid var(--border)">
      <h3 class="text-base font-semibold">${aTitle}</h3>
      <button class="icon-btn" style="position:absolute;right:14px" onclick="closeModal()"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>
    <div class="p-5">
    <p class="text-xs mb-4" style="color:var(--muted-foreground)">${a?'编辑代理的基本信息和配置':'为新合作企业开通系统账号，代理可登录查看名下用户数据'}</p>
    <div class="space-y-3">
      <div class="grid grid-cols-2 gap-3">
        <div><label class="text-xs font-medium block mb-1">用户名 <span style="color:var(--destructive)">*</span></label><input class="input w-full" value="${a?a.name:''}" placeholder="partner_xxx" style="font-family:monospace"></div>
        <div><label class="text-xs font-medium block mb-1">密码 ${a?'':'<span style="color:var(--destructive)">*</span>'}</label><input class="input w-full" type="password" placeholder="${a?'留空不修改':'设置初始密码'}"></div>
      </div>
      <div><label class="text-xs font-medium block mb-1">公司名称 <span style="color:var(--destructive)">*</span></label><input class="input w-full" value="${a?a.company:''}" placeholder="企业全称"></div>
      <div class="grid grid-cols-2 gap-3">
        <div><label class="text-xs font-medium block mb-1">联系人</label><input class="input w-full" value="${a?a.contact:''}" placeholder="联系人姓名"></div>
        <div><label class="text-xs font-medium block mb-1">联系电话</label><input class="input w-full" value="${a?a.phone:''}" placeholder="联系电话"></div>
      </div>
      <div><label class="text-xs font-medium block mb-1">邮箱 <span style="color:var(--destructive)">*</span></label><input class="input w-full" value="${a?a.email:''}" placeholder="contact@example.com" style="font-family:monospace"></div>
    </div>
    <div class="flex justify-end gap-2 mt-4">
      <button class="btn btn-primary btn-sm" onclick="closeModal()">取消</button>
      <button class="btn btn-primary btn-sm" onclick="closeModal();showToast('${aTitle}','${aMsg}')">${aBtn}</button>
    </div>
    </div>
  </div>`);
}

function showAgentDetail(id){
  const a = AGENTS.find(x=>x.id===id); if(!a) return;
  const st = agentStatus(a);
  const agentUsers = [
    {name:'zhangsan',status:'active',used:880000,balance:240000},
    {name:'wangwu',status:'active',used:320000,balance:560000},
  ];
  if(a.id===7) agentUsers.length=0, agentUsers.push({name:'qianqi',status:'inactive',used:0,balance:1000000});
  if(a.id===8){
    agentUsers.length=0;
    agentUsers.push(
      {name:'user_a',status:'active',used:280000,balance:720000},
      {name:'user_b',status:'active',used:180000,balance:820000},
      {name:'user_c',status:'inactive',used:120000,balance:880000}
    );
  }
  showModal(`<div class="p-5" style="max-width:680px">
    <div class="flex items-center justify-between mb-4">
      <div>
        <h3 class="text-base font-semibold">${a.company}</h3>
        <div class="text-xs mt-0.5" style="color:var(--muted-foreground)">${a.name} · 创建于 ${a.createdAt}</div>
      </div>
      <div class="flex items-center gap-2">
        <span class="badge ${st.c}">${st.l}</span>
        <span class="badge ${a.status===1?'b-success':'b-neutral'}">${a.status===1?'启用':'禁用'}</span>
      </div>
    </div>
    <div class="tab-bar" style="margin-bottom:12px">
      <button class="tab active" onclick="switchDetailTab(this,'dt-info-${id}')">基本信息</button>
      <button class="tab" onclick="switchDetailTab(this,'dt-users-${id}')">名下用户 (${a.users})</button>
    </div>
    <div id="dt-info-${id}">
      <div class="space-y-2 p-3 rounded-lg text-xs" style="background:var(--muted)">
        <div class="flex justify-between"><span style="color:var(--muted-foreground)">用户名</span><span class="font-medium" style="font-family:monospace">${a.name}</span></div>
        <div class="flex justify-between"><span style="color:var(--muted-foreground)">公司</span><span class="font-medium">${a.company}</span></div>
        <div class="flex justify-between"><span style="color:var(--muted-foreground)">联系人</span><span>${a.contact} · ${encField('phone', a.phone)}</span></div>
        <div class="flex justify-between"><span style="color:var(--muted-foreground)">邮箱</span><span style="font-family:monospace">${encField('email', a.email)}</span></div>
        <div class="flex justify-between"><span style="color:var(--muted-foreground)">系统角色</span><span>代理 (role=5)</span></div>
        <div class="flex justify-between"><span style="color:var(--muted-foreground)">名下用户</span><span>${a.users} 人 (${a.activeUsers} 在用)</span></div>
        <div class="flex justify-between"><span style="color:var(--muted-foreground)">创建时间</span><span>${a.createdAt}</span></div>
      </div>
    </div>
    <div id="dt-users-${id}" style="display:none">
      <table><thead><tr><th>用户名称</th><th>状态</th><th>余额(¥)</th><th>已用(¥)</th></tr></thead>
        <tbody>${agentUsers.map(u=>`<tr>
          <td class="font-medium">${u.name}</td>
          <td><span class="badge ${u.status==='active'?'b-success':'b-neutral'}">${u.status==='active'?'在用':'未在用'}</span></td>
          <td class="font-mono">${(u.balance/QUOTA_PER_UNIT).toFixed(2)}</td>
          <td class="font-mono">${(u.used/QUOTA_PER_UNIT).toFixed(2)}</td>
        </tr>`).join('')}</tbody></table>
      ${a.users===0?'<div class="text-center py-6 text-xs" style="color:var(--muted-foreground)">暂无名下用户</div>':''}
    </div>
    <div class="flex justify-end mt-4">
      <button class="btn btn-primary btn-sm" onclick="closeModal()">关闭</button>
    </div>
  </div>`);
}

function switchDetailTab(btn,tabId){
  btn.closest('.tab-bar').querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  const modal=btn.closest('.modal-box');
  modal.querySelectorAll('[id^="dt-"]').forEach(el=>el.style.display='none');
  document.getElementById(tabId).style.display='block';
}

// ===== 折扣定价（新增/编辑/删除/查看 + 列设置 + 搜索） =====
var discVisibleCols = {};
MODELS.forEach(function(m){discVisibleCols[m]=true;});

function discMatrix(){
  return `<div class="card p-4">
    <div class="flex items-center justify-between mb-3">
      <div class="flex items-center gap-2">
        <select class="input" style="width:140px"><option>全部代理</option><option>partner_lisi</option><option>partner_wang</option></select>
        <input class="input" id="disc-search" style="width:160px" placeholder="搜索用户..." oninput="filterDiscTable()">
        <button class="btn btn-outline btn-sm" onclick="showDiscForm()">新增折扣规则</button>
      </div>
      <div class="flex items-center gap-2">
        <div class="relative">
          <button class="btn btn-outline btn-sm" onclick="toggleDiscColSettings()">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/></svg>
            列设置
            <span class="badge b-secondary" style="font-size:10px;margin-left:2px" id="disc-col-count">${MODELS.filter(m=>discVisibleCols[m]).length}/${MODELS.length}</span>
          </button>
          <div id="disc-col-settings" class="card p-3" style="display:none;position:absolute;right:0;top:100%;z-index:20;min-width:260px;box-shadow:0 4px 12px rgba(0,0,0,.1)">
            <div class="text-xs font-medium mb-2" style="color:var(--muted-foreground)">显示/隐藏模型列</div>
            <div class="relative mb-2">
              <svg class="w-3.5 h-3.5 absolute left-2 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color:var(--muted-foreground)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <input class="input" id="disc-col-search" style="width:100%;padding-left:28px;font-size:12px;height:30px" placeholder="搜索模型名称..." oninput="filterDiscCols()">
            </div>
            <div id="disc-col-list" style="max-height:240px;overflow-y:auto">
              ${MODELS.map(m=>`<label class="flex items-center gap-2 py-1.5 px-1 cursor-pointer rounded disc-col-item" data-model="${MODEL_SHORT[m].toLowerCase()} ${m.toLowerCase()}">
                <input type="checkbox" ${discVisibleCols[m]?'checked':''} onchange="toggleDiscCol('${m}',this.checked)">
                <div class="flex-1">
                  <div class="text-xs">${MODEL_SHORT[m]}</div>
                  <div class="text-[10px]" style="color:var(--muted-foreground)">${m}</div>
                </div>
                <span class="text-[10px] badge b-neutral" style="font-size:9px">ratio=${MODEL_RATIO[m]}</span>
              </label>`).join('')}
            </div>
            <div class="flex gap-2 mt-2 pt-2" style="border-top:1px solid var(--border)">
              <button class="btn btn-ghost btn-sm" style="font-size:11px" onclick="setAllDiscCols(true)">全选</button>
              <button class="btn btn-ghost btn-sm" style="font-size:11px" onclick="setAllDiscCols(false)">取消全选</button>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-1.5 text-xs" style="color:var(--muted-foreground)">
          <span class="badge b-neutral">1.00 = 原价</span>
          <span class="badge b-primary">0.85 = 8.5折</span>
        </div>
      </div>
    </div>
    <div class="info-banner mb-3">
      <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color:var(--primary)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      <span>每行代表一个用户，每列代表一个模型，单元格内是该用户使用该模型的折扣值。点击单元格可修改，空白"—"表示无折扣（按原价计费）。</span>
    </div>
    <div class="overflow-x-auto rounded-lg" style="border:1px solid var(--border)">
      <table id="disc-table"><thead><tr>
        <th style="position:sticky;left:0;background:var(--card);z-index:10;min-width:160px">用户</th>
        ${MODELS.map(m=>`<th class="text-center disc-col-${m}" style="min-width:110px;display:${discVisibleCols[m]?'':'none'}"><span class="text-[11px]">${MODEL_SHORT[m]}</span><br><span class="text-[10px]" style="color:var(--muted-foreground)">ratio=${MODEL_RATIO[m]}</span></th>`).join('')}
        <th class="text-center">操作</th>
      </tr></thead>
      <tbody>${DISC_DATA.map((u,i)=>`<tr class="disc-row" data-user="${u.user}">
        <td style="position:sticky;left:0;background:var(--card);z-index:10">
          <div class="flex flex-col gap-0.5">
            <span class="font-medium">${u.user}</span>
            <span class="badge b-secondary" style="width:fit-content">${u.agent}</span>
          </div>
        </td>
        ${MODELS.map(m=>{
          const d=u.disc[m]; const set=d!==null&&d!==undefined&&d!==1.00;
          return `<td class="text-center disc-col-${m}" style="font-variant-numeric:tabular-nums;display:${discVisibleCols[m]?'':'none'}">
            <button class="disc-cell ${set?'set':''}" onclick="editDisc(${i},'${m}',${d??'null'})" title="点击修改折扣">
              ${d!==null&&d!==undefined?(set?`<span style="color:var(--primary);font-weight:500">${d.toFixed(2)}</span>`:`<span style="color:var(--muted-foreground)">${d.toFixed(2)}</span>`):'<span style="color:var(--muted-foreground)">—</span>'}
            </button>
          </td>`;
        }).join('')}
        <td class="text-center">
          <button class="btn btn-ghost btn-sm" onclick="showDiscDetail(${u.id})" title="查看">查看</button>
          <button class="btn btn-ghost btn-sm" onclick="showDiscForm(${u.id})" title="编辑">编辑</button>
          <button class="btn btn-ghost btn-sm" onclick="deleteDisc(${u.id})" title="删除" style="color:var(--destructive)">删除</button>
        </td>
      </tr>`).join('')}</tbody></table>
    </div>
    <div class="mt-3 p-2.5 rounded-lg text-xs" style="background:var(--muted);color:var(--muted-foreground)">
      <strong>计费公式：</strong>最终扣费 = ModelRatio × group_ratio × 用户折扣 × 用量。<br>
      <strong>列说明：</strong>每列对应一个通义千问模型的折扣值。例如 0.85 表示该用户使用此模型享 8.5 折优惠。可通过"列设置"控制模型列的显示/隐藏。
    </div>
  </div>`;
}

// ===== 代理端 - 折扣定价（运营端减法：去掉"全部代理"筛选，仅显示名下用户） =====
function agentDiscMatrix(){
  const agentDiscData = DISC_DATA.filter(d=>d.agent==='partner_lisi');
  return `<div class="card p-4">
    <div class="flex items-center justify-between mb-3">
      <div class="flex items-center gap-2">
        <input class="input" id="disc-search" style="width:160px" placeholder="搜索用户..." oninput="filterDiscTable()">
        <button class="btn btn-outline btn-sm" onclick="showDiscForm()">新增折扣规则</button>
      </div>
      <div class="flex items-center gap-2">
        <div class="relative">
          <button class="btn btn-outline btn-sm" onclick="toggleDiscColSettings()">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/></svg>
            列设置
            <span class="badge b-secondary" style="font-size:10px;margin-left:2px" id="disc-col-count">${MODELS.filter(m=>discVisibleCols[m]).length}/${MODELS.length}</span>
          </button>
          <div id="disc-col-settings" class="card p-3" style="display:none;position:absolute;right:0;top:100%;z-index:20;min-width:260px;box-shadow:0 4px 12px rgba(0,0,0,.1)">
            <div class="text-xs font-medium mb-2" style="color:var(--muted-foreground)">显示/隐藏模型列</div>
            <div class="relative mb-2">
              <svg class="w-3.5 h-3.5 absolute left-2 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color:var(--muted-foreground)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 0 0114 0z"/></svg>
              <input class="input" id="disc-col-search" style="width:100%;padding-left:28px;font-size:12px;height:30px" placeholder="搜索模型名称..." oninput="filterDiscCols()">
            </div>
            <div id="disc-col-list" style="max-height:240px;overflow-y:auto">
              ${MODELS.map(m=>`<label class="flex items-center gap-2 py-1.5 px-1 cursor-pointer rounded disc-col-item" data-model="${MODEL_SHORT[m].toLowerCase()} ${m.toLowerCase()}">
                <input type="checkbox" ${discVisibleCols[m]?'checked':''} onchange="toggleDiscCol('${m}',this.checked)">
                <div class="flex-1">
                  <div class="text-xs">${MODEL_SHORT[m]}</div>
                  <div class="text-[10px]" style="color:var(--muted-foreground)">${m}</div>
                </div>
                <span class="text-[10px] badge b-neutral" style="font-size:9px">ratio=${MODEL_RATIO[m]}</span>
              </label>`).join('')}
            </div>
            <div class="flex gap-2 mt-2 pt-2" style="border-top:1px solid var(--border)">
              <button class="btn btn-ghost btn-sm" style="font-size:11px" onclick="setAllDiscCols(true)">全选</button>
              <button class="btn btn-ghost btn-sm" style="font-size:11px" onclick="setAllDiscCols(false)">取消全选</button>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-1.5 text-xs" style="color:var(--muted-foreground)">
          <span class="badge b-neutral">1.00 = 原价</span>
          <span class="badge b-primary">0.85 = 8.5折</span>
        </div>
      </div>
    </div>
    <div class="info-banner mb-3">
      <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color:var(--primary)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 3 0 11-18 0 9 0 0118 0z"/></svg>
      <span>每行代表一个名下用户，每列代表一个模型，单元格内是该用户使用该模型的折扣值。点击单元格可修改，空白"—"表示无折扣（按原价计费）。</span>
    </div>
    <div class="overflow-x-auto rounded-lg" style="border:1px solid var(--border)">
      <table id="disc-table"><thead><tr>
        <th style="position:sticky;left:0;background:var(--card);z-index:10;min-width:160px">用户</th>
        ${MODELS.map(m=>`<th class="text-center disc-col-${m}" style="min-width:110px;display:${discVisibleCols[m]?'':'none'}"><span class="text-[11px]">${MODEL_SHORT[m]}</span><br><span class="text-[10px]" style="color:var(--muted-foreground)">ratio=${MODEL_RATIO[m]}</span></th>`).join('')}
        <th class="text-center">操作</th>
      </tr></thead>
      <tbody>${agentDiscData.map((u,i)=>`<tr class="disc-row" data-user="${u.user}">
        <td style="position:sticky;left:0;background:var(--card);z-index:10">
          <span class="font-medium">${u.user}</span>
        </td>
        ${MODELS.map(m=>{
          const d=u.disc[m]; const set=d!==null&&d!==undefined&&d!==1.00;
          return `<td class="text-center disc-col-${m}" style="font-variant-numeric:tabular-nums;display:${discVisibleCols[m]?'':'none'}">
            <button class="disc-cell ${set?'set':''}" onclick="editDisc(${u.id},'${m}',${d??'null'})" title="点击修改折扣">
              ${d!==null&&d!==undefined?(set?`<span style="color:var(--primary);font-weight:500">${d.toFixed(2)}</span>`:`<span style="color:var(--muted-foreground)">${d.toFixed(2)}</span>`):'<span style="color:var(--muted-foreground)">—</span>'}
            </button>
          </td>`;
        }).join('')}
        <td class="text-center">
          <button class="btn btn-ghost btn-sm" onclick="showDiscDetail(${u.id})" title="查看">查看</button>
          <button class="btn btn-ghost btn-sm" onclick="showDiscForm(${u.id})" title="编辑">编辑</button>
          <button class="btn btn-ghost btn-sm" onclick="deleteDisc(${u.id})" title="删除" style="color:var(--destructive)">删除</button>
        </td>
      </tr>`).join('')}</tbody></table>
    </div>
    <div class="mt-3 p-2.5 rounded-lg text-xs" style="background:var(--muted);color:var(--muted-foreground)">
      <strong>计费公式：</strong>最终扣费 = ModelRatio × group_ratio × 用户折扣 × 用量。<br>
      <strong>列说明：</strong>每列对应一个通义千问模型的折扣值。例如 0.85 表示该用户使用此模型享 8.5 折优惠。可通过"列设置"控制模型列的显示/隐藏。
    </div>
    <div class="p-2 text-[11px] text-center mt-2" style="background:var(--muted);color:var(--muted-foreground);border-top:1px solid var(--border)">
      数据按 agent_id 过滤 — 仅显示名下用户的折扣规则
    </div>
  </div>`;
}

function toggleDiscColSettings(){
  var el=document.getElementById('disc-col-settings');
  el.style.display=el.style.display==='none'?'block':'none';
}

function toggleDiscCol(model,visible){
  discVisibleCols[model]=visible;
  document.querySelectorAll('.disc-col-'+model).forEach(function(el){el.style.display=visible?'':'none';});
  var cnt=MODELS.filter(function(m){return discVisibleCols[m];}).length;
  var el=document.getElementById('disc-col-count');
  if(el) el.textContent=cnt+'/'+MODELS.length;
}

function setAllDiscCols(visible){
  document.querySelectorAll('#disc-col-list .disc-col-item').forEach(function(item){
    if(item.style.display==='none') return;
    var cb=item.querySelector('input[type=checkbox]');
    var model=cb.getAttribute('onchange').match(/'([^']+)'/)[1];
    discVisibleCols[model]=visible;
    cb.checked=visible;
    document.querySelectorAll('.disc-col-'+model).forEach(function(el){el.style.display=visible?'':'none';});
  });
  var cnt=MODELS.filter(function(m){return discVisibleCols[m];}).length;
  var el=document.getElementById('disc-col-count');
  if(el) el.textContent=cnt+'/'+MODELS.length;
}

function filterDiscTable(){
  var q=document.getElementById('disc-search').value.toLowerCase();
  document.querySelectorAll('.disc-row').forEach(function(row){
    var user=row.getAttribute('data-user').toLowerCase();
    row.style.display=user.indexOf(q)!==-1?'':'none';
  });
}

function filterDiscCols(){
  var q=document.getElementById('disc-col-search').value.toLowerCase();
  var visibleCount=0;
  document.querySelectorAll('#disc-col-list .disc-col-item').forEach(function(item){
    var model=item.getAttribute('data-model').toLowerCase();
    var match=model.indexOf(q)!==-1;
    item.style.display=match?'':'none';
    if(match) visibleCount++;
  });
  var emptyEl=document.getElementById('disc-col-empty');
  if(visibleCount===0){
    if(!emptyEl){
      var list=document.getElementById('disc-col-list');
      emptyEl=document.createElement('div');
      emptyEl.id='disc-col-empty';
      emptyEl.className='text-xs text-center py-4';
      emptyEl.style.color='var(--muted-foreground)';
      emptyEl.textContent='未找到匹配的模型';
      list.appendChild(emptyEl);
    }
  } else if(emptyEl){
    emptyEl.remove();
  }
}

function showDiscDetail(id){
  var d=DISC_DATA.find(function(x){return x.id===id;});
  if(!d) return;
  var totalDisc=0, activeCount=0;
  MODELS.forEach(function(m){
    if(d.disc[m]&&d.disc[m]<1){totalDisc++;activeCount++;}
  });
  showModal(`<div class="p-5" style="max-width:680px">
    <div class="flex items-center justify-between mb-4">
      <div>
        <h3 class="text-base font-semibold">折扣详情</h3>
        <p class="text-xs mt-0.5" style="color:var(--muted-foreground)">${d.user} · ${d.agent}</p>
      </div>
      <span class="badge b-primary">${activeCount} 个模型有折扣</span>
    </div>
    <div class="space-y-2 mb-4">
      ${MODELS.map(function(m){
        var val=d.disc[m]; var set=val!==null&&val!==undefined&&val<1;
        var originalPrice=MODEL_RATIO[m]*2;
        var finalPrice=set?originalPrice*val:originalPrice;
        var savings=set?((1-val)*100).toFixed(0)+'%':'0%';
        return `<div class="flex items-center gap-3 p-3 rounded-lg" style="background:var(--muted)">
          <div class="flex-1">
            <div class="text-sm font-medium">${MODEL_SHORT[m]}</div>
            <div class="text-[11px]" style="color:var(--muted-foreground)">ratio=${MODEL_RATIO[m]} · 原价 ¥${originalPrice.toFixed(2)}/1M</div>
          </div>
          <div class="text-right">
            <div class="text-sm font-semibold ${set?'':''}" style="color:${set?'var(--primary)':'var(--muted-foreground)'}">${val!==null&&val!==undefined?val.toFixed(2):'1.00'}</div>
            <div class="text-[11px]" style="color:var(--muted-foreground)">¥${finalPrice.toFixed(2)}/1M ${set?'· 省'+savings:''}</div>
          </div>
        </div>`;
      }).join('')}
    </div>
    <div class="p-3 rounded-lg text-xs" style="background:var(--accent);color:var(--accent-foreground)">
      <strong>计费示例：</strong>该用户使用 ${MODEL_SHORT[MODELS[0]]} 生成视频，消耗 100 万 Tokens，最终扣费 = ${MODEL_RATIO[MODELS[0]]} × 1 × ${(d.disc[MODELS[0]]||1).toFixed(2)} × 1 = <strong>¥${(MODEL_RATIO[MODELS[0]]*(d.disc[MODELS[0]]||1)*2).toFixed(2)}</strong>
    </div>
    <div class="flex justify-end gap-2 mt-4">
      <button class="btn btn-primary btn-sm" onclick="closeModal()">关闭</button>
    </div>
  </div>`);
}

function showDiscForm(id){
  const d = id ? DISC_DATA.find(x=>x.id===id) : null;
  const dTitle = d ? '编辑折扣规则' : '新增折扣规则';
  const dBtn = d ? '保存' : '新增';
  const dMsg = d ? '折扣规则已更新' : '折扣规则已新增';
  showModal(`<div class="p-5" style="max-width:680px">
    <h3 class="text-base font-semibold mb-1">${dTitle}</h3>
    <p class="text-xs mb-4" style="color:var(--muted-foreground)">为用户设置各模型的折扣值，1.00 = 原价，0.85 = 8.5折</p>
    <div class="space-y-3">
      <div class="grid grid-cols-2 gap-3">
        <div><label class="text-xs font-medium block mb-1">用户 <span style="color:var(--destructive)">*</span></label>
          <select class="input w-full" ${d?'disabled':''}><option>${d?d.user:'选择用户'}</option>${!d?'<option>zhangsan</option><option>wangwu</option><option>zhaoliu</option><option>qianqi</option>':''}</select>
        </div>
      </div>
      <div class="pt-2" style="border-top:1px solid var(--border)">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-medium">模型折扣设置</span>
          <button class="btn btn-ghost btn-sm" onclick="batchSetDisc(this)" style="font-size:11px">批量设为</button>
        </div>
        <div class="space-y-2">
          ${MODELS.map((m,idx)=>{
            const val=d?d.disc[m]:null;
            return `<div class="flex items-center gap-3 p-2 rounded-lg" style="background:var(--muted)">
              <div class="flex-1">
                <div class="text-xs font-medium">${MODEL_SHORT[m]}</div>
                <div class="text-[10px]" style="color:var(--muted-foreground)">ratio=${MODEL_RATIO[m]} · 原价 ¥${(MODEL_RATIO[m]*2).toFixed(2)}/1M</div>
              </div>
              <div class="flex items-center gap-1.5">
                <input type="number" class="input disc-input" data-model="${m}" min="0.01" max="1" step="0.01" value="${val!==null&&val!==undefined?val.toFixed(2):''}" placeholder="1.00" style="width:64px;text-align:center;font-size:12px;padding:4px 6px">
                <span class="text-[11px]" style="color:var(--muted-foreground);width:36px">${val!==null&&val!==undefined&&val<1?(val*10).toFixed(1)+'折':'原价'}</span>
              </div>
            </div>`;
          }).join('')}
        </div>
        <div class="flex gap-1.5 mt-2" id="batch-controls" style="display:none">
          <input type="number" class="input" id="batch-val" min="0.01" max="1" step="0.01" placeholder="0.85" style="width:64px;font-size:12px;padding:4px 6px">
          <button class="btn btn-outline btn-sm" onclick="applyBatchDisc()">应用</button>
          <button class="btn btn-ghost btn-sm" onclick="document.getElementById('batch-controls').style.display='none'">取消</button>
        </div>
      </div>
      <div class="p-2.5 rounded-lg text-xs" style="background:var(--accent);color:var(--accent-foreground)">
        <strong>计费公式：</strong>最终扣费 = ModelRatio × group_ratio × 用户折扣 × 用量。留空或填 1.00 表示按原价计费。
      </div>
    </div>
    <div class="flex justify-end gap-2 mt-4">
      <button class="btn btn-primary btn-sm" onclick="closeModal()">取消</button>
      <button class="btn btn-primary btn-sm" onclick="closeModal();showToast('${dTitle}','${dMsg}')">${dBtn}</button>
    </div>
  </div>`);
}

function batchSetDisc(btn){
  const controls=document.getElementById('batch-controls');
  controls.style.display=controls.style.display==='none'?'flex':'none';
}

function applyBatchDisc(){
  const val=parseFloat(document.getElementById('batch-val').value);
  if(isNaN(val)||val<0.01||val>1){alert('请输入 0.01~1 之间的值');return;}
  document.querySelectorAll('.disc-input').forEach(inp=>{inp.value=val.toFixed(2);});
  document.querySelectorAll('.disc-input').forEach(inp=>{
    const span=inp.nextElementSibling;
    if(span) span.textContent=val<1?(val*10).toFixed(1)+'折':'原价';
  });
}

function deleteDisc(id){
  const d = DISC_DATA.find(x=>x.id===id);
  showModal(`<div class="p-5">
    <h3 class="text-base font-semibold mb-3">删除折扣规则</h3>
    <p class="text-sm" style="color:var(--muted-foreground)">确定要删除用户 <strong style="color:var(--foreground)">${d.user}</strong> 的折扣规则吗？删除后该用户将按原价计费。</p>
    <div class="flex justify-end gap-2 mt-4">
      <button class="btn btn-primary btn-sm" onclick="closeModal()">取消</button>
      <button class="btn btn-destructive btn-sm" onclick="closeModal();showToast('折扣规则已删除','用户 ${d.user} 的折扣规则已删除，将按原价计费')">确认删除</button>
    </div>
  </div>`);
}

function editDisc(i,m,v){
  const cell=event.target.closest('button');
  cell.innerHTML=`<input type="number" min="0.01" max="1" step="0.01" value="${v!==null?v.toFixed(2):''}" style="width:44px;text-align:center;border:1px solid var(--primary);border-radius:6px;font-size:12px;outline:none;padding:2px" id="di-${i}-${m}">`;
  const inp=document.getElementById(`di-${i}-${m}`); inp.focus(); inp.select();
  inp.addEventListener('blur',()=>{
    const val=parseFloat(inp.value);
    if(isNaN(val)||val<0.01||val>1){cell.innerHTML=v!==null?v.toFixed(2):'<span style="color:var(--muted-foreground)">—</span>';return;}
    DISC_DATA[i].disc[m]=val; const set=val!==1.00;
    cell.innerHTML=set?`<span style="color:var(--primary);font-weight:500">${val.toFixed(2)}</span>`:`<span style="color:var(--muted-foreground)">${val.toFixed(2)}</span>`;
    cell.className=`disc-cell ${set?'set':''}`;
  });
  inp.addEventListener('keydown',e=>{if(e.key==='Enter')inp.blur();if(e.key==='Escape'){cell.innerHTML=v!==null?v.toFixed(2):'<span style="color:var(--muted-foreground)">—</span>';}});
}

// ===== 财务中心 - 转账充值设置 =====
let rechargeEditMode = false;
const rechargeData = {
  accountName: 'XX科技有限公司',
  bankName: 'XX银行XX支行',
  bankAccount: '6222 0900 1234 5678 901',
  enabled: true,
  workdayStart: '星期一',
  workdayEnd: '星期五',
  startTime: '09:00',
  endTime: '18:00',
  offWorkNote: '非工作时间充值到账可能延迟，请提前安排。',
  invoiceContactNote: '如需开具发票，请提交您的联系方式，运营人员将与您联系。',
  invoiceTaxNote: '个人开票按国家规定代扣代缴个人所得税，税率为20%；企业开票按国家现行税率执行。',
  refundContactNote: '如需办理退款，请提交您的联系方式，运营人员将与您联系。',
  refundNote: '退款将原路退回至您的充值渠道，最多可退金额为当前账户余额。发起的退款工单需等待运营处理；如有特殊情况（如需退回其他账户），请在发起退款时的备注中说明。',
  otherContactNote: '如有其他问题需要咨询，请提交您的联系方式，运营人员将与您联系。'
};
const WEEKDAYS = ['星期一','星期二','星期三','星期四','星期五','星期六','星期日'];
const contactBadgeMap = {invoice:'b-primary',refund:'b-destructive',other:'b-secondary'};
const contactLabelMap = {invoice:'开票',refund:'退款',other:'其他'};

/* ============ 账单 & 发票模块 ============ */
const BILL_USER = 'zhangsan';
// 账单：inv 为开票状态 none=未开票 / processing=开票中 / issued=已开票 / rejected=已拒绝；user 为所属用户
const BILLS = [
  {id:'B-202609',user:'zhangsan',period:'2026-09',periodLabel:'2026年09月',amount:156.80,inv:'none',status:'billing'},
  {id:'B-202608',user:'zhangsan',period:'2026-08',periodLabel:'2026年08月',amount:185.60,inv:'none',status:'unsettled'},
  {id:'B-202607',user:'zhangsan',period:'2026-07',periodLabel:'2026年07月',amount:120.00,inv:'none',status:'settled'},
  {id:'B-202606',user:'zhangsan',period:'2026-06',periodLabel:'2026年06月',amount:95.40,inv:'processing',status:'settled'},
  {id:'B-202605',user:'zhangsan',period:'2026-05',periodLabel:'2026年05月',amount:88.00,inv:'issued',status:'settled'},
  {id:'B-202604',user:'zhangsan',period:'2026-04',periodLabel:'2026年04月',amount:210.00,inv:'issued',status:'settled'},
  {id:'B-202608W',user:'wangwu',period:'2026-08',periodLabel:'2026年08月',amount:145.20,inv:'processing',status:'unsettled'},
  {id:'B-202607W',user:'wangwu',period:'2026-07',periodLabel:'2026年07月',amount:92.00,inv:'processing',status:'settled'},
];
const BILL_STATUS = {billing:{l:'出帐中',c:'b-warning'},unsettled:{l:'未结清',c:'b-danger'},settled:{l:'已结清',c:'b-success'}};
const INV_STATUS = {none:{l:'未开票',c:'b-neutral'},processing:{l:'开票中',c:'b-info'},issued:{l:'已开票',c:'b-success'},rejected:{l:'已拒绝',c:'b-danger'}};
// 发票抬头（按用户），企业/个人
const INVOICE_PROFILES = {
  zhangsan:[
    {type:'企业',name:'深圳星辰科技有限公司',taxId:'91440300MA1GDFKLZX',registerAddr:'深圳市南山区科技园南区',registerPhone:'0755-88888888',bankName:'招商银行深圳分行',bankAccount:'755912345678901',email:'billing@xingchen.com',invType:'special'},
    {type:'个人',name:'张三',email:'zhangsan@example.com',invType:'normal'}
  ]
};
// 发票记录：status processing=开票中 / issued=已开票 / rejected=已拒绝
const INVOICES = [
  {id:'F20260601',invNo:'INV202606001',user:'zhangsan',periods:['2026-06'],amount:95.40,titleType:'企业',title:'深圳星辰科技有限公司',email:'billing@xingchen.com',invType:'special',tax:true,status:'processing',time:'2026-06-20 10:12:00'},
  {id:'F20260501',invNo:'INV202605001',user:'zhangsan',periods:['2026-05'],amount:88.00,titleType:'个人',title:'张三',email:'zhangsan@example.com',invType:'normal',tax:true,status:'issued',file:'电子发票_INV202605001.pdf',time:'2026-05-28 09:00:00',arriveTime:'2026-05-30 15:00:00'},
  {id:'F20260401',invNo:'INV202604001',user:'zhangsan',periods:['2026-04'],amount:210.00,titleType:'企业',title:'深圳星辰科技有限公司',email:'billing@xingchen.com',invType:'special',tax:true,status:'issued',file:'电子发票_INV202604001.pdf',time:'2026-04-25 10:30:00',arriveTime:'2026-04-27 14:20:00'},
];
// 发票类型：special=增值税专用发票（专票）/ normal=增值税普通发票（普票）
const INV_TYPE = {special:{l:'增值税专用发票',s:'专票',c:'b-primary'},normal:{l:'增值税普通发票',s:'普票',c:'b-secondary'}};
const INV_ORDER_STATUS = {pending:{l:'待开票',c:'b-warning'},issued:{l:'已开票',c:'b-success'}};
// 账单页弹出的费用详情跳转日志时记录的账期筛选
let billTracePeriod = null;
function billStatusBadge(s){const b=INV_STATUS[s]||INV_STATUS.none;return `<span class="badge ${b.c}">${b.l}</span>`;}
// 用户端账单页
function billsPage(){
  const myBills = BILLS.filter(b=>b.user===BILL_USER);
  const total = myBills.reduce((s,b)=>s+b.amount,0);
  const canInvoice = myBills.some(b=>b.inv==='none');
  return `
  <div class="card overflow-hidden">
    <div class="flex items-center gap-2 p-3 flex-wrap" style="border-bottom:1px solid var(--border)">
      <div><div class="text-sm font-semibold">月度账单</div><div class="text-xs" style="color:var(--muted-foreground)">共 ${myBills.length} 期</div></div>
      <button class="btn btn-primary btn-sm ml-auto" ${canInvoice?'':'disabled style="opacity:0.5;cursor:not-allowed"'} onclick="openInvoiceMerge()">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.6a2 2 0 011.5.67L20 8.4V19a2 2 0 01-2 2z"/></svg>
        合并开票
      </button>
      <button class="btn btn-outline btn-sm" onclick="showExportConfirm('bills', ${myBills.length})">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
        导出
      </button>
    </div>
    <div class="overflow-x-auto">
      <table data-export-type="bills"><thead><tr>
        <th style="width:40px">${getExportAllCheckbox('bills', myBills.map(b=>b.id))}</th>
        <th>序号</th><th>账户账期</th><th class="text-right">费用(¥)</th><th>状态</th><th>开票状态</th><th>费用详情</th>
      </tr></thead>
      <tbody>${myBills.map((b,i)=>{
        const st = BILL_STATUS[b.status] || BILL_STATUS.settled;
        return `<tr>
        <td>${getExportCheckbox('bills', b.id)}</td>
        <td style="color:var(--muted-foreground);font-size:12px">${i+1}</td>
        <td><span class="text-sm">${b.periodLabel}</span></td>
        <td class="font-semibold tabular-nums text-right">¥${b.amount.toFixed(2)}</td>
        <td><span class="badge ${st.c}">${st.l}</span></td>
        <td>${billStatusBadge(b.inv)}</td>
        <td><span class="copy-link" onclick="jumpToBillLogs('${b.period}')">查看费用详情</span></td>
      </tr>`;}).join('')}
      </tbody></table>
    </div>
    <div class="flex items-center justify-between px-4 py-3" style="border-top:1px solid var(--border)">
      <div class="text-xs" style="color:var(--muted-foreground)">合计费用 ¥${total.toFixed(2)}</div>
      <div class="text-xs" style="color:var(--muted-foreground)">勾选可合并开票；发票可在「发票管理」查看与下载</div>
    </div>
  </div>`;
}
// 费用详情：跳转日志页并只展示对应账期日志
function jumpToBillLogs(period){
  billTracePeriod = period;
  go('user-logs');
}
function clearBillTrace(){
  billTracePeriod = null;
  renderPage();
}
/* ---------- 合并开票 ---------- */
let _mergeInvType = 'special';
function openInvoiceMerge(){
  const sel = getExportSelection('bills');
  const selected = BILLS.filter(b=>b.user===BILL_USER && b.inv==='none' && sel.has(b.id));
  if(selected.length===0){ showToast('请先勾选账单','请勾选至少一条未开票的账单后再合并开票',{type:'warning',label:'知道了'}); return; }
  renderInvoiceMergeDlg(selected.map(b=>b.id), '企业');
}
function renderInvoiceMergeDlg(ids, titleType){
  const bills = BILLS.filter(b=>ids.includes(b.id));
  const total = bills.reduce((s,b)=>s+b.amount,0);
  const profiles = (INVOICE_PROFILES[BILL_USER]||[]).filter(p=>p.type===titleType);
  if(titleType==='企业' && profiles.length) _mergeInvType = profiles[0].invType || 'special';
  const invType = titleType==='企业' ? _mergeInvType : 'normal';
  const rows = bills.map(b=>`<div class="flex items-center justify-between py-1.5 text-sm"><span style="color:var(--muted-foreground)">${b.periodLabel}</span><span class="font-medium tabular-nums">¥${b.amount.toFixed(2)}</span></div>`).join('');
  showModal(`<div style="width:720px;max-width:94vw">
    <div class="relative flex items-center justify-center p-4" style="border-bottom:1px solid var(--border)">
      <h3 class="text-base font-semibold">合并开票</h3>
      <button class="icon-btn" style="position:absolute;right:14px" onclick="closeModal()"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>
    <div class="p-4 space-y-4">
      <div class="rounded-lg overflow-hidden" style="border:1px solid color-mix(in srgb,var(--primary) 38%,var(--border));background:color-mix(in srgb,var(--primary) 4%,transparent)">
        <button onclick="toggleCollapse(this)" type="button" class="w-full flex items-center justify-between gap-2 p-3" style="background:transparent;border:none;cursor:pointer;text-align:left">
          <span class="text-xs font-semibold" style="color:var(--primary)">选择账单 <span style="font-weight:500;opacity:.85">（${bills.length} 张）</span></span>
          <span class="flex items-center gap-1 flex-shrink-0">
            <span class="text-xs collapse-label" style="color:var(--primary)">展开</span>
            <svg class="w-4 h-4 transition-transform" style="color:var(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </span>
        </button>
        <div class="collapse-body" style="display:none;padding:0 14px 12px;border-top:1px solid color-mix(in srgb,var(--primary) 22%,var(--border))">
          ${rows||'<div class="text-sm py-2" style="color:var(--muted-foreground)">未选择账单</div>'}
        </div>
      </div>
      <div class="flex items-center justify-between gap-2" style="background:var(--muted);border-radius:10px;padding:11px 14px">
        <span class="text-sm">开票金额（<strong style="color:var(--primary)">含个税，代扣代缴</strong>）</span>
        <span class="font-semibold tabular-nums" style="font-size:16px">¥${total.toFixed(2)}</span>
      </div>
      <div>
        <label class="text-xs font-medium block mb-1.5">发票抬头类型</label>
        <div class="flex gap-2">
          <button data-it="个人" onclick="switchInvTitleType('${ids.join(',')}','个人')" class="flex-1 py-2 rounded-lg text-sm ${titleType==='个人'?'':'unsel'}" style="${titleType==='个人'?'background:color-mix(in srgb,var(--primary) 12%,transparent);color:var(--primary);font-weight:600;border:1px solid color-mix(in srgb,var(--primary) 40%,transparent)':'border:1px solid var(--border)'}">个人</button>
          <button data-it="企业" onclick="switchInvTitleType('${ids.join(',')}','企业')" class="flex-1 py-2 rounded-lg text-sm ${titleType==='企业'?'':'unsel'}" style="${titleType==='企业'?'background:color-mix(in srgb,var(--primary) 12%,transparent);color:var(--primary);font-weight:600;border:1px solid color-mix(in srgb,var(--primary) 40%,transparent)':'border:1px solid var(--border)'}">企业</button>
        </div>
      </div>
      ${titleType==='企业'?`<div>
        <label class="text-xs font-medium block mb-1.5">发票类型</label>
        <div class="flex gap-2">
          <button type="button" data-it="special" onclick="selectMergeInvType('special')" class="merge-invtype flex-1 py-2 rounded-lg text-sm ${_mergeInvType==='special'?'':'unsel'}" style="${_mergeInvType==='special'?'background:color-mix(in srgb,var(--primary) 12%,transparent);color:var(--primary);font-weight:600;border:1px solid color-mix(in srgb,var(--primary) 40%,transparent)':'border:1px solid var(--border)'}">${INV_TYPE.special.l}</button>
          <button type="button" data-it="normal" onclick="selectMergeInvType('normal')" class="merge-invtype flex-1 py-2 rounded-lg text-sm ${_mergeInvType==='normal'?'':'unsel'}" style="${_mergeInvType==='normal'?'background:color-mix(in srgb,var(--primary) 12%,transparent);color:var(--primary);font-weight:600;border:1px solid color-mix(in srgb,var(--primary) 40%,transparent)':'border:1px solid var(--border)'}">${INV_TYPE.normal.l}</button>
        </div>
      </div>`:`<div class="rounded-lg p-2.5 text-xs" style="background:var(--muted);color:var(--muted-foreground);line-height:1.6">个人抬头默认开具「${INV_TYPE.normal.l}」</div>`}
      <div>
        <label class="text-xs font-medium block mb-1.5">发票抬头 <span style="color:var(--destructive)">*</span></label>
        <div class="flex gap-2">
          <select id="inv-title-sel" class="input flex-1" onchange="invTitleChanged()">
            ${profiles.map((p,i)=>`<option value="${p.name}" ${i===0?'selected':''} data-type="${p.type}" data-tax="${p.taxId||''}" data-invtype="${p.invType||'special'}" data-addr="${p.registerAddr||''}" data-phone="${p.registerPhone||''}" data-bank="${p.bankName||''}" data-acct="${p.bankAccount||''}" data-email="${p.email||''}">${p.name}</option>`).join('')}
          </select>
          <button class="btn btn-outline btn-sm flex-shrink-0" onclick="openProfileDlg('${ids.join(',')}','${titleType}')">新增</button>
        </div>
        <div class="text-xs mt-1.5" style="color:var(--muted-foreground)">没有需要的抬头？点「新增」在发票管理中配置</div>
        <div id="inv-profile-detail" class="rounded-lg p-3 mt-2" style="border:1px solid var(--border);background:var(--muted)">
          ${renderInvProfileDetail(profiles[0])}
        </div>
      </div>
      <div id="inv-tax-note" class="rounded-lg p-3" style="border:1px solid color-mix(in srgb,var(--chart-2) 40%,var(--border));background:color-mix(in srgb,var(--chart-2) 6%,transparent)">
        <div class="flex items-start gap-2">
          <svg class="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color:var(--chart-2)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <div>
            <div class="text-xs font-semibold mb-0.5" style="color:var(--chart-2)">开票说明</div>
            <div class="text-xs leading-relaxed" style="color:var(--muted-foreground)">${rechargeData.invoiceTaxNote}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-end gap-3 p-4" style="border-top:1px solid var(--border)">
      <button class="btn btn-primary btn-sm" onclick="closeModal()">取消</button>
      <button class="btn btn-primary btn-sm" onclick="submitInvoice('${ids.join(',')}','${titleType}')">提交开票申请</button>
    </div>
  </div>`);
  setTimeout(()=>{const mb=document.querySelector('.modal-box');if(mb)mb.style.width='auto';},0);
}
function switchInvTitleType(ids, t){ renderInvoiceMergeDlg(ids.split(',').filter(Boolean).map(s=>s.trim()), t); }
function selectMergeInvType(t){
  _mergeInvType = t;
  document.querySelectorAll('.merge-invtype').forEach(b=>{
    const active = b.getAttribute('data-it')===t;
    b.className = 'merge-invtype flex-1 py-2 rounded-lg text-sm' + (active?'':' unsel');
    b.style.cssText = active ? 'background:color-mix(in srgb,var(--primary) 12%,transparent);color:var(--primary);font-weight:600;border:1px solid color-mix(in srgb,var(--primary) 40%,transparent)' : 'border:1px solid var(--border)';
  });
  // 切换发票类型后刷新抬头详情
  const detail = document.getElementById('inv-profile-detail');
  const sel = document.getElementById('inv-title-sel');
  if(detail && sel){
    const opt = sel.options[sel.selectedIndex];
    if(opt){
      const p = {
        type: opt.getAttribute('data-type')||'',
        name: opt.value,
        taxId: opt.getAttribute('data-tax')||'',
        registerAddr: opt.getAttribute('data-addr')||'',
        registerPhone: opt.getAttribute('data-phone')||'',
        bankName: opt.getAttribute('data-bank')||'',
        bankAccount: opt.getAttribute('data-acct')||'',
        email: opt.getAttribute('data-email')||''
      };
      detail.innerHTML = renderInvProfileDetail(p);
    }
  }
}
function invTitleChanged(){
  const sel = document.getElementById('inv-title-sel');
  if(!sel) return;
  // 更新抬头详情
  const detail = document.getElementById('inv-profile-detail');
  const opt = sel.options[sel.selectedIndex];
  if(detail && opt){
    const p = {
      type: opt.getAttribute('data-type')||'',
      name: opt.value,
      taxId: opt.getAttribute('data-tax')||'',
      registerAddr: opt.getAttribute('data-addr')||'',
      registerPhone: opt.getAttribute('data-phone')||'',
      bankName: opt.getAttribute('data-bank')||'',
      bankAccount: opt.getAttribute('data-acct')||'',
      email: opt.getAttribute('data-email')||''
    };
    detail.innerHTML = renderInvProfileDetail(p);
  }
}
function renderInvProfileDetail(p){
  if(!p || !p.name) return '<div class="text-xs" style="color:var(--muted-foreground);padding:4px 0">请选择发票抬头</div>';
  const isOrg = p.type==='企业';
  const parts = [];
  // 税号（🆔 图标）
  if(isOrg && p.taxId){
    parts.push(`<div style="font-size:12px">🆔 ${p.taxId}</div>`);
  }
  // 第3层：专票补充信息（📍📞🏦💳 图标）
  if(isOrg && _mergeInvType==='special'){
    const extras = [];
    if(p.registerAddr) extras.push(`📍 ${p.registerAddr}`);
    if(p.registerPhone) extras.push(`📞 ${encField('phone', p.registerPhone)}`);
    if(p.bankName) extras.push(`🏦 ${p.bankName}`);
    if(p.bankAccount) extras.push(`💳 ${encField('bank', p.bankAccount)}`);
    if(extras.length){
      parts.push(`<div style="font-size:12px;margin-top:8px;line-height:1.8">${extras.map(v=>`<div>${v}</div>`).join('')}</div>`);
    }
  }
  // 第4层：收票邮箱（📧 图标）
  if(p.email){
    const gap = (parts.length>0) ? 'margin-top:8px' : '';
    parts.push(`<div style="font-size:12px;${gap}">📧 ${encField('email', p.email)}</div>`);
  }
  return parts.join('');
}
function openProfileDlg(ids, type){
  showModal(`<div style="width:560px;max-width:92vw">
    <div class="flex items-center justify-between p-4" style="border-bottom:1px solid var(--border)">
      <h3 class="text-base font-semibold">新增发票抬头</h3>
      <button class="icon-btn" onclick="closeModal()"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>
    <div class="p-4 space-y-3">
      <div><label class="text-xs font-medium block mb-1">抬头类型</label><select id="pf-type" class="input w-full" onchange="renderProfileExtra()"><option value="企业" ${type==='企业'?'selected':''}>企业</option><option value="个人" ${type==='个人'?'selected':''}>个人</option></select></div>
      <div><label class="text-xs font-medium block mb-1">发票抬头 <span style="color:var(--destructive)">*</span></label><input id="pf-name" class="input w-full" placeholder="请输入发票抬头"></div>
      <div id="pf-extra"></div>
      <div><label class="text-xs font-medium block mb-1">收票邮箱</label><input id="pf-email" class="input w-full" placeholder="请输入收票邮箱"></div>
    </div>
    <div class="flex items-center justify-end gap-3 p-4" style="border-top:1px solid var(--border)">
      <button class="btn btn-primary btn-sm" onclick="closeModal()">取消</button>
      <button class="btn btn-primary btn-sm" onclick="saveNewProfile('${ids}')">保存</button>
    </div>
  </div>`);
  renderProfileExtra();
}
let _pfInvType = 'special';
function selectPfInvType(t){
  _pfInvType = t;
  document.querySelectorAll('.pf-invtype').forEach(b=>{
    const active = b.getAttribute('data-it')===t;
    b.className = 'pf-invtype flex-1 py-2 rounded-lg text-sm' + (active?'':' unsel');
    b.style.cssText = active ? 'background:color-mix(in srgb,var(--primary) 12%,transparent);color:var(--primary);font-weight:600;border:1px solid color-mix(in srgb,var(--primary) 40%,transparent)' : 'border:1px solid var(--border)';
  });
  const extra = document.getElementById('pf-special-extra');
  if(extra) extra.style.display = t==='special' ? '' : 'none';
}
function renderProfileExtra(){
  const type = document.getElementById('pf-type')?.value;
  const box = document.getElementById('pf-extra');
  if(!box) return;
  if(type==='企业'){
    box.innerHTML = `<div class="space-y-3">
      <div><label class="text-xs font-medium block mb-1">单位税号 <span style="color:var(--destructive)">*</span></label><input id="pf-tax" class="input w-full" placeholder="请输入单位税号"></div>
      <div>
        <label class="text-xs font-medium block mb-1">发票类型</label>
        <div class="flex gap-2">
          <button type="button" data-it="special" onclick="selectPfInvType('special')" class="pf-invtype flex-1 py-2 rounded-lg text-sm">${INV_TYPE.special.l}</button>
          <button type="button" data-it="normal" onclick="selectPfInvType('normal')" class="pf-invtype flex-1 py-2 rounded-lg text-sm">${INV_TYPE.normal.l}</button>
        </div>
      </div>
      <div id="pf-special-extra" class="space-y-3" style="display:none">
        <div><label class="text-xs font-medium block mb-1">注册地址 <span style="color:var(--destructive)">*</span></label><input id="pf-addr" class="input w-full" placeholder="请输入注册地址"></div>
        <div><label class="text-xs font-medium block mb-1">注册电话 <span style="color:var(--destructive)">*</span></label><input id="pf-phone" class="input w-full" placeholder="请输入注册电话"></div>
        <div><label class="text-xs font-medium block mb-1">开户银行 <span style="color:var(--destructive)">*</span></label><input id="pf-bank" class="input w-full" placeholder="请输入开户银行"></div>
        <div><label class="text-xs font-medium block mb-1">银行账号 <span style="color:var(--destructive)">*</span></label><input id="pf-account" class="input w-full" placeholder="请输入银行账号"></div>
      </div>
    </div>`;
    selectPfInvType('special');
  }else{
    box.innerHTML = `<div class="space-y-3">
      <div class="rounded-lg p-2.5 text-xs" style="background:var(--muted);color:var(--muted-foreground);line-height:1.6">个人抬头默认开具「${INV_TYPE.normal.l}」</div>
    </div>`;
    _pfInvType = 'normal';
  }
}
function saveNewProfile(ids){
  const type = document.getElementById('pf-type').value;
  const name = document.getElementById('pf-name').value.trim();
  if(!name){ showToast('请输入发票抬头','发票抬头不能为空',{type:'warning',label:'知道了'}); return; }
  const email = document.getElementById('pf-email').value.trim();
  const p = {type, name, email, invType: type==='企业' ? _pfInvType : 'normal'};
  if(type==='企业'){
    p.taxId = document.getElementById('pf-tax')?.value.trim()||'';
    if(!p.taxId){ showToast('请输入单位税号','单位税号不能为空',{type:'warning',label:'知道了'}); return; }
    if(_pfInvType==='special'){
      p.registerAddr = document.getElementById('pf-addr')?.value.trim()||'';
      p.registerPhone = document.getElementById('pf-phone')?.value.trim()||'';
      p.bankName = document.getElementById('pf-bank')?.value.trim()||'';
      p.bankAccount = document.getElementById('pf-account')?.value.trim()||'';
      if(!p.registerAddr){ showToast('请输入注册地址','注册地址不能为空',{type:'warning',label:'知道了'}); return; }
      if(!p.registerPhone){ showToast('请输入注册电话','注册电话不能为空',{type:'warning',label:'知道了'}); return; }
      if(!p.bankName){ showToast('请输入开户银行','开户银行不能为空',{type:'warning',label:'知道了'}); return; }
      if(!p.bankAccount){ showToast('请输入银行账号','银行账号不能为空',{type:'warning',label:'知道了'}); return; }
    }
  }
  (INVOICE_PROFILES[BILL_USER] || (INVOICE_PROFILES[BILL_USER]=[])).push(p);
  closeModal();
  const paths = ids.split(',').filter(Boolean).map(s=>s.trim());
  renderInvoiceMergeDlg(paths, type);
  showToast('已保存','发票抬头已保存，可在发票管理中管理');
}
function submitInvoice(ids, titleType){
  const bills = BILLS.filter(b=>ids.split(',').map(s=>s.trim()).includes(b.id) && b.inv==='none');
  const total = bills.reduce((s,b)=>s+b.amount,0);
  const title = document.getElementById('inv-title-sel')?.value || '';
  const selectedOpt = document.querySelector('#inv-title-sel option:checked');
  const email = (selectedOpt?.getAttribute('data-email')||'').trim();
  if(!title){ showToast('请选择抬头','请选择发票抬头',{type:'warning',label:'知道了'}); return; }
  if(email && !/.+@.+\..+/.test(email)){ showToast('邮箱格式不正确','请输入有效的收票邮箱',{type:'warning',label:'知道了'}); return; }
  const tax = true;
  const periods = bills.map(b=>b.period);
  const now = new Date(); const p=n=>String(n).padStart(2,'0');
  const t = `${now.getFullYear()}-${p(now.getMonth()+1)}-${p(now.getDate())} ${p(now.getHours())}:${p(now.getMinutes())}:${p(now.getSeconds())}`;
  const invId = 'F'+t.replace(/[^0-9]/g,'').slice(0,8);
  const invType = titleType==='企业' ? (_mergeInvType||'special') : 'normal';
  INVOICES.unshift({id:invId, invNo:'INV'+t.replace(/[^0-9]/g,'').slice(0,10), user:'zhangsan', periods, amount:total, titleType, title, email, tax, invType, status:'processing', time:t});
  const cid = 'C'+t.replace(/[^0-9]/g,'').slice(0,11);
  CONTACT_REQS.unshift({id:cid,type:'invoice',user:'zhangsan',name:'张三',phone:'138****8888',email,note:'账单合并开票：'+periods.join('、'),time:t,status:'pending',invOrder:true,invId,invBills:ids.split(',').map(s=>s.trim()),invAmount:total,invTitleType:titleType,invTitle:title,invTax:true,invType});
  bills.forEach(b=>b.inv='processing');
  closeModal();
  renderPage();
  showToast('开票申请已提交','已生成开票工单，账单状态为「开票中」，开票完成后可在发票管理查看');
}
/* ---------- 用户端发票管理页 ---------- */
function invoicesPage(){
  const profiles = INVOICE_PROFILES[BILL_USER]||[];
  const myInvoices = INVOICES.filter(i=>i.user==='zhangsan');
  const invIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`;
  const histIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
  return `
  <div class="space-y-4">
    <div class="card overflow-hidden">
      <div class="flex items-center justify-between px-4 py-3" style="background:var(--muted);border-bottom:1px solid var(--border)">
        <button onclick="toggleCollapse(this)" type="button" class="flex items-center gap-2.5" style="background:none;border:none;cursor:pointer;padding:0;text-align:left">
          <span style="display:inline-flex;color:var(--primary)">${invIcon}</span>
          <span class="text-sm" style="font-weight:600;letter-spacing:0.3px">发票抬头</span>
          <span class="text-xs" style="font-weight:400;color:var(--muted-foreground)">${profiles.length} 个</span>
          <span class="flex items-center gap-1 flex-shrink-0" style="margin-left:2px">
            <span class="text-xs collapse-label" style="color:var(--primary)">展开</span>
            <svg class="w-3.5 h-3.5 transition-transform" style="color:var(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </span>
        </button>
        <button class="btn btn-outline btn-sm" onclick="openProfileDlg('', '企业')">+ 新增</button>
      </div>
      <div class="collapse-body" style="display:none">
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px;padding:12px">
          ${profiles.length===0?'<div style="grid-column:1/-1;text-align:center;font-size:13px;padding:32px 0;color:var(--muted-foreground)">暂无发票抬头，点击右上角新增</div>':profiles.map(p=>{
            const rows = [];
            if(p.type==='企业'){
              rows.push({label:'🆔 单位税号',val:p.taxId});
              if(p.invType==='special'){
                rows.push({label:'📍 注册地址',val:p.registerAddr});
                rows.push({label:'📞 注册电话',val:p.registerPhone,encrypt:'phone'});
                rows.push({label:'🏦 开户银行',val:p.bankName});
                rows.push({label:'💳 银行账号',val:p.bankAccount,encrypt:'bank'});
              }
            }
            rows.push({label:'📧 收票邮箱',val:p.email,encrypt:'email'});
            return `<div class="rounded-xl overflow-hidden" style="border:1px solid var(--border);background:#fff">
              <div class="flex items-center gap-1.5 px-3 py-2.5" style="background:var(--muted);border-bottom:1px solid var(--border)">
                <span class="badge ${p.type==='企业'?'b-primary':'b-secondary'}" style="font-size:10px;padding:1px 8px">${p.type}</span>
                <span class="badge ${(INV_TYPE[p.invType]||INV_TYPE.normal).c}" style="font-size:10px;padding:1px 8px">${(INV_TYPE[p.invType]||INV_TYPE.normal).s}</span>
                <span class="text-xs flex-1 truncate" style="font-weight:600;letter-spacing:0.2px">${p.name}</span>
              </div>
              <div class="p-3" style="display:flex;flex-direction:column;gap:6px">
                ${rows.map(r=>{
                  var valHtml = r.encrypt ? encField(r.encrypt, r.val||'—') : '<span style="font-weight:500;font-size:12px;word-break:break-all">'+(r.val||'—')+'</span>';
                  return '<div style="display:flex;align-items:center;gap:8px;min-width:0"><span class="text-[11px]" style="color:var(--muted-foreground);white-space:nowrap;flex-shrink:0">'+r.label+'</span><span style="min-width:0;flex:1">'+valHtml+'</span></div>';
                }).join('')}
              </div>
            </div>`;
          }).join('')}
        </div>
      </div>
    </div>
    <div class="card overflow-hidden">
      <div class="flex items-center gap-2.5 px-4 py-3" style="background:var(--muted);border-bottom:1px solid var(--border)">
        <span style="display:inline-flex;color:var(--primary)">${histIcon}</span>
        <span class="text-sm" style="font-weight:600;letter-spacing:0.3px">开票记录</span>
      </div>
      <div class="overflow-x-auto">
        <table><thead><tr><th>发票号</th><th>账单账期</th><th>金额(¥)</th><th>抬头</th><th>发票类型</th><th>开票状态</th><th>开票时间</th><th>操作</th></tr></thead>
        <tbody>${myInvoices.length===0?'<tr><td colspan="8" class="text-center" style="color:var(--muted-foreground)">暂无开票记录</td></tr>':myInvoices.map(i=>`<tr>
          <td style="font-family:monospace;font-size:12px">${i.invNo}</td>
          <td style="color:var(--muted-foreground);font-size:12px">${i.periods.join('、')}</td>
          <td class="font-semibold tabular-nums">¥${i.amount.toFixed(2)}</td>
          <td style="font-size:12px;max-width:180px"><span class="badge ${i.titleType==='企业'?'b-primary':'b-secondary'}">${i.titleType}</span> <span title="${i.title}">${i.title}</span></td>
          <td><span class="badge ${(INV_TYPE[i.invType]||INV_TYPE.normal).c}">${(INV_TYPE[i.invType]||INV_TYPE.normal).s}</span></td>
          <td><span class="badge ${(INV_STATUS[i.status]||INV_STATUS.none).c}">${(INV_STATUS[i.status]||INV_STATUS.none).l}</span></td>
          <td style="color:var(--muted-foreground);font-size:12px">${i.time}</td>
          <td>${i.status==='issued'?`<span class="copy-link" onclick="downloadInvoice('${i.id}')">下载发票</span>`:(i.status==='rejected'?'<span style="color:var(--destructive);font-size:12px">已拒绝</span>':'<span style="color:#d4d4d8;font-size:12px">开票处理中</span>')}</td>
        </tr>`).join('')}</tbody></table>
      </div>
    </div>
  </div>`;
}
function downloadInvoice(id){
  const i = INVOICES.find(x=>x.id===id);
  showToast('下载成功',(i&&i.file?i.file:'电子发票')+' 已开始下载（原型演示）');
}

let CUR_BALANCE = 0.24;
// 用户收款账户（企业/个人），退款时用于展示原路退回信息
let USER_ACCOUNT = {
  zhangsan:{type:'企业',company:'深圳星辰科技有限公司',account:'7559 2340 5678 9012',bank:'中国工商银行',branch:'深圳南山支行',credit:'91440300MA1GDFKLZX'},
  wangwu:{type:'个人',name:'王五',idNo:'441234199506071234',account:'6222 3456 7890 1234',bank:'中国建设银行',branch:'广州天河支行'},
  user_a:{type:'个人',name:'',idNo:'',account:'',bank:'',branch:''},
  user_b:{type:'个人',name:'',idNo:'',account:'',bank:'',branch:''}
};
// 用户充值记录：refStatus 为退款状态（none=未退款 / partial=部分退款 / full=已退款），refunded 为该笔已退金额
let USER_TOPUPS = {
  zhangsan:[
    {id:'T20260811001',serialNo:'LS20260811001',amount:500,time:'2026-08-11 14:30:00',status:'completed',arriveTime:'2026-08-11 14:35:00',note:'已到账',refStatus:'none',refunded:0,payName:'深圳星辰科技有限公司',payAccount:'6228 1001 2345 6789',payBank:'中国工商银行',payBranch:'深圳南油支行'},
    {id:'T20260810095',serialNo:'LS20260810095',amount:100,time:'2026-08-10 09:05:00',status:'completed',arriveTime:'2026-08-10 10:20:00',note:'已到账',refStatus:'none',refunded:0,payName:'深圳星辰科技有限公司',payAccount:'6228 1001 2345 6789',payBank:'中国工商银行',payBranch:'深圳南油支行'},
    {id:'T20260809088',serialNo:'LS20260809088',amount:200,time:'2026-08-09 16:40:00',status:'rejected',arriveTime:'—',note:'未查到转账',refStatus:'none',refunded:0,payName:'深圳星辰科技有限公司',payAccount:'6228 1001 2345 6789',payBank:'中国工商银行',payBranch:'深圳南油支行'}
  ],
  wangwu:[
    {id:'T20260812009',serialNo:'LS20260812009',amount:300,time:'2026-08-12 10:12:00',status:'completed',arriveTime:'2026-08-12 10:15:00',note:'已到账',refStatus:'none',refunded:0,payName:'王五',payAccount:'6217 0001 2345 6789',payBank:'中国建设银行',payBranch:'广州珠江支行'},
    {id:'T20260810095',serialNo:'LS20260810095',amount:100,time:'2026-08-10 09:05:00',status:'completed',arriveTime:'2026-08-10 09:10:00',note:'已到账',refStatus:'none',refunded:0,payName:'王五',payAccount:'6217 0001 2345 6789',payBank:'中国建设银行',payBranch:'广州珠江支行'}
  ],
  user_a:[
    {id:'T20260801001',serialNo:'LS20260801001',amount:720,time:'2026-08-01 10:22:00',status:'completed',arriveTime:'2026-08-01 10:25:00',note:'已到账',refStatus:'none',refunded:0,payDesc:'微信支付 · 原支付账户'}
  ],
  user_b:[
    {id:'T20260728009',serialNo:'LS20260728009',amount:820,time:'2026-07-28 15:40:00',status:'completed',arriveTime:'2026-07-28 15:45:00',note:'已到账',refStatus:'none',refunded:0,payDesc:'微信支付 · 原支付账户'}
  ]
};
// 退款抵扣：按充值时间从最近到最旧逐笔累加，直到抵扣完退款金额
function refundAllocate(user, amount){
  // 只允许从未退款的、已充值到账(completed)的记录中抵扣，未到账的充值不可退款
  const list = (USER_TOPUPS[user]||[]).filter(t=>t.refStatus!=='full' && t.status==='completed');
  const sorted = [...list].sort((a,b)=> b.time.localeCompare(a.time));
  let remain = amount;
  const alloc = [];
  for(const t of sorted){
    if(remain<=0) break;
    const avail = t.amount - (t.refunded||0);
    if(avail<=0) continue;
    const d = Math.min(avail, Math.round(remain*100)/100);
    remain = Math.round((remain-d)*100)/100;
    alloc.push({id:t.id, section:d});
  }
  return {alloc, whole: remain<=0};
}
function applyRefundTopups(user, amount){
  const {alloc} = refundAllocate(user, amount);
  alloc.forEach(a=>{
    const t = (USER_TOPUPS[user]||[]).find(x=>x.id===a.id);
    if(!t) return;
    t.refunded = (t.refunded||0) + a.section;
    t.refStatus = (Math.abs(t.refunded - t.amount) < 0.001) ? 'full' : 'partial';
  });
  return alloc;
}
const REF_BADGE = {none:{l:'未退款',c:'b-neutral'},partial:{l:'部分退款',c:'b-warning'},full:{l:'已退款',c:'b-success'}};
// 退款的原路返回信息：以该用户最近一次充值的渠道为准进行原路退回
const REFUND_SRC = {
  zhangsan:{channel:'bank',id:'T20260811001',account:'6222 **** **** 8889',desc:'银行转账 · 原付款账户',amount:500,time:'2026-08-11 14:30:00'},
  wangwu:{channel:'bank',id:'T20260810095',account:'6222 **** **** 1123',desc:'银行转账 · 原付款账户',amount:100,time:'2026-08-10 09:00:00'},
  user_a:{channel:'scan',id:'—',account:'微信支付 · 原支付账户',desc:'扫码支付 · 原支付账户',amount:720,time:'2026-08-01 10:22:00'},
  user_b:{channel:'scan',id:'—',account:'微信支付 · 原支付账户',desc:'扫码支付 · 原支付账户',amount:820,time:'2026-07-28 15:40:00'}
};
const CONTACT_REQS = [
  {id:'C20260811001',type:'invoice',user:'zhangsan',name:'张三',phone:'138****8888',email:'billing@xingchen.com',note:'补开2026年4月账单发票，需增值税专用发票',time:'2026-04-26 09:20:10',status:'contacted',invId:'F20260401',invBills:['B-202604'],invAmount:210.00,invTitleType:'企业',invTitle:'深圳星辰科技有限公司',invType:'special',invFile:'电子发票_INV202604001.pdf'},
  {id:'C20260812002',type:'refund',user:'zhangsan',name:'张三',phone:'138****8888',email:'',note:'系统重复充值，申请退款',time:'2026-08-12 09:15:22',refundAmount:200,status:'pending'},
  {id:'C20260812003',type:'invoice',user:'wangwu',name:'王五',phone:'139****6666',email:'wangwu@example.com',note:'申请开具2026年7月、8月账单发票',time:'2026-08-12 16:40:45',status:'pending',invBills:['B-202608W','B-202607W'],invAmount:237.20,invTitleType:'企业',invTitle:'王五网络科技有限公司',invType:'normal'},
  {id:'C20260814006',type:'other',user:'zhangsan',name:'张三',phone:'138****8888',email:'',note:'想了解是否有批量充值优惠',time:'2026-08-14 09:30:00',status:'pending'},
];

let rechargeTab = 'transfer';
let scanEditMode = false;
const scanData = {
  enabled: true,
  qrWechat: '',
  qrAlipay: '',
  qrNote: '请使用微信或支付宝扫描下方二维码，向运营账户完成扫码支付。付款后请保留凭证。'
};
let _scanQrTab = 'wechat';
function switchRechargeTab(tab){
  rechargeTab = tab;
  renderPage();
}
function groupTitle(text){
  return `<div class="flex items-center gap-2 pt-1">
    <span class="text-xs font-semibold" style="color:var(--muted-foreground)">${text}</span>
    <div class="flex-1" style="height:1px;background:var(--border)"></div>
  </div>`;
}
function rechargeSettings(){
  const tabBar = `<div class="tab-bar-bg mb-4">
    <button class="tab ${rechargeTab==='transfer'?'active':''}" onclick="switchRechargeTab('transfer')">转账充值</button>
    <button class="tab ${rechargeTab==='scan'?'active':''}" onclick="switchRechargeTab('scan')">扫码充值</button>
  </div>`;
  if(rechargeTab === 'scan') return tabBar + scanRechargePage();
  if(rechargeEditMode){
    return tabBar + `<div class="max-w-2xl space-y-3">
    ${groupTitle('充值信息配置')}
    <div class="card p-4">
      <div class="flex items-center gap-2 mb-3">
        <div class="text-sm font-semibold">收款账户信息</div>
      </div>
      <div class="space-y-3">
        <div><label class="text-xs font-medium block mb-1">收款户名</label><input id="rs-accountName" class="input w-full" value="${rechargeData.accountName}"></div>
        <div><label class="text-xs font-medium block mb-1">开户银行</label><input id="rs-bankName" class="input w-full" value="${rechargeData.bankName}"></div>
        <div><label class="text-xs font-medium block mb-1">银行账号</label><input id="rs-bankAccount" class="input w-full" value="${rechargeData.bankAccount}"></div>
        <div class="flex items-center justify-between py-1">
          <span class="text-xs font-medium">启用银行转账充值通道</span>
          <label class="toggle"><input id="rs-enabled" type="checkbox" ${rechargeData.enabled?'checked':''}><span class="slider"></span></label>
        </div>
      </div>
    </div>

    ${groupTitle('工作时间与联系方式')}
    <div class="card p-4">
      <div class="flex items-center gap-2 mb-3">
        <div class="text-sm font-semibold">工作时间</div>
      </div>
      <div class="space-y-3">
        <div class="grid grid-cols-2 gap-3">
          <div><label class="text-xs font-medium block mb-1">工作日开始</label>
            <select id="rs-workdayStart" class="input w-full">${WEEKDAYS.map(d=>`<option ${d===rechargeData.workdayStart?'selected':''}>${d}</option>`).join('')}</select>
          </div>
          <div><label class="text-xs font-medium block mb-1">工作日结束</label>
            <select id="rs-workdayEnd" class="input w-full">${WEEKDAYS.map(d=>`<option ${d===rechargeData.workdayEnd?'selected':''}>${d}</option>`).join('')}</select>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div><label class="text-xs font-medium block mb-1">上班时间</label><input id="rs-startTime" type="time" class="input w-full" value="${rechargeData.startTime}"></div>
          <div><label class="text-xs font-medium block mb-1">下班时间</label><input id="rs-endTime" type="time" class="input w-full" value="${rechargeData.endTime}"></div>
        </div>
        <div><label class="text-xs font-medium block mb-1">非工作时间说明</label><input id="rs-offWorkNote" class="input w-full" value="${rechargeData.offWorkNote}"></div>
      </div>
    </div>

    <div class="card p-4">
      <div class="flex items-center gap-2 mb-3">
        <div class="text-sm font-semibold">开票说明</div>
      </div>
      <div class="space-y-3">
        <div>
          <label class="text-xs font-medium block mb-1">开票说明文案（个人及企业开票时展示）</label>
          <textarea id="rs-invoiceTaxNote" class="input w-full" rows="2" placeholder="请输入开票说明">${rechargeData.invoiceTaxNote}</textarea>
        </div>
      </div>
    </div>

    <div class="card p-4">
      <div class="flex items-center gap-2 mb-3">
        <div class="text-sm font-semibold">退款说明</div>
      </div>
      <div class="space-y-3">
        <div>
          <label class="text-xs font-medium block mb-1">退款说明文案（展示给用户）</label>
          <textarea id="rs-refundNote" class="input w-full" rows="2" placeholder="请输入退款说明">${rechargeData.refundNote}</textarea>
        </div>
      </div>
    </div>

    <div class="card p-4">
      <div class="flex items-center gap-2 mb-3">
        <div class="text-sm font-semibold">其他咨询联系方式说明</div>
      </div>
      <div class="space-y-3">
        <div>
          <label class="text-xs font-medium block mb-1">说明文案（展示给用户）</label>
          <textarea id="rs-otherContactNote" class="input w-full" rows="2" placeholder="请输入其他咨询联系方式说明">${rechargeData.otherContactNote}</textarea>
        </div>
      </div>
    </div>

    <div class="flex justify-end gap-2">
      <button class="btn btn-outline" onclick="rechargeEditMode=false;renderPage()">取消</button>
      <button class="btn btn-primary" onclick="saveRechargeSettings()">保存设置</button>
    </div>
  </div>`;
  }

  // 展示态
  return tabBar + `<div class="max-w-2xl space-y-3">
    <div class="flex justify-end">
      <button class="btn btn-outline btn-sm" onclick="rechargeEditMode=true;renderPage()">编辑</button>
    </div>

    ${groupTitle('充值信息配置')}
    <div class="card p-4">
      <div class="flex items-center gap-2 mb-3">
        <div class="text-sm font-semibold">收款账户信息</div>
        <span class="badge ${rechargeData.enabled?'b-success':'b-neutral'}" style="margin-left:auto">${rechargeData.enabled?'已启用':'已停用'}</span>
      </div>
      <div class="space-y-2.5">
        <div class="flex items-start gap-3">
          <span class="text-xs w-20 flex-shrink-0" style="color:var(--muted-foreground)">收款户名</span>
          <span class="text-sm font-medium">${rechargeData.accountName}</span>
        </div>
        <div class="flex items-start gap-3">
          <span class="text-xs w-20 flex-shrink-0" style="color:var(--muted-foreground)">开户银行</span>
          <span class="text-sm">${rechargeData.bankName}</span>
        </div>
        <div class="flex items-start gap-3">
          <span class="text-xs w-20 flex-shrink-0" style="color:var(--muted-foreground)">银行账号</span>
          <span class="text-sm font-mono">${encField('bank', rechargeData.bankAccount)}</span>
        </div>
      </div>
    </div>

    ${groupTitle('工作时间与联系方式')}
    <div class="card p-4">
      <div class="flex items-center gap-2 mb-3">
        <div class="text-sm font-semibold">工作时间</div>
      </div>
      <div class="space-y-2.5">
        <div class="flex items-start gap-3">
          <span class="text-xs w-20 flex-shrink-0" style="color:var(--muted-foreground)">工作日</span>
          <span class="text-sm">${rechargeData.workdayStart} 至 ${rechargeData.workdayEnd}</span>
        </div>
        <div class="flex items-start gap-3">
          <span class="text-xs w-20 flex-shrink-0" style="color:var(--muted-foreground)">工作时段</span>
          <span class="text-sm font-mono">${rechargeData.startTime} - ${rechargeData.endTime}</span>
        </div>
        <div class="flex items-start gap-3">
          <span class="text-xs w-20 flex-shrink-0" style="color:var(--muted-foreground)">非工作时间</span>
          <span class="text-sm" style="color:var(--muted-foreground)">${rechargeData.offWorkNote}</span>
        </div>
      </div>
    </div>

    <div class="card p-4">
      <div class="flex items-center gap-2 mb-3">
        <div class="text-sm font-semibold">开票说明</div>
      </div>
      <div class="text-sm whitespace-pre-wrap leading-relaxed" style="color:var(--muted-foreground)">${rechargeData.invoiceTaxNote}</div>
    </div>

    <div class="card p-4">
      <div class="flex items-center gap-2 mb-3">
        <div class="text-sm font-semibold">退款说明</div>
      </div>
      <div class="text-sm whitespace-pre-wrap leading-relaxed" style="color:var(--muted-foreground)">${rechargeData.refundNote}</div>
    </div>

    <div class="card p-4">
      <div class="flex items-center gap-2 mb-3">
        <div class="text-sm font-semibold">其他咨询联系方式说明</div>
      </div>
      <div class="text-sm whitespace-pre-wrap leading-relaxed" style="color:var(--muted-foreground)">${rechargeData.otherContactNote}</div>
    </div>
  </div>`;
}
function saveRechargeSettings(){
  rechargeData.accountName = document.getElementById('rs-accountName').value;
  rechargeData.bankName = document.getElementById('rs-bankName').value;
  rechargeData.bankAccount = document.getElementById('rs-bankAccount').value;
  rechargeData.enabled = document.getElementById('rs-enabled').checked;
  rechargeData.workdayStart = document.getElementById('rs-workdayStart').value;
  rechargeData.workdayEnd = document.getElementById('rs-workdayEnd').value;
  rechargeData.startTime = document.getElementById('rs-startTime').value;
  rechargeData.endTime = document.getElementById('rs-endTime').value;
  rechargeData.offWorkNote = document.getElementById('rs-offWorkNote').value;
  rechargeData.invoiceTaxNote = (document.getElementById('rs-invoiceTaxNote')||{}).value || '';
  rechargeData.refundNote = (document.getElementById('rs-refundNote')||{}).value || '';
  rechargeData.otherContactNote = document.getElementById('rs-otherContactNote').value;
  rechargeEditMode = false;
  renderPage();
  showToast('保存成功','财务中心设置已更新');
}

// ===== 财务中心 - 扫码充值设置 =====
function scanQrPreviewHTML(type){
  const size = 'w-44 h-44';
  const img = type==='alipay' ? scanData.qrAlipay : scanData.qrWechat;
  if(img){
    return `<img src="${img}" class="${size} object-cover" style="border-radius:8px;border:1px solid var(--border)">`;
  }
  return `<div class="${size} mx-auto flex flex-col items-center justify-center" style="background:repeating-linear-gradient(45deg,#f5f5f5,#f5f5f5 8px,#eee 8px,#eee 16px);border-radius:8px;border:1px solid var(--border)">
    <svg class="w-10 h-10 mb-1" style="color:var(--muted-foreground)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v1m6 11h2m-6 0h-2v4h2v-4zM6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
    <div class="text-xs" style="color:var(--muted-foreground)">未上传二维码</div>
  </div>`;
}
function scanRechargePage(){
  if(scanEditMode){
    return `<div class="max-w-2xl space-y-3">
    ${groupTitle('充值信息配置')}
    <div class="card p-4">
      <div class="flex items-center justify-between mb-3">
        <div class="text-sm font-semibold">扫码充值通道</div>
        <label class="toggle"><input id="scan-enabled" type="checkbox" ${scanData.enabled?'checked':''}><span class="slider"></span></label>
      </div>
      <div class="text-xs" style="color:var(--muted-foreground)">开启后，用户端「充值-扫码充值」页面将展示收款二维码并允许提交扫码充值工单。</div>
    </div>

    <div class="card p-4">
      <div class="flex items-center gap-2 mb-3">
        <div class="text-sm font-semibold">收款二维码</div>
      </div>
      <div class="flex items-center gap-2 mb-3">
        <button class="btn btn-sm ${_scanQrTab==='alipay'?'btn-primary':'btn-outline'}" onclick="_scanQrTab='alipay';renderPage()">支付宝</button>
        <button class="btn btn-sm ${_scanQrTab!=='alipay'?'btn-primary':'btn-outline'}" onclick="_scanQrTab='wechat';renderPage()">微信</button>
      </div>
      ${_scanQrTab==='alipay'?`
      <div class="flex items-start gap-4">
        <div>${scanQrPreviewHTML('alipay')}</div>
        <div class="flex-1">
          <label class="text-xs font-medium block mb-2">上传支付宝收款二维码图片</label>
          <input type="file" id="scan-qrFile-alipay" accept="image/*" class="input" style="display:none" onchange="_scanQrUploadType='alipay';onScanQrFile(this)">
          <div class="flex items-center gap-2">
            <button class="btn btn-outline btn-sm" onclick="document.getElementById('scan-qrFile-alipay').click()">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              选择图片
            </button>
            ${scanData.qrAlipay?`<button class="btn btn-ghost btn-sm" style="color:var(--destructive)" onclick="scanData.qrAlipay='';renderPage()">移除</button>`:''}
          </div>
          <div class="mt-2 text-xs" style="color:var(--muted-foreground)">支持 JPG / PNG 格式，建议使用清晰的收款二维码图片。</div>
        </div>
      </div>`:`
      <div class="flex items-start gap-4">
        <div>${scanQrPreviewHTML('wechat')}</div>
        <div class="flex-1">
          <label class="text-xs font-medium block mb-2">上传微信收款二维码图片</label>
          <input type="file" id="scan-qrFile-wechat" accept="image/*" class="input" style="display:none" onchange="_scanQrUploadType='wechat';onScanQrFile(this)">
          <div class="flex items-center gap-2">
            <button class="btn btn-outline btn-sm" onclick="document.getElementById('scan-qrFile-wechat').click()">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              选择图片
            </button>
            ${scanData.qrWechat?`<button class="btn btn-ghost btn-sm" style="color:var(--destructive)" onclick="scanData.qrWechat='';renderPage()">移除</button>`:''}
          </div>
          <div class="mt-2 text-xs" style="color:var(--muted-foreground)">支持 JPG / PNG 格式，建议使用清晰的收款二维码图片。</div>
        </div>
      </div>`}
    </div>

    <div class="card p-4">
      <div class="flex items-center gap-2 mb-3">
        <div class="text-sm font-semibold">收款备注说明</div>
      </div>
      <div>
        <label class="text-xs font-medium block mb-1">说明文案（展示给用户）</label>
        <textarea id="scan-qrNote" class="input w-full" rows="3" placeholder="请输入扫码充值的收款说明">${scanData.qrNote}</textarea>
      </div>
    </div>

    ${groupTitle('工作时间与联系方式')}
    <div class="card p-4">
      <div class="flex items-center gap-2 mb-3">
        <div class="text-sm font-semibold">工作时间</div>
      </div>
      <div class="space-y-3">
        <div class="grid grid-cols-2 gap-3">
          <div><label class="text-xs font-medium block mb-1">工作日开始</label>
            <select id="scan-workdayStart" class="input w-full">${WEEKDAYS.map(d=>`<option ${d===rechargeData.workdayStart?'selected':''}>${d}</option>`).join('')}</select>
          </div>
          <div><label class="text-xs font-medium block mb-1">工作日结束</label>
            <select id="scan-workdayEnd" class="input w-full">${WEEKDAYS.map(d=>`<option ${d===rechargeData.workdayEnd?'selected':''}>${d}</option>`).join('')}</select>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div><label class="text-xs font-medium block mb-1">上班时间</label><input id="scan-startTime" type="time" class="input w-full" value="${rechargeData.startTime}"></div>
          <div><label class="text-xs font-medium block mb-1">下班时间</label><input id="scan-endTime" type="time" class="input w-full" value="${rechargeData.endTime}"></div>
        </div>
        <div><label class="text-xs font-medium block mb-1">非工作时间说明</label><input id="scan-offWorkNote" class="input w-full" value="${rechargeData.offWorkNote}"></div>
      </div>
    </div>

    <div class="card p-4">
      <div class="flex items-center gap-2 mb-3">
        <div class="text-sm font-semibold">开票说明</div>
      </div>
      <div>
        <label class="text-xs font-medium block mb-1">开票说明文案（个人及企业开票时展示）</label>
        <textarea id="scan-invoiceTaxNote" class="input w-full" rows="2" placeholder="请输入开票说明">${rechargeData.invoiceTaxNote}</textarea>
      </div>
    </div>

    <div class="card p-4">
      <div class="flex items-center gap-2 mb-3">
        <div class="text-sm font-semibold">退款说明</div>
      </div>
      <div>
        <label class="text-xs font-medium block mb-1">退款说明文案（展示给用户）</label>
        <textarea id="scan-refundNote" class="input w-full" rows="2" placeholder="请输入退款说明">${rechargeData.refundNote}</textarea>
      </div>
    </div>

    <div class="card p-4">
      <div class="flex items-center gap-2 mb-3">
        <div class="text-sm font-semibold">其他咨询联系方式说明</div>
      </div>
      <div>
        <label class="text-xs font-medium block mb-1">说明文案（展示给用户）</label>
        <textarea id="scan-otherNote" class="input w-full" rows="2" placeholder="请输入其他咨询联系方式说明">${rechargeData.otherContactNote}</textarea>
      </div>
    </div>

    <div class="flex justify-end gap-2">
      <button class="btn btn-outline" onclick="scanEditMode=false;renderPage()">取消</button>
      <button class="btn btn-primary" onclick="saveScanSettings()">保存设置</button>
    </div>
  </div>`;
  }
  return `<div class="max-w-2xl space-y-3">
    <div class="flex justify-end">
      <button class="btn btn-outline btn-sm" onclick="scanEditMode=true;renderPage()">编辑</button>
    </div>

    ${groupTitle('充值信息配置')}
    <div class="card p-4">
      <div class="flex items-center gap-2 mb-4">
        <div class="text-sm font-semibold">扫码充值通道</div>
        <span class="badge ${scanData.enabled?'b-success':'b-neutral'}" style="margin-left:auto">${scanData.enabled?'已启用':'已停用'}</span>
      </div>
      <div class="flex justify-center gap-6">
        <div class="text-center">
          <div class="text-xs font-medium mb-2" style="color:var(--muted-foreground)">微信支付</div>
          ${scanQrPreviewHTML('wechat')}
        </div>
        <div class="text-center">
          <div class="text-xs font-medium mb-2" style="color:var(--muted-foreground)">支付宝</div>
          ${scanQrPreviewHTML('alipay')}
        </div>
      </div>
    </div>

    <div class="card p-4">
      <div class="flex items-center gap-2 mb-3">
        <div class="text-sm font-semibold">收款备注说明</div>
      </div>
      <div class="text-sm whitespace-pre-wrap leading-relaxed" style="color:var(--muted-foreground)">${scanData.qrNote}</div>
    </div>

    ${groupTitle('工作时间与联系方式')}
    <div class="card p-4">
      <div class="flex items-center gap-2 mb-3">
        <div class="text-sm font-semibold">工作时间</div>
      </div>
      <div class="space-y-2.5">
        <div class="flex items-start gap-3">
          <span class="text-xs w-20 flex-shrink-0" style="color:var(--muted-foreground)">工作日</span>
          <span class="text-sm">${rechargeData.workdayStart} 至 ${rechargeData.workdayEnd}</span>
        </div>
        <div class="flex items-start gap-3">
          <span class="text-xs w-20 flex-shrink-0" style="color:var(--muted-foreground)">工作时段</span>
          <span class="text-sm font-mono">${rechargeData.startTime} - ${rechargeData.endTime}</span>
        </div>
        <div class="flex items-start gap-3">
          <span class="text-xs w-20 flex-shrink-0" style="color:var(--muted-foreground)">非工作时间</span>
          <span class="text-sm" style="color:var(--muted-foreground)">${rechargeData.offWorkNote}</span>
        </div>
      </div>
    </div>

    <div class="card p-4">
      <div class="flex items-center gap-2 mb-3">
        <div class="text-sm font-semibold">开票说明</div>
      </div>
      <div class="text-sm whitespace-pre-wrap leading-relaxed" style="color:var(--muted-foreground)">${rechargeData.invoiceTaxNote}</div>
    </div>

    <div class="card p-4">
      <div class="flex items-center gap-2 mb-3">
        <div class="text-sm font-semibold">退款说明</div>
      </div>
      <div class="text-sm whitespace-pre-wrap leading-relaxed" style="color:var(--muted-foreground)">${rechargeData.refundNote}</div>
    </div>

    <div class="card p-4">
      <div class="flex items-center gap-2 mb-3">
        <div class="text-sm font-semibold">其他咨询联系方式说明</div>
      </div>
      <div class="text-sm whitespace-pre-wrap leading-relaxed" style="color:var(--muted-foreground)">${rechargeData.otherContactNote}</div>
    </div>
  </div>`;
}
function onScanQrFile(input){
  const file = input.files && input.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    if(_scanQrUploadType==='alipay'){
      scanData.qrAlipay = e.target.result;
    } else {
      scanData.qrWechat = e.target.result;
    }
    renderPage();
  };
  reader.readAsDataURL(file);
}
function saveScanSettings(){
  scanData.enabled = document.getElementById('scan-enabled').checked;
  scanData.qrNote = document.getElementById('scan-qrNote').value;
  rechargeData.workdayStart = document.getElementById('scan-workdayStart').value;
  rechargeData.workdayEnd = document.getElementById('scan-workdayEnd').value;
  rechargeData.startTime = document.getElementById('scan-startTime').value;
  rechargeData.endTime = document.getElementById('scan-endTime').value;
  rechargeData.offWorkNote = document.getElementById('scan-offWorkNote').value;
  rechargeData.invoiceTaxNote = (document.getElementById('scan-invoiceTaxNote')||{}).value || '';
  rechargeData.refundNote = (document.getElementById('scan-refundNote')||{}).value || '';
  rechargeData.otherContactNote = document.getElementById('scan-otherNote').value;
  scanEditMode = false;
  renderPage();
  showToast('保存成功','扫码充值设置已更新');
}

// ===== 模型配置（运营端） =====
// 模型配置中文名映射
const MODEL_CN_NAMES = {
  'qwen2.5-72b':'通义千问2.5-72B','qwen-plus':'通义千问Plus','qwen-turbo':'通义千问Turbo',
  'qwen-vl-max':'通义千问VL-Max','wanx-v1':'通义万相','glm-4-plus':'智谱GLM-4-Plus',
  'glm-4-flash':'智谱GLM-4-Flash','cogview-3':'智谱CogView-3','minimax-abab6.5':'MiniMax-Abab6.5',
  'minimax-voice':'MiniMax-Voice','embedding-v2':'通义向量化V2','bge-reranker':'BGE重排序'
};
// 模型配置数据
const MODEL_CONFIG = MARKET_MODELS.map((m,i)=>({
  id:m.id,
  cnName:MODEL_CN_NAMES[m.name]||m.name,
  name:m.name,
  desc:m.desc,
  type:m.type,
  vendor:m.vendor,
  logo: m.vendorSymbol || m.cnName?.[0] || 'M',
  logoColor: m.vendorColor || '#6366F1',
  billingItems:m.type==='图片生成'||m.type==='语音合成'?1:2,
  priceUnit:m.type==='图片生成'?'¥/张':(m.type==='语音合成'?'¥/千字':(m.type==='向量化'?'¥/千Token':'¥/千Token')),
  price:m.type==='图片生成'?0.5:(m.type==='语音合成'?0.3:(m.type==='向量化'?0.02:0.015)),
  ratio:m.ratio,
  discount:m.ratio===0?'免费':(DISCOUNT_THRESHOLD[MODELS.find(k=>MODEL_SHORT[k]===m.name)||'']!==undefined?`${(DISCOUNT_THRESHOLD[MODELS.find(k=>MODEL_SHORT[k]===m.name)||'']*10).toFixed(1)}折`:'未设置'),
  remark:m.tags.map(t=>t.t).join('、')||'—',
  createdAt:`2026-0${(i%6)+1}-${(i%28)+1} 10:${(i*7)%60<10?'0':''}${(i*7)%60}:00`
}));

function discountThreshold(){
  return `<div class="card overflow-hidden">
    <div class="flex items-center justify-between p-3 flex-wrap gap-2" style="border-bottom:1px solid var(--border)">
      <div class="flex items-center gap-2">
        <button class="btn btn-primary btn-sm" onclick="showModelConfigForm()">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          新增
        </button>
      </div>
      <button class="btn btn-outline btn-sm" onclick="showExportConfirm('model-config', ${MODEL_CONFIG.length})">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
        导出
      </button>
    </div>
    <table data-export-type="model-config"><thead><tr><th style="width:40px">${getExportAllCheckbox('model-config', MODEL_CONFIG.map(m=>m.id))}</th><th style="width:60px">Logo</th><th>模型中文名</th><th>模型描述</th><th>模型类型</th><th>所属产品</th><th>计费条目数(条)</th><th>单价单位</th><th>折扣情况</th><th>创建日期</th><th>备注</th><th>操作</th></tr></thead>
    <tbody>${MODEL_CONFIG.map(m=>`<tr>
      <td>${getExportCheckbox('model-config', m.id)}</td>
      <td>
        <div class="flex items-center justify-center">
          ${m.logoImg ? `<img src="${m.logoImg}" class="w-9 h-9 rounded-lg object-cover" style="border:1px solid var(--border)">` : `<div class="w-9 h-9 rounded-lg flex items-center justify-center text-white font-semibold text-sm" style="background:${m.logoColor}">${m.logo}</div>`}
        </div>
      </td>
      <td class="font-medium" style="white-space:nowrap">${m.cnName}</td>
      <td style="color:var(--muted-foreground);font-size:12px;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${m.desc}">${m.desc}</td>
      <td><span class="badge b-neutral" style="font-size:10px">${m.type}</span></td>
      <td style="color:var(--muted-foreground)">${m.vendor}</td>
      <td>${m.billingItems}</td>
      <td style="font-family:monospace;font-size:12px">${m.priceUnit}</td>
      <td>${m.discount==='免费'?'<span class="badge b-success" style="font-size:10px">免费</span>':m.discount==='未设置'?'<span style="color:var(--muted-foreground);font-size:12px">未设置</span>':`<span class="badge b-primary" style="font-size:10px">${m.discount}</span>`}</td>
      <td style="color:var(--muted-foreground);font-size:12px">${m.createdAt}</td>
      <td style="color:var(--muted-foreground);font-size:12px;max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${m.remark}</td>
      <td>
        <div class="flex items-center gap-1">
          <button class="btn btn-ghost btn-sm" onclick="showModelConfigForm(${m.id})">编辑</button>
          <button class="btn btn-ghost btn-sm" style="color:var(--destructive)" onclick="deleteModelConfig(${m.id})">删除</button>
        </div>
      </td>
    </tr>`).join('')}</tbody></table>
    ${paginationHTML(MODEL_CONFIG.length,1,10)}
  </div>`;
}

function showModelConfigDetail(id){
  const m = MODEL_CONFIG.find(x=>x.id===id);
  if(!m) return;
  showModal(`<div class="p-5" style="width:680px;max-height:85vh;overflow-y:auto">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-base font-semibold">模型配置详情</h3>
      <button class="icon-btn" onclick="closeModal()"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>
    <div class="flex items-center gap-4 mb-4 p-3 rounded-lg" style="background:var(--muted)">
      <div class="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-xl" style="background:${m.logoColor}">
        ${m.logoImg ? `<img src="${m.logoImg}" class="w-full h-full rounded-xl object-cover">` : m.logo}
      </div>
      <div>
        <div class="font-semibold">${m.cnName}</div>
        <div class="text-xs mt-1" style="color:var(--muted-foreground)">${m.name}</div>
      </div>
    </div>
    <div class="space-y-3">
      <div class="flex justify-between py-2" style="border-bottom:1px solid var(--border)"><span style="color:var(--muted-foreground)" class="text-xs">模型中文名</span><span class="text-sm font-medium">${m.cnName}</span></div>
      <div class="py-2" style="border-bottom:1px solid var(--border)"><span style="color:var(--muted-foreground)" class="text-xs block mb-1">模型描述</span><span class="text-sm">${m.desc}</span></div>
      <div class="flex justify-between py-2" style="border-bottom:1px solid var(--border)"><span style="color:var(--muted-foreground)" class="text-xs">模型类型</span><span class="badge b-neutral">${m.type}</span></div>
      <div class="flex justify-between py-2" style="border-bottom:1px solid var(--border)"><span style="color:var(--muted-foreground)" class="text-xs">所属产品</span><span class="text-sm">${m.vendor}</span></div>
      <div class="flex justify-between py-2" style="border-bottom:1px solid var(--border)"><span style="color:var(--muted-foreground)" class="text-xs">计费条目数</span><span class="text-sm">${m.billingItems} 条</span></div>
      <div class="flex justify-between py-2" style="border-bottom:1px solid var(--border)"><span style="color:var(--muted-foreground)" class="text-xs">单价单位</span><span class="text-sm font-mono">${m.priceUnit}</span></div>
      <div class="flex justify-between py-2" style="border-bottom:1px solid var(--border)"><span style="color:var(--muted-foreground)" class="text-xs">单价倍率</span><span class="text-sm font-mono">${m.ratio}</span></div>
      <div class="flex justify-between py-2" style="border-bottom:1px solid var(--border)"><span style="color:var(--muted-foreground)" class="text-xs">折扣情况</span><span class="text-sm">${m.discount}</span></div>
      <div class="flex justify-between py-2"><span style="color:var(--muted-foreground)" class="text-xs">备注</span><span class="text-sm">${m.remark}</span></div>
    </div>
  </div>`);
}

function showModelConfigForm(id){
  const isEdit = id !== undefined;
  const m = isEdit ? MODEL_CONFIG.find(x=>x.id===id) : null;
  window._currentLogoImg = null;
  const title = isEdit ? '编辑模型配置' : '新增模型配置';
  const allVendors = [...new Set(MARKET_MODELS.map(x=>x.vendor))];
  const marketModel = isEdit ? MARKET_MODELS.find(x=>x.id===id) : null;
  const currentModelId = marketModel ? marketModel.modelId : '';
  const currentThreshold = (() => {
    if(!isEdit || !m || m.ratio===0) return '';
    const mKey = MODELS.find(k => MODEL_SHORT[k] === m.name);
    return mKey && DISCOUNT_THRESHOLD[mKey] !== undefined ? DISCOUNT_THRESHOLD[mKey] : '';
  })();
  showModal(`<div style="width:680px;max-height:85vh;overflow-y:auto">
    <div class="flex items-center justify-between p-4" style="border-bottom:1px solid var(--border);position:sticky;top:0;background:var(--card);z-index:10">
      <h3 class="text-base font-semibold">${title}</h3>
      <button class="icon-btn" onclick="closeModal()"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>
    <div class="p-4 space-y-4">
      <div class="form-item">
        <label class="form-label">模型Logo</label>
        <div class="flex items-center gap-4">
          <div id="logo-preview" class="w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-xl" style="background:${m?m.logoColor:'#6366F1'};border:2px solid var(--border)">
            ${m && m.logoImg ? `<img src="${m.logoImg}" class="w-full h-full rounded-xl object-cover">` : (m?m.logo:'M')}
          </div>
          <div class="flex flex-col gap-2">
            <input type="file" id="logo-upload" accept="image/*" style="display:none" onchange="handleLogoUpload(this)">
            <button class="btn btn-outline btn-sm" onclick="document.getElementById('logo-upload').click()">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              上传Logo
            </button>
            <div class="text-xs" style="color:var(--muted-foreground)">
              支持 PNG/JPG
            </div>
          </div>
        </div>
      </div>
      <div class="form-item">
        <label class="form-label">选择模型 <span style="color:var(--destructive)">*</span></label>
        <select class="input w-full" id="mf-modelId" onchange="onModelIdSelect(this)">
          <option value="">请选择模型</option>
          ${MARKET_MODELS.map(mm=>`<option value="${mm.modelId}" ${currentModelId===mm.modelId?'selected':''}>${mm.cnName}</option>`).join('')}
        </select>
      </div>
      <div class="form-item">
        <label class="form-label">模型中文名 <span style="color:var(--destructive)">*</span></label>
        <input id="mf-cnName" class="input w-full" value="${m?m.cnName:''}" placeholder="选择模型后自动带出" readonly style="background:var(--muted)">
      </div>
      <div class="form-item">
        <label class="form-label">模型描述</label>
        <textarea class="input w-full" rows="2" placeholder="请输入模型描述">${m?m.desc:''}</textarea>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div class="form-item">
          <label class="form-label">模型类型 <span style="color:var(--destructive)">*</span></label>
          <input id="mf-type" class="input w-full" value="${m?m.type:''}" placeholder="选择模型后自动带出" readonly style="background:var(--muted)">
        </div>
        <div class="form-item">
          <label class="form-label">所属产品 <span style="color:var(--destructive)">*</span></label>
          <select class="input w-full">${allVendors.map(v=>`<option ${m&&m.vendor===v?'selected':''}>${v}</option>`).join('')}</select>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div class="form-item">
          <label class="form-label">计费条目数</label>
          <input class="input w-full" type="number" min="1" max="5" value="${m?m.billingItems:2}">
        </div>
        <div class="form-item">
          <label class="form-label">单价单位</label>
          <input class="input w-full" value="${m?m.priceUnit:'¥/千Token'}" placeholder="如 ¥/千Token、¥/张">
        </div>
      </div>
      <div class="form-item">
        <label class="form-label">单价倍率</label>
        <input class="input w-full" type="number" step="0.1" min="0" value="${m?m.ratio:0}" placeholder="如 23、18.5">
      </div>
      <div class="form-item">
        <label class="form-label">折扣阈值 <span style="color:var(--destructive)">*</span></label>
        <input id="mf-threshold" class="input w-full" type="number" step="0.05" min="0.01" max="1" value="${currentThreshold}" placeholder="0.01~1.00，如0.80表示8.0折">
        <div class="text-xs mt-1" style="color:var(--muted-foreground)">代理给用户设置的折扣不得低于此阈值（1.00=原价，0.80=8折）</div>
      </div>
      <div class="form-item">
        <label class="form-label">备注</label>
        <input class="input w-full" value="${m&&m.remark!=='—'?m.remark:''}" placeholder="如 价格下调、即将下架">
      </div>
    </div>
    <div class="flex justify-end gap-2 p-4" style="border-top:1px solid var(--border)">
      <button class="btn btn-primary btn-sm" onclick="closeModal()">取消</button>
      <button class="btn btn-primary" onclick="saveModelConfig(${isEdit?id:'null'})">${isEdit?'保存':'创建'}</button>
    </div>
  </div>`);
}

function onModelIdSelect(select){
  const modelId = select.value;
  const m = MARKET_MODELS.find(x=>x.modelId===modelId);
  const cnNameInput = document.getElementById('mf-cnName');
  const typeInput = document.getElementById('mf-type');
  const logoPreview = document.getElementById('logo-preview');
  if(m){
    cnNameInput.value = MODEL_CN_NAMES[m.name] || m.name;
    typeInput.value = m.type;
    // 更新logo预览
    if(logoPreview && !window._currentLogoImg){
      logoPreview.style.background = m.vendorColor || '#6366F1';
      logoPreview.innerHTML = m.vendorSymbol || 'M';
    }
  } else {
    cnNameInput.value = '';
    typeInput.value = '';
  }
}

// Logo上传处理
function handleLogoUpload(input){
  const file = input.files[0];
  if(!file) return;
  
  // 检查文件类型
  if(!file.type.startsWith('image/')){
    showToast('上传失败', '请上传图片文件', { type: 'warning' });
    return;
  }
  
  // 检查文件大小（最大2MB）
  if(file.size > 2 * 1024 * 1024){
    showToast('上传失败', '图片大小不能超过 2MB', { type: 'warning' });
    return;
  }
  
  const reader = new FileReader();
  reader.onload = function(e){
    const preview = document.getElementById('logo-preview');
    if(preview){
      preview.style.background = 'transparent';
      preview.innerHTML = `<img src="${e.target.result}" class="w-full h-full rounded-xl object-cover">`;
    }
    window._currentLogoImg = e.target.result;
    showToast('上传成功', 'Logo图片已更新');
  };
  reader.readAsDataURL(file);
}

// 保存模型配置
function saveModelConfig(id){
  const isEdit = id !== null;
  const logoImg = window._currentLogoImg || null;
  
  if(isEdit){
    const m = MODEL_CONFIG.find(x=>x.id===id);
    if(m && logoImg){
      m.logoImg = logoImg;
    }
  }
  
  window._currentLogoImg = null;
  closeModal();
  renderPage();
  showToast(isEdit?'修改成功':'新增成功', '模型配置已' + (isEdit?'更新':'创建'));
}

function deleteModelConfig(id){
  const m = MODEL_CONFIG.find(x=>x.id===id);
  if(!m) return;
  showModal(`<div style="width:480px" class="p-5">
    <h3 class="text-base font-semibold mb-2">确认删除</h3>
    <p class="text-sm mb-4" style="color:var(--muted-foreground)">确定要删除模型配置「${m.cnName}」吗？此操作不可撤销。</p>
    <div class="flex justify-end gap-2">
      <button class="btn btn-primary btn-sm" onclick="closeModal()">取消</button>
      <button class="btn btn-destructive" onclick="closeModal();showToast('删除成功','模型配置已删除')">确认删除</button>
    </div>
  </div>`);
}

// ===== 充值工单（补充代理商名 + 右下角提示） =====
function topupAdmin(){
  const pending=ORDERS.filter(o=>o.status==='pending');
  const completed=ORDERS.filter(o=>o.status==='completed');
  return `<div class="grid grid-cols-4 gap-3 mb-4">
    ${statCard('receipt','chart-4','待处理',pending.length)}
    ${statCard('coins','chart-1','待处理金额','¥'+pending.reduce((s,o)=>s+o.amount,0).toFixed(0))}
    ${statCard('activity','chart-2','今日已处理',completed.length)}
    ${statCard('trending','chart-3','累计充值','¥'+ORDERS.reduce((s,o)=>s+o.amount,0).toFixed(0))}
  </div>
  <div class="card overflow-hidden">
    <div class="flex items-center gap-2 p-3 flex-wrap" style="border-bottom:1px solid var(--border)">
      <select class="input" style="width:120px"><option>全部</option><option>今天</option><option>近7天</option><option>近30天</option><option>自定义</option></select>
      <select class="input" style="width:100px"><option>全部状态</option><option>待处理</option><option>已完成</option><option>已拒绝</option></select>
      <select class="input" style="width:140px"><option>全部代理</option><option>partner_lisi</option><option>partner_wang</option><option>直营</option></select>
      <select class="input" style="width:120px"><option>全部用户</option><option>zhangsan</option><option>wangwu</option><option>zhaoliu</option><option>qianqi</option></select>
      <input class="input" style="width:180px" placeholder="付款方 / 交易单号">
      <button class="btn btn-outline btn-sm ml-auto" onclick="showExportConfirm('topup-admin', ${ORDERS.length})">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
        导出
      </button>
    </div>
    <table data-export-type="topup-admin"><thead><tr><th style="width:40px">${getExportAllCheckbox('topup-admin', ORDERS.map(o=>o.id))}</th><th>工单号</th><th>流水号</th><th>用户</th><th>代理商</th><th>金额(¥)</th><th>支付时间</th><th>到账时间</th><th>状态</th><th>详情</th><th>操作</th></tr></thead>
    <tbody>${ORDERS.map(o=>`<tr ${o.status==='pending'?'style="background:color-mix(in srgb,var(--warning) 4%,transparent)"':''}>
      <td>${getExportCheckbox('topup-admin', o.id)}</td>
      <td style="font-family:monospace;font-size:12px">${o.id}</td>
      <td style="font-family:monospace;font-size:12px;color:var(--muted-foreground)">${o.serialNo}</td>
      <td>${o.user}</td>
      <td>${o.agent}<br><span class="text-[10px]" style="color:var(--muted-foreground)">${o.agentCompany}</span></td>
      <td class="font-semibold">${o.amount}</td>
      <td style="color:var(--muted-foreground)">${o.time}</td>
      <td style="color:var(--muted-foreground)">${o.arriveTime||'—'}</td>
      <td><span class="badge ${ST[o.status].c}">${ST[o.status].l}</span></td>
      <td><a href="javascript:;" onclick="showTopupDetail('${o.id}')" style="color:var(--primary);font-size:12px">查看</a></td>
      <td>${o.status==='pending'?`<button class="btn btn-primary btn-sm" onclick="reviewOrder('${o.id}')">核查</button>`:'<span style="color:#d4d4d8;font-size:12px">已处理</span>'}</td>
    </tr>`).join('')}</tbody></table>
    ${paginationHTML(ORDERS.length,1,10)}
  </div>`;
}

function reviewOrder(id){
  const o=ORDERS.find(x=>x.id===id); if(!o)return;
  const fileRows = o.files && o.files.length ? o.files.map(f=>`
    <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;background:#fff;border:1px solid var(--border)">
      <svg class="w-4 h-4 flex-shrink-0" style="color:var(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
      <span class="text-sm truncate flex-1">${f}</span>
      <span class="text-xs flex-shrink-0" style="color:var(--muted-foreground)">点击预览</span>
      <svg class="w-3.5 h-3.5 flex-shrink-0" style="color:var(--muted-foreground)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
    </div>`).join('') : '<div class="text-sm" style="color:var(--muted-foreground)">未上传凭证</div>';
  const row = (l,v,cls)=>`<div><div class="text-xs mb-1" style="color:var(--muted-foreground)">${l}</div><div class="text-sm font-medium" style="color:var(--foreground);${cls||''};word-break:break-all">${v}</div></div>`;
  const secL = t=>`<div class="flex items-center gap-2 mb-3"><span style="width:3px;height:13px;border-radius:2px;background:#c9cdd4"></span><span class="text-sm font-semibold" style="color:var(--foreground)">${t}</span></div>`;
  const divider = '<div style="height:1px;background:var(--border);margin:15px 0"></div>';
  showModal(`<div class="p-5" style="max-width:640px">
    <!-- 头部金额区域 -->
    <div class="rounded-2xl p-6 mb-4 text-center relative" style="background:#f0f4ff">
      <div class="absolute" style="top:16px;right:16px">
        <span class="badge ${ST[o.status].c}" style="font-size:12px;padding:4px 12px">${ST[o.status].l}</span>
      </div>
      <div class="text-sm mb-2" style="color:var(--muted-foreground)">充值金额</div>
      <div class="text-3xl font-bold" style="color:var(--primary);font-family:monospace">¥${o.amount}</div>
      <div class="text-xs mt-3" style="color:var(--muted-foreground);display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:wrap">
        <span class="badge ${o.type!=='transfer'?'b-primary':'b-info'}" style="font-size:11px;padding:2px 9px">${o.type!=='transfer'?'扫码充值（微信）':'对公转账'}</span>
        <span>工单号 ${o.id}</span>
        <span style="color:var(--muted-foreground)">·</span>
        <span>流水号 ${o.serialNo}</span>
      </div>
    </div>
    <!-- 用户信息卡片 -->
    <div class="rounded-2xl mb-4" style="border:1px solid var(--border);overflow:hidden">
      <div class="flex items-center gap-2 px-4 py-2.5" style="background:var(--muted);border-bottom:1px solid var(--border)">
        <span style="font-size:14px">👤</span>
        <span class="text-sm font-semibold">用户信息</span>
      </div>
      <div class="p-4">
        <div class="space-y-3">
          ${row('用户',o.user)}
          ${row('代理商',`${o.agent} (${o.agentCompany})`)}
          ${row('当前余额','¥0.24')}
        </div>
      </div>
    </div>
    <!-- 付款信息与时间信息 -->
    <div class="rounded-2xl mb-4" style="border:1px solid var(--border);overflow:hidden">
      <div class="flex items-center gap-2 px-4 py-2.5" style="background:var(--muted);border-bottom:1px solid var(--border)">
        <span style="font-size:14px">💳</span>
        <span class="text-sm font-semibold">付款信息</span>
      </div>
      <div class="p-4">
        <div class="space-y-3">
          ${row('付款方名称',o.payer)}
          ${row('交易单号',`<span style="font-family:monospace">${o.serial}</span>`)}
        </div>
        ${divider}${secL('时间信息')}
        <div class="space-y-3">
          ${row('支付时间',o.payTime||o.time)}
          ${row('提交时间',o.time)}
          ${o.arriveTime!=='—'?row('到账时间',o.arriveTime,'color:var(--chart-2)'):''}
        </div>
      </div>
    </div>
    <!-- 付款备注 -->
    <div class="rounded-2xl mb-4" style="border:1px solid var(--border);overflow:hidden">
      <div class="flex items-center gap-2 px-4 py-2.5" style="background:var(--muted);border-bottom:1px solid var(--border)">
        <span style="font-size:14px">📝</span>
        <span class="text-sm font-semibold">付款备注</span>
      </div>
      <div class="p-4">
        <div class="text-sm font-medium" style="color:var(--foreground)">${o.note||'—'}</div>
      </div>
    </div>
    <!-- 付款凭证 -->
    <div class="rounded-2xl mb-5" style="border:1px solid var(--border);overflow:hidden">
      <div class="flex items-center gap-2 px-4 py-2.5" style="background:var(--muted);border-bottom:1px solid var(--border)">
        <span style="font-size:14px">📎</span>
        <span class="text-sm font-semibold">付款凭证</span>
      </div>
      <div class="p-4">
        <div class="space-y-2">${fileRows}</div>
      </div>
    </div>
    <!-- 核查处理 -->
    <div class="rounded-2xl mb-4" style="overflow:hidden;background:color-mix(in srgb,var(--primary) 4%,transparent);border:1px solid color-mix(in srgb,var(--primary) 18%,var(--border))">
      <div class="flex items-center gap-2 px-4 py-2.5" style="border-bottom:1px solid color-mix(in srgb,var(--primary) 18%,var(--border))">
        <span style="font-size:14px">🔍</span>
        <span class="text-sm font-semibold" style="color:var(--primary)">核查处理</span>
      </div>
      <div class="p-4">
        <div class="mb-3">
          <label class="flex items-center gap-2 mb-2 cursor-pointer">
            <input type="radio" name="rr" value="ok" checked onchange="togRR()">
            <span class="text-sm">确认到账，到账金额 ¥<input type="number" value="${o.amount}" step="0.01" class="input" style="width:80px;display:inline-block;font-size:13px;padding:4px 8px"></span>
          </label>
          <div class="text-xs ml-6 mb-2" id="bp" style="color:var(--success)">余额将变为：¥${(0.24+o.amount).toFixed(2)}</div>
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="rr" value="no" onchange="togRR()">
            <span class="text-sm">未到账，拒绝</span>
          </label>
        </div>
        <input class="input mb-3" id="im" placeholder="内部备注（选填）" style="font-size:13px">
        <div class="flex justify-end gap-2 pt-3" style="border-top:1px solid color-mix(in srgb,var(--primary) 15%,var(--border))">
          <button class="btn btn-outline btn-sm" onclick="closeModal()">取消</button>
          <button class="btn btn-primary btn-sm" onclick="confirmReview('${o.id}')">确认处理</button>
        </div>
      </div>
    </div>
  </div>`);
}

function togRR(){
  const no=document.querySelector('input[value="no"]').checked;
  document.getElementById('bp').style.display=no?'none':'block';
}

function confirmReview(id){
  const no=document.querySelector('input[value="no"]').checked;
  const o=ORDERS.find(x=>x.id===id); if(!o)return;
  o.status=no?'rejected':'completed';
  o.reviewTime=nowStr();
  const im=document.getElementById('im');
  o.reviewRemark = no
    ? '未查询到该笔转账记录，请核实后重新提交'
    : (im&&im.value.trim())||'已核查，金额无误，已到账';
  closeModal(); renderPage(); renderNav();
  if(!no){
    showToast('充值到账通知', `用户 ${o.user} 的充值 ¥${o.amount} 已到账，余额已更新`);
  }else{
    showToast('充值已拒绝', `用户 ${o.user} 的充值工单已拒绝，用户将收到通知`);
  }
  updateNotifBadge();
}

function nowStr(){
  const d=new Date();
  const p=n=>String(n).padStart(2,'0');
  return `${d.getFullYear()}-${p(d.getMonth()+1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
}

// ===== 联系工单（运营端） =====
let contactFilter = {type:'all',status:'all'};
function contactReqs(){
  const typeMap = {invoice:'开票',refund:'退款',other:'其他'};
  const statusMap = {pending:{l:'未处理',c:'b-warning'},contacted:{l:'已处理',c:'b-success'},refunded:{l:'已处理',c:'b-success'}};
  let list = CONTACT_REQS.slice();
  if(contactFilter.type!=='all') list = list.filter(r=>r.type===contactFilter.type);
  if(contactFilter.status!=='all') list = list.filter(r=>r.status===contactFilter.status);
  const pending = CONTACT_REQS.filter(r=>r.status==='pending');
  const invoiceCount = CONTACT_REQS.filter(r=>r.type==='invoice').length;
  const refundCount = CONTACT_REQS.filter(r=>r.type==='refund').length;
  const otherCount = CONTACT_REQS.filter(r=>r.type==='other').length;
  return `<div class="grid grid-cols-4 gap-3 mb-4">
    ${statCard('phone','chart-4','待处理',pending.length)}
    ${statCard('receipt','chart-1','开票工单',invoiceCount)}
    ${statCard('refund','chart-3','退款工单',refundCount)}
    ${statCard('question','chart-2','其他工单',otherCount)}
  </div>
  <div class="card overflow-hidden">
    <div class="flex items-center gap-2 p-3" style="border-bottom:1px solid var(--border)">
      <select class="input" style="width:100px" onchange="contactFilter.type=this.value;renderPage()">
        <option value="all" ${contactFilter.type==='all'?'selected':''}>全部类型</option>
        <option value="invoice" ${contactFilter.type==='invoice'?'selected':''}>开票</option>
        <option value="refund" ${contactFilter.type==='refund'?'selected':''}>退款</option>
        <option value="other" ${contactFilter.type==='other'?'selected':''}>其他</option>
      </select>
      <select class="input" style="width:100px" onchange="contactFilter.status=this.value;renderPage()">
        <option value="all" ${contactFilter.status==='all'?'selected':''}>全部状态</option>
        <option value="pending" ${contactFilter.status==='pending'?'selected':''}>未处理</option>
        <option value="contacted" ${contactFilter.status==='contacted'?'selected':''}>已处理</option>
      </select>
      <input class="input" style="width:180px" placeholder="搜索工单号或用户..." oninput="contactSearch(this.value)">
      <button class="btn btn-outline btn-sm ml-auto" onclick="showExportConfirm('contact-reqs', ${list.length})">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
        导出
      </button>
    </div>
    <table data-export-type="contact-reqs"><thead><tr><th style="width:40px">${getExportAllCheckbox('contact-reqs', list.map(r=>r.id))}</th><th>工单号</th><th>提交时间</th><th>用户</th><th>类型</th><th>联系人</th><th>电话</th><th>邮箱</th><th>备注</th><th>状态</th><th>操作</th></tr></thead>
    <tbody id="contact-tbody">${list.map(r=>`<tr ${r.status==='pending'?'style="background:color-mix(in srgb,var(--warning) 4%,transparent)"':''}>
      <td>${getExportCheckbox('contact-reqs', r.id)}</td>
      <td style="font-family:monospace;font-size:12px">${r.id}</td>
      <td style="color:var(--muted-foreground)">${r.time}</td>
      <td>${r.user}</td>
      <td><span class="badge ${contactBadgeMap[r.type]}">${typeMap[r.type]}</span></td>
      <td>${r.name}</td>
      <td style="color:var(--muted-foreground)">${encField('phone', r.phone)}</td>
      <td style="color:var(--muted-foreground);font-size:12px">${encField('email', r.email)}</td>
      <td style="color:var(--muted-foreground);font-size:12px;max-width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${r.note||'—'}</td>
      <td><span class="badge ${statusMap[r.status].c}">${statusMap[r.status].l}</span></td>
      <td>${r.status==='pending'
        ? (r.type==='refund'?`<button class="btn btn-primary btn-sm" onclick="showRefundProcess('${r.id}')">处理退款</button>`
          :(r.type==='invoice'?`<button class="btn btn-primary btn-sm" onclick="showInvoiceProcess('${r.id}')">处理开票</button>`
          :`<button class="btn btn-primary btn-sm" onclick="showContactProcess('${r.id}')">处理其他</button>`))
        : (r.type==='refund'?`<span class="copy-link" onclick="showRefundDetail('${r.id}')">查看详情</span>`
          :(r.type==='invoice'?`<span class="copy-link" onclick="showInvoiceDetail('${r.id}')">查看详情</span>`
          :`<span class="copy-link" onclick="showContactDetail('${r.id}')">查看详情</span>`))}</td>
    </tr>`).join('')}</tbody></table>
    ${paginationHTML(list.length,1,10)}
  </div>`;
}

function markContacted(id){
  const r = CONTACT_REQS.find(x=>x.id===id);
  if(r){
    r.status='contacted';
    renderPage();
    showToast('已标记联系',(contactLabelMap[r.type]||'其他')+'工单 '+id+' 已标记为已联系');
  }
}

// 联系工单处理弹窗（统一处理所有类型）
function showContactProcess(id){
  const r = CONTACT_REQS.find(x=>x.id===id);
  if(!r) return;
  const typeMap = {invoice:'开票',refund:'退款',other:'其他'};
  showModal(`<div style="width:680px;max-width:94vw">
    <div class="relative flex items-center justify-center p-4" style="border-bottom:1px solid var(--border)">
      <h3 class="text-base font-semibold">处理其他</h3>
      <button class="icon-btn" style="position:absolute;right:14px" onclick="closeModal()"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>
    <div class="p-4 space-y-4">
      <div class="grid grid-cols-2 gap-3" style="font-size:13px">
        <div><div class="text-xs mb-1" style="color:var(--muted-foreground)">工单号</div><div class="font-mono">${r.id}</div></div>
        <div><div class="text-xs mb-1" style="color:var(--muted-foreground)">提交时间</div><div style="color:var(--muted-foreground)">${r.time}</div></div>
        <div><div class="text-xs mb-1" style="color:var(--muted-foreground)">用户</div><div class="font-medium">${r.user}</div></div>
        <div><div class="text-xs mb-1" style="color:var(--muted-foreground)">工单类型</div><div><span class="badge ${contactBadgeMap[r.type]||'b-neutral'}">${typeMap[r.type]||'其他'}</span></div></div>
        <div><div class="text-xs mb-1" style="color:var(--muted-foreground)">联系人</div><div>${r.name}</div></div>
        <div><div class="text-xs mb-1" style="color:var(--muted-foreground)">联系电话</div><div style="color:var(--muted-foreground)">${encField('phone', r.phone)}</div></div>
        ${r.email?`<div style="grid-column:span 2"><div class="text-xs mb-1" style="color:var(--muted-foreground)">邮箱</div><div class="font-mono" style="color:var(--chart-2)">${encField('email', r.email)}</div></div>`:''}
      </div>
      <div class="rounded-lg p-3" style="background:var(--muted)">
        <div class="text-xs font-semibold mb-1.5" style="color:var(--muted-foreground)">问题描述</div>
        <div class="text-sm whitespace-pre-wrap" style="line-height:1.7">${r.note||'—'}</div>
      </div>
      <div class="rounded-lg p-3" style="background:rgba(99,102,241,0.05);border:1px solid rgba(99,102,241,0.15)">
        <div class="text-xs font-semibold mb-2" style="color:var(--primary)">处理备注</div>
        <textarea class="input w-full" rows="2" placeholder="请输入处理备注（选填）" id="contact-process-note"></textarea>
      </div>
    </div>
    <div class="flex items-center justify-end gap-3 p-4" style="border-top:1px solid var(--border)">
      <button class="btn btn-primary btn-sm" onclick="closeModal()">取消</button>
      <button class="btn btn-primary btn-sm" onclick="submitContactProcess('${r.id}')">确认处理</button>
    </div>
  </div>`);
}

function submitContactProcess(id){
  const r = CONTACT_REQS.find(x=>x.id===id);
  if(r){
    r.status='contacted';
    const note = document.getElementById('contact-process-note');
    if(note && note.value.trim()){
      r.processNote = note.value.trim();
    }
    closeModal();
    renderPage();
    showToast('处理完成',(contactLabelMap[r.type]||'其他')+'工单 '+id+' 已处理');
  }
}

// 工单详情（运营端，只读）
function showContactDetail(id){
  const r = CONTACT_REQS.find(x=>x.id===id);
  if(!r) return;
  const statusMap = {pending:{l:'待处理',c:'b-warning'},contacted:{l:'已处理',c:'b-success'},refunded:{l:'已处理',c:'b-success'}};
  const st = statusMap[r.status]||{l:r.status,c:'b-neutral'};
  const typeMap = {invoice:'开票',refund:'退款',other:'其他'};
  const infoRow = (k,v)=>`<div class="flex items-center justify-between py-1.5 text-sm gap-4"><span class="text-xs flex-shrink-0" style="color:var(--muted-foreground)">${k}</span><span class="text-xs font-medium" style="text-align:right;word-break:break-all">${v||'—'}</span></div>`;
  const processInfo = (r.status==='contacted'||r.status==='refunded') ? `<div class="rounded-lg p-3 mt-3" style="border:1px solid color-mix(in srgb,#16a34a 38%,var(--border));background:color-mix(in srgb,#16a34a 5%,transparent)">
      <div class="text-xs font-semibold mb-1.5" style="color:#16a34a">运营处理信息</div>
      ${infoRow('处理状态',`<span class="badge ${st.c}">${st.l}</span>`)}
      ${infoRow('处理备注',r.processNote||'—')}
    </div>` : '';

  // 开票类型：关联账单 + 开票金额卡片
  let invoiceBillSection = '';
  let amountCard = '';
  if(r.type==='invoice'){
    const bills = (r.invBills||[]).map(bid=>BILLS.find(b=>b.id===bid)).filter(Boolean);
    const billStatusMap = {billing:{l:'出帐中',c:'b-warning'},unsettled:{l:'未结清',c:'b-danger'},settled:{l:'已结清',c:'b-success'}};
    const totalAmount = bills.reduce((sum,b)=>sum+Number(b.amount||0),0);
    const billRows = bills.length ? bills.map(b=>`
      <tr>
        <td style="font-family:monospace;font-size:12px">${b.id}</td>
        <td class="text-sm">${b.periodLabel}</td>
        <td class="font-medium tabular-nums">¥${b.amount.toFixed(2)}</td>
        <td><span class="badge ${billStatusMap[b.status]?.c||'b-neutral'}">${billStatusMap[b.status]?.l||b.status}</span></td>
      </tr>`).join('') : '<tr><td colspan="4" class="text-center py-4 text-xs" style="color:var(--muted-foreground)">暂无关联账单</td></tr>';
    invoiceBillSection = `<div class="mt-3">
      <div class="flex items-center justify-between mb-2">
        <div class="text-xs font-semibold">关联账单</div>
        <div class="text-xs" style="color:var(--muted-foreground)">共 ${bills.length} 张</div>
      </div>
      <div style="overflow-x:auto">
        <table><thead><tr><th>账单编号</th><th>账期</th><th>金额</th><th>状态</th></tr></thead>
        <tbody>${billRows}</tbody></table>
      </div>
    </div>`;
    amountCard = `<div class="rounded-lg p-4 mb-3" style="background:linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);color:white">
      <div class="text-xs mb-1" style="opacity:0.8">开票金额</div>
      <div class="text-2xl font-bold tabular-nums">¥${totalAmount.toFixed(2)}</div>
    </div>`;
  }

  showModal(`<div class="p-5" style="max-width:${r.type==='invoice'?'900':'680'}px">
    <div class="flex flex-col items-center mb-3">
      <div class="flex items-center gap-2">
        <h3 class="text-base font-semibold">${typeMap[r.type]||'其他'}工单详情</h3>
        <span class="badge ${st.c}">${st.l}</span>
      </div>
      <p class="text-xs mt-1" style="color:var(--muted-foreground)">工单号 ${r.id}</p>
    </div>
    ${amountCard}
    <div class="rounded-lg p-3 mb-3" style="background:var(--muted)">
      <div class="text-xs font-semibold mb-1.5" style="color:var(--muted-foreground)">申请信息</div>
      ${infoRow('申请用户', r.user)}
      ${infoRow('提交时间', r.time)}
      ${infoRow('工单类型', `<span class="badge ${contactBadgeMap[r.type]||'b-neutral'}">${typeMap[r.type]||'其他'}</span>`)}
      ${infoRow('联系人', r.name)}
      ${infoRow('联系电话', encField('phone', r.phone))}
      ${r.email?infoRow('邮箱', encField('email', r.email)):''}
    </div>
    ${r.type==='invoice'?'':`<div class="rounded-lg p-3 mb-3" style="background:var(--muted)">
      <div class="text-xs font-semibold mb-1.5" style="color:var(--muted-foreground)">问题描述</div>
      <div class="text-sm whitespace-pre-wrap" style="line-height:1.7">${r.note||'—'}</div>
    </div>`}
    ${processInfo}
    ${invoiceBillSection}
    <div class="flex justify-end gap-2 mt-4">
      <button class="btn btn-primary btn-sm" onclick="closeModal()">关闭</button>
    </div>
  </div>`);
}

// 开票工单处理弹窗
function showInvoiceProcess(id){
  const r = CONTACT_REQS.find(x=>x.id===id);
  if(!r || r.type!=='invoice') return;
  const bills = (r.invBills||[]).map(bid=>BILLS.find(b=>b.id===bid)).filter(Boolean);
  const billRows = bills.length ? bills.map(b=>`<div class="flex items-center justify-between py-1.5 text-sm"><span style="color:var(--muted-foreground)">${b.periodLabel}</span><span class="font-medium tabular-nums">¥${b.amount.toFixed(2)}</span></div>`).join('') : '<div class="text-sm" style="color:var(--muted-foreground)">暂无关联账单</div>';
  showModal(`<div style="width:760px;max-width:94vw">
    <div class="relative flex items-center justify-center p-4" style="border-bottom:1px solid var(--border)">
      <h3 class="text-base font-semibold">处理开票</h3>
      <button class="icon-btn" style="position:absolute;right:14px" onclick="closeModal()"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>
    <div class="p-4 space-y-4">
      <div class="grid grid-cols-3 gap-3" style="font-size:13px">
        <div><div class="text-xs mb-1" style="color:var(--muted-foreground)">工单号</div><div class="font-mono">${r.id}</div></div>
        <div><div class="text-xs mb-1" style="color:var(--muted-foreground)">提交时间</div><div style="color:var(--muted-foreground)">${r.time}</div></div>
        <div><div class="text-xs mb-1" style="color:var(--muted-foreground)">用户</div><div class="font-medium">${r.user}</div></div>
        <div><div class="text-xs mb-1" style="color:var(--muted-foreground)">联系人</div><div>${r.name}</div></div>
        <div><div class="text-xs mb-1" style="color:var(--muted-foreground)">联系电话</div><div style="color:var(--muted-foreground)">${encField('phone', r.phone)}</div></div>
        <div><div class="text-xs mb-1" style="color:var(--muted-foreground)">收票邮箱</div><div class="font-mono" style="color:var(--chart-2)">${encField('email', r.email)}</div></div>
      </div>
      <div class="rounded-lg p-3" style="background:var(--muted)">
        <div class="flex items-center justify-between">
          <span class="text-sm" style="color:var(--muted-foreground)">开票金额（含个税，代扣代缴）</span>
          <span class="font-semibold tabular-nums" style="font-size:16px">¥${Number(r.invAmount||0).toFixed(2)}</span>
        </div>
        <div class="flex items-center justify-between pt-2 mt-1" style="border-top:1px solid var(--border)">
          <span class="text-sm" style="color:var(--muted-foreground)">发票抬头（${r.invTitleType||'—'}）</span>
          <span class="text-sm font-medium">${r.invTitle||'—'}</span>
        </div>
        <div class="flex items-center justify-between pt-2 mt-1" style="border-top:1px solid var(--border)">
          <span class="text-sm" style="color:var(--muted-foreground)">发票类型</span>
          <span class="badge ${(INV_TYPE[r.invType]||INV_TYPE.normal).c}">${(INV_TYPE[r.invType]||INV_TYPE.normal).l}</span>
        </div>
      </div>
      <div class="rounded-lg p-3" style="border:1px solid var(--border)">
        <div class="text-xs font-semibold mb-1" style="color:var(--muted-foreground)">关联账单（${bills.length} 张）</div>
        ${billRows}
      </div>
      ${r.note?`<div class="text-xs" style="color:var(--muted-foreground)">备注：${r.note}</div>`:''}
      <div class="rounded-lg p-3" style="background:rgba(99,102,241,0.05);border:1px solid rgba(99,102,241,0.15)">
        <div class="text-xs font-semibold mb-2" style="color:var(--primary)">处理备注</div>
        <textarea class="input w-full" rows="2" placeholder="请输入处理备注（选填，用户和代理可见）" id="inv-process-note"></textarea>
      </div>
    <div class="rounded-lg p-3" style="border:1px dashed var(--border)">
        <div class="text-xs font-semibold mb-1.5" style="color:var(--muted-foreground)">上传发票文件 <span style="color:var(--destructive)">*</span></div>
        <label class="flex items-center gap-2 px-3 py-2.5 rounded-lg cursor-pointer text-xs" style="border:1px dashed var(--border);color:var(--muted-foreground)">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
          <span id="inv-upload-label">选择发票文件（PDF / 图片）</span>
          <input type="file" class="hidden" accept=".pdf,.jpg,.jpeg,.png,.webp" onchange="handleInvoiceFile(this)">
        </label>
        <div id="inv-file-list" class="mt-1.5 text-xs" style="color:var(--chart-2)"></div>
      </div>
    </div>
    <div class="flex items-center justify-end gap-3 p-4" style="border-top:1px solid var(--border)">
      <button class="btn btn-primary btn-sm" onclick="closeModal()">取消</button>
      <button class="btn btn-primary btn-sm" onclick="finishInvoice('${r.id}')">确认处理</button>
    </div>
  </div>`);
}
let _invoiceFile = null;
function handleInvoiceFile(input){
  const f = input.files && input.files[0];
  if(!f) return;
  _invoiceFile = {name:f.name, size:f.size};
  const label = document.getElementById('inv-upload-label');
  const list = document.getElementById('inv-file-list');
  if(label) label.textContent = '重新选择发票文件';
  if(list) list.innerHTML = '<span class="flex items-center gap-1">已上传：'+f.name+'（'+(f.size/1024).toFixed(1)+'KB）</span>';
}
function finishInvoice(id){
  const r = CONTACT_REQS.find(x=>x.id===id);
  if(!r) return;
  if(!_invoiceFile){ showToast('请先上传发票文件','完成开票前需上传发票文件'); return; }
  const now = new Date();
  const at = now.getFullYear()+'-'+String(now.getMonth()+1).padStart(2,'0')+'-'+String(now.getDate()).padStart(2,'0')+' '+String(now.getHours()).padStart(2,'0')+':'+String(now.getMinutes()).padStart(2,'0')+':'+String(now.getSeconds()).padStart(2,'0');
  (r.invBills||[]).forEach(bid=>{ const b=BILLS.find(x=>x.id===bid); if(b && b.inv==='processing') b.inv='issued'; });
  const inv = r.invId ? INVOICES.find(x=>x.id===r.invId) : null;
  if(inv){ inv.status='issued'; inv.arriveTime=at; inv.file=_invoiceFile.name; }
  r.invFile = _invoiceFile.name;
  const invNote = document.getElementById('inv-process-note');
  if(invNote && invNote.value.trim()){
    r.processNote = invNote.value.trim();
  }
  _invoiceFile = null;
  r.status='contacted';
  closeModal();
  renderPage();
  showToast('开票完成',(r.invBills||[]).length+' 张账单已更新为「已开票」，发票已发送至 '+r.email);
}

// 已完成开票工单的详情查看（只读）
function showInvoiceDetail(id){
  const r = CONTACT_REQS.find(x=>x.id===id);
  if(!r || r.type!=='invoice') return;
  const bills = (r.invBills||[]).map(bid=>BILLS.find(b=>b.id===bid)).filter(Boolean);
  const billRows = bills.length ? bills.map(b=>`<div class="flex items-center justify-between py-1.5 text-sm"><span style="color:var(--muted-foreground)">${b.periodLabel}</span><span class="font-medium tabular-nums">¥${b.amount.toFixed(2)}</span></div>`).join('') : '<div class="text-sm" style="color:var(--muted-foreground)">暂无关联账单</div>';
  showModal(`<div style="width:760px;max-width:94vw">
    <div class="flex flex-col items-center p-4" style="padding-bottom:10px">
      <div class="flex items-center gap-2">
        <h3 class="text-base font-semibold">开票工单详情</h3>
        <span class="badge b-success">已开票</span>
      </div>
      <p class="text-xs mt-1" style="color:var(--muted-foreground)">工单号 ${r.id}</p>
    </div>
    <div class="p-4 space-y-4" style="padding-top:2px">
      <div class="grid grid-cols-3 gap-3" style="font-size:13px">
        <div><div class="text-xs mb-1" style="color:var(--muted-foreground)">提交时间</div><div style="color:var(--muted-foreground)">${r.time}</div></div>
        <div><div class="text-xs mb-1" style="color:var(--muted-foreground)">用户</div><div class="font-medium">${r.user}</div></div>
        <div><div class="text-xs mb-1" style="color:var(--muted-foreground)">联系人</div><div>${r.name}</div></div>
        <div><div class="text-xs mb-1" style="color:var(--muted-foreground)">联系电话</div><div style="color:var(--muted-foreground)">${encField('phone', r.phone)}</div></div>
        <div><div class="text-xs mb-1" style="color:var(--muted-foreground)">收票邮箱</div><div class="font-mono" style="color:var(--chart-2)">${encField('email', r.email)}</div></div>
      </div>
      <div class="rounded-lg p-3" style="background:var(--muted)">
        <div class="flex items-center justify-between">
          <span class="text-sm" style="color:var(--muted-foreground)">开票金额（含个税，代扣代缴）</span>
          <span class="font-semibold tabular-nums" style="font-size:16px">¥${Number(r.invAmount||0).toFixed(2)}</span>
        </div>
        <div class="flex items-center justify-between pt-2 mt-1" style="border-top:1px solid var(--border)">
          <span class="text-sm" style="color:var(--muted-foreground)">发票抬头（${r.invTitleType||'—'}）</span>
          <span class="text-sm font-medium">${r.invTitle||'—'}</span>
        </div>
        <div class="flex items-center justify-between pt-2 mt-1" style="border-top:1px solid var(--border)">
          <span class="text-sm" style="color:var(--muted-foreground)">发票类型</span>
          <span class="badge ${(INV_TYPE[r.invType]||INV_TYPE.normal).c}">${(INV_TYPE[r.invType]||INV_TYPE.normal).l}</span>
        </div>
        <div class="flex items-center justify-between pt-2 mt-1" style="border-top:1px solid var(--border)">
          <span class="text-sm" style="color:var(--muted-foreground)">开票结果</span>
          <span class="text-sm font-medium">已开票</span>
        </div>
        <div class="flex items-center justify-between pt-2 mt-1" style="border-top:1px solid var(--border)">
          <span class="text-sm" style="color:var(--muted-foreground)">发票文件</span>
          <span class="text-sm font-medium" style="color:var(--primary)">${r.invFile||'—'}</span>
        </div>
      </div>
      <div class="rounded-lg p-3" style="border:1px solid var(--border)">
        <div class="text-xs font-semibold mb-1" style="color:var(--muted-foreground)">关联账单（${bills.length} 张）</div>
        ${billRows}
      </div>
      ${r.note?`<div class="text-xs" style="color:var(--muted-foreground)">备注：${r.note}</div>`:''}
      ${r.processNote?`<div class="rounded-lg p-3 mt-3" style="border:1px solid color-mix(in srgb,#16a34a 38%,var(--border));background:color-mix(in srgb,#16a34a 5%,transparent)">
        <div class="text-xs font-semibold mb-1.5" style="color:#16a34a">运营处理信息</div>
        <div class="flex items-center justify-between py-1 text-sm gap-4"><span class="text-xs flex-shrink-0" style="color:var(--muted-foreground)">处理备注</span><span class="text-xs font-medium" style="text-align:right;word-break:break-all">${r.processNote}</span></div>
      </div>`:''}
    </div>
    <div class="flex justify-end p-4" style="border-top:1px solid var(--border)">
      <button class="btn btn-primary btn-sm" onclick="closeModal()">关闭</button>
    </div>
  </div>`);
}

let _contactSearchTimer;
function contactSearch(q){
  clearTimeout(_contactSearchTimer);
  _contactSearchTimer = setTimeout(()=>{
    const typeMap = {invoice:'开票',refund:'退款',other:'其他'};
    const statusMap = {pending:{l:'未处理',c:'b-warning'},contacted:{l:'已处理',c:'b-success'},refunded:{l:'已处理',c:'b-success'}};
    let list = CONTACT_REQS.slice();
    if(contactFilter.type!=='all') list = list.filter(r=>r.type===contactFilter.type);
    if(contactFilter.status!=='all') list = list.filter(r=>r.status===contactFilter.status);
    if(q) list = list.filter(r=>r.id.includes(q)||r.user.includes(q));
    const tbody = document.getElementById('contact-tbody');
    if(tbody){
      tbody.innerHTML = list.map(r=>`<tr ${r.status==='pending'?'style="background:color-mix(in srgb,var(--warning) 4%,transparent)"':''}>
        <td>${getExportCheckbox('contact-reqs', r.id)}</td>
        <td style="font-family:monospace;font-size:12px">${r.id}</td>
        <td style="color:var(--muted-foreground)">${r.time}</td>
        <td>${r.user}</td>
        <td><span class="badge ${contactBadgeMap[r.type]}">${typeMap[r.type]}</span></td>
        <td>${r.name}</td>
        <td style="color:var(--muted-foreground)">${encField('phone', r.phone)}</td>
        <td style="color:var(--muted-foreground);font-size:12px">${encField('email', r.email)}</td>
        <td style="color:var(--muted-foreground);font-size:12px;max-width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${r.note||'—'}</td>
        <td><span class="badge ${statusMap[r.status].c}">${statusMap[r.status].l}</span></td>
        <td>${r.status==='pending'
        ? (r.type==='refund'?`<button class="btn btn-primary btn-sm" onclick="showRefundProcess('${r.id}')">处理退款</button>`
          :(r.type==='invoice'?`<button class="btn btn-primary btn-sm" onclick="showInvoiceProcess('${r.id}')">处理开票</button>`
          :`<button class="btn btn-primary btn-sm" onclick="showContactProcess('${r.id}')">处理其他</button>`))
        : (r.type==='refund'?`<span class="copy-link" onclick="showRefundDetail('${r.id}')">查看详情</span>`
          :(r.type==='invoice'?`<span class="copy-link" onclick="showInvoiceDetail('${r.id}')">查看详情</span>`
          :`<span class="copy-link" onclick="showContactDetail('${r.id}')">查看详情</span>`))}</td>
      </tr>`).join('');
      updateExportSelectUI('contact-reqs');
    }
  },200);
}

// 退款工单处理弹窗
function showRefundProcess(id){
  const r = CONTACT_REQS.find(x=>x.id===id);
  if(!r) return;
  
  // 模拟用户当前余额（原型数据）
  const userBalances = {
    'zhangsan': 285.60,
    'wangwu': 156.80,
    'user_a': 720.00,
    'user_b': 820.00
  };
  const currentBalance = userBalances[r.user] || 0.00;
  const src = REFUND_SRC[r.user] || {channel:'bank',id:'—',account:'原支付账户',desc:'原路返回 至原支付账户'};
  const srcChannelLabel = src.channel==='scan' ? '扫码支付' : '银行转账';
  const requested = r.refundAmount ? `<div class="flex items-center justify-between mt-2 pt-2" style="border-top:1px solid var(--border)">
          <span class="text-sm" style="color:var(--muted-foreground)">用户申请退款</span>
          <span class="font-semibold font-mono" style="font-size:15px">¥${r.refundAmount.toFixed(2)}</span>
        </div>` : '';
  
  
  showModal(`<div style="width:1000px;max-width:94vw">
    <div class="relative flex items-center justify-center p-4" style="border-bottom:1px solid var(--border)">
      <h3 class="text-base font-semibold">处理退款</h3>
      <button class="icon-btn" style="position:absolute;right:14px" onclick="closeModal()"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>
    <div class="p-4 space-y-4">
      <div class="grid grid-cols-2 gap-3" style="font-size:13px">
        <div>
          <div class="text-xs mb-1" style="color:var(--muted-foreground)">工单号</div>
          <div class="font-mono">${r.id}</div>
        </div>
        <div>
          <div class="text-xs mb-1" style="color:var(--muted-foreground)">用户</div>
          <div class="font-medium">${r.user}</div>
        </div>
        <div>
          <div class="text-xs mb-1" style="color:var(--muted-foreground)">联系人</div>
          <div>${r.name}</div>
        </div>
        <div>
          <div class="text-xs mb-1" style="color:var(--muted-foreground)">联系电话</div>
          <div style="color:var(--muted-foreground)">${encField('phone', r.phone)}</div>
        </div>
        <div style="grid-column:span 2">
          <div class="text-xs mb-1" style="color:var(--muted-foreground)">退款原因</div>
          <div class="text-sm">${r.note||'—'}</div>
        </div>
      </div>
      <div class="p-3 rounded-lg" style="background:var(--muted)">
        <div class="flex items-center justify-between">
          <span class="text-sm" style="color:var(--muted-foreground)">用户当前余额</span>
          <span class="font-semibold font-mono" style="font-size:16px">¥${currentBalance.toFixed(2)}</span>
        </div>
        ${requested}
      </div>
      <div class="rounded-lg overflow-hidden" style="border:1px solid color-mix(in srgb,var(--primary) 38%,var(--border));background:color-mix(in srgb,var(--primary) 4%,transparent)">
        <button onclick="toggleRefundRecords(this)" class="w-full flex items-center justify-between gap-2 p-3" style="background:transparent;border:none;cursor:pointer;text-align:left">
          <span class="text-xs font-semibold" style="color:var(--primary)">用户充值记录</span>
          <svg class="w-4 h-4 flex-shrink-0 transition-transform" style="color:var(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div class="refund-records-body" style="display:none;padding:0 12px 12px;border-top:1px solid color-mix(in srgb,var(--primary) 22%,var(--border));overflow-x:auto">
          <div id="refund-records-table" style="min-width:920px">${refundRecordsTable(r.user, r.refundAmount||0, {showAcct:true})}</div>
        </div>
      </div>
      <div>
        <label class="text-xs font-medium block mb-1.5">退款方式 <span style="color:var(--destructive)">*</span></label>
        <label class="flex items-start gap-2.5 cursor-pointer p-3 rounded-lg mb-2" style="border:1px solid color-mix(in srgb,var(--primary) 30%,var(--border));background:color-mix(in srgb,var(--primary) 5%,transparent)">
          <input type="radio" name="refund-channel" value="original" checked style="margin-top:3px;width:16px;height:16px;accent-color:var(--primary)">
          <div class="flex-1 text-sm">
            <div class="font-medium">原路返回（推荐）</div>
            <div class="text-xs mt-1 leading-relaxed" style="color:var(--muted-foreground)">
              退至原支付账户：${srcChannelLabel} ${src.account}${src.id&&src.id!=='—'?`（原充值单 ${src.id}）`:''}
            </div>
          </div>
        </label>
        <label class="flex items-start gap-2.5 cursor-pointer p-3 rounded-lg" style="border:1px solid var(--border);background:var(--muted)">
          <input type="radio" name="refund-channel" value="manual" style="margin-top:3px;width:16px;height:16px;accent-color:var(--primary)">
          <div class="flex-1 text-sm">
            <div class="font-medium">线下人工转账</div>
            <div class="text-xs mt-1" style="color:var(--muted-foreground)">无法原路返回时，线下转账至用户提供的账户</div>
          </div>
        </label>
      </div>
      <div>
        <label class="text-xs font-medium block mb-1.5">退款金额 <span style="color:var(--destructive)">*</span></label>
        <div class="relative">
          <span class="absolute left-3 top-1/2 -translate-y-1/2" style="color:var(--muted-foreground)">¥</span>
          <input id="refund-amount" type="number" class="input w-full" style="padding-left:24px" oninput="updateRefundRecords('${r.user}')" placeholder="请输入退款金额" value="${r.refundAmount?r.refundAmount.toFixed(2):''}">
        </div>
        <div class="text-xs mt-1.5" style="color:var(--muted-foreground)">
          退款将从用户账户余额中扣除，退款金额不能超过用户当前余额 ${'¥'}${currentBalance.toFixed(2)}
        </div>
      </div>
      <div>
        <label class="text-xs font-medium block mb-1.5">处理备注</label>
        <textarea id="refund-remark" class="input w-full" rows="2" placeholder="请输入处理备注（选填）" style="resize:none"></textarea>
      </div>
    </div>
    <div class="flex items-center justify-end gap-3 p-4" style="border-top:1px solid var(--border)">
      <button class="btn btn-primary btn-sm" onclick="closeModal()">取消</button>
      <button class="btn btn-primary btn-sm" onclick="confirmRefund('${r.id}')">确认处理</button>
    </div>
  </div>`, 1000);
}

function confirmRefund(id){
  const amountInput = document.getElementById('refund-amount');
  const amount = parseFloat(amountInput?.value || '0');
  const remarkInput = document.getElementById('refund-remark');
  const remark = remarkInput?.value || '';
  const channelEl = document.querySelector('input[name="refund-channel"]:checked');
  const channel = channelEl ? channelEl.value : 'original';
  
  const r = CONTACT_REQS.find(x=>x.id===id);
  if(!r) return;
  const userBalances = {'zhangsan':285.60,'wangwu':156.80,'user_a':720.00,'user_b':820.00};
  const currentBalance = userBalances[r.user] || 0.00;
  
  if(!amount || amount <= 0){
    showToast('请输入有效金额', '退款金额必须大于 0 元', { type: 'warning', label: '知道了' });
    return;
  }
  if(amount > currentBalance + 0.0001){
    showToast('退款金额超出可退额度', '退款金额不能超过用户当前余额', { type: 'warning', label: '知道了' });
    return;
  }
  
  // 设置loading状态
  const btn = document.querySelector('.modal-box .btn-primary');
  if(btn){
    btn.disabled = true;
    btn.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="animation:spin 1s linear infinite"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg> 处理中...`;
    btn.style.opacity = '0.7';
    btn.style.cursor = 'not-allowed';
  }
  
  setTimeout(()=>{
    const src = REFUND_SRC[r.user] || {desc:'原支付账户'};
    r.status = 'refunded';
    r.refundAmount = amount;
    r.refundRemark = remark;
    r.refundChannel = channel === 'original' ? '原路返回' : '线下人工转账';
    r.refundTarget = channel === 'original' ? src.desc : '线下转账';
    r.refundAlloc = applyRefundTopups(r.user, amount);
    const now = new Date();
    const p = n => String(n).padStart(2,'0');
    r.refundArriveTime = `${now.getFullYear()}-${p(now.getMonth()+1)}-${p(now.getDate())} ${p(now.getHours())}:${p(now.getMinutes())}:${p(now.getSeconds())}`;
    closeModal();
    renderPage();
    showToast('退款成功', (channel==='original'?'已原路退回':'已人工转账') + ' ¥' + amount.toFixed(2) + ' 至' + (channel==='original'?(' ' + (src.desc||'原支付账户')):'线下收款账户'));
  }, 800);
}

function showRefundDetail(id){
  const r = CONTACT_REQS.find(x=>x.id===id); if(!r) return;
  const statusMap = {pending:{l:'未处理',c:'b-warning'},contacted:{l:'已处理',c:'b-success'},refunded:{l:'已处理',c:'b-success'}};
  const st = statusMap[r.status] || {l:r.status,c:'b-muted'};
  const infoRow = (k,v)=>`<div class="flex items-center justify-between py-1.5 text-sm gap-4"><span class="text-xs flex-shrink-0" style="color:var(--muted-foreground)">${k}</span><span class="text-xs font-medium" style="text-align:right;word-break:break-all">${v||'—'}</span></div>`;
  const processInfo = r.status==='refunded' ? `<div class="rounded-lg p-3" style="border:1px solid color-mix(in srgb,#16a34a 38%,var(--border));background:color-mix(in srgb,#16a34a 5%,transparent)">
      <div class="text-xs font-semibold mb-1.5" style="color:#16a34a">运营处理信息</div>
      ${infoRow('处理状态',`<span class="badge ${st.c}">${st.l}</span>`)}
      ${infoRow('退款方式',r.refundChannel||'—')}
      ${infoRow('处理备注',r.refundRemark||'—')}
      ${infoRow('到账时间',r.refundArriveTime||'—')}
    </div>` : '';
  const refundAmountCard = `<div class="rounded-lg p-4 mb-3" style="background:linear-gradient(135deg, #ef4444 0%, #f97316 100%);color:white">
    <div class="text-xs mb-1" style="opacity:0.8">退款金额</div>
    <div class="text-2xl font-bold tabular-nums">¥${Number(r.refundAmount||0).toFixed(2)}</div>
  </div>`;
  // 关联发票信息
  let invInfo = '';
  const relatedInv = r.invId ? INVOICES.find(x=>x.id===r.invId) : null;
  if(relatedInv){
    const invRows = [
      ['发票号码', relatedInv.invNo],
      ['开票金额', '¥'+Number(relatedInv.amount).toFixed(2)],
      ['抬头类型', relatedInv.titleType],
      ['发票抬头', relatedInv.title],
      ['发票类型', (INV_TYPE[relatedInv.invType]||INV_TYPE.normal).l],
      ['单位税号', relatedInv.tax||'—'],
      ['收票邮箱', relatedInv.email||'—'],
      ['开票状态', `<span class="badge ${(INV_STATUS[relatedInv.status]||INV_STATUS.none).c}">${(INV_STATUS[relatedInv.status]||INV_STATUS.none).l}</span>`],
      ['开票时间', relatedInv.time],
      ['到账时间', relatedInv.arriveTime||'—']
    ];
    invInfo = `<div class="rounded-lg p-3 mb-3" style="border:1px solid color-mix(in srgb,var(--chart-2) 30%,var(--border));background:color-mix(in srgb,var(--chart-2) 4%,transparent)">
      <div class="text-xs font-semibold mb-1.5" style="color:var(--chart-2)">关联发票信息</div>
      ${invRows.map(([k,v])=>infoRow(k,v)).join('')}
    </div>`;
  }
  showModal(`<div class="p-5">
    <div class="flex flex-col items-center mb-3">
      <div class="flex items-center gap-2">
        <h3 class="text-base font-semibold">退款工单详情</h3>
        <span class="badge ${st.c}">${st.l}</span>
      </div>
      <p class="text-xs mt-1" style="color:var(--muted-foreground)">工单号 ${r.id}</p>
    </div>
    ${refundAmountCard}
    <div class="rounded-lg p-3 mb-3" style="background:var(--muted)">
      <div class="text-xs font-semibold mb-1.5" style="color:var(--muted-foreground)">申请信息</div>
      ${infoRow('申请用户', r.user)}
      ${infoRow('联系人', r.name)}
      ${infoRow('联系电话', encField('phone', r.phone))}
      ${infoRow('退款原因', r.note)}
    </div>
    ${invInfo}
    ${processInfo}
    <div class="mt-3">
      <div class="text-xs font-semibold mb-2">关联充值记录</div>
      <div style="overflow-x:auto">${refundRecordsTable(r.user, r.refundAmount||0, {showPayAcct:true})}</div>
    </div>
    <div class="flex justify-end gap-2 mt-4">
      <button class="btn btn-primary btn-sm" onclick="closeModal()">关闭</button>
    </div>
  </div>`, 920);
}

function rankings(){
  return `
    <div class="flex flex-col h-full" style="gap:12px">
      <div class="flex-shrink-0">
        <div class="tab-bar" style="margin-bottom:0">
          <button class="tab active" onclick="switchTab(this,'rank-model')">按模型排行</button>
          <button class="tab" onclick="switchTab(this,'rank-agent')">按代理排行</button>
        </div>
      </div>
      <div id="rank-model" class="flex-1 flex flex-col" style="gap:12px;min-height:0">
        <div class="grid grid-cols-3 gap-3 flex-shrink-0">
          ${statCard('coins','chart-1','模型总消费','¥70.80')}
          ${statCard('activity','chart-2','总调用次数','1,427')}
          ${statCard('box','chart-3','活跃模型数','6')}
        </div>
        <div class="grid grid-cols-2 gap-3 flex-1" style="min-height:0">
          <div class="card p-4 flex flex-col">
            <div class="text-sm font-semibold mb-3 flex-shrink-0">模型消费占比</div>
            <div class="flex-1 flex flex-col items-center gap-4" style="padding-top:12px">
              <div class="relative" style="width:240px;height:240px">
                <svg viewBox="0 0 36 36" style="width:240px;height:240px;transform:rotate(-90deg)">
                  <circle cx="18" cy="18" r="14" fill="none" stroke="var(--muted)" stroke-width="6"/>
                  <circle cx="18" cy="18" r="14" fill="none" stroke="var(--chart-1)" stroke-width="6" stroke-dasharray="${35/100*88} 88" stroke-dashoffset="0" stroke-linecap="round"/>
                  <circle cx="18" cy="18" r="14" fill="none" stroke="var(--chart-2)" stroke-width="6" stroke-dasharray="${25/100*88} 88" stroke-dashoffset="${-35/100*88}" stroke-linecap="round"/>
                  <circle cx="18" cy="18" r="14" fill="none" stroke="var(--chart-3)" stroke-width="6" stroke-dasharray="${15/100*88} 88" stroke-dashoffset="${-60/100*88}" stroke-linecap="round"/>
                  <circle cx="18" cy="18" r="14" fill="none" stroke="var(--chart-4)" stroke-width="6" stroke-dasharray="${12/100*88} 88" stroke-dashoffset="${-75/100*88}" stroke-linecap="round"/>
                  <circle cx="18" cy="18" r="14" fill="none" stroke="var(--chart-5)" stroke-width="6" stroke-dasharray="${8/100*88} 88" stroke-dashoffset="${-87/100*88}" stroke-linecap="round"/>
                  <circle cx="18" cy="18" r="14" fill="none" stroke="var(--chart-6)" stroke-width="6" stroke-dasharray="${5/100*88} 88" stroke-dashoffset="${-95/100*88}" stroke-linecap="round"/>
                </svg>
                <div class="absolute inset-0 flex flex-col items-center justify-center">
                  <span class="text-2xl font-semibold">¥70.80</span>
                  <span class="text-[11px]" style="color:var(--muted-foreground)">总消费</span>
                </div>
              </div>
              <div class="w-full space-y-2" style="max-width:300px">
                ${[{m:'qwen2.5-72b',v:35,c:'chart-1',cost:24.78},{m:'qwen-plus',v:25,c:'chart-2',cost:17.70},{m:'qwen-turbo',v:15,c:'chart-3',cost:10.62},{m:'deepseek-v3',v:12,c:'chart-4',cost:8.50},{m:'glm-4',v:8,c:'chart-5',cost:5.66},{m:'其他',v:5,c:'chart-6',cost:3.54}].map(r=>`
                  <div class="flex items-center gap-2">
                    <div class="w-3 h-3 rounded flex-shrink-0" style="background:var(--${r.c})"></div>
                    <span class="text-xs flex-1">${r.m}</span>
                    <span class="text-xs" style="color:var(--muted-foreground)">¥${r.cost}</span>
                    <span class="text-xs font-semibold w-10 text-right">${r.v}%</span>
                  </div>`).join('')}
              </div>
            </div>
          </div>
          <div class="card overflow-hidden flex flex-col">
            <div class="px-4 py-3 text-sm font-semibold flex-shrink-0" style="border-bottom:1px solid var(--border)">模型消费排行</div>
            <div class="flex-1 overflow-y-auto">
              <table><thead><tr><th>排名</th><th>模型</th><th>调用次数</th><th>消费(¥)</th><th>占比</th><th>趋势</th></tr></thead>
              <tbody>
                <tr><td><span class="badge b-primary">1</span></td><td class="font-medium">qwen2.5-72b</td><td>500</td><td>¥24.78</td><td><div class="flex items-center gap-1"><div class="w-16 h-2 rounded overflow-hidden" style="background:var(--muted)"><div class="h-full rounded" style="width:35%;background:var(--chart-1)"></div></div><span class="text-xs">35%</span></div></td><td><span class="text-xs" style="color:var(--success)">+12%</span></td></tr>
                <tr><td><span class="badge b-neutral">2</span></td><td class="font-medium">qwen-plus</td><td>357</td><td>¥17.70</td><td><div class="flex items-center gap-1"><div class="w-16 h-2 rounded overflow-hidden" style="background:var(--muted)"><div class="h-full rounded" style="width:25%;background:var(--chart-2)"></div></div><span class="text-xs">25%</span></div></td><td><span class="text-xs" style="color:var(--success)">+8%</span></td></tr>
                <tr><td><span class="badge b-neutral">3</span></td><td class="font-medium">qwen-turbo</td><td>214</td><td>¥10.62</td><td><div class="flex items-center gap-1"><div class="w-16 h-2 rounded overflow-hidden" style="background:var(--muted)"><div class="h-full rounded" style="width:15%;background:var(--chart-3)"></div></div><span class="text-xs">15%</span></div></td><td><span class="text-xs" style="color:var(--success)">+5%</span></td></tr>
                <tr><td><span class="badge b-neutral">4</span></td><td class="font-medium">deepseek-v3</td><td>171</td><td>¥8.50</td><td><div class="flex items-center gap-1"><div class="w-16 h-2 rounded overflow-hidden" style="background:var(--muted)"><div class="h-full rounded" style="width:12%;background:var(--chart-4)"></div></div><span class="text-xs">12%</span></div></td><td><span class="text-xs" style="color:var(--success)">+3%</span></td></tr>
                <tr><td><span class="badge b-neutral">5</span></td><td class="font-medium">glm-4</td><td>114</td><td>¥5.66</td><td><div class="flex items-center gap-1"><div class="w-16 h-2 rounded overflow-hidden" style="background:var(--muted)"><div class="h-full rounded" style="width:8%;background:var(--chart-5)"></div></div><span class="text-xs">8%</span></div></td><td><span class="text-xs" style="color:var(--destructive)">-2%</span></td></tr>
                <tr><td><span class="badge b-neutral">6</span></td><td class="font-medium">其他</td><td>71</td><td>¥3.54</td><td><div class="flex items-center gap-1"><div class="w-16 h-2 rounded overflow-hidden" style="background:var(--muted)"><div class="h-full rounded" style="width:5%;background:var(--chart-6)"></div></div><span class="text-xs">5%</span></div></td><td><span class="text-xs" style="color:var(--muted-foreground)">—</span></td></tr>
              </tbody></table>
            </div>
          </div>
        </div>
      </div>
      <div id="rank-agent" class="flex-1 flex flex-col" style="gap:12px;min-height:0;display:none">
        <div class="grid grid-cols-3 gap-3 flex-shrink-0">
          ${statCard('handshake','chart-1','代理总数','3')}
          ${statCard('users','chart-2','代理用户总数','6')}
          ${statCard('coins','chart-3','代理用户总消费','¥4.20')}
        </div>
        <div class="card overflow-hidden flex-1 flex flex-col" style="min-height:0">
          <div class="px-4 py-3 text-sm font-semibold flex-shrink-0" style="border-bottom:1px solid var(--border)">代理消费排行</div>
          <div class="flex-1 overflow-y-auto">
            <table><thead><tr><th>排名</th><th>代理</th><th>公司</th><th>名下用户</th><th>用户消费(¥)</th><th>占比</th><th>趋势</th></tr></thead>
            <tbody>
              <tr><td><span class="badge b-primary">1</span></td><td class="font-medium">partner_lisi</td><td style="color:var(--muted-foreground)">李四科技有限公司</td><td>2</td><td>¥2.40</td><td><div class="flex items-center gap-1"><div class="w-16 h-2 rounded overflow-hidden" style="background:var(--muted)"><div class="h-full rounded" style="width:62%;background:var(--chart-1)"></div></div><span class="text-xs">62%</span></div></td><td><span class="text-xs" style="color:var(--success)">+8%</span></td></tr>
              <tr><td><span class="badge b-neutral">2</span></td><td class="font-medium">partner_zhao</td><td style="color:var(--muted-foreground)">赵氏传媒集团</td><td>3</td><td>¥1.16</td><td><div class="flex items-center gap-1"><div class="w-16 h-2 rounded overflow-hidden" style="background:var(--muted)"><div class="h-full rounded" style="width:30%;background:var(--chart-2)"></div></div><span class="text-xs">30%</span></div></td><td><span class="text-xs" style="color:var(--success)">+15%</span></td></tr>
              <tr><td><span class="badge b-neutral">3</span></td><td class="font-medium">partner_wang</td><td style="color:var(--muted-foreground)">王总商贸有限公司</td><td>1</td><td>¥0.64</td><td><div class="flex items-center gap-1"><div class="w-16 h-2 rounded overflow-hidden" style="background:var(--muted)"><div class="h-full rounded" style="width:8%;background:var(--chart-3)"></div></div><span class="text-xs">8%</span></div></td><td><span class="text-xs" style="color:var(--destructive)">-2%</span></td></tr>
            </tbody></table>
          </div>
        </div>
      </div>
    </div>`;
}

function switchTab(btn,id){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  const modelTab = document.getElementById('rank-model');
  const agentTab = document.getElementById('rank-agent');
  if(id==='rank-model'){
    modelTab.style.display='flex';
    agentTab.style.display='none';
  } else {
    modelTab.style.display='none';
    agentTab.style.display='flex';
  }
}
function switchOverviewTab(btn,role,tab){
  btn.closest('.tab-bar').querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(role+'-ov-usage').style.display=tab==='usage'?'block':'none';
  document.getElementById(role+'-ov-recon').style.display=tab==='recon'?'block':'none';
}

// ===== 系统设置（仅充值信息） =====
function settings(){
  return `<div class="max-w-lg space-y-4">
    <div class="card p-4">
      <div class="flex items-center gap-2 mb-3">
        <div class="text-sm font-semibold">充值设置</div>
      </div>
      <div class="space-y-3">
        <div><label class="text-xs font-medium block mb-1">收款户名</label><input class="input w-full" value="XX科技有限公司"></div>
        <div><label class="text-xs font-medium block mb-1">开户银行</label><input class="input w-full" value="XX银行XX支行"></div>
        <div><label class="text-xs font-medium block mb-1">银行账号</label><input class="input w-full" value="6222 0900 1234 5678 901"></div>
        <div class="flex items-center justify-between py-1">
          <span class="text-xs font-medium">启用银行转账充值通道</span>
          <label class="toggle"><input type="checkbox" checked><span class="slider"></span></label>
        </div>
      </div>
    </div>
    <div class="flex justify-end">
      <button class="btn btn-primary btn-sm" onclick="alert('设置已保存')">保存设置</button>
    </div>
  </div>`;
}

// ===== 代理端 - 数据看板 =====
function agentOverview(){
  const todayUsage=1.76, totalReqs=24, activeUsers=2;
  const totalTokens=248000;
  const agentBalance=1.24, userTotalBalance=0.86;
  const agentTotalConsumption=15.6, userTotalConsumption=12.4;
  const profitDiff=agentTotalConsumption-userTotalConsumption;
  const agentUserRank=[
    {name:'zhangsan',cost:1.76,pct:73,trend:'up',trendVal:12},
    {name:'wangwu',cost:0.64,pct:27,trend:'down',trendVal:3},
  ];
  const usageFilter=`<div class="flex items-center gap-2 mb-3">
    ${buildTimeFilter('agent-ov')}
    <select class="input" style="width:100px"><option>全部模型</option>${MODELS.map(m=>`<option>${MODEL_SHORT[m]}</option>`).join('')}</select>
  </div>`;
  const usageStats=`<div class="card overflow-hidden mb-4">
    <div class="grid grid-cols-3 divide-x" style="border-color:var(--border)">
      <div class="px-4 py-4 cursor-pointer hover:bg-muted/30 transition-colors" onclick="goToLogsFromOverview()">
        <div class="flex items-center gap-2 mb-2">
          <div class="icon-badge ib-chart-2" style="width:28px;height:28px;border-radius:8px"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:16px;height:16px">${ICONS.trending||''}</svg></div>
          <span class="text-xs font-medium" style="color:var(--muted-foreground)">消费金额</span>
        </div>
        <div class="font-mono text-2xl font-bold tabular-nums">¥${todayUsage}</div>
      </div>
      <div class="px-4 py-4 cursor-pointer hover:bg-muted/30 transition-colors" onclick="goToLogsFromOverview()">
        <div class="flex items-center gap-2 mb-2">
          <div class="icon-badge ib-chart-3" style="width:28px;height:28px;border-radius:8px"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:16px;height:16px">${ICONS.activity||''}</svg></div>
          <span class="text-xs font-medium" style="color:var(--muted-foreground)">请求次数</span>
        </div>
        <div class="font-mono text-2xl font-bold tabular-nums">${totalReqs}</div>
      </div>
      <div class="px-4 py-4 cursor-pointer hover:bg-muted/30 transition-colors" onclick="goToLogsFromOverview()">
        <div class="flex items-center gap-2 mb-2">
          <div class="icon-badge ib-chart-1" style="width:28px;height:28px;border-radius:8px"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:16px;height:16px">${ICONS.key||''}</svg></div>
          <span class="text-xs font-medium" style="color:var(--muted-foreground)">Token 消耗</span>
        </div>
        <div class="font-mono text-2xl font-bold tabular-nums">${(totalTokens/1000).toFixed(1)}K</div>
      </div>
    </div>
  </div>`;
  const usageTrend=`<div class="card p-4 mb-4">
    <div class="flex items-center justify-between mb-3">
      <div class="text-sm font-semibold">用户消耗趋势</div>
    </div>
    <div class="flex items-end gap-1 h-40 mb-2">
      ${[3,5,4,6,8,5,7].map((v,i)=>`<div class="flex-1 flex flex-col items-center gap-1">
        <div class="w-full rounded-t" style="height:${(v/8*100).toFixed(0)}%;background:linear-gradient(to top,var(--chart-2),color-mix(in srgb,var(--chart-2) 70%,var(--chart-1)))"></div>
        <span class="text-[10px]" style="color:var(--muted-foreground)">${['2026-08-07','2026-08-08','2026-08-09','2026-08-10','2026-08-11','2026-08-12','2026-08-13'][i]}</span>
      </div>`).join('')}
    </div>
    <div class="text-[11px] text-center" style="color:var(--muted-foreground)">单位：¥ · 近7天名下用户总消费趋势</div>
  </div>`;
  const usageRank=`<div class="card p-4">
    <div class="flex items-center justify-between mb-3">
      <div class="text-sm font-semibold">名下用户消耗排行</div>
    </div>
    <table><thead><tr><th style="width:40px">排名</th><th>用户</th><th>消费(¥)</th><th style="width:180px">占比</th><th style="width:60px">趋势</th></tr></thead>
      <tbody>${agentUserRank.map((u,i)=>`<tr>
        <td><span class="badge ${i===0?'b-primary':'b-neutral'}">${i+1}</span></td>
        <td class="font-medium">${u.name}</td>
        <td class="font-semibold">¥${u.cost}</td>
        <td><div class="flex items-center gap-2">
          <div class="flex-1 h-2 rounded overflow-hidden" style="background:var(--muted)"><div class="h-full rounded" style="width:${u.pct}%;background:var(--chart-${i+1})"></div></div>
          <span class="text-xs w-8 text-right">${u.pct}%</span>
        </div></td>
        <td><span class="text-xs" style="color:${u.trend==='up'?'var(--success)':'var(--destructive)'}">${u.trend==='up'?'↑+':'↓-'}${u.trendVal}%</span></td>
      </tr>`).join('')}</tbody></table>
  </div>`;
  const reconCards=`<div class="grid grid-cols-3 gap-3">
    <div class="rounded-xl border p-4" style="background:linear-gradient(135deg,color-mix(in srgb,var(--chart-1) 10%,var(--background)),color-mix(in srgb,var(--chart-1) 4%,var(--background)));border-color:color-mix(in srgb,var(--chart-1) 20%,var(--border))">
      <div class="flex items-center gap-2 mb-3">
        <div class="icon-badge ib-chart-1" style="width:28px;height:28px;border-radius:8px"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:16px;height:16px"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg></div>
        <span class="text-xs font-medium" style="color:var(--muted-foreground)">余额</span>
      </div>
      <div class="font-mono text-2xl font-bold tracking-tight mb-1">¥${agentBalance.toFixed(2)}</div>
      <div class="text-[11px]" style="color:var(--muted-foreground)">代理账户余额</div>
    </div>
    <div class="rounded-xl border p-4" style="background:linear-gradient(135deg,color-mix(in srgb,var(--chart-2) 10%,var(--background)),color-mix(in srgb,var(--chart-2) 4%,var(--background)));border-color:color-mix(in srgb,var(--chart-2) 20%,var(--border))">
      <div class="flex items-center gap-2 mb-3">
        <div class="icon-badge ib-chart-2" style="width:28px;height:28px;border-radius:8px"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:16px;height:16px"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 100-8 4 4 0 000 8z"/></svg></div>
        <span class="text-xs font-medium" style="color:var(--muted-foreground)">用户余额</span>
      </div>
      <div class="font-mono text-2xl font-bold tracking-tight mb-1">¥${userTotalBalance.toFixed(2)}</div>
      <div class="text-[11px]" style="color:var(--muted-foreground)">名下用户余额合计</div>
    </div>
    <div class="rounded-xl border p-4" style="background:linear-gradient(135deg,color-mix(in srgb,var(--success) 10%,var(--background)),color-mix(in srgb,var(--success) 4%,var(--background)));border-color:color-mix(in srgb,var(--success) 20%,var(--border))">
      <div class="flex items-center gap-2 mb-3">
        <div class="icon-badge ib-success" style="width:28px;height:28px;border-radius:8px"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:16px;height:16px"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg></div>
        <span class="text-xs font-medium" style="color:var(--muted-foreground)">对账</span>
      </div>
      <div class="font-mono text-2xl font-bold tracking-tight mb-1" style="color:var(--success)">¥${Math.abs(profitDiff).toFixed(2)}</div>
      <div class="text-[11px]" style="color:var(--muted-foreground)">代理消费 - 用户消费</div>
    </div>
  </div>`;
  const balanceCard=`<div class="card overflow-hidden mb-4">
    <div class="flex items-center justify-between p-4">
      <div>
        <div class="text-xs font-medium mb-1" style="color:var(--muted-foreground)">账户余额</div>
        <div class="font-mono text-2xl font-bold tracking-tight">¥${agentBalance.toFixed(2)}</div>
      </div>
      <div class="flex gap-3">
        <div class="text-right">
          <div class="text-[11px] font-medium" style="color:var(--muted-foreground)">近24h消费</div>
          <div class="text-sm font-semibold tabular-nums mt-0.5">¥${todayUsage}</div>
        </div>
        <div class="text-right">
          <div class="text-[11px] font-medium" style="color:var(--muted-foreground)">预计续航</div>
          <div class="text-sm font-semibold tabular-nums mt-0.5">~${Math.floor(agentBalance/todayUsage)} 天</div>
        </div>
      </div>
    </div>
  </div>`;
  return `
    ${balanceCard}
    <div style="border-top:1px solid #d4d4d4;margin:20px 0"></div>
    ${usageFilter}
    ${usageStats}
    ${usageTrend}
    ${usageRank}`;
}

// ===== 代理端 - 仪表盘 =====
function dashAgent(){
  const logStats=[
    {label:'RPM',value:'5',icon:'activity',tone:'chart-1',desc:'每分钟请求'},
    {label:'TPM',value:'2.6K',icon:'trending',tone:'chart-2',desc:'每分钟Token'},
    {label:'活跃用户',value:'2',icon:'users',tone:'chart-3',desc:'近7天活跃'},
    {label:'活跃模型',value:'3',icon:'box',tone:'chart-1',desc:'调用中模型'},
  ];
  return `
    <div class="flex items-center gap-2 mb-3">
      ${buildTimeFilter('agent-dash')}
      <select class="input" style="width:100px"><option>全部模型</option>${MODELS.map(m=>`<option>${MODEL_SHORT[m]}</option>`).join('')}</select>
      <select class="input" style="width:100px"><option>按小时</option><option>按天</option></select>
    </div>
    <div class="card overflow-hidden mb-4">
      <div class="grid grid-cols-4 divide-x" style="border-color:var(--border)">
        ${logStats.map(s=>`
          <div class="px-3 py-3" style="min-width:0">
            <div class="flex items-center gap-1.5 mb-1">
              <div class="icon-badge ib-${s.tone}" style="width:20px;height:20px;border-radius:4px"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:12px;height:12px">${ICONS[s.icon]||''}</svg></div>
              <span class="text-[11px] font-medium uppercase tracking-wide" style="color:var(--muted-foreground)">${s.label}</span>
            </div>
            <div class="font-mono text-lg font-bold tabular-nums">${s.value}</div>
            <div class="text-[11px] mt-0.5" style="color:var(--muted-foreground)">${s.desc}</div>
          </div>`).join('')}
      </div>
    </div>
    <div class="card overflow-hidden mb-4">
      <div class="flex items-center justify-between px-4 py-3" style="border-bottom:1px solid var(--border)">
        <div class="flex items-center gap-2">
          <div class="icon-badge ib-chart-4" style="width:24px;height:24px;border-radius:6px"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:14px;height:14px"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/></svg></div>
          <span class="text-sm font-semibold">模型调用分析</span>
          <span class="text-xs" style="color:var(--muted-foreground)">总计: 24次</span>
        </div>
        <div class="flex gap-1 rounded-lg p-1" style="background:var(--muted)">
          <button class="tab-btn active" onclick="switchChartTab(this,'agent-chart-trend')">趋势</button>
          <button class="tab-btn" onclick="switchChartTab(this,'agent-chart-prop')">占比</button>
          <button class="tab-btn" onclick="switchChartTab(this,'agent-chart-top')">排行</button>
        </div>
      </div>
      <div id="agent-chart-trend" class="p-4">
        <div class="flex items-end gap-1.5 h-40 mb-2">
          ${[3,2,4,5,3,6,7].map((v,i)=>`<div class="flex-1 flex flex-col items-center gap-1">
            <div class="w-full rounded-t" style="height:${(v/7*100).toFixed(0)}%;background:linear-gradient(to top,var(--chart-1),color-mix(in srgb,var(--chart-1) 70%,var(--chart-2)))"></div>
            <span class="text-[10px]" style="color:var(--muted-foreground)">${['2026-08-07','2026-08-08','2026-08-09','2026-08-10','2026-08-11','2026-08-12','2026-08-13'][i]}</span>
          </div>`).join('')}
        </div>
        <div class="flex items-center gap-4 text-xs" style="color:var(--muted-foreground)">
          ${MODELS.map((m,idx)=>`<span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded" style="background:var(--chart-${idx+1})"></span>${MODEL_SHORT[m]}</span>`).join('')}
        </div>
      </div>
      <div id="agent-chart-prop" class="p-4" style="display:none">
        <div class="flex items-center gap-6">
          <div class="relative" style="width:140px;height:140px">
            <svg viewBox="0 0 36 36" style="width:140px;height:140px;transform:rotate(-90deg)">
              <circle cx="18" cy="18" r="14" fill="none" stroke="var(--muted)" stroke-width="5"/>
              <circle cx="18" cy="18" r="14" fill="none" stroke="var(--chart-1)" stroke-width="5" stroke-dasharray="${58/100*88} 88" stroke-linecap="round"/>
              <circle cx="18" cy="18" r="14" fill="none" stroke="var(--chart-2)" stroke-width="5" stroke-dasharray="${28/100*88} 88" stroke-dashoffset="${-58/100*88}" stroke-linecap="round"/>
              <circle cx="18" cy="18" r="14" fill="none" stroke="var(--chart-3)" stroke-width="5" stroke-dasharray="${14/100*88} 88" stroke-dashoffset="${-86/100*88}" stroke-linecap="round"/>
            </svg>
            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <span class="text-lg font-semibold">¥2.40</span>
              <span class="text-[10px]" style="color:var(--muted-foreground)">总消费</span>
            </div>
          </div>
          <div class="flex-1 space-y-2">
            ${[{m:MODEL_SHORT[MODELS[0]],v:58,c:'chart-1',cost:1.39},{m:MODEL_SHORT[MODELS[1]],v:28,c:'chart-2',cost:0.67},{m:MODEL_SHORT[MODELS[2]],v:14,c:'chart-3',cost:0.34}].map(r=>`
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded" style="background:var(--${r.c})"></div>
                <span class="text-xs flex-1">${r.m}</span>
                <span class="text-xs" style="color:var(--muted-foreground)">¥${r.cost}</span>
                <span class="text-xs font-semibold w-10 text-right">${r.v}%</span>
              </div>`).join('')}
          </div>
        </div>
      </div>
      <div id="agent-chart-top" class="p-4" style="display:none">
        ${[{m:MODEL_SHORT[MODELS[0]],cnt:14,cost:1.39,pct:58,c:'chart-1'},{m:MODEL_SHORT[MODELS[1]],cnt:7,cost:0.67,pct:28,c:'chart-2'},{m:MODEL_SHORT[MODELS[2]],cnt:3,cost:0.34,pct:14,c:'chart-3'}].map((r,i)=>`
          <div class="flex items-center gap-3 py-2 ${i<2?'':''}" style="${i<2?'border-bottom:1px solid var(--border)':''}">
            <span class="badge ${i===0?'b-primary':'b-neutral'}">${i+1}</span>
            <span class="text-sm font-medium flex-1">${r.m}</span>
            <span class="text-xs" style="color:var(--muted-foreground)">${r.cnt}次</span>
            <span class="text-sm font-semibold w-16 text-right">¥${r.cost}</span>
            <div class="flex items-center gap-1 w-24">
              <div class="flex-1 h-2 rounded overflow-hidden" style="background:var(--muted)"><div class="h-full rounded" style="width:${r.pct}%;background:var(--${r.c})"></div></div>
              <span class="text-xs w-8 text-right">${r.pct}%</span>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

// ===== 代理端 - 排行榜 =====
function agentRankings(){
  return `
    <div class="text-sm font-semibold mb-3">按模型排行</div>
    <div class="grid grid-cols-3 gap-3 mb-3">
      ${statCard('coins','chart-1','模型总消费','¥2.40')}
      ${statCard('activity','chart-2','总调用次数','24')}
      ${statCard('box','chart-3','活跃模型数','3')}
    </div>
    <div class="grid grid-cols-2 gap-3 mb-3">
      <div class="card p-4">
        <div class="text-sm font-semibold mb-3">模型消费占比</div>
        <div class="flex items-center gap-6">
          <div class="relative" style="width:140px;height:140px">
            <svg viewBox="0 0 36 36" style="width:140px;height:140px;transform:rotate(-90deg)">
              <circle cx="18" cy="18" r="14" fill="none" stroke="var(--muted)" stroke-width="5"/>
              <circle cx="18" cy="18" r="14" fill="none" stroke="var(--chart-1)" stroke-width="5" stroke-dasharray="${58/100*88} 88" stroke-linecap="round"/>
              <circle cx="18" cy="18" r="14" fill="none" stroke="var(--chart-2)" stroke-width="5" stroke-dasharray="${28/100*88} 88" stroke-dashoffset="${-58/100*88}" stroke-linecap="round"/>
              <circle cx="18" cy="18" r="14" fill="none" stroke="var(--chart-3)" stroke-width="5" stroke-dasharray="${14/100*88} 88" stroke-dashoffset="${-86/100*88}" stroke-linecap="round"/>
            </svg>
            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <span class="text-lg font-semibold">¥2.40</span>
              <span class="text-[10px]" style="color:var(--muted-foreground)">总消费</span>
            </div>
          </div>
          <div class="flex-1 space-y-2">
            ${[{m:MODEL_SHORT[MODELS[0]],v:58,c:'chart-1',cost:1.39},{m:MODEL_SHORT[MODELS[1]],v:28,c:'chart-2',cost:0.67},{m:MODEL_SHORT[MODELS[2]],v:14,c:'chart-3',cost:0.34}].map(r=>`
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded" style="background:var(--${r.c})"></div>
                <span class="text-xs flex-1">${r.m}</span>
                <span class="text-xs" style="color:var(--muted-foreground)">¥${r.cost}</span>
                <span class="text-xs font-semibold w-10 text-right">${r.v}%</span>
              </div>`).join('')}
          </div>
        </div>
      </div>
      <div class="card overflow-hidden">
        <div class="px-4 py-3 text-sm font-semibold" style="border-bottom:1px solid var(--border)">模型消费排行</div>
        <table><thead><tr><th>排名</th><th>模型</th><th>调用次数</th><th>消费(¥)</th><th>占比</th><th>趋势</th></tr></thead>
        <tbody>
          <tr><td><span class="badge b-primary">1</span></td><td class="font-medium">${MODEL_SHORT[MODELS[0]]}</td><td>14</td><td>¥1.39</td><td><div class="flex items-center gap-1"><div class="w-16 h-2 rounded overflow-hidden" style="background:var(--muted)"><div class="h-full rounded" style="width:58%;background:var(--chart-1)"></div></div><span class="text-xs">58%</span></div></td><td><span class="text-xs" style="color:var(--success)">+12%</span></td></tr>
          <tr><td><span class="badge b-neutral">2</span></td><td class="font-medium">${MODEL_SHORT[MODELS[1]]}</td><td>7</td><td>¥0.67</td><td><div class="flex items-center gap-1"><div class="w-16 h-2 rounded overflow-hidden" style="background:var(--muted)"><div class="h-full rounded" style="width:28%;background:var(--chart-2)"></div></div><span class="text-xs">28%</span></div></td><td><span class="text-xs" style="color:var(--success)">+5%</span></td></tr>
          <tr><td><span class="badge b-neutral">3</span></td><td class="font-medium">${MODEL_SHORT[MODELS[2]]}</td><td>3</td><td>¥0.34</td><td><div class="flex items-center gap-1"><div class="w-16 h-2 rounded overflow-hidden" style="background:var(--muted)"><div class="h-full rounded" style="width:14%;background:var(--chart-3)"></div></div><span class="text-xs">14%</span></div></td><td><span class="text-xs" style="color:var(--destructive)">-3%</span></td></tr>
        </tbody></table>
      </div>
    </div>`;
}

// ===== 代理端 - 名下用户管理 =====
function agentUsers(){
  const users=[
    {id:2,name:'zhangsan',balance:120000,used:880000,keys:2,last:'5分钟前',active:true,models:'qwen2.5-72b, fast, mini',created:'2026-07-15 09:30:00'},
    {id:3,name:'wangwu',balance:500000,used:320000,keys:1,last:'1小时前',active:true,models:'qwen-turbo',created:'2026-07-22 14:18:00'},
  ];
  const agentDiscData = DISC_DATA.filter(d=>d.agent==='partner_lisi');
  function getUserDisc(uid){
    const d=agentDiscData.find(x=>x.uid===uid);
    if(!d) return '—';
    const vals=MODELS.map(m=>d.disc[m]).filter(v=>v!==null&&v!==undefined);
    if(!vals.length) return '—';
    const min=Math.min(...vals),max=Math.max(...vals);
    return min===max?min.toFixed(2):`${min.toFixed(2)}~${max.toFixed(2)}`;
  }
  return `<div class="card overflow-hidden">
    <div class="flex items-center justify-between p-3" style="border-bottom:1px solid var(--border)">
      <div class="flex items-center gap-2">
        <select class="input" style="width:120px"><option>今天</option><option>近7天</option><option>近30天</option><option>自定义</option></select>
        <input class="input" style="width:180px" placeholder="搜索用户...">
        <select class="input" style="width:100px"><option>全部状态</option><option>活跃</option><option>非活跃</option></select>
      </div>
      <div class="flex items-center gap-2">
        <button class="btn btn-primary btn-sm" onclick="showAgentUserForm()">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          新增用户
        </button>
        <button class="btn btn-outline btn-sm" onclick="showExportConfirm('agent-users', ${users.length})">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
          导出
        </button>
      </div>
    </div>
    <table data-export-type="agent-users"><thead><tr><th style="width:40px">${getExportAllCheckbox('agent-users', users.map(u=>u.id))}</th><th>用户名</th><th>余额(¥)</th><th>已用(¥)</th><th>API Keys(个)</th><th>创建时间</th><th>操作</th></tr></thead>
    <tbody>${users.map(u=>`<tr>
      <td>${getExportCheckbox('agent-users', u.id)}</td>
      <td>${(u.balance/QUOTA_PER_UNIT).toFixed(2)}</td>
      <td>${(u.used/QUOTA_PER_UNIT).toFixed(2)}</td>
      <td>${u.keys}</td>
      <td style="color:var(--muted-foreground);font-size:12px">${u.created}</td>
      <td>
        <div class="flex items-center gap-1">
          <button class="btn btn-ghost btn-sm" onclick="showAgentUserDetail(${u.id})" title="查看">查看</button>
          <button class="btn btn-ghost btn-sm" onclick="showAgentUserForm(${u.id})" title="编辑">编辑</button>
          <button class="btn btn-ghost btn-sm" onclick="deleteAgentUser(${u.id})" title="删除" style="color:var(--destructive)">删除</button>
          <button class="btn btn-ghost btn-sm" onclick="resetAgentUserPwd(${u.id})" title="重置密码">重置密码</button>
        </div>
      </td>
    </tr>`).join('')}</tbody></table>
    ${paginationHTML(users.length,1,10)}
  </div>`;
}

// 代理端用户表单中的折扣列表（临时状态）
let _discPairs = [];

function renderDiscPairs(){
  const box = document.getElementById('disc-pairs');
  if(!box) return;
  if(_discPairs.length === 0){
    box.innerHTML = '<div class="text-xs text-center py-3" style="color:var(--muted-foreground)">暂未添加折扣，用户将按原价使用模型</div>';
    return;
  }
  box.innerHTML = _discPairs.map((p,idx)=>{
    const th = DISCOUNT_THRESHOLD[p.model];
    const thOk = p.disc >= th;
    return `<div class="flex items-center justify-between p-2 rounded-lg" style="background:var(--muted)">
      <div class="flex items-center gap-2">
        <span class="text-xs font-medium">${MODEL_SHORT[p.model]}</span>
        <div class="flex items-center gap-1">
          <input class="input" type="number" step="0.1" min="0" max="10" value="${(p.disc*10).toFixed(1)}" 
            style="width:60px;height:24px;font-size:11px;padding:2px 6px"
            onchange="updateDiscPair(${idx}, this.value)">
          <span class="text-[11px]" style="color:var(--muted-foreground)">折</span>
        </div>
        ${!thOk?`<span class="text-[10px]" style="color:var(--destructive)">低于阈值</span>`:''}
      </div>
      <div class="flex items-center gap-2">
        <span class="text-[10px]" style="color:var(--muted-foreground)">阈值≥${(th*10).toFixed(1)}折</span>
        <button class="icon-btn" style="width:24px;height:24px" onclick="_discPairs.splice(${idx},1);renderDiscPairs()">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color:var(--destructive)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
    </div>`;
  }).join('');
}

function updateDiscPair(idx, val){
  const v = parseFloat(val);
  if(isNaN(v) || v<=0 || v>10) return;
  _discPairs[idx].disc = v/10;
  renderDiscPairs();
}

function addDiscPair(){
  const sel = document.getElementById('disc-model-sel');
  const inp = document.getElementById('disc-val-inp');
  const model = sel.value;
  const val = parseFloat(inp.value);
  if(!model){ showToast('请选择模型','请先选择要设置折扣的模型','warning'); return; }
  if(isNaN(val) || val<=0 || val>10){ showToast('折扣值无效','请输入有效的折扣值（0-10折）','warning'); return; }
  if(_discPairs.some(p=>p.model===model)){ showToast('模型已添加','该模型的折扣已存在，请先删除再重新添加','warning'); return; }
  _discPairs.push({model, disc: val/10});
  inp.value = '';
  sel.value = '';
  document.getElementById('disc-hint').textContent = '';
  renderDiscPairs();
}

function updateDiscHint(){
  const sel = document.getElementById('disc-model-sel');
  const hint = document.getElementById('disc-hint');
  if(!sel || !hint) return;
  const m = sel.value;
  if(!m){ hint.textContent = ''; return; }
  const th = DISCOUNT_THRESHOLD[m];
  hint.innerHTML = `${MODEL_SHORT[m]} 的最低折扣阈值为 <strong style="color:var(--foreground)">${(th*10).toFixed(1)}折</strong>（${th.toFixed(2)}），设置值不能低于此阈值`;
}

function showAgentUserForm(id){
  const title = id ? '编辑用户' : '新增用户';
  const msg = id ? '用户信息已更新' : '用户已创建，初始密码已设置';
  const btnText = id ? '保存' : '创建用户';
  // 加载已有折扣
  _discPairs = [];
  if(id){
    const agentDiscData = DISC_DATA.filter(d=>d.agent==='partner_lisi');
    const d = agentDiscData.find(x=>x.uid===id);
    if(d && d.disc){
      MODELS.forEach(m=>{
        if(d.disc[m] !== null && d.disc[m] !== undefined){
          _discPairs.push({model:m, disc:d.disc[m]});
        }
      });
    }
  }
  showModal(`<div class="p-5" style="max-width:680px;max-height:85vh;overflow-y:auto">
    <h3 class="text-base font-semibold mb-1">${title}</h3>
    <p class="text-xs mb-4" style="color:var(--muted-foreground)">为名下用户创建账号，用户可使用 API Key 调用模型</p>
    <div class="space-y-3">
      <div><label class="text-xs font-medium block mb-1">用户名 <span style="color:var(--destructive)">*</span></label>
        <input class="input w-full" ${id?'disabled':''} value="${id?'zhangsan':''}" placeholder="请输入用户名">
      </div>
      <div><label class="text-xs font-medium block mb-1">邮箱 <span style="color:var(--destructive)">*</span></label>
        <input class="input w-full" value="${id?'zhangsan@example.com':''}" placeholder="user@example.com" style="font-family:monospace">
      </div>
      ${!id ? `<div><label class="text-xs font-medium block mb-1">初始密码 <span style="color:var(--destructive)">*</span></label>
        <input class="input w-full" type="password" placeholder="设置初始登录密码">
      </div>` : ''}
    </div>
    <!-- 折扣设置 -->
    <div style="margin-top:16px;padding-top:16px;border-top:1px solid var(--border)">
      <div class="text-sm font-semibold mb-1">折扣设置</div>
      <p class="text-xs mb-3" style="color:var(--muted-foreground)">为该用户设置各模型的折扣，折扣值越低越优惠。折扣不能低于运营端设定的阈值。</p>
      <div class="flex items-center gap-2 mb-3">
        <select id="disc-model-sel" class="input" style="flex:1" onchange="updateDiscHint()">
          <option value="">选择模型...</option>
          ${MODELS.map(m=>`<option value="${m}">${MODEL_SHORT[m]}（最低${(DISCOUNT_THRESHOLD[m]*10).toFixed(1)}折）</option>`).join('')}
        </select>
        <div class="flex items-center gap-1">
          <input id="disc-val-inp" type="number" class="input" style="width:80px" min="0" max="10" step="0.1" placeholder="折扣值">
          <span class="text-[11px]" style="color:var(--muted-foreground)">折</span>
        </div>
        <button class="btn btn-outline btn-sm" onclick="addDiscPair()">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          添加
        </button>
      </div>
      <div id="disc-hint" class="text-[11px] mb-2" style="color:var(--muted-foreground);min-height:16px"></div>
      <div id="disc-pairs" class="space-y-1.5"></div>
      <div class="p-2.5 rounded-lg text-xs mt-3" style="background:var(--accent);color:var(--accent-foreground)">
        <strong>说明：</strong>折扣值 10.0 = 原价，8.0 = 8折。未设置折扣的模型按原价计费。
      </div>
    </div>
    <div class="flex justify-end gap-2 mt-4">
      <button class="btn btn-primary btn-sm" onclick="closeModal()">取消</button>
      <button class="btn btn-primary btn-sm" onclick="closeModal();showToast('${title}','${msg}')">${btnText}</button>
    </div>
  </div>`);
  renderDiscPairs();
}

function showAgentUserDetail(id){
  const users={
    2:{name:'zhangsan',balance:120000,used:880000,keys:2,last:'5分钟前',models:'qwen2.5-72b, fast, mini',createdAt:'2026-07-15'},
    3:{name:'wangwu',balance:500000,used:320000,keys:1,last:'1小时前',models:'qwen-turbo',createdAt:'2026-07-18'},
  };
  const u=users[id]; if(!u) return;
  const agentDiscData = DISC_DATA.filter(d=>d.agent==='partner_lisi');
  const d=agentDiscData.find(x=>x.uid===id);
  const curDisc = d ? d.disc : {};
  showModal(`<div class="p-5" style="max-width:680px">
    <div class="flex items-center justify-between mb-4">
      <div>
        <h3 class="text-base font-semibold">用户详情</h3>
        <p class="text-xs mt-0.5" style="color:var(--muted-foreground)">${u.name}</p>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-3 mb-4">
      <div class="p-3 rounded-lg" style="background:var(--muted)">
        <div class="text-[11px] font-medium" style="color:var(--muted-foreground)">余额</div>
        <div class="text-lg font-semibold mt-0.5">¥${(u.balance/QUOTA_PER_UNIT).toFixed(2)}</div>
      </div>
      <div class="p-3 rounded-lg" style="background:var(--muted)">
        <div class="text-[11px] font-medium" style="color:var(--muted-foreground)">已消费</div>
        <div class="text-lg font-semibold mt-0.5">¥${(u.used/QUOTA_PER_UNIT).toFixed(2)}</div>
      </div>
    </div>
    <div class="space-y-2 mb-4 p-3 rounded-lg text-xs" style="background:var(--muted)">
      <div class="text-[11px] font-medium mb-2" style="color:var(--muted-foreground)">模型折扣</div>
      ${MODELS.map(m=>{
        const v=curDisc[m];
        const th=DISCOUNT_THRESHOLD[m];
        const display = v!==null&&v!==undefined ? v.toFixed(2) : '1.00';
        return `<div class="flex justify-between items-center">
          <span style="color:var(--muted-foreground)">${MODEL_SHORT[m]}</span>
          <span class="font-medium">${display} <span class="text-[10px]" style="color:var(--muted-foreground)">(阈值≥${th.toFixed(2)})</span></span>
        </div>`;
      }).join('')}
    </div>
    <div class="flex justify-end">
      <button class="btn btn-primary btn-sm" onclick="closeModal()">关闭</button>
    </div>
  </div>`);
}

function toggleAgentUserStatus(id){
  showToast('用户状态','已切换用户状态');
}

function deleteAgentUser(id){
  const users={2:'zhangsan',3:'wangwu'};
  const uname=users[id]||'该用户';
  showModal(`<div class="p-5" style="max-width:480px">
    <h3 class="text-base font-semibold mb-2">确认删除</h3>
    <p class="text-sm mb-4" style="color:var(--muted-foreground)">确定要删除用户「${uname}」吗？删除后该用户的所有数据将无法恢复。</p>
    <div class="flex justify-end gap-2">
      <button class="btn btn-primary btn-sm" onclick="closeModal()">取消</button>
      <button class="btn btn-destructive btn-sm" onclick="closeModal();showToast('删除成功','用户已删除')">确认删除</button>
    </div>
  </div>`);
}

function resetAgentUserPwd(id){
  showModal(`<div class="p-5" style="max-width:480px">
    <h3 class="text-base font-semibold mb-2">重置密码</h3>
    <p class="text-xs mb-4" style="color:var(--muted-foreground)">将为用户生成新的随机密码，原密码将失效。</p>
    <div class="p-3 rounded-lg mb-4" style="background:var(--muted)">
      <div class="text-xs mb-1" style="color:var(--muted-foreground)">新密码</div>
      <div class="flex items-center gap-2">
        <code class="text-sm font-mono flex-1" style="color:var(--primary)">Aa7${Date.now().toString().slice(-6)}</code>
        <button class="btn btn-outline btn-sm" onclick="copyTxt('Aa7${Date.now().toString().slice(-6)}')">复制</button>
      </div>
    </div>
    <div class="flex justify-end gap-2">
      <button class="btn btn-primary btn-sm" onclick="closeModal()">取消</button>
      <button class="btn btn-primary btn-sm" onclick="closeModal();showToast('重置密码','新密码已生成，请通知用户')">确认重置</button>
    </div>
  </div>`);
}

function showAgentUserDiscount(id){
  const users={2:'zhangsan',3:'wangwu'};
  const uname=users[id]||'用户';
  const agentDiscData = DISC_DATA.filter(d=>d.agent==='partner_lisi');
  const d=agentDiscData.find(x=>x.uid===id);
  const curDisc = d ? d.disc : {};
  showModal(`<div class="p-5" style="max-width:680px">
    <div class="flex items-center justify-between mb-1">
      <h3 class="text-base font-semibold">折扣设置</h3>
      <span class="text-xs" style="color:var(--muted-foreground)">用户：${uname}</span>
    </div>
    <p class="text-xs mb-4" style="color:var(--muted-foreground)">为该用户设置各模型的折扣，折扣值越低越优惠。每个模型的折扣不能低于运营端设定的阈值。</p>
    <table class="w-full mb-2">
      <thead><tr>
        <th style="text-align:left" class="text-xs font-medium pb-2">模型</th>
        <th style="text-align:center" class="text-xs font-medium pb-2">最低阈值</th>
        <th style="text-align:right" class="text-xs font-medium pb-2">折扣值</th>
      </tr></thead>
      <tbody>${MODELS.map(m=>{
        const cur=curDisc[m];
        const th=DISCOUNT_THRESHOLD[m];
        const val=cur!==null&&cur!==undefined?cur:1.00;
        return `<tr>
          <td class="py-2 text-sm">${MODEL_SHORT[m]}</td>
          <td style="text-align:center" class="py-2">
            <span class="badge b-warning" style="font-size:11px">≥ ${(th*10).toFixed(1)}折</span>
          </td>
          <td style="text-align:right" class="py-2">
            <input id="ad-${m}" type="number" class="input" style="width:100px;text-align:right" min="${th}" max="1" step="0.05" value="${val.toFixed(2)}" onchange="validateDisc('${m}',${th})">
            <div id="ad-err-${m}" class="text-[10px] mt-1" style="color:var(--destructive);display:none">不能低于阈值 ${th.toFixed(2)}</div>
          </td>
        </tr>`;
      }).join('')}</tbody>
    </table>
    <div class="p-2.5 rounded-lg text-xs mt-3 mb-4" style="background:var(--accent);color:var(--accent-foreground)">
      <strong>说明：</strong>折扣值 1.00 = 原价，0.80 = 8折。每个模型的折扣必须 ≥ 对应阈值，否则无法保存。
    </div>
    <div class="flex justify-end gap-2">
      <button class="btn btn-primary btn-sm" onclick="closeModal()">取消</button>
      <button class="btn btn-primary btn-sm" onclick="saveAgentUserDisc(${id})">保存</button>
    </div>
  </div>`);
}

function validateDisc(m,th){
  const el=document.getElementById('ad-'+m);
  const err=document.getElementById('ad-err-'+m);
  const v=parseFloat(el.value);
  if(isNaN(v)||v<th){
    err.style.display='block';
    el.style.borderColor='var(--destructive)';
    return false;
  }
  err.style.display='none';
  el.style.borderColor='';
  return true;
}

function saveAgentUserDisc(id){
  let valid=true;
  MODELS.forEach(m=>{
    if(!validateDisc(m,DISCOUNT_THRESHOLD[m])) valid=false;
  });
  if(!valid){
    showToast('保存失败','部分折扣值低于阈值，请检查标红项');
    return;
  }
  const agentDiscData = DISC_DATA.filter(d=>d.agent==='partner_lisi');
  let d=agentDiscData.find(x=>x.uid===id);
  if(!d){
    d={id:Date.now(),user:'',uid:id,agent:'partner_lisi',disc:{}};
    DISC_DATA.push(d);
  }
  MODELS.forEach(m=>{
    const el=document.getElementById('ad-'+m);
    if(el){
      const v=parseFloat(el.value);
      d.disc[m]=isNaN(v)?null:v;
    }
  });
  closeModal();
  renderPage();
  showToast('保存成功','折扣设置已更新');
}

function agentTopup(){
  return `<div class="card overflow-hidden">
    <div class="flex items-center gap-2 p-3 flex-wrap" style="border-bottom:1px solid var(--border)">
      <select class="input" style="width:120px"><option selected>全部</option><option>今天</option><option>近7天</option><option>近30天</option><option>自定义</option></select>
      <select class="input" style="width:100px"><option>全部状态</option><option>待处理</option><option>已完成</option><option>已拒绝</option></select>
      <select class="input" style="width:120px"><option>全部用户</option><option>zhangsan</option><option>wangwu</option></select>
      <input class="input" style="width:180px" placeholder="付款方 / 交易单号">
      <button class="btn btn-outline btn-sm ml-auto" onclick="showExportConfirm('agent-topup', ${ORDERS.filter(o=>o.agent==='partner_lisi').length})">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
        导出
      </button>
    </div>
    <table data-export-type="agent-topup"><thead><tr><th style="width:40px">${getExportAllCheckbox('agent-topup', ORDERS.filter(o=>o.agent==='partner_lisi').map(o=>o.id))}</th><th>工单号</th><th>流水号</th><th>用户</th><th>金额(¥)</th><th>提交时间</th><th>状态</th><th>到账时间</th><th>备注</th><th>详情</th></tr></thead>
    <tbody>${ORDERS.filter(o=>o.agent==='partner_lisi').map((o,i)=>`<tr ${o.status==='completed'?'style="background:#f0fdf4"':''}>
      <td>${getExportCheckbox('agent-topup', o.id)}</td>
      <td style="font-family:monospace;font-size:12px;color:var(--muted-foreground)">${o.serialNo}</td>
      <td>${o.user}</td>
      <td class="font-semibold">${o.amount}</td>
      <td style="color:var(--muted-foreground)">${o.time}</td>
      <td><span class="badge ${ST[o.status].c}">${ST[o.status].l}</span></td>
      <td style="color:var(--muted-foreground)">${o.arriveTime||'—'}</td>
      <td style="color:var(--muted-foreground);font-size:12px">${o.note||''}</td>
      <td><span class="copy-link" onclick="showTopupDetail('${o.id}')">查看</span></td>
    </tr>`).join('')}</tbody></table>
    ${paginationHTML(ORDERS.filter(o=>o.agent==='partner_lisi').length,1,10)}
  </div>`;
}

// ===== 代理端 - 联系工单（运营端减法：仅展示名下用户提交的工单，只读不处理） =====
let agentContactFilter = 'all';
function agentContact(){
  const typeMap = {invoice:'开票',refund:'退款',other:'其他'};
  const contactStatusMap = {pending:{l:'未处理',c:'b-warning'},contacted:{l:'已处理',c:'b-success'},refunded:{l:'已处理',c:'b-success'}};
  const agentUsers = DISC_DATA.filter(d=>d.agent==='partner_lisi').map(d=>d.user);
  let list = CONTACT_REQS.filter(r=>agentUsers.includes(r.user));
  if(agentContactFilter!=='all') list = list.filter(r=>r.type===agentContactFilter);
  const reqs = list;
  const tabBar = `<div class="flex items-center px-4 pt-1 gap-1" style="border-bottom:1px solid var(--border)">
    ${[
      ['all','全部',CONTACT_REQS.filter(r=>agentUsers.includes(r.user)).length],
      ['refund','退款工单',CONTACT_REQS.filter(r=>agentUsers.includes(r.user)&&r.type==='refund').length],
      ['invoice','开票',CONTACT_REQS.filter(r=>agentUsers.includes(r.user)&&r.type==='invoice').length],
      ['other','其他',CONTACT_REQS.filter(r=>agentUsers.includes(r.user)&&r.type==='other').length]
    ].map(([k,l,c])=>`<button class="text-sm" style="padding:10px 12px;background:none;${agentContactFilter===k?`color:var(--primary);font-weight:600;border-bottom:2px solid var(--primary)`:''}" onclick="agentContactFilter='${k}';renderPage()">${l}<span class="ml-1" style="color:var(--muted-foreground);font-size:11px">${c}</span></button>`).join('')}
  </div>`;
  return `<div class="card overflow-hidden">
    ${tabBar}
    <div class="px-4 py-3">
      <div class="text-sm font-semibold">联系工单</div>
      <div class="text-xs mt-1" style="color:var(--muted-foreground)">仅展示名下用户提交的工单，处理由运营完成。</div>
    </div>
    ${reqs.length===0?`<div class="p-6 text-center text-xs" style="color:var(--muted-foreground)">暂无相关工单</div>`
      :`<table><thead><tr><th>工单号</th><th>类型</th><th>联系人</th><th>电话</th><th>提交时间</th><th>状态</th><th>操作</th></tr></thead>
        <tbody>${reqs.map(r=>`<tr ${r.status==='pending'?'style="background:color-mix(in srgb,var(--warning) 4%,transparent)"':''}>
          <td style="font-family:monospace;font-size:12px">${r.id}</td>
          <td><span class="badge ${contactBadgeMap[r.type]}">${typeMap[r.type]}</span></td>
          <td class="text-sm">${r.name||'—'}</td>
          <td class="text-sm tabular-nums" style="color:var(--muted-foreground)">${encField('phone', r.phone)}</td>
          <td style="color:var(--muted-foreground)">${r.time}</td>
          <td><span class="badge ${contactStatusMap[r.status].c}">${contactStatusMap[r.status].l}</span></td>
          <td>${r.type==='refund'?`<span class="copy-link" onclick="showRefundDetail('${r.id}')">查看详情</span>`:`<span class="copy-link" onclick="showContactDetail('${r.id}')">查看详情</span>`}</td>
        </tr>`).join('')}</tbody></table>`}
  </div>`;
}

// ===== 用户端 - 数据看板（运营端减法：去掉"活跃用户"统计和"用户消耗排行"表） =====
function userOverview(){
  const todayUsage=1.76, totalReqs=24;
  const totalTokens=248000;
  const userBalance=0.24, totalConsumption=156.8;
  const runwayDays=3;
  const usageFilter=`<div class="flex items-center gap-2 mb-3">
    ${buildTimeFilter('user-ov')}
    <select class="input" style="width:100px"><option>全部模型</option>${MODELS.map(m=>`<option>${MODEL_SHORT[m]}</option>`).join('')}</select>
  </div>`;
  const usageStats=`<div class="card overflow-hidden mb-4">
    <div class="grid grid-cols-3 divide-x" style="border-color:var(--border)">
      <div class="px-4 py-4 cursor-pointer hover:bg-muted/30 transition-colors" onclick="goToLogsFromOverview()">
        <div class="flex items-center gap-2 mb-2">
          <div class="icon-badge ib-chart-2" style="width:28px;height:28px;border-radius:8px"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:16px;height:16px">${ICONS.trending||''}</svg></div>
          <span class="text-xs font-medium" style="color:var(--muted-foreground)">消费金额</span>
        </div>
        <div class="font-mono text-2xl font-bold tabular-nums">¥${todayUsage}</div>
      </div>
      <div class="px-4 py-4 cursor-pointer hover:bg-muted/30 transition-colors" onclick="goToLogsFromOverview()">
        <div class="flex items-center gap-2 mb-2">
          <div class="icon-badge ib-chart-3" style="width:28px;height:28px;border-radius:8px"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:16px;height:16px">${ICONS.activity||''}</svg></div>
          <span class="text-xs font-medium" style="color:var(--muted-foreground)">请求次数</span>
        </div>
        <div class="font-mono text-2xl font-bold tabular-nums">${totalReqs}</div>
      </div>
      <div class="px-4 py-4 cursor-pointer hover:bg-muted/30 transition-colors" onclick="goToLogsFromOverview()">
        <div class="flex items-center gap-2 mb-2">
          <div class="icon-badge ib-chart-1" style="width:28px;height:28px;border-radius:8px"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:16px;height:16px">${ICONS.key||''}</svg></div>
          <span class="text-xs font-medium" style="color:var(--muted-foreground)">Token 消耗</span>
        </div>
        <div class="font-mono text-2xl font-bold tabular-nums">${(totalTokens/1000).toFixed(1)}K</div>
      </div>
    </div>
  </div>`;
  const usageTrend=`<div class="card p-4 mb-4">
    <div class="flex items-center justify-between mb-3">
      <div class="text-sm font-semibold">消费趋势</div>
    </div>
    <div class="flex items-end gap-1 h-40 mb-2">
      ${[0.2,0.1,0.3,0.2,0.5,0.4,0.3].map((v,i)=>`<div class="flex-1 flex flex-col items-center gap-1">
        <div class="w-full rounded-t" style="height:${(v/0.5*100).toFixed(0)}%;background:linear-gradient(to top,var(--chart-2),color-mix(in srgb,var(--chart-2) 70%,var(--chart-1)))"></div>
        <span class="text-[10px]" style="color:var(--muted-foreground)">${['2026-08-07','2026-08-08','2026-08-09','2026-08-10','2026-08-11','2026-08-12','2026-08-13'][i]}</span>
      </div>`).join('')}
    </div>
    <div class="text-[11px] text-center" style="color:var(--muted-foreground)">单位：¥ · 近7天消费趋势</div>
  </div>`;
  const reconCards=`<div class="grid grid-cols-3 gap-3">
    <div class="rounded-xl border p-4" style="background:linear-gradient(135deg,color-mix(in srgb,var(--chart-1) 10%,var(--background)),color-mix(in srgb,var(--chart-1) 4%,var(--background)));border-color:color-mix(in srgb,var(--chart-1) 20%,var(--border))">
      <div class="flex items-center gap-2 mb-3">
        <div class="icon-badge ib-chart-1" style="width:28px;height:28px;border-radius:8px"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:16px;height:16px"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg></div>
        <span class="text-xs font-medium" style="color:var(--muted-foreground)">余额</span>
      </div>
      <div class="font-mono text-2xl font-bold tracking-tight mb-1">¥${userBalance.toFixed(2)}</div>
      <div class="text-[11px]" style="color:var(--muted-foreground)">账户可用余额</div>
    </div>
    <div class="rounded-xl border p-4" style="background:linear-gradient(135deg,color-mix(in srgb,var(--chart-2) 10%,var(--background)),color-mix(in srgb,var(--chart-2) 4%,var(--background)));border-color:color-mix(in srgb,var(--chart-2) 20%,var(--border))">
      <div class="flex items-center gap-2 mb-3">
        <div class="icon-badge ib-chart-2" style="width:28px;height:28px;border-radius:8px"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:16px;height:16px"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 100-8 4 4 0 000 8z"/></svg></div>
        <span class="text-xs font-medium" style="color:var(--muted-foreground)">已消费</span>
      </div>
      <div class="font-mono text-2xl font-bold tracking-tight mb-1">¥${totalConsumption.toFixed(2)}</div>
      <div class="text-[11px]" style="color:var(--muted-foreground)">累计消费金额</div>
    </div>
    <div class="rounded-xl border p-4" style="background:linear-gradient(135deg,color-mix(in srgb,var(--success) 10%,var(--background)),color-mix(in srgb,var(--success) 4%,var(--background)));border-color:color-mix(in srgb,var(--success) 20%,var(--border))">
      <div class="flex items-center gap-2 mb-3">
        <div class="icon-badge ib-success" style="width:28px;height:28px;border-radius:8px"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:16px;height:16px"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg></div>
        <span class="text-xs font-medium" style="color:var(--muted-foreground)">预计续航</span>
      </div>
      <div class="font-mono text-2xl font-bold tracking-tight mb-1" style="color:var(--success)">~${runwayDays} 天</div>
      <div class="text-[11px]" style="color:var(--muted-foreground)">按近24h消费估算</div>
    </div>
  </div>`;
  const balanceCard=`<div class="card overflow-hidden mb-4">
    <div class="flex items-center justify-between p-4">
      <div>
        <div class="text-xs font-medium mb-1" style="color:var(--muted-foreground)">账户余额</div>
        <div class="font-mono text-2xl font-bold tracking-tight">¥${userBalance.toFixed(2)}</div>
      </div>
      <div class="flex gap-3">
        <div class="text-right">
          <div class="text-[11px] font-medium" style="color:var(--muted-foreground)">近24h消费</div>
          <div class="text-sm font-semibold tabular-nums mt-0.5">¥${todayUsage}</div>
        </div>
        <div class="text-right">
          <div class="text-[11px] font-medium" style="color:var(--muted-foreground)">预计续航</div>
          <div class="text-sm font-semibold tabular-nums mt-0.5">~${Math.floor(userBalance/todayUsage)} 天</div>
        </div>
      </div>
    </div>
  </div>`;
  return `
    ${balanceCard}
    <div style="border-top:1px solid #d4d4d4;margin:20px 0"></div>
    ${usageFilter}
    ${usageStats}
    ${usageTrend}`;
}

// ===== 用户端 - 仪表盘（运营端减法：去掉"按代理消费占比"和"供应商健康状态"） =====
function dashUser(){
  const logStats=[
    {label:'RPM',value:'2',icon:'activity',tone:'chart-1',desc:'每分钟请求'},
    {label:'TPM',value:'0.8K',icon:'trending',tone:'chart-2',desc:'每分钟Token'},
    {label:'活跃模型',value:'3',icon:'box',tone:'chart-1',desc:'调用中模型'},
  ];
  return `
    <div class="flex items-center gap-2 mb-3">
      ${buildTimeFilter('user-dash')}
      <select class="input" style="width:100px"><option>全部模型</option>${MODELS.map(m=>`<option>${MODEL_SHORT[m]}</option>`).join('')}</select>
      <select class="input" style="width:100px"><option>按小时</option><option>按天</option></select>
    </div>
    <div class="card overflow-hidden mb-4">
      <div class="grid grid-cols-3 divide-x" style="border-color:var(--border)">
        ${logStats.map(s=>`
          <div class="px-3 py-3" style="min-width:0">
            <div class="flex items-center gap-1.5 mb-1">
              <div class="icon-badge ib-${s.tone}" style="width:20px;height:20px;border-radius:4px"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:12px;height:12px">${ICONS[s.icon]||''}</svg></div>
              <span class="text-[11px] font-medium uppercase tracking-wide" style="color:var(--muted-foreground)">${s.label}</span>
            </div>
            <div class="font-mono text-lg font-bold tabular-nums">${s.value}</div>
            <div class="text-[11px] mt-0.5" style="color:var(--muted-foreground)">${s.desc}</div>
          </div>`).join('')}
      </div>
    </div>
    <div class="card overflow-hidden mb-4">
      <div class="flex items-center justify-between px-4 py-3" style="border-bottom:1px solid var(--border)">
        <div class="flex items-center gap-2">
          <div class="icon-badge ib-chart-4" style="width:24px;height:24px;border-radius:6px"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:14px;height:14px"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/></svg></div>
          <span class="text-sm font-semibold">模型调用分析</span>
          <span class="text-xs" style="color:var(--muted-foreground)">总计: 24次</span>
        </div>
        <div class="flex gap-1 rounded-lg p-1" style="background:var(--muted)">
          <button class="tab-btn active" onclick="switchChartTab(this,'user-chart-trend')">趋势</button>
          <button class="tab-btn" onclick="switchChartTab(this,'user-chart-prop')">占比</button>
          <button class="tab-btn" onclick="switchChartTab(this,'user-chart-top')">排行</button>
        </div>
      </div>
      <div id="user-chart-trend" class="p-4">
        <div class="flex items-end gap-1.5 h-40 mb-2">
          ${[1,2,1,3,2,3,4].map((v,i)=>`<div class="flex-1 flex flex-col items-center gap-1">
            <div class="w-full rounded-t" style="height:${(v/4*100).toFixed(0)}%;background:linear-gradient(to top,var(--chart-1),color-mix(in srgb,var(--chart-1) 70%,var(--chart-2)))"></div>
            <span class="text-[10px]" style="color:var(--muted-foreground)">${['2026-08-07','2026-08-08','2026-08-09','2026-08-10','2026-08-11','2026-08-12','2026-08-13'][i]}</span>
          </div>`).join('')}
        </div>
        <div class="flex items-center gap-4 text-xs" style="color:var(--muted-foreground)">
          ${MODELS.map((m,idx)=>`<span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded" style="background:var(--chart-${idx+1})"></span>${MODEL_SHORT[m]}</span>`).join('')}
        </div>
      </div>
      <div id="user-chart-prop" class="p-4" style="display:none">
        <div class="flex items-center gap-6">
          <div class="relative" style="width:140px;height:140px">
            <svg viewBox="0 0 36 36" style="width:140px;height:140px;transform:rotate(-90deg)">
              <circle cx="18" cy="18" r="14" fill="none" stroke="var(--muted)" stroke-width="5"/>
              <circle cx="18" cy="18" r="14" fill="none" stroke="var(--chart-1)" stroke-width="5" stroke-dasharray="${58/100*88} 88" stroke-linecap="round"/>
              <circle cx="18" cy="18" r="14" fill="none" stroke="var(--chart-2)" stroke-width="5" stroke-dasharray="${28/100*88} 88" stroke-dashoffset="${-58/100*88}" stroke-linecap="round"/>
              <circle cx="18" cy="18" r="14" fill="none" stroke="var(--chart-3)" stroke-width="5" stroke-dasharray="${14/100*88} 88" stroke-dashoffset="${-86/100*88}" stroke-linecap="round"/>
            </svg>
            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <span class="text-lg font-semibold">¥1.76</span>
              <span class="text-[10px]" style="color:var(--muted-foreground)">总消费</span>
            </div>
          </div>
          <div class="flex-1 space-y-2">
            ${[{m:MODEL_SHORT[MODELS[0]],v:58,c:'chart-1',cost:1.39},{m:MODEL_SHORT[MODELS[1]],v:28,c:'chart-2',cost:0.67},{m:MODEL_SHORT[MODELS[2]],v:14,c:'chart-3',cost:0.34}].map(r=>`
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded" style="background:var(--${r.c})"></div>
                <span class="text-xs flex-1">${r.m}</span>
                <span class="text-xs" style="color:var(--muted-foreground)">¥${r.cost}</span>
                <span class="text-xs font-semibold w-10 text-right">${r.v}%</span>
              </div>`).join('')}
          </div>
        </div>
      </div>
      <div id="user-chart-top" class="p-4" style="display:none">
        ${[{m:MODEL_SHORT[MODELS[0]],cnt:14,cost:1.39,pct:58,c:'chart-1'},{m:MODEL_SHORT[MODELS[1]],cnt:7,cost:0.67,pct:28,c:'chart-2'},{m:MODEL_SHORT[MODELS[2]],cnt:3,cost:0.34,pct:14,c:'chart-3'}].map((r,i)=>`
          <div class="flex items-center gap-3 py-2" style="${i<2?'border-bottom:1px solid var(--border)':''}">
            <span class="badge ${i===0?'b-primary':'b-neutral'}">${i+1}</span>
            <span class="text-sm font-medium flex-1">${r.m}</span>
            <span class="text-xs" style="color:var(--muted-foreground)">${r.cnt}次</span>
            <span class="text-sm font-semibold w-16 text-right">¥${r.cost}</span>
            <div class="flex items-center gap-1 w-24">
              <div class="flex-1 h-2 rounded overflow-hidden" style="background:var(--muted)"><div class="h-full rounded" style="width:${r.pct}%;background:var(--${r.c})"></div></div>
              <span class="text-xs w-8 text-right">${r.pct}%</span>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

// ===== 用户端 - 排行榜（运营端减法：去掉"按代理排行"Tab） =====
function userRankings(){
  return `
    <div class="text-sm font-semibold mb-3">按模型排行</div>
    <div class="grid grid-cols-3 gap-3 mb-3">
      ${statCard('coins','chart-1','模型总消费','¥1.76')}
      ${statCard('activity','chart-2','总调用次数','24')}
      ${statCard('box','chart-3','活跃模型数','3')}
    </div>
    <div class="grid grid-cols-2 gap-3 mb-3">
      <div class="card p-4">
        <div class="text-sm font-semibold mb-3">模型消费占比</div>
        <div class="flex items-center gap-6">
          <div class="relative" style="width:140px;height:140px">
            <svg viewBox="0 0 36 36" style="width:140px;height:140px;transform:rotate(-90deg)">
              <circle cx="18" cy="18" r="14" fill="none" stroke="var(--muted)" stroke-width="5"/>
              <circle cx="18" cy="18" r="14" fill="none" stroke="var(--chart-1)" stroke-width="5" stroke-dasharray="${58/100*88} 88" stroke-linecap="round"/>
              <circle cx="18" cy="18" r="14" fill="none" stroke="var(--chart-2)" stroke-width="5" stroke-dasharray="${28/100*88} 88" stroke-dashoffset="${-58/100*88}" stroke-linecap="round"/>
              <circle cx="18" cy="18" r="14" fill="none" stroke="var(--chart-3)" stroke-width="5" stroke-dasharray="${14/100*88} 88" stroke-dashoffset="${-86/100*88}" stroke-linecap="round"/>
            </svg>
            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <span class="text-lg font-semibold">¥1.76</span>
              <span class="text-[10px]" style="color:var(--muted-foreground)">总消费</span>
            </div>
          </div>
          <div class="flex-1 space-y-2">
            ${[{m:MODEL_SHORT[MODELS[0]],v:58,c:'chart-1',cost:1.39},{m:MODEL_SHORT[MODELS[1]],v:28,c:'chart-2',cost:0.67},{m:MODEL_SHORT[MODELS[2]],v:14,c:'chart-3',cost:0.34}].map(r=>`
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded" style="background:var(--${r.c})"></div>
                <span class="text-xs flex-1">${r.m}</span>
                <span class="text-xs" style="color:var(--muted-foreground)">¥${r.cost}</span>
                <span class="text-xs font-semibold w-10 text-right">${r.v}%</span>
              </div>`).join('')}
          </div>
        </div>
      </div>
      <div class="card overflow-hidden">
        <div class="px-4 py-3 text-sm font-semibold" style="border-bottom:1px solid var(--border)">模型消费排行</div>
        <table><thead><tr><th>排名</th><th>模型</th><th>调用次数</th><th>消费(¥)</th><th>占比</th><th>趋势</th></tr></thead>
        <tbody>
          <tr><td><span class="badge b-primary">1</span></td><td class="font-medium">${MODEL_SHORT[MODELS[0]]}</td><td>14</td><td>¥1.39</td><td><div class="flex items-center gap-1"><div class="w-16 h-2 rounded overflow-hidden" style="background:var(--muted)"><div class="h-full rounded" style="width:58%;background:var(--chart-1)"></div></div><span class="text-xs">58%</span></div></td><td><span class="text-xs" style="color:var(--success)">+12%</span></td></tr>
          <tr><td><span class="badge b-neutral">2</span></td><td class="font-medium">${MODEL_SHORT[MODELS[1]]}</td><td>7</td><td>¥0.67</td><td><div class="flex items-center gap-1"><div class="w-16 h-2 rounded overflow-hidden" style="background:var(--muted)"><div class="h-full rounded" style="width:28%;background:var(--chart-2)"></div></div><span class="text-xs">28%</span></div></td><td><span class="text-xs" style="color:var(--success)">+5%</span></td></tr>
          <tr><td><span class="badge b-neutral">3</span></td><td class="font-medium">${MODEL_SHORT[MODELS[2]]}</td><td>3</td><td>¥0.34</td><td><div class="flex items-center gap-1"><div class="w-16 h-2 rounded overflow-hidden" style="background:var(--muted)"><div class="h-full rounded" style="width:14%;background:var(--chart-3)"></div></div><span class="text-xs">14%</span></div></td><td><span class="text-xs" style="color:var(--destructive)">-3%</span></td></tr>
        </tbody></table>
      </div>
    </div>`;
}

// ===== 总排行榜-v2（参考截图样式：KPI卡片 + 排行表格，无费用展示） =====
function rankingsV2(role){
  const isAdmin = role === 'admin';
  const isAgent = role === 'agent';
  const kpi = isAdmin ? { tokens:'12,847,392', calls:'48,291', models:'18', vendors:'1', active:'12' }
           : isAgent ? { tokens:'1,247,392', calls:'4,891', models:'6', vendors:'1', active:'3' }
           : { tokens:'248,000', calls:'48', models:'3', vendors:'1', active:'3' };
  const rows = isAdmin ? [
    {rank:1,change:'up',name:'qwen2.5-72b',provider:'阿里',avatar:'Q',color:'#6366F1',tokens:'3,214,567',input:'2,100,000',output:'1,114,567',calls:'12,345',pct:25.0,sparkColor:'var(--chart-1)',sparkPts:'0,15 10,13 20,10 30,8 40,5 50,3'},
    {rank:2,change:'down',name:'qwen-plus',provider:'阿里',avatar:'Q',color:'#6366F1',tokens:'2,876,543',input:'1,800,000',output:'1,076,543',calls:'10,234',pct:22.4,sparkColor:'var(--chart-2)',sparkPts:'0,3 10,5 20,8 30,9 40,12 50,15'},
    {rank:3,change:'flat',name:'qwen-turbo',provider:'阿里',avatar:'Q',color:'#6366F1',tokens:'2,345,678',input:'1,500,000',output:'845,678',calls:'8,765',pct:18.3,sparkColor:'var(--chart-3)',sparkPts:'0,10 10,9 20,11 30,10 40,10 50,10'},
    {rank:4,change:'flat',name:'glm-4-plus',provider:'智谱',avatar:'Z',color:'#3B82F6',tokens:'1,543,210',input:'1,000,000',output:'543,210',calls:'6,543',pct:12.0,sparkColor:'var(--chart-4)',sparkPts:'0,12 10,10 20,8 30,7 40,6 50,4'},
    {rank:5,change:'flat',name:'glm-4-flash',provider:'智谱',avatar:'Z',color:'#3B82F6',tokens:'987,654',input:'650,000',output:'337,654',calls:'4,321',pct:7.7,sparkColor:'var(--chart-5)',sparkPts:'0,14 10,12 20,10 30,8 40,6 50,4'},
  ] : isAgent ? [
    {rank:1,change:'up',name:'qwen2.5-72b',provider:'阿里',avatar:'Q',color:'#6366F1',tokens:'721,567',input:'500,000',output:'221,567',calls:'3,045',pct:58.0,sparkColor:'var(--chart-1)',sparkPts:'0,14 10,12 20,9 30,7 40,5 50,3'},
    {rank:2,change:'down',name:'qwen-plus',provider:'阿里',avatar:'Q',color:'#6366F1',tokens:'348,043',input:'240,000',output:'108,043',calls:'1,234',pct:28.0,sparkColor:'var(--chart-2)',sparkPts:'0,5 10,7 20,9 30,8 40,10 50,12'},
    {rank:3,change:'flat',name:'qwen-turbo',provider:'阿里',avatar:'Q',color:'#6366F1',tokens:'177,000',input:'120,000',output:'57,000',calls:'613',pct:14.0,sparkColor:'var(--chart-3)',sparkPts:'0,10 10,9 20,11 30,10 40,10 50,10'},
  ] : [
    {rank:1,change:'up',name:'qwen2.5-72b',provider:'阿里',avatar:'Q',color:'#6366F1',tokens:'143,567',input:'100,000',output:'43,567',calls:'14',pct:58.0,sparkColor:'var(--chart-1)',sparkPts:'0,14 10,12 20,9 30,7 40,5 50,3'},
    {rank:2,change:'down',name:'qwen-plus',provider:'阿里',avatar:'Q',color:'#6366F1',tokens:'69,043',input:'48,000',output:'21,043',calls:'7',pct:28.0,sparkColor:'var(--chart-2)',sparkPts:'0,5 10,7 20,9 30,8 40,10 50,12'},
    {rank:3,change:'flat',name:'qwen-turbo',provider:'阿里',avatar:'Q',color:'#6366F1',tokens:'35,000',input:'24,000',output:'11,000',calls:'3',pct:14.0,sparkColor:'var(--chart-3)',sparkPts:'0,10 10,9 20,11 30,10 40,10 50,10'},
  ];
  const medalIcon = (r) => r===1 ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="9" r="6" fill="#FFD700" stroke="#E6B800" stroke-width="1"/><path d="M8 15l-3 6 4-2 2 3 1-4" fill="#FFD700" stroke="#E6B800" stroke-width="1" stroke-linejoin="round"/><text x="12" y="12" text-anchor="middle" font-size="8" font-weight="bold" fill="#8B6914">1</text></svg>` : r===2 ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="9" r="6" fill="#C0C0C0" stroke="#A8A8A8" stroke-width="1"/><path d="M8 15l-3 6 4-2 2 3 1-4" fill="#C0C0C0" stroke="#A8A8A8" stroke-width="1" stroke-linejoin="round"/><text x="12" y="12" text-anchor="middle" font-size="8" font-weight="bold" fill="#5C5C5C">2</text></svg>` : r===3 ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="9" r="6" fill="#CD7F32" stroke="#A86529" stroke-width="1"/><path d="M8 15l-3 6 4-2 2 3 1-4" fill="#CD7F32" stroke="#A86529" stroke-width="1" stroke-linejoin="round"/><text x="12" y="12" text-anchor="middle" font-size="8" font-weight="bold" fill="#fff">3</text></svg>` : null;
  const agentRankHtml = isAdmin ? `
    <div class="grid grid-cols-3 gap-3 flex-shrink-0">
      ${statCard('handshake','chart-1','代理总数','3')}
      ${statCard('users','chart-2','代理用户总数','6')}
      ${statCard('coins','chart-3','代理用户总消费','¥4.20')}
    </div>
    <div class="card overflow-hidden flex-1 flex flex-col" style="min-height:0">
      <div class="px-4 py-3 text-sm font-semibold flex-shrink-0" style="border-bottom:1px solid var(--border)">代理排行</div>
      <div class="flex-1 overflow-auto">
        <table><thead><tr><th>排名</th><th>代理</th><th>公司</th><th>名下用户</th><th>用户消费(¥)</th><th>占比</th><th>近7天趋势</th></tr></thead>
        <tbody>
          <tr><td><div class="flex items-center justify-center">${medalIcon(1)}</div></td><td class="font-medium">partner_lisi</td><td style="color:var(--muted-foreground)">李四科技有限公司</td><td>2</td><td>¥2.40</td><td><div class="flex items-center gap-1 justify-center"><div class="w-16 h-2 rounded overflow-hidden" style="background:var(--muted)"><div class="h-full rounded" style="width:62%;background:var(--chart-1)"></div></div><span class="text-xs">62%</span></div></td><td><svg width="60" height="20" viewBox="0 0 50 18"><polyline fill="none" stroke="var(--chart-1)" stroke-width="1.5" points="0,14 10,12 20,10 30,8 40,6 50,4"/></svg></td></tr>
          <tr><td><div class="flex items-center justify-center">${medalIcon(2)}</div></td><td class="font-medium">partner_zhao</td><td style="color:var(--muted-foreground)">赵氏传媒集团</td><td>3</td><td>¥1.16</td><td><div class="flex items-center gap-1 justify-center"><div class="w-16 h-2 rounded overflow-hidden" style="background:var(--muted)"><div class="h-full rounded" style="width:30%;background:var(--chart-2)"></div></div><span class="text-xs">30%</span></div></td><td><svg width="60" height="20" viewBox="0 0 50 18"><polyline fill="none" stroke="var(--chart-2)" stroke-width="1.5" points="0,15 10,12 20,9 30,6 40,3 50,1"/></svg></td></tr>
          <tr><td><div class="flex items-center justify-center">${medalIcon(3)}</div></td><td class="font-medium">partner_wang</td><td style="color:var(--muted-foreground)">王总商贸有限公司</td><td>1</td><td>¥0.64</td><td><div class="flex items-center gap-1 justify-center"><div class="w-16 h-2 rounded overflow-hidden" style="background:var(--muted)"><div class="h-full rounded" style="width:8%;background:var(--chart-3)"></div></div><span class="text-xs">8%</span></div></td><td><svg width="60" height="20" viewBox="0 0 50 18"><polyline fill="none" stroke="var(--destructive)" stroke-width="1.5" points="0,4 10,6 20,8 30,10 40,12 50,14"/></svg></td></tr>
        </tbody></table>
      </div>
    </div>` : '';
  return `
    <div class="flex flex-col h-full" style="gap:12px">
      <div class="tab-bar flex-shrink-0" style="margin-bottom:0">
        <button class="tab active" onclick="switchRankV2(this,'v2-rank-model')">按模型排行</button>
        ${isAdmin?`<button class="tab" onclick="switchRankV2(this,'v2-rank-agent')">按代理排行</button>`:''}
      </div>
      <div id="v2-rank-model" class="flex flex-col" style="gap:12px;min-height:0">
        <div class="grid grid-cols-4 gap-3 flex-shrink-0">
          ${statCard('trending','chart-1','总Token消耗',kpi.tokens)}
          ${statCard('activity','chart-2','总调用次数',kpi.calls)}
          <div class="stat-card">
            <div class="flex items-center gap-2 mb-2">
              <div class="icon-badge ib-chart-3"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24">${ICONS.box||''}</svg></div>
              <span class="text-xs font-medium" style="color:var(--muted-foreground)">模型总数</span>
            </div>
            <div class="stat-value" style="font-family:'SF Mono',monospace">${kpi.models}</div>
          </div>
          ${statCard('box','chart-1','活跃模型',kpi.active)}
        </div>
        <div class="card overflow-hidden flex-1 flex flex-col" style="min-height:0">
          <div class="px-4 py-3 text-sm font-semibold flex-shrink-0" style="border-bottom:1px solid var(--border)">模型排行</div>
          <div class="flex-1 overflow-auto">
            <table><thead><tr>
              <th>排名</th><th>模型</th><th>Token总量</th><th>输入/输出</th><th>调用次数</th><th>占比</th><th>近7天趋势</th>
            </tr></thead>
            <tbody>
              ${rows.map(r=>`<tr>
                <td><div class="flex items-center justify-center">${medalIcon(r.rank) || `<span class="badge b-neutral">${r.rank}</span>`}</div></td>
                <td><div class="flex items-center gap-2"><div style="width:28px;height:28px;border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;font-weight:600;flex-shrink:0;background:${r.color}">${r.avatar}</div><div><div class="text-xs font-medium">${r.name}</div><div class="text-[10px]" style="color:var(--muted-foreground)">${r.provider}</div></div></div></td>
                <td class="font-mono text-xs tabular-nums">${r.tokens}</td>
                <td class="text-xs"><div class="font-mono tabular-nums">${r.input}</div><div class="text-[10px] font-mono" style="color:var(--muted-foreground)">${r.output}</div></td>
                <td class="font-mono text-xs tabular-nums">${r.calls}</td>
                <td><div class="flex items-center gap-1 justify-center"><div class="w-16 h-2 rounded overflow-hidden" style="background:var(--muted)"><div class="h-full rounded" style="width:${r.pct}%;background:var(--chart-1)"></div></div><span class="text-xs">${r.pct}%</span></div></td>
                <td><svg width="60" height="20" viewBox="0 0 50 18"><polyline fill="none" stroke="${r.sparkColor}" stroke-width="1.5" points="${r.sparkPts}"/></svg></td>
              </tr>`).join('')}
            </tbody></table>
          </div>
        </div>
      </div>
      ${isAdmin?`<div id="v2-rank-agent" class="flex flex-col" style="gap:12px;display:none;min-height:0">${agentRankHtml}</div>`:''}
    </div>`;
}
function switchRankV2(btn,id){
  btn.closest('.tab-bar').querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('v2-rank-model').style.display = id==='v2-rank-model'?'flex':'none';
  const a=document.getElementById('v2-rank-agent');
  if(a) a.style.display = id==='v2-rank-agent'?'flex':'none';
}

let walletTab='scan';
function wallet(){
  return `<div class="max-w-2xl space-y-4">
    <div class="card p-4">
      <div class="flex items-center justify-between">
        <div>
          <div class="text-xs" style="color:var(--muted-foreground)">账户余额</div>
          <div class="text-2xl font-semibold" style="font-family:monospace;font-variant-numeric:tabular-nums">¥${CUR_BALANCE.toFixed(2)}</div>
          <div class="text-[11px] mt-1" style="color:var(--muted-foreground)">可退款额度 ¥${CUR_BALANCE.toFixed(2)}</div>
        </div>
        <div class="flex flex-col gap-2 items-end">
          <button class="btn btn-outline btn-sm" onclick="go('my-topup')">充值记录</button>
          <button class="btn btn-outline btn-sm" style="color:var(--destructive);border-color:color-mix(in srgb,var(--destructive) 45%,var(--border))" onclick="showContactDlg('refund')">发起退款</button>
        </div>
      </div>
    </div>
    <div class="rounded-lg p-3" style="background:color-mix(in srgb,var(--destructive) 5%,transparent);border:1px solid color-mix(in srgb,var(--destructive) 20%,var(--border))">
      <div class="flex items-start gap-2 text-xs leading-relaxed" style="color:var(--muted-foreground)">
        <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color:var(--destructive)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        <div>
          <span class="font-medium" style="color:var(--destructive)">退款说明：</span>
          ${rechargeData.refundNote}
        </div>
      </div>
    </div>
    <div class="tab-bar-bg">
      <button class="tab ${walletTab==='scan'?'active':''}" onclick="switchWalletTab('scan')">扫码充值</button>
      <button class="tab ${walletTab==='transfer'?'active':''}" onclick="switchWalletTab('transfer')">转账充值</button>
    </div>
    ${walletTab==='scan'?walletScanTab():walletTransferTab()}
  </div>`;
}

function walletRechargeTab(){
  return `<div class="card p-4" style="border-color:color-mix(in srgb,var(--primary) 30%,var(--border))">
    <div class="flex items-center justify-between mb-3">
      <div class="text-sm font-semibold">银行转账充值</div>
      <span class="badge b-warning">临时人工通道</span>
    </div>
    <div class="rounded-lg p-3 mb-3 flex items-start gap-2 text-xs" style="background:#fffbeb;border:1px solid #fde68a;color:#92400e">
  <span>⚠️</span>
  <div class="flex-1" style="line-height:1.6">
    企业支付账号认证中，暂用银行转账人工充值。转账后请点击"充值工单"提交工单。
  </div>
</div>
    <div class="space-y-0">
      <div class="flex items-center justify-between py-2" style="border-bottom:1px solid var(--muted)">
        <span class="text-xs" style="color:var(--muted-foreground)">收款户名</span>
        <div class="flex items-center gap-1.5"><span class="text-xs font-medium">${rechargeData.accountName}</span><span class="copy-link" onclick="copyTxt('${rechargeData.accountName}')">复制</span></div>
      </div>
      <div class="flex items-center justify-between py-2" style="border-bottom:1px solid var(--muted)">
        <span class="text-xs" style="color:var(--muted-foreground)">开户银行</span>
        <div class="flex items-center gap-1.5"><span class="text-xs font-medium">${rechargeData.bankName}</span><span class="copy-link" onclick="copyTxt('${rechargeData.bankName}')">复制</span></div>
      </div>
      <div class="flex items-center justify-between py-2">
        <span class="text-xs" style="color:var(--muted-foreground)">银行账号</span>
        <div class="flex items-center gap-1.5">${encField('bank', rechargeData.bankAccount)}<span class="copy-link" onclick="copyTxt('${rechargeData.bankAccount.replace(/\\s/g,'')}')">复制</span></div>
      </div>
    </div>
    <button class="btn btn-primary w-full mt-3 text-center" onclick="showTopupDlg()">充值工单</button>
  </div>`;
}

function walletTransferTab(){
  return `<div class="space-y-4">
    <!-- 充值流程指引 -->
    <div class="card p-4" style="border-color:color-mix(in srgb,var(--primary) 30%,var(--border))">
      <div class="flex items-center gap-2 mb-4">
        <div class="w-7 h-7 rounded-lg flex items-center justify-center" style="background:color-mix(in srgb,var(--primary) 12%,transparent)">
          <svg class="w-4 h-4" style="color:var(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <div class="text-sm font-semibold">充值流程</div>
      </div>
      <div class="grid grid-cols-3 gap-3">
        <div class="rounded-lg p-3 text-center" style="background:var(--muted)">
          <div class="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center text-xs font-bold" style="background:var(--primary);color:#fff">1</div>
          <div class="text-xs font-medium mb-1">银行转账</div>
          <div class="text-[11px]" style="color:var(--muted-foreground)">向运营账户转账</div>
        </div>
        <div class="rounded-lg p-3 text-center" style="background:var(--muted)">
          <div class="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center text-xs font-bold" style="background:var(--primary);color:#fff">2</div>
          <div class="text-xs font-medium mb-1">提交工单</div>
          <div class="text-[11px]" style="color:var(--muted-foreground)">填写充值信息</div>
        </div>
        <div class="rounded-lg p-3 text-center" style="background:var(--muted)">
          <div class="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center text-xs font-bold" style="background:var(--primary);color:#fff">3</div>
          <div class="text-xs font-medium mb-1">运营核对到账</div>
          <div class="text-[11px]" style="color:var(--muted-foreground)">余额自动更新</div>
        </div>
      </div>
      <div class="mt-3 rounded-lg p-3 text-xs" style="background:var(--muted);color:var(--foreground);line-height:1.8">
        <div class="font-semibold mb-1">全程三步：</div>
        <div style="color:var(--muted-foreground)">第一步，银行转账。在"充值"页面查看运营账户（收款户名：${rechargeData.accountName}；开户银行：${rechargeData.bankName}；银行账号：${rechargeData.bankAccount}，页面上可一键复制），通过手机银行或网银将充值金额转入该账户；</div>
        <div class="mt-1" style="color:var(--muted-foreground)">第二步，提交工单。转账完成后点击页面上的"我已完成转账"，填写转账金额、转账时间等信息并提交；</div>
        <div class="mt-1" style="color:var(--muted-foreground)">第三步，运营核对到账。运营方核对收款无误后，余额会自动更新到您的账户，无需另行通知。请转账后保留转账回单，如余额长时间未到账，可通过左侧"联系工单"附上回单与我们联系处理。</div>
      </div>
    </div>
    <div class="card p-4" style="border-left:3px solid var(--primary)">
      <div class="flex items-center gap-2 mb-3">
        <div class="w-7 h-7 rounded-lg flex items-center justify-center" style="background:color-mix(in srgb,var(--primary) 12%,transparent)">
          <svg class="w-4 h-4" style="color:var(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
        </div>
        <div class="text-sm font-semibold">收款账户信息</div>
      </div>
      <div class="rounded-lg p-3" style="background:var(--muted)">
        <div class="flex items-center justify-between py-2" style="border-bottom:1px solid var(--border)">
          <span class="text-xs" style="color:var(--muted-foreground)">收款户名</span>
          <div class="flex items-center gap-1.5"><span class="text-sm font-medium">${rechargeData.accountName}</span><span class="copy-link" onclick="copyTxt('${rechargeData.accountName}')">复制</span></div>
        </div>
        <div class="flex items-center justify-between py-2" style="border-bottom:1px solid var(--border)">
          <span class="text-xs" style="color:var(--muted-foreground)">开户银行</span>
          <div class="flex items-center gap-1.5"><span class="text-sm">${rechargeData.bankName}</span><span class="copy-link" onclick="copyTxt('${rechargeData.bankName}')">复制</span></div>
        </div>
        <div class="flex items-center justify-between py-2">
          <span class="text-xs" style="color:var(--muted-foreground)">银行账号</span>
          <div class="flex items-center gap-1.5">${encField('bank', rechargeData.bankAccount)}<span class="copy-link" onclick="copyTxt('${rechargeData.bankAccount.replace(/\\s/g,'')}')">复制</span></div>
        </div>
      </div>
      <button class="btn btn-primary w-full mt-3" onclick="showTopupDlg()">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path></svg>
        充值工单
      </button>
    </div>

    <!-- 工作时间 -->
    <div class="card p-4" style="border-left:3px solid var(--chart-3)">
      <div class="flex items-center gap-2 mb-3">
        <div class="w-7 h-7 rounded-lg flex items-center justify-center" style="background:color-mix(in srgb,var(--chart-3) 15%,transparent)">
          <svg class="w-4 h-4" style="color:var(--chart-3)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <div class="text-sm font-semibold">工作时间</div>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div class="rounded-lg p-3" style="background:var(--muted)">
          <div class="text-xs mb-1" style="color:var(--muted-foreground)">工作日</div>
          <div class="text-sm font-medium">${rechargeData.workdayStart} - ${rechargeData.workdayEnd}</div>
        </div>
        <div class="rounded-lg p-3" style="background:var(--muted)">
          <div class="text-xs mb-1" style="color:var(--muted-foreground)">工作时段</div>
          <div class="text-sm font-medium font-mono">${rechargeData.startTime} - ${rechargeData.endTime}</div>
        </div>
      </div>
      <div class="rounded-lg p-3 mt-3 flex items-start gap-2 text-xs" style="background:#fffbeb;border:1px solid #fde68a;color:#92400e">
        <span>⚠️</span>
        <span style="line-height:1.6">${rechargeData.offWorkNote}</span>
      </div>
    </div>
  </div>`;
}

function switchWalletTab(tab){
  walletTab = tab;
  go('wallet');
}

function walletScanTab(){
  return `<div class="space-y-4">
    <!-- 充值流程 -->
    <div class="card p-4" style="border-color:color-mix(in srgb,var(--primary) 30%,var(--border))">
      <div class="flex items-center gap-2 mb-4">
        <div class="w-7 h-7 rounded-lg flex items-center justify-center" style="background:color-mix(in srgb,var(--primary) 12%,transparent)">
          <svg class="w-4 h-4" style="color:var(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <div class="text-sm font-semibold">充值流程</div>
      </div>
      <div class="grid grid-cols-3 gap-3">
        <div class="rounded-lg p-3 text-center" style="background:var(--muted)">
          <div class="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center text-xs font-bold" style="background:var(--primary);color:#fff">1</div>
          <div class="text-xs font-medium mb-1">扫码支付</div>
          <div class="text-[11px]" style="color:var(--muted-foreground)">微信扫码向运营账户付款</div>
        </div>
        <div class="rounded-lg p-3 text-center" style="background:var(--muted)">
          <div class="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center text-xs font-bold" style="background:var(--primary);color:#fff">2</div>
          <div class="text-xs font-medium mb-1">提交工单</div>
          <div class="text-[11px]" style="color:var(--muted-foreground)">填写充值信息</div>
        </div>
        <div class="rounded-lg p-3 text-center" style="background:var(--muted)">
          <div class="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center text-xs font-bold" style="background:var(--primary);color:#fff">3</div>
          <div class="text-xs font-medium mb-1">运营核对到账</div>
          <div class="text-[11px]" style="color:var(--muted-foreground)">余额自动更新</div>
        </div>
      </div>
      <div class="mt-3 rounded-lg p-3 text-xs" style="background:var(--muted);color:var(--foreground);line-height:1.8">
        <div style="color:var(--muted-foreground)">第一步，扫码支付。使用微信扫描下方二维码，向运营账户完成支付；</div>
        <div class="mt-1" style="color:var(--muted-foreground)">第二步，提交充值工单。支付完成后点击页面上的"充值工单"，填写充值金额、支付时间等信息并提交；</div>
        <div class="mt-1" style="color:var(--muted-foreground)">第三步，运营核对到账。运营方核对收款无误后，余额会自动更新到您的账户，无需另行通知。请付款后保留凭证，如余额长时间未到账，可通过左侧"联系工单"附上凭证与我们联系处理。</div>
      </div>
    </div>

    <!-- 支付方式 -->
    <div class="card p-4">
      <div class="text-sm font-semibold mb-3">支付方式</div>
      <div class="space-y-2">
        <div class="rounded-lg p-3 flex items-center gap-3" style="border:1px solid var(--border)">
          <div class="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold" style="background:#1677ff;color:#fff">支</div>
          <span class="text-sm">支付宝</span>
        </div>
        <div class="rounded-lg p-3 flex items-center gap-3 cursor-pointer" style="border:2px solid var(--primary)" onclick="showWechatQr()">
          <div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background:#07c160"><svg class="w-5 h-5" fill="none" stroke="#fff" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg></div>
          <span class="text-sm">微信支付</span>
        </div>
      </div>
    </div>

    <button class="btn btn-primary w-full" onclick="showTopupDlg()">充值工单</button>

    <!-- 工作时间 -->
    <div class="card p-4" style="border-left:3px solid var(--chart-3)">
      <div class="flex items-center gap-2 mb-3">
        <div class="w-7 h-7 rounded-lg flex items-center justify-center" style="background:color-mix(in srgb,var(--chart-3) 15%,transparent)">
          <svg class="w-4 h-4" style="color:var(--chart-3)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <div class="text-sm font-semibold">工作时间</div>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div class="rounded-lg p-3" style="background:var(--muted)">
          <div class="text-xs mb-1" style="color:var(--muted-foreground)">工作日</div>
          <div class="text-sm font-medium">${rechargeData.workdayStart} - ${rechargeData.workdayEnd}</div>
        </div>
        <div class="rounded-lg p-3" style="background:var(--muted)">
          <div class="text-xs mb-1" style="color:var(--muted-foreground)">工作时段</div>
          <div class="text-sm font-medium font-mono">${rechargeData.startTime} - ${rechargeData.endTime}</div>
        </div>
      </div>
      <div class="rounded-lg p-3 mt-3 flex items-start gap-2 text-xs" style="background:#fffbeb;border:1px solid #fde68a;color:#92400e">
        <span>⚠️</span>
        <span style="line-height:1.6">${rechargeData.offWorkNote}</span>
      </div>
    </div>
  </div>`;
}

function showContactDlg(type){
  const cfg = {
    invoice:{title:'开票联系',note:rechargeData.invoiceContactNote,accent:'var(--chart-2)',prefix:'inv',hasEmail:true,noteLabel:'备注（选填）',notePh:'如有其他开票需求请说明',btn:'提交开票申请'},
    refund:{title:'退款联系',note:'',accent:'var(--destructive)',prefix:'ref',hasEmail:false,noteLabel:'退款说明（选填）',notePh:'请说明退款原因；如有特殊情况（如需退回其他账户）请在此说明',hasAmount:true,hasLastTopup:false,btn:'提交退款申请'},
    other:{title:'其他咨询',note:rechargeData.otherContactNote,accent:'var(--muted-foreground)',prefix:'oth',hasEmail:false,noteLabel:'备注（选填）',notePh:'请说明您需要咨询的问题',btn:'提交咨询'},
  };
  const c = cfg[type]||cfg.other;
  showModal(`<div style="max-width:640px">
    <div class="relative flex items-center justify-center p-4" style="border-bottom:1px solid var(--border)">
      <h3 class="text-base font-semibold">${c.title}</h3>
      <button class="icon-btn" style="position:absolute;right:14px" onclick="closeModal()"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg></button>
    </div>
    <div class="p-5">
    ${c.note?`<div class="rounded-lg p-2 mb-4 text-xs" style="background:color-mix(in srgb,${c.accent} 8%,transparent);color:var(--muted-foreground);line-height:1.6">${c.note}</div>`:''}
    ${type==='refund'?`<div class="flex items-center gap-1.5 px-3 py-2 mb-4 rounded-lg text-xs" style="background:color-mix(in srgb,var(--primary) 7%,transparent);color:var(--muted-foreground);border:1px solid color-mix(in srgb,var(--primary) 18%,var(--border))">
      <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color:var(--primary)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      <span>提交后可在「<b>联系工单</b> ↳ <b>退款工单</b>」中查看退款进度与关联充值</span>
    </div>`:''}
    <div class="space-y-3">
      ${c.hasLastTopup?(()=>{const lt=REFUND_SRC['zhangsan']||REFUND_SRC.wangwu;const ch=lt.channel==='scan'?'扫码支付':'银行转账';return `<div class="rounded-lg p-3" style="background:color-mix(in srgb,var(--destructive) 7%,transparent);border:1px solid color-mix(in srgb,var(--destructive) 22%,var(--border))">
        <div class="flex items-center gap-1.5 mb-1.5">
          <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color:var(--destructive)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/></svg>
          <span class="text-xs font-semibold" style="color:var(--destructive)">退款将原路退回至最近一次充值渠道</span>
        </div>
        <div class="flex items-center justify-between py-1 text-xs">
          <span style="color:var(--muted-foreground)">充值渠道</span>
          <span class="font-medium">${ch} · 原付款账户 ${lt.account}</span>
        </div>
        <div class="flex items-center justify-between py-1 text-xs">
          <span style="color:var(--muted-foreground)">最近充值单</span>
          <span class="font-mono">${lt.id}（¥${Number(lt.amount).toFixed(2)} · ${lt.time}）</span>
        </div>
      </div>`;})():''}
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="text-xs font-medium block mb-1">联系人姓名 <span style="color:var(--destructive)">*</span></label>
          <input id="${c.prefix}-name" class="input w-full" placeholder="请输入您的姓名">
        </div>
        <div>
          <label class="text-xs font-medium block mb-1">联系电话 <span style="color:var(--destructive)">*</span></label>
          <input id="${c.prefix}-phone" class="input w-full" placeholder="请输入您的手机号">
        </div>
      </div>
      ${c.hasAmount?`<div>
        <label class="text-xs font-medium block mb-1">退款金额 <span style="color:var(--destructive)">*</span></label>
        <div style="position:relative">
          <span class="absolute left-3 top-1/2 -translate-y-1/2 text-sm pointer-events-none select-none" style="color:var(--muted-foreground)">¥</span>
          <input id="${c.prefix}-amount" type="number" class="input w-full" style="padding-left:28px" min="0.01" step="0.01" value="${CUR_BALANCE.toFixed(2)}">
        </div>
        <div class="flex items-center gap-1.5 mt-1.5 text-[11px]" style="color:var(--muted-foreground)">
          <span>最大可提现金额（当前账户余额）</span>
          <span class="font-semibold tabular-nums" style="color:var(--destructive)">¥${CUR_BALANCE.toFixed(2)}</span>
        </div>
      </div>`:''}
      ${c.hasEmail?`<div>
        <label class="text-xs font-medium block mb-1">邮箱（选填）</label>
        <input id="${c.prefix}-email" class="input w-full" placeholder="请输入您的邮箱">
      </div>`:''}
      <div>
        <label class="text-xs font-medium block mb-1">${c.noteLabel}</label>
        <textarea id="${c.prefix}-note" class="input w-full" rows="2" placeholder="${c.notePh}"></textarea>
      </div>
    </div>
    <div class="flex justify-end gap-2 mt-4">
      <button class="btn btn-primary btn-sm" onclick="closeModal()">取消</button>
      <button class="btn btn-primary btn-sm" onclick="submitContact('${type}')">${c.btn}</button>
    </div>
    </div>
  </div>`);
}

function switchRefundAcct(type){
  const company = document.getElementById('ref-acct-company');
  const personal = document.getElementById('ref-acct-personal');
  if(!company || !personal) return;
  if(type==='company'){ company.style.display=''; personal.style.display='none'; }
  else { company.style.display='none'; personal.style.display=''; }
  // 切换两个收款类型的卡片高亮
  document.querySelectorAll('input[name="refund-acct-type"]').forEach(r=>{
    const label = r.closest('label');
    if(!label) return;
    const on = r.value === type;
    if(on){
      label.style.borderColor = 'color-mix(in srgb,var(--primary) 30%,var(--border))';
      label.style.background = 'color-mix(in srgb,var(--primary) 5%,transparent)';
    } else {
      label.style.borderColor = 'var(--border)';
      label.style.background = 'var(--muted)';
    }
  });
}

function submitContact(type){
  const prefixMap = {invoice:'inv',refund:'ref',other:'oth'};
  const prefix = prefixMap[type]||'oth';
  const name = document.getElementById(prefix+'-name').value.trim();
  const phone = document.getElementById(prefix+'-phone').value.trim();
  if(!name){ showToast('请填写联系人姓名','error'); return; }
  if(!phone){ showToast('请填写联系电话','error'); return; }
  const emailEl = document.getElementById(prefix+'-email');
  const noteEl = document.getElementById(prefix+'-note');
  const amountEl = document.getElementById(prefix+'-amount');
  const email = emailEl ? emailEl.value.trim() : '';
  const note = noteEl ? noteEl.value.trim() : '';
  let refundAmount = 0;
  if(amountEl){
    refundAmount = Math.round((parseFloat(amountEl.value)||0)*100)/100;
    if(isNaN(refundAmount)||refundAmount<=0){ showToast('请输入有效退款金额','退款金额必须大于 0 元'); return; }
    if(refundAmount>CUR_BALANCE+0.0001){ showToast('退款金额超出可退额度','退款金额不能超过当前账户余额'); return; }
  }
  const now = new Date();
  const ts = now.getFullYear()+'-'+String(now.getMonth()+1).padStart(2,'0')+'-'+String(now.getDate()).padStart(2,'0')+' '+String(now.getHours()).padStart(2,'0')+':'+String(now.getMinutes()).padStart(2,'0')+':'+String(now.getSeconds()).padStart(2,'0');
  const seq = String(CONTACT_REQS.length+1).padStart(3,'0');
  const id = 'C'+now.getFullYear()+String(now.getMonth()+1).padStart(2,'0')+String(now.getDate()).padStart(2,'0')+seq;
  CONTACT_REQS.unshift({id,type,user:'zhangsan',name,phone,email,note,time:ts,status:'pending',...(refundAmount?{refundAmount}:{})});
  const label = contactLabelMap[type]||'其他';
  showToast('提交成功',label+'工单已提交，工单号 '+id+'，等待运营处理');
  closeModal();
}

function walletRecordsTab(){
  const my = USER_TOPUPS['zhangsan'] || [];
  return `<div class="card overflow-hidden">
    <div class="flex items-center gap-2 p-3 flex-wrap" style="border-bottom:1px solid var(--border)">
      <select class="input" style="width:120px"><option>今天</option><option>近7天</option><option>近30天</option><option>自定义</option></select>
      <select class="input" style="width:100px"><option>全部状态</option><option>待处理</option><option>已完成</option><option>已拒绝</option></select>
      <input class="input" style="width:160px" placeholder="搜索工单号...">
    </div>
    <table><thead><tr><th>工单号</th><th>流水号</th><th>金额(¥)</th><th>提交时间</th><th>状态</th><th>退款状态</th><th>到账时间</th><th>备注</th></tr></thead>
    <tbody>${my.map(o=>`<tr ${o.status==='completed'?'style="background:#f0fdf4"':''}>
      <td style="font-family:monospace;font-size:12px">${o.id}</td>
      <td style="font-family:monospace;font-size:12px;color:var(--muted-foreground)">${o.serialNo}</td>
      <td class="font-semibold">${o.amount}</td>
      <td style="color:var(--muted-foreground)">${o.time}</td>
      <td>${o.refStatus && o.refStatus!=='none'?`<span class="badge b-success">已完成</span>`:`<span class="badge ${ST[o.status].c}">${ST[o.status].l}</span>`}</td>
      <td>${o.refStatus==='partial'?`<span class="badge ${REF_BADGE.partial.c}">${REF_BADGE.partial.l} ¥${(o.refunded||0).toFixed(2)}</span>`:`<span class="badge ${(REF_BADGE[o.refStatus]||REF_BADGE.none).c}">${(REF_BADGE[o.refStatus]||REF_BADGE.none).l}</span>`}</td>
      <td style="color:var(--muted-foreground)">${o.arriveTime}</td><td style="color:var(--muted-foreground);font-size:12px">${o.note}</td>
    </tr>`).join('')}</tbody></table>
  </div>`;
}

function showWechatQr(qrType){
  const type = qrType || 'wechat';
  const isWechat = type === 'wechat';
  const qrImg = isWechat ? scanData.qrWechat : scanData.qrAlipay;
  const label = isWechat ? '微信' : '支付宝';
  const qrInner = qrImg
    ? `<img src="${qrImg}" style="width:200px;height:200px;object-fit:contain" alt="${label}支付二维码">`
    : `<div class="text-center">
          <svg class="w-12 h-12 mx-auto mb-2" style="color:var(--muted-foreground)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v1m6 11h2m-6 0h-2v4h2v-4zM6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
          <div class="text-xs" style="color:var(--muted-foreground)">${label}支付二维码</div>
        </div>`;
  const otherType = isWechat ? 'alipay' : 'wechat';
  const otherLabel = isWechat ? '支付宝' : '微信';
  showModal(`<div class="p-5 text-center" style="max-width:460px">
    <div class="flex items-center justify-center gap-3 mb-3">
      <button class="btn btn-sm ${isWechat?'btn-primary':'btn-outline'}" onclick="showWechatQr('wechat')">微信</button>
      <button class="btn btn-sm ${!isWechat?'btn-primary':'btn-outline'}" onclick="showWechatQr('alipay')">支付宝</button>
    </div>
    <div class="rounded-lg p-4 mb-3" style="background:var(--muted)">
      <div style="width:200px;height:200px;margin:0 auto;background:#fff;border-radius:8px;display:flex;align-items:center;justify-content:center">
        ${qrInner}
      </div>
    </div>
    <div class="text-xs mb-4 whitespace-pre-wrap leading-relaxed" style="color:var(--muted-foreground)">${scanData.qrNote||'付款完成后，请点击"充值工单"提交充值工单'}</div>
    <button class="btn btn-primary btn-sm w-full" onclick="closeModal()">关闭</button>
  </div>`);
}

function showTopupDlg(){
  const isScan = walletTab === 'scan';
  showModal(`<div class="p-5" style="max-width:680px">
    <h3 class="text-base font-semibold mb-1">${isScan?'扫码充值提报':'对公转账提报'}</h3>
    <p class="text-xs mb-4" style="color:var(--muted-foreground)">${isScan?'请填写微信扫码支付信息，可上传账单截图自动识别。':'请填写对公转账信息，可上传银行回单自动识别。'}</p>
    <div class="space-y-3">
      ${isScan?`<div class="grid grid-cols-2 gap-3">
          <div><label class="text-xs font-medium block mb-1">微信交易单号 <span style="color:var(--destructive)">*</span></label><input id="td-wechatSerial" class="input w-full" placeholder="请输入微信交易单号" autocomplete="off"></div>
          <div><label class="text-xs font-medium block mb-1">实际支付金额 (¥) <span style="color:var(--destructive)">*</span></label><input id="td-amount" type="number" class="input w-full" min="0.01" step="0.01" placeholder="0.00"></div>
        </div>
        <div><label class="text-xs font-medium block mb-1">支付时间 <span style="color:var(--destructive)">*</span></label><input id="td-payDate" type="datetime-local" step="1" class="input w-full" value="${nowLocalInput()}"></div>
        <div><label class="text-xs font-medium block mb-1">付款备注（选填）</label><input id="td-payNote" type="text" class="input w-full" placeholder="可选：填写付款备注" autocomplete="off"></div>
        <div>
          <label class="flex items-center gap-2 text-xs font-medium cursor-pointer" style="color:var(--foreground)">
            <input type="checkbox" id="td-agent-chk" onchange="toggleAgentPay()" style="width:15px;height:15px;accent-color:var(--primary)">
            此笔款项为代公司支付
          </label>
          <div id="td-agent-box" class="hidden mt-2">
            <label class="text-xs font-medium block mb-1">补充说明 <span style="color:var(--destructive)">*</span></label>
            <textarea id="td-agentNote" class="input w-full" rows="2" placeholder="本笔款项由【个人】代【XX公司（全称）】支付"></textarea>
          </div>
        </div>`
      :`<div class="grid grid-cols-2 gap-3">
          <div><label class="text-xs font-medium block mb-1">付款方名称 <span style="color:var(--destructive)">*</span></label><input id="td-payerName" class="input w-full" placeholder="请输入付款方名称" autocomplete="off"></div>
          <div><label class="text-xs font-medium block mb-1">付款银行账号 <span style="color:var(--destructive)">*</span></label><input id="td-payerAccount" class="input w-full" placeholder="请输入付款银行账号" autocomplete="off"></div>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div><label class="text-xs font-medium block mb-1">付款开户银行（精确到支行） <span style="color:var(--destructive)">*</span></label><input id="td-payerBank" class="input w-full" placeholder="如：中国工商银行深圳南山支行" autocomplete="off"></div>
          <div><label class="text-xs font-medium block mb-1">银行联行号（选填）</label><input id="td-bankNo" class="input w-full" placeholder="可选：" autocomplete="off"></div>
        </div>
        <div><label class="text-xs font-medium block mb-1">付款备注（选填）</label><input id="td-payNote" type="text" class="input w-full" placeholder="可选：填写付款备注" autocomplete="off"></div>
        <div class="grid grid-cols-2 gap-3">
          <div><label class="text-xs font-medium block mb-1">支付日期 <span style="color:var(--destructive)">*</span></label><input id="td-payDate" type="datetime-local" step="1" class="input w-full" value="${nowLocalInput()}"></div>
          <div><label class="text-xs font-medium block mb-1">支付金额 (¥) <span style="color:var(--destructive)">*</span></label><input id="td-amount" type="number" class="input w-full" min="0.01" step="0.01" placeholder="0.00"></div>
        </div>`}
      <div>
        <label class="flex items-center gap-2 px-3 py-2.5 rounded-lg cursor-pointer text-xs" style="border:1px dashed var(--border);color:var(--muted-foreground)">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
          <span id="td-upload-label">上传${isScan?'微信账单截图':'银行回单'}（可自动识别关键信息）</span>
          <input type="file" class="hidden" accept="image/*" onchange="handleTopupFile(this,'${isScan?'scan':'bank'}')">
        </label>
        <div id="td-file-list" class="mt-1.5 space-y-1"></div>
        <div id="td-ocr-status" class="mt-1.5"></div>
      </div>
    </div>
    <div class="flex justify-end gap-2 mt-4">
      <button class="btn btn-primary btn-sm" onclick="closeModal()">取消</button>
      <button class="btn btn-primary btn-sm" onclick="submitTopupDlg()">提交充值工单</button>
    </div>
  </div>`);
}

function toggleAgentPay(){
  const box = document.getElementById('td-agent-box');
  if(box) box.classList.toggle('hidden');
}

function setFieldVal(id,v){
  const el = document.getElementById(id);
  if(el) el.value = v;
}
function fieldVal(id){
  return document.getElementById(id)?.value.trim() || '';
}
// 当前时间，精确到秒，供时间为秒级选择器作默认值
function nowLocalInput(){
  const d = new Date();
  const p = n => String(n).padStart(2,'0');
  return `${d.getFullYear()}-${p(d.getMonth()+1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
}

// 模拟智能识别：按凭证类型自动回填关键字段（原型演示，真实 OCR 需接入识别服务）
function fillOcrFields(scope){
  if(scope==='scan'){
    setFieldVal('td-wechatSerial','42000012345026914');
    setFieldVal('td-amount','499.00');
    setFieldVal('td-payDate', nowLocalInput());
    setFieldVal('td-payNote','微信扫码充值');
  } else {
    setFieldVal('td-payerName','深圳星辰科技有限公司');
    setFieldVal('td-payerAccount','7559 2340 5678 9012');
    setFieldVal('td-payerBank','中国工商银行深圳南山支行');
    setFieldVal('td-bankNo','102584000888');
    setFieldVal('td-payDate', nowLocalInput());
    setFieldVal('td-amount','5000.00');
    setFieldVal('td-payNote','系统平台充值');
  }
}

function handleTopupFile(input, scope){
  const file = input.files[0]; if(!file) return;
  const size = file.size>1024*1024 ? (file.size/1024/1024).toFixed(1)+'MB' : (file.size/1024).toFixed(0)+'KB';
  const list = document.getElementById('td-file-list');
  const status = document.getElementById('td-ocr-status');
  list.innerHTML = `<div class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs" style="background:var(--muted)">
    <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color:var(--primary)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5a2 2 0 012 2v1m4 13a3 3 0 100-6 3 3 0 000 6z"/></svg>
    <span class="flex-1 truncate">${file.name}</span><span style="color:var(--muted-foreground)">${size}</span>
    <button class="btn btn-ghost btn-xs" style="padding:0 4px" onclick="this.parentElement.remove()">
      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
    </button>
  </div>`;
  status.innerHTML = `<span class="flex items-center gap-1.5 text-xs" style="color:var(--primary)">
    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="animation:spin 1s linear infinite"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
    正在智能识别${scope==='scan'?'账单':'回单'}关键信息...</span>`;
  setTimeout(()=>{
    fillOcrFields(scope);
    status.innerHTML = `<span class="text-xs" style="color:var(--success)">已自动识别并填充关键信息，请核对修正</span>`;
    showToast('识别完成','已自动填充回单关键信息，请核对', { type:'success', label:'知道了' });
  }, 1200);
}

function submitTopupDlg(){
  const isScan = walletTab === 'scan';
  if(isScan){
    if(!fieldVal('td-wechatSerial')){ showToast('提示','请填写微信交易单号'); return; }
    if(!fieldVal('td-amount') || parseFloat(fieldVal('td-amount'))<=0){ showToast('提示','请填写实际支付金额'); return; }
    if(!fieldVal('td-payDate')){ showToast('提示','请填写支付时间'); return; }
    const agentBox = document.getElementById('td-agent-box');
    if(agentBox && !agentBox.classList.contains('hidden') && !fieldVal('td-agentNote')){ showToast('提示','请填写代公司支付补充说明'); return; }
  } else {
    if(!fieldVal('td-payerName')){ showToast('提示','请填写付款方名称'); return; }
    if(!fieldVal('td-payerAccount')){ showToast('提示','请填写付款银行账号'); return; }
    if(!fieldVal('td-payerBank')){ showToast('提示','请填写付款开户银行（精确到支行）'); return; }
    if(!fieldVal('td-amount') || parseFloat(fieldVal('td-amount'))<=0){ showToast('提示','请填写支付金额'); return; }
    if(!fieldVal('td-payDate')){ showToast('提示','请填写支付日期'); return; }
  }
  closeModal();
  showToast('提交成功','充值工单已提交，等待运营核对');
  go('my-topup');
}

function myTopup(){
  const my = USER_TOPUPS['zhangsan'] || [];
  return `<div class="card overflow-hidden">
    <div class="flex items-center gap-2 p-3 flex-wrap" style="border-bottom:1px solid var(--border)">
      <select class="input" style="width:120px"><option selected>全部</option><option>今天</option><option>近7天</option><option>近30天</option><option>自定义</option></select>
      <select class="input" style="width:100px"><option>全部状态</option><option>待处理</option><option>已完成</option><option>已拒绝</option></select>
      <input class="input" style="width:200px" placeholder="付款方 / 交易单号">
      <button class="btn btn-outline btn-sm ml-auto" onclick="showExportConfirm('my-topup', ${my.length})">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
        导出
      </button>
    </div>
    <table data-export-type="my-topup"><thead><tr><th style="width:40px">${getExportAllCheckbox('my-topup', my.map(o=>o.id))}</th><th>工单号</th><th>流水号</th><th>金额(¥)</th><th>提交时间</th><th>状态</th><th>到账时间</th><th>备注</th><th>详情</th></tr></thead>
    <tbody>${my.map((o,i)=>`<tr ${o.status==='completed'?'style="background:#f0fdf4"':''}>
      <td>${getExportCheckbox('my-topup', o.id)}</td>
      <td style="font-family:monospace;font-size:12px;color:var(--muted-foreground)">${o.serialNo}</td>
      <td class="font-semibold">${o.amount}</td>
      <td style="color:var(--muted-foreground)">${o.time}</td>
      <td><span class="badge ${ST[o.status].c}">${ST[o.status].l}</span></td>
      <td style="color:var(--muted-foreground)">${o.arriveTime}</td><td style="color:var(--muted-foreground);font-size:12px">${o.note}</td>
      <td><span class="copy-link" onclick="showTopupDetail(${i})">查看</span></td>
    </tr>`).join('')}</tbody></table>
    ${paginationHTML(my.length,1,10)}
  </div>`;
}

function showTopupDetail(idx){
  const my=[
    {id:'T20260811001',serialNo:'LS20260811001',type:'scan',amount:500,payTime:'2026-08-11 14:30:00',time:'2026-08-11 14:35:00',status:'pending',arriveTime:'—',payer:'张三',serial:'WX202608111430001',companyPay:true,payNote:'本笔款项由【个人】代【深圳星辰科技有限公司（全称）】支付',note:'充值测试',files:['微信账单截图.jpg']},
    {id:'T20260810095',serialNo:'LS20260810095',type:'scan',amount:100,payTime:'2026-08-10 09:00:00',time:'2026-08-10 09:05:00',status:'completed',arriveTime:'2026-08-10 10:20:00',payer:'张三',serial:'WX202608100900123',companyPay:false,payNote:'',note:'已到账',reviewRemark:'转账已核实，金额无误，已到账',reviewTime:'2026-08-10 10:20:00',files:[]},
    {id:'T20260809088',serialNo:'LS20260809088',type:'scan',amount:200,payTime:'2026-08-09 16:35:00',time:'2026-08-09 16:40:00',status:'rejected',arriveTime:'—',payer:'张三',serial:'WX202608091635456',companyPay:false,payNote:'',note:'未查到转账',reviewRemark:'未查询到该笔转账记录，请核实付款后重新提交',reviewTime:'2026-08-11 09:00:00',files:['支付凭证.png']},
  ];
  let o;
  if(typeof idx==='number'){ o=my[idx]; }
  else if(typeof idx==='string'){ o=ORDERS.find(x=>x.id===idx); }
  if(!o) return;
  if(o.type===undefined) o.type = /^WX|^ZFB/.test(o.serial||'') ? 'scan' : 'transfer';
  const isScan = o.type!=='transfer';
  const isOper = typeof idx==='string';
  const fileRows = o.files && o.files.length ? o.files.map(f=>`
    <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;background:#fff;border:1px solid var(--border)">
      <svg class="w-4 h-4 flex-shrink-0" style="color:var(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
      <span class="text-sm truncate flex-1">${f}</span>
      <span class="text-xs flex-shrink-0" style="color:var(--muted-foreground)">点击预览</span>
      <svg class="w-3.5 h-3.5 flex-shrink-0" style="color:var(--muted-foreground)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
    </div>`).join('') : '<div class="text-sm" style="color:var(--muted-foreground)">未上传凭证</div>';
  const row = (l,v,cls)=>`<div><div class="text-xs mb-1" style="color:var(--muted-foreground)">${l}</div><div class="text-sm font-medium" style="color:var(--foreground);${cls||''};word-break:break-all">${v}</div></div>`;
  const secL = t=>`<div class="flex items-center gap-2 mb-3"><span style="width:3px;height:13px;border-radius:2px;background:#c9cdd4"></span><span class="text-sm font-semibold" style="color:var(--foreground)">${t}</span></div>`;
  const divider = '<div style="height:1px;background:var(--border);margin:15px 0"></div>';
  const payRows = isScan
    ? row('微信交易单号',`<span style="font-family:monospace">${o.serial||'—'}</span>`)+row('付款方名称',o.payer||'—')
    : row('付款方名称',o.payer||'—')+row('付款账号', encField('account', o.actNo))+row('付款开户银行',o.bank||'—')+row('银行联行号',o.bankCode||'—');
  const timeRows = row('支付时间',o.payTime||'—')+row('提交时间',o.time||'—')+(o.arriveTime&&o.arriveTime!=='—'?row('到账时间',o.arriveTime,'color:var(--chart-2)'):'');
  const reviewMap = {pending:{l:'待处理',c:'b-warning'},completed:{l:'已到账',c:'b-success'},rejected:{l:'已拒绝',c:'b-danger'}};
  const rev = reviewMap[o.status]||reviewMap.pending;
  const reviewInner = `<div class="space-y-3">
        ${row('核查结果',`<span class="badge ${rev.c}">${rev.l}</span>`)}
        ${o.reviewTime?row('核查时间',o.reviewTime):''}
        ${o.reviewRemark?row(o.status==='rejected'?'拒绝原因':'处理备注',o.reviewRemark):(o.status==='pending'?row('说明','运营尚未核查，请耐心等待'):'')}
      </div>`;
  const midInner = `${secL(isScan?'付款信息':'付款信息')}
      <div class="space-y-3">${payRows}</div>
      ${divider}${secL('时间信息')}
      <div class="space-y-3">${timeRows}</div>
      ${isScan?divider+secL('代付信息')+`<div class="space-y-3">${row('代公司支付',`是 <span class="badge b-primary" style="margin-left:4px">代付</span>`)+row('补充说明',o.payNote||'—')}</div>`:''}
      ${divider}${secL('付款备注')}
      <div class="text-sm font-medium" style="color:var(--foreground)">${o.note||'—'}</div>
      ${divider}${secL('付款凭证')}
      <div class="space-y-2">${fileRows}</div>`;
  showModal(`<div class="p-5" style="max-width:640px">
    <div class="rounded-2xl p-6 mb-4 text-center relative" style="background:#f0f4ff">
      <div class="absolute" style="top:16px;right:16px">
        <span class="badge ${ST[o.status].c}" style="font-size:12px;padding:4px 12px">${ST[o.status].l}</span>
      </div>
      <div class="text-sm mb-2" style="color:var(--muted-foreground)">充值金额</div>
      <div class="text-3xl font-bold" style="color:var(--primary);font-family:monospace">¥${o.amount}</div>
      <div class="text-xs mt-3" style="color:var(--muted-foreground);display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:wrap">
        <span class="badge ${isScan?'b-primary':'b-info'}" style="font-size:11px;padding:2px 9px">${isScan?'扫码充值（微信）':'对公转账'}</span>
        <span>工单号 ${o.id}</span>
        <span style="color:var(--muted-foreground)">·</span>
        <span>流水号 ${o.serialNo}</span>
      </div>
    </div>
    <!-- ② 用户支付信息 -->
    <div class="rounded-2xl mb-4" style="border:1px solid var(--border);overflow:hidden">
      <div class="flex items-center gap-2 px-4 py-2.5" style="background:var(--muted);border-bottom:1px solid var(--border)">
        <span style="font-size:14px">💳</span>
        <span class="text-sm font-semibold">用户支付信息</span>
      </div>
      <div class="p-4">
        ${midInner}
      </div>
    </div>
    <!-- ③ 运营端反馈 -->
    <div class="rounded-2xl mb-4" style="overflow:hidden;background:${o.status==='rejected'?'color-mix(in srgb,var(--destructive) 4%,transparent)':'color-mix(in srgb,var(--primary) 4%,transparent)'};border:1px solid ${o.status==='rejected'?'color-mix(in srgb,var(--destructive) 25%,var(--border))':'color-mix(in srgb,var(--primary) 18%,var(--border))'}">
      <div class="flex items-center gap-2 px-4 py-2.5" style="border-bottom:1px solid ${o.status==='rejected'?'color-mix(in srgb,var(--destructive) 20%,var(--border))':'color-mix(in srgb,var(--primary) 18%,var(--border))'}">
        <span style="font-size:14px">⚙️</span>
        <span class="text-sm font-semibold" style="color:${o.status==='rejected'?'var(--destructive)':'var(--primary)'}">运营端反馈</span>
      </div>
      <div class="p-4">${reviewInner}</div>
    </div>
    <div class="flex items-center justify-end gap-3 pt-4 mt-4" style="border-top:1px solid var(--border)">
      <button class="btn btn-primary btn-sm" onclick="closeModal()">关闭</button>
      ${isOper && o.status==='pending' ? `<button class="btn btn-primary btn-sm" onclick="reviewOrder('${o.id}')">处理</button>` : ''}
    </div>
  </div>`, 640);
}

// ===== 消息通知 =====
function notifPage(){
  const roleMsgs = MESSAGES.filter(m=>m.roles.includes(curRole));
  const modelMsgs = roleMsgs.filter(m=>m.type==='model');
  const rechargeMsgs = roleMsgs.filter(m=>m.type==='recharge');
  const workorderMsgs = roleMsgs.filter(m=>m.type==='workorder');
  const modelUnread = modelMsgs.filter(m=>!m.read).length;
  const rechargeUnread = rechargeMsgs.filter(m=>!m.read).length;
  const workorderUnread = workorderMsgs.filter(m=>!m.read).length;
  const allUnread = roleMsgs.filter(m=>!m.read).length;
  const rechargeLabel = '财务消息';
  const hasRecharge = rechargeMsgs.length > 0;
  const hasWorkorder = workorderMsgs.length > 0;
  let cardCount = 2;
  if(hasRecharge) cardCount++;
  if(hasWorkorder) cardCount++;
  const gridCols = cardCount===2?'grid-cols-2':cardCount===3?'grid-cols-3':'grid-cols-4';

  return `
    <div class="grid ${gridCols} gap-3 mb-4">
      <div class="card p-4">
        <div class="flex items-center gap-2 mb-2">
          <div class="icon-badge ib-primary"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">${ICONS.bell}</svg></div>
          <span class="text-xs font-medium" style="color:var(--muted-foreground)">全部消息</span>
        </div>
        <div class="stat-value" style="font-size:24px">${roleMsgs.length}</div>
        <div class="text-xs mt-1" style="color:var(--muted-foreground)">未读 ${allUnread} 条</div>
      </div>
      <div class="card p-4">
        <div class="flex items-center gap-2 mb-2">
          <div class="icon-badge ib-info"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">${ICONS.box}</svg></div>
          <span class="text-xs font-medium" style="color:var(--muted-foreground)">模型消息</span>
        </div>
        <div class="stat-value" style="font-size:24px">${modelMsgs.length}</div>
        <div class="text-xs mt-1" style="color:var(--muted-foreground)">未读 ${modelUnread} 条</div>
      </div>
      ${hasRecharge?`
      <div class="card p-4">
        <div class="flex items-center gap-2 mb-2">
          <div class="icon-badge ib-success"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">${ICONS.wallet}</svg></div>
          <span class="text-xs font-medium" style="color:var(--muted-foreground)">${rechargeLabel}</span>
        </div>
        <div class="stat-value" style="font-size:24px">${rechargeMsgs.length}</div>
        <div class="text-xs mt-1" style="color:var(--muted-foreground)">未读 ${rechargeUnread} 条</div>
      </div>`:''}
      ${hasWorkorder?`
      <div class="card p-4">
        <div class="flex items-center gap-2 mb-2">
          <div class="icon-badge ib-warning"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">${ICONS.file}</svg></div>
          <span class="text-xs font-medium" style="color:var(--muted-foreground)">工单消息</span>
        </div>
        <div class="stat-value" style="font-size:24px">${workorderMsgs.length}</div>
        <div class="text-xs mt-1" style="color:var(--muted-foreground)">未读 ${workorderUnread} 条</div>
      </div>`:''}
    </div>

    <div class="card overflow-hidden">
      <div class="tab-bar p-3" style="border-bottom:1px solid var(--border)">
        <button class="tab active" onclick="switchNotifTab(this,'notif-all')">全部消息</button>
        <button class="tab" onclick="switchNotifTab(this,'notif-model')">模型相关 ${modelUnread>0?`<span class="badge b-danger" style="margin-left:4px;padding:0 5px;font-size:10px">${modelUnread}</span>`:''}</button>
        ${hasRecharge?`<button class="tab" onclick="switchNotifTab(this,'notif-recharge')">财务相关 ${rechargeUnread>0?`<span class="badge b-danger" style="margin-left:4px;padding:0 5px;font-size:10px">${rechargeUnread}</span>`:''}</button>`:''}
        ${hasWorkorder?`<button class="tab" onclick="switchNotifTab(this,'notif-workorder')">工单相关 ${workorderUnread>0?`<span class="badge b-danger" style="margin-left:4px;padding:0 5px;font-size:10px">${workorderUnread}</span>`:''}</button>`:''}
        <button class="btn btn-outline btn-sm ml-auto" onclick="markAllNotifRead()">全部标为已读</button>
      </div>

      <div id="notif-all">
        ${roleMsgs.map(m=>notifItem(m)).join('') || '<div class="p-8 text-center text-sm" style="color:var(--muted-foreground)">暂无消息</div>'}
      </div>
      <div id="notif-model" style="display:none">
        ${modelMsgs.map(m=>notifItem(m)).join('') || '<div class="p-8 text-center text-sm" style="color:var(--muted-foreground)">暂无模型消息</div>'}
      </div>
      ${hasRecharge?`<div id="notif-recharge" style="display:none">
        ${rechargeMsgs.map(m=>notifItem(m)).join('') || '<div class="p-8 text-center text-sm" style="color:var(--muted-foreground)">暂无充值消息</div>'}
      </div>`:''}
      ${hasWorkorder?`<div id="notif-workorder" style="display:none">
        ${workorderMsgs.map(m=>notifItem(m)).join('') || '<div class="p-8 text-center text-sm" style="color:var(--muted-foreground)">暂无工单消息</div>'}
      </div>`:''}
      ${paginationHTML(roleMsgs.length,1,10)}
    </div>`;
}

function notifItem(m){
  let typeIcon, typeLabel;
  if(m.type==='model'){
    typeIcon = `<div class="icon-badge ib-info" style="width:36px;height:36px"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">${ICONS.box}</svg></div>`;
    typeLabel = '<span class="badge b-info">模型</span>';
  } else if(m.type==='recharge'){
    typeIcon = `<div class="icon-badge ib-success" style="width:36px;height:36px"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">${ICONS.wallet}</svg></div>`;
    typeLabel = '<span class="badge b-success">充值</span>';
  } else {
    typeIcon = `<div class="icon-badge ib-warning" style="width:36px;height:36px"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">${ICONS.file}</svg></div>`;
    typeLabel = '<span class="badge b-warning">工单</span>';
  }
  return `<div class="flex items-start gap-3 p-4" style="border-bottom:1px solid var(--border);${m.read?'':'background:color-mix(in srgb,var(--primary) 3%,transparent)'}">
    ${typeIcon}
    <div class="flex-1 min-w-0">
      <div class="flex items-center gap-2 mb-1">
        ${typeLabel}
        <span class="text-sm font-medium">${m.title}</span>
        ${m.read?'':'<span class="badge b-danger" style="padding:0 5px;font-size:10px">未读</span>'}
      </div>
      <p class="text-xs mb-1.5" style="color:var(--muted-foreground);line-height:1.6">${m.content}</p>
      <span class="text-[11px]" style="color:var(--muted-foreground)">${m.time}</span>
    </div>
    ${m.read?'':`<button class="btn btn-ghost btn-sm flex-shrink-0" onclick="markNotifRead(${m.id})">标为已读</button>`}
  </div>`;
}

function switchNotifTab(btn,tabId){
  btn.closest('.tab-bar').querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  const card = btn.closest('.card');
  card.querySelectorAll('#notif-all,#notif-model,#notif-recharge,#notif-workorder').forEach(el=>el.style.display='none');
  document.getElementById(tabId).style.display='block';
}

function markNotifRead(id){
  const m = MESSAGES.find(x=>x.id===id);
  if(m) m.read = true;
  renderPage();
}

function markAllNotifRead(){
  MESSAGES.filter(m=>m.roles.includes(curRole)).forEach(m=>m.read=true);
  showToast('操作成功','所有消息已标为已读');
  renderPage();
}

let myContactTab = 'all';
function switchMyContactTab(t){ myContactTab = t; renderPage(); }

// 用户退款收款账户；离线退款时运营需知悉钱款应退至哪个账户
function refundAccountLabel(user){
  const a = USER_ACCOUNT[user];
  if(a && a.account){
    const name = a.type==='企业' ? a.company : a.name;
    const bank = [a.bank||'',a.branch||''].filter(Boolean).join(' ');
    return acctRowsHTML([['户名',name],['开户行',bank],['账号',encField('bank', a.account)]]);
  }
  const s = REFUND_SRC[user];
  if(s) return (`${s.desc} · ${encField('bank', s.account||'')}`).replace(/·\s*$/,'');
  return '—';
}
// 账户多维信息按行展示
function acctRowsHTML(rows){
  const rowHTML = (k,v)=>`<div class="flex" style="gap:6px;line-height:1.6;min-width:0"><span class="flex-shrink-0" style="color:var(--muted-foreground)">${k}</span><span style="word-break:keep-all;min-width:0">${v||'—'}</span></div>`;
  return rows.map(([k,v])=>rowHTML(k,v)).join('');
}
// 该笔充值的付款账户信息（用户提充值工单时填写）
function payAccountLabel(t){
  if(t.payDesc) return t.payDesc;
  const bank = [t.payBank||'',t.payBranch||''].filter(Boolean).join(' ');
  return acctRowsHTML([['户名',t.payName],['开户行',bank],['账号',encField('bank', t.payAccount)]]);
}
// 退款抵扣的充值记录表（仅列出当前退款金额实际抵扣到的记录），供"查看详情"与运营处理弹窗复用
// opts.showAcct: 展示退款账户（运营线下退款退至哪）；opts.showPayAcct: 展示该笔充值的付款账户（用户提充值工单时填写）
function refundRecordsTable(user, amount, opts){
  opts = opts||{};
  const showAcct = opts.showAcct, showPayAcct = opts.showPayAcct;
  const extraCols = (showAcct?1:0) + (showPayAcct?1:0);
  const list = (USER_TOPUPS[user]||[]).filter(t=>t.refStatus!=='full' && t.status==='completed');
  const sorted = [...list].sort((a,b)=> b.time.localeCompare(a.time));
  const allocMap = {};
  (refundAllocate(user, amount||0).alloc||[]).forEach(a=>{ allocMap[a.id]=a.section; });
  const rows = sorted.filter(t=>t.id in allocMap).map(t=>`<tr>
    <td style="font-family:monospace;font-size:12px">${t.id}</td>
    <td style="font-family:monospace;font-size:12px;color:var(--muted-foreground)">${t.serialNo||'—'}</td>
    <td class="font-semibold tabular-nums">${t.amount}</td>
    <td style="color:var(--muted-foreground)">${t.time}</td>
    <td style="color:var(--muted-foreground)">${t.arriveTime||'—'}</td>
    <td><span class="badge ${ST[t.status]?ST[t.status].c:'b-muted'}">${ST[t.status]?ST[t.status].l:t.status}</span></td>
    ${showPayAcct?`<td style="color:var(--muted-foreground)">${payAccountLabel(t)}</td>`:''}
    ${showAcct?`<td style="color:var(--muted-foreground)">${refundAccountLabel(user)}</td>`:''}
    <td class="font-semibold tabular-nums" style="color:var(--destructive)">¥${Number(allocMap[t.id]||0).toFixed(2)}</td>
  </tr>`).join('') || `<tr><td colspan="${7+extraCols}" class="text-center" style="color:var(--muted-foreground)">暂无关联的充值记录</td></tr>`;
  return `<table><thead><tr><th>充值单号</th><th>流水号</th><th>金额(¥)</th><th>充值时间</th><th>到账时间</th><th>状态</th>${showPayAcct?'<th>充值账户</th>':''}${showAcct?'<th>退款账户</th>':''}<th>本次抵扣(¥)</th></tr></thead><tbody>${rows}</tbody></table>`;
}
function toggleRefundRecords(btn){
  const body = btn.parentElement ? btn.parentElement.querySelector('.refund-records-body') : null;
  if(!body) return;
  const open = body.style.display!=='none';
  body.style.display = open?'none':'block';
  const chev = btn.querySelector('svg');
  if(chev) chev.style.transform = open?'':'rotate(180deg)';
}
function toggleCollapse(btn){
  const scope = btn.closest('.card, .modal-box') || btn.parentElement;
  const body = scope ? scope.querySelector('.collapse-body') : null;
  if(!body) return;
  const open = body.style.display!=='none';
  body.style.display = open?'none':'block';
  const chev = btn.querySelector('svg');
  if(chev) chev.style.transform = open?'':'rotate(180deg)';
  const label = btn.querySelector('.collapse-label');
  if(label) label.textContent = open?'展开':'折叠';
}
function updateRefundRecords(user){
  const box = document.getElementById('refund-records-table');
  if(!box) return;
  const v = parseFloat(document.getElementById('refund-amount')?.value||'0');
  box.innerHTML = refundRecordsTable(user, isNaN(v)?0:v, {showAcct:true});
}

function myContact(){
  const myContactReqs = CONTACT_REQS.filter(r=>r.user==='zhangsan');
  const contactStatusMap = {pending:{l:'未处理',c:'b-warning'},contacted:{l:'已处理',c:'b-success'},refunded:{l:'已处理',c:'b-success'}};
  const typeMap = {invoice:'开票',refund:'退款',other:'其他'};
  const refundReqs = myContactReqs.filter(r=>r.type==='refund');
  const invReqs = myContactReqs.filter(r=>r.type==='invoice');
  const othReqs = myContactReqs.filter(r=>r.type==='other');
  const isRefundTab = myContactTab==='refund';
  const tabBar = `<div class="flex items-center px-4 pt-1 gap-1" style="border-bottom:1px solid var(--border)">
    ${[
      ['all','全部',myContactReqs.length],['refund','退款工单',refundReqs.length],
      ['invoice','开票',invReqs.length],['other','其他',othReqs.length]
    ].map(([k,l,c])=>`<button class="text-sm" style="padding:10px 12px;background:none;${myContactTab===k?`color:var(--primary);font-weight:600;border-bottom:2px solid var(--primary)`:''}" onclick="switchMyContactTab('${k}')">${l}<span class="ml-1" style="color:var(--muted-foreground);font-size:11px">${c}</span></button>`).join('')}
  </div>`;
  // 四个 tab 统一使用同一套字段（与「全部」列表字段对齐），仅按当前 tab 过滤数据
  const currentReqs = myContactTab==='all' ? myContactReqs :
    (myContactTab==='refund' ? refundReqs : (myContactTab==='invoice' ? invReqs : othReqs));

  const emptyTip = isRefundTab ? '暂无退款工单' : '暂无联系工单';
  const tableContent = currentReqs.length===0
    ? `<div class="p-6 text-center text-xs" style="color:var(--muted-foreground)">${emptyTip}</div>`
    : `<table data-export-type="my-contact"><thead><tr><th style="width:40px">${getExportAllCheckbox('my-contact', currentReqs.map(r=>r.id))}</th><th>工单号</th><th>类型</th><th>联系人</th><th>电话</th><th>提交时间</th><th>状态</th><th>操作</th></tr></thead>
    <tbody>${currentReqs.map(r=>`<tr ${r.status==='contacted'||r.status==='refunded'?'style="background:#f0fdf4"':''}>
      <td>${getExportCheckbox('my-contact', r.id)}</td>
      <td style="font-family:monospace;font-size:12px">${r.id}</td>
      <td><span class="badge ${contactBadgeMap[r.type]}">${typeMap[r.type]}</span></td>
      <td class="text-sm">${r.name}</td>
      <td style="color:var(--muted-foreground)">${encField('phone', r.phone)}</td>
      <td style="color:var(--muted-foreground)">${r.time}</td>
      <td><span class="badge ${contactStatusMap[r.status].c}">${contactStatusMap[r.status].l}</span></td>
      <td><span class="copy-link" onclick="${r.type==='refund'?`showRefundDetail('${r.id}')`:`showContactDetail('${r.id}')`}">查看详情</span></td>
    </tr>`).join('')}</tbody></table>`;

  return `<div class="card overflow-hidden">
    ${tabBar}
    <div class="px-4 py-3 flex items-center gap-2">
      <div class="text-sm font-semibold">联系工单</div>
      <div class="ml-auto flex items-center gap-2">
        <button class="btn btn-outline btn-sm" onclick="showExportConfirm('my-contact', ${currentReqs.length})">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
          导出</button>
        <button class="btn btn-outline btn-sm" onclick="showContactDlg('other')">新增其他工单</button>
      </div>
    </div>
    ${tableContent}
  </div>`;
}

// ===== Toast (系统通知) =====
function showToast(title, msg, action){
  const container = document.getElementById('toast-container');
  const id = 'toast-' + Date.now() + Math.random().toString(36).substring(2,6);
  const actionHtml = action && action.label ? `<button class="btn btn-primary btn-sm mt-2" style="font-size:12px" onclick="document.getElementById('${id}').remove();${action.onclick}">${action.label}</button>` : '';
  const iconColor = action && action.type==='warning' ? 'var(--warning)' : 'var(--success)';
  const iconBg = action && action.type==='warning' ? 'color-mix(in srgb,var(--warning) 12%,transparent)' : 'color-mix(in srgb,var(--success) 12%,transparent)';
  const iconPath = action && action.type==='warning' 
    ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>'
    : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>';
  container.insertAdjacentHTML('beforeend', `<div class="toast-item" id="${id}">
    <div class="flex items-start gap-2">
      <div class="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center" style="background:${iconBg}">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color:${iconColor}">${iconPath}</svg>
      </div>
      <div class="flex-1">
        <div class="text-sm font-medium">${title}</div>
        <div class="text-xs mt-0.5" style="color:var(--muted-foreground)">${msg}</div>
        ${actionHtml}
      </div>
      <button class="btn btn-ghost btn-sm" style="padding:2px" onclick="document.getElementById('${id}').remove()">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>
  </div>`);
}

function goNotif(){
  const dp={admin:'admin-notif',agent:'agent-notif',user:'user-notif'};
  go(dp[curRole]);
}

function updateNotifBadge(){
  const unread=MESSAGES.filter(m=>m.roles.includes(curRole)&&!m.read).length;
  const nb=document.getElementById('notif-badge');
  if(unread>0){
    nb.style.display='flex';
    nb.textContent=unread;
  }else{
    nb.style.display='none';
  }
}

function switchRole(r){
  curRole=r;
  document.querySelectorAll('.role-btn').forEach(b=>b.classList.toggle('active',b.dataset.role===r));
  document.getElementById('user-avatar').textContent=ROLE_INFO[r].avatar;
  document.getElementById('user-name').textContent=ROLE_INFO[r].name;
  document.getElementById('user-role').textContent=ROLE_INFO[r].role;
  const dp={admin:'overview',agent:'agent-overview',user:'user-overview'};
  curPage=dp[r]; renderNav(); renderPage(); updateNotifBadge();
}

function showModal(h, w){document.getElementById('modal-container').innerHTML=`<div class="modal-bg" onclick="if(event.target===this)closeModal()"><div class="modal-box fade-in" ${w?`style="max-width:${w}px;width:${w}px"`:''}>${h}</div></div>`;}
function showDrawer(h){document.getElementById('modal-container').innerHTML=`<div class="drawer-bg" onclick="if(event.target===this)closeModal()"><div class="drawer-box">${h}</div></div>`;}
function closeModal(){document.getElementById('modal-container').innerHTML='';}

function copyTxt(t){
  const ta=document.createElement('textarea');ta.value=t;document.body.appendChild(ta);ta.select();
  try{document.execCommand('copy');}catch(e){}document.body.removeChild(ta);
  event.target.textContent='已复制';setTimeout(()=>{event.target.textContent='复制';},1200);
}

// Init
renderNav(); renderPage(); updateNotifBadge();