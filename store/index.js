import Vue from 'vue'
import Vuex from 'vuex'
import { actionTypes } from './actionTypes'

Vue.use(Vuex)
Vue.config.devtools = true

const store = new Vuex.Store({
  state: {
    page_settings: {
      lang: window.localStorage.getItem('lang') || 'sk'
    },
    footer: {},
    title_page: {}
  },
  // akcia + reducer
  mutations: {
    [actionTypes.SET_LANG]: (state, lang) => {
      if (lang !== 'en' && lang !== 'sk') {
        return
      }
      window.localStorage.setItem('lang', lang)
      state.page_settings.lang = lang
      console.log(state.page_settings.lang)

      window.location.reload()
    },
    [actionTypes.GET_FOOTER_DATA_SUCCESS]: (state, footerData) => {
      state.footer = footerData
    },
    [actionTypes.GET_TITLE_PAGE_DATA_SUCCESS]: (state, titleData) => {
      state.title_page = titleData
    }
  },
  // akcia + efekt
  actions: {
    [actionTypes.GET_FOOTER_DATA]: ({ commit, getters }, context) => {
      const link = getters.lang !== 'sk' ? `cdn/stories/${getters.lang}/main-page/footer` : `cdn/stories/main-page/footer`
      return context.$storyapi.get(link, {
        version: 'draft'
      }).then((data) => {
        commit(actionTypes.GET_FOOTER_DATA_SUCCESS, data.data.story.content)
      })
    },
    [actionTypes.GET_TITLE_PAGE_DATA]: ({ commit, getters }, context) => {
      const link = getters.lang !== 'sk' ? `cdn/stories/${getters.lang}/main-page/titulka` : `cdn/stories/main-page/titulka`
      return context.$storyapi.get(link, {
        version: 'draft'
      }).then((data) => {
        commit(actionTypes.GET_TITLE_PAGE_DATA_SUCCESS, data.data.story.content)
      })
      // eslint-disable-next-line
        .catch(err => console.log('data' + err))
    }
  },
  getters: {
    lang: state => state.page_settings.lang,
    footer: state => state.footer,
    title_page: state => state.title_page
  }
})

export default () => store
