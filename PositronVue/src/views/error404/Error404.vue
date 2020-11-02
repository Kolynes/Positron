<template>
    <v-app>
        <portal-toolbar/>
        <v-main>
            <v-container grid-list-xl>
                <canvas id="canvas" style="position:absolute; z-index: 0; left: 0; right: 0; opacity: 0.7"/>
                <v-layout wrap align-center style="min-height: 75vh; z-index: 1; position: relative" id="jumbo">
                    <v-flex xs12 >
                        <center class="my-5 mx-5">
                            <h1 class="display-4">404</h1>
                            <h1 class="title">Not Found</h1>
                            <br><br>
                            <v-btn rounded class="primary font-weight-bold text-capitalize" to="/home">Back Home</v-btn>
                        </center>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-main>
        <app-footer/>
    </v-app>
</template>

<script src="./Error404.ts"></script>