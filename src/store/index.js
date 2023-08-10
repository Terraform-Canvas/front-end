import { createStore } from 'vuex';
import login from '@/store/modules/login';
import user from '@/store/modules/user';
import aws from '@/store/modules/aws';
import node from '@/store/modules/node';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    modules: {
        login,
        user,
        aws,
        node,
    },
    plugins: [createPersistedState()],
});
