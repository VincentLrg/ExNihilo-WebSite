<template>
    <section :id="`exn_content${index}`" :class="`exn_content exn_content${index}`" :ref="`exnContent${index}`">
        <div v-if="content.design === 'titleOnly'" class="exn_content_title">
            <h2 :data-text="content.title" :ref="`exnContent${index}_title`">{{content.title}}</h2>
        </div>
        <div v-else-if="content.design === 'contentPromo'" class="exn_content_promo">
            <div class="col1">
                <h2>{{content.title}}</h2>
                <p><b>{{content.bold}}</b> {{content.content}}</p>
                <button>{{content.button}}</button>
            </div>
            <div class="col2">
                <div class="exn_content_promo_video"></div>
            </div>            
        </div>
    </section>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

import Janus from "../assets/images/tetedanus2.png"

export default {
    name: "Content",
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