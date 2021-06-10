<template>
  <div class="main">
    <b-container class="grid-container" id="main-container" fluid>
      <b-row>
        <b-col>
          <character-info />
        </b-col>
        <b-col> </b-col>
        <b-col> moves </b-col>
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

/* width */
::-webkit-scrollbar {
  width: 0.5em;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #1cb843;
}

.col {
  // border: solid;
  height: 100vh;
  overflow-y: scroll;
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
