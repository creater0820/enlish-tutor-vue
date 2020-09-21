<template>
  <div class="card">
    <div class="card_title_wrapper">
      <span class="new">New [教えてください]</span>
      <span
        class="hours"
        v-if="value.diff_in_minutes>=60"
      >[{{time}}]</span>
      <span class="minutes" v-else>{{time}}</span>
    </div>

    <br />

    <div class="profile_wrapper">
      <div class="name">
        <a :href="'http://localhost:8080/member/profile/'+value.member_id +'?params=top'">
          <img :src="'http://127.0.0.1:8001'+value.member.icon" alt class="icon" />
        </a>
        <span>{{value.member.name}}さん</span>
      </div>
      <div class="title">
        <a
          :href="'http://localhost:8080/member/profile/'+value.member_id +'?params='+value.id"
          class="to_plan_page"
        >{{value.title}}</a>
        <div class="plan_content">{{value.content}}</div>
        <div class="amount">¥{{price}}円</div>
      </div>
    </div>
    <div></div>

    <div class="tag">
      <template v-for="(tags,index) in value.student_plan_tags ">
        <span :key="index" class="tag_name">
          <a
            :href="'http://localhost:8080/member/searchresults/' +tags.tag_id+'?page=1'"
            class="tag_style"
          >#{{tags.tag_name}}</a>
        </span>
      </template>
    </div>
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
    time() {
      if (
        Number(this.value.diff_in_minutes) >= 2880 &&
        Number(this.value.diff_in_minutes) <= 43200
      ) {
        return Math.floor(this.value.diff_in_minutes / 1440) + "日前";
      }
      if (
        Number(this.value.diff_in_minutes) < 60 &&
        Number(this.value.diff_in_minutes) > 0
      ) {
        return Math.floor(this.value.diff_in_minutes) + "分前";
      }
      if (Number(this.value.diff_in_minutes) === 0) {
        return "たった今";
      }
      if (
        Number(this.value.diff_in_minutes) >= 43200 &&
        Number(this.value.diff_in_minutes) <= 86400
      ) {
        return "１ヶ月前";
      }
      if (
        Number(this.value.diff_in_minutes) >= 86400 &&
        Number(this.value.diff_in_minutes) <= 129600
      ) {
        return "２ヶ月前";
      }
      if (
        Number(this.value.diff_in_minutes) >= 129600 &&
        Number(this.value.diff_in_minutes) <= 172800
      ) {
        return "３ヶ月前";
      }
      if (Number(this.value.diff_in_minutes) >= 172800) {
        return "３ヶ月以上前";
      }
      return Math.floor(this.value.diff_in_minutes / 60) + "時間前";
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
div.card {
  margin-bottom: 15px;
  margin-top: 15px;
}
img.icon {
  width: 60px;
  height: 60px;
  display: block;
  border-radius: 30px;
}
div.profile_wrapper {
  overflow: hidden;
}

@media screen and (max-width: 640px) {
  div {
  }
}
@media screen and (min-width: 640px) {
  div.card {
    /* width: 350px; */
    box-shadow: 0 3px 3px 0 rgb(144, 159, 182);
    overflow: hidden;
    border-radius: 1px;
  }
  div.card_title_wrapper {
    background: rgb(255, 248, 248);
    border-bottom: 1px dotted black;
    padding: 5px;
  }
  span.hours {
    font-size: 10px;
    color: rgb(35, 30, 30);
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
    font-size: 20px;
    padding: 5px;
    float: left;
  }
  div.amount {
    font-size: 16px;
    margin: 5px 0;
    padding: 5px;
  }
  span.new {
    font-size: 0.8em;
    color: rgb(255, 121, 123);
  }
  div.name {
    font-size: 0.8em;
    padding: 5px;
    border-radius: 3px;
    float: left;
  }
  div.plan_content {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 285px;
    font-size: 14px;
  }

  a.to_plan_page:hover {
    cursor: pointer;
    opacity: 0.5;
  }
  a.to_plan_page:visited {
    color: rgb(28, 10, 9);
  }
  a.to_plan_page {
    color: rgb(28, 10, 9);
    font-size: 20px;
  }

  a.tag_style:hover {
    cursor: pointer;
    opacity: 0.5;
  }
  a.tag_style:visited {
    color: rgb(121, 91, 91);
  }
  a.tag_style {
    color: rgb(121, 91, 91);
  }
  div.tag {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    padding: 5px 0 7px 7px;
  }
  span.tag_name {
    padding-right: 7px;
  }
}
</style>