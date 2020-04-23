<template>
  <v-row class="mt-5">
    <v-col cols="8">
      <v-row>
        <v-col cols="12">
          <!-- <rich-text-editor @update="onUpdate" /> -->
        </v-col>
        <v-col cols="12">
          <v-text-field v-model="form.title" label="Title"></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-textarea v-model="form.body" label="Body"></v-textarea>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="4">
      <v-col cols="12">
        <v-btn color="primary" @click="submitForm(form)" class="block">Publish Now</v-btn>
      </v-col>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      form: {
        lang: "en",
        title: "",
        body: ""
      }
    };
  },

  props: ["submitForm"]
};
</script>

<style>
</style>
