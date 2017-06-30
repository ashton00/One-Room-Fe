import { User } from '../models/index.js'

const user = {
  state: {
    loginForm: {
      phone: '',
      password: ''
    }
  },
  mutations: {
    increment (state, payload) {
      state.count = state.count + payload.count
    },
    updateLoginForm (state, payload) {
      for (let key in payload) {
        state[key] = payload[key]
      }
    }
  },
  getters: {
    getCount (state) {
      return state.count + 1
    }
  },
  actions: {
    doubleCount (context, payload) {
      setTimeout(function () {
        context.state.count += payload.count
        context.commit('increment', payload)
      }, 1000)
    },

    login ({ commit, state }) {
      return User.login(state.loginForm)
    }
  }
}

export default user
