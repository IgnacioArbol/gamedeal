import Vue from 'vue'
import App from './App.vue'

/* import vuefire */ 
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)

/* import vue router  */

import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueRouter)

/* import notifications */

import Notifications from 'vue-notification'

Vue.use(Notifications)

/* import fontawesome */

import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFontAwesome)

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* import bootstrap */
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


