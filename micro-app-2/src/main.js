import Vue from 'vue'
import Router from 'vue-router';
import App from './App.vue'
// import router from './router'
import store from './store'
import routes from './router/routes';
import './public-path';

Vue.use(Router);

Vue.config.productionTip = false

let router,
    instance;

// 渲染函数
function render (props = {}) {

  let { container } = props;

  router = new Router({
    base: window.__POWERED_BY_QIANKUN__ ? 'micro-app-2' : '/',
    mode: 'history',
    routes
  });

  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app'); // 开启沙箱模式后，无法直接获取到`#app`
}


/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log('micro-app-2 bootstraped');
}
/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log(props, 'micro-app-2');

  const {
    data = {},
    methods = {},
    onGlobalStateChange,
    setGlobalState
  } = props;

  // 将来自父应用的方法、数据、通信方式挂载到当前的Vue实例的原型上面
  Vue.prototype[`$topData`] = data;
  Vue.prototype['$topMethods'] = methods;
  Vue.prototype[`$topOnGlobalStateChange`] = onGlobalStateChange;
  Vue.prototype[`$topSetGlobalState`] = setGlobalState;

  // 应用挂载后执行渲染函数
  render(props);
}
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  console.log('unmount micro-2')
}
/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log('update props', props);
}