const modal = {
  state: {
    isLogin: false,
    isRegist: false
  },
  mutations: {
    toggleLogin (state, payload) {
      state.isLogin = !state.isLogin
    },
    toggleRegist (state) {
      state.isRegist = !state.isRegist
    }
  },
  getters: {

  },
  actions: {

  }
}

export default modal
