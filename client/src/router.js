import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Affiliates from './views/Affiliates.vue'
import Dashboard from './views/admin/Dashboard.vue'
import Register from './views/Register.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/affiliates',
        name: 'affiliates',
        component: Affiliates
    },
    {
      path: '/about',
      name: 'about',
      component: About
  },
  {
      path: '/admin',
      name: 'admin',
      component: Dashboard
  },
  {
      path: '/register',
      name: 'register',
      component: Register
  }
  ]
})
