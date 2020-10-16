<template>
  <div class="parent">
    <common-header></common-header>
    <navigation-bar></navigation-bar>

    <div class="create_content">
      <div class="side">
        <common-side-menu></common-side-menu>
      </div>

      <div class="input_user_information" v-if="!success">
        <div class="category">
          <div class="input_title" for>カテゴリー</div>
          <select name id class="c_4" v-model="params.category_type">
            <option value="0">カテゴリーを選択してください</option>
            <option value="1">英語全般 (English)</option>
            <option value="2">大学受験</option>
            <option value="3">文系資格</option>
            <option value="4">理系資格</option>
          </select>
          <div v-if="selectTypeList.length" class="tag_select">タグを選択して下さい(複数可)</div>
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
          </div>
        </div>

        <div v-if="userErrors.tags">
          <template v-for="(value,index) in userErrors.tags">
            <p :key="index" class="errorMessage">{{value}}</p>
          </template>
        </div>

        <div class="title_wrapper">
          <div class="title">タイトル</div>
          <input type="text" class="c_1" v-model="params.title" />
          <div v-if="userErrors.title">
            <template v-for="(value,index) in userErrors.title">
              <p :key="index" class="errorMessage">{{value}}</p>
            </template>
          </div>
        </div>

        <div class="content_wrapper">
          <div class="content">内容</div>
          <div class="title_annotation">2000文字以下</div>

          <textarea name id class="c_2" v-model="params.content"></textarea>
          <div v-if="userErrors.content">
            <template v-for="(value,index) in userErrors.content">
              <p :key="index" class="errorMessage">{{value}}</p>
            </template>
          </div>
        </div>

        <div class="tuition_fee_wrapper">
          <div class="tuition_fee">予算</div>
          <input type="text" v-model="params.amount" class="c_5" />
          <div v-if="userErrors.amount">
            <template v-for="(value,index) in userErrors.amount">
              <p :key="index" class="errorMessage">{{value}}</p>
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
        <div class="image">
          <div class="send_image">
            <input @change="selectedFile" type="file" name="file" />
          </div>
        </div>

        <div>
          <button type="button" class="submit_button" @click="submit()">投稿する</button>
        </div>
      </div>
      <div class="register_success" v-if="success">
        <div class="register_success_inner">登録成功です</div>
        <div class="register_success_inner">先生からの応募をお待ちください。</div>
        <div class="register_success_inner">お急ぎの方は自分のレッスンに合った先生を検索してメッセージを送ってみましょう！</div>
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
      success: false,
      userErrors: [],
      params: {
        title: "",
        content: "",
        category_type: 0,
        english_category: "",
        token: localStorage.getItem("token"),
        amount: "",
        tags: [],
        contract_span: "",
        image: ""
      },
      selectTypeList: [],
      typeList: [
        [],
        [
          { key: 1, value: "英会話" },
          { key: 2, value: "ビジネス英語" },
          { key: 3, value: "TOEIC対策" },
          { key: 4, value: "英文添削" },
          { key: 5, value: "大学受験英語" },
          { key: 6, value: "英ネイティブ" },
          { key: 7, value: "米ネイティブ" }
        ],
        [
          { key: 8, value: "英語" },
          { key: 9, value: "数学" },
          { key: 10, value: "物理" },
          { key: 11, value: "化学" },
          { key: 12, value: "現代文" },
          { key: 13, value: "日本史" },
          { key: 14, value: "世界史" }
        ],
        [
          { key: 15, value: "日商簿記検定" },
          { key: 16, value: "税理士" },
          { key: 17, value: "行政書士" },
          { key: 4, value: "司法書士" },
          { key: 5, value: "宅地建物取引士" },
          { key: 6, value: "弁護士" },
          { key: 7, value: "社会保険労務士" }
        ],
        [
          { key: 1, value: "弁理士" },
          { key: 2, value: "税理士" },
          { key: 3, value: "行政書士" },
          { key: 4, value: "司法書士" },
          { key: 5, value: "宅地建物取引士" },
          { key: 6, value: "危険物取扱者" },
          { key: 7, value: "社会保険労務士" }
        ],
        [
          { key: 1, value: "基本情報技術者" },
          { key: 2, value: "応用情報技術者" },
          { key: 3, value: "ITパスポート" },
          { key: 4, value: "司法書士" },
          { key: 5, value: "宅地建物取引士" },
          { key: 6, value: "危険物取扱者" },
          { key: 7, value: "社会保険労務士" }
        ]
      ]
    };
  },
  methods: {
    submit() {
      window.console.log(this.params);
      axios
        .post("http://127.0.0.1:8001/api/studentplan", this.params)
        .then(this.submitSuccess)
        .catch(this.errors);
    },
    submitSuccess(response) {
      window.console.log(response.data);
      location.href = "http://localhost:8080/view/registersuccess";
      this.success = true;
    },
    errors(e) {
      window.console.log(e.response.data.errors);
      this.userErrors = e.response.data.errors;
    }
  },
  selectedFile(e) {
    // 選択された File の情報を保存しておく
    e.preventDefault();
    let files = e.target.files;
    this.$set(this.params, "image", files[0]);
    window.console.log(this.params);
  },
  watch: {
    // education_fee_month: function(value) {
    //   return value.toLocaleString();
    // },
    "params.category_type": function() {
      this.selectTypeList = this.typeList[this.params.category_type];
    }
  }
};
</script>
<style scoped>
p.errorMessage {
  color: red;
}

