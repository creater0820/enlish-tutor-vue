<template>
  <div class="login">
    <p v-if="success">ログインしました</p>
    <common-header></common-header>
    <div class="contents">
      <div class="login">
        <p class="login">LOGIN</p>
      </div>

      <form-input-text text="Email" :value.sync="params.email" v-model="params.email"></form-input-text>
      <div v-if="userErrors.email" class="validationMessage">
        <template v-for="(value,index) in userErrors.email">
          <div :key="index">
            <p>{{value}}</p>
          </div>
        </template>
      </div>
      <form-input-text text="Password" :value.sync="params.password" v-model="params.password"></form-input-text>
      <div v-if="userErrors.password" class="validationMessage">
        <template v-for="(value,index) in userErrors.password">
          <div :key="index">
            <p>{{value}}</p>
          </div>
        </template>
      </div>
      <!-- <input type="text" v-model="params.email"><br>
      <input type="text" v-model="params.password"><br>-->
      <button type="button" @click="submit">Login</button>

      <input type="checkbox" class="check" />
      <label for="check">ログイン状態を保持する</label>

      <p>アカウントをお持ちでない方はこちら</p>

      <p>パスワードをお忘れの方</p>
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
  components: {
    CommonHeader,
    CommonFooter,
    FormInputText
  },
  data() {
    return {
      params: {
        email: "",
        password: ""
      },
      success: false,
      userErrors: []
    };
  },

  methods: {
    submit() {
      axios
        .post("http://127.0.0.1:8001/api/login", this.params)
        .then(this.submitSuccess)
        .catch(this.errors);
    },
    submitSuccess(response) {
      this.success = true;
      window.console.log(response.data);
      localStorage.setItem("token", response.data.token);
      location.href = "http://localhost:8080/";
      // this.newTeacher = response.data.members;
    },
    errors(e) {
      window.console.log(e.response.data.errors);
      this.userErrors = e.response.data.errors;
    }
  }
};
</script>

<style scoped>
div.login {
  background: rgb(1, 150, 155);
}
img {
  width: 30px;
}
div.contents {
  background: rgb(1, 150, 155);
  text-align: center;
}
button {
  font-weight: 700;
  margin-top: 10px;
  width: 100px;
  height: 30px;
  border-radius: 10px;
}
p.login {
  color: white;
  font-weight: 900;
  font-weight: bold;
}
div.validationMessage{
  color: red;
}

@media screen and (max-width: 640px) {
}
@media screen and (min-width: 640px) {
  div.contents {
    width: 1000px;
    margin: 0 auto;
    background: rgb(1, 150, 155);
  }
}
</style>