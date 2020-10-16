<template>
  <div class="new_teacher">
    <div class="wrapper">
      <div class="member_icon">
        <img class="new_teacher_img" :src="'http://127.0.0.1:8001'+value.icon" alt />
      </div>
      <div class="inner_wrapper">
        <div class="recommend_teacher_name">
          <a
            :href="'http://localhost:8080/member/profile/'+value.id"
            class="popular_member_name"
          >{{value.name}}</a>
        </div>

        <div class="reviewStar">
          <div :class="calculate"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: Object
  },

  computed: {
    calculate: function() {
      if (!this.value.review) {
        return "⭐️⭐️⭐☆☆";
      }
      let total = this.value.review.reduce((sum, i) => sum + i.amount, 0);
      let result = Math.round(total / this.value.review.length);
      if (result >= 0 && result < 1.5) {
        return "starAmount";
      } else if (result >= 1.5 && result < 2) {
        return "starAmount";
      } else if (result >= 2 && result < 2.5) {
        return "starAmount";
      } else if (result >= 2.5 && result < 3) {
        return "starAmount";
      } else if (result >= 3 && result < 3.5) {
        return "starAmount";
      } else if (result >= 3.5 && result < 4) {
        return "starAmount";
      } else if (result >= 4 && result < 4.5) {
        return "starAmount";
      } else if (result >= 4.5 && result < 5) {
        return "starAmount";
      } else if (result >= 5) {
        return "starAmount";
      } else {
        return "starAmount";
      }
    }
  }
};
</script>

<style scoped>
div.recommend_teacher_name {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #3282b8;
  max-width: 77px;
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
  font-size: 11px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #393b44;
}
a.popular_member_name:visited {
  color: #393b44;
}

@media screen and (max-width: 640px) {
  div {
  }
}
@media screen and (min-width: 640px) {
  div. {
    width: 400px;
  }

  a.popular_member_name:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  img.new_teacher_img {
    width: 45px;
    height: 45px;
    display: block;
    border-radius: 22.5px;
    /* position: absolute;
    z-index: 2; */

    margin-right: 10px;
    border: 1px solid rgb(216, 215, 215);
  }
  div.starAmount {
    background-image: url("~@/assets/image/star.png");
    background-size: auto 20px;
    background-repeat: no-repeat;
    height: 39px;
    width: 77px;
    margin: 0 auto;
  }
  div.new_teacher {
    width: 200px;
  }
  div.wrapper {
    width: 160px;
    margin: 0 auto;
    text-align: center;
    overflow: hidden;
  }

  div.member_icon {
    margin-top: 7px;
    width: 62px;
    float: left;
  }
  div.inner_wrapper {
    float: left;
    padding-top: 6px;
  }
}
</style>