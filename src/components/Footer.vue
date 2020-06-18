<template>
    <section class="exn_footer" ref="exnFooter">
        <a href="https://www.gobelins.fr/" target="_blank" rel="noopener noreferrer" class="a-gobelins"><img :src="content.gobelins"></a>
        <a href=""><img :src="content.logo"></a>
        <a href="https://www.cci-paris-idf.fr/" target="_blank" rel="noopener noreferrer" class="a-cci"><img :src="content.cci"></a>
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
        document.querySelector('.exn_footer a.a-gobelins').addEventListener('touchstart', (e)=>{
            e.preventDefault()
            alert('Vous allez être redirigé vers le site gobelins.fr.')
            window.location.assign('https://www.gobelins.fr/')
        })
        document.querySelector('.exn_footer a.a-cci').addEventListener('touchstart', (e)=>{
            e.preventDefault()
            alert('Vous allez être redirigé vers le site cci-paris-idf.fr.')
            window.location.assign('https://www.gobelins.fr/')
        })
    },
}
</script>

<style lang="scss">
    @import '~@/assets/scss/footer.scss';
</style>