<template>
  <div class="main-mobile">
    I am MainMobile!
    <b-container class="grid-container">
      <b-row>
        <b-col sm="auto"> <character-info /> </b-col>
        <b-col sm="auto">2 of 2</b-col>
        <b-col sm="auto">notes</b-col>
      </b-row>
    </b-container>
    <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
  </div>
</template>

<style lang="scss" scoped>
.main-mobile {
  background-color: burlywood;
}

.grid-container {
  background-color: chartreuse;
}

.col {
  border: solid;
  background-color: cadetblue;
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
