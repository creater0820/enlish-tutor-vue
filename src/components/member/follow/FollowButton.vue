<template>
  <div class="favorite_button_wrapper">
    <button type="button" @click="storeFavorite" class="follow_active" v-if="!success">フォローする</button>
    <button type="button" @click="destroyFavorite" class="follow_inactive" v-if="success">フォロー解除</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      success: false
      //   followCount: "",
    };
  },
//   mounted: function() {
//     this.isFollow();
//   },
  watch: {
    "$store.state.memberId": function() {
      this.isFollow();
    }
  },
  methods: {
    isFollow() {
      window.console.log(this.$store.state.memberId);
      let params = {
        to_member_id: this.$route.params.id,
        from_member_id: this.$store.state.memberId
      };
      axios
        .get("http://127.0.0.1:8001/api/follows/" + params.to_member_id, {
          params: params
        })
        .then(this.getFollowControllerShow)
        .catch(this.errors);
    },
    getFollowControllerShow(response) {
      window.console.log(response.data.is_follow);
      this.success = response.data.is_follow;
    },
    //   お気に入り登録
    storeFavorite() {
      this.success = !this.success;
      let params = {
        to_member_id: this.$route.params.id,
        from_member_id: this.$store.state.memberId
      };
      axios
        .post("http://127.0.0.1:8001/api/follows/", params)
        .then(this.getFollowControllerStore)
        .catch(this.errors);
    },
    getFollowControllerStore(response) {
      window.console.log(response.data);
      //   this.followCount = response.data.follow_count;
      this.$emit("showFollowNumber");
      this.isFollow();
    },
    errors(e) {
      window.console.log(e.response.data);
    },
    // お気に入り削除
    destroyFavorite() {
      this.success = !this.success;
      let params = {
        to_member_id: this.$route.params.id,
        from_member_id: this.$store.state.memberId
      };
      axios
        .delete("http://127.0.0.1:8001/api/follows/" + this.$route.params.id, {
          params: params
        })
        .then(this.FollowControllerDestroy)
        .catch(this.errors);
    },
    FollowControllerDestroy(response) {
      window.console.log(response.data);
      this.$emit("showFollowNumber");
      //   this.followCount = response.data.follow_count;
      this.isFollow();
    },
    error(e) {
      window.console.log(e.response.data);
    }
  }
};
</script>
<style scoped>
div.favorite_button {
  font-size: 15px;
}

button.follow_active {
  background: rgb(94, 135, 218);
}
button.follow_inactive {
  background: rgb(218, 94, 181);
}
</style>