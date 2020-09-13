<template>
  <div id="app">
    <template v-if="$store.state.isLoading">
      <div class="overlay-loading">ロード中</div>
    </template>

    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
// import Api from '@/service/Api';

export default {
  props: {
    username: String
  },
  created: function() {
    this.getMemberId();
  },
  methods: {
    getMemberId() {
      window.console.log(localStorage.getItem("token"));
      axios
        .get("http://127.0.0.1:8001/api/member/id", {
          params: { remember_token: localStorage.getItem("token") }
        })
        .then(this.confirmLogin)
        .catch(this.errors);
    },
    confirmLogin(response) {
      // action代わり
      this.$store.commit("isMemberId", response.data.member_id);
      window.console.log(this.$store.state.memberId);
    },
    error(e) {
      window.console.log(e);
    }
  }
};
</script>
<style scoped>
div.overlay-loading {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  z-index: 2147483647;
}
</style>