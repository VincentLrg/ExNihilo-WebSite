<template>
    <section :id="`exn_content${index}`" :class="`exn_content exn_content${index}`" :ref="`exnContent${index}`">
        <Canvas v-if='index ===3' 
        @wheel="wheel" @touchStart="touchStart" @touchMove="touchMove"/>
        <div v-if="content.design === 'titleOnly'" class="exn_content_title">
            <h2 :data-text="content.title" :ref="`exnContent${index}_title`">{{content.title}}</h2>
        </div>
        <div v-else-if="content.design === 'contentPromo'" class="exn_content_promo">
            <div class="col1">
                <h2>{{content.title}}</h2>
                <p><b>{{content.bold}}</b> {{content.content}}</p>
                <a class="btn" target="_blank" rel="noopener noreferrer" :href="content.download"><button>{{content.button}}</button></a>
            </div>
            <div class="col2">
                <iframe class="exn_content_promo_video" src="https://www.youtube.com/embed/NAXCO4u85EE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>            
        </div>
        <div :class="`exn_round_container exn_round_container${index}`" v-if='index === 1'>
            <div class="round blackborder"></div>
            <div class="round blackborder"></div>
            <div class="round blackborder"></div>
        </div>
        <div :class="`exn_round_container exn_round_container${index}`" v-if='index === 2'>
            <div class="round whiteborder"></div>
            <div class="round fullwhite"></div>
            <div class="round whiteborder blackbg"></div>
            <div class="round whiteborder"></div>
            <img :src="smallRound" class="round small">
            <img :src="mediumRound" class="round medium">
        </div>
        <div :class="`exn_round_container exn_round_container${index}`" v-if='index === 4'>
            <div class="round whiteborder"></div>
            <div class="round whiteborder"></div>
            <img :src="largeRound" class="round">
        </div>
    </section>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

import Canvas from './Canvas'

import Janus from "../assets/images/tetejanus2.png"

import smallRound from "../assets/images/small_round.svg"
import mediumRound from "../assets/images/medium_round.svg"
import largeRound from "../assets/images/large_round.svg"

export default {
    name: "Content",
    data(){
        return{
            smallRound: smallRound,
            mediumRound: mediumRound,
            largeRound: largeRound,
        }
    },
    components: {
        Canvas
    },
    props: ["content", "index"],
    methods: {
        ...mapActions([
            'setOffset'
        ]),
        ...mapMutations([
            'scrollInfoIncrement'
        ]),
        setOffsetM(el){
            this.setOffset(el.offsetTop)
        },
        wheel(e){
            this.$emit('wheel', e)
        },
        touchStart(e){
            this.$emit('touchStart', e)
        },
        touchMove(e){
            this.$emit('touchMove', e)
        }
    },
    mounted () {
        this.scrollInfoIncrement();
        switch(this.index){
            case 1:
                this.setOffsetM(this.$refs.exnContent1)
                break
            case 2:
                this.setOffsetM(this.$refs.exnContent2)
                break
            case 3:
                this.setOffsetM(this.$refs.exnContent3)
                break
            case 4:
                this.setOffsetM(this.$refs.exnContent4)
                document.querySelector('.exn_content_promo .col1 a.btn').addEventListener('touchstart', (e)=>{
                    e.preventDefault()
                    alert('Vous allez être redirigé vers la page de téléchargement.')
                    window.location.assign(this.content.download)
                })
                break
        }
        if(this.index == 1){
            const subliminal = this.$refs.exnContent1
            const title = this.$refs.exnContent1_title

            var timing = Math.floor(Math.random() *5000)
            while(timing < 2000 || timing > 5000){
                timing = Math.floor(Math.random() *5000)
            }
            var timing2 = Math.floor(Math.random() *2000)
            while(timing2 < 100 || timing2 > 500){
                timing2 = Math.floor(Math.random() *3000)
            }
            subliminal.style.backgroundSize= "cover"
            subliminal.style.backgroundPosition= "center"
            setInterval( ()=> {
                subliminal.style.backgroundImage = `url(${Janus})`
                title.classList.add('glitchV1')
                setTimeout(() => { 
                    subliminal.style.backgroundImage = ''
                    title.classList.remove('glitchV1')
                    timing = Math.floor(Math.random() *5000)
                    while(timing < 2000 || timing > 5000){
                        timing = Math.floor(Math.random() *5000)
                    }
                    timing2 = Math.floor(Math.random() *3000)
                    while(timing2 < 100 || timing2 > 500){
                        timing2 = Math.floor(Math.random() *3000)
                    }
                }, timing2)
            }, timing)
        }
        if(this.index == 2 ){
            const title2 = this.$refs.exnContent2_title
            title2.classList.add('glitchV2')
        }
    }
}
</script>

<style lang="scss">
    @import "~@/assets/scss/content";
    @import "~@/assets/scss/glitchV1";
    @import "~@/assets/scss/glitchV2";
</style>