<template lang="jade">
  .order
    .title 我的订单
    .menus
      .menu-item(v-for="(item, index) in menus", @click="changeIndex(index)", :class="index === activeIndex ? 'menu-item--active' : ''") {{item.name}}({{item.num}})
      Input.search(placeholder='搜索', icon="search")
    OrderTable(:datas="datas")
</template>

<script>
import OrderTable from './orderTable'

export default {
  data () {
    return {
      activeIndex: 0,
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
    OrderTable
  },
  methods: {
    changeIndex (index) {
      this.activeIndex = index
    }
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
    .menus
      margin-bottom: 40px
      overflow: auto
      .menu-item
        display: inline-block
        margin-right: 40px
        font-size: 16px
        user-select: none
        line-height: 32px
        &:hover
          text-decoration: underline
          cursor: pointer
      .menu-item--active
        color: #F1BD5B
        text-decoration: underline
      .search
        width: 260px
        float: right

</style>
