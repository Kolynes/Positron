<template>
    <v-container>
        <v-tabs v-model="tab">
            <v-tab :key="0" class="text-capitalize font-weight-bold">Owners</v-tab>
            <v-tab :key="1" class="text-capitalize font-weight-bold">Transactions</v-tab>
        </v-tabs>
        <v-container grid-list-xl>
            <v-tabs-items v-model="tab">
                <v-tab-item>
                    <owners/>
                </v-tab-item>
                <v-tab-item>
                    <transactions/>
                </v-tab-item>
            </v-tabs-items>
        </v-container>


    </v-container>
</template>

<script src="./Auth.ts"></script>