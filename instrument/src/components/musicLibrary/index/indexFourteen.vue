<template>
    <div id="personal_intru">
        <div class="close-btn">
            <button @click="close"><v-img src="@/assets/img/closeButton2.svg"></v-img></button>
        </div>
        <div class="content-wrap">
            <div class="title"><p>가짜여도 괜찮은</p></div>
            <div class="content">
 우리 연구소는 주택가의 한가운데에 있었다. 밤이면 고요하고 어두웠다. 모두가 잠들거나 잠들기를 시도한다는 뜻이다. 밤과 새벽에 그 안을 걷는 건 무수히 많은 꿈들을 비집고 지나가는 일이다. 하지만 나에게는 꿈의 목소리가 들리지 않았다. 존재하는 것을 못 보는 사람과, 그걸 혼자만 보는 사람 중에서 누가 더 쓸쓸할까? 나는 고래 이리에의 외롭고 고유한 뒤통수를 떠올린다. 전력을 차단하고, 문을 잠그는 와중에 그에게 물었다.
<br>
<br>
“우리만 기숙사 방송 듣고 나왔던 날 기억 나?”
<br>
<br>
“응.”
<br>
<br>
“그날 나 말고 다른 애가 그 소리를 들었다면, 너는 걔랑 친구가 됐을까?”
<br>
<br>
“모르지. 어쨌든 너랑 친구가 되지는 못했을지도.”
<br>
<br>
몸이 스치다가 친해진 게 아니라, 하나의 사건에 기대어 진전된 인연이었다. 꽤 특별했던 필요충분조건이 갖춰지지 않은 가정에 대한 마땅히 이성적인 판단이다. 그럼에도 약간의 심술을 부리고 싶었다. 
<br>
<br>
“너도 청력으로 친구를 고르는 그렇고 그런 인간이냐?”
<br>
<br>
김이리에가 웃었다. 
<br>
<br>
“보이지 않아도 <span class="sound_text_visited" :class="{'sound-text' : visited[54] === 'disabled'}" @click="play('좋겠지')">찾아낼 수 있다면 좋겠지만</span>, 모든 일은 서로가 존재한다는 걸 알아채고 시작되잖아.”
<br>
<br>
컴컴한 골목을 함께 걸으며, 나는 김이리에 등 뒤로 투명한 목소리들이 꼬리처럼 따라붙는 모습을 상상했다. 가려낼 수 있는 안목이 없어 온갖 백귀들의 영혼을 불러들이고야 마는 서투른 영매처럼.
<br>
<br>
“이리에. 네가 불러들인 사람들이 가짜라면 어떡할래?”
<br>
<br>
“어떤 일은 진짜가 아니라도 충분히 좋아.”
<br>
<br>
언젠가 김이리에가 나의 꿈에 끌려와 그 다음 날 말해준 적이 있다. “선우야. 그 사탕 통 안에, 호랑이 연고랑 반짇고리밖에 없어. 그게 전부야.” 
<br>
<br>
사람에게는 반드시 타인의 방문을 필요로 하는 서사가 있다. 저주를 푸는 주문이란 증명 없이도 효력을 지닌다. 나는 2분의 1 사이즈 미니 후프링차임을 생각하며 대답했다. 
<br>
<br>
“맞아. 아무도 그걸 가짜라고 부를 수는 없어.”
 <br>
<br>
            </div>
        </div>
    </div>
</template>
<script>
import eventBus from '@/plugins/eventbus.js'
import store from "@/store/index.js";

export default {
  name: 'index_fourteen',
  data() {
    return {
        visited : {
            54: store.getters['getMusicIconUsable'](54),
        },
        
    }
  },
  methods: {
    close() {
        this.$emit("btnclose");
    },
    play(message) {

        switch(message) {
            case '좋겠지' :      
                store.commit("toggleText", 54)
                eventBus.$emit("iconUsable", 54); 
                this.visited[54] = 'active';
                break; 
            
        }
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

  left: 150px;
  top: 200px;

  text-align: center;
}

.close-btn {
    position: relative;
    height: 16px;
    width: 16px;
    left: 16px;
    top: 16px;
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

@media (max-width: 600px) {

    #personal_intru {
        top: 500px;
        left: 0;
        width: 100vw;
        height: 600px;
        
    }

    .content-wrap {
        left: 45px;
        width: 310px;
        height: 510px;
    }
    
    .title {
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        color: #EAEAEA;


    }

    .content {
        width: 310px;
        height: 510px;
        font-weight: 600;
        font-size: 14px;
        line-height: 200%;
        color: #EAEAEA;

    }
}

</style>