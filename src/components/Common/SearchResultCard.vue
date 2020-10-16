<template>
  <div class="search_result_wrapper">
    <div class="wrapper">
      <a
        :href="'http://localhost:8080/member/profile/'+value.member_id +'?params='+value.id"
        class="to_plan_page"
      >[ {{value.title}} ]</a>
      <div class="time">{{time}}</div>
    </div>

    <span v-if="Number(value.diff_in_minutes) < 2880 " class="newPlan">[New!]</span>
    <div class="name_content_wrapper">
      <div class="img_name_wrapper">
        <div class="img_wrapper">
          <img :src="'http://127.0.0.1:8001'+value.member.icon" class="member_icon" />
        </div>
        <div class="name_wrapper">
          <a
            :href="'http://localhost:8080/member/profile/'+value.member_id"
            class="member_name"
          >{{value.member.name}}さん</a>
        </div>
      </div>
      <div class="wrapper_price_content">
        <div class="plan_content">{{value.content}}</div>
        <div class="plan_price">¥{{price}}円</div>
      </div>
    </div>

    <div class="template_roop_wrapper">
      <template v-for="(tags,index) in value.student_plan_tags" class="wrapper">
        <div class="tag_name" :key="index">
          <a
            :href="'http://localhost:8080/member/searchresults/' +tags.tag_id+'?page=1'"
            class="tags"
          >#{{tags.tag_name}}</a>
        </div>
      </template>
    </div>
    <div class="template_roop_wrapper">
      <template v-for="(tags,index) in value.teacher_plan_tags" class="wrapper">
        <div class="tag_name" :key="index">
          <a
            :href="'http://localhost:8080/member/searchresultsteacher/' +tags.tag.id+'?page=1'"
            class="tags"
          >#{{tags.tag.name}}</a>
        </div>
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
    return {};
  },
  mounted: function() {
    window.console.log(this.value.student_plan_tags);
    this.logs = this.value.student_plan_tags;
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
div.search_content_wrapper {
  overflow: hidden;
}
span.tag_name {
  color: rgb(72, 70, 70);
  padding-right: 7px;
}
div.time {
  float: right;
  color: #0f4c75;
  padding-right: 2px;
  padding-top: 5px;
}
div.search_results_title {
  float: left;
}
span.search_results_title:visited {
  color: #bbe1fa;
}
a.to_plan_page {
  text-decoration: none;
  color: #3282b8;
  display: block;
  font-size: 20px;
  width:700px;
  float: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding-bottom:15px ;
}
a.to_plan_page:hover {
  opacity: 0.5;
  cursor: pointer;
}
a.to_plan_page:visited {
  color: #3282b8;
}
a.member_name {
  color: #0f4c75;
  text-decoration: none;
}
a.member_name:visited {
  color: #0f4c75;
  text-decoration: none;
}
a.tags {
  text-decoration: none;
  color: #0f4c75;
  background: #d7efff;
  padding: 3px;
  font-size: 12px;
}
a.tags:hover {
  opacity: 0.5;
  cursor: pointer;
}
a.tags:visited {
  color: #0f4c75;
  background: #d7efff;
}
a.to_plan_page_content {
  text-decoration: none;
  color: #0f4c75;
  display: block;
}
a.to_plan_page_content:hover {
  opacity: 0.5;
}
a.to_plan_page_content:visited {
  color: #0f4c75;
}

div.search_result_wrapper_title {
  padding: 2px 7px 2px 7px;
  overflow: hidden;
}
div.search_result_wrapper {
  padding: 5px 10px 5px 10px;
  overflow: hidden;
}
div.search_result_wrapper_title :hover {
  /* opacity: 0.5; */
}

span.newPlan {
  color: lightcoral;
  font-size: 20px;
  margin-left: 5px;
}
img.member_icon {
  width: 40px;
  height: 40px;
  border-radius: 20px;
}
div.img_name_wrapper {
  overflow: hidden;
  float: left;
}
div.img_wrapper {
  padding-left: 10px;
  margin-bottom: -6px;
}
div.name_wrapper {
  padding-left: 5px;
}
div.plan_content {
  margin-left: 10px;
  margin-bottom: 5px;
  color: #1b262c;
 
}
div.plan_price {
  padding-left:13px ;
}
div.title_price_wrapper {
  /* margin: 15px 6px 15px 4px; */
}
div.tag_name {
  margin-left: 6px;
  float: left;
}
div.template_roop_wrapper {
  overflow: hidden;
}
div.wrapper {
  overflow: hidden;
}
div.wrapper_price_content {
  overflow: hidden;
  float: left;
  width: 685px;
}
span.price_size {
  font-size: 18px;
}
div.name_content_wrapper {
  overflow: hidden;
}
</style>