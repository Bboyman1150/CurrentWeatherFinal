// <!-- Name: Brady M -->
// <!-- Final Exam Project -->

// Vue inport
import Vue from 'vue'
import App from './App.vue'

// bootstrap
import 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// vue-router
import VueRouter from 'vue-router'

// vue import
import Weather from './components/Weather.vue'

// Vue.config.productionTip = false

// use vue router
Vue.use(VueRouter)
// set up VueRouter instance
const router = new VueRouter({
  routes:
  [
    // register routes
    // {path:'/', component:HelloWorld},
    {path:'/', component:Weather}
  ],
  // Exclude route from displaying in address bar
  mode:"history"
})

// create Vue
new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
