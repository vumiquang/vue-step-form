<template>
  <div class="progress-back">
    <div class="progress-bar" :style="{ width: getWidthBar + '%' }"></div>
  </div>
</template>

<script>
export default {
  computed: {
    getWidthBar() {
      return Math.round(
        (this.$store.state.currentStep / this.$store.getters.getNumberOfForm) *
          100
      );
    },
  },
};
</script>

<style lang="css" scoped>
.progress-back {
  width: 100%;
  height: 18px;
  border-radius: 999rem;
  background: #fff;
  overflow: hidden;
  position: relative;
}
.progress-bar {
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 999rem;
  transition: width 0.5s ease-in;
  width: 30%;
  height: 100%;
  background: #0a81e8;
}
</style>
