<template lang="jade">
  .menus
    .menu-item(v-for="(item, index) in datas", @click="changeIndex(index)", :class="index === activeIndex ? 'menu-item--active' : ''") {{item.name}}({{item.num}})
    Input.search(placeholder='搜索', icon="search")
</template>

<script>
export default {
  props: {
    datas: Array
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  components: {
  },
  methods: {
    changeIndex (index) {
      this.activeIndex = index
    }
  },
  computed: {
  }
}
</script>

<style lang="sass" scoped>
  .menus
    margin-bottom: 40px
    overflow: auto
    .menu-item
      display: inline-block
      margin-right: 40px
      font-size: 16px
      user-select: none
      line-height: 32px
      &:hover
        text-decoration: underline
        cursor: pointer
    .menu-item--active
      color: #F1BD5B
      text-decoration: underline
    .search
        width: 260px
        float: right

</style>
