<template>
  <b-list-group-item
    :active="active"
    button
    square
    @click="setSelected"
    :key="index"
    class="btn"
    active-class="active"
  >
    <b-row align-v="center">
      <b-col class="title">{{ title }}</b-col>
      <b-col class="body">{{ body }}</b-col>
    </b-row>
  </b-list-group-item>
</template>

<style lang="scss" scoped>

.list-group-item {
  color: inherit;
  padding: 0.5em;
  background-color: rgb(68, 68, 68);
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  border: 0px;
}

.list-group-item.active {
  padding: 0.5em;
  background-color: #1cb843;
  color: #060e1d;
  border: 0px;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

.body {
  font-size: 0.8em;
  text-align: start;
}
</style>

<script>
export default {
  name: 'CheckboxInfo',
  props: {
    playbookPath: String,
    index: Number,
  },
  data() {
    return {
      active: false,
    };
  },
  computed: {
    title() {
      return this.$store.state.currentPlaybook[this.playbookPath][this.index][1];
    },
    body() {
      return this.$store.state.currentPlaybook[this.playbookPath][this.index][2];
    },
  },
  methods: {
    selected() {
      console.log('Re-rendering selected');
      console.log(this.$store.state.currentPlaybook[this.playbookPath][this.index][0]);
      return this.$store.state.currentPlaybook[this.playbookPath][this.index][0];
    },
    setSelected() {
      console.log('button clicked');
      if (this.active === true) {
        this.active = false;
      } else {
        this.active = true;
      }
      const payload = {
        value: true,
        target: `${this.playbookPath}.${this.index}.0`,
      };
      if (this.$store.state.currentPlaybook[this.playbookPath][this.index][0]) {
        payload.value = false;
      }
      this.$store.commit('updatePlaybookProperty', payload);
      this.selected();
    },
  },
};
</script>
