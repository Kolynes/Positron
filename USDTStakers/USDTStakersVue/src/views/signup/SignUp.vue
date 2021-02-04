<template>
    <v-app>
        <portal-toolbar :r="r"/>
        <v-main>
            <v-container fill-height>
                <v-layout align-center>
                    <v-flex xs12 sm6>
                        <h1 class="display-4 my-5 primary--text">Let's<br v-if="$vuetify.breakpoint.xs"> Begin!</h1>
                        <h2 class="my-5">A <span class="accent--text">100 TRX</span> transfer will be made to the Positron contract at </h2>
                        <p class="caption my-5 font-weight-bold accent--text" style="font-family: monospace">{{contractAddress}}</p>
                        <v-btn rounded color="primary" class="font-weight-bold text-capitalize" :loading="signingUp" @click="callSignUp">Continue <v-icon class="ml-3">mdi-arrow-right</v-icon></v-btn>
                        <v-btn rounded color="accent" class="font-weight-bold text-capitalize ml-2">Verify Contract</v-btn>
                        <div class="my-3"/>
                        <v-btn rounded color="transparent" class="elevation-0 font-weight-bold caption text-capitalize" :to="`/signIn?r=${r}`">Already Signed Up?</v-btn>
                    </v-flex>
                    <v-flex xs12 sm6 class="hidden-xs-only">
                        <center>
                            <img src="../../assets/images/agreement.svg" style="width: 80%"/>
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

<script src="./SignUp.ts"></script>

<style>

</style>