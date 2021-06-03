<template>
  <div />
</template>
<script>
export default {
  name: 'Init',
  methods: {
    isMobile() {
      if (window.screen.width <= 760) {
        return true;
      }
      return false;
    },
  },
  created() {
    if (this.isMobile()) {
      this.$router.push('/MainMobile');
    } else {
      this.$router.push('/Main');
    }
  },
};
</script>
<style scoped>
</style>
