<template>
    <v-app>
        <portal-toolbar :r="r"/>
        <v-main>
            <v-container>
                <h1 class="display-4 my-5 primary--text">Hey<br v-if="$vuetify.breakpoint.xs"> There!</h1>
                <h2 class="my-5">Proceed with your <span class="primary--text">wallet address</span></h2>
                <p class="font-weight-bold caption primary--text my-5">{{defaultWalletAddress}}</p>
                <v-btn rounded @click="callSignIn" color="primary black--text" class="font-weight-bold text-capitalize" :loading="signingIn">Sign In <v-icon class="ml-3">mdi-arrow-right</v-icon></v-btn>
                <div class="my-3"/>
                <v-btn rounded color="transparent" class="elevation-0 font-weight-bold caption text-capitalize" :to="`/signUp?r=${r}`">Haven't Signed Up Yet?</v-btn>
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