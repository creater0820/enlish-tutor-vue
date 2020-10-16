<template>
  <div class="parent">
    <common-header></common-header>
    <navigation-bar></navigation-bar>

    <div class="create_content">
      <div class="side">
        <common-side-menu></common-side-menu>
      </div>
      <div class="input_user_information">
        <div class="lesson_name_wrapper">
          <div class="name_input_wrapper">
            <div class="lesson_name">レッスン名</div>
            <input type="text" class="c_1" v-model="params.title" />
          </div>

          <div v-if="validationErrors.title" class="validationMessage">
            <template v-for="(value,index) in this.validationErrors.title">
              <div :key="index">{{value}}</div>
            </template>
          </div>
        </div>

        <div class="content_wrapper">
          <div class="content">内容</div>
          <textarea name id class="c_2" v-model="params.content"></textarea>
          <div v-if="validationErrors.content" class="validationMessage">
            <template v-for="(value,index) in this.validationErrors.content">
              <p :key="index">{{value}}</p>
            </template>
          </div>
        </div>

        <div class="category_wrapper">
          <div class="category">カテゴリー</div>
          <select name id class="c_4" v-model="params.category_type">
            <option value="0">選択してください</option>
            <option value="1">英語全般 (English)</option>
            <option value="2">大学受験</option>
          </select>

          <div class="tags_check_box">
            <template v-for="(value,index) in selectTypeList">
              <input
                type="checkbox"
                name="tags"
                :key="index"
                :value="value.key"
                v-model="params.tags"
              />
              {{value.value}}
            </template>
            <div v-if="validationErrors.tags" class="validationMessage">
              <template v-for="(value,index) in this.validationErrors.tags">
                <p :key="index">{{value}}</p>
              </template>
            </div>
          </div>
        </div>

        <div class="tuition_fee_wrapper">
          <div class="tuition_fee">授業料</div>
          <div class="c_5">
            <input type="text" v-model="params.amount" class="input_tuition_fee" />
            <span>円</span>
          </div>
          <div v-if="validationErrors.amount" class="validationMessage">
            <template v-for="(value,index) in this.validationErrors.amount">
              <p :key="index">{{value}}</p>
            </template>
          </div>
        </div>

        <div class="contract_span_wrapper">
          <div class="contract_span_title">契約期間</div>
          <div class="fee_month">
            <input type="radio" value="1" v-model="params.contract_span" />毎月
          </div>
          <div class="fee_day">
            <input type="radio" value="0" v-model="params.contract_span" />単発
          </div>
        </div>

        <div>
          <button type="button" class="submit_button" @click="storeTeacherPlan()">送信する</button>
        </div>
      </div>
    </div>
    <common-footer></common-footer>
  </div>
</template>
<script>
import CommonHeader from "@/components/Common/Header";
import NavigationBar from "@/components/Common/NavigationBar";
import CommonSideMenu from "@/components/Common/SideMenu";
import CommonFooter from "@/components/Common/Footer";
import axios from "axios";

