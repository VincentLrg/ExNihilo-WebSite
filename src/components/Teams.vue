<template>
    <div class="exn_teams">
        <div class="exn_teams_container">
            <div class="exn_teams_title">
                <h2>La team</h2>
            </div>
            <div class="exn_teams_members">
                <div v-for="(item, index) in members" :key="index" class="exn_teams_member">
                    <div class="exn_teams_member_gif" :style="`background-image: url('${item.gif}')`">
                    </div>
                    <div class="exn_teams_member_name">
                        <h3>{{item.name}}</h3>
                    </div>
                    <div class="exn_teams_member_description">
                        <p>{{item.description}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Teams",
    props: ["members"],
    
    mounted() {
        console.log(this.members)
    },
}
</script>

<style lang="scss">
    @import "~@/assets/scss/teams";
</style>