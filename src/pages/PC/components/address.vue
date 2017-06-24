<template lang="jade">
  .profile
    .title 管理收货地址
    .table
      Table(border, :columns="columns", :data="datas")
</template>

<script>
export default {
  data () {
    return {
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
                    this.show(params.index)
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
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
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
                      this.remove(params.index)
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
        }
      ]
    }
  },
  components: {
  },
  methods: {
    remove (index) {
      this.datas.splice(index, 1)
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

</style>
