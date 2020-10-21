<template>
    <v-container grid-list-xl>
        <v-layout wrap>
            <v-flex xs12 sm6>
                <v-card color="primary">
                    <v-card-title class="white--text font-weight-bold caption">
                        <div>
                            <span><v-icon color="white" class="mr-3">mdi-wallet</v-icon> Wallet Balance</span><br>
                            <p class="caption font-weight-bold mb-0 mt-2">{{currentParticipant.address || ""}}</p>
                        </div>
                    </v-card-title>
                    <v-card-text class="white--text font-weight-bold">
                        <v-layout align-center>
                            <v-flex>
                                <img src="../../../assets/images/logoSolo.png" style="width: 100px" class="rotate"/>
                            </v-flex>
                            <v-flex>
                                <h1 class="text-right display-1 font-weight-bold white--text">{{balanceDisplay}} <span class="caption font-weight-bold">TRX</span></h1>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                </v-card>
                <v-card class="mt-3">
                    <v-card-title class="caption font-weight-bold">
                        <span><v-icon class="mr-3">mdi-currency-usd</v-icon> Earnings</span>
                        <v-spacer/>
                        <v-btn icon @click="showEarningDetails = !showEarningDetails">
                            <v-icon>mdi-arrow-down-drop-circle-outline</v-icon>
                        </v-btn>
                    </v-card-title>
                    <v-card-text class="font-weight-bold">
                        <h1 class="text-right display-1 font-weight-bold">{{totalEarningsDisplay}} <span class="caption font-weight-bold">TRX</span></h1>
                        <v-layout wrap>
                            <v-flex xs6>
                                <p class="ml-3 font-weight-bold mb-0">Level Earnings <br> {{totalLevelEarningsDisplay}} TRX</p>
                            </v-flex>
                            <v-flex xs6>
                                <p class="ml-3 font-weight-bold mb-0">Spillover Earnings <br> {{totalLevelSpilloverEarningsDisplay}} TRX</p>
                            </v-flex>
                        </v-layout>
                        <v-slide-y-transition>
                            <div v-if="showEarningDetails">
                                <v-divider/>
                                <v-layout wrap >
                                    <v-flex xs6>
                                        <v-list>
                                            <v-list-item v-for="(earning, index) in levelEarnings" :key="index">
                                                <v-list-item-content>
                                                    <span class="caption">Level {{index + 1}}</span>
                                                    <p class="heading">{{earning.toFixed(2)}} TRX</p>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-list>
                                    </v-flex>
                                    <v-flex xs6>
                                        <v-list>
                                            <v-list-item v-for="(earning, index) in levelSpilloverEarnings" :key="index">
                                                <v-list-item-content>
                                                    <span class="caption">L{{index + 1}} Spillover</span>
                                                    <p class="heading">{{earning.toFixed(2)}} TRX</p>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-list>
                                    </v-flex>
                                </v-layout>
                            </div>
                        </v-slide-y-transition>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12 sm6>
                <v-card color="primary" class="mb-3" v-if="currentParticipant.isOwner">
                    <v-card-title class="white--text font-weight-bold caption">
                        <span><v-icon color="white" class="mr-3">mdi-file</v-icon> Contract Information</span><br>
                    </v-card-title>
                    <v-card-text class="white--text font-weight-bold">
                        <v-layout align-center>
                            <v-flex>
                                <span>Contract Balance</span>
                            </v-flex>
                            <v-flex>
                                <h1 class="text-right display-1 font-weight-bold white--text">{{contractBalanceDisplay}} <span class="caption font-weight-bold">TRX</span></h1>
                                <div class="text-right mt-1">
                                    <v-btn rounded small class="accent text-capitalize font-weight-bold" @click="showTransferDialog = true">transfer to wallet</v-btn>
                                </div>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                    <v-card-text class="white--text font-weight-bold">
                        <v-layout align-center>
                            <v-flex>
                                <span>Number of Participants</span>
                            </v-flex>
                            <v-flex>
                                <h1 class="text-right display-1 font-weight-bold">
                                    {{numberOfParticipants}}
                                    <v-btn icon @click="showParticipantsDetails = !showParticipantsDetails" v-if="numberOfParticipants > 0">
                                        <v-icon color="white">mdi-arrow-down-drop-circle-outline</v-icon>
                                    </v-btn>
                                </h1>
                            </v-flex>
                        </v-layout>
                        <v-slide-y-transition>
                            <v-list wrap v-if="showParticipantsDetails">
                                <v-list-item v-for="(level, index) in levelParticipants" :key="index">
                                    <v-list-item-content>
                                        <span calss="mb-1 caption">Level {{index + 1}}</span>
                                        <span>{{level}} Participants</span>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-slide-y-transition>
                    </v-card-text>
                </v-card>
                <v-subheader class="font-weight-bold">
                    Current Level
                    <v-spacer/>
                    <v-btn rounded small to="/account/levels" color="accent white--text" class="font-weight-bold text-capitalize">view all</v-btn>
                </v-subheader>
                <level :level-number="currentParticipant.currentLevel"/>
                <v-subheader class="font-weight-bold mt-5">
                    Current Level Spillovers
                    <v-spacer/>
                    <v-btn rounded small to="/account/spillovers" color="accent white--text" class="font-weight-bold text-capitalize">view all</v-btn>
                </v-subheader>
                <spillover :level-number="currentParticipant.currentLevel"/>
            </v-flex>
        </v-layout>
        <v-dialog v-model="showTransferDialog" width="300" persistent>
            <v-card>
                <v-card-title>
                    <v-icon class="mr-2">mdi-arrow-top-right</v-icon>
                    <span class="font-weight-bold body-1">Transfer</span>
                    <v-spacer/>
                    <v-btn icon @click="showTransferDialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text>
                    <v-form @submit.prevent="transfer" ref="transferForm">
                        <v-text-field outlined label="Amount(TRX)" type="number" class="mt-4" :rules="[transferRule]" v-model="transferAmount"/>
                        <v-btn icon class="primary" type="submit" :loading="transfering">
                            <v-icon color="white">mdi-arrow-right</v-icon>
                        </v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script src="./Home.ts"></script>

<style scoped>
    @keyframes rotate {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }
    .rotate {
        animation: rotate 20s linear infinite forwards;
    }
</style>