<template>
  <div class="parent">
    <common-header></common-header>
    <navigation-bar :memberName="params.name"></navigation-bar>
    <div class="wrapper">
      <div class="side">
        <common-side-menu></common-side-menu>
      </div>
      <div class="user_information_center">
          プランリスト
        <show-student-plan-list />
      </div>
      <div class="input_user_information">
        <div class="edit" v-if="Number($store.state.memberId)===Number($route.params.id)">
          <a href="http://localhost:8080/member/editprofile">
            <img src="@/assets/image/edit-24px.svg" />プロフィールを編集する
          </a>
        </div>
        <div class="form_group_img">
          <a :href="'http://localhost:8080/member/profile/'+$route.params.id">
            <img :src="'http://127.0.0.1:8001'+params.icon" alt class="icon" />
          </a>
          <br />
        </div>
        <div class="form_group_name_cut">
          <label for>{{params.name}}</label>
          <br />
        </div>
        <div>
          <div class="form_group">
            <p>{{params.profile}}</p>
            <br />
          </div>
          <div class="reviewStar">
            <div class="title">評価</div>
            <a
              class="total"
              :href="'http://localhost:8080/member/review/'+$route.params.id"
            >{{calculate()}}</a>
          </div>

          <div class="follow_member">
            <span>フォロワー</span>
            <span class="count_follower">{{follower}}</span>
            <span>人</span>
          </div>
        </div>
        <div class="favorite" v-if="Number($store.state.memberId)!==Number($route.params.id)">
          <follow-button @showFollowNumber="showFollowNumber"></follow-button>
        </div>
        <div
          class="form_group_message"
          v-if="Number($store.state.memberId)!==Number($route.params.id)"
        >
          <!-- <button
            type="button"
            @click="location.href='http://localhost:8080/member/message/'"
            +this.$route.params.id
            }
          ></button>-->
          <a
            :href="'http://localhost:8080/member/message/'+$route.params.id"
            class="sendMessage"
          >メッセージを送る</a>
        </div>
        <div class="review">
          <a
            :href="'http://localhost:8080/member/endplan/'+$route.params.id+'?params='+params.id"
            class="review"
          >評価をする</a>
        </div>
      </div>
    </div>
    <common-footer></common-footer>
  </div>
</template>
<script>

import CommonHeader from "@/components/Common/Header";
import NavigationBar from "@/components/Common/NavigationBar";
import ShowStudentPlanList from "@/components/member/lesson/ShowStudentPlanList";
import CommonSideMenu from "@/components/Common/SideMenu";
import CommonFooter from "@/components/Common/Footer";
import FollowButton from "@/components/member/follow/FollowButton";
import axios from "axios";

