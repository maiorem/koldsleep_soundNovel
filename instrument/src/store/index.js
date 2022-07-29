import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

import musicStore from '@/store/modules/musicbox.js'

const store = new Vuex.Store({
    modules: {
        musicStore: musicStore,
    },
    //vuex plugin 명시
    plugins: [createPersistedState({
        paths: ["enteranceLibrary"]
    })]
})

export default store