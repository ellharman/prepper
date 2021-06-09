<template>
  <div class="main">
    I am Main!
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
  background-color: rgb(64, 64, 64);
  color: white;
}

// .grid-container {
// }

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
