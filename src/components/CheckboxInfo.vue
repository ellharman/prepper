<template>
  <div>
    <b-list-group-item
      v-if="!hasCustom"
      :active="active"
      button
      @click="setSelected"
      :key="index"
      class="btn"
      :class="{ noBodyText: noBodyText }"
      active-class="active"
    >
      <b-row align-v="center">
        <b-col class="title">{{ title }}</b-col>
        <b-col v-if="body" class="body">{{ body }}</b-col>
      </b-row>
    </b-list-group-item>
    <b-col v-else>
      <b-row>
        <b-col id="input-col">
          <b-form-input
            type="text"
            v-model="customInput"
            placeholder="Custom..."
            @blur="setSelected"
          />
        </b-col>
      </b-row>
    </b-col>
    <!-- <b-row v-if="hasCustom">{{ hasCustom }}</b-row> -->
  </div>
</template>

<style lang="scss" scoped>
.btn {
  color: inherit;
  // padding: 0.5em;
  background-color: rgb(68, 68, 68);
  // margin-top: 0.5em;
  // margin-bottom: 0.5em;
  border: 0px;
  border-radius: 0.25rem;
}

.list-group-item.active {
  // padding: 0.5em;
  background-color: #1cb843;
  color: #060e1d;
  border: 0px;
  // margin-top: 0.5em;
  // margin-bottom: 0.5em;
}

.body {
  font-size: 0.8em;
  text-align: start;
}

.noBodyText {
  margin: 0.1em;
  padding: 0;
}

.noBodyText.active {
  margin: 0.1em;
  padding: 0;
}

#input-col {
  padding: 0px;
}

input {
  border: #081429;
  background-color: rgb(68, 68, 68);
  color: inherit;
  box-shadow: none;
  font-size: 0.8em;
  width: 100%;
  text-align: center;
  height: 2em;
  padding: 0;
}

input:focus {
  background-color: rgb(68, 68, 68);
  color: rgb(204, 200, 200);
}

::-webkit-input-placeholder {
  color: rgb(204, 200, 200);
}

</style>

<script>
export default {
  name: 'CheckboxInfo',
  props: {
    playbookPath: String,
    index: Number,
    noBodyText: {
      default: false,
      type: Boolean,
    },
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
      if (
        this.$store.state.currentPlaybook[this.playbookPath][this.index][2]
        && this.$store.state.currentPlaybook[this.playbookPath][this.index][2] !== 'custom'
      ) {
        return this.$store.state.currentPlaybook[this.playbookPath][this.index][2];
      }
      return false;
    },
    hasCustom() {
      console.log(this.$store.state.currentPlaybook[this.playbookPath][this.index][2]);
      if (this.$store.state.currentPlaybook[this.playbookPath][this.index][2] === 'custom') {
        return true;
      }
      return false;
    },
    customInput: {
      get() {
        return this.$store.state.currentPlaybook[this.playbookPath][this.index][1];
      },
      set(value) {
        console.log(`customInput is setting ${value}`);
        const payload = {
          value,
          target: `${this.playbookPath}.${this.index}.1`,
        };
        this.$store.commit('updatePlaybookProperty', payload);
        this.setSelected();
      },
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
      if (!this.hasCustom) {
        if (this.active === true) {
          this.active = false;
        } else {
          this.active = true;
        }
      }
      const payload = {
        value: this.active,
        target: `${this.playbookPath}.${this.index}.0`,
      };
      if (this.hasCustom) {
        payload.value = !payload.value;
      }
      this.$store.commit('updatePlaybookProperty', payload);
      this.selected();
    },
  },
};
</script>
