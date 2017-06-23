<template lang="jade">
  .home
    .summary
      .user
        img.avatar(src="http://wx.qlogo.cn/mmopen/vi_32/klOZiauDdZsAHgcc31xE8La6M0XmrosR7jBwe8WveX0jibiaGSVhz6t0FgVxZ117cfUTOUiaUicicz78SGeVnxicsh1hw/0")
        .info
          .info-item.name 潮立黄
          .info-item 还未填写个人简历...
          router-link.op(to="/") 修改个人信息 &gt;
      .summary-body
        .summary-item
          img.icon(src="../../../assets/summary.png")
          | 待支付订单
          span.num 0
        .summary-item
          img.icon(src="../../../assets/summary.png")
          | 待发货订单
          span.num 0
        .summary-item
          img.icon(src="../../../assets/summary.png")
          | 待收货订单
          span.num 1
        .summary-item
          img.icon(src="../../../assets/summary.png")
          | 待归还订单
          span.num 0
      .section
        .title 我的信用分
        .section-body
          .score
            .num 646 分
          .level 信用良好
          .op 了解信用分
      .section
        .title
          | 最近订单
          router-link.op(to="/") 查看所有订单 &gt;
        .section-body
          OrderTable(:datas="datas")
</template>

<script>
import OrderTable from './orderTable'

export default {
  data () {
    return {}
  },
  components: {
    OrderTable
  },
  methods: {
  },
  computed: {
    datas () {
      return [{ goods: [1, 2, 3] }]
    }
  }
}
</script>

<style lang="sass" scoped>
  .home
    font-size: 14px
    .summary
      padding-right: 80px
      .user
        float: left
        width: 400px
        display: inline-block
        .avatar
          height: 100px
          width: 100px
          border-radius: 50%
          margin: 0px 40px
          vertical-align: middle
        .info
          display: inline-block
          vertical-align: middle
          .info-item
            color: gray
            margin-bottom: 2px
          .name
            font-size: 16px
            margin-bottom: 8px
            font-weight: bold
            color: #000
      .summary-body
        margin-left: 400px
        width: 400px
        .summary-item
          display: inline-block
          height: 50px
          line-height: 50px
          font-size: 14px
          width: 50%
          .icon
            width: 40px
            height: 40px
            vertical-align: middle
            margin-right: 10px
          .num
            color: #ed3f14
            margin-left: 5px
      .section
        margin: 50px 0px
        .title
          font-size: 18px
          font-weight: bold
          .op
            float: right
            font-size: 14px
        .section-body
          margin-top: 20px
          .score
            display: inline-block
            height: 100px
            width: 100px
            border-radius: 50%
            background: #F1BD5B
            margin-left: 40px
            .num
              color: #fff
              line-height: 100px
              text-align: center
              font-size: 16px
          .level
            display: inline-block
            line-height: 100px
            margin-left: 100px
            font-size: 18px
          .op
            display: inline-block
            background: #F1BD5B
            padding: 0px 20px
            color: white
            cursor: pointer
            float: right
            line-height: 50px
            margin-top: 25px

</style>
