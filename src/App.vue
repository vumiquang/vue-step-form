<template>
  <div class="form-step">
    <form-progress></form-progress>
    <form-step-name></form-step-name>
    <form-content></form-content>
    <form-button></form-button>
  </div>
</template>

<script>
import FormProgress from "./components/FormProgress.vue";
import FormStepName from "./components/FormStepName.vue";
import FormContent from "./components/FormContent/FormContent.vue";
import FormButton from "./components/FormButton.vue";

export default {
  name: "App",
  components: {
    FormProgress,
    FormStepName,
    FormContent,
    FormButton,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  background: #f4f1fb;
}
.form-step {
  font-family: Poppins, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  width: 900px;
}
</style>
