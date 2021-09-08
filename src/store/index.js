import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        loginBoo:false
    },
    mutations:{
        CHANGE_LOGIN(state,data){
            state.loginBoo=data;
        }
    },
    actions:{
        changeLogin({commit},data){
            commit('CHANGE_LOGIN',data)
        }
    }
})