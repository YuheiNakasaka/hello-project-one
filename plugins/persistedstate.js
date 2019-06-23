import createPersistedState from 'vuex-persistedstate'

export default ({ store, isHMR }) => {
  if (isHMR) return

  if (process.client) {
    window.onNuxtReady(nuxt => {
      createPersistedState({
        key: 'hello-project-one-heart',
        paths: ['hearts.hearts']
      })(store)
    })
  }
}
