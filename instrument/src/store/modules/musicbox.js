const state = {
    musicStates: {
        disable : "disable",
        active : "active",
        stop : "stop"
    },
    musicIcons : [],
    musicActives: {

    }
};

const getters = {
    getMusicState(state) {
        return state.musicStates;
    },
    getMusicIcons(state) {
        return state.musicIcons;
    },
    getMusicActives(state) {
        return state.musicActives;
    }
};

const mutations = {

    // 빈 아이콘 클릭
    emptyIcon() {

    },
    
    // 텍스트 클릭
    toggleText(keyword) {
        console.log(keyword);
    },

    // 사운드 활성 아이콘 클릭 : 흰배경 음악 멈춤
    activeIconToggle(index) {
        console.log(index);
    },

    // 텍스트 토글, 사운드 비활성 아이콘 클릭 : 푸른색 음악 재생
    stopIconToggle(index) {
        console.log(index);
    },

    // 전체 재생
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
    state, getters, mutations
};