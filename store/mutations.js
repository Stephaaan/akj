import { actionTypes } from './actionTypes'

export const mutations = {
  [actionTypes.SET_LANG]: (state, lang) => {
    if (lang !== 'en' && lang !== 'sk') {
      return
    }
    window.localStorage.setItem('lang', lang)
    state.page_settings.lang = lang
    window.location.reload()
  },
  [actionTypes.GET_FOOTER_DATA_SUCCESS]: (state, footerData) => {
    state.footer = footerData
  },
  [actionTypes.GET_TITLE_PAGE_DATA_SUCCESS]: (state, titleData) => {
    state.title_page = titleData
  },
  [actionTypes.GET_SERVICES_SCROLLER_DATA_SUCCESS]: (state, titleData) => {
    state.services_scroller = titleData
  },
  [actionTypes.GET_PROFILES_SUCCESS]: (state, profilesData) => {
    state.profiles = profilesData
  },
  [actionTypes.GET_QUOTE_SUCCESS]: (state, quoteData) => {
    state.quote = quoteData
  }
}
