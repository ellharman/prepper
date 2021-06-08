import Vue from 'vue';
import Vuex from 'vuex';
import dotProp from 'dot-prop';

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
    updatePlaybookProperty(state, payload) {
      dotProp.set(state.currentPlaybook, payload.target, payload.value);
      console.log(`Updated playbook data at ${payload.target} to ${dotProp.get(state.currentPlaybook, payload.target)}`);
      console.log(state.currentPlaybook);
    },
  },
  actions: {},
  modules: {},
});
