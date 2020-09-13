<template>
  <div class="menu">
    <div class="menu_wrapper">
      <div class="hover2">
        <a
          class="menu_tab"
          :href="'http://localhost:8080/member/profile/'+$store.state.memberId"
          @mouseover="hidden_1=true"
          @mouseleave="hidden_1=false"
        >
          マイページ
          <i class="img_mypage" :class="{rotate:hidden_1}"></i>
        </a>

        <div
          class="menu_hidden_1"
          v-show="hidden_1"
          @mouseover="hidden_1=true"
          @mouseleave="hidden_1=false"
        >
          <div class="title">
            <p>Mypage</p>
          </div>
          <p>リンク</p>
          <p>リンク</p>
          <p>リンク</p>
        </div>
      </div>
      <div class="hover2">
        <a
          class="menu_tab"
          :href="'http://localhost:8080/member/message/list/'+$store.state.memberId"
          @mouseover="hidden_2=true"
          @mouseleave="hidden_2=false"
        >
          メッセージ
          <i class="img_mypage" :class="{rotate:hidden_2}"></i>
        </a>

        <div
          class="menu_hidden_2"
          v-show="hidden_2"
          @mouseover="hidden_2=true"
          @mouseleave="hidden_2=false"
        >
          <div class="title">
            <p>Message</p>
          </div>
     <span>新着</span>
        </div>
      </div>
      <div class="hover2">
        <a
          class="menu_tab"
          href="http://localhost:8080/member/mypage"
          @mouseover="hidden_3=true"
          @mouseleave="hidden_3=false"
        >
          先生を募集する
          <i class="img_mypage" :class="{rotate:hidden_3}"></i>
        </a>

          <div
          class="menu_hidden_3"
          v-show="hidden_3"
          @mouseover="hidden_3=true"
          @mouseleave="hidden_3=false"
        >
          <div class="title">
            <p>Mypage</p>
          </div>
          <p>リンク</p>
          <p>リンク</p>
          <p>リンク</p>
        </div>
      </div>
      <div class="hover2">
        <a
          class="menu_tab"
          href="http://localhost:8080/member/mypage"
          @mouseover="hidden_4=true"
          @mouseleave="hidden_4=false"
        >
          英会話
          <i class="img_mypage" :class="{rotate:hidden_4}"></i>
        </a>

        <div
          class="menu_hidden_4"
          v-show="hidden_4"
          @mouseover="hidden_4=true"
          @mouseleave="hidden_4=false"
        >
          <div class="title">
            <p>Daily English Conversation</p>
          </div>
          <div>
            <p>   <a href="http://localhost:8080/member/searchresults/3">英会話</a>
          </p>
         
          </div>
          <div>
            <p>日本人の先生を検索する</p>
          </div>
        </div>
      </div>
      <div class="hover2">
        <a
          class="menu_tab"
          href="http://localhost:8080/member/mypage"
          @mouseover="hidden_5=true"
          @mouseleave="hidden_5=false"
        >
        大学受験
          <i class="img_mypage" :class="{rotate:hidden_5}"></i>
        </a>

        <div
          class="menu_hidden_5"
          v-show="hidden_5"
          @mouseover="hidden_5=true"
          @mouseleave="hidden_5=false"
        >
          <div class="title">
            <div class="title">
              <p>TOEIC</p>
            </div>
          </div>
          <p>リンク</p>
          <p>リンク</p>
        </div>
      </div>
      <div class="hover2">
        <a
          class="menu_tab"
          href="http://localhost:8080/member/mypage"
          @mouseover="hidden_6=true"
          @mouseleave="hidden_6=false"
        >
        文系資格
          <i class="img_mypage" :class="{rotate:hidden_6}"></i>
        </a>

        <div
          class="menu_hidden_6"
          v-show="hidden_6"
          @mouseover="hidden_6=true"
          @mouseleave="hidden_6=false"
        >
          <div class="title">
            <p>Correction of English</p>
          </div>
          <p>リンク</p>
          <p>リンク</p>
        </div>
      </div>
      <div class="hover2">
        <a
          class="menu_tab"
          href="http://localhost:8080/member/mypage"
          @mouseover="hidden_7=true"
          @mouseleave="hidden_7=false"
        >
          理系資格
          <i class="img_mypage" :class="{rotate:hidden_7}"></i>
        </a>

        <div
          class="menu_hidden_7"
          v-show="hidden_7"
          @mouseover="hidden_7=true"
          @mouseleave="hidden_7=false"
        >
          <p>リンク</p>
          <p>リンク</p>
          <p>リンク</p>
        </div>
      </div>
      <div class="hover2">
        <a
          class="menu_tab"
          href="http://localhost:8080/member/mypage"
          @mouseover="hidden_8=true"
          @mouseleave="hidden_8=false"
        >
          ビジネス英語
          <i class="img_mypage" :class="{rotate:hidden_8}"></i>
        </a>
        <div
          class="menu_hidden_8"
          v-show="hidden_8"
          @mouseover="hidden_8=true"
          @mouseleave="hidden_8=false"
        >
          <div class="title">
            <p>Business English</p>
          </div>
          <p>リンク</p>
          <p>リンク</p>
        </div>
      </div>
      <div class="hover2">
        <a
          class="menu_tab"
          href="http://localhost:8080/member/mypage"
          @mouseover="hidden_9=true"
          @mouseleave="hidden_9=false"
        >
          その他言語
          <i class="img_mypage" :class="{rotate:hidden_9}"></i>
        </a>
        <div
          class="menu_hidden_9"
          v-show="hidden_9"
          @mouseover="hidden_9=true"
          @mouseleave="hidden_9=false"
        >
          <div class="title">
            <p>Another Language</p>
          </div>
          <p>リンク</p>
          <p>リンク</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      setValue: "",
      hidden_1: false,
      hidden_2: false,
      hidden_3: false,
      hidden_4: false,
      hidden_5: false,
      hidden_6: false,
      hidden_7: false,
      hidden_8: false,
      hidden_9: false
      // memberId:"",
    };
  },
  props: {
    memberId: {
      type: String
    },
    newTeacher: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style>
div.menu_hidden_1 {
  /* float: left; */
  left: 15.3%;
  position: absolute;
  width: 350px;
  height: 300px;
    background: rgb(58, 76, 135);
  color: white;
  animation: fadeIn 0.2s ease 0.1s normal;
  z-index: 1;
     /* transform: translateY(-100vh) translateY(0px); */
}
div.menu_hidden_2 {
  /* float: left; */
  left: 21.4%;
  position: absolute;
  width: 350px;
  height: 300px;
  background: rgb(49, 74, 154);
  color: white;
  z-index: 1;
}
div.menu_hidden_3 {
  /* float: left; */
  left: 28.1%;
  position: absolute;
  width: 350px;
    height: 300px;
    background: rgb(49, 74, 154);
  color: white;
  z-index: 1;
}
div.menu_hidden_4 {
  /* float: left; */
  left: 31.9%;
  position: absolute;
  width: 450px;
    height: 300px;
    background: rgb(49, 74, 154);
  color: white;
  z-index: 1;
}
div.menu_hidden_5 {
  /* float: left; */
  left: 39%;
  position: absolute;
  width: 350px;
    height: 300px;
    background: rgb(49, 74, 154);
  color: white;
  z-index: 1;
}
div.menu_hidden_6 {
  /* float: left; */
  left: 44.3%;
  position: absolute;
  width: 350px;
    height: 300px;
    background: rgb(49, 74, 154);
  color: white;
  z-index: 1;
}
div.menu_hidden_7 {
  /* float: left; */
  left: 49.5%;
  position: absolute;
  width: 350px;
    height: 300px;
    background: rgb(85, 116, 218);
  color: white;
  z-index: 1;
}
div.menu_hidden_8 {
  /* float: left; */
  left: 55.4%;
  position: absolute;
  width: 350px;
    height: 300px;
    background: rgb(67, 97, 198);
  color: white;
  z-index: 1;
}
div.menu_hidden_9 {
  /* float: left; */
  left: 62%;
  position: absolute;
  width: 350px;
    height: 300px;
    background: rgb(49, 74, 154);
  color: white;
  z-index: 1;
}
</style>

<style scoped>
a.visited {
  color: rgb(234, 241, 242);
}

a.menu_tab {
  display: block;
  line-height: 50px;
  text-decoration: none;
  color: aliceblue;
  font: bold;
}

div.menu_wrapper {
  text-align: center;
  /* padding:0 10px */
}
img.title {
  height: 100px;
}
i.img_mypage {
  float: right;
  display: block;
  margin-left: 0;
  width: 30px;
  height: 50px;
  background: url("~@/assets/image/arrow.svg") 50% 50% no-repeat;
  color: rgb(8, 8, 9);
  text-decoration: none;
}
i.img_mypage.rotate {
  transform: rotateZ(180deg);
  transition-duration: 0.3s;
}
a.img_message {
  padding-left: 0px;
  padding-right: 0;
  line-height: 30px;
  /* background: url("~@/assets/image/arrow.svg") 50% 50% no-repeat; */
  text-decoration: none;
}
a.search_icon {
  padding-left: 20px;
  line-height: 30px;
  background: url("~@/assets/image/search-24px.svg") no-repeat;
  background-size: 10px 15px;
  text-decoration: none;
}
/* div.hover2 .message:hover{
 transform: rotateY(360deg);
} */

div.hover2 a {
  line-height: 50px;
}
.hover2:hover {
  /* opacity: 0.6; */
  cursor: pointer;
  background: rgb(99, 122, 250);
}
div.menu {
  overflow: hidden;
  /* position: relative; */
}
div.menu_wrapper {
  margin: 0 auto;
  width: 1200px;
  overflow: hidden;
}


div {
  overflow: hidden;
}
div.hover2 {
  float: left;
  margin: 0 7px;
}
p {
  float: left;
}
div.title {
  border-bottom: solid 1px gray;
}
@media screen and (max-width: 640px) {
  div {
  }
}
@media screen and (min-width: 640px) {
  div.menu {
    width: 100%;
    background: rgb(139, 157, 213);
       /* background: rgb(49, 74, 154); */
    /* background: linear-gradient(rgb(158, 189, 232), rgb(88, 132, 198)); */
  }
  p {
    width: 120px;
    margin-right: 10px;
  }
  div.menu {
    /* width: 1200px; */
  }
}
</style>