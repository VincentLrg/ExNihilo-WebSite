<template>
  <div class="eh_hero">
      <div class="eh_hero_content">
        <img :src="content.logo" alt="">
        <h1 class="eh_hero_title"><span class="title">{{ content.title }}</span><span class="baseline">{{ content.baseline }}</span></h1>
      </div>
    <div class="eh_hero_scrollDown">
        <p>
            <span v-for="(item, index) in content.scroll" :key="index" :class="`char${index+1}`">{{item}}</span>
            <span><a href="">↓</a></span>
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
        &_scrollDown{
            p span {
                font: 1em Monaco, MonoSpace;
                font-weight: bold;
                height: 4em;
                position: absolute;
                width: 20px;
                right: 15%;
                bottom: 15%;
                transform-origin: bottom center;
            }
            p span:nth-child(29) {
                font-weight: bold;
                font-size: 36px;
                width: auto;
                height: auto;
                bottom: 12.5%;
                a, a:link, a:visited {
                    text-decoration: none;
                    color: #000;
                }
            }
        }
    }
    @mixin rotated-text($num-letters, $angle-span, $angle-offset) {
        $angle-per-char: $angle-span / $num-letters;
        @for $i from 1 through $num-letters{
            .eh_hero_scrollDown p .char#{$i} {
                animation: circleAnim#{$i} 15s linear infinite;
                transform: rotate($angle-offset + $angle-per-char * $i)
            }
            @keyframes circleAnim#{$i} {
                from {
                    transform: rotate($angle-offset + $angle-per-char * $i)
                }

                to {
                    transform: rotate($angle-offset + $angle-span + $angle-per-char * $i)
                }
            }
        };
    }
    @include rotated-text(28, 360deg, 0deg)
</style>
