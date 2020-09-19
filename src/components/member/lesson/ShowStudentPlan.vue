<template>
  <div>
    <div v-for="(value,index) in plans" :key="index" class="studentPlan">
      <div v-if="Number(value.id)=== Number($route.query.params)" class="student_plan_wrapper">
        <!-- <div v-if="'top'+value.id === $route.query.params" class="student_plan_wrapper"> -->

        <div class="studentPlanTitle">{{value.title}}</div>
        <div class="studentPlanAmount">¥{{price}}</div>
        <div class="studentPlanContent">{{value.content}}</div>
        <template v-for="(values,indexs) in planTags.student_plan_tags">
          <div :key="indexs">{{values}}</div>
        </template>
      </div>
    </div>
  </div>
</template>

    <script>
import Axios from "axios";
export default {
  data() {
    return {
      planTags: [],
      plans: ""
    };
  },
  created: function() {
    this.showStudentPlan();
  },
  methods: {
    showStudentPlan() {
      let params = {
        from_member_id: this.$store.state.memberId,
        to_member_id: this.$route.params.id,
        plan_id: this.$route.query.params
      };
      window.console.log(this.$store.state.memberId);
      window.console.log(this.$route.params.id);

      Axios.get("http://127.0.0.1:8001/api/studentplan", { params: params })
        .then(this.studentPlanControllerShow)
        .catch(this.error);
    },
    studentPlanControllerShow(response) {
      // todoタグを表示したいができない
      window.console.log(response.data.student_plans);
      // this.student_plan = response.data.student_plan;
      this.plans = response.data.plan;
      this.planTags = response.data.student_plans;
    }
  },
  computed: {
    price() {
      return this.plans[0].amount.toLocaleString();
    }
  }
};
</script>

<style scoped>
div.student_plan_wrapper {
  width: 800px;
  background: rgb(255, 240, 240); 


}
div.studentPlanTitle {
  font-size: 30px;
  padding: 20px;
  margin: 0 0 5px 0;
}
div.studentPlanAmount {
  font-size: 18px;
  padding: 22px;
  margin: 5px 0;
}
div.studentPlanContent {
  font-size: 18px;
  padding: 20px;
  margin: 5px 0;
}

</style>