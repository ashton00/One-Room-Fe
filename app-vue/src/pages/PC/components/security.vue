<template lang="jade">
  .security
    .title 安全设置
    .settings
      .setting
        .tip
          Icon.icon(type="checkmark-circled")
          .text 已设置
        .type 登陆密码
        .opertation
          Button(type="primary", @click="editPwd") 修改
        .detail 安全性高的密码可以使账号更安全，建议您定期更换密码，且设置一个包含数字和字母，并且长度超过6位以上的密码。
      .setting
        .tip
          Icon.icon.icon--error(type="close-circled")
          .text 未绑定
        .type 绑定手机
        .opertation
          Button(type="primary", @click="editPhone") 修改
        .detail 绑定手机后，您即可享受一室丰富的手机服务，如手机找回密码等
    Modal(v-model="pwdVisible", :loading="loading", title="修改密码", @on-ok="formSubmit('pwdForm')")
        Form(:model="pwdForm", ref="pwdForm", :rules="pwdRules", :label-width="72", label-position="left")
          Form-item(prop="oldpwd", label="旧密码")
            Input.input(v-model="pwdForm.oldpwd", type="password", placeholder="请填写旧密码")
              Icon(type="ios-locked-outline", slot="prepend")
          Form-item(prop="pwd", label="新密码")
            Input.input(v-model="pwdForm.pwd", type="password", placeholder="请填写新密码")
              Icon(type="ios-locked-outline", slot="prepend")
          Form-item(prop="repwd", label="确认密码")
            Input.input(v-model="pwdForm.repwd", type="password", placeholder="请再次确认您的密码")
              Icon(type="ios-locked-outline", slot="prepend")
    Modal(v-model="phoneVisible", :loading="loading", title="修改电话", @on-ok="formSubmit('phoneForm')")
        Form(:model="phoneForm", ref="phoneForm", :rules="phoneRules", :label-width="60", label-position="left")
          Form-item(prop="phone", label="新电话")
            Input.input(v-model="phoneForm.phone", type="text", placeholder="请填写电话号码")
              Icon(type="iphone", slot="prepend")

</template>

<script>

export default {
  data () {
    return {
      pwdVisible: false,
      phoneVisible: false,
      loading: true,
      pwdForm: {
        oldpwd: '',
        pwd: '',
        repwd: ''
      },
      phoneForm: {
        phone: ''
      },
      pwdRules: {
        oldpwd: [
          { required: true, message: '请输入旧密码', trigger: 'blur' }
        ],
        pwd: [
          { required: true, validator: this.validatePass, trigger: 'blur' }
        ],
        repwd: [
          { required: true, validator: this.validatePassCheck, trigger: 'blur' }
        ]
      },
      phoneRules: {
        phone: [
          { required: true, validator: this.phoneValidator, trigger: 'blur' }
        ]
      }
    }
  },
  components: {
  },
  methods: {
    editPwd () {
      this.pwdVisible = !this.pwdVisible
    },
    editPhone () {
      this.phoneVisible = !this.phoneVisible
    },
    validatePass (rule, value, callback) {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.pwdForm.repwd !== '') {
          // 对第二个密码框单独验证
          this.$refs.pwdForm.validateField('repwd')
        }
        callback()
      }
    },
    validatePassCheck (rule, value, callback) {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.pwdForm.pwd) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    },
    phoneValidator (rule, value, callback) {
      if (value === '') {
        callback(new Error('请输入手机号码'))
      } else if (!(/^1[34578]\d{9}$/.test(value))) {
        callback(new Error('手机号码有误，请重填'))
      } else {
        callback()
      }
    },
    formSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('提交成功!')
          this.modalVisible = false
        } else {
          this.$Message.error('表单验证失败!')
          this.loading = false
          setTimeout(() => {
            this.loading = true
          }, 100)
        }
      })
    }
  },
  computed: {
  }
}
</script>

<style lang="sass" scoped>
  .security
    margin-right: 80px
    .title
      font-weight: bold
      font-size: 20px
      margin-bottom: 20px
    .settings
      .setting
        border: 1px solid #F1BD5B
        border-radius: 4px
        vertical-align: middle
        overflow: auto
        margin-bottom: 20px
        padding: 20px 10px
        .tip
          display: inline-block
          width: 80px
          float: left
          .icon
            color: #F1BD5B
            font-size: 40px
            width: 100%
            text-align: center
          .icon--error
            color: #ed3f14
          .text
            font-size: 18px
            width: 100%
            text-align: center
        .type
          display: inline-block
          width: 180px
          font-size: 20px
          font-weight: bold
          text-align: center
          line-height: 68px
          vertical-align: top
          float: left
        .detail
          margin-left: 260px
          margin-right: 100px
          margin-top: 10px
        .opertation
          float: right
          width: 100px
          text-align: center
          padding-top: 20px

</style>
