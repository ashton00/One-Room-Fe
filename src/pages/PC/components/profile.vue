<template lang="jade">
  .profile
    .title 个人信息
    .avatar
      img.img(src="http://wx.qlogo.cn/mmopen/vi_32/klOZiauDdZsAHgcc31xE8La6M0XmrosR7jBwe8WveX0jibiaGSVhz6t0FgVxZ117cfUTOUiaUicicz78SGeVnxicsh1hw/0")
      .operation
        Upload(action="//jsonplaceholder.typicode.com/posts/")
          Button(type="ghost" icon="ios-cloud-upload-outline") 上传头像
    .form
      Form(:label-width="120", :model="form", ref="form", :rules="rules")
        Form-item(label="姓名", prop="username")
          Input.input(v-model="form.username", placeholder="请填写您的名字")
        Form-item(label="昵称", prop="nickname")
          Input.input(v-model="form.nickname", placeholder="请填写您的昵称")
        Form-item(label="性别", prop="gender")
          Radio-group(v-model="form.gender")
            Radio(label="male") 男
            Radio(label="female") 女
            Radio(label="sec") 保密
        Form-item(label="联系电话", prop="phone")
          Input.input(v-model="form.phone", placeholder="请填写您的联系方式")
        Form-item(label="个人简介", prop="summary")
          Input(v-model="form.summary", type="textarea", :autosize="{minRows: 4, maxRows: 10}", placeholder="请填写您的个人简介（选填）")
        Form-item
          Button(type="primary", @click="submitForm('form')") 保存
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        nickname: '',
        gender: '',
        phone: '',
        summary: ''
      },
      rules: {
        username: [
          { required: true, message: '姓名不能为空', trigger: 'blur' }
        ],
        nickname: [
          { required: true, message: '昵称不能为空', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          { validator: this.phoneValidator, trigger: 'blur' }
        ],
        gender: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        summary: [
          { required: true, message: '请输入个人介绍', trigger: 'blur' },
          { type: 'string', min: 20, message: '介绍不能少于20字', trigger: 'blur' }
        ]
      }
    }
  },
  components: {
  },
  methods: {
    phoneValidator (rule, value, callback) {
      if (!(/^1[34578]\d{9}$/.test(value))) {
        callback(new Error('手机号码有误，请重填'))
      } else {
        callback()
      }
    },
    submitForm (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('提交成功!')
        } else {
          this.$Message.error('表单验证失败!')
        }
      })
    }
  },
  computed: {
  }
}
</script>

<style lang="sass" scoped>
  .profile
    margin-right: 80px
    .title
      font-weight: bold
      font-size: 20px
      margin-bottom: 20px
    .avatar
      width: 100px
      float: left
      .img
        width: 100px
        height: 100px
        border-radius: 50%
        margin: 20px 0px
    .form
      padding-top: 20px
      float: left
      .input
        width: 300px

</style>
