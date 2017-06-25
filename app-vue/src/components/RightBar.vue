<template lang="jade">
  .right-bar
    .bar-item(@click="toShoppingPage")
      .item-title 购物车
      Badge.item-badge(:count="count")
      img.item-icon(src="../assets/SideBar/shopcart.png")
    .bar-item
      .item-title 收藏
      img.item-icon(src="../assets/SideBar/like.png")
    .bar-item
      .item-title 客服
      img.item-icon(src="../assets/SideBar/service.png")
    .bar-item
      .item-title 反馈
      img.item-icon(src="../assets/SideBar/feedback.png")

</template>

<script>

export default {
  name: 'RightBar',
  props: {
    count: {
      type: Number,
      default: 1
    }
  },
  methods: {
    toShoppingPage: function() {
      this.$router.push('/shopping-car')
    }
  }
}

</script>

<style lang="sass" scoped>

  .right-bar
    position: fixed
    right: 0px
    top: 50%
    margin-top: -116px
    z-index: 100
    .bar-item
      position: relative
      padding: 9px 18px
      cursor: pointer
      .item-title
        position: absolute
        overflow: hidden
        right: 76px
        width: 0px
        top: 50%
        font-size: 14px
        line-height: 18px
        margin-top: -20px
        font-weight: bold
        background: #F0BE5A
        transition: right 0.5s linear
        border-radius: 2px
      .item-icon
        vertical-align: bottom
        width: 40px
        height: 40px
      .item-badge
        position: absolute
        top: 0px
        right: 9px
      &:hover
        .item-title
          right: 66px
          min-width: 100px
          padding: 10px 20px
          overflow: visible
          color: white
          &::after
            position: absolute
            right: -8px
            content: ''
            border-top: 10px solid transparent;
            border-left: 12px solid #F0BE5A;
            border-bottom: 10px solid transparent;
            width: 10px
            height: 10px
            top: 50%
            margin-top: -10px

</style>
