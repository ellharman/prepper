<template>
  <b-container class="container">
    <b-col>
      <b-row align-h="center" class="header">
        {{ playbook.className }}
      </b-row>
      <hr class="rule" id="initial-rule" />
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
            placeholder="they/them, she/her, xe/xir, he/him"
          />
        </b-col>
      </b-row>
      <b-row align-v="center">
        <b-col class="body">Look:</b-col>
        <b-col class="body"
          ><b-form-textarea
          id="look-textarea"
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
      <hr class="rule" />
      <div class="subcontainer">
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
      </div>
      <hr class="rule" />
      <div class="subcontainer">
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
      </div>
      <hr class="rule" />
    </b-col>
  </b-container>
</template>

<style lang="scss" scoped>
.rule {
  border-color: #1cb84393;
}

#initial-rule {
  margin-top: 0px;
}

/* width */
::-webkit-scrollbar {
  width: 0.5em;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #1cb843;
}

.header {
  padding: 0.2em;
  font-size: 2.5em;
}

.subcontainer {
  margin-top: 1em;
  margin-bottom: 1em;
  padding-left: 2em;
  padding-right: 2em;
}

.body {
  font-size: 1.2em;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
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

#look-textarea::-webkit-input-placeholder {
  font-size: 0.85em !important;
  color: rgb(204, 200, 200);
  white-space: pre-line;
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
