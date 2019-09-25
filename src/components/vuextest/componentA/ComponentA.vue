<template>
  <div>
    <h2>vuex的基本使用</h2>
    {{v}} | {{getV}}
    <input type="button" value="ClickMe" @click="someMethod"/>
    <hr/>
    通过store.getters访问全局state<br/>
    [{{this.$store.getters.personString}}]<br/><br/>

    直接访问全局state<br/>
    {{this.$store.state.person.name}} | {{this.$store.state.person.age}}<br/><br/>

    通过组件自身computed中的方法简写前缀<br/>
    {{person.name}} | {{person.age}}<br/>

    <input type="button" value="increase" @click="increase"/>
    <input type="button" value="decrease" @click="decrease"/>
    <input type="button" value="change name" @click="changeName"/>
  </div>
</template>
<script>
export default{
  props: {
    
  },
  data(){
    return {
      v:0
    }
  },
  methods: {
    someMethod(){
      this.v++;
    },
    increase(){
      //调用store的mutations中的growUp方法
      this.$store.commit('growUp');
    },
    decrease(){ 
      //调用store的actions中的unGrowUp方法
      this.$store.dispatch("unGrowUp");
    },
    changeName(){
       this.$store.dispatch("changeName","thd");
    }
  },
  computed :{
    //可以直接通过{{person.name}}访问this.$store.state.person.name 
    //利用computed中的方法可以简化前缀
    person(){  
      return this.$store.state.person
    },
    getV(){
      return " value :" + this.v;
    }
  }
}
</script>
<style scoped>

</style>