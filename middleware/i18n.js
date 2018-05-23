export default function({
  isHMR, app, store, route,
}) {
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) return
  const locale = route.matched.map((x) => {
    const tmp = x.name && x.name.split(':')
    return tmp && tmp[1]
  })[0]
  store.commit('SET_LANG', locale || app.i18n.fallbackLocale)
  app.i18n.locale = store.state.locale
}
