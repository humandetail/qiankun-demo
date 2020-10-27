// Router拦截器
import router from './index';
import store from '../store';

router.beforeEach((to, from, next) => {
  if (to.fullPath.includes('micro-app-1')) {
    store.dispatch('setAppColor', '#42b983')
  } else if (to.fullPath.includes('micro-app-2')) {
    store.dispatch('setAppColor', '#3385ff')
  } else {
    store.dispatch('setAppColor', '#abc')
  }

  next();
})