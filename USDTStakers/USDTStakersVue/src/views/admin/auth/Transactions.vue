<template>
    <v-layout wrap>
        <v-flex xs12 sm6 md4>
            <v-card>
                <v-card-title>
                    <v-icon class="mr-2">mdi-filter</v-icon>
                    <span class="body-2 font-weight-bold">Filter Transactions</span>
                </v-card-title>
                <v-card-text>
                    <v-text-field label="ID, description or value" v-model="searchString" prepend-inner-icon="mdi-magnify"/>
                    <v-switch v-model="showPendingTransactions" label="Pending"/>
                    <v-switch v-model="showExecutedTransactions" label="Executed"/>
                </v-card-text>
            </v-card>
        </v-flex>
        <v-flex xs12 sm6 md8>
            <v-card>
                <v-card-title>
                    <v-icon class="mr-2">mdi-transfer</v-icon>
                    <span class="body-2 font-weight-bold">Transactions</span>
                    <v-spacer/>
                    <v-btn class="text-capitalize" color="primary" rounded outlined @click="showAddTransactionDialog = true" :loading="addingTransaction">
                        <v-icon class="mr-2">mdi-plus</v-icon>
                        <span>Add Transaction</span>
                    </v-btn>
                </v-card-title>
                <v-card-text>
                    <v-scroll-view user-document :loader="transactions" :rules="[transactionsFilter]">
                        <template v-slot="{item, index}">
                            <v-list-item :key="index">
                                <v-list-item-content>
                                    <v-container fluid>
                                        <v-layout>
                                            <span class="font-weight-bold caption">#{{item.id}}</span>
                                            <v-spacer/>
                                            <span class="font-weight-bold caption" :class="{'green--text': item.executed, 'orange--text': !item.executed}">{{item.executed? "Executed" : "Pending"}}</span>
                                        </v-layout>
                                    </v-container>
                                    <span class="font-weight-bold caption mt-2">Destination</span>
                                    <span>{{item.destination}}</span>
                                    <span class="font-weight-bold caption mt-2">Value(TRX)</span>
                                    <span>{{item.valueTRX}}</span>
                                    <span class="font-weight-bold caption mt-2">Value(USDT)</span>
                                    <span>{{item.valueUSDT}}</span>
                                    <span class="font-weight-bold caption mt-2">Description</span>
                                    <span>{{item.description}}</span>
                                    <v-container>
                                        <v-menu transition="slide-x-transition" offset-y="30" :close-on-content-click="false">
                                            <template #activator="{on}">
                                                <v-btn v-on="on" class="text-capitalize" color="primary" rounded outlined small>see confirmations</v-btn>
                                            </template>
                                            <v-card>
                                                <v-card-title>
                                                    <v-icon class="mr-2">mdi-thumb-up-outline</v-icon>
                                                    <span class="font-weight-bold caption">Confirmations</span>
                                                </v-card-title>
                                                <v-list>
                                                    <v-list-item>
                                                        <v-icon class="mr-3">mdi-account-outline</v-icon>
                                                        <v-list-item-content>
                                                            <span>412cdf90616c9794a9af61aa56b5744a5cdb3c35cc</span>
                                                        </v-list-item-content>
                                                    </v-list-item>
                                                    <v-divider/>
                                                </v-list>
                                                <v-card-text>
                                                    <v-btn rounded outlined class="text-capitalize" small color="primary">Confirm Transaction</v-btn>
                                                </v-card-text>
                                            </v-card>
                                        </v-menu>
                                    </v-container>
                                </v-list-item-content>
                            </v-list-item>
                            <v-divider class="my-3" :key="`divider-${index}`"/>
                        </template>
                    </v-scroll-view>
                </v-card-text>
            </v-card>
        </v-flex>
        <v-dialog v-model="showAddTransactionDialog" width="300" persistent>
            <v-card>
                <v-card-title>
                    <v-icon class="mr-2">mdi-plus</v-icon>
                    <span class="body-2">Add Transaction</span>
                    <v-spacer/>
                    <v-btn icon @click="showAddTransactionDialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text>
                    <v-form @submit.prevent="sendAddTransaction" ref="addTransactionForm">
                        <v-text-field label="Destination Address" :rules="[requiredLengthRule(34, 34)]" v-model="destination"/>
                        <v-text-field label="Value (TRX)" :rules="[rangeRule(Infinity, 0)]" type="number" v-model="valueTRX"/>
                        <v-text-field label="Value (USDT)" :rules="[rangeRule(Infinity, 0)]" type="number" v-model="valueUSDT"/>
                        <v-textarea label="Description" :rules="[requiredRule]" v-model="description"/>
                        <v-btn icon color="primary" outlined type="submit">
                            <v-icon>mdi-arrow-right</v-icon>
                        </v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script src="./Transactions.ts"></script>

<style>

</style>