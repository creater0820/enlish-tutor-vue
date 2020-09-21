<template>
  <div class="contentsSignup">
    <common-header></common-header>
    <div class="form">
      <p class="title">Let's sign up!</p>
      <p v-if="success">登録完了しました</p>
      <a v-if="success" href="http://localhost:8080/member/login">続けてログインする</a>
      <form-input-text text="ユーザー名" :value.sync="params.name"></form-input-text>
      <p v-for="(userError,index) in userErrors.name" :key="'nameError_'+index">{{userError}}</p>

      <div v-if="errors.name" class="validationMessage">
        <template v-for="(value,index) in errors.name">
          <p :key="index">{{value}}</p>
        </template>
      </div>

      <form-input-text text="メールアドレス" :value.sync="params.email"></form-input-text>
      <div v-if="errors.email" class="validationMessage">
        <template v-for="(value,index) in errors.email">
          <p :key="index">{{value}}</p>
        </template>
      </div>
      <form-input-text text="パスワード" :value.sync="params.password" :password="true"></form-input-text>
      <div v-if="errors.password" class="validationMessage">
        <template v-for="(value,index) in errors.password">
          <p :key="index">{{value}}</p>
        </template>
      </div>
      <div class="input_title" for>カテゴリー</div>

      <select name id class="c_4" v-model="category_type">
        <option value="0">カテゴリーを選択してください</option>
        <template v-for="(value,index) in categories">
          <option :value="value.id" :key="index">{{value.name}}</option>
        </template>
      </select>
      <div v-if="errors.tags" class="validationMessage">
        <template v-for="(value,index) in errors.tags">
          <p :key="index">{{value}}</p>
        </template>
      </div>
      <div v-if="tagList.length" class="tag_select">
        カテゴリーを選択し興味のあるタグを選択して下さい(複数可)
        <br />タグ情報からあなたに
        おすすめの生徒や先生をご紹介します
      </div>
      <div class="tags_check_box">
        <template v-for="(value,index) in tagList">
          <template v-if="value.category_id===category_type">
            <input type="checkbox" name="tags" :key="index" :value="value.id" v-model="params.tags" />
            {{value.name}}
          </template>
        </template>
      </div>

      <button type="button" @click="store">登録する</button>
    </div>

    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from "@/components/Common/Header";
import CommonFooter from "@/components/Common/Footer";
import FormInputText from "@/components/Form/InputText";

import axios from "axios";

export default {
  data() {
    return {
      errors: [],
      categories: [],
      tagList: [],
      category_type: 0,
      params: {
        tags: [],
        name: "",
        email: "",
        password: ""
      },
      success: false,
      userErrors: {}
    };
  },
  components: {
    FormInputText,

    CommonHeader,
    CommonFooter
  },
  created: function() {
    this.getCategories();
    this.getTags();
  },
  methods: {
    store() {
      axios
        .post("http://127.0.0.1:8001/api/member", this.params)
        .then(this.storeSuccess)
        .catch(this.userError);
    },
    storeSuccess(response) {
      window.console.log(response.data);
         location.href="http://localhost:8080/view/registersuccess"
    },

    getCategories() {
      axios
        .get("http://127.0.0.1:8001/api/categories")
        .then(this.getCategoriesSuccess)
        .catch(this.userError);
    },
    getCategoriesSuccess(response) {
      this.categories = response.data.categories;
    },
    userError(e) {
      window.console.log(e.response.data.errors);
      this.errors = e.response.data.errors;
      
    },
    getTags() {
      axios
        .get("http://127.0.0.1:8001/api/tags")
        .then(this.getTagsSuccess)
        .catch(this.categoryError);
    },
    getTagsSuccess(response) {
      this.tagList = response.data.tags;
      window.console.log(response.data.tags);
      
    },
    categoryError(e) {
      window.console.log(e.response.data.tags);
      this.errors = e;
   
    }
  }
};
</script>
<style>
div.validationMessage{
  color: red;
}
div.contentsSignup {
  /* background: rgb(1, 150, 155); */
  background: rgb(160, 207, 208);
}
div.form {
  /* background: rgb(223, 255, 18); */
}

@media screen and (max-width: 640px) {
}
@media screen and (min-width: 640px) {
  div.form {
    width: 800px;
    margin: 0 auto;
    text-align: center;
  }
  p.title {
    font-size: 2em;
    color: white;
    font-weight: 900;
  }
}
</style>