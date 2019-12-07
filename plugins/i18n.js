import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: store.getters.lang,
    fallbackLocale: 'en',
    messages: {
      en: require('~/locales/en.json'),
      sk: require('~/locales/sk.json')
    }
  })
}
