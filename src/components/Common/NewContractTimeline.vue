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
          <div class="time_line_wrapper">
            <div class="img_wrapper">
              <img class="time_line_icon" :src="'http://127.0.0.1:8001'+value.member.icon" />
            </div>
            <div class="name_wrapper">
              <span class="timeline_member_name">
                <a
                  :href="'http://localhost:8080/member/profile/'+value.member.id"
                >{{value.member.name}}</a>
              </span>さんの
              <a class="member_plan" href>{{value.plan.title}}</a>が契約されました
            </div>
          </div>
          <div class="hours">{{time(value)}}</div>
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
  computed: {},
  created: function() {
    this.newPlans();
  },
  methods: {
    time(value) {
      if (
        Number(value.diff_in_minutes) >= 2880 &&
        Number(value.diff_in_minutes) <= 43200
      ) {
        return Math.floor(value.diff_in_minutes / 1440) + "日前";
      }
      if (
        Number(value.diff_in_minutes) < 60 &&
        Number(value.diff_in_minutes) > 0
      ) {
        return Math.floor(value.diff_in_minutes) + "分前";
      }
      if (Number(value.diff_in_minutes) === 0) {
        return "たった今";
      }
      if (
        Number(value.diff_in_minutes) >= 43200 &&
        Number(value.diff_in_minutes) <= 86400
      ) {
        return "１ヶ月前";
      }
      if (
        Number(value.diff_in_minutes) >= 86400 &&
        Number(value.diff_in_minutes) <= 129600
      ) {
        return "２ヶ月前";
      }
      if (
        Number(value.diff_in_minutes) >= 129600 &&
        Number(value.diff_in_minutes) <= 172800
      ) {
        return "３ヶ月前";
      }
      if (Number(value.diff_in_minutes) >= 172800) {
        return "３ヶ月以上前";
      }
      return Math.floor(value.diff_in_minutes / 60) + "時間前";
    },
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
      this.icon = response.data.icon;
      window.console.log(response.data.newPlans);
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
a {
  text-decoration: none;
}
img.time_line_icon {
  width: 30px;
  height: 30px;
  border-radius: 15px;
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
div.time_line_wrapper {
  overflow: hidden;
}
div.img_wrapper {
  float: left;
  margin-right: 10px;
}
div.name_wrapper {
  float: left;
  padding-top: 3px;
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