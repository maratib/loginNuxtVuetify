<template>
  <v-container grid-list-xs>
    <h1>FAQ</h1>
    <p>Only admin can view this page</p>
    <nuxt-link to="admin-faq/create">New</nuxt-link>
  </v-container>
</template>

<script>
export default {
  middleware: ["auth", "auth-admin"],
  layout: "adminLayout"
};
</script>

<style>
</style>
