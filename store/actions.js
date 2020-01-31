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
      starts_with: getters.lang !== 'sk' ? `en/services` : `services`
    }).then((data) => {
      commit(actionTypes.GET_SERVICES_SCROLLER_DATA_SUCCESS, data.data.stories.map((item) => {
        return {
          name: item.content.heading,
          slug: item.slug
        }
      }))
    })
  },
  [actionTypes.GET_PROFILES]: ({ commit, getters }, $storyapi) => {
    return $storyapi.get('cdn/stories/', {
      version: 'draft',
      starts_with: getters.lang !== 'sk' ? `en/profiles` : `profiles`
    }).then((data) => {
      commit(actionTypes.GET_PROFILES_SUCCESS, data.data.stories.map((item) => {
        return {
          content: item.content,
          slug: item.slug
        }
      }).sort((i, j) => {
        return i.content.order - j.content.order
      }))
    })
  },
  [actionTypes.GET_ABOUT_PAGE]: ({ commit, getters }, $storyapi) => {
    const link = getters.lang !== 'sk' ? `cdn/stories/${getters.lang}/about/` : `cdn/stories/about/`
    return $storyapi.get(link, {
      version: 'draft'
    }).then((data) => {
      commit(actionTypes.GET_ABOUT_PAGE_SUCCESS, data.data.story.content)
    })
  },
  [actionTypes.GET_SERVICES]: ({ commit, getters }, $storyapi) => {
    return $storyapi.get('cdn/stories/', {
      version: 'draft',
      starts_with: getters.lang !== 'sk' ? `en/services` : `services`
    }).then((data) => {
      commit(actionTypes.GET_SERVICES_SUCCESS, data.data.stories
        .map(({ slug, content }) => ({ slug, content }))
        .map((blok) => {
          const newBlok = blok.content.order ? blok : { ...blok, content: { ...blok.content, order: 99999 } }
          return newBlok
        })
        .sort((blok, blok2) => {
          return (blok?.content?.order || 99999) - blok2?.content?.order
        }))
    })
  }
}
