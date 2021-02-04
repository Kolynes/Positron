<template>
    <v-app>
        <v-container justify-center align-center fill-height>
            <v-card>
                <v-card-title>
                    <v-icon class="mr-2">mdi-lock</v-icon>
                    <span class="font-weight-bold body-2">Sign In</span>
                </v-card-title>
                <v-card-text>
                    <v-form @submit.prevent="signIn" ref="signInForm">
                        <v-text-field label="Username" prepend-icon="mdi-account-outline" :rules="[requiredRule]" v-model="username"/>
                        <v-password-field label="Password" prepend-icon="mdi-lock-outline" :rules="[requiredRule]" v-model="password"/>
                        <span class="red--text">{{error}}</span>
                        <v-btn icon type="submit" :loading="signingIn" outlined color="primary">
                            <v-icon>mdi-arrow-right</v-icon>
                        </v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-container>
    </v-app>
</template>

<script src="./SignIn.ts"></script>