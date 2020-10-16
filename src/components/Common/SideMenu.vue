<template>
  <div>
    <div class="sideBar">
      <a :href="'http://localhost:8080/member/profile/'+$store.state.memberId">
        <div class="side_menu">マイページ</div>
      </a>

      <a :href="'http://localhost:8080/member/message/list/'+$store.state.memberId">
        <div class="side_menu">メッセージ</div>
      </a>

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
export default {
  data() {
    return {
      user_id: localStorage.getItem("token"),
      member_id: "",
      success: false,
      userErrors: {},
      params: {
        name: "",
        email: "",
        password: ""
      }
    };
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
  color:#51adcf;
  font: bold;
  /* opacity: 0.3; */
  cursor: pointer;
  /* border-bottom: 1px solid gray; */
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
</style>