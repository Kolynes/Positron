<template>
    <v-card color="primary white--text" v-if="!loading" :style="{opacity: slots > -1? 1 : 0.4}">
        <v-card-title class="caption font-weight-bold">
            <span>Level {{levelNumber}}</span>
            <v-spacer/>
            <span v-if="slots > -1">{{slots}}/6 referrals</span>
        </v-card-title>
        <v-card-text>
            <v-card color="accent--text" flat>
                <v-card-text>
                    <v-layout>
                        <v-flex v-for="i in 6" :key="i">
                            <center>
                                <v-icon size="20" color="accent">{{i <= slots ? "mdi-star" : "mdi-star-outline"}}</v-icon>
                            </center>
                        </v-flex>
                    </v-layout>
                </v-card-text>
            </v-card>
        </v-card-text>
        <v-card-actions>
            <v-spacer/>
            <v-btn rounded color="accent white--text" class="font-weight-bold text-capitalize" :disabled="slots < 6">Upgrade</v-btn>
        </v-card-actions>
    </v-card>
    <v-card v-else>
        <v-card-text class="text-center">
            <v-progress-circular color="primary" indeterminate/>
        </v-card-text>
    </v-card>
</template>

<script src="./Level.ts"></script>
