<template>
  <div class="main">
    I am Main!
    <b-container class="grid-container">
      <b-row>
        <b-col>notes</b-col>
        <b-col>1 of 3</b-col>
        <b-col>2 of 3</b-col>
        <b-col>3 of 3</b-col>
      </b-row>
    </b-container>
    <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
  </div>
</template>

<style lang="scss" scoped>

.main {
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
export default {
  components: {},
};
</script>
