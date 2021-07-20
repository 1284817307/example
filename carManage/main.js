import Vue from 'vue'
import App from './App'
import store from "./store"

require("./mock.js");
Vue.config.productionTip = false
Vue.prototype.$store = store;
App.mpType = 'app'

const app = new Vue({
    ...App,
	store
	
})
app.$mount()