<template>
  <div class="wrapper">
    <div class="button">
      <button
        type="button"
        @click="deleteFollow(value.member.id)"
        :class="[deleteSuccess?'follow_active':'']"
        v-if="deleteSuccess"
      >フォロー解除</button>
      <button
        type="button"
        @click="registerfollow(value.member.id)"
        :class="[deleteSuccess?'':'follow_inactive']"
        v-if="!deleteSuccess"
      >フォローする</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
    
      deleteSuccess: true
    };
  },
  props: {
    value: Object
  },

  methods: {
    deleteFollow($to_member_id) {
      let params = {
        from_member_id: this.$store.state.memberId,
        to_member_id: $to_member_id
      };
      axios
        .get("http://127.0.0.1:8001/api/deletefollow/", { params: params })
        .then(this.successDelete);
      // .catch(this.errors);
    },
    successDelete(response) {
      window.console.log(response.data.test);
      this.deleteSuccess = false;
    },
    registerfollow($to_member_id) {
      let params = {
        from_member_id: this.$store.state.memberId,
        to_member_id: $to_member_id
      };
      axios
        .get("http://127.0.0.1:8001/api/registerfollow/", { params: params })
        .then(this.successFollow);
      // .catch(this.errors);
    },
    successFollow(response) {
      window.console.log(response.data.test);
      this.deleteSuccess = true;
    }
  }
};
</script>

<style scoped>
button.follow_active{
  background:rgb(240, 238, 238);
}
button.follow_inactive{
  background: #ebf5fc;
}
</style>