<template>
  <div class="introduction">
    <common-header></common-header>
    <div class="bar" v-if="success">ログイン</div>
    <div class="introduction_website">
      <div class="top">
     正常に会員登録が完了しました！
      </div>
      <a href="http://localhost:8080">トップページへ</a>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from "@/components/Common/Header";
import CommonFooter from "@/components/Common/Footer";

export default {
  components: {
    CommonHeader,
    CommonFooter
  },
  data() {
    return {
      setValue: "",
      success: false
    };
  },
  props: {
    newTeacher: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
div.introduction_website{
width: 1000px;
margin: 0 auto;
text-align: center;
margin-bottom: 30px;
}
button.button{
  width: 300px;
  height: 50px;
}
div.button{
  width: 100px;
  margin: 0 auto;
  margin-top:30px;
 
  width: 400px;
}
div.top {
  font-size: 1.5em;
}
div.bar {
  background-color: rgb(136, 179, 253);
  color: rgb(248, 250, 250);
  font-size: 1.3em;
}
div.introduction {
  /* padding: 15px; */
  /* display:flex; */
  overflow: hidden;
}
.sign_up {
  width: 200px;
  background: rgb(86, 92, 175);
  color: white;
  font-size: 1.1em;
}
@media screen and (max-width: 640px) {
  div.introduction {
    border: 1px solid black;
  }
}
@media screen and (min-width: 640px) {
  div.introduction {
    border: 1px solid black;
    /* overflow: hidden; */
    /* max-width: 1200px; */
    /* margin: 0 auto; */
  }
}
</style>