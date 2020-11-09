import Vue from 'vue'
import Router from 'vue-router'

import Header from '../components/layout/Header.vue'
import Home from '../components/home/Home.vue'
import NotFound from '../components/notFound/NotFound.vue'
import Connections from '../components/connections/Connections.vue'
import FindLove from '../components/findLover/FindLover.vue'
import Dating from '../components/dating/Dating.vue'

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
      path: '/find-lover',
      name: 'find-love',
      component: FindLove
    },
    {
      path: '/dating',
      name: 'dating',
      component: Dating
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
