import { actionTypes } from './actionTypes'

export const actions = {
  [actionTypes.GET_SETTINGS]: ({ commit, getters }, $storyapi) => {
    const link = getters.lang !== 'sk' ? `cdn/stories/${getters.lang}/settings/` : `cdn/stories/settings/`
    return $storyapi.get(link, {
      version: 'draft'
    }).then((data) => {
      commit(actionTypes.GET_SETTINGS_SUCCESS, data.data.story.content)
    })
  },
  [actionTypes.GET_HOME]: ({ commit, getters }, $storyapi) => {
    const link = getters.lang !== 'sk' ? `cdn/stories/${getters.lang}/home/` : `cdn/stories/home/`
    return $storyapi.get(link, {
      version: 'draft'
    }).then((data) => {
      commit(actionTypes.GET_HOME_SUCCESS, data.data.story.content)
    })
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
  },
  [actionTypes.GET_PROFILES]: ({ commit, getters }, context) => {
    return context.$storyapi.get('cdn/stories/', {
      version: 'draft',
      starts_with: getters.lang !== 'sk' ? `en/profiles` : `profiles`
    }).then((data) => {
      commit(actionTypes.GET_PROFILES_SUCCESS, data.data.stories.map((item) => {
        return {
          content: item.content,
          slug: item.slug
        }
      }).reverse())
    })
  }
}
