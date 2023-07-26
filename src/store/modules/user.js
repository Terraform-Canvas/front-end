// initial state
const state = () => ({
    email: null,
    name: null,
});

// getters
// 외부에서 가져갈 수 있는 get 부분
const getters = {
    getEmail: function (state) {
        return state.email;
    },
};

// actions
//외부에서 dispatch하는 action 종류
const actions = {
    save: function ({ commit }, userData) {
        commit("saveData", userData);
    },
};

// mutations
// 실제 변수 조작이 일어나는 곳
const mutations = {
    saveData: function (state, payload) {
        state.email = payload.email;
        state.name = payload.name;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
