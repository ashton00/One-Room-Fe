<template lang='jade'>
  #Detail.p-40
    Input.search.fr(placeholder='搜索')
    Breadcrumb(separator='>')
      Breadcrumb-item 家具商城
      Breadcrumb-item 家具筛选页
      Breadcrumb-item 当前家具详情页
    .container.pt-70.tc
      .left
        img(src='../../../assets/placehold.png')
      .mid.ml-40
        img(src='../../../assets/placehold.png')
        img(src='../../../assets/placehold.png')
        img(src='../../../assets/placehold.png')
      .right.ml-40.tl
        div
          p.bold 款式
          Button(type='ghost' size='small') 七成新
          Button(type='ghost' size='small') 九成新
          Button(type='ghost' size='small') 全新
        div
          p.bold 价格
          Button(type='ghost' size='small') 1-3周
          Button(type='ghost' size='small') 1-5月
          Button(type='ghost' size='small') 6-12月
          Button(type='ghost' size='small') 1年以上
        div
          strong 租期
          Select(v-model='model2', size='small', style='width:100px')
            Option(v-for='item in cityList', :value='item.value', :key='item') {{ item.label }}
          |  周
        div
          strong 押金
          span ¥200
        div
          strong 配送至
          Select(v-model='model2', size='small', style='width:100px')
            Option(v-for='item in cityList', :value='item.value', :key='item') {{ item.label }}
          span  运费：¥40
        div
          strong 件数
          Input-number(:max='10', :min='1', v-model='value1' size="small")
        div
          Button(type='warning' size='small') 加入购物车
          Button(type='ghost' size='small') 立即租赁
    Tabs(value='name1')
      Tab-pane(label='家具详情', name='detail') 家具详情
      Tab-pane(label='收费规则', name='rule')
        img.mt-20(src='../../../assets/chargingRules.png' width='100%')
      Tab-pane(label='家具评价', name='comment')
        h2
          | 好评率
          span 56%
        .disc-filter.mt-20.mb-20
          span.active 全部评价(23)
          span 好评(23)
          span 中评(23)
          span 差评(23)
          span 追评(23)
          span 晒图(23)
        ul.disc
          li.p-15
            .user.fl
              img(src='../../../assets/placehold.png')
              p.tc username
            .star.ml-80
              | *****
            .content.ml-80
              | test
            .date.ml-80.tr
              | 2017-6-3 18:39
          li.p-15
            .user.fl
              img(src='../../../assets/placehold.png')
              p.tc username
            .star.ml-80
              | *****
            .content.ml-80
              | test
            .date.ml-80.tr
              | 2017-6-3 18:39
          
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
      model2: '',
      value1: 1
    }
  }
}
</script>

<style lang="sass" scoped>
  #Detail
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
      .mid
        width: 100px
        img
          width: 100px
          height: 100px
      .right
        min-height: 350px
        &>div
          margin-bottom: 15px
          strong
            margin-right: 10px
          .bold
            margin-bottom: 10px        
          .ivu-btn
            margin-right: 10px
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
            width: 60px
            height: 60px
        .star
        .content
          min-height: 40px
        .date
</style>
