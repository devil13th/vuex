export default {
  namespaced: true,
  state: {
      text: 'moduleF'
  },
  getters: {
      // 注意:rootState必须是第三个参数
      detail(state, getters, rootState,rootGetters) {
          return state.text + '-' + rootState.name + "  xxxxx";
      }
  },
  actions: {
    callAction({state, rootState}) {
        alert("moduleF:" + state.text + '-' + rootState.name);
    }
  },
  mutations: {
    setText(state) {
      state.text = 'F'
    }
  },
}