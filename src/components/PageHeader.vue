<template>
  <div>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link tag="span" to="/" class="pointer">
        <span class="title ml-3 mr-5 headline text-uppercase"
          >show<span class="font-weight-light">users</span></span
        ></router-link
      >
      <v-spacer></v-spacer>

      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn v-if="!logged" :to="{ name: 'registration' }" icon>
          <v-icon>mdi-account-plus</v-icon>
        </v-btn>
        <v-btn v-if="!logged" :to="{ name: 'login' }" icon>
          <v-icon>mdi-login-variant</v-icon>
        </v-btn>
        <v-btn v-if="logged" @click="logout" icon>
          <v-icon>mdi-logout-variant</v-icon>
        </v-btn>
      </template>
    </v-app-bar>
    <v-navigation-drawer temporary app v-model="drawer">
      <v-list-item v-if="!logged" :to="{ name: 'login' }">
        <v-list-item-action>
          <v-icon>mdi-login-variant</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Login</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-if="!logged" :to="{ name: 'registration' }">
        <v-list-item-action>
          <v-icon>mdi-account-plus</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Sign up</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <template v-slot:append>
        <v-list-item @click="logout" text v-if="logged">
          <v-list-item-action>
            <v-icon>mdi-logout-variant</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    drawer: true
  }),
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({
        name: "login"
      });
    }
  },
  computed: {
    ...mapGetters(["user", "logged"])
  }
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
