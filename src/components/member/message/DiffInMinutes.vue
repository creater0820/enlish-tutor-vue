<template>
  <div>
    
      <div class="diff_in_minutes">{{diffInTime}}</div>
    </div>

</template>

<script>
export default {
  props: {
    message: Object,
    toMemberId: Number
  },
  computed: {
    diffInTime() {
      if (this.message.diff_in_minutes >= 1440) {
        return Math.floor(this.message.diff_in_minutes / 1440) + "日前";
      } else if (
        this.message.diff_in_minutes >= 60 &&
        this.message.diff_in_minutes < 1440
      ) {
        return Math.floor(this.message.diff_in_minutes / 60) + "時間前";
      } else if (this.message.diff_in_minutes <= 1) {
        return "たった今";
      } else if (this.message.diff_in_minutes < 60 && this.message.diff_in_minutes > 1) {
        return this.message.diff_in_minutes + "分前";
      }
      return "";
    }
  }
};
</script>
<style scoped>
div.diff_in_minutes {
  float: right;
  font-size: 0.7em;
  color: black;
}
div.member_name {
  overflow: hidden;
  float: left;
}
div.member_name_right {
  overflow: hidden;
  float: right;
}
div.user_message {
  float: left;
  width: 600px;
  background: rgb(203, 221, 247);
  border-radius: 5px;
  margin: 0 auto 0 30px;
  margin-top: 20px;
  padding: 15px;
  font-size: 0.9em;
  position: relative;
}
div.user_message::before {
  position: absolute;
  content: "";
  border-right: 30px solid rgb(203, 221, 247);
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  top: 10%;
  left: 0;
  transform: translateX(-50%);
  /* transform: rotate(30deg); */
}
div.user_message_right {
  float: left;
  width: 600px;
  background: rgb(203, 221, 247);
  border-radius: 5px;
  margin: 0 auto 0 98px;
  margin-top: 20px;
  padding: 15px;
  font-size: 0.9em;
  position: relative;
}

div.user_message_right::after {
  position: absolute;
  content: "";
  border-left: 30px solid rgb(203, 221, 247);
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  top: 10%;
  right: 0;
  transform: translateX(50%);
  /* transform: rotate(30deg); */
  /* background: tomato; */
}
</style>