<template>
  <div>
    {{star}}
    {{test}}
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
      default:3
    }
  },
  data() {
    return {
      star: "",
      test: "⭐️⭐️⭐️⭐️⭐️"
    };
  },
  created: function() {
    // this.getStarAmount();
  },
  computed: {
    // showStar() {
    //   switch (this.star) {
    //     case 1:
    //       return "⭐️";
    //     case 2:
    //       return "⭐️⭐️";
    //     case 3:
    //       return "⭐️⭐️⭐️";
    //     case 4:
    //       return "⭐️⭐️⭐️⭐️";
    //     case 5:
    //       return "⭐️⭐️⭐️⭐️⭐️";
    //     default:
    //       return [];
    //   }
    // }
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
    }
  }
};
</script>

<style scoped>
</style>