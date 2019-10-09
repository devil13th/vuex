export default {
  namespaced: true,
  state: {
    text: 'moduleF'
  },
  getters: {
    // 注意:rootState必须是第三个参数
    detail (state, getters, rootState, rootGetters) {
      return state.text + '-' + rootState.name + '  xxxxx'
    }
  },
  // 异步操作,最终要调用mutation来改变状态
  actions: {
    callAction ({state, rootState}) {
      alert('moduleF:' + state.text + '-' + rootState.name)
    }
  },
  // 最终修改state
  mutations: {
    setText (state) {
      state.text = 'F'
    }
  }
}
