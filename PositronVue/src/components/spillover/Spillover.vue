<template>
    <v-card color="primary black--text" v-if="!loading" :style="{opacity: slots > -1? 1 : 0.4}">
        <v-card-title class="caption font-weight-bold">
            <span>Level {{levelNumber}}</span>
            <v-spacer/>
            <span  v-if="slots > -1">{{slots}}/4 Spillovers</span>
        </v-card-title>
        <v-card-text>
            <v-card color="white--text" flat>
                <v-card-text>
                    <v-layout>
                        <v-flex v-for="i in 4" :key="i">
                            <center>
                                <v-icon size="20" :color="i <= slots ? 'primary' : 'white'">mdi-star</v-icon>
                            </center>
                        </v-flex>
                    </v-layout>
                </v-card-text>
            </v-card>
        </v-card-text>
    </v-card>
    <v-card v-else>
        <v-card-text class="text-center">
            <v-progress-circular color="primary" indeterminate/>
        </v-card-text>
    </v-card>
</template>

<script src="./Spillover.ts"></script>

<style>

</style>