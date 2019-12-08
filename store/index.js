import Vue from 'vue'
import Vuex from 'vuex'
import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'

Vue.use(Vuex)
Vue.config.devtools = true

const state = {
  page_settings: {
    lang: window.localStorage.getItem('lang') || 'sk',
    settings: {}
  },
  home: {},
  services_scroller: [],
  profiles: []
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default () => store
