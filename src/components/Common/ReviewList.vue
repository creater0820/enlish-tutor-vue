<template>
  <div class="review_list_wrapper">
    <div class="icon_name">
      <div class="icon">
        <img :src="'http://127.0.0.1:8001'+member_icon" class="member_icon" />
      </div>
      <div class="name">{{member_name}}</div>
    </div>
    <div class="review_star">{{showStar(value.amount)}}</div>
    <div class="date">{{value.created_at | moment}}にレビュー</div>
    <div class="comment">{{value.content}}</div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  props: {
    value: Object
  },

  data() {
    return {
      member_name: "",
      member_icon: "",
      params: {}
    };
  },
  filters: {
    moment: function(date) {
      return moment(date).format("YYYY/MM/DD HH:mm");
    }
  },
  created: function() {
    this.showName();
  },
  methods: {
    showName() {
      window.console.log(this.value.from_member_id);
      axios
        .get(
          "http://127.0.0.1:8001/api/getmembernameicon/" +
            this.value.from_member_id
        )
        .then(this.showMemberName);
    },
    showMemberName(response) {
        window.console.log(response.data.member);
      this.member_name = response.data.member.name;
      this.member_icon = response.data.member.icon;
    },
    showStar($star) {
      switch ($star) {
        case 1:
          return "⭐️☆☆☆☆";
        case 2:
          return "⭐️⭐️☆☆☆";
        case 3:
          return "⭐️⭐️⭐️☆☆";
        case 4:
          return "⭐️⭐️⭐️⭐️☆";
        case 5:
          return "⭐️⭐️⭐️⭐️⭐️";
        default:
          return "⭐️⭐️⭐☆☆";
      }
    }
  },
  computed: {
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
div.review_list_wrapper {
  border-bottom: 1px solid rgb(194, 192, 192);
  color: #1b262c;
}
div.review_roop {
  margin-bottom: 20px;
  padding: 10px;
}
img.member_icon {
  width: 36px;
  height: 36px;
  border-radius: 18px;
}
div.icon_name {
  overflow: hidden;
  padding-left: 15px;
  padding-top: 5px;
}
div.icon {
  float: left;
}
div.name {
  float: left;
  padding-left: 10px;
  padding-top: 9px;
  font-size: 13px;
  color: #1b262c;
}
div.date {
  color: #3282b8;
  padding-left: 15px;
 
}
div.review_star {
  padding-left: 15px;
}
div.comment {
  padding: 5px 15px 30px 15px;

}
@media screen and (max-width: 640px) {
}
@media screen and (min-width: 640px) {
}
</style>