<template>
    <v-sheet color="white--text" dark min-height="40vh" id="footer">
        <canvas id="canvasfooter" style="position:absolute; z-index: 0; left: 0; right: 0; opacity: 0.5"/>
        <v-container fill-height grid-list-xl>
            <v-layout wrap>
                <v-flex xs12 sm3>
                    <v-subheader>Quick Links</v-subheader>
                    <v-list>
                        <v-list-item v-for="(link, index) in links" :key="index" :to="link.to">
                            <v-list-item-content>
                                <span>{{link.name}}</span>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-flex>
                <v-flex xs12 sm3>
                    <v-subheader>Contact Us</v-subheader>
                    <v-list>
                        <v-list-item v-for="(contact, index) in contacts" :key="index" @click="gotoHandle(contact.click)">
                            <v-list-item-action>
                                <v-icon>{{contact.icon}}</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <span>{{contact.name}}</span>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-flex>
                <v-flex xs12 sm3>
                    <v-form @submit.prevent="saveEmail" ref="emailForm">
                        <v-subheader>Subscribe to our Newsletter</v-subheader>
                        <v-text-field prepend-inner-icon="mdi-email" :rules="[emailRule]" label="Email" v-model="email" solo-inverted rounded hide-details/>
                        <v-btn color="primary" rounded class="text-capitalize mt-2" type="submit" :loading="savingEmail">subscribe</v-btn>
                    </v-form>
                </v-flex>
                <v-flex xs12 sm3 align-self-center>
                    <center>
                        <v-avatar size="100">
                            <img src="../../assets/images/logoSolo.png" class="rotate"/>
                        </v-avatar>
                        <br>
                        <img src="../../assets/images/logoInverse.png" style="width: 200px"/>
                        <p>Positron Network copyright &copy; {{new Date().getFullYear()}}</p>
                    </center>
                </v-flex>
            </v-layout>
        </v-container>
    </v-sheet>
</template>

<script src="./AppFooter.ts"></script>