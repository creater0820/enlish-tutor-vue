<template>
  <div class="parent">
    <common-header></common-header>
    <navigation-bar></navigation-bar>
    <div class="main_wrapper">
      <div class="side_menu">
        <common-side-menu></common-side-menu>
      </div>
      <div class="content_wrapper">
        <div class="search_month">
          <select class="month_select" v-model="params.month">
            <option value="0" selected>月を選択してください</option>
            <option value="1">1月</option>
            <option value="2">2月</option>
            <option value="3">3月</option>
            <option value="4">4月</option>
            <option value="5">5月</option>
            <option value="6">6月</option>
            <option value="7">7月</option>
            <option value="8">8月</option>
            <option value="9">9月</option>
            <option value="10">10月</option>
            <option value="11">11月</option>
            <option value="12">12月</option>
          </select>
        </div>
        <div class="amount">
          <div class="amount_title">売上合計</div>
          <div class="total_amount">{{calculate}}円</div>
        </div>
        <div class="inner_wrapper">
          <template v-for="(value,index) in soldPlans">
            <div :key="index" v-if="value.contracts.length">
              <sold-plans :value="value"></sold-plans>
            </div>
          </template>
        </div>
      </div>
    </div>

    <common-footer></common-footer>
  </div>
</template>
<script>
import axios from "axios";
import CommonHeader from "@/components/Common/Header";
import NavigationBar from "@/components/Common/NavigationBar";
import CommonSideMenu from "@/components/Common/SideMenu";
import CommonFooter from "@/components/Common/Footer";
import SoldPlans from "@/components/member/contract/SoldPlan";

export default {
  components: {
    CommonHeader,
    CommonSideMenu,
    CommonFooter,
    NavigationBar,
    SoldPlans
  },
  data() {
    return {
      params: {
        member_id: this.$store.state.memberId,
        month: "0"
      },
      soldPlans: [],
      totalAmount: []
    };
  },
  computed: {
    calculate: function() {
      let total = this.totalAmount.reduce((sum, i) => sum + i.amount, 0);
      let totalAmount = total.toLocaleString();
      return totalAmount;
    }
  },
  created: function() {
    this.getContract();
  },
  watch: {
    "$store.state.memberId": function() {
      this.$set(this.params, "member_id", this.$store.state.memberId);
      this.getContract();
    },
    "params.month": function() {
      this.getContract();
    }
  },

  methods: {
    getContract() {
      axios
        .get("http://127.0.0.1:8001/api/getsoldplan", { params: this.params })
        .then(this.showSoldPlans);
    },
    showSoldPlans(response) {
      window.console.log(response.data);
      this.soldPlans = response.data.teachPlans;
      window.console.log(response.data.amount);
      this.totalAmount = response.data.amount;
    }
  }
};
</script>
<style scoped>
div.parent {
  background: #f1f3f8;
}
div.main_wrapper {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
div.inner_wrapper {
  float: left;
  width: 800px;
}
div.side_menu {
  float: left;
}
div.content_wrapper {
  overflow: hidden;
  width: 800px;
  margin: 0 auto;
  float: left;
}
select.month_select {
  margin-bottom: 30px;
  margin-left: 10px;
}
div.amount {
  margin-bottom: 30px;
  margin-left: 10px;
}
div.amount_title {
  margin-bottom: 10px;
  margin-left: 2px;
}
div.total_amount {
  font-size: 20px;
  color: #d7385e;
}
</style>