export const actions = {
  async nuxtServerInit({ dispatch }) {
    if (this.$auth.loggedIn) {
      try {

      } catch (error) {
        console.error(error)
      }
    }
  },
}
