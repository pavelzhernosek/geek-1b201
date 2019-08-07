<template>
  <v-container>
    <v-layout class="login-field" justify-center>
      <v-flex xs12 sm8 lg6 xl4>
        <panel class="text-uppercase" title="Login field">
          <v-flex>
            <v-form
              name="events-form"
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                prepend-icon="mdi-account"
                name="email"
                label="Email"
                type="email"
                :rules="emailRules"
                v-model="email"
              ></v-text-field>
              <v-text-field
                id="password"
                prepend-icon="mdi-key"
                name="password"
                label="Password"
                :rules="passwordRules"
                type="password"
                v-model="password"
              ></v-text-field>
            </v-form>
            <br />
            <v-btn
              :loading="loading"
              @click="login"
              :disabled="!valid || loading"
            >
              Login
            </v-btn>
          </v-flex>
        </panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Panel from "@/components/Panel";
export default {
  data() {
    return {
      email: "",
      password: "",
      valid: false,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [v => !!v || "Password is required"]
    };
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  },
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        };
        this.$store
          .dispatch("login", user)
          .then(() => {
            this.$router.push("./");
          })
          .catch(() => {});
      }
    }
  },
  components: {
    Panel
  }
};
</script>

<style scoped></style>
