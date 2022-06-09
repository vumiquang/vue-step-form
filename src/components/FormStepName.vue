<template lang="">
  <form-step-wrap>
    <div class="form-step-group">
      <div
        class="step-title"
        v-for="(name, index) in getListFormName"
        :key="index"
        :class="[{current:index+1 == $store.state.currentStep},{success: $store.getters.isFormSuccess(index)}]"
      >
        <span class="step-count">{{ index + 1 }}</span>
        <span class="step-name">{{ name }}</span>
      </div>
    </div>
  </form-step-wrap>
</template>

<script>
import FormStepWrap from "./FormStepWrap.vue";
export default {
  components: {
    FormStepWrap,
  },
  computed: {
    getListFormName() {
      return this.$store.getters.getListFormName;
    },
  },
};
</script>

<style lang="css" scoped>
.form-step-group {
  width: 100%;
  display: flex;

  justify-content: space-between;
}

.step-title {
  padding: 8px 20px;
  background: #f3f3f3;
  display: flex;
  align-items: center;
  border-radius: 12px;
  border-style: solid;
  border-width: 2px;
  border-color: #ffffff;
}
.step-title.current {
  border-color: #9fbcd7;
}
.step-title.success {
  border-color: #32683c !important;
}
.step-count {
  display: inline-block;
  font-size: 16px;
  width: 24px;
  height: 24px;
  line-height: 24px;
  border-radius: 50%;
  color: #f7f7f7;
  background-color: #969899;
  margin-right: 8px;
}
.step-name {
  color: #8f9294;
  font-size: 14px;
  font-weight: 500;
}
</style>
