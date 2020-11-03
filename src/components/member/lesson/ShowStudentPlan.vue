<template>
  <div>
    <div v-for="(value,index) in plans" :key="index" class="studentPlan">
      <div v-if="Number(value.id)=== Number($route.query.params)" class="student_plan_wrapper">
        <!-- <div v-if="'top'+value.id === $route.query.params" class="student_plan_wrapper"> -->

        <div class="student_plan_wrapper_next">
          <div class="wrapper_top">
            <div class="studentPlanTitle">{{value.title}}</div>
            <div class="studentPlanContent">{{value.content}}</div>
          </div>

          <div class="wrapper_bottom">
            <div class="studentPlanAmount">¥{{price}}</div>
          </div>
        </div>

        <!-- <div v-if="planTags.student_plan_tags == false">プランはまだ登録されていません</div> -->
        <template v-for="(values,indexs) in planTags.student_plan_tags">
          <div :key="indexs" class="student_plan_content">{{values}}</div>
        </template>
      </div>
    </div>
  </div>
</template>

    <script>
import axios from "axios";
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

      axios
        .get("http://127.0.0.1:8001/api/studentplan", { params: params })
        .then(this.studentPlanControllerShow)
        .catch(this.error);
    },
    studentPlanControllerShow(response) {
      // todoタグを表示したいができない
      window.console.log(response.data.plan);
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
  /* width: 800px; */
  background: #fafdfe;
}
div.student_plan_content {
  /* width: 800px; */
  background: #cdedff;
}
div.studentPlanTitle {
  border-bottom: 1px solid #bbe1fa;
  color: #3282b8;
  padding-left: 15px;
  float: left;
}
div.studentPlanAmount {
  font-size: 18px;
  padding-left: 15px;
  color: #3282b8;
  float: left;
}
div.studentPlanContent {
  font-size: 16px;
  padding-left: 15px;
  color: #1b262c;
  float: left;
}
div.student_plan_wrapper_next {
  box-shadow: 2px 2px 3px rgb(144, 159, 182);
  overflow: hidden;
  border-radius: 1px;
  background: #f9fcfe;
  margin-bottom: 10px;
}
div.wrapper_bottom {
  overflow: hidden;
}
div.wrapper_top {
  overflow: hidden;
}
div.contract {
  float: left;
  width: 200px;
  margin-left: 195px;
}
</style>