<template lang="jade">
  .interflow
    .title 我的物流
    div
      span.yellow 全部物流
      span.yellow.ml-40 送货上门（1）
      span.yellow.ml-40 家具返厂
    .order.mt-20.tc
      .item.p-10
        div
          .thead.bold.mb-10 订单号
          .tc
            img.fl(style='margin-top: -20px' src='./../../../assets/Mall/detail/小图1.png')
            | 10941636319204
        div
          .thead.bold.mb-10 物流类型
          .tc 上门送货
        div
          .thead.bold.mb-10 订单号
          .tc 2017-05-25 09:00-18:00
        div
          .thead.bold.mb-10 物流进度
          .tc 下单成功，等待商品出来
        .arrow
    .status.mt-20.p-10
      div 订单编号：2131241252512521
      div 物流类型：家具返厂
      .step
        .tips.yellow.tc.fs-20.fl 申请已提交
        .all-status
          img(src='./../../../assets/Mall/detail/我的物流.png')
          //- .imgs
          //-   img(src='./../../../assets/Mall/detail/小图1.png')
          //-   img(src='./../../../assets/Mall/detail/小图1.png')
          //-   img(src='./../../../assets/Mall/detail/小图1.png')
          //-   img(src='./../../../assets/Mall/detail/小图1.png')
          //-   img(src='./../../../assets/Mall/detail/小图1.png')
          .texts.tc
            div
              span 提交申请
              br
              span 2017-05-10 17:04:02
            div 等待上门
            div 运输中
            div
              span 商家确认收货
              br
              span 返还押金
            div 完成
      .mb-10(style='border: 1px solid #eee')
      .bottom.tc
        div
          .thead.bold.mb-10 订单号
          .tc
            img.fl(style='margin-top: -20px' src='./../../../assets/Mall/detail/小图1.png')
            | 10941636319204
        div
          .thead.bold.mb-10 物流类型
          .tc 上门送货
        div
          .thead.bold.mb-10 订单号
          .tc 2017-05-25 09:00-18:00
        div
          .thead.bold.mb-10 物流进度
          .tc 申请已提交，等待上门
</template>

<script>
import Menus from './menus.vue'

export default {
  data () {
    return {
     
    }
  },
  components: {
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style lang="sass" scoped>
  .interflow
    margin-right: 80px
    .title
      font-weight: bold
      font-size: 20px
      margin-bottom: 20px
    .order
      width: 800px
      border: 1px solid #eee
      .item
        &>div
          display: inline-block
          width: 23%
        .arrow
          width: 8%
    .status
      width: 800px
      border: 1px solid #eee
      .step
        height: 120px
        .tips
          display: inline-block
          width: 15%
          line-height: 120px
        .all-status
          display: inline-block
          width: 85%
          .imgs
          .texts
            &>div
              display: inline-block
              width: 20%
      .bottom
        &>div
          display: inline-block
          width: 25%
</style>
