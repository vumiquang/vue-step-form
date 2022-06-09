import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentStep: 1,
    formStep: [
      {
        name: "About you",
        success: false,
        control: {
          name: {
            value: "",
            label: "Full Name",
            type: "text",
            validate() {
              if (this.value.length <= 0) {
                this.error = true;
                this.message = "The field is required!";
              } else {
                this.error = false;
                this.message = "";
              }
            },
            error: false,
            message: "",
          },
          email: {
            value: "",
            label: "Your Email",
            type: "email",
            validate() {
              const re =
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; // eslint-disable-line
              if (this.value.length <= 0) {
                this.error = true;
                this.message = "The field is required!";
                return;
              }

              if (!re.test(this.value)) {
                this.error = true;
                this.message = "The field must be email!";
              } else {
                this.error = false;
                this.message = "";
              }
            },
            error: false,
            message: "",
          },
        },
      },
      {
        name: "About Your Company",
        success: false,
        control: {
          company: {
            value: "",
            label: "Your Company Name",
            type: "text",
            validate() {
              if (this.value.length <= 0) {
                this.error = true;
                this.message = "The field is required!";
              } else {
                this.error = false;
                this.message = "";
              }
            },
            error: false,
            message: "",
          },
          numberEmployees: {
            value: "",
            label: "Number of Employees",
            type: "text",
            validate() {
              if (this.value.length <= 0) {
                this.error = true;
                this.message = "The field is required!";
                return;
              }

              if (isNaN(this.value)) {
                this.error = true;
                this.message = "Should be a valid value!";
              } else {
                this.error = false;
                this.message = "";
              }
            },
            error: false,
            message: "",
          },
        },
      },
      {
        name: "Finishing Up",
        success: false,
        control: {
          connectUs: {
            value: "",
            label: "From Where did you hear about us?",
            type: "select",
            validate() {
              if (this.value.length <= 0) {
                this.error = true;
                this.message = "The field is required!";
              } else {
                this.error = false;
                this.message = "";
              }
            },
            inputLabel: "-- Choose answer --",
            data: ["Friend", "FaceBook", "Websites"],
            error: false,
            message: "",
          },
          terms: {
            value: false,
            label: "",
            type: "checkbox",
            valueLabel: "I accept terms & conditions",
            validate() {
              if (!this.value) {
                this.error = true;
                this.message = "The field is required!";
                return;
              } else {
                this.error = false;
                this.message = "";
              }
            },
            error: false,
            message: "",
          },
        },
      },
    ],
  },

  getters: {
    getCurrentFormControl(state) {
      return state.formStep[state.currentStep - 1].control;
    },
    getCurrentValue(state) {
      return function (name) {
        return state.formStep[state.currentStep - 1].control[name].value;
      };
    },
    getCurrentFormName(state) {
      return state.formStep[state.currentStep - 1].name;
    },
    getListFormName(state) {
      return state.formStep.map((form) => form.name);
    },
    isFormSuccess(state) {
      return function (index) {
        return state.formStep[index].success;
      };
    },
    getNumberOfForm(state) {
      return state.formStep.length;
    },
  },

  mutations: {
    changeInput(state, { name, value }) {
      const currForm = state.formStep[state.currentStep - 1];
      currForm.control[name].value = value;
      currForm.control[name].validate();
      // state.formStep[state.currentStep - 1].success =
      let success = true;
      for (let key in currForm.control) {
        success = success && !currForm.control[key].error;
      }
      currForm.success = success;
      // console.log(currForm.success);
    },
    increaseStep(state) {
      const currForm = state.formStep[state.currentStep - 1];
      for (let key in currForm.control) {
        currForm.control[key].validate();
      }
      let success = true;
      for (let key in currForm.control) {
        success = success && !currForm.control[key].error;
      }
      currForm.success = success;
      if (
        state.currentStep < state.formStep.length &&
        state.formStep[state.currentStep - 1].success
      )
        state.currentStep++;
    },
    decreaseStep(state) {
      if (state.currentStep > 1) state.currentStep--;
    },
    resetForm(state) {
      state.currentStep = 1;
      state.formStep.forEach((form) => {
        form.success = false;
        for (let key in form.control) {
          form.control[key].value = "";
          form.control[key].error = false;
          form.control[key].message = "";
        }
      });
    },
    sendForm(state) {
      state.formStep.forEach((form) => {
        for (let key in form.control) {
          form.control[key].validate();
        }
      });
    },
  },
});
