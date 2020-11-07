import Vue from 'vue'
import Router from 'vue-router'

import Headers from '../components/layout/Header.vue'
import Home from '../components/home/Home.vue'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: {
        default: Home,
        'header': Headers
      }
    }
  ]
})
