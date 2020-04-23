<template>
  <v-container grid-list-xs>
    <h1>FAQ</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam ut commodi fugiat, sunt qui eius. A, dolor! Iure, sit aliquam minima voluptatibus inventore tempora, architecto quam cumque ex numquam aspernatur?</p>
  </v-container>
</template>

<script>
export default {
  components: {},
  head: {
    title: "FAQ",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description"
      }
    ],
    noscript: [{ innerHTML: "Body No Scripts", body: true }],
    script: [
      // { src: "/head.js" }
      // Supported since 1.0
      // { src: "/body.js", body: true },
      // { src: "/defer.js", defer: "" }
    ]
  }
};
</script>

<style>
</style>
