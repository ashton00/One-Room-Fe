<template lang="jade">
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
  props: {
    datas: Array
  },
  data () {
    return {}
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
