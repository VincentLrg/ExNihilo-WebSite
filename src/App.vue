<template>
  <div id="app">
    <Hero :content="hero" />
    <Content v-for="(item, index) in content" :key="index+1" :content="item" :index="index+1" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Hero from "./components/Hero.vue";
import Content from "./components/Content.vue";

export default {
  name: "App",
  components: {
    Hero,
    Content
  },
  computed: {
    ...mapGetters(["content", "hero", "teams"])
  }
};
</script>

<style lang="scss" scoped>
  @import "./assets/scss/fonts";
  @import "./assets/scss/app";
</style>
