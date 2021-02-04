<template>
    <v-menu offset-y="30">
        <template v-slot:activator="{on}">
            <v-btn icon v-on=on>
                <v-icon>mdi-translate</v-icon>
            </v-btn>
        </template>
        <v-list dense>
            <v-list-item dense @click="lang.click" v-for="(lang, index) in langs" :key="index">
                <v-list-item-content>{{lang.name}}</v-list-item-content>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script src="./Translator.ts"></script>
