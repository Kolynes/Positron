<template>
    <v-app>
        <portal-toolbar :r="r"/>
        <v-main>
            <v-container grid-list-xl>
                <canvas id="canvas" style="position:absolute; z-index: 0; left: 0; right: 0; opacity: 0.7"/>
                <v-layout wrap align-center style="min-height: 75vh; z-index: 1; position: relative" id="jumbo">
                    <v-flex xs12 sm6>
                        <center class="my-5 mx-5">
                            <img src="../../assets/images/logoSolo.png" style="width: 60%" class="rotate"/>
                        </center>
                    </v-flex>
                    <v-flex xs12 sm6>
                        <p class="font-weight-bold display-1">Financial establishment on the <br><span class="accent--text">TRON Network</span></p>
                        <p class="font-weight-bold grey--text title">Uplifting the financial status of the world through the innovation of a decentralized web</p>
                        
                        <div class="my-5">
                            <h2>Launches in</h2>
                            <v-layout>
                                <v-flex>
                                    <p class="display-1 text-center">{{countDown[0]}}</p>
                                    <p class="body-2 text-center">Days</p>
                                </v-flex>
                                <v-flex>
                                    <p class="display-1 text-center">{{countDown[1]}}</p>
                                    <p class="body-2 text-center">Hours</p>
                                </v-flex>
                                <v-flex>
                                    <p class="display-1 text-center">{{countDown[2]}}</p>
                                    <p class="body-2 text-center">Minutes</p>
                                </v-flex>
                                <v-flex>
                                    <p class="display-1 text-center">{{countDown[3]}}</p>
                                    <p class="body-2 text-center">Seconds</p>
                                </v-flex>
                            </v-layout>
                        </div>
                        <div>
                            <v-btn large rounded color="primary" class="font-weight-bold text-capitalize" @click="showSocialMediaHandlesCTA = !showSocialMediaHandlesCTA">Follow us on social media</v-btn><br>
                            <v-fab-transition v-for="(handle, index) in handles" :key="index">
                                <v-btn bottom right large @click="gotoHandle(handle.link)" icon class="font-weight-bold primary ma-3" color="white" v-if="showSocialMediaHandlesCTA">
                                    <v-icon>{{handle.icon}}</v-icon>
                                </v-btn>
                            </v-fab-transition>
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
            <br><br>
            <div style="background: rgba(0,0,0,0.02); min-height: 60vh" id="Intro">
                <v-container fill-height grid-list-xl style="min-height: 60vh">
                    <v-layout>
                        <v-flex xs12 sm6>
                            <h1 id="intro">This is <span class="accent--text">Positron</span></h1>
                            <v-card color="primary" width="200" class="pt-1 mb-4"/>
                            <p class="title">
                                <span class="accent--text font-weight-bold">Positron's</span> sole goal is to uplift the financial status of world through the innovation of a decentralized web.
                                The <span class="accent--text font-weight-bold">Positron Smart contract</span> was designed with everybody in mind. It’s easy and inexpensive to join with a registration fee of <span class="accent--text font-weight-bold">100 TRX</span>.
                            </p>
                            <v-btn rounded large color="primary" class="font-weight-bold text-capitalize" to="/howItWorks">Know More <v-icon class="ml-3">mdi-arrow-right</v-icon></v-btn>
                        </v-flex>
                    </v-layout>
                </v-container>
            </div>
            <!-- <div style="background: rgba(0,0,0,0.05); min-height: 60vh" id="contact">
                <v-container fill-height grid-list-xl style="min-height: 60vh">
                    <v-layout wrap align-center>
                        <v-flex xs12 sm6>
                            <h1 id="buy">Buy <span class="accent--text">TRX</span> Now!!!</h1>
                            <v-card color="primary" width="200" class="pt-1 mb-5"/>
                            <p class="title font-weight-bold">To participate in Positron, you need <span class="accent--text">TRX</span>! <br>We offer wonderful deals to buy <span class="accent--text">TRX</span> here.</p>
                            <v-btn rounded large color="primary" class="font-weight-bold text-capitalize" :href="`https://wa.me/+17866554074?text=Hello, I would like to buy TRX.`">Buy Now <v-icon class="ml-3">mdi-arrow-right</v-icon></v-btn>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-layout align-center v-if="$vuetify.breakpoint.mdAndUp">
                                <v-flex xs4>
                                    <center>
                                        <v-avatar size="150" color="primary" class="rotate">
                                            <v-icon size="70" color="white">mdi-currency-usd</v-icon>
                                        </v-avatar>
                                    </center>
                                </v-flex>
                                <v-flex xs4>
                                    <center>
                                        <v-icon size="100">mdi-arrow-left-right</v-icon>
                                    </center>
                                </v-flex>
                                <v-flex xs4>
                                    <center>
                                        <v-avatar size="150">
                                            <img src="../../assets/images/logoSolo.png" class="rotate"/>
                                        </v-avatar>
                                    </center>
                                </v-flex>
                            </v-layout>
                            <v-layout align-center v-else>
                                <v-flex xs4>
                                    <center>
                                        <v-avatar size="100" color="primary" class="rotate">
                                            <v-icon size="70" color="white">mdi-currency-usd</v-icon>
                                        </v-avatar>
                                    </center>
                                </v-flex>
                                <v-flex xs4>
                                    <center>
                                        <v-icon size="70">mdi-arrow-left-right</v-icon>
                                    </center>
                                </v-flex>
                                <v-flex xs4>
                                    <center>
                                        <v-avatar size="100">
                                            <img src="../../assets/images/logoSolo.png" class="rotate"/>
                                        </v-avatar>
                                    </center>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-container>
            </div> -->
            <app-footer/>
        </v-main>
        <v-fab-transition>
            <v-btn :key="0" v-if="!showSocialMediaHandles" bottom right fixed fab class="font-weight-bold" color="primary" rounded style="z-index: 1000" @click="showSocialMediaHandles = !showSocialMediaHandles">
                <v-icon>mdi-share</v-icon>
            </v-btn>
            <v-btn :key="1" v-else bottom right fixed fab class="font-weight-bold" color="primary" rounded style="z-index: 1000" @click="showSocialMediaHandles = !showSocialMediaHandles">
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-fab-transition>
        <v-fab-transition v-for="(handle, index) in handles" :key="index">
            <v-btn bottom right fixed small @click="gotoHandle(handle.link)" fab class="font-weight-bold" color="primary" :style="`bottom: ${(index + 1.4) * 70}px; right: 25px;`" v-if="showSocialMediaHandles">
                <v-icon>{{handle.icon}}</v-icon>
            </v-btn>
        </v-fab-transition>
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