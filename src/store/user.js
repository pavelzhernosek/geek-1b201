import * as fb from "firebase";

export default {
  state: {
    user: null,
    users: []
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    updateUsers(state, payload) {
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
        if (user) {
          await fb
            .database()
            .ref("users")
            .push({ email });
          const fbVal = await fb
            .database()
            .ref("users")
            .once("value");
          const users = fbVal.val();
          commit("updateUsers", users);
          commit("setLoading", false);
        }
        commit("setUser", user.uid);
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

        commit("setUser", user.uid);
        commit("setLoading", false);
      } catch (error) {
        commit("setLoading", false);
        commit("setError", error.message);
        throw error;
      }
    },

    async fetchUsers({ commit }) {
      commit("clearError");
      commit("setLoading", true);
      try {
        const fbVal = await fb
          .database()
          .ref("users")
          .once("value");
        const users = fbVal.val();
        commit("updateUsers", users);
        commit("setLoading", false);
      } catch (error) {
        commit("setLoading", false);
        commit("setError", error.message);
        throw error;
      }
    },
    logout({ commit }) {
      commit("setUser", null);
    },
    autoLoginUser({ commit }, payload) {
      commit("setUser", payload.uid);
    }
  },
  getters: {
    users: state => state.users,
    user: state => state.user,
    logged: state => state.user != null
  }
};
