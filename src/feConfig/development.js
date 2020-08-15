module.exports = {
  api: [
    {
      name: 'feMock',
      host: '' // 默认不填，读取 /config/index.js 下面的 dev.proxy
    },
    {
      name: 'hfsbe',
      host: '' // 默认不填，读取 /config/index.js 下面的 dev.proxy
    },
    {
      name: 'hfscsq',
      host: '' // 默认不填，读取 /config/index.js 下面的 dev.proxy
    }
  ],
  cookie: 'yz-test-session-id',
  // 埋点配置
  trackPoint: {
    feMonitor: '//testfemonitor.iyunxiao.com', // trackPonit 配置获取地址
    projectId: '5d64f7a70000052a623d4f26', // 项目 ID
    baseURL: '//testfemonitor.iyunxiao.com', // 上报地址
    time: 1000, // 上报间隔
    sKey: 'FE_TrackPoint', // 本地 storge 缓存 key，可根据项目修改
    eventType: ['click', 'hover'] // 事件类型
  }
};
