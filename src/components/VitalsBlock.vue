<template>
  <b-container>
    <b-col>
      <b-row>
        <b-col>Armor</b-col>
        <b-col
          ><b-form-input v-model="armor" type="number"></b-form-input
        ></b-col>
        <b-col>Armor</b-col>
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
  computed: {
    armor: {
      get() {
        return this.$store.state.currentPlaybook.stats.vitals.armor;
      },
      set(value) {
        const target = 'stats.vitals.armor';
        this.commitState(value, target);
      },
    },
    damage: {
      get() {
        return this.$store.state.currentPlaybook.stats.vitals.damage;
      },
      set(value) {
        const target = 'stats.vitals.damage';
        this.commitState(value, target);
      },
    },
    hitPoints: {
      get() {
        return this.$store.state.currentPlaybook.stats.vitals.hitPoints;
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
