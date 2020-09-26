<template>
  <div class="top_page">
    <common-header></common-header>
    <common-menu :memberId="memberId"></common-menu>
    <top-contents :newTeacher="newTeacher"></top-contents>

    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from "@/components/Common/Header";
import TopContents from "@/components/Top/Contents";
import CommonFooter from "@/components/Common/Footer";
import CommonMenu from "@/components/Common/Menu";
import axios from "axios";

export default {
  components: {
    CommonHeader,
    CommonFooter,
    TopContents,
    CommonMenu
  },
  
  
 
  
  data() {
    return {
      memberId: "",

      setValue: "",
      newTeacher: [],
      success: false,
      params: {
        email: "",
        password: ""
      }
    };
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
    }
  }
};
</script>

<style scoped>
div.top_page {
  overflow: hidden;
  background: #bbe1fa;
}
@media screen and (max-width: 640px) {
  div.top_page {
    background-color: rgb(84, 85, 86);
  }
}
@media screen and (min-width: 640px) {
  div.top_page {
    background: #f3f7fa;
  }
}
</style>