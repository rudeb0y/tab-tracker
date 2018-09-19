import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  // plugins: [
  //   createPersistedState()
  // ],
  state: {
    token: 123,
    user: null,
    isUserLoggedIn: false,
  },
  mutations: {
    setToken(state, token) {
      this.state.token = token;
      this.state.isUserLoggedIn = !!(token);
    },
    setUser(state, user) {
      this.state.user = user;
    },
  },
  actions: {
    setToken({ commit }, token) {
      commit('setToken', token);
    },
    setUser({ commit }, user) {
      commit('setUser', user);
    },
  },
});

export default store;
