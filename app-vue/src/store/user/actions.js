import { Utils } from '../../common/utils'
let utils = new Utils()

export const actions = {

  register ({commit, state}) {
    utils.get('/users').then(res => {
      console.log(res);
    })
  },
}