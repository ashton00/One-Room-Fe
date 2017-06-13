<template lang='jade'>
  .home
    .navigation
      .logo 一室LOGO
      .menus
        router-link.menu-item(to="/home") 首页
        router-link.menu-item(to="/mall")
          | 家具商城
          .sub-menus
            .sub-menu 卧室家具
            .sub-menu 客厅家具
            .sub-menu 餐厅家具
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
        .op-item(@click='showRegistModal') 注册
        Login
        Regist

    .bg-container
      img.bg(src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497358555057&di=8481cdbcd6677dd7c6bc2128a4b41afd&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F60%2F10%2F58j58PICxWR_1024.jpg")
      .bg-cover
    RightBar
  //- div.home.tc
  //-   div.main
  //-     RightBar
  //-     div.pt-80.pb-100
  //-       h1 一室|一种个性化的生活方式
  //-       div(class='search').mt-30
  //-         Input(v-model='keyword' placeholder="请输入..." id='keyword')
  //-         Button(type='primary' icon='ios-search') SEARCH
  //-   div.images.mt-40.pb-100
  //-     Row
  //-       Col(span='6')
  //-         img(src='../../assets/placehold.png')
  //-       Col(span='6')
  //-         img(src='../../assets/placehold.png')
  //-       Col(span='6')
  //-         img(src='../../assets/placehold.png')
  //-       Col(span='6')
  //-         img(src='../../assets/placehold.png')
    //- Carousel(v-model='value1' autoplay)
    //-   Carousel-item
    //-     div.demo-carousel 1
    //-   Carousel-item
    //-     div.demo-carousel 2
    //-   Carousel-item
    //-     div.demo-carousel 3
    //-   Carousel-item
    //-     div.demo-carousel 4
  //- div.jiaju
  //-   div.tc.p-30.bw.title
  //-     h1 家具分类
  //-   div.image.pt-40.pb-40
  //-     Row
  //-       Col(span='12')
  //-         img(src='../../assets/placehold.png')
  //-       Col(span='6')
  //-         img(src='../../assets/placehold.png')
  //-       Col(span='6')
  //-         img(src='../../assets/placehold.png')
  //-     Row
  //-       Col(span='6')
  //-         img(src='../../assets/placehold.png')
  //-       Col(span='6')
  //-         img(src='../../assets/placehold.png')
  //-       Col(span='12')
  //-         img(src='../../assets/placehold.png')  
  //- div.recommend
  //-   div.tc.p-30.bw.title
  //-     h1 热门推荐
  //-   Row.pt-40.pb-40
  //-     Col(span='8')
  //-       img(src='../../assets/placehold.png')
  //-     Col(span='8')
  //-       img(src='../../assets/placehold.png')
  //-     Col(span='8')
  //-       img(src='../../assets/placehold.png')
  //- div.cooperation
  //-   div.tc.p-30.bw.title
  //-     h1 品牌合作
  //-   div.image.pt-40.pb-40
  //-     Row
  //-       Col(span='8')
  //-         img(src='../../assets/placehold.png')
  //-       Col(span='8')
  //-         img(src='../../assets/placehold.png')
  //-       Col(span='8')
  //-         img(src='../../assets/placehold.png')
  //-     Row.pt-20
  //-       Col(span='8')
  //-         img(src='../../assets/placehold.png')
  //-       Col(span='8')
  //-         img(src='../../assets/placehold.png')
  //-       Col(span='8')
  //-         img(src='../../assets/placehold.png')
</template>

<script>
import RightBar from '@/components/App/RightBar'
import Login from '@/components/App/Modal/Login'
import Regist from '@/components/App/Modal/Regist'

export default {
  name: 'home',
  data () {
    return {
      keyword: '',
      value1: 1
    }
  },
  methods: {
    showLoginModal () {
      this.$store.commit('toggleLogin')
    },
    showRegistModal () {
      console.log('hhh')
      this.$store.commit('toggleRegist')
    }
  },
  components: {
    RightBar, Login, Regist
  }
}
</script>

<style lang="sass" scoped>
.home
  .navigation
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
  .bg-container
    position: relative
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
      z-index: 100
// .title
//   border: 2px solid #d7d3d3
// .home
//   background-color: #F2F2F2
// .main
//   overflow: auto
// #keyword
//   width: 400px
//   margin-right: 10px
// .demo-carousel
//   height: 200px
//   background-color: #506b9e
//   width: auto
</style>
