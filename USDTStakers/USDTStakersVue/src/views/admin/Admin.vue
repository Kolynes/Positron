<template>
    <v-app v-if="currentAddressIsOwner">
        <v-navigation-drawer app clipped fixed v-if="$vuetify.breakpoint.lgAndUp">
            <v-list nav>
                <v-list-item v-for="(link, index) in links" :key="index" :to="link.to">
                    <v-list-item-icon>
                        <v-icon>{{link.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{link.name}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-bottom-navigation app grow v-else>
            <v-btn v-for="(link, index) in links" :key="index" :to="link.to" @click="link.click">
                <span>{{link.name}}</span>
                <v-icon>{{link.icon}}</v-icon>
            </v-btn>
        </v-bottom-navigation>
        <v-main>
            <router-view/>
        </v-main>
    </v-app>
</template>

<script src="./Admin.ts"></script>