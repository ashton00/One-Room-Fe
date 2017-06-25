<template lang="jade">
  .collect-furniture.mr-70
    p.title 收藏的家具
    .types.mb-10.mt-10
      Row(type='flex' justify='space-between').mr-40
        Col.hover 全部家具(8)
        Col 卧室家具(5)
        Col 客厅家具(1)
        Col 餐厅家具(1)
        Col 书房家具(1)
        Col 办公家具(0)
        Col 家具软饰(0)
    .search.fr
      Input(placeholder="搜索家具(输入关键词)" icon='ios-search')
    .furniture-list.m-40.mt-70
      .item(v-for='i in furnitures').ib.mb-40.mr-40
        img(:src='"/static/collect/" + i.url')
        div.tc {{ i.name }}
        div.tc ¥ {{ i.price}}/月 起
        div.tc
          Button(type='primary') 取消收藏
      .pages.tc
        Page.tc.ib(:total='1' show-total show-elevator)
        


</template>

<script>
export default {
  data () {
    return {
      activeIndex: 0,
      furnitures: [
        {
          url: '8.jpg',
          name: '诺德里双人床',
          price: '18'
        },
        {
          url: '7.jpg',
          name: '马尔姆单人床',
          price: '16'
        },
        {
          url: '9.jpg',
          name: '帕克斯衣柜',
          price: '16'
        },
        {
          url: '11.jpg',
          name: '斯沃塔双层床架',
          price: '18'
        },
        {
          url: '5.jpg',
          name: '福利萨特儿童凳',
          price: '8'
        },
        {
          url: '10.jpg',
          name: '桑伟儿童书桌',
          price: '10'
        },
        {
          url: '14.jpg',
          name: '叶可布三人沙发',
          price: '18'
        },
        {
          url: '15.jpg',
          name: '英格托伸缩餐桌',
          price: '15'
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
  .hover
    color: #f1bf50
    text-decoration: underline
  .item
    width: 150px
    img
      width: 150px
      height: 150px
    button
      width: 100px
      font-size: 14px
      color: black
      margin-top: 5px
  
</style>
