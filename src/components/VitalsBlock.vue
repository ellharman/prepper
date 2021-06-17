<template>
  <b-container>
    <b-col>
      <b-row class="vital-row" align-v="center">
        <b-col class="vital-name">Armor:</b-col>
        <b-col class="vital-val" sm="2"
          ><b-form-input
            v-model="armor"
            type="number"
            placeholder="0-99"
            size="lg"
            :formatter="formatter99"
            lazy-formatter
          ></b-form-input
        ></b-col>
        <b-col class="vital-name">Damage:</b-col>
        <b-col class="vital-val" id="damage" sm="2">
          <b-row align-v="center">
            <b-col id="damage-input">
              <b-form-input
                v-model="damage"
                type="text"
                size="lg"
                placeholder="Dx"
                :formatter="formatterDamage"
                lazy-formatter
              ></b-form-input>
            </b-col> </b-row
        ></b-col>
      </b-row>
      <b-row class="vital-row" align-v="center">
        <b-col class="vital-name" sm="6">Hit Points:</b-col>
        <b-col id="hp-input" sm="1">
          <b-form-input
            v-model="hitPointsCurrent"
            type="number"
            size="lg"
            :formatter="formatter1000"
            lazy-formatter
          ></b-form-input
        ></b-col>
        <b-col class="slash" sm="1">/</b-col>
        <b-col id="hp-input" sm="1">
          <b-form-input
            v-model="hitPointsMax"
            type="number"
            size="lg"
            :formatter="formatter1000"
            lazy-formatter
          ></b-form-input
        ></b-col>
      </b-row>
      <b-row align-v="center"><b-col>({{ hitPointsBase }} + {{ hitPointsMod }})</b-col></b-row>
    </b-col>
  </b-container>
</template>

<style lang="scss" scoped>
.vital-name {
  // padding-right: 0em;
  font-size: 1.2em;
  padding: 0.5em;
}

.vital-row {
  padding: 1em;
}

.slash {
  font-size: 2em;
  padding: 0;
}

.vital-val {
  // background-color: green;
  margin: 0px;
  padding-left: 0.2em;
  padding-right: 0.2em;
  font-size: 2.5em;
}

#hp-input {
  padding: 0;
}

input {
  text-align: center;
  padding: 0px;
  border: #081429;
  background-color: rgb(68, 68, 68);
  color: rgb(204, 200, 200);
  box-shadow: none;
}

input:focus {
  background-color: rgb(68, 68, 68);
  color: rgb(204, 200, 200);
}

#damage-input {
  padding-right: 0em;
  padding-left: 0em;
}

#damage {
  // padding-left: 1em;
  padding-right: 1em;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
</style>

<script>
// import { mapState } from 'vuex';

export default {
  name: 'VitalsBlock',
  computed: {
    playbook() {
      console.log('Fetched playbook');
      return this.$store.state.currentPlaybook;
    },
    armor: {
      get() {
        return this.playbook.stats.vitals.armor;
      },
      set(value) {
        const target = 'stats.vitals.armor';
        this.commitState(parseInt(value, 10), target);
      },
    },
    damage: {
      get() {
        return this.playbook.stats.vitals.damage;
      },
      set(value) {
        const target = 'stats.vitals.damage';
        this.commitState(value, target);
      },
    },
    hitPointsCurrent: {
      get() {
        return this.playbook.stats.vitals.hitPointsCurrent;
      },
      set(value) {
        const target = 'stats.vitals.hitPointsCurrent';
        this.commitState(parseInt(value, 10), target);
      },
    },
    hitPointsMax: {
      get() {
        return this.playbook.stats.vitals.hitPointsMax;
      },
      set(value) {
        const target = 'stats.vitals.hitPointsMax';
        this.commitState(parseInt(value, 10), target);
      },
    },
    hitPointsBase: {
      get() {
        return this.playbook.stats.vitals.hitPointsBase;
      },
      set(value) {
        const target = 'stats.vitals.hitPointsBase';
        this.commitState(parseInt(value, 10), target);
      },
    },
    hitPointsMod: {
      get() {
        return this.playbook.stats.vitals.hitPointsMod;
      },
      set(value) {
        const target = 'stats.vitals.hitPointsMod';
        this.commitState(value, target);
      },
    },
  },
  methods: {
    commitState(value, target) {
      const payload = {
        value,
        target,
      };
      console.log('Committing state...');
      this.$store.commit('updatePlaybookProperty', payload);
    },
    formatterDamage(value) {
      console.log(`Passed ${value} to formatterDamage`);
      if (value.match(/(D[1-9][0-9]*)/)) {
        return value;
      }
      return '';
    },
    formatter99(value) {
      console.log(`Passed ${typeof parseInt(value, 10)} to formatter`);
      if (parseInt(value, 10) > 99) {
        return 99;
      }
      return value.substring(0, 2);
    },
    formatter1000(value) {
      console.log(`Passed ${typeof parseInt(value, 10)} to formatter`);
      if (parseInt(value, 10) > 1000) {
        return 999;
      }
      return value.substring(0, 3);
    },
  },
};
</script>
