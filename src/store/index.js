import { createStore } from 'vuex'

export default createStore({
  state: {
    showTabBar: true
  },
  getters: {
  },
  mutations: {
    SHOW_TABBAR (state) {
      state.showTabBar = true
    },
    HIDE_TABBAR (state) {
      state.showTabBar = false
    }
  },
  actions: {
  },
  modules: {
  }
})
