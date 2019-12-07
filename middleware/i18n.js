export default function ({ isHMR, app, store, route, params, error, redirect }) {
  const defaultLocale = app.i18n.fallbackLocale
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) { return }
  // Get locale from params
  const locale = store.state.lang || defaultLocale
  if (locale !== 'en' && locale !== 'sk') {
    return error({ message: 'This page could not be found.', statusCode: 404 })
  }
  app.i18n.locale = store.state.lang
}
