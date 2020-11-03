<template>
    <v-app>
        <v-container style="position: fixed; top: 0; bottom: 0; text-align: right; background: black">
            <v-toolbar color="transparent" dark>
                <img src="./assets/images/logoInverse.png" style="width: 100px"/>
                <v-spacer/>
                <v-btn icon @click="toggleMinimized">
                    <v-icon color="accent">mdi-close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-list class="transparent" dark>
                <v-list-item v-for="(link, index) in links" :key="index" :to="link.to" @click="link.click">
                    <v-list-item-content>
                        <p class="text-right">{{link.name}}</p>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-container>
        <div :style="minimized? minimizedStyle : ''" style="transition: all .5s; position: relative">
            <router-view/>
            <div style="position: absolute; background: transparent; width: 100%; top:0; bottom: 0; z-index: 2" v-if="minimized" @click="toggleMinimized"/>
        </div>
        <v-toast/>
        <v-confirmation/>
    </v-app>
</template>

<script>
import VToast from "./vuetify-extensions/VToast";
import VConfirmation from "./vuetify-extensions/VConfirmation";
import {mapMutations, mapState} from "vuex";
import { owner } from "@/constants";

export default {
    props: {
        r: {
            type: String,
            default: owner
        }
    },
    components: {
        VToast,
        VConfirmation,
    },
    data(){
        return {
            minimizedStyle: "transform: scale(0.75) translateX(-50vw); height: 100vh; overflow: hidden",
            links: [
                {name: "Home", to: `/home?r=${this.r}`, click: this.toggleMinimized},
                {name: "How it Works", to: `/howItWorks?r=${this.r}`, click: this.toggleMinimized},
                // {name: "Buy TRX Now!!", to: `/home?r=${this.r}&t=buy`, click: this.toggleMinimized},
                // {name: "Get Started", to: `/signUp?r=${this.r}`, click: this.toggleMinimized},
                // {name: "Sign In", to: `/signIn?r=${this.r}`, click: this.toggleMinimized},
            ]
        }
    },
    computed: {
        ...mapState("Root", [
            "minimized"
        ])
    },
    methods: {
        ...mapMutations("Root", [
            "toggleMinimized"
        ])
    },
    watch: {
        minimized(value) {
            if(value)
                document.getElementsByTagName("html")[0].style.overflowY = "hidden"
            else document.getElementsByTagName("html")[0].style.overflowY = "scroll"
        }
    }
}
</script>