<template>
  <div class="secret-page">
    <header class="secret-header">
      <button @click="logout" class="logout-button">← Go back</button>
      <h1 class="welcome-title">🎉 Congrats, you've opened the letter! 🎉</h1>
      
      <!-- Audio Player -->
      <div class="audio-player" v-if="showAudioPlayer">
        <div class="audio-controls">
          <button @click="toggleAudio" class="audio-button">
            <span v-if="isPlaying">🔊 Pause Music</span>
            <span v-else>🎵 Play Music</span>
          </button>
          <button @click="closeAudioPlayer" class="close-audio">✕</button>
        </div>
        <audio 
          ref="audioPlayer"
          loop
          preload="auto"
          @loadeddata="onAudioLoaded"
          @play="isPlaying = true"
          @pause="isPlaying = false">
          <source src="../assets/musicbox.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </div>
    </header>

    <main class="secret-content">
      <div class="success-card">
        <img 
          src="../assets/lettercontents.png" 
          alt="A mysterious letter that reads: Today is the day of the castle's Volcarona Festival, and the perfect opportunity to complete our job.
    King Harmonia and his son will be out of the castle participating in the Hunt in preparation of tonight's feast, and the castle's doors are open to the public for tours.
    We will use this opportunity to steal the arcane sheet  music. As you know, the Prince intends to use this music to force all of the Pokemon in the Kingdom of the Vale to war with the Other Side of the Kingdom.
    We cannot allow this to happen — it would mean devastation for Pokemon and people alike.
       Through reconnaissance, we have gathered that the sheet music is held in King Harmonia's private chambers on the top floor of the castle. However, it is locked behind a door with 6 keyholes, requiring one key hidden on each floor of the castle, save for the final floor.
    You will not be working alone. Meet the others in Liberty Alley outside the castle at noon. Inside the castle, those bearing our insignia will assist in this task as well.
    King Harmonia and his hunting party will return at any moment, so be vigilant.
    Stay safe, and good luck. It's signed with the symbol of a ribbon wrapped around a sword.
