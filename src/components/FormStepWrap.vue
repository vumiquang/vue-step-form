<template lang="">
  <div class="form-step-wrap">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.form-step-wrap {
  padding: 20px;
  box-shadow: 0 4px 10px rgb(0 0 0 / 20%), 6px 12px 20px rgb(0 0 0 / 10%);
  background-color: #ffffff;
  border-radius: 12px;
  margin-top: 15px;
}
</style>
