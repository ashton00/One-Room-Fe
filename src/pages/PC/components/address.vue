<template lang="jade">
  .profile
    .title 管理收货地址
    .table
      Table(border, :columns="columns", :data="datas")
    Button.op-button(type="primary", size="large", @click="showAddModal")
      Icon(type="plus-circled")
      | 增加新的收货地址
    Modal(v-model="modalVisible", :loading="loading", :title="adding ? '增加收货地址' : '修改收货地址'", @on-ok="formSubmit('form')")
      Form(:label-width="90", label-position="left", :model="form", ref="form", :rules="rules")
        Form-item(label="收货人姓名", prop="username")
          Input.input(v-model="form.username", placeholder="请填写您的名字")
        Form-item(label="手机号", prop="phone")
          Input.input(v-model="form.phone", placeholder="请填写您的联系方式")
        Form-item(label="地区", prop="area")
          Input.input(v-model="form.area", placeholder="请填写地区")
          //- Select(v-model="form.area", placeholder="请选择地区")
          //-   Option(value="beijing") 北京市
          //-   Option(value="shanghai") 上海市
          //-   Option(value="shenzhen") 深圳市
        Form-item(label="详细地址", prop="address")
          Input(v-model="form.address", type="textarea", :autosize="{minRows: 4, maxRows: 10}", placeholder="请填写您的详细地址")
</template>

<script>
export default {
  data () {
    return {
      modalVisible: false,
      adding: true,
      loading: true,
      columns: [
        {
          title: '姓名',
          key: 'username',
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'person'
                }
              }),
              h('strong', params.row.username)
            ])
          }
        },
        {
          title: '所在地区',
          key: 'area'
        },
        {
          title: '详细地址',
          key: 'address'
        },
        {
          title: '电话／手机',
          key: 'phone'
        },
        {
          title: '操作',
          key: 'action',
          width: 200,
          align: 'center',
          render: (h, params) => {
            let renderContent = [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px',
                  float: 'left'
                },
                on: {
                  click: () => {
                    this.edit(params.index)
                  }
                }
              }, '修改'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                style: {
                  marginRight: '5px',
                  float: 'left'
                },
                on: {
                  click: () => {
                    this.remove(params.index)
                  }
                }
              }, '删除')
            ]
            if (params.row.default) {
              renderContent.push(
                h('span', {
                  style: {
                    background: '#2d8cf0',
                    padding: '3px 8px',
                    'border-radius': '4px',
                    color: 'white',
                    float: 'left'
                  }
                }, '默认地址')
              )
            } else {
              renderContent.push(
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px',
                    float: 'left'
                  },
                  on: {
                    click: () => {
                      this.default(params.index)
                    }
                  }
                }, '设为默认')
              )
            }
            return h('div', renderContent)
          }
        }
      ],
      datas: [
        {
          username: '张大明',
          area: '广东省广州市番禺区小谷围街道',
          address: '中山大学东校区至善园九栋610',
          phone: '12345678',
          default: true
        },
        {
          username: '张小明',
          area: '广东省广州市番禺区小谷围街道',
          address: '中山大学东校区至善园九栋666',
          phone: '123456789'
        },
        {
          username: '张小明',
          area: '广东省广州市番禺区小谷围街道',
          address: '中山大学东校区至善园九栋666',
          phone: '123456789'
        },
        {
          username: '张小明',
          area: '广东省广州市番禺区小谷围街道',
          address: '中山大学东校区至善园九栋666',
          phone: '123456789'
        }
      ],
      form: {
        username: '',
        phone: '',
        area: '',
        address: ''
      },
      rules: {
        username: [
          { required: true, message: '姓名不能为空', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          { validator: this.phoneValidator, trigger: 'blur' }
        ],
        area: [
          // { required: true, message: '地区不能为空', trigger: 'change' }
          { required: true, message: '地区不能为空', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '详细地址不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  components: {
  },
  methods: {
    remove (index) {
      this.datas.splice(index, 1)
    },
    edit (index) {
      this.adding = false
      this.modalVisible = true
      this.form = JSON.parse(JSON.stringify(this.datas[index]))
    },
    default (index) {
      for (let i = 0; i < this.datas.length; i++) {
        this.datas[i].default = (index === i)
      }
      let top = this.datas[index]
      this.datas.splice(index, 1)
      this.datas.unshift(top)
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
    },
    phoneValidator (rule, value, callback) {
      if (!(/^1[34578]\d{9}$/.test(value))) {
        callback(new Error('手机号码有误，请重填'))
      } else {
        callback()
      }
    },
    showAddModal () {
      this.modalVisible = true
      this.adding = true
      this.form = {
        username: '',
        phone: '',
        area: '',
        address: ''
      }
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
    .op-button
      margin-top: 20px

</style>
