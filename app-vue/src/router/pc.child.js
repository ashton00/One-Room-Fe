import Home from '../pages/PC/components/home.vue'
import Order from '../pages/PC/components/order.vue'
import Return from '../pages/PC/components/return.vue'
import Profile from '../pages/PC/components/profile.vue'
import Address from '../pages/PC/components/address.vue'
import Shop from '../pages/PC/components/collectShop.vue'
import Furniture from '../pages/PC/components/collectFurniture.vue'
import Security from '../pages/PC/components/security.vue'
import Interflow from '../pages/PC/components/interflow.vue'
import Letter from '../pages/PC/components/letter.vue'
import Notice from '../pages/PC/components/notice.vue'

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
  },
  {
    path: 'profile',
    component: Profile
  },
  {
    path: 'address',
    component: Address
  },
  {
    path: 'furniture',
    component: Furniture
  },
  {
    path: 'shop',
    component: Shop
  },
  {
    path: 'security',
    component: Security
  },
  {
      path: 'interflow',
    component: Interflow
  },
  {
    path: 'letter',
    component: Letter
  },
  {
    path: 'notice',
    component: Notice
  }
]
