<template>
  <div class="menu">
    <div class="menu_wrapper">
      <div class="hover2">
        <a
          class="menu_tab"
          @mouseover="hidden_1=true"
          @mouseleave="hidden_1=false"
          :href="'http://localhost:8080/member/profile/'+$store.state.memberId"
        >
          マイページ
          <i class="img_mypage" :class="{rotate:hidden_1}"></i>
        </a>
      </div>
      <div class="hover3">
        <input type="text" class="input_text" placeholder="キーワードで検索" />
      </div>
      <div class="hover2">
        <a class="menu_tab" @mouseover="hidden_3=true" @mouseleave="hidden_3=false">
          先生を探す
          <i class="img_mypage" :class="{rotate:hidden_3}"></i>
        </a>

        <div
          class="menu_hidden_3"
          v-show="hidden_3"
          @mouseover="hidden_3=true"
          @mouseleave="hidden_3=false"
        >
          <template v-for="(value,index) in tags">
            <div :key="index">
              <div>
                <a
                  :href="'http://localhost:8080/member/searchresultsteacher/'+value.id+'?page=1'"
                  class="menu_title_student"
                >{{value.name}}</a>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div class="hover2">
        <a class="menu_tab" @mouseover="hidden_4=true" @mouseleave="hidden_4=false">
          生徒を探す
          <i class="img_mypage" :class="{rotate:hidden_4}"></i>
        </a>

        <div
          class="menu_hidden_4"
          v-show="hidden_4"
          @mouseover="hidden_4=true"
          @mouseleave="hidden_4=false"
        >
          <template v-for="(value,index) in tags">
            <div :key="index">
              <div>
                <a
                  :href="'http://localhost:8080/member/searchresults/'+value.id+'?page=1'"
                  class="menu_title_student"
                >{{value.name}}</a>
              </div>
            </div>
          </template>
        </div>
      </div>

      <div class="hover2">
        <a class="menu_tab" @mouseover="hidden_7=true" @mouseleave="hidden_7=false">
          投稿する
          <i class="img_mypage" :class="{rotate:hidden_7}"></i>
        </a>

        <div
          class="menu_hidden_7"
          v-show="hidden_7"
          @mouseover="hidden_7=true"
          @mouseleave="hidden_7=false"
        >
          <div>先生を募集する</div>
          <div>生徒を募集する</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tags: [],
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
  created: function() {
    this.getTags();
  },
  methods: {
    getTags() {
      axios.get("http://127.0.0.1:8001/api/tags").then(this.tagsShow);
    },
    tagsShow(response) {
      window.console.log(response.data.tags);
      this.tags = response.data.tags;
    }
  },
  components: {},

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
div.menu_hidden_3 {
  background: #f1f3f8;
  color: #393b44;
  left: 11%;
  /* top:-5%; */
  position: absolute;
  width: 150px;
  height: 250px;
  box-shadow: 1px 1px 3px #393b44;
  z-index: 1;
  font-size: 13px;
  transition: ease 0.5s;
  opacity: 0.9;
}
div.menu_hidden_3:hover {
  background: #d6e0f0;
  color: #93b5cb;
  left: 11%;
  top: 90%;
  position: absolute;
  width: 150px;
  height: 255px;
  box-shadow: 1px 1px 3px #7f8291;
  z-index: 1;
  font-size: 13px;
  opacity: 1;
}
div.menu_hidden_4 {
  background: #f1f3f8;
  color: #393b44;
  left: 30%;
  position: absolute;
  width: 150px;
  height: 250px;
  box-shadow: 1px 1px 3px #393b44;
  z-index: 1;
  font-size: 13px;
}

div.menu_hidden_7 {
  background: #f1f3f8;
  color: #393b44;

  left: 48%;
  position: absolute;
  width: 150px;
  height: 100px;
  box-shadow: 1px 1px 3px #393b44;
  z-index: 1;
  font-size: 13px;
}
</style>

<style scoped>
a.visited {
  color: rgb(11, 12, 12);
}

a.menu_tab {
  display: block;
  line-height: 50px;
  text-decoration: none;
  color: rgb(22, 24, 26);
  font-size: 13px;
  background: #393b44;
  color: #f1f3f8;
  transition: 0.4s ease;
}
a.menu_tab:hover {
  text-decoration: none;
  color: #51adcf;
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
  /* background: url("~@/assets/image/expand_more_grey_192x192.png") 50% 50% no-repeat; */

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
}

div.menu_wrapper {
  margin: 0 auto;
  width: 1170px;
  overflow: hidden;
}

div.hover2 {
  float: left;
  margin: 0 7px;
}
div.hover3 {
  float: right;
  margin: 0 7px;
}
p {
  float: left;
}
div.title {
  /* border-bottom: solid 1px #4db7fe; */
}
@media screen and (max-width: 640px) {
  div {
  }
}
@media screen and (min-width: 640px) {
  div.menu {
    width: 100%;
    background: #393b44;
  }
  p {
    width: 120px;
    margin-right: 10px;
  }
  div.menu {
    /* width: 1200px; */
  }
  a.menu_title_student {
    text-decoration: none;
    color: #e9f6fe;
  }
  a.menu_title_student:hover {
    cursor: pointer;
    opacity: 0.5;
  }
  a.menu_title_student:visited {
    color: #393b44;
  }
  input.input_text {
    width: 200px;
    margin-top: 10px;
    height: 22px;
  }
}
</style>