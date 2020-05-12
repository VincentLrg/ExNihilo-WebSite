<template>
  <div id="app">
    <Hero :content="hero" />
    <Content v-for="(item, index) in content" :key="index+1" :content="item" :index="index+1" />
    <Teams :members="teams" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Hero from "./components/Hero.vue";
import Content from "./components/Content.vue";
import Teams from "./components/Teams.vue";

export default {
  name: "App",
  components: {
    Hero,
    Content,
    Teams
  },
  computed: {
    ...mapGetters(["content", "hero", "teams"])
  },
};
</script>

<style lang="scss" scoped>
  @import "./assets/scss/fonts";
  @import "./assets/scss/app";
</style>
