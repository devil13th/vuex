import {message} from 'ant-design-vue'
export default {
  // 如果使用模块化store必须加入namespaced:true
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

  // 异步操作,最终要调用mutation来改变状态
  // 用于处理异步或逻辑运算,如果要修改状态则要调用mutations中的方法
  // 最终修改state要调用mutations中的方法!! 靠自觉!
  actions: {
    callAction ({state, rootState}) {
      alert('moduleF:' + state.text + '-' + rootState.name)
    },
    syncMethod (context, parameter) {
      // actions中的方法调用mutation中的方法 用commit
      context.commit('setData', {loading: true})

      setTimeout(function () {
        context.commit('setData', {user: parameter, loading: false})
        message.info('success')
      }, 1000)
    },
    // 测试调用模块的actions中的方法
    callInner (context, parameter) {
      console.log(context)
      // action中的方法调用mutation中的方法
      context.commit('setData', { auditInfoDialogVisible: false })

      // actions中的方法调用actions中的方法
      context.dispatch('syncMethod', parameter)
    },
    callOtherModule (context, parameter) {
      // actions中的方法调用其他模块的mutations中的方法
      // context.commit('moduleF/setData', { auditInfoDialogVisible: false }, {root: true})
      // actions中的方法调用其他模块的actions中的方法 则要加空间前缀
      // context.dispatch('moduleF/syncMethod', parameter, {root: true})

      // actions中的方法调用其他模块的mutations中的方法
      context.commit('moduleC/setText2', 'X', {root: true})
      // actions中的方法调用其他模块的actions中的方法 则要加空间前缀
      context.dispatch('moduleC/setTextSync', 'Z', {root: true})
    }
  },

  // 用于直接修改state
  // mutations中的方法不应该调用actions中的方法
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
