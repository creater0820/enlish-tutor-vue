<template>
  <div class="message">
    <common-header></common-header>
    <navigation-bar></navigation-bar>
    <div class="messageContents">
      <div class="messageLeft">
        <common-side-menu></common-side-menu>
      </div>
      <div class="messageRight">
        <div class="messageRightTitle">メッセージ一覧</div>
        <div v-for="(value, index) in message_exchange" :key="index" class="member_message_list">
          <div class="wrapper">
          <div class="inner_member_message_list">
            <a :href="'http://localhost:8080/member/profile/'+value.exchange_member_id">
              <img :src="'http://127.0.0.1:8001'+value.member.icon" class="icon" />
            </a>
          </div>
          <div class="member_name_cut_list">
            {{value.member.name}}
          </div>
</div>
          <a :href="'http://localhost:8080/member/message/'+value.exchange_member_id">
            <div class="inner_member_message_cut">{{value.current_message}}</div>
          </a>
          <div class="message_current_date">最新 {{value.created_at | moment}}</div>
          <!-- <diff-in-minutes :message="value" ></diff-in-minutes> -->
        </div>
      </div>
    </div>

    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from "@/components/Common/Header";
import NavigationBar from "@/components/Common/NavigationBar";
import CommonFooter from "@/components/Common/Footer";

// import DiffInMinutes from "@/components/Common/Footer";
import moment from "moment";

import CommonSideMenu from "@/components/Common/SideMenu/";

import axios from "axios";

export default {
  filters: {
    moment: function(date) {
      return moment(date).format("YYYY/MM/DD HH:mm");
    }
  },
  data() {
    return {
      judge_member_id: false,
      fromMemberId: "",
      toMemberId: "",
      params: {
        user_id: localStorage.getItem("token"),
        name: "",
        email: "",
        message: "",
        memberId: "",
        from_member_id: "",
        to_member_id: "",
        text: ""
      },
      message_exchange: [],
      messages: [],
      follows: [],
      success: false,
      userErrors: {}
    };
  },
  components: {
    CommonHeader,
    CommonFooter,
    CommonSideMenu,
    NavigationBar,
    // DiffInMinutes,
  },
  created: function() {
    this.submit();
    // this.toMemberId();
  },
  methods: {
    submit() {
      axios
        .get("http://127.0.0.1:8001/api/member/id", {
          params: { remember_token: this.params.user_id }
        })
        .then(this.submitSuccess)
        .catch(this.errors);
    },
    submitSuccess(response) {
      this.toMemberId = this.$route.params.id;
      this.fromMemberId = response.data.member_id;
      axios
        .get("http://127.0.0.1:8001/api/message/" + this.fromMemberId, {
          params: { to_member_id: this.toMemberId }
        })
        .then(this.submitShow)
        .catch(this.errors);
    },
    submitShow(response) {
      window.console.log(response.data.message_exchange);
      this.messages = response.data.messages;
      this.message_exchange = response.data.message_exchange;
    },
    errors(e) {
      window.console.log(e.response.data.errors.name);
    },

    submitMessage() {
      this.params.to_member_id = this.toMemberId;
      this.params.from_member_id = this.fromMemberId;
      axios
        .post("http://127.0.0.1:8001/api/message/", this.params)
        .then(this.location)
        .catch(this.errors);
    },
    location() {
      location.href =
        "http://localhost:8080/member/message/" + this.$route.params.id;
    },
    isToMemberId(id) {
      window.console.log(id);
      window.console.log(this.params.to_member_id);

      if (this.params.to_member_id === id) {
        return true;
      }
    }
  }
};
</script>
<style scoped>
@media screen and (max-width: 640px) {
}
@media screen and (min-width: 640px) {
}
div.member_name_cut_list{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 180px;
    margin-left: 10px;
    float: right;
    width: 200px;
}
div.inner_member_message_cut{
   overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 500px;
    padding-left: 60px;
    margin-top: 25px;;
}
div.wrapper{
  float: left;
}
a {
  text-decoration: none;
}
a:visited {
  color: black;
}
div.messageRight {
  width: 800px;
  float: left;
  background: #e9f6fe;
   overflow: hidden;
   margin-left: 30px;
}
div.messageRightTitle {
  width: 790px;
  background: linear-gradient(#dde7ed, #91cae5);
  padding: 5px;
  font-size: 15px;
  border-radius: 3px;
}
div.messageContents {
  overflow: hidden;
}
div.messageLeft {
  float: left;
   overflow: hidden;
}
div.member_message_list {
  width: 799px;
  box-shadow: 0 3px 3px 0 #3282b8;
  background: rgb(217, 226, 255);
  border-radius: 1px;
  float: left;
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 15px;
}
div.inner_member_message_list {
  /* float: left; */

  padding-top: 10px;
  padding-left: 10px;
}
div.inner_member_message {
  padding: 10px;
}
div.inner_member_message:hover {
  opacity: 0.3;
}
div.messageContents {
  overflow: hidden;
}
div.message_current_date {
  font-size: 0.8em;
  /* color: gray; */
  float: right;
  margin-top: 20px;
}
img.icon{
  width: 50px;
  height: 50px;
  border-radius: 25px;
}
</style>