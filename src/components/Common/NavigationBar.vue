<template>
  <div class="navigationBar">
    <div
      class="navigationMenu"
      v-if=" 'http://localhost:8080'+$route.path === 'http://localhost:8080/member/profile/'+$store.state.memberId"
    >
      <a href="http://localhost:8080">TOP</a> > マイページ
    </div>

    <div class="navigationMenu" v-if=" Number($store.state.memberId) !==Number($route.params.id)">
        <div class="member_name_cut_navigation">
      <a href="http://localhost:8080">TOP</a>
      ></div>
      <div class="member_name_cut_name">{{memberName}}</div>さんのプロフィール
    </div>

    <div
      class="navigationMenu"
      v-if=" 'http://localhost:8080'+$route.path === 'http://localhost:8080/member/message/list/'+$store.state.memberId"
    >
      <a href="http://localhost:8080">TOP</a> > メッセージ
    </div>

    <div
      class="navigationMenu"
      v-if=" 'http://localhost:8080'+$route.path === 'http://localhost:8080/member/lesson/'+$store.state.memberId"
    >
      <a href="http://localhost:8080">TOP</a> > レッスン一覧
    </div>
    <div
      class="navigationMenu"
      v-if=" 'http://localhost:8080'+$route.path === 'http://localhost:8080/member/follows/'+$store.state.memberId"
    >
      <a href="http://localhost:8080">TOP</a> > フォロー
    </div>
    <div
      class="navigationMenu"
      v-if=" 'http://localhost:8080'+$route.path === 'http://localhost:8080/member/createplan/'+$store.state.memberId"
    >
      <a href="http://localhost:8080">TOP</a> > レッスンを作成する
    </div>
    <div
      class="navigationMenu"
      v-if=" 'http://localhost:8080'+$route.path === 'http://localhost:8080/member/createstudentplan/'+$store.state.memberId"
    >
      <a href="http://localhost:8080">TOP</a> > 先生を募集する
    </div>
  </div>
</template>

    <script>
export default {
  props: {
    memberName: {
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
  background: rgb(186, 200, 249);
}
div.navigationMenu {
  padding: 3px;
  width: 1172px;
  margin: 0 auto;

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
</style>