<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <hello-world msg="Bienvenue au midi technique" btntext="Click me!" />
    <p v-if="onEstLa">Coucou public</p>
    <input v-model="message">
    <p>{{ message }}</p>
  </div>
</template>

<script>
import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import HelloWorld from './components/HelloWorld.vue'

Vue.use(BootstrapVue)

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data: function() {
    return {
      onEstLa: true,
      message: "Hello World!"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
