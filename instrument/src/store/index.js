import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

import musicbox from '@/store/modules/musicbox.js'

const store = new Vuex.Store({
    modules: {
        musicbox,
    },
    plugins: [createPersistedState()]
})

export default store