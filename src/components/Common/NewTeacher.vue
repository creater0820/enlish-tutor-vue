<template>
  <div class="new_teacher">
    <div class="member_icon">
      <img class="new_teacher_img" :src="'http://127.0.0.1:8001'+value.icon" alt="" />
    </div>
    <div>
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
  margin-bottom: 15px;
}
div.new_teacher_information {
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
  max-width: 250px;
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
  a.popular_member_name {
    text-decoration: none;
    font-size: 17px;
  }
  a.popular_member_name:hover {
    cursor: pointer;
    opacity: 0.5;
  }
  a.popular_member_name:visited {
    color: black;
  }
  div.new_teacher_information_profile {
    font-size: 14px;
    color: rgb(69, 62, 62);
  }
  img.new_teacher_img {
    width: 60px;
    height: 60px;
    display: block;
    border-radius: 30px;
  }
}
</style>