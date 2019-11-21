<template>
  <div class="friends">
    <audio>
      <source src="../assets/f.mp3" type="audio/mpeg">
      <source src="../assets/f.wav" type="audio/wav">
    </audio>
    <div class="header-text">
      <h1 class="animated infinite bounce delay-2s">Hello {{ surprise ? 'Luca' : 'friend' }}</h1>
      <div class="gif"></div>
      <div
        @mouseover="onMouseover"
        @click="surprise = true"
        v-if="!surprise"
        id="trying"
        class=""
      ></div>
      <div
        v-if="surprise"
      >
        <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      surprise: false,
    }
  },
  methods: {
    onMouseover () {
      const audioEl = this.$el.getElementsByTagName('audio')[0]
      audioEl.play()
    },
  },
}
</script>

<style lang="sass">

@keyframes spin
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)

.header-text
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
.gif
  background-image: url("https://media.giphy.com/media/l0JLYJnQDnzSEoAOk/giphy.gif")
  background-size: contain
  background-repeat: no-repeat
  width: 300px
  height: 300px
  animation-name: spin
  animation-duration: 5000ms
  animation-iteration-count: infinite
  animation-timing-function: linear 
  transition: all 2s ease-in-out
.gif:hover
  transform: scale(2) !important

#trying 
  cursor: pointer
  background-image: url("https://media.giphy.com/media/l0JLYJnQDnzSEoAOk/giphy.gif")
  background-position: right
  width: 300px
  height: 300px
  transition: all 300ms ease-in-out
#trying:hover
  transform: scale(2) !important

</style>