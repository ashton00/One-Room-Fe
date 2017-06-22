<template lang="jade">
#shopping-car
  .mainTitle 我的购物车
  .allFoods 全部商品  4

  .listTitle 
    .item 
      Checkbox(v-model="single") 全选
    .item 商品
    .item 数量
    .item 租期
    .item 单价
    .item 押金
    .item 租金
    .item 操作

  .storeItem(v-for="storeItem in storeItems")
    .storeTop 
      Checkbox(v-model="single")
      .storeName 店铺：宜居北欧家具
      .storeConsult 咨询店铺
    .foodItem(v-for="item in storeItem")
      .colItem.pic 
        Checkbox(v-model="single")
        img(src="../../assets/bed.png")
      .colItem.des
        | 简约现代松木床米色1.5 * 1.9 m 九成新
      .colItem.amount
      .colItem.time 6个月
      .colItem.price ￥12.00/月
      .colItem.yajin ￥300.00
      .colItem.rent ￥72
      .colItem.oper
        .operItem 移入文件夹
        .operItem 删除

</template>

<script>
export default {
  data() {
    return {
      single: true,
      storeItems: [[1, 2], [1, 2]]
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./index.sass";


</style>