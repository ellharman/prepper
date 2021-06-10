import Vue from 'vue';
import Vuex from 'vuex';
import dotProp from 'dot-prop';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    currentPlaybook: null,
  },
  mutations: {
    updateCurrentPlaybook(state, input) {
      state.currentPlaybook = input;
      // console.log(`Updated current playbook to ${JSON.stringify(input)}`);
    },
    updatePlaybookProperty(state, payload) {
      console.log(payload.target);
      if (dotProp.has(state.currentPlaybook, payload.target)) {
        const updatedPlaybook = state.currentPlaybook;
        (dotProp.set(updatedPlaybook, payload.target, payload.value));
        state.currentPlaybook = updatedPlaybook;
        console.log(`Updated playbook data at ${payload.target} to ${dotProp.get(state.currentPlaybook, payload.target)}`);
        console.log(state.currentPlaybook);
      }
    },
    // updatedCheckboxSelected(state, payload) {

    // }
  },
  actions: {},
});
