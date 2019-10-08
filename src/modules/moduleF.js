import {message} from 'ant-design-vue'
export default {
  namespaced: true,
  state: {
    text: 'moduleF',
    user: {
      userName: 'devil13th',
      age: 5,
      birthday: '2018-01-01'
    },
    loading: false
  },
  getters: {
    // 注意:rootState必须是第三个参数
    detail (state, getters, rootState, rootGetters) {
      return state.text + '-' + rootState.name + '  xxxxx'
    }
  },
  // 用于处理异步或逻辑运算,如果要修改状态则要调用mutations中的方法
  actions: {
    callAction ({state, rootState}) {
      alert('moduleF:' + state.text + '-' + rootState.name)
    },
    syncMethod (context, parameter) {
      // 调用mutation中的方法
      context.commit('setData', {loading: true})

      setTimeout(function () {
        context.commit('setData', {user: parameter, loading: false})
        message.info('success')
      }, 1000)
    }
  },
  // 用于修改state
  mutations: {
    setData (state, payload) {
      Object.keys(payload).forEach(element => {
        state[element] = payload[element]
      })
    },
    setText (state) {
      state.text = 'F'
    }
  }
}
