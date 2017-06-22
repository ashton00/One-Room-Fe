<!-- 商品列表组件 by 王镇佳 <wzjfloor@163.com> -->
<template lang="jade">
.goods-body
  router-link.good-container(v-for='(subject, index) in data', key="index", :to='linkFunc(subject)')
    .good
      img.pic(src="http://yizitong.org/upload/images11/4d8127173be4d329ac0040b7be437cfb.jpg")
      .info
        .name Kindle官方旗舰店Kindle Paperwhite3亚马逊电子书阅读器电纸书
        .price
          | ¥ 958.0
          span.oldprice ¥ 1958.0

</template>

<script>
export default {
  props: {
    data: Array,
    linkFunc: Function
  },
  data () {
    return {}
  },
  method: {

  },
  computed: {
  }
}
</script>

<style lang="sass" scoped>
.goods-body
  margin: 10px 0px
.good-container
  width: 20%
  min-width: 230px
  padding-right: 10px
  padding-top: 10px
  box-sizing: border-box
  display: inline-block
  margin-bottom: 20px
  .good
    background: #fff
    box-sizing: border-box
    position: relative
    .pic
      width: 100%
      height: 225px
    .info
      padding: 10px 20px
      .name
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap
        color: #666
        font-size: 13px
      .price
        color: #ff0036
        font-size: 14px
        line-height: 32px
        .oldprice
          margin-left: 10px
          text-decoration: line-through
          color: gray
          font-size: 0.8em
    &:hover
      outline: 1px solid #F1BD5B
      cursor: pointer
      .info
        &::after
          position: absolute
          top: 0px
          left: 0px
          display: block
          background: rgba(255, 255, 255, 0.1)
          content: ''
          height: 225px
          width: 100%
          z-index: 10 
</style>