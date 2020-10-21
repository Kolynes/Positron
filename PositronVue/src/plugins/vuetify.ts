import Vue from 'vue';
import Vuetify from 'vuetify';
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);
export default new Vuetify({
    theme: {
        // dark: true,
        themes: {
            light: {
                primary: "#2c2a59",
                accent: "#f54952"
            },
            dark: {
                primary: "#f54952",
                accent: "#2c2a59"
            }
        }
    }
});
