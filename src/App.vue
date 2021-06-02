<template>
  <div id="app">
    <b-sidebar id="sidebar-1" title="Prepper" shadow backdrop dark>
      <div id="nav">
        <b-dropdown id="dropdown-1" text="Select Campaign" class="m-md-2">
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item active>Active action</b-dropdown-item>
          <b-dropdown-item disabled>Disabled action</b-dropdown-item>
        </b-dropdown>
        <br />
        <router-link to="/">Main</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </b-sidebar>
    <b-container>
      <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
    </b-container>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Open Sans, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.container {
  background-color: teal;
}
</style>

<script>
export default {
  Name: 'App',
};
</script>
