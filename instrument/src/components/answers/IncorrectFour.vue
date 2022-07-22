<template>
  <div class="incorrect">
    <div class="content_box">
        <div class="incorrect_answer">아까워라! 조용히 다시 골라보세요.</div>
        <div class="title_head">⑤ 원더랜드의 암호 학교 - 소리편</div>
        <div class="answer_box">세상에서 가장 많은 암호를 만들어낸 추리 소설가 '원더랜드'. 그가 정리해놓은 암호의 비밀을 밝히다! '소리편'에서는 특히 음향과 진동을 이용하여 메시지를 전하는 방법을 정리해두었다. 당신이 듣는 소음, 그 안의 숨겨진 의도를 읽어보자!</div>
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