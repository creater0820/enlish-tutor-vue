<template>
  <div class="message_wrapper">
    <div
      :class="[Number(message.member.id === Number(toMemberId)) ? 'member_name_right': 'member_name']"
    >
      <img
        :src="'http://127.0.0.1:8001'+message.member.icon"
        class="member_name_icon"
        :class="{'to_member_id':Number(message.member.id) === Number(toMemberId)}"
      />

      <p class="member_name_cut">{{message.member.name}}</p>
    </div>
    <div
      :class="[Number(message.member.id === Number(toMemberId)) ? 'user_message_right': 'user_message']"
    >
      <pre class="member_chat_message">{{message.text}}</pre>
      <div class="diff_in_minutes">{{diffInTime}}</div>
    </div>
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
      } else if (
        this.message.diff_in_minutes < 60 &&
        this.message.diff_in_minutes > 1
      ) {
        return this.message.diff_in_minutes + "分前";
      }
      return "";
    }
  }
};
</script>
<style scoped>
div.message_wrapper {
  overflow: hidden;
  padding-left:50px;
}
div.diff_in_minutes {
  float: right;
  font-size: 0.7em;
  color: black;
}
div.member_name {
  overflow: hidden;
  float: left;
  margin-top: 30px;
}
div.member_name_right {
  overflow: hidden;
  float: right;
  margin-top: 30px;
  margin-right: 18px;
  text-align: center;

}
div.user_message {
  float: left;
  width: 670px;
  background: #bbe1fa;
  border-radius: 5px;
  margin: 0 auto 0 30px;
  margin-top: 20px;
  padding: 15px;
  font-size: 15px;
  position: relative;
}
div.user_message::before {
  position: absolute;
  content: "";
  border-right: 30px solid #bbe1fa;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  top: 15px;
  left: 0;
  transform: translateX(-50%);
  /* transform: rotate(30deg); */
}
div.user_message_right {
  float: left;
  width: 670px;
  background: rgb(203, 221, 247);
  border-radius: 5px;
  margin: 0 auto 0 30px;
  margin-top: 20px;
  padding: 15px ;
  position: relative;
  margin-left: 80px;
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
pre.member_chat_message {
  white-space: pre-wrap;
  word-wrap: break-word;
}
p.member_name_cut {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0;
  margin: 0;
}
img.member_name_icon {
  width: 50px;
  height: 50px;
}
</style>