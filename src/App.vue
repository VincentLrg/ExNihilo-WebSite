<template>
  <div id="app">
    <Hero :content="hero" @scrollTo="scrollToSection"/>
    <Content v-for="(item, index) in content" :key="index+1" :content="item" :index="index+1" 
    @wheel="handleMouseWheel" @touchStart="touchStart" @touchMove="touchMove" />
    <Teams :members="teams" />
    <Footer :content="footer" />
    <CustomCursor />
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

import Content from "./components/Content";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Teams from "./components/Teams";

export default {
  name: "App",
  components: {
    Content,
    CustomCursor,
    Footer,
    Hero,
    Teams,
  },
  computed: {
    ...mapGetters(["content", "footer", "hero", "scrollInfo", "teams"]),
  },
  methods: {
    ...mapMutations(["activeSectionInc", "activeSectionDec", "inMoveFalse", "inMoveTrue"]),
    ...mapActions(["setActiveSection", "setToucheY", "setCount"]),

    scrollToSection(id, force = false) {
      if (this.scrollInfo.inMove && !force) return false;

      this.setActiveSection(id)
      this.inMoveTrue()

      document.getElementsByTagName('section')[id].scrollIntoView({ behavior: 'smooth' })

      setTimeout(() => {
        this.inMoveFalse();
      }, 400);
    },

    handleMouseWheel(e) {
      if (e.wheelDelta < 1 && !this.scrollInfo.inMove) {
        this.moveUp();
      } else if (e.wheelDelta > 1 && !this.scrollInfo.inMove) {
        this.moveDown();
      }

      e.preventDefault();
      return false;
    },

    touchStart(e) {
      this.setToucheY(e.touches[0].clientY);
    },

    touchMove(e) {
        if (this.scrollInfo.inMove) return false;
        e.preventDefault();
        const currentY = e.touches[0].clientY;
        if (this.scrollInfo.touchStartY < currentY) {
            this.moveDown();
        } else {
            this.moveUp();
        }
        this.setToucheY(0);
        return false;
    },

    moveUp() {
      if((this.scrollInfo.activeSection + 1) < this.scrollInfo.offsets.length){
        this.inMoveTrue();
        this.activeSectionInc();
        this.scrollToSection(this.scrollInfo.activeSection, true);
      }
    },
    moveDown() {
      if((this.scrollInfo.activeSection - 1 ) >= 0){
        this.inMoveTrue();
        this.activeSectionDec();
        this.scrollToSection(this.scrollInfo.activeSection, true);
      }
    }
  },
  created() {
    this.setCount(0) 
  },
  mounted() {
    window.addEventListener('DOMMouseScroll', this.handleMouseWheel); // Mozilla Firefox
    window.addEventListener('mousewheel', this.handleMouseWheel, {
        passive: false
    }); // Other browsers
    window.addEventListener('touchstart', this.touchStart, {
        passive: false
    }); // mobile devices
    window.addEventListener('touchmove', this.touchMove, {
        passive: false
    }); // mobile devices
  },
  destroyed() {
    window.removeEventListener('DOMMouseScroll', this.handleMouseWheel); // Mozilla Firefox
    window.removeEventListener('mousewheel', this.handleMouseWheel, {
        passive: false
    }); // Other browsers
    window.removeEventListener('touchstart', this.touchStart); // mobile devices
    window.removeEventListener('touchmove', this.touchMove); // mobile devices
  },
};
</script>

<style lang="scss" scoped>
  @import "./assets/scss/fonts.scss";
  @import "./assets/scss/app.scss";
</style>
