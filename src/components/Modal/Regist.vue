<template lang='jade'>
Modal(v-model='isLogin' @on-cancel='cancel' width='380')
  p(slot='header')
    span 注册
  div.p-10
    Input(v-model='phone' placeholder='手机号').mb-20
    Input(v-model='catpcha' placeholder='验证码').mb-20
    Input(v-model='password' placeholder='设置密码').mb-20
    Input(v-model='confirmPassword' placeholder='确认密码')
  div(slot='footer')
    Button(type='info' long) 登录
    p.mb-10.tl 点击注册即视为同意
      a 一室用户注册协议、法律声明以隐私政策
  
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      phone: '',
      catpcha: '',
      password: '',
      confirmPassword: ''
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.modal.isRegist
    }
  },
  methods: {
    cancel () {
      this.$store.commit('toggleRegist')
    }
  }
}
</script>

<style lang="sass" scoped>
.ivu-modal-footer
  display: none !important
.ivu-modal-footer
  p
    font-size: 12px
    line-height: 12px
</style>
