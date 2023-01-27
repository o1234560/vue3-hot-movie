import { createStore } from 'vuex'
import Cookies from 'js-cookie'

const state = {
  showTabBar: true,
  cityId: Cookies.get('CITY_ID') || 310100 // 使用 cookie 进行持久化操作
}

const getters = {}

const actions = {
  changeCity (store, cityId) {
    console.log('actions', store, cityId)
    store.commit('CHANGE_CITY', cityId)
  }
}

const mutations = {
  SHOW_TABBAR (state) {
    state.showTabBar = true
  },
  HIDE_TABBAR (state) {
    state.showTabBar = false
  },
  CHANGE_CITY (state, cityId) {
    console.log('mutations', state, cityId)
    state.cityId = cityId
    Cookies.set('CITY_ID', cityId)
  }
}

const modules = {}

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules
})
