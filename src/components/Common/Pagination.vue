  
  <template>
  <div class="paginationWrapper">
    <div>全{{paginatedPlan.total}}件</div>
    <div class="pagination" v-if="Number($route.query.page) === 1 ">1〜{{paginatedPlan.to}}件を表示</div>
    <div
      class="pagination"
      v-if="Number($route.query.page) !== 1"
    >{{Number(current)+1}}〜{{paginatedPlan.to}}件を表示</div>

    <span>
        <a 
    v-if="Number(paginatedPlan.current_page) !== 1"
       :href="'http://localhost:8080/member/searchresults/3?page='+(Number(paginatedPlan.current_page)-1)"
        class="paginationNumber"
    >
        Prev
        </a>
        </span>
    <template v-for="n in paginatedPlan.last_page">
      <a
     
        :href="'http://localhost:8080/member/searchresults/3?page='+n"
        :key="n"
        :class="[Number($route.query.page) === n?'paginationNumberActive ':'paginationNumber']"
      >{{n}}</a>
    </template>
    <span><a 
    v-if="Number(paginatedPlan.current_page) !== Number(paginatedPlan.last_page)"
       :href="'http://localhost:8080/member/searchresults/3?page='+(Number(paginatedPlan.current_page)+1)"
  class="paginationNumber"
    >Next</a></span>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {},

  created: function() {
    this.getNextPage();
  },
  data() {
    return {
      currentPage: "1",
      paginatedPlan: []
    };
  },
  computed: {
 
    current() {
      return (
        Number(this.paginatedPlan.per_page) *
        (Number(this.paginatedPlan.current_page) - 1)
      );
    },
  
  },
  methods: {
    getNextPage() {
      let params = {
        current_page: this.$route.query.page ?? 1,
        from_member_id: this.$store.state.memberId,
        tag_id: [this.$route.params.id]
      };
      axios
        .get("http://127.0.0.1:8001/api/getsearchresults", { params: params })
        .then(this.searchResults)
        .catch(this.errors);
    },
    searchResults(response) {
      window.console.log(response.data.paginated_plan.last_page);
      this.searchResults = response.data.search_results;
      this.paginatedPlan = response.data.paginated_plan;
    }
  }
};
</script>
  <style scoped>
div.paginationWrapper {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
div.pagination {
  margin-bottom: 15px;
}
a.paginationNumber {
  padding: 5px;
  text-decoration: none;
  font-size: 20px;
  border: solid 1px black;
  margin: 5px 5px;
  color: black;
}
a.paginationNumberActive {
  padding: 5px;
  text-decoration: none;
  font-size: 20px;
  border: solid 1px black;
  margin: 5px 5px;
  background: rgb(0, 0, 1);
  pointer-events: none;
  color: white;
}
a.paginationNumber:hover {
  opacity: 0.5;
  cursor: pointer;
}
a.paginationNumber:visited {
  color: black;
}
</style>
