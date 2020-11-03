<template>
  <div class="introduction">
    <common-header></common-header>
    <div class="wrapper">
      <div class="side_menu">
        <side-menu />
      </div>
      <div class="inner_wrapper_end_plan">
        <div class="top" v-if="success">契約が終了しました。評価をお願いします。</div>
        <div class="review_end" v-if="!success">評価を送信しました</div>
        <div class="inputReview" v-if="success">
          <input-review @childMethod="doChildMethod"></input-review>
        </div>
      </div>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from "@/components/Common/Header";
import CommonFooter from "@/components/Common/Footer";
import InputReview from "@/components/Form/InputReview";
import SideMenu from "@/components/Common/SideMenu";

export default {
  components: {
    CommonHeader,
    CommonFooter,
    InputReview,
    SideMenu
  },
  data() {
    return {
      setValue: "",
      success: true,
      title: ""
    };
  },
  props: {
    newTeacher: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    doChildMethod($title) {
      this.success = false;
      this.title = $title;
    }
  }
};
</script>

<style scoped>
div.wrapper {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
div.side_menu {
  float: left;
}
div.top {
  /* float: left; */
}
div.inner_wrapper_end_plan{
  overflow: hidden;
  margin: 0 auto;
  width: 1000px;
}
button.button {
  width: 300px;
  height: 50px;
}
div.button {
  width: 100px;
  margin: 0 auto;
  margin-top: 30px;

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
div.inputReview {
  /* width: 1200px; */
  /* margin: 0 auto;
  text-align: center; */
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