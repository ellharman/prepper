<template>
  <b-container>
    <b-row align-h="center" class="header"> Stats </b-row>
    <hr class="rule" id="initial-rule" />
    <vitals-block />
  </b-container>
</template>

<style lang="scss" scoped>
.header {
  padding: 0.2em;
  font-size: 2.5em;
}

.rule {
  border-color: #1cb84393;
}

#initial-rule {
  margin-top: 0px;
}

</style>

<script>
import VitalsBlock from './VitalsBlock.vue';

export default {
  name: 'StatInfo',
  components: {
    VitalsBlock,
  },
};
</script>
