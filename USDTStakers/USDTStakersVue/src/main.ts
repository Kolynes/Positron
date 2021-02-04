import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import "./assets/css/material.css"

Vue.config.productionTip = false;
var retry!: any;

async function main() {
  if((await window.tronWeb?.isConnected())?.fullNode) {
    new Vue({
      vuetify,
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
    clearInterval(retry);
  }
  else if(!retry)
    retry = setInterval(main, 1000);
}

main();