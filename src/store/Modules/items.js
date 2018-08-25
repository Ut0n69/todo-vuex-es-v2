const state = {
  data: {
    list: ['do something', 'buy something', 'eat something']
  }
};

const actions = {
  addItem(state, payload) {
    state.commit('addItem', payload);
  }
};

const mutations = {
  addItem(state, payload) {
    state.data.list.push(payload);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
