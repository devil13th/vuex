<template>
    <div id="app">
        <h1>module使用问题</h1>
        {{name}}
        <button @click="modifyNameAction">修改名字</button>
        {{this.$store.state.moduleC.text}}
    </div>
</template>

<script>
import {mapState, mapActions,mapMutations} from 'vuex';

export default {
    computed: {
        ...mapState({
            //name: state => state.moduleC.text
            name: state => (state.moduleC.text + '和' + state.moduleD.text)
        })
    },

    methods: {
        
        ...mapMutations(['setText']),

        modifyNameAction() { 
            //this.modifyName 是通过...mapActions(['modifyName'])映射进来的
            //本意是想修改自身模块的text值,结果却因为使用了mudules将其他模块的text也一起修改了
            this.setText('devil13th.');
        }
    },
}
</script>