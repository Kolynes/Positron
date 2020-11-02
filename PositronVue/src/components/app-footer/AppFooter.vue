<template>
    <v-sheet color="white--text" dark min-height="40vh">
        <v-container fill-height grid-list-xl>
            <v-layout wrap>
                <v-flex xs12 sm4>
                    <v-subheader>Quick Links</v-subheader>
                    <v-list>
                        <v-list-item v-for="(link, index) in links" :key="index" :to="link.to">
                            <v-list-item-content>
                                <span>{{link.name}}</span>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-flex>
                <v-flex xs12 sm4>
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
                <v-flex xs12 sm4 align-self-center>
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