import { createStore } from 'vuex'
import login from "@/store/modules/login"

export default createStore({
  modules: {
    login
  },
})