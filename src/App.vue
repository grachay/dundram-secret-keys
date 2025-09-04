<script setup>
import { ref } from 'vue'
import LoginPage from './components/LoginPage.vue'
import SecretPage from './components/SecretPage.vue'

const isAuthenticated = ref(false)

const handleLoginSuccess = () => {
  isAuthenticated.value = true
}

const handleLogout = () => {
  isAuthenticated.value = false
}
</script>

<template>
  <div id="app">
    <LoginPage 
      v-if="!isAuthenticated" 
      @login-success="handleLoginSuccess"
    />
    <SecretPage 
      v-else 
      @logout="handleLogout"
    />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}
</style>
