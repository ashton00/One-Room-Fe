<template lang='jade'>
  #Detail.p-40
    Input.search.fr(placeholder='搜索')
    Breadcrumb(separator='>')
      Breadcrumb-item 家具商城
      Breadcrumb-item 家具筛选页
      Breadcrumb-item 当前家具详情页
    .container.pt-30.tc
      .left
        div.collect.tl
          Icon.mr-5(type='ios-heart-outline')
          span 加入收藏
        .imgs
          img(:src='selectedImg')
          .small-imgs.ml-40
            img(src='../../../assets/Mall/detail/小图1.png' @click='selectImg(0)' v-bind:class="{selected: selectedIndex === 0}")
            img(src='../../../assets/Mall/detail/小图2.png' @click='selectImg(1)' v-bind:class="{selected: selectedIndex === 1}")
            img(src='../../../assets/Mall/detail/小图3.png' @click='selectImg(2)' v-bind:class="{selected: selectedIndex === 2}")
        Row(type='flex' align="middle").intro.mt-20
          Col(span='8').yellow.title 北欧家具店铺
          Col(span='8') 
            span.gray 商品描述:4.3
            Icon(type='arrow-up-a').ml-3
          Col(span='8') 
            span.gray 商品质量:4.2
            Icon(type='arrow-down-a').ml-3    
        Row(type='flex' align="middle").operator.mt-5
          Col(span='8') 
            img.icon(src='../../../assets/Mall/detail/consult-icon.png')
            span 咨询店铺
          Col(span='8') 
            img.icon(src='../../../assets/Mall/detail/enter-icon.png')
            span 进入店铺
          Col(span='8') 
            img.icon(src='../../../assets/Mall/detail/collect-store.png')
            span 收藏店铺  
      .right.ml-40.tl
        div
          p KOPARDAL 科帕达双人铁艺床[1.8x2.0m]
        div
          p.bold 款式
          Button(type='ghost' size='small' @click='choose($event)') 七成新
          Button(type='ghost' size='small') 九成新
          Button(type='ghost' size='small') 全新
        div
          p.bold 
            span.ib 价格
            span.yellow ¥200/周
          Button(type='ghost' size='small') 1-3周
          Button(type='ghost' size='small') 1-5月
          Button(type='ghost' size='small') 6-12月
          Button(type='ghost' size='small') 1年以上
        div
          strong.ib 租期
          Select(v-model='leaseTime', size='small', style='width:100px')
            Option(v-for='item in leaseTimes', :value='item', :key='item') {{ item }}
          |  周
        div
          strong.ib 押金
          span ¥200
          span.ml-20.red 押金减免
          Icon(type="ios-information-outline").red
        div
          strong.ib 配送至
          Select(v-model='city', size='small', style='width:100px')
            Option(v-for='item in cityList', :value='item.value', :key='item') {{ item.label }}
          span  运费：¥40
        div
          strong.ib 件数
          Input-number(:max='10', :min='1', v-model='value1' size="small")
          span.ml-10 库存30件
        div.mt-30
          Button(type='warning' size='small').ctr-btn 加入购物车
          Button(type='ghost' size='small').ctr-btn 立即租赁
    Tabs(value='detail')
      Tab-pane(label='家具详情', name='detail').detail
        Row(type='flex' justify="space-between").row
          div
            span.yellow.ib 类型
            span  铁艺床
          div
            span.yellow.ib  风格
            span 欧式
          div
            span.yellow.ib  尺寸
            span 1.8X2.0m
        Row(type='flex' justify="space-between").row.mt-10
          div
            span.yellow.ib  材质
            span  胶合桦木板
          div
            span.yellow.ib  功能特点
            span 可组装
          div
            span.yellow.ib  适用人数
            span 双人
        img.mt-20(src='../../../assets/Mall/detail/家具详情内容.png').mall-detail
      Tab-pane(label='收费规则', name='rule')
        img.mt-20(src='../../../assets/chargingRules.png' width='100%')
      Tab-pane(label='家具评价', name='comment')
        h2.mb-20.mt-5
          | 好评率
          span.yellow.ml-15.rank 56%
        .line
        .disc-filter.mt-20.mb-20
          span.active 全部评价(23)
          span 好评(23)
          span 中评(23)
          span 差评(23)
          span 追评(23)
          span 晒图(23)
        ul.disc
          li(v-for='i in 10').p-15
            .user.fl
              img(src='../../../assets/Mall/detail/头像.png')
              p.tc username
            .star.ml-80
              | *****
            .content.ml-80
              | test
            .buy-shoppings
              span.fr.mt-60 2017-6-3 18:39
              div
                img.ml-14(src='../../../assets/Mall/detail/评价小图1.png')
                img.ml-12(src='../../../assets/Mall/detail/评价小图2.png')
              div.ml-77.mt-6
                span 九成新
                span.ml-12 按月租
            
        Page(:total='40' show-total show-elevator @on-change='changePage').mt-10
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      cityList: [
        {
          value: 'beijing',
          label: '北京市'
        },
        {
          value: 'shanghai',
          label: '上海市'
        }],
      leaseTimes: ['1','2','3','4','5','6'],
      leaseTime: '',
      city: '',
      value1: 1,
      name1: 'detail',
      selectedIndex: 0,
      selectedImgs: ['/static/mall/detail/大图1.png', '/static/mall/detail/大图2.jpg', '/static/mall/detail/大图3.jpg'],
      selectedImg: '/static/mall/detail/大图1.png'
    }
  },
  methods: {
    changePage(page) {
      console.log(page)
    },
    selectImg (index) {
      this.selectedIndex = index
      this.selectedImg = this.selectedImgs[this.selectedIndex]
    },
    choose($event) {
      console.log($event)
      $event.target.className
    }
  }
}
</script>

<style lang="sass" scoped>
  #Detail   
    .rank 
      font-weight: bold
      font-size: 24px
      color: #f1bf50
    .collect
      font-size: 16px
      width: 350px
      margin-left: -60px
    .detail
      span
        width: 70px
        display: inline-block
      .row
        margin-right: 200px
    .gray
      color: #928f8f
    .search
      width: 300px
    .container
      &>div
        display: inline-block
      .left
        vertical-align: top
        img 
          width: 250px
          height: 250px
        img.icon
          margin-bottom: -2px
          margin-right: 4px
          width: 12px
          height: 12px
      .small-imgs
        display: inline-block
        width: 100px
        img
          width: 80px
          height: 80px
      .right
        min-height: 350px
        .ib
          width: 50px
        &>div
          margin-bottom: 15px
          .bold
            margin-bottom: 10px        
          .ivu-btn
            margin-right: 10px
            width: 80px
          .ctr-btn 
            height: 30px
            width: 100px
    .disc-filter
      span
        margin-right: 20px
      .active
        color: #f0be5a
    ul.disc
      &>li
        border-bottom: 1px solid #ccc
        &:first-child
          border-top: 1px solid #ccc
        .user
          img
            width: 64px
            height: 64px
        .star
        .content
          min-height: 40px
        .date
    .mall-detail
      width: 100%
    .title
      font-size: 16px
    .intro
      width: 350px
      margin-left: -70px
    .selected
      border: 3px solid black
    .ivu-icon-ios-information-outline
      font-size: 14px
      margin-left: 2px
    .ivu-tabs
      .ivu-tabs-tab
        color: red
</style>
