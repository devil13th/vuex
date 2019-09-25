export default {
  
  state: {
      text: 'moduleC'
  },
  getters: {
      // 注意:rootState必须是第三个参数
      detail(state, getters, rootState,rootGetters) {
          return state.text + '-' + rootState.name;
      }
  },
  actions: {
    callAction({state, rootState}) {
        alert(state.text + '-' + rootState.name);
    }
  },
  mutations: {
    setText(state) {
      state.text = 'A'
    }
  },
}