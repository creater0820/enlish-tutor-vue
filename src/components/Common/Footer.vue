<template>
  <div class="footer">
    <a href="http://localhost:8080/member/specified">特定商取引に基づく表記</a>
    <p>プライバシーポリシー</p>
    <p>お問い合わせ</p>
    <p>利用ガイド</p>
  </div>
</template>

<script>
export default {
  props: {
    username: String
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
body {
  margin: 0;
}
div.footer p {
  font-size: 13px;
}
div.footer {
  border-top: 1px solid #3282b8;
  background: #1b262c;
  color: white;
  width: 100%;
}

@media screen and (min-witdth: 768px) {
  div.footer {
  }
}
@media screen and (min-width: 990px) {
  div.footer {
  }
}
</style>