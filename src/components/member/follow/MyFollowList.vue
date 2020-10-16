
<template>
  <div>
    <div class="follow">
      <div
        @click="success=true"
        :class="[success?'lesson_active':'lesson_inactive']"
      >フォローリスト({{follows.length}})</div>
      <div
        @click="success=false"
        :class="[!success?'lesson_active':'lesson_inactive']"
      >フォロワーリスト({{followers.length}})</div>
    </div>
    <div class="myFollowRight">
      <div class="list">
        <div v-if="success">
          <template v-for="(value,index) in follows" :class="[success?'list_active':'']">
            <div class="follow_wrapper" :key="index">
              <div class="icon">
                <img :src="'http://127.0.0.1:8001'+value.member.icon" class="icon" />
              </div>
              <div class="name">
                <a
                  :href="'http://localhost:8080/member/profile/'+value.member.id"
                  class="to_profile"
                >{{value.member.name}}</a>
              </div>
              <div class="follow_button">
                <follow-button-in-list :value="value"></follow-button-in-list>
              </div>
            </div>
          </template>
        </div>
        <div v-if="!success">
          <template v-for="(value,index) in followers" :class="[success?'list_active':'']">
            <div class="follow_wrapper" :key="index">
              <div class="icon">
                <img :src="'http://127.0.0.1:8001'+value.member_follow.icon" class="icon" />
              </div>
              <div class="name">
                <a
                  :href="'http://localhost:8080/member/profile/'+value.member_follow.id"
                  class="to_profile"
                >{{value.member_follow.name}}</a>
              </div>
              <div class="button"></div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FollowButtonInList from "@/components/member/follow/FollowButtonInList";
export default {
  data() {
    return {
      params: {
        name: "",
        email: "",
        password: "",
        memberId: this.$route.params.id
      },
      follows: [],
      followers: [],
      givePlans: [],
      takePlans: [],
      success: false,
      deleteSuccess: true,
      userErrors: {}
    };
  },
  components: {
    FollowButtonInList
  },
  created: function() {
    this.submit();
    this.submitPlan();
  },
  methods: {
    submit() {
      window.console.log(this.params);
      axios
        .get("http://127.0.0.1:8001/api/getfollow", { params: this.params })
        .then(this.submitSuccess)
        .catch(this.errors);
    },
    submitSuccess(response) {
      this.success = true;
      this.follows = response.data.follows;
      this.followers = response.data.followers;
      window.console.log(response.data.follows);
      window.console.log(response.data.followers);
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


<style scoped>
body {
  margin: 0;
}
div.lesson_active {
  /* background: #d6e0f0; */
  border-radius: 3px 3px 0 0;
}
div.lesson_inactive {
  background: #f1f3f8;
  border-radius: 3px 3px 0 0;
  cursor: pointer;
}
div.lesson_inactive:hover {
  opacity: 0.6;
}

div.myFollowRight {
  width: 800px;
  margin: 0 auto;
  float: left;
  min-height: 600px;
}

div.follow_wrapper {
  overflow: hidden;
  border-bottom: 1px solid gray;
}
div.icon {
  float: left;
  padding: 16px 10px 10px 10px;
}
img.icon {
  width: 30px;
  height: 30px;
  border-radius: 15px;
}
div.name {
  float: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 200px;
  padding: 19px 10px 10px 10px;
}
div.button {
  float: right;
  padding: 19px 10px 10px 10px;
}
a.to_profile {
  color: #0f4c75;
  text-decoration: none;
}
a.to_profile:hover {
  color: #0f4c75;
  cursor: pointer;
  opacity: 0.5;
}
a.to_profile:visited {
  color: #0f4c75;
}
div.follow_button {
  float: right;
  padding: 20px;
}

@media screen and (max-width: 640px) {
}
@media screen and (min-width: 640px) {
}
</style>