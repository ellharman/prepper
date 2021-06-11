<template>
  <div id="app">
    <menu-sidebar />
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: Open Sans, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
}

.container {
  background-color: teal;
  margin: 0px;
}
</style>

<script>
import MenuSidebar from '@/components/MenuSidebar.vue';

export default {
  Name: 'App',
  components: {
    MenuSidebar,
  },
};
</script>
