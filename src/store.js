import Vue from 'vue'
import Vuex from 'vuex'

import moduleC from './modules/moduleC';
import moduleD from './modules/moduleD';
import moduleF from './modules/moduleF';

Vue.use(Vuex)




export default new Vuex.Store({
    state: {
        person : {
            name : "devil13th",
            age:1
        },
        name: 'Lucy',
    },
    //只有 mutation 能动 State 而且是同步修改
    mutations: { 
        growUp(state){
            console.log("growUp")
            state.person.age++;
        },
        minGroupUp(state){
            console.log("minGroupUp");
            state.person.age--;
        },
        born(state,name){
            console.log("born");
            state.person.name = name;
            state.person.age = 0;
        },
        setName(state, newName) {
            state.name = newName;
        },
    },
    
    actions: {
        modifyName({commit}, newName) {
            commit('setName', newName);
        },
        unGrowUp(context){
            console.log("unGrowUp")
            //actions中的方法如果要修改全局state中的内容必须通过context.commit调用mutations中的方法
            context.commit("minGroupUp");
        },
        changeName(context,name){
            console.log("changeName");
            context.commit("born",name);
        }
    },


    getters: {
        // Getter 接受 state 作为其第一个参数
        personString: state => {
            return "name:" + state.person.name + " age:" + state.person.age;
        }
    },
    
     


    modules: {
      moduleC,
      moduleD,
      moduleF,
    },

});