<template>
  <div class="eh_hero">
      <div class="eh_hero_content">
        <img :src="content.logo" alt="">
        <h1 class="eh_hero_title"><span class="title">{{ content.title }}</span><span class="baseline">{{ content.baseline }}</span></h1>
      </div>
    <!-- <div class="eh_hero_scrollDown"></div> -->
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: ["content"]
};
</script>

<style lang="scss">
    img{
        width: 52%;
        height: auto;
    }
    .eh_hero{
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        &_content{
            width: 100%
        }
        &_title{
            font-size: 14px;
            letter-spacing: 0.8em;
            .title{
                display: none;
            }
        }
    }
</style>
