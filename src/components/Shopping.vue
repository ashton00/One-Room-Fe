<template lang='jade'>
  #Shopping.p-40
    .filter
      Input.fr(placeholder='搜索')
      Breadcrumb(separator='>')
        Breadcrumb-item 家具商城
        Breadcrumb-item 卧室家具
        Breadcrumb-item 床
      .detail.mt-20
        .container(v-for='item in classes')
          .left.tc.pt-10.pb-10
            | {{item.type}}
          .right.pt-10.pb-10
            span.ml-20(v-for='temp in item.class')
              | {{temp}}
    .result.mt-40
      .number
        | 共有42件家具
      Row(:gutter='20')
        Col.mt-20(:xs='12', :sm='8', :md='6', :lg='6' v-for='item in search_result', :key='item.id')
          router-link(to='/detail') 
            img(src='../assets/placehold.png')
            p.mt-10 {{item.name}}
            p.mt-10 {{item.price}}
    .tc
      Page.mt-40(:total='100', @on-change='onPageChange' show-elevator)
</template>

<script>
export default {
  name: 'Shopping',
  data () {
    return {
      search_result: [{
        id: 0,
        name: '简约现代松木床',
        imgsrc: '../assets/placehold.png',
        price: '¥ 12.00/月 起'
      }, {
        id: 1,
        name: '简约现代松木床',
        imgsrc: '../assets/placehold.png',
        price: '¥ 12.00/月 起'
      }, {
        id: 2,
        name: '简约现代松木床',
        imgsrc: '../assets/placehold.png',
        price: '¥ 12.00/月 起'
      }, {
        id: 3,
        name: '简约现代松木床',
        imgsrc: '../assets/placehold.png',
        price: '¥ 12.00/月 起'
      }, {
        id: 4,
        name: '简约现代松木床',
        imgsrc: '../assets/placehold.png',
        price: '¥ 12.00/月 起'
      }, {
        id: 5,
        name: '简约现代松木床',
        imgsrc: '../assets/placehold.png',
        price: '¥ 12.00/月 起'
      }, {
        id: 6,
        name: '简约现代松木床',
        imgsrc: '../assets/placehold.png',
        price: '¥ 12.00/月 起'
      }],
      classes: [{
        type: '类型',
        class: ['实木床', '铁艺床', '布艺床', '子母床', '儿童床']
      }, {
        type: '类型',
        class: ['实木床', '铁艺床', '布艺床', '子母床', '儿童床']
      }, {
        type: '类型',
        class: ['实木床', '铁艺床', '布艺床', '子母床', '儿童床']
      }, {
        type: '类型',
        class: ['实木床', '铁艺床', '布艺床', '子母床', '儿童床']
      }]
    }
  },
  methods: {
    onPageChange (page) {
      console.log(page)
    }
  }
}
</script>

<style lang="sass" scoped>
#Shopping
  .filter
    .ivu-input-wrapper
      width: 300px
    .detail
      width: 100%
      border-radius: 3px
      border: 1px solid #f0be5a
      .container
        .left
          float: left
          background-color: #f0be5a
          width: 100px
        .right
          margin-left: 100px
  .result
    .ivu-row
      width: 100%
  .ivu-page
    display: inline-block

</style>
