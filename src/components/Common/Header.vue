<template>
  <div class="header">
    <div class="search_teacher">
      <a href="http://localhost:8080/" class="titlelogo"></a>
    </div>

    <a href="http://localhost:8080/member/signup" v-if="!success" class="sign_up">新規登録</a>
    <div class="header_logout" @click="logout()" v-if="success">ログアウト</div>
    <a href="http://localhost:8080/member/login" v-if="!success" class="login">ログイン</a>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    username: String
  },
  data() {
    return {
      success: false
    };
  },
  created: function() {
    this.isLogin();
  },
  methods: {
    logout() {
      axios
        .get("http://127.0.0.1:8001/api/logout")
        .then(this.logoutSystem)
        .catch(this.errors);
    },
    logoutSystem(response) {
      window.console.log(response.data);
      localStorage.removeItem("token");
      this.success = false;
      window.console.log("ログアウトしました");
      location.href = "http://localhost:8080/member/introduction";
    },
    isLogin() {
      window.console.log(localStorage.getItem("token"));
      let params = {
        remember_token: localStorage.getItem("token")
      };
      if (localStorage.getItem("token")) {
        axios
          .get("http://127.0.0.1:8001/api/login/check", { params: params })
          .then(this.confirmLogin)
          .catch(this.errors);
      }
    },
    confirmLogin(response) {
      window.console.log(response.data);
      this.success = true;
    },
    error(e) {
      window.console.log(e);
    }
  }
};
</script>

<style scoped>
a.header_search {
  text-decoration: none;

  color: rgb(32, 32, 38);
}
div.search_teacher {
  /* overflow: hidden;
  height: 40px;
  width: 400px;
  margin: 0 auto; */
}
img.title {
  width: 1100px;
}
a.img_teacher {
  padding-left: 30px;
  line-height: 30px;
  background: url("~@/assets/image/account_circle-black-18dp.svg") no-repeat;
  text-decoration: none;
}
a.img_student {
  padding-left: 30px;
  line-height: 30px;
  background: url("~@/assets/image/account_circle-black-18dp.svg") no-repeat;
  text-decoration: none;
}
a.img_edit {
  padding-left: 30px;
  line-height: 30px;
  background: url("~@/assets/image/account_circle-black-18dp.svg") no-repeat;
  text-decoration: none;
}
a.img_title_logo {
  padding-left: 30px;
  line-height: 30px;
  background: url("~@/assets/image/logo.jpg") no-repeat;
  text-decoration: none;
}
div.search {
  float: left;
}
div.search:hover {
  opacity: 0.3;
  cursor: pointer;
  background: rgb(69, 8, 235);
}
a.img_teacher:hover {
  color: rgb(247, 245, 247);
}
img.search_1 {
  width: 25px;
}
.titlelog {
  opacity: 0.7;
  cursor: pointer;
}
a.titlelogo {
  font-size: 2em;
  font: bold;
  color: aliceblue;
  text-decoration: none;
}
img.title {
  width: 100px;
  float: left;
}
img.title:hover {
}
a {
  float: right;
  widows: 100px;
  margin-right: 15px;
}
a.titlelogo {
  float: left;
  widows: 100px;
  margin-right: 15px;
}
div.header_logout {
  float: right;
  widows: 100px;
  margin-right: 15px;
  color: #bbe1fa;
  text-decoration: none;
  font-size: 18px;
}
div.header_logout:hover {
  opacity: 0.5;
  cursor: pointer;
}
p {
  float: right;
  widows: 100px;
  margin-right: 15px;
}

div.search_teacher {
  float: left;
}

div.hidden_menu {
  display: none;
  position: absolute;
}
div.search_teacher:hover .hidden_menu {
  display: block;
}

div.header {
  background-color: #1b262c;
  /* background: white; */
  overflow: hidden;
  height: 100px;
}
a.sign_up {
  color: #bbe1fa;
  text-decoration: none;
  font-size: 18px;
}
a.sign_up:visited {
  color: #bbe1fa;
}
a.login {
  color: #bbe1fa;
  text-decoration: none;
  font-size: 18px;
}
a.login:visited {
  color: #bbe1fa;
}

@media screen and (min-witdth: 768px) {
  div.header {
  }
}
@media screen and (min-width: 990px) {
  div.header {
  }
}
</style>