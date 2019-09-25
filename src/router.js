import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ComponentA from './components/vuextest/componentA/ComponentA'
import ComponentB from './components/vuextest/componentB/ComponentB'
import ComponentC from './components/vuextest/componentC/ComponentC'
import ComponentD from './components/vuextest/componentD/ComponentD'
import ComponentE from './components/vuextest/componentE/ComponentE'
import ComponentF from './components/vuextest/componentF/ComponentF'

Vue.use(Router)

export default new Router({
  mode: 'history',//history
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/vuextest/componentA/ComponentA',
      name: 'ComponentA',
      component: ComponentA
    },
    {
      path: '/vuextest/componentB/ComponentB',
      name: 'ComponentB',
      component: ComponentB
    },
    {
      path: '/vuextest/componentC/ComponentC',
      name: 'ComponentC',
      component: ComponentC
    },
    {
      path: '/vuextest/componentD/ComponentD',
      name: 'ComponentD',
      component: ComponentD
    },
    {
      path: '/vuextest/componentE/ComponentE',
      name: 'ComponentE',
      component: ComponentE
    },
    {
      path: '/vuextest/componentF/ComponentF',
      name: 'ComponentF',
      component: ComponentF
    },
  ]
})
