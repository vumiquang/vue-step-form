<template>
  <div class="form-btn">
    <button
      class="btn prev"
      @click="$store.commit('decreaseStep')"
      v-show="$store.state.currentStep != $store.state.formStep.length"
    >
      Previous
    </button>
    <button
      class="btn next"
      @click="$store.commit('increaseStep')"
      v-show="$store.state.currentStep != $store.state.formStep.length"
    >
      Next
    </button>
    <button
      class="btn reset"
      v-show="$store.state.currentStep == $store.state.formStep.length"
      @click="$store.commit('resetForm')"
    >
      Reset
    </button>
    <button
      class="btn prev"
      v-show="$store.state.currentStep == $store.state.formStep.length"
       @click="$store.commit('sendForm')"
    >
      Send
    </button>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css" scoped>
.form-btn {
  margin-top: 50px;
}
.btn {
  display: inline-block;
  border: unset;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  color: #fff;
  padding: 8px 24px;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 1px 1px 10px rgb(0 0 0 / 40%);
  transition: box-shadow 0.35s ease-out;
}
.btn ~ .btn {
  margin-left: 16px;
}
.prev {
  background-color: #72e6b1;
}
.next {
  background-color: #1e68cf;
}
.reset {
  background-color: #1d719a;
}
</style>
