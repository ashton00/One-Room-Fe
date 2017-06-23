import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/index.vue'
import Mall from '../pages/Mall/index.vue'
import Detail from '../pages/Mall/pages/Detail.vue'
import Payment from '../pages/Payment/index.vue'
import PersonalCenter from '../pages/PC/index.vue'

import Changepwd from '../pages/ChangePwd.vue'
import Cart from '../pages/Cart.vue'
import ShoppingCar from '../pages/ShoppingCar/index.vue'

import PCChild from './pc.child.js'

Vue.use(Router)

let routes = [
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
  },
  {
    path: '/personalcenter',
    name: 'PersonalCenter',
    component: PersonalCenter,
    children: PCChild
  },
  {
    path: '/shopping-car',
    name: 'shopping-car',
    component: ShoppingCar
  }
]

const router = new Router({
  mode: 'history',
  routes: routes
})

router.afterEach((to, from, next) => {
  window.scroll(0, 0)
})

export default router
