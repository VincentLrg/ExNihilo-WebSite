<template>
    <div :id="`exn_content${index}`" :class="`exn_content exn_content${index}`" :ref="`exnContent${index}`">
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
    </div>
</template>

<script>
import Janus from "../assets/images/tetedanus.jpg"

export default {
    name: "Content",
    props: ["content", "index"],
    mounted () {
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
            setInterval( ()=> {
                subliminal.style.backgroundImage = `url(${Janus})`
                subliminal.style.backgroundPosition= "center"
                subliminal.style.backgroundSize= "cover"
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