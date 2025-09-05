<template>
  <div class="login-container">
    <div class="login-card">
      <div class="image-container">
        <img 
          src="../assets/mysteriousmissive.png" 
          alt="An image of a mysterious missive sealed with a wax stamp" 
          class="login-image clickable-image"
          @click="openFullscreen"
        />
      </div>
      
      <h2 class="login-title">Want to open the letter?</h2>
      
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="input-group">
          <input
            v-model="password"
            type="password"
            placeholder="Enter the password"
            class="password-input"
            :class="{ 'error': showError }"
            @input="clearError"
          />
        </div>
        
        <button type="submit" class="login-button" :disabled="!password.trim()">
          Open the letter
        </button>
        
        <div v-if="showError" class="error-message">
          Incorrect password. Please try again.
        </div>
        <div class="login-hint">
          Need help? Ask for it in the
          <a href="https://discord.gg/calyrex" target="_blank" rel="noopener">Discord!</a>
        </div>
      </form>
    </div>
    
    <!-- Fullscreen Image Modal -->
    <div v-if="showFullscreen" class="fullscreen-modal" @click="closeFullscreen">
      <div class="fullscreen-container">
        <button class="close-fullscreen" @click="closeFullscreen">✕</button>
        <img 
          src="../assets/mysteriousmissive.png" 
          alt="Full size mysterious missive"
          class="fullscreen-image"
          @click.stop
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['login-success'])

const password = ref('')
const showError = ref(false)
const showFullscreen = ref(false)

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

// Fullscreen image methods
const openFullscreen = () => {
  showFullscreen.value = true
  // Prevent body scroll when modal is open
  document.body.style.overflow = 'hidden'
}

const closeFullscreen = () => {
  showFullscreen.value = false
  // Restore body scroll
  document.body.style.overflow = 'auto'
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
  box-sizing: border-box;
}

.login-card {
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 95vw;
  width: 100%;
  max-height: 95vh;
  overflow-y: auto;
  box-sizing: border-box;
}

.image-container {
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.login-image {
  max-height: 40vh;
  max-width: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
}

.clickable-image {
  cursor: pointer;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.clickable-image:hover {
  transform: scale(1.02);
  filter: brightness(1.05);
}

.click-hint {
  color: #666;
  font-size: 0.9rem;
  font-style: italic;
  margin-top: 10px;
  opacity: 0.8;
}

.login-title {
  color: #333;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 10px;
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

/* Fullscreen Modal Styles */
.fullscreen-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  cursor: pointer;
  backdrop-filter: blur(5px);
  overflow: auto;
  padding: 40px 20px;
}

.fullscreen-container {
  position: relative;
  max-width: 95vw;
  max-height: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}

.fullscreen-image {
  max-width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  cursor: default;
  display: block;
}

.close-fullscreen {
  position: absolute;
  top: -40px;
  right: -40px;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10000;
}

.close-fullscreen:hover {
  background: white;
  transform: scale(1.1);
}

@media (max-width: 480px) {
  .login-container {
    padding: 10px;
    align-items: center;
    justify-content: center;
  }
  
  .login-card {
    padding: 20px;
    max-width: 95vw;
    max-height: 95vh;
    margin: 0;
  }
  
  .login-image {
    max-height: 25vh;
    max-width: 90%;
  }
  
  .image-container {
    margin-bottom: 20px;
  }
  
  .login-title {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  
  .login-form {
    gap: 15px;
  }
  
  .password-input {
    padding: 12px 16px;
    font-size: 16px; /* Prevents zoom on iOS */
  }
  
  .login-button {
    padding: 12px 24px;
  }
  
  .click-hint {
    font-size: 0.8rem;
  }
  
  .close-fullscreen {
    top: 10px;
    right: 10px;
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
  
  .fullscreen-container {
    max-width: 98vw;
    max-height: 98vh;
  }
}

/* Medium mobile screens */
@media (max-width: 768px) and (min-width: 481px) {
  .login-container {
    padding: 15px;
  }
  
  .login-card {
    max-width: 85vw;
    padding: 30px;
  }
  
  .login-image {
    max-height: 30vh;
    max-width: 95%;
  }
}
</style>