" 
          class="success-image clickable-image"
          @click="openFullscreen"
        />
        <div class="tune-in-info">
          <h3>Want to know what happens next?</h3>
          <div class="release-date">Tune into <i>Legends of the Vale: Part 1</i> on Tuesday, September 9th at 12 pm ET</div>
          <div class="countdown-container">
            <div class="countdown-timer">
              <div class="countdown-item">
                <span class="countdown-number">{{ countdown.days }}</span>
                <span class="countdown-label">Days</span>
              </div>
              <div class="countdown-item">
                <span class="countdown-number">{{ countdown.hours }}</span>
                <span class="countdown-label">Hours</span>
              </div>
              <div class="countdown-item">
                <span class="countdown-number">{{ countdown.minutes }}</span>
                <span class="countdown-label">Minutes</span>
              </div>
              <div class="countdown-item">
                <span class="countdown-number">{{ countdown.seconds }}</span>
                <span class="countdown-label">Seconds</span>
              </div>
            </div>
            <div v-if="isReleased" class="released-content">
              <div class="released-message">
                🎉 Legends of the Vale: Part 1 is now available! 🎉
              </div>
              <div class="new-episode-container">
                <div class="spotify-container">
                  <iframe 
                    data-testid="embed-iframe" 
                    style="border-radius:12px" 
                    src="https://open.spotify.com/embed/episode/NEW_EPISODE_ID_HERE?utm_source=generator&t=0" 
                    width="100%" 
                    height="352" 
                    frameBorder="0" 
                    allowfullscreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                    class="spotify-player">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Social Media Links -->
        <div class="social-media-links">
          <h4>Find it on:</h4>
          <div class="social-icons">
            <a href="https://open.spotify.com/show/49ytTCxUv495mj2zb2INhM?si=9cb0099fb3f94b9f" target="_blank" rel="noopener noreferrer" class="social-icon spotify-icon">
              <img src="../assets/spotify.png" alt="Spotify" class="platform-logo" />
            </a>
            <a href="https://www.youtube.com/@dunsparcedrampa" target="_blank" rel="noopener noreferrer" class="social-icon youtube-icon">
              <img src="../assets/youtube.png" alt="YouTube" class="platform-logo" />
            </a>
            <a href="https://podcasts.apple.com/us/podcast/dunsparce-drampa/id1578571454" target="_blank" rel="noopener noreferrer" class="social-icon apple-icon">
              <img src="../assets/apple.png" alt="Apple Podcasts" class="platform-logo" />
            </a>
            <a href="https://pocketcasts.com/podcast/dunsparce-drampa/70302e20-d1d2-0139-9b41-0acc26574db2" target="_blank" rel="noopener noreferrer" class="social-icon pocketcasts-icon">
              <img src="../assets/PocketCasts.png" alt="Pocketcasts" class="platform-logo" />
            </a>
          </div>
        </div>
      </div> 
      <div class="success-card trailer-card">
        <h3>Watch the trailer again →</h3>
        <div class="video-container">
          <iframe 
            src="https://www.youtube.com/embed/wkg4LLM7ZXk" 
            title="Legends of the Vale Trailer"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen
            class="trailer-video">
          </iframe>
        </div>
      </div>
      <div class="success-card spotify-card">
        <h3>Listen to our first campaign →</h3>
        <div class="spotify-container">
          <iframe 
            data-testid="embed-iframe" 
            style="border-radius:12px" 
            src="https://open.spotify.com/embed/episode/76uFkLs57ttIN2VCNXiqvO?utm_source=generator&t=0" 
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            class="spotify-player">
          </iframe>
        </div>
      </div>
      <div class="success-card social-card">
        <h3>Check out our latest shorts →</h3>
        <div class="social-content">          
          <div class="youtube-shorts-section">
            <div class="shorts-grid">
              <div class="video-container shorts-container">
                <iframe 
                  src="https://www.youtube.com/embed/eekhL9JKRWI?si=5rKPbkCIfnACIGTU" 
                  title="Latest YouTube Short 1"
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowfullscreen
                  class="shorts-video">
                </iframe>
              </div>
              <div class="video-container shorts-container">
                <iframe 
                  src="https://www.youtube.com/embed/bxOILaBvQAc?si=0T2QldZdvQ6HNSDk" 
                  title="Latest YouTube Short 2"
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowfullscreen
                  class="shorts-video">
                </iframe>
              </div>
              <div class="video-container shorts-container">
                <iframe 
                  src="https://www.youtube.com/embed/U8-2_NMK9lw?si=QBIUBFSSHUAlSyiq"
                  title="Latest YouTube Short 3"
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowfullscreen
                  class="shorts-video">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    
    <!-- Fullscreen Image Modal -->
    <div v-if="showFullscreen" class="fullscreen-modal" @click="closeFullscreen">
      <div class="fullscreen-container">
        <button class="close-fullscreen" @click="closeFullscreen">✕</button>
        <img 
          src="../assets/lettercontents.png" 
          alt="Full size letter content"
          class="fullscreen-image"
          @click.stop
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['logout'])

const countdown = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

const isReleased = ref(false)
let countdownInterval = null

// Audio player state
const audioPlayer = ref(null)
const isPlaying = ref(false)
const showAudioPlayer = ref(true)

// Fullscreen image state
const showFullscreen = ref(false)

// Set the release date (September 9th, 2025 at 12:00 PM ET)
const releaseDate = new Date('2025-09-09T16:00:00.000Z') // 12 PM ET = 4 PM UTC

const updateCountdown = () => {
  const now = new Date().getTime()
  const distance = releaseDate.getTime() - now

  if (distance < 0) {
    isReleased.value = true
    countdown.value = { days: 0, hours: 0, minutes: 0, seconds: 0 }
    if (countdownInterval) {
      clearInterval(countdownInterval)
    }
    return
  }

  countdown.value = {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000)
  }
}

const logout = () => {
  emit('logout')
}

// Audio player methods
const toggleAudio = () => {
  if (audioPlayer.value) {
    if (isPlaying.value) {
      audioPlayer.value.pause()
    } else {
      audioPlayer.value.play().catch(error => {
        console.log('Audio autoplay prevented:', error)
      })
    }
  }
}

const closeAudioPlayer = () => {
  if (audioPlayer.value) {
    audioPlayer.value.pause()
  }
  showAudioPlayer.value = false
}