export default {
  components: {
    CommonHeader,
    CommonSideMenu,
    CommonFooter,
    NavigationBar
  },
  data() {
    return {
      params: {
        title: "",
        content: "",
        category_type: 0,
        english_category: "",
        token: localStorage.getItem("token"),
        amount: "",
        tags: [],
        contract_span: ""
      },
      validationErrors: [],
      selectTypeList: [],
      typeList: [
        [],
        [
          { key: 1, value: "英会話" },
          { key: 2, value: "ビジネス英語" },
          { key: 3, value: "TOEIC対策" },
          { key: 4, value: "英文添削" },
          { key: 5, value: "大学受験英語" }
        ],
        [
          { key: 1, value: "" },
          { key: 2, value: "" }
        ]
      ]
    };
  },
  created: function() {},
  methods: {
    storeTeacherPlan() {
      axios
        .post("http://127.0.0.1:8001/api/teacherplan", this.params)
        .then(this.teacherPlanShow)
        .catch(this.error);
    },
    teacherPlanShow(response) {
      window.console.log(response.data);
      location.href = "http://localhost:8080/view/registersuccess";
    },
    error(e) {
      window.console.log(e.response.data.errors);
      this.validationErrors = e.response.data.errors;
    },

    submit() {
      window.console.log(this.params);
      axios
        .post("http://127.0.0.1:8001/api/plan", this.params)
        .then(this.submitSuccess)
        .catch(this.errors);
    },
    submitSuccess(response) {
      this.success = true;
      window.console.log(response.data);
      // location.href = "http://localhost:8080/member/lesson";
      // localStorage.setItem("token", response.data.token);
      //   location.href = "http://localhost:8080/";
      // this.newTeacher = response.data.members;
    },
    errors(e) {
      window.console.log(e);
      //   this.userErrors = e.response.data.errors
    }
  },
  watch: {
    education_fee_month: function(value) {
      return value.toLocaleString();
    },
    "params.category_type": function() {
      this.selectTypeList = this.typeList[this.params.category_type];
    }
  }
};
</script>
<style scoped>
div.validationMessage {
  color: red;
}
.form_group {
  width: 700px;
  margin: 0 auto;
}
.form_group span {
  color: rgb(115, 127, 179);
}
:focus::-webkit-input-placeholder {
  color: white;
}
.c_0 {
  font-size: 1.8em;
  font: bold;
  width: 700px;
  margin: 0 auto;
}
.c_1 {
  width: 800px;
  height: 30px;
  padding: 0;
  float: left;
}
.c_2 {
  width: 800px;
  height: 200px;
  padding: 0;
  float: left;
}
.c_3 {
  width: 200px;
  height: 20px;
  padding: 0;
}
.c_4 {
  width: 200px;
  height: 30px;
  padding: 0;
  float: left;
}
div.c_5 {
  padding: 0;
  float: left;
}
div.create_content {
  overflow: hidden;
  width: 1200px;
  margin: 10px auto;
} 
div.input_user_information {
  margin: 0 auto;
  width: 950px;
  text-align: center;

  float: left;
}
div.side {
  float: left;
  margin-right: 10px;
}
div.parent {
  overflow: hidden;
}
div.lesson_name_wrapper {
  overflow: hidden;
  border-bottom: 1px solid #a1a4a5;
  padding-bottom: 10px;
  padding-top: 10px;
}
div.lesson_name {
  float: left;
  padding-top: 5px;
  padding-right: 30px;
}
div.content_wrapper {
  overflow: hidden;
  border-bottom: 1px solid #a1a4a5;
  padding-bottom: 10px;
  padding-top: 10px;
}
div.content {
  float: left;
  padding-top: 5px;
  padding-right: 77px;
}
div.category_wrapper {
  overflow: hidden;
  border-bottom: 1px solid #a1a4a5;
  padding-bottom: 10px;
  padding-top: 10px;
}
div.category {
  float: left;
  padding-top: 5px;
  padding-right: 30px;
}
div.tuition_fee_wrapper {
  overflow: hidden;
  border-bottom: 1px solid #a1a4a5;
  padding-bottom: 10px;
  padding-top: 10px;
}
div.tuition_fee {
  float: left;
  padding-top: 5px;
  padding-right: 59px;
}
button.submit_button {
  margin-top: 30px;
  width: 500px;
  background: #bbe1fa;
}
button.submit_button:hover {
  opacity: 0.5;
  cursor: pointer;
}
div.name_input_wrapper {
  overflow: hidden;
}
input.input_tuition_fee {
  width: 194px;
}
div.contract_span_wrapper {
  overflow: hidden;
}
div.fee_month {
  float: left;
  padding: 10px 0 10px 0;
}
div.fee_day {
  float: left;
  padding: 10px 0 10px 0;
}
div.contract_span_title {
  float: left;
  margin-right: 38px;
  padding: 10px 0 10px 0;
}
</style>