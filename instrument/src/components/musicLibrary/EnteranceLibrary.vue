<template>
  <div class="wrap">
    <dialog-drag id="index_list" :options="{x : 143, y : 300}">
      <div class="content_box_list">
      <div class="novel_title"><v-img src="@/assets/img/dictionary.png" class="book_img"></v-img><div class="book_title">가장 개인적인 악기</div></div>
      <ul>
        <li><v-img src="@/assets/img/memo.png" class="book_img"></v-img>꿈을 오갈 때는 빈손으로</li>
        <li><v-img src="@/assets/img/memo.png" class="book_img"></v-img>고래의 아이</li>
        <li><v-img src="@/assets/img/memo.png" class="book_img"></v-img>누가 잠들고 누가 잠들지 않았는가</li>
        <li><v-img src="@/assets/img/memo.png" class="book_img"></v-img>한 마리의 새가 날아와 손바닥에 앉는다면</li>
        <li><v-img src="@/assets/img/memo.png" class="book_img"></v-img>목소리의 행방</li>
        <li><v-img src="@/assets/img/memo.png" class="book_img"></v-img>연구자 중 하나</li>
        <li><v-img src="@/assets/img/memo.png" class="book_img"></v-img>서울시 강북구 인수봉로 301 1층</li>
        <li><v-img src="@/assets/img/memo.png" class="book_img"></v-img>하늘의 고리와 눈을 마주치다</li>
        <li><v-img src="@/assets/img/memo.png" class="book_img"></v-img>버튼 하나를 눌러 타인의 꿈을 삭제하시겠습니까?</li>
        <li><v-img src="@/assets/img/memo.png" class="book_img"></v-img>스트로베리 캔디</li>
        <li><v-img src="@/assets/img/memo.png" class="book_img"></v-img>침입자에게는 문 너머가 없다</li>
        <li><v-img src="@/assets/img/memo.png" class="book_img"></v-img>이 꿈은 갑자기 제 머릿속으로 쏙 들어왔음을 명시합니다.</li>
        <li><v-img src="@/assets/img/memo.png" class="book_img"></v-img>세상에서 가장 개인적인 악기</li>
        <li><v-img src="@/assets/img/memo.png" class="book_img"></v-img>가짜여도 괜찮은</li>
      </ul>
      </div>
    </dialog-drag>
    <dialog-drag id="instrument_button" :options="{x : 419, y : 500}">
      <p> Test dialog</p>
    </dialog-drag>
    <dialog-drag id="personal_intru" :options="{x : 806, y : 100}">
      <p> Test dialog</p>
    </dialog-drag>
  </div>
</template>

<script>
import DialogDrag from 'vue-dialog-drag'

export default {
  name: 'enteranceLibrary',
  components:{
    DialogDrag,
  },
}

</script>
<style src='vue-dialog-drag/dist/vue-dialog-drag.css'></style>
<style scoled>
#index_list {
  box-sizing: border-box;

  position: absolute;
  height: 473px;
  width: 387px;

  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.6);

  background: rgba(26, 26, 26, 0.9);
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;

  text-align: left;
}

#instrument_button {
  box-sizing: border-box;

  position: absolute;
  height: 374px;
  width: 336px;

  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.6);

  background: rgba(26, 26, 26, 0.9);
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

}

#personal_intru {
  box-sizing: border-box;

  position: absolute;
  height: 649px;
  width: 500px;

  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.6);

  background: rgba(26, 26, 26, 0.9);
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
}

.content_box_list {
  position: relative;
  top: 45px;
  left: 24px;
  width: 310px;
  height: 365px;
  overflow-y: scroll;
  overflow-x: none;
}

.novel_title {
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */


  color: #FDFDFE;

  width: 300px;
  height: 27px;

  margin-bottom: 13px;
}

.book_title {
  display: inline-block;
  padding-left: 3px;
  padding-top: 3px;
}

.book_img {
  width: 23px;
  height: 23px;
  display: inline-block;
  float: left;
}



ul {
  position: relative;

  list-style:none;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  color: #FCFCFD;

  left : 30px;
  width: 270px;
}

li {
  margin: 13px 0;
}

::-webkit-scrollbar {
display: none;
}
.dialog-header {
  display: none;
}

</style>