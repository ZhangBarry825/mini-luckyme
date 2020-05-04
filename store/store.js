import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        MusicPlayStatus:0
    },
    mutations: {
        pausePlay(){
            this.MusicPlayStatus=0
        },
        startPlay(){
            this.MusicPlayStatus=1
        }
    },
    actions: {}
})
export default store