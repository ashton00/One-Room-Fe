<template lang="jade">
  .order
    .title 我的订单
    Menus(:datas="menus")
    OrderTable(:datas="datas")
</template>

<script>
import OrderTable from './orderTable'
import Menus from './menus'

export default {
  data () {
    return {
      menus: [
        { name: '全部订单', num: 2 },
        { name: '待付款', num: 0 },
        { name: '待发货', num: 0 },
        { name: '待收货', num: 1 },
        { name: '待收货', num: 1 }
      ],
      datas: [{ goods: [1, 2, 3] }, { goods: [1, 2] }]
    }
  },
  components: {
    OrderTable, Menus
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style lang="sass" scoped>
  .order
    margin-right: 80px
    .title
      font-weight: bold
      font-size: 20px
      margin-bottom: 20px

</style>
