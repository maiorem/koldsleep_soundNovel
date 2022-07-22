<template>
  <div class="incorrect">
    <div class="content_box">
        <div class="incorrect_answer">아까워라! 조용히 다시 골라보세요.</div>
        <div class="title_head">③ 조용히 혼자 놀 수 있는 301가지 방법</div>
        <div class="answer_box">'기숙사에 들어가는 자녀에게 가장 사주고 싶은 책 2위'를 차지한(1위는 참고서) 고요한 놀이 책. 놀이 전문가 보로로의 자문을 받아 완성된 실용서적이다. 친구가 생겼을 경우를 대비해 부록으로 '조용히 함께 놀 수 있는 10가지 방법'도 실려 있다.</div>
        <button class="kicked_out"  @click="quizAnswer('questionFirst')" type="submit"><div class="footer">쫓겨나기</div></button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'incorrectOne',
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

.incorrect {
    box-sizing: border-box;

    position: absolute;
    left: 34.79%;
    right: 32.92%;
    top: 23.35%;
    bottom: 23.35%;

    height: 493px;
    width: 465px;

    background: rgba(26, 26, 26, 0.9);
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(40px);
    /* Note: backdrop-filter has minimal browser support */

    text-align: center;
    border-radius: 20px;
}

.content_box {
  position: relative;
  text-align: center;

  width: 365px;
  height: 400px;
  margin-right: 50px;
  margin-left: 50px;
  top: 60px;
  bottom: 60px;

}

.incorrect_answer{
    position: relative;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 200%;
    /* identical to box height, or 40px */

    margin-bottom: 6px;

    align-items: center;
    text-align: center;

    color: #FFFFFF;
}

.title_head {
    position: relative;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 200%;
    /* identical to box height, or 32px */

    margin-bottom: 28px;

    align-items: center;
    text-align: center;

    color: #FF4E4E;
}

.answer_box {
  position: relative;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 200%;
  /* identical to box height, or 30px */

  align-items: center;
  text-align : justify;

  opacity: 0.9;
  color: #FFFFFF;
}

.kicked_out {
  position: relative;
  font-style: normal;

  border: 1px solid rgba(255, 255, 255, 0.137);

  height: 57px;
  width: 365px;
 
  margin-top: 60px;
  border-radius: 12px;

}

.kicked_out:hover {
  background: rgba(255, 255, 255, 0.137);
}

.footer {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 200%;
  /* identical to box height, or 32px */

  align-items: center;
  text-align: center;

  color: #FFFFFF;
}

@media (max-width: 600px) {
  .incorrect {
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

  .kicked_off {
    height: 57px;
    width: 281px;
  }
 
}


</style>