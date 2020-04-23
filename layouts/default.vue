<template>
  <v-app dark>
    <!-- Navbar -->
    <Navbar />
    <!-- Page contents  -->
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <!-- Footer  -->
    <v-footer>
      <nuxt-link :to="localePath('/about')">About</nuxt-link>
      <nuxt-link :to="localePath('/terms')" class="ml-4">Terms of use</nuxt-link>
      <nuxt-link :to="localePath('/privacy')" class="ml-4">Privacy policy</nuxt-link>
      <nuxt-link :to="localePath('/blog')" class="ml-4">Blogs</nuxt-link>
      <nuxt-link :to="localePath('/faq')" class="ml-4">FAQ</nuxt-link>
      <nuxt-link :to="localePath('/contact')" class="ml-4">Contact</nuxt-link>

      <v-spacer></v-spacer>
      <div>Company &copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
    <!-- SnackBar starts  -->
    <v-snackbar
      v-for="(snackbar, index) in snackbars.filter(s => s.showing)"
      :key="snackbar.text + Math.random()"
      :value="snackbar.showing"
      @input="removeSnackbar(snackbar)"
      :timeout="snackbar.timeout"
      :color="snackbar.color"
      :style="`bottom: ${(index * 60) + 8}px`"
    >
      {{snackbar.text}}
      <v-btn text @click="removeSnackbar(snackbar)">Close</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import Navbar from "@/components/navigation/NavBar";

export default {
  computed: {
    ...mapState({ snackbars: state => state.snackbar.snackbars })
  },
  methods: {
    removeSnackbar(snackbar) {
      this.$store.dispatch("snackbar/remove", snackbar);
    }
  },
  components: {
    Navbar
  }
};
</script>
