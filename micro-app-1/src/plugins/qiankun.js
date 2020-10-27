import {
  registerMicroApps,
  start
} from 'qiankun';

// 子应用列表
const apps = [
  {
    name: 'micro-app-1-1', // 子应用名称
    entry: '//localhost:8083', // 子应用入口
    container: '#js-micro-app-1-container', // 子应用渲染的容器
    activeRule: 'micro-app-1-1', // 激活子应用的路由
  }
];

// 注册子应用
registerMicroApps(apps);


// 开启服务
start({
  // 预加载 - 默认为true
  // true: 在第一个微应用 mount 完成后开始预加载其他微应用的静态资源,
  // 'all': 主应用 start 后即开始预加载所有微应用静态资源
  // string[]：会在第一个微应用 mounted 后开始加载数组内的微应用资源
  // function：可完全自定义应用的资源加载时机 (首屏应用及次屏应用)
  prefetch: true,
  // 是否开启沙箱 - 默认为true
  // { strictStyleIsolation: true }：表示开启严格的样式隔离模式。这种模式下 qiankun 会为每个微应用的容器包裹上一个 shadow dom 节点，从而确保微应用的样式不会对全局造成影响。
  // 
  sandbox: {
    strictStyleIsolation: true
  },
  // 是否为单实例场景 - [可选]，默认为true
  // singular: true,
  // 自定义fetch方法 - [可选]
  // fetch: () => {}
  // [getPublicPath: (url: string) => string]
  // [getTemplate: (tpl: string) => string]
  // [excludeAssetFilter: (assetUrl: string) => boolean] - 指定部分特殊加载的微应用资源不被qiankun劫持处理
});