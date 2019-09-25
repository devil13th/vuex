<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> <br/>
      <router-link to="/vuextest/componentA/ComponentA">ComponentA</router-link> |
      <router-link to="/vuextest/componentB/ComponentB">ComponentB</router-link> |
      <router-link to="/vuextest/componentC/ComponentC">ComponentC</router-link> |
      <router-link to="/vuextest/componentD/ComponentD">ComponentD</router-link> |
      <router-link to="/vuextest/componentE/ComponentE">ComponentE</router-link> |
      <router-link to="/vuextest/componentF/ComponentF">ComponentF</router-link> |

      
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
