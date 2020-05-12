<template>
  <div class="exn_hero">
      <div class="exn_hero_content">
        <img :src="content.logo" alt="">
        <h1 class="exn_hero_title"><span class="title">{{ content.title }}</span><span class="baseline">{{ content.baseline }}</span></h1>
      </div>
    <div class="exn_hero_scrollDown">
        <p>
            <span v-for="(item, index) in content.scroll" :key="index" :class="`char${index+1}`">{{item}}</span>
            <span><a href="#exn_content1">↓</a></span>
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: ["content"]
};
</script>

<style lang="scss">
    @import "~@/assets/scss/hero";
</style>
