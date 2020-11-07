import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './Getters'
import * as mutations from './Mutations'
import * as actions from './Actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {},
  getters,
  mutations,
  actions,
  modules: {}
})
