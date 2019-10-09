<template>
    <div id="app">
        <h1>{{name}}</h1>
        <button @click="modifyNameAction">修改名字</button>
    </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'
console.log(mapState, mapActions, mapMutations)
export default {
  computed: {
    ...mapState(['name'])
  },

  methods: {
    ...mapActions(['modifyName']),

    modifyNameAction () {
      // this.modifyName 是通过...mapActions(['modifyName'])映射进来的
      this.modifyName('devil13th.')
    }
  }
}
</script>
