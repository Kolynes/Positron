<template>
    <v-app>
        <portal-toolbar :r="r"/>
        <v-main>
            <v-container>
                <h1 class="display-4 my-5 primary--text">Let's Begin!</h1>
                <h2 class="my-5">A <span class="primary--text">100TRX</span> transfer will be made to the Positron contract at </h2>
                <p class="caption my-5 font-weight-bold primary--text" style="font-family: monospace">{{contractAddress}}</p>
                <v-btn rounded color="primary black--text" class="font-weight-bold text-capitalize" :loading="signingUp" @click="callSignUp">Continue <v-icon class="ml-3">mdi-arrow-right</v-icon></v-btn>
                <div class="my-3"/>
                <v-btn rounded color="transparent" class="elevation-0 font-weight-bold caption text-capitalize" :to="`/signIn?r=${r}`">Already Signed Up?</v-btn>
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