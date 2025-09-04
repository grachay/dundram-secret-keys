<template>
  <div class="login-container">
    <div class="login-card">
      <div class="image-container">
        <img 
          src="../assets/mysteriousmissive.png" 
          alt="An image of a mysterious missive sealed with a wax stamp" 
          class="login-image"
        />
      </div>
      
      <h2 class="login-title">Want to open the letter?</h2>
      
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="input-group">
          <input
            v-model="password"
            type="password"
            placeholder="Enter the keys"
            class="password-input"
            :class="{ 'error': showError }"
            @input="clearError"
          />
        </div>
        
        <button type="submit" class="login-button" :disabled="!password.trim()">
          Open the letter
        </button>
        
        <div v-if="showError" class="error-message">
          Incorrect keys. Please try again. (hint: no capital letters)
        </div>
        <div class="login-hint">
          Need help? Ask for it in the
          <a href="https://discord.gg/calyrex" target="_blank" rel="noopener">Discord!</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['login-success'])

const password = ref('')
const showError = ref(false)

const correctPassword = import.meta.env.VITE_PASSWORD || 'groundfiresteelgrassnormalpsychic'

const handleLogin = () => {
  if (password.value === correctPassword) {
    emit('login-success')
  } else {
    showError.value = true
    password.value = ''
  }
}

const clearError = () => {
  showError.value = false
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #3cbdcb 0%, #bbc69c 100%);
  padding: 20px;
}

.login-card {
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 80vw;
  width: 100%;
}

.image-container {
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.login-image {
  height: 40vh;
  object-fit: contain;
}

.login-title {
  color: #333;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.login-subtitle {
  color: #666;
  font-size: 1rem;
  margin-bottom: 30px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-group {
  position: relative;
}

.password-input {
  width: 100%;
  padding: 15px 20px;
  border: 2px solid #e1e5e9;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.password-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.password-input.error {
  border-color: #e74c3c;
  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
}

.login-button {
  background: linear-gradient(135deg, #3cbdcb 0%, #bbc69c 100%);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: translateY(0);
}

.login-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
}

.login-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.error-message {
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: -10px;
  animation: shake 0.5s ease-in-out;
}

.login-hint {
  color: #666;
  margin-top: -10px;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

@media (max-width: 480px) {
  .login-card {
    padding: 30px 20px;
  }
  
  .login-title {
    font-size: 1.5rem;
  }
}
</style>