.form_group span {
  color: rgb(115, 127, 179);
}
:focus::-webkit-input-placeholder {
  color: white;
}
.c_0 {
  font: bold;
  width: 700px;
  margin: 0 auto;
}
.c_1 {
  width: 700px;
  height: 30px;

  float: left;
}
.c_2 {
  width: 700px;
  height: 200px;
  float: left;
}
.c_3 {
  width: 200px;
  height: 20px;
}
.c_4 {
  width: 700px;
  height: 30px;

  float: left;
}
.c_5 {
  width: 100px;
  height: 30px;
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
  height: 100%;
  margin-right: 10px;
}
div.register_success {
  width: 1200px;
  background: rgb(196, 229, 232);
  margin: 10px auto;
}
div.register_success_inner {
  text-align: center;
}
div.tags_check_box {
  /* width: 550px;
    text-align: center; */
}
div.tag_select {
  margin: 10px 0;
  color: rgb(123, 62, 62);
}
div.input_title {
  margin: 10px 0;
}
div.title_annotation {
  font-size: 15px;
  color: rgb(84, 29, 29);
}
div.category {
  overflow: hidden;
  border-bottom: 1px solid #f1f3f8;
  padding-bottom: 10px;
  padding-top: 10px;
}
div.input_title {
  float: left;
  padding-top: 3px;
  padding-right: 62px;
}
div.title_wrapper {
  overflow: hidden;
  margin-bottom: 30px;
  border-bottom: 1px solid #a1a4a5;
  padding-bottom: 10px;
}
div.title {
  float: left;
  padding-top: 5px;
  padding-right: 79px;
}
div.content_wrapper {
  overflow: hidden;
  margin-bottom: 30px;
  border-bottom: 1px solid #a1a4a5;
  padding-bottom: 10px;
}
div.content {
  float: left;
  padding-top: 5px;
  padding-right: 110px;
}
div.tuition_fee_wrapper {
  overflow: hidden;
  margin-bottom: 30px;
  border-bottom: 1px solid #a1a4a5;
  padding-bottom: 10px;
}
div.tuition_fee {
  float: left;
  padding-top: 5px;
  padding-right: 108px;
}
button.submit_button {
  margin-top: 30px;
  width: 500px;
  background: #bbe1fa;
  margin-left: 200px;
}
button.submit_button:hover {
  opacity: 0.5;
  cursor: pointer;
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