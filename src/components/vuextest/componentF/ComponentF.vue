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
        <button @click="callMutations01">在methods中直接调用模块中mutations中的方法 方式1</button>
        <button @click="callMutations02">在methods中直接调用模块中mutations中的方法 方式2</button>
        <a-divider/>
        <a-spin :spinning="state.loading">
          <button @click="callAction01">在methods中直接调用模块中Actions中的方法 方式1</button>
          <button @click="callAction02">在methods中直接调用模块中Actions中的方法 方式2</button>
        </a-spin>
        <a-divider/>
        <a-spin :spinning="state.loading">
          <button @click="actionsCallActions">本模块中Actions中的方法调用Actions中的方法</button>
        </a-spin>
        <a-divider/>
        <a-spin :spinning="state.loading">
           其他模块(state.moduleC.text)的state:
        {{this.$store.state.moduleC.text}}<br/>
          <button @click="callOtherModuleActionsOrMutations">在本模块中调用其他模块的Actions或mutations的方法</button><br/>
          <button @click="callOtherModuleActionsOrMutations2">在methods中直接调用其他模块的Actions或mutations的方法</button>
        </a-spin>

<a-divider/>
<div style="text-align:left;padding:32px;">
总结：<br/>
1. vue模板中使用模块中的state<br/>
a. 先将模块的state通过computed方法赋值给vue模板内部对象
<pre>
...mapState({
  // name: state => state.moduleC.text
  name3: state => (state.moduleC.text + '和' + state.moduleD.text),
  // 将全局的moduleF 赋值 给 state, 然后可以用this.state.xxx来获取其中的值
  state: state => state.moduleF
})
</pre>

b. 模板中直接使用 &#123; &#123;state.xxx&#125; &#125; 就相当于 &#123; &#123;sthis.$store.state.moduleF.text&#125; &#125;<br/><br/>
c. methods中可以直接使用this.state.xxx来调用<br/><br/>

2. vue对象的methods中调用store模块中的actions或mutations方法<br/>

  this.$store.commit('moduleF/setData', {user: {userName: 'A2', age: 2}})<br/>
  this.$store.dispatch('moduleF/syncMethod', {userName: 'A3', age: 3})<br/><br/>

3. store模块中的actions调用mutations或actions中的方法<br/>
  ---------- 模块内部调用 ----------<br/>
  context.commit('setData', {loading: true})<br/>
  context.dispatch('syncMethod', parameter)<br/>
  ---------- 模块外部调用 ----------<br/>
  context.commit('moduleF/setData', {loading: true},{root: true})<br/>
  context.dispatch('moduleF/syncMethod', parameter,{root: true})<br/><br/>
4. 在methods中直接调用其他模块的actions或mutations<br/>
this.$store.commit('moduleC/setText2', 'M')<br/>
this.$store.dispatch('moduleC/setTextSync', 'N')<br/><br/>

5. 按理说,mutations中的方法不应该调用actions中的方法
</div>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      // 将name映射为store中的getters的detail
      name: 'moduleF/detail',
      name2: 'moduleF/detail'
    }),

    ...mapState({
      // name: state => state.moduleC.text
      name3: state => (state.moduleC.text + '和' + state.moduleD.text),
      // 将全局的moduleF 赋值 给 state, 然后可以用this.state.xxx来获取其中的值
      state: state => state.moduleF
    })

  },

  methods: {
    ...mapMutations({
      m1: 'moduleF/setText',
      setData: 'moduleF/setData'
    }),
    ...mapActions({
      m2: 'moduleF/callAction',
      syncMethod: 'moduleF/syncMethod',
      callInner: 'moduleF/callInner',
      callOtherModule: 'moduleF/callOtherModule'
    }),
    modifyNameAction () {
      this.m1()
      this.m2()
    },
    callMutations01 () {
      console.log(this.$store)
      this.setData({user: {userName: 'A1', age: 1}})
      // this.$store.dispatch("moduleF/syncMethod",{user:{userName:'A1',age:5}})
    },
    callMutations02 () {
      console.log(this.$store)
      this.$store.commit('moduleF/setData', {user: {userName: 'A2', age: 2}})
    },
    callAction01 () {
      this.$store.dispatch('moduleF/syncMethod', {userName: 'A3', age: 3})
    },
    callAction02 () {
      this.syncMethod({userName: 'A4', age: 4})
    },
    actionsCallActions () {
      this.callInner({userName: 'A5', age: 5})
    },
    callOtherModuleActionsOrMutations () {
      this.callOtherModule({userName: 'A6', age: 6})
    },
    callOtherModuleActionsOrMutations2 () {
      this.$store.commit('moduleC/setText2', 'M')
      this.$store.dispatch('moduleC/setTextSync', 'N')
    }

  }
}
</script>
