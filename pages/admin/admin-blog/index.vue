<template>
  <v-container grid-list-xs>
    <h1>Blog</h1>
    <p>Only admin can view this page</p>
    <nuxt-link to="admin-blog/create">New</nuxt-link>
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
