<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col>
        <UserAuthForm buttonText="Login" :submitForm="loginUser" :hasName="false" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserAuthForm from "@/components/forms/UserAuthForm";
export default {
  middleware: ["auth-login"],
  components: {
    UserAuthForm
  },
  methods: {
    async loginUser(loginInfo) {
      try {
        await this.$auth.loginWith("local", {
          data: loginInfo
        });
        this.$store.dispatch("snackbar/create", {
          text: `Thanks for signing in, ${this.$auth.user.name}`
        });
        this.$router.push("/");
      } catch {
        this.$store.dispatch("snackbar/create", {
          color: "red",
          text: "There was an issue signing in.  Please try again."
        });
      }
    }
  },
  head: {
    title: "Login",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description"
      }
    ],
    noscript: [{ innerHTML: "Body No Scripts", body: true }],
    script: [
      // { src: "/head.js" }
      // Supported since 1.0
      // { src: "/body.js", body: true },
      // { src: "/defer.js", defer: "" }
    ]
  }
};
</script>

<style>
</style>
