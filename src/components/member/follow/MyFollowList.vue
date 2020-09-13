
<template>
  <div>
    <div class="follow">
      <div @click="success=true" :class="[success?'lesson_active':'lesson_inactive']">フォローリスト</div>
      <div @click="success=false" :class="[!success?'lesson_active':'lesson_inactive']">フォロワーリスト</div>
    </div>
    <div class="lessonRight">
      <div class="list">
        <div v-if="success">
          <div
            v-for="(value,index) in follows"
            :key="index"
            :class="[success?'list_active':'']"
          >フォロー{{value.member.name}}さん</div>
        </div>
        <div v-if="!success">
          <div
            v-for="(value,index) in follows"
            :key="index"
            :class="[!success?'list_active':'']"
          >フォロワー{{value.member.name}}さん</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  components: {},
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