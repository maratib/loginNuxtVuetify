<template>
  <v-app dark>
    <!-- Navbar -->
    <AdminNavbar />
    <!-- Page contents  -->
    <v-content class="mx-0">
      <nuxt />
    </v-content>
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
import AdminNavbar from "@/components/navigation/admin/AdminNavBar";

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
    AdminNavbar
  }
};
</script>
