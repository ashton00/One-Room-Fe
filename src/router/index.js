import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Changepwd from '../components/ChangePwd.vue'
import Home from '../components/Home.vue'
import Shopping from '../components/Shopping.vue'
import Detail from '../components/Detail.vue'
import Cart from '../components/Cart.vue'
import Payment from '../components/Payment.vue'
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
      path: '/shopping',
      name: 'shopping',
      component: Shopping
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
