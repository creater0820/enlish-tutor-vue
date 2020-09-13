<template>
  <div class="parent">
    <common-header></common-header>
    <div class="create_content">
      <div class="side">
        <common-side-menu></common-side-menu>
      </div>
      <div class="input_user_information">
        <p>検索結果を表示</p>
      </div>
    </div>
    <common-footer></common-footer>
  </div>
</template>
<script>
import CommonHeader from "@/components/Common/Header";
import CommonSideMenu from "@/components/Common/SideMenu";
import CommonFooter from "@/components/Common/Footer";
import axios from "axios";

export default {
  components: {
    CommonHeader,
    CommonSideMenu,
    CommonFooter
  },
  created: function() {
    this.getSearchResults();
  },
  data() {
    return {};
  },
  methods: {
    getSearchResults() {
      let params = {
        from_member_id: this.$store.state.memberId,
        tag_id:[this.$route.params.id] ,
      };
      axios
        .get("http://127.0.0.1:8001/api/getsearchresults", { params: params })
        .then(this.showSearchResults)
        .catch(this.errors);
    },
    showSearchResults(response) {
      window.console.log(response.data.search_results);
    }
  },
};
</script>
<style scoped>
.form_group {
  width: 700px;
  margin: 0 auto;
}
.form_group span {
  color: rgb(115, 127, 179);
}
:focus::-webkit-input-placeholder {
  color: white;
}
.c_0 {
  font-size: 1.8em;
  font: bold;
  width: 700px;
  margin: 0 auto;
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
.c_4 {
  width: 200px;
  height: 30px;
  padding: 0;
}
.c_5 {
  width: 100px;
  height: 30px;
  padding: 0;
}
div.create_content {
  /* overflow: hidden; */
}
div.input_user_information {
  /* float: left; */
  width: 100%;

  background: rgb(199, 240, 219);

  text-align: center;
}
div.side {
  float: left;
  background: rgb(162, 245, 150);
}
</style>