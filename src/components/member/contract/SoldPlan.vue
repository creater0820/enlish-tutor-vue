<template>
  <div class="main">
    <div class="wrapper">
      <div class="title">プラン名</div>
      <div class="data1">{{value.title}}</div>
    </div>
    <div class="wrapper">
      <div class="title">金額</div>
      <div class="data1">{{calculate(value.amount)}}円</div>
    </div>
    <div class="wrapper">
      <div class="title">契約日時</div>
      <div class="data1">{{value.created_at|moment}}</div>
    </div>
    <div class="wrapper">
      <div class="title">契約者</div>
      <div class="data1">{{value.contracts[0].member.name}}</div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: {
    value: Object
  },
  data() {
    return {};
  },
  methods: {
    calculate($amount) {
      return $amount.toLocaleString();
    }
  },
  filters: {
    moment: function(date) {
      return moment(date).format("YYYY/MM/DD HH:mm");
    }
  }
};
</script>

<style scoped>
div.main {
  margin-bottom: 30px;
  margin-left: 10px;
  background: white;
  box-shadow: 1px 1px 1px rgb(196, 193, 193);
}
div.title {
  float: left;
  width: 300px;
  color: #393b44;
}
div.data1 {
  float: left;
  color: #393b44;
}
div.wrapper {
  border-bottom: solid 1px rgb(206, 204, 204);
  overflow: hidden;
  padding: 10px;
}
</style>