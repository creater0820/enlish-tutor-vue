<template>
  <div class="parent">
    <common-header></common-header>
    <navigation-bar />
    <div class="wrapper">
      <div class="side">
        <common-side-menu></common-side-menu>
      </div>
      <div class="wrapper_content" v-if="!judge">
        <div class="input_user_information">
          <div class="c_0">
            <p>プロフィール編集</p>
          </div>

          <div class="form_group">
            <label for>ユーザー名</label>
            <span>[必須]</span>
            <br />
            <input type="text" v-model="params.name" class="c_3" placeholder="ニックネーム" />
          </div>

          <div class="form_group">
            <label for>保有資格</label>

            <br />
            <div v-if="success" class="qualification">
              <input
                type="text"
                class="c_3"
                :placeholder="this.params.qualification"
                v-model="params.qualification"
              />
            </div>
            <div v-if="!success" class="qualification">
              <input
                type="text"
                class="c_3"
                placeholder="例：TOEIC860 英検1級"
                v-model="params.qualification"
              />
            </div>
          </div>
          <div class="form_group">
            <label for>最終学歴</label>

            <br />
            <input
              type="text"
              class="c_3"
              placeholder="例：京都大学工学部卒"
              v-model="params.educational_background"
            />
          </div>
          <div class="form_group">
            <label for>ネイティブ言語</label>
            <span>[必須]</span>
            <br />
            <input type="text" class="c_3" placeholder="例：English" v-model="params.language_type" />
          </div>
          <div class="form_group">
            <label for>メールアドレス</label>
            <br />
            <input type="text" class="c_3" placeholder v-model="params.email" />
          </div>

          <div class="form_group">
            <label for>経歴・指導方針</label>
            <span>[必須]</span>
            <br />
            <textarea name id class="c_2" placeholder v-model="params.profile"></textarea>
            <div id="app">
              <input @change="selectedFile" type="file" name="file" />
            </div>

            <button type="button" @click="
          updateProfile()">更新する</button>
          </div>
        </div>
      </div>
       <div class="wrapper_success" v-else>プロフィールを更新しました</div>
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
    NavigationBar
  },
  created: function() {
    this.init();
  },
  data() {
    return {
      judge: false,
      uploadFile: null,
      success: false,
      memberId: 0,
      params: {
        name: "",
        profile: "",
        email: "",
        qualification: "",
        educational_background: "",
        language_type: "",
        user_id: localStorage.getItem("token")
      }
    };
  },
  methods: {
    init() {
      axios
        .get("http://127.0.0.1:8001/api/member/id", {
          params: { remember_token: this.params.user_id }
        })
        .then(this.submitSuccess)
        .catch(this.errors);
    },
    submitSuccess(response) {
      this.memberId = response.data.member_id;
      axios
        .get("http://127.0.0.1:8001/api/member/" + this.memberId)
        .then(this.submitShow)
        .catch(this.errors);
    },
    submitShow(response) {
      this.params.name = response.data.member.name;
      this.params.profile = response.data.member.profile;
      this.params.email = response.data.member.user.email;
      this.params.qualification = response.data.member.qualification;
      this.params.educational_background =
        response.data.member.educational_background;
      this.params.language_type = response.data.member.language_type;
      this.params.icon = response.data.member.icon;
      this.success = "true";
      window.console.log(response.data);
    },
    errors(e) {
      window.console.log(e);
      //   this.userErrors = e.response.data.errors
    },

    updateProfile() {
      let formData = new FormData();
      formData.append("icon", this.params.icon);
      let config = {
        headers: {
          "content-type": "multipart/form-data"
        }
      };
      axios
        .post(
          "http://127.0.0.1:8001/api/member/" +
            this.memberId +
            "/set_profile_image",
          formData,
          config
        )
        .then(this.updateSubmit);
    },
    updateSubmit() {
      axios
        .put("http://127.0.0.1:8001/api/member/" + this.memberId, this.params)
        .then(this.showProfile)
        .catch(this.errors);
    },
    showProfile(response) {
      window.console.log(response.data);
      // location.href="http://localhost:8080/member/editprofile";
      this.judge = true;
    },
    selectedFile(e) {
      // 選択された File の情報を保存しておく
      e.preventDefault();
      this.$set(this.params, "icon", e.target.files[0]);
      window.console.log(this.params);
    }
  }
};
</script>
<style scoped>
label.icon {
  width: 100px;
}
div.wrapper{
  overflow: hidden;
  width: 1200px;
  margin: 0 auto;
}
div.wrapper_content {
float: left;
}
div.side {
  float: left;
  margin-right: 10px;
}
div.form_group {
  width: 600px;
  margin: 0 auto;
  margin-bottom: 30px;
}
div.form_group_img {
  width: 600px;
  margin: 0 auto;
  height: 100px;
}
.form_group span {
  /* color: rgb(115, 127, 179); */
}
:focus::-webkit-input-placeholder {
  color: white;
}
.c_0 {
  width: 300px;
  font-size: 1.8em;
  font: bold;
  margin: 0 auto;
}
.c_1 {
  width: 800px;
  height: 30px;
  padding: 0;
}
.c_2 {
  width: 100%;
  height: 80px;
  padding: 0;
}
.c_3 {
  width: 500px;
  height: 20px;
}
div.parent {
  /* overflow: hidden; */
}
div.input_user_information {
  float: left;
  width: 800px;
}
</style>