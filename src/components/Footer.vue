<template>
    <section class="exn_footer" ref="exnFooter">
        <a href="https://www.gobelins.fr/" target="_blank"><img :src="content.gobelins"></a>
        <a href=""><img :src="content.logo"></a>
        <a href="https://www.cci-paris-idf.fr/" target="_blank"><img :src="content.cci"></a>
    </section>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

export default {
    name: "Footer",
    props: ["content"],
    methods: {
        ...mapActions([
            'setOffset'
        ]),
        ...mapMutations([
            'scrollInfoIncrement'
        ]),
    },
    
    mounted() {
        this.scrollInfoIncrement();
        this.setOffset(this.$refs.exnFooter.offsetTop);
    },
}
</script>

<style lang="scss">
    @import '~@/assets/scss/footer.scss';
</style>