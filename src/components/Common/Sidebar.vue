<template>
  <div class="side_bar">
    <div class="reccomend_for_you">おすすめの先生</div>

    <template v-for="(value,index) in popular_members">
      <div class="common-new-teacher" :key="index">
        <common-new-teacher :value="value"></common-new-teacher>
      </div>
    </template>
  </div>
</template>

<script>
import CommonNewTeacher from "@/components/Common/NewTeacher";
import Axios from "axios";
export default {
  data() {
    return {
      popular_members: [],
      tags: []
    };
  },
  components: {
    CommonNewTeacher
  },
  props: {
    newTeacher: {
      type: Array,
      default() {
        return [];
      }
    }
  },

  watch: {
    "$store.state.memberId": function() {
      this.newTeacherShow();
    }
  },
  methods: {
    newTeacherShow() {
      let params = {
        from_member_id: this.$store.state.memberId
        // from_member_id: 3,
      };
      Axios.get("http://127.0.0.1:8001/api/member/popular/", { params: params })
        .then(this.memberControllerShow)
        .catch(this.error);
    },
    memberControllerShow(response) {
      window.console.log(response.data.reccomend_teachers);
      window.console.log(response.data.tags);
      window.console.log(response.data.value);
      this.popular_members = response.data.reccomend_teachers;
      this.tags = response.data.tags;
    }
  }
};
</script>

<style scoped>
div {
}
@media screen and (max-width: 640px) {
  div {
  }
}
@media screen and (min-width: 640px) {
  div {
    /* flex:1 */
    /* width: 30%; */
    float: right;
    width: 300px;
    margin: 15px 0;
  }
  div.side_bar {
       border-right: double 4px rgb(230, 217, 217);
       /* border-left: dotted 1px rgb(232, 228, 228); */
       height: 3000px;

  }
  div.reccomend_for_you {
 background-color: rgb(255, 247, 247);
 border-bottom: 0.1px dotted;
 

  }
}
</style>