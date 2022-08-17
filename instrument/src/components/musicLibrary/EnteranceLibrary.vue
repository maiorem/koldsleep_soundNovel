<template>
  <div class="wrap">
    <div class="web_container">
      <div v-draggable="{ update: active }" id="index_list">
        <div class="content_box_list">
        <div  @click="showComp(0)" class="novel_title"><v-img src="@/assets/img/dictionary.png" class="book_img"></v-img><div class="book_title">가장 개인적인 악기</div></div>
        <ul>
          <li @click="showComp(1)"><v-img src="@/assets/img/memo.png" class="book_img"></v-img>1.꿈을 오갈 때는 빈손으로</li>
          <li @click="showComp(2)"><v-img src="@/assets/img/memo.png" class="book_img"></v-img>2.고래의 아이</li>
          <li @click="showComp(3)"><v-img src="@/assets/img/memo.png" class="book_img"></v-img>3.누가 잠들고 누가 잠들지 않았는가</li>
          <li @click="showComp(4)"><v-img src="@/assets/img/memo.png" class="book_img"></v-img>4.한 마리의 새가 날아와 손바닥에 앉는다면</li>
          <li @click="showComp(5)"><v-img src="@/assets/img/memo.png" class="book_img"></v-img>5.목소리의 행방</li>
          <li @click="showComp(6)"><v-img src="@/assets/img/memo.png" class="book_img"></v-img>6.연구자 중 하나</li>
          <li @click="showComp(7)"><v-img src="@/assets/img/memo.png" class="book_img"></v-img>7.서울시 강북구 인수봉로 301 1층</li>
          <li @click="showComp(8)"><v-img src="@/assets/img/memo.png" class="book_img"></v-img>8.하늘의 고리와 눈을 마주치다</li>
          <li @click="showComp(9)"><v-img src="@/assets/img/memo.png" class="book_img"></v-img>9.버튼 하나를 눌러 타인의 꿈을 삭제하시겠습니까?</li>
          <li @click="showComp(10)"><v-img src="@/assets/img/memo.png" class="book_img"></v-img>10.스트로베리 캔디</li>
          <li @click="showComp(11)"><v-img src="@/assets/img/memo.png" class="book_img"></v-img>11.침입자에게는 문 너머가 없다</li>
          <li @click="showComp(12)"><v-img src="@/assets/img/memo.png" class="book_img"></v-img>12.세상에서 가장 개인적인 악기</li>
          <li @click="showComp(13)"><v-img src="@/assets/img/memo.png" class="book_img"></v-img>13.이 꿈은 갑자기 제 머릿속으로 쏙 들어왔음을 명시합니다.</li>
          <li @click="showComp(14)"><v-img src="@/assets/img/memo.png" class="book_img"></v-img>14.가짜여도 괜찮은</li>
        </ul>
        </div>
      </div>
      <MusicBox v-draggable="{ update: active }"  v-on:emptyEvent="emptyEvent" v-click-outside="onClickOutside"/>
      
      <PersonalInstrumentIntro v-draggable="{ update: active }" v-show="isShow[0]" v-on:btnclose="btnClose(0)"/>
      <indexOne v-draggable="{ update: active }" v-show="isShow[1]"  v-on:btnclose="btnClose(1)" />
      <indexTwo v-draggable="{ update: active }" v-show="isShow[2]"  v-on:btnclose="btnClose(2)" />
      <indexThree v-draggable="{ update: active }" v-show="isShow[3]"  v-on:btnclose="btnClose(3)" />
      <indexFour v-draggable="{ update: active }" v-show="isShow[4]"  v-on:btnclose="btnClose(4)" />
      <indexFive v-draggable="{ update: active }" v-show="isShow[5]"  v-on:btnclose="btnClose(5)" />
      <indexSix v-draggable="{ update: active }" v-show="isShow[6]"  v-on:btnclose="btnClose(6)" />
      <indexSeven v-draggable="{ update: active }" v-show="isShow[7]"  v-on:btnclose="btnClose(7)" />
      <indexEight v-draggable="{ update: active }" v-show="isShow[8]"  v-on:btnclose="btnClose(8)" />
      <indexNine v-draggable="{ update: active }" v-show="isShow[9]"  v-on:btnclose="btnClose(9)"  />
      <indexTen v-draggable="{ update: active }" v-show="isShow[10]"  v-on:btnclose="btnClose(10)" />
      <indexEleven v-draggable="{ update: active }" v-show="isShow[11]"  v-on:btnclose="btnClose(11)" />
      <indexTwelve v-draggable="{ update: active }" v-show="isShow[12]"  v-on:btnclose="btnClose(12)" />
      <indexThirteen v-draggable="{ update: active }" v-show="isShow[13]"  v-on:btnclose="btnClose(13)" />
      <indexFourteen v-draggable="{ update: active }" v-show="isShow[14]"  v-on:btnclose="btnClose(14)" />
      <div v-show="emptyState" class="emptyBox">
        <div class="textBox">
          채널헤드의 목소리를 발견하고<br>
          그들이 서로를 알아채게 만들어주세요.
        </div>
      </div>
    </div>
    <div class="mobile_container">
      <div class="cat_box">
        <v-img class="cat_love" src="@/assets/img/sanho.png"></v-img>
      </div>
      <div id="index_list">
        <div class="content_box_list">
        <a @click="showComp(0)" href="#"><div class="novel_title"><v-img src="@/assets/img/dictionary.png" class="book_img"></v-img><div class="book_title">가장 개인적인 악기</div></div></a>
        <ul>
          <li @click="showComp(1)"><v-img src="@/assets/img/memo.png" class="book_img"></v-img>1.꿈을 오갈 때는 빈손으로</li>
          <li @click="showComp(2)"><v-img src="@/assets/img/memo.png" class="book_img"></v-img>2.고래의 아이</li>
          <li @click="showComp(3)"><v-img src="@/assets/img/memo.png" class="book_img"></v-img>3.누가 잠들고 누가 잠들지 않았는가</li>
          <li @click="showComp(4)"><v-img src="@/assets/img/memo.png" class="book_img"></v-img>4.한 마리의 새가 날아와 손바닥에 앉는다면</li>
          <li @click="showComp(5)"><v-img src="@/assets/img/memo.png" class="book_img"></v-img>5.목소리의 행방</li>
          <li @click="showComp(6)"><v-img src="@/assets/img/memo.png" class="book_img"></v-img>6.연구자 중 하나</li>
          <li @click="showComp(7)"><v-img src="@/assets/img/memo.png" class="book_img"></v-img>7.서울시 강북구 인수봉로 301 1층</li>
          <li @click="showComp(8)"><v-img src="@/assets/img/memo.png" class="book_img"></v-img>8.하늘의 고리와 눈을 마주치다</li>
          <li @click="showComp(9)"><v-img src="@/assets/img/memo.png" class="book_img"></v-img>9.버튼 하나를 눌러 타인의 꿈을 삭제하시겠습니까?</li>
          <li @click="showComp(10)"><v-img src="@/assets/img/memo.png" class="book_img"></v-img>10.스트로베리 캔디</li>
          <li @click="showComp(11)"><v-img src="@/assets/img/memo.png" class="book_img"></v-img>11.침입자에게는 문 너머가 없다</li>
          <li @click="showComp(12)"><v-img src="@/assets/img/memo.png" class="book_img"></v-img>12.세상에서 가장 개인적인 악기</li>
          <li @click="showComp(13)"><v-img src="@/assets/img/memo.png" class="book_img"></v-img>13.이 꿈은 갑자기 제 머릿속으로 쏙 들어왔음을 명시합니다.</li>
          <li @click="showComp(14)"><v-img src="@/assets/img/memo.png" class="book_img"></v-img>14.가짜여도 괜찮은</li>
        </ul>
        </div>
      </div>
      <MusicBox />
      
      <PersonalInstrumentIntro v-show="isShow[0]" v-on:btnclose="btnClose(0)"/>
      <indexOne v-show="isShow[1]"  v-on:btnclose="btnClose(1)" />
      <indexTwo v-show="isShow[2]"  v-on:btnclose="btnClose(2)" />
      <indexThree v-show="isShow[3]"  v-on:btnclose="btnClose(3)" />
      <indexFour  v-show="isShow[4]"  v-on:btnclose="btnClose(4)" />
      <indexFive  v-show="isShow[5]"  v-on:btnclose="btnClose(5)" />
      <indexSix v-show="isShow[6]"  v-on:btnclose="btnClose(6)" />
      <indexSeven  v-show="isShow[7]"  v-on:btnclose="btnClose(7)" />
      <indexEight v-show="isShow[8]"  v-on:btnclose="btnClose(8)" />
      <indexNine v-show="isShow[9]"  v-on:btnclose="btnClose(9)"  />
      <indexTen v-show="isShow[10]"  v-on:btnclose="btnClose(10)" />
      <indexEleven v-show="isShow[11]"  v-on:btnclose="btnClose(11)" />
      <indexTwelve v-show="isShow[12]"  v-on:btnclose="btnClose(12)" />
      <indexThirteen v-show="isShow[13]"  v-on:btnclose="btnClose(13)" />
      <indexFourteen v-show="isShow[14]"  v-on:btnclose="btnClose(14)" />
      <div v-show="emptyState" class="emptyBox">
        <div class="textBox">
          채널헤드의 목소리를 발견하고<br>
          그들이 서로를 알아채게 만들어주세요.
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import PersonalInstrumentIntro from '@/components/musicLibrary/index/PersonalInstrumentIntro.vue'
import indexOne from '@/components/musicLibrary/index/indexOne.vue'
import indexTwo from '@/components/musicLibrary/index/indexTwo.vue'
import indexThree from '@/components/musicLibrary/index/indexThree.vue'
import indexFour from '@/components/musicLibrary/index/indexFour.vue'
import indexFive from '@/components/musicLibrary/index/indexFive.vue'
import indexSix from '@/components/musicLibrary/index/indexSix.vue'
import indexSeven from '@/components/musicLibrary/index/indexSeven.vue'
import indexEight from '@/components/musicLibrary/index/indexEight.vue'
import indexNine from '@/components/musicLibrary/index/indexNine.vue'
import indexTen from '@/components/musicLibrary/index/indexTen.vue'
import indexEleven from '@/components/musicLibrary/index/indexEleven.vue'
import indexTwelve from '@/components/musicLibrary/index/indexTwelve.vue'
import indexThirteen from '@/components/musicLibrary/index/indexThirteen.vue'
import indexFourteen from '@/components/musicLibrary/index/indexFourteen.vue'

