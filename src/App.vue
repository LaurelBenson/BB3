<template>
  <div id ="app">
    <img class="animated infinite bounce delay-2s" alt="Vue logo" src="./assets/logo.png">
    <div class="luca">Hello Laurel</div>
    <HelloWorld msg ="Hey Luca!"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="sass">
@import "css/global.sass"
@import url('https://fonts.googleapis.com/css?family=Playfair+Display+SC:900&display=swap')
@import url('https://fonts.googleapis.com/css?family=Germania+One|Playfair+Display+SC:900&display=swap');

#app
  font-family: 'Montseratt', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px

</style>
