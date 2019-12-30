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
  [actionTypes.GET_SETTINGS_SUCCESS]: (state, settings) => {
    state.page_settings.settings = settings
  },
  [actionTypes.GET_SERVICES_SCROLLER_DATA_SUCCESS]: (state, titleData) => {
    state.services_scroller = titleData
  },
  [actionTypes.GET_PROFILES_SUCCESS]: (state, profilesData) => {
    state.profiles = profilesData
  },
  [actionTypes.GET_HOME_SUCCESS]: (state, homeData) => {
    state.home = homeData
  },
  [actionTypes.GET_ABOUT_PAGE_SUCCESS]: (state, aboutData) => {
    state.about = aboutData
  },
  [actionTypes.GET_SERVICES_SUCCESS]: (state, services) => {
    state.services = services
  }
}
