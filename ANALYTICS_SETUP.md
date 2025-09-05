# Google Analytics Setup Guide

This project includes Google Analytics 4 (GA4) tracking to monitor visitor behavior and site performance.

## Setup Instructions

### 1. Create a Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring" to create a new account

### 2. Set up a GA4 Property
1. Choose "Web" as your platform
2. Enter your website details:
   - Website name: "Dunsparce & Drampa - Secret Keys"
   - Website URL: `https://grachay.github.io/dundram-secret-keys/`
   - Industry category: Entertainment
   - Time zone: Your time zone

### 3. Get Your Measurement ID
1. After creating the property, go to Admin → Data Streams
2. Click on your web stream
3. Copy the "Measurement ID" (format: G-XXXXXXXXXX)

### 4. Add the Measurement ID to GitHub Secrets
1. Go to your GitHub repository
2. Navigate to Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Name: `VITE_GA_MEASUREMENT_ID`
5. Value: Your measurement ID (e.g., `G-XXXXXXXXXX`)
6. Click "Add secret"

### 5. Deploy
Once you add the secret and push changes, your next deployment will include Google Analytics tracking.

## What Gets Tracked

### Automatic Tracking
- Page views (Login page, Secret page)
- Button clicks and form submissions
- File downloads
- Video plays
- Scroll depth

### Custom Events
- **Authentication**: Login success/failure
- **Social Media**: Clicks on Spotify, YouTube, Apple Podcasts, PocketCasts links
- **Media Interactions**: Audio player play/pause/close
- **Engagement**: Fullscreen image views, countdown milestones
- **Navigation**: Logout events

### Available Reports
- **Real-time**: See current visitors
- **Audience**: Demographics, interests, technology used
- **Acquisition**: How people find your site
- **Behavior**: What pages they visit, how long they stay
- **Conversions**: Track successful logins and social media clicks

## Viewing Your Analytics
1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property
3. Use the left sidebar to navigate between reports:
   - **Home**: Overview dashboard
   - **Reports**: Detailed analytics
   - **Explore**: Custom analysis
   - **Advertising**: Campaign performance

## Privacy Considerations
- Analytics data is anonymized by default
- IP addresses are automatically anonymized
- No personally identifiable information is collected
- Users can opt out using browser settings or ad blockers

## Testing
To verify analytics is working:
1. Visit your live site
2. Go to Google Analytics → Reports → Realtime
3. You should see your visit appear within a few minutes
4. Test custom events by interacting with the site (login, social links, audio player)
