<template>
  <v-container>
    <v-layout class="register-field" justify-center>
      <v-flex xs12 sm8 lg6 xl4>
        <panel class="text-uppercase" title="Registration field">
          <v-flex>
            <v-form name="events-form" ref="form" v-model="valid" validation>
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
              <v-text-field
                id="confirmPassword"
                prepend-icon="mdi-key"
                name="confirm-password"
                label="Confirm Password"
                :rules="confirmPasswordRules"
                type="password"
                v-model="confirmPassword"
              ></v-text-field>
            </v-form>
            <br />
            <v-btn
              :loading="loading"
              @click="registration"
              :disabled="!valid || loading"
            >
              Create account
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
      confirmPassword: "",
      valid: false,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [v => !!v || "Password is required"],
      confirmPasswordRules: [
        v => !!v || "Password is required",
        v => v === this.password || "Password should match"
      ]
    };
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  },
  methods: {
    registration() {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        };
        this.$store
          .dispatch("register", user)
          .then(() => {
            this.$router.push("/");
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
