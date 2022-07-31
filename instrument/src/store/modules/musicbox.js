import fingerQuestionPlay from '@/assets/sounds/voice/KS_voice_48.wav' //질문하는 연극 손가락
import fingerRunner from '@/assets/sounds/voice/KS_voice_11.wav' //도망가는 희망손

const state = {
    musicIcons : {
        1: { "usable" :"disabled", "src" : fingerQuestionPlay},
        2: { "usable" :"disabled", "src" : fingerRunner},
        3: { "usable" :"disabled", "src" : fingerRunner},
        4: { "usable" :"disabled", "src" : fingerRunner},
        5: { "usable" :"disabled", "src" : fingerRunner},
        6: { "usable" :"disabled", "src" : fingerRunner},
        8: { "usable" :"disabled", "src" : fingerRunner},
        9: { "usable" :"disabled", "src" : fingerRunner},
        10: { "usable" :"disabled", "src" : fingerRunner},
        11: { "usable" :"disabled", "src" : fingerRunner},
        12: { "usable" :"disabled", "src" : fingerRunner},
        13: { "usable" :"disabled", "src" : fingerRunner},
        14: { "usable" :"disabled", "src" : fingerRunner},
        15: { "usable" :"disabled", "src" : fingerRunner},
        16: { "usable" :"disabled", "src" : fingerRunner},
        17: { "usable" :"disabled", "src" : fingerRunner},
        18: { "usable" :"disabled", "src" : fingerRunner},
        19: { "usable" :"disabled", "src" : fingerRunner},
        20: { "usable" :"disabled", "src" : fingerRunner},
        21: { "usable" :"disabled", "src" : fingerRunner},
        22: { "usable" :"disabled", "src" : fingerRunner},
        23: { "usable" :"disabled", "src" : fingerRunner},
        24: { "usable" :"disabled", "src" : fingerRunner},
        25: { "usable" :"disabled", "src" : fingerRunner},
        26: { "usable" :"disabled", "src" : fingerRunner},
        27: { "usable" :"disabled", "src" : fingerRunner},
        28: { "usable" :"disabled", "src" : fingerRunner},
        29: { "usable" :"disabled", "src" : fingerRunner},
        30: { "usable" :"disabled", "src" : fingerRunner},
        31: { "usable" :"disabled", "src" : fingerRunner},
        32: { "usable" :"disabled", "src" : fingerRunner},
        33: { "usable" :"disabled", "src" : fingerRunner},
        34: { "usable" :"disabled", "src" : fingerRunner},
        35: { "usable" :"disabled", "src" : fingerRunner},
        36: { "usable" :"disabled", "src" : fingerRunner},
        37: { "usable" :"disabled", "src" : fingerRunner},
        38: { "usable" :"disabled", "src" : fingerRunner},
        39: { "usable" :"disabled", "src" : fingerRunner},
        40: { "usable" :"disabled", "src" : fingerRunner},
        41: { "usable" :"disabled", "src" : fingerRunner},
        42: { "usable" :"disabled", "src" : fingerRunner},
        43: { "usable" :"disabled", "src" : fingerRunner},
        44: { "usable" :"disabled", "src" : fingerRunner},
        45: { "usable" :"disabled", "src" : fingerRunner},
        46: { "usable" :"disabled", "src" : fingerRunner},
        47: { "usable" :"disabled", "src" : fingerRunner},
        48: { "usable" :"disabled", "src" : fingerRunner},
        49: { "usable" :"disabled", "src" : fingerRunner},
        50: { "usable" :"disabled", "src" : fingerRunner},
        51: { "usable" :"disabled", "src" : fingerRunner},
        52: { "usable" :"disabled", "src" : fingerRunner},
        53: { "usable" :"disabled", "src" : fingerRunner},

    },
};

const getters = {
    getMusicIcons(state) {
        return state.musicIcons;
    },
    getMusicIconUsable : (state) => (num) => {
        return state.musicIcons[num].usable;
    },
    getMusicIconSrc : (state) => (num) =>{
        return state.musicIcons[num].src;
    }
};

