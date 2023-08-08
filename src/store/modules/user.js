import axios from '@/plugins/axios';
// initial state
const state = () => ({
    email: null,
    name: null,
    accessKey: false,
    secretKey: false,
});

// getters
// 외부에서 가져갈 수 있는 get 부분
const getters = {
    getEmail: function (state) {
        return state.email;
    },
    getKeyStatus: function (state) {
        return {
            accessKey: state.accessKey,
            secretKey: state.secretKey,
        };
    },
};

// actions
//외부에서 dispatch하는 action 종류
const actions = {
    save: function ({ commit }, userData) {
        commit('saveData', userData);
    },
    saveKey: function ({ commit }, params) {
        return new Promise((resolve, reject) => {
            axios
                .post('/user/key', params)
                .then((res) => {
                    commit('saveKeyData');
                    resolve(res);
                })
                .catch((err) => {
                    console.error(err);
                    reject(err);
                });
        });
    },
    getKey: function ({ commit }) {
        return new Promise((resolve, reject) => {
            axios
                .get('/user/key/get')
                .then((res) => {
                    commit('getKeyData', res.data.keyInfo);
                    resolve(res);
                })
                .catch((err) => {
                    console.error(err);
                    reject(err);
                });
        });
    },
};

// mutations
// 실제 변수 조작이 일어나는 곳
const mutations = {
    saveData: function (state, payload) {
        state.email = payload.email;
        state.name = payload.name;
    },
    saveKeyData: function (state) {
        state.accessKey = true;
        state.secretKey = true;
    },
    getKeyData: function (state, payload) {
        state.accessKey = payload.accessKey;
        state.secretKey = payload.secretKey;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
