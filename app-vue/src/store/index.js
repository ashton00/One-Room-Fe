/**
 * create By 陈纪庚 178854407@qq.com
 * 用来引入modules里注册的模块
 */

import Vuex from 'vuex'
import Vue from 'vue'

import modal from './modules/modal'
import user from './user/index.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    modal: modal,
    user: user
  }
})

export default store
