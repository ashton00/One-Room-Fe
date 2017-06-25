<template lang="jade">
  .collect-shop.mr-70
    p.title 收藏的店铺
    .search.fr
      Input(placeholder="搜索店铺(输入关键词)" icon='ios-search')
    .shop-list.mt-40
      Row(type='flex' justify='space-between').p-10.item
        Col.tc
          .fengmian.ib 宜居北欧家具
          .ctrl
            Button(type='primary').mr-10 加入店铺
            Button(type='primary') 取消收藏
        Col  
          img(url='../../../assets/placehold.png')
        Col  
          img(url='../../../assets/placehold.png')
        Col   
          img(url='../../../assets/placehold.png')
</template>

<script>
export default {
  data () {
    return {
      activeIndex: 0
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
    background: url('/static/collect/1.jpg')
    margin-bottom: 20px
  .ivu-col
    img
      width: 150px
      height: 150px
  .item
    border: 1px solid #a59e9e
    button
      width: 100px
      color: black
</style>
