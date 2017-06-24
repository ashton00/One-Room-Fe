<template lang="jade">
  .collect-shop
    p 收藏的店铺
    
</template>

<script>
export default {
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

</style>
