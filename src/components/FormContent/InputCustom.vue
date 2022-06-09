<template lang="">
  <input
    ref="input"
    v-model="dataInput"
    :type="control.type"
    @blur="handleInput($event)"
    v-if="control.type == 'text' || control.type == 'email'"
  />

  <div class="select" v-else-if="control.type == 'select'">
    <div class="select-title" @click="handleSelectOption('')">
      {{ dataSelect == "" ? control.inputLabel : dataSelect }}
    </div>
    <div class="select-dropdown" v-show="isShowDropdown">
      <div
        class="select-option"
        v-for="(data, index) in control.data"
        :key="index"
        @click="handleSelectOption(data)"
      >
        {{ data }}
      </div>
    </div>
  </div>

  <div class="checkbox" v-else-if="control.type == 'checkbox'">
    <input
      :id="name + '_'"
      :name="name"
      ref="input"
      v-model="dataInput"
      :type="control.type"
    />
    <label :for="name + '_'">{{ control.valueLabel }}</label>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShowDropdown: false,
    };
  },
  props: {
    control: {
      type: Object,
    },
    name: {
      type: String,
    },
  },
  computed: {
    dataInput: {
      get() {
        return this.$store.getters.getCurrentValue(this.name);
      },
      set(value) {
        this.$store.commit("changeInput", { name: this.name, value });
      },
    },
    dataSelect: {
      get() {
        return this.$store.getters.getCurrentValue(this.name);
      },
      set(value) {
        this.$store.commit("changeInput", { name: this.name, value });
      },
    },
  },
  methods: {
    handleInput(e) {
      this.$store.commit("changeInput", {
        name: this.name,
        value: e.target.value,
      });
    },
    handleSelectOption(value) {
      this.isShowDropdown = !this.isShowDropdown;
      if (!this.isShowDropdown) this.dataSelect = value;
    },
  },
  updated() {
    if (this.$refs.input) this.$refs.input.value = this.control.value;
  },
};
</script>
<style lang="css">
.form-control input[type="text"],
.form-control input[type="email"] {
  width: 100%;
  color: #586068;
  font-size: 16px;
  width: 100%;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: 3px solid transparent;
  transition: all 0.2s ease;
}
.form-control input[type="text"]:focus,
.form-control input[type="email"]:focus {
  outline-color: #c2d9fb;
  box-shadow: unset;
  border: 1px solid transparent;
}
.form-control.error input[type="text"],
.form-control.error input[type="email"] {
  box-shadow: 0 0 4px #f4b6c1;
  border-color: #aa4651;
}
.form-control.error input[type="text"]:focus,
.form-control.error input[type="email"]:focus {
  outline-color: #f4b6c1;
}
.form-control .select {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 6px;
  position: relative;
  cursor: pointer;
}
.form-control.error .select {
  box-shadow: 0 0 4px #f4b6c1;
  border-color: #aa4651;
}
.form-control .select-title {
  padding: 10px 12px;
  position: relative;
  text-align: left;
}
.form-control .select-title:after {
  content: "";
  display: block;
  border: 4px solid transparent;
  border-color: #000 transparent transparent transparent;
  position: absolute;
  top: calc(50% + 3px);
  right: 22px;
  transform: translateY(-50%);
}
.form-control .select-dropdown {
  position: absolute;
  top: calc(100% + 1px);
  background-color: #fff;
  width: 100%;
  padding: 12px 0;
  box-shadow: 0 4px 8px rgb(0 0 0 / 20%);
  border-radius: 12px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.form-control .select-option {
  text-align: left;
  padding: 8px 16px;
  background-color: #fff;
  transition: background-color 0.2s ease-in;
}

.form-control .select-option:hover {
  background-color: #ccc;
}
.form-control .checkbox {
  margin-top: 30px;
  display: flex;
  vertical-align: bottom;
}
.form-control .checkbox label {
  margin-left: 10px;
  color: #2c3e50;
}
</style>
