import axios from '@/plugins/axios';

// initial state
const state = () => ({
    instance_types: [],
    ami: [],
});

// getters
// 외부에서 가져갈 수 있는 get 부분
const getters = {
    getInstanceValue: function (state) {
        let instance_items = [];
        for (let value of state.instance_types) {
            instance_items.push(value.InstanceType);
        }
        instance_items.sort();
        return instance_items;
    },
    getAMIValue: function (state) {
        return state.ami;
    },
};

// actions
//외부에서 dispatch하는 action 종류
const actions = {
    getInstanceTypes: function ({ commit }) {
        return new Promise((resolve, reject) => {
            axios
                .get('/ec2/instanceTypes')
                .then((res) => {
                    commit('saveInstanceTypes', res.data);
                    resolve(res);
                })
                .catch((err) => {
                    console.error(err);
                    reject(err);
                });
        });
    },
    getAMI: function ({ commit }) {
        return new Promise((resolve, reject) => {
            axios
                .get('/ec2/ami')
                .then((res) => {
                    commit('saveAMI', res.data);
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
    saveAMI: function (state, payload) {
        state.ami = payload;
        state.ami.sort();
    },
    saveInstanceTypes: function (state, payload) {
        state.instance_types = payload;
        state.instance_types.sort();
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
