<template>
  <div class="category">
    <div class="new_contract_timeline">
      <common-new-contract-timeline></common-new-contract-timeline>
    </div>
    <div class="side_scroll">
      <common-side-scroll></common-side-scroll>
    </div>

     
    <div class="recruit_teacher_wrapper">
      <div class="recruit_teacher_left">先生を募集中
      </div>
      <div class="recruit_teacher_right">新着案件をさらに表示する</div>
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

    
    
   

    <div class="ranking" :class="{'mr-2':isCenter(n)}" v-for="n of 9" :key="'ranking_'+n">
      <common-teacher-ranking></common-teacher-ranking>
    </div>
    <div
      class="education_materials"
      :class="{'mr-2':isCenter(n)}"
      v-for="n of 6"
      :key="'education_'+n"
    >
      <common-education-materials></common-education-materials>
    </div>
  </div>
</template>

<script>
import CommonCard from "@/components/Common/Card";
import CommonNewContractTimeline from "@/components/Common/NewContractTimeline";
import CommonTeacherRanking from "@/components/Common/TeacherRanking";
import CommonEducationMaterials from "@/components/Common/EducationMaterials";
import CommonSideScroll from "@/components/Common/SideScroll";
import axios from "axios";

export default {
  components: {
    CommonCard,
    CommonNewContractTimeline,
    CommonTeacherRanking,
    CommonEducationMaterials,
    CommonSideScroll
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
      interestedPlans:[],
      newPlans: []
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
      // window.console.log(response.data.tagsId);
      this.interestedPlans = response.data.student_plans;
    },
    error(e) {
      window.console.log(e);
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
  color: rgb(28, 61, 249);
  font-size: 15px;
  float: left;
}
div.recruit_teacher_right {
  color: rgb(28, 61, 249);
  font-size: 13px;
  color: rgb(39, 31, 60);
  float: right;
}
div.recruit_teacher_wrapper {
  width: 810px;
  overflow: hidden;
  background: rgb(235, 243, 250);
}

div.education_materials {
  float: left;
}
div.new_contract_timeline {
  float: left;
  margin-bottom: 15px;
}
div.side_scroll {
  float: left;
  margin-bottom: 15px;
}
div.card_container {
  float: left;
  /* margin-bottom:20px; */
}
div.ranking {
  float: left;
}
@media screen and (max-width: 640px) {
  div.category {
    border: 1px solid black;
    /* padding:10px; */
  }
}
@media screen and (min-width: 640px) {
  div.category {
    /* flex: 3; */
    float: left;
    width: 821px;
    margin: 15px 0;
  }
  div.time_line {
    overflow: hidden;
  }
  div.time_line_card {
    width: 400px;
    float: left;
    margin-right: 10px;
  }
  .mr-1 {
    /* margin-right: 15px; */
  }
  .mr-2 {
    margin: 0 27px;
  }
}
</style>