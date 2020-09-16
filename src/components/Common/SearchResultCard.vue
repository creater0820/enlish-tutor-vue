<template>
  <div  class="search_result_wrapper">
    
    <div class="search_result_wrapper_title">
         <span class="search_results_title">
      <a
        :href="'http://localhost:8080/member/profile/'+value.member_id +'?params='+value.id"
        class="to_plan_page"
      >{{value.title}}</a>
    </span>
    <span class="time">[{{time}}時間前]</span>
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
          :href="'http://localhost:8080/member/searchresults/' +tags.tag_id"
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
    return {
     
    };
  },
  mounted: function() {
    window.console.log(this.value.student_plan_tags);
    this.logs = this.value.student_plan_tags
  },
  computed: {
    price() {
      return this.value.amount.toLocaleString();
    },
    time() {
      return Math.floor(this.value.diff_in_minutes / 60);
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

div.search_result_wrapper_title{
    background: rgb(230, 227, 226);
    border-bottom:1px dotted black ;
    padding:2px 0 2px 7px;
}
</style>