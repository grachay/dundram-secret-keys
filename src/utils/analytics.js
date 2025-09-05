// Google Analytics utility functions
// This file provides easy-to-use functions for tracking custom events

let isInitialized = false;

/**
 * Initialize Google Analytics
 */
export function initializeAnalytics() {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  
  if (!measurementId || measurementId === 'GA_MEASUREMENT_ID' || isInitialized) {
    console.log('Google Analytics not initialized:', { measurementId, isInitialized });
    return;
  }

  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  script.onload = () => {
    // Initialize gtag
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      enhanced_measurement: true,
      page_title: document.title,
      page_location: window.location.href
    });
    
    isInitialized = true;
    console.log('Google Analytics initialized with ID:', measurementId);
  };
}

/**
 * Track a custom event in Google Analytics
 * @param {string} eventName - The name of the event
 * @param {object} parameters - Additional event parameters
 */
export function trackEvent(eventName, parameters = {}) {
  if (typeof window.gtag !== 'undefined' && isInitialized) {
    window.gtag('event', eventName, {
      event_category: parameters.category || 'engagement',
      event_label: parameters.label || '',
      value: parameters.value || 0,
      ...parameters
    });
    console.log('Analytics event tracked:', eventName, parameters);
  } else {
    console.log('Analytics not available, event not tracked:', eventName, parameters);
  }
}

/**
 * Track page views (useful for SPA navigation)
 * @param {string} pagePath - The page path
 * @param {string} pageTitle - The page title
 */
export function trackPageView(pagePath, pageTitle) {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (typeof window.gtag !== 'undefined' && isInitialized && measurementId) {
    window.gtag('config', measurementId, {
      page_path: pagePath,
      page_title: pageTitle,
    });
    console.log('Page view tracked:', pagePath, pageTitle);
  } else {
    console.log('Analytics not available, page view not tracked:', pagePath, pageTitle);
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
