<template>
  <div class="text-center">
    <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="300" offset-y>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-bell-outline</v-icon>
        </v-btn>
      </template>
      <v-card class="pa-5 text-center bell-card" height="350">
        <h1 class="subtitle-1 mb-3 font-weight-medium">No Admin notifications</h1>
        <h1 class="caption font-weight-medium grey--text mb-9">Check back here for updates!</h1>
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
<style scoped>
.bell-card {
  background: url("~@/assets/img/notification.png") no-repeat;
}
</style>
