import axios from '@/plugins/axios'
import VueCookies from 'vue-cookies'
// initial state
const state = () => ({
    accessToken: null,
    refreshToken: null,
    host: 'http://localhost:8000/api/v1'
})

// getters
// 외부에서 가져갈 수 있는 get 부분
const getters = {
    getToken: function(state) {
        return {
            access: VueCookies.get("accessToken"),
            refresh: VueCookies.get("refreshToken")
        }
    }
}

// actions
//외부에서 dispatch하는 action 종류
const actions = {
    login: function({commit}, params) {
        return new Promise((resolve,reject) => {
            axios.post("/login/new",params).then(res => {
                // authInfo라는 변수로 넘겨줘야함.
                commit('loginToken',res.data.authInfo)
                resolve(res);
            }).catch(err => {
                console.error(err)
                reject(err)
            })
        })
    },
    refreshToken: function({commit}) {
        return new Promise((resolve, reject) => {
            axios.post('/login/refresh').then(res => {
                commit('refreshToken', res.data.authInfo);
                resolve(res);
            }).catch(err => {
                console.error(err)
                reject(err)
            })
        })
    },
    logout: function({commit}) {
        return new Promise((resolve, reject) => {
            axios.post('/logout').then(res => {
                commit('removeToken');
                location.reload();  
                resolve(res);
            }).catch(err => {
                console.error(err)
                reject(err)
            })
        })
    }
}

// mutations
// 실제 변수 조작이 일어나는 곳
const mutations = {
    loginToken: function(state, payload) {
        VueCookies.set('accessToken', payload.accessToken, '10m');
        VueCookies.set('refreshToken', payload.refreshToken, '1h');
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
    },
    refreshToken: function(state, payload) {
        VueCookies.set('accessToken', payload.accessToken, '10m');
        VueCookies.set('refreshToken', payload.refreshToken, '1h');
        state.accessToken = payload;
    },
    removeToken : function(state) {
        VueCookies.remove('accessToken');
        VueCookies.remove('refreshToken');
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}