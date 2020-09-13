<template>
  <div>
    <div v-for="(value,index) in student_plan" :key="index">
      <div class="student_plan_wrapper">
        <div>生徒募集中</div>
        <div>タイトル:{{value.title}}</div>
        <div>金額:{{value.amount}}</div>
        <div>内容:{{value.content}}</div>
      </div>
    </div>
  </div>
</template>

    <script>
import Axios from "axios";
export default {
  data() {
    return {
      student_plan: ""
    };
  },
  created: function() {
    this.showStudentPlan();
  },
  methods: {
    showStudentPlan() {
      let params = {
        from_member_id: this.$store.state.memberId,
        to_member_id: this.$route.params.id
      };
      window.console.log(this.$store.state.memberId);
      window.console.log(this.$route.params.id);

      Axios.get("http://127.0.0.1:8001/api/studentplan/" + { params: params })
        .then(this.studentPlanControllerShow)
        .catch(this.error);
    },
    studentPlanControllerShow(response) {
      window.console.log(response.data.student_plan);
      this.student_plan = response.data.student_plan;
    }
  },
  computed: {
    price() {
      return this.student_plan.amount.toLocaleString();
    }
  }
};
</script>

    <style scoped>
div.student_plan_wrapper {
  width: 800px;
  background: rgb(148, 206, 242);
}
</style>