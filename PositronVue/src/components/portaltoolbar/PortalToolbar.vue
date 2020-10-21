<template>
    <v-app-bar app flat>
        <router-link :to="`/?r=${r}`">
            <img src="../../assets/images/logo.png" style="width: 125px"/>
        </router-link>
        <v-spacer/>
        <div v-if="!$vuetify.breakpoint.smAndDown">
            <v-btn rounded text v-for="(link, index) in links" :key="index" :to="link.to" class="mx-2 font-weight-bold text-capitalize">{{link.name}}</v-btn>
            <v-btn rounded outlined color="primary" to="/signIn" class="mx-2 font-weight-bold text-capitalize">Sign In</v-btn>
            <v-btn rounded color="primary" to="/signUp" class="mx-2 font-weight-bold text-capitalize">Sign Up</v-btn>
        </div>
        <v-btn icon @click="toggleMinimized" v-else>
            <v-icon color="primary">mdi-menu</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script src="./PortalToolbar.ts"></script>
