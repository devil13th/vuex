<template>
  <div>
    <h2>mapState,mapGetters,mapMutations,mapActions的使用</h2>
    {{v}} | {{getV}}
    <input type="button" value="ClickMe" @click="someMethod"/>
    <hr/>
    通过mapGetter 访问store中的getter - personString<br/>
    [{{personString}}]<br/><br/>

    直接访问全局state<br/>
    {{this.$store.state.person.name}} | {{this.$store.state.person.age}}<br/><br/>

    通过组件自身computed中的方法简写前缀<br/>
    {{person.name}} | {{person.age}}<br/>

    <input type="button" value="increase" @click="increase"/>
    <input type="button" value="decrease" @click="decrease"/>
    <input type="button" value="change name" @click="changeName('张三')"/>
  </div>
</template>
<script>
import { mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default{
  props: {
    
  },
  data(){
    return {
      v:0
    }
  },

  computed :{
    // 本地的computed localComputed
    getV () { 
      return "本地 v:" + this.v;
    },



    // ========================= mapState 的使用 =========================
    //映射全局state中的属性
    ...mapState({
      // 映射 this.person 为 store.state.person
      person: state => state.person
    }),
    //下面的方法被...mapState({})所代替
    // person(){  
    //   return this.$store.state.person
    // },



    // ========================= mapGetters 的使用 =========================
    // 映射 this.personString 为 store.getters.personString
    ...mapGetters({
      personString: 'personString'
    }),
    //下面的方法被...mapGetters({})所代替
    // personString(){
    //   return this.$store.getters.personString
    // },
     
  },


  methods: {
    someMethod(){
      this.v++;
    },

    // ========================= mapMutations 的使用 =========================
    ...mapMutations([
      // 将 `this.increment()` 映射为 
      // `this.$store.commit('increment')`
      'increment', 
      // `mapMutations` 也支持载荷：
      // 将 `this.incrementBy(amount)` 映射为 
      // `this.$store.commit('incrementBy', amount)`
      'incrementBy' 
    ]),

    
    ...mapMutations({
      // 将 `this.increase()` 映射为 
      // `this.$store.commit('growUp')`
      increase: 'growUp' ,
    }),
    // increase(){
    //   //调用store的mutations中的growUp方法
    //   this.$store.commit('growUp');
    // },



    // ========================= mapActions 的使用 =========================
    ...mapActions({
      // 将 `this.decrease()` 映射为 
      // `this.$store.dispatch('growUp')`
      decrease : 'unGrowUp',

      // 将 `this.changeName(x)` 映射为 
      // `this.$store.dispatch('changeName',x)`
      changeName : 'changeName'
    }),
    //以下方法由...mapActoins({})所代替
    // decrease(){
    //   //调用store的actions中的unGrowUp方法
    //   this.$store.dispatch("unGrowUp");
    // },
    // changeName(){
    //    this.$store.dispatch("changeName","thd");
    // },
  },
  
}
</script>
<style scoped>

</style>