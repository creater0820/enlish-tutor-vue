<template>
  <div class="card">
    <span class="new">New 教えてください</span>
    <span class="hours" v-if="value.diff_in_minutes>=60">{{Math.floor(value.diff_in_minutes/60)}}時間前</span>
    <span class="minutes" v-else>{{value.diff_in_minutes}}分前</span>
    <br />
    <div class="title">
      <a
        :href="'http://localhost:8080/member/profile/'+value.member_id +'?params='+value.id"
        class="to_plan_page"
      >{{value.title}}</a>
    </div>
    <div class="amount">予算 ¥{{price}}円</div>

    <span class="name">
      <a :href="'http://localhost:8080/member/profile/'+value.member_id +'?params=top'">
        <img :src="'http://127.0.0.1:8001'+value.member.icon" alt class="icon" />
        <span class="name">{{value.member.name}}さん</span>
      </a>
    </span>
    <p class="tag" >
    <template v-for="(tag,index) in value.student_plan_tags ">
      <span  :key="index">{{tag.tag_name}}</span>、
    </template>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    value: Object
  },
  data() {
    return {
      params: {
        title: "",
        amount: "",
        icon: "",
        name: ""
      }
    };
  },
  computed: {
    price() {
      return this.value.amount.toLocaleString();
    },
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
div.card {
  margin-bottom: 15px;
  padding: 10px;
}
img.icon {
  width: 30px;
  height:30px;
  display: block;
}
/* .card {
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: all 0.3s ease 0s;
}
.card:hover {
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25);
  transform: translateY(-0.1875em);
} */

@media screen and (max-width: 640px) {
  div {
  }
}
@media screen and (min-width: 640px) {
  div.card {
    /* width: 350px; */
    box-shadow: 0 3px 3px 0 rgb(144, 159, 182);
    background: white;
    border-radius: 1px;
  }
  span.hours {
    font-size: 10px;
    color: rgb(132, 99, 99);
    float: right;
    margin-top: 7px;
  }
  span.minutes {
    font-size: 10px;
    color: rgb(132, 99, 99);
    float: right;
    margin-top: 7px;
  }
  div.title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 400px;
    margin-top: 5px;
    font-size: 18px;
  }
  div.amount {
    font-size: 16px;
    margin: 5px 0;
    color: rgb(96, 96, 103);
  }
  span.new {
    font-size: 0.8em;
    color: rgb(239, 146, 146);
  }
  span.name {
    font-size: 0.8em;
  }
 

  a.to_plan_page:hover {
    cursor: pointer;
    opacity: 0.5;
  }
  a.to_plan_page:visited {
  color: black;
  }
  p.tag{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>