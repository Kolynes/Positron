<template>
    <v-card color="primary white--text" v-if="!loading" :style="{opacity: referrals > -1 || spillover > -1 ? 1 : 0.4}">
        <v-timeline dense dark>
            <v-card-title>
                <v-avatar color="white" size="70">
                    <v-icon size="60" color="accent">mdi-account</v-icon>
                </v-avatar>
                <v-spacer/>
                <span class="font-weight-bold">Level {{levelNumber}}</span>
            </v-card-title>
            <v-card-title class="caption font-weight-bold">
                <v-spacer/>
                <span v-if="referrals > -1">{{referrals}}/6 referrals</span>
            </v-card-title>
            <v-timeline-item small color="accent" light>
                <v-card color="accent--text" flat width="85%">
                    <v-card-text>
                        <v-layout wrap>
                            <v-flex v-for="i in 6" :key="i" xs4>
                                <center>
                                    <v-icon size="20" color="accent">{{i <= referrals ? "mdi-account" : "mdi-account-outline"}}</v-icon>
                                </center>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
            <v-card-title class="caption font-weight-bold">
                <v-spacer/>
                <span v-if="spillover > -1">{{spillover}}/4 spillover</span>
            </v-card-title>
            <v-timeline-item small color="accent" light>
                <v-card color="white--text" flat width="85%">
                    <v-card-text>
                        <v-layout>
                            <v-flex v-for="i in 4" :key="i">
                                <center>
                                    <v-icon size="20" color="accent">{{i <= spillover ? "mdi-account" : "mdi-account-outline"}}</v-icon>
                                </center>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>
        <v-card-actions>
            <v-spacer/>
            <v-btn rounded color="accent white--text" class="font-weight-bold text-capitalize" :disabled="referrals < 6">Upgrade</v-btn>
        </v-card-actions>
    </v-card>
    <v-card v-else>
        <v-card-text class="text-center">
            <v-progress-circular color="primary" indeterminate/>
        </v-card-text>
    </v-card>
</template>

<script src="./Level.ts"></script>
