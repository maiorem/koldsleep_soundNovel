<template>
  <div class="correct">
    <div class="content_box">
        <div class="correct_answer">정답!</div>
        <div class="title_head">④ 가장 개인적인 악기</div>
        <button class="enterance"  @click="quizAnswer('enteranceLibrary')" type="submit"><div class="footer">도서관 입장</div></button>
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

.correct {
  box-sizing: border-box;

  position: absolute;
  left: 34.79%;
  right: 32.92%;
  top: 32.43%;
  bottom: 32.54%;

  height: 324px;
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

  width: 365px;
  height: 230px;
  margin-right: 50px;
  margin-left: 50px;
  top: 60px;
  bottom: 60px;

}

.correct_answer{
    position: relative;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 200%;
    /* identical to box height, or 40px */

    margin-bottom: 20px;

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

    margin-bottom: 47px;

    align-items: center;
    text-align: center;

    color: #318BBF;
}

.enterance {
  position: relative;
  font-style: normal;

  border: 1px solid rgba(255, 255, 255, 0.137);

  height: 57px;
  width: 365px;
 
  border-radius: 12px;

}

.enterance:hover {
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
  .correct {
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

  .enterance {
    height: 57px;
    width: 281px;
  }
 
}


</style>