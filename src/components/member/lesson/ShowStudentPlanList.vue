<template>
  <div>
    <template v-for="(values,indexs) in studentPlanCollections">
      <div :key="indexs" class="student_plan_content">
        <div class="wrapper_left">
          <div class="title">
            <a
              :href="'http://localhost:8080/member/planstudent/'+values.member_id +'?params='+values.id"
              class="title"
            >[ {{values.title}} ]</a>
          </div>
          <div class="content">内容{{values.content}}</div>
          <div class="amount" v-if="values.judge === 1">
            <span class="contract_span">毎月</span>
            ¥{{calculatePrice(values.amount)}}
          </div>
          <div class="amount" v-if="values.judge === 0">
            <span class="contract_span">単発</span>
            ¥{{calculatePrice(values.amount)}}
          </div>
        </div>
        <div class="wrapper_right">
          <div class="triangle_top"></div>
          <div class="triangle_bottom"></div>
          <div class="dotted_border"></div>
          <div class="contract">
            <a :href="'http://localhost:8080/member/contract/'+values.id" class="contract_page">契約する</a>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

    <script>
import axios from "axios";
export default {
  data() {
    return {
      planTags: [],
      plans: "",
      studentPlanCollections: []
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
        .get("http://127.0.0.1:8001/api/getstudentplanlist", { params: params })
        .then(this.studentPlanControllerShow)
        .catch(this.error);
    },
    studentPlanControllerShow(response) {
      // todoタグを表示したいができない
      window.console.log(response.data.student_plan);
      this.plans = response.data.plan;
      this.studentPlanCollections = response.data.student_plan;
    },
    calculatePrice($amount) {
      return $amount.toLocaleString();
    }
  },

};
</script>

<style scoped>
div.student_plan_wrapper {
  width: 630px;
  /* background: #fafdfe; */
}
div.student_plan_content {
  /* width: 800px; */
  background: #e9f7ff;
  /* border-bottom: 1px solid gray; */
  margin-bottom: 30px;
  overflow: hidden;
}
div.wrapper_left {
  float: left;
  width: 500px;
  padding: 20px;
}
div.wrapper_right {
  float: left;
  width: 90px;
  height: 145px;
  /* background: rgb(239, 215, 215); */
  position: relative;
}
div.triangle_top {
  position: absolute;
  width: 0;
  height: 0;
  border-top: 5px solid#fafdff;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;

  right: 81%;
  top: 0;
}
div.triangle_bottom {
  position: absolute;
  width: 0;
  height: 0;
  border-bottom: 5px solid #fafdff;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
  right: 81%;
  bottom: 0;
}
div.dotted_border {
  position: absolute;
  height: 133px;
  width: 4px;
  border-left: 1px dotted rgb(165, 164, 164);
  right: 86%;
  bottom: 6px;
}
a.contract_page {
  text-decoration: none;
  color: #3282b8;
}
a.contract_page:hover {
  opacity: 0.5;
  cursor: pointer;
}
a.contract_page:visited {
  color: #3282b8;
}
div.contract {
  position: absolute;
  right: -1%;
  bottom: 60px;
}
div.content {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-top: 10px;
}
span.studentPlanTitle {
  border-bottom: 1px solid #bbe1fa;
  color: #3282b8;
  padding-left: 15px;
}
span.studentPlanAmount {
  font-size: 18px;
  padding-left: 15px;
  color: #3282b8;
}
span.studentPlanContent {
  font-size: 16px;
  padding-left: 15px;
  color: #1b262c;
}
div.student_plan_wrapper_next {
  box-shadow: 2px 2px 3px rgb(144, 159, 182);
  overflow: hidden;
  border-radius: 1px;
  background: #f9fcfe;
  margin-bottom: 10px;
}
span.contract_span {
  padding-right: 10px;
  color: #0f4c75;
}
div.amount {
  color: #1b262c;
  margin-top: 20px;
}
a.title {
  text-decoration: none;
  color: #3282b8;
}
a.title:hover {
  opacity: 0.5;
  cursor: pointer;
}
a.title:visited {
  color: #3282b8;
}
</style>