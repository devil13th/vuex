<template>
    <div id="app">
        <h1>针对ComponentD中module的问题分析</h1>
        {{name}}<br/>
        {{name2}}<br/>
        {{name3}}<br/>
        <button @click="modifyNameAction">修改名字</button>
        {{this.$store.state.moduleC.text}}
    </div>
</template>

<script>
import {mapState, mapActions,mapMutations,mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            //将name映射为store中的getters的detail
            name: 'moduleF/detail',
            name2 : 'detail'
        }),

        ...mapState({
            //name: state => state.moduleC.text
            name3: state => (state.moduleC.text + '和' + state.moduleD.text)
        })

        
    },

    methods: {
        ...mapMutations({
            m1:'moduleF/setText'
        }),
        ...mapActions({
            m2:'moduleF/callAction'
        }),
        modifyNameAction() {
            this.m1();
            this.m2();
        }
    },
}
</script>