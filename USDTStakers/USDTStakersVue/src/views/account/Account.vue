<template>
    <v-app>
        <v-app-bar app flat>
            <img src="../../assets/images/logo.png" style="width: 125px"/>
            <v-spacer/>
            <v-tooltip bottom>
                <v-btn slot="activator" slot-scope="{on}" v-on="on" icon @click="callSignOut">
                    <v-icon>mdi-power</v-icon>
                </v-btn>
                <span>Sign out</span>
            </v-tooltip>
            <template v-slot:extension v-if="$vuetify.breakpoint.mdAndUp">
                <v-tabs>
                    <v-tab to="/account/home" class="text-capitalize font-weight-bold">Home</v-tab>
                    <v-tab to="/account/levels" class="text-capitalize font-weight-bold">Levels</v-tab>
                    <v-tab to="/account/spillovers" class="text-capitalize font-weight-bold">Spillovers</v-tab>
                </v-tabs>
            </template>
        </v-app-bar>
        <v-main>
            <v-fade-transition leave-absolute>
                <router-view/>
            </v-fade-transition>
        </v-main>
        <v-bottom-navigation app shift class="black--text" grow v-if="$vuetify.breakpoint.smAndDown">
            <v-btn :key="0" to="/account/home">
                <span class="black--text font-weight-bold">Home</span>
                <v-icon color="primary">mdi-home</v-icon>
            </v-btn>
            <v-btn :key="1" to="/account/levels">
                <span class="black--text font-weight-bold">Levels</span>
                <v-icon color="primary">mdi-transfer</v-icon>
            </v-btn>
            <v-btn :key="2" to="/account/spillovers">
                <span class="black--text font-weight-bold">Spillovers</span>
                <v-icon color="primary">mdi-account-supervisor</v-icon>
            </v-btn>
        </v-bottom-navigation>
    </v-app>
</template>

<script src="./Account.ts"></script>

<style>

</style>