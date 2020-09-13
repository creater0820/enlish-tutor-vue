<template>
  <div class="parent">
    <common-header></common-header>
    <div class="create_content">
      <div class="side">
        <common-side-menu></common-side-menu>
      </div>
      <div class="input_user_information">
          <p>マイページ</p>
          <p>マイページ</p>
          <p>マイページ</p>
          <p>マイページ</p>
          <p>マイページ</p>
      </div>
    </div>
      <common-footer></common-footer>
  </div>
</template>
<script>
import CommonHeader from "@/components/Common/Header";
import CommonSideMenu from "@/components/Common/SideMenu";
import CommonFooter from "@/components/Common/Footer";

export default {
  components: {
    CommonHeader,
    CommonSideMenu,
    CommonFooter
  },
  data() {
    return {
      education_fee_month: "",
      education_fee_one: ""
    };
  },
  watch: {
    education_fee_month: function(value) {
      return value.toLocaleString();
    }
  }
};
</script>
<style scoped>
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
  
  /* overflow: hidden; */
}
div.input_user_information {
  /* float: left; */
  width: 100%;
  
  background: rgb(199, 240, 219);
   
   text-align: center;
}
div.side {
  float: left;
  background: rgb(162, 245, 150);
}
</style>