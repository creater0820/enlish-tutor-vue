<template>
  <div class="parent">
    <common-header></common-header>
    <div class="create_content">
      <div class="side">
        <common-side-menu></common-side-menu>
      </div>

      <div class="search_results_wrapper">
        <p>検索結果を表示</p>
        <template v-for="(value,index) in searchResults">
          <div class="search_results" :key="index">
            <search-result-card :value="value" />
          </div>
        </template>
      </div>
    </div>

    <common-footer></common-footer>
  </div>
</template>
<script>
import CommonHeader from "@/components/Common/Header";
import CommonSideMenu from "@/components/Common/SideMenu";
import CommonFooter from "@/components/Common/Footer";
import SearchResultCard from "@/components/Common/SearchResultCard";

import axios from "axios";

export default {
  components: {
    CommonHeader,
    CommonSideMenu,
    CommonFooter,
    SearchResultCard,
  },
  created: function() {
    this.getSearchResults();
  },
  data() {
    return {
      searchResults: []
    };
  },
  computed: {
    price() {
      return this.value.amount.toLocaleString();
    }
  },
  methods: {
    getSearchResults() {
      let params = {
        from_member_id: this.$store.state.memberId,
        tag_id: [this.$route.params.id]
      };
      axios
        .get("http://127.0.0.1:8001/api/getsearchresults", { params: params })
        .then(this.showSearchResults)
        .catch(this.errors);
    },
    showSearchResults(response) {
      window.console.log(response.data.search_results);
      this.searchResults = response.data.search_results;
    }
  }
};
</script>
<style scoped>
div.search_results {
  width: 1200px;
  background: rgb(255, 249, 253);
  margin: 30px auto;
  padding: 10px 30px 10px 30px;
  border-radius: 1px;
  box-shadow: 2px 2px 4px gray;
}
div.side {
  float: left;
  background: rgb(162, 245, 150);
}
p.search_results_title {
  font-size: 27px;
}
a.to_plan_page {
  text-decoration: none;
  color: black;
}
a.to_plan_page:hover {
  opacity: 0.5;
  cursor: pointer;
}
a.to_plan_page:visited {
  color: black;
}
</style>