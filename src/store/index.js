import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        flag: false,
        id: ''
    },
    getters : {
        isLogin: state =>{
            return state.flag
        },
        getId: state => {
            return state.id           
        }
    },
    mutations : {
        changeFlag(state,n){
            return state.flag = n;
        },
        changeId(state,n){
            return state.id = n;
        }
    }
})

export default store 