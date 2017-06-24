<template lang="jade">
  .PC
    .header
      router-link.title(to="/personalcenter/home") 个人中心
      .my-item 我的购物车
      .my-item 我的优惠券
      .my-item 消息
    .body
      .sidebar
        .menu
          .title 订单中心
          router-link.sub-menu(to="/personalcenter/order") 我的订单
          router-link.sub-menu(to="/personalcenter/return") 我的归还
        .menu
          .title 我的申请
          .sub-menu 申请退租
          .sub-menu 申请续租
          .sub-menu 申请保修
          .sub-menu 我的申报进度
        .menu
          .title 我的收藏
          router-link.sub-menu(to='/personalcenter/shop') 收藏的店铺
          router-link.sub-menu(to='/personalcenter/furniture') 收藏的家具
        .menu
          .title 消息
          .sub-menu 我的物流
          .sub-menu 系统通知
          .sub-menu 私信
        .menu
          .title 账户设置
          router-link.sub-menu(to="/personalcenter/profile") 个人信息
          router-link.sub-menu(to="/personalcenter/address") 管理收货地址
          router-link.sub-menu(to="/personalcenter/security") 安全设置
        .menu
          .title 信用管理
          .sub-menu 实名认证
          .sub-menu 证件认证
          .sub-menu 芝麻信用关联
      router-view.content

</template>

<script>
export default {
  name: 'Mall',
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
  .PC
    .header
      background: #F1BD5B
      padding: 20px 60px
      .title
        font-size: 24px
        font-weight: bold
        display: inline-block
        width: 100px
        text-align: left
        color: #000
      .my-item
        display: inline-block
        float: right
        font-size: 16px
        line-height: 36px
        background: #fff
        padding: 0px 20px
        margin-left: 30px
        cursor: pointer
    .body
      .sidebar
        display: inline-block
        float: left
        width: 260px
        padding-left: 60px
        text-align: left
        margin-bottom: 40px
        .menu
          margin: 20px 0px 0px 0px
          .title
            font-weight: bold
            font-size: 16px
            margin-bottom: 10px
          .sub-menu
            font-size: 14px
            margin-bottom: 4px
            display: block
            color: #000
            &:last-child
              margin-bottom: 0px
            &:hover
              text-decoration: underline
              cursor: pointer
      .content
        margin-left: 260px
        padding: 20px 0px
</style>
