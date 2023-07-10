import { createStore } from 'vuex'
import login from "@/store/modules/login"
import user from "@/store/modules/user"
export default createStore({
  modules: {
    login,
    user
  },
})