<template>
    <div id="personal_intru">
        <div class="close-btn">
            <button @click="close"><v-img src="@/assets/img/closeButton2.png"></v-img></button>
        </div>
        <div class="content-wrap">
            <div class="title"><p>버튼 하나를 눌러 타인의 꿈을 삭제하시겠습니까?</p></div>
            <div class="content">
 사람은 목적을 가지고 생성된 공간이 의무를 다하고 있지 않을 때 이상하다고 여긴다. 예를 들면 수영하는 사람이 없는 수영장, 쇼핑하는 사람들이 사라진 마트. 꿈에서는 차가 다니지 않는 4차선 도로를 보고 그렇게 느꼈다.
<br>
<br>
꿈에서 나는 친구들과 함께 수상한 지역에 가게 된다. 아무도 지나지 않는 국도를 걸었다. 친구들과 나는 노란 빛이 감도는 축사에 입장했다가 나온다. 짚더미에 엎드려 쉬는 소들이 있었다. 꿈속의 동행자들과 나는 그 지역을 탈출해야 한다는 확신에 찬다. 마땅한 위협의 증거나 사유는 없었다. 빠져나오기 위해 번화가로 향했다. 자잘한 골목을 헤매면서, 누구나 살면서 한번쯤 죽을 만큼 뛰어야하는 순간이 있다는 글귀를 떠올린다.
<br>
<br>
탈출 헬기를 타기 위해서는 노래방이 있는 건물의 옥상까지 가야 했다. 그러나 탈출에 실패하고 낙오된 나는 결국 지역의 만두집에 위장취업한 채로 떠나기 좋은 순간을 기다린다….   
<br>
<br>
라고, 연구자 3의 꿈 기록 웹사이트에 적었다. 그의 연구를 돕기 위함이었지만 꿈을 재현하려고 나름 시각적인 번역을 동원한 글이었다. 꿈은 현실에 영향을 미치지 못한다. 아무리 엄청난 경험을 했어도 으스대거나 호들갑을 떨기에는 참 김새는 측면이 있다. 논픽션으로서의 가치는 없어도 픽션으로의 가능성은 있지 않을까? 꽤 성실하게 수상한 만두 꿈을 기록했으나, 그 일기는 며칠 뒤 삭제된다. 그러나 삭제에는 비밀번호가 필요하다. 운영자이거나. 연구자 3에게 전화를 걸어봤다.
<br>
<br>
“저기요. 연구자 3. 두 번 사과했잖아요. 그거 백업도 안 되어있는데.”
<br>
<br>
[친절하게 다시 설명해주세요.]
<br>
<br>
“드림 네트워크에 열심히 써서 올린 꿈 일기가 없어졌어요.”
<br>
<br>
조용한 연구자들의 이면을 볼 수 있는 순간은 그들의 연구 과정에 외부적 변수가 생겼을 때 뿐이다. 그는 누가 뼈식물의 가지를 꺾어간 것처럼 속상하다고 말했다. 연구자 3은 맹세코 본인이 지우지 않았다고 얘기해주었다. 
<br>
<br>
이 이후로도 게시판의 일기는 세 개쯤이 더 사라진다. 일기 사이에 마땅한 공통점은 없다. 연구자 3에게 범인을 좁혔냐고 물어보았지만, 사이트의 로그 기록으로도 찾기 어려운 상황이었다. 그래서 연구자 3은 꿈 일기의 삭제 기능을 제거하는 것으로 그의 홈페이지를 보호하기로 한다. 그 이후로 일기가 사라지는 일은 멎었다.
<br>
<br>
‘수상한 지역에서’라는 제목을 가졌던 나의 꿈 일기는 그렇게 다시 세상에서 증발되었다. 
<br>
<br>
어떤 꿈들은 잡으려도 결코 잡히지 않는다. 버튼 하나를 눌러 타인의 꿈을 삭제한 사람에게도 같은 역할을 해줄 해커가 필요할지 궁금하다. 당신의 뜻에 동의하는 바입니다. 꿈이 뭐가 그렇게 중요하겠습니까…. 자는 동안 뇌가 혼자 주물러놓은 찰흙놀이 같은 거지. 
<br>
<br>
하지만 이후로도 나는 자주 꿈을 꾸면서 더운 땀을 흘린다. 꿈을 꾸는 날은 형체 없는 대상에 화가 난 채로 깨어난다. 나를 행복하게 해줄 마음이 없는 무의식 같은 건, 나가서 죽어버리는 편이 좋아. 네가 이러면 안 되잖아. 너까지 나한테 이러면 안 되잖아. 거울을 사납게 바라보는 심정으로 다섯 손가락을 오므려 주먹을 쥐어본다. 나는 매일 밤 형체가 없는 유실물의 마지막 증거로서 살아간다. 
<br>
<br>            
            </div>
        </div>
    </div>
</template>
<script>

export default {
  name: 'index_eight',
  methods: {
    close() {
        this.$emit("btnclose");
    }
  }
}
</script>

<style coped>


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

  left: 1006px;
  top: 500px;

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


</style>