<template>
    <v-container grid-list-xl>
        <v-layout wrap>
            <v-flex xs12 sm6 md4 v-for="i in 8" :key="i">
                <level :level-number="i" />
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script src="./Levels.ts"></script>