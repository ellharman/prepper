import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPlaybook: '',
  },
  mutations: {
    updateCurrentPlaybook(state, input) {
      state.currentPlaybook = input;
      // console.log(`Updated current playbook to ${JSON.stringify(input)}`);
    },
  },
  actions: {
  },
  modules: {
  },
});