import MusicBox from '@/components/musicLibrary/musicbox/MusixBox.vue'

import mobileCheck from '@/plugins/mobileCheck.js'



export default {
  name: 'enteranceLibrary',
  components: {
    PersonalInstrumentIntro,
    indexOne, indexTwo, indexThree,indexFour, indexFive, indexSix, indexSeven, indexEight, indexNine,
    indexTen, indexEleven, indexTwelve, indexThirteen, indexFourteen,
    MusicBox
  },
  data() {
    return {
      isShow : {
        0:true, 
        1:false, 
        2:false,
        3:false,
        4:false,
        5:false,
        6:false,
        7:false,
        8:false,
        9:false,
        10:false,
        11:false,
        12:false,
        13:false,
        14:false,
      },
      emptyState : false,
      active : false,
    }
  },
  methods: {
    showComp(index) {
      if (!this.isShow[index]) {
        this.isShow[index] = true;
      } 
    },
    btnClose(index) {
      this.isShow[index] = false;
    },
    emptyEvent() {
      this.emptyState = true
    },
    onClickOutside() {
      if (this.emptyState == true) {
        this.emptyState = !this.emptyState
      }
      
    }

  },
  created() {
    if (!mobileCheck) {
      this.active = true;
    }
  }

}






</script>
<style scoped>

