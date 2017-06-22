<template>
  <div id="app">
    <Navbar v-if="isNotHome"></Navbar>
    <div class='main-content'>
      <router-view></router-view>
    </div>
    <Foot></Foot>
    <RightBar></RightBar>
  </div>
</template>

<script>
import Navbar from './components/App/Nav'
import Foot from './components/App/Footer'
import RightBar from '@/components/App/RightBar'

export default {
  name: 'app',
  data () {
    return {
      radio: true,
      isNotHome: true
    }
  },
  created () {
    this.checkHome()
  },
  methods: {
    checkHome () {
      this.isNotHome = !(this.$route.name === 'home')
    }
  },
  components: {
    Navbar, Foot, RightBar
  },
  watch: {
    '$route' (to, from) {
      this.checkHome()
    }
  }
}
</script>

/*测试*/
<style lang='sass'>
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

.main-content
  min-width: 1200px

//原子类
.bw
  background-color: white
.tc
  text-align: center
.tl
  text-align: left
.tr
  text-align: right

.fl
  float: left
.fr
  float: right

.ib
  display: inline-block

@for $i from 12 through 30
  .fs-#{$i}
    font-size: $i + px
    

// @for $i from 1 through 20
//   .p-#{5*$i}
//     padding: (5 * $i) + px
//   .pl-#{5*$i}
//     padding-left: (5 * $i) + px
//   .pr-#{5*$i}
//     padding-right: (5 * $i) + px
//   .pb-#{5*$i}
//     padding-bottom: (5 * $i) + px
//   .pt-#{5*$i}
//     padding-top: (5 * $i) + px
//   .m-#{5*$i}
//     margin: (5 * $i) + px
//   .ml-#{5*$i}
//     margin-left: (5 * $i) + px
//   .mr-#{5*$i}
//     margin-right: (5 * $i) + px
//   .mb-#{5*$i}
//     margin-bottom: (5 * $i) + px
//   .mt-#{5*$i}
//     margin-top: (5 * $i) + px
@for $i from 1 through 100
  $temp: $i + px
  .p-#{$i}
    padding: $temp
  .pl-#{$i}
    padding-left: $temp
  .pr-#{$i}
    padding-right: $temp
  .pb-#{$i}
    padding-bottom: $temp
  .pt-#{$i}
    padding-top: $temp
  .m-#{$i}
    margin: $temp
  .ml-#{$i}
    margin-left: $temp
  .mr-#{$i}
    margin-right: $temp
  .mb-#{$i}
    margin-bottom: $temp
  .mt-#{$i}
    margin-top: $temp

.bold
  font-weight: bold
.yellow
  color: #f1bf50
.red
  color: red
.ivu-icon-arrow-up-a
  color: #f1bf50
.ivu-icon-arrow-down-a
  color: red

</style>
