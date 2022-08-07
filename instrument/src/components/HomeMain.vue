<template>
  <div class="background">
    <div class="background-image" :style="src">
    <div :is="currentComponent" :quiz-answer="quizAnswer"></div>
    </div>
  </div>
</template>

<script>
import QuestionFirst from '@/components/QuestionFirst.vue'
import CorrectAnswer from '@/components/answers/CorrectAnswer.vue'
import IncorrectOne from '@/components/answers/IncorrectOne.vue'
import IncorrectTwo from '@/components/answers/IncorrectTwo.vue'
import IncorrectThree from '@/components/answers/IncorrectThree.vue'
import IncorrectFour from '@/components/answers/IncorrectFour.vue'
import EnteranceLibrary from '@/components/musicLibrary/EnteranceLibrary.vue'


export default {
  name: 'HomeMain',
  data: () => ({
    currentComponent : 'questionFirst',
    src : {}
  }),
  components: {
    'questionFirst' : QuestionFirst,
    'incorrectOne' : IncorrectOne,
    'incorrectTwo' : IncorrectTwo,
    'incorrectThree' : IncorrectThree,
    'incorrectFour' : IncorrectFour,
    'correctAnswer' : CorrectAnswer,
    'enteranceLibrary' : EnteranceLibrary,
  },
  methods: {
    quizAnswer: function(component) {
      this.currentComponent = component;
    }
  },
  created() {
    const bgImg = [
      '@/assets/bg/수면4.gif',
      '@/assets/bg/수면8.gif',
      '@/assets/bg/수면13.gif',
      '@/assets/bg/수면9.webp',
      '@/assets/bg/수면10.webp',
      '@/assets/bg/수면12.webp',
    ]

    const rdIdx = Math.floor(Math.random() * bgImg.length)
    this.src = {
      'background-image' : 'url('+bgImg[rdIdx]+')'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background {
    height: 100vh;
    margin:0; 
    background-image: url('@/assets/bg/수면8.gif');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
}

.background-image {
  height: 100%;
  widows: 100%;
}

@media (max-width: 600px) {
  .background {
    width: 100vw;
    height: 1341px;
    position:absolute;
    text-align: center;
  }
}


</style>
