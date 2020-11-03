<template>
  <div class="category">
    <div class="new_contract_timeline">
      <common-new-contract-timeline></common-new-contract-timeline>
    </div>

    <div class="time_line">
      <div
        v-for="(value,index) in interestedPlans"
        :key="index"
        :class="{'mr-1':isOdd(index)}"
        class="time_line_card"
      >
        <common-card :value="value"></common-card>
      </div>
    </div>
    <div class="teacher_plan">
      <div
        v-for="(value,index) in teacherPlans"
        :key="index"
        :class="{'mr-1':isOdd(index)}"
        class="time_line_card"
      >
        <common-teacher-card :value="value"></common-teacher-card>
      </div>
    </div>
  </div>
</template>

<script>
import CommonCard from "@/components/Common/Card";
import CommonTeacherCard from "@/components/Common/TeacherCard";
import CommonNewContractTimeline from "@/components/Common/NewContractTimeline";
import axios from "axios";

export default {
  components: {
    CommonCard,
    CommonTeacherCard,
    CommonNewContractTimeline
  },
  props: {
    newTeacher: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      interestedPlans: [],
      newPlans: [],
      teacherPlans: []
    };
  },
  watch: {
    "$store.state.memberId": function() {
      this.getStudentPlan();
    }
  },
  created: function() {
    this.submit();
    this.getStudentPlan();
    this.getTeacherPlan();
  },
  methods: {
    isOdd(key) {
      if (key % 2 === 0) {
        return false;
      }
      return true;
    },
    isCenter(another_key) {
      if (another_key % 3 === 2) {
        return true;
      }
      return false;
    },
    submit() {
      axios
        .get("http://127.0.0.1:8001/api/contracts/new")
        .then(this.submitSuccess)
        .catch(this.errors);
    },
    submitSuccess(response) {
      window.console.log(response.data);
      // this.newTeacher = response.data.members;
    },
    errors(e) {
      window.console.log(e);
      //   this.userErrors = e.response.data.errors
    },

    getStudentPlan() {
      let params = {
        from_member_id: this.$store.state.memberId
      };
      axios
        .get("http://127.0.0.1:8001/api/getstudentplan", { params: params })
        .then(this.card)
        .catch(this.errors);
    },
    card(response) {
      window.console.log(response.data.student_plans);
      window.console.log(response.data.tags_id);
      window.console.log(response.data);
      this.interestedPlans = response.data.student_plans;
    },
    error(e) {
      window.console.log(e);
    },

    getTeacherPlan() {
      axios
        .get("http://127.0.0.1:8001/api/getteacherplan")
        .then(this.teacherCard);
    },
    teacherCard(response) {
      window.console.log(response.data.teacher_plans);
      this.teacherPlans = response.data.teacher_plans;
    }
  }
};
</script>

<style scoped>
div.what {
  color: rgb(28, 61, 249);
  font-size: 15px;
  background: rgb(235, 243, 250);
  clear: both;
}
div.recruit_teacher_left {
  font-size: 15px;
  float: left;
  color: #1b262c;
}
div.recruit_teacher_right {
  font-size: 13px;
  color: #1b262c;
  float: right;
}
div.recruit_teacher_wrapper {
  width: 892px;
  overflow: hidden;
  /* background-color: #edf6fc; */
  /* border-bottom: 1px solid #3282b8; */
}

div.education_materials {
  float: left;
}
div.new_contract_timeline {
  padding-left: 70px;
}
div.side_scroll {
  float: left;
  margin-bottom: 15px;
}
div.card_container {
  float: left;
}
div.ranking {
  float: left;
}
@media screen and (max-width: 640px) {
}
@media screen and (min-width: 640px) {
  div.category {
    float: left;
    width: 940px;
    padding: 2px;
  }
  div.time_line {
    overflow: hidden;
    width: 1000px;
    margin-top: 10px;
  }
  div.time_line_card {
    width: 440px;
    float: left;
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 15px;
  }
  .mr-1 {
    /* margin-right: 15px; */
  }
  .mr-2 {
    margin: 0 27px;
  }
  div.teacher_plan {
    margin-top: 50px;
    width: 950px;
  }
}
</style>