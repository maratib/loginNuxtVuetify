<template>
  <div class="text-center">
    <v-menu v-model="menu" :close-on-content-click="true" :nudge-width="300" offset-y>
      <template v-slot:activator="{ on }">
        <v-avatar v-on="on" width="35" height="35">
          <img src="@/assets/img/waleed.jpeg" alt />
        </v-avatar>
      </template>
      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar width="90" height="90">
              <img src="@/assets/img/waleed.jpeg" alt="user" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="caption grey--text font-weight-medium">Hello,</v-list-item-title>
              <v-list-item-subtitle class="title">{{ $auth.user.name }}</v-list-item-subtitle>
              <nuxt-link to="/admin/admin-edit-profile">View and edit profile</nuxt-link>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list>
          <v-list-item-group v-model="item">
            <v-list-item to="/admin/admin-settings">
              <v-list-item-icon>
                <v-icon>mdi-tune</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Settings</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item @click="logout">
              <v-list-item-icon>
                <v-icon>mdi-logout-variant</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Logout</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    fav: true,
    menu: false,
    item: 0
  }),
  methods: {
    logout() {
      this.$auth.logout();
      this.$router.push("/");
    }
  }
};
</script>
