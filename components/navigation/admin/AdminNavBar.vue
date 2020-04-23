<template>
  <div>
    <!-- Left side drawer  -->
    <!-- <Drawer :data1="navigation" /> -->
    <v-navigation-drawer :mini-variant="miniVariant" fixed app>
      <h1 class="display-1 text-center my-5 white--text">
        <span v-if="!miniVariant">Admin</span>&nbsp;
      </h1>
      <v-divider></v-divider>
      <v-list>
        <template v-for="(item, idx) in navigation.items">
          <v-divider :key="idx" v-if="item.title === '-'"></v-divider>
          <v-list-item v-else :to="item.to" :key="item.id" :title="item.title">
            <v-list-item-action>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <!-- ? Left Side drawer ends -->

    <!-- App Bar  -->
    <v-app-bar fixed app flat height="70" dark>
      <v-app-bar-nav-icon @click="miniVariant = !miniVariant" class="mr-n6"></v-app-bar-nav-icon>
      <v-toolbar-title class="mr-6">
        <v-list-item to="/admin/dashboard">Admin</v-list-item>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon to="/admin/adminchat" class="mx-4" v-if="$auth.user">
        <v-icon>mdi-message-outline</v-icon>
      </v-btn>
      <AdminNotificationMenu class="ml-n2" v-if="$auth.user" />
      <AdminUserMenu v-if="$auth.user" class="ml-3" />
    </v-app-bar>
    <!-- App Bar ends -->
  </div>
</template>

<script>
import AdminUserMenu from "@/components/navigation/admin/AdminUserMenu";
import AdminNotificationMenu from "@/components/navigation/admin/AdminNotificationMenu";

export default {
  data() {
    return {
      fixed: false,
      miniVariant: true,
      title: "My App",
      navigation: {
        drawer: true,
        items: [
          {
            title: "Dashboard",
            icon: "mdi-apps",
            to: "/admin/dashboard"
          },
          { title: "-" },
          {
            title: "Sample Task",
            icon: "mdi-checkbox-marked-circle-outline",
            to: "/admin/admin-task"
          },
          { title: "-" },
          {
            title: "SEO",
            icon: "mdi-rocket",
            to: "/admin/admin-seo"
          },
          { title: "-" },
          {
            title: "Pages",
            icon: "mdi-checkbox-multiple-blank",
            to: "/admin/admin-pages"
          },
          {
            title: "Blog",
            icon: "mdi-blogger",
            to: "/admin/admin-blog"
          },
          {
            title: "FAQ",
            icon: "mdi-comment-question-outline",
            to: "/admin/admin-faq"
          },
          { title: "-" },
          {
            title: "Home Page",
            icon: "mdi-home",
            to: "/"
          }
        ]
      }
    };
  },
  components: {
    AdminUserMenu,
    AdminNotificationMenu
  }
};
</script>

<style>
</style>
