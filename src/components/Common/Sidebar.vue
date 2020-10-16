<template>
  <div class="side_bar">
    <div class="advertisement">
      <a href>
        <img src="@/assets/image/adsample.jpg" alt class="ad1" />
      </a>
    </div>
    <div class="wrapper">
      <div class="reccomend_for_you">おすすめの先生</div>
      <template v-for="(value,index) in popular_members">
        <div class="common_new_teacher" :key="index">
          <common-new-teacher :value="value"></common-new-teacher>
        </div>
      </template>
    </div>
    <div class="advertisement2">
      <a href>
        <img src="@/assets/image/ad2.jpg" alt class="ad1" />
      </a>
    </div>
    <div class="advertisement2">
      <a href>
        <img src="@/assets/image/ad3.jpg" alt class="ad1" />
      </a>
    </div>
  </div>
</template>

<script>
import CommonNewTeacher from "@/components/Common/NewTeacher";
import axios from "axios";
export default {
  data() {
    return {
      review_star: [],
      amount: [],
      popular_members: [],
      tags: [],
      star: []
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
  created: function() {
    // this.getStarAmount();
  },
  mounted: function() {
    this.newTeacherShow();
  },
  watch: {
    "$store.state.memberId": function() {
      this.newTeacherShow();
    }
  },
  methods: {
    newTeacherShow() {
      let params = {
        from_member_id: this.$store.state.memberId || 0
      };
      axios
        .get("http://127.0.0.1:8001/api/member/popular/", { params: params })
        .then(this.memberControllerShow)
        .catch(this.error);
    },
    memberControllerShow(response) {
      window.console.log(response.data.reccomend_teachers);
      window.console.log(response.data.tags);
      window.console.log(response.data.value);
      // window.console.log(response.data.reccomend_teacher);
      this.popular_members = response.data.reccomend_teachers;
      this.tags = response.data.tags;
      this.review_star = response.data.review_star;
    },
    getStarAmount() {
      let params = {
        from_member_id: this.$store.state.memberId
      };
      axios
        .get("http://127.0.0.1:8001/api/getreview", { params: params })
        .then(this.starShow)
        .catch(this.error);
    },
    starShow(response) {
      window.console.log(response.data.starAmount);
      this.star = response.data.starAmount;
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
  div.wrapper {
    height: 583px;
    margin-top: 20px;
    background: white;
  }
  div.side_bar {
    min-height: 1281px;
    margin-top: 25px;
    float: left;
  }
  div.reccomend_for_you {
    font-size: 15px;
    color: #393b44;
    padding-left: 24px;
    padding-bottom: 2px;
    border-bottom: solid 1px rgb(218, 216, 216);
  }

  div.common_new_teacher {
    height: 61px;
    position: relative;
    border-bottom: solid 1px rgb(213, 211, 211);
    /* padding-top: 11px; */
  }
  div.advertisement {
    height: 250px;
    background: white;
  }
  div.advertisement2 {
    height: 250px;
    background: white;
    margin-top: 20px;
  }
  img.ad1 {
    width: 200px;
    height: 250px;
  }
}
</style>