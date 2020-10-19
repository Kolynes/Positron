<template>
    <v-app-bar app color="black" flat>
        <router-link :to="`/?r=${r}`">
            <img src="../../assets/images/logo.png" style="width: 125px"/>
        </router-link>
        <v-spacer/>
        <div v-if="!$vuetify.breakpoint.smAndDown">
            <v-btn rounded v-for="(link, index) in links" :key="index" :to="link.to" @click="link.click" color="primary black--text" class="mx-2 font-weight-bold text-capitalize">{{link.name}}</v-btn>
        </div>
        <v-btn icon @click="toggleMinimized" v-else>
            <v-icon>mdi-menu</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script src="./PortalToolbar.ts"></script>
