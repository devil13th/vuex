<template>
    <div id="app">
        <h1>针对ComponentD中module的问题分析</h1>
        {{name}}<br/>
        {{name2}}<br/>
        {{name3}}<br/>
        <button @click="modifyNameAction">修改名字</button>
        <a-divider/>
        调动其他模块的state:
        {{this.$store.state.moduleC.text}}

        <a-divider/>
        调用本模块的state：<br/> userName:{{this.state.user.userName}}  age:{{this.state.user.age}}
        <a-divider/>
        <button @click="callMutations01">调用模块中mutations中的方法 方式1</button>
        <button @click="callMutations02">调用模块中mutations中的方法 方式2</button>
        <a-divider/>
        <a-spin :spinning="state.loading">
          <button @click="callAction01">调用模块中Actions中的方法 方式1</button>
          <button @click="callAction02">调用模块中Actions中的方法 方式2</button>
        </a-spin>
        <a-divider/>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      // 将name映射为store中的getters的detail
      name: 'moduleF/detail',
      name2: 'detail'
    }),

    ...mapState({
      // name: state => state.moduleC.text
      name3: state => (state.moduleC.text + '和' + state.moduleD.text),
      //将全局的moduleF 赋值 给 state, 然后可以用this.state.xxx来获取其中的值
      state: state => state.moduleF
    })

  },

  methods: {
    ...mapMutations({
      m1: 'moduleF/setText',
      setData : 'moduleF/setData'
    }),
    ...mapActions({
      m2: 'moduleF/callAction',
      syncMethod:'moduleF/syncMethod'
    }),
    modifyNameAction () {
      this.m1()
      this.m2()
    },
    callMutations01(){
      console.log(this.$store)
      this.setData({user:{userName:'A1',age:1}})
      //this.$store.dispatch("moduleF/syncMethod",{user:{userName:'A1',age:5}})
    },
    callMutations02(){
      console.log(this.$store)
      this.$store.commit("moduleF/setData",{user:{userName:'A2',age:2}})
    },

    callAction01(){
      this.$store.dispatch("moduleF/syncMethod",{userName:'A3',age:3})
    },
    callAction02(){
      this.syncMethod({userName:'A4',age:4});
      
    }
  }
}
</script>