const onAudioLoaded = () => {
  // Try to autoplay when audio is loaded
  if (audioPlayer.value) {
    audioPlayer.value.play().catch(error => {
      console.log('Audio autoplay prevented by browser:', error)
      // Autoplay was prevented, user will need to click play
    })
  }
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

onMounted(() => {
  updateCountdown()
  countdownInterval = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (countdownInterval) {
    clearInterval(countdownInterval)
  }
})
</script>

<style scoped>
.tune-in-info { 
  color: #666;
  margin-top: 20px;
}

.tune-in-info h3 {
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: 600;
}

.release-date {
  color: #555;
  font-size: 1.1rem;
  margin-bottom: 20px;
  font-weight: 500;
}

.countdown-container {
  margin-top: 20px;
}

.countdown-timer {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin: 20px 0;
}

.countdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #3cbdcb 0%, #bbc69c 100%);
  color: white;
  padding: 15px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 70px;
  transition: transform 0.3s ease;
}

.countdown-item:hover {
  transform: translateY(-2px);
}

.countdown-number {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.countdown-label {
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 5px;
  opacity: 0.9;
}

.released-message {
  background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
  color: white;
  padding: 20px;
  border-radius: 12px;
  font-size: 1.2rem;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
}

.released-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.new-episode-container h4 {
  color: #333;
  font-size: 1.3rem;
  margin-bottom: 15px;
  font-weight: 600;
}

/* Mobile responsiveness for countdown */
@media (max-width: 480px) {
  .countdown-timer {
    gap: 8px; /* Smaller gap between items */
    justify-content: center;
    flex-wrap: nowrap; /* Prevent wrapping */
  }
  
  .countdown-item {
    padding: 8px 12px; /* Reduced padding */
    min-width: 55px; /* Smaller minimum width */
    flex: 1; /* Allow items to share space equally */
    max-width: 70px; /* Prevent items from getting too wide */
  }
  
  .countdown-number {
    font-size: 1.3rem; /* Slightly smaller font */
  }
  
  .countdown-label {
    font-size: 0.65rem; /* Smaller label text */
  }
  
  .tune-in-info h3 {
    font-size: 1.2rem;
  }
  
  .release-date {
    font-size: 1rem;
  }
}

/* Social Media Links Styles */
.social-media-links {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.social-media-links h4 {
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 15px;
  font-weight: 600;
  text-align: center;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;
  width: 50px;
  height: 50px;
  background: white;
  border: 2px solid #e0e0e0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.social-icon:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  border-color: transparent;
}

.platform-logo {
  width: 28px;
  height: 28px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.social-icon:hover .platform-logo {
  transform: scale(1.1);
}

.spotify-icon:hover {
  background: #1DB954;
  box-shadow: 0 6px 20px rgba(29, 185, 84, 0.3);
}

.youtube-icon:hover {
  background: #FF0000;
  box-shadow: 0 6px 20px rgba(255, 0, 0, 0.3);
}

.apple-icon:hover {
  background: #A855F7;
  box-shadow: 0 6px 20px rgba(168, 85, 247, 0.3);
}

.pocketcasts-icon:hover {
  background: #F43E37;
  box-shadow: 0 6px 20px rgba(244, 62, 55, 0.3);
}

/* Mobile responsiveness for social media links */
@media (max-width: 480px) {
  .social-icons {
    gap: 10px;
  }
  
  .social-icon {
    width: 45px;
    height: 45px;
    padding: 6px;
  }
  
  .platform-logo {
    width: 24px;
    height: 24px;
  }
  
  .social-media-links h4 {
    font-size: 1.1rem;
  }
}

.secret-page {
  min-height: 100vh;
  min-width: 100vw;
  background: linear-gradient(135deg, #3cbdcb 0%, #bbc69c 100%);
  padding: 20px;
}

.secret-header {
  text-align: center;
  padding: 40px 0;
  position: relative;
}

.logo {
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

.welcome-title {
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  animation: bounce 1s ease-in-out;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.logout-button {
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  min-height: 44px; /* Minimum touch target size for accessibility */
  -webkit-tap-highlight-color: transparent; /* Remove tap highlight on mobile */
}

.logout-button:hover {
  background: white;
  color: #27ae60;
  transform: translateY(-2px);
}

.audio-player {
  position: fixed;
  top: 30px;
  right: 20px;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.audio-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.audio-button {
  background: linear-gradient(135deg, #3cbdcb 0%, #bbc69c 100%);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.audio-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.close-audio {
  background: rgba(255, 255, 255, 0.8);
  color: #666;
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  transition: all 0.3s ease;
}

.close-audio:hover {
  background: #ff4757;
  color: white;
  transform: scale(1.1);
}

/* Mobile responsiveness for audio player and header layout */
@media (max-width: 768px) {
  .audio-player {
    top: 10px;
    right: 10px;
    padding: 10px;
  }
  
  .audio-button {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
  
  .close-audio {
    width: 20px;
    height: 20px;
    font-size: 0.7rem;
  }
  
  .welcome-title {
    font-size: 2rem;
    margin-top: 60px; /* Add space to avoid overlap with back button */
    padding: 0 80px; /* Add horizontal padding to avoid button overlap */
    line-height: 1.2; /* Tighter line spacing on mobile */
  }
  
  .logout-button {
    top: 15px;
    left: 15px;
    padding: 8px 16px;
    font-size: 0.9rem;
    z-index: 10; /* Ensure button stays on top */
  }
}

/* Additional mobile responsiveness for very small screens */
@media (max-width: 480px) {
  .welcome-title {
    font-size: 1.8rem;
    margin-top: 50px;
    padding: 0 70px;
    line-height: 1.1; /* Even tighter line spacing on very small screens */
  }
  
  .logout-button {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
}

.secret-content {
  max-width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px); /* Account for header height */
  gap: 20px;
}

.success-card {
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 90vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.success-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.success-card:not(:first-child) {
  padding: 30px;
  cursor: pointer;
}

.success-card:not(:first-child) div {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
}

.trailer-card h3 {
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-weight: 600;
}

.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.trailer-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
}

.trailer-card p {
  margin-top: 15px;
  color: #666;
  font-style: italic;
}

.spotify-card h3 {
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-weight: 600;
}

.spotify-container {
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  margin-bottom: 15px;
}

.spotify-player {
  display: block;
  width: 100%;
  border: none;
}

.spotify-card p {
  margin-top: 15px;
  color: #666;
  font-style: italic;
}

.social-card h3 {
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-weight: 600;
}

.social-content {
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  margin-bottom: 20px;
}

.youtube-shorts-section {
  width: 100%;
}

.youtube-shorts-section h4 {
  color: #333;
  font-size: 1.3rem;
  margin-bottom: 15px;
  font-weight: 600;
  text-align: center;
}

.shorts-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;
}

/* Desktop: 3 shorts side by side */
@media (min-width: 1024px) {
  .shorts-grid {
    flex-direction: row;
    justify-content: center;
    gap: 20px;
  }
}

.shorts-container {
  position: relative;
  margin-bottom: 15px;
  padding-bottom: 177.78%; /* 9:16 aspect ratio for vertical shorts */
  max-width: 315px; /* Default mobile-friendly width */
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
}

/* Desktop specific sizing */
@media (min-width: 1024px) {
  .shorts-container {
    max-width: 250px; /* Smaller width to fit 3 side by side */
    max-height: 445px; /* Proportional to max-width for 9:16 ratio */
    padding-bottom: 0; /* Remove aspect ratio padding */
    height: 445px; /* Fixed height instead */
    margin-bottom: 0; /* Remove bottom margin in grid */
  }
}

.shorts-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
}

/* Mobile responsiveness for social links */
@media (max-width: 480px) {
  .youtube-shorts-section h4 {
    font-size: 1.1rem;
  }
  
  .shorts-container {
    max-width: 280px; /* Smaller on mobile */
  }
  
  .shorts-grid {
    gap: 15px; /* Smaller gap on mobile */
  }
}

/* Tablet responsiveness for shorts */
@media (max-width: 768px) {
  .shorts-container {
    max-width: 300px;
  }
  
  .shorts-grid {
    gap: 18px; /* Medium gap on tablet */
  }
}

.success-card h2 {
  color: #27ae60;
  font-size: 2rem;
  margin-bottom: 15px;
}

.success-card > p {
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 40px;
  line-height: 1.6;
}

.success-image {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  margin-bottom: 30px;
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
  margin-top: -20px;
  margin-bottom: 20px;
  opacity: 0.8;
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

/* Mobile responsiveness for fullscreen modal */
@media (max-width: 768px) {
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
  
  .click-hint {
    font-size: 0.8rem;
  }
}
</style>
