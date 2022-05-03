import Vue from 'vue'
import Vuex from 'vuex'

// modules
import { details } from '@/store/modules/details'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: {
      show: false,
      message: 'Loading',
      variant: 'primary',
      type: 'border'
    }
  },
  getters: {
    loading: (state) => {
      return state.loading
    }
  },
  mutations: {
    SET_LOADING: (state, loading) => {
      state.loading = loading
    }
  },
  actions: {
  },
  modules: {
    details
  }
})
