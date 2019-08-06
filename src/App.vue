<template>
  <v-app>
    <page-header />
    <v-content fluid>
      <v-layout align-center justify-center>
        <v-flex xs12 md10>
          <router-view> </router-view>
        </v-flex>
      </v-layout>
    </v-content>
    <template v-if="error">
      <v-snackbar
        color="error"
        :multi-line="true"
        :timeout="5000"
        @input="closeError"
        :value="true"
      >
        {{ error }}
        <v-btn dark text @click="closeError">
          Close
        </v-btn>
      </v-snackbar>
    </template>
  </v-app>
</template>

<script>
import PageHeader from "@/components/PageHeader";
export default {
  name: "App",
  components: {
    PageHeader
  },
  data: () => ({
    //
  }),
  computed: {
    error() {
      return this.$store.getters.error;
    }
  },
  methods: {
    closeError() {
      this.$store.dispatch("clearError");
    }
  }
};
</script>
<style>
.login-field,
.register-field {
  margin-top: 120px;
}
</style>
