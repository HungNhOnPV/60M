import Vue from 'vue'
import Router from 'vue-router'

import Header from '../components/layout/Header.vue'
import Home from '../components/home/Home.vue'
import NotFound from '../components/notFound/NotFound.vue'
import Connections from '../components/connections/Connections.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        'comp-header': Header
      }
    },
    {
      path: '/connections',
      name: 'connections',
      component: Connections
    },
    {
      path: '/notFound',
      name: 'notFound',
      component: NotFound
    },
    {
      path: '*',
      redirect: 'notFound'
    }
  ]
})
