<template>
    <v-app>
        <portal-toolbar :r="r"/>
        <v-main>
            <v-container fill-height>
                <v-layout wrap :align-space-between="$vuetify.breakpoint.xs" :align-center="!$vuetify.breakpoint.xs">
                    <v-flex xs12 sm6>
                        <center>
                            <img src="../../assets/images/logoSolo.png" style="width: 40%" class="rotate"/><br>
                            <br>
                            <img src="../../assets/images/logo.png" style="width: 50%"/>
                            <br><br>
                            <p class="font-weight-bold">Uplifting the financial status of the world through the innovation of a decentralized web</p>
                            <router-link :to="`/howItWorks?r=${r}`" class="font-weight-bold">How it Works</router-link>
                        </center>
                    </v-flex>
                    <v-flex xs12 sm6>
                        <center class="mt-5 mx-5">
                            <v-btn :to="`/signUp?r=${r}`" block large rounded class="primary black--text font-weight-bold text-capitalized my-5">get started <v-icon class="ml-3">mdi-arrow-right</v-icon></v-btn>
                            <v-btn :to="`/signIn?r=${r}`" block large rounded outlined color="primary" class="font-weight-bold text-capitalized my-5">Sign In</v-btn>
                        </center>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-main>
        <v-footer app>
            <v-spacer/>
                <center class="caption">Copyright Positron Network &copy; {{new Date().getFullYear()}}</center>
            <v-spacer/>
        </v-footer>
    </v-app>
</template>

<script src="./Home.ts"></script>

<style scoped>
    @keyframes rotate {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }
    .rotate {
        animation: rotate 20s linear infinite forwards;
    }
</style>