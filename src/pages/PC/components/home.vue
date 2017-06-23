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
          .table
            .header
              span.header-col.span-2 商品
              span.header-col.span-1 数量
              span.header-col.span-1 租期
              span.header-col.span-1 单价
              span.header-col.span-1 押金
              span.header-col.span-1 租金
              span.header-col.span-1 订单状态
              span.header-col.span-1 应还日期
              span.header-col.span-1 操作
            .body
              .row(v-for="item in datas")
                .row-header
                  span.row-col 2017-04-26 18:29:52
                  span.row-col 订单号: 10941749510009164
                  span.row-special 宜居北欧家具
                  span.row-op 咨询店铺
                .row-body(v-for="good in item.goods")
                  .row-col.span-2
                    img.img(src="https://cdn.i-house.com.tw/medias/sys_master/images/images/hf7/hc7/9131148148766/IMG-153519-300Wx300H.jpg")
                    span.name 简约现代松木床米色 1.5*1.9m 九成新
                  .row-col.span-1 1件
                  .row-col.span-1 6个月
                  .row-col.span-1 ¥ 12.00/月
                  .row-col.span-1 ¥ 300.00
                  .row-col.span-1 ¥ 72.00
                  .row-col.span-1 待收货
                  .row-col.span-1 2017-01-02
                  .row-col.span-1
                    router-link.col-op(to="/") 续租
                    router-link.col-op(to="/") 退租
                    router-link.col-op(to="/") 保修
                .row-total
                  .info
                    span.type 押金总计
                    span ¥ 144
                  .info
                    span.type 租金总计
                    span ¥ 600
</template>

<script>
export default {
  data () {
    return {
      datas: [{ goods: [1, 2, 3] }]
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
        .table
          .header
            border: 1px solid #48392E
            padding: 10px 0px
            .header-col
              display: inline-block
              text-align: center
            .span-1
              width: 10%
            .span-2
              width: 20%
          .body
            .row
              margin-top: 20px
              border: 1px solid #48392E
              .row-header
                background: #48392E
                color: #fff
                padding: 10px 20px
                .row-col
                  margin-right: 40px
                .row-special
                  margin-left: 60px
                  margin-right: 20px
                .row-op
                  color: #F1BD5B
                  cursor: pointer
              .row-body
                margin: 10px 0px
                .row-col
                  overflow: auto
                  display: inline-block
                  vertical-align: top
                  text-align: center
                  .img
                    vertical-align: middle
                    width: 40%
                    float: left
                  .name
                    display: block
                    margin-left: 42%
                  .col-op
                    display: inline-block
                    width: 50%
                    margin-bottom: 2px
                    &:first-child
                      border-right: 1px solid #aaa
                .span-2
                  width: 20%
                  text-align: left
                  padding-left: 10px
                .span-1
                  width: 10%
              .row-total
                border-top: 1px solid #48392E
                .info
                  text-align: right
                  font-size: 14px
                  margin: 4px 20px
                  .type
                    padding-right: 20px
                    font-weight: bold

</style>
