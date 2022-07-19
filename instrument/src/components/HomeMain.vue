<template>
  <div class="background">
  </div>
</template>

<script>
export default {
  name: 'HomeMain',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background {
   height: 100vh;
    overflow: hidden;
    margin:0;
    background-image: url("../assets/img/main.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
}
</style>
