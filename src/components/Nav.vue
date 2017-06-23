<template lang='jade'>
Menu(mode='horizontal' theme='light' active-name='1' class='navbar').tc
  div(class='logo')
    p 这是logo
  router-link(to='/home')
    Menu-item(name='1')
      Icon(type='ios-paper')
      首页
  router-link(to='/shopping')    
    Menu-item(name='2')    
      Icon(type='ios-people')
      家具商城
  router-link(to='/help')    
    Menu-item(name='3')    
      Icon(type='ios-people')
      帮助中心
  router-link(to='/business')
    Menu-item(name='4')    
      Icon(type='ios-people')
      商家入驻
  div(class='login')
    a(@click='showLoginModal') 登录
    a(@click='showRegistModal') 注册
  Login
  Regist
</template>

<script>
import Login from './Modal/Login'
import Regist from './Modal/Regist'
export default {
  name: 'nav',
  data () {
    return {
      myTheme: 'light'
    }
  },
  components: {
    Login,
    Regist
  },
  methods: {
    showLoginModal () {
      this.$store.commit('toggleLogin')
    },
    showRegistModal () {
      console.log('hhh')
      this.$store.commit('toggleRegist')
    }
  }
}
</script>

<style lang="sass" scoped>

.navbar
  padding: 0 40px
h1
  color: red
h2
  color: blue
.ivu-menu-item
  float: none
  display: inline-block

.logo
  float: left

.login
  float: right
  a
    padding: 10px
</style>

