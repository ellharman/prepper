<template>
  <b-sidebar
    id="sidebar-1"
    title="Prepper"
    no-header-close
    shadow
    backdrop
    bg-variant="dark"
  >
    <b-col>
      <b-row class="sidebar-row">
        <div id="nav">
          <router-link to="/main">Desktop</router-link> |
          <router-link to="/mainmobile">Mobile</router-link>
        </div>
      </b-row>
      <b-row class="sidebar-row">
        <playbook-selector />
      </b-row>
      <b-row class="sidebar-row">
        menu item
      </b-row>
    </b-col>
  </b-sidebar>
</template>

<style lang="scss" scoped>
#nav {
  font-size: 1.5em;
  padding: 10px;

  a {
    font-weight: bold;
    color: #f5c884;

    &.router-link-exact-active {
      color: #1cb843;
    }
  }
}

.sidebar-row {
  display: grid;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 0.8em;
  padding-bottom: 0.8em;
  color: white;
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
