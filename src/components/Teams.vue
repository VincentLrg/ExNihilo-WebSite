<template>
    <section class="exn_teams" ref="exnTeams">
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
    </section>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

export default {
    name: "Teams",
    props: ["members"],
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
        this.setOffset(this.$refs.exnTeams.offsetTop);
    },
}
</script>

<style lang="scss">
    @import "~@/assets/scss/teams";
</style>