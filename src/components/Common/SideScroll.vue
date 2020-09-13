<template>
  <div class="sideScroll">
    
    <carousel :data="image" :autoplay="true" :autoplayTimeout="Number(15000)" :loop="true">
      <slide v-for="(value,index) in image" :key="index">
        <div><img :src="value"></div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import axios from "axios";
import { Carousel, Slide } from "vue-carousel";
export default {
  data() {
    return {
      image: [],
    };
  },
  components: {
    Carousel,
    Slide,
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
        .catch(this.planErrors);
    },
    newPlan(response) {
      this.contract = response.data.newPlans;
      // 画像
      this.image = response.data.image;

      // this.plan = response.data.newPlans[0].title;
      // this.differenceTimeMinutes = response.data.differenceTime;
      // this.differenceTimeHours = Math.round(response.data.differenceTime / 60);
      // this.memberName = response.data.memberName[0].member_name[0].name;
      // this.memberName = response.data.memberName;
      // window.console.log(response.data.newPlans);
      // window.console.log(response.data.carbon);
      // window.console.log(response.data.image);
      // window.console.log(response.data.differenceTime);
      // window.console.log(this.differenceTimeHours);
      // window.console.log(response.data.memberName);
    },
    planErrors(plan) {
      window.console.log(plan);
    }
  }

};

</script>

<style scoped>
img{
  max-width: 400px;
}
div.sideScroll {
  /* background-color: rgb(205, 229, 244); */
  margin-bottom: 30px;
}
@media screen and (max-width: 640px) {
  div {
  }
}
@media screen and (min-width: 640px) {
  div.sideScroll {
    width: 819px;

  }
}
</style>
