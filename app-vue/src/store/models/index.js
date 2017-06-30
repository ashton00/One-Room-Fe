import Vue from 'vue'

/* 统一处理接口 Start */

function GET (url) {
  return Vue.http.get(url).then(res => {
    return Promise.resolve(res.body)
  }, err => {
    return Promise.reject(err.body.msg)
  })
}

function POST (url, form) {
  return Vue.http.post(url, form).then(res => {
    return Promise.resolve(res.body)
  }, err => {
    return Promise.reject(err.body.msg)
  })
}

/* 统一处理接口 End */

const User = {
  login (form) {
    return POST(`/api/users/login`, form)
  },
  register (form) {
    return POST(`/api/users`, form)
  },
  resetPwd (form) {
    return POST(`/api/users/forgetpsw`, form)
  }
}

const Merchants = {
  login (form) {
    return POST(`/api/merchants/login`, form)
  },
  register (form) {
    return POST(`/api/merchants`, form)
  },
  resetPwd (form) {
    return POST(`/api/merchants/forgetpsw`, form)
  }
}

const Suggestion = {
  fetchByPhone (phone) {
    return GET(`/api/suggestions?phone=${phone}`)
  },
  fetchById (id) {
    return GET(`/api/suggestions/${id}`)
  },
  create (form) {
    return POST(`/api/suggestions`, form)
  }
}

export {
  User,
  Merchants,
  Suggestion
}
