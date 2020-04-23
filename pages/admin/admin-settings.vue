<template>
  <v-container grid-list-xs>
    <h1>Admin Settings</h1>
    <p>Only admin can view this page</p>
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
