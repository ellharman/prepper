<template>
<b-sidebar id="sidebar-1" title="Prepper" shadow backdrop bg-variant="dark">
      <div id="nav">
        <router-link to="/main">Main</router-link> |
        <router-link to="/mainmobile">MainMobile</router-link>
        <br />
      </div>
      <b-dropdown
        id="dropdown-1"
        block
        text="Select Campaign"
        class="m-md-2"
        menu-class = "w-100"
        variant="dark"
      >
        <b-dropdown-item>First Action</b-dropdown-item>
        <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-item>Third Action</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item active>Active action</b-dropdown-item>
        <b-dropdown-item disabled>Disabled action</b-dropdown-item>
      </b-dropdown>
    </b-sidebar>
</template>

<style lang="scss" scoped>
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #d9dbc5;

    &.router-link-exact-active {
      color: rgb(212, 95, 223);
    }
  }
}

.header {
    color: cornflowerblue;
}

</style>

<script>
export default {
  name: 'MenuSidebar',
};
</script>
