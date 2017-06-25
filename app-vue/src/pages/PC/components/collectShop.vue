<template lang="jade">
  .collect-shop.mr-70
    p.title 收藏的店铺
    .search.fr
      Input(placeholder="搜索店铺(输入关键词)" icon='ios-search')
    .shop-list.mt-40
      Row(type='flex' justify='space-around' v-for='(shop, index) in shops' v-bind:key='index').p-10.item.mb-10
        Col.tc
          .fengmian.ib(v-bind:style='{background: "url(" + shop.fengmian + ")", backgroundSize: "cover"}') {{ shop.name }}
          .ctrl
            Button(type='primary').mr-10 加入店铺
            Button(type='primary') 取消收藏
        Col(v-for='(furniture,index) in shop.furnitures' v-bind:key='index')  
          img(:src='furniture.url')
          div.tc {{ furniture.name }}
      .pages.tc
        Page(:total='1' show-total show-elevator).ib.mt-40
</template>

<script>
export default {
  data () {
    return {
      activeIndex: 0,
      shops: [
        {
          name: '宜居北欧家具',
          fengmian: '/static/collect/1.jpg',
          furnitures: [
            {
              url: '/static/collect/8.jpg',
              name: '诺德里双人床'
            },
            {
              url: '/static/collect/7.jpg',
              name: '马尔姆单人床'
            },
            {
              url: '/static/collect/9.jpg',
              name: '帕克斯衣柜'
            }
          ]
        },
        {
          name: '童趣儿童家具',
          fengmian: '/static/collect/2.jpg',
          furnitures: [
            {
              url: '/static/collect/11.jpg',
              name: '斯沃塔双层床架'
            },
            {
              url: '/static/collect/5.jpg',
              name: '福利萨特儿童凳'
            },
            {
              url: '/static/collect/10.jpg',
              name: '桑伟儿童书桌'
            }
          ]
        }
      ]
    }
  },
  components: {
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
  .title
    font-size: 20px
    font-weight: bold
  .fengmian
    color: white
    font-size: 16px
    font-weight: bold
    width: 150px
    height: 150px
    line-height: 150px
    margin-bottom: 20px
    background: cover
  .ivu-col
    img
      width: 150px
      height: 150px
  .item
    border: 1px solid #a59e9e
    img
      border: 1px solid #a59e9e
    button
      width: 100px
      color: black
</style>
