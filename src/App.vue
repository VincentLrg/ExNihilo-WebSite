<template>
  <div id="app">
    <Hero :content="hero" />
    <Content v-for="(item, index) in content" :key="index+1" :content="item" :index="index+1" />
    <Teams :members="teams" />
    <CustomCursor />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Content from "./components/Content";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import Teams from "./components/Teams";

export default {
  name: "App",
  components: {
    Content,
    CustomCursor,
    Hero,
    Teams
  },
  computed: {
    ...mapGetters(["content", "hero", "teams"])
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
  @import "./assets/scss/fonts";
  @import "./assets/scss/app";
</style>
