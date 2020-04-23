<template>
  <div>
    <!-- Left side drawer  -->
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- ? Left Side drawer ends -->

    <!-- App Bar  -->
    <v-app-bar fixed app flat height="70">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="mr-n6"></v-app-bar-nav-icon>
      <v-toolbar-title class="mr-6">Title</v-toolbar-title>
      <v-btn text to="/admin/dashboard" v-if="$auth.user && $auth.user.admin">Admin</v-btn>

      <v-spacer></v-spacer>

      <!-- <v-btn text to="/howitworks">How it works</v-btn> -->
      <v-btn icon to="/chat" class="mx-4" v-if="$auth.user">
        <v-icon>mdi-message-outline</v-icon>
      </v-btn>
      <NotificationMenu class="ml-n2" v-if="$auth.user" />
      <UserMenu v-if="$auth.user" class="ml-3" />
      <RegisterMenu v-if="!$auth.user" class="mt-n3" />
    </v-app-bar>
    <!-- App Bar ends -->
  </div>
</template>

<script>
import UserMenu from "@/components/navigation/UserMenu";
import RegisterMenu from "@/components/navigation/RegisterMenu";
import NotificationMenu from "@/components/navigation/NotificationMenu";

export default {
  data() {
    return {
      drawer: false,
      rightDrawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-home",
          title: "Home",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "How it works",
          to: "/howitworks"
        }
      ],
      title: "My App",
      cities: ["Germany", "America", "Euorope"]
    };
  },
  components: {
    RegisterMenu,
    UserMenu,
    NotificationMenu
  }
};
</script>

<style>
</style>
