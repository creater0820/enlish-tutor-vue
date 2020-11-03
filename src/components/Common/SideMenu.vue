<template>
  <div>
    <div class="sideBar">
      <a :href="'http://localhost:8080/member/profile/'+$store.state.memberId">
        <div class="side_menu">マイページ</div>
      </a>

      <div class="wrapper">
        <a :href="'http://localhost:8080/member/message/list/'+$store.state.memberId">
          <div class="side_menu_mail">メッセージ</div>
        </a>
        <div class="new_message" v-if="counts!==0">
          <a href class="new">{{counts}}</a>
        </div>
      </div>

      <a :href="'http://localhost:8080/member/follows/'+$store.state.memberId">
        <div class="side_menu">フォローリスト</div>
      </a>

      <a :href="'http://localhost:8080/member/lesson/' +$store.state.memberId">
        <div class="side_menu">契約中プラン</div>
      </a>

      <a :href="'http://localhost:8080/member/createplan/'+$store.state.memberId">
        <div class="side_menu">生徒を募集する</div>
      </a>

      <a :href="'http://localhost:8080/member/createstudentplan/'+$store.state.memberId">
        <div class="side_menu">先生を募集する</div>
      </a>

      <a href="http://localhost:8080/member/createmydata">
        <div class="side_menu">ユーザー情報</div>
      </a>

      <a :href="'http://localhost:8080/member/saleslog/'+$store.state.memberId">
        <div class="side_menu">売上履歴</div>
      </a>
      <a :href="'http://localhost:8080/member/paymentlog/'+$store.state.memberId">
        <div class="side_menu">課金履歴</div>
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user_id: localStorage.getItem("token"),
      member_id: "",
      success: false,
      userErrors: {},
      counts: 0,
      params: {
        name: "",
        email: "",
        password: "",
        to_member_id: ""
      }
    };
  },
  watch: {
    "$store.state.memberId": function() {
      this.$set(this.params, "to_member_id", this.$store.state.memberId);
      this.getNewMessage();
    }
  },
  methods: {
    getNewMessage() {
      axios
        .get("http://127.0.0.1:8001/api/newmessage", { params: this.params })
        .then(this.confirmMessage);
    },
    confirmMessage(response) {
      window.console.log(response.data);
      this.counts = response.data.counts;
    }
  },
  components: {}
};
</script>
<style scoped>
a {
  text-decoration: none;
}
a:visited {
  color: black;
}

div.side_menu {
  width: 160px;
  background: white;
  padding: 10px 5px 10px 5px;
  border-bottom: 1px solid #e1e7f2;
  font-size: 13px;
}
div.side_menu:hover {
  /* transition:ease 0.8s; */
  color: #51adcf;
  font: bold;
  cursor: pointer;
}
div.side_menu_mail:hover {
  /* transition:ease 0.8s; */
  color: #51adcf;
  font: bold;
  cursor: pointer;
}
div.sidebar_search_students {
  background: white;
  width: 170px;
}
div.sidebar_search_teacher {
  background: white;
}

@media screen and (max-width: 640px) {
}
@media screen and (min-width: 640px) {
}
div.wrapper {
  overflow: hidden;
}
div.side_menu_mail {
  float: left;
  /* width: 160px; */
  background: white;
  padding: 10px 5px 10px 5px;
  border-bottom: 1px solid #e1e7f2;
  font-size: 13px;
}
div.new_message {
  float: left;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  text-align: center;
  line-height: 20px;
  background: #ff7b84;
  margin-top: 9px;
  margin-left: 3px;
}
a.new {
  color: white;
  font-size: 13px;
  padding: none;
  margin: none;
}
</style>