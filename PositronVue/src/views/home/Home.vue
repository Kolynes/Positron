<template>
    <v-app>
        <portal-toolbar :r="r"/>
        <v-main>
            <v-container grid-list-xl>
                <canvas id="canvas" style="position:absolute; z-index: 0; opacity: 0.7"/>
                <v-layout wrap align-center style="min-height: 75vh; z-index: 1; position: relative" id="jumbo">
                    <v-flex xs12 sm6>
                        <center class="my-5 mx-5 hidden-sm-and-up">
                            <img src="../../assets/images/logoSolo.png" style="width: 60%" class="rotate"/>
                        </center>
                        <p class="font-weight-bold display-1">The best way to gain <span class="accent--text">TRON</span></p>
                        <p class="font-weight-bold grey--text title">Uplifting the financial status of the world through the innovation of a decentralized web</p>
                        <div class="my-5">
                            <v-btn :to="`/signUp?r=${r}`" large rounded class="primary font-weight-bold text-capitalize mb-1 mr-1">get started <v-icon class="ml-3">mdi-arrow-right</v-icon></v-btn>
                            <v-btn large rounded class="accent font-weight-bold text-capitalize mb-1">verify contract</v-btn>
                        </div>
                    </v-flex>
                    <v-flex xs12 sm6>
                        <center class="hidden-xs-only">
                            <img src="../../assets/images/logoSolo.png" style="width: 60%" class="rotate"/>
                        </center>
                    </v-flex>
                </v-layout><br><br>
                <h1 id="howItWorks">How it works</h1>
                <v-card color="primary" width="200" class="pt-1 mb-4"/>
                <p class="body-1">
                    <span class="accent--text font-weight-bold">Positron</span> is a blockchain network whose sole goal is to uplift the financial status of world through the innovation of a decentralized web.
                    The <span class="accent--text font-weight-bold">Positron Smart contract</span> was designed with everybody in mind. It’s easy and inexpensive to join with a registration fee of <span class="accent--text font-weight-bold">100 TRX</span>.
                </p>
                <p class="body-1">
                    The Positron Smart Contract is consists of <span class="accent--text font-weight-bold">8 levels</span>. Each level as the following similar characteristics.
                </p>
                <br>
                <h2 class="accent--text font-weight-bold">The Spillover Matrix</h2>
                <p class="body-1">
                    Positron was designed with everybody mind. We have engineered a system that ensures that <span class="accent--text font-weight-bold">everybody earns something by just being a member</span>. We call this <span class="accent--text font-weight-bold">The Spillover Matrix</span>. This matrix consists of two types of <span class="accent--text font-weight-bold">slots</span> explained as follows.
                </p>
                <br><br>
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
                    </v-flex>
                    <v-flex xs12 sm6>
                        <center>
                            <dummy-level/>
                        </center>
                    </v-flex>
                </v-layout>
                <br><br>
                <v-layout wrap align-center>
                    <v-flex xs12 sm6>
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
                            <dummy-spillover/>
                        </center>
                    </v-flex>
                </v-layout>
                <br><br><br>
                <h2 class="accent--text font-weight-bold">Positron Levels</h2>
                <p class="body-1">
                    <span class="accent--text font-weight-bold">Positron is made up of 8 levels.</span> Each level requires at least 6 level slots to be filled up by
                    downlines (these downlines must be in the same level as the participant) before a participant
                    is permitted to upgrade to the next level.
                </p>
                <v-container grid-list-xl>
                    <v-layout wrap align-center>
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

                                        <v-flex xs6><span class="font-weight-bold">Total</span></v-flex>
                                        <v-flex xs6><span class="font-weight-bold">500 TRX</span></v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-card>
                        </v-flex>
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

                                        <v-flex xs6><span class="font-weight-bold">Total</span></v-flex>
                                        <v-flex xs6><span class="font-weight-bold">1250 TRX</span></v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-card>
                        </v-flex>
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

                                        <v-flex xs6><span class="font-weight-bold">Total</span></v-flex>
                                        <v-flex xs6><span class="font-weight-bold">3250 TRX</span></v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-card>
                        </v-flex>
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

                                        <v-flex xs6><span class="font-weight-bold">Total</span></v-flex>
                                        <v-flex xs6><span class="font-weight-bold">8250 TRX</span></v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-card>
                        </v-flex>
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

                                        <v-flex xs6><span class="font-weight-bold">Total</span></v-flex>
                                        <v-flex xs6><span class="font-weight-bold">20750 TRX</span></v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-card>
                        </v-flex>
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

                                        <v-flex xs6><span class="font-weight-bold">Total</span></v-flex>
                                        <v-flex xs6><span class="font-weight-bold">52000 TRX</span></v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-card>
                        </v-flex>
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

                                        <v-flex xs6><span class="font-weight-bold">Total</span></v-flex>
                                        <v-flex xs6><span class="font-weight-bold">130000 TRX</span></v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-card>
                        </v-flex>
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

                                        <v-flex xs6><span class="font-weight-bold">Total</span></v-flex>
                                        <v-flex xs6><span class="font-weight-bold">325000 TRX</span></v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>

                </v-container>
            </v-container>
            <div style="background: rgba(0,0,0,0.1)" id="contact">
                <v-container>
                    <h1 id="howItWorks">Contact Info</h1>
                    <v-card color="accent" width="200" class="pt-1 mb-4"/>
                </v-container>
            </div>
        </v-main>
        <v-footer app>
            <v-spacer/>
                <center class="caption">Copyright Positron Network &copy; {{new Date().getFullYear()}}</center>
            <v-spacer/>
        </v-footer>
    </v-app>
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