<template>
  <div class="background">
    <div :is="currentComponent" :quiz-answer="quizAnswer"></div>
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
    },
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background {
    height: 100vh;
    margin:0; 

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
