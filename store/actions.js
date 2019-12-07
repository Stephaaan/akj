import { actionTypes } from './actionTypes'

export const actions = {
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
  },
  [actionTypes.GET_SERVICES_SCROLLER_DATA]: ({ commit, getters }, context) => {
    return context.$storyapi.get('cdn/stories/', {
      version: 'draft',
      starts_with: getters.lang !== 'sk' ? `en/sluzby` : `sluzby`
    }).then((data) => {
      commit(actionTypes.GET_SERVICES_SCROLLER_DATA_SUCCESS, data.data.stories.map((item) => {
        return {
          name: item.content.Nadpis,
          slug: item.slug
        }
      }))
    })
  }
}
