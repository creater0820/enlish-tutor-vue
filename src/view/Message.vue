
<template>
  <div class="message">
    <common-header></common-header>
    <navigation-bar />
    <div class="messageContents">
      <div class="messageLeft">
        <common-side-menu></common-side-menu>
      </div>
      <div class="userMessageRight">
        <div class="message_caution">メッセージの内容は必要に応じて運営でチェックしています</div>
        <div class="submit_message">
          <textarea class="submit_textarea" cols="40" rows="5" v-model="params.text"></textarea>
        </div>
        <div class="submit_button">
          <button type="button" class="message_button" @click="submitMessage">メッセージを送信する</button>
        </div>
        <div class="comment_wrapper" v-for="(value,index) in messages" :key="index">
          <chat-message :message="value" :toMemberId="toMemberId"></chat-message>
        </div>
      </div>
    </div>

    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from "@/components/Common/Header";
import CommonFooter from "@/components/Common/Footer";
import NavigationBar from "@/components/Common/NavigationBar";
import CommonSideMenu from "@/components/Common/SideMenu";
import ChatMessage from "@/components/member/message/ChatMessage";
import axios from "axios";

export default {
  data() {
    return {
      judge_member_id: false,
      fromMemberId: "",
      toMemberId: this.$route.params.id,
      params: {
        user_id: localStorage.getItem("token"),
        memberId: "",
        from_member_id: "",
        to_member_id: "",
        member_id: this.$store.state.memberId,
        member_judge_id:this.$route.params.id
      },
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
    ChatMessage,
    NavigationBar
  },
  created: function() {
    this.submit();
    this.changeRead();
  },
  watch: {
    "$store.state.memberId": function() {
      this.$set(this.params, "to_member_id", this.$store.state.memberId);
      this.changeRead();
    }
  },
  methods: {
    submit() {
      axios
        .get("http://127.0.0.1:8001/api/member/id", {
          params: { remember_token: this.params.user_id }
        })
        .then(this.submitMessageControllerShow)
        .catch(this.errors);
    },
    submitMessageControllerShow(response) {
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
      window.console.log(response.data);
      this.messages = response.data.messages;
    },
   

    submitMessage() {
      this.params.to_member_id = this.$route.params.id;
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
    },
    changeRead() {
      axios
        .get("http://127.0.0.1:8001/api/changeread", { params: this.params })
        .then(this.showRead);
    },
    showRead(response) {
      window.console.log(response.data.message);
    }
  }
};
</script>
<style>
div.member_name span {
  font-size: 0.7em;
  font: bold;
}
p.to_member_id {
  float: right;
  text-align: center;
}
p.member_name_icon {
  text-align: center;
}
div.submit_button {
  width: 700px;
  margin: 10px auto 0;
}
button.message_button {
  width: 700px;
  padding: 20px;
  margin-bottom: 30px;
  background: #0f4c75;
  border-radius: 7px;
  border: none;
  font: bold;
  cursor: pointer;
  color: white;
}
button.message_button:hover {
  opacity: 0.7;
}

div.message_caution {
  background: lemonchiffon;
  width: 700px;
  margin: 50px auto 0;
  font-size: 0.8em;
}
div.submit_message {
  margin: 10px auto 0;
  width: 700px;
}
textarea.submit_textarea {
  width: 694px;
}
div.comment_wrapper {
  padding-left: 20px;
}

body {
  margin: 0;
}

div.messageContents {
  overflow: hidden;
  width: 1200px;
  margin: 0 auto;
}
div.messageLeft {
  width: 200px;
  float: left;
}
div.userMessageRight {
  width: 970px;
  margin-left: 30px;
  float: left;
  padding-bottom: 50px;
}

div.innerMessage {
  background: white;
}

@media screen and (max-width: 640px) {
}
@media screen and (min-width: 640px) {
}
</style>