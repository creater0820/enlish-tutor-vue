<template>
  <div class="wrapper_review">
    <div class="review_title">レビュー投稿</div>
    <div class="textarea">
      <textarea class="store_review" v-model="params.review"></textarea>
    </div>
    <div class="select_star">
      <select v-model="params.star">
        <option value="0" >評価を選択してください</option>
        <option value="1" >⭐️</option>
        <option value="2">⭐️⭐️</option>
        <option value="3">⭐️⭐️⭐️</option>
        <option value="4">⭐️⭐️⭐️⭐️</option>
        <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
      </select>
    </div>
    <div class="submit_review">
      <button type="button" @click="submitReview()" class="submit_review" >レビューを投稿する</button>
    </div>

    <div>{{params.errorMessage}}</div>
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
        to_member_id: this.$route.params.id
      },
      title: "Body",
      text: "Have a good day!"
    };
  },
  watch: {
    "$store.state.memberId": function() {
      this.$set(this.params, "from_member_id", this.$store.state.memberId);
    }
  },
  methods: {
    submitReview() {
      axios
        .post("http://127.0.0.1:8001/api/review", this.params)
        .then(this.reviewSuccess())
        .catch(this.errors);
    },
    reviewSuccess() {
      this.$emit("childMethod", this.title);
    },
    errors() {
      this.errorMessage = "送信に失敗しました。再読み込みをお願いします";
    }
  }
};
</script>

<style scoped>
div.wrapper_review{
}
textarea.store_review{
  width: 600px;
  height:200px;
}
div.select_star{
  margin-bottom:10px;
  margin-top:10px;
  width: 300px;
}
button.submit_review{
  width: 607px;
  height: 50px;
  background: #d6e0f0;
}
button.submit_review:hover{
opacity: 0.6;
cursor: pointer;
}

</style>