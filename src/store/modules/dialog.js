const state = {
  isDialog: false
};

const getters = {
  isDialog: state => state.isDialog
};

const mutations = {
  TOGGLE_DIALOG: (state, payload) => {
    state.isDialog = !state.isDialog
  }
};

const actions = {
  toggleDialog: ({ commit, rootState }, payload) => {
    commit("TOGGLE_DIALOG", payload);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
