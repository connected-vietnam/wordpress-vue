// @flow

exports.state = () => ({
  locales: ['vi', 'en'],
  locale: 'en',
  user: null,
})

type TUser = *

exports.mutations = {
  SET_LANG(state: *, locale: string) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  SET_USER(state: *, user: TUser) {
    state.user = user || null
  },
}

exports.getters = {
  isAuthenticated(state: *) {
    return !!state.user
  },
  loggedUser(state: *) {
    return state.user
  },
}
