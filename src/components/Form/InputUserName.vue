<template>
  <div>
    
    <p class="user_name">名前:{{ message }}</p>
    <input name="name" v-model="message" placeholder="名前を入力してください"/>
  </div>
</template>

<script>
export default {
  props: {
    username: String
  },
  data() {
    return {
      title: "Body",
      text: "Have a good day!"
    };
  }
};
</script>

<style scoped>
</style>