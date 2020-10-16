<template>
  <div>
    <common-header></common-header>
    <navigation-bar nowPage="search_results" />

    <div class="sidemenu_contract_wrapper">
      <div class="sidemenu">
        <common-side-menu></common-side-menu>
      </div>
      <div class="contract_wrapper">
        <div class="confirm">契約内容の確認</div>

        <div class="wrapper_1">
          <div class="title">タイトル</div>
          <div class="title_detail">{{params.title}}</div>
        </div>

        <div class="wrapper_2">
          <div class="content_title">内容</div>
          <div class="content">{{params.content}}</div>
        </div>

        <div class="wrapper_3">
          <div class="amount_title">金額</div>
          <div class="amount">¥{{params.amount}}</div>
        </div>

        <div class="wrapper_4">
          <div class="span_title">契約期間</div>
          <div v-if="params.judge===1" class="every_month">毎月</div>
          <div v-if="params.judge===0" class="every_day">単発</div>
        </div>

        <div class="button_wrapper">
          <button class="contract_button" type="button" @click="decideContract()">上記の内容で契約する</button>
        </div>
      </div>
    </div>

    <common-footer></common-footer>
  </div>
</template>
<script>
import CommonHeader from "@/components/Common/Header";
import CommonSideMenu from "@/components/Common/SideMenu";
import CommonFooter from "@/components/Common/Footer";
import NavigationBar from "@/components/Common/NavigationBar";

import axios from "axios";

export default {
  components: {
    CommonHeader,
    CommonSideMenu,
    CommonFooter,
    NavigationBar
  },

  created: function() {
    this.getPlanDetails();
  },
  data() {
    return {
      params: {
        planId: this.$route.params.id,
        title: "",
        name: "",
        amount: "",
        judge: "",
        memberId: this.$store.state.memberId
      }
    };
  },
  methods: {
    getPlanDetails() {
      axios
        .get("http://127.0.0.1:8001/api/plan/contract", { params: this.params })
        .then(this.submitSuccess)
        .catch(this.errors);
    },
    submitSuccess(response) {
      window.console.log(response.data.plans);
      this.params.title = response.data.plans.title;
      this.params.content = response.data.plans.content;
      this.params.amount = response.data.plans.amount;
      this.params.judge = response.data.plans.judge;
    },
    decideContract() {
      this.params.memberId = this.$store.state.memberId;
      axios
        .post("http://127.0.0.1:8001/api/decidecontract", this.params)
        .then(this.submitContract)
        .catch(this.errors);
    },
    submitContract(response) {
      window.console.log(response.data.plans);
    }
  }
};
</script>
<style scoped>
div.sidemenu {
  width: 210px;
  float: left;
}
div.contract_wrapper {
  width: 900px;
  float: left;
}
div.sidemenu_contract_wrapper {
  overflow: hidden;
  margin: 0 auto;
  width: 1200px;
  background: #fafdff;
}
div.contract_wrapper {
}
div.confirm {
  padding: 10px;
  border-bottom: 1px solid gray;
}
div.content {
}
div.title {
}
div.amount {
}

div.wrapper_1 {
  overflow: hidden;
  padding: 10px;
  border-bottom: 1px solid gray;
}
div.title {
  float: left;
  margin-right: 100px;
}
div.title_detail {
  float: left;
}
div.wrapper_2 {
  overflow: hidden;
  padding: 10px;
  border-bottom: 1px solid gray;
}
div.content_title {
  float: left;
  margin-right: 100px;
}
div.content {
  float: left;
  width: 600px;
}
div.wrapper_3 {
  overflow: hidden;
  padding: 10px;
  border-bottom: 1px solid gray;
}
div.amount_title {
  float: left;
  margin-right: 100px;
}
div.amount {
  float: left;
}
div.wrapper_4 {
  overflow: hidden;
  padding: 10px;
  border-bottom: 1px solid gray;
}
div.span_title {
  float: left;
  margin-right: 100px;
}
div.every_day {
  float: left;
}
div.every_month {
  float: left;
}
button.contract_button {
  width: 500px;
  padding: 5px;
  /* border-radius: 1px; */
}
button.contract_button:hover {
  opacity: 0.8;
  cursor: pointer;
  border: 2px solid #0f4c75;
}
div.button_wrapper {
  margin-left: 190px;
  margin-top: 50px;
}
</style>