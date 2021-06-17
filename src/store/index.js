import Vue from 'vue';
import Vuex from 'vuex';
import dotProp from 'dot-prop';
import playbookData from '../assets/playbooks/index';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    currentPlaybook: playbookData.defaultClass,
  },
  mutations: {
    updateCurrentPlaybook(state, input) {
      state.currentPlaybook = input;
      // console.log(`Updated current playbook to ${JSON.stringify(input)}`);
    },
    updatePlaybookProperty(state, payload) {
      if (dotProp.has(state.currentPlaybook, payload.target)) {
        const updatedPlaybook = state.currentPlaybook;
        (dotProp.set(updatedPlaybook, payload.target, payload.value));
        state.currentPlaybook = updatedPlaybook;
        console.log(`Updated playbook data at ${payload.target} to ${dotProp.get(state.currentPlaybook, payload.target)}`);
        console.log(state.currentPlaybook);
      } else {
        throw Error('The currently loaded playbook does not have that property');
      }
    },
    // updatedCheckboxSelected(state, payload) {

    // }
  },
  actions: {},
});
