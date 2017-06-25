<template lang="jade">
  .letter
    .title 私信
    .container
      .list
        div.p-10
          img.avatar.fl.mr-10(src='./../../../assets/Mall/detail/头像.png')
          span.fl.bold Yanny
          span.fr 15:58
          br
          p.pt-20 亲，您的问题已记录
        div.p-10
          img.avatar.fl.mr-10(src='./../../../assets/Mall/detail/头像.png')
          span.fl.bold wang 
          span.fr 15:58
          br
          p.pt-20 亲，您好
      .right
        .name.p-10.bold.fs-20 Yanny
        .content
          .left-msg.p-10
            img.fl.mr-10.avatar(src='./../../../assets/Mall/detail/头像.png')
            .text.fl.mt-20 我这个床具有点损坏
          .right-msg.p-10
            img.fr.ml-10.avatar(src='./../../../assets/Mall/detail/头像.png')
            .text.fr.mt-20 亲，您的问题已记录
        .tool
        .edit
</template>

<script>

export default {
  data () {
    return {
     
    }
  },
  components: {
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style lang="sass" scoped>
  .letter
    margin-right: 80px
    .title
      font-weight: bold
      font-size: 20px
      margin-bottom: 20px
    .container
      width: 800px
      height: 550px
      border: 1px solid #eee
      .list
        float: left
        width: 30%
        height: 100%
      .right
        display: inline-block
        width: 70%
        border: 1px solid #eee
        height: 100%
        .name
          border-bottom: 1px solid #eee
        .content
          height: 350px
          &>div
            clear: both
            .text
              max-width: 300px
        .tool
          border: 1px solid #eee
</style>
