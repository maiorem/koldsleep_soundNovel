<template>
  <div class="background">
    <QuestionFirst />
  </div>
</template>

<script>
import QuestionFirst from '@/components/QuestionFirst.vue'

export default {
  name: 'HomeMain',
  props: {
    msg: String
  },
  components: {
    QuestionFirst,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background {
    height: 100vh;
    margin:0;
    background-image: url("@/assets/img/main.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
}
@media (max-width: 600px) {
  .background {
    width: 100vw;
    height: 820px;
    position:absolute;
  }
}


</style>
