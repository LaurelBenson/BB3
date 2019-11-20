import Vue from 'vue'
import App from './App.vue'
import 'animate.css/animate.min.css'
import router from './router'

Vue.config.productionTip = false

Vue.component("click-counter",{
  template: "<button @click='count++'>{{count}}</button>",
  data(){
    return {
      count: 0
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
