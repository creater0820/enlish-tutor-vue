<template>
  <div class="newTimeLine">
    <carousel :autoplay="true" :loop="true" :autoplayTimeout="Number(4000)" :perPage="Number(1)">
      <slide v-for="(value,index) in contract" :key="index">
        <!-- オブジェクトが空かどうかの判定(Js唯一の方法)object.keysでキーの数を数えてる -->
        <div
          class="example-slide"
          v-if="Object.keys(value.member).length && Object.keys(value.plan).length"
        >
          おめでとうございます！
          <br />
          <span class="timeline_member_name">
            <a :href="'http://localhost:8080/member/profile/'+value.member.id">
              <img class="time_line_icon" :src="'http://127.0.0.1:8001'+value.member.icon" />
              {{value.member.name}}
            </a>
          </span>さんの
          <span class="member_plan">{{value.plan.title}}</span>が契約されました
          <br />
          <div
            class="hours"
            v-if="value.diff_in_minutes>=60"
          >{{Math.floor(value.diff_in_minutes/60)}}時間前</div>
          <div class="minutes" v-else>{{value.diff_in_minutes}}分前</div>
        </div>
      </slide>
    </carousel>
    <div>
      <img src="this.image" alt />
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import axios from "axios";
export default {
  data() {
    return {
      //配列にしておく、型を合わせる
      minutes: false,
      contract: [],
      difference: "",
      differenceTimeHours: "",
      number: 3,
      plan: "",
      icon: ""
    };
  },
  components: {
    Carousel,
    Slide
  },
  created: function() {
    this.newPlans();
  },
  methods: {
    newPlans() {
      let params = {
        from_at: "2020-07-24 00:00:00",
        created_at: "2020-07-31 00:00:00"
      };
      axios
        .get("http://127.0.0.1:8001/api/plan", { params: params })
        .then(this.newPlan)
        .catch(this.error);
    },
    newPlan(response) {
      this.contract = response.data.newPlans;
      // 画像
      this.icon = response.data.icon;

      // this.plan = response.data.newPlans[0].title;
      // this.differenceTimeMinutes = response.data.differenceTime;
      // this.differenceTimeHours = Math.round(response.data.differenceTime / 60);
      // this.memberName = response.data.memberName[0].timeline_member_name[0].name;
      // this.memberName = response.data.memberName;
      window.console.log(response.data.newPlans);
      // window.console.log(response.data.icon);
      // window.console.log(response.data.carbon);
      // window.console.log(response.data.image);
      // window.console.log(response.data.differenceTime);
      // window.console.log(this.differenceTimeHours);
      // window.console.log(response.data.memberName);
    },
    error(e) {
      window.console.log(e);
    }
  }
};
</script>
<style>
div.VueCarousel-pagination {
  display: none;
}
</style>
<style scoped>
a{
  text-decoration: none;
}
img.time_line_icon {
  width: 20px;
}
div.hours {
  color: rgb(39, 92, 92);
  font-size: 0.7em;
}
div.minutes {
  color: rgb(212, 0, 255);
}
span.timeline_member_name {
  color: rgb(101, 1, 1);
}
span.member_plan {
  color: rgb(96, 102, 151);
}
.example-slide {
  align-items: center;
}
@media screen and (max-width: 640px) {
  div {
  }
}
@media screen and (min-width: 640px) {
  div.newTimeLine {
    width: 819px;
  }
}
</style>