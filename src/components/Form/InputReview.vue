<template>
  <div>
    <p class="user_name">レビュー投稿</p>
    <textarea v-model="params.review"></textarea>
    <select v-model="params.star">
      <option value="0" selected>評価を選択してください</option>
      <option value="1">⭐️</option>
      <option value="2">⭐️⭐️</option>
      <option value="3">⭐️⭐️⭐️</option>
      <option value="4">⭐️⭐️⭐️⭐️</option>
      <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
    </select>
    <button type="button" @click="submitReview()">レビューを投稿する</button>
    <p>{{params.errorMessage}}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      success: true,
      errorMessage: "",
      params: {
        review: "",
        star: "",
        from_member_id: this.$store.state.memberId,
        to_member_id:this.$route.params.id
      },
      title: "Body",
      text: "Have a good day!"
    };
  },
  methods: {
    submitReview() {
      axios
        .post("http://127.0.0.1:8001/api/review", this.params)
        .then(this.review())
        .catch(this.errors);
    },
    review() {
      this.success = false;
    },
    errors() {
      this.errorMessage = "送信に失敗しました。再読み込みをお願いします";
    }
  }
};
</script>

<style scoped>
</style>