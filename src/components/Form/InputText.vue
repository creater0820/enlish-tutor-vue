<template>
  <div class="input_text">
    <div class="user_name">
      <p>{{text}}</p>
    </div>

    <input
      class="input_information"
      :name="text"
      :placeholder="[placeholder.length ?placeholder : this.text+'を入力してください']"
      v-model="setValue"
    />
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      setValue: ""
    };
  },
  watch: {
    value() {
      this.setValue = this.value;
    },
    setValue(val) {
      this.$emit("update:value", val);
    }
  }
};
</script>

<style scoped>
:focus::-webkit-input-placeholder {
  color: white;
}
div.user_name{
  color: white;
  font-weight: 700;
}
input.input_information {
  width: 300px;
  height: 40px;
  border-radius: 5px;
  box-shadow: 2px 2px  4px rgb(82, 84, 84);
}
</style>