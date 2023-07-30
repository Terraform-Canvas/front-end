import { createStore } from 'vuex';
import login from '@/store/modules/login';
import user from '@/store/modules/user';
import aws from '@/store/modules/aws';
export default createStore({
    modules: {
        login,
        user,
        aws,
    },
});
