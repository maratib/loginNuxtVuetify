<template>
  <v-card width="400" class="mx-auto mt-6">
    <v-card-title class="indigo">
      <span class="white--text headline">{{ buttonText }}</span>
    </v-card-title>
    <v-card-text class="pt-12 pb-12">
      <v-form v-model="valid">
        <v-text-field
          v-model="userInfo.name"
          label="Name"
          prepend-icon="mdi-account-circle"
          :rules="[required('name'),  minLength('name', 4), maxLength('name', 30)]"
          v-if="hasName"
        />

        <v-text-field
          v-model="userInfo.email"
          label="Email"
          prepend-icon="mdi-email"
          :rules="[required('email'), emailFormat()]"
        />

        <v-text-field
          v-model="userInfo.password"
          label="Password"
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-key"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          counter="true"
          :rules="[required('password'), minLength('password', 4), maxLength('password', 30)]"
        />
      </v-form>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions class="pa-6">
      <v-btn text to="/register" v-if="!hasName">Sign up</v-btn>
      <v-btn text to="/login" v-if="hasName">Login</v-btn>
      <v-spacer></v-spacer>
      <v-btn @click="submitForm(userInfo)" :disabled="!valid" color="info">{{ buttonText }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import validations from "@/utils/validations";
export default {
  data() {
    return {
      valid: false,
      showPassword: false,
      // hasName: false,
      userInfo: {
        email: "",
        password: ""
      },
      ...validations
    };
  },
  props: ["submitForm", "buttonText", "hasName"]
};
</script>

<style lang="scss" scoped>
</style>
