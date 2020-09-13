<template>
  <div>
   <p class="user_name">{{text}}</p>
    <textarea name="text"  :placeholder="text+'を入力してください'" v-model="setValue"></textarea>
  </div>
</template>

<script>
export default {
  props: {
    text:{
      type:String,
      default:'',
    },
    value:{
      type:String,
      default:'',
    }
    
  },
  data() {
    return {
      setValue: "",
    };
  },
  watch:{
    value() {
      this.setValue = this.value;
    },
    setValue(val){
      this.$emit('update:value',val)
    }
  }
};
</script>

<style scoped>
</style>