import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Changepwd from '../components/ChangePwd.vue'
import Home from '../components/Home.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/findpwd',
      name: 'changepwd',
      component: Changepwd
    }
  ]
})
