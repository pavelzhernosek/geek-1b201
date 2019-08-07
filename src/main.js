import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as fb from "firebase";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  router,
  created() {
    fb.initializeApp({
      apiKey: "AIzaSyCNu66ODzvooMrusQYQRQjIZTsBUJkyEX8",
      authDomain: "geek-1b201.firebaseapp.com",
      databaseURL: "https://geek-1b201.firebaseio.com",
      projectId: "geek-1b201",
      storageBucket: "",
      messagingSenderId: "746682027009",
      appId: "1:746682027009:web:7b4b3f4a65c86ef8"
    });
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch("autoLoginUser", user);
      }
    });
    this.$store.dispatch("fetchUsers");
  },
  render: h => h(App)
}).$mount("#app");
