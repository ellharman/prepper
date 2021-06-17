<template>
  <b-container>
    <b-col>
      <b-row>
        <b-col>Armor</b-col>
        <b-col
          ><b-form-input v-model="armor" type="number"></b-form-input
        ></b-col>
        <b-col>Damage</b-col>
        <b-col
          ><b-form-input v-model="armor" type="number"></b-form-input
        ></b-col>
        <!-- <b-col><b-form-input v-model="vitals.armor"></b-form-input></b-col> -->
      </b-row>
    </b-col>
  </b-container>
</template>

<style lang="scss" scoped>
</style>

<script>
// import { mapState } from 'vuex';

export default {
  name: 'StatBlock',
  props: {
  },
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
        this.commitState(value, target);
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
    hitPoints: {
      get() {
        return this.playbook.stats.vitals.hitPoints;
      },
      set(value) {
        const target = 'stats.vitals.hitPoints';
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
  },
};
</script>
