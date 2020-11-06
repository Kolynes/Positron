<template>
    <v-app>
        <portal-toolbar/>
        <v-main>
            <v-container grid-list-xl>
                <h1 id="howItWorks">How it works</h1>
                <v-card color="primary" width="200" class="pt-1 mb-4"/>
                <p class="body-1">
                    <span class="accent--text font-weight-bold">Positron's</span> sole goal is to uplift the financial status of world through the innovation of a decentralized web.
                    The <span class="accent--text font-weight-bold">Positron Smart contract</span> was designed with everybody in mind. It’s easy and inexpensive to join with a registration fee of <span class="accent--text font-weight-bold">100 TRX</span>.
                </p>
                <p class="body-1">
                    The Positron Smart Contract consists of <span class="accent--text font-weight-bold">8 levels</span>. Each level has the following similar characteristics.
                </p>
                <br>
                <h2 class="accent--text font-weight-bold">The Spillover Matrix</h2>
                <p class="body-1">
                    Positron was designed with everybody mind. We have engineered a system that ensures that <span class="accent--text font-weight-bold">everybody earns something by just being a member</span>. We call this <span class="accent--text font-weight-bold">The Spillover Matrix</span>. This matrix consists of two types of <span class="accent--text font-weight-bold">slots</span> explained as follows.
                </p>
                <v-layout wrap align-center>
                    <v-flex xs12 sm6>
                        <h3 class="title accent--text font-weight-bold">Level Slots</h3>
                        <p class="body-1">
                            Each of these slots is filled by a new participant who pays the 100TRX registration fee or by a
                            participant who upgrades to the next level with an upgrade fee. For each participant in the
                            level slots, <span class="accent--text font-weight-bold">the upline earns 50% of the registration or upgrade fee</span>. The remaining 50%
                            from each participant’s registration or upgrade fee enters into the system as spillover which is explained in the next section.
                        </p>
                        <p class="body-1">
                            Please note that <span class="accent--text font-weight-bold">the level slots are not limited to 6 slots</span>. A participant can continue
                            registering new participants under him or her, but it is required that a participant has at least 6
                            people under him or her in the same level for him or her to be eligible for level upgrades.
                        </p>
                        <h3 class="title accent--text font-weight-bold">Spillover Slots</h3>
                        <p class="body-1">
                            These slots are filled up for you by your uplines. Spillover slots are the way through which
                            participants in the Positron network make money without the need to work or register others into
                            the system. Each spillover slot awards 50% of the registration or upgrade fee to the receiving
                            participant. Every participants starts their journey through the Positron network with 4 Spillover
                            slots. <span class="accent--text font-weight-bold">4 extra spillover slots are added to the each participant per level</span> as they upgrade to
                            higher levels.
                        </p>
                    </v-flex>
                    <v-flex xs12 sm6>
                        <center>
                            <dummy-level/>
                        </center>
                    </v-flex>
                </v-layout>
                <br><br>
                <h2 class="accent--text font-weight-bold">Positron Levels</h2>
                <p class="body-1">
                    <span class="accent--text font-weight-bold">Positron is made up of 8 levels.</span> Each level requires at least 6 level slots to be filled up by
                    downlines (these downlines must be in the same level as the participant) before a participant
                    is permitted to upgrade to the next level.
                </p>
                <!-- <v-tabs v-model="levelTab">
                    <v-tab v-for="i in 8" :key="i" color="primary" class="font-weight-bold" @click="levelTab = i">Level {{i}}</v-tab>
                </v-tabs> -->
                <v-container grid-list-xl>
                    <v-layout wrap align-center :key="1">
                        <v-flex xs12 sm6>
                            <h3 class="title accent--text font-weight-bold">Level 1</h3>
                            <p class="body-1">
                                The journey through the Positron levels begins with a registration fee of 100TRX in level 1.
                                After registration is complete, the participant is expected to refer six people as shown in the
                                diagram. Each sucessfully registered downliner awards the participant 50% of the fee paid.
                                During the referral process, the participant will still be able to receive spillover in his or her spillover slots.
                                At the point when the participant has filled up his 6 level slots, he or she will be able to
                                upgrade to the next level. In the case where the spillover slots have not been completely filled
                                up, they are carried over to the next level and will we filled up by the participants upliners
                                eventually.
                            </p>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-card color="primary white--text">
                                <v-card-title class="font-weight-bold">Calculated earning for level 1</v-card-title>
                                <v-card-text class="white--text">
                                    <v-divider color="white"/>
                                    <v-layout wrap>
                                        <v-flex xs6>Registration fee</v-flex>
                                        <v-flex xs6>100 TRX</v-flex>

                                        <v-flex xs6>Level slot earnings</v-flex>
                                        <v-flex xs6>300 TRX</v-flex>

                                        <v-flex xs6>Spillover earnings</v-flex>
                                        <v-flex xs6>200 TRX</v-flex>

                                        <v-flex xs6><span class="font-weight-bold title">Total</span></v-flex>
                                        <v-flex xs6><span class="font-weight-bold title">500 TRX</span></v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                    <v-layout wrap align-center :key="2">
                        <v-flex xs12 sm6>
                            <h3 class="title accent--text font-weight-bold">Level 2</h3>
                            <p class="body-1">
                                Participant enters level 2 by paying an upgrade fee of 250 TRX. After a successful upgrade, the
                                participant then waits for six of his or her downliners from the previous level to join him or her in
                                level 2 through paying the same upgrade fee of 250 TRX.
                                Each sucessfully upgraded downliner awards the participant 50% of the fee paid.
                                During the upgrade process, the participant will still be able to receive spillover in his or her spillover slots. Four new spillover slots are awarded in this level.
                                At the point when the participant has filled up his 6 level slots, he or she will be able to
                                upgrade to the next level. In the case where the spillover slots have not been completely filled
                                up, they are carried over to the next level and will we filled up by the participants upliners
                                eventually.
                            </p>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-card color="primary white--text">
                                <v-card-title class="font-weight-bold">Calculated earning for level 2</v-card-title>
                                <v-card-text class="white--text">
                                    <v-divider color="white"/>
                                    <v-layout wrap>
                                        <v-flex xs6>Upgrade fee</v-flex>
                                        <v-flex xs6>250 TRX</v-flex>

                                        <v-flex xs6>Level slot earnings</v-flex>
                                        <v-flex xs6>750 TRX</v-flex>

                                        <v-flex xs6>Spillover earnings</v-flex>
                                        <v-flex xs6>500 TRX</v-flex>

                                        <v-flex xs6><span class="font-weight-bold title">Total</span></v-flex>
                                        <v-flex xs6><span class="font-weight-bold title">1250 TRX</span></v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                    <v-layout wrap align-center :key="3">
                        <v-flex xs12 sm6>
                            <h3 class="title accent--text font-weight-bold">Level 3</h3>
                            <p class="body-1">
                                Participant enters level 3 by paying an upgrade fee of 650 TRX. After a successful upgrade, the
                                participant then waits for six of his or her downliners from the previous level to join him or her in
                                level 3 through paying the same upgrade fee of 650 TRX.
                                Each sucessfully upgraded downliner awards the participant 50% of the fee paid.
                                During the upgrade process, the participant will still be able to receive spillover in his or her spillover slots. Four new spillover slots are awarded in this level.
                                At the point when the participant has filled up his 6 level slots, he or she will be able to
                                upgrade to the next level. In the case where the spillover slots have not been completely filled
                                up, they are carried over to the next level and will we filled up by the participants upliners
                                eventually.
                            </p>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-card color="primary white--text">
                                <v-card-title class="font-weight-bold">Calculated earning for level 3</v-card-title>
                                <v-card-text class="white--text">
                                    <v-divider color="white"/>
                                    <v-layout wrap>
                                        <v-flex xs6>Upgrade fee</v-flex>
                                        <v-flex xs6>650 TRX</v-flex>

                                        <v-flex xs6>Level slot earnings</v-flex>
                                        <v-flex xs6>1950 TRX</v-flex>

                                        <v-flex xs6>Spillover earnings</v-flex>
                                        <v-flex xs6>1300 TRX</v-flex>

                                        <v-flex xs6><span class="font-weight-bold title">Total</span></v-flex>
                                        <v-flex xs6><span class="font-weight-bold title">3250 TRX</span></v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                    <v-layout wrap align-center :key="4">
                        <v-flex xs12 sm6>
                            <h3 class="title accent--text font-weight-bold">Level 4</h3>
                            <p class="body-1">
                                Participant enters level 4 by paying an upgrade fee of 1650 TRX. After a successful upgrade,
                                the participant then waits for six of his or her downliners from the previous level to join him or
                                her in level 4 through paying the same upgrade fee of 1650 TRX.
                                Each sucessfully upgraded downliner awards the participant 50% of the fee paid.
                                During the upgrade process, the participant will still be able to receive spillover in his or her spillover slots. Four new spillover slots are awarded in this level.At the point when the participant has filled up his 6 level slots, he or she will be able to
                                upgrade to the next level. In the case where the spillover slots have not been completely filled
                                up, they are carried over to the next level and will we filled up by the participants upliners
                                eventually.
                            </p>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-card color="primary white--text">
                                <v-card-title class="font-weight-bold">Calculated earning for level 4</v-card-title>
                                <v-card-text class="white--text">
                                    <v-divider color="white"/>
                                    <v-layout wrap>
                                        <v-flex xs6>Upgrade fee</v-flex>
                                        <v-flex xs6>1650 TRX</v-flex>

                                        <v-flex xs6>Level slot earnings</v-flex>
                                        <v-flex xs6>4950 TRX</v-flex>

                                        <v-flex xs6>Spillover earnings</v-flex>
                                        <v-flex xs6>3300 TRX</v-flex>

                                        <v-flex xs6><span class="font-weight-bold title">Total</span></v-flex>
                                        <v-flex xs6><span class="font-weight-bold title">8250 TRX</span></v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                    <v-layout wrap align-center :key="5">
                        <v-flex xs12 sm6>
                            <h3 class="title accent--text font-weight-bold">Level 5</h3>
                            <p class="body-1">
                                Participant enters level 5 by paying an upgrade fee of 4150 TRX. After a successful upgrade,
                                the participant then waits for six of his or her downliners from the previous level to join him or
                                her in level 5 through paying the same upgrade fee of 4150 TRX.
                                Each sucessfully upgraded downliner awards the participant 50% of the fee paid.
                                During the upgrade process, the participant will still be able to receive spillover in his or her spillover slots. Four new spillover slots are awarded in this level.
                                At the point when the participant has filled up his 6 level slots, he or she will be able to
                                upgrade to the next level. In the case where the spillover slots have not been completely filled
                                up, they are carried over to the next level and will we filled up by the participants upliners
                                eventually.
                            </p>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-card color="primary white--text">
                                <v-card-title class="font-weight-bold">Calculated earning for level 5</v-card-title>
                                <v-card-text class="white--text">
                                    <v-divider color="white"/>
                                    <v-layout wrap>
                                        <v-flex xs6>Upgrade fee</v-flex>
                                        <v-flex xs6>4150 TRX</v-flex>

                                        <v-flex xs6>Level slot earnings</v-flex>
                                        <v-flex xs6>12450 TRX</v-flex>

                                        <v-flex xs6>Spillover earnings</v-flex>
                                        <v-flex xs6>8300 TRX</v-flex>

                                        <v-flex xs6><span class="font-weight-bold title">Total</span></v-flex>
                                        <v-flex xs6><span class="font-weight-bold title">20750 TRX</span></v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                    <v-layout wrap align-center :key="6">
                        <v-flex xs12 sm6>
                            <h3 class="title accent--text font-weight-bold">Level 6</h3>
                            <p class="body-1">
                                Participant enters level 6 by paying an upgrade fee of 10400 TRX. After a successful upgrade,
                                the participant then waits for six of his or her downliners from the previous level to join him or
                                her in level 6 through paying the same upgrade fee of 10400 TRX.
                                Each sucessfully upgraded downliner awards the participant 50% of the fee paid.
                                During the upgrade process, the participant will still be able to receive spillover in his or her spillover slots. Four new spillover slots are awarded in this level.
                                At the point when the participant has filled up his 6 level slots, he or she will be able to
                                upgrade to the next level. In the case where the spillover slots have not been completely filled
                                up, they are carried over to the next level and will we filled up by the participants upliners
                                eventually.
                            </p>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-card color="primary white--text">
                                <v-card-title class="font-weight-bold">Calculated earning for level 6</v-card-title>
                                <v-card-text class="white--text">
                                    <v-divider color="white"/>
                                    <v-layout wrap>
                                        <v-flex xs6>Upgrade fee</v-flex>
                                        <v-flex xs6>10400 TRX</v-flex>

                                        <v-flex xs6>Level slot earnings</v-flex>
                                        <v-flex xs6>31200 TRX</v-flex>

                                        <v-flex xs6>Spillover earnings</v-flex>
                                        <v-flex xs6>20800 TRX</v-flex>

                                        <v-flex xs6><span class="font-weight-bold title">Total</span></v-flex>
                                        <v-flex xs6><span class="font-weight-bold title">52000 TRX</span></v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                    <v-layout wrap align-center :key="7">
                        <v-flex xs12 sm6>
                            <h3 class="title accent--text font-weight-bold">Level 7</h3>
                            <p class="body-1">
                                Participant enters level 7 by paying an upgrade fee of 26000 TRX. After a successful upgrade,
                                the participant then waits for six of his or her downliners from the previous level to join him or
                                her in level 6 through paying the same upgrade fee of 26000 TRX.
                                Each sucessfully upgraded downliner awards the participant 50% of the fee paid.
                                During the upgrade process, the participant will still be able to receive spillover in his or her spillover slots. Four new spillover slots are awarded in this level.
                                At the point when the participant has filled up his 6 level slots, he or she will be able to
                                upgrade to the next level. In the case where the spillover slots have not been completely filled
                                up, they are carried over to the next level and will we filled up by the participants upliners
                                eventually.
                            </p>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-card color="primary white--text">
                                <v-card-title class="font-weight-bold">Calculated earning for level 7</v-card-title>
                                <v-card-text class="white--text">
                                    <v-divider color="white"/>
                                    <v-layout wrap>
                                        <v-flex xs6>Upgrade fee</v-flex>
                                        <v-flex xs6>26000 TRX</v-flex>

                                        <v-flex xs6>Level slot earnings</v-flex>
                                        <v-flex xs6>78000 TRX</v-flex>

                                        <v-flex xs6>Spillover earnings</v-flex>
                                        <v-flex xs6>52000 TRX</v-flex>

                                        <v-flex xs6><span class="font-weight-bold title">Total</span></v-flex>
                                        <v-flex xs6><span class="font-weight-bold title">130000 TRX</span></v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                    <v-layout wrap align-center :key="8">
                        <v-flex xs12 sm6>
                            <h3 class="title accent--text font-weight-bold">Level 8</h3>
                            <p class="body-1">
                                Participant enters level 8 by paying an upgrade fee of 65000 TRX. After a successful upgrade,
                                the participant then waits for six of his or her downliners from the previous level to join him or
                                her in level 6 through paying the same upgrade fee of 65000 TRX.
                                Each sucessfully upgraded downliner awards the participant 50% of the fee paid.
                                During the upgrade process, the participant will still be able to receive spillover in his or her spillover slots. Four new spillover slots are awarded in this level.
                                At the point when the participant has filled up his 6 level slots, he or she will be able to
                                upgrade to the next level. In the case where the spillover slots have not been completely filled
                                up, they are carried over to the next level and will we filled up by the participants upliners
                                eventually.
                            </p>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-card color="primary white--text">
                                <v-card-title class="font-weight-bold">Calculated earning for level 8</v-card-title>
                                <v-card-text class="white--text">
                                    <v-divider color="white"/>
                                    <v-layout wrap>
                                        <v-flex xs6>Upgrade fee</v-flex>
                                        <v-flex xs6>65000 TRX</v-flex>

                                        <v-flex xs6>Level slot earnings</v-flex>
                                        <v-flex xs6>195000 TRX</v-flex>

                                        <v-flex xs6>Spillover earnings</v-flex>
                                        <v-flex xs6>130000 TRX</v-flex>

                                        <v-flex xs6><span class="font-weight-bold title">Total</span></v-flex>
                                        <v-flex xs6><span class="font-weight-bold title">325000 TRX</span></v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-container>
        </v-main>
        <app-footer/>
    </v-app>
</template>

<script src="./HowItWorks.ts"></script>