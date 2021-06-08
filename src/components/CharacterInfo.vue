<template>
  <b-container class="container">
    <b-col>
      <b-row align-h="center" class="header">
        {{ playbook.className }}
      </b-row>
      <b-row align-v="center">
        <b-col class="body">Name:</b-col>
        <b-col class="body"><b-form-input v-model="name" type="text" /></b-col>
      </b-row>
    </b-col>
  </b-container>
</template>

<style lang="scss" scoped>
.header {
  padding: 0.2em;
  font-size: 2em;
}

.body {
  font-size: 1.2em;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}
</style>

<script>

export default {
  name: 'CharacterInfo',
  computed: {
    playbook() {
      return this.$store.state.currentPlaybook;
    },
    name: {
      get() {
        return this.playbook.name;
      },
      set(value) {
        const payload = {
          value,
          target: 'personalDetails.name',
        };
        this.$store.commit('updatePlaybookProperty', payload);
      },
    },
  },
};
</script>
