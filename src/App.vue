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
  })
};
</script>
<style>
.login-field,
.register-field {
  margin-top: 120px;
}
</style>
