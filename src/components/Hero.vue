<template>
  <section class="exn_hero" ref="exnHero">
      <div class="exn_hero_content">
        <img :src="content.logo" alt="">
        <h1 class="exn_hero_title"><span class="title">{{ content.title }}</span><span class="baseline">{{ content.baseline }}</span></h1>
      </div>
    <div class="exn_hero_scrollDown">
        <p>
            <span v-for="(item, index) in content.scroll" :key="index" :class="`char${index+1}`">{{item}}</span>
            <span><a v-on:click="this.scrollParent">↓</a></span>
        </p>
    </div>
  </section>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

export default {
  name: "Hero",
  props: ["content"],
  methods: {
    ...mapActions([
      'setOffset'
    ]),
    ...mapMutations([
      'scrollInfoIncrement'
    ]),

    scrollParent(){
      this.$emit("scrollTo", 1)
    }
  },
  mounted(){
    this.scrollInfoIncrement();
    this.setOffset(this.$refs.exnHero.offsetTop);
  },
};
</script>

<style lang="scss">
    @import "~@/assets/scss/hero";
</style>
