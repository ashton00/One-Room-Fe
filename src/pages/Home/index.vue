<template lang="jade">
  .home
    .navigation(:class="navdown ? 'navigation--down' : ''")
      .logo 一室LOGO
      .menus
        router-link.menu-item(to="/home") 首页
        router-link.menu-item(to="/mall")
          | 家具商城
          .sub-menus.sub-menus--two-item
            .sub-menu 卧室家具
            .sub-menu 客厅家具
            .sub-menu 餐厅家具
            .sub-menu 书房家具
            .sub-menu 家具软饰
            .sub-menu 办公家具
        router-link.menu-item(to='/help')
          | 帮助中心
          .sub-menus
            .sub-menu 了解我们
            .sub-menu 常见问题
            .sub-menu 联系我们
        router-link.menu-item(to="/business") 商家入驻
      .operations
        .op-item(@click='showLoginModal') 登陆
        a.op-item(href="/register" target="_blank") 注册
        Login
        Regist

    .img-content
      .bg-cover
      .search-bar
        .search
          input.input(v-model='keyword', placeholder="请输入...")
          .button(type='primary', icon='ios-search', size="large") 搜索
    .body

      .section
        .title
          .name 热门分类
        .furniture-kinds
          .gird(v-for="item in furnitureKinds" @click="toMall(item.param)")
            .gird-title {{ item.name }}
            .gird-img
              img(:src="item.img")

</template>

<script>
import FoodList from '@/components/App/FoodList.vue'
import Login from '@/components/App/Modal/Login'
import Regist from '@/components/App/Modal/Regist'

export default {
  name: 'home',
  data () {
    return {
      keyword: '',
      navdown: false,
      furnitureKinds: [
        { name: "卧室家具", param: 'woshi', img: require("../../assets/woshi.jpeg")},
        { name: "客厅家具", param: 'keting', img: require("../../assets/keting.jpeg")},
        { name: "餐厅家具", param: 'canting', img: require("../../assets/canting.jpeg")},
        { name: "书房家具", param: 'shufang', img: require("../../assets/shufang.jpeg")},
        { name: "家居软饰", param: 'ruanshi', img: require("../../assets/ruanshi.jpeg")},
        { name: "办公家具", param: 'bangong', img: require("../../assets/bangong.jpeg")},
      ]
    }
  },
  created () {
    window.onscroll = (e) => {
      this.navdown = document.body.scrollTop > 200
    }
  },
  mounted () {
    (document.getElementsByClassName('img-content')[0]).style.height = window.innerHeight + 'px';
  },
  beforeDestroy () {
    window.onscroll = null
  },
  methods: {
    showLoginModal () {
      this.$store.commit('toggleLogin')
    },
    showRegistModal () {
      this.$store.commit('toggleRegist')
    },
    linkTo (subject) {
      return '/detail'
    },
    toMall (subject) {
      this.$router.push(`mall/${subject}`)
      console.log(subject);
    }
  },
  components: {
    Login, Regist, FoodList
  },
  computed: {
    hotLists () {
      return [1, 2, 3, 4, 5, 6, 7, 8]
    }
  }
}
</script>

<style lang="sass" scoped>
.home
  .navigation
    min-width: 1200px
    position: fixed
    top: 0px
    left: 0px
    right: 0px
    z-index: 1000
    padding: 0px 70px
    div
      display: inline-block
    .logo
      display: inline-block
      font-size: 26px
      color: #F1BD5B
      line-height: 40px
    .menus
      margin: 0px 60px
      .menu-item
        display: inline-block;
        position: relative
        padding: 20px 40px
        font-size: 18px
        line-height: 40px
        color: white
        font-weight: bold
        cursor: pointer
        .sub-menus
          position: absolute
          display: none
          top: 100%
          width: 100%
          left: 0px
          .sub-menu
            padding: 10px 20px
            text-align: center
            width: 100%
            color: white
            font-size: 18px
            cursor: pointer
            background: rgba(0, 0, 0, 0.4)
            &:hover
              background: rgba(0, 0, 0, 0.6)
        .sub-menus--two-item
          width: 200%
          left: -50%
          .sub-menu
            width: 50%
            display: inline-block
        &:hover
          background: rgba(0, 0, 0, 0.4)
          .sub-menus
            display: block
    .operations
      float: right
      .op-item
        font-size: 18px
        line-height: 40px
        padding: 20px
        color: white
        &:hover
          text-decoration: underline
          cursor: pointer
  .navigation--down
    background: #F1BD5B
    .logo
      color: white
    .menus
      .menu-item
        .sub-menus
          background: #F1BD5B
          .sub-menu
            background: rgba(0, 0, 0, 0)
            &:hover
              background: rgba(0, 0, 0, 0.4)
  .img-content
    position: relative
    background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497358555057&di=8481cdbcd6677dd7c6bc2128a4b41afd&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F60%2F10%2F58j58PICxWR_1024.jpg') center no-repeat
    width: 100%
    background-size: cover
    height: 800px

    .bg
      width: 100%
      vertical-align: bottom
      display: block
    .bg-cover
      width: 100%
      height: 100%
      position: absolute
      left: 0px
      top: 0px
      background: rgba(0, 0, 0, 0.3)
    .search-bar
      color: white
      position: absolute
      top: 300px
      width: 100%
      .search
        text-align: center
        .input
          width: 300px
          padding: 10px 20px
          font-size: 16px
          height: 44px
          box-sizing: border-box
          outline: none
          border: none
          border-radius: 4px 0px 0px 4px
          border: 2px solid #F1BD5B
        .button
          display: inline-block
          font-size: 16px
          color: white
          font-weight: bold
          border-radius: 0px 4px 4px 0px
          padding: 10px 40px
          background: #F1BD5B
          user-select: none
          cursor: pointer
          height: 44px
          &:hover
            background: #E8BA64
          &:active
            background: #F1BD5B
  .section
    background: #F5F5F5
    padding: 20px 10px 10px 10px
    
    &:first-child
      padding: 40px 10px 10px 10px
    .title
      text-align: left
      margin: 0 8%
      .name
        border-left: 4px solid #F1BD5B
        padding-left: 10px
        display: inline-block
        font-size: 18px
        line-height: 20px
        color: #000
        position: relative
        // &::after
        //   content: ''
        //   display: block
        //   position: absolute
        //   width: 40px
        //   height: 1px
        //   background: #777
        //   left: -60px
        //   top: 50%
        //   margin-top: -0.5px
        // &::before
        //   content: ''
        //   display: block
        //   position: absolute
        //   width: 40px
        //   height: 1px
        //   background: #777
        //   right: -60px
        //   top: 50%
        //   margin-top: -0.5px
  
  .section
    .furniture-kinds
      margin: 10px 8%
      .gird
        cursor: pointer
        width: 244px
        height: 220px
        background-color: #fff
        border: 1px solid #f5f5f5
        display: inline-block
        overflow: hidden
        // &:hover
        //   background: #ccc
      .gird-title
        height: 70px
        line-height: 70px
        font-size: 18px
        text-overflow: ellipsis
        overflow: hidden
        white-space: nowrap
        color: #000
        padding-left: 20px
      .gird-img
        text-align: center
        overflow: hidden
        width: 200px
        height: 150px
        margin: 0 auto
        img
          transition: all 0.5s
          width: 200px
          height: 150px
      .gird-img:hover > img
        transform: scale(1.1)
        
    
    
    
    .body
      margin: 10px 0px

      .good-container
        width: 20%
        min-width: 230px
        padding-right: 10px
        padding-top: 10px
        box-sizing: border-box
        display: inline-block
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
