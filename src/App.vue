<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/friends">Friends</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <input type = "text" v-model="title"/>
    <editor v-model="content"></editor>
    <app-message></app-message>
    <router-view/>
  </div>
</template>

<script>

import Editor from "./components/Editor";
import Message from "./components/Message";

export default {
  name: "app",
  components: {
    Editor, 
    Message
  },

  data(){
    return {
      title: "",
      content: ""
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
