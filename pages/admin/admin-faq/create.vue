<template>
  <v-container grid-list-xs>
    <v-form>
      <v-row class="mt-5">
        <h1>New FAQ</h1>
      </v-row>
      <BlogPost :submitForm="post" />
    </v-form>
  </v-container>
</template>

<script>
import { vAlert, DANGER } from "@/utils/valerts";
import BlogPost from "@/components/forms/BlogPost";

export default {
  middleware: ["auth", "auth-admin"],
  layout: "adminLayout",
  components: {
    BlogPost
  },
  methods: {
    async post(faq) {
      try {
        await this.$axios.post("/faq", faq);
        vAlert("Blog has been posted 123", this.$store);
      } catch {
        vAlert("Opps something went wrong", this.$store, DANGER);
      }
    }
  }
};
</script>

<style>
</style>
