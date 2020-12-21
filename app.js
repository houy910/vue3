// import Vue from 'vue'
// import App from './app.vue'
// new Vue({
//     el: "#app",
//     components: { App },
//     template: '<App/>'
// })

import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
createApp(App).use(router).mount('#app')