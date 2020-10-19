import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import "./assets/css/material.css"
import Positron from './network/Positron'
const TronWeb = require("tronweb");

Vue.config.productionTip = false;

async function init() {
  if(await Positron.getInstance())
    new Vue({
      vuetify,
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  else setInterval(init, 1000);
}

init();