<template>
<div id="container">
      <div id ="app">
        <img class="animated infinite bounce delay-2s" alt="CRAVE logo" src="../public/Logo@2x.png">
        <HelloWorld msg ="Hey Luca!"/>
      </div>
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
  padding: $padding1

#app img
  width: 25vw


#container
    width: 50vw
    height: 100vh
    background: $default
    position: absolute
    top:  50%
    left: 50%
    transform: translate(-50%,-50%)
    padding: $padding1
 

</style>
