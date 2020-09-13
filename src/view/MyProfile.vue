<template>
  <div class="parent">
    <common-header></common-header>
    <navigation-bar :memberName="params.name"></navigation-bar>
    <div class="wrapper">
      <div class="side">
        <common-side-menu></common-side-menu>
      </div>
      <div class="profile_wrapper">

   

        <div class="user_information_right">
            <show-student-plan></show-student-plan>
        </div>
        <div class="input_user_information">
          <div class="edit" v-if="Number($store.state.memberId)===Number($route.params.id)">
            <a href="http://localhost:8080/member/editprofile">
              <img src="@/assets/image/edit-24px.svg" />プロフィールを編集する
            </a>
          </div>
          <div class="favorite" v-if="Number($store.state.memberId)!==Number($route.params.id)">
            <follow-button @showFollowNumber="showFollowNumber"></follow-button>
          </div>

          <div class="form_group" v-if="Number($store.state.memberId)!==Number($route.params.id)">
            <a :href="'http://localhost:8080/member/message/'+$route.params.id">メッセージを送る</a>
          </div>

          <div class="form_group">
            <img src="@/assets/image/account_circle-black-18dp.svg" alt class="icon" />

            <br />
          </div>
          <div class="form_group_name_cut">
            <label for>{{params.name}}</label>

            <br />
          </div>
          <div>
            <span>フォロワー</span>
            <span class="count_follower">{{follower}}</span>
            <span>人</span>
          </div>
          <div class="form_group">
            <label for>TOEICスコア</label>
            <p>{{params.educational_background}}</p>

            <br />
          </div>
          <div class="form_group">
            <label for>ネイティブ言語</label>
            <br />
          </div>

          <div class="form_group">
            <label for>経歴・指導方針</label>
            <p>{{params.profile}}</p>
            <br />
          </div>
        </div>
      </div>
    </div>
    <common-footer></common-footer>
  </div>
</template>
<script>
import CommonHeader from "@/components/Common/Header";
import NavigationBar from "@/components/Common/NavigationBar";

import CommonSideMenu from "@/components/Common/SideMenu";
import CommonFooter from "@/components/Common/Footer";
import FollowButton from "@/components/member/follow/FollowButton";
import ShowStudentPlan from "@/components/member/lesson/ShowStudentPlan";
import axios from "axios";

export default {
  components: {
    CommonHeader,
    CommonSideMenu,
    CommonFooter,
    FollowButton,
    NavigationBar,
    ShowStudentPlan,
  },
  data() {
    return {
      follower: "",
      to_member_id: this.$route.params.id,
      params: {
        user_id: localStorage.getItem("token"),
        name: "",
        profile: "",
        email: "",
        qualification: "",
        educational_background: ""
      }
    };
  },

  created: function() {
    this.submit();
    this.showFollowNumber();
  },

  methods: {
    submit() {
      this.$store.commit("isLoading", true);
      this.memberId = this.$route.params.id;
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
      this.$store.commit("isLoading", false);
    },
    errors(e) {
      window.console.log(e);
      //   this.userErrors = e.response.data.errors
    },
    showFollowNumber() {
      axios
        .get("http://127.0.0.1:8001/api/follows/" + this.$route.params.id)
        .then(this.getFollowControllerShow);
      // .catch(this.followError);
    },
    getFollowControllerShow(response) {
      window.console.log(response.data);
      window.console.log("http://localhost:8080" + this.$route.path);
      this.follower = response.data.follow_count;
    },
    followError(e) {
      window.console.log(e);
    }
  }
};
</script>
<style scoped>
div.wrapper {
  overflow: hidden;

  /* background: rgb(229, 229, 241); */
}
div.profile_wrapper {
  width: 1200px;
  margin: 0 auto;
}

div.input_user_information {
  margin-top: 10px;
  float: right;
  width: 300px;
  position: fixed;
  /* margin: 0 auto ; */
  background: rgb(229, 229, 241);
  /* padding: 20px; */
  text-align: center;
  border-radius: 3px;
  padding: 10px;
}
div.user_information_right {
  float: right;
  width: 800px;
  background: rgb(198, 219, 237);
  min-height: 600px;
}
img.icon {
  width: 100px;
}
div.edit {
  /* float: right; */
  font-size: 1.2em;
  color: rgb(99, 91, 91);
}
div.favorite {
  font-size: 0.8em;
  color: rgb(99, 91, 91);
}
div.form_group {
  width: 300px;
  margin: 0 auto;
   
}
div.form_group_name_cut{
  width: 180px;
  margin: 0 auto;
   overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.form_group span {
  color: rgb(115, 127, 179);
}
:focus::-webkit-input-placeholder {
  color: white;
}
.c_0 {
  /* font-size: 1.2em;
  font: bold; */
  /* width: 100px; */
  /* margin: 0 auto; */
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
  /* overflow: hidden; */
}

div.side {
  float: left;
}
span.count_follower {
  font-size: 18px;
  font: bold;
  color: rgb(75, 78, 223);
}
</style>