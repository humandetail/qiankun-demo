/**
 * qiankun - 微前端配置
 */

import {
  registerMicroApps,
  setDefaultMountApp,
  initGlobalState,
  start,
} from 'qiankun';
import Vue from 'vue';

// 子应用集合
const apps = [
  {
    name: 'micro-app-1', // 子应用名称
    entry: '//localhost:8081', // 子应用入口
    container: '#js-micro-container', // 子应用渲染的容器
    activeRule: 'micro-app-1', // 激活子应用的路由
    // 传递参数
    props: {
      data: {
        message: 'Hello Micro-app-1.'
      },
      methods: {
        showMsg (msg) {
          console.log(msg);
        }
      }
    },
  },
  {
    name: 'micro-app-2', // 子应用名称
    entry: '//localhost:8082', // 子应用入口
    container: '#js-micro-container', // 子应用渲染的容器
    activeRule: 'micro-app-2', // 激活子应用的路由
    // 传递参数
    props: {
      data: {
        message: 'Hello Micro-app-2.'
      },
      methods: {
        showMsg (msg) {
          console.log(msg);
        }
      }
    },
  }
];

// 注册子应用
registerMicroApps(apps);

// 初始化应用通信数据
const actions = initGlobalState({
  topState: 'init', // 初始化state
});

// 监听state的变化
actions.onGlobalStateChange((state, prevState) => {
  console.log('main state changed：', state);
});

// 挂载到Vue的原型上，方便其它组件调用
Vue.prototype.$topActions = actions;


// 设置初始加载app
setDefaultMountApp('micro-app-1');

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