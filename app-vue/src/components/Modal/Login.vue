<template lang="jade">
Modal(v-model='isLogin' @on-cancel='cancel' width='380', :footerHide="footerHide")
  .login-page
  
    .form
      form.login-form
        input(type='text', v-model="phone", placeholder='手机号')
        input(type='password', v-model="password", placeholder='密码')
        button(@click.prevent="login") 登录
        p.message
          | 还未注册 ?
          a(href='/register' target="_blank") 创建一室账号

</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      remember: false,
      isLoginStatus: false,
      footerHide: true
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.modal.isLogin
    },
    phone: {
      get () {
        return this.$store.state.user.loginForm.phone
      },
      set (value) {
        this.$store.commit('updateLoginForm', { phone: value })
      }
    },
    password: {
      get () {
        return this.$store.state.user.loginForm.password
      },
      set (value) {
        this.$store.commit('updateLoginForm', { password: value })
      }
    }
  },
  methods: {
    cancel () {
      this.$store.commit('toggleLogin')
    },
    login () {
      this.$store.dispatch('login').then(res => {
        this.$Message.info('成功登陆')
        this.cancel()
      }).catch(this.$Message.error)
    }
  }
}
</script>

<style lang="sass" scoped>

span.ivu-checkbox
  margin-right: 10px

.login-page 
  width: 360px
  padding: 8% 0 0
  margin: auto

.form 
  position: relative
  z-index: 1
  background: #FFFFFF
  max-width: 360px
  padding: 45px
  padding-top: 20px
  text-align: center

.ivu-modal-footer
  display: none !important

.form input 
  font-family: "Roboto", sans-serif
  outline: 0
  background: #f2f2f2
  width: 100%
  border: 0
  margin: 0 0 15px
  padding: 15px
  box-sizing: border-box
  font-size: 14px

.form button 
  font-family: "Roboto", sans-serif
  text-transform: uppercase
  outline: 0
  background: #4CAF50
  width: 100%
  border: 0
  padding: 15px
  color: #FFFFFF
  font-size: 14px
  -webkit-transition: all 0.3 ease
  transition: all 0.3 ease
  cursor: pointer

.form button:hover,.form button:active,.form button:focus 
  background: #43A047

.form .message 
  margin: 15px 0 0
  color: #b3b3b3
  font-size: 12px

.form .message a 
  color: #4CAF50
  text-decoration: none

.form .register-form 
  display: none

.container 
  position: relative
  z-index: 1
  max-width: 300px
  margin: 0 auto

.container:before, .container:after 
  content: ""
  display: block
  clear: both

.container .info 
  margin: 50px auto
  text-align: center

.container .info h1 
  margin: 0 0 15px
  padding: 0
  font-size: 36px
  font-weight: 300
  color: #1a1a1a

.container .info span 
  color: #4d4d4d
  font-size: 12px

.container .info span a 
  color: #000000
  text-decoration: none

.container .info span .fa 
  color: #EF3B3A



</style>
