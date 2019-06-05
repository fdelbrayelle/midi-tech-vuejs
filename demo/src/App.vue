<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <hello-world msg="Bienvenue au midi technique" btntext="Click me!" />
    <p v-if="seen">Tu me vois !</p>
    <input v-model="message">
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">Retourner le message</button>
    
    <foo />
    <bar v-bind:first-name="message" />

    <b-card-group deck align="center">
      <client v-for="user in users" v-bind:key="user.id">
        <template v-slot:header>
          {{ user.name }}
        </template>
        <p>
          {{ user.description }}
        </p>
        <template v-slot:footer>
          {{ user.id }}
        </template>
      </client>
    </b-card-group>
  </div>
</template>

<script>

import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import HelloWorld from './components/HelloWorld.vue'
import Bar from './components/Bar.vue'
import Client from './components/Client.vue';

Vue.use(BootstrapVue)

export default {
  name: 'app',
  components: {
    HelloWorld,
    Bar,
    Client
  },
  data: function() {
    return {
      seen: true,
      message: "Hello World!",
      users: [
        {
          id: 666,
          name: "François",
          description: "Je suis développeur full-stack"
        },
        {
          id: 420,
          name: "Hubert Louis",
        },
      ]
    }
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
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
