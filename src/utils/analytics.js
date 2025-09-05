// Google Analytics utility functions
// This file provides easy-to-use functions for tracking custom events

/**
 * Track a custom event in Google Analytics
 * @param {string} eventName - The name of the event
 * @param {object} parameters - Additional event parameters
 */
export function trackEvent(eventName, parameters = {}) {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, {
      event_category: parameters.category || 'engagement',
      event_label: parameters.label || '',
      value: parameters.value || 0,
      ...parameters
    });
  }
}

/**
 * Track page views (useful for SPA navigation)
 * @param {string} pagePath - The page path
 * @param {string} pageTitle - The page title
 */
export function trackPageView(pagePath, pageTitle) {
  if (typeof gtag !== 'undefined') {
    gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
}

/**
 * Track successful login attempts
 */
export function trackLogin() {
  trackEvent('login', {
    category: 'authentication',
    label: 'password_success'
  });
}

/**
 * Track failed login attempts
 */
export function trackLoginFailed() {
  trackEvent('login_failed', {
    category: 'authentication',
    label: 'password_incorrect'
  });
}

/**
 * Track social media link clicks
 * @param {string} platform - The social media platform (spotify, youtube, etc.)
 */
export function trackSocialClick(platform) {
  trackEvent('social_click', {
    category: 'social_media',
    label: platform,
    platform: platform
  });
}

/**
 * Track video interactions
 * @param {string} videoType - Type of video (trailer, shorts)
 * @param {string} action - Action taken (play, pause, etc.)
 */
export function trackVideoInteraction(videoType, action) {
  trackEvent('video_interaction', {
    category: 'video',
    label: `${videoType}_${action}`,
    video_type: videoType,
    action: action
  });
}

/**
 * Track audio player interactions
 * @param {string} action - Action taken (play, pause, close)
 */
export function trackAudioPlayer(action) {
  trackEvent('audio_player', {
    category: 'media',
    label: `music_${action}`,
    action: action
  });
}

/**
 * Track fullscreen image views
 */
export function trackFullscreenImage() {
  trackEvent('fullscreen_image', {
    category: 'engagement',
    label: 'letter_fullscreen_view'
  });
}

/**
 * Track countdown timer milestones
 * @param {number} daysRemaining - Number of days remaining
 */
export function trackCountdownMilestone(daysRemaining) {
  trackEvent('countdown_milestone', {
    category: 'engagement',
    label: `${daysRemaining}_days_remaining`,
    value: daysRemaining
  });
}

/**
 * Track logout events
 */
export function trackLogout() {
  trackEvent('logout', {
    category: 'authentication',
    label: 'user_logout'
  });
}
