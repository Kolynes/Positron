<template>
    <v-app>
        <portal-toolbar :r="r"/>
        <v-main>
            <v-container fill-height>
                <v-layout align-center wrap>
                    <v-flex xs12 sm6>
                        <h1 class="display-4 my-5 primary--text">Hey<br v-if="$vuetify.breakpoint.xs"> There!</h1>
                        <h2 class="my-5">Proceed with your <span class="accent--text">wallet address</span></h2>
                        <p class="font-weight-bold caption accent--text my-5">{{defaultWalletAddress}}</p>
                        <v-btn rounded @click="callSignIn" color="primary" class="font-weight-bold text-capitalize" :loading="signingIn">Sign In <v-icon class="ml-3">mdi-arrow-right</v-icon></v-btn>
                        <div class="my-3"/>
                        <v-btn rounded color="transparent" class="elevation-0 font-weight-bold caption text-capitalize" :to="`/signUp?r=${r}`">Haven't Signed Up Yet?</v-btn>
                    </v-flex>
                    <v-flex xs12 sm6 class="hidden-xs-only">
                        <img src="../../assets/images/signIn.svg" style="width: 100%"/>
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

<script src="./SignIn.ts"></script>

<style>

</style>