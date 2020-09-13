<template>
  <div class="footer">
   <img src="@/assets/image/maxresdefault.jpeg" alt="">

  </div>
</template>

<script>
export default {
  props: {
    username: String
  },
  data() {
    return {
     
    };
  }
};


</script>

<style scoped>
img{
    width: 100%;
    height: 200px;
}
body{
  margin: 0;
}
div.footer p{
  font-size:13px;
}
div.footer {

  background-color:rgb(50, 49, 49);
  color: white;
  width:100%;
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