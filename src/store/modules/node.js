const state = () => ({
    selectedNode: null,
});

const getters = {
    getSelectedNode: function (state) {
        return state.selectedNode;
    },
};

const actions = {
    setSelectedNode: function ({ commit }, node) {
        commit('SET_SELECTED_NODE', node);
    },
    updateSelectedNodeData: function ({ commit }, payload) {
        commit('UPDATE_SELECTED_NODE_DATA', payload);
    },
    resetSelectedNode: function ({ commit }) {
        commit('RESET_SELECTED_NODE');
    },
};

const mutations = {
    SET_SELECTED_NODE: function (state, node) {
        state.selectedNode = node;
    },
    UPDATE_SELECTED_NODE_DATA: function (state, payload) {
        //vue에서 기본적으로 depth 1까지의 watch를 지원하여, 값 업데이트는 .data까지 접근하여 사용
        state.selectedNode.data = payload;
    },
    RESET_SELECTED_NODE: function (state) {
        state.selectedNode = null;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
