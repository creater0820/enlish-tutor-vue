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
        <div class="side_menu">フォロー</div>
      </a>

      <a :href="'http://localhost:8080/member/lesson/' +$store.state.memberId">
        <div class="side_menu">契約情報</div>
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

      <div class="side_menu">売上履歴</div>
      <div class="side_menu">課金履歴</div>
      <div class="side_menu">契約情報</div>
    </div>
    <div class="sidebar_search_students">
      <p>生徒を探す</p>

      <div>
        <a href="http://localhost:8080/member/searchresults/1?page=1">英会話</a>
      </div>
      <div>
        <a href="http://localhost:8080/member/searchresults/3?page=3">TOEIC</a>
      </div>
      <div>
        <a href="http://localhost:8080/member/searchresults/3?page=2">ビジネス英語</a>
      </div>
      <div>
        <a href="http://localhost:8080/member/searchresults/3?page=4">英文添削</a>
      </div>
    </div>
    <div class="sidebar_search_teacher">
      <p>先生を探す</p>
      <p>英会話</p>
      <p>TOEIC</p>
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
div.sideBar {
  margin-bottom: 20px;
}

div.side_menu {
  width: 200px;
  background: rgb(236, 242, 255);
  padding: 10px 5px 10px 5px;
  border-bottom: 0.2px solid rgb(223, 228, 237);
}
div.side_menu:hover {
  opacity: 0.3;
  cursor: pointer;
}
div.sidebar_search_students {
   background: rgb(236, 242, 255);
  
}
div.sidebar_search_teacher {
   background: rgb(236, 242, 255);
}

@media screen and (max-width: 640px) {
}
@media screen and (min-width: 640px) {
}
</style>