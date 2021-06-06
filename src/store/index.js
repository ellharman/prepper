import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedPlaybook: '',
  },
  mutations: {
    updateSelectedPlaybook(state, input) {
      state.selectedPlaybook = input;
      console.log(`Updated current playbook to ${state.selectedPlaybook}`);
    },
  },
  actions: {
  },
  modules: {
  },
});
