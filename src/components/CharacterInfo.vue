<template>
  <b-container class="container">
    <b-col>
      <b-row align-h="center" class="header">
        {{ playbook.className }}
      </b-row>
      <b-row align-v="center">
        <b-col class="body">
          <div class="text-center">
            <b-button v-b-popover.hover.top="exampleNamePopover" variant="dark">
              Name:
            </b-button>
          </div>
        </b-col>
        <b-col class="body"
          ><b-form-input v-model="name" type="text" lazy
        /></b-col>
      </b-row>
      <b-row align-v="center">
        <b-col class="body">Pronouns:</b-col>
        <b-col class="body">
          <b-form-input
            v-model="pronouns"
            type="text"
            placeholder="they/them, she/her, xe/xir, he/him, other!"
          />
        </b-col>
      </b-row>
      <b-row align-v="center">
        <b-col class="body">Look:</b-col>
        <b-col class="body"
          ><b-form-textarea
            v-model="look"
            :placeholder="exampleLooks"
            type="text"
            class="look-input"
            rows="6"
            style="white-space: pre"
            no-resize
            lazy
          />
        </b-col>
      </b-row>
      <b-row> <b-col class="body">Alignments</b-col></b-row>
      <b-row
        ><b-col class="body">
          <b-list-group>
            <checkbox-info
              class="checkbox-info"
              v-for="(alignment, index) in alignments"
              :playbookPath="'alignments'"
              :index="index"
              :key="alignments[index][2]"
            ></checkbox-info></b-list-group></b-col
      ></b-row>
      <b-row> <b-col class="body">Backgrounds</b-col></b-row>
      <b-row
        ><b-col class="body">
          <b-list-group>
            <checkbox-info
              class="checkbox-info"
              v-for="(background, index) in backgrounds"
              :playbookPath="'backgrounds'"
              :index="index"
              :key="backgrounds[index][2]"
            ></checkbox-info></b-list-group></b-col
      ></b-row>
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
  padding-top: 0.4em;
  padding-bottom: 0.4em;
}

input,
textarea {
  border: #081429;
  background-color: rgb(68, 68, 68);
  color: rgb(204, 200, 200);
  box-shadow: none;
}

input:focus,
textarea:focus {
  background-color: rgb(68, 68, 68);
  color: rgb(204, 200, 200);
}

.btn {
  font-size: 1em;
  background-color: rgb(68, 68, 68);
  color: inherit;
}

::-webkit-input-placeholder {
  font-size: 0.85em !important;
  color: rgb(204, 200, 200);
}
</style>

<script>
import CheckboxInfo from './CheckboxInfo.vue';

export default {
  name: 'CharacterInfo',
  components: { CheckboxInfo },
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
    exampleLooks() {
      return this.playbook.personalDetails.exampleLooks;
    },
    exampleNamePopover() {
      return {
        title: () => 'Example names',
        content: () => this.playbook.personalDetails.exampleNames,
      };
    },
    alignments() {
      return this.playbook.alignments;
    },
    backgrounds() {
      return this.playbook.backgrounds;
    },
  },
};
</script>
