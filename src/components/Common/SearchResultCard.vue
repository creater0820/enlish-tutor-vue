<template>
  <div class="search_result_wrapper">
    <div class="search_result_wrapper_title">
      <span class="search_results_title">
        <a
          :href="'http://localhost:8080/member/profile/'+value.member_id +'?params='+value.id"
          class="to_plan_page"
        >{{value.title}}</a>
      </span>
      <span v-if="Number(value.diff_in_minutes) < 2880 " class="newPlan">[New!]</span>
      <span class="time">[{{time}}]</span>
    </div>
    <p>¥{{price}}</p>
    <p>{{value.content}}</p>
    <p>
      <a
        :href="'http://localhost:8080/member/profile/'+value.member_id"
        class="to_plan_page"
      >{{value.member.name}}さん</a>
    </p>
    <template v-for="(tags,index) in value.student_plan_tags">
      <span class="tag_name" :key="index">
        <a
          :href="'http://localhost:8080/member/searchresults/' +tags.tag_id+'?page=1'"
          class="tags"
        >#{{tags.tag_name}}</a>
      </span>
    </template>
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
      if (Number(this.value.diff_in_minutes) >= 2880 && Number(this.value.diff_in_minutes) <= 43200) {
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
      if (Number(this.value.diff_in_minutes) >= 43200 && Number(this.value.diff_in_minutes) <= 86400) {
        return "１ヶ月前";
      }
      if (Number(this.value.diff_in_minutes) >=86400 && Number(this.value.diff_in_minutes) <=129600) {
        return "２ヶ月前";
      }
      if (Number(this.value.diff_in_minutes) >=129600 && Number(this.value.diff_in_minutes) <=172800) {
        return "３ヶ月前";
      }
      if (Number(this.value.diff_in_minutes) >=172800) {
        return "３ヶ月以上前";
      }
      return Math.floor(this.value.diff_in_minutes / 60) + "時間前";
    }
  }
};
</script>

<style scoped>
span.tag_name {
  color: rgb(72, 70, 70);
  padding-right: 7px;
}
span.time {
  float: right;
  color: rgb(118, 86, 86);
}
span.search_results_title {
  font-size: 20px;
  text-decoration: none;
}
a.to_plan_page {
  text-decoration: none;
  color: rgb(31, 29, 29);
}
a.to_plan_page:hover {
  opacity: 0.5;
  cursor: pointer;
}
a.to_plan_page:visited {
  color: rgb(31, 29, 29);
}
a.tags {
  text-decoration: none;
  color: rgb(86, 84, 84);
}
a.tags:hover {
  opacity: 0.5;
  cursor: pointer;
}
a.tags:visited {
  color: rgb(86, 84, 84);
}

div.search_result_wrapper_title {
  background: rgb(234, 178, 166);
  border-bottom: 1px dotted black;
  padding: 2px 0 2px 7px;
}
span.newPlan {
  color: lightcoral;
  font-size: 20px;
  margin-left: 5px;
}
</style>