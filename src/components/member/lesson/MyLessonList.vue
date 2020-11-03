
<template>
  <div>
    <div class="follow">
      <div @click="success=true" :class="[success?'lesson_active':'lesson_inactive']">受講中プラン</div>
      <div @click="success=false" :class="[!success?'lesson_active':'lesson_inactive']">指導中プラン</div>
    </div>
    <div class="myFollowRight">
      <div class="list">
        <div v-if="success">
          <template v-for="(value,index) in takePlans" :class="[success?'list_active':'']">
            <div class="follow_wrapper" :key="index">
              <div class="name">
                <a
                  :href="'http://localhost:8080/member/planstudent/'+value.member_id+'?params='+value.id"
                  class="to_profile"
                >{{value.title}}</a>
              </div>
              <div class="date">契約日/{{value.created_at | moment}}</div>
            </div>
          </template>
        </div>
        <div v-if="!success">
          <template v-for="(value,index) in teachPlans" :class="[success?'list_active':'']">
            <div class="follow_wrapper" :key="index">
              <div class="name">
                <a
                  :href="'http://localhost:8080/member/planteacher/'+value.member_id+'?params='+value.id"
                  class="to_profile"
                >{{value.title}}</a>
              </div>
              <div class="date">契約日/{{value.created_at | moment}}</div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
export default {
  filters: {
    moment: function(date) {
      return moment(date).format("YYYY/MM/DD HH:mm");
    }
  },
  data() {
    return {
      params: {
        name: "",
        email: "",
        password: "",
        memberId: this.$route.params.id
      },
      teachPlans: [],
      takePlans: [],
      success: true,
      deleteSuccess: true,
      userErrors: {}
    };
  },
  components: {},
  created: function() {
    this.submit();
  },
  methods: {
    submit() {
      window.console.log(this.params);
      axios
        .get("http://127.0.0.1:8001/api/getcontractedplan", {
          params: this.params
        })
        .then(this.submitSuccess)
        .catch(this.errors);
    },
    submitSuccess(response) {
      window.console.log(response.data.takePlans);
      window.console.log(response.data.teachPlans);
      this.takePlans = response.data.takePlans;
      this.teachPlans = response.data.teachPlans;
    },
    errors(e) {
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
  border-radius: 3px 3px 0 0;

}
div.lesson_inactive {
  border-radius: 3px 3px 0 0;
  cursor: pointer;
    background: #f1f3f8;
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
div.date {
  padding: 15px;
  float: right;
}

@media screen and (max-width: 640px) {
}
@media screen and (min-width: 640px) {
}
</style>