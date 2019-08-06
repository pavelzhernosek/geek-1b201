import * as fb from "firebase";
class User {
  constructor(id) {
    this.id = id;
  }
}

export default {
  state: {
    user: null,
    users: []
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setUsers(state, payload) {
      state.users = payload;
    }
  },
  actions: {
    async register({ commit }, { email, password }) {
      commit("clearError");
      commit("setLoading", true);
      try {
        const user = await fb
          .auth()
          .createUserWithEmailAndPassword(email, password);
        commit("setUser", new User(user.uid));
        commit("setLoading", false);
      } catch (error) {
        commit("setLoading", false);
        commit("setError", error.message);
        throw error;
      }
    },
    async login({ commit }, { email, password }) {
      commit("clearError");
      commit("setLoading", true);
      try {
        const user = await fb
          .auth()
          .signInWithEmailAndPassword(email, password);
        commit("setUser", new User(user.uid));
        commit("setLoading", false);
      } catch (error) {
        commit("setLoading", false);
        commit("setError", error.message);
        throw error;
      }
    },
    autoLogin({ commit }, payload) {
      commit("setUser", new User(payload.uid));
    },
    logout({ commit }) {
      commit("setUser", null);
    }
  },
  getters: {
    users: state => state.users,
    user: state => state.user,
    logged: state => state.user != null
  }
};
