<template>
    <div id="personal_intru">
        <div class="close-btn">
            <button @click="close"><v-img src="@/assets/img/closeButton2.png"></v-img></button>
        </div>
        <div class="content-wrap">
            <div class="title"><p>가장 개인적인 악기 소개</p></div>
            <div class="content">
                <div class="content-head">
                    <p>가장 개인적인 악기는 이인환각연쇄고리의 3차 연쇄고리 소설입니다. 2021년도 koldsleep에서 연구원 3에 의해 검증된 채널헤드 56명의 기록을 포함합니다. 집필 과정에서 작가는 모든 채널헤드들의 꿈 파편을 주관적인 해석으로 변환해 서사에 반영하였습니다. </p>
                </div>
                <div class="people">
                    <p><b>작가</b>  한주연 </p>
                    <p><b>기획/연출 </b> 김미현 </p>
                    <p><b>그래픽디자인</b>  rudenerdread</p>
                    <p><b>사운드디자인</b>  위지영 </p>
                    <p><b>개발</b>  홍세영 </p>
                    <p><b>채널헤드</b>  박하늘 란이 b 키아나 유은호 작은후진해변 midnighgaspel 시간의잎 아카리 ing_min 주원 지우 moremore 채령 염소 명진 차올로지 이동민 수양 최유윤 Soy 이지현 아니 김지언 홍세영 예하 sisibang 마고 선희 호저 느뉘망 유모목 지은 바다 윤보라 김현주 김미영 김연재 정윤 김선오 탱자 장은정 외 익명의 채널헤드 14인</p>
                    <p><b>주최/주관</b> koldsleep </p>
                    <p><b>후원</b> 서울특별시, 서울문화재단</p>
                    <p>2022년 예술창작활동지원사업 선정 프로젝트</p>
                    <br>
                    <br>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
  name: 'personal_intrument',
  methods: {
    close() {
        this.$emit("btnclose");
    }
  }
}
</script>

<style scoped>
::-webkit-scrollbar {
display: none;
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

  left: 806px;
  top: 100px;

  text-align: center;
}

.close-btn {
    position: relative;
    height: 16px;
    width: 16px;
    left: 0px;
    top: 0px;
    border-radius: 16px;
}

.content-wrap {
    position : relative;

    left: 60px;
    top: 64px;
    height: 569px;
    width: 380px;

    overflow-y: scroll;
}

.title {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height */

    text-align: center;

    color: #F1F1F1;

}

.content {
    margin-top: 58px;

    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 200%;
    /* or 36px */

    text-align: left;
    color: #F1F1F1;

}

.people {
    margin-top: 58px;

}


@media (max-width: 600px) {

    #personal_intru {
        left: 2.13%;
        top: 500px;
        width: 359px;
        height: 600px;
        
    }

    .content-wrap {
        width: 255px;

    }
    .title {
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        color: #EAEAEA;


    }

    .content {
        width: 255px;
        height: 520px;
        font-weight: 600;
        font-size: 14px;
        line-height: 200%;
        color: #EAEAEA;

    }
}
</style>