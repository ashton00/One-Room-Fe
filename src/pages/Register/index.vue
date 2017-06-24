<template lang="jade">
#Register
  #login-box
    form.left
      h1 注册一室
      input(type='text', name='phone', placeholder='手机号' required="required")
      input(type='password', name='password', placeholder='密码')
      input(type='password', name='password2', placeholder='请确认密码')
      input(type='submit', name='signup_submit', value='注册一室用户' @click="register")
    .right
      span.loginwith
        | 一室
        br
        | 首个家具租赁平台


</template>

<script>
export default {
  methods: {
    register: function () {
      this.$store.dispatch('register');
    }
  }
}
</script>

<style lang="sass" scoped> 
@import './index.sass';
</style>