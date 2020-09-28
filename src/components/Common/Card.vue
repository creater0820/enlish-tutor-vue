<template>
  <div class="card">
    <div class="card_title_wrapper">
      <span class="new"> 先生を募集中</span>
      <span class="hours" v-if="value.diff_in_minutes>=60">{{time}}</span>
      <span class="minutes" v-else>{{time}}</span>
    </div>

    <br />

    <div class="profile_wrapper">
      <div class="name">
        <a :href="'http://localhost:8080/member/profile/'+value.member_id +'?params=top'">
          <img :src="'http://127.0.0.1:8001'+value.member.icon" alt class="icon" />
        </a>
        <span class="member_name">{{value.member.name}}さん</span>
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
        Number(this.value.diff_in_minutes) <= 4320
      ) {
        return "New! "+"["+Math.floor(this.value.diff_in_minutes / 1440) + "日前]";
      }
      if (
        Number(this.value.diff_in_minutes) >= 4320 &&
        Number(this.value.diff_in_minutes) <= 43200
      ) {
        return Math.floor(this.value.diff_in_minutes / 1440) + "日前";
      }
      if (
        Number(this.value.diff_in_minutes) < 60 &&
        Number(this.value.diff_in_minutes) > 0
      ) {
        return "New! " + "["+Math.floor(this.value.diff_in_minutes) + "分前]";
      }
      if (Number(this.value.diff_in_minutes) === 0) {
        return "New! [たった今]";
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
      return "New! "+"["+Math.floor(this.value.diff_in_minutes / 60) + "時間前]";
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
  background: #f5fafe;
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
span.member_name {
  color: #1b262c;
}

@media screen and (max-width: 640px) {

}
@media screen and (min-width: 640px) {
  div.card {
    /* width: 350px; */
    box-shadow: 0 3px 3px 0 rgb(144, 159, 182);
    overflow: hidden;
    border-radius: 1px;
    background: #f9fcfe;
  }
  div.card_title_wrapper {
    background: #0f4c75;
    border-bottom: 1px solid #4db7fe;
    border-top: 1px solid #1b262c;
    padding: 5px;
  }
  span.hours {
    font-size: 10px;
    color: #f0f7fc;
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
    max-width: 310px;
    margin-top: 5px;
    font-size: 20px;
    padding: 5px;
    float: left;
  }
  div.amount {
    font-size: 16px;
    margin: 5px 0;
    padding: 5px;
    color: #3282b8;
  }
  span.new {
    font-size: 0.8em;
    color: #f0f7fc;
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
    font-size: 13px;
    padding-left: 2px;
    padding-top: 2px;
    color: #1b262c;
  }

  a.to_plan_page:hover {
    cursor: pointer;
    opacity: 0.5;
  }
  a.to_plan_page:visited {
    color: #0f4c75;
  }
  a.to_plan_page {
    color: #0f4c75;
    font-size: 20px;
  }

  a.tag_style:hover {
    cursor: pointer;
    opacity: 0.5;
  }
  a.tag_style:visited {
    color: #0f4c75;
  }
  a.tag_style {
    color: #0f4c75;
    background: #d7efff;
    padding: 3px;
    font-size: 12px;
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