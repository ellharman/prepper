<template>
  <div>
    <b-form-select
      v-model="selectedPlaybook"
      :options="availablePlaybooks"
      size="auto"
    />
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
// import * as R from 'ramda';
import playbookData from '../assets/playbooks/index';

// console.log(playbookData);

export default {
  name: 'PlaybookSelector',
  computed: {
    availablePlaybooks() {
      // will need to add filtering by playbook here
      function getPlaybookIDandName() {
        const playbookIDsandName = [];
        Object.keys(playbookData).forEach((element) => {
          const formSelectObj = {
            value: playbookData[element].classID,
            text: playbookData[element].className,
          };
          playbookIDsandName.push(formSelectObj);
        });
        return playbookIDsandName;
      }
      return getPlaybookIDandName(playbookData);
    },
    selectedPlaybook: {
      get() {
        return this.$store.state.selectedPlaybook;
      },
      set(value) {
        this.$store.commit('updateCurrentPlaybook', playbookData[value]);
      },
    },
  },
};
</script>
