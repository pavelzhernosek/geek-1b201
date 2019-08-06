<template>
  <v-container>
    <v-layout justify-center>
      <v-flex v-if="users" xs12 sm6>
        <v-simple-table :fixed-header="fixedHeader">
          <thead>
            <tr>
              <th class="text-left">Email</th>
              <th class="text-left">Password</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.password">
              <td>{{ user.email }}</td>
              <td>{{ user.password }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-flex>
      <v-flex v-else xs12 sm6>
        <h1>Users not found</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    fixedHeader: false,
    users: [
      { email: "pavel@mail.ru", password: "udbsdofbs8f" },
      { email: "oleg@mail.ru", password: "oisdvmsd9" },
      { email: "andrew@mail.ru", password: "78scnd87bs" },
      { email: "sam@mail.ru", password: "98sjhsv-" },
      { email: "fedor@mail.ru", password: "sd87hv-s" },
      { email: "alex@mail.ru", password: "-a78nc0s87" }
    ]
  })
};
</script>

<style scoped></style>
