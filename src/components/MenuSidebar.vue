<template>
  <b-sidebar
    id="sidebar-1"
    title="Prepper"
    no-header-close
    shadow
    backdrop
    bg-variant="dark"
  >
    <div id="nav">
      <router-link to="/main">Desktop</router-link> |
      <router-link to="/mainmobile">Mobile</router-link>
    </div>
    <playbook-selector />
  </b-sidebar>
</template>

<style lang="scss" scoped>
#nav {
  padding: 10px;

  a {
    font-weight: bold;
    color:rgb(252, 214, 0);

    &.router-link-exact-active {
      color: rgb(212, 95, 223);
    }
  }
}
</style>

<script>
import PlaybookSelector from './PlaybookSelector.vue';

export default {
  name: 'MenuSidebar',
  data() {
    return {
      message: 'test',
    };
  },
  components: {
    PlaybookSelector,
  },
};
</script>
