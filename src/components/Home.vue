<template>
  <v-container>
    <v-layout justify-center>
      <v-flex v-if="users" xs12 sm6>
        <h3 class="text-uppercase mt-5 mb-5">Accounts</h3>
        <v-simple-table>
          <thead>
            <tr>
              <th class="text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, i) in users" :key="i">
              <td>{{ user.email }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-flex>
      <v-flex class="text-center" v-else xs12 sm6>
        <h1>Users not found</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.getters.users;
    }
  }
};
</script>

<style scoped></style>