export default {
  components: {
    CommonHeader,
    CommonSideMenu,
    CommonFooter,
    FollowButton,
    NavigationBar,
    ShowStudentPlanList
  },
  data() {
    return {
      total: "",
      arrayLength: "",
      result: "",
      amount: [],
      member_review: [],
      follower: "",
      to_member_id: this.$route.params.id,
      params: {
        user_id: localStorage.getItem("token"),
        name: "",
        profile: "",
        email: "",
        qualification: "",
        educational_background: "",
        id: ""
      }
    };
  },

  created: function() {
    this.submit();
    this.showFollowNumber();
    this.showMemberReview();
    this.getMemberReviewStar();
  },

  methods: {
    calculate() {
      this.result = Math.round(Number(this.total) / Number(this.arrayLength));
      if (this.result >= 0 && this.result < 1.5) {
        return "⭐️☆☆☆☆";
      } else if (this.result >= 1.5 && this.result < 2) {
        return "⭐️☆☆☆☆";
      } else if (this.result >= 2 && this.result < 2.5) {
        return "⭐️⭐️☆☆☆";
      } else if (this.result >= 2.5 && this.result < 3) {
        return "⭐️⭐️☆☆☆";
      } else if (this.result >= 3 && this.result < 3.5) {
        return "⭐️⭐️⭐️☆☆";
      } else if (this.result >= 3.5 && this.result < 4) {
        return "⭐️⭐️⭐️☆☆";
      } else if (this.result >= 4 && this.result < 4.5) {
        return "⭐️⭐️⭐️⭐️☆";
      } else if (this.result >= 4.5 && this.result < 5) {
        return "⭐️⭐️⭐️⭐️☆";
      } else if (this.result >= 5) {
        return "⭐️⭐️⭐️⭐️⭐️";
      } else {
        return "☆☆☆☆☆";
      }
    },

    getMemberReviewStar() {
      this.memberId = this.$route.params.id;
      axios
        .get("http://127.0.0.1:8001/api/getmemberreviewstar/" + this.memberId)
        .then(this.showReviewStar);
    },
    showReviewStar(response) {
      window.console.log(response.data.amount);
      window.console.log(response.data.amount.length);
      this.total = response.data.amount.reduce((sum, i) => sum + i.amount, 0);
      this.arrayLength = response.data.amount.length;
      this.amount = response.data.amount;
    },
    showMemberReview() {
      this.memberId = this.$route.params.id;
      axios
        .get("http://127.0.0.1:8001/api/getreview/" + this.memberId)
        .then(this.showReview)
        .catch(this.errors);
    },
    showReview(response) {
      window.console.log(response.data.member);
      window.console.log(response.data.review);
      this.member_review = response.data.review;
      // this.from_member_id = response.data.member.from_member_id;
      // window.console.log(this.from_member_id);
    },
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
      this.params.id = response.data.member.id;
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
    },
    sendMessage() {
      location.href =
        "http://localhost:8080/member/message/" + this.$route.params.id;
    }
  }
};
</script>
<style scoped>
div.wrapper {
  overflow: hidden;
  width: 1200px;
  margin: 10px auto;
}

div.input_user_information {
  float: left;
  width: 300px;

  text-align: center;
  border-radius: 3px;
  padding: 10px;
  border-left: 4px double rgb(227, 223, 223);
  border-right: 4px double rgb(211, 208, 208);
}
div.user_information_center {
  float: left;
  width: 638px;
  margin: 0 10px;
   background: #f8fcff;
}
img.icon {
  width: 100px;
  height: 100px;
  /* display: block; */
  border-radius: 50px;
}
div.edit {
  /* float: right; */
  font-size: 1.2em;
  color: rgb(99, 91, 91);
}
div.favorite {
  font-size: １５px;
  /* color: rgb(99, 91, 91); */
}
div.form_group_img {
  width: 150px;
  margin: 0 auto;
}
div.form_group_name_cut {
  width: 180px;
  margin: 0 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.form_group span {
  color: rgb(115, 127, 179);
}
div.form_group_message {
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
  overflow: hidden;
}

div.side {
  float: left;
}
span.count_follower {
  font-size: 18px;
  font: bold;
  color: rgb(75, 78, 223);
}
div.follow_member {
  margin: 10px 0;
}
div.favorite {
  margin-bottom: 10px;
}
a.sendMessage {
  text-decoration: none;
  color: #e3f2fc;
  background: #0f4c75;
  padding: 5px;
  font-size: 15px;
}
a.sendMessage:visited {
  color: #e3f2fc;
}
a.sendMessage:hover {
  opacity: 0.5;
}
div.review {
  margin-top: 10px;
}
a.review {
  text-decoration: none;
  color: #e3f2fc;
  background: #0f4c75;
  padding: 5px;
}
a.review:visited {
  color: #e3f2fc;
}
a.review:hover {
  opacity: 0.5;
}
div.reviewStar {
  overflow: hidden;
  width: 130px;
  margin: 0 auto;
}
div.title {
  float: left;
  padding-top: 3px;
  padding-right: 6px;
}
</style>