<template>
  <div class="quiz_1">
  </div>
</template>

<script>


export default {
  name: 'QuestionFirst',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.quiz_1 {
    box-sizing: border-box;

    position: absolute;
    left: 34.79%;
    right: 32.92%;
    top: 15.03%;
    bottom: 15.14%;

    background: rgba(26, 26, 26, 0.9);
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(40px);
    /* Note: backdrop-filter has minimal browser support */

border-radius: 20px;
}
</style>