.mobile_container {
  display: none;
}

.cat_love {
  position: relative;
  left: 5.92px;
  transform: rotate(6.69deg);
}

.cat_box {
box-sizing: border-box;

position: absolute;
width: 122px;
height: 129px;
left: 153.92px;
top: 58.34px;

background: rgba(26, 26, 26, 0.1);
box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.8);
backdrop-filter: blur(40px);
/* Note: backdrop-filter has minimal browser support */

border-radius: 20px;
transform: rotate(6.69deg);
}

.emptyBox {
  position: absolute;
  width: 500px;
  height: 500px;
  left: 34.79%;
  top: 30.03%;

  background: radial-gradient(50% 50% at 50% 50%, #000000 0%, rgba(0, 0, 0, 0) 100%);
  background-blend-mode: multiply;
  mix-blend-mode: normal;

  text-align: center;
}



.textBox{
  position: relative;
  top: 220px;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  text-align: center;

  color: #FFFFFF;

  text-shadow: 0px 0px 30px #1573A9;
}

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

  left: 143px;
  top: 300px;
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

  cursor: pointer;
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
  margin-right: 4px;
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
  cursor: pointer;
}

::-webkit-scrollbar {
display: none;
}
.dialog-header {
  display: none;
}

@media (max-width: 600px) {

    .web_container{
      display: none;
    }

    .mobile_container {
      display: block;
    }

    #index_list {
      top: 500px;
      left: 0;
      width: 100vw;
      height: 600px;
        
    }

    .content_box_list {
      height: 520px;

    }

    .emptyBox{
      left: 0;
      width: 100vw;
    }

}
</style>
