// 通用顶部栏组件

<template lang="jade">
Menu(mode='horizontal' theme='light' active-name='1' class='navbar').tc
  .logo 一室LOGO
  button(v-for="(bar, index) in barList",
  :key="index", @click="changeUrl(bar, index)", :class="{'active': $route.path == bar.url }") {{ bar.title }}

  div(class='login')
    a(@click='showLoginModal') 登录
    a(target="_blank" href="/register") 注册
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
      myTheme: 'light',
      barList: [{
        title: '首页',
        url: '/home'
      }, {
        title: '家具商城',
        url: '/mall'
      }, {
        title: '帮助中心',
        url: '/help'
      }, {
        title: '商家入驻',
        url: '/business'
      }]
    }
  },
  components: {
    Login,
    Regist
  },
  methods: {
    changeUrl (bar, index) {
      this.$router.push(bar.url)
    },
    showLoginModal () {
      this.$store.commit('toggleLogin')
    }
  },
  events: {
    'on-select' (name) {
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
  color: #F1BD5B
  font-size: 20px

.login
  float: right
  a
    padding: 10px
button 
  width: 100px
  height: 60px
  background: #fff
  outline: none
  border: none
  cursor: pointer
  &:hover
    background: rgba(72,57,46, 0.5)
    color: #fff
.active 
  background: #48392e !important
  color: #fff
</style>

