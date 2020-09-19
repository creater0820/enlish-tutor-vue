<template>
  <div class="parent">
    <common-header></common-header>
    <navigation-bar></navigation-bar>

    <div class="create_content">
      <div class="side">
        <common-side-menu></common-side-menu>
      </div>
      <div class="input_user_information" v-if="!success">
        <form action>
          <div class="c_0">
            <p>先生を募集する</p>
          </div>

          <div class="form_group">
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

          <div class="form_group">
            <div class="input_title">タイトル</div>
            <div class="title_annotation">わかりやすく簡潔なタイトルを入力しましょう</div>

            <input type="text" class="c_1" v-model="params.title" placeholder="タイトルを入力して下さい" />
          </div>
          <div class="form_group">
            <div for class="input_title">教えて欲しい内容</div>
            <div class="title_annotation">2000文字以下</div>

            <textarea name id class="c_2" v-model="params.content" placeholder="募集内容を入力して下さい"></textarea>
          </div>

          <div class="form_group">
            <div class="input_title">予算</div>
            <input type="text" v-model="params.amount" placeholder="2,000円" class="c_5" />
          </div>

          <div>
            <button type="button" @click="submit()">投稿する</button>
          </div>
        </form>
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
      params: {
        title: "",
        content: "",
        category_type: 0,
        english_category: "",
        token: localStorage.getItem("token"),
        amount: "",
        tags: []
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
      //   location.href = "http://localhost:8080/";
      // this.newTeacher = response.data.members;
      this.success = true;
    },
    errors(e) {
      window.console.log(e);
      //   this.userErrors = e.response.data.errors
    }
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
.form_group {
  width: 600px;
  margin: 30px auto;
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
  width: 600px;
  height: 30px;
  padding: 0;
  /* text-align: left; */
}
.c_2 {
  width: 600px;
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
  background: rgb(255, 245, 243);
  text-align: left;
  padding: 10px;
  float:left;
}
div.side {
  float: left;
  height: 100%;
 margin-right:10px ;
}
div.register_success {
  width: 1200px;
  background: rgb(196, 229, 232);
  margin: 10px auto;
}
div.register_success_inner {
  text-align: center;
  font-size: 20px;
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
  font-size: 22px;
}
div.title_annotation {
  font-size: 15px;
  color: rgb(84, 29, 29);
}
</style>