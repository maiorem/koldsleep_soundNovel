<template>
  <div class="quiz_1">
    <div class="content_box">
      <div class="title_head">국립 음향 영재원 도서부 5월 퀴즈 이벤트</div>
      <div class="question">Q. 다음의 목록 중 음향 영재원 도서관에<br>가장 많이 대출된 도서는 무엇일까요?</div>
      <div class="answer-btn-area">
        <button class="answer_btn" @click="quizAnswer('incorrectOne')" type="submit"><div class="answers_box">① 천둥보다 크게, 진공보다 작게</div></button> <br>
        <button class="answer_btn" @click="quizAnswer('incorrectTwo')" type="submit"><div class="answers_box">② 소리 포터와 비밀의 팡파레</div></button> <br>
        <button class="answer_btn" @click="quizAnswer('incorrectThree')" type="submit"><div class="answers_box">③ 조용히 혼자 놀 수 있는 301가지 방법</div></button> <br>
        <button class="answer_btn" @click="quizAnswer('correctAnswer')" type="submit"><div class="answers_box">④ 가장 개인적인 악기</div></button> <br>
        <button class="answer_btn" @click="quizAnswer('incorrectFour')" type="submit"><div class="answers_box">⑤ 원더랜드의 암호 학교 - 소리편</div></button> <br>
      </div>
      <div class="footer">정답을 맞힌 학생에게는 '도서관 야단법석 허가증'을 드립니다.<br>허가증 소유시 홈페이지 안에서 발생시키는 모든 소음을 용납합니다.</div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'questionFirst',
  props : [
    'quizAnswer'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

button {
  text-decoration: none;
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  color: #FFFFFF;
}

.quiz_1 {
  box-sizing: border-box;

  position: absolute;
  left: 34.79%;
  top: 15.03%;

  height: 646px;
  width: 465px;

  background: rgba(26, 26, 26, 0.9);
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
}

.content_box {
  position: relative;
  text-align: center;

  width: 401px;
  height: 520px;
  margin-right: 32px;
  margin-left: 32px;
  top: 60px;
  bottom: 55px;

}

.title_head {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  /* identical to box height, or 21px */

  text-align: center;
  margin-bottom: 16px;

  color: #FFFFFF;

  opacity: 0.6;
}

.question {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  /* or 24px */

  text-align: center;

  color: #FFFFFF;
}
.answer-btn-area {
  margin-top: 30px;
  text-align: center;

  height: 350px;
  color: #FFFFFF;
}
.answer_btn {
  text-align: center;
  box-sizing: border-box;

  height: 57px;
  width: 313px;
  border-radius: 12px;
  background: rgba(26, 26, 26, 0.9);
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(40px);

  border: 1px solid rgba(255, 255, 255, 0.137);

  margin-bottom: 10px;
}

.answer_btn:hover {
  background: rgba(255, 255, 255, 0.137);
}

.answers_box {
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 200%;
  /* identical to box height, or 30px */

  align-items: center;
  text-align: center;

  opacity: 0.9;
  color: #FFFFFF;
}

.footer {
  
  font-style: normal;

  color: #FFFFFF;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;

  position: absolute;
  bottom: 0px;
}
@media (max-width: 600px) {
  .quiz_1 {
    position: relative;
    width: 100vw;
    height: 676px;
    left: 0;
    top: 3.45%;
    text-align: center;
    
  }
  .content_box {
    text-align: center;
    margin-left: 0;
    margin-right: 0;
    width: 280px;
    height: 550px;
    left: 12.53%;
  }

  .answer_btn {
    height: 57px;
    width: 281px;
  }
 
}


</style>
