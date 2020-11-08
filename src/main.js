import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import * as VueGoogleMaps from "vue2-google-maps";
import './plugins'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBq-f_zOdp6sVHdd0brGcxvHk3Oa3fgPAs",
    libraries: "places"
  }
});

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
