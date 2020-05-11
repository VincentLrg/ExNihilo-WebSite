<template>
    <div :class="`exn_content exn_content${index}`">
        <div v-if="content.design === 'titleOnly'" class="exn_content_title">
            <h2>{{content.title}}</h2>
        </div>
        <div v-else-if="content.design === 'contentPromo'">
            
        </div>
    </div>
</template>

<script>
export default {
    name: "Content",
    props: ["content", "index"]
}
</script>

<style lang="scss">
    @import "~@/assets/scss/content";
</style>