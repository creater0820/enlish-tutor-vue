<template>
  <div class="new_teacher">
    <div class="member_icon">
      <img class="new_teacher_img" :src="'http://127.0.0.1:8001'+value.icon" alt />
    </div>
    <div class="recommend_teacher_name">
      <a
        :href="'http://localhost:8080/member/profile/'+value.id"
        class="popular_member_name"
      >{{value.name}}</a>
    </div>

    <div>
      <div class="new_teacher_information_profile">{{value.profile}}</div>
      <!-- <div class="new_teacher_information">{{value.tag_name[0]}}</div> -->
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
  }
};
</script>

<style scoped>
div.new_teacher {
  margin: 30px 0;
}
div.recommend_teacher_name {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #3282b8;
}
div.recommend_teacher_name:visited {
  color: #3282b8;
}
div.new_teacher_information {
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
  max-width: 250px;
}
div.new_teacher_information_profile {
  font-size: 14px;
  color: #1b262c;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
a.popular_member_name {
  text-decoration: none;
  font-size: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100px;
  color: #3282b8;
}
a.popular_member_name:visited {
  color: #3282b8;
}

@media screen and (max-width: 640px) {
  div {
  }
}
@media screen and (min-width: 640px) {
  div. {
    width: 400px;
  }
  img.new_teacher_img {
    width: 40px;
    float: left;
    margin-right: 10px;
  }

  a.popular_member_name:hover {
    cursor: pointer;
    opacity: 0.5;
  }


  img.new_teacher_img {
    width: 60px;
    height: 60px;
    display: block;
    border-radius: 30px;
  }
}
</style>