<template>
  <div class="main">
    <b-container class="grid-container" id="main-container" fluid>
      <b-row>
        <b-button v-b-toggle.sidebar-1 v-b-hover="hoverHandler">
          <b-icon icon="gear-fill" :animation="menuHover" />
        </b-button>
        <b-col>
          <character-info />
        </b-col>
        <b-col> </b-col>
        <b-col> moves </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss" scoped>
.main {
  background-color: #010a1a;
  color: #f5c884;
  height: 100vh;
}
.btn {
  width: 3vw;
  // margin-top: 1em;
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
  data() {
    return {
      menuHover: '',
    };
  },
  components: {
    CharacterInfo,
  },
  methods: {
    hoverHandler(isHovered) {
      if (isHovered) {
        this.menuHover = 'spin';
      } else {
        this.menuHover = '';
      }
    },
  },
};
</script>
