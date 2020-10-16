<template>
  <div class="contents">
    <common-category :newTeacher="newTeacher"></common-category>
    <common-sidebar :newTeacher="newTeacher"></common-sidebar>
    <div id="test">
      <LoadExternal :url="some_url"></LoadExternal>
    </div>
  </div>
</template>

<script>
import CommonSidebar from "@/components/Common/Sidebar";
import CommonCategory from "@/components/Common/Category";

import LoadExternal from "@/components/Common/LoadExternal.vue";

export default {
  components: {
    CommonSidebar,
    CommonCategory,
    LoadExternal
  },
  data() {
    return {
      some_url: "https://api.repl-ai.jp/v1/registration",
      setValue: ""
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
@media screen and (max-width: 640px) {
}
@media screen and (min-width: 640px) {
  div.contents {
    overflow: hidden;
    max-width: 1360px;
    margin: 0 auto;
    background: #f1f3f8;
  }
}
</style>