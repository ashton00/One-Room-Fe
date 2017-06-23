import Home from '../pages/PC/components/home.vue'
import Order from '../pages/PC/components/order.vue'
import Return from '../pages/PC/components/return.vue'

export default [
  {
    path: '',
    component: Home
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'order',
    component: Order
  },
  {
    path: 'return',
    component: Return
  }
]
