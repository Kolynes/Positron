<template>
    <v-layout wrap>
        <v-flex xs12 sm6 md4>
            <v-card class="mb-4">
                <v-card-title>
                    <v-icon class="mr-2">mdi-format-list-text</v-icon>
                    <span class="body-2 font-weight-bold">Confirmation Requirements</span>
                </v-card-title>
                <v-card-text>
                    <v-form ref="changeConfirmationRequirementsForm" @submit.prevent="changeConfirmationRequirements">
                        <v-text-field type="number" v-model="newRequirements" label="Number of confirmations required" :rules="[rangeRule(50, 1)]"/>
                        <v-btn small outlined rounded color="primary" class="text-capitalize" >Change Requirements</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-flex>
        <v-flex xs12 sm6 md8>
            <v-card>
                <v-card-title>
                    <v-icon class="mr-2">mdi-account-multiple-outline</v-icon>
                    <span class="body-2 font-weight-bold">Owners</span>
                    <v-spacer/>
                    <v-btn rounded small class="text-capitalize" color="primary" outlined @click="showAddOwnerDialog = true">
                        <v-icon class="mr-2">mdi-account-plus</v-icon>
                        Add Owner
                    </v-btn>
                </v-card-title>
                <v-card-text>
                    <v-list>
                        <v-list-item v-for="(owner, index) in owners" :key="index">
                            <v-icon class="mr-2">mdi-account-outline</v-icon>
                            <v-list-item-content>
                                <span>{{owner}}</span>
                            </v-list-item-content>
                            <v-btn icon @click="removeOwner(index)">
                                <v-icon>mdi-delete-outline</v-icon>
                            </v-btn>
                        </v-list-item>
                    </v-list>
                </v-card-text>
            </v-card>
        </v-flex>
        <v-dialog v-model="showAddOwnerDialog" width="300" persistent>
            <v-card>
                <v-card-title>
                    <v-icon class="mr-2">mdi-account-plus</v-icon>
                    <span class="body-2">Add Owner</span>
                    <v-spacer/>
                    <v-btn icon @click="showAddOwnerDialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text>
                    <v-form @submit.prevent="addOwner" ref="addOwnerForm">
                        <v-text-field label="Wallet Address" :rules="[requiredLengthRule(34)]" v-model="newOwner"/>
                        <v-btn icon :loading="addingOwner" color="primary" outlined type="submit">
                            <v-icon>mdi-arrow-right</v-icon>
                        </v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script src="./Owners.ts"></script>

<style>

</style>