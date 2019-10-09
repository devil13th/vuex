export default {
  namespaced: true,
  state: {
    text: 'moduleC'
  },
  getters: {
    // 注意:rootState必须是第三个参数
    detail (state, getters, rootState, rootGetters) {
      return state.text + '-' + rootState.name
    }
  },
  actions: {
    callAction ({state, rootState}) {
      alert(state.text + '-' + rootState.name)
    },
    setTextSync ({commit, state, rootState}, parameter) {
      setTimeout(function () {
        commit('setText2', parameter)
      }, 1000)
    }
  },
  mutations: {
    setText (state) {
      state.text = 'A'
    },
    setText2 (state, v) {
      state.text = v
    }
  }
}
