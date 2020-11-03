<template>
  <div class="top_page">
    <common-header></common-header>
    <div class="header2">a</div>
    <top-contents :newTeacher="newTeacher"></top-contents>

    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from "@/components/Common/Header";
import TopContents from "@/components/Top/Contents";
import CommonFooter from "@/components/Common/Footer";
import axios from "axios";

export default {
  components: {
    CommonHeader,
    CommonFooter,
    TopContents
  },

  data() {
    return {
      memberId: "",
      setValue: "",
      newTeacher: [],
      success: false,
      params: {
        email: "",
        password: "",
        to_member_id: this.$store.state.memberId
      }
    };
  },
  watch:{
"$store.state.memberId":function(){
  this.$set(this.params,"to_member_id",this.$store.state.memberId);
  this.getNewMessage();
}
  },
  created: function() {
    this.submit();
    this.isLogin();
  },
  methods: {
    isLogin() {
      let params = {
        remember_token: localStorage.getItem("token")
      };
      axios
        .get("http://127.0.0.1:8001/api/login/check", { params: params })
        .then(this.confirmLogin)
        .catch(this.errors);
    },
    confirmLogin(response) {
      window.console.log(response.data);
      this.success = true;
    },
    error(e) {
      window.console.log(e);
      //   this.userErrors = e.response.data.errors
    },
    submit() {
      let params = {
        //   from_at: "2020-07-24 00:00:00"
      };
      axios
        .get("http://127.0.0.1:8001/api/member", { params: params })
        .then(this.submitSuccess)
        .catch(this.errors);
    },
    submitSuccess(response) {
      window.console.log(response.data.members);
      this.newTeacher = response.data.members;
      this.memberId = response.data.member.id;
    },
    errors(e) {
      window.console.log(e);
      //   this.userErrors = e.response.data.errors
    },
    getNewMessage() {
      axios
        .get("http://127.0.0.1:8001/api/newmessage", { params: this.params })
        .then(this.confirmMessage);
    },
    confirmMessage(response) {
      window.console.log(response.data);
    }
  }
};
</script>

<style scoped>
div.top_page {
  overflow: hidden;
  background: #f1f3f8;
}
div.header2 {
  background: orange;
}
@media screen and (max-width: 640px) {
  div.top_page {
    background-color: rgb(84, 85, 86);
  }
}
@media screen and (min-width: 640px) {
}
</style>