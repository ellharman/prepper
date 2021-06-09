<template>
  <b-container class="container">
    <b-col>
      <b-row align-h="center" class="header">
        {{ playbook.className }}
      </b-row>
      <b-row align-v="center">
        <b-col class="body">
          <div class="text-center">
            <b-button v-b-popover.hover.top="exampleNamePopover">
              Name:
            </b-button>
          </div>
        </b-col>
        <b-col class="body"><b-form-input v-model="name" type="text" /></b-col>
      </b-row>
      <b-row align-v="center">
        <b-col class="body">Pronouns:</b-col>
        <b-col class="body"
          ><b-form-input
            v-model="pronouns"
            type="text"
            placeholder="they/them, she/her, xe/xir, he/him, other!"
          />
        </b-col>
      </b-row>
      <b-row align-v="center">
        <b-col class="body">Look:</b-col>
        <b-col class="body"
          ><b-form-input
            v-model="look"
            type="text"
          />
        </b-col>
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

.btn {
  font-size: 1em;
}

::-webkit-input-placeholder {
  font-size: 0.8em !important;
}
</style>

<script>
export default {
  name: 'CharacterInfo',
  methods: {},
  computed: {
    playbook() {
      return this.$store.state.currentPlaybook;
    },
    name: {
      get() {
        return this.playbook.personalDetails.name;
      },
      set(value) {
        const payload = {
          value,
          target: 'personalDetails.name',
        };
        this.$store.commit('updatePlaybookProperty', payload);
      },
    },
    pronouns: {
      get() {
        return this.playbook.personalDetails.pronouns;
      },
      set(value) {
        const payload = {
          value,
          target: 'personalDetails.pronouns',
        };
        this.$store.commit('updatePlaybookProperty', payload);
      },
    },
    look: {
      get() {
        return this.playbook.personalDetails.look;
      },
      set(value) {
        const payload = {
          value,
          target: 'personalDetails.look',
        };
        this.$store.commit('updatePlaybookProperty', payload);
      },
    },
    exampleNamePopover() {
      return {
        title: () => 'Example names',
        content: () => this.playbook.personalDetails.exampleNames,
      };
    },
  },
};
</script>
