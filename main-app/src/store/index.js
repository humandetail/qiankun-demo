import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appColor: '#fff',
  },
  mutations: {
    SET_APP_COLOR (state, color) {
      state.appColor = color;
    }
  },
  actions: {
    setAppColor ({ commit }, color) {
      commit('SET_APP_COLOR', color);
    }
  },
  modules: {
  }
})
