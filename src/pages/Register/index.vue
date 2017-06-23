<template lang="jade">
#Register
  #login-box
    .left
      h1 注册一室
      input(type='text', name='username', placeholder='用户名')
      input(type='text', name='email', placeholder='电子邮件')
      input(type='password', name='password', placeholder='密码')
      input(type='password', name='password2', placeholder='请确认密码')
      input(type='submit', name='signup_submit', value='注册一室用户')
    .right
      span.loginwith
        | 一室
        br
        | 首个家具租赁平台


</template>

<style lang="sass" scoped> 
@import './index.sass';
</style>