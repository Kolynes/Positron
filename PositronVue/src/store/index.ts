import Vuex from "vuex";
import Vue from 'vue';
import Root from "./root";
import Account from "./account";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Root,
        Account
    }
});