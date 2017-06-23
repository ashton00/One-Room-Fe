<template lang='jade'>
  footer.footer
    .item
      .title 关于一室
      .info.info--intro 互联网家具租赁平台，为个人房东和租户提供一站式的家具租赁服务，打造个性化的居住空间。
    .item
      .title 联系我们
      .info 地址：广东省广州市番禺区外环东路132号
      .info 客服电话：020-31414144
      .info 邮箱：service@yishi.com
    .item
      .title 帮助中心
      .info.info--link 了解我们
      .info.info--link 常见问题
      .info.info--link 用户协议
    .item
      .title 商家合作
      .info.info--link 商家入驻
      .info.info--link 加入我们
  
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style lang="sass" scoped>
  .footer
    padding: 60px 70px
    background-color: #48392e
    color: #F1BD5B
    overflow: auto
    min-width: 1200px
    .item
      float: left
      width: 25%
      display: inline-block
      padding-right: 70px
      &:last-child
        padding-right: 0px
      .title
        font-size: 20px
        margin-bottom: 20px
      .info
        color: white
        font-size: 14px
        margin-bottom: 10px
        &:last-child
          margin-bottom: 0px
      .info--intro
        line-height: 26px
      .info--link
        padding-left: 20px
        position: relative
        font-size: 16px
        &::after
          content: '>'
          position: absolute
          left: 0px
          color: #F1BD5B
          font-weight: bold
        &:hover
          text-decoration: underline
          cursor: pointer


</style>
