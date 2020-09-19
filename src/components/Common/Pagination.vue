  <template>
  <div v-if="plan" class="paginationWrapper">
    <div>全{{plan.total}}件</div>
    <div class="pagination" v-if="Number($route.query.page) === 1 ">1〜{{plan.to}}件を表示</div>
    <div
      class="pagination"
      v-if="Number($route.query.page) !== 1"
    >{{Number(current)+1}}〜{{plan.to}}件を表示</div>
    <span>
      <a
        v-if="Number(plan.current_page) !== 1"
        :href="planUrl+$route.params.id+'?page='+(Number(plan.current_page)-1)"
        class="paginationNumber"
      >Prev</a>
    </span>
    <template v-for="n in plan.last_page">
      <a
        :href="planUrl+$route.params.id+'?page='+n"
        :key="n"
        :class="[Number($route.query.page) === n?'paginationNumberActive ':'paginationNumber']"
      >{{n}}</a>
    </template>
    <span>
      <a
        v-if="Number(plan.current_page) !== Number(plan.last_page)"
        :href="planUrl+$route.params.id+'?page='+(Number(paginatedPlan.current_page)+1)"
        class="paginationNumber"
      >Next</a>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    planUrl: String,
    plan: Object
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
        Number(this.plan.per_page) *
        (Number(this.plan.current_page) - 1)
      );
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
