<template>
  <v-layout>
    <v-flex>
      <h1>{{ $t('hello') }}</h1>

      <div>
        <h1>Lang navigation</h1>
        <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
        <nuxt-link :to="switchLocalePath('it')">Italian</nuxt-link>
        <nuxt-link :to="switchLocalePath('es')">Espanol</nuxt-link>
        <nuxt-link :to="switchLocalePath('fr')">French</nuxt-link>
        <nuxt-link :to="switchLocalePath('de')">German</nuxt-link>
        <nuxt-link :to="switchLocalePath('pl')">Polish</nuxt-link>
      </div>

      <div v-if="$auth.loggedIn">
        <h1>Welcome {{ $auth.user.name }}</h1>
      </div>
      <nuxt-link :to="localePath('/about')">About</nuxt-link>
    </v-flex>
  </v-layout>
</template>


<script>
export default {};
</script>
