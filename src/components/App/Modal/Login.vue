<template lang='jade'>
Modal(v-model='isLogin' @on-cancel='cancel' width='380')
  p(slot='header')
    span 登录
  div.p-10
    Input(v-model='username' placeholder='手机号').mb-20
    Input(v-model='password' placeholder='密码').mb-20
    div.tl
      Checkbox(v-model='remember') 下次自动登录
      div.fr
        router-link.mr-20(to='/findpwd')
          span(@click='cancel') 忘记密码
        a 免费注册
  div(slot='footer')
    Button(type='info' long) 登录

  
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      remember: false,
      username: '',
      password: '',
      isLoginStatus: false
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.modal.isLogin
    }
  },
  methods: {
    cancel () {
      console.log('hhh')
      this.$store.commit('toggleLogin')
    }
  }
}
</script>

<style lang="sass" scoped>
span.ivu-checkbox
  margin-right: 10px
</style>
