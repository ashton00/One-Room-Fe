<template lang='jade'>
  #Mall.p-40
    .filter
      Input.fr(placeholder='搜索', icon="search")
      Breadcrumb(separator='>')
        Breadcrumb-item 家具商城
        Breadcrumb-item 卧室家具
        Breadcrumb-item 床
      .detail.mt-20
        .container(v-for='(item, classIndex) in classes')
          .left.tc.pt-10.pb-10
            | {{item.type}}
          .right.pt-10.pb-10
            span.filter-item.ml-20(v-for='(temp, index) in item.class', :class="index === item.activeIndex ? 'filter-item--active' : '' ", @click="changeFilter(classIndex, index)")
              | {{temp}}
    .info
      .nums.fs-16.fl 共有 {{listTotal}} 件家具
      .sorter.fr
        .sorter-item(@click="sort(0)", :class="0 === sortActiveIndex ? 'sorter-item--active' : '' ") 综合
        .sorter-item(@click="sort(1)", :class="1 === sortActiveIndex ? 'sorter-item--active' : '' ") 销量
        .sorter-item(@click="sort(2)", :class="2 === sortActiveIndex ? 'sorter-item--active' : '' ")
          | 租金
          img.sort-info-img(v-if="!sortTop", src="../../assets/Mall/sortDown.png")
          img.sort-info-img(v-if="sortTop", src="../../assets/Mall/sortTop.png")
    FoodList(:data="foodLists", :linkFunc="linkTo")

    //- .result.mt-40
    //-   .number
    //-     | 共有42件家具
    //-   Row(:gutter='20')
    //-     Col.mt-20(:xs='12', :sm='8', :md='6', :lg='6' v-for='item in search_result', :key='item.id')
    //-       router-link(to='/detail') 
    //-         img(src='../../assets/placehold.png')
    //-         p.mt-10 {{item.name}}
    //-         p.mt-10 {{item.price}}
    .tc
      Page.mt-40(:total='listTotal', @on-change='onPageChange', show-elevator, :page-size="10")
</template>

<script>
import FoodList from '@/components/App/FoodList.vue'

export default {
  name: 'Mall',
  data () {
    return {
      classes: [{
        type: '类型',
        activeIndex: 0,
        class: ['全部', '实木床', '铁艺床', '布艺床', '子母床', '儿童床']
      }, {
        type: '风格',
        activeIndex: 0,
        class: ['全部', '现代简约', '欧式', '清新田园', '古典', '中式', '地中海', '公主风']
      }, {
        type: '尺寸',
        activeIndex: 0,
        class: ['全部', '1.2×1.5m', '1.2×1.9m', '1.8×2.0m', '1.8×2.2m']
      }, {
        type: '功能特点',
        activeIndex: 0,
        class: ['全部', '可组装', '可折叠', '可储物', '可拆洗', '多功能']
      }, {
        type: '适用人数',
        activeIndex: 0,
        class: ['全部', '单人', '双人', '多人']
      }],
      sortTop: false,
      sortActiveIndex: 0
    }
  },
  components: {
    FoodList
  },
  methods: {
    onPageChange (page) {
      console.log(page)
    },
    changeFilter (classIndex, clickIndex) {
      if (this.classes[classIndex].activeIndex === clickIndex) return
      this.classes[classIndex].activeIndex = clickIndex
    },
    linkTo (subject) {
      return '/detail'
    },
    sort (activeIndex) {
      if (this.sortActiveIndex === 2 && activeIndex === 2) this.sortTop = !this.sortTop
      this.sortActiveIndex = activeIndex
    }
  },
  computed: {
    foodLists () {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    listTotal () {
      return this.foodLists.length
    }
  }
}
</script>

<style lang="sass" scoped>
#Mall
  background: #F5F5F5
  .filter
    .ivu-input-wrapper
      width: 300px
    .detail
      width: 100%
      border: 1px solid #f0be5a
      .container
        .left
          float: left
          background-color: #f0be5a
          width: 100px
          font-weight: bold
        .right
          background-color: white
          margin-left: 100px
          .filter-item
            padding: 2px 8px
            &:hover
              background-color: #f0be5a
              cursor: pointer
          .filter-item--active
            background-color: #f0be5a
            color: white
  .info
    overflow: auto
    margin-top: 20px
    .sorter
      margin-right: 10px
      border: 1px solid #f0be5a
      border-right: none
      .sorter-item
        display: inline-block
        background-color: white
        cursor: pointer
        padding: 4px 16px
        border-right: 1px solid #f0be5a
        user-select: none
        .sort-info-img
          height: 16px
          position: relative
          left: 10px
          vertical-align: bottom
      .sorter-item--active
        background-color: rgba(0, 0, 0, 0.05)
        color: #f0be5a
        font-weight: bold
  .result
    .ivu-row
      width: 100%
  .ivu-page
    display: inline-block

</style>
