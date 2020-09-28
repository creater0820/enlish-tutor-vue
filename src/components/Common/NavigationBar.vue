<template>
  <div class="navigationBar">
    <!-- <div
      class="navigationMenu"
      v-if=" 'http://localhost:8080'+$route.path === 'http://localhost:8080/member/profile/'+$store.state.memberId"
    >
      <a class="navigationTop" href="http://localhost:8080">TOP</a> > マイページ
    </div>-->

    <div class="navigationMenu" v-if=" Number($store.state.memberId) !==Number($route.params.id)">
      <div
        v-if=" 'http://localhost:8080'+$route.path === 'http://localhost:8080/member/createmydata'"
      >
        <div class="member_name_cut_navigation">
          <a class="navigationTop" href="http://localhost:8080">TOP</a>
          >
        </div>
        <div class="member_name_cut_name">{{value.name}}</div>さんのプロフィール
      </div>
    </div>

    <div class="navigationMenu" v-if=" $route.name === 'membermessage'">
      <a href="http://localhost:8080" class="navigationTop">TOP</a> > メッセージ
    </div>
    <div class="navigationMenu" v-if=" $route.name === 'membermessagelist'">
      <a href="http://localhost:8080" class="navigationTop">TOP</a> > メッセージ
    </div>

    <div
      class="navigationMenu"
      v-if=" 'http://localhost:8080'+$route.path === 'http://localhost:8080/member/lesson/'+$store.state.memberId"
    >
      <a class="navigationTop" href="http://localhost:8080">TOP</a> > レッスン一覧
    </div>
    <div
      class="navigationMenu"
      v-if=" 'http://localhost:8080'+$route.path === 'http://localhost:8080/member/follows/'+$store.state.memberId"
    >
      <a class="navigationTop" href="http://localhost:8080">TOP</a> > フォロー
    </div>
    <div
      class="navigationMenu"
      v-if=" 'http://localhost:8080'+$route.path === 'http://localhost:8080/member/createplan/'+$store.state.memberId"
    >
      <a class="navigationTop" href="http://localhost:8080">TOP</a> > レッスンを作成する
    </div>
    <div
      class="navigationMenu"
      v-if=" 'http://localhost:8080'+$route.path === 'http://localhost:8080/member/createstudentplan/'+$store.state.memberId"
    >
      <a class="navigationTop" href="http://localhost:8080">TOP</a> > 先生を募集する
    </div>
    <div class="navigationMenu" v-if=" $route.name === 'membersearchresults'">
      <a href="http://localhost:8080" class="navigationTop">TOP</a> > 生徒を探す＞検索結果を表示
    </div>
    <div class="navigationMenu" v-if=" $route.name === 'membersearchresultsteacher'">
      <a href="http://localhost:8080" class="navigationTop">TOP</a> > 先生を探す＞検索結果を表示
    </div>
    <div class="navigationMenu" v-if=" $route.name === 'membereditprofile'">
      <a href="http://localhost:8080" class="navigationTop">TOP</a> > プロフィール編集
    </div>
    <div class="navigationMenu" v-if=" $route.name === 'memberprofile'">
      <a href="http://localhost:8080" class="navigationTop">TOP</a> > プロフィール
    </div>
  </div>
</template>

    <script>
export default {
  props: {
    value: {
      type: String
    }
  }
};
</script>

    <style scoped>
a {
  text-decoration: none;
}
a:hover {
  cursor: pointer;
  opacity: 0.5;
}
a:visited {
  color: black;
}
div.navigationBar {
  width: 100%;
  background: #0f4c75;
  border-bottom: 1px solid #4db7fe;
}
div.navigationMenu {
  padding: 3px;
  width: 1172px;
  margin: 0 auto;
  color: rgb(217, 237, 255);
}
div.member_name_cut_navigation {
  float: left;
}
div.member_name_cut_name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
  max-width: 180px;
  padding-left: 5px;
}
a.navigationTop {
  color: rgb(227, 202, 202);
}
</style>