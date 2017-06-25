<template lang="jade">
  .notice
    .title 系统通知
    .container.p-10
      .head.bold.mb-10 每月优惠券发放通知
      .hr
      .body.mt-10 亲爱的Esy，小室已经给您发放了本月的优惠券，请到我的优惠券查收哦～
    .container
      .head

</template>

<script>
import Menus from './menus'

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
  .notice
    margin-right: 80px
    .title
      font-weight: bold
      font-size: 20px
      margin-bottom: 20px
    .container
      border: 1px solid #eee
      .hr
        margin: auto
        border: 1px solid #eee
</style>
