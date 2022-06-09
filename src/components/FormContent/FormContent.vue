<template>
  <form-step-wrap>
    <div
      class="form-control"
      v-for="(control, key, index) in getControl"
      :key="index"
      :class="{ error: control.error }"
    >
      <label :for="key" v-if="control.label.length > 0">{{
        control.label
      }}</label>
      <input-custom :id="key" :control="control" :name="key"></input-custom>
      <p class="message" v-if="control.error">{{ control.message }}</p>
    </div>
    <!-- <div class="form-control error">
      <label for="">Your company name</label>
      <input type="text" />
      <p class="message">this is error</p>
    </div> -->
  </form-step-wrap>
</template>
<script>
import FormStepWrap from "../FormStepWrap.vue";
import InputCustom from "./InputCustom.vue";
export default {
  components: {
    FormStepWrap,
    InputCustom,
  },
  computed: {
    getControl() {
      return this.$store.getters.getCurrentFormControl;
    },
  },
};
</script>

<style lang="css">
.form-control {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.form-control label {
  color: #000;
  font-size: 16px;
  display: block;
  margin-bottom: 6px;
}
.form-control .message {
  color: #aa4651;
  font-size: 12px;
  margin-top: 8px;
  display: none;
}
.form-control.error .message {
  display: inline-block;
}
.form-control ~ .form-control {
  margin-top: 8px;
}
</style>
