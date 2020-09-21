<template>
  <div class="parent">
    <common-header></common-header>
    <navigation-bar :value="params"/>
    <div class="include_contents">
      <div class="side">
        <common-side-menu></common-side-menu>
      </div>
      <div>
        <div class="input_user_information">
          <div class="c_0">
            <p>マイプロフィール</p>
          </div>

          <div v-if="success" class="name">
           <img :src="'http://127.0.0.1:8001'+params.icon" alt="" class="member_icon">
          </div>
          <div v-if="success" class="name">
            <p>ユーザーネーム：{{params.name}}</p>
          </div>
          <div v-if="!success" class="name">
            <p>未入力</p>
          </div>
          <div v-if="success" class="profile">
            <p>プロフィール：{{params.profile}}</p>
          </div>
          <div v-if="!success" class="profile">
            <p>未入力</p>
          </div>
          <div v-if="success" class="email">
            <p>メールアドレス：{{params.email}}</p>
          </div>
          <div v-if="!success" class="email">
            <p>未入力</p>
          </div>
          <div v-if="success" class="qualification">
            <p>資格：{{params.qualification}}</p>
          </div>
          <div v-if="!success" class="qualification">
            <p>未入力</p>
          </div>
          <div v-if="success" class="educational_background">
            <p>最終学歴：{{params.educational_background}}</p>
          </div>
          <div v-if="!success" class="educational_background">
            <p>未入力</p>
          </div>
          <div v-if="success" class="language_type">
            <p>母国語：{{params.language_type}}</p>
          </div>
        </div>
      </div>
    </div>
    <common-footer></common-footer>
  </div>
</template>
<script>
import CommonHeader from "@/components/Common/Header";
import CommonSideMenu from "@/components/Common/SideMenu";
import CommonFooter from "@/components/Common/Footer";
import NavigationBar from "@/components/Common/NavigationBar";
import axios from "axios";

export default {
  components: {
    CommonHeader,
    CommonSideMenu,
    CommonFooter,
    NavigationBar,
  },
  data() {
    return {
      success: false,
      params: {
        name: "",
        profile: "",
        email: "",
        qualification: "",
        educational_background: "",
        language_type: "",
        icon: "",
        user_id: localStorage.getItem("token")
      }
    };
  },
  created: function() {
    this.getProfile();
  },
  methods: {
    getProfile() {
      axios
        .get("http://127.0.0.1:8001/api/member/id", {
          params: { remember_token: this.params.user_id }
        })
        .then(this.submitSuccess)
        .catch(this.errors);
    },
    submitSuccess(response) {
      axios
        .get("http://127.0.0.1:8001/api/member/" + response.data.member_id)
        .then(this.submitShow)
        .catch(this.errors);
    },
    submitShow(response) {
      this.params.name = response.data.member.name;
      this.params.profile = response.data.member.profile;
      this.params.email = response.data.member.email;

      this.params.qualification = response.data.member.qualification;
      this.params.educational_background =
        response.data.member.educational_background;
      this.params.language_type = response.data.member.language_type;
      this.params.icon = response.data.member.icon;
      this.success = true;
      window.console.log(response.data);
    },
    errors(e) {
      window.console.log(e);
      //   this.userErrors = e.response.data.errors
    }
  }
};
</script>
<style scoped>
div.include_contents {
  overflow: hidden;
  width: 1200px;
  margin: 10px auto;
}
.form_group span {
  color: rgb(115, 127, 179);
}
:focus::-webkit-input-placeholder {
  color: white;
}
.c_0 {
  font-size: 1.8em;
  font: bold;
}
.c_1 {
  width: 800px;
  height: 30px;
  padding: 0;
}
.c_2 {
  width: 800px;
  height: 200px;
  padding: 0;
}
.c_3 {
  width: 200px;
  height: 20px;
  padding: 0;
}
div.parent {
}
div.input_user_information {
  width: 800px;
  background: rgb(255, 220, 217);
  text-align: center;
  margin: 0 auto;
  padding: 10px;
  float: left;
}
div.side {
  float: left;
  margin-right:10px ;
}
img.member_icon{
  width: 100px;
  height: 100px;
  border-radius: 50px;
}
</style>