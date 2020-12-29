import Vue from 'vue'
import Router from 'vue-router'

import Header from '../components/layout/Header.vue'
import Home from '../components/home/Home.vue'
import NotFound from '../components/notFound/NotFound.vue'
import Connections from '../components/connections/Connections.vue'
import FindLove from '../components/findLover/FindLover.vue'
import Dating from '../components/dating/Dating.vue'
import Seat from '../components/seat/Seat.vue'

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
      components: {
        default: Connections,
        'comp-header': Header
      }
    },
    {
      path: '/find-lover',
      name: 'find-love',
      components: {
        default: FindLove,
        'comp-header': Header
      }
    },
    {
      path: '/dating',
      name: 'dating',
      components: {
        default: Dating,
        'comp-header': Header
      }
    },
    {
      path: '/seat',
      name: 'seat',
      components: {
        default: Seat,
        'comp-header': Header
      }
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
