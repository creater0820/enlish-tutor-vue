
<template>
  <div class="followPage">
    <common-header></common-header>
    <navigation-bar></navigation-bar>

    <div class="followPage">
      <div class="followLeft">
        <common-side-menu></common-side-menu>
      </div>

      <my-lesson-list></my-lesson-list>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from "@/components/Common/Header";
import CommonFooter from "@/components/Common/Footer";
import MyLessonList from "@/components/member/lesson/MyLessonList";
import NavigationBar from "@/components/Common/NavigationBar";

import CommonSideMenu from "@/components/Common/SideMenu";
import axios from "axios";

export default {
  data() {
    return {
      params: {
        name: "",
        email: "",
        password: ""
      },
      follows: [],
      givePlans: [],
      takePlans: [],
      success: false,
      userErrors: {}
    };
  },
  components: {
    CommonHeader,
    CommonFooter,
    MyLessonList,
    CommonSideMenu,
    NavigationBar
  },
  created: function() {
    this.submit();
    this.submitPlan();
  },
  methods: {
    submit() {
      window.console.log(this.params);
      axios
        .get("http://127.0.0.1:8001/api/follows")
        .then(this.submitSuccess)
        .catch(this.errors);
    },
    submitSuccess(response) {
      this.success = true;
      this.follows = response.data.follows;
      window.console.log(response.data.follows);
    },
    errors(e) {
      window.console.log(e.response.data.errors.name);
    },

    submitPlan() {
      axios
        .get(
          "http://127.0.0.1:8001/api/plan/lesson/" + this.$store.state.memberId
        )
        .then(this.planControllerGetLessons)
        .catch(this.errors);
    },
    planControllerGetLessons(response) {
      window.console.log(response.data);
      this.givePlans = response.data.give_plans;
      this.takePlans = response.data.take_plans;
    },
    error(e) {
      window.console.log(e.response.data.errors.name);
    }
  }
};
</script>


<style>
body {
  margin: 0;
}
div.lesson_active {
  /* text-align: center; */
  background: linear-gradient(rgb(200, 206, 250), rgb(187, 228, 255));
  border-radius: 3px 3px 0 0;
}
div.lesson_inactive {
  background: linear-gradient(rgb(229, 230, 244), rgb(239, 246, 250));
  border-radius: 3px 3px 0 0;
  padding: 0;
  cursor: pointer;
}
div.lesson_inactive:hover {
  opacity: 0.6;
}

div.lessonRight {
  width: 800px;
  margin: 0 auto;
  float: left;
  /* background: linear-gradient(rgb(154, 164, 245), rgb(202, 222, 235)); */
  background: rgb(213, 235, 250);
  min-height: 600px;
  /* cursor: pointer; */
}
div.list_active {
  /* background: linear-gradient(rgb(154, 164, 245), rgb(202, 222, 235)); */
  /* width: 800px; */
  /* text-align: center; */
}

@media screen and (max-width: 640px) {
}
@media screen and (min-width: 640px) {
}
</style>