const actions = {

    loadIcons(state) {
        return state.musicIcons;
    },

    // loadIcon: (state) => (num) => {
    //     return state.musicIcons[num].usable;
    // },

    toggleText(state, iconNum) {

        const audio = new Audio(state.musicIcons[iconNum].src);

        console.log("toggle text : " + iconNum);
        
        // 해당 텍스트 아이콘이 활성화가 안된 상태라면 활성화
        if (state.musicIcons[iconNum].usable != "active") {
            state.musicIcons[iconNum].usable = "active";
            console.log("toggle text : " + state.musicIcons[iconNum].usable);
            audio.play();


        // 해당 텍스트 아이콘이 활성화 상태라면 멈춤
        } else if (state.musicIcons[iconNum].usable == "active") {
            state.musicIcons[iconNum].usable = "stop";
            console.log("toggle text : " + state.musicIcons[iconNum].usable);
            audio.pause();
        } 
       
    },

    // 아이콘 클릭
    toggleIcon(state, iconNum) {

        const audio = new Audio(state.musicIcons[iconNum].src);

        console.log("toggle icon : " + iconNum);
        

        // 해당 텍스트 아이콘이 활성화인 상태면 멈춤 (흰배경)
        if (state.musicIcons[iconNum].usable == "active") {
            state.musicIcons[iconNum].usable = "stop";
            console.log("toggle icon : " + state.musicIcons[iconNum].usable);
            audio.pause();
            

        // 해당 텍스트 아이콘이 멈춤상태면 다시 활성화
        } else if (state.musicIcons[iconNum].usable == "stop") {
            state.musicIcons[iconNum].usable = "active";
            console.log("toggle icon : " + state.musicIcons[iconNum].usable);
            audio.play();

        // 비활성화 상태면 emptyIcon()    
        } else {
            this.emptyIcon();
        }
    },

    // 빈 아이콘 클릭
    emptyIcon() {
        console.log("empty icon");

    },
    



    // 비활성화가 아닌 아이콘 전체 재생
    allPlay() {

    },

    // 전체 멈춤
    allStop() {

    },

    // 저장된 음악 리셋
    allReset() {
        localStorage.clear();

    }


}


const mutations = {

    
    // 텍스트 클릭
    toggleText(state, iconNum) {

        const audio = new Audio(state.musicIcons[iconNum].src);

        console.log("toggle text : " + iconNum);
        
        // 해당 텍스트 아이콘이 활성화가 안된 상태라면 활성화
        if (state.musicIcons[iconNum].usable != "active") {
            state.musicIcons[iconNum].usable = "active";
            console.log("toggle text : " + state.musicIcons[iconNum].usable);
            audio.play();


        // 해당 텍스트 아이콘이 활성화 상태라면 멈춤
        } else if (state.musicIcons[iconNum].usable == "active") {
            state.musicIcons[iconNum].usable = "stop";
            console.log("toggle text : " + state.musicIcons[iconNum].usable);
            audio.pause();
        } 
       
    },

    // 아이콘 클릭
    toggleIcon(state, iconNum) {

        const audio = new Audio(state.musicIcons[iconNum].src);

        console.log("toggle icon : " + iconNum);
        

        // 해당 텍스트 아이콘이 활성화인 상태면 멈춤 (흰배경)
        if (state.musicIcons[iconNum].usable == "active") {
            state.musicIcons[iconNum].usable = "stop";
            console.log("toggle icon : " + state.musicIcons[iconNum].usable);
            audio.pause();
            

        // 해당 텍스트 아이콘이 멈춤상태면 다시 활성화
        } else if (state.musicIcons[iconNum].usable == "stop") {
            state.musicIcons[iconNum].usable = "active";
            console.log("toggle icon : " + state.musicIcons[iconNum].usable);
            audio.play();

        // 비활성화 상태면 emptyIcon()    
        } else {
            this.emptyIcon();
        }
    },

    // 빈 아이콘 클릭
    emptyIcon() {
        console.log("empty icon");

    },
    



    // 비활성화가 아닌 아이콘 전체 재생
    allPlay() {

    },

    // 전체 멈춤
    allStop() {

    },

    // 저장된 음악 리셋
    allReset() {
        localStorage.clear();

    }

};


export default {
    state, getters, actions, mutations
};