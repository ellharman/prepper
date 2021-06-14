<template>
  <b-container>
    <vitals-block />
  </b-container>
</template>

<style lang="scss" scoped>
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
