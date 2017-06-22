import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/index.vue'
import Mall from '../pages/Mall/index.vue'
import Detail from '../pages/Mall/pages/Detail.vue'
import Payment from '../pages/Payment/index.vue'

import Changepwd from '../pages/ChangePwd.vue'
import Cart from '../pages/Cart.vue'

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
      path: '/mall',
      name: 'mall',
      component: Mall
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/findpwd',
      name: 'changepwd',
      component: Changepwd
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment
    }
  ]
})
