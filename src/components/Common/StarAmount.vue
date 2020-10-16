<template>
  <div>
    <div class="reviewStar">
          <div class="">{{total}}</div>
          <div class="">{{arrayLength}}</div>
          <div class="">{{result}}</div>
      <div class="total">{{calculate()}}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
    starNumber: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      total: "",
      arrayLength: "",
      result: "",
      star: "",
      test: "⭐️⭐️⭐️⭐️⭐️"
    };
  },
  created: function() {
    // this.getStarAmount();
        this.getMemberReviewStar();
  },
  computed: {
  },
  methods: {
    getStarAmount() {
      let params = {
        from_member_id: this.$store.state.memberId
      };
      axios
        .get("http://127.0.0.1:8001/api/getreview", { params: params })
        .then(this.starShow)
        .catch(this.error);
    },
    starShow(response) {
      window.console.log(response.data.starAmount);
      this.star = response.data.starAmount.member_review;
    },
    calculate() {
      this.result = Math.round(Number(this.total) / Number(this.arrayLength));
      switch (this.result) {
        case 1:
          return "⭐️☆☆☆☆";
        case 2:
          return "⭐️⭐️☆☆☆";
        case 3:
          return "⭐️⭐️⭐️☆☆";
        case 4:
          return "⭐️⭐️⭐️⭐️☆";
        case 5:
          return "⭐️⭐️⭐️⭐️⭐️";
        default:
          return "⭐️⭐️⭐☆☆";
      }
    },
    getMemberReviewStar() {
      this.memberId = this.$route.params.id;
      axios
        .get("http://127.0.0.1:8001/api/getmemberreviewstar/" + this.memberId)
        .then(this.showReviewStar);
    },
    showReviewStar(response) {
      window.console.log(response.data.amount);
      window.console.log(response.data.amount.length);
      this.total = response.data.amount.reduce((sum, i) => sum + i.amount, 0);
      this.arrayLength = response.data.amount.length;
      this.amount = response.data.amount;
    }
  }
};
</script>

<style scoped>
div.reviewStar {
}
div.title {
}
div.total {
}
</style>