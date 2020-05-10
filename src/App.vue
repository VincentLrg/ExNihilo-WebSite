<template>
  <div id="app">
    <Hero :content="hero" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Hero from "./components/Hero.vue";

export default {
  name: "App",
  components: {
    Hero
  },
  computed: {
    ...mapGetters(["content", "hero", "teams"])
  }
};
</script>

<style lang="scss">
body{
  margin: 0;
  box-sizing: border-box;
}
#app {
  height: 600vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  background: linear-gradient(#f5f4ff 5%, #6b5cff 25%, #000000 45%);
}
</style>
