import Vue from 'vue'
import App from './App.vue'
import 'animate.css/animate.min.css'
import router from './router'

Vue.component('greeting', {
  template: '<p>hey there, Im a {{ name }}.     <button v-on:click="changeName" class="animated wobble 1s delay-2s infinite">Change Name</button></p>',
  data: function(){
    return {
      name: "Yoshi"
    }
  },
  methods: {
    changeName: function (){
      this.name = 'Mario';
    }
  }
}); 

new Vue ({
  el:"vue-app-one"
});

new Vue ({
  el:"vue-app-one"
});


Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
