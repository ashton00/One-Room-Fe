<template lang='jade'>
#Payment.p-40
  modal(title='新增收货地址', v-model='showmodal', @on-ok='createNewAddr' ok-text='保存' width='380')
    Input.mt-10(v-model='name', placeholder='请输入收货人姓名')
    Input.mt-20(v-model='phone', placeholder='请输入手机号')
    Select.mt-20(v-model='city')
      Option(v-for='item in cityList', :value='item.value', :key='item') {{ item.label }}
    Input.mt-20(v-model='address', placehold  er='请输入详细地址', type='textarea')
  modal(v-model='showWeChat')
    img.fl.mr-20(src='../../assets/二维码.png')
    p.fs-20 微信支付说明
    p.mt-20 1.下单后尽快支付，以免被他人租用，影响您的使用。
    p.mt-15 2.付款金额包含押金、租金和运费。押金将在退租后返还至支付账号。
    p.mt-15 3.如果您有支付方面的其他问题，请联系一室在线客服。
    div(slot='footer')
  Steps(:current='current')
    Step(title='填写订单')
    Step(title='付款')
    Step(title='等待配送')
  div
    div(v-if='current==0') 填写订单
      h2.title 收获地址
      .address.active.p-20.mr-40
        p 张晓明
        p 18888888888
        p 广东省广州市番禺区至善园九号天台828
      .address.p-20.mr-40
        p 张晓明
        p 18888888888
        p 广东省广州市番禺区至善园九号天台828
      .newAddress(@click='showmodal = true')
        img.mr-5(src='../../assets/add.png')
        | 新增收货地址
      h2.title 配送时间
        
      h2.title 订单详情
      Button(type='warning' @click='submitOrder') 提交订单
    div(v-if='current==1')
      div.payment-info.p-20.mt-40
        p.money.fs-20 应付金额：¥250
        p 收货人：张晓明
        p 联系电话：18819253618
        p 联系地址：广东省广州市番禺区至善园九号天台828
        p 配送时间：04月07日（周五）9:00-14:00，15:00-18:00，04月08日（周六）9:00-14:00
      img.ml-40.mt-70(src='../../assets/微信.png', @click='showWeChat = true')
      img.ml-50(src='../../assets/支付宝.png')
    div(v-if='current==2') 等待配送
  

</template>
</template>

<script>
export default {
  name: 'Payment',
  data () {
    return {
      current: 1,
      showmodal: false,
      showWeChat: false,
      name: '',
      phone: '',
      address: '',
      city: '',
      cityList: [
        {
          value: 'beijing',
          label: '北京市'
        },
        {
          value: 'shanghai',
          label: '上海市'
        },
        {
          value: 'shenzhen',
          label: '深圳市'
        },
        {
          value: 'hangzhou',
          label: '杭州市'
        },
        {
          value: 'nanjing',
          label: '南京市'
        },
        {
          value: 'chongqing',
          label: '重庆市'
        }
      ]
    }
  },
  methods: {
    submitOrder () {
      this.current = 1
    },
    createNewAddr () {
      console.log('create new address')
    }
  }
}
</script>

<style lang="sass" scoped>
#Payment
  .ivu-steps
    position: relative
    left: 12.5%
  h2.title
    color: #f0be5a
    margin-top: 40px
    margin-bottom: 20px
  .address
    width: 220px
    height: 120px
    display: inline-block
    border: 1px solid #515151
    vertical-align: top
    cursor: pointer
    &.active
      border: 1px solid #b9c088
      background: url(../../assets/activeAddr.png) no-repeat top right
  .newAddress
    height: 120px
    display: inline-block
    vertical-align: top
    line-height: 120px
    cursor: pointer
    img
      vertical-align: middle
  .payment-info
    margin-left: auto
    margin-right: auto
    max-width: 800px
    border: 1px solid #b9c088
    p.money
      color: #b9c088
</style>
