<template>
  <div class="contents">
    <common-sidebar :newTeacher="newTeacher"></common-sidebar>
    <common-category :newTeacher="newTeacher"></common-category>
  </div>
</template>

<script>
import CommonSidebar from "@/components/Common/Sidebar";
import CommonCategory from "@/components/Common/Category";

export default {
  components: {
    CommonSidebar,
    CommonCategory
  },
  data() {
    return {
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
div {
  padding: 0 30px;
  /* display:flex; */
}
@media screen and (max-width: 640px) {
  div {
  }
}
@media screen and (min-width: 640px) {
  div.contents {
    overflow: hidden;
    max-width: 1260px;
    margin: 0 auto 0 auto;
    border-left: solid 1px #3282b8;
    border-right: solid 1px #3282b8;
  }
}
</style>