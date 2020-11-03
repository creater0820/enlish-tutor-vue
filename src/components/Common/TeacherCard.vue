<template>
  <div class="card">
    <div class="card_title_wrapper">
      <div class="new">生徒を募集中</div>
      <div class="hours" v-if="value.diff_in_minutes>=60">{{time}}</div>
      <div class="minutes" v-else>{{time}}</div>
      <div class="triangle"></div>
    </div>
<div class="space"></div>
    <div class="profile_wrapper">
      <div class="name">
        <a :href="'http://localhost:8080/member/profile/'+value.member_id +'?params=top'">
          <img :src="'http://127.0.0.1:8001'+value.member.icon" alt class="icon" />
        </a>
        <div class="member_name">{{value.member.name}}</div>
      </div>

      <div class="title">
        <a
          :href="'http://localhost:8080/member/planteacher/'+value.member_id +'?params='+value.id"
          class="to_plan_page"
        >{{value.title}}</a>

        <div class="plan_content">{{value.content}}</div>
        <div class="amount">
          <span class="price">¥{{price}}円</span>
        </div>
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
    <div class="triangle_bottom"></div>
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
        return (
          "New! " +
          "[" +
          Math.floor(this.value.diff_in_minutes / 1440) +
          "日前]"
        );
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
        return "New! " + "[" + Math.floor(this.value.diff_in_minutes) + "分前]";
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
      return (
        "New! " + "[" + Math.floor(this.value.diff_in_minutes / 60) + "時間前]"
      );
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}

img.icon {
  width: 40px;
  height: 40px;
  display: block;
  border-radius: 20px;
  border: 1px solid rgb(234, 233, 233);
}
div.profile_wrapper {
  overflow: hidden;
}
div.member_name {
  color: #393b44;
  padding-left: 3px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 11px;
}

@media screen and (max-width: 640px) {
}
@media screen and (min-width: 640px) {
  div.card {
    box-shadow: 1px 1px 3px  #b8babf;
    overflow: hidden;
    border-radius: 1px;
    background: white;
    position: relative;
  }
  
  div.card_title_wrapper {
    color: #393b44;
    padding: 3px;
    overflow: hidden;
  }
  div.hours {
    font-size: 10px;
    color: #393b44;
    float: right;
    padding-top: 2px;
  }
  div.minutes {
    font-size: 10px;
    color: #393b44;
    float: right;
    padding-top: 2px;
  }
  div.title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 310px;
    min-width: 300px;
    /* margin-top: 5px; */
    font-size: 20px;
    padding-left: 7px;
    float: left;
    color: #3282b8;
  }
  div.amount {
    font-size: 16px;
    margin: 5px 0;
    padding: 5px;
    color: #1b262c;
  }
  span.price {
    padding: 3px;
    color: #393b44;
  }
  div.new {
    font-size: 0.8em;
    color: #19d3da;
    float: left;
  }
  div.name {
    padding: 5px;
    float: left;
    width: 100px;
  }
  div.plan_content {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 285px;
    font-size: 13px;
    padding-left: 2px;
    padding-top: 2px;
    color: #393b44;
  }

  a.to_plan_page:hover {
    cursor: pointer;
    opacity: 0.5;
  }
  a.to_plan_page:visited {
    color: #393b44;
  }
  a.to_plan_page {
    color: #3282b8;
    font-size: 20px;
  }
  div.to_plan_page {
    color: #3282b8;
    font-size: 20px;
    width: 80px;
  }

  a.tag_style:hover {
    cursor: pointer;
    opacity: 0.5;
  }
  a.tag_style:visited {
    color: #393b44;
  }
  a.tag_style {
    color: #393b44;
    background: #edf0f5;
    padding: 3px;
    font-size: 12px;
  }
  div.tag {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    padding: 0 0 5px 7px;
  }
  span.tag_name {
    padding-right: 7px;
  }
  div.space{
    height: 10px;
  }
}
</style>