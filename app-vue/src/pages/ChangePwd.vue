<template lang='jade'>
div.p-50.pl-80.mb-60
  h2.mb-20.tl 忘记密码
  #changePwd
    Steps(v-bind:current='current')
      Step(title='验证身份')
      Step(title='设置新密码')
      Step.tl(title='完成')
    div
      Form(v-model='vertify' v-bind:label-width='labelWidth' v-if='current == 0')
        Form-item(label='手机号码' )
          Row
            Col(span='15')
              Input(placeholder='用户名/手机号' v-model='vertify.phone')
        Form-item(label='验证码')
          Row
            Col(span='15')
              Input(v-model='vertify.catpcha')
        Button(type='primary' @click='next')#next 下一步
      Form(v-model='setting' v-if='current == 1' v-bind:label-width='labelWidth')
        Form-item(label='手机号码')
          Row
            Col(span='15')
              Input(placeholder='设置新密码' v-model='setting.newPwd')
        Form-item(label='确定新密码')
          Row
            Col(span='15')
              Input(v-model='setting.confirmPwd')
        Button(type='primary' @click='next')#next 下一步
      div.finish.tc(v-if='current == 2').mb-40
        div.fs-14.info
          p 新密码设置已完成
          p 5秒后跳转到登陆页面
        Button.mt-30(type='info' @click='login')#next 点击立刻跳转到登陆页面
    
</template>

<script>
export default {
  name: 'changePwd',
  data () {
    return {
      current: 0,
      vertify: {},
      setting: {},
      labelWidth: 100
    }
  },
  methods: {
    next () {
      this.current++
    },
    login () {
      this.$store.commit('toggleLogin')
    }
  }
}
</script>

<style lang="sass" scoped>
#changePwd
  max-width: 800px
  margin: auto
.ivu-steps-horizontal
  max-width: 1000px
  margin: auto
  margin-bottom: 40px
.info
  margin-right: 200px
form
  text-align: center
  margin: auto
#next 
  width: 200px
  margin-right: 200px
  height: 40px
  font-size: 14px
</style>
