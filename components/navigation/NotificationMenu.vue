<template>
  <div class="text-center">
    <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="300" offset-y>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-bell-outline</v-icon>
        </v-btn>
      </template>
      <v-card class="pa-5 text-center bell-card" height="250">
        <h1 class="subtitle-1 mb-3 font-weight-medium">No notifications</h1>
        <h1 class="caption font-weight-medium grey--text mb-9">Check back here for updates!</h1>
        <img src="@/assets/img/notification.png" alt />
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    fav: true,
    menu: false,
    item: 1
  })
};
</script>
