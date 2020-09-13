<template>
  <div class="teacher_ranking">
    <p>ランキング</p>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  }
};
</script>

<style scoped>
div.teacher-ranking {
margin-bottom: 15px;

}
p{
    /* float: left; */
}


@media screen and (max-width: 640px) {
  div {
   
  }
}
@media screen and (min-width: 640px) {
  div.teacher_ranking {
    width: 253px;
    margin-bottom: 15px;
    height: 100px;
    box-shadow: 0 3px 3px 0 rgb(144, 159, 182);
    background: white;
    border-radius: 1px;
  }
}
</style>