import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    isAuthenticated: false,
  },
  getters: {
  },
  mutations: {
    setIsAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
  },
  actions: {
    login({ commit }) {
      commit('setIsAuthenticated', true);
    },
    logout({ commit }) {
      localStorage.removeItem('loggedInUser'); 
      commit('setIsAuthenticated', false);
  }
}, 
  modules: {
  }
});



