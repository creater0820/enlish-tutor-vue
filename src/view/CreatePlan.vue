<template>
  <div class="parent">
    <common-header></common-header>
    <navigation-bar></navigation-bar>

    <div class="create_content">
      <div class="side">
        <common-side-menu></common-side-menu>
      </div>
      <div class="input_user_information">
        <form action>
          <div class="c_0">
            <p>レッスンを作成する</p>
          </div>

          <div class="form_group">
            <label for>レッスン名</label>

            <br />
            <input type="text" class="c_1" v-model="params.title" placeholder="例：TOEICスコアアップ講座！" />
            <div v-if="validationErrors.title" class="validationMessage">
              <template v-for="(value,index) in this.validationErrors.title">
                <p :key="index">{{value}}</p>
              </template>
            </div>
          </div>
          <div class="form_group">
            <label for>内容</label>

            <br />
            <textarea
              name
              id
              class="c_2"
              v-model="params.content"
              placeholder="例：この授業では主にTOEICのスコアアップを目指したカリキュラムを組んで指導していきます。ご興味のある方は是非一度お問い合わせください。e.g. I can offer you high quality plan to improve your english skills.Please contact me if you like.Best regards"
            ></textarea>
            <div v-if="validationErrors.content" class="validationMessage">
              <template v-for="(value,index) in this.validationErrors.content">
                <p :key="index">{{value}}</p>
              </template>
            </div>
          </div>
          <div class="form_group">
            <label for>カテゴリー</label>

            <br />
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

          <div class="form_group">
            <label for>授業料：¥ {{params.amount}}円/ 1回</label>

            <br />
            <input type="text" v-model="params.amount" placeholder="2,000円" class="c_5" />
            <span>一回の金額です</span>
            <div v-if="validationErrors.amount" class="validationMessage">
              <template v-for="(value,index) in this.validationErrors.amount">
                <p :key="index">{{value}}</p>
              </template>
            </div>
          </div>

          <div>
            <button type="button" @click="storeTeacherPlan()">送信する</button>
          </div>
        </form>
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
        tags: []
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
}
.c_2 {
  width: 800px;
  height: 200px;
  padding: 0;
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
}
.c_5 {
  width: 100px;
  height: 30px;
  padding: 0;
}
div.create_content {
  overflow: hidden;
  width: 1200px;
  margin: 10px auto;
}
div.input_user_information {
  margin: 0 auto;
  width: 950px;
  background: #bbe1fa;
  text-align: center;
  padding: 10px;
  float: left;
}
div.side {
  float: left;
  margin-right: 10px;
}
div.parent {
  overflow: hidden;
}
</style>