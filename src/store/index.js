import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    /* isAuthenticated: false, */
    isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated')) || false, //
  },
  
  getters: {
    isAuthenticated: state => state.isAuthenticated, //
    loggedInUser: state => state.loggedInUser, //-
  },
  mutations: {
    setIsAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
      localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));  //
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



