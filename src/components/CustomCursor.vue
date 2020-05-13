<template>
    <div :class="[ 'exn_cursor', { 'exn_cursor_hover': hover }, {'exn_cursor_hide': hideCursor}]">
        <div class="exn_cursor_point" ref="point" :style="cursorPoint"></div>
    </div>
</template>

<script>
export default {
    name: "CustomCursor",
    data () {
        return {
            xCursor: 0, 
            yCursor: 0,
            hover: false,
            hideCursor: false,
            offset: 10,
            lastYScroll: 0,
        }
    },
    computed: {
        cursorPoint() {
            return `transform: translateX(${this.xCursor - this.offset}px) translateY(${this.yCursor - this.offset}px) translateZ(0) translate3d(0, 0, 0);`
        }
    },
    methods: {
        moveCursor(e) {
            this.xCursor = e.clientX;
            this.yCursor = e.pageY;
        },
        async scrollCursor() {
            this.yCursor = this.yCursor - this.lastYScroll + window.scrollY
            await this.$nextTick()
            this.lastYScroll = window.scrollY
        }
    },
    mounted () {
        const links = document.querySelectorAll("a, button");
        document.addEventListener("mousemove", this.moveCursor);
        document.addEventListener("scroll", this.scrollCursor);

        document.addEventListener("mouseleave", () => {
            this.hideCursor = true;
        });
        document.addEventListener("mouseenter", () => {
            this.hideCursor = false;
        });

        links.forEach(link => link.addEventListener("mouseover", () => {this.hover = true; this.offset = 15}))
        links.forEach(link => link.addEventListener("mouseleave", () => {this.hover = false; this.offset = 10}))
    },
}
</script>

<style lang="scss">
    @import '~@/assets/scss/cursor';
</style>