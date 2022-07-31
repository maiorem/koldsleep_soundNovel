import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

import musixbox from '@/store/modules/musicbox.js'

const store = new Vuex.Store({
    modules: {
        musixbox,
    },
    plugins: [createPersistedState()]
})

export default store