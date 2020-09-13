
<template>
  <div class="followPage_wrapper">
    <common-header></common-header>
    <navigation-bar></navigation-bar>

    <div class="followPage">
      <div class="followLeft">
        <common-side-menu></common-side-menu>
      </div>
      <my-follow-list></my-follow-list>
    </div>
    <common-footer-image></common-footer-image>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from "@/components/Common/Header";
import CommonFooter from "@/components/Common/Footer";
import CommonFooterImage from "@/components/Common/FooterImage";
import CommonSideMenu from "@/components/Common/SideMenu";
import MyFollowList from "@/components/member/follow/MyFollowList";
import NavigationBar from "@/components/Common/NavigationBar";

import axios from "axios";

export default {
  data() {
    return {
      params: {
        name: "",
        email: "",
        password: ""
      },
      follows: [],
      success: false,
      userErrors: {}
    };
  },
  components: {
    CommonHeader,
    CommonFooter,
    CommonFooterImage,
    CommonSideMenu,
    MyFollowList,
    NavigationBar
  },
  created: function() {
    this.submit();
  },
  methods: {
    submit() {
      window.console.log(this.params);
      axios
        .get("http://127.0.0.1:8001/api/follows")
        .then(this.submitSuccess)
        .catch(this.errors);
    },
    submitSuccess(response) {
      this.success = true;
      this.follows = response.data.follows;
      window.console.log(response.data.follows);
    },
    errors(e) {
      window.console.log(e.response.data.errors.name);
    }
  }
};
</script>
<style>
body {
  margin: 0;
}
div.follow_active {
  background: rgb(214, 239, 189);
  /* text-align: center; */
}
div.follow_list_active {
  background: rgb(214, 239, 189);
  text-align: center;
}

div.follow div {
  float: left;
  padding: 20px 0;
  width: 400px;
}
div.followPage {
  /* width: 1500px; */
  margin: 0 auto;
  overflow: hidden;
}
div.followPage_wrapper {
  width: 100%;
}
div.follow {
  overflow: hidden;
  width: 1400px;
}
div.followLeft {
  /* background: rgb(194, 215, 240); */
  width: 300px;
  float: left;
}
div.followRight {
  /* background: rgb(249, 238, 238); */
  width: 800px;
  margin: 0 auto;
  float: left;
}

@media screen and (max-width: 640px) {
}
@media screen and (min-width: 640px) {
}
</style>