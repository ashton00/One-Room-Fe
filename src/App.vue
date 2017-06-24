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
<style lang='less'>
@import '~iview/src/styles/index.less';

@primary-color: #F1BD5B;

body {
  font-size: 14px
}
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.main-content{
  min-width: 1200px
}

// 原子类
.bw {
  background-color: white
}
.tc {
  text-align: center
}
.tl {
  text-align: left
}
.tr {
  text-align: right
}

.fl {
  float: left
}
.fr {
  float: right
}

.ib {
  display: inline-block
}

.line {
  border-bottom: 1px solid #ccc;
  width: 100%
}

.generate-base(100);

.generate-base(@n, @i: 1, @temp: 1px) when (@i =< @n) {
  .p-@{i} {
    padding: @temp
  }
  .pl-@{i} {
    padding-left: @temp
  }
  .pr-@{i} {
    padding-right: @temp
  }
  .pb-@{i} {
    padding-bottom: @temp
  }
  .pt-@{i} {
    padding-top: @temp
  }
  .m-@{i} {
    margin: @temp
  }
  .ml-@{i} {
    margin-left: @temp
  }
  .mr-@{i} {
    margin-right: @temp
  }
  .mb-@{i} {
    margin-bottom: @temp
  }
  .mt-@{i} {
    margin-top: @temp
  }
  .generate-base(@n, (@i + 1), (@temp + 1px));
}

.generate-font(30, 12, 12px);

.generate-font(@n, @i: 1, @temp: 1px) when (@i =< @n) {
  .fs-@{i} {
    font-size: @temp
  }
  .generate-font(@n, (@i + 1), (@temp + 1px));
}

.bold {
  font-weight: bold
}
.yellow {
  color: #f1bf50
}
.red {
  color: red
}
.ivu-icon-arrow-up-a {
  color: #f1bf50
}
.ivu-icon-arrow-down-a {
  color: red
}

</style>
