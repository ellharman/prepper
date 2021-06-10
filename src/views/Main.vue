<template>
  <div class="main">
    Main
    <b-container class="grid-container" fluid>
      <b-row>
        <b-col>
          <character-info />
        </b-col>
        <b-col>
        </b-col>
        <b-col>
          moves
        </b-col>
      </b-row>
    </b-container>
    <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
  </div>
</template>

<style lang="scss" scoped>

.main {
  background-color: #060e1d;
  color: #f5c884;
  height: 100vh;
}

.btn {
  border: white;
  font-size: 1em;
  background-color: rgb(68, 68, 68);
  color: inherit;
}

.col {
  border: solid;
}

</style>

<script>
import CharacterInfo from '@/components/CharacterInfo.vue';

export default {
  components: {
    CharacterInfo,
  },
};
</script>